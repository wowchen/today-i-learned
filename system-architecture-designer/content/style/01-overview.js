SAD.registerLesson({
  id: 'style/01-overview',
  module: 'style',
  order: 1,
  title: '架构风格总览',
  minutes: 5,
  key: true,
  keywords: ['架构风格', '分类', '数据流', '调用返回', '独立构件', '虚拟机', '仓库'],
  concept: '<p><gd data-term="arch-style">架构风格</gd>是描述某类系统通用组织方式的惯用模式。经典分五大类,先建立全景,后面逐个展开。</p>',
  exam: '<p><b>考纲定位:</b>本模块案例必考、综合知识高频。重点:五大类各含哪些风格、典型例子。</p>',
  core: '<table><tr><th>大类</th><th>包含风格</th><th>例</th></tr>' +
    '<tr><td>数据流</td><td>批处理、管道-过滤器</td><td>编译器、流处理</td></tr>' +
    '<tr><td>调用-返回</td><td>主程序/子程序、面向对象、分层、MVC</td><td>协议栈、Web分层</td></tr>' +
    '<tr><td>独立构件</td><td>进程通信、事件驱动(隐式调用)</td><td>消息系统、GUI</td></tr>' +
    '<tr><td>虚拟机</td><td>解释器、规则系统</td><td>JVM、专家系统</td></tr>' +
    '<tr><td>仓库</td><td>数据库系统、黑板、超文本</td><td>DBMS、语音识别</td></tr></table>' +
    '<div class="ex">考试套路:给一段系统描述,判断它属于哪种风格、为什么、优缺点是什么。先把这张分类表记牢。</div>',
  pitfalls: '<div class="pit"><b>误解:架构风格和设计模式一回事。</b>风格是<b>系统级</b>的整体组织(粒度大);设计模式是<b>局部</b>的类/对象级解法(粒度小)。</div>',
  quiz: [
    { type: 'choice', q: '分层架构、MVC属于哪一类架构风格?', options: ['数据流', '调用-返回', '独立构件', '仓库'], answer: 1, source: '高频', explain: '分层、MVC、面向对象属于调用-返回风格。' },
    { type: 'choice', q: '编译器常采用的架构风格是?', options: ['管道-过滤器(数据流)', '黑板', 'MVC', '事件驱动'], answer: 0, source: '高频', explain: '编译器各阶段串成数据流,是管道-过滤器风格的典型。' }
  ],
  links: '<p>下一课:<a href="#/l/style/02-dataflow">数据流风格</a></p>'
});
