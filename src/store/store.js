import Vue from 'vue'
import Vuex from 'vuex'
import router from 'vue-router'
router.beforeEach((to, from, next) => {
  if (!store.state.user.id && to.path !== '/author') {
    // 第一次进入项目
    localStorage.getItem('beforeLoginUrl', to.fullPath) // 保存用户进入的url
    next('/author')
    return false
  }
  next()
})
