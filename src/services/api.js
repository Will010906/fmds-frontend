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

export default api