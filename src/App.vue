<template>
  <div id="app">
   <!-- 公共头部 -->
    <v-head></v-head>
   

    <router-view></router-view>
    <!-- 公共底部 -->
    <v-footer></v-footer>
  </div>
</template>

<script>
 import header from "./components/layout/head.vue";
import footer from "./components/layout/footer.vue";

export default {
  components:{
    "v-head":header,
    "v-footer":footer
  }
}
  
</script>


<style>
/* 重置全局css样式文件 */
@import "../static/css/reset.css";
@import "../static/css/index.css";
@import "../static/css/list.css";


</style>
