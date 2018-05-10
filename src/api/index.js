const baseURL = "https://47.105.33.225:8088/";  // 预发布环境
// const baseURL = "https://pre-www.huiyuntong.com/app/login/"  //测试环境

const api = {
  loginByCode: baseURL + 'siteuser/v1/register',
  loginBySendTel: baseURL + '/siteuser/v1/login',
};

export default api
