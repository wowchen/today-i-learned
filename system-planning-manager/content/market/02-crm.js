SPM.registerLesson({
  id: 'market/02-crm',
  module: 'market',
  order: 2,
  title: '客户关系管理',
  minutes: 4,
  keywords: ['CRM', '客户生命周期', '分级', '续约', '流失'],
  concept: '<p><gd data-term="crm">CRM</gd>以客户为中心,管理售前售中售后全周期关系。对 IT 服务而言,重点是<b>客户分级、需求跟进、满意度维护、续约防流失</b>。</p>',
  exam: '<p><b>考纲定位:</b>营销篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>客户分级</b>:按价值/战略意义分层服务,资源向重点客户倾斜。</li>' +
    '<li><b>定期回访</b>:主动沟通需求与满意度,防"沉默流失"。</li>' +
    '<li><b>续约管理</b>:合同到期前早介入,用数据(服务报告)证明价值。</li>' +
    '</ul>' +
    '<div class="ex">服务续约靠"平时功夫":定期回访 + 可见价值(报告/指标),比临到期才推销有效得多。</div>',
  pitfalls: '<div class="pit"><b>CRM 不是软件,是理念。</b>上了 CRM 系统却不改变"以客户为中心"的运营,等于没做。</div>',
  quiz: [
    { type: 'choice', q: 'IT 服务客户关系管理的重点不包括?', options: ['客户分级', '续约防流失', '满意度维护', '压低员工工资'], answer: 3, source: '高频', explain: 'CRM 围绕客户价值与关系,与压低工资无关。' }
  ],
  links: '<p>上一课:<a href="#/l/market/01-concept">营销概念</a> · 下一课:<a href="#/l/market/03-pricing">服务定价</a></p>'
});
