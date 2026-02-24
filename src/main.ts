import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar';

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })

app.component('Button', Button)
app.component('Menubar', Menubar)

app.mount('#app')