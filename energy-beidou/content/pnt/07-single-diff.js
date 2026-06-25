EBD.registerLesson({
  id: 'pnt-07-single-diff',
  module: 'pnt',
  order: 7,
  title: '单点定位 vs 差分定位',
  minutes: 4,
  keywords: ['单点定位', '差分', 'SPP', '改正数', '米级', '厘米级'],
  sections: {
    what:
      '<p>同样是北斗定位,精度能从"米级"到"厘米级",差别在两条路线:</p>' +
      '<ul>' +
      '<li><gd data-term="dandian">单点定位</gd>:一台接收机独立解算,简单方便,但只能到<strong>米级</strong>。</li>' +
      '<li><gd data-term="chafen">差分定位</gd>:借助已知精确位置的基准站,把公共误差扣掉,精度能到<strong>分米甚至厘米级</strong>。</li>' +
      '</ul>',
    why:
      '<p>电力应用按精度需求分两类:看个大概(车辆在哪、人员在不在区域)用单点就够;而<gd data-term="rtk">RTK</gd> 测量、<gd data-term="xingbianjiance">毫米级形变监测</gd>、精准杆塔坐标,非差分不可。搞懂这条分界,后面整个模块 3 都顺了。</p>',
    how:
      '<p>差分为什么能更准?核心在于:你和附近基准站看的是<strong>同一批卫星</strong>,受的<gd data-term="dianliceng">电离层</gd>、<gd data-term="weizhi">轨道钟差</gd>等误差<strong>几乎一样</strong>。基准站位置已知,能反推出"此刻这些误差共多少",把这个改正数给你,你一扣,误差就基本抵消。</p>' +
      '<div class="ex">就像两个人在同一片雾里看同一座灯塔:旁边那位站在已知位置,他算出"雾让距离偏了 3 米",你照着扣掉 3 米,立刻准了。前提是你俩离得不太远、看的是同几座灯塔。</div>',
    pitfalls:
      '<div class="pit"><b>误解:差分能无限远用。</b>你和基准站离得越远,两边误差越不一样,改正数就越不灵。这正是要建一张遍布各地的<gd data-term="cors">基准站网</gd>的原因(见模块 3)。</div>',
    links:
      '<p>· 差分怎么落地成厘米级,见模块 3《DGNSS》《RTK》。<br>· 不靠近处基准站也能高精度?见《PPP 精密单点定位》。'
  }
});
