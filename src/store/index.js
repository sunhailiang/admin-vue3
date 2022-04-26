import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import app from './modules/app'
import getters from './getters'

export default createStore({
  getters,
  modules: { user, app },
  plugins: [
    createPersistedstate({
      storage: window.localStorage,
      key: 'vuex-persistedstate',
      path: [user]
    })
  ]
})
