<template>
  <div class="page">

    <AppNav />

    <!-- HERO -->
    <div class="rg-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Registro & Pago Seguro</span></div>
      <h1 class="rg-title"><strong>Elige tu</strong> <em>plan</em></h1>
      <p class="rg-sub">Selecciona el acceso que mejor se adapte a tu perfil. Proceso 100% seguro con confirmaciÃ³n inmediata.</p>
    </div>

    <!-- PLANES -->
    <div class="rg-planes">
      <div
        v-for="plan in planesIndividuales"
        :key="plan.i"
        class="plan-card"
        :class="{ selected: planActivo === plan.i, featured: plan.featured }"
        @click="planActivo = plan.i"
      >
        <div class="plan-badge" v-if="plan.badge" :class="plan.badgeColor">{{ plan.badge }}</div>
        <div class="plan-lbl">{{ plan.label }}</div>
        <div class="plan-price">
          <span class="plan-cur" v-if="plan.precio !== 'Gratis'">$</span>
          <span class="plan-num" :class="{ teal: plan.precio === 'Gratis' }">{{ plan.precio }}</span>
          <span class="plan-per" v-if="plan.precio !== 'Gratis'">MXN</span>
        </div>
        <div class="plan-save" v-if="plan.precio !== 'Gratis' && eventoActual">
          Boleto para <strong>{{ eventoActual.titulo }}</strong> Â· {{ formatFecha(eventoActual.fecha) }}
        </div>
        <div class="plan-name">{{ plan.nombre }}</div>
        <div class="plan-desc">{{ plan.desc }}</div>
        <ul class="plan-feats">
          <li v-for="f in plan.feats" :key="f">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            {{ f }}
          </li>
        </ul>
        <div v-if="plan.featured" class="plan-sel-dot"></div>
      </div>
    </div>

    <!-- PAQUETES (solo si la federaciÃ³n cargÃ³ alguno para este evento) -->
    <div class="rg-paq" v-if="planesPaquete.length">
      <div class="paq-hd">
        <div class="cmp-title"><strong>Â¿Vienen</strong> <em>en equipo?</em></div>
        <p class="paq-sub">Los paquetes incluyen varios accesos en una sola compra y cuestan menos que comprarlos por separado.</p>
      </div>
      <div class="paq-grid">
        <div
          v-for="(plan, k) in planesPaquete"
          :key="plan.i"
          class="paq-card"
          :class="{ selected: planActivo === plan.i, featured: plan.featured }"
          @click="planActivo = plan.i"
        >
          <div class="paq-badge" v-if="plan.badge">{{ plan.badge }}</div>
          <div class="paq-lbl">{{ plan.label }}</div>
          <div class="paq-nm">{{ plan.nombre }}</div>

          <div class="paq-precios">
            <span class="paq-lista">${{ listaDe(paquetes[k]).toLocaleString('es-MX') }}</span>
            <span class="paq-ahorro">Ahorras ${{ ahorroDe(paquetes[k]).toLocaleString('es-MX') }}</span>
          </div>
          <div class="paq-price">
            <span class="paq-cur">$</span><span class="paq-num">{{ Number(plan.precio).toLocaleString('es-MX') }}</span>
            <span class="paq-mxn">MXN</span>
          </div>
          <div class="paq-unit">
            â‰ˆ ${{ porPersonaDe(paquetes[k]).toLocaleString('es-MX') }} por persona Â· vs {{ paquetes[k].cantidadBoletos }} boletos por separado
          </div>

          <p class="paq-desc">{{ plan.desc }}</p>
          <ul class="plan-feats">
            <li v-for="f in plan.feats" :key="f">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              {{ f }}
            </li>
          </ul>
          <div class="paq-sel">{{ planActivo === plan.i ? 'âœ“ Seleccionado' : 'Elegir este paquete' }}</div>
        </div>
      </div>
    </div>

    <!-- TABLA COMPARATIVA -->
    <div class="rg-compara">
      <div class="cmp-title"><strong>Compara los</strong> <em>planes</em></div>
      <div class="cmp-scroll">
        <table class="cmp-t">
          <thead>
            <tr>
              <th class="cmp-feat-h">Beneficios</th>
              <th
                v-for="plan in planesIndividuales"
                :key="plan.i"
                class="cmp-plan-h"
                :class="{ active: planActivo === plan.i }"
                @click="planActivo = plan.i"
              >
                <div class="cmp-plan">{{ plan.nombre.replace('Acceso ', '') }}</div>
                <div class="cmp-precio">{{ plan.precio === 'Gratis' ? 'Gratis' : '$' + plan.precio + ' MXN' }}</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fila in comparativa" :key="fila.nombre">
              <td class="cmp-feat">{{ fila.nombre }}</td>
              <td v-for="(valor, i) in fila.valores" :key="i" class="cmp-v" :class="{ active: planActivo === i }">
                <span v-if="valor === true" class="cmp-si">âœ“</span>
                <span v-else-if="valor === false" class="cmp-no">â€”</span>
                <span v-else class="cmp-txt">{{ valor }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="cmp-nota">Haz clic en una columna para seleccionar ese plan.</p>
    </div>

    <!-- FORM + RESUMEN -->
    <div class="rg-body">
      <div class="rg-left">

        <!-- Datos personales -->
        <div class="rg-sec">
          <div class="rg-sec-h">
            <div class="rg-sec-ic"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
            <span>Datos personales</span>
          </div>
          <div class="rg-grid">
            <div class="field">
              <label class="field-label">Nombre(s)</label>
              <input v-model="form.nombre" type="text" placeholder="AndrÃ©s" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Apellidos</label>
              <input v-model="form.apellidos" type="text" placeholder="LÃ³pez Gaecia" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Correo electrÃ³nico</label>
              <input v-model="form.correo" type="email" placeholder="correo@ejemplo.com" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">TelÃ©fono</label>
              <input v-model="form.telefono" type="tel" placeholder="+52 (443) 000-0000" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">InstituciÃ³n</label>
              <input v-model="form.institucion" type="text" placeholder="UTM, UNAM, TEC..." class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Estado</label>
              <input v-model="form.estado" type="text" placeholder="MichoacÃ¡n" class="field-input" />
            </div>
          </div>
        </div>

        <!-- MÃ©todo de pago -->
        <div class="rg-sec" v-if="planes[planActivo].precio !== 'Gratis'">
          <div class="rg-sec-h">
            <div class="rg-sec-ic"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
            <span>MÃ©todo de pago</span>
          </div>
          <div class="rg-grid">
            <div class="field full">
              <label class="field-label">NÃºmero de tarjeta</label>
              <input v-model="pago.numero" type="text" placeholder="1234 5678 9012 3456" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">ExpiraciÃ³n</label>
              <input v-model="pago.expiracion" type="text" placeholder="MM / AA" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">CVV</label>
              <input v-model="pago.cvv" type="text" placeholder="---" class="field-input" />
            </div>
            <div class="field full">
              <label class="field-label">Nombre en la tarjeta</label>
              <input v-model="pago.nombre" type="text" placeholder="Como aparece en la tarjeta" class="field-input" />
            </div>
          </div>
          <p class="pay-secure">ðŸ”’ Pago procesado de forma segura con Openpay. Aceptamos Visa, MasterCard y American Express.</p>
        </div>

      </div>

      <!-- RESUMEN -->
      <div class="rg-summary">
        <div class="sum-title">Resumen de tu registro</div>
        <div class="sum-event" v-if="eventoActual">
          <div class="sum-ev-tag">Evento</div>
          <div class="sum-ev-nm">{{ eventoActual.titulo }}</div>
          <div class="sum-ev-dt">{{ formatFecha(eventoActual.fecha) }}</div>
        </div>
        <div class="sum-event" v-else>
          <div class="sum-ev-nm">No hay eventos disponibles por el momento</div>
        </div>
        <div class="sum-plan">
          <div class="sum-plan-tag">Plan seleccionado</div>
          <div class="sum-plan-nm">{{ planes[planActivo].nombre }}</div>
          <div class="sum-plan-desc">{{ planes[planActivo].sumDesc }}</div>
        </div>
        <div class="sum-lines">
          <div class="sum-line"><span>Subtotal</span><span>{{ planes[planActivo].precio === 'Gratis' ? 'Gratis' : '$' + planes[planActivo].precio + ' MXN' }}</span></div>
          <div class="sum-line"><span>Cargo por servicio</span><span>$0 MXN</span></div>
          <div class="sum-line total"><span>Total</span><span :class="{ teal: planes[planActivo].precio === 'Gratis' }">{{ planes[planActivo].precio === 'Gratis' ? 'Gratis' : '$' + planes[planActivo].precio + ' MXN' }}</span></div>
        </div>
        <button class="sum-btn" @click="confirmar" :disabled="!eventoActual">
          {{ planes[planActivo].precio === 'Gratis' ? 'Enviar mi propuesta â†’' : 'Confirmar y pagar â†’' }}
        </button>
        <p class="sum-secure">ðŸ”’ Pago 100% seguro Â· con Openpay</p>
        <div class="sum-incl">
          <div class="sum-incl-t">Incluye en tu plan</div>
          <div class="sum-incl-i" v-for="f in planes[planActivo].feats.slice(0,4)" :key="f">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            {{ f }}
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import api from '../services/api'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'
import { pagarConTarjeta } from '../services/pago'

const router = useRouter()
const planActivo = ref(0)
const eventoActual = ref(null)
const paquetes = ref([])

const form = ref({ nombre: '', apellidos: '', correo: '', telefono: '', institucion: '', estado: '' })
const pago = ref({ numero: '', expiracion: '', cvv: '', nombre: '' })

// timeZone:'UTC' evita que la fecha del evento se muestre un dÃ­a antes en MÃ©xico
const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  })
}

