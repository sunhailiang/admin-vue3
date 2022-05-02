<template>
  <div v-bind="$attrs">
    <el-dropdown trigger="click" @command="selectTheme">
      <div style="font-size: 26px">
        <el-tooltip :content="$t('msg.navBar.themeChange')">
          <Icon :icon="'theme'" />
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-item command="color" class="item">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </template>
    </el-dropdown>
    <select-color v-model="selctColorState" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
// import SelectColor from './components/selectColor.vue'
// 弹窗
const selctColorState = ref(false)
const selectTheme = (command) => {
  selctColorState.value = true
}
</script>
<style lang="scss" scoped>
.item {
  padding: 10px;
  cursor: pointer;
}
</style>
