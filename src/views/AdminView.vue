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

      <!-- Tabs -->
      <div class="admin-tabs">
        <button class="admin-tab" :class="{ active: tab === 'eventos' }" @click="cambiarTab('eventos')">Eventos</button>
        <button class="admin-tab" :class="{ active: tab === 'articulos' }" @click="cambiarTab('articulos')">Artículos</button>
        <button class="admin-tab" :class="{ active: tab === 'speakers' }" @click="cambiarTab('speakers')">Speakers</button>
      </div>

      <!-- ═══ EVENTOS ═══ -->
      <template v-if="tab === 'eventos'">
        <div class="admin-header">
          <div>
            <h1 class="admin-title">Gestión de Eventos</h1>
            <p class="admin-sub">{{ eventos.length }} evento{{ eventos.length !== 1 ? 's' : '' }} registrado{{ eventos.length !== 1 ? 's' : '' }}</p>
          </div>
          <button @click="toggleFormulario" class="btn-primary">
            {{ mostrarFormulario ? '✕ Cancelar' : '+ Nuevo Evento' }}
          </button>
        </div>

        <div v-if="mostrarFormulario" class="form-card">
          <h3 class="form-title">{{ editandoId ? 'Editar Evento' : 'Nuevo Evento' }}</h3>
          <div class="form-grid">
            <div class="field full">
              <label class="field-label">Título</label>
              <input v-model="formEvento.titulo" type="text" placeholder="Nombre del evento" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Fecha</label>
              <input v-model="formEvento.fecha" type="date" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Precio (MXN)</label>
              <input v-model="formEvento.precio" type="number" placeholder="350" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Stock de Boletos</label>
              <input v-model="formEvento.stockBoletos" type="number" placeholder="200" class="field-input" />
            </div>
          </div>
          <button @click="guardarEvento" class="btn-primary">{{ editandoId ? 'Guardar cambios' : 'Guardar Evento' }}</button>
        </div>

        <div class="table-card">
          <table class="table" style="min-width:640px">
            <thead>
              <tr><th>Título</th><th>Fecha</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              <tr v-if="eventos.length === 0"><td colspan="5" class="empty">No hay eventos registrados</td></tr>
              <tr v-for="evento in eventos" :key="evento.idEvento">
                <td class="td-title">{{ evento.titulo }}</td>
                <td class="td-muted">{{ formatFecha(evento.fecha) }}</td>
                <td class="td-teal">${{ evento.precio }}</td>
                <td><span class="stock-badge">{{ evento.stockBoletos }}</span></td>
                <td class="td-actions">
                  <button @click="editarEvento(evento)" class="btn-edit">Editar</button>
                  <button @click="eliminarEvento(evento.idEvento)" class="btn-danger">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <!-- ═══ ARTÍCULOS ═══ -->
      <template v-if="tab === 'articulos'">
        <div class="admin-header">
          <div>
            <h1 class="admin-title">Gestión de Artículos</h1>
            <p class="admin-sub">{{ articulos.length }} artículo{{ articulos.length !== 1 ? 's' : '' }} publicado{{ articulos.length !== 1 ? 's' : '' }}</p>
          </div>
          <button @click="toggleFormulario" class="btn-primary">
            {{ mostrarFormulario ? '✕ Cancelar' : '+ Nuevo Artículo' }}
          </button>
        </div>

        <div v-if="mostrarFormulario" class="form-card">
          <h3 class="form-title">{{ editandoId ? 'Editar Artículo' : 'Nuevo Artículo' }}</h3>
          <div class="form-grid">
            <div class="field full">
              <label class="field-label">Título</label>
              <input v-model="formArticulo.titulo" type="text" placeholder="Título del artículo" class="field-input" />
            </div>
            <div class="field full">
              <label class="field-label">Cuerpo</label>
              <textarea v-model="formArticulo.cuerpo" rows="4" placeholder="Contenido del artículo" class="field-input"></textarea>
            </div>
            <div class="field">
              <label class="field-label">Autor</label>
              <input v-model="formArticulo.autor" type="text" placeholder="Dr. Ramírez · UTM" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Categoría</label>
              <input v-model="formArticulo.categoria" type="text" placeholder="Arquitectura" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Fecha de publicación</label>
              <input v-model="formArticulo.fechaPublicacion" type="date" class="field-input" />
            </div>
          </div>
          <button @click="guardarArticulo" class="btn-primary">{{ editandoId ? 'Guardar cambios' : 'Guardar Artículo' }}</button>
        </div>

        <div class="table-card">
          <table class="table" style="min-width:640px">
            <thead>
              <tr><th>Título</th><th>Categoría</th><th>Autor</th><th>Fecha</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              <tr v-if="articulos.length === 0"><td colspan="5" class="empty">No hay artículos registrados</td></tr>
              <tr v-for="articulo in articulos" :key="articulo.idArticulo">
                <td class="td-title">{{ articulo.titulo }}</td>
                <td class="td-teal">{{ articulo.categoria }}</td>
                <td class="td-muted">{{ articulo.autor }}</td>
                <td class="td-muted">{{ formatFecha(articulo.fechaPublicacion) }}</td>
                <td class="td-actions">
                  <button @click="editarArticulo(articulo)" class="btn-edit">Editar</button>
                  <button @click="eliminarArticulo(articulo.idArticulo)" class="btn-danger">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <!-- ═══ SPEAKERS ═══ -->
      <template v-if="tab === 'speakers'">
        <div class="admin-header">
          <div>
            <h1 class="admin-title">Gestión de Speakers</h1>
            <p class="admin-sub">{{ speakers.length }} speaker{{ speakers.length !== 1 ? 's' : '' }} registrado{{ speakers.length !== 1 ? 's' : '' }}</p>
          </div>
          <button @click="toggleFormulario" class="btn-primary">
            {{ mostrarFormulario ? '✕ Cancelar' : '+ Nuevo Speaker' }}
          </button>
        </div>

        <div v-if="mostrarFormulario" class="form-card">
          <h3 class="form-title">{{ editandoId ? 'Editar Speaker' : 'Nuevo Speaker' }}</h3>
          <div class="form-grid">
            <div class="field full">
              <label class="field-label">Nombre</label>
              <input v-model="formSpeaker.nombre" type="text" placeholder="Dra. Ana López" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Rol</label>
              <input v-model="formSpeaker.rol" type="text" placeholder="Security Lead · TEC Monterrey" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Área</label>
              <input v-model="formSpeaker.area" type="text" placeholder="Security" class="field-input" />
            </div>
            <div class="field full">
              <label class="field-label">Tema de su ponencia</label>
              <input v-model="formSpeaker.tema" type="text" placeholder="Ciberseguridad en APIs REST modernas" class="field-input" />
            </div>
            <div class="field full">
              <label class="field-label">Frase destacada (opcional, solo si es speaker principal)</label>
              <textarea v-model="formSpeaker.frase" rows="2" placeholder="Cita textual del speaker" class="field-input"></textarea>
            </div>
            <div class="field full field-check">
              <label class="field-check-label">
                <input v-model="formSpeaker.featured" type="checkbox" />
                Mostrar como speaker principal (keynote destacado)
              </label>
            </div>
          </div>
          <button @click="guardarSpeaker" class="btn-primary">{{ editandoId ? 'Guardar cambios' : 'Guardar Speaker' }}</button>
        </div>

        <div class="table-card">
          <table class="table" style="min-width:640px">
            <thead>
              <tr><th>Nombre</th><th>Área</th><th>Rol</th><th>Destacado</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              <tr v-if="speakers.length === 0"><td colspan="5" class="empty">No hay speakers registrados</td></tr>
              <tr v-for="speaker in speakers" :key="speaker.idSpeaker">
                <td class="td-title">{{ speaker.nombre }}</td>
                <td class="td-teal">{{ speaker.area }}</td>
                <td class="td-muted">{{ speaker.rol }}</td>
                <td><span v-if="speaker.featured" class="stock-badge featured">Sí</span><span v-else class="td-muted">—</span></td>
                <td class="td-actions">
                  <button @click="editarSpeaker(speaker)" class="btn-edit">Editar</button>
                  <button @click="eliminarSpeaker(speaker.idSpeaker)" class="btn-danger">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const nombre = localStorage.getItem('nombre')