// Se registra al evento mÃ¡s prÃ³ximo que todavÃ­a no ocurre. Si ya pasaron todos,
// se toma el primero de la lista para no dejar la pÃ¡gina sin contexto.
const cargarEvento = async () => {
  const res = await api.get('/eventos')
  const ahora = Date.now()
  const futuros = res.data.filter((e) => new Date(e.fecha).getTime() >= ahora)
  eventoActual.value = futuros[0] || res.data[0] || null
}

// Paquetes activos del evento. Si la federaciÃ³n no ha cargado ninguno, el
// arreglo queda vacÃ­o y la secciÃ³n de paquetes simplemente no se muestra.
const cargarPaquetes = async () => {
  if (!eventoActual.value) return
  try {
    const res = await api.get('/paquetes', { params: { idEvento: eventoActual.value.idEvento } })
    paquetes.value = res.data
  } catch {
    paquetes.value = []
  }
}

onMounted(async () => {
  await cargarEvento()
  await cargarPaquetes()
})

// Ahorro de un paquete frente a comprar esos boletos por separado. Los dos
// nÃºmeros salen de la base de datos, asÃ­ que no puede quedar desfasado.
const ahorroDe = (paquete) => {
  const porSeparado = Number(paquete.precioEvento) * paquete.cantidadBoletos
  return Math.round(porSeparado - Number(paquete.precio))
}
const listaDe = (paquete) => Math.round(Number(paquete.precioEvento) * paquete.cantidadBoletos)
const porPersonaDe = (paquete) => Math.round(Number(paquete.precio) / paquete.cantidadBoletos)

