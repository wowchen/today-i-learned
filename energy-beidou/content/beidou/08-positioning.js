EBD.registerLesson({
  id: 'beidou-08-positioning',
  module: 'beidou',
  order: 8,
  title: '北斗为什么能定位:三球交会一次讲清',
  minutes: 5,
  keywords: ['定位原理', '三球交会', '伪距', '测距', '交会'],
  sections: {
    what:
      '<p>定位的核心就一招:<strong>量出到几颗卫星的距离,再几何交会</strong>。知道到一颗星的距离,你在以它为球心的一个球面上;再加一颗,缩到一个圆;再加一颗,基本锁定一个点。这就是"三球交会"。</p>',
    how:
      '<p>距离怎么量?靠<strong>时间</strong>:信号从卫星飞到你这儿用了多久,乘以光速,就是距离。这个算出来的距离叫<gd data-term="weizhi">伪距</gd>(因为还含误差,不完全真实)。</p>' +
      '<figure class="fig"><svg viewBox="0 0 320 200" width="100%" style="max-width:320px">' +
      '<circle class="f-line" cx="70" cy="60" r="70"/>' +
      '<circle class="f-line" cx="250" cy="55" r="80"/>' +
      '<circle class="f-okln" cx="170" cy="180" r="95"/>' +
      '<circle class="f-arr" cx="70" cy="60" r="4"/><text class="f-dim" x="40" y="50">星1</text>' +
      '<circle class="f-arr" cx="250" cy="55" r="4"/><text class="f-dim" x="256" y="50">星2</text>' +
      '<circle class="f-arr" cx="170" cy="180" r="4"/><text class="f-dim" x="176" y="195">星3</text>' +
      '<circle class="f-arr" cx="150" cy="92" r="5"/><text class="f-hot" x="156" y="88">你</text>' +
      '</svg><figcaption>图 · 三个距离"球面"交会到你所在的点</figcaption></figure>' +
      '<p>问题来了:你手里的表远没有卫星的<gd data-term="yuanzizhong">原子钟</gd>准,差一点点,距离就差几百米。所以实际要解<strong>四个未知数</strong>——你的 X、Y、Z 三个坐标,外加"你的钟差"——因此至少要<strong>四颗星</strong>(下一课细讲)。</p>',
    why:
      '<p>看懂这一招,后面很多事就顺了:为什么卫星要带原子钟(时间是距离的根)、为什么<gd data-term="pdop">卫星分布</gd>影响精度、为什么各种"增强"都在想办法把伪距里的误差扣干净——本质都是把这个"量距 + 交会"做得更准。</p>',
    pitfalls:
      '<div class="pit"><b>误解:定位靠测角度/测方向。</b>卫星导航靠<strong>测距离</strong>(本质是测时间),不是测方向。所以时间准不准,直接决定定位准不准。</div>',
    links:
      '<p>· 为什么是"至少四颗"?下一课《为什么至少要四颗星》。<br>· 误差从哪来、怎么扣,见模块 2《定位误差从哪来》。'
  }
});
