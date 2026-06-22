SPM.registerLesson({
  id: 'case/10-real-2',
  module: 'case',
  order: 10,
  title: '真题精解二:规划与人力测算',
  minutes: 5,
  keywords: ['真题', '规划', '人力测算', 'SLA', '四要素'],
  concept: '<p>【题型示例】为新客户设计运维服务,给工作量与 SLA,问:①SLA 三层如何设计?②需多少人?③四要素如何保障?</p>',
  exam: '<p><b>考纲定位:</b>案例篇,真题样例(非照抄题面)。</p>',
  core: '<ul>' +
    '<li><b>①三层</b>:SLA(对客户)定可用性/时效;OLA(内部)支撑;UC(供应商)背靠背。</li>' +
    '<li><b>②人力</b>:⌈ 总工作量/(单人产能×利用率) ⌉,向上取整。</li>' +
    '<li><b>③四要素</b>:人员(培训/岗位)、过程(流程上线)、技术(工具/监控)、资源(CMDB/知识库/备件)。</li>' +
    '</ul>' +
    '<div class="ex">作答示范:"SLA 三层…;人力按公式得 N 人;四要素保障:人员…/过程…/技术…/资源…"。</div>',
  pitfalls: '<div class="pit"><b>人力测算最易错在"忘乘利用率"或"不取整"。</b>务必乘利用率并向上取整。</div>',
  quiz: [
    { type: 'choice', q: '支撑对客户 SLA 的内部班组协议是?', options: ['SLA', 'OLA', 'UC', 'SOW'], answer: 1, source: '真题题型', explain: 'OLA 是内部运营级别协议,支撑 SLA。' }
  ],
  links: '<p>上一课:<a href="#/l/case/09-real-1">真题精解一</a> · 返回:<a href="#/">首页</a></p>'
});