// El precio sale del evento: es el mismo que se le cobra a la tarjeta.
const precioEvento = computed(() => {
  if (!eventoActual.value) return null
  return Math.round(Number(eventoActual.value.precio))
})

// Solo hay dos formas reales de entrar: comprando el boleto o presentando una
// ponencia aprobada. El acceso de ponente no se cobra aquÃ­, se solicita.
const planes = computed(() => [
  {
    label: 'Acceso al congreso',
    badge: 'Disponible', badgeColor: 'green',
    precio: precioEvento.value === null ? 'â€”' : String(precioEvento.value),
    nombre: 'Acceso General',
    desc: 'Para estudiantes, profesionales, docentes e investigadores. Es el boleto que se compra en lÃ­nea.',
    sumDesc: 'Acceso completo a las sesiones',
    feats: ['Todas las sesiones del programa', 'Talleres del congreso', 'Constancia de participaciÃ³n', 'Boleto con folio en "Mis boletos"'],
    featured: true,
  },
  {
    label: 'Requiere aprobaciÃ³n',
    badge: null,
    precio: 'Gratis',
    nombre: 'Acceso Ponente',
    desc: 'Para quienes presenten una ponencia aprobada por el comitÃ© acadÃ©mico.',
    sumDesc: 'Acceso completo y espacio de presentaciÃ³n',
    feats: ['Acceso completo al evento', 'Espacio de presentaciÃ³n propio', 'Constancia de ponente'],
    featured: false,
  },
  // Los paquetes cargados por la federaciÃ³n se suman como opciones mÃ¡s. Al
  // llevar idPaquete, el cobro se resuelve por paquete y no por boleto suelto.
  ...paquetes.value.map((p) => ({
    idPaquete: p.idPaquete,
    label: `${p.cantidadBoletos} entradas`,
    badge: p.destacado ? 'MÃ¡s elegido' : null, badgeColor: 'green',
    precio: String(Math.round(Number(p.precio))),
    nombre: p.nombre,
    desc: p.descripcion || `Incluye ${p.cantidadBoletos} accesos al congreso en una sola compra.`,
    sumDesc: `${p.cantidadBoletos} accesos al congreso`,
    feats: [
      `${p.cantidadBoletos} accesos al congreso`,
      `Ahorras $${ahorroDe(p)} frente a comprarlos por separado`,
      'Constancia de participaciÃ³n para cada asistente',
      'Boleto con folio en "Mis boletos"',
    ],
    featured: !!p.destacado,
  })),
])

