//quiList.vue
<template>
  <div class="qui-list">
    <span class="list-tips">{{tipsText}}</span>
    <qui-btn v-on:btnClickEvent="btnClickEvent" :msg=msg class="small"></qui-btn>
  </div>
</template>

<script>
  import quiButton from '../components/quiButton.vue' // 组件的嵌套
  export default{
    props:{
      /* msg首先通过quiButton暴露给quiList,然后pageQuiList调用quiList的时候再暴露给pageQuiList*/
      msg: {
        default: '下载'
      },
      tipsText: {
        default: '默认的文案'
      }
    },
    components: {
      'qui-btn': quiButton
    }，
    methods:{
      btnClickEvent:function(){
          alert('按钮点击事件')
      }
    }
  }
</script>
