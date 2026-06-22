SAD.registerLesson({
  id: 'style/05-vm-repo',
  module: 'style',
  order: 5,
  title: '虚拟机与仓库风格(解释器 / 黑板)',
  minutes: 4,
  keywords: ['虚拟机', '解释器', '规则系统', '仓库', '黑板', '数据库', '共享数据'],
  concept: '<p>两类风格:<b>虚拟机</b>(解释器、规则系统——软件模拟一个执行环境)和<b>仓库</b>(以共享数据为中心,含数据库、<gd data-term="blackboard">黑板</gd>、超文本)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:解释器适用、黑板适用场景。</p>',
  core: '<table><tr><th>风格</th><th>特点</th><th>适用</th></tr>' +
    '<tr><td>解释器</td><td>软件模拟虚拟机执行指令/规则</td><td>JVM、脚本语言、专家系统</td></tr>' +
    '<tr><td>仓库(数据库)</td><td>中央数据 + 多个独立构件访问</td><td>管理信息系统</td></tr>' +
    '<tr><td>黑板</td><td>知识源围绕共享黑板协作,无确定算法</td><td>语音/图像识别、信号处理</td></tr></table>' +
    '<div class="ex"><b>黑板</b>适合"没有现成确定解法、要多专家逐步凑答案"的问题:各知识源看黑板、补线索,直到问题被解出。</div>',
  pitfalls: '<div class="pit"><b>误解:黑板风格适合流程明确的系统。</b>黑板恰恰用于<b>没有确定求解算法</b>的复杂问题(如语音识别);流程明确的用数据流/调用返回更合适。</div>',
  quiz: [
    { type: 'choice', q: '适合"无确定算法、需多知识源协作求解"(如语音识别)的风格是?', options: ['管道-过滤器', '黑板', '分层', 'MVC'], answer: 1, source: '高频', explain: '黑板风格适合无确定解法、多知识源协作的问题。' },
    { type: 'choice', q: 'JVM、脚本解释执行最贴近哪种风格?', options: ['解释器(虚拟机)', '仓库', '事件驱动', '批处理'], answer: 0, source: '高频', explain: '解释器风格用软件模拟执行环境,JVM是典型。' }
  ],
  links: '<p>上一课:<a href="#/l/style/04-independent">独立构件</a> · 下一课:<a href="#/l/style/06-compare">风格选型与比较</a></p>'
});
