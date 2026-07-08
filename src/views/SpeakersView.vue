<template>
  <div class="page">

    <!-- NAV -->
    <nav class="nav">
      <router-link to="/" class="nav-logo">
        <img src="/FMDSlogo.png" alt="FMDS" style="height:38px;" />
      </router-link>
      <div class="nav-m">
        <router-link to="/" class="nbn">Congresos</router-link>
        <router-link to="/agenda" class="nbn">Agenda</router-link>
        <router-link to="/speakers" class="nbn active">Speakers</router-link>
        <router-link to="/registro" class="nbn">Registro & Pago</router-link>
      </div>
      <div class="nav-e">
        <router-link to="/login" class="ng">Iniciar sesión</router-link>
        <router-link to="/registro" class="nf">Registrarse →</router-link>
      </div>
      <button class="nav-burger" @click="mobileMenuOpen = !mobileMenuOpen" :aria-expanded="mobileMenuOpen" aria-label="Abrir menú">
        <svg v-if="!mobileMenuOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </nav>
    <div class="nav-mobile" v-if="mobileMenuOpen">
      <router-link to="/" class="nbn" @click="mobileMenuOpen = false">Congresos</router-link>
      <router-link to="/agenda" class="nbn" @click="mobileMenuOpen = false">Agenda</router-link>
      <router-link to="/speakers" class="nbn active" @click="mobileMenuOpen = false">Speakers</router-link>
      <router-link to="/registro" class="nbn" @click="mobileMenuOpen = false">Registro & Pago</router-link>
      <router-link to="/login" class="ng" @click="mobileMenuOpen = false">Iniciar sesión</router-link>
      <router-link to="/registro" class="nf" @click="mobileMenuOpen = false">Registrarse →</router-link>
    </div>

    <!-- HERO -->
    <div class="sp-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Ponentes 2026</span></div>
      <h1 class="sp-title"><strong>Speakers</strong> <em>magistrales</em></h1>
      <p class="sp-sub">Líderes, investigadores e innovadores que comparten su visión del futuro del software en México y el mundo.</p>
    </div>

    <!-- GRID -->
    <div class="sp-wrap">
      <div class="sp-grid">

        <!-- Featured speaker -->
        <div class="spk-feat">
          <div class="spk-feat-l">
            <div class="spk-av lg">DR</div>
          </div>
          <div class="spk-feat-r">
            <div class="spk-feat-tag">Keynote principal · CIIS 2026</div>
            <div class="spk-feat-nm">Dr. Alejandro Ramírez</div>
            <div class="spk-feat-rl">Director de Investigación · UNAM · Arquitectura Cloud</div>
            <div class="spk-feat-q">"El software mexicano está listo para competir a nivel global. Solo necesitamos los espacios correctos para demostrarlo."</div>
          </div>
        </div>

        <!-- Fila 1 -->
      <!-- Speakers cards -->
<div class="spk-card" v-for="s in speakers" :key="s.ini">
  <div class="spk-card-bg">
    <div class="spk-area-tag">{{ s.area }}</div>
    <div class="spk-av md">{{ s.ini }}</div>
  </div>
  <div class="spk-card-info">
    <div class="spk-nm">{{ s.nombre }}</div>
    <div class="spk-rl">{{ s.rol }}</div>
    <div class="spk-tp">{{ s.tema }}</div>
  </div>
</div>

      </div>

      <!-- CTA -->
      <div class="sp-cta">
        <router-link to="/registro" class="sp-btn">Quiero ser ponente ⟶</router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)

