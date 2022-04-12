import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import regisGlobaltComponents from './components'
import registeGlobalUtils from './utils'
import './assets/styles/common/index.scss'
const app = createApp(App)
app.use(store).use(router).mount('#app')

// 注册全局组件
regisGlobaltComponents(app)
// 注册全局公用函数
registeGlobalUtils(app)
