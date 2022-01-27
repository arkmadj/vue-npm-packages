import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/fadeInUp.css'
import '@quasar/extras/animate/fadeOutDown.css'
import '@quasar/extras/animate/fadeInRight.css'
import '@quasar/extras/animate/fadeOutRight.css'

import 'quasar/dist/quasar.css'
import { app } from '@storybook/vue3'
import { Quasar } from 'quasar'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

app.use(VueChartkick)
app.use(Quasar, {
  config: {
    brand: {
      primary: '#0B8F99',
      secondary: '#FFCC00',
      pink: '#F71455',
      green: '#00CC66',
      black: '#231F20',
      white: '#FFFFFF',
      input: '#F5F5F5',
      accent: '#F5F5F5',

      dark: '#1d1d1d',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
