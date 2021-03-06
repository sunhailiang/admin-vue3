// 存储
const sessionSetItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

// 获取
const sessionGetItem = (key) => {
  const data = sessionStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

// 清除某个
const sessionRemoveItem = (key) => {
  window.sessionStorage(key)
}
// 清除所有
const sessionClear = () => {
  window.sessionStorage.clear()
}

export default {
  sessionSetItem,
  sessionGetItem,
  sessionRemoveItem,
  sessionClear
}
