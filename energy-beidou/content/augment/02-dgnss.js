EBD.registerLesson({
  id: 'augment-02-dgnss',
  module: 'augment',
  order: 2,
  title: '差分 DGNSS:用基准站抵消公共误差',
  minutes: 4,
  keywords: ['DGNSS', '差分', '伪距差分', '基准站', '改正数', '亚米级'],
  sections: {
    what:
      '<p><gd data-term="dgnss">DGNSS</gd> 是最基础的差分:在已知精确位置架一个<strong>基准站</strong>,它实时算出"此刻各卫星<gd data-term="weizhi">伪距</gd>偏了多少",把这个<strong>改正数</strong>播给周围用户,用户一扣,精度从米级提到<strong>亚米~分米级</strong>。</p>',
    how:
      '<p>三步:</p>' +
      '<ul>' +
      '<li>基准站位置已知,反算出当前每颗星的伪距误差。</li>' +
      '<li>把改正数通过电台、网络或卫星播出去。</li>' +
      '<li>用户收到后修正自己的伪距,再解算位置。</li>' +
      '</ul>' +
      '<div class="ex">关键前提:用户和基准站要<strong>看同几颗星、离得别太远</strong>,这样两边的电离层、对流层、轨道钟差才"长得一样",改正才有效。</div>',
    why:
      '<p>DGNSS 适合"要比米级好、但不必到厘米"的场合:船舶进港、车辆较精确定位、一般的资产盘点。对电力,很多<strong>作业管理、车辆调度</strong>类应用用它就够了,成本低、收敛快。要厘米级再上 RTK。</p>',
    pitfalls:
      '<div class="pit"><b>误解:DGNSS 就能到厘米。</b>它用的是<strong>伪距</strong>差分,一般到亚米/分米级。要厘米,得用<strong>载波相位</strong>差分,也就是 RTK(下一课)。</div>',
    links:
      '<p>· 厘米级怎么来:下一课《RTK》。<br>· 改正数从一个站变成一张网,见《地基增强网 CORS》。'
  }
});
