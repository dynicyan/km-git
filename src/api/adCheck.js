import request from '@/utils/request'

export default {
  unitCheck(params) {
    return request({
      url: '/check/ad-check/unit-list',
      method: 'GET',
      params: params
    })
  }
}
