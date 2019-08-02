<template>
  <!-- v-XXX是Vue里的一些关键字，叫做指令 -->
  <button class="qui-btn" v-on:click="btnClickEvent">
    <!-- slot是一个插槽 -->
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    // 在组件中，props是专门用来暴露组件的属性接口的，页面调用组件的时候就可以通过属性来传递数据
    props: {
      msg: {
        default: '下载'
      }
    },
    methods: {    //绑定事件的关键代码
      btnClickEvent: function(){
        // alert("先弹出默认的文案");
        this.$emit('btnClickEvent') // 关键代码，触发机制，父组件监听，子组件实例触发
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
