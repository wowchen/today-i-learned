SAD.registerLesson({
  id: 'quality/04-sensitivity',
  module: 'quality',
  order: 4,
  title: '敏感点 / 权衡点 / 风险点',
  minutes: 5,
  key: true,
  keywords: ['敏感点', '权衡点', '风险点', '非风险点', '架构评估', '决策'],
  concept: '<p>架构评估要找出几类关键"点":<gd data-term="sensitivity-point">敏感点</gd>、<gd data-term="tradeoff-point">权衡点</gd>、风险点、非风险点。它们是 ATAM 的核心产出,案例高频。</p>',
  exam: '<p><b>考纲定位:</b>案例必考(常要求判断某决策属于哪种点)。重点:四类点的定义与辨析。</p>',
  core: '<table><tr><th>点</th><th>定义</th></tr>' +
    '<tr><td>敏感点</td><td>某决策<b>只</b>显著影响<b>某一个</b>质量属性</td></tr>' +
    '<tr><td>权衡点</td><td>某决策<b>同时</b>影响<b>多个</b>质量属性(此消彼长)</td></tr>' +
    '<tr><td>风险点</td><td>可能带来隐患、需重点关注的决策</td></tr>' +
    '<tr><td>非风险点</td><td>已确认安全合理的决策</td></tr></table>' +
    '<div class="ex">关键辨析:<b>影响一个属性=敏感点;影响多个属性=权衡点</b>。例:加密"既提升安全又降低性能"→同时影响两者→<b>权衡点</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:敏感点和权衡点分不清。</b>记死:<b>一个属性→敏感点;多个属性→权衡点</b>。权衡点一定也是敏感点,反之不一定。</div>',
  quiz: [
    { type: 'choice', q: '"提高加密强度既增强安全性又降低性能",该决策点属于?', options: ['敏感点', '权衡点', '非风险点', '功能点'], answer: 1, source: '高频', explain: '同时影响多个质量属性(安全↑、性能↓),是权衡点。' },
    { type: 'choice', q: '只对单一质量属性有显著影响的决策点称为?', options: ['权衡点', '敏感点', '风险点', '需求点'], answer: 1, source: '高频', explain: '只影响一个质量属性的是敏感点。' }
  ],
  links: '<p>上一课:<a href="#/l/quality/03-tactics">架构战术</a> · 下一课:<a href="#/l/quality/05-atam">ATAM</a></p>'
});
