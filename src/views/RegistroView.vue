<template>
  <div class="page">

    <AppNav />

    <!-- HERO -->
    <div class="rg-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Registro & Pago Seguro</span></div>
      <h1 class="rg-title"><strong>Elige tu</strong> <em>plan</em></h1>
      <p class="rg-sub">Selecciona el acceso que mejor se adapte a tu perfil. Proceso 100% seguro con confirmación inmediata.</p>
    </div>

    <!-- PLANES -->
    <div class="rg-planes">
      <div
        v-for="(plan, i) in planes"
        :key="i"
        class="plan-card"
        :class="{ selected: planActivo === i, featured: plan.featured }"
        @click="planActivo = i"
      >
        <div class="plan-badge" v-if="plan.badge" :class="plan.badgeColor">{{ plan.badge }}</div>
        <div class="plan-lbl">{{ plan.label }}</div>
        <div class="plan-price">
          <span class="plan-cur" v-if="plan.precio !== 'Gratis'">$</span>
          <span class="plan-num" :class="{ teal: plan.precio === 'Gratis' }">{{ plan.precio }}</span>
          <span class="plan-per" v-if="plan.precio !== 'Gratis'">MXN</span>
        </div>
        <div class="plan-save" v-if="plan.precio !== 'Gratis'">
          Hoy pagas <strong>${{ parseInt(plan.precio) - 100 }}</strong> con descuento anticipado · ≈ ${{ Math.round((parseInt(plan.precio) - 100) / 3) }} por día
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

    <!-- TABLA COMPARATIVA -->
    <div class="rg-compara">
      <div class="cmp-title"><strong>Compara los</strong> <em>planes</em></div>
      <div class="cmp-scroll">
        <table class="cmp-t">
          <thead>
            <tr>
              <th class="cmp-feat-h">Beneficios</th>
              <th
                v-for="(plan, i) in planes"
                :key="i"
                class="cmp-plan-h"
                :class="{ active: planActivo === i }"
                @click="planActivo = i"
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
                <span v-if="valor === true" class="cmp-si">✓</span>
                <span v-else-if="valor === false" class="cmp-no">—</span>
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
              <input v-model="form.nombre" type="text" placeholder="Andrés" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Apellidos</label>
              <input v-model="form.apellidos" type="text" placeholder="López Gaecia" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Correo electrónico</label>
              <input v-model="form.correo" type="email" placeholder="correo@ejemplo.com" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Teléfono</label>
              <input v-model="form.telefono" type="tel" placeholder="+52 (443) 000-0000" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Institución</label>
              <input v-model="form.institucion" type="text" placeholder="UTM, UNAM, TEC..." class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Estado</label>
              <input v-model="form.estado" type="text" placeholder="Michoacán" class="field-input" />
            </div>
          </div>
        </div>

        <!-- Método de pago -->
        <div class="rg-sec" v-if="planes[planActivo].precio !== 'Gratis'">
          <div class="rg-sec-h">
            <div class="rg-sec-ic"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
            <span>Método de pago</span>
          </div>
          <div class="pay-tabs">
            <button v-for="m in metodos" :key="m" class="pay-tab" :class="{ active: metodoActivo === m }" @click="metodoActivo = m">
              {{ m }}
            </button>
          </div>
          <div class="rg-grid" v-if="metodoActivo === 'Tarjeta'">
            <div class="field full">
              <label class="field-label">Número de tarjeta</label>
              <input v-model="pago.numero" type="text" placeholder="1234 5678 9012 3456" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Expiración</label>
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
          <div v-else-if="metodoActivo === 'OXXO pay'" class="pay-info">
            Genera tu referencia y paga en cualquier OXXO del país. Recibirás tu boleto en 24 hrs.
          </div>
          <div v-else class="pay-info">
            Realiza tu transferencia a la cuenta CLABE indicada. Envía tu comprobante a pagos@fmds.mx
          </div>
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
          <div class="sum-line teal"><span>Descuento anticipado</span><span>-$100 MXN</span></div>
          <div class="sum-line"><span>Cargo por servicio</span><span>$0 MXN</span></div>
          <div class="sum-line total"><span>Total</span><span :class="{ teal: planes[planActivo].precio === 'Gratis' }">{{ planes[planActivo].precio === 'Gratis' ? 'Gratis' : '$' + (parseInt(planes[planActivo].precio) - 100) + ' MXN' }}</span></div>
        </div>
        <button class="sum-btn" @click="confirmar" :disabled="!eventoActual">Confirmar y pagar →</button>
        <p class="sum-secure">🔒 Pago 100% seguro · con Openpay</p>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'

