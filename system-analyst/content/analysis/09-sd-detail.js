SAN.registerLesson({
  id: 'analysis/09-sd-detail',
  module: 'analysis',
  order: 9,
  title: '概要设计与详细设计',
  minutes: 5,
  keywords: ['概要设计', '详细设计', '模块结构图', '人机界面', '数据库设计', '高内聚低耦合'],
  concept: '<p>设计承接需求:<b>概要设计</b>定总体结构(模块划分、接口、数据库),<b>详细设计</b>定每个模块内部算法与界面。贯穿原则:<gd data-term="cohesion">高内聚</gd>、<gd data-term="coupling">低耦合</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:两阶段职责、设计内容。</p>',
  core: '<table><tr><th>阶段</th><th>主要内容</th></tr>' +
    '<tr><td>概要设计</td><td>模块结构图、模块接口、数据结构与数据库设计、总体架构</td></tr>' +
    '<tr><td>详细设计</td><td>各模块算法(流程图/PDL)、人机界面、出错处理</td></tr></table>' +
    '<div class="ex">从分析到设计:把"做什么(需求/分析模型)"转成"怎么做(模块与接口)",并守住高内聚低耦合。</div>',
  pitfalls: '<div class="pit"><b>误解:概要设计就把算法都写了。</b>概要定<b>结构与接口</b>,具体算法是<b>详细设计</b>的事,层次别混。</div>',
  quiz: [
    { type: 'choice', q: '模块结构图、模块划分与接口属于?', options: ['需求分析', '概要设计', '详细设计', '测试'], answer: 1, source: '高频', explain: '概要设计定总体结构与接口。' }
  ],
  links: '<p>分析设计模块完。下一模块:<a href="#/l/arch/01-concept">软件架构是什么</a></p>'
});
