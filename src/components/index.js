import Icon from './Icon'
import Breadcrumb from './Breadcrumb'

const components = [Icon, Breadcrumb]

const registComponents = (app) => {
  // 注册全局组件
  components.forEach((component) => {
    app.component(component)
  })
}
export default registComponents
