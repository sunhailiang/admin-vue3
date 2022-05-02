<template>
  <div class="app-main">
    <router-view />
  </div>
</template>
<script setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { isTag } from '@/utils/tagsView'
import { generateTitle, watchSwitchLanguage } from '@/utils/i18n'
const route = useRoute()
const store = useStore()

// 生成tag的展示的title名称
const tagTitle = (route) => {
  let title = ''
  if (!route.meta) {
    const pathStrArr = route.path.split('')
    title = pathStrArr[pathStrArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}
watch(
  route,
  (to, from) => {
    if (!isTag(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    store.commit('app/addTagsView', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: tagTitle(to)
    })
  },
  {
    immediate: true
  }
)

// 切换语言时 tag实现国际化
watchSwitchLanguage(() => {
  store.getters.tagsViewList.forEach((route, index) => {
    store.commit('app/editTagsView', {
      index,
      tag: { ...route, title: tagTitle(route) }
    })
  })
})
</script>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