// Las dos formas individuales de entrar y los paquetes se muestran por
// separado, pero comparten el mismo Ã­ndice de selecciÃ³n para que el resumen y
// el cobro funcionen igual con cualquiera.
const planesIndividuales = computed(() =>
  planes.value.map((p, i) => ({ ...p, i })).filter((p) => !p.idPaquete)
)
const planesPaquete = computed(() =>
  planes.value.map((p, i) => ({ ...p, i })).filter((p) => p.idPaquete)
)

// Filas de la tabla comparativa: valores por plan [General, Ponente]
const comparativa = [
  { nombre: 'Todas las sesiones del programa', valores: [true, true] },
  { nombre: 'Talleres del congreso', valores: [true, true] },
  { nombre: 'Constancia', valores: ['De asistente', 'De ponente'] },
  { nombre: 'Espacio de presentaciÃ³n propio', valores: [false, true] },
  { nombre: 'Se compra en lÃ­nea', valores: [true, false] },
]

const confirmar = async () => {
  const plan = planes.value[planActivo.value]

  if (!eventoActual.value) {
    alert('No hay ningÃºn evento disponible para registrarte en este momento.')
    return
  }

  // El acceso de ponente no se cobra: se solicita por el formulario de contacto.
  if (plan.precio === 'Gratis') {
    router.push({ name: 'nosotros', query: { asunto: 'Propuesta de ponencia' }, hash: '#contacto' })
    return
  }

  // Sin sesiÃ³n iniciada se compra como invitado: nombre y correo obligatorios
  if (!localStorage.getItem('token') && (!form.value.nombre || !form.value.correo)) {
    alert('Completa tu nombre y correo electrÃ³nico para continuar.')
    return
  }

  // La expiraciÃ³n se captura como "MM / AA"; el servicio la espera separada
  const [mes, anio] = pago.value.expiracion.split('/').map((p) => p?.trim())

  try {
    await pagarConTarjeta({
      tarjeta: { numero: pago.value.numero, nombre: pago.value.nombre, mes, anio, cvv: pago.value.cvv },
      idEvento:  plan.idPaquete ? undefined : eventoActual.value.idEvento,
      cantidad:  plan.idPaquete ? undefined : 1,
      idPaquete: plan.idPaquete,
      nombre: `${form.value.nombre} ${form.value.apellidos}`.trim(),
      correo: form.value.correo,
    })

    if (localStorage.getItem('token')) {
      alert('Â¡Pago exitoso! Tu boleto ya aparece en "Mis boletos".')
      router.push({ name: 'mis-boletos' })
    } else {
      alert('Â¡Pago exitoso! Crea una cuenta con este mismo correo para consultar tus boletos cuando quieras.')
      router.push({ name: 'crear-cuenta' })
    }
  } catch (err) {
    alert(err.message)
  }
}
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }


