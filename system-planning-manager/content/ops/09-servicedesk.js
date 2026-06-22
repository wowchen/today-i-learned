SPM.registerLesson({
  id: 'ops/09-servicedesk',
  module: 'ops',
  order: 9,
  title: '服务台',
  minutes: 4,
  keywords: ['服务台', 'SPOC', '单一联系点', '一线支持', '受理'],
  concept: '<p><gd data-term="servicedesk">服务台</gd>是用户与 IT 服务的<gd data-term="spoc">单一联系点(SPOC)</gd>:受理事件/请求、记录派发、跟踪反馈。它是服务"对外的脸"。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考服务台职责。</p>',
  core: '<ul>' +
    '<li><b>职责</b>:受理记录、分类派发、一线处置(简单问题)、跟踪关闭、反馈。</li>' +
    '<li><b>类型</b>:本地/集中/虚拟服务台。</li>' +
    '<li><b>价值</b>:统一入口、内部协调对用户透明、提升体验。</li>' +
    '</ul>' +
    '<div class="ex">用户只需记一个入口;内部如何流转是服务台的事——这正是 SPOC 的意义。</div>',
  pitfalls: '<div class="pit"><b>服务台不是"只接电话"。</b>它含一线知识库处置、工单流转、满意度跟踪,是流程的起点与终点。</div>',
  quiz: [
    { type: 'choice', q: '服务台的核心定位是?', options: ['只接电话', '用户与服务的单一联系点', '只负责采购', '只负责编码'], answer: 1, source: '高频', explain: '服务台是 SPOC,统一受理与派发。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/08-continuity">连续性管理</a> · 下一篇:<a href="#/l/improve/01-concept">持续改进概念</a></p>'
});
