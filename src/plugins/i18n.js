import { createI18n } from 'vue-i18n'
import messages from '../i18n'

const i18n = new createI18n({
  legacy: false,
  locale: 'tr-TR',
  fallbackLocale: 'tr-TR',
  globalInjection: true,
  messages,
})

export default i18n;
