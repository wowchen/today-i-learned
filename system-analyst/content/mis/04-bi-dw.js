SAN.registerLesson({
  id: 'mis/04-bi-dw',
  module: 'mis',
  order: 4,
  title: 'BI 与数据仓库',
  minutes: 4,
  keywords: ['BI', '商业智能', '数据仓库', 'OLAP', 'ETL', '数据挖掘'],
  concept: '<p><gd data-term="bi">商业智能(BI)</gd>把数据经 ETL 汇入数据仓库,用 OLAP 与可视化辅助经营决策,是信息化的"决策层"。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(大数据)。重点:BI链路、OLTP vs OLAP。</p>',
  core: '<div class="ex"><b>BI 链路:</b>业务库(OLTP)→ <b>ETL</b>(抽取-转换-加载)→ 数据仓库 → OLAP分析/数据挖掘 → 可视化仪表盘。<br>OLTP 处理交易、OLAP 面向分析,两者分开以免互相拖累。</div>',
  pitfalls: '<div class="pit"><b>误解:直接在业务库上跑分析报表。</b>大查询会拖垮在线交易;应抽取到<b>数据仓库</b>专做分析。</div>',
  quiz: [
    { type: 'choice', q: '把多源业务数据汇入数据仓库的过程称为?', options: ['ETL', 'CRUD', 'RPC', 'CI/CD'], answer: 0, source: '高频', explain: 'ETL=抽取、转换、加载。' }
  ],
  links: '<p>上一课:<a href="#/l/mis/03-crm-scm">CRM与SCM</a> · 下一课:<a href="#/l/mis/05-egov">电子政务</a> · 数仓:<a href="#/l/db/07-warehouse">数据仓库与NoSQL</a></p>'
});
