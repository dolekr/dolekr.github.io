import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import Image from 'primevue/image';

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Panel', Panel)
app.component('Image', Image)

app.mount('#app')