<template>
  <div class="layout-sidebar">
    <div class="logo-container">
      <img class="logo" :src="require('@/assets/imgs/app/logo.png')" alt="" />
      <!-- <div :class="['logo-title']" v-if="!$store.getters.sidebarState">
          通用管理系统
        </div> -->
    </div>
    <el-menu
      :collapse="$store.getters.sidebarState"
      :default-active="activeMenu"
      active-text-color="#ffd04b"
      background-color="rgb(48, 65, 86)"
      class="el-menu-vertical-demo"
      text-color="#fff"
      :unique-opened="true"
      router
    >
      <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
    </el-menu>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { generateMenus, filterRoutes } from '@/utils/routeAuth.js'
import sidebarItem from './components/sidebarItem.vue'
const router = useRouter()
const routes = computed(() => {
  const frs = filterRoutes(router.getRoutes())
  return generateMenus(frs)
})

// 默认选中项
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
<style lang="scss" scoped>
.logo {
  width: 40px;
  border-radius: 4px;
}
.logo-title {
  margin-left: 4px;
}
.title-state {
  transition: opcity 1;
  display: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
.layout-sidebar {
  height: 100vh;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  font-weight: 900;
}
</style>
