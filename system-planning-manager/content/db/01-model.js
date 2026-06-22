SPM.registerLesson({
  id: 'db/01-model',
  module: 'db',
  order: 1,
  title: '数据库与数据模型',
  minutes: 5,
  keywords: ['关系数据库', 'NoSQL', '三级模式', '主键', '外键'],
  concept: '<p>数据库是有组织、可共享的数据集合。主流是<b>关系数据库</b>(表/行/列,SQL);海量场景用 <b>NoSQL</b>(键值、文档、列、图)。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,概念辨析。</p>',
  core: '<ul>' +
    '<li><b>三级模式</b>:外模式(视图)、概念模式(逻辑表)、内模式(物理存储),两级映像保证独立性。</li>' +
    '<li><b>主键</b>唯一标识一行,<b>外键</b>关联另一表的主键。</li>' +
    '<li><b>关系 vs NoSQL</b>:关系强一致、易约束;NoSQL 易扩展、灵活,适合大数据。</li>' +
    '</ul>' +
    '<div class="ex">运维要懂备份恢复(联系 <gd data-term="rpo">RPO</gd>/<gd data-term="rto">RTO</gd>),数据是服务的命脉。</div>',
  pitfalls: '<div class="pit"><b>NoSQL 不是"没有 SQL/更高级"。</b>它是"Not Only SQL",以放宽一致性换扩展性,各有适用。</div>',
  quiz: [
    { type: 'choice', q: '数据库三级模式中,面向用户/应用的是?', options: ['内模式', '概念模式', '外模式', '物理模式'], answer: 2, source: '高频', explain: '外模式即视图,面向具体用户/应用。' }
  ],
  links: '<p>下一课:<a href="#/l/db/02-sql">SQL 基础</a></p>'
});
