//quiList.vue
<template>
  <div class="qui-list">
    <span class="list-tips">{{tipsText}}</span>
    <!-- 通过is关键字和component结构来生成动态组件，自定义属性currentView决定调用组件的页面（或父组件）用哪种子组件-->
    <component v-bind:is="currentView" v-on:btnClickEvent="btnClickEvent" :msg=msg class="small" keep-alive></component>
  </div>
</template>

<script>
  import quiButton from '../components/quiButton.vue' // 组件的嵌套
  import quiArrow from '../components/quiArrow.vue'
  export default{
    props:{
      /* msg首先通过quiButton暴露给quiList,然后pageQuiList调用quiList的时候再暴露给pageQuiList*/
      msg: {
        default: '下载'
      },
      tipsText: {
        default: '默认的文案'
      },
      currentView: {
        default: 'qui-btn'
      }
    },
    components: {
      'qui-btn': quiButton,
      'qui-arrow': quiArrow
    },
    methods:{
      btnClickEvent:function(){
          alert('按钮点击事件')
      }
    }
  }
</script>
<style scoped>
  .qui-list{
    padding: 10px 0;
    margin-left: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
    display: flex;
    justify-content:center;
    align-items:Center;
    min-height: 30px;
  }
  .qui-list .qui-btn{
    float: right;
    margin-right: 10px;

  }
  .qui-list .list-tips{
    padding: 0 5px;
    color: #00A0D8;
    float: left;
    vertical-align: middle;
    flex:1;
    text-align: left;
    font-size: 14px;
  }
</style>
