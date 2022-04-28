import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from './const/constant'
import utils from './localStorage.js'

// 获取时间戳
export const getTimeStamp = () => {
  return utils.localGetItem(TIME_STAMP)
}
// 设置时间戳
export const setTimeStamp = () => {
  return utils.localSetItem(TIME_STAMP, Date.now())
}
// 是否超时
export const tokenIsTimeout = () => {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
