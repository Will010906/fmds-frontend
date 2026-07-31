<template>
  <div class="page">

    <AppNav />

    <!-- HERO -->
    <div class="ns-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Quiénes somos</span></div>
      <h1 class="ns-ttl"><strong>Una voz independiente</strong><br><em>para el software mexicano</em></h1>
      <p class="ns-sub">
        La Federación Mexicana de Desarrolladores de Software es una organización académica y
        profesional dedicada a la divulgación científica neutral y a la actualización continua de
        la comunidad tecnológica del país.
      </p>
    </div>

    <!-- MISIÓN -->
    <section class="ns-sec">
      <div class="ns-grid">
        <div>
          <div class="ns-lbl">Nuestra misión</div>
          <h2 class="ns-h2">Conocimiento de calidad, sin intereses de por medio</h2>
          <p class="ns-p">
            La FMDS nace para llenar el vacío de una comunidad académica neutral en México: sin
            patrocinios que comprometan la objetividad, sin barreras de acceso y con estándares de
            rigor internacional. Organizamos congresos, publicamos artículos con revisión por pares
            y ofrecemos cursos de actualización abiertos a todo el país.
          </p>
        </div>
        <div class="ns-vals">
          <div class="ns-val" v-for="(v, i) in valores" :key="v.titulo">
            <div class="ns-val-n">{{ String(i + 1).padStart(2, '0') }}</div>
            <div>
              <div class="ns-val-t">{{ v.titulo }}</div>
              <div class="ns-val-d">{{ v.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUÉ HACEMOS -->
    <section class="ns-sec alt">
      <div class="ns-lbl">Qué hacemos</div>
      <h2 class="ns-h2 c">Tres frentes de trabajo</h2>
      <div class="ns-cards">
        <router-link to="/eventos" class="ns-card">
          <div class="ns-card-t">Congresos</div>
          <p class="ns-card-d">Encuentros presenciales con ponentes, talleres prácticos y espacios de vinculación para la comunidad.</p>
          <span class="ns-card-l">Ver eventos →</span>
        </router-link>
        <router-link to="/articulos" class="ns-card">
          <div class="ns-card-t">Divulgación científica</div>
          <p class="ns-card-d">Repositorio abierto de artículos con revisión por pares, sin vínculos comerciales ni sesgos institucionales.</p>
          <span class="ns-card-l">Leer artículos →</span>
        </router-link>
        <router-link to="/cursos" class="ns-card">
          <div class="ns-card-t">Formación continua</div>
          <p class="ns-card-d">Cursos técnicos en línea para que profesionales y estudiantes mantengan sus habilidades al día.</p>
          <span class="ns-card-l">Ver cursos →</span>
        </router-link>
      </div>
    </section>

    <!-- CONTACTO -->
    <section class="ns-sec" id="contacto">
      <div class="ns-cont">
        <div class="ns-cont-l">
          <div class="ns-lbl">Contacto</div>
          <h2 class="ns-h2">Escríbenos</h2>
          <p class="ns-p">
            ¿Quieres presentar una ponencia, publicar un artículo o proponer una alianza?
            Cuéntanos y te respondemos al correo que nos dejes.
          </p>
          <div class="ns-datos">
            <div class="ns-dato">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              contacto@fmds.mx
            </div>
            <div class="ns-dato">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Morelia, Michoacán · México
            </div>
            <div class="ns-dato">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Lunes a viernes · 9:00–18:00 hrs
            </div>
          </div>
        </div>

        <div class="ns-form">
          <div v-if="enviado" class="ns-ok">
            <div class="ns-ok-t">✓ Mensaje enviado</div>
            <p class="ns-ok-d">Gracias por escribirnos. Te responderemos al correo que nos dejaste.</p>
            <button class="ns-otro" @click="reiniciar">Enviar otro mensaje</button>
          </div>

          <template v-else>
            <div class="ns-f">
              <label class="ns-f-l">Asunto</label>
              <select v-model="form.asunto" class="ns-f-i">
                <option v-for="a in asuntos" :key="a" :value="a">{{ a }}</option>
              </select>
            </div>
            <div class="ns-f">
              <label class="ns-f-l">Tu nombre</label>
              <input v-model="form.nombre" type="text" placeholder="Nombre completo" class="ns-f-i" />
            </div>
            <div class="ns-f">
              <label class="ns-f-l">Tu correo</label>
              <input v-model="form.correo" type="email" placeholder="tucorreo@ejemplo.com" class="ns-f-i" />
            </div>
            <div class="ns-f">
              <label class="ns-f-l">Mensaje</label>
              <textarea v-model="form.mensaje" rows="5" placeholder="Cuéntanos brevemente de qué se trata." class="ns-f-i"></textarea>
            </div>

            <p v-if="error" class="ns-err">{{ error }}</p>

            <button class="ns-btn" @click="enviar" :disabled="enviando">
              {{ enviando ? 'Enviando…' : 'Enviar mensaje ⟶' }}
            </button>
            <p class="ns-nota">Usaremos tu correo únicamente para responder a este mensaje.</p>
          </template>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../services/api'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'

const route = useRoute()

const valores = [
  { titulo: 'Neutralidad académica', desc: 'Sin afiliaciones comerciales que condicionen lo que se publica.' },
  { titulo: 'Accesibilidad nacional', desc: 'Precios justos para estudiantes de cualquier estado del país.' },
  { titulo: 'Rigor en la revisión', desc: 'Los artículos pasan por revisión de pares antes de publicarse.' },
  { titulo: 'Tecnología propia', desc: 'Plataforma autoadministrable desarrollada en México.' },
]

const asuntos = [
  'Consulta general',
  'Propuesta de ponencia',
  'Publicar artículo',
  'Alianzas y patrocinios',
]

const form = ref({ asunto: 'Consulta general', nombre: '', correo: '', mensaje: '' })
const enviando = ref(false)
const enviado = ref(false)
const error = ref('')

// Los botones del sitio (ser ponente, publicar artículo, alianzas) llegan aquí
// con el asunto ya elegido mediante ?asunto=
onMounted(() => {
  const a = route.query.asunto
  if (a && asuntos.includes(a)) form.value.asunto = a
})

const enviar = async () => {
  error.value = ''
  if (!form.value.nombre.trim() || !form.value.mensaje.trim()) {
    error.value = 'Completa tu nombre y el mensaje.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.correo)) {
    error.value = 'Ingresa un correo válido para poder responderte.'
    return
  }
  enviando.value = true
  try {
    await api.post('/mensajes', form.value)
    enviado.value = true
  } catch (err) {
    error.value = err.response?.data?.error || 'No pudimos enviar tu mensaje, intenta de nuevo.'
  } finally {
    enviando.value = false
  }
}

const reiniciar = () => {
  form.value = { asunto: 'Consulta general', nombre: '', correo: '', mensaje: '' }
  enviado.value = false
}
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }

/* HERO */
.ns-hero { background:linear-gradient(160deg,var(--bg3),var(--bg));border-bottom:1px solid var(--line3);padding:64px 44px 60px; }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:22px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.ns-ttl { font-size:46px;font-weight:800;letter-spacing:-.05em;line-height:1.1;margin-bottom:20px; }
.ns-ttl strong { color:var(--white); }
.ns-ttl em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.ns-sub { font-size:14px;color:var(--w3);font-weight:300;line-height:1.85;max-width:620px; }

/* SECCIONES */
.ns-sec { padding:64px 44px;max-width:1140px;margin:0 auto; }
.ns-sec.alt { background:var(--bg2);border-top:1px solid var(--line3);border-bottom:1px solid var(--line3);max-width:none; }
.ns-lbl { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);margin-bottom:14px; }
.ns-h2 { font-size:26px;font-weight:800;color:var(--white);letter-spacing:-.04em;line-height:1.25;margin-bottom:16px; }
.ns-h2.c { text-align:center; }
.ns-sec.alt .ns-lbl { text-align:center; }
.ns-p { font-size:14px;color:var(--w2);font-weight:300;line-height:1.9; }

