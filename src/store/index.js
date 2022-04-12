import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'

export default createStore({
  modules: { nameSpaced: true, user },
  plugins: [
    createPersistedstate({
      storage: window.localStorage,
      key: 'vuex-persistedstate',
      path: [user]
    })
  ]
})
