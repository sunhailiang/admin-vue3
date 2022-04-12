import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: () => import('@/views/layout/')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes
})

export default router
