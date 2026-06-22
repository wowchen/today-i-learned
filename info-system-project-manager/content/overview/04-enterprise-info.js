ISPM.registerLesson({
  id: 'overview/04-enterprise-info',
  module: 'overview',
  order: 4,
  title: '企业信息化',
  minutes: 5,
  keywords: ['企业信息化', 'ERP', 'CRM', 'SCM', 'MIS', 'DSS', '商业智能', 'BPR'],
  concept: '<p>企业信息化就是企业用信息系统管理生产经营。这里会冒出一堆英文缩写（ERP、CRM、SCM……），高项常考它们的<b>全称和用途</b>，本课一次理清。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考。各类企业信息系统的缩写和用途必须对应记牢。</p>',
  core: '<p><b>常见企业信息系统：</b></p>' +
    '<ul><li><b>ERP（企业资源计划）</b>：整合企业人财物产供销的核心系统，是企业信息化的骨干。</li>' +
    '<li><b>CRM（客户关系管理）</b>：管理客户信息和销售、营销、服务，面向"<em>客户</em>"。</li>' +
    '<li><b>SCM（供应链管理）</b>：管理从供应商到客户的供应链，面向"<em>上下游</em>"。</li>' +
    '<li><b>MIS（管理信息系统）</b>：支持日常管理和运营的信息系统。</li>' +
    '<li><b>DSS（决策支持系统）</b>：辅助管理者进行半结构化/非结构化决策。</li>' +
    '<li><b>BI（商业智能）</b>：通过数据仓库、数据挖掘、OLAP 把数据变成决策洞察。</li></ul>' +
    '<p><b>按管理层次：</b>EDPS（事务处理）→ MIS（管理）→ DSS（决策）→ 智能系统，由操作层向决策层递进。</p>' +
    '<p><b>BPR（业务流程重组）</b>：对业务流程进行根本性再思考和彻底性再设计，追求绩效的显著改善。常与信息化结合（先重组流程，再上系统）。</p>',
  pitfalls: '<div class="pit"><b>误解 1：CRM 和 SCM 搞混。</b> CRM 面向<em>客户</em>（下游，管销售服务）；SCM 面向<em>供应链</em>（上下游，管采购物流）。ERP 是整合内部资源的骨干。</div>' +
    '<div class="pit"><b>误解 2：MIS 和 DSS 一样。</b> MIS 处理<em>结构化</em>的日常管理（如报表）；DSS 支持<em>半/非结构化</em>的决策分析（如预测、方案比选）。</div>' +
    '<div class="pit"><b>误解 3：上 ERP 前不用动流程。</b> 最佳实践是先做 BPR（业务流程重组），让流程合理化，再上系统。把烂流程电子化只会更糟。</div>',
  quiz: [
    {
      type: 'choice',
      q: '整合企业人、财、物、产、供、销，是企业信息化骨干的核心系统是：',
      options: ['CRM', 'ERP', 'SCM', 'DSS'],
      answer: 1,
      source: '高频考点',
      explain: 'ERP（企业资源计划）整合企业内部的人财物产供销等资源，是企业信息化的核心骨干系统。'
    },
    {
      type: 'choice',
      q: '主要用于管理客户信息、支持销售和营销服务的系统是：',
      options: ['SCM', 'ERP', 'CRM', 'MIS'],
      answer: 2,
      explain: 'CRM（客户关系管理）面向客户，管理客户信息和销售、营销、服务流程。SCM 面向供应链上下游。'
    },
    {
      type: 'choice',
      q: '对业务流程进行根本性再思考和彻底性再设计，以求绩效显著改善的方法是：',
      options: ['BI', 'BPR', 'ERP', 'OLAP'],
      answer: 1,
      explain: 'BPR（业务流程重组）强调对业务流程进行根本性再思考和彻底性再设计。信息化常与 BPR 结合：先重组流程再上系统。'
    }
  ],
  links: '<p>上一课：<a href="#/l/overview/03-e-government">电子政务</a> · 下一课：<a href="#/l/overview/05-new-it-tech">新一代信息技术</a></p>'
});
