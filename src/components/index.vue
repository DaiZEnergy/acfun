<template>
<div>
<!-- 最外层包裹容器 -->
  <div id="nav">
    <li class="index-a">
      <router-link to="/" >首页</router-link>
    </li>
    <li>
         <router-link to="/yule" >
          娱乐</router-link>
    </li>
    <li> 
       <router-link to="/games">游戏</router-link>
    </li>
    <li>
      <router-link to="/article">文章</router-link>
    </li>
    <li ><strong>···</strong></li>
  </div>
  <!-- 轮播图 -->
 <div class="swiper-container bannar">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="../../static/images/banner1.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="../../static/images/banner2.png" alt="">
    </div>
    <div class="swiper-slide">
     <img src="../../static/images/banner3.jpg" alt="">
    </div>
    <div class="swiper-slide">
     <img src="../../static/images/banner4.png" alt="">
    </div>
    
  </div>
   <div class="swiper-pagination"></div>
</div>
        
<!-- 文章区 -->
<div id="area-guide-header" class="area" style="opacity: 1;"><div class="block-user block"><a class="thumb"><img class="preview" src="http://cdn.aixifan.com/acfun-H5/public/images/original/avatar.jpg"></a><div class="before"><a id="btn-login-header" class="btn btn-login">登录</a></div><div class="after hidden"><p class="name"></p><p class="info">欢迎回来!</p><button id="btn-logout">退出</button></div></div><div id="block-info-header" class="block-info block hidden"></div><div class="block-guide block"><div id="nav-btn" class="nav-all"><h3 class="gpx">导航</h3><i class="icon"></i></div><nav class="nav"><ul class="list"><div class="ch-a"><li><a href="/list/#channel=63">文章</a></li></div><div class="ch-b"><li><a href="/list/#channel=110">综合</a></li><li><a href="/list/#channel=73">工作情感</a></li><li><a href="/list/#channel=74">动漫文化</a></li><li><a href="/list/#channel=75">漫画小说</a></li><li><a href="/list/#channel=164">游戏</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=60">娱乐</a></li></div><div class="ch-b"><li><a href="/list/#channel=86">生活娱乐</a></li><li><a href="/list/#channel=87">鬼畜调教</a></li><li><a href="/list/#channel=88">萌宠</a></li><li><a href="/list/#channel=89">美食</a></li><li><a href="/list/#channel=98">综艺</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=1">动画</a></li></div><div class="ch-b"><li><a href="/list/#channel=106">动画短片</a></li><li><a href="/list/#channel=107">MAD·AMV</a></li><li><a href="/list/#channel=108">MMD·3D</a></li><li><a href="/list/#channel=133">2.5次元</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=59">游戏</a></li></div><div class="ch-b"><li><a href="/list/#channel=83">游戏集锦</a></li><li><a href="/list/#channel=145">电子竞技</a></li><li><a href="/list/#channel=84">主机单机</a></li><li><a href="/list/#channel=85">英雄联盟</a></li><li><a href="/list/#channel=165">桌游卡牌</a></li><li><a href="/list/#channel=72">Mugen</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=58">音乐</a></li></div><div class="ch-b"><li><a href="/list/#channel=136">原创·翻唱</a></li><li><a href="/list/#channel=137">演奏</a></li><li><a href="/list/#channel=103">Vocaloid</a></li><li><a href="/list/#channel=138">日系音乐</a></li><li><a href="/list/#channel=139">综合音乐</a></li><li><a href="/list/#channel=140">演唱会</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=125">鱼塘</a></li></div><div class="ch-b"><li><a href="/list/#channel=131">历史</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=70">科技</a></li></div><div class="ch-b"><li><a href="/list/#channel=90">科学技术</a></li><li><a href="/list/#channel=151">教程</a></li><li><a href="/list/#channel=91">数码</a></li><li><a href="/list/#channel=122">汽车</a></li><li><a href="/list/#channel=149">广告</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=69">体育</a></li></div><div class="ch-b"><li><a href="/list/#channel=152">综合体育</a></li><li><a href="/list/#channel=94">足球</a></li><li><a href="/list/#channel=95">篮球</a></li><li><a href="/list/#channel=153">搏击</a></li><li><a href="/list/#channel=154">11区体育</a></li><li><a href="/list/#channel=93">惊奇体育</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=123">舞蹈</a></li></div><div class="ch-b"><li><a href="/list/#channel=134">宅舞</a></li><li><a href="/list/#channel=135">综合舞蹈</a></li><li><a href="/list/#channel=129">爱豆</a></li><li><a href="/list/#channel=130">手作</a></li><li><a href="/list/#channel=127">造型</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="javascript:;">合作</a></li></div><div class="ch-b"><li><a href="/game/list">游戏中心</a></li></div></ul></nav></div><div class="close"><button>关闭</button></div></div>
<!-- 动画表 -->
<section id="anime" class="section"><a href="/list/#channel=1" class="banner"><h2>动画</h2><i class="icon icon-angle-right"></i></a><div class="mainer"><div class="unit"> <a href="/v/?ac=3873672" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500861169.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500861169.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>超人也变丧尸？上集【xx说漫画】</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873628" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500863164.gif" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500863164.gif&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【获奖动画】 两只恋人</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873882" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500868408.gif" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500868408.gif&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>厉害了！我的漫威cos！！！</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3870892" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_22/1500702734.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_22/1500702734.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【木鱼微剧场】《月色真美》</h3> </div> </a> </div></div>
</section>
<!-- 音乐资讯 -->
<section id="music" class="section">
  <a href="/list/#channel=58" class="banner"><h2>音乐</h2><i class="icon icon-angle-right"></i></a><div class="mainer"><div class="unit"> <a href="/v/?ac=3857514" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_15/1500146213.JPG" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_15/1500146213.JPG&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>原来翻唱也可以这么好听②19</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3863793" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_19/1500431188.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_19/1500431188.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>评论过十万的民谣排行榜</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3852806" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_13/1499941543.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_13/1499941543.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【原翻听18】毕业颂！深夜乐堂怎么感觉好灵异的感觉</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3837010" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_06/1499365675.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_06/1499365675.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【依旧是电音】【第127期】</h3> </div> </a> </div></div>
