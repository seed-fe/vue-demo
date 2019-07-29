<template>
  <!-- v-XXX是Vue里的一些关键字，叫做指令 -->
  <button class="qui-btn" v-on:click="btnClickEvent">
	<slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    // 在组件中，props是专门用来暴露组件的属性接口的
    props: {
      msg: {
        default: '下载'
      }
    },
    methods: {    //绑定事件的关键代码
      btnClickEvent: function(){
        // alert("先弹出默认的文案");
		this.$emit('btnClickEvent') // 关键代码，父组件触发自定义事件
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
