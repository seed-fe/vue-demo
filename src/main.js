// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, /*告知当前页面想使用App这个组件*/
  template: '<App/>' /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
})
