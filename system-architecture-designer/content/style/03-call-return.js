SAD.registerLesson({
  id: 'style/03-call-return',
  module: 'style',
  order: 3,
  title: '调用-返回风格(分层 / MVC)',
  minutes: 5,
  key: true,
  keywords: ['调用返回', '分层', 'MVC', '主程序子程序', '面向对象', '协议栈'],
  concept: '<p>调用-返回风格靠"谁调用谁、调完返回"组织系统,最常考两种:<gd data-term="layered">分层架构</gd>和 <gd data-term="mvc">MVC</gd>。</p>',
  exam: '<p><b>考纲定位:</b>案例必考、综合知识高频。重点:分层与MVC的优缺点、各自适用。</p>',
  core: '<table><tr><th>风格</th><th>要点</th><th>优/缺</th></tr>' +
    '<tr><td>分层</td><td>每层只用下层、为上层服务</td><td>优:解耦、可移植、可替换某层;缺:跨层调用受限、性能略损</td></tr>' +
    '<tr><td>MVC</td><td>模型/视图/控制器分离</td><td>优:多视图、易维护;缺:不当拆分增加复杂度</td></tr></table>' +
    '<div class="ex">分层经典例:网络协议栈、操作系统、企业应用(表现层-业务层-数据层)。MVC 是 Web 框架的主流组织方式。</div>',
  pitfalls: '<div class="pit"><b>误解:分层架构性能一定差。</b>分层带来一点调用开销,但换来<b>清晰解耦、易维护与可替换</b>;多数系统这点开销可忽略,别为"省一层"牺牲结构。</div>',
  quiz: [
    { type: 'choice', q: '关于分层架构,正确的是?', options: ['每层可随意调用任意层', '每层只为上层服务、只用下层服务', '没有解耦作用', '不能替换某一层'], answer: 1, source: '高频', explain: '分层架构中每层只依赖下层、服务上层,利于解耦与替换。' },
    { type: 'choice', q: 'MVC把系统分为哪三部分?', options: ['模块/视图/配置', '模型/视图/控制器', '主程序/子程序/数据', '前端/后端/数据库'], answer: 1, source: '高频', explain: 'MVC = 模型(Model)、视图(View)、控制器(Controller)。' }
  ],
  links: '<p>上一课:<a href="#/l/style/02-dataflow">数据流风格</a> · 下一课:<a href="#/l/style/04-independent">独立构件风格</a></p>'
});
