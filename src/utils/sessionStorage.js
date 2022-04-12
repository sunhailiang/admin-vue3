// 存储
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

// 获取
const getItem = (key) => {
  const data = sessionStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

// 清除某个
const removeItem = (key) => {
  window.sessionStorage(key)
}
// 清除所有
const clear = () => {
  window.sessionStorage.clear()
}

export default { setItem, getItem, removeItem, clear }
