<template>
  <!-- 外部icon -->
  <div
    v-if="isExtermal"
    :style="styleExternalIcon"
    class="svg-icon external-icon"
    @click.stop="tabIcon"
  >
    icon
  </div>
  <!-- 内部icon -->
  <svg
    v-else
    class="svg-icon"
    :class="className"
    aria-hidden="true"
    @click="tabIcon"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup>
// 注册本地的svg
import '@/assets/icons'
import { defineProps, computed, getCurrentInstance } from 'vue'
const { proxy, ctx } = getCurrentInstance()

const props = defineProps({
  // icon
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    defaule: ''
  }
})

// 判断是否为外部图标
const isExtermal = computed(() => proxy.$utils.isExternal(props.icon))

// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

// 内部图标
const iconName = computed(() => `#icon-${props.icon}`)

// 图标点击事件

const tabIcon = () => {
  ctx.$emit('iconClick')
}
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
.external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
