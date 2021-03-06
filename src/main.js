import Vue from 'vue'
import App from './App'
import router from './router'

// 引入标准化样式
import 'normalize.css';

// 1. 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/common/style/index.scss'

// 2. 使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
