SAD.registerLesson({
  id: 'case/04-reliability-calc',
  module: 'case',
  order: 4,
  title: '可靠性计算专项',
  minutes: 5,
  key: true,
  keywords: ['可靠性计算', '串联', '并联', '混合系统', '可用性', 'MTBF', '案例'],
  concept: '<p>可靠性计算是案例的<b>送分题</b>:串联连乘、并联补乘、混合系统先并后串。配合顶部"可靠度计算器"练手。</p>',
  exam: '<p><b>考纲定位:</b>案例高频计算。重点:串/并联公式、混合系统、可用性公式。</p>',
  core: '<p><b>公式速查:</b>串联 R=∏Rᵢ;并联 R=1−∏(1−Rᵢ);可用性 A=MTBF/(MTBF+MTTR)。</p>' +
    '<div class="ex"><b>完整例题:</b>系统由 A 串联(B 与 C 并联)再串联 D 组成。R_A=0.9,R_B=R_C=0.8,R_D=0.95。<br>' +
    '① B、C 并联:R_BC = 1−(1−0.8)(1−0.8) = 1−0.04 = <b>0.96</b>。<br>' +
    '② 整体串联:R = R_A × R_BC × R_D = 0.9 × 0.96 × 0.95 ≈ <b>0.8208</b>。<br>' +
    '③ 结论:系统可靠度约 82.1%,若需更高,可对薄弱的 A 或 D 也做并联冗余。</div>',
  pitfalls: '<div class="pit"><b>误解:混合系统直接全部相乘。</b>必须<b>先算并联子块的等效可靠度</b>,再与串联部分相乘。先并后串,别一锅乘。</div>',
  quiz: [
    { type: 'fill', q: '两部件并联,R均为0.9,等效可靠度为____。', answer: ['0.99'], source: '案例', explain: '1−(1−0.9)(1−0.9)=1−0.01=0.99。' },
    { type: 'choice', q: '提升一个"串联薄弱环节"可靠度,最有效的措施是?', options: ['删掉它', '对其做并联冗余', '提高其他环节', '什么都不做'], answer: 1, source: '案例', explain: '对薄弱串联环节做并联冗余可显著提升其等效可靠度。' }
  ],
  links: '<p>上一课:<a href="#/l/case/03-atam-case">ATAM案例</a> · 下一课:<a href="#/l/case/05-performance-calc">性能计算专项</a> · 原理:<a href="#/l/rel/03-series-parallel">串并联可靠度</a></p>'
});
