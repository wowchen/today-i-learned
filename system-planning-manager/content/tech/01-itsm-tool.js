SPM.registerLesson({
  id: 'tech/01-itsm-tool',
  module: 'tech',
  order: 1,
  title: 'ITSM 工具平台',
  minutes: 4,
  keywords: ['ITSM工具', '工单系统', 'CMDB', '知识库', '流程自动化'],
  concept: '<p><gd data-term="itsm-tool">ITSM 工具</gd>把服务流程落到系统:工单流转、<gd data-term="cmdb">CMDB</gd>、知识库、服务级别监控一体化,支撑事件/问题/变更等流程高效运转。</p>',
  exam: '<p><b>考纲定位:</b>工具篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>核心模块</b>:工单、CMDB、知识库、SLA 监控、报告。</li>' +
    '<b>价值</b>:流程可追溯、数据可统计、协作高效。</li>' +
    '<li><b>选型</b>:匹配流程、易用、可扩展、能集成监控。</li>' +
    '</ul>' +
    '<div class="ex">工具是"流程的执行器";流程不清就上工具,只会把混乱自动化。</div>',
  pitfalls: '<div class="pit"><b>工具不能替代流程。</b>先理顺流程,再让工具固化;本末倒置则工具成摆设。</div>',
  quiz: [
    { type: 'choice', q: 'ITSM 工具的核心价值是?', options: ['替代流程设计', '让流程可追溯、数据可统计', '只管采购', '替代人员'], answer: 1, source: '高频', explain: '工具固化流程,使可追溯可统计;不替代流程设计。' }
  ],
  links: '<p>下一篇:<a href="#/l/tech/02-monitor">监控告警</a></p>'
});
