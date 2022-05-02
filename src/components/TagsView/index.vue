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
        >{{ tag.title }}
        <Icon
          :icon="'close'"
          v-show="!isActive(tag)"
          @click.prevent.stop="closeTag"
        />
      </router-link>
    </el-scrollbar>
  </div>
</template>
<script setup>
import {} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// 激活tag
const isActive = (tag) => {
  return tag.path === route.path
}
// 关闭tag
const closeTag = (tag) => {}
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
