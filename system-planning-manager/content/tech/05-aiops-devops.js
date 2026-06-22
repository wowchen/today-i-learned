SPM.registerLesson({
  id: 'tech/05-aiops-devops',
  module: 'tech',
  order: 5,
  title: 'AIOps 与 DevOps',
  minutes: 5,
  key: true,
  keywords: ['AIOps', 'DevOps', 'CI/CD', '智能运维', '开发运维一体化'],
  concept: '<p><gd data-term="devops">DevOps</gd>打通开发与运维,以自动化与协作实现快速可靠交付;<gd data-term="aiops">AIOps</gd>用大数据与 AI 增强运维,实现异常检测、根因定位与预测。</p>',
  exam: '<p><b>考纲定位:</b>工具篇,选择题考两者含义。</p>',
  core: '<ul>' +
    '<li><b>DevOps</b>:文化+实践+工具,核心是开发运维一体化与 <gd data-term="cicd">CI/CD</gd>。</li>' +
    '<li><b>AIOps</b>:海量运维数据 + 机器学习,做智能告警、根因推荐、容量预测。</li>' +
    '<li><b>趋势</b>:从"人盯监控"走向"数据驱动+智能辅助"。</li>' +
    '</ul>' +
    '<div class="ex">DevOps 解决"交付又快又稳",AIOps 解决"海量数据看不过来";两者正融合。</div>',
  pitfalls: '<div class="pit"><b>DevOps 不只是工具,更是文化。</b>只上 CI/CD 工具而不打破部门墙,不叫 DevOps。</div>',
  quiz: [
    { type: 'choice', q: '用 AI 与大数据增强 IT 运维、实现智能告警与根因分析的是?', options: ['DevOps', 'AIOps', 'ITIL', 'WBS'], answer: 1, source: '高频', explain: 'AIOps 以大数据与 AI 增强运维。' }
  ],
  links: '<p>上一课:<a href="#/l/tech/04-cloud">云服务</a> · 下一篇:<a href="#/l/standard/01-standardization">标准化</a></p>'
});
