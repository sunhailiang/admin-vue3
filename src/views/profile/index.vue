<template>
  <div class="">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <el-tooltip :content="'提示？'">
      <el-button>top-start</el-button></el-tooltip
    >
  </div>
</template>

<script setup>
import {} from 'vue'
import { cloneDeep } from 'lodash'
console.log('单独引入?', cloneDeep)
</script>

<style lang="scss" scoped></style>
