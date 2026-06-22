SAN.registerLesson({
  id: 'mis/03-crm-scm',
  module: 'mis',
  order: 3,
  title: 'CRM 与 SCM',
  minutes: 4,
  keywords: ['CRM', 'SCM', '客户关系', '供应链', '协同', '牛鞭效应'],
  concept: '<p><gd data-term="crm">CRM</gd> 管"对外的客户关系";<gd data-term="scm">SCM</gd> 管"从供应商到客户的供应链"。两者把企业的外部协同信息化。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:CRM/SCM作用、牛鞭效应。</p>',
  core: '<table><tr><th>系统</th><th>管什么</th></tr>' +
    '<tr><td>CRM</td><td>营销、销售、客户服务全流程</td></tr>' +
    '<tr><td>SCM</td><td>采购、库存、物流、供应商协同</td></tr></table>' +
    '<div class="ex"><b>牛鞭效应:</b>需求信息沿供应链向上逐级放大,导致越上游库存波动越大。靠信息共享、缩短链路缓解,正是 SCM 的价值。</div>',
  pitfalls: '<div class="pit"><b>误解:CRM就是客户通讯录。</b>CRM 是围绕客户全生命周期的营销-销售-服务管理,远不止存联系方式。</div>',
  quiz: [
    { type: 'choice', q: '需求信息沿供应链向上逐级放大的现象是?', options: ['长尾效应', '牛鞭效应', '马太效应', '木桶效应'], answer: 1, source: '高频', explain: '牛鞭效应,靠信息共享缓解。' }
  ],
  links: '<p>上一课:<a href="#/l/mis/02-erp">ERP</a> · 下一课:<a href="#/l/mis/04-bi-dw">BI与数据仓库</a></p>'
});
