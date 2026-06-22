PGF.registerLesson({
  id: 'market-10-loop',
  module: 'market',
  order: 10,
  title: '一笔电量的完整闭环:从签约到结算',
  minutes: 5,
  keywords: ['闭环', '签约', '申报', '出清', '调度', '计量', '结算'],
  sections: {
    what:
      '<p>一笔电量在市场中的完整旅程:</p>' +
      '<ol>' +
      '<li><strong>签约</strong>:售电公司与用户签代理合同,与发电商签中长期合同;</li>' +
      '<li><strong>申报</strong>:在交易中心申报交易意向(量+价);</li>' +
      '<li><strong>出清</strong>:交易中心撮合出清,确定成交量和价格;</li>' +
      '<li><strong>安全校核</strong>:调度检查交易结果是否满足安全约束;</li>' +
      '<li><strong>执行</strong>:调度按校核后的结果指挥发电;</li>' +
      '<li><strong>计量</strong>:智能电表记录实际发/用电量;</li>' +
      '<li><strong>结算</strong>:交易中心按合同 + 偏差 + 辅助服务计算各方应收应付。</li>' +
      '</ol>',
    why:
      '<p>理解这个闭环,就理解了电力市场如何运转——每个步骤都有对应的制度和系统,环环相扣。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 640 100" width="100%" style="max-width:620px">' +
      '<defs><marker id="arm10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="5"   y="25" width="75" height="38" rx="4" class="f-box2"/>' +
      '<text x="42"  y="48" class="f-txt" style="font-size:10px">签约</text>' +
      '<rect x="95"  y="25" width="75" height="38" rx="4" class="f-box"/>' +
      '<text x="132" y="48" class="f-txt" style="font-size:10px">申报</text>' +
      '<rect x="185" y="25" width="75" height="38" rx="4" class="f-box"/>' +
      '<text x="222" y="48" class="f-txt" style="font-size:10px">出清</text>' +
      '<rect x="275" y="25" width="75" height="38" rx="4" class="f-box"/>' +
      '<text x="312" y="48" class="f-txt" style="font-size:10px">校核</text>' +
      '<rect x="365" y="25" width="75" height="38" rx="4" class="f-box"/>' +
      '<text x="402" y="48" class="f-txt" style="font-size:10px">执行</text>' +
      '<rect x="455" y="25" width="75" height="38" rx="4" class="f-box"/>' +
      '<text x="492" y="48" class="f-txt" style="font-size:10px">计量</text>' +
      '<rect x="545" y="25" width="85" height="38" rx="4" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="587" y="48" class="f-ok" style="font-size:10px">结算</text>' +
      '<line x1="80"  y1="44" x2="91"  y2="44" class="f-line" marker-end="url(#arm10)"/>' +
      '<line x1="170" y1="44" x2="181" y2="44" class="f-line" marker-end="url(#arm10)"/>' +
      '<line x1="260" y1="44" x2="271" y2="44" class="f-line" marker-end="url(#arm10)"/>' +
      '<line x1="350" y1="44" x2="361" y2="44" class="f-line" marker-end="url(#arm10)"/>' +
      '<line x1="440" y1="44" x2="451" y2="44" class="f-line" marker-end="url(#arm10)"/>' +
      '<line x1="530" y1="44" x2="541" y2="44" class="f-line" marker-end="url(#arm10)"/>' +
      '<text x="320" y="88" class="f-dim" style="font-size:11px">交易中心 + 调度中心 + 计量系统 协同完成</text>' +
      '</g></svg>' +
      '<figcaption>图 · 一笔电量的市场闭环:从签约到结算</figcaption></figure>' +
      '<div class="ex">结算是最终的"对账":中长期合同量 &times; 合同价 + 偏差量 &times; 现货价 + 辅助服务费用 = 最终账单。' +
      '多退少补,每月结算。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"交易完就结束了。"</b>' +
      '交易只是开始。执行、计量、结算环节同样关键——结算出错,所有市场参与者的信任就崩了。</div>',
    links:
      '<p>· 电力市场模块到此结束。下一站:模块 10《新能源与新型电力系统》。<br>' +
      '· 回看模块 7《电改脉络》了解市场化的制度演进。</p>'
  }
});
