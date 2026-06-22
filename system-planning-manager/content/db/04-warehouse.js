SPM.registerLesson({
  id: 'db/04-warehouse',
  module: 'db',
  order: 4,
  title: '数据仓库与大数据',
  minutes: 4,
  keywords: ['数据仓库', 'ETL', 'OLAP', '大数据', '数据治理'],
  concept: '<p><b>数据仓库</b>面向分析、集成历史数据;经 <b>ETL</b> 抽取转换装载,用 <b>OLAP</b> 多维分析支撑决策。大数据强调海量、多样、快速。</p>',
  exam: '<p><b>考纲定位:</b>基础了解,概念题。</p>',
  core: '<ul>' +
    '<li><b>OLTP vs OLAP</b>:前者面向交易(日常增删改),后者面向分析(汇总统计)。</li>' +
    '<li><b>大数据 4V</b>:海量(Volume)、多样(Variety)、高速(Velocity)、价值(Value)。</li>' +
    '<li>服务运营产生大量日志/监控数据,是 <gd data-term="aiops">AIOps</gd> 的"燃料"。</li>' +
    '</ul>' +
    '<div class="ex">运维数据(日志、指标、工单)本身就是宝贵的分析对象。</div>',
  pitfalls: '<div class="pit"><b>数据仓库不替代业务库。</b>它面向分析,不做日常交易处理。</div>',
  quiz: [
    { type: 'choice', q: '面向分析、做多维统计的处理类型是?', options: ['OLTP', 'OLAP', 'CRUD', 'ETL'], answer: 1, source: '高频', explain: 'OLAP 面向分析决策;OLTP 面向交易。' }
  ],
  links: '<p>上一课:<a href="#/l/db/03-transaction">事务并发</a> · 下一篇:<a href="#/l/sec/01-crypto">加密技术</a></p>'
});
