SAD.registerLesson({
  id: 'rel/02-metrics',
  module: 'rel',
  order: 2,
  title: '可靠性指标(MTBF / MTTR / 可用性)',
  minutes: 5,
  key: true,
  keywords: ['MTBF', 'MTTR', '可用性', '几个9', '失效率', '可靠性指标'],
  concept: '<p>三个核心指标:<gd data-term="mtbf">MTBF</gd>(平均无故障时间)、<gd data-term="mttr">MTTR</gd>(平均修复时间)、<gd data-term="availability">可用性</gd> A = MTBF/(MTBF+MTTR)。</p>',
  exam: '<p><b>考纲定位:</b>案例计算高频。重点:可用性公式、"几个9"换算。</p>',
  core: '<p><b>可用性公式:</b> A = MTBF / (MTBF + MTTR)。MTBF越大、MTTR越小,可用性越高。</p>' +
    '<table><tr><th>可用性</th><th>"几个9"</th><th>年停机约</th></tr>' +
    '<tr><td>99%</td><td>两个9</td><td>≈3.65天</td></tr>' +
    '<tr><td>99.9%</td><td>三个9</td><td>≈8.76小时</td></tr>' +
    '<tr><td>99.99%</td><td>四个9</td><td>≈52.6分钟</td></tr>' +
    '<tr><td>99.999%</td><td>五个9</td><td>≈5.26分钟</td></tr></table>' +
    '<div class="ex">例:MTBF=1000小时、MTTR=10小时,则 A=1000/1010≈<b>99.0%</b>。想提可用性,既可"少坏"(↑MTBF)也可"快修"(↓MTTR)。</div>',
  pitfalls: '<div class="pit"><b>误解:只靠提高MTBF才能提升可用性。</b>降低 MTTR(快速恢复:监控+自动故障转移)同样有效,且往往更现实——"修得快"和"坏得少"都管用。</div>',
  quiz: [
    { type: 'fill', q: 'MTBF=990小时,MTTR=10小时,系统可用性约为____%。', answer: ['99'], source: '高频计算', explain: 'A=990/(990+10)=990/1000=99%。' },
    { type: 'choice', q: '"四个9"(99.99%)的年停机时间约为?', options: ['3.65天', '8.76小时', '52.6分钟', '5.26分钟'], answer: 2, source: '高频', explain: '99.99%对应全年约52.6分钟停机。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/01-concept">可靠性概念</a> · 下一课:<a href="#/l/rel/03-series-parallel">串并联可靠度计算</a></p>'
});
