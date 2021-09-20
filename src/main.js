import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  FastClick from 'fastclick'

import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'   //element-ui所有组件
import axios from 'axios'

const login = axios.create( {
  baseURL: 'https://lianghj.top:8888/api/private/v1/'
})
Vue.prototype.$http = login

Vue.use(ElementUI)


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
