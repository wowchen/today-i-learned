SAN.registerLesson({
  id: 'mis/02-erp',
  module: 'mis',
  order: 2,
  title: 'ERP 企业资源计划',
  minutes: 4,
  keywords: ['ERP', 'MRP', 'MRPII', '集成', '财务', '生产', '库存'],
  concept: '<p><gd data-term="erp">ERP</gd> 把企业的财务、采购、生产、库存、销售、人力等<b>集成</b>到一个系统统一管理。它由 MRP → MRPII → ERP 演进而来。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:ERP演进、核心特征(集成)。</p>',
  core: '<table><tr><th>阶段</th><th>侧重</th></tr>' +
    '<tr><td>MRP</td><td>物料需求计划(算"何时买多少料")</td></tr>' +
    '<tr><td>MRPII</td><td>制造资源计划(加入财务、能力)</td></tr>' +
    '<tr><td>ERP</td><td>企业级全面集成(供应链、人力等)</td></tr></table>' +
    '<div class="ex">ERP 的灵魂是<b>数据集成、流程打通</b>:一处录入、全局共享,消除信息孤岛。</div>',
  pitfalls: '<div class="pit"><b>误解:ERP上线就能提效。</b>ERP 实施常伴随<b>流程重组与组织变革</b>,失败多因"系统迁就旧流程"或变革阻力,而非软件本身。</div>',
  quiz: [
    { type: 'choice', q: 'ERP的核心特征是?', options: ['只管财务', '企业级数据与流程集成', '只管生产', '替代数据库'], answer: 1, source: '高频', explain: 'ERP核心是企业级集成,消除信息孤岛。' }
  ],
  links: '<p>上一课:<a href="#/l/mis/01-informatization">企业信息化</a> · 下一课:<a href="#/l/mis/03-crm-scm">CRM与SCM</a></p>'
});
