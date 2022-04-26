<template>
  <!-- element icon -->
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :icon="icon"></i>
  <!-- 其他icon -->
  <Icon v-else :icon="icon" />
  <!-- 文本 -->
  <span :style="!$store.getters.sidebarState ? 'margin-left:6px' : ''">{{
    title
  }}</span>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped></style>
