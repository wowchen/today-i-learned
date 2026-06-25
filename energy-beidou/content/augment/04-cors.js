EBD.registerLesson({
  id: 'augment-04-cors',
  module: 'augment',
  order: 4,
  title: '地基增强网 CORS:遍布全国的"地面灯塔"',
  minutes: 4,
  keywords: ['CORS', '地基增强', '基准站网', '网络RTK', '全国'],
  sections: {
    what:
      '<p>单个基准站只能管周边几十公里。把许多<gd data-term="cors">连续运行基准站(CORS)</gd>连成网、统一处理,就成了<gd data-term="dijizengqiang">地基增强系统</gd>:用户在网内任何地方,都能就近拿到改正数,实现<strong>厘米级</strong>定位。</p>',
    why:
      '<p>中国已建成覆盖全国的<strong>北斗地基增强网</strong>(由数千个基准站组成),让厘米级定位变成像水电一样的"<strong>公共服务</strong>":一台支持的终端,接入服务就能用,不用自己每次架基准站。这是大规模铺开电力高精度应用的前提。</p>',
    how:
      '<ul>' +
      '<li><strong>组网</strong>:基准站持续观测,数据汇到处理中心。</li>' +
      '<li><strong>网络 RTK</strong>:中心根据你的概略位置,生成一个"<strong>就近的虚拟基准站</strong>"改正数发给你,等效于身边就有个基准站,跨站也能保持厘米级。</li>' +
      '<li><strong>怎么接</strong>:终端通过网络(如 4G/5G)连服务平台,收改正数。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:地基增强不用联网也能用。</b>常规网络 RTK 改正数要靠<strong>网络</strong>下发。在没有公网的深山,这条路就断了——那正是北斗<gd data-term="ppp-b2b">PPP-B2b</gd>(从卫星直接播改正数)的用武之地。</div>',
    links:
      '<p>· 不靠地面网、从天上播改正数:《星基增强 SBAS》《PPP-B2b》。<br>· 监测精度也建在这张网上,见模块 7《监测精度从哪来:离不开地基增强网》。'
  }
});
