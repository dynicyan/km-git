import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'
import QS from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})
service.options.emulateJSON = true
// request拦截器
service.interceptors.request.use((config) => {
  if (config.method === 'post') {
    // if (store.getters.token) {
    //   config.data._csrf = getToken()
    // }
    config.data = QS.stringify(config.data)
    // config.data._csrf = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  // return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
