<template>
  <div class="page">

    <!-- NAV -->
    <nav class="nav">
      <router-link to="/" class="nav-logo">
        <img src="/FMDSlogo.png" alt="FMDS" style="height:38px;" />
      </router-link>
      <div class="nav-m">
        <router-link to="/" class="nbn">Congresos</router-link>
        <router-link to="/articulos" class="nbn active">Conocimientos</router-link>
        <router-link to="/speakers" class="nbn">Comunidad</router-link>
        <router-link to="/registro" class="nbn">Registro & Pago</router-link>
      </div>
      <div class="nav-e">
        <router-link to="/login" class="ng">Iniciar sesión</router-link>
        <router-link to="/registro" class="nf">Registrarse →</router-link>
      </div>
    </nav>

    <!-- HERO -->
    <div class="art-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Repositorio científico</span></div>
      <h1 class="art-title"><strong>Artículos</strong> <em>recientes</em></h1>
      <p class="art-sub">48 publicaciones con revisión por pares. Sin vínculos comerciales ni sesgos institucionales.</p>
    </div>

    <!-- FILTROS -->
    <div class="art-wrap">
      <div class="art-filters">
        <button
          v-for="cat in categorias"
          :key="cat"
          class="art-filter"
          :class="{ active: categoriaActiva === cat }"
          @click="categoriaActiva = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- LISTA -->
      <div class="art-list">
        <div
          v-for="(art, i) in articulosFiltrados"
          :key="i"
          class="art-item"
        >
          <div class="art-item-l">
            <div class="art-num-cat">
              <span class="art-num">0{{ i + 1 }}</span>
              <span class="art-cat" :style="{ color: art.color }">{{ art.categoria }}</span>
            </div>
            <div class="art-nm">{{ art.titulo }}</div>
            <div class="art-by">{{ art.autor }}</div>
          </div>
          <div class="art-badge">Revisado</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="art-cta">
        <button class="art-btn">Publicar artículo ⟶</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categoriaActiva = ref('Todos')
const categorias = ['Todos', 'Arquitectura', 'Seguridad', 'Metodologías', 'IA', 'Base de Datos']

const articulos = [
  { categoria: 'Arquitectura',        color: '#2DD4B4', titulo: 'Patrones de microservicios en entornos cloud-native: análisis 2025',               autor: 'Dr. Ramírez · UTM · Jun 2025' },
  { categoria: 'Seguridad',           color: '#F59E0B', titulo: 'JWT stateless en APIs REST: vulnerabilidades comunes y mitigaciones eficaces',      autor: 'Ing. Flores · UNAM · May 2025' },
  { categoria: 'Metodologías',        color: '#818CF8', titulo: 'Scrum escalado en equipos distribuidos: lecciones de proyectos nacionales',         autor: 'Mtra. López · TEC · Abr 2025' },
  { categoria: 'IA',                  color: '#34D399', titulo: 'Modelos de lenguaje en la generación asistida de código: evaluación comparativa',   autor: 'Dr. Santos · IPN · Mar 2025' },
  { categoria: 'Base de Datos',       color: '#60A5FA', titulo: 'Optimización de consultas en MySQL para aplicaciones de alta concurrencia',         autor: 'Ing. Torres · UAG · Feb 2025' },
  { categoria: 'Arquitectura',        color: '#2DD4B4', titulo: 'Event-driven architecture con Apache Kafka en sistemas financieros',                autor: 'Dr. Méndez · UNAM · Ene 2025' },
  { categoria: 'Seguridad',           color: '#F59E0B', titulo: 'Zero Trust en infraestructuras cloud: implementación práctica',                     autor: 'Ing. Castro · TEC · Dic 2024' },
  { categoria: 'IA',                  color: '#34D399', titulo: 'Redes neuronales convolucionales para detección de bugs en código fuente',          autor: 'Dra. Vega · IPN · Nov 2024' },
]

const articulosFiltrados = computed(() => {
  if (categoriaActiva.value === 'Todos') return articulos
  return articulos.filter(a => a.categoria === categoriaActiva.value)
})
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

.art-hero { padding:52px 44px 48px;border-bottom:1px solid var(--line3);background:linear-gradient(160deg,var(--bg),var(--bg3)); }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:20px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.art-title { font-size:52px;font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:14px; }
.art-title strong { color:var(--white); }
.art-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.art-sub { font-size:14px;color:var(--w3);font-weight:300;max-width:480px;line-height:1.7; }

.art-wrap { max-width:1000px;margin:0 auto;padding:40px 44px 80px; }

/* FILTROS */
.art-filters { display:flex;gap:8px;margin-bottom:32px;flex-wrap:wrap; }
.art-filter { background:var(--w5);border:1px solid var(--line2);border-radius:100px;padding:7px 16px;font-family:var(--f);font-size:12px;font-weight:500;color:var(--w3);cursor:pointer;transition:all .15s; }
.art-filter:hover { border-color:var(--teal-b);color:var(--white); }
.art-filter.active { background:var(--teal-g);border-color:var(--teal-b);color:var(--teal); }

/* LISTA */
.art-list { border:1px solid var(--line3);border-radius:14px;overflow:hidden; }
.art-item { display:flex;justify-content:space-between;align-items:center;padding:24px 28px;border-bottom:1px solid var(--line3);cursor:pointer;transition:background .15s;gap:20px; }
.art-item:last-child { border-bottom:none; }
.art-item:hover { background:var(--card); }
.art-item-l { display:flex;flex-direction:column;gap:8px;flex:1; }
.art-num-cat { display:flex;align-items:center;gap:10px; }
.art-num { font-family:var(--fm);font-size:9px;font-weight:500;color:var(--w4); }
.art-cat { font-family:var(--fm);font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase; }
.art-nm { font-family:var(--fs);font-style:italic;font-size:16px;color:var(--white);line-height:1.4; }
.art-by { font-size:11px;color:var(--w4);font-weight:300; }
.art-badge { font-size:10px;font-weight:600;padding:5px 14px;border-radius:100px;background:var(--teal-g);color:var(--teal);border:1px solid var(--teal-b);white-space:nowrap;flex-shrink:0; }

.art-cta { text-align:center;margin-top:48px; }
.art-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:15px 36px;font-family:var(--f);font-size:14px;font-weight:700;cursor:pointer;transition:background .15s; }
.art-btn:hover { background:var(--teal2); }
</style>