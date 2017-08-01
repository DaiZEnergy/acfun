<template>
<div>
<!-- 外层包裹容器 -->
 <nav id="guide"><div class="area-btn"><button id="btn-channel-list" data-type="channel" class="ch-sl">娱乐<i></i></button><div class="sort"><label>排序:</label><button id="btn-sort-list" data-type="sort" class="sort-sl">最新发布<i></i></button></div></div><ul class="channel-list hidden"><li><a href="#channel=86">生活娱乐</a></li><li><a href="#channel=87">鬼畜调教</a></li><li><a href="#channel=88">萌宠</a></li><li><a href="#channel=89">美食</a></li><li><a href="#channel=98">综艺</a></li></ul><ul class="sort-list hidden"><li data-sort="5"><button>最新回复</button></li><li data-sort="1"><button>点击最高</button></li><li data-sort="2"><button>评论最多</button></li></ul></nav>
<!-- 资讯展示 -->
<div class="sohot">
	本区最热
</div>
<div class="unit" v-for="item in msg">
<a href="/v/?ac=3875622" target="_blank" class="inner"><div class="l"><img :src="item.image" alt=""></div><div class="r"><div class="title"><h3>{{item.title}}</h3></div><div class="info"><p class="author">UP主：<span class="name">{{item.author}}</span></p><p class="pts">播放：<span class="count">{{item.like}}</span></p></div></div></a>
</div>



 <!-- 外层包裹容器结束 -->
</div>

 </template>
<script>
export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
  
  	this.$http.get("/info2").then(function(rel){

  		this.msg=rel.body.data;
  		  		console.log(this.msg);
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
