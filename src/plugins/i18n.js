import { createI18n } from 'vue-i18n'
import messages from '../i18n'

const i18n = new createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'tr-TR',
  fallbackLocale: 'tr-TR',
  globalInjection: true,
  messages,
})

export  {i18n};
