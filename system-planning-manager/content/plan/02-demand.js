SPM.registerLesson({
  id: 'plan/02-demand',
  module: 'plan',
  order: 2,
  title: '需求识别与需求管理',
  minutes: 5,
  keywords: ['需求识别', '需求管理', '客户需求', '业务影响', '画像'],
  concept: '<p>规划要"听懂客户要什么"。<gd data-term="demand-mgmt">需求识别</gd>收集客户对服务的功能、性能、可用性等要求;<b>需求管理</b>持续管理需求变化,使供需匹配。</p>',
  exam: '<p><b>考纲定位:</b>规划篇,案例常问"如何识别客户需求"。</p>',
  core: '<ul>' +
    '<li><b>识别内容</b>:业务场景、服务对象、性能/可用性期望、安全合规、预算与时间。</li>' +
    '<li><b>分析方法</b>:访谈、问卷、业务影响分析(BIA)、历史数据分析。</li>' +
    '<li><b>需求管理</b>:变更走流程、优先级排序、与容量联动。</li>' +
    '</ul>' +
    '<div class="ex">需求识别越扎实,后面的 SLA 越靠谱——这是"别过度承诺、也别漏承诺"的前提。</div>',
  pitfalls: '<div class="pit"><b>别只听客户说的字面需求。</b>要挖"业务影响",分清"想要"与"必须"。</div>',
  quiz: [
    { type: 'choice', q: '需求识别最应关注的是?', options: ['只听客户字面要求', '业务影响与真实期望', '技术先进性', '供应商报价'], answer: 1, source: '高频', explain: '需求识别要分析业务影响,区分想要与必须。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/01-strategy">战略规划</a> · 下一课:<a href="#/l/plan/03-scheme">方案设计</a></p>'
});