</section>
<!-- games -->
<section id="game" class="section"><a href="/list/#channel=59" class="banner"><h2>游戏</h2><i class="icon icon-angle-right"></i></a><div class="mainer"><div class="unit"> <a href="/v/?ac=3874730" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500886161.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500886161.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>安德罗妮死于幻觉，乱斗之耻涛将军</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3875223" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500897304.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500897304.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>恶搞无罪，那些玩梗到天际的名作</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873598" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/cms/2017_07_25/1500948440332.gif" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_07_25/1500948440332.gif&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>《拳皇14》究竟是否好玩？</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3871939" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/cms/2017_07_25/1500948422566.gif" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_07_25/1500948422566.gif&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>《命运2》多人副本 倒置尖塔</h3> </div> </a> </div></div>
</section>
<!-- 娱乐资讯 -->
<section id="fun" class="section"><a href="/list/#channel=60" class="banner"><h2>娱乐</h2><i class="icon icon-angle-right"></i></a><div class="mainer"><div class="unit"> <a href="/v/?ac=3874105" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500874269.gif" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500874269.gif&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【寿司拉面RIKU】狗狗看到黄瓜的反应</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873850" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500867223.png" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500867223.png&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>切牛排时流出的红色液体是血吗？</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873805" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500866423.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500866423.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>99％人都猜不出他幾歲！</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873716" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500864525.gif" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500864525.gif&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【泡面CM合集】太好吃了啊！！ 第三期</h3> </div> </a> </div></div>
</section>
<!-- 科技 -->
<section id="tech" class="section">
  <a href="/list/#channel=70" class="banner"><h2>科技</h2><i class="icon icon-angle-right"></i></a><div class="mainer"><div class="unit"> <a href="/v/?ac=3875068" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_24/1500892903.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_24/1500892903.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>巨石强森和 Siri 的一天【点个赞科技译制】</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3873272" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_23/1500821462.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_23/1500821462.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>就要跟丰田对着干 新雅阁来了思铂睿哭晕在厕所</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3871922" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_22/1500746128.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_22/1500746128.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【官方双语】魔法控制的无人机？ --大疆“晓” Spark测评 #linus谈科</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3871929" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_22/1500747233.png" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_22/1500747233.png&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【扯扯车】沃尔沃顶级豪车一功能超越劳斯莱斯 国产本田10代雅阁谍照曝光</h3> </div> </a> </div></div>
</section>
<!-- 体育资讯 -->
<section id="sports" class="section"> 
  <a href="/list/#channel=69" class="banner"><h2>体育</h2><i class="icon icon-angle-right"></i></a><div class="mainer"><div class="unit"> <a href="/v/?ac=3873019" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_23/1500812128.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_23/1500812128.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【平成29年】大相撲名場所幕內全取組十三日</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3872679" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_23/1500789366.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_23/1500789366.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>XCin | Nike kobe 毒液6 球鞋测评</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3871424" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_22/1500718061.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_22/1500718061.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>【西语科普】10项最危险的运动项目</h3> </div> </a> </div><div class="unit"> <a href="/v/?ac=3869630" class="inner"> <div class="cover"> <div data-image="http://imgs.aixifan.com/content/2017_07_21/1500631519.jpg" class="thumb" style="background-image: url(&quot;http://imgs.aixifan.com/content/2017_07_21/1500631519.jpg&quot;); opacity: 1;"> <span class="time hidden"></span> </div> </div> <div class="title"> <h3>地球online - The Most Satisfying Video Eve</h3> </div> </a> </div></div>
  </section>
  <!-- 最外层包裹容器结束 -->
</div>

    
    
 </template>
 <script>
  $(function(){
  $('#btn-guide-header').click(function(){
      $('#area-guide-header').toggle()
    });
   $(".close").children().click(function(){
     $('#area-guide-header').hide()
   })

  })
</script>
<script>
 import "../../static/js/swiper.min.js"

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    var mySwiper = new Swiper('.bannar', {
     autoplay: 3000,
     pagination : '.swiper-pagination',
     autoplayDisableOnInteraction : false,
     loop:true

    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "../../static/css/swiper.min.css"
</style>
