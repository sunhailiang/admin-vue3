<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        v-for="(tag, index) in $store.getters.tagsViewList"
        :key="tag.fullPath + index"
        class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''"
        :to="tag.path"
        :style="{
          backgroundColor: isActive(tag) ? $store.getters.cssVar.menuBg : '',
          borderColor: isActive(tag) ? $store.getters.cssVar.menuBg : ''
        }"
        @contextmenu.prevent="openMenu($event, index)"
        >{{ tag.title }}
        <Icon
          :icon="'close'"
          @iconClick="closeTag(index)"
          v-show="!isActive(tag)"
          class="close-tag"
        />
      </router-link>
      <contextMenu v-show="showMenu" :style="menuStyle" :index="selectIndex" />
    </el-scrollbar>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import contextMenu from './components/contextMenu'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()
// 展示右侧菜单
const showMenu = ref(false)
const menuStyle = ref({
  top: 0,
  left: 0
})
const selectIndex = ref(0)
const openMenu = (e, index) => {
  showMenu.value = true
  const { x, y } = e
  menuStyle.value.top = y + 'px'
  menuStyle.value.left = x + 'px'
  selectIndex.value = index
}
// 关闭右键菜单
const closeMenu = () => {
  showMenu.value = false
}
watch(showMenu, (value) => {
  if (value) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})
// 激活tag
const isActive = (tag) => {
  return tag.path === route.path
}
// 关闭tag
const closeTag = (index) => {
  console.log('关闭')
  store.commit('app/removeTagsView', { type: 'index', index })
}
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      .close-tag {
        font-size: 20px !important;
      }
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        color: #fff;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
