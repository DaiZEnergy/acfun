<template>
<!-- 第一公共样式头部 -->
<header id="header" style="">
	<div id="header-inner" class="inner"><a href="/" class="logo-header"></a><button id="btn-guide-header" class="btn btn-guide"><i class="icon icon-bars lmenu1"></i><span class="subtail"></span><span class="tail"></span><span id="info-hint-header" class="info-hint hidden">0</span></button><button id="btn-search-header" class="btn btn-search"><i class="icon icon-search lmenu1"></i><span class="subtail"></span><span class="tail"></span></button></div><div id="area-guide-header" class="area"><div class="block-user block"><a class="thumb"><img class="preview" src="http://cdn.aixifan.com/acfun-H5/public/images/original/avatar.jpg"></a><div class="before"><a id="btn-login-header" class="btn btn-login">登录</a></div><div class="after hidden"><p class="name"></p><p class="info">欢迎回来!</p><button id="btn-logout">退出</button></div></div><div id="block-info-header" class="block-info block hidden"><div class="info-title"><h3>信息</h3><i class="icon"></i></div><ul id="list-info-header"></ul></div><div class="block-guide block"><div id="nav-btn" class="nav-all"><h3>导航</h3><i class="icon"></i></div><nav class="nav"><ul class="list"><div class="ch-a"><li><a href="/list/#channel=63">文章</a></li></div><div class="ch-b"><li><a href="/list/#channel=110">综合</a></li><li><a href="/list/#channel=73">工作情感</a></li><li><a href="/list/#channel=74">动漫文化</a></li><li><a href="/list/#channel=75">漫画小说</a></li><li><a href="/list/#channel=164">游戏</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=60">娱乐</a></li></div><div class="ch-b"><li><a href="/list/#channel=86">生活娱乐</a></li><li><a href="/list/#channel=87">鬼畜调教</a></li><li><a href="/list/#channel=88">萌宠</a></li><li><a href="/list/#channel=89">美食</a></li><li><a href="/list/#channel=98">综艺</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=1">动画</a></li></div><div class="ch-b"><li><a href="/list/#channel=106">动画短片</a></li><li><a href="/list/#channel=107">MAD·AMV</a></li><li><a href="/list/#channel=108">MMD·3D</a></li><li><a href="/list/#channel=133">2.5次元</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=59">游戏</a></li></div><div class="ch-b"><li><a href="/list/#channel=83">游戏集锦</a></li><li><a href="/list/#channel=145">电子竞技</a></li><li><a href="/list/#channel=84">主机单机</a></li><li><a href="/list/#channel=85">英雄联盟</a></li><li><a href="/list/#channel=165">桌游卡牌</a></li><li><a href="/list/#channel=72">Mugen</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=58">音乐</a></li></div><div class="ch-b"><li><a href="/list/#channel=136">原创·翻唱</a></li><li><a href="/list/#channel=137">演奏</a></li><li><a href="/list/#channel=103">Vocaloid</a></li><li><a href="/list/#channel=138">日系音乐</a></li><li><a href="/list/#channel=139">综合音乐</a></li><li><a href="/list/#channel=140">演唱会</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=125">鱼塘</a></li></div><div class="ch-b"><li><a href="/list/#channel=131">历史</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=70">科技</a></li></div><div class="ch-b"><li><a href="/list/#channel=90">科学技术</a></li><li><a href="/list/#channel=151">教程</a></li><li><a href="/list/#channel=91">数码</a></li><li><a href="/list/#channel=122">汽车</a></li><li><a href="/list/#channel=149">广告</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=69">体育</a></li></div><div class="ch-b"><li><a href="/list/#channel=152">综合体育</a></li><li><a href="/list/#channel=94">足球</a></li><li><a href="/list/#channel=95">篮球</a></li><li><a href="/list/#channel=153">搏击</a></li><li><a href="/list/#channel=154">11区体育</a></li><li><a href="/list/#channel=93">惊奇体育</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="/list/#channel=123">舞蹈·彼女</a></li></div><div class="ch-b"><li><a href="/list/#channel=134">宅舞</a></li><li><a href="/list/#channel=135">综合舞蹈</a></li><li><a href="/list/#channel=129">爱豆</a></li><li><a href="/list/#channel=130">手作</a></li><li><a href="/list/#channel=127">造型</a></li></div></ul><ul class="list"><div class="ch-a"><li><a href="javascript:;">合作</a></li></div><div class="ch-b"><li><a href="/game/list">游戏中心</a></li></div></ul></nav></div><div class="close"><button>关闭</button></div></div><div id="area-search-header" class="area" style="height: 736px;"><!--.form-search.block--><!--    input#ipt-search-header.ipt-search(type="text", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false")--><!--    button#btn-search.btn-search 搜索--><div class="search-header"><a href="/" class="search-acfun-icon"></a><div class="content"><form action="javascript:void(0);"><input type="search" placeholder="输入关键词" id="ipt-search-header"><i class="search-icon"></i><i class="search-cancel-icon"></i></form></div><a href="#" class="search-cancel-text close">取消</a></div><div class="tag-search block hidden"><ul></ul></div><div class="hotwords"><div class="title">热门搜索</div></div></div>
</header>
</template>