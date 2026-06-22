SPM.registerLesson({
  id: 'plan/06-resource',
  module: 'plan',
  order: 6,
  title: '资源规划与能力测算',
  minutes: 5,
  keywords: ['资源规划', '人员测算', '容量', '备件', '预算'],
  concept: '<p>资源规划回答"要多少人、多少设备、多少预算":结合需求与 SLA,测算<b>人员、技术、数据、备件、资金</b>等资源,使能力与需求匹配。</p>',
  exam: '<p><b>考纲定位:</b>规划篇,案例常含<b>人力测算</b>计算题。</p>',
  core: '<ul>' +
    '<li><b>人员测算</b>:所需人数 = ⌈ 总工作量 / (单人产能 × 利用率) ⌉(向上取整)。</li>' +
    '<li><b>备件/资源</b>:按故障率与 SLA 备份关键备件。</li>' +
    '<li><b>容量与预算</b>:与 <gd data-term="capacity">容量管理</gd>联动,平衡成本与可用性。</li>' +
    '</ul>' +
    '<div class="ex">人力测算用本站"服务人力测算计算器"练;记住"向上取整"——人多出来的零头也得配一个整人。</div>',
  pitfalls: '<div class="pit"><b>测算别忘"利用率"</b>。人不可能 100% 有效,不乘利用率会严重低估所需人数。</div>',
  quiz: [
    { type: 'choice', q: '服务人力测算的基本公式是?', options: ['工作量 × 利用率', '总工作量 /(单人产能 × 利用率)向上取整', '人数 = 设备数', '人数 = 预算'], answer: 1, source: '高频', explain: '所需人数 = ⌈ 总工作量/(单人产能×利用率) ⌉。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/05-catalog">服务目录</a> · 下一篇:<a href="#/l/deploy/01-plan">部署实施计划</a> · 实战:<a href="#/l/case/07-cost-staffing">成本与人力测算</a></p>'
});
