SAD.registerLesson({
  id: 'rel/01-concept',
  module: 'rel',
  order: 1,
  title: '可靠性基本概念',
  minutes: 4,
  key: true,
  keywords: ['可靠性', '可用性', '可维护性', '失效', '故障', '错误'],
  concept: '<p><gd data-term="reliability">可靠性</gd>是系统在规定条件和时间内完成规定功能的能力。它与可用性、可维护性同属"可信性"家族,是架构的关键质量属性。</p>',
  exam: '<p><b>考纲定位:</b>案例(计算)、综合知识。重点:可靠性/可用性/可维护性区分、错误-故障-失效链。</p>',
  core: '<p><b>三个易混概念(因果链):</b></p>' +
    '<table><tr><th>术语</th><th>含义</th></tr>' +
    '<tr><td>错误 Error</td><td>人为犯的错(写错代码)</td></tr>' +
    '<tr><td>故障/缺陷 Fault</td><td>错误导致的系统内部缺陷(bug)</td></tr>' +
    '<tr><td>失效 Failure</td><td>故障被触发、对外表现出功能不符</td></tr></table>' +
    '<div class="ex">链条:人犯<b>错误</b> → 留下<b>故障(缺陷)</b> → 运行时触发 → 发生<b>失效</b>。可靠性关注的是"多久不失效"。</div>',
  pitfalls: '<div class="pit"><b>误解:可靠性=可用性。</b>可靠性是"持续不出错运行的能力(看MTBF)";可用性是"需要时能用的比例(MTBF与MTTR都看)"。一个修复极慢的系统可能可靠性尚可但可用性差。</div>',
  quiz: [
    { type: 'choice', q: '程序员写错代码,该"错误"导致代码中存在的缺陷称为?', options: ['失效', '故障(缺陷)', '风险', '事故'], answer: 1, source: '高频', explain: '错误→故障(缺陷)→失效;代码中的缺陷是故障。' }
  ],
  links: '<p>下一课:<a href="#/l/rel/02-metrics">可靠性指标</a> · 可用性战术:<a href="#/l/quality/03-tactics">架构战术</a></p>'
});
