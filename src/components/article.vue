<template>
<div>
<!-- 外层包裹容器 -->
 <nav id="guide"><div class="area-btn"><button id="btn-channel-list" data-type="channel" class="ch-sl">娱乐<i></i></button><div class="sort"><label>排序:</label><button id="btn-sort-list" data-type="sort" class="sort-sl">最新发布<i></i></button></div></div><ul class="channel-list hidden"><li><a href="#channel=86">生活娱乐</a></li><li><a href="#channel=87">鬼畜调教</a></li><li><a href="#channel=88">萌宠</a></li><li><a href="#channel=89">美食</a></li><li><a href="#channel=98">综艺</a></li></ul><ul class="sort-list hidden"><li data-sort="5"><button>最新回复</button></li><li data-sort="1"><button>点击最高</button></li><li data-sort="2"><button>评论最多</button></li></ul></nav>
<div class="sohot ssout ">
	本区最热
</div>
<div class="mainer">
<div class="item" v-for="item in msg">
<a href="/v/?ac=3877236" target="_blank" class="inner"><div class="hint"><span class="a">{{item.like}}</span><span class="b">评论</span></div><h3 class="title">{{item.header}}</h3><p class="article-info"><span class="name">{{item.author}}</span> / <span class="time">{{item.time}}</span> / <span class="pts">{{item.read}}</span>人围观</p><p class="desc">{{item.desc}}</p></a>
</div>
</div>
 <!-- 外层包裹容器结束 -->
</div>

 </template>
<script> 
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  	this.$http.get("/info1").then(function(rel){
  	this.msg=rel.body.data;
  	console.log(this.msg);

  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	
</style>
