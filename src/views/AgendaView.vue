<template>
  <div class="page">

    <!-- NAV (mismo que HomeView) -->
    <nav class="nav">
      <router-link to="/" class="nav-logo">
        <img src="/FMDSlogo.png" alt="FMDS" style="height:38px;" />
      </router-link>
      <div class="nav-m">
        <router-link to="/" class="nbn">Congresos</router-link>
        <router-link to="/agenda" class="nbn active">Agenda</router-link>
        <router-link to="/eventos" class="nbn">Registro & Pago</router-link>
      </div>
      <div class="nav-e">
        <router-link to="/login" class="ng">Iniciar sesión</router-link>
        <router-link to="/eventos" class="nf">Registrarse →</router-link>
      </div>
    </nav>

    <!-- HERO -->
    <div class="ag-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">CIIS 2026 · Programa oficial</span></div>
      <h1 class="ag-title"><strong>Agenda</strong> <em>del congreso</em></h1>
      <p class="ag-sub">3 días · 24 sesiones · 8 talleres técnicos · Networking y feria de proyectos estudiantiles.</p>
    </div>

    <!-- TABS -->
    <div class="ag-wrap">
      <div class="ag-tabs">
        <button
          v-for="(dia, i) in dias"
          :key="i"
          class="ag-tab"
          :class="{ active: diaActivo === i }"
          @click="diaActivo = i"
        >
          {{ dia.label }}
        </button>
      </div>

      <!-- SESIONES -->
      <div class="ag-list">
        <div
          v-for="(sesion, i) in dias[diaActivo].sesiones"
          :key="i"
          class="ag-item"
        >
          <div class="ag-time">
            <div class="ag-hr">{{ sesion.hora }}</div>
            <div class="ag-dur">{{ sesion.duracion }}</div>
          </div>
          <div class="ag-sep"></div>
          <div class="ag-info">
            <div class="ag-tipo">
              <span class="ag-dot" :style="{ background: sesion.color }"></span>
              {{ sesion.tipo }}
            </div>
            <div class="ag-nm">{{ sesion.nombre }}</div>
            <div class="ag-by">{{ sesion.ponente }}</div>
          </div>
          <div class="ag-badge" :style="{ borderColor: sesion.color, color: sesion.color }">
            {{ sesion.badge }}
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="ag-cta">
        <router-link to="/eventos" class="ag-btn">Reservar mi lugar ⟶</router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const diaActivo = ref(0)

const dias = [
  {
    label: 'Día 1 · 14 Agosto',
    sesiones: [
      { hora: '9:00',  duracion: '90 min', tipo: 'Keynote de apertura',   nombre: 'La nueva era del software mexicano',                    ponente: 'Dr. Alejandro Ramírez · UNAM',          badge: 'Keynote',  color: '#2DD4B4' },
      { hora: '11:00', duracion: '60 min', tipo: 'Workshop técnico',      nombre: 'Arquitectura de microservicios con Node.js y Docker',   ponente: 'Ing. Mario Torres · Microsoft México',   badge: 'Workshop', color: '#F59E0B' },
      { hora: '13:00', duracion: '60 min', tipo: 'Panel de discusión',    nombre: 'IA en el desarrollo: oportunidades y riesgos reales',   ponente: 'Panel con 4 ponentes internacionales',   badge: 'Panel',    color: '#6B7280' },
      { hora: '15:30', duracion: '90 min', tipo: 'Conferencia magistral', nombre: 'Seguridad en APIs REST: del JWT al Zero Trust',         ponente: 'Dra. Ana López · TEC de Monterrey',     badge: 'Keynote',  color: '#2DD4B4' },
      { hora: '17:30', duracion: '45 min', tipo: 'Workshop práctico',     nombre: 'CI/CD con GitHub Actions: de cero a producción',        ponente: 'Miguel Reyes · FinTech México',          badge: 'Workshop', color: '#F59E0B' },
      { hora: '19:00', duracion: '60 min', tipo: 'Cierre del día',        nombre: 'Networking & Feria de proyectos estudiantiles',         ponente: 'Todos los asistentes',                   badge: 'Social',   color: '#6B7280' },
    ]
  },
  {
    label: 'Día 2 · 15 Agosto',
    sesiones: [
      { hora: '9:00',  duracion: '90 min', tipo: 'Keynote',               nombre: 'El futuro de la IA en México',                         ponente: 'Dra. Sofía Castro · UNAM',               badge: 'Keynote',  color: '#2DD4B4' },
      { hora: '11:00', duracion: '60 min', tipo: 'Workshop técnico',      nombre: 'Vue.js 3 + TypeScript en producción',                  ponente: 'Ing. Luis Herrera · Google México',      badge: 'Workshop', color: '#F59E0B' },
      { hora: '13:00', duracion: '60 min', tipo: 'Panel de discusión',    nombre: 'Startups de software: casos de éxito nacionales',      ponente: 'Panel con 5 fundadores',                 badge: 'Panel',    color: '#6B7280' },
      { hora: '15:30', duracion: '90 min', tipo: 'Conferencia magistral', nombre: 'Machine Learning aplicado al desarrollo ágil',         ponente: 'Dr. Fernando Méndez · IPN',              badge: 'Keynote',  color: '#2DD4B4' },
      { hora: '17:30', duracion: '45 min', tipo: 'Workshop práctico',     nombre: 'Docker + Kubernetes para equipos pequeños',            ponente: 'Carlos Vega · AWS México',               badge: 'Workshop', color: '#F59E0B' },
      { hora: '19:00', duracion: '60 min', tipo: 'Cierre del día',        nombre: 'Cena de networking y premiación parcial',              ponente: 'Todos los asistentes',                   badge: 'Social',   color: '#6B7280' },
    ]
  },
  {
    label: 'Día 3 · 16 Agosto',
    sesiones: [
      { hora: '9:00',  duracion: '60 min', tipo: 'Keynote de cierre',     nombre: 'Hacia una federación sólida de software en México',    ponente: 'Comité directivo FMDS',                  badge: 'Keynote',  color: '#2DD4B4' },
      { hora: '10:30', duracion: '90 min', tipo: 'Feria de proyectos',    nombre: 'Presentación de proyectos estudiantiles',              ponente: 'Equipos inscritos',                       badge: 'Social',   color: '#6B7280' },
      { hora: '13:00', duracion: '60 min', tipo: 'Workshop técnico',      nombre: 'Publicación de artículos científicos paso a paso',     ponente: 'Comité editorial FMDS',                  badge: 'Workshop', color: '#F59E0B' },
      { hora: '15:00', duracion: '90 min', tipo: 'Ceremonia de clausura', nombre: 'Premiación hackathon + mejores ponencias',             ponente: 'Todos los asistentes',                   badge: 'Keynote',  color: '#2DD4B4' },
    ]
  },
]
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }

