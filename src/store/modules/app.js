import storage from '@/utils/localStorage'
// import cssObj from '@/assets/styles/variables.scss'
import { LANG } from '@/utils/const/constant'
export default {
  namespaced: true,
  state: () => ({
    sidebarState: true,
    language: storage.localGetItem(LANG)
  }),
  mutations: {
    changeSidebarState(state) {
      state.sidebarState = !state.sidebarState
    },
    setLanguage(state, lang) {
      storage.localSetItem(LANG, lang)
      state.language = lang
    }
  },
  actions: {}
}
