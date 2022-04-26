<template>
  <!-- 二级菜单 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <!-- 一级 -->
    <template #title>
      <menuItem :title="route.meta.title" :icon="route.meta.icon" />
    </template>
    <!-- 二级 -->
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-sub-menu>
  <!-- 一级菜单 -->
  <el-menu-item v-else :index="route.path">
    <menuItem :title="route.meta.title" :icon="route.meta.icon" />
  </el-menu-item>
</template>
<script setup>
import { defineProps } from 'vue'
import menuItem from './menuItem.vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}
</style>
