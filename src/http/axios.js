import axios from 'axios'
import { useUserStore } from '../store/user'
//创建axios实例
const instance = axios.create({
  baseURL: 'https://api.jqrjq.cn/',
  timeout: 6000,
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const { token } = userStore
    // console.log(token);
    config.headers.token = token

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance

//Promise对象 异步处理对象

const promise = new Promise((resolve, reject) => {
  //如果成功
  resolve()
  //失败
  reject()
})

promise.then((res) => {}).catch((err) => {})
