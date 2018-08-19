import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import { sync } from 'vuex-router-sync'
import '@/styles/index.scss' // global css
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Helpers from './helpers'

import App from './App'
import router from './router'
import store from './store'
sync(store, router)
import '@/permission' // permission control
if (process.env.NODE_ENV === 'development') {
  require('./mock') // simulation data
}

Vue.use(ElementUI, { locale }, VueAwesomeSwiper, Helpers)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
