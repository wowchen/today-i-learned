EBD.registerLesson({
  id: 'beidou-04-constellation',
  module: 'beidou',
  order: 4,
  title: '混合星座:GEO、IGSO、MEO 各司其职',
  minutes: 5,
  key: '北斗招牌',
  keywords: ['星座', 'GEO', 'IGSO', 'MEO', '混合星座', '轨道', '30颗'],
  sections: {
    what:
      '<p>别家导航卫星基本"贴着同一层高度飞",北斗却让<strong>三种不同轨道</strong>的卫星搭班子,组成<gd data-term="xingzuo">混合星座</gd>:</p>' +
      '<ul>' +
      '<li><gd data-term="geo">GEO</gd>——悬在赤道上空一动不动,<strong>看家</strong>;</li>' +
      '<li><gd data-term="igso">IGSO</gd>——在中国头顶来回画"8"字,<strong>顾区域</strong>;</li>' +
      '<li><gd data-term="meo">MEO</gd>——绕地球中圈匀速跑,<strong>跑全球</strong>。</li>' +
      '</ul>',
    why:
      '<p>这是北斗区别于 GPS 的<strong>招牌设计</strong>。GPS 全靠 MEO,而北斗的 GEO/IGSO 是两层"高空守望者",带来三个好处:中国及周边<strong>抬头总能看到很多颗星</strong>(定位更稳)、<strong>高仰角不易被楼山挡住</strong>、还能撑起 GPS 没有的<gd data-term="duanbaowen">短报文</gd>和区域增强服务。这对没有公网信号的山区、海上电力设施意义重大。</p>',
    how:
      '<p>北斗三号共约 <strong>30 颗</strong>:24 颗 MEO + 3 颗 IGSO + 3 颗 GEO。</p>' +
      '<figure class="fig"><svg viewBox="0 0 360 200" width="100%" style="max-width:360px">' +
      '<circle class="f-box2" cx="180" cy="100" r="22"/><text class="f-txt" x="180" y="104" text-anchor="middle">地球</text>' +
      '<ellipse class="f-okln" cx="180" cy="100" rx="48" ry="48" stroke-dasharray="3 3"/>' +
      '<ellipse class="f-line" cx="180" cy="100" rx="92" ry="40"/>' +
      '<ellipse class="f-box" cx="180" cy="100" rx="140" ry="80"/>' +
      '<circle class="f-arr" cx="228" cy="100" r="3.4"/><text class="f-ok" x="234" y="96">GEO</text>' +
      '<circle class="f-arr" cx="180" cy="58" r="3.4"/><text class="f-hot" x="150" y="50">IGSO</text>' +
      '<circle class="f-arr" cx="320" cy="100" r="3.4"/><text class="f-dim" x="296" y="118">MEO</text>' +
      '</svg><figcaption>图 · 三种轨道高度示意(GEO 同步 / IGSO 倾斜 / MEO 中圆)</figcaption></figure>' +
      '<table><tr><th>类型</th><th>高度</th><th>看上去</th><th>颗数</th><th>管什么</th></tr>' +
      '<tr><td>GEO</td><td>约 3.6 万 km</td><td>定点不动</td><td>3</td><td>区域增强、短报文</td></tr>' +
      '<tr><td>IGSO</td><td>约 3.6 万 km</td><td>头顶画"8"字</td><td>3</td><td>加强亚太覆盖</td></tr>' +
      '<tr><td>MEO</td><td>约 2 万 km</td><td>匀速绕地</td><td>24</td><td>全球定位主力</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>误解:导航卫星都一样高。</b>GEO/IGSO 约 3.6 万公里"挂在天上",MEO 才 2 万公里出头且不停移动,差着一大截高度。</div>' +
      '<div class="pit"><b>误解:卫星越多越好,数量定胜负。</b>关键是<strong>几何分布</strong>(见《为什么至少要四颗星》)。北斗在中国上空"高处有人盯着",分布好,定位才稳。</div>',
    links:
      '<p>· 这些卫星发的是什么信号?下一课《B1/B2/B3》。<br>· GEO 怎么帮你"发短信"?见《短报文》。'
  }
});
