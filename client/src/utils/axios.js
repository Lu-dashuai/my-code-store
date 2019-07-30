import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:6060', // api的base_url
  timeout: 20000 // 请求超时时间
})

//拦截响应
instance.interceptors.response.use(response => {
  return response.data
})

export default instance
