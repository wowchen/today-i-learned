SPM.registerLesson({
  id: 'pm/03-cost',
  module: 'pm',
  order: 3,
  title: '成本管理与投资回收',
  minutes: 5,
  key: true,
  keywords: ['成本', '投资回收期', 'ROI', '净现值', '盈亏平衡'],
  concept: '<p>成本管理规划、估算、预算、控制项目花费。常用经济指标:<gd data-term="roi">投资回收期</gd>(多久回本)、净现值(NPV)、投资收益率(ROI)。</p>',
  exam: '<p><b>考纲定位:</b>项目篇,案例常含<b>投资回收期计算</b>。</p>',
  core: '<ul>' +
    '<li><b>静态回收期</b>:累计净收益抵偿初始投资所需时间(不考虑货币时间价值)。</li>' +
    '<li><b>NPV</b>:未来现金流折现后减投资,>0 可行。</li>' +
    '<li><b>盈亏平衡</b>:收入=成本时的产量/销量。</li>' +
    '</ul>' +
    '<div class="ex">用本站"投资回收期计算器"练:输入初始投资与各年净收益,自动算累计与回收期。</div>',
  pitfalls: '<div class="pit"><b>静态回收期忽略货币时间价值。</b>长周期项目应结合 NPV 判断,否则高估远期收益。</div>',
  quiz: [
    { type: 'choice', q: '静态投资回收期是指?', options: ['累计净收益抵偿投资所需时间', '项目总利润', '投资金额', '折现值'], answer: 0, source: '高频', explain: '静态回收期=累计净收益回本所需时间。' }
  ],
  links: '<p>上一课:<a href="#/l/pm/02-schedule">进度管理</a> · 下一课:<a href="#/l/pm/04-quality">质量管理</a> · 实战:<a href="#/l/case/07-cost-staffing">成本与人力测算</a></p>'
});
