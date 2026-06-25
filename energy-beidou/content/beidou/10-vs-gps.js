EBD.registerLesson({
  id: 'beidou-10-vs-gps',
  module: 'beidou',
  order: 10,
  title: '北斗和 GPS 到底差在哪',
  minutes: 4,
  keywords: ['北斗', 'GPS', '对比', '区别', '短报文', '星座'],
  sections: {
    what:
      '<p>日常定位授时,<gd data-term="beidou">北斗</gd>和 GPS 体验差不多,精度同档。真正的差别在三处:<strong>星座设计、独有短报文、以及"是不是自己的"</strong>。</p>',
    how:
      '<table><tr><th></th><th>GPS</th><th>北斗 BDS</th></tr>' +
      '<tr><td>星座</td><td>全部 MEO 中圆轨道</td><td><gd data-term="xingzuo">混合星座</gd>:GEO+IGSO+MEO</td></tr>' +
      '<tr><td>中国上空可见星</td><td>较多</td><td>更多、仰角更高、更稳</td></tr>' +
      '<tr><td>短报文</td><td>无</td><td><strong>有</strong>(能发消息)</td></tr>' +
      '<tr><td>区域高精度</td><td>靠地基/第三方</td><td>自带 <gd data-term="ppp-b2b">PPP-B2b</gd> 等增强</td></tr>' +
      '<tr><td>归属</td><td>美国</td><td>中国(<gd data-term="zizhukekong">自主可控</gd>)</td></tr></table>',
    why:
      '<p>对电力行业,这三点差别恰好都打在要害上:</p>' +
      '<ul>' +
      '<li><strong>混合星座</strong>→ 山区、变电站等遮挡环境定位更稳。</li>' +
      '<li><strong>短报文</strong>→ 无公网的偏远设施也能把数据传出来。</li>' +
      '<li><strong>自主可控</strong>→ 电力是命脉,授时不能被别人随时关掉或降精度。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:北斗精度不如 GPS。</b>民用基本同档,部分指标北斗还更优。早年北斗设备少、生态弱给人留下的旧印象,如今早已不成立。</div>' +
      '<div class="pit"><b>误解:用北斗就得排斥 GPS。</b>多系统兼容是常态,平时一起用、可见星更多。北斗的价值在于"关键时刻有自己的底牌",而不是把别家踢出去。</div>',
    links:
      '<p>· 模块 1 到此结束。下一站去模块 2《时空服务原理》,从《PNT 三件套》开始,把定位、导航、授时讲透。'
  }
});
