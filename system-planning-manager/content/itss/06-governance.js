SPM.registerLesson({
  id: 'itss/06-governance',
  module: 'itss',
  order: 6,
  title: 'IT 服务治理',
  minutes: 5,
  keywords: ['治理', '管理', '职责', '决策', '价值'],
  concept: '<p><gd data-term="governance">IT 服务治理</gd>是从组织层面对 IT 服务的<b>方向、决策、监督</b>进行控制,确保服务支撑业务战略、价值可度量、责任清晰。</p>',
  exam: '<p><b>考纲定位:</b>核心了解,选择题考"治理 vs 管理"。</p>',
  core: '<ul>' +
    '<li><b>治理(董事会层)</b>:定方向、建机制、明责任、看绩效、防风险。</li>' +
    '<li><b>管理(执行层)</b>:按治理定下的规矩把事做好。</li>' +
    '<li><b>关键点</b>:权责清晰、绩效与业务价值挂钩、合规与透明。</li>' +
    '</ul>' +
    '<div class="ex">治理是"定规矩、看方向",管理是"照规矩执行";两者层级不同,别混。</div>',
  pitfalls: '<div class="pit"><b>治理 ≠ 管理。</b>治理是高层决策与监督,管理是执行运营;把治理说成"具体怎么运维"就错了。</div>',
  quiz: [
    { type: 'choice', q: 'IT 服务治理与管理的区别是?', options: ['治理是执行、管理是决策', '治理是高层决策与监督、管理是执行运营', '两者完全相同', '治理只管技术'], answer: 1, source: '高频', explain: '治理偏决策与监督,管理偏执行。' }
  ],
  links: '<p>上一课:<a href="#/l/itss/05-capability">能力评估</a> · 下一篇:<a href="#/l/plan/01-strategy">服务战略规划</a></p>'
});
