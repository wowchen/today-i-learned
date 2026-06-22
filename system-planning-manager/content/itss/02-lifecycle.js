SPM.registerLesson({
  id: 'itss/02-lifecycle',
  module: 'itss',
  order: 2,
  title: 'IT 服务生命周期',
  minutes: 5,
  key: true,
  keywords: ['生命周期', '规划设计', '部署实施', '运营管理', '持续改进', '监督管理', 'PDCA'],
  concept: '<p><gd data-term="lifecycle">IT 服务生命周期</gd>把服务全程串成闭环,体现 PDCA 思想:<b>规划设计 → 部署实施 → 运营管理 → 持续改进 → 监督管理</b>。</p>',
  exam: '<p><b>考纲定位:</b>核心主线,选择题与案例都考,务必背熟顺序。</p>',
  core: '<ul>' +
    '<li><b>规划设计</b>:战略、需求、方案、SLA、目录、资源。</li>' +
    '<li><b>部署实施</b>:把设计落地,资源/技术就绪,转产验收。</li>' +
    '<li><b>运营管理</b>:日常事件/问题/变更/服务级别等流程。</li>' +
    '<li><b>持续改进</b>:测量分析,PDCA 螺旋上升。</li>' +
    '<li><b>监督管理</b>:质量评价、满意度、审计合规(外部视角的"体检")。</li>' +
    '</ul>' +
    '<div class="ex">这五步是全书骨架:后面每个模块都能挂回这条主线。背一句——"规设部署运营改监"。</div>',
  pitfalls: '<div class="pit"><b>别把"持续改进"和"监督管理"混为一谈。</b>改进是内部 PDCA 自我提升;监督是独立的质量与合规审视。</div>',
  quiz: [
    { type: 'choice', q: 'IT 服务生命周期的正确顺序是?', options: ['规划→运营→部署→改进→监督', '规划→部署→运营→改进→监督', '部署→规划→运营→监督→改进', '运营→规划→部署→改进→监督'], answer: 1, source: '高频', explain: '规划设计→部署实施→运营管理→持续改进→监督管理。' }
  ],
  links: '<p>上一课:<a href="#/l/itss/01-it-service">什么是 IT 服务</a> · 下一课:<a href="#/l/itss/03-itss-system">ITSS 体系</a></p>'
});
