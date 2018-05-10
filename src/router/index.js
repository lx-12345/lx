import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) ;
// 按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['../views/index.vue'], resolve)
const Login = resolve => require(['../views/login.vue'], resolve)
const Register = resolve => require(['../views/register.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      path: '/register',
      name: '注册页',
      component: Register
    }
  ]
})
