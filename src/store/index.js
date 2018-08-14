import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state: {
      app: [],
      login: [],
      permission: []
    }
  },
  getters: {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.login.token,
    avatar: state => state.login.avatar,
    name: state => state.login.name,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    roles: state => state.login.roles
  },
  modules: modules
})
