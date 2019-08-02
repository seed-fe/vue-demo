<template>
  <div id="app">
    <!-- 由于路由中用了history模式，下面a标签里的#要去掉 -->
    <h1 class="page-title"><a href="/">开发组件库</a></h1>
	<!-- 路由视图容器，访问不同地址的时候会将不同页面中template标签中的内容替代router-view标签 -->
    <router-view></router-view>
  </div>
</template>

<script>
  // vue用的是es6模块系统，export default指定模块的默认输出
	export default {
		name: 'App'
	}
</script>

<style scoped>
  @import './assets/css/App.css';
</style>
