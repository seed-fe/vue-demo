import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'
// 显示声明要用路由
Vue.use(Router)

export default new Router({
	mode: 'history', // hash(#号)比较丑，改为history模式可去掉hash，此时页面中的链接也要去掉#号
  routes: [
    {
      path: '/',
      name: 'index', /* name参数只是用来识别不同路由的*/
      component: index
    },
    {
    	path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    }
  ]
})
