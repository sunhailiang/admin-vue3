export default {
  namespaced: true,
  state: () => ({
    token: '',
    userInfo: {
      avatar: require('@/assets/imgs/user/avatar.png')
    }
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {}
}
