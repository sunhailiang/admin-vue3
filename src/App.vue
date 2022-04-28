<template>
  <router-view />
</template>
<script setup>
// 初始化皮肤
import { writeNewStyle, generateNewStyle } from '@/utils/theme'
import { useStore } from 'vuex'
const store = useStore()
generateNewStyle(store.getters.mainColor).then((color) => {
  writeNewStyle(color)
})
</script>

<style lang="scss"></style>
