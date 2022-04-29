<template>
  <div class="header-search" :class="{ show: isShow }" @click.stop="showClick">
    <Icon :icon="'search'" class="search-icon" />
    <el-select
      ref="headerSearchSelect"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in options"
        :key="option.item.path"
        :label="option.item.title.join('>')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { filterRoutes } from '@/utils/routeAuth.js'
import { useRouter } from 'vue-router'
import { generateRoutes } from './fuseData.js'
import { watchSwitchLanguage } from '@/utils/i18n'
import Fuse from 'fuse.js'
const isShow = ref(false)
const search = ref('')

// 数据池
const router = useRouter()
let dataPool = computed(() => {
  // 过滤路由
  const filterR = filterRoutes(router.getRoutes())
  // 获取符合fuse检索规则的数据源
  return generateRoutes(filterR)
})
let fuse
const initFuse = (dataPool) => {
  fuse = new Fuse(dataPool.value, {
    shouldSort: true, // 排序？
    minMatchCharLength: 1, // 最低匹配？
    keys: [
      // 关键词？
      {
        name: 'title',
        weight: 0.8 // 权重
      },
      {
        name: 'path',
        weight: 0.2
      }
    ]
  })
}
// 模糊检索数据-默认语言环境
initFuse(dataPool)
// 搜索
const options = ref([])
const querySearch = (query) => {
  if (query.trim() !== '') {
    options.value = fuse.search(query)
  } else {
    options.value = []
  }
}
// 选中回调
const onSelectChange = (val) => {
  router.push(val.path)
}
// 展示搜索框
const showClick = () => {
  isShow.value = !isShow.value
}
// 选中其他区域搜索框关闭
const headerSearchSelect = ref(null)
watch(isShow, (val) => {
  if (val) {
    // headerSearchSelect.value.focus()
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})
// 获取select实例
const onClose = () => {
  headerSearchSelect.value.blur()
  isShow.value = false
  options.value = []
}

// 当前语言环境切换后，重新计算计算数据源
watchSwitchLanguage(() => {
  dataPool = computed(() => {
    // 过滤路由
    const filterR = filterRoutes(router.getRoutes())
    // 获取符合fuse检索规则的数据源
    return generateRoutes(filterR)
  })
  // 切换语言环境后重新出实话fuse
  initFuse(dataPool)
})
</script>
<style lang="scss" scoped>
.header-search {
  display: inline-block;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