.ns-grid { display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start; }
.ns-vals { display:flex;flex-direction:column;gap:14px; }
.ns-val { display:flex;gap:16px;background:var(--card);border:1px solid var(--line3);border-radius:12px;padding:18px 20px;transition:border-color .15s; }
.ns-val:hover { border-color:var(--teal-b); }
.ns-val-n { font-family:var(--fm);font-size:10px;font-weight:600;color:var(--teal);flex-shrink:0;padding-top:2px; }
.ns-val-t { font-size:14px;font-weight:700;color:var(--white);margin-bottom:4px; }
.ns-val-d { font-size:12px;color:var(--w3);font-weight:300;line-height:1.65; }

/* QUÉ HACEMOS */
.ns-cards { display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:1140px;margin:32px auto 0; }
.ns-card { background:var(--card);border:1px solid var(--line3);border-radius:14px;padding:26px 24px;text-decoration:none;display:flex;flex-direction:column;gap:10px;transition:all .18s; }
.ns-card:hover { border-color:var(--teal-b);transform:translateY(-2px); }
.ns-card-t { font-size:16px;font-weight:700;color:var(--white);letter-spacing:-.02em; }
.ns-card-d { font-size:12px;color:var(--w3);font-weight:300;line-height:1.75;flex:1; }
.ns-card-l { font-size:12px;color:var(--teal);font-weight:600; }

