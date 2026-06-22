PGF.registerLesson({
  id: 'trans-04-acdc-line',
  module: 'trans',
  order: 4,
  title: '交流输电 vs 直流输电',
  minutes: 4,
  keywords: ['交流输电', '直流输电', 'HVDC', '换流站', '同步', '异步'],
  sections: {
    what:
      '<p>电网主干是<gd data-term="jiaoliudian">交流</gd>,但跨大区远距离输电越来越多用<gd data-term="zhiliudian">直流</gd>。' +
      '两种方式各有所长:</p>' +
      '<table><tr><th></th><th>交流输电</th><th>直流输电(HVDC)</th></tr>' +
      '<tr><td>升降压</td><td>变压器即可,简单</td><td>需换流站(贵)</td></tr>' +
      '<tr><td>组网</td><td>多端互联容易</td><td>点对点为主</td></tr>' +
      '<tr><td>远距离损耗</td><td>较高(有无功/感抗)</td><td>更低</td></tr>' +
      '<tr><td>适用场景</td><td>中短距离、区域组网</td><td>超远距离、跨海、异步联网</td></tr></table>',
    why:
      '<p>中国"西电东送"的骨干通道大多是<strong>特高压直流</strong>(&plusmn;800kV 甚至 &plusmn;1100kV):' +
      '从新疆、四川送电到华东,距离 2000~3000 公里,直流损耗比交流低得多。</p>' +
      '<p>此外,直流可以连接两个<strong>不同频率或不同步的电网</strong>,比如背靠背换流站可以隔离故障传播。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 620 110" width="100%" style="max-width:600px">' +
      '<defs><marker id="art4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="10"  y="25" width="120" height="50" rx="5" class="f-box2"/>' +
      '<text x="70"  y="45" class="f-txt" style="font-size:11px">送端电网</text>' +
      '<text x="70"  y="62" class="f-dim" style="font-size:10px">(交流)</text>' +
      '<rect x="160" y="25" width="100" height="50" rx="5" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="210" y="45" class="f-hot" style="font-size:11px">换流站</text>' +
      '<text x="210" y="62" class="f-dim" style="font-size:10px">AC→DC</text>' +
      '<rect x="280" y="25" width="140" height="50" rx="5" class="f-box"/>' +
      '<text x="350" y="45" class="f-txt" style="font-size:11px">直流线路</text>' +
      '<text x="350" y="62" class="f-dim" style="font-size:10px">2000+km</text>' +
      '<rect x="440" y="25" width="100" height="50" rx="5" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="490" y="45" class="f-hot" style="font-size:11px">换流站</text>' +
      '<text x="490" y="62" class="f-dim" style="font-size:10px">DC→AC</text>' +
      '<rect x="560" y="25" width="50" height="50" rx="5" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="585" y="45" class="f-ok" style="font-size:10px">受端</text>' +
      '<text x="585" y="62" class="f-dim" style="font-size:9px">(交流)</text>' +
      '<line x1="130" y1="50" x2="156" y2="50" class="f-line" marker-end="url(#art4)"/>' +
      '<line x1="260" y1="50" x2="276" y2="50" class="f-line" marker-end="url(#art4)"/>' +
      '<line x1="420" y1="50" x2="436" y2="50" class="f-line" marker-end="url(#art4)"/>' +
      '<line x1="540" y1="50" x2="556" y2="50" class="f-line" marker-end="url(#art4)"/>' +
      '<text x="350" y="100" class="f-dim" style="font-size:11px">典型:&plusmn;800kV 昌吉—古泉(3293km,全球最长)</text>' +
      '</g></svg>' +
      '<figcaption>图 · 特高压直流输电:两端换流站 + 中间直流线路</figcaption></figure>' +
      '<div class="ex">换流站是直流输电最贵的部分:把交流变直流(整流)、再把直流变交流(逆变)。' +
      '所以直流只在超长距离时经济,短距离的"换流站固定成本"收不回来。' +
      '经验值:交直流经济分界点大约在 600~800 公里。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"直流比交流先进,应该全换直流。"</b>' +
      '区域组网必须交流(多端互联方便),直流适合点对点远距离。两者互补,不是替代。</div>' +
      '<div class="pit"><b>误解:"直流输电没有损耗。"</b>' +
      '直流线路损耗低但不为零,而且换流站有约 1%~2% 的转换损耗。总损耗 = 换流站 + 线路。</div>',
    links:
      '<p>· 下一课讲特高压:中国的"电力高铁"。<br>' +
      '· 模块 2 的《交流与直流》是本课的基础回顾。</p>'
  }
});
