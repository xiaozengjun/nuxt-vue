import * as axios from 'axios'

import {Message, Notification} from 'element-ui'

let service = axios.create({
  baseURL: 'https://api.apiopen.top',//域名信息-测试
  timeout: 10000
})

// 请求拦截 可在请求头中加入token等
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截 对响应消息作初步的处理
// service.interceptors.response.use(resp => {
//   if (resp.data) {
//     if (resp.data.code !== '10000') {
//       Message({
//         type: 'error',
//         message: resp.data.message,
//         duration: 5000
//       })
//     }
//     return {code: resp.data.code, data: resp.data.data, msg: resp.data.message}
//   } else {
//     return resp
//   }
// }, error => {
//   if (error.response) {
//     switch (error.response.states) {
//       case 400: {
//         if (error.response && error.response.data && error.response.data.message) {
//           Notification.error({
//             title: '400错误',
//             message: error.response.data.message,
//             duration: 5000,
//             closable: true
//           })
//         }
//         break
//       }
//     }
//   }
// })

export default service