.rg-hero { padding:var(--sec-y) var(--sec-x);border-bottom:1px solid var(--line3); }
.pill { display:inline-flex;align-items:center;gap:8px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:20px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.rg-title { font-size:var(--t-4xl);font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:14px; }
.rg-title strong { color:var(--white); }
.rg-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.rg-sub { font-size:var(--t-md);color:var(--w3);font-weight:300;max-width:480px;line-height:1.7; }

/* PLANES */
.rg-planes { display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:var(--sec-y) var(--sec-x);border-bottom:1px solid var(--line3);max-width:900px;margin:0 auto; }

/* PAQUETES */
.rg-paq { padding:var(--sec-y) var(--sec-x);border-bottom:1px solid var(--line3);background:var(--bg2); }
.paq-hd { text-align:center;margin-bottom:32px; }
.paq-sub { font-size:var(--t-sm);color:var(--w3);font-weight:300;max-width:520px;margin:8px auto 0;line-height:1.7; }
.paq-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;max-width:900px;margin:0 auto; }
.paq-card { position:relative;background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:24px 24px;cursor:pointer;transition:all .18s;display:flex;flex-direction:column; }
.paq-card:hover { border-color:var(--teal-b); }
.paq-card.featured { border-color:var(--teal-b);background:var(--bg3); }
.paq-card.selected { border-color:var(--teal);background:var(--bg3); }
.paq-badge { position:absolute;top:-11px;right:20px;background:var(--teal);color:var(--bg);font-family:var(--fm);font-size:var(--t-2xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:4px 12px;border-radius:100px; }
.paq-lbl { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:8px; }
.paq-nm { font-size:var(--t-xl);font-weight:800;color:var(--white);letter-spacing:-.03em;margin-bottom:14px; }
.paq-precios { display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px; }
.paq-lista { font-size:var(--t-sm);color:var(--w4);text-decoration:line-through; }
.paq-ahorro { background:var(--teal-g);border:1px solid var(--teal-b);color:var(--teal);font-size:var(--t-xs);font-weight:600;padding:4px 8px;border-radius:100px; }
.paq-price { display:flex;align-items:baseline;gap:4px;margin-bottom:6px; }
.paq-cur { font-size:var(--t-xl);font-weight:700;color:var(--white); }
.paq-num { font-size:var(--t-4xl);font-weight:800;color:var(--white);letter-spacing:-.05em;line-height:1; }
.paq-mxn { font-size:var(--t-sm);color:var(--w4);margin-left:4px; }
.paq-unit { font-size:var(--t-xs);color:var(--w4);margin-bottom:16px;line-height:1.5; }
.paq-desc { font-size:var(--t-sm);color:var(--w3);font-weight:300;line-height:1.7;margin-bottom:14px; }
.paq-sel { margin-top:auto;text-align:center;font-size:var(--t-sm);font-weight:600;padding:12px;border-radius:9px;border:1px solid var(--teal-b);background:var(--teal-g);color:var(--teal); }
.paq-card.selected .paq-sel { background:var(--teal);color:var(--bg);border-color:var(--teal); }
.plan-card { background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:24px 24px;cursor:pointer;transition:all .18s;position:relative;display:flex;flex-direction:column;gap:8px; }
.plan-card:hover { border-color:var(--teal-b); }
.plan-card.selected { border-color:var(--teal);background:var(--bg3); }
.plan-card.featured { border-color:var(--teal-b);background:var(--bg3); }
.plan-badge { position:absolute;top:16px;right:16px;font-family:var(--fm);font-size:var(--t-2xs);font-weight:600;padding:4px 8px;border-radius:100px;letter-spacing:.05em; }
.plan-badge.green { background:rgba(45,212,180,.1);color:var(--teal);border:1px solid var(--teal-b); }
.plan-badge.orange { background:rgba(245,158,11,.1);color:#F59E0B;border:1px solid rgba(245,158,11,.3); }
.plan-lbl { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4); }
.plan-price { display:flex;align-items:baseline;gap:4px;margin:4px 0; }
.plan-cur { font-size:var(--t-lg);font-weight:700;color:var(--white);align-self:flex-start;margin-top:4px; }
.plan-num { font-size:var(--t-4xl);font-weight:800;color:var(--white);letter-spacing:-.05em;line-height:1; }
.plan-num.teal { color:var(--teal); }
.plan-per { font-size:var(--t-sm);color:var(--w4); }
.plan-name { font-size:var(--t-lg);font-weight:700;color:var(--white); }
.plan-desc { font-size:var(--t-sm);color:var(--w3);font-weight:300;line-height:1.6; }
.plan-feats { list-style:none;display:flex;flex-direction:column;gap:8px;margin-top:6px; }
.plan-feats li { display:flex;align-items:center;gap:8px;font-size:var(--t-sm);color:var(--w3); }
.plan-feats li svg { width:13px;height:13px;fill:none;stroke:var(--teal);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0; }
.plan-sel-dot { width:10px;height:10px;border-radius:50%;background:var(--teal);position:absolute;top:16px;left:16px; }
.plan-save { font-size:var(--t-xs);color:var(--w3);font-weight:300;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:8px;padding:8px 8px;line-height:1.5; }
.plan-save strong { color:var(--teal);font-weight:700; }

/* TABLA COMPARATIVA */
.rg-compara { padding:var(--sec-y) var(--sec-x);border-bottom:1px solid var(--line3);background:var(--bg2); }
.cmp-title { font-size:var(--t-2xl);font-weight:800;letter-spacing:-.04em;margin-bottom:24px; }
.cmp-title strong { color:var(--white); }
.cmp-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.cmp-scroll { overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--line3);border-radius:14px; }
.cmp-t { width:100%;border-collapse:collapse;min-width:560px;background:var(--card); }
.cmp-t th, .cmp-t td { padding:12px 16px;text-align:center;border-bottom:1px solid var(--line3); }
.cmp-t tbody tr:last-child td { border-bottom:none; }
.cmp-feat-h { text-align:left;font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--w4); }
.cmp-plan-h { cursor:pointer;transition:background .15s;border-bottom:2px solid var(--line3) !important; }
.cmp-plan-h:hover { background:var(--teal-g); }
.cmp-plan-h.active { background:var(--teal-g);border-bottom-color:var(--teal) !important; }
.cmp-plan { font-size:var(--t-md);font-weight:700;color:var(--white); }
.cmp-precio { font-family:var(--fm);font-size:var(--t-2xs);color:var(--teal);margin-top:3px; }
.cmp-feat { text-align:left !important;font-size:var(--t-sm);color:var(--w2);font-weight:300; }
.cmp-v.active { background:rgba(45,212,180,.04); }
.cmp-si { color:var(--teal);font-weight:800;font-size:var(--t-md); }
.cmp-no { color:var(--w4); }
.cmp-txt { font-size:var(--t-xs);color:var(--w2);font-weight:500; }
.cmp-nota { font-size:var(--t-xs);color:var(--w4);margin-top:12px;text-align:center; }

