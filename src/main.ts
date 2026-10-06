import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './style.css'
import App from './App.vue'
import router from './router'
import { preset } from './theme'

createApp(App).use(PrimeVue, { theme: { preset } }).use(router).mount('#app')
