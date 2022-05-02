import storage from '@/utils/localStorage'
import { LANG, TAGS_VIEW } from '@/utils/const/constant'
// 默认中文
export default {
  namespaced: true,
  state: () => ({
    sidebarState: true,
    language: storage.localGetItem(LANG) || 'zh',
    tagsViewList: storage.localGetItem(TAGS_VIEW) || []
  }),
  mutations: {
    // 侧边栏
    changeSidebarState(state) {
      state.sidebarState = !state.sidebarState
    },
    // 切换语言
    setLanguage(state, lang) {
      storage.localSetItem(LANG, lang)
      state.language = lang
    },
    // 添加tag
    addTagsView(state, tag) {
      // 判断是否重复
      const isRepeat = state.tagsViewList.find((item) => {
        return item.path === tag.path
      })
      // 处理重复
      if (!isRepeat) {
        state.tagsViewList.push(tag)
        storage.localSetItem(TAGS_VIEW, state.tagsViewList)
      }
    },
    // 修改tag
    editTagsView(state, { index, tag }) {
      state.tagsViewList[index] = tag
      storage.localSetItem(TAGS_VIEW, state.tagsViewList)
    }
  },
  actions: {}
}
