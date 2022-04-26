// 快速访问的计算属性
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  sidebarState: (state) => state.app.sidebarState
}
export default getters
