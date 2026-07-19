import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// v-reveal: la sección aparece con una transición suave al entrar al viewport
app.directive('reveal', {
  mounted(el) {
    if (!('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    const observer = new IntersectionObserver((entradas) => {
      if (entradas.some(e => e.isIntersecting)) {
        el.classList.add('reveal-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(el)
  },
})

app.use(router)

app.mount('#app')
