SAD.registerLesson({
  id: 'style/02-dataflow',
  module: 'style',
  order: 2,
  title: '数据流风格(批处理 / 管道-过滤器)',
  minutes: 4,
  keywords: ['数据流', '管道', '过滤器', '批处理', '编译器', '流处理'],
  concept: '<p>数据流风格里,数据像水一样从一个处理单元流到下一个。两种:批处理(整批传递)和<gd data-term="pipe-filter">管道-过滤器</gd>(边到边处理、可流式)。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识高频。重点:管道-过滤器的优缺点、与批处理的区别。</p>',
  core: '<p><b>管道-过滤器:</b>过滤器(处理)独立,管道(连接)传数据,过滤器之间互不知道彼此。</p>' +
    '<table><tr><th>优点</th><th>缺点</th></tr>' +
    '<tr><td>过滤器可复用、可重组;支持并行;松耦合</td><td>不适合交互式;数据格式转换有开销;不易共享全局状态</td></tr></table>' +
    '<div class="ex">典型:编译器(词法→语法→语义→生成)、Unix 管道 <code>cat|grep|sort</code>、大数据流处理。批处理则是"上一步全做完再给下一步"。</div>',
  pitfalls: '<div class="pit"><b>误解:管道-过滤器适合交互式系统。</b>它擅长<b>批量/流式数据变换</b>,对需要频繁用户交互、共享状态的系统并不合适。</div>',
  quiz: [
    { type: 'choice', q: '管道-过滤器风格的主要优点是?', options: ['适合强交互', '过滤器可复用、易重组与并行', '便于共享全局状态', '无数据格式开销'], answer: 1, source: '高频', explain: '过滤器独立、可复用重组、支持并行是其主要优点。' }
  ],
  links: '<p>上一课:<a href="#/l/style/01-overview">风格总览</a> · 下一课:<a href="#/l/style/03-call-return">调用-返回风格</a></p>'
});
