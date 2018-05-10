const baseURL = "https://192.168.0.105:8087/";  // 测试环境
// const baseURL = "https://pre-www.huiyuntong.com/app/login/"  //测试环境

const api = {
  loginByCode: baseURL + 'siteuser/v1/register', // 注册接口
  loginBySendTel: baseURL + '/siteuser/v1/login'
};

export default api
