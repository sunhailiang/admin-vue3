import Icon from './Icon'
import Breadcrumb from './Breadcrumb'
import LangSelect from './LangSelect'
import ThemeSelect from './ThemeSelect'
const components = [Icon, Breadcrumb, LangSelect, ThemeSelect]

const registComponents = (app) => {
  // 注册全局组件
  components.forEach((component) => {
    app.component(component)
  })
}
export default registComponents
