import request from '@/api/request'
import store from '@/store'
import localStore from '@/utils/localStorage.js'
import route from '@/router'
import { setTimeStamp } from '@/utils/auth.js'
/**
 * 登录接口
 */
const login = (data) => {
  console.log('登录', data)
  store.commit(
    'user/setToken',
    'x3k1dfsdfs2d3sfdsdfdsdfsdffs8973456789fopldjkfahgjf'
  )
  route.push('/')
  // 保存登录时间
  setTimeStamp()
}
const logout = (data) => {
  console.log('登出', data)
  store.commit('user/setToken', '')
  store.commit('user/setUserInfo', {})
  localStore.localClear()
  route.push('/login')
}
const getUserInfo = (data) => {
  return request({
    url: '/backstage/user/login/authority',
    methods: 'POST',
    data
  })
}

export default { login, logout, getUserInfo }
