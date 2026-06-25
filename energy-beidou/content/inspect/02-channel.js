EBD.registerLesson({
  id: 'inspect-02-channel',
  module: 'inspect',
  order: 2,
  title: '输电通道巡检:线走到哪、隐患在哪',
  minutes: 4,
  keywords: ['输电通道', '通道', '隐患', '外破', '巡检'],
  sections: {
    what:
      '<p><gd data-term="shudiantongdao">输电通道</gd>是线路及其两侧需要保护的走廊带。通道巡检盯的不是设备本身,而是<strong>通道里有没有威胁线路的东西</strong>:违章施工、长高的树、堆土、起重机械、地质隐患等。</p>',
    why:
      '<p>线路事故很大比例来自"<strong>外力破坏</strong>"——吊车碰线、施工挖断、树长太高放电。这些隐患<strong>有明确位置</strong>,关键是"及时发现 + 说清在哪"。北斗精准定位让隐患能被准确标定、复查能精确回到原点。</p>',
    how:
      '<ul>' +
      '<li><strong>通道建模</strong>:用高精度定位把线路路径、走廊边界测成带坐标的数据。</li>' +
      '<li><strong>隐患打点</strong>:巡检中发现的违建、危树、施工点,当场用北斗定位"钉"在地图上,带坐标和时间。</li>' +
      '<li><strong>越界预警</strong>:配合<gd data-term="dianziweilan">电子围栏</gd>,大型机械一旦进入通道保护区就报警(详见模块 8)。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:通道巡检就是看线路设备。</b>它更多盯<strong>通道环境</strong>——人、机械、树木、地形这些"线路之外"的威胁。它们恰恰是停电事故的高发原因。</div>',
    links:
      '<p>· 用无人机高效巡这条通道:下一课《无人机自主巡检》。<br>· 通道里的地质灾害怎么盯,见模块 7《输电通道地质灾害》。'
  }
});
