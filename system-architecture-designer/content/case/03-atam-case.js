SAD.registerLesson({
  id: 'case/03-atam-case',
  module: 'case',
  order: 3,
  title: '架构评估 ATAM 案例',
  minutes: 5,
  key: true,
  keywords: ['ATAM', '架构评估', '敏感点', '权衡点', '风险点', '案例', '效用树'],
  concept: '<p>案例常给一个架构 + 几条决策,要你<b>判断每条是敏感点/权衡点/风险点</b>,或简述 <gd data-term="atam">ATAM</gd> 步骤与产出。这是核心篇知识的直接应用。</p>',
  exam: '<p><b>考纲定位:</b>案例高频。重点:点的判断、ATAM 产出物。</p>',
  core: '<div class="ex"><b>例题判断:</b><br>' +
    '· "采用主备双机,可用性达99.99%"——只影响可用性 → <gd data-term="sensitivity-point">敏感点</gd>。<br>' +
    '· "提高加密强度,安全性↑但吞吐↓"——同时影响安全与性能 → <gd data-term="tradeoff-point">权衡点</gd>。<br>' +
    '· "缓存方案尚未验证一致性,可能脏读"——存在隐患待定 → 风险点。<br>' +
    '· "采用成熟的负载均衡方案"——已确认合理 → 非风险点。</div>' +
    '<p><b>答 ATAM 套路:</b>① 以质量属性效用树明确目标与优先级 → ② 分析架构方法 → ③ 识别敏感点/权衡点/风险点 → ④ 给评估结论。</p>',
  pitfalls: '<div class="pit"><b>误解:把"影响多个属性"的也答成敏感点。</b>影响<b>一个</b>属性才是敏感点;<b>多个</b>属性互相牵制的是权衡点。判断前先数"它牵动了几个质量属性"。</div>',
  quiz: [
    { type: 'choice', q: '"引入消息队列异步化:提升性能但增加了一致性复杂度",属于?', options: ['敏感点', '权衡点', '非风险点', '功能点'], answer: 1, source: '案例高频', explain: '同时影响性能与一致性(多个属性),是权衡点。' }
  ],
  links: '<p>上一课:<a href="#/l/case/02-quality-scenario">质量属性场景案例</a> · 下一课:<a href="#/l/case/04-reliability-calc">可靠性计算专项</a> · 概念:<a href="#/l/quality/04-sensitivity">敏感点与权衡点</a></p>'
});