const router = useRouter()
const planActivo = ref(2)
const metodoActivo = ref('Tarjeta')
const metodos = ['Tarjeta', 'OXXO pay', 'Transferencia']
const eventoActual = ref(null)

const form = ref({ nombre: '', apellidos: '', correo: '', telefono: '', institucion: '', estado: '' })
const pago = ref({ numero: '', expiracion: '', cvv: '', nombre: '' })

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}

const cargarEvento = async () => {
  const res = await api.get('/eventos')
  eventoActual.value = res.data[0] || null
}

onMounted(cargarEvento)

const planes = [
  {
    label: 'Precio anticipado',
    badge: 'Más elegido', badgeColor: 'green',
    precio: '500',
    nombre: 'Acceso Estudiante',
    desc: 'Para estudiantes con credencial vigente de cualquier institución educativa.',
    sumDesc: 'Acceso completo + grabaciones',
    feats: ['Todas las sesiones plenarias', 'Grabaciones por 30 días', 'Certificado digital FMDS', 'Acceso a comunidad', 'Workshops premium'],
    featured: false,
  },
  {
    label: 'Precio general',
    badge: 'Completo', badgeColor: 'orange',
    precio: '1200',
    nombre: 'Acceso General',
    desc: 'Para profesionales, docentes e investigadores que quieren el acceso completo.',
    sumDesc: 'Acceso completo + slot + publicación',
    feats: ['Todas las sesiones plenarias', 'Grabaciones por 30 días', 'Certificado digital FMDS', 'Acceso a comunidad', 'Workshops premium'],
    featured: false,
  },
  {
    label: 'Requiere aprobación',
    badge: null,
    precio: 'Gratis',
    nombre: 'Acceso Ponente',
    desc: 'Para investigadores con propuesta de ponencia aprobada por el comité académico.',
    sumDesc: 'Acceso completo + slot + publicación',
    feats: ['Acceso completo al evento', 'Slot de presentación propio', 'Certificado de ponente', 'Publicación en repositorio', 'Workshops premium'],
    featured: true,
  },
]

// Filas de la tabla comparativa: valores por plan [Estudiante, General, Ponente]
const comparativa = [
  { nombre: 'Sesiones plenarias los 3 días', valores: [true, true, true] },
  { nombre: 'Talleres y workshops premium', valores: [true, true, true] },
  { nombre: 'Cursos en línea de la edición', valores: [true, true, true] },
  { nombre: 'Grabaciones por 30 días', valores: [true, true, true] },
  { nombre: 'Certificado digital', valores: ['FMDS', 'FMDS', 'De ponente'] },
  { nombre: 'Acceso a comunidad FMDS', valores: [true, true, true] },
  { nombre: 'Slot de presentación propio', valores: [false, false, true] },
  { nombre: 'Publicación en repositorio', valores: [false, false, true] },
]

const confirmar = async () => {
  const plan = planes[planActivo.value]

  if (!eventoActual.value) {
    alert('No hay ningún evento disponible para registrarte en este momento.')
    return
  }

  if (plan.precio === 'Gratis') {
    alert('Solicitud de ponente enviada. Te contactaremos pronto.')
    return
  }

  if (metodoActivo.value !== 'Tarjeta') {
    alert('Método de pago no implementado aún.')
    return
  }

  // Sin sesión iniciada se compra como invitado: nombre y correo obligatorios
  if (!localStorage.getItem('token') && (!form.value.nombre || !form.value.correo)) {
    alert('Completa tu nombre y correo electrónico para continuar.')
    return
  }

  const OpenPay = window.OpenPay
  OpenPay.setId(import.meta.env.VITE_OPENPAY_MERCHANT_ID)
  OpenPay.setApiKey(import.meta.env.VITE_OPENPAY_PUBLIC_KEY)
  OpenPay.setSandboxMode(true)

  const deviceSessionId = OpenPay.deviceData.setup()

  OpenPay.token.create({
    card_number:      pago.value.numero.replace(/\s/g, ''),
    holder_name:      pago.value.nombre,
    expiration_year:  pago.value.expiracion.split('/')[1]?.trim(),
    expiration_month: pago.value.expiracion.split('/')[0]?.trim(),
    cvv2:             pago.value.cvv,
  }, async (response) => {
    try {
      const token_id = response.data.id
      const montoTotal = parseInt(plan.precio) - 100 // descuento anticipado

      await api.post('/checkout', {
        token_id,
        deviceSessionId,
        idEvento: eventoActual.value.idEvento,
        cantidad: 1,
        montoTotal,
        nombre: `${form.value.nombre} ${form.value.apellidos}`.trim(),
        correo: form.value.correo,
      })

      if (localStorage.getItem('token')) {
        alert('¡Pago exitoso! Tu boleto ya aparece en "Mis boletos".')
        router.push({ name: 'mis-boletos' })
      } else {
        alert('¡Pago exitoso! Crea una cuenta con este mismo correo para consultar tus boletos cuando quieras.')
        router.push({ name: 'crear-cuenta' })
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Error al procesar el pago')
    }
  }, (err) => {
    alert(err.data?.description || 'Error al tokenizar la tarjeta')
  })
}
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }


