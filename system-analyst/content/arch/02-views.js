SAN.registerLesson({
  id: 'arch/02-views',
  module: 'arch',
  order: 2,
  title: '4+1 视图模型',
  minutes: 4,
  keywords: ['4+1视图', '逻辑视图', '开发视图', '过程视图', '物理视图', '场景'],
  concept: '<p>4+1 视图从不同角度描述架构,服务不同干系人;"+1"的场景(用例)把各视图串起来验证。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:5个视图各看什么。</p>',
  core: '<table><tr><th>视图</th><th>关注</th></tr>' +
    '<tr><td>逻辑视图</td><td>功能/对象(面向用户)</td></tr>' +
    '<tr><td>开发视图</td><td>代码模块组织(面向程序员)</td></tr>' +
    '<tr><td>过程视图</td><td>进程/并发/同步(性能)</td></tr>' +
    '<tr><td>物理视图</td><td>部署到硬件</td></tr>' +
    '<tr><td>+1 场景</td><td>用例贯穿验证</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:过程视图=开发视图。</b>开发视图看代码组织;过程视图看运行时并发与进程。</div>',
  quiz: [
    { type: 'choice', q: '关注运行时进程、并发与同步的是?', options: ['逻辑视图', '开发视图', '过程视图', '物理视图'], answer: 2, source: '高频', explain: '过程视图关注并发与同步。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/01-concept">软件架构是什么</a> · 下一课:<a href="#/l/arch/03-style">架构风格</a></p>'
});
