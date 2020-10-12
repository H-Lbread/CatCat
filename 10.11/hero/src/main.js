import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('time', function (value) {
  return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})

// axios优化
// 1. 每个页面都需要引入axios很麻烦, 所以可以将通用的一些方法, 直接挂载到 Vue 原型上
//    组件其实就是可复用的vue实例, 将来实例: this.$axios.get(..)
Vue.prototype.$axios = axios
// 2. 配置基准路径, 将来只要是axios请求, 就可以自动拼上基础路径的前缀
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