.rg-hero { padding:52px 44px 48px;border-bottom:1px solid var(--line3); }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:20px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.rg-title { font-size:52px;font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:14px; }
.rg-title strong { color:var(--white); }
.rg-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.rg-sub { font-size:14px;color:var(--w3);font-weight:300;max-width:480px;line-height:1.7; }

/* PLANES */
.rg-planes { display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;padding:48px 44px;border-bottom:1px solid var(--line3); }
.plan-card { background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:28px 24px;cursor:pointer;transition:all .18s;position:relative;display:flex;flex-direction:column;gap:10px; }
.plan-card:hover { border-color:var(--teal-b); }
.plan-card.selected { border-color:var(--teal);background:var(--bg3); }
.plan-card.featured { border-color:var(--teal-b);background:var(--bg3); }
.plan-badge { position:absolute;top:16px;right:16px;font-family:var(--fm);font-size:9px;font-weight:600;padding:3px 10px;border-radius:100px;letter-spacing:.05em; }
.plan-badge.green { background:rgba(45,212,180,.1);color:var(--teal);border:1px solid var(--teal-b); }
.plan-badge.orange { background:rgba(245,158,11,.1);color:#F59E0B;border:1px solid rgba(245,158,11,.3); }
.plan-lbl { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4); }
.plan-price { display:flex;align-items:baseline;gap:3px;margin:4px 0; }
.plan-cur { font-size:16px;font-weight:700;color:var(--white);align-self:flex-start;margin-top:4px; }
.plan-num { font-size:40px;font-weight:800;color:var(--white);letter-spacing:-.05em;line-height:1; }
.plan-num.teal { color:var(--teal); }
.plan-per { font-size:12px;color:var(--w4); }
.plan-name { font-size:16px;font-weight:700;color:var(--white); }
.plan-desc { font-size:12px;color:var(--w3);font-weight:300;line-height:1.6; }
.plan-feats { list-style:none;display:flex;flex-direction:column;gap:8px;margin-top:6px; }
.plan-feats li { display:flex;align-items:center;gap:8px;font-size:12px;color:var(--w3); }
.plan-feats li svg { width:13px;height:13px;fill:none;stroke:var(--teal);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0; }
.plan-sel-dot { width:10px;height:10px;border-radius:50%;background:var(--teal);position:absolute;top:16px;left:16px; }
.plan-save { font-size:11px;color:var(--w3);font-weight:300;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:8px;padding:7px 10px;line-height:1.5; }
.plan-save strong { color:var(--teal);font-weight:700; }

/* TABLA COMPARATIVA */
.rg-compara { padding:48px 44px;border-bottom:1px solid var(--line3);background:var(--bg2); }
.cmp-title { font-size:26px;font-weight:800;letter-spacing:-.04em;margin-bottom:24px; }
.cmp-title strong { color:var(--white); }
.cmp-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.cmp-scroll { overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--line3);border-radius:14px; }
.cmp-t { width:100%;border-collapse:collapse;min-width:560px;background:var(--card); }
.cmp-t th, .cmp-t td { padding:13px 18px;text-align:center;border-bottom:1px solid var(--line3); }
.cmp-t tbody tr:last-child td { border-bottom:none; }
.cmp-feat-h { text-align:left;font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--w4); }
.cmp-plan-h { cursor:pointer;transition:background .15s;border-bottom:2px solid var(--line3) !important; }
.cmp-plan-h:hover { background:var(--teal-g); }
.cmp-plan-h.active { background:var(--teal-g);border-bottom-color:var(--teal) !important; }
.cmp-plan { font-size:14px;font-weight:700;color:var(--white); }
.cmp-precio { font-family:var(--fm);font-size:10px;color:var(--teal);margin-top:3px; }
.cmp-feat { text-align:left !important;font-size:12px;color:var(--w2);font-weight:300; }
.cmp-v.active { background:rgba(45,212,180,.04); }
.cmp-si { color:var(--teal);font-weight:800;font-size:14px; }
.cmp-no { color:var(--w4); }
.cmp-txt { font-size:11px;color:var(--w2);font-weight:500; }
.cmp-nota { font-size:11px;color:var(--w4);margin-top:12px;text-align:center; }

