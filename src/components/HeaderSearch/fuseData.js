// 变更数据结构使符合fusejs的参数规则
import path from 'path'
import { $t } from '@/utils/i18n'
/**
 * routes 路由
 * preFixtitle 多层级数据
 */
export const generateRoutes = (routes, basePath = '/', preFixtitle = []) => {
  let res = []
  for (const route of routes) {
    // 创建单个item 包含：path和title
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...preFixtitle]
    }
    // 国际化搜索
    // 动态路由不允许解析
    const rex = /.*\/:.*/
    if (
      route.meta &&
      route.meta.title &&
      !rex.exec(route.path) &&
      !res.find((item) => item.path === data.path)
    ) {
      // 同时处理国际化内容
      const i18nTitle = $t(`msg.route.${route.meta.title}`)
      data.title = [...data.title, i18nTitle]
      res.push(data)
    }
    // 存在children的情况下，递归处理
    if (route.children) {
      const temp = generateRoutes(route.children, data.path, data.title)
      if (temp.length > 0) {
        res = [...res, ...temp]
      }
    }
  }
  return res
}
