const baseURL = 'https://192.168.0.105:8087'
// const baseURL = "https://pre-www.huiyuntong.com/app/login/"  //测试环境

const api = {
  register: baseURL + '/siteuser/v1/register', // 注册接口
  login: baseURL + '/siteuser/v1/login',
  version: 1,
  secrtKey: 'abcabc'
}

export default api