const tab = ref('eventos')
const mostrarFormulario = ref(false)
const editandoId = ref(null)

const eventos = ref([])
const articulos = ref([])
const speakers = ref([])

const formEvento = ref({ titulo: '', fecha: '', precio: '', stockBoletos: '' })
const formArticulo = ref({ titulo: '', cuerpo: '', autor: '', categoria: '', fechaPublicacion: '' })
const formSpeaker = ref({ nombre: '', rol: '', area: '', tema: '', frase: '', featured: false })

const cambiarTab = (nuevoTab) => {
  tab.value = nuevoTab
  mostrarFormulario.value = false
  editandoId.value = null
}

const toggleFormulario = () => {
  mostrarFormulario.value = !mostrarFormulario.value
  if (!mostrarFormulario.value) editandoId.value = null
  else if (editandoId.value === null) resetFormularioActivo()
}

const resetFormularioActivo = () => {
  formEvento.value = { titulo: '', fecha: '', precio: '', stockBoletos: '' }
  formArticulo.value = { titulo: '', cuerpo: '', autor: '', categoria: '', fechaPublicacion: '' }
  formSpeaker.value = { nombre: '', rol: '', area: '', tema: '', frase: '', featured: false }
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' })
}

// ── EVENTOS ──
const cargarEventos = async () => {
  const res = await api.get('/eventos')
  eventos.value = res.data
}
const guardarEvento = async () => {
  if (editandoId.value) {
    await api.put(`/eventos/${editandoId.value}`, formEvento.value)
  } else {
    await api.post('/eventos', formEvento.value)
  }
  formEvento.value = { titulo: '', fecha: '', precio: '', stockBoletos: '' }
  mostrarFormulario.value = false
  editandoId.value = null
  cargarEventos()
}
const editarEvento = (evento) => {
  editandoId.value = evento.idEvento
  formEvento.value = {
    titulo: evento.titulo,
    fecha: new Date(evento.fecha).toISOString().slice(0, 10),
    precio: evento.precio,
    stockBoletos: evento.stockBoletos,
  }
  mostrarFormulario.value = true
}
const eliminarEvento = async (id) => {
  if (!confirm('¿Eliminar este evento?')) return
  await api.delete(`/eventos/${id}`)
  cargarEventos()
}

