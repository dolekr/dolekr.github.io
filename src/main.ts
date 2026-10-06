import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './style.css'
import App from './App.vue'
import router from './router'
import { preset } from './theme'

const app = createApp(App).use(PrimeVue, { theme: { preset } }).use(router)

// Mount after the first route renders, so App.vue can find the page sections.
router.isReady().then(() => app.mount('#app'))
