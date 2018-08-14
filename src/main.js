import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import { sync } from 'vuex-router-sync'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
sync(store, router)
router.beforeEach((to, from, next) => {
  next()
  if (!to.matched.some(record => record.meta.requireAuth === false)) {
    // if (!store.getters['login/isLogin']) {
    // store.dispatch('login/fetch').then(() => checkAuth(from, to, next))
    // } else {
    // checkAuth(from, to, next)
    // }
  } else {
    next()
  }
})
import '@/permission' // permission control
if (process.env.NODE_ENV === 'development') {
  require('./mock') // simulation data
}

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
