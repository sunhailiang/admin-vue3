<template>
  <div class="screen-full" @click="onToggle">
    <Icon :icon="isScreenFull ? 'quxiaoquanping_o' : 'quanping_o'" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import screenFull from 'screenfull'
const isScreenFull = ref(false)
const onToggle = () => {
  screenFull.toggle().then((res) => {
    isScreenFull.value = screenFull.isFullscreen
  })
}
</script>
<style lang="scss" scoped>
.screen-full {
  display: inline-block;
}
</style>
