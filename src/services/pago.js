import api from './api'

// Lógica de pago compartida entre la página de planes (/registro) y la compra
// rápida (/checkout). Tokeniza la tarjeta en el navegador con Openpay (la llave
// pública) y ejecuta el cargo en el backend. El número de tarjeta nunca pasa
// por nuestro servidor: solo viaja el token de un solo uso.
//
// Se manda qué se compra, no cuánto cuesta: con idPaquete, o bien idEvento más
// cantidad. El servidor consulta el precio en la base de datos y cobra ese, así
// que manipular la petición desde el navegador no cambia el importe.
//
// tarjeta: { numero, nombre, mes, anio, cvv }
// Devuelve una promesa que resuelve con la respuesta del checkout,
// o rechaza con un Error cuyo mensaje ya está listo para mostrarse al usuario.
export function pagarConTarjeta({ tarjeta, idEvento, cantidad, idPaquete, nombre, correo }) {
  return new Promise((resolve, reject) => {
    const OpenPay = window.OpenPay
    if (!OpenPay) {
      reject(new Error('No se pudo cargar el sistema de pagos. Recarga la página e intenta de nuevo.'))
      return
    }

    OpenPay.setId(import.meta.env.VITE_OPENPAY_MERCHANT_ID)
    OpenPay.setApiKey(import.meta.env.VITE_OPENPAY_PUBLIC_KEY)
    // Modo prueba por defecto. Para cobros reales define VITE_OPENPAY_SANDBOX=false
    // en el entorno (Vercel). Si la variable falta, se mantiene en sandbox por
    // seguridad, para no cobrar tarjetas reales por accidente.
    OpenPay.setSandboxMode(import.meta.env.VITE_OPENPAY_SANDBOX !== 'false')

    const deviceSessionId = OpenPay.deviceData.setup()

    OpenPay.token.create(
      {
        card_number:      String(tarjeta.numero).replace(/\s/g, ''),
        holder_name:      tarjeta.nombre,
        expiration_year:  tarjeta.anio,
        expiration_month: tarjeta.mes,
        cvv2:             tarjeta.cvv,
      },
      async (response) => {
        try {
          const { data } = await api.post('/checkout', {
            token_id: response.data.id,
            deviceSessionId,
            idEvento,
            cantidad,
            idPaquete,
            nombre,
            correo,
          })
          resolve(data)
        } catch (err) {
          reject(new Error(err.response?.data?.error || 'Error al procesar el pago'))
        }
      },
      (err) => {
        reject(new Error(err.data?.description || 'No pudimos validar tu tarjeta. Revisa los datos.'))
      }
    )
  })
}
