PGF.registerLesson({
  id: 'carbon-04-ets',
  module: 'carbon',
  order: 4,
  title: 'cap-and-trade:总量控制与配额交易',
  minutes: 5,
  keywords: ['cap-and-trade', '总量控制', '配额', '交易', 'ETS'],
  sections: {
    what:
      '<p>碳市场的核心机制叫<strong>cap-and-trade(总量控制与交易)</strong>,两步走:</p>' +
      '<ol>' +
      '<li><strong>Cap(设上限)</strong>:政府规定一段时期内的碳排放总量上限,把上限拆成"配额"分给企业(1 配额 = 可排 1 吨 CO₂);</li>' +
      '<li><strong>Trade(允许交易)</strong>:减排做得好的企业配额有剩余,可以卖给减排不够的企业。</li>' +
      '</ol>',
    why:
      '<p>cap-and-trade 的精妙之处:政府只管"总量",不管"谁减"。' +
      '市场自动让减排成本最低的企业先减——效率最高的减排方式。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 500 200" width="100%" style="max-width:500px">' +
      '<defs><marker id="arc4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<rect x="20" y="10" width="130" height="40" rx="5" class="f-box2"/>' +
      '<text x="85" y="35" text-anchor="middle" class="f-txt" style="font-size:11px">政府设总量上限</text>' +
      '<line x1="85" y1="50" x2="85" y2="65" class="f-line" marker-end="url(#arc4)"/>' +
      '<rect x="20" y="70" width="130" height="40" rx="5" class="f-box"/>' +
      '<text x="85" y="95" text-anchor="middle" class="f-txt" style="font-size:11px">分配配额给企业</text>' +
      '<rect x="190" y="70" width="130" height="40" rx="5" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="255" y="88" text-anchor="middle" class="f-ok" style="font-size:10px">企业 A:减排多</text>' +
      '<text x="255" y="102" text-anchor="middle" class="f-ok" style="font-size:10px">配额有剩余</text>' +
      '<rect x="350" y="70" width="130" height="40" rx="5" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="415" y="88" text-anchor="middle" class="f-hot" style="font-size:10px">企业 B:减排少</text>' +
      '<text x="415" y="102" text-anchor="middle" class="f-hot" style="font-size:10px">配额不够用</text>' +
      '<line x1="150" y1="90" x2="186" y2="90" class="f-line" marker-end="url(#arc4)"/>' +
      '<line x1="320" y1="90" x2="346" y2="90" class="f-line" marker-end="url(#arc4)"/>' +
      '<path d="M300,110 Q335,150 370,110" fill="none" class="f-line" style="stroke:var(--hot)" marker-end="url(#arc4)"/>' +
      '<text x="335" y="160" text-anchor="middle" class="f-hot" style="font-size:10px">B 向 A 买配额</text>' +
      '<path d="M350,115 Q315,155 280,115" fill="none" class="f-line" style="stroke:var(--ok)"/>' +
      '<text x="335" y="175" text-anchor="middle" class="f-dim" style="font-size:9px">(A 赚钱 + B 合规 = 双赢)</text>' +
      '</svg>' +
      '<figcaption>图 · cap-and-trade 流程:总量设限 → 分配配额 → 市场交易</figcaption></figure>' +
      '<div class="ex">碳价信号的传导:碳价 100 元/吨 → 煤电每度电成本增加约 0.08~0.10 元 → ' +
      '煤电竞争力下降 → 风光更有优势 → 加速能源转型。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"碳市场就是花钱买‘排污权’,鼓励污染。"</b>' +
      '关键在于 cap(总量上限)逐年收紧——配额越来越稀缺,碳价越来越高,' +
      '逼着所有企业持续减排。买配额只是过渡手段,不减排的企业最终会被淘汰。</div>',
    links:
      '<p>· 下一课讲配额怎么分配、企业怎么履约。<br>' +
      '· 模块 9《现货市场》与碳市场的交易机制有相似之处。</p>'
  }
});
