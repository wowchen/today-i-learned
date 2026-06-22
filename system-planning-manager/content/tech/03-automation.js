SPM.registerLesson({
  id: 'tech/03-automation',
  module: 'tech',
  order: 3,
  title: '自动化运维',
  minutes: 4,
  keywords: ['自动化', '脚本', '配置管理', '基础设施即代码', '减少人为错误'],
  concept: '<p>自动化运维用脚本/工具把重复操作自动化:部署、配置、巡检、扩容一键完成。降低人为错误、提升一致性与效率,是现代运维方向。</p>',
  exam: '<p><b>考纲定位:</b>工具篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>典型场景</b>:自动部署、配置管理、巡检、告警自愈。</li>' +
    '<li><b>基础设施即代码(IaC)</b>:用代码定义环境,可版本、可复现。</li>' +
    '<li><b>收益</b>:减少手误、提速、可审计。</li>' +
    '</ul>' +
    '<div class="ex">人最容易在重复操作中出错;自动化把"易错的手工"变成"可靠的脚本"。</div>',
  pitfalls: '<div class="pit"><b>自动化也要受控。</b>自动脚本本身要走变更与测试,否则"批量出错"比手工更猛。</div>',
  quiz: [
    { type: 'choice', q: '自动化运维最直接的收益是?', options: ['增加人员', '减少人为错误、提升一致性', '提高成本', '降低安全'], answer: 1, source: '高频', explain: '自动化降低手误、提升一致性与效率。' }
  ],
  links: '<p>上一课:<a href="#/l/tech/02-monitor">监控告警</a> · 下一课:<a href="#/l/tech/04-cloud">云服务</a></p>'
});
