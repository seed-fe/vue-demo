//quiNav.vue
<template>
  <div class="qui-nav nav-type-1">
    <a v-for="(item, index) in items" ><!--关键代码v-for-->
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        items:[
          {
            text: '首页',
            active : true
          },
          {
            text: '列表',
            active : false
          },
          {
            text: '关于',
            active : false
          },
          {
            text: '招聘',
            active : false
          }
        ]
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-nav.import.css';
</style>
