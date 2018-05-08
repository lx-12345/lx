import Vue from 'vue'
import Router from 'vue-router'
import author from '../components/author'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: ''
    },
    {
      path: '/',
      name: 'author',
      component: author
    },
    {
      path: '/author',
      name: 'author',
      component: author
    }
  ]
})
router.beforeEach((to, from, next) => {
  const id = localStorage.getItem('openid')

  console.log(id)

  if (!id && to.path !== '/author') {
    // 第一次进入项目
    localStorage.setItem('beforeLoginUrl', to.fullPath) // 保存用户进入的url
    next('/author')
    return false
  }
  next()
})

// 登录后跳转方法
Vue.prototype.goBeforeLoginUrl = () => {
  let url = localStorage.getItem('beforeLoginUrl')
  if (!url || url.indexOf('/author') !== -1) {
    router.push('/index')
  } else {
    if (url === '/') {
      url = '/index'
    }
    Router.push(url)
    this.localStorage.setItem('beforeLoginUrl', '')
  }
}
