export default {
  namespaced: true,
  state: () => ({
    sidebarState: true
  }),
  mutations: {
    changeSidebarState(state) {
      state.sidebarState = !state.sidebarState
    }
  },
  actions: {}
}
