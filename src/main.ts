import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },
  },
})
import Button from 'primevue/button'
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import Image from 'primevue/image';
import Divider from 'primevue/divider';
import ScrollTop from 'primevue/scrolltop';

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: MyPreset } })

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Panel', Panel)
app.component('Image', Image)
app.component('Divider', Divider)
app.component('ScrollTop',ScrollTop)

app.mount('#app')