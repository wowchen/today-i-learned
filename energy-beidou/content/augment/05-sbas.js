EBD.registerLesson({
  id: 'augment-05-sbas',
  module: 'augment',
  order: 5,
  title: '星基增强 SBAS:用卫星播发改正数',
  minutes: 4,
  keywords: ['SBAS', '星基增强', '改正数', '完好性', '广域'],
  sections: {
    what:
      '<p><gd data-term="sbas">星基增强(SBAS)</gd>换了个思路:改正数不走地面网,而是<strong>从卫星(常用 <gd data-term="geo">GEO</gd>)直接广播</strong>下来,覆盖一大片区域。用户只要能收到这颗星,就能拿到改正数和<gd data-term="wanhaoxing">完好性</gd>告警。</p>',
    why:
      '<p>它的两大好处:一是<strong>覆盖广、不挑地面有没有网</strong>,海洋、荒漠、空中都能用;二是特别强调<strong>完好性</strong>(出问题会告警),所以最早是为民航安全飞行设计的。北斗也建有自己的星基增强服务。</p>',
    how:
      '<ul>' +
      '<li>地面监测站盯着卫星,算出广域改正数和完好性信息。</li>' +
      '<li>上行注入到 GEO 卫星,由它向整片区域广播。</li>' +
      '<li>用户接收后修正,精度可达<strong>亚米~米级</strong>,并获得"可不可信"的告警。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:星基增强精度比地基还高。</b>一般 SBAS 是<strong>广域、亚米~米级</strong>,胜在覆盖和完好性;要厘米级,还得靠地基 RTK 或 <gd data-term="ppp">PPP</gd> 类技术。两者定位不同、各管一摊。</div>',
    links:
      '<p>· 北斗自家的高精度星基服务(分米级、不用联网):下一课《PPP》和《PPP-B2b》。<br>· 地面网方案对比,见《地基增强网 CORS》。'
  }
});
