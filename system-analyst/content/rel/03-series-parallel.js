SAN.registerLesson({
  id: 'rel/03-series-parallel',
  module: 'rel',
  order: 3,
  title: '串并联系统可靠度计算',
  minutes: 5,
  key: true,
  keywords: ['可靠度', '串联', '并联', '冗余', '混合系统', '计算'],
  concept: '<p>系统可靠度由子系统可靠度与连接方式决定:<b>串联(全好才行)、并联(一好就行)</b>。案例送分计算,可用顶部计算器验证。</p>',
  exam: '<p><b>考纲定位:</b>案例高频计算。重点:串/并联公式、混合系统先并后串。</p>',
  core: '<table><tr><th>结构</th><th>公式</th></tr>' +
    '<tr><td>串联</td><td>R=R₁×R₂×…×Rₙ</td></tr>' +
    '<tr><td>并联(冗余)</td><td>R=1−(1−R₁)(1−R₂)…</td></tr></table>' +
    '<div class="ex">两个0.9:串联0.81,并联1−0.01=0.99。混合系统<b>先算并联块等效值,再按串联相乘</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:并联降低可靠度。</b>并联是冗余,只会<b>提高</b>可靠度;串联才越串越低。混合系统不能一锅乘。</div>',
  quiz: [
    { type: 'fill', q: '三个可靠度均0.9的部件串联,系统可靠度为____(3位小数)。', answer: ['0.729'], source: '高频计算', explain: '0.9³=0.729。' },
    { type: 'choice', q: '两个0.8的部件并联,系统可靠度为?', options: ['0.64', '0.80', '0.96', '1.6'], answer: 2, source: '高频计算', explain: '1−0.2×0.2=0.96。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/02-metrics">可靠性指标</a> · 下一课:<a href="#/l/rel/04-design">可靠性设计</a> · 案例:<a href="#/l/case/07-reliability-calc">可靠性计算</a></p>'
});