const speakers = [
  { ini: 'SC', nombre: 'Sofía Castro',   rol: 'Investigadora · UNAM',       area: 'IA',       tema: 'IA aplicada al desarrollo moderno' },
  { ini: 'MR', nombre: 'Miguel Reyes',   rol: 'CTO · FinTech México',        area: 'DevOps',   tema: 'CI/CD en equipos distribuidos' },
  { ini: 'AL', nombre: 'Ana López',      rol: 'Security Lead · TEC',         area: 'Security', tema: 'Ciberseguridad en APIs REST' },
  { ini: 'JM', nombre: 'Jorge Mendoza',  rol: 'Cloud Architect · Google MX', area: 'Cloud',    tema: 'Cloud-native para startups' },
  { ini: 'LV', nombre: 'Laura Vega',     rol: 'Design Lead · Clip México',   area: 'UX',       tema: 'Diseño de producto a escala' },
  { ini: 'FM', nombre: 'Dr. Fernando Méndez', rol: 'Director de Innovación · IPN', area: 'AI', tema: 'Machine Learning en desarrollo ágil' },
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
.nav-burger { display:none;background:none;border:none;color:var(--white);cursor:pointer;padding:6px;align-items:center;justify-content:center; }
.nav-mobile { display:none; }

.sp-hero { padding:52px 44px 48px;border-bottom:1px solid var(--line3);background:linear-gradient(160deg,var(--bg),var(--bg3)); }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:20px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.sp-title { font-size:52px;font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:14px; }
.sp-title strong { color:var(--white); }
.sp-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.sp-sub { font-size:14px;color:var(--w3);font-weight:300;max-width:500px;line-height:1.7; }

.sp-wrap { max-width:1100px;margin:0 auto;padding:48px 44px 80px; }

.sp-grid { display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px; }

/* Featured */
.spk-feat { grid-column:span 3;background:var(--card);border:1px solid var(--teal-b);border-radius:16px;padding:32px;display:grid;grid-template-columns:180px 1fr;gap:32px;align-items:center;margin-bottom:4px; }
.spk-feat-l { display:flex;align-items:center;justify-content:center; }
.spk-feat-tag { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:12px; }
.spk-feat-nm { font-size:26px;font-weight:800;color:var(--white);letter-spacing:-.04em;margin-bottom:6px; }
.spk-feat-rl { font-size:13px;color:var(--w3);font-weight:300;margin-bottom:20px; }
.spk-feat-q { font-family:var(--fs);font-style:italic;font-size:14px;color:var(--w2);line-height:1.7;border-left:2px solid var(--teal-b);padding-left:16px; }

/* Cards */
.sp-grid { display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px; }

.spk-card { background:var(--card);border:1px solid var(--line3);border-radius:16px;overflow:hidden;cursor:pointer;transition:all .18s;display:flex;flex-direction:column; }
.spk-card:hover { border-color:var(--teal-b);transform:translateY(-2px); }

.spk-card-bg { position:relative;height:220px;background:linear-gradient(160deg,#0C1830,#0D2040);display:flex;align-items:center;justify-content:center; }
.spk-card-bg::after { content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(6,9,15,.9) 0%,transparent 60%); }

.spk-area-tag { position:absolute;top:14px;right:14px;font-family:var(--fm);font-size:8px;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--teal-g);color:var(--teal);border:1px solid var(--teal-b);letter-spacing:.06em;z-index:2; }

.spk-av.md { width:80px;height:80px;font-size:20px;z-index:1; }

.spk-card-info { padding:18px 20px;display:flex;flex-direction:column;gap:4px; }
.spk-nm { font-size:16px;font-weight:700;color:var(--white);letter-spacing:-.02em; }
.spk-rl { font-size:12px;color:var(--w3);font-weight:300;margin-bottom:8px; }
.spk-tp { font-size:12px;font-weight:600;color:var(--teal); }
/* Avatares */
.spk-av { border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--f);font-weight:800;color:var(--teal);background:var(--teal-g);border:2px solid var(--teal-b); }
.spk-av.lg { width:100px;height:100px;font-size:28px; }
.spk-av.md { width:72px;height:72px;font-size:18px;margin:32px auto 16px; }

.spk-nm { font-size:16px;font-weight:700;color:var(--white);letter-spacing:-.02em;padding:0 20px;margin-bottom:4px; }
.spk-rl { font-size:12px;color:var(--w3);font-weight:300;padding:0 20px;margin-bottom:14px; }
.spk-tp { font-size:12px;font-weight:600;color:var(--teal);padding:14px 20px;border-top:1px solid var(--line3);margin-top:auto; }

.sp-cta { text-align:center;margin-top:52px; }
.sp-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:15px 36px;font-family:var(--f);font-size:14px;font-weight:700;cursor:pointer;transition:background .15s;text-decoration:none;display:inline-block; }
.sp-btn:hover { background:var(--teal2); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav { padding:0 20px; }
  .nav-m, .nav-e { display:none; }
  .nav-burger { display:flex; }
  .nav-mobile { display:flex;flex-direction:column;gap:4px;position:fixed;top:60px;left:0;right:0;background:var(--bg2);border-bottom:1px solid var(--line3);padding:16px 20px;z-index:999; }
  .nav-mobile .nbn { text-align:left;padding:10px 11px; }
  .nav-mobile .ng, .nav-mobile .nf { text-align:center;margin-top:6px; }

  .sp-hero { padding:44px 20px 36px; }
  .sp-title { font-size:36px; }
  .sp-wrap { padding:36px 20px 56px; }

  .sp-grid { grid-template-columns:1fr 1fr; }
  .spk-feat { grid-column:span 2;grid-template-columns:1fr;text-align:center;padding:24px; }
  .spk-feat-l { justify-content:center; }
}

@media (max-width: 560px) {
  .sp-grid { grid-template-columns:1fr; }
  .spk-feat { grid-column:span 1; }
}
</style>