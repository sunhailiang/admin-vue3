import Icon from './Icon'
import Breadcrumb from './Breadcrumb'
import LangSelect from './LangSelect'
import ThemeSelect from './ThemeSelect'
import ScreenFull from './ScreenFull'
import HeaderSearch from './HeaderSearch'
const components = [
  Icon,
  Breadcrumb,
  LangSelect,
  ThemeSelect,
  ScreenFull,
  HeaderSearch
]

const registComponents = (app) => {
  // 注册全局组件
  components.forEach((component) => {
    app.component(component)
  })
}
export default registComponents
