SAN.registerLesson({
  id: 'arch/03-style',
  module: 'arch',
  order: 3,
  title: '架构风格',
  minutes: 5,
  key: true,
  keywords: ['架构风格', '管道过滤器', '分层', 'MVC', '事件驱动', '仓库', '黑板'],
  concept: '<p><gd data-term="arch-style">架构风格</gd>是某类系统通用组织方式。五大类:数据流、调用-返回、独立构件、虚拟机、仓库。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识高频。重点:常见风格与适用、按场景选型。</p>',
  core: '<table><tr><th>风格</th><th>适用</th></tr>' +
    '<tr><td>管道-过滤器(数据流)</td><td>编译器、批/流数据处理</td></tr>' +
    '<tr><td>分层(调用返回)</td><td>需解耦可移植,如协议栈</td></tr>' +
    '<tr><td>MVC</td><td>多视图交互应用</td></tr>' +
    '<tr><td>事件驱动(独立构件)</td><td>松耦合、异步、易扩展</td></tr>' +
    '<tr><td>黑板(仓库)</td><td>无确定算法、多知识源协作(语音识别)</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:风格只能选一种。</b>真实系统常<b>混合多种风格</b>;案例可指主风格并说明各部分组合。</div>',
  quiz: [
    { type: 'choice', q: '前后端分离、支持多视图的交互系统宜选?', options: ['管道-过滤器', 'MVC', '黑板', '批处理'], answer: 1, source: '场景', explain: 'MVC天然支持多视图。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/02-views">4+1视图</a> · 下一课:<a href="#/l/arch/04-quality">质量属性</a></p>'
});
