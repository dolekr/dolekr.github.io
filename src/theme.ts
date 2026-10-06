import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

/** PrimeVue Aura theme with teal as the primary color and a borderless gallery. */
export const preset = definePreset(Aura, {
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
  components: {
    galleria: {
      root: {
        borderWidth: '0',
      },
      navButton: {
        background: 'transparent',
        hoverBackground: 'transparent',
        color: '{surface.400}',
        hoverColor: '{surface.200}',
      },
    },
  },
})
