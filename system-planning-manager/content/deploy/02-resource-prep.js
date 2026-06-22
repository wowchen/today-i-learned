SPM.registerLesson({
  id: 'deploy/02-resource-prep',
  module: 'deploy',
  order: 2,
  title: '资源准备与人员就绪',
  minutes: 4,
  keywords: ['资源准备', '人员就绪', '培训', '知识库', '备件'],
  concept: '<p>资源准备让四要素"到位可用":<b>人员</b>招齐配训、<b>过程</b>流程发布、<b>技术</b>工具上线、<b>资源</b>知识库/备件/数据备好。</p>',
  exam: '<p><b>考纲定位:</b>部署篇,案例常考"上线前该准备什么"。</p>',
  core: '<ul>' +
    '<li><b>人员</b>:岗位到人、技能培训、职责(<gd data-term="raci">RACI</gd>)明确。</li>' +
    '<li><b>过程</b>:流程文档发布、服务台就绪。</li>' +
    '<li><b>技术/资源</b>:工具与监控、<gd data-term="cmdb">CMDB</gd>初始化、知识库与备件。</li>' +
    '</ul>' +
    '<div class="ex">上线不是"按钮一按",而是"人/流程/工具/数据"全部就位。</div>',
  pitfalls: '<div class="pit"><b>知识库最易被忽略。</b>没知识库,事件处置全靠个人记忆,质量随人员流动而塌方。</div>',
  quiz: [
    { type: 'choice', q: '部署阶段资源准备不包含?', options: ['人员培训', '流程发布', '知识库与备件', '对外广告投放'], answer: 3, source: '高频', explain: '资源准备属内部就绪,不含市场广告。' }
  ],
  links: '<p>上一课:<a href="#/l/deploy/01-plan">部署计划</a> · 下一课:<a href="#/l/deploy/03-tech-prep">技术准备</a></p>'
});
