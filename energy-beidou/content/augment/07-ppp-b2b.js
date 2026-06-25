EBD.registerLesson({
  id: 'augment-07-ppp-b2b',
  module: 'augment',
  order: 7,
  title: '北斗 PPP-B2b:把改正数直接从天上发下来',
  minutes: 4,
  key: '北斗特色增强',
  keywords: ['PPP-B2b', '北斗', 'B2b', '精密改正数', '不联网', '分米级'],
  sections: {
    what:
      '<p><gd data-term="ppp-b2b">PPP-B2b</gd> 是北斗三号的一项特色高精度服务:通过 <gd data-term="geo">GEO</gd> 卫星的 <gd data-term="signal-band">B2b 信号</gd>,<strong>直接把精密改正数从天上播给你</strong>。在中国及周边,不用联网、不用建基准站,一台支持的接收机就能做<gd data-term="ppp">PPP</gd>,动态可达<strong>分米级</strong>。</p>',
    why:
      '<p>这恰好补上前面两块短板:</p>' +
      '<ul>' +
      '<li><gd data-term="rtk">RTK</gd>/<gd data-term="cors">地基增强</gd> 要联网下发改正数 → 深山没网就抓瞎;</li>' +
      '<li>传统 <gd data-term="ppp">PPP</gd> 要从网络下载精密产品 → 同样依赖网络。</li>' +
      '</ul>' +
      '<p>PPP-B2b 把改正数搬到卫星上广播,<strong>无公网区域也能高精度</strong>。这对深山输电线路的监测、巡检,价值极大——既要精度,又没网,它正好都给了。</p>',
    how:
      '<ul>' +
      '<li>地面算出精密轨道钟差等改正数,上注到 GEO 卫星。</li>' +
      '<li>GEO 用 B2b 信号把改正数广播给覆盖区用户。</li>' +
      '<li>用户终端边收北斗定位信号、边收 B2b 改正数,自己解算到分米级。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:PPP-B2b 全球都能用、还能厘米。</b>它当前主要服务<strong>中国及周边</strong>(靠 GEO 覆盖),动态精度<strong>分米级</strong>档位,且同样需要一点收敛时间。要全国任意点免网高精度,它是利器,但别套用错指标。</div>',
    links:
      '<p>· 想要毫米级(监测)还得加静态长观测,下一课讲。<br>· 各档精度怎么选,见《精度选型表》。'
  }
});
