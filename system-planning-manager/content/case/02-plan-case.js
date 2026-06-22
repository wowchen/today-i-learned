SPM.registerLesson({
  id: 'case/02-plan-case',
  module: 'case',
  order: 2,
  title: '案例:IT 服务规划设计',
  minutes: 5,
  keywords: ['规划案例', '需求识别', 'SLA', '服务目录', '四要素'],
  concept: '<p>规划类案例常问"如何为某客户设计 IT 服务"。答题动线:<b>战略对齐 → 需求识别 → 方案设计 → SLA/目录 → 资源规划</b>,并用四要素(人/过程/技术/资源)兜底。</p>',
  exam: '<p><b>考纲定位:</b>案例篇高频。</p>',
  core: '<ul>' +
    '<li><b>需求识别</b>:业务场景、可用性期望、合规、预算。</li>' +
    '<li><b>SLA 设计</b>:三层(SLA/OLA/UC)、可衡量可达成。</li>' +
    '<li><b>资源规划</b>:四要素到位,人力按公式测算。</li>' +
    '</ul>' +
    '<div class="ex">模板:先答"从战略到需求",再答"SLA+目录+资源",最后点"四要素保障"。</div>',
  pitfalls: '<div class="pit"><b>别只列名词。</b>要结合场景说明"为什么这么设计",如"该客户对可用性要求高故 SLA 定 99.9% 并配冗余"。</div>',
  quiz: [
    { type: 'choice', q: '服务规划设计案例的答题动线起点是?', options: ['直接定 SLA', '战略与需求对齐', '买设备', '招人'], answer: 1, source: '案例', explain: '规划从战略对齐与需求识别起步。' }
  ],
  links: '<p>上一课:<a href="#/l/case/01-overview">案例总览</a> · 下一篇:<a href="#/l/case/03-ops-case">运营管理案例</a></p>'
});
