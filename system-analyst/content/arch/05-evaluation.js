SAN.registerLesson({
  id: 'arch/05-evaluation',
  module: 'arch',
  order: 5,
  title: '架构评估 ATAM',
  minutes: 5,
  keywords: ['架构评估', 'ATAM', '敏感点', '权衡点', '风险点', 'SAAM'],
  concept: '<p><gd data-term="atam">ATAM</gd> 以质量属性场景驱动,识别<b>敏感点、权衡点、风险点</b>,评估架构能否满足质量目标。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识。重点:三类点判断、ATAM特点。</p>',
  core: '<table><tr><th>点</th><th>定义</th></tr>' +
    '<tr><td>敏感点</td><td>只显著影响<b>一个</b>质量属性</td></tr>' +
    '<tr><td>权衡点</td><td>同时影响<b>多个</b>质量属性</td></tr>' +
    '<tr><td>风险点</td><td>可能带来隐患的决策</td></tr></table>' +
    '<div class="ex">"提高加密强度,安全↑性能↓"同时影响两者→权衡点。ATAM 显式处理多质量属性权衡(区别于偏可修改性的 SAAM)。</div>',
  pitfalls: '<div class="pit"><b>误解:影响一个属性也算权衡点。</b>影响<b>一个</b>=敏感点,<b>多个</b>=权衡点。</div>',
  quiz: [
    { type: 'choice', q: '"加密增强安全但降低性能"该决策点属于?', options: ['敏感点', '权衡点', '非风险点', '功能点'], answer: 1, source: '高频', explain: '同时影响多属性,是权衡点。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/04-quality">质量属性</a> · 下一课:<a href="#/l/arch/06-middleware">中间件</a> · 案例:<a href="#/l/case/08-arch-case">架构案例</a></p>'
});
