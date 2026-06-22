SAN.registerLesson({
  id: 'rel/02-metrics',
  module: 'rel',
  order: 2,
  title: '可靠性指标(MTBF / MTTR / 可用性)',
  minutes: 5,
  key: true,
  keywords: ['MTBF', 'MTTR', '可用性', '几个9', '失效率'],
  concept: '<p>三个核心指标:<gd data-term="mtbf">MTBF</gd>(平均无故障时间)、<gd data-term="mttr">MTTR</gd>(平均修复时间)、<gd data-term="availability">可用性</gd> A=MTBF/(MTBF+MTTR)。</p>',
  exam: '<p><b>考纲定位:</b>案例计算高频。重点:可用性公式、"几个9"。</p>',
  core: '<table><tr><th>可用性</th><th>年停机约</th></tr>' +
    '<tr><td>99.9%(三个9)</td><td>≈8.76小时</td></tr>' +
    '<tr><td>99.99%(四个9)</td><td>≈52.6分钟</td></tr></table>' +
    '<div class="ex">例:MTBF=990h、MTTR=10h,A=990/1000=<b>99%</b>。提可用性既可少坏(↑MTBF)也可快修(↓MTTR)。</div>',
  pitfalls: '<div class="pit"><b>误解:只能靠提高MTBF。</b>降低MTTR(快速恢复:监控+自动故障转移)同样有效,往往更现实。</div>',
  quiz: [
    { type: 'fill', q: 'MTBF=990h,MTTR=10h,可用性约为____%。', answer: ['99'], source: '高频计算', explain: '990/(990+10)=99%。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/01-concept">可靠性概念</a> · 下一课:<a href="#/l/rel/03-series-parallel">串并联计算</a></p>'
});
