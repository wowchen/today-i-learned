SPM.registerLesson({
  id: 'plan/03-scheme',
  module: 'plan',
  order: 3,
  title: 'IT 服务方案设计',
  minutes: 5,
  keywords: ['方案设计', '架构', '流程', '组织', '技术方案'],
  concept: '<p>方案设计把需求落成可执行的蓝图:设计<b>服务架构、管理流程、组织角色、技术方案、资源配比</b>,形成整体方案供部署实施。</p>',
  exam: '<p><b>考纲定位:</b>规划篇,案例常考"设计要点"。</p>',
  core: '<ul>' +
    '<li><b>流程设计</b>:事件/问题/变更等流程的目标、角色、步骤、指标。</li>' +
    '<li><b>组织角色</b>:服务台、一线二线三线、各角色职责(可用 <gd data-term="raci">RACI</gd>)。</li>' +
    '<li><b>技术方案</b>:工具、监控、自动化、备份容灾。</li>' +
    '<li><b>资源配比</b>:人数、备件、预算(可接人力测算)。</li>' +
    '</ul>' +
    '<div class="ex">方案是"设计图",部署是"施工";图纸不全,施工必返工。</div>',
  pitfalls: '<div class="pit"><b>别只设计技术、漏了流程和角色。</b>服务管理的核心是流程与人,技术只是支撑。</div>',
  quiz: [
    { type: 'choice', q: 'IT 服务方案设计应包含?', options: ['仅技术架构', '流程、组织、技术、资源整体', '仅人员名单', '仅预算表'], answer: 1, source: '高频', explain: '方案是含流程/组织/技术/资源的整体蓝图。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/02-demand">需求识别</a> · 下一课:<a href="#/l/plan/04-sla">SLA 设计</a></p>'
});
