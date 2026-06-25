EBD.registerLesson({
  id: 'augment-01-why-meter',
  module: 'augment',
  order: 1,
  title: '为什么单点定位只能到"米级"',
  minutes: 3,
  keywords: ['单点', '米级', '误差', '增强', '精度'],
  sections: {
    what:
      '<p>一台北斗接收机自己<gd data-term="dandian">单点定位</gd>,日常能到几米。不是算得差,而是测距里那几种误差(电离层、对流层、轨道钟差、多路径)<strong>没人帮你扣</strong>,加一块就是好几米。</p>',
    why:
      '<p>几米对开车导航够了,对电力很多活儿却不够:测量杆塔坐标、监测大坝有没有位移、判断线下违建离导线多近——这些要厘米甚至毫米。于是就有了一整套"<strong>增强</strong>"技术,本模块讲的就是它们怎么把误差一层层扣干净。</p>',
    how:
      '<p>增强的思路其实就两条主线:</p>' +
      '<ul>' +
      '<li><strong>借别人帮你扣误差</strong>:用已知位置的基准站算出误差、给你改正数 → <gd data-term="dgnss">DGNSS</gd>、<gd data-term="rtk">RTK</gd>、<gd data-term="cors">地基增强</gd>、<gd data-term="sbas">星基增强</gd>。</li>' +
      '<li><strong>自己用更精密的参数扣</strong>:靠精密轨道钟差产品自我修正 → <gd data-term="ppp">PPP</gd>、<gd data-term="ppp-b2b">PPP-B2b</gd>。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:换个更贵的接收机就能到厘米。</b>好设备有帮助,但单靠它仍跨不过"误差没被扣"这道坎。要厘米级,关键是<strong>增强</strong>(改正数或精密产品),不是单纯堆硬件。</div>',
    links:
      '<p>· 最基础的增强:下一课《差分 DGNSS》。<br>· 各精度档位分别用在哪,见本模块末课《精度选型表》。'
  }
});
