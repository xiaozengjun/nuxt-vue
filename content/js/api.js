import request from '@/plugins/request'

//测试接口
export function getDemoinfo (params) {
  return request({
    url: '/getJoke',//测试
    method: 'get',
    params: params
  })
}
