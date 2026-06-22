SAN.registerLesson({
  id: 'se/05-maintenance',
  module: 'se',
  order: 5,
  title: '软件维护',
  minutes: 4,
  keywords: ['软件维护', '改正性', '适应性', '完善性', '预防性', '可维护性'],
  concept: '<p>软件交付后长期维护,按目的分四类。合理设计能显著降维护成本(可修改性)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:四类维护占比。</p>',
  core: '<table><tr><th>类型</th><th>目的</th><th>占比</th></tr>' +
    '<tr><td>改正性</td><td>修bug</td><td>约20%</td></tr>' +
    '<tr><td>适应性</td><td>适应环境变化</td><td>约25%</td></tr>' +
    '<tr><td>完善性</td><td>加功能/优化</td><td><b>最高,约50%+</b></td></tr>' +
    '<tr><td>预防性</td><td>为将来可维护改善结构</td><td>约5%</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:维护主要是修bug。</b>实际<b>完善性维护占比最高</b>。</div>',
  quiz: [
    { type: 'choice', q: '软件维护中通常占比最高的是?', options: ['改正性', '适应性', '完善性', '预防性'], answer: 2, source: '高频', explain: '完善性维护占比最高。' }
  ],
  links: '<p>上一课:<a href="#/l/se/04-testing">软件测试</a> · 下一课:<a href="#/l/se/06-pm-schedule">项目进度管理</a></p>'
});
