import { createRouter, createWebHistory } from 'vue-router'
import gurd from './routerGuard'
import userModules from './modules/user'
import articleModule from './modules/article'
// 注意:只有左侧菜单需要展示的带meta
const layout = () => import('@/views/layout/')
// 私有路由表
const privateRoutes = [userModules(layout), articleModule(layout)]
// 公共路由表-无权限
const publicRoutes = [
  // 登录
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/')
  },
  // 主页
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    children: [
      // 个人中心
      {
        path: '/profile',
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/views/profile/'),
        meta: {
          title: 'profile',
          icon: 'user'
        }
      }
    ]
  },

  // 404
  {
    path: '/404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue')
  },
  // 401
  {
    path: '/401',
    component: () =>
      import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

// 路由守卫-鉴权
gurd(router)
export default router
