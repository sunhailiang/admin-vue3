import Icon from './Icon'

const components = [Icon]

const registComponents = (app) => {
  // 注册全局组件
  components.forEach((component) => {
    app.component(component)
  })
}
export default registComponents
