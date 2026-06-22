SPM.registerLesson({
  id: 'plan/01-strategy',
  module: 'plan',
  order: 1,
  title: 'IT 服务战略规划',
  minutes: 5,
  key: true,
  keywords: ['战略规划', '业务对齐', '服务价值', '目标'],
  concept: '<p>战略规划回答"为什么做、为谁做、做到什么程度":把 IT 服务与<b>业务战略对齐</b>,明确服务的价值、目标客户、关键目标与资源边界。</p>',
  exam: '<p><b>考纲定位:</b>规划篇核心,案例常考"从战略到 SLA"。</p>',
  core: '<ul>' +
    '<li><b>对齐业务</b>:服务目标服务于业务目标,不脱离业务空谈。</li>' +
    '<li><b>明确范围与边界</b>:服务什么、不服务什么,避免承诺过度。</li>' +
    '<li><b>资源与能力评估</b>:现有四要素够不够,缺口在哪。</li>' +
    '<li>产出服务战略/总体规划,作为后续设计与部署的依据。</li>' +
    '</ul>' +
    '<div class="ex">案例开头常问"该服务应如何规划"——答:战略对齐 + 需求识别 + SLA 设计 + 资源规划,层层落地。</div>',
  pitfalls: '<div class="pit"><b>战略不是"堆技术清单"。</b>它是方向与价值定位;先定业务价值,再谈技术与工具。</div>',
  quiz: [
    { type: 'choice', q: 'IT 服务战略规划首要原则是?', options: ['技术越先进越好', '与业务战略对齐', '人员越多越好', '成本越低越好'], answer: 1, source: '高频', explain: '服务战略须对齐业务战略,支撑业务价值。' }
  ],
  links: '<p>下一篇:<a href="#/l/plan/02-demand">需求识别</a> · 关联:<a href="#/l/itss/06-governance">服务治理</a></p>'
});
