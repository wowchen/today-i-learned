SAD.registerLesson({
  id: 'se/07-testing',
  module: 'se',
  order: 7,
  title: '软件测试',
  minutes: 5,
  keywords: ['软件测试', '黑盒', '白盒', '单元测试', '集成测试', '系统测试', '覆盖'],
  concept: '<p>测试是验证软件是否满足需求的活动。两大方法:<gd data-term="blackbox">黑盒</gd>(看功能)与<gd data-term="whitebox">白盒</gd>(看代码);按阶段分单元→集成→系统→验收。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:黑白盒方法、测试阶段、覆盖准则强弱。</p>',
  core: '<table><tr><th>方法</th><th>典型技术</th></tr>' +
    '<tr><td>黑盒</td><td>等价类划分、边界值、因果图、决策表</td></tr>' +
    '<tr><td>白盒</td><td>语句/判定/条件/路径覆盖</td></tr></table>' +
    '<div class="ex"><b>白盒覆盖强度(由弱到强):</b>语句覆盖 < 判定(分支)覆盖 < 条件覆盖 < 判定/条件覆盖 < 路径覆盖。<br><b>测试阶段:</b>单元(模块)→集成(接口)→系统(整体)→验收(用户)。</div>',
  pitfalls: '<div class="pit"><b>误解1:语句覆盖比判定覆盖强。</b>反了。语句覆盖最弱,<b>判定覆盖更强</b>,路径覆盖最强(但用例最多)。</div>' +
    '<div class="pit"><b>误解2:测试能证明软件没有缺陷。</b>测试只能<b>发现</b>缺陷,不能证明没有缺陷("测试通过"≠"无bug")。</div>',
  quiz: [
    { type: 'choice', q: '边界值分析属于哪类测试技术?', options: ['白盒', '黑盒', '灰盒压力', '静态分析'], answer: 1, source: '高频', explain: '边界值、等价类是黑盒测试技术。' },
    { type: 'choice', q: '下列白盒覆盖准则中最强的是?', options: ['语句覆盖', '判定覆盖', '条件覆盖', '路径覆盖'], answer: 3, source: '高频', explain: '路径覆盖最强(要求覆盖所有可执行路径)。' }
  ],
  links: '<p>上一课:<a href="#/l/se/06-uml">UML</a> · 下一课:<a href="#/l/se/08-cleanroom">净室与形式化</a> · 可靠性测试:<a href="#/l/rel/06-testing">可靠性测试</a></p>'
});
