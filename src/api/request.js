import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const { requestState, message, data } = response
    // 业务请求成功
    if (requestState) {
      // 返回数据
      return data
    } else {
      // 业务请求失败，提示定制化信息
      ElMessage.error(message)
      // 返回业务请求失败信息
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (error) => {
    // 请求不通过，提示状态信息
    ElMessage.error(error.message)
    // 返回请求失败信息
    return Promise.reject(error)
  }
)
export default service
// https://api.imooc-admin.lgdsunday.club/api
