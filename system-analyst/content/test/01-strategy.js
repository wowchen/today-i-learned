SAN.registerLesson({
  id: 'test/01-strategy',
  module: 'test',
  order: 1,
  title: '系统测试策略',
  minutes: 4,
  keywords: ['系统测试', '测试策略', 'V模型', '测试计划', '验收'],
  concept: '<p>系统测试从整体验证系统满足需求。策略上强调<b>测试与开发同步规划</b>(V模型:每个开发阶段对应一个测试层次)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:V模型对应关系、测试计划要素。</p>',
  core: '<div class="ex"><b>V模型对应:</b>需求↔验收测试,概要设计↔集成测试,详细设计↔单元测试。即"右边的测试在左边对应阶段就该规划好"。</div>' +
    '<p>测试计划应明确范围、策略、环境、用例、通过准则与进度。</p>',
  pitfalls: '<div class="pit"><b>误解:测试是编码后才开始的事。</b>测试应在<b>需求/设计阶段就规划</b>(V模型),越早介入发现缺陷越便宜。</div>',
  quiz: [
    { type: 'choice', q: 'V模型中,需求阶段对应的测试是?', options: ['单元测试', '集成测试', '验收测试', '冒烟测试'], answer: 2, source: '高频', explain: '需求↔验收测试。' }
  ],
  links: '<p>下一课:<a href="#/l/test/02-methods">测试方法</a> · 软件测试:<a href="#/l/se/04-testing">黑白盒</a></p>'
});
