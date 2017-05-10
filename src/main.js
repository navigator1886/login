// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './assets/lib/zepto.min'
import './assets/js/frozen'
import './assets/css/frozen.css'
import validation from './assets/js/validation'  //自定义表单验证插件

Vue.use(validation)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
//配置请求路径
Vue.http.options.root = '/src/mock'
Vue.http.options.emulateJSON = true

import routes from './router/routes'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes });

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
