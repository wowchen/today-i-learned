SAN.registerLesson({
  id: 'case/07-reliability-calc',
  module: 'case',
  order: 7,
  title: '可靠性计算专项',
  minutes: 5,
  keywords: ['可靠性计算', '串联', '并联', '混合', '可用性', '案例'],
  concept: '<p>可靠性计算是案例送分:串联连乘、并联补乘、混合先并后串。配合顶部"可靠度计算器"。</p>',
  exam: '<p><b>考纲定位:</b>案例计算。重点:串/并联公式、混合系统、可用性。</p>',
  core: '<div class="ex"><b>例:</b>A 串联(B 并 C)再串 D。R_A=0.9,R_B=R_C=0.8,R_D=0.95。<br>① B、C 并联=1−0.2×0.2=<b>0.96</b>;② 整体=0.9×0.96×0.95≈<b>0.8208</b>。<br>可用性 A=MTBF/(MTBF+MTTR)。</div>',
  pitfalls: '<div class="pit"><b>误解:混合系统全部相乘。</b>必须<b>先算并联块等效值,再按串联相乘</b>,先并后串。</div>',
  quiz: [
    { type: 'choice', q: '两个0.9的部件并联,等效可靠度为?', options: ['0.81', '0.90', '0.99', '1.8'], answer: 2, source: '案例计算', explain: '1−0.1×0.1=0.99。' }
  ],
  links: '<p>上一课:<a href="#/l/case/06-math-calc">数学计算</a> · 下一课:<a href="#/l/case/08-arch-case">架构案例</a> · 原理:<a href="#/l/rel/03-series-parallel">串并联可靠度</a></p>'
});
