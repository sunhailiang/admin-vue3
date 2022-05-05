<template>
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    @close="close"
    width="20%"
  >
    <div class="content">
      <div class="title">{{ $t('msg.theme.themeChange') }}</div>
      <el-color-picker
        v-model="myColor"
        :predefine="preColor"
      ></el-color-picker>
    </div>
    <template #footer>
      <el-button @click="close">{{ $t('msg.universal.cancel') }}</el-button>
      <el-button type="primary" @click="confirm">{{
        $t('msg.universal.confirm')
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const store = useStore()
// 初始话颜色
const myColor = ref(store.getters.mainColor)
console.log('默认颜色', myColor.value)
const confirm = async () => {
  store.commit('theme/setMaincolor', myColor)
  const newStyle = await generateNewStyle(myColor.value)
  writeNewStyle(newStyle)
  close()
}
const close = () => {
  emits('update:modelValue', false)
}
// 预置色值
const preColor = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]
</script>
<style lang="scss" scoped></style>