.nav { height:60px;background:rgba(6,9,15,.96);backdrop-filter:blur(24px);border-bottom:1px solid var(--line3);display:flex;align-items:center;justify-content:space-between;padding:0 36px;position:fixed;top:0;left:0;right:0;z-index:1000; }
.nav-m { display:flex;gap:2px; }
.nbn { font-family:var(--f);font-size:12px;color:var(--w3);padding:8px 11px;border-radius:7px;transition:all .15s;text-decoration:none;background:none;border:none;cursor:pointer; }
.nbn:hover,.nbn.active { color:var(--teal);background:var(--teal-g); }
.nav-e { display:flex;gap:8px; }
.ng { font-family:var(--f);font-size:12px;font-weight:500;border-radius:7px;padding:7px 14px;cursor:pointer;background:var(--w5);border:1px solid var(--line2);color:var(--w3);transition:all .15s;text-decoration:none; }
.ng:hover { border-color:var(--teal-b);color:var(--white); }
.nf { font-family:var(--f);font-size:12px;font-weight:700;border-radius:7px;padding:7px 16px;cursor:pointer;background:var(--teal);border:none;color:var(--bg);transition:background .15s;text-decoration:none; }
.nf:hover { background:var(--teal2); }

.ag-hero { background:linear-gradient(160deg,var(--bg),var(--bg3));border-bottom:1px solid var(--line3);padding:52px 44px 48px; }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:20px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.ag-title { font-size:52px;font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:16px; }
.ag-title strong { color:var(--white); }
.ag-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.ag-sub { font-size:14px;color:var(--w3);font-weight:300; }

.ag-wrap { max-width:900px;margin:0 auto;padding:48px 44px 80px; }

.ag-tabs { display:flex;gap:0;border-bottom:1px solid var(--line3);margin-bottom:36px; }
.ag-tab { background:none;border:none;border-bottom:2px solid transparent;padding:12px 20px;font-family:var(--f);font-size:13px;font-weight:500;color:var(--w4);cursor:pointer;transition:all .15s;margin-bottom:-1px; }
.ag-tab:hover { color:var(--white); }
.ag-tab.active { color:var(--teal);border-bottom-color:var(--teal); }

.ag-list { display:flex;flex-direction:column;gap:12px; }
.ag-item { background:var(--card);border:1px solid var(--line3);border-radius:14px;padding:24px 28px;display:grid;grid-template-columns:80px 1px 1fr auto;gap:24px;align-items:center;transition:border-color .15s; }
.ag-item:hover { border-color:var(--teal-b); }

.ag-time { display:flex;flex-direction:column;gap:4px; }
.ag-hr { font-family:var(--f);font-size:22px;font-weight:800;color:var(--teal);letter-spacing:-.03em; }
.ag-dur { font-size:11px;color:var(--w4); }

.ag-sep { width:1px;height:100%;background:var(--line3);align-self:stretch; }

.ag-info { display:flex;flex-direction:column;gap:6px; }
.ag-tipo { display:flex;align-items:center;gap:6px;font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4); }
.ag-dot { width:5px;height:5px;border-radius:50%; }
.ag-nm { font-size:15px;font-weight:700;color:var(--white);letter-spacing:-.02em; }
.ag-by { font-size:12px;color:var(--w3);font-weight:300; }

.ag-badge { font-size:10px;font-weight:600;padding:5px 12px;border-radius:100px;border:1px solid;background:transparent;white-space:nowrap; }

.ag-cta { text-align:center;margin-top:48px; }
.ag-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:15px 36px;font-family:var(--f);font-size:14px;font-weight:700;cursor:pointer;transition:background .15s;text-decoration:none;display:inline-block; }
.ag-btn:hover { background:var(--teal2); }
</style>