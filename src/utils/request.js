//axios 封装

import axios from 'axios'

//1. 根域名
//2. 超时时间
//3. 请求拦截器/详情拦截器

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
// 在发送请求之前，可以做一些处理 【参数的处理】
request.interceptors.request.use(config => {
  return config
},(error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
// 在响应返回到客户端之前 做拦截 重点处理返回的数据
request.interceptors.response.use(response => {
  return response.data
},(error) => {
  return Promise.reject(error)
})

export {request}
