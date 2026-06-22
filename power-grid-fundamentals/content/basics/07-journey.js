PGF.registerLesson({
  id: 'basics-07-journey',
  module: 'basics',
  order: 7,
  title: '一度电的旅程:从电厂到插座',
  minutes: 5,
  keywords: ['发输变配用', '五环节', '电力系统', '升压', '降压', '一度电'],
  sections: {
    what:
      '<p>一度电从诞生到被你用掉,要经过<strong>五个环节</strong>:' +
      '<gd data-term="fadian">发电</gd> → <gd data-term="shudian">输电</gd> → ' +
      '<gd data-term="biandian">变电</gd> → <gd data-term="peidian">配电</gd> → 用电。' +
      '整趟旅程不到一秒(电以接近光速传播),但要经过好几次<strong>升压-降压</strong>才能安全到家。</p>' +
      '<div class="ex">类比:电厂是"发货仓库",输电网是"高速公路",变电站是"收费站+换车场",' +
      '配电网是"城市小路",你家插座是"收货地址"。</div>',
    why:
      '<p>理解这五个环节,就有了看懂整个电力行业的<strong>骨架</strong>——后面讲的调度、市场、电价,' +
      '都发生在这条链路上。</p>' +
      '<p>同时也能理解为什么电网这么复杂:' +
      '不是直接拉根线就行,而是要层层升压降压、层层保护、层层调度。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 660 260" width="100%" style="max-width:640px">' +
      '<defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="10"  y="40" width="100" height="50" rx="5" class="f-box2"/>' +
      '<text x="60"  y="60" class="f-txt" style="font-size:12px">发电厂</text>' +
      '<text x="60"  y="78" class="f-dim" style="font-size:10px">10~20kV</text>' +
      '<rect x="140" y="40" width="100" height="50" rx="5" class="f-box"/>' +
      '<text x="190" y="60" class="f-txt" style="font-size:12px">升压站</text>' +
      '<text x="190" y="78" class="f-hot" style="font-size:10px">升至 220~500kV</text>' +
      '<rect x="270" y="40" width="120" height="50" rx="5" class="f-box"/>' +
      '<text x="330" y="60" class="f-txt" style="font-size:12px">高压输电线</text>' +
      '<text x="330" y="78" class="f-dim" style="font-size:10px">几十~几千公里</text>' +
      '<rect x="420" y="40" width="100" height="50" rx="5" class="f-box"/>' +
      '<text x="470" y="60" class="f-txt" style="font-size:12px">降压变电站</text>' +
      '<text x="470" y="78" class="f-hot" style="font-size:10px">降至 35~110kV</text>' +
      '<rect x="550" y="40" width="100" height="50" rx="5" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="600" y="60" class="f-txt" style="font-size:12px">配电网</text>' +
      '<text x="600" y="78" class="f-ok" style="font-size:10px">10kV→380/220V</text>' +
      '<line x1="110" y1="65" x2="136" y2="65" class="f-line" marker-end="url(#ar7)"/>' +
      '<line x1="240" y1="65" x2="266" y2="65" class="f-line" marker-end="url(#ar7)"/>' +
      '<line x1="390" y1="65" x2="416" y2="65" class="f-line" marker-end="url(#ar7)"/>' +
      '<line x1="520" y1="65" x2="546" y2="65" class="f-line" marker-end="url(#ar7)"/>' +
      '<path d="M60 100 L60 170 Q60 180 70 180 L250 180" class="f-line" style="stroke-dasharray:5 3"/>' +
      '<text x="60"  y="200" class="f-dim" style="font-size:10px;text-anchor:start">煤/水/风/光/核</text>' +
      '<text x="60"  y="215" class="f-dim" style="font-size:10px;text-anchor:start">→ 机械能 → 电能</text>' +
      '<text x="330" y="130" class="f-hot" style="font-size:12px">电压越高 → 电流越小 → 线损越少</text>' +
      '<text x="330" y="150" class="f-dim" style="font-size:11px">所以要先升压再输送,到目的地再降压</text>' +
      '<rect x="220" y="200" width="220" height="40" rx="5" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="330" y="215" class="f-ok" style="font-size:12px">你家插座:220V 交流</text>' +
      '<text x="330" y="232" class="f-dim" style="font-size:10px">整趟旅程 &lt; 1 秒</text>' +
      '<line x1="600" y1="94" x2="600" y2="140" class="f-line" style="stroke-dasharray:4 3"/>' +
      '<line x1="600" y1="140" x2="444" y2="200" class="f-line" style="stroke-dasharray:4 3" marker-end="url(#ar7)"/>' +
      '</g></svg>' +
      '<figcaption>图 · 一度电的旅程:发 → 升压 → 输 → 降压 → 配 → 用</figcaption></figure>' +
      '<p>典型电压阶梯(以中国为例):</p>' +
      '<table><tr><th>环节</th><th>电压等级</th><th>对应设施</th></tr>' +
      '<tr><td>发电机出口</td><td>10~20 kV</td><td>发电厂</td></tr>' +
      '<tr><td>升压后输电</td><td>220 / 500 / 1000 kV</td><td>高压铁塔、输电走廊</td></tr>' +
      '<tr><td>城市边缘降压</td><td>110 / 35 kV</td><td>区域变电站</td></tr>' +
      '<tr><td>进入小区</td><td>10 kV</td><td>街边柱上变压器</td></tr>' +
      '<tr><td>入户</td><td>380 / 220 V</td><td>你家配电箱</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>误解 1:"发电厂直接发 220V 到我家。"</b>' +
      '如果不升压,用 220V 送几百公里,电还没到就全热损耗掉了。必须先升到几十万伏再输送。</div>' +
      '<div class="pit"><b>误解 2:"电是从某个固定电厂送到我家的。"</b>' +
      '电网像一个巨大的"水池",无数电厂往里注水,无数用户从里取水,你家用的电来自哪台机组无法追踪。</div>' +
      '<div class="pit"><b>误解 3:"变电站是发电的。"</b>' +
      '变电站只做升降压和线路转接,自己不发一度电。它是电力系统的"立交桥",不是"加油站"。</div>',
    links:
      '<p>· 这一课是整个五环节的缩略图,后面三个模块(发电/输变/配用)会分别展开讲。<br>' +
      '· 下一课《线损》解释电在路上损失了多少,以及为什么升压能减少损失。<br>' +
      '· 模块 7《终端电价拆解》会告诉你这一路旅程的每个环节各收了多少钱。</p>'
  }
});
