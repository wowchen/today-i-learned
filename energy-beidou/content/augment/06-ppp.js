EBD.registerLesson({
  id: 'augment-06-ppp',
  module: 'augment',
  order: 6,
  title: 'PPP 精密单点定位:一台机器也能到厘米',
  minutes: 4,
  keywords: ['PPP', '精密单点定位', '精密星历', '收敛', '厘米级'],
  sections: {
    what:
      '<p><gd data-term="ppp">PPP(精密单点定位)</gd>走的是另一条路:<strong>不靠近处基准站</strong>,只要拿到全球通用的"精密轨道 + 精密钟差"产品,一台接收机自己就能修正误差,做到<strong>分米甚至厘米级</strong>。</p>',
    why:
      '<p>它解决了 <gd data-term="rtk">RTK</gd> 的两个软肋:不用在身边架基准站、不受"离基准站多远"限制,<strong>全球任意位置都能用同一套参数</strong>。代价是要等"<strong>收敛</strong>":刚开机时精度差,得连续观测一段时间(传统 PPP 常要十几到几十分钟)才稳定到高精度。</p>',
    how:
      '<ul>' +
      '<li><strong>精密产品</strong>:由全球跟踪网算出卫星的精确轨道和钟差,比卫星自己广播的更准。</li>' +
      '<li><strong>自我修正</strong>:接收机用这些精密参数,加多频观测扣除<gd data-term="dianliceng">电离层</gd>等误差。</li>' +
      '<li><strong>收敛</strong>:慢慢把模糊度等未知量定下来,精度逐步逼近厘米。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:PPP 一开机就厘米。</b>它有<strong>收敛时间</strong>,刚开始只有分米~米级,要等。北斗的 PPP-B2b 等新技术正是在拼命缩短这个收敛(见下一课、以及模块 11 低轨增强)。</div>',
    links:
      '<p>· 北斗把精密改正数直接从卫星播下来:下一课《PPP-B2b》。<br>· 怎么让收敛更快,见模块 11《低轨星座增强》。'
  }
});
