import { generateColor } from '@/utils/theme'
import storage from '@/utils/localStorage.js'
import { MAIN_COLOR } from '@/utils/const/constant'
// 快速访问的计算属性
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => ({
    ...state.theme.variables,
    ...generateColor(storage.localGetItem(MAIN_COLOR)?.value)
  }),
  sidebarState: (state) => state.app.sidebarState,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor,
  tagsViewList: (state) => state.app.tagsViewList
}
export default getters
