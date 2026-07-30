<template>
  <div class="page">

    <AppNav />

    <div v-if="cargando" class="ev-estado">Cargando el evento…</div>

    <div v-else-if="!evento" class="ev-estado">
      <div class="ev-estado-t">No encontramos este evento</div>
      <p class="ev-estado-s">Puede que haya sido retirado o que la dirección no sea correcta.</p>
      <router-link to="/eventos" class="ev-btn">Ver todos los eventos ⟶</router-link>
    </div>

    <template v-else>
      <!-- ENCABEZADO -->
      <div class="ev-hero">
        <router-link to="/eventos" class="ev-back">← Todos los eventos</router-link>

        <div class="ev-chips">
          <span class="ev-chip t">{{ evento.modalidad || 'Presencial' }}</span>
          <span class="ev-chip" :class="agotado ? 'r' : 'n'">
            {{ agotado ? 'Boletos agotados' : evento.stockBoletos + ' lugares disponibles' }}
          </span>
        </div>

        <h1 class="ev-ttl">{{ evento.titulo }}</h1>

        <div class="ev-meta">
          <div class="ev-mi">
            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>{{ formatFecha(evento.fecha) }}</span>
          </div>
          <div class="ev-mi" v-if="evento.hora">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>{{ formatHora(evento.hora) }} hrs</span>
          </div>
          <div class="ev-mi" v-if="evento.sede || evento.ciudad">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>{{ [evento.sede, evento.ciudad].filter(Boolean).join(' · ') }}</span>
          </div>
        </div>
      </div>

      <div class="ev-body">
        <!-- COLUMNA PRINCIPAL -->
        <div class="ev-main">
          <section class="ev-sec" v-if="evento.descripcion">
            <h2 class="ev-h2">Sobre el evento</h2>
            <p class="ev-desc">{{ evento.descripcion }}</p>
          </section>

          <!-- AGENDA -->
          <section class="ev-sec" v-if="sesiones.length">
            <div class="ev-h2-row">
              <h2 class="ev-h2">Programa</h2>
              <router-link to="/agenda" class="ev-link">Agenda completa →</router-link>
            </div>
            <div class="ev-tabs" v-if="dias.length > 1">
              <button
                v-for="d in dias"
                :key="d"
                class="ev-tab"
                :class="{ active: diaActivo === d }"
                @click="diaActivo = d"
              >Día {{ d }}</button>
            </div>
            <div class="ev-ses">
              <div class="ev-se" v-for="s in sesionesDelDia" :key="s.idSesion">
                <div class="ev-se-h">{{ formatHora(s.hora) }}</div>
                <div>
                  <div class="ev-se-n">{{ s.nombre }}</div>
                  <div class="ev-se-p">{{ s.ponente }}</div>
                </div>
                <span class="ev-se-b">{{ s.tipo }}</span>
              </div>
            </div>
          </section>

          <!-- PONENTES -->
          <section class="ev-sec" v-if="speakers.length">
            <div class="ev-h2-row">
              <h2 class="ev-h2">Ponentes</h2>
              <router-link to="/speakers" class="ev-link">Ver todos →</router-link>
            </div>
            <div class="ev-spk">
              <div class="ev-sp" v-for="s in speakers.slice(0, 6)" :key="s.idSpeaker">
                <img v-if="s.fotoUrl" :src="s.fotoUrl" :alt="s.nombre" class="ev-sp-foto" />
                <div v-else class="ev-sp-ini" :style="estiloAvatar(s.nombre)">{{ iniciales(s.nombre) }}</div>
                <div>
                  <div class="ev-sp-n">{{ s.nombre }}</div>
                  <div class="ev-sp-r">{{ s.rol }}</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- TARJETA DE COMPRA -->
        <aside class="ev-side">
          <div class="ev-card">
            <div class="ev-card-lbl">Acceso al evento</div>
            <div class="ev-precio">${{ Math.round(evento.precio) }} <small>MXN</small></div>

            <div class="ev-cd" v-if="!countdown.terminado">
              <div class="ev-cd-lbl">Comienza en</div>
              <div class="ev-cd-row">
                <div class="ev-cd-b"><b>{{ countdown.dias }}</b><span>días</span></div>
                <div class="ev-cd-b"><b>{{ pad(countdown.horas) }}</b><span>hrs</span></div>
                <div class="ev-cd-b"><b>{{ pad(countdown.mins) }}</b><span>min</span></div>
              </div>
            </div>
            <div class="ev-cd-fin" v-else>Este evento ya se realizó</div>

            <router-link
              v-if="!agotado && !countdown.terminado"
              :to="{ name: 'checkout', params: { idEvento: evento.idEvento } }"
              class="ev-buy"
            >Comprar boleto ⟶</router-link>
            <div v-else class="ev-buy dis">{{ agotado ? 'Boletos agotados' : 'Ventas cerradas' }}</div>

            <div class="ev-incl">
              <div class="ev-in"><span>✓</span> Acceso a todas las sesiones</div>
              <div class="ev-in"><span>✓</span> Constancia de participación</div>
              <div class="ev-in"><span>✓</span> Cursos en línea de la edición</div>
            </div>

            <p class="ev-seg">Pago seguro con Openpay. Puedes comprar sin crear una cuenta.</p>
          </div>
        </aside>
      </div>
    </template>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import api from '../services/api'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'
