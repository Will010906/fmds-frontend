<template>
  <span ref="el">{{ prefix }}{{ formateado }}{{ suffix }}</span>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  value:    { type: Number, required: true },
  prefix:   { type: String, default: '' },
  suffix:   { type: String, default: '' },
  duration: { type: Number, default: 1400 },
})

const el = ref(null)
const actual = ref(0)
const formateado = computed(() => Math.round(actual.value).toLocaleString('en-US'))

let raf = null
let observer = null

const animar = () => {
  const inicio = performance.now()
  const paso = (ahora) => {
    const p = Math.min((ahora - inicio) / props.duration, 1)
    actual.value = props.value * (1 - Math.pow(1 - p, 3))
    if (p < 1) raf = requestAnimationFrame(paso)
  }
  raf = requestAnimationFrame(paso)
}

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    actual.value = props.value
    return
  }
  observer = new IntersectionObserver((entradas) => {
    if (entradas.some(e => e.isIntersecting)) {
      animar()
      observer.disconnect()
    }
  }, { threshold: 0.4 })
  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
  if (raf) cancelAnimationFrame(raf)
})
</script>
