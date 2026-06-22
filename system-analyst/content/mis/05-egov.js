SAN.registerLesson({
  id: 'mis/05-egov',
  module: 'mis',
  order: 5,
  title: '电子政务',
  minutes: 4,
  keywords: ['电子政务', 'G2C', 'G2B', 'G2G', '一网通办', '政务服务'],
  concept: '<p>电子政务用信息技术提升政府服务与治理,按服务对象分 G2C(对公民)、G2B(对企业)、G2G(政府间)、G2E(对公务员)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:电子政务模式分类。</p>',
  core: '<table><tr><th>模式</th><th>对象</th><th>例</th></tr>' +
    '<tr><td>G2C</td><td>公民</td><td>社保查询、一网通办</td></tr>' +
    '<tr><td>G2B</td><td>企业</td><td>电子报税、网上审批</td></tr>' +
    '<tr><td>G2G</td><td>政府间</td><td>跨部门数据共享</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:电子政务只是把表格搬上网。</b>核心是<b>跨部门数据共享与流程协同</b>(如"一网通办"),难点在打通信息孤岛。</div>',
  quiz: [
    { type: 'choice', q: '"企业网上报税"属于哪种电子政务模式?', options: ['G2C', 'G2B', 'G2G', 'G2E'], answer: 1, source: '高频', explain: '面向企业是G2B。' }
  ],
  links: '<p>上一课:<a href="#/l/mis/04-bi-dw">BI与数仓</a> · 下一课:<a href="#/l/mis/06-data-governance">数据治理</a></p>'
});
