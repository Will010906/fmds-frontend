import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fmds-backend-production.up.railway.app/api',
})

// Agrega el token automáticamente a cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Si el token expiró o es inválido, se cierra la sesión y se vuelve a login
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401 && localStorage.getItem('token')) {
      localStorage.clear()
      window.location.href = '/login?expirada=1'
    }
    return Promise.reject(error)
  }
)

export default api