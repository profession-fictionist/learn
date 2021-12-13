import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"

Vue.config.productionTip = false
  // 原型
  // Vue 实例可以作为事件总线
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})