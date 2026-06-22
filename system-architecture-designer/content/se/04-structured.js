SAD.registerLesson({
  id: 'se/04-structured',
  module: 'se',
  order: 4,
  title: '结构化分析与设计',
  minutes: 5,
  keywords: ['结构化', '数据流图', 'DFD', '数据字典', '耦合', '内聚', '模块化'],
  concept: '<p>结构化方法以<b>功能分解</b>为核心:用数据流图(DFD)描述加工,用模块结构图设计程序,追求<b>高内聚、低耦合</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:DFD要素、<gd data-term="coupling">耦合</gd>与<gd data-term="cohesion">内聚</gd>的等级排序。</p>',
  core: '<p><b>DFD四要素:</b>外部实体、加工(处理)、数据流、数据存储。</p>' +
    '<table><tr><th>指标</th><th>好的方向</th><th>由差到好(部分)</th></tr>' +
    '<tr><td>耦合</td><td>越低越好</td><td>内容→公共→外部→控制→标记→数据耦合</td></tr>' +
    '<tr><td>内聚</td><td>越高越好</td><td>偶然→逻辑→时间→…→功能内聚</td></tr></table>' +
    '<div class="ex">设计目标一句话:<b>高内聚、低耦合</b>——模块内部职责单一,模块之间尽量少依赖。这条原则贯穿到架构设计。</div>',
  pitfalls: '<div class="pit"><b>误解:耦合越多说明协作好。</b>相反,耦合越低越好。最差是<b>内容耦合</b>(一个模块直接改另一个内部),最好是<b>数据耦合</b>(只传数据)。</div>',
  quiz: [
    { type: 'choice', q: '软件设计追求的目标是?', options: ['高耦合高内聚', '低耦合低内聚', '高内聚低耦合', '低内聚高耦合'], answer: 2, source: '高频', explain: '高内聚、低耦合是模块设计的基本目标。' },
    { type: 'choice', q: '下列耦合中最松散(最好)的是?', options: ['内容耦合', '公共耦合', '控制耦合', '数据耦合'], answer: 3, source: '高频', explain: '数据耦合只传递数据,是最松散最理想的耦合。' }
  ],
  links: '<p>上一课:<a href="#/l/se/03-requirements">需求工程</a> · 下一课:<a href="#/l/se/05-oo">面向对象分析与设计</a></p>'
});
