SPM.registerLesson({
  id: 'tech/04-cloud',
  module: 'tech',
  order: 4,
  title: '云服务模式',
  minutes: 4,
  keywords: ['云计算', 'IaaS', 'PaaS', 'SaaS', '弹性'],
  concept: '<p><gd data-term="cloud">云计算</gd>按需提供弹性共享资源,模式分 <b>IaaS(基础设施)、PaaS(平台)、SaaS(软件)</b>。云改变运维对象:从机房服务器到云资源与服务级别。</p>',
  exam: '<p><b>考纲定位:</b>工具篇,选择题考三种模式。</p>',
  core: '<ul>' +
    '<li><b>IaaS</b>:提供计算/存储/网络(如虚拟机)。</li>' +
    '<li><b>PaaS</b>:提供开发运行平台(如数据库、中间件)。</li>' +
    '<li><b>SaaS</b>:提供成品软件(如在线办公)。</li>' +
    '<li>云带来弹性、按需,但也带来多云管理与安全责任划分。</li>' +
    '</ul>' +
    '<div class="ex">云上"责任共担":IaaS 你管操作系统以上,SaaS 供应商几乎全管;安全边界随模式变化。</div>',
  pitfalls: '<div class="pit"><b>上云不等于无安全责任。</b>尤其 IaaS/PaaS,数据与配置安全仍由用户负责。</div>',
  quiz: [
    { type: 'choice', q: '提供成品软件、用户即开即用的云模式是?', options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'], answer: 2, source: '高频', explain: 'SaaS 提供成品软件,开箱即用。' }
  ],
  links: '<p>上一课:<a href="#/l/tech/03-automation">自动化运维</a> · 下一课:<a href="#/l/tech/05-aiops-devops">AIOps 与 DevOps</a></p>'
});
