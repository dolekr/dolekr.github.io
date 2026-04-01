import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}',
    },
  },
})
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Panel from 'primevue/panel'
import Image from 'primevue/image'
import Divider from 'primevue/divider'
import ScrollTop from 'primevue/scrolltop'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: MyPreset } })
app.use(router)

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Panel', Panel)
app.component('Image', Image)
app.component('Divider', Divider)
app.component('ScrollTop', ScrollTop)

app.mount('#app')
