import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './utils/i18n/index'
import router from './router'
import store from './store'
import regisGlobaltComponents from './components'
import registeGlobalUtils from './utils'
import './assets/styles/index.scss'
const app = createApp(App)
app.use(store).use(router).use(i18n).mount('#app')
// 注册全局组件
regisGlobaltComponents(app)
// 注册全局公用函数
registeGlobalUtils(app)
