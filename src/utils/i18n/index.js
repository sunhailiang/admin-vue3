import { createI18n } from 'vue-i18n'
import zh from './language/zh'
import en from './language/en'
import store from '@/store'

const messages = {
  en: {
    msg: {
      ...en
    }
  },
  zh: {
    msg: {
      ...zh
    }
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: store.getters.language,
  messages
})
const $t = i18n.global.t
const lang = i18n.global.locale.value === 'en-US' ? 'en' : 'zh'
export { i18n, $t, lang }
