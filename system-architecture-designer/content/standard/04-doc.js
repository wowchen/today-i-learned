SAD.registerLesson({
  id: 'standard/04-doc',
  module: 'standard',
  order: 4,
  title: '文档与软件工程标准',
  minutes: 4,
  keywords: ['软件文档', '开发文档', '管理文档', '用户文档', '配置管理', '工程标准'],
  concept: '<p>软件文档是工程化的重要产物。按用途分<b>开发文档、管理文档、用户文档</b>三类,贯穿整个生命周期,也是软考强调的规范。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:文档分类、配置管理对文档的作用。</p>',
  core: '<table><tr><th>文档类</th><th>例</th></tr>' +
    '<tr><td>开发文档</td><td>需求规格、设计说明、测试报告</td></tr>' +
    '<tr><td>管理文档</td><td>项目计划、进度、配置管理计划</td></tr>' +
    '<tr><td>用户文档</td><td>用户手册、操作指南</td></tr></table>' +
    '<div class="ex">文档要纳入<b>配置管理</b>:版本可控、变更可追溯。架构文档(多视图)是架构师交付的关键产物,呼应 4+1 视图与 ABSD 的"文档化"。</div>',
  pitfalls: '<div class="pit"><b>误解:文档可有可无、事后补。</b>文档是沟通与维护的基础,且应<b>随开发同步产生并版本受控</b>;事后补的文档往往失真无用。</div>',
  quiz: [
    { type: 'choice', q: '用户手册属于哪类软件文档?', options: ['开发文档', '管理文档', '用户文档', '财务文档'], answer: 2, source: '高频', explain: '用户手册、操作指南属用户文档。' }
  ],
  links: '<p>进阶篇全部完成!进入实战篇:<a href="#/l/case/01-overview">案例分析题型与策略</a> · 架构文档:<a href="#/l/arch/02-views">4+1视图</a></p>'
});