/* FORM BODY */
.rg-body { display:grid;grid-template-columns:1fr 320px;gap:24px;padding:40px 44px 80px;align-items:start; }
.rg-left { display:flex;flex-direction:column;gap:20px; }
.rg-sec { background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:28px; }
.rg-sec-h { display:flex;align-items:center;gap:10px;font-size:15px;font-weight:700;color:var(--white);margin-bottom:24px; }
.rg-sec-ic { width:32px;height:32px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:8px;display:flex;align-items:center;justify-content:center; }
.rg-sec-ic svg { width:15px;height:15px;fill:none;stroke:var(--teal);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round; }
.rg-grid { display:grid;grid-template-columns:1fr 1fr;gap:14px; }
.field { display:flex;flex-direction:column;gap:6px; }
.field.full { grid-column:span 2; }
.field-label { font-size:11px;font-weight:500;color:var(--w4);letter-spacing:.04em;text-transform:uppercase; }
.field-input { background:var(--bg3);border:1px solid var(--line2);border-radius:10px;padding:12px 14px;font-family:var(--f);font-size:13px;color:var(--white);outline:none;transition:border-color .15s; }
.field-input:focus { border-color:var(--teal-b); }
.field-input::placeholder { color:var(--w4); }

.pay-tabs { display:flex;gap:8px;margin-bottom:20px; }
.pay-tab { flex:1;background:var(--bg3);border:1px solid var(--line2);border-radius:8px;padding:10px;font-family:var(--f);font-size:12px;font-weight:500;color:var(--w3);cursor:pointer;transition:all .15s; }
.pay-tab.active { border-color:var(--teal-b);color:var(--teal);background:var(--teal-g); }
.pay-info { font-size:13px;color:var(--w3);line-height:1.7;padding:16px;background:var(--bg3);border:1px solid var(--line2);border-radius:10px; }

/* RESUMEN */
.rg-summary { background:var(--card);border:1px solid var(--line3);border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:16px;position:sticky;top:80px; }
.sum-title { font-size:14px;font-weight:700;color:var(--white); }
.sum-event { background:var(--bg3);border:1px solid var(--line3);border-radius:10px;padding:14px; }
.sum-ev-tag { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;margin-bottom:6px; }
.sum-ev-nm { font-size:13px;font-weight:700;color:var(--white);margin-bottom:4px; }
.sum-ev-dt { font-size:11px;color:var(--w4); }
.sum-plan { background:var(--teal-g);border:1px solid var(--teal-b);border-radius:10px;padding:14px; }
.sum-plan-tag { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;margin-bottom:6px; }
.sum-plan-nm { font-size:13px;font-weight:700;color:var(--white);margin-bottom:3px; }
.sum-plan-desc { font-size:11px;color:var(--w3); }
.sum-lines { display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--line3);padding-top:14px; }
.sum-line { display:flex;justify-content:space-between;font-size:12px;color:var(--w3); }
.sum-line.teal span:last-child { color:var(--teal); }
.sum-line.total { font-size:14px;font-weight:700;color:var(--white);border-top:1px solid var(--line3);padding-top:10px;margin-top:4px; }
.sum-line.total .teal { color:var(--teal); }
.sum-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:14px;font-family:var(--f);font-size:13px;font-weight:700;cursor:pointer;transition:background .15s;width:100%; }
.sum-btn:hover { background:var(--teal2); }
.sum-btn:disabled { opacity:.5;cursor:not-allowed; }
.sum-secure { text-align:center;font-size:11px;color:var(--w4); }
.sum-incl { border-top:1px solid var(--line3);padding-top:14px;display:flex;flex-direction:column;gap:8px; }
.sum-incl-t { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4);margin-bottom:4px; }
.sum-incl-i { display:flex;align-items:center;gap:8px;font-size:12px;color:var(--w3); }
.sum-incl-i svg { width:12px;height:12px;fill:none;stroke:var(--teal);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0; }

/* RESPONSIVE */
@media (max-width: 968px) {
  .rg-hero { padding:44px 20px 36px; }
  .rg-title { font-size:36px; }

  .rg-planes { grid-template-columns:1fr;padding:32px 20px;gap:14px; }
  .rg-body { grid-template-columns:1fr;padding:32px 20px 56px; }
  .rg-summary { position:static; }
  .rg-compara { padding:32px 20px; }
  .cmp-title { font-size:22px; }
}

@media (max-width: 560px) {
  .rg-grid { grid-template-columns:1fr; }
  .field.full { grid-column:span 1; }
  .rg-sec { padding:20px; }
  .pay-tabs { flex-direction:column; }
}
</style>