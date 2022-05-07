import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/mixin.scss'
import './assets/styles/variables.scss'
import './assets/styles/transition.scss'
import './assets/styles/my-element-style.scss'
import 'lib-flexible-computer'
import { i18n } from './utils/i18n/index'
import regisGlobaltComponents from './components'
import registeGlobalUtils from './utils'

const app = createApp(App)
app.use(store).use(router).use(i18n).mount('#app')
// 注册全局组件
regisGlobaltComponents(app)
// 注册全局公用函数
registeGlobalUtils(app)
