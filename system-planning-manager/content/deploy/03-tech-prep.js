SPM.registerLesson({
  id: 'deploy/03-tech-prep',
  module: 'deploy',
  order: 3,
  title: '技术准备:工具、监控与容灾',
  minutes: 4,
  keywords: ['技术准备', 'ITSM工具', '监控', '备份容灾', '演练'],
  concept: '<p>技术准备让"工具就绪能干活":部署 <gd data-term="itsm-tool">ITSM 工具</gd>与工单系统、配置 <gd data-term="sla-monitor">监控告警</gd>、建立备份容灾并<b>做演练</b>。</p>',
  exam: '<p><b>考纲定位:</b>部署篇,了解。</p>',
  core: '<ul>' +
    '<li><b>工具</b>:工单/CMDB/知识库平台上线,流程配置就绪。</li>' +
    '<li><b>监控</b>:指标采集、阈值告警、值班通知链。</li>' +
    '<li><b>容灾</b>:备份策略与 <gd data-term="rto">RTO</gd>/<gd data-term="rpo">RPO</gd> 对齐 SLA,并做恢复演练。</li>' +
    '</ul>' +
    '<div class="ex">"装了备份但没演练过"是最常见的容灾陷阱——真出事才发现恢复不了。</div>',
  pitfalls: '<div class="pit"><b>监控不是装上就行。</b>阈值要调到"既不漏报也不告警风暴",否则告警会被忽略。</div>',
  quiz: [
    { type: 'choice', q: '部署阶段技术准备应包含?', options: ['只买设备', '工具上线+监控+容灾演练', '只写文档', '只招人'], answer: 1, source: '高频', explain: '技术准备含工具、监控、备份容灾与演练。' }
  ],
  links: '<p>上一课:<a href="#/l/deploy/02-resource-prep">资源准备</a> · 下一课:<a href="#/l/deploy/04-delivery">服务交付</a></p>'
});
