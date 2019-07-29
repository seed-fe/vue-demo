// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*
  将App.vue放到#app中，然后以<App/>来指代#app
  一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
  下面创建的Vue实例就是根实例
  对于 components 对象中的每个属性来说，其属性名就是自定义元素的名字，其属性值就是这个组件的选项对象。
 */
new Vue({
  el: '#app',
  router,
  /*告知当前页面想使用App这个组件，components对象中的属性名就是自定义元素的名字*/
  components: { App },
  /*
    一个字符串模板作为 Vue 实例的标识使用。模板将会替换挂载的元素。挂载元素的内容都将被忽略
    也就是会用App.vue这个单文件组件中的template中的内容替换#app元素，注意是替换不是插入
    告知页面这个组件用这样的标签来包裹着,并且使用它，注意components对象里可以放多个组件，template指明想用哪个组件
  */
  template: '<App/>'
})
