import storage from '@/utils/localStorage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/utils/const/constant'
import variables from '@/assets/styles/variables.scss'
export default {
  namespaced: true,
  state: () => ({
    mainColor: storage.localGetItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables
  }),
  mutations: {
    setMaincolor(state, color) {
      // 主色调
      state.mainColor = color
      // 菜单色调
      state.variables.menuBg = color
      // 缓存-其实可以不用，已经用了vuex持久化工具
      storage.localSetItem(MAIN_COLOR, color)
    }
  },
  actions: {}
}