import { inicialesDe as iniciales, estiloAvatar } from '../utils/avatar'

const route = useRoute()
const evento = ref(null)
const sesiones = ref([])
const speakers = ref([])
const cargando = ref(true)
const diaActivo = ref(1)

const agotado = computed(() => Number(evento.value?.stockBoletos) === 0)
const dias = computed(() => [...new Set(sesiones.value.map(s => s.dia))].sort((a, b) => a - b))
const sesionesDelDia = computed(() => sesiones.value.filter(s => s.dia === diaActivo.value))

const pad = (n) => String(n).padStart(2, '0')

const formatFecha = (fecha) => {
  if (!fecha) return ''
  return new Date(fecha).toLocaleDateString('es-MX', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  })
}
const formatHora = (hora) => {
  if (!hora) return ''
  const [h, m] = String(hora).split(':')
  return `${parseInt(h)}:${m}`
}

// Cuenta regresiva hasta la fecha del evento
const countdown = ref({ dias: 0, horas: 0, mins: 0, terminado: false })
let timer = null
const actualizarCountdown = () => {
  if (!evento.value) return
  const diff = new Date(evento.value.fecha).getTime() - Date.now()
  if (diff <= 0) {
    countdown.value = { dias: 0, horas: 0, mins: 0, terminado: true }
    return
  }
  countdown.value = {
    dias:  Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    mins:  Math.floor((diff % 3600000) / 60000),
    terminado: false,
  }
}
watch(evento, (nuevo) => {
  if (timer) clearInterval(timer)
  if (nuevo) {
    actualizarCountdown()
    timer = setInterval(actualizarCountdown, 30000)
  }
})
onUnmounted(() => { if (timer) clearInterval(timer) })

const cargar = async () => {
  cargando.value = true
  try {
    const res = await api.get(`/eventos/${route.params.id}`)
    evento.value = res.data
  } catch {
    evento.value = null
  } finally {
    cargando.value = false
  }
  // El programa y los ponentes son de la edición: si fallan, la página sigue útil
  try {
    const [ses, spk] = await Promise.all([api.get('/sesiones'), api.get('/speakers')])
    sesiones.value = ses.data
    speakers.value = spk.data
    if (dias.value.length) diaActivo.value = dias.value[0]
  } catch {
    sesiones.value = []
    speakers.value = []
  }
}

onMounted(cargar)
watch(() => route.params.id, cargar)
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }

.ev-estado { max-width:520px;margin:0 auto;padding:100px 24px;text-align:center;color:var(--w3);font-size:14px; }
.ev-estado-t { font-size:22px;font-weight:800;color:var(--white);margin-bottom:10px; }
.ev-estado-s { font-size:13px;color:var(--w3);font-weight:300;margin-bottom:26px; }
.ev-btn { background:var(--teal);color:var(--bg);border-radius:10px;padding:13px 28px;font-size:13px;font-weight:700;text-decoration:none;display:inline-block; }

