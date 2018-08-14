import adCheck from '@/api/adCheck'

export default {
  namespaced: true,
  state: {},
  mutations: {
  },
  actions: {
    // 单元审核
    unitCheck({ commit }, params) {
      console.log(params)
      return adCheck.unitCheck(params)
    }
  }
}
