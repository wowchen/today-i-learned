SAN.registerLesson({
  id: 'mis/06-data-governance',
  module: 'mis',
  order: 6,
  title: '数据治理',
  minutes: 4,
  key: true,
  keywords: ['数据治理', '主数据', '数据质量', '元数据', '数据标准', '数据资产'],
  concept: '<p><gd data-term="data-governance">数据治理</gd>对数据资产的标准、质量、安全、权属做体系化管理,让数据"可信、可用、合规"。是近年系分热点。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(数据主题)。重点:治理内容、主数据与元数据。</p>',
  core: '<table><tr><th>概念</th><th>含义</th></tr>' +
    '<tr><td>数据标准</td><td>统一口径、编码、格式</td></tr>' +
    '<tr><td>主数据 MDM</td><td>客户/产品等核心共享数据的唯一权威源</td></tr>' +
    '<tr><td>元数据</td><td>"描述数据的数据"(字段含义、来源)</td></tr>' +
    '<tr><td>数据质量</td><td>完整性、准确性、一致性、及时性</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:数据治理就是搞个数据库。</b>它是<b>管理体系</b>(标准+质量+安全+组织职责),技术只是手段。</div>',
  quiz: [
    { type: 'choice', q: '"描述数据的数据"(如字段含义、来源)称为?', options: ['主数据', '元数据', '大数据', '冷数据'], answer: 1, source: '高频', explain: '元数据是描述数据的数据。' }
  ],
  links: '<p>上一课:<a href="#/l/mis/05-egov">电子政务</a> · 下一课:<a href="#/l/mis/07-ec">电子商务</a></p>'
});