/* HERO */
.ev-hero { background:linear-gradient(160deg,var(--bg3),var(--bg));border-bottom:1px solid var(--line3);padding:36px 44px 44px; }
.ev-back { font-size:12px;color:var(--w3);text-decoration:none;font-weight:300;transition:color .15s; }
.ev-back:hover { color:var(--teal); }
.ev-chips { display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 16px; }
.ev-chip { font-size:10px;font-weight:600;padding:5px 12px;border-radius:100px; }
.ev-chip.t { background:var(--teal-g);color:var(--teal);border:1px solid var(--teal-b); }
.ev-chip.n { background:var(--w5);color:var(--w2);border:1px solid var(--line2); }
.ev-chip.r { background:rgba(239,68,68,.1);color:#f87171;border:1px solid rgba(239,68,68,.3); }
.ev-ttl { font-size:44px;font-weight:800;letter-spacing:-.05em;line-height:1.05;color:var(--white);margin-bottom:22px;max-width:820px; }
.ev-meta { display:flex;gap:26px;flex-wrap:wrap; }
.ev-mi { display:flex;align-items:center;gap:8px;font-size:13px;color:var(--w2);font-weight:300; }
.ev-mi svg { width:14px;height:14px;fill:none;stroke:var(--teal);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0; }
.ev-mi span::first-letter { text-transform:uppercase; }

/* CUERPO */
.ev-body { display:grid;grid-template-columns:1fr 340px;gap:32px;max-width:1200px;margin:0 auto;padding:44px 44px 80px;align-items:start; }
.ev-main { display:flex;flex-direction:column;gap:40px;min-width:0; }
.ev-sec { display:flex;flex-direction:column;gap:16px; }
.ev-h2 { font-size:20px;font-weight:800;color:var(--white);letter-spacing:-.03em; }
.ev-h2-row { display:flex;justify-content:space-between;align-items:baseline;gap:16px; }
.ev-link { font-size:12px;color:var(--teal);text-decoration:none;font-weight:500;white-space:nowrap; }
.ev-link:hover { text-decoration:underline; }
.ev-desc { font-size:14px;color:var(--w2);font-weight:300;line-height:1.9;white-space:pre-line; }

/* AGENDA */
.ev-tabs { display:flex;gap:6px;flex-wrap:wrap; }
.ev-tab { background:var(--w5);border:1px solid var(--line2);border-radius:100px;padding:6px 16px;font-family:var(--f);font-size:12px;font-weight:500;color:var(--w3);cursor:pointer;transition:all .15s; }
.ev-tab.active { background:var(--teal-g);border-color:var(--teal-b);color:var(--teal); }
.ev-ses { border:1px solid var(--line3);border-radius:14px;overflow:hidden; }
.ev-se { display:grid;grid-template-columns:64px 1fr auto;gap:16px;align-items:center;padding:16px 20px;border-bottom:1px solid var(--line3); }
.ev-se:last-child { border-bottom:none; }
.ev-se-h { font-family:var(--f);font-size:15px;font-weight:800;color:var(--teal);letter-spacing:-.02em; }
.ev-se-n { font-size:13px;font-weight:600;color:var(--white);line-height:1.4; }
.ev-se-p { font-size:11px;color:var(--w4);font-weight:300;margin-top:3px; }
.ev-se-b { font-family:var(--fm);font-size:8px;letter-spacing:.08em;text-transform:uppercase;color:var(--w4);white-space:nowrap; }

/* PONENTES */
.ev-spk { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
.ev-sp { display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--line3);border-radius:12px;padding:14px 16px; }
.ev-sp-foto { width:42px;height:42px;border-radius:50%;object-fit:cover;flex-shrink:0; }
.ev-sp-ini { width:42px;height:42px;border-radius:50%;background:var(--teal-g);border:1px solid var(--teal-b);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:var(--teal);flex-shrink:0; }
.ev-sp-n { font-size:13px;font-weight:700;color:var(--white); }
.ev-sp-r { font-size:11px;color:var(--w4);font-weight:300;margin-top:2px;line-height:1.4; }

/* TARJETA DE COMPRA */
.ev-side { position:sticky;top:80px; }
.ev-card { background:var(--card);border:1px solid var(--line2);border-radius:16px;padding:26px 24px; }
.ev-card-lbl { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--w4);margin-bottom:8px; }
.ev-precio { font-size:34px;font-weight:800;color:var(--white);letter-spacing:-.04em;line-height:1; }
.ev-precio small { font-size:12px;font-weight:400;color:var(--w4);letter-spacing:0; }

.ev-cd { margin:22px 0 18px;padding:14px 0;border-top:1px solid var(--line3);border-bottom:1px solid var(--line3); }
.ev-cd-lbl { font-family:var(--fm);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--w4);margin-bottom:10px; }
.ev-cd-row { display:flex;gap:10px; }
.ev-cd-b { display:flex;flex-direction:column;gap:2px;flex:1; }
.ev-cd-b b { font-size:20px;font-weight:800;color:var(--teal);letter-spacing:-.03em;font-variant-numeric:tabular-nums; }
.ev-cd-b span { font-size:9px;color:var(--w4);text-transform:uppercase;letter-spacing:.06em; }
.ev-cd-fin { margin:22px 0 18px;padding:14px 0;border-top:1px solid var(--line3);border-bottom:1px solid var(--line3);font-size:12px;color:var(--w4); }

.ev-buy { display:block;text-align:center;background:var(--teal);color:var(--bg);border-radius:10px;padding:14px;font-size:14px;font-weight:700;text-decoration:none;transition:background .15s; }
.ev-buy:hover { background:var(--teal2); }
.ev-buy.dis { background:var(--w5);color:var(--w4);border:1px solid var(--line2);cursor:not-allowed; }

.ev-incl { display:flex;flex-direction:column;gap:9px;margin-top:20px; }
.ev-in { display:flex;gap:9px;font-size:12px;color:var(--w2);font-weight:300;line-height:1.5; }
.ev-in span { color:var(--teal);font-weight:800;flex-shrink:0; }
.ev-seg { font-size:11px;color:var(--w4);font-weight:300;line-height:1.6;margin-top:18px;padding-top:16px;border-top:1px solid var(--line3); }

@media (max-width: 960px) {
  .ev-body { grid-template-columns:1fr;padding:32px 20px 64px;gap:36px; }
  .ev-side { position:static;order:-1; }
  .ev-hero { padding:28px 20px 36px; }
  .ev-ttl { font-size:30px; }
  .ev-meta { gap:14px;flex-direction:column; }
  .ev-spk { grid-template-columns:1fr; }
  .ev-se { grid-template-columns:56px 1fr;gap:12px; }
  .ev-se-b { grid-column:2;justify-self:start; }
}
</style>
