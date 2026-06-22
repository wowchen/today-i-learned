SAD.registerLesson({
  id: 'arch/02-views',
  module: 'arch',
  order: 2,
  title: '4+1 视图模型',
  minutes: 5,
  key: true,
  keywords: ['4+1视图', '逻辑视图', '开发视图', '过程视图', '物理视图', '场景'],
  concept: '<p>一张图说不清复杂架构,<gd data-term="view-model">4+1 视图</gd>从不同角度描述,服务不同干系人;"+1"的场景(用例)把各视图串起来验证。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识高频。重点:5 个视图各看什么、面向谁。</p>',
  core: '<table><tr><th>视图</th><th>关注</th><th>面向</th></tr>' +
    '<tr><td>逻辑视图</td><td>功能/对象/类</td><td>最终用户(功能)</td></tr>' +
    '<tr><td>开发视图</td><td>模块/包/分层组织</td><td>程序员</td></tr>' +
    '<tr><td>过程视图</td><td>进程/线程/并发/同步</td><td>系统集成者(性能)</td></tr>' +
    '<tr><td>物理视图</td><td>软件到硬件的部署映射</td><td>系统工程师</td></tr>' +
    '<tr><td>+1 场景</td><td>用例,贯穿验证各视图</td><td>所有人</td></tr></table>' +
    '<div class="ex">记忆:逻辑(功能)、开发(代码)、过程(并发)、物理(部署),场景(用例)把它们串起来一致性校验。</div>',
  pitfalls: '<div class="pit"><b>误解:过程视图=开发视图。</b>开发视图看<b>代码模块组织</b>;过程视图看<b>运行时的进程/线程与并发</b>,关注性能与同步,二者角度不同。</div>',
  quiz: [
    { type: 'choice', q: '4+1视图中,关注运行时进程、并发与同步的是?', options: ['逻辑视图', '开发视图', '过程视图', '物理视图'], answer: 2, source: '高频', explain: '过程视图关注进程/线程、并发与同步。' },
    { type: 'choice', q: '描述软件如何部署到硬件节点的是?', options: ['逻辑视图', '物理视图', '开发视图', '场景'], answer: 1, source: '高频', explain: '物理视图描述软件到硬件的部署映射。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/01-concept">软件架构是什么</a> · 下一课:<a href="#/l/arch/03-absd">ABSD</a> · UML:<a href="#/l/se/06-uml">UML建模</a></p>'
});
