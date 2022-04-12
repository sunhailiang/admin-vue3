import request from '@/api/request'
/**
 * 登录接口
 */
const login = (data) => {
  console.log('saads', data)
  return request({
    url: '/backstage/user/login/authority',
    methods: 'POST',
    data
  })
}

export default { login }