/* FORM BODY */
.rg-body { display:grid;grid-template-columns:1fr 320px;gap:24px;padding:var(--sec-y) var(--sec-x) calc(var(--sec-y) + var(--s5));align-items:start; }
.rg-left { display:flex;flex-direction:column;gap:16px; }
.rg-sec { background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:24px; }
.rg-sec-h { display:flex;align-items:center;gap:8px;font-size:var(--t-md);font-weight:700;color:var(--white);margin-bottom:24px; }
.rg-sec-ic { width:32px;height:32px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:8px;display:flex;align-items:center;justify-content:center; }
.rg-sec-ic svg { width:15px;height:15px;fill:none;stroke:var(--teal);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round; }
.rg-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
.field { display:flex;flex-direction:column;gap:4px; }
.field.full { grid-column:span 2; }
.field-label { font-size:var(--t-xs);font-weight:500;color:var(--w4);letter-spacing:.04em;text-transform:uppercase; }
.field-input { background:var(--bg3);border:1px solid var(--line2);border-radius:10px;padding:12px 12px;font-family:var(--f);font-size:var(--t-sm);color:var(--white);outline:none;transition:border-color .15s; }
.field-input:focus { border-color:var(--teal-b); }
.field-input::placeholder { color:var(--w4); }

.pay-secure { font-size:var(--t-xs);color:var(--w4);margin-top:14px;line-height:1.6; }

