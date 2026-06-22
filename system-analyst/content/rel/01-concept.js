SAN.registerLesson({
  id: 'rel/01-concept',
  module: 'rel',
  order: 1,
  title: '可靠性基本概念',
  minutes: 4,
  keywords: ['可靠性', '可用性', '错误', '故障', '失效'],
  concept: '<p><gd data-term="reliability">可靠性</gd>是系统在规定条件和时间内完成规定功能的能力。注意区分错误→故障→失效。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:错误-故障-失效链、可靠性vs可用性。</p>',
  core: '<table><tr><th>术语</th><th>含义</th></tr>' +
    '<tr><td>错误 Error</td><td>人犯的错(写错代码)</td></tr>' +
    '<tr><td>故障 Fault</td><td>错误留下的缺陷(bug)</td></tr>' +
    '<tr><td>失效 Failure</td><td>故障被触发、对外表现异常</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:可靠性=可用性。</b>可靠性看"持续不出错(MTBF)";可用性看"需要时能用的比例(MTBF与MTTR都看)"。</div>',
  quiz: [
    { type: 'choice', q: '代码中存在的缺陷(bug)称为?', options: ['失效', '故障', '风险', '事故'], answer: 1, source: '高频', explain: '错误→故障(缺陷)→失效。' }
  ],
  links: '<p>下一课:<a href="#/l/rel/02-metrics">可靠性指标</a></p>'
});