/* CONTACTO */
.ns-cont { display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start; }
.ns-datos { display:flex;flex-direction:column;gap:12px;margin-top:26px; }
.ns-dato { display:flex;align-items:center;gap:10px;font-size:13px;color:var(--w2);font-weight:300; }
.ns-dato svg { width:15px;height:15px;fill:none;stroke:var(--teal);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0; }

.ns-form { background:var(--card);border:1px solid var(--line2);border-radius:16px;padding:28px 26px;display:flex;flex-direction:column;gap:16px; }
.ns-f { display:flex;flex-direction:column;gap:6px; }
.ns-f-l { font-size:12px;font-weight:500;color:var(--w3); }
.ns-f-i { background:var(--bg3);border:1px solid var(--line2);border-radius:10px;padding:12px 14px;font-family:var(--f);font-size:13px;color:var(--white);outline:none;transition:border-color .15s;width:100%;resize:vertical; }
.ns-f-i:focus { border-color:var(--teal-b); }
.ns-f-i::placeholder { color:var(--w4); }
.ns-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:14px;font-family:var(--f);font-size:14px;font-weight:700;cursor:pointer;transition:background .15s; }
.ns-btn:hover { background:var(--teal2); }
.ns-btn:disabled { opacity:.55;cursor:not-allowed; }
.ns-err { font-size:12px;color:#f87171; }
.ns-nota { font-size:11px;color:var(--w4);font-weight:300;text-align:center;line-height:1.6; }

.ns-ok { text-align:center;padding:24px 0; }
.ns-ok-t { font-size:17px;font-weight:800;color:var(--teal);margin-bottom:10px; }
.ns-ok-d { font-size:13px;color:var(--w3);font-weight:300;line-height:1.75;margin-bottom:22px; }
.ns-otro { background:var(--w5);border:1px solid var(--line2);color:var(--w2);border-radius:10px;padding:11px 22px;font-family:var(--f);font-size:12px;font-weight:500;cursor:pointer;transition:all .15s; }
.ns-otro:hover { border-color:var(--teal-b);color:var(--white); }

@media (max-width: 900px) {
  .ns-hero { padding:48px 20px 44px; }
  .ns-ttl { font-size:32px; }
  .ns-sec { padding:44px 20px; }
  .ns-grid, .ns-cont { grid-template-columns:1fr;gap:32px; }
  .ns-cards { grid-template-columns:1fr; }
  .ns-h2 { font-size:22px; }
}
</style>
