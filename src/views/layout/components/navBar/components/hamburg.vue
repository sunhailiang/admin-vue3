<template>
  <div class="hamburg-container" @click="toggleClick">
    <Icon :icon="icon" />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const toggleClick = () => {
  store.commit('app/changeSidebarState')
}
const icon = computed(() => {
  return !store.getters.sidebarState
    ? 'a-Icon-line-hamburger-left1x'
    : 'a-Icon-line-hamburger-right1x'
})
</script>
<style lang="scss" scoped>
.hamburg-container {
  display: inline-block;
  padding: 12px;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
