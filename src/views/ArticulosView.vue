<template>
  <div class="page">

    <AppNav />

    <!-- HERO -->
    <div class="art-hero">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Repositorio científico</span></div>
      <h1 class="art-title"><strong>Artículos</strong> <em>recientes</em></h1>
      <p class="art-sub">{{ articulos.length }} {{ articulos.length === 1 ? 'publicación' : 'publicaciones' }} con revisión por pares. Sin vínculos comerciales ni sesgos institucionales.</p>
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
      <div v-if="articulosFiltrados.length === 0" class="art-empty">
        {{ articulos.length === 0 ? 'Aún no hay artículos publicados en el repositorio.' : 'No hay artículos disponibles en esta categoría.' }}
      </div>
      <div v-else class="art-list">
        <div
          v-for="(art, i) in articulosFiltrados"
          :key="art.idArticulo"
          class="art-item"
        >
          <div class="art-item-l">
            <div class="art-num-cat">
              <span class="art-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="art-cat" :style="{ color: colorDe(art.categoria) }">{{ art.categoria }}</span>
            </div>
            <div class="art-nm">{{ art.titulo }}</div>
            <div class="art-by">{{ art.autor }} · {{ formatFecha(art.fechaPublicacion) }}</div>
          </div>
          <div class="art-badge">Revisado</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="art-cta">
        <router-link :to="{ name: 'nosotros', query: { asunto: 'Publicar artículo' }, hash: '#contacto' }" class="art-btn">Publicar artículo ⟶</router-link>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../services/api'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'

const categoriaActiva = ref('Todos')
const articulos = ref([])

// Color de acento por categoría (las categorías vienen de la BD)
const COLORES = {
  'Arquitectura': '#2DD4B4',
  'Seguridad': '#F59E0B',
  'Metodologías': '#818CF8',
  'IA': '#34D399',
  'Base de Datos': '#60A5FA',
}
const colorDe = (categoria) => COLORES[categoria] || '#2DD4B4'

// Chips de filtro generados a partir de las categorías reales registradas
const categorias = computed(() => ['Todos', ...new Set(articulos.value.map(a => a.categoria))])

const articulosFiltrados = computed(() => {
  if (categoriaActiva.value === 'Todos') return articulos.value
  return articulos.value.filter(a => a.categoria === categoriaActiva.value)
})

const formatFecha = (fecha) => {
  if (!fecha) return ''
  const f = new Date(fecha).toLocaleDateString('es-MX', { month: 'short', year: 'numeric', timeZone: 'UTC' })
  return f.charAt(0).toUpperCase() + f.slice(1)
}

const cargarArticulos = async () => {
  try {
    const res = await api.get('/articulos')
    articulos.value = res.data
  } catch {
    articulos.value = []
  }
}

onMounted(cargarArticulos)
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }

.art-hero { padding:var(--sec-y) var(--sec-x);border-bottom:1px solid var(--line3);background:linear-gradient(160deg,var(--bg),var(--bg3)); }
.pill { display:inline-flex;align-items:center;gap:8px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:20px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.pill-t { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.art-title { font-size:var(--t-4xl);font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:14px; }
.art-title strong { color:var(--white); }
.art-title em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.art-sub { font-size:var(--t-md);color:var(--w3);font-weight:300;max-width:480px;line-height:1.7; }

.art-wrap { max-width:1000px;margin:0 auto;padding:var(--sec-y) var(--sec-x); }

/* FILTROS */
.art-filters { display:flex;gap:8px;margin-bottom:32px;flex-wrap:wrap; }
.art-filter { background:var(--w5);border:1px solid var(--line2);border-radius:100px;padding:8px 16px;font-family:var(--f);font-size:var(--t-sm);font-weight:500;color:var(--w3);cursor:pointer;transition:all .15s; }
.art-filter:hover { border-color:var(--teal-b);color:var(--white); }
.art-filter.active { background:var(--teal-g);border-color:var(--teal-b);color:var(--teal); }

/* LISTA */
.art-empty { text-align:center;color:var(--w4);padding:48px 0;font-size:var(--t-sm); }
.art-list { border:1px solid var(--line3);border-radius:14px;overflow:hidden; }
.art-item { display:flex;justify-content:space-between;align-items:center;padding:24px 24px;border-bottom:1px solid var(--line3);cursor:pointer;transition:background .15s;gap:16px; }
.art-item:last-child { border-bottom:none; }
.art-item:hover { background:var(--card); }
.art-item-l { display:flex;flex-direction:column;gap:8px;flex:1; }
.art-num-cat { display:flex;align-items:center;gap:8px; }
.art-num { font-family:var(--fm);font-size:var(--t-2xs);font-weight:500;color:var(--w4); }
.art-cat { font-family:var(--fm);font-size:var(--t-2xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase; }
.art-nm { font-family:var(--fs);font-style:italic;font-size:var(--t-lg);color:var(--white);line-height:1.4; }
.art-by { font-size:var(--t-xs);color:var(--w4);font-weight:300; }
.art-badge { font-size:var(--t-2xs);font-weight:600;padding:4px 12px;border-radius:100px;background:var(--teal-g);color:var(--teal);border:1px solid var(--teal-b);white-space:nowrap;flex-shrink:0; }

.art-cta { text-align:center;margin-top:48px; }
.art-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:16px 32px;font-family:var(--f);font-size:var(--t-md);font-weight:700;cursor:pointer;transition:background .15s;text-decoration:none;display:inline-block; }
.art-btn:hover { background:var(--teal2); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .art-hero { padding:var(--sec-y) var(--sec-x); }
  .art-title { font-size:var(--t-4xl); }
  .art-wrap { padding:var(--sec-y) var(--sec-x); }

  .art-item { flex-direction:column;align-items:flex-start;gap:12px; }
  .art-badge { align-self:flex-start; }
}
</style>