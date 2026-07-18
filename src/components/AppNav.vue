<template>
  <nav class="nav">
    <router-link to="/" class="nav-logo">
      <img src="/FMDSlogo.png" alt="FMDS" style="height:32px" />
    </router-link>

    <div class="nav-m">
      <div class="ni">
        <button class="nbn" :class="{ active: ['eventos','agenda','speakers'].includes(route.name) }">
          Congresos
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dd">
          <div class="dl">Eventos 2026</div>
          <router-link to="/eventos" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <div><div class="da-t">Todos los eventos</div><div class="da-s">Congresos, simposios y summits</div></div>
          </router-link>
          <router-link to="/eventos" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <div><div class="da-t">Hackathon FMDS 2026</div><div class="da-s">$25,000 MXN en premios</div></div>
          </router-link>
          <div class="dsep"></div>
          <div class="dl">Programa</div>
          <router-link to="/agenda" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
            <div><div class="da-t">Agenda del congreso</div><div class="da-s">Horarios, sesiones y talleres</div></div>
          </router-link>
          <router-link to="/speakers" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div><div class="da-t">Speakers</div><div class="da-s">Ponentes internacionales</div></div>
          </router-link>
        </div>
      </div>

      <div class="ni">
        <button class="nbn" :class="{ active: ['articulos','cursos','galeria'].includes(route.name) }">
          Conocimiento
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dd">
          <router-link to="/articulos" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
            <div><div class="da-t">Artículos científicos</div><div class="da-s">48 publicaciones revisadas</div></div>
          </router-link>
          <router-link to="/cursos" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
            <div><div class="da-t">Cursos de actualización</div><div class="da-s">12 cursos técnicos en línea</div></div>
          </router-link>
          <div class="dsep"></div>
          <router-link to="/galeria" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
            <div><div class="da-t">Ediciones anteriores</div><div class="da-s">Galería y memorias</div></div>
          </router-link>
        </div>
      </div>

      <div class="ni">
        <button class="nbn">
          Comunidad
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dd">
          <router-link to="/speakers" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
            <div><div class="da-t">Nuestros speakers</div><div class="da-s">Conoce a los ponentes</div></div>
          </router-link>
          <router-link to="/registro" class="da">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div><div class="da-t">Ser ponente</div><div class="da-s">Envía tu propuesta</div></div>
          </router-link>
          <div class="dsep"></div>
          <div class="da noop">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg></div>
            <div><div class="da-t">Red nacional</div><div class="da-s">12 estados representados</div></div>
          </div>
        </div>
      </div>

      <div class="ni">
        <button class="nbn">
          Nosotros
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dd">
          <div class="da noop">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div><div class="da-t">Misión y valores</div><div class="da-s">Por qué existe FMDS</div></div>
          </div>
          <div class="da noop">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
            <div><div class="da-t">Instituciones aliadas</div><div class="da-s">UTM, UNAM, TEC y más</div></div>
          </div>
          <div class="da noop">
            <div class="da-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <div><div class="da-t">Contacto</div><div class="da-s">contacto@fmds.mx</div></div>
          </div>
        </div>
      </div>

      <router-link to="/registro" class="nbn" :class="{ active: route.name === 'registro' }">Registro & Pago</router-link>
    </div>

    <div class="nav-e">
      <template v-if="!token">
        <router-link to="/login" class="ng">Iniciar sesión</router-link>
        <router-link to="/crear-cuenta" class="nf">Crear cuenta →</router-link>
      </template>
      <template v-else>
        <span class="nav-user">{{ nombre }}</span>
        <button @click="logout" class="ng">Cerrar sesión</button>
      </template>
    </div>

    <button class="nav-burger" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Abrir menú">
      <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </nav>

  <div class="nav-mobile" v-if="mobileOpen">
    <router-link to="/eventos" class="nbn" @click="mobileOpen = false">Congresos</router-link>
    <router-link to="/agenda" class="nbn" @click="mobileOpen = false">Agenda</router-link>
    <router-link to="/speakers" class="nbn" @click="mobileOpen = false">Speakers</router-link>
    <router-link to="/articulos" class="nbn" @click="mobileOpen = false">Artículos</router-link>
    <router-link to="/cursos" class="nbn" @click="mobileOpen = false">Cursos</router-link>
    <router-link to="/galeria" class="nbn" @click="mobileOpen = false">Galería</router-link>
    <router-link to="/registro" class="nbn" @click="mobileOpen = false">Registro & Pago</router-link>
    <template v-if="!token">
      <router-link to="/login" class="ng" @click="mobileOpen = false">Iniciar sesión</router-link>
      <router-link to="/crear-cuenta" class="nf" @click="mobileOpen = false">Crear cuenta →</router-link>
    </template>
    <template v-else>
      <button class="ng" @click="logout">Cerrar sesión</button>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const mobileOpen = ref(false)
