EBD.registerLesson({
  id: 'pnt-01-trio',
  module: 'pnt',
  order: 1,
  title: 'PNT 三件套:定位、导航、授时',
  minutes: 4,
  key: '核心产出',
  keywords: ['PNT', '定位', '导航', '授时', '三件套'],
  sections: {
    what:
      '<p>北斗(以及所有 <gd data-term="gnss">GNSS</gd>)的核心产出,用三个字母概括:<gd data-term="pnt">PNT</gd>。它回答三个问题:</p>' +
      '<ul><li><strong>P 定位(Positioning)</strong>:我在哪?</li>' +
      '<li><strong>N 导航(Navigation)</strong>:怎么从这儿到那儿?</li>' +
      '<li><strong>T 授时(Timing)</strong>:现在精确是几点?</li></ul>',
    how:
      '<figure class="fig"><svg viewBox="0 0 420 150" width="100%" style="max-width:420px">' +
      '<rect class="f-box2" x="160" y="10" width="100" height="30"/><text class="f-hot" x="210" y="30" text-anchor="middle">北斗信号</text>' +
      '<line class="f-line" x1="210" y1="40" x2="80" y2="80" marker-end="url(#arP1)"/>' +
      '<line class="f-line" x1="210" y1="40" x2="210" y2="80" marker-end="url(#arP1)"/>' +
      '<line class="f-line" x1="210" y1="40" x2="340" y2="80" marker-end="url(#arP1)"/>' +
      '<rect class="f-box" x="30" y="82" width="100" height="30"/><text class="f-txt" x="80" y="102" text-anchor="middle">定位 P</text>' +
      '<rect class="f-box" x="160" y="82" width="100" height="30"/><text class="f-txt" x="210" y="102" text-anchor="middle">导航 N</text>' +
      '<rect class="f-box" x="290" y="82" width="100" height="30"/><text class="f-txt" x="340" y="102" text-anchor="middle">授时 T</text>' +
      '<text class="f-dim" x="80" y="130" text-anchor="middle">我在哪</text>' +
      '<text class="f-dim" x="210" y="130" text-anchor="middle">怎么去</text>' +
      '<text class="f-dim" x="340" y="130" text-anchor="middle">几点了</text>' +
      '<defs><marker id="arP1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '</svg><figcaption>图 · 同一套信号,长出三种服务</figcaption></figure>' +
      '<p>三者其实同根:都来自"卫星 + 精准时间 + 测距"。定位和授时本就是<strong>一体两面</strong>——解算位置时顺手就把时间对准了(见《为什么至少要四颗星》)。</p>',
    why:
      '<p>外行最容易忽略的是 <strong>T(授时)</strong>。大众天天用的是 P 和 N(地图导航),但对电力、金融、通信这些基础行业,<strong>"全网精准对时"才是北斗最值钱的产出</strong>。本站后面专门有一个模块讲电力授时。</p>',
    pitfalls:
      '<div class="pit"><b>误解:北斗就是用来"导航"的。</b>导航只是其中一项。对能源行业,授时的重要性常常排在定位前面;短报文通信更是另立一摊。</div>',
    links:
      '<p>· 这三件套都建在统一的"尺子"上:下一课《时空基准》。<br>· 授时为什么对电力这么重要,见模块 5《授时与同步》。'
  }
});
