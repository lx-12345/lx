// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import MintUI from 'mint-ui'
import SIdentify from './components/identify'
import './utils/rem.js'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/css/common.css'
Vue.use(SIdentify)
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
