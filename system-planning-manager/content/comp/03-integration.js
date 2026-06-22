SPM.registerLesson({
  id: 'comp/03-integration',
  module: 'comp',
  order: 3,
  title: '系统集成基础',
  minutes: 5,
  keywords: ['系统集成', '设备集成', '应用集成', '数据集成'],
  concept: '<p><b>系统集成</b>是把硬件、软件、网络、数据按需求组合成一个协同整体的工程。分设备/网络集成、数据集成、应用集成等层次。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,理解层次划分即可。</p>',
  core: '<ul>' +
    '<li><b>设备/网络集成</b>:机房、布线、网络、主机存储的物理与平台整合。</li>' +
    '<li><b>数据集成</b>:打通异构数据源,统一格式与口径(ETL、数据交换)。</li>' +
    '<li><b>应用集成</b>:让多个系统互通(接口、消息、API、企业服务总线 ESB)。</li>' +
    '</ul>' +
    '<div class="ex">集成项目交付后即进入<gd data-term="lifecycle">服务生命周期</gd>,运维团队接手保障。</div>',
  pitfalls: '<div class="pit"><b>集成不是简单堆设备。</b>关键在"互联互通与协同",数据和应用层的打通才是难点。</div>',
  quiz: [
    { type: 'choice', q: '打通多个异构系统使其互相调用,属于?', options: ['设备集成', '应用集成', '机房建设', '布线'], answer: 1, source: '高频', explain: '应用集成解决系统间互通,常用接口/消息/ESB。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/02-software">软件基础</a> · 下一课:<a href="#/l/comp/04-os">操作系统</a></p>'
});
