SAD.registerLesson({
  id: 'arch/03-absd',
  module: 'arch',
  order: 3,
  title: 'ABSD 基于架构的开发',
  minutes: 5,
  keywords: ['ABSD', '基于架构', '架构需求', '架构设计', '视角', '用例', '质量场景'],
  concept: '<p><gd data-term="absd">ABSD</gd>(基于架构的软件开发)主张"架构先行":由<b>架构需求 → 架构设计 → 架构文档化 → 架构复审 → 架构实现 → 架构演化</b>驱动整个开发。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识。重点:ABSD 六活动、其需求由"功能(用例)+质量(质量场景)+约束"驱动。</p>',
  core: '<p><b>ABSD 三大基础:</b>① 功能分解;② 通过选择架构风格实现质量与业务需求;③ 软件模板(对系统结构的复用)。</p>' +
    '<table><tr><th>阶段</th><th>做什么</th></tr>' +
    '<tr><td>架构需求</td><td>用例(功能)+ 质量属性场景(质量)+ 约束</td></tr>' +
    '<tr><td>架构设计</td><td>选风格、分构件、定接口</td></tr>' +
    '<tr><td>文档化</td><td>多视图文档(配 4+1)</td></tr>' +
    '<tr><td>复审</td><td>用评估方法(如ATAM)审查</td></tr>' +
    '<tr><td>实现/演化</td><td>按架构实现并持续演化</td></tr></table>' +
    '<div class="ex">关键观念:架构需求里,<b>质量属性场景和功能用例同等重要</b>——很多设计决策正是为了满足质量场景。</div>',
  pitfalls: '<div class="pit"><b>误解:ABSD 只关注功能需求。</b>ABSD 的架构需求<b>同时</b>包含功能(用例)、质量(质量属性场景)和约束,质量场景往往是设计的主驱动。</div>',
  quiz: [
    { type: 'choice', q: 'ABSD方法强调的核心是?', options: ['编码优先', '架构先行、由需求(含质量场景)驱动', '测试驱动', '文档最后补'], answer: 1, source: '理解', explain: 'ABSD以架构为中心,由功能与质量需求共同驱动。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/02-views">4+1视图</a> · 下一课:<a href="#/l/arch/04-adl">架构描述语言ADL</a> · 质量场景:<a href="#/l/quality/02-scenario">质量属性场景</a></p>'
});
