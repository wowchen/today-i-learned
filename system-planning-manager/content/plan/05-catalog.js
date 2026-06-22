SPM.registerLesson({
  id: 'plan/05-catalog',
  module: 'plan',
  order: 5,
  title: '服务目录',
  minutes: 4,
  keywords: ['服务目录', '业务目录', '技术服务目录', '菜单'],
  concept: '<p><gd data-term="service-catalog">服务目录</gd>是面向客户的"服务菜单":结构化列出当前可提供的服务、级别、申请方式。分<b>业务服务目录</b>(客户视角)与<b>技术服务目录</b>(内部支撑视角)。</p>',
  exam: '<p><b>考纲定位:</b>规划篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>业务服务目录</b>:客户能看到的服务、描述、SLA、价格。</li>' +
    '<li><b>技术服务目录</b>:内部支撑这些服务的技术组件、依赖。</li>' +
    '<li>作用:统一入口、避免乱承诺、支撑需求管理。</li>' +
    '</ul>' +
    '<div class="ex">没有目录,客户不知道能要什么,服务台也乱接需求——菜单先于上菜。</div>',
  pitfalls: '<div class="pit"><b>服务目录不是"内部资产清单"。</b>它面向客户,讲"能提供什么服务";资产清单是 <gd data-term="cmdb">CMDB</gd> 的事。</div>',
  quiz: [
    { type: 'choice', q: '面向客户、列出可提供服务及其级别的清单是?', options: ['服务目录', 'CMDB', '配置项', '工单'], answer: 0, source: '高频', explain: '服务目录面向客户,是"服务菜单"。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/04-sla">SLA 设计</a> · 下一课:<a href="#/l/plan/06-resource">资源规划</a></p>'
});
