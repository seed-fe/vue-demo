//pageQuiButton.vue
<template>
  <div id="pageQuiButton">
    <!--v-on给每个按钮自定义事件，btnClickEvent即quiButton组件中定义的点击事件名,由引用页面（或者父组件）监听子组件实例的内置方法-->
    <qui-btn v-on:btnClickEvent="doSth" msg="我可以点击" class="small"></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth1" msg="确定"></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth2" msg="取消"></qui-btn>
    <qui-btn msg="下载" class="with-icon">
      <!-- slot=“icon”对应组件中的name=“icon”，渲染时会替换掉组件中的slot标签 -->
      <img slot="icon" class="ico" src="xxx.png" />
    </qui-btn>
  </div>
</template>
<script>
  import quiBtn from '../components/quiButton.vue' /*引用组件*/
  export default {
    name: 'pageQuiButton',
    components: {
      /*
        注册自定义标签,将自定义组件对应到自定义标签上,
        自定义组件中的template标签内包含的内容会替换qui-btn标签,qui-btn标签内的class会保留
      */
      'qui-btn': quiBtn
    },
    methods: {
      doSth: function(){
        alert('你点击了组件的click:btnClickEvent')
      },
      doSth1: function(){
        alert('111')
      },
      doSth2:function(){
        alert('222')
      }
    }
  }
</script>
