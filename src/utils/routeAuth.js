// 获取路由表后产出符合路由层级的数据
import path from 'path'
// 获取二级路由
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}
// 处理不符合层级的路由
export const filterRoutes = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
// 返回符合路由表规则数据
export const generateMenus = (routes, basePath = '') => {
  const result = []
  // 不满足meta&&meta.title&&meta.icon的数据不渲染
  routes.forEach((item) => {
    // children/meta都不存在
    if (isNull(item.children) && isNull(item.meta)) return
    // 不存在meta/存在children
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 不存在children/存在meta
    const routePath = path.resolve(basePath, item.path)
    // 解决同名父级路由
    let route = result.find((item) => item.path === routePath)
    // 因为同名没有放入result
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }
    // 存在children && 存在meta
    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, routePath))
    }
  })
  return result
}