// ── ARTÍCULOS ──
const cargarArticulos = async () => {
  const res = await api.get('/articulos')
  articulos.value = res.data
}
const guardarArticulo = async () => {
  if (editandoId.value) {
    await api.put(`/articulos/${editandoId.value}`, formArticulo.value)
  } else {
    await api.post('/articulos', formArticulo.value)
  }
  formArticulo.value = { titulo: '', cuerpo: '', autor: '', categoria: '', fechaPublicacion: '' }
  mostrarFormulario.value = false
  editandoId.value = null
  cargarArticulos()
}
const editarArticulo = (articulo) => {
  editandoId.value = articulo.idArticulo
  formArticulo.value = {
    titulo: articulo.titulo,
    cuerpo: articulo.cuerpo,
    autor: articulo.autor,
    categoria: articulo.categoria,
    fechaPublicacion: new Date(articulo.fechaPublicacion).toISOString().slice(0, 10),
  }
  mostrarFormulario.value = true
}
const eliminarArticulo = async (id) => {
  if (!confirm('¿Eliminar este artículo?')) return
  await api.delete(`/articulos/${id}`)
  cargarArticulos()
}

// ── SPEAKERS ──
const cargarSpeakers = async () => {
  const res = await api.get('/speakers')
  speakers.value = res.data
}
const guardarSpeaker = async () => {
  if (editandoId.value) {
    await api.put(`/speakers/${editandoId.value}`, formSpeaker.value)
  } else {
    await api.post('/speakers', formSpeaker.value)
  }
  formSpeaker.value = { nombre: '', rol: '', area: '', tema: '', frase: '', featured: false }
  mostrarFormulario.value = false
  editandoId.value = null
  cargarSpeakers()
}
const editarSpeaker = (speaker) => {
  editandoId.value = speaker.idSpeaker
  formSpeaker.value = {
    nombre: speaker.nombre,
    rol: speaker.rol,
    area: speaker.area,
    tema: speaker.tema,
    frase: speaker.frase || '',
    featured: !!speaker.featured,
  }
  mostrarFormulario.value = true
}
const eliminarSpeaker = async (id) => {
  if (!confirm('¿Eliminar este speaker?')) return
  await api.delete(`/speakers/${id}`)
  cargarSpeakers()
}

const logout = () => {
  localStorage.clear()
  router.push({ name: 'login' })
}

onMounted(() => {
  cargarEventos()
  cargarArticulos()
  cargarSpeakers()
})
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

.admin-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--line3); }
.admin-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  padding: 10px 16px;
  font-family: var(--f);
  font-size: 13px;
  font-weight: 500;
  color: var(--w4);
  cursor: pointer;
  transition: all .15s;
}
.admin-tab:hover { color: var(--w2); }
.admin-tab.active { color: var(--teal); border-bottom-color: var(--teal); }

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
  resize: vertical;
}
.field-input:focus { border-color: var(--teal-b); }
.field-input::placeholder { color: var(--w4); }
.field-check { flex-direction: row; align-items: center; }
.field-check-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--w2); cursor: pointer; }

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
.td-actions { display: flex; gap: 14px; align-items: center; }

.stock-badge {
  background: var(--bg3);
  border: 1px solid var(--line2);
  color: var(--w2);
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-family: var(--fm);
}
.stock-badge.featured { background: var(--teal-g); border-color: var(--teal-b); color: var(--teal); }

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

.btn-edit {
  background: none;
  border: none;
  color: var(--w3);
  font-size: 12px;
  cursor: pointer;
  transition: color .15s;
  font-family: var(--f);
  padding: 4px 0;
}
.btn-edit:hover { color: var(--teal); }

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
  .admin-tabs { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .admin-tab { white-space: nowrap; }
  .admin-header { flex-direction: column; align-items: flex-start; gap: 14px; }
  .admin-header .btn-primary { width: 100%; }
  .form-card { padding: 20px; }
  .form-grid { grid-template-columns: 1fr; }
  .field.full { grid-column: span 1; }
}
</style>