const token = localStorage.getItem('token')
const nombre = localStorage.getItem('nombre')

const logout = () => {
  localStorage.clear()
  router.push({ name: 'login' })
}
</script>

<style scoped>
.nav { height:60px;background:rgba(6,9,15,.96);backdrop-filter:blur(24px);border-bottom:1px solid var(--line3);display:flex;align-items:center;justify-content:space-between;padding:0 36px;position:fixed;top:0;left:0;right:0;z-index:1000; }
.nav-logo { cursor:pointer;display:flex;align-items:center; }

.nav-m { display:flex;gap:2px;align-items:center; }
.ni { position:relative; }
.nbn { display:flex;align-items:center;gap:4px;font-family:var(--f);font-size:12px;font-weight:400;color:var(--w3);background:none;border:none;cursor:pointer;padding:8px 11px;border-radius:7px;transition:all .15s;text-decoration:none; }
.nbn:hover, .nbn.active { color:var(--teal);background:var(--teal-g); }
.nbn svg { width:9px;height:9px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .15s; }
.ni:hover .nbn svg { transform:rotate(180deg); }

.dd { position:absolute;top:calc(100% + 6px);left:0;background:var(--card2);border:1px solid var(--line2);border-radius:12px;padding:6px;min-width:228px;opacity:0;visibility:hidden;transform:translateY(-8px);transition:all .15s;z-index:200;box-shadow:0 24px 64px rgba(0,0,0,.6); }
.ni:hover .dd { opacity:1;visibility:visible;transform:translateY(0); }
.dl { font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--w4);padding:6px 9px 3px;margin-top:4px; }
.dl:first-child { margin-top:0; }
.da { display:flex;align-items:center;gap:10px;padding:9px;border-radius:8px;cursor:pointer;transition:background .12s;text-decoration:none; }
.da:hover { background:var(--teal-g); }
.da.noop { cursor:default; }
.da.noop:hover { background:none; }
.da-ic { width:26px;height:26px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
.da-ic svg { width:12px;height:12px; }
.da-t { font-size:12px;font-weight:600;color:var(--white); }
.da-s { font-size:10px;color:var(--w4);font-weight:300;margin-top:1px; }
.dsep { height:1px;background:var(--line3);margin:5px 0; }

.nav-e { display:flex;gap:8px;align-items:center; }
.nav-user { font-size:12px;color:var(--w3); }
.ng { font-family:var(--f);font-size:12px;font-weight:500;border-radius:7px;padding:7px 14px;cursor:pointer;background:var(--w5);border:1px solid var(--line2);color:var(--w3);transition:all .15s;text-decoration:none; }
.ng:hover { border-color:var(--teal-b);color:var(--white); }
.nf { font-family:var(--f);font-size:12px;font-weight:700;border-radius:7px;padding:7px 16px;cursor:pointer;background:var(--teal);border:none;color:var(--bg);transition:background .15s;text-decoration:none; }
.nf:hover { background:var(--teal2); }

.nav-burger { display:none;background:none;border:none;color:var(--white);cursor:pointer;padding:6px;align-items:center;justify-content:center; }
.nav-mobile { display:none; }

@media (max-width: 968px) {
  .nav { padding:0 20px; }
  .nav-m, .nav-e { display:none; }
  .nav-burger { display:flex; }
  .nav-mobile { display:flex;flex-direction:column;gap:4px;position:fixed;top:60px;left:0;right:0;background:var(--bg2);border-bottom:1px solid var(--line3);padding:16px 20px;z-index:999;max-height:calc(100vh - 60px);overflow-y:auto; }
  .nav-mobile .nbn { text-align:left;padding:10px 11px; }
  .nav-mobile .ng, .nav-mobile .nf { text-align:center;margin-top:6px; }
}
</style>
