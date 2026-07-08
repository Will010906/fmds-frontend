<template>
  <div class="page">

    <AppNav />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-tag">
        <span class="hero-dot"></span>
        <span class="hero-tag-text">Temporada 2026</span>
      </div>
      <h1 class="hero-title">
        <span class="hero-t1">Eventos</span>
        <span class="hero-t2">para developers</span>
      </h1>
      <p class="hero-desc">Conferencias, talleres y networking para la comunidad mexicana de desarrollo de software.</p>
    </section>

    <!-- Grid -->
    <section class="events-section">
      <div v-if="eventos.length === 0" class="empty">
        No hay eventos disponibles por el momento.
      </div>
      <div class="events-grid">
        <div
          v-for="evento in eventos"
          :key="evento.idEvento"
          class="event-card"
        >
          <div class="event-card-top">
            <span class="event-date">{{ formatFecha(evento.fecha) }}</span>
            <span class="event-stock">{{ evento.stockBoletos }} boletos</span>
          </div>
          <h3 class="event-title">{{ evento.titulo }}</h3>
          <div class="event-card-bottom">
            <span class="event-price">${{ evento.precio }} <small>MXN</small></span>
            <button
              @click="comprar(evento)"
              :disabled="evento.stockBoletos === 0"
              class="btn-primary-sm"
              :class="{ 'btn-disabled': evento.stockBoletos === 0 }"
            >
              {{ evento.stockBoletos === 0 ? 'Agotado' : 'Comprar' }}
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'
import AppNav from '../components/AppNav.vue'

const router = useRouter()
const eventos = ref([])
const token = localStorage.getItem('token')

const cargarEventos = async () => {
  const res = await api.get('/eventos')
  eventos.value = res.data
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

const comprar = (evento) => {
  if (!token) {
    router.push({ name: 'login' })
    return
  }
  router.push({ name: 'checkout', params: { idEvento: evento.idEvento } })
}

onMounted(cargarEventos)
</script>

<style scoped>
.page { min-height: 100vh; background: var(--bg); }

/* HERO */
.hero {
  padding: 120px 48px 64px;
  max-width: 800px;
  margin: 0 auto;
}
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--teal-g);
  border: 1px solid var(--teal-b);
  border-radius: 100px;
  padding: 5px 14px 5px 8px;
  margin-bottom: 24px;
}
.hero-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--teal);
  animation: pulse 2.5s infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(45,212,180,.4); }
  50% { box-shadow: 0 0 0 6px rgba(45,212,180,0); }
}
.hero-tag-text {
  font-family: var(--fm);
  font-size: 9px;
  font-weight: 500;
  color: var(--teal);
  letter-spacing: .1em;
  text-transform: uppercase;
}
.hero-title { margin-bottom: 16px; }
.hero-t1 {
  display: block;
  font-size: 52px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -.05em;
  line-height: .9;
}
.hero-t2 {
  display: block;
  font-family: var(--fs);
  font-style: italic;
  font-size: 46px;
  color: var(--teal);
  line-height: 1.1;
}
.hero-desc {
  font-size: 15px;
  font-weight: 300;
  color: var(--w3);
  line-height: 1.8;
  max-width: 500px;
}

/* EVENTS */
.events-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px 80px;
}
.empty { text-align: center; color: var(--w4); padding: 64px 0; }
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
.event-card {
  background: var(--card);
  border: 1px solid var(--line2);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color .15s, transform .15s;
}
.event-card:hover {
  border-color: var(--teal-b);
  transform: translateY(-2px);
}
.event-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.event-date {
  font-family: var(--fm);
  font-size: 10px;
  color: var(--teal);
  background: var(--teal-g);
  border: 1px solid var(--teal-b);
  padding: 4px 10px;
  border-radius: 100px;
  letter-spacing: .05em;
}
.event-stock { font-size: 11px; color: var(--w4); }
.event-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -.02em;
  line-height: 1.3;
  flex: 1;
}
.event-card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line3);
  padding-top: 16px;
}
.event-price {
  font-size: 22px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -.04em;
}
.event-price small { font-size: 11px; color: var(--w4); font-weight: 400; }

/* BUTTONS */
.btn-primary-sm {
  background: var(--teal);
  color: var(--bg);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: var(--f);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background .15s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}
.btn-primary-sm:hover { background: var(--teal2); }
.btn-disabled { opacity: .4; cursor: not-allowed; }

.btn-ghost-sm {
  background: var(--w5);
  color: var(--w3);
  border: 1px solid var(--line2);
  border-radius: 8px;
  padding: 8px 16px;
  font-family: var(--f);
  font-size: 12px;
  cursor: pointer;
  transition: all .15s;
}
.btn-ghost-sm:hover { border-color: var(--teal-b); color: var(--white); }

/* RESPONSIVE */
@media (max-width: 640px) {
  .hero { padding: 100px 20px 48px; }
  .hero-t1 { font-size: 36px; }
  .hero-t2 { font-size: 30px; }
  .events-section { padding: 0 20px 56px; }
  .events-grid { grid-template-columns: 1fr; }
}
</style>