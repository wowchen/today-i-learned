EBD.registerLesson({
  id: 'asset-05-mobile',
  module: 'asset',
  order: 5,
  title: '移动储能与应急电源:跑哪了、接没接对',
  minutes: 4,
  keywords: ['移动储能', '应急电源', '保供电', '定位', '调度'],
  sections: {
    what:
      '<p>移动储能车、应急发电车是电力的"<strong>机动队</strong>":哪里停电、哪里检修需要临时供电,就把它们开过去接上。给它们装北斗,管的是两件事:<strong>现在跑到哪了、接到正确的接入点没有</strong>。</p>',
    why:
      '<p>这类资源数量有限、调用频繁,又常用于重大保供电、应急抢险等关键场合。位置可视让调度能<strong>就近快速投送</strong>;接入点核验能避免"接错位置"。把宝贵的机动电源用得又快又对,价值很高。</p>',
    how:
      '<ul>' +
      '<li><strong>位置可视</strong>:车载北斗,实时上图,统一调度。</li>' +
      '<li><strong>接入核验</strong>:到达后用定位 + <gd data-term="shikongbiaoqian">时空标签</gd>确认接到了指定的接入点。</li>' +
      '<li><strong>过程记录</strong>:投运、转移全程留痕,便于复盘和考核。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>这是"资产作业"视角,不是"储能技术"。</b>本课只讲"<strong>怎么管它的位置和到位</strong>"。移动储能本身的电气接入、安全规程是另一专业,不在此展开。</div>',
    links:
      '<p>· 把"在建的工程"也管起来:下一课《基建施工进度的时空管理》。<br>· 新型电力系统里的源网荷储协同,见模块 10《源网荷储的时空协同》。'
  }
});
