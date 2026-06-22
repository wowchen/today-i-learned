SAN.registerLesson({
  id: 'case/06-math-calc',
  module: 'case',
  order: 6,
  title: '数学计算专项',
  minutes: 5,
  key: true,
  keywords: ['决策树', '期望值', '网络计划', '关键路径', '线性规划', '排队', '案例'],
  concept: '<p>系分案例的数学计算是<b>送分题</b>:决策树期望值、网络计划关键路径、排队利用率等。套公式+写过程即可。配合顶部计算器练。</p>',
  exam: '<p><b>考纲定位:</b>案例高频计算。重点:EMV、关键路径/PERT、排队利用率。</p>',
  core: '<div class="ex"><b>例1(决策树):</b>方案A:0.6×500+0.4×(−100)=<b>260</b>;方案B:200。选 A。<br>' +
    '<b>例2(网络计划):</b>列各路径长度,最长者为<gd data-term="critical-path">关键路径</gd>=最短工期;PERT te=(O+4M+P)/6。<br>' +
    '<b>例3(排队):</b>ρ=λ/μ,如 60/100=0.6。</div>',
  pitfalls: '<div class="pit"><b>误解:计算只写答案。</b>案例按采分点给分,必须<b>写公式、代入、结论</b>,只写数字可能不得满分。</div>',
  quiz: [
    { type: 'fill', q: '决策方案:0.7×1000+0.3×(−200),期望值EMV=____。', answer: ['640'], source: '案例计算', explain: '700−60=640。' },
    { type: 'fill', q: 'PERT中O=5,M=8,P=11,期望工期te=____。', answer: ['8'], source: '案例计算', explain: '(5+32+11)/6=48/6=8。' }
  ],
  links: '<p>上一课:<a href="#/l/case/05-req-case">需求分析案例</a> · 下一课:<a href="#/l/case/07-reliability-calc">可靠性计算</a> · 原理:<a href="#/l/math/03-decision">决策论</a></p>'
});
