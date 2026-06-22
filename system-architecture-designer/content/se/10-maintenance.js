SAD.registerLesson({
  id: 'se/10-maintenance',
  module: 'se',
  order: 10,
  title: '软件维护与质量',
  minutes: 5,
  keywords: ['软件维护', '改正性', '适应性', '完善性', '预防性', '可维护性', '质量模型'],
  concept: '<p>软件交付后还要长期维护。维护按目的分四类,合理的架构能显著降低维护成本——这正是质量属性"可修改性"的价值。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:四类维护占比、软件质量模型(ISO/McCall)。</p>',
  core: '<table><tr><th>维护类型</th><th>目的</th><th>占比</th></tr>' +
    '<tr><td>改正性</td><td>修bug</td><td>约20%</td></tr>' +
    '<tr><td>适应性</td><td>适应环境变化(OS/硬件)</td><td>约25%</td></tr>' +
    '<tr><td>完善性</td><td>加新功能/优化</td><td><b>最高,约50%+</b></td></tr>' +
    '<tr><td>预防性</td><td>为将来可维护而改善结构</td><td>约5%</td></tr></table>' +
    '<div class="ex"><b>完善性维护占比最大</b>(用户不断提新需求),所以"可修改性/可扩展性"的架构设计回报最高。质量模型(如ISO 25010)把质量拆成功能性、可靠性、易用性、效率、可维护性、可移植性等。</div>',
  pitfalls: '<div class="pit"><b>误解:维护主要是修bug(改正性最多)。</b>实际上<b>完善性维护占比最高</b>(增加/优化功能),改正性反而不是大头。</div>',
  quiz: [
    { type: 'choice', q: '在软件维护中通常占比最高的是?', options: ['改正性维护', '适应性维护', '完善性维护', '预防性维护'], answer: 2, source: '高频', explain: '完善性维护(增加/优化功能)通常占比最高。' },
    { type: 'choice', q: '为适应操作系统升级而修改软件,属于?', options: ['改正性', '适应性', '完善性', '预防性'], answer: 1, source: '高频', explain: '适应外部环境变化属于适应性维护。' }
  ],
  links: '<p>软件工程模块完。下一模块:<a href="#/l/pattern/01-overview">设计模式与原则</a> · 可修改性:<a href="#/l/quality/01-attributes">质量属性</a></p>'
});
