SAN.registerLesson({
  id: 'mis/01-informatization',
  module: 'mis',
  order: 1,
  title: '企业信息化',
  minutes: 4,
  key: true,
  keywords: ['信息化', '企业信息化', '两化融合', '信息系统', '价值'],
  concept: '<p><gd data-term="informatization">信息化</gd>是用信息技术改造业务与管理、提升效率与决策的过程。企业信息化是系分"信息系统综合"的总纲。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:信息化层次、两化融合。</p>',
  core: '<div class="ex">企业信息化层次:从<b>单项业务(财务/办公)→ 综合集成(ERP)→ 协同(供应链/CRM)→ 智能决策(BI/数据治理)</b>逐级提升。两化融合=信息化与工业化深度结合。</div>',
  pitfalls: '<div class="pit"><b>误解:信息化就是买软件上系统。</b>信息化要<b>配合流程优化(BPR)与管理变革</b>,只上系统不改流程往往收效甚微。</div>',
  quiz: [
    { type: 'choice', q: '把烂流程直接信息化的结果通常是?', options: ['自动变好', '更快地烂(应先优化流程)', '没有影响', '成本下降'], answer: 1, source: '理解', explain: '应先优化/重组流程再信息化。' }
  ],
  links: '<p>下一课:<a href="#/l/mis/02-erp">ERP</a> · 流程重组:<a href="#/l/plan/06-bpr">BPR</a></p>'
});
