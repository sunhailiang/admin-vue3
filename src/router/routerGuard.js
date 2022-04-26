import store from '@/store'

// 开放页面
const publicPage = ['/login', '/404']
export default (router) => {
  router.beforeEach((to, from, next) => {
    // 已经登录，token失效前不能进入login
    if (store.getters.token) {
      if (to.path === '/login') {
        next('/')
      } else {
        // 获取一遍用户信息
        // store.commit('user/setUserInfo', { name: '成龙' })
        if (!store.getters.hasUserInfo) {
          console.log('获取用户信息')
        }
        next()
      }
    } else {
      // 未登录时只能访问开放页面
      if (publicPage.indexOf(to.path) > -1) {
        next()
      } else {
        // 否则只能跳登录页面
        next('/login')
      }
    }
  })
}
