<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">
          {{ item.meta.title }}</span
        >
        <span v-else @click="link(item)" class="redirect">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const breadcrumbData = ref([])
const route = useRoute()
const router = useRouter()
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}
const link = (item) => {
  router.push(item.path)
}
// 监听路由变化
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
}
::v-deep .no-redirect {
  color: #97a8be;
}
::v-deep .redirect {
  cursor: pointer;
  &:hover {
    color: #304156;
  }
}
</style>
