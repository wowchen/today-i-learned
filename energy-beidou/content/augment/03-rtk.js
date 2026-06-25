EBD.registerLesson({
  id: 'augment-03-rtk',
  module: 'augment',
  order: 3,
  title: 'RTK:厘米级实时定位是怎么做到的',
  minutes: 4,
  key: '厘米级主力',
  keywords: ['RTK', '载波相位', '厘米级', '实时动态', '模糊度'],
  sections: {
    what:
      '<p><gd data-term="rtk">RTK</gd>(实时动态)是当今<strong>厘米级</strong>定位的主力。它和 <gd data-term="dgnss">DGNSS</gd> 思路一样靠基准站差分,区别在于:不再用粗糙的<gd data-term="weizhi">伪距</gd>,而是直接量<strong>载波相位</strong>——用卫星信号的"波"本身当尺子,刻度极细。</p>',
    how:
      '<ul>' +
      '<li><strong>载波当尺</strong>:北斗载波波长约 19 厘米量级,数它过了几个波、相位差多少,能把距离量到毫米级。</li>' +
      '<li><strong>解模糊度</strong>:难点是"到底过了整整多少个波"(整周模糊度),RTK 的核心算法就是实时把这个整数定下来,一旦"固定解"成功,精度立刻跳到厘米。</li>' +
      '<li><strong>要数据链</strong>:用户实时接收基准站(或网络)的观测/改正数,所以叫"实时"。</li>' +
      '</ul>' +
      '<div class="ex">电力里测杆塔精确坐标、勘测线路路径、施工放样、监测基准点,普遍用 RTK。一个人扛着 RTK 接收机走一圈,厘米级坐标就采下来了。</div>',
    why:
      '<p>RTK 把"高精度"从测绘院搬到了现场:不用事后处理,站上去几秒到十几秒出固定解,实时厘米。这让大规模采集杆塔坐标、布设监测点变得可行,是<gd data-term="xingbianjiance">形变监测</gd>和精准巡检的基础。</p>',
    pitfalls:
      '<div class="pit"><b>误解:RTK 随时随地都厘米。</b>它要"固定解"才厘米;遮挡严重、离基准站太远、信号差时只能给"浮点解",精度退到分米甚至更差。看到没固定就别当厘米用。</div>' +
      '<div class="pit"><b>误解:单基准站能管很大范围。</b>距离一远改正失效。要大范围厘米级,得靠成网的<gd data-term="cors">CORS</gd>(下一课)。</div>',
    links:
      '<p>· 一张网覆盖全国的 RTK:下一课《地基增强网 CORS》。<br>· 不要近处基准站的高精度方案,见《PPP》《PPP-B2b》。'
  }
});
