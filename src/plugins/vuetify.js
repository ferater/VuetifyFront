import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../css/main.scss'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import {lightTheme, darkTheme} from './themes'



const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  }
})

export default vuetify
