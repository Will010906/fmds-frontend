import api from './api'

// Lógica de pago compartida entre la página de planes (/registro) y la compra
// rápida (/checkout). Tokeniza la tarjeta en el navegador con Openpay (la llave
// pública) y ejecuta el cargo en el backend. El número de tarjeta nunca pasa
// por nuestro servidor: solo viaja el token de un solo uso.
//
// tarjeta: { numero, nombre, mes, anio, cvv }
// Devuelve una promesa que resuelve con la respuesta del checkout,
// o rechaza con un Error cuyo mensaje ya está listo para mostrarse al usuario.
export function pagarConTarjeta({ tarjeta, idEvento, cantidad, montoTotal, nombre, correo }) {
  return new Promise((resolve, reject) => {
    const OpenPay = window.OpenPay
    if (!OpenPay) {
      reject(new Error('No se pudo cargar el sistema de pagos. Recarga la página e intenta de nuevo.'))
      return
    }

    OpenPay.setId(import.meta.env.VITE_OPENPAY_MERCHANT_ID)
    OpenPay.setApiKey(import.meta.env.VITE_OPENPAY_PUBLIC_KEY)
    OpenPay.setSandboxMode(true)

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
            montoTotal,
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
