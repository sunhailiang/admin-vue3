<template>
  <div class="layout">
    <sideBar
      :class="$store.getters.sidebarState ? 'sidebarState' : ''"
      class="sidebar-container"
      :style="{ backgroundColor: layoutCssObj.menuBg }"
    ></sideBar>
    <div
      class="main-container"
      :class="!$store.getters.sidebarState ? 'openSidebar' : 'closeSidebar'"
    >
      <div
        class="fixed-header"
        :class="$store.getters.sidebarState ? 'fixedHeadState' : ''"
      >
        <navBar />
      </div>
      <appMain>
        <router-view />
      </appMain>
    </div>
  </div>
</template>
<script setup>
import navBar from './components/navBar'
import appMain from './components/main'
import sideBar from './components/sideBar'
import layoutCssObj from '@/assets/styles/variables.scss'
console.log('scss对象', layoutCssObj)
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/layout/sidebar.scss';

.layout {
  @include clearfix;
  position: relative;
  min-width: 100vh;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}
.openSidebar {
  width: calc(100% - #{$sideBarWidth}) !important;
  margin-left: $sideBarWidth !important;
}
.closeSidebar,
.fixedHeadState {
  width: calc(100% - #{$hideSideBarWidth}) !important;
  margin-left: $hideSideBarWidth !important;
}
.sidebarState {
  width: #{$hideSideBarWidth} !important;
}
</style>
