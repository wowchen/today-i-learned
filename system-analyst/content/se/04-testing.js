SAN.registerLesson({
  id: 'se/04-testing',
  module: 'se',
  order: 4,
  title: '软件测试',
  minutes: 5,
  key: true,
  keywords: ['软件测试', '黑盒', '白盒', '覆盖', '单元', '集成', '系统'],
  concept: '<p>测试验证软件是否满足需求。两大方法:<gd data-term="blackbox">黑盒</gd>(看功能)与<gd data-term="whitebox">白盒</gd>(看代码);按阶段单元→集成→系统→验收。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:黑白盒技术、覆盖准则强弱、测试阶段。</p>',
  core: '<table><tr><th>方法</th><th>技术</th></tr>' +
    '<tr><td>黑盒</td><td>等价类、边界值、因果图、决策表</td></tr>' +
    '<tr><td>白盒</td><td>语句/判定/条件/路径覆盖</td></tr></table>' +
    '<div class="ex">白盒覆盖由弱到强:语句<判定<条件<判定条件<路径。</div>',
  pitfalls: '<div class="pit"><b>误解:语句覆盖比判定覆盖强。</b>反了,语句覆盖最弱,路径覆盖最强。测试只能发现缺陷,不能证明无缺陷。</div>',
  quiz: [
    { type: 'choice', q: '边界值分析属于?', options: ['白盒', '黑盒', '灰盒', '静态分析'], answer: 1, source: '高频', explain: '边界值、等价类是黑盒技术。' },
    { type: 'choice', q: '最强的白盒覆盖准则是?', options: ['语句覆盖', '判定覆盖', '条件覆盖', '路径覆盖'], answer: 3, source: '高频', explain: '路径覆盖最强。' }
  ],
  links: '<p>上一课:<a href="#/l/se/03-quality">软件质量</a> · 下一课:<a href="#/l/se/05-maintenance">软件维护</a> · 系统测试:<a href="#/l/test/01-strategy">测试策略</a></p>'
});
