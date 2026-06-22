SPM.registerLesson({
  id: 'case/03-ops-case',
  module: 'case',
  order: 3,
  title: '案例:运营管理三大流程',
  minutes: 5,
  key: true,
  keywords: ['运营案例', '事件', '问题', '变更', '流程'],
  concept: '<p>运营案例常给"出事故/频繁故障/变更引发问题"场景,考事件/问题/变更流程。核心区分:<b>事件重快恢复、问题重找根因、变更重受控</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例篇最高频。</p>',
  core: '<ul>' +
    '<li><b>事件</b>:分类分级 → 优先级 → 处置恢复 → 关闭(可引用已知错误)。</li>' +
    '<li><b>问题</b>:RCA 找根因 → 登记已知错误 → 永久修复/规避。</li>' +
    '<li><b>变更</b>:评估 → CAB 审批 → 实施 → 回退预案 → 回顾。</li>' +
    '</ul>' +
    '<div class="ex">典型答题:先点出"该场景应走 XX 流程",再列步骤与角色,最后给改进建议。</div>',
  pitfalls: '<div class="pit"><b>别把事件当问题处理。</b>事件先恢复服务,根因留给问题管理;在事件阶段纠结根因会拖延恢复、违反 SLA。</div>',
  quiz: [
    { type: 'choice', q: '某服务频繁同一故障,应启动的流程是?', options: ['事件管理', '问题管理', '发布管理', '容量管理'], answer: 1, source: '案例', explain: '频繁复发属问题管理范畴,需查根因治本。' }
  ],
  links: '<p>上一课:<a href="#/l/case/02-plan-case">规划案例</a> · 下一篇:<a href="#/l/case/04-sla-availability">SLA 与可用性计算</a></p>'
});
