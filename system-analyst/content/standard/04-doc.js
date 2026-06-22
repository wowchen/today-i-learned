SAN.registerLesson({
  id: 'standard/04-doc',
  module: 'standard',
  order: 4,
  title: '文档与软件工程标准',
  minutes: 4,
  keywords: ['软件文档', '开发文档', '管理文档', '用户文档', '配置管理'],
  concept: '<p>软件文档是工程化的重要产物,分<b>开发文档、管理文档、用户文档</b>三类,贯穿生命周期。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:文档分类、配置管理。</p>',
  core: '<table><tr><th>类</th><th>例</th></tr>' +
    '<tr><td>开发文档</td><td>需求规格、设计说明、测试报告</td></tr>' +
    '<tr><td>管理文档</td><td>项目计划、进度、配置管理计划</td></tr>' +
    '<tr><td>用户文档</td><td>用户手册、操作指南</td></tr></table>' +
    '<div class="ex">文档应纳入<b>配置管理</b>:版本可控、变更可追溯,与需求基线、变更控制配套。</div>',
  pitfalls: '<div class="pit"><b>误解:文档事后补即可。</b>文档应<b>随开发同步产生并版本受控</b>;事后补的文档往往失真无用。</div>',
  quiz: [
    { type: 'choice', q: '用户手册属于哪类文档?', options: ['开发文档', '管理文档', '用户文档', '财务文档'], answer: 2, source: '高频', explain: '用户手册属用户文档。' }
  ],
  links: '<p>进阶篇全部完成!进入实战篇:<a href="#/l/case/01-overview">案例分析题型与策略</a></p>'
});
