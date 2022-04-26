// 存储
const localSetItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取
const localGetItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

// 删除指定数据
const localRemoveItem = (key) => {
  window.localStorage.removeItem(key)
}

// 清空所有数据

const localClear = () => {
  window.localStorage.clear()
}

export default {
  localSetItem,
  localGetItem,
  localRemoveItem,
  localClear
}
