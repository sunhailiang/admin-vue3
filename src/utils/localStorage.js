// 存储
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取
const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

// 删除指定数据
const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

// 清空所有数据

const clear = () => {
  window.localStorage.clear()
}

export default { setItem, getItem, removeItem, clear }
