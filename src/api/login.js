import request from '@/utils/request'

export default {
  login(params) {
    return request({
      url: '/user/login',
      method: 'POST',
      data: params
    })
  },
  checkLogin() {
    return request({
      url: '/site/is-login',
      method: 'get'
    })
  },
  getInfo(token) {
    return request({
      url: '/user/api/init-data',
      method: 'get',
      params: { token }
    })
  },
  logout(params) {
    return request({
      url: '/user/logout',
      method: 'POST',
      data: params
    })
  }
}