/* RESUMEN */
.rg-summary { background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:16px;position:sticky;top:80px; }
.sum-title { font-size:var(--t-md);font-weight:700;color:var(--white); }
.sum-event { background:var(--bg3);border:1px solid var(--line3);border-radius:10px;padding:12px; }
.sum-ev-tag { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;color:var(--teal);letter-spacing:.1em;margin-bottom:6px; }
.sum-ev-nm { font-size:var(--t-sm);font-weight:700;color:var(--white);margin-bottom:4px; }
.sum-ev-dt { font-size:var(--t-xs);color:var(--w4); }
.sum-plan { background:var(--teal-g);border:1px solid var(--teal-b);border-radius:10px;padding:12px; }
.sum-plan-tag { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;color:var(--teal);letter-spacing:.1em;margin-bottom:6px; }
.sum-plan-nm { font-size:var(--t-sm);font-weight:700;color:var(--white);margin-bottom:3px; }
.sum-plan-desc { font-size:var(--t-xs);color:var(--w3); }
.sum-lines { display:flex;flex-direction:column;gap:8px;border-top:1px solid var(--line3);padding-top:14px; }
.sum-line { display:flex;justify-content:space-between;font-size:var(--t-sm);color:var(--w3); }
.sum-line.teal span:last-child { color:var(--teal); }
.sum-line.total { font-size:var(--t-md);font-weight:700;color:var(--white);border-top:1px solid var(--line3);padding-top:10px;margin-top:4px; }
.sum-line.total .teal { color:var(--teal); }
.sum-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:12px;font-family:var(--f);font-size:var(--t-sm);font-weight:700;cursor:pointer;transition:background .15s;width:100%; }
.sum-btn:hover { background:var(--teal2); }
.sum-btn:disabled { opacity:.5;cursor:not-allowed; }
.sum-secure { text-align:center;font-size:var(--t-xs);color:var(--w4); }
.sum-incl { border-top:1px solid var(--line3);padding-top:14px;display:flex;flex-direction:column;gap:8px; }
.sum-incl-t { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4);margin-bottom:4px; }
.sum-incl-i { display:flex;align-items:center;gap:8px;font-size:var(--t-sm);color:var(--w3); }
.sum-incl-i svg { width:12px;height:12px;fill:none;stroke:var(--teal);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0; }

/* RESPONSIVE */
@media (max-width: 968px) {
  .rg-hero { padding:var(--sec-y) var(--sec-x); }
  .rg-title { font-size:var(--t-4xl); }

  .rg-planes { grid-template-columns:1fr;padding:var(--sec-y) var(--sec-x);gap:12px; }
  .rg-paq { padding:var(--sec-y) var(--sec-x); }
  .paq-grid { grid-template-columns:1fr;gap:16px; }
  .paq-num { font-size:var(--t-3xl); }
  .rg-body { grid-template-columns:1fr;padding:var(--sec-y) var(--sec-x) calc(var(--sec-y) + var(--s5)); }
  .rg-summary { position:static; }
  .rg-compara { padding:var(--sec-y) var(--sec-x); }
  .cmp-title { font-size:var(--t-xl); }
}

@media (max-width: 560px) {
  .rg-grid { grid-template-columns:1fr; }
  .field.full { grid-column:span 1; }
  .rg-sec { padding:16px; }

  /* Tarjetas de plan compactas: el detalle completo estÃ¡ en la tabla comparativa */
  .plan-card { padding:16px 16px;gap:8px; }
  .plan-feats { display:none; }
  .plan-num { font-size:var(--t-3xl); }
}
</style>