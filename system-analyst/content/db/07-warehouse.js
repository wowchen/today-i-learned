SAN.registerLesson({
  id: 'db/07-warehouse',
  module: 'db',
  order: 7,
  title: '数据仓库与 NoSQL',
  minutes: 5,
  keywords: ['数据仓库', 'OLAP', 'OLTP', 'ETL', 'NoSQL', '星型模型'],
  concept: '<p><gd data-term="data-warehouse">数据仓库</gd>面向分析(OLAP),与面向交易的 OLTP 分工不同;NoSQL 为高并发、海量、灵活结构而生。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与信息系统综合。重点:OLTP vs OLAP、ETL、NoSQL四类。</p>',
  core: '<table><tr><th>对比</th><th>OLTP</th><th>OLAP</th></tr>' +
    '<tr><td>面向</td><td>日常交易</td><td>分析决策</td></tr>' +
    '<tr><td>数据</td><td>当前、细粒度</td><td>历史、汇总</td></tr></table>' +
    '<div class="ex">ETL(抽取-转换-加载)把业务数据汇入数仓;建模用星型/雪花模型。NoSQL四类:键值、文档、列族、图。</div>',
  pitfalls: '<div class="pit"><b>误解:数据仓库就是大号数据库。</b>数仓面向主题、集成、历史、分析,与OLTP设计目标不同。</div>',
  quiz: [
    { type: 'choice', q: '面向分析、以历史汇总和复杂查询为主的是?', options: ['OLTP', 'OLAP数据仓库', '消息队列', '缓存'], answer: 1, source: '高频', explain: 'OLAP/数据仓库面向分析。' }
  ],
  links: '<p>数据库模块完。下一模块:<a href="#/l/net/01-model">网络体系结构</a></p>'
});
