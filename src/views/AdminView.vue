<template>
  <div class="page">

    <nav class="nav">
      <span class="nav-logo">FMDS <span class="nav-badge">Admin</span></span>
      <div class="nav-end">
        <span class="nav-user">{{ nombre }}</span>
        <button @click="logout" class="btn-ghost-sm">Cerrar sesión</button>
      </div>
    </nav>

    <div class="admin-wrap">

      <!-- Header -->
      <div class="admin-header">
        <div>
          <h1 class="admin-title">Gestión de Eventos</h1>
          <p class="admin-sub">{{ eventos.length }} evento{{ eventos.length !== 1 ? 's' : '' }} registrado{{ eventos.length !== 1 ? 's' : '' }}</p>
        </div>
        <button @click="mostrarFormulario = !mostrarFormulario" class="btn-primary">
          {{ mostrarFormulario ? '✕ Cancelar' : '+ Nuevo Evento' }}
        </button>
      </div>

      <!-- Formulario -->
      <div v-if="mostrarFormulario" class="form-card">
        <h3 class="form-title">Nuevo Evento</h3>
        <div class="form-grid">
          <div class="field full">
            <label class="field-label">Título</label>
            <input v-model="form.titulo" type="text" placeholder="Nombre del evento" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">Fecha</label>
            <input v-model="form.fecha" type="date" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">Precio (MXN)</label>
            <input v-model="form.precio" type="number" placeholder="350" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">Stock de Boletos</label>
            <input v-model="form.stockBoletos" type="number" placeholder="200" class="field-input" />
          </div>
        </div>
        <button @click="crearEvento" class="btn-primary">Guardar Evento</button>
      </div>

      <!-- Tabla -->
      <div class="table-card">
        <table class="table" style="min-width:640px">
          <thead>
            <tr>
              <th>Título</th>
              <th>Fecha</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="eventos.length === 0">
              <td colspan="5" class="empty">No hay eventos registrados</td>
            </tr>
            <tr v-for="evento in eventos" :key="evento.idEvento">
              <td class="td-title">{{ evento.titulo }}</td>
              <td class="td-muted">{{ formatFecha(evento.fecha) }}</td>
              <td class="td-teal">${{ evento.precio }}</td>
              <td>
                <span class="stock-badge">{{ evento.stockBoletos }}</span>
              </td>
              <td>
                <button @click="eliminarEvento(evento.idEvento)" class="btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const nombre = localStorage.getItem('nombre')
const eventos = ref([])
const mostrarFormulario = ref(false)
const form = ref({ titulo: '', fecha: '', precio: '', stockBoletos: '' })

const cargarEventos = async () => {
  const res = await api.get('/eventos')
  eventos.value = res.data
}

const crearEvento = async () => {
  await api.post('/eventos', form.value)
  form.value = { titulo: '', fecha: '', precio: '', stockBoletos: '' }
  mostrarFormulario.value = false
  cargarEventos()
}

const eliminarEvento = async (id) => {
  if (!confirm('¿Eliminar este evento?')) return
  await api.delete(`/eventos/${id}`)
  cargarEventos()
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

const logout = () => {
  localStorage.clear()
  router.push({ name: 'login' })
}

onMounted(cargarEventos)
</script>

<style scoped>
.page { min-height: 100vh; background: var(--bg); }

.nav {
  height: 60px;
  background: rgba(6,9,15,.96);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--line3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
}
.nav-logo {
  font-size: 16px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -.03em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-badge {
  font-family: var(--fm);
  font-size: 9px;
  font-weight: 500;
  color: var(--teal);
  background: var(--teal-g);
  border: 1px solid var(--teal-b);
  padding: 3px 8px;
  border-radius: 100px;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.nav-end { display: flex; align-items: center; gap: 12px; }
.nav-user { font-size: 12px; color: var(--w3); }

.admin-wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 88px 36px 60px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.admin-title {
  font-size: 26px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -.04em;
}
.admin-sub { font-size: 13px; color: var(--w4); margin-top: 4px; }

.form-card {
  background: var(--card);
  border: 1px solid var(--teal-b);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -.02em;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.field { display: flex; flex-direction: column; gap: 6px; }
.field.full { grid-column: span 2; }
.field-label { font-size: 11px; font-weight: 500; color: var(--w3); }
.field-input {
  background: var(--bg3);
  border: 1px solid var(--line2);
  border-radius: 10px;
  padding: 11px 14px;
  font-family: var(--f);
  font-size: 13px;
  color: var(--white);
  outline: none;
  transition: border-color .15s;
}
.field-input:focus { border-color: var(--teal-b); }
.field-input::placeholder { color: var(--w4); }

.table-card {
  background: var(--card);
  border: 1px solid var(--line2);
  border-radius: 16px;
  overflow-x: auto;
}
.table { width: 100%; border-collapse: collapse; }
.table thead tr {
  background: var(--bg3);
  border-bottom: 1px solid var(--line2);
}
.table th {
  text-align: left;
  padding: 13px 20px;
  font-size: 11px;
  font-weight: 600;
  color: var(--w4);
  letter-spacing: .05em;
  text-transform: uppercase;
}
.table tbody tr { border-bottom: 1px solid var(--line3); transition: background .1s; }
.table tbody tr:last-child { border-bottom: none; }
.table tbody tr:hover { background: var(--bg3); }
.table td { padding: 14px 20px; font-size: 13px; }

.td-title { font-weight: 600; color: var(--white); }
.td-muted { color: var(--w3); }
.td-teal { color: var(--teal); font-weight: 700; font-family: var(--fm); }

.stock-badge {
  background: var(--bg3);
  border: 1px solid var(--line2);
  color: var(--w2);
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-family: var(--fm);
}

.empty { text-align: center; color: var(--w4); padding: 48px; }

/* BUTTONS */
.btn-primary {
  background: var(--teal);
  color: var(--bg);
  border: none;
  border-radius: 9px;
  padding: 10px 20px;
  font-family: var(--f);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background .15s;
  white-space: nowrap;
}
.btn-primary:hover { background: var(--teal2); }

.btn-ghost-sm {
  background: var(--w5);
  color: var(--w3);
  border: 1px solid var(--line2);
  border-radius: 8px;
  padding: 7px 14px;
  font-family: var(--f);
  font-size: 12px;
  cursor: pointer;
  transition: all .15s;
}
.btn-ghost-sm:hover { border-color: var(--teal-b); color: var(--white); }

.btn-danger {
  background: none;
  border: none;
  color: rgba(239,68,68,.7);
  font-size: 12px;
  cursor: pointer;
  transition: color .15s;
  font-family: var(--f);
  padding: 4px 0;
}
.btn-danger:hover { color: #f87171; }

@media (max-width: 640px) {
  .nav { padding: 0 16px; }
  .admin-wrap { padding: 84px 16px 48px; gap: 18px; }
  .admin-header { flex-direction: column; align-items: flex-start; gap: 14px; }
  .admin-header .btn-primary { width: 100%; }
  .form-card { padding: 20px; }
  .form-grid { grid-template-columns: 1fr; }
  .field.full { grid-column: span 1; }
}
</style>