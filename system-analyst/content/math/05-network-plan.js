SAN.registerLesson({
  id: 'math/05-network-plan',
  module: 'math',
  order: 5,
  title: '网络计划技术',
  minutes: 5,
  key: true,
  keywords: ['网络计划', '关键路径', '总时差', '自由时差', 'PERT', '工期'],
  concept: '<p>网络计划把活动排成网络图,求<gd data-term="critical-path">关键路径</gd>(最长路径=最短工期)。系分案例高频计算。可用顶部 PERT 计算器。</p>',
  exam: '<p><b>考纲定位:</b>系分案例高频。重点:关键路径、总时差/自由时差、PERT期望工期。</p>',
  core: '<div class="ex"><b>关键路径:</b>从起点到终点的最长路径,其上活动总时差=0。<br><b>总时差</b>=不影响总工期前提下活动可拖延的时间;<b>自由时差</b>=不影响后续活动最早开始的可拖延时间。<br><b>PERT:</b>te=(O+4M+P)/6。</div>',
  pitfalls: '<div class="pit"><b>误解:压缩任意活动都缩短工期。</b>只有压<b>关键路径</b>上的活动才缩短总工期。压缩后关键路径可能转移,要重新找。</div>',
  quiz: [
    { type: 'choice', q: '关键路径上活动的总时差为?', options: ['最大', '0', '不确定', '负'], answer: 1, source: '高频', explain: '关键路径上活动总时差为0。' },
    { type: 'fill', q: 'PERT中O=4,M=6,P=14,期望工期te=____。', answer: ['7'], source: '高频计算', explain: '(4+24+14)/6=42/6=7。' }
  ],
  links: '<p>上一课:<a href="#/l/math/04-queuing">排队论</a> · 下一课:<a href="#/l/math/06-forecast">预测技术</a> · 进度:<a href="#/l/se/06-pm-schedule">项目进度管理</a></p>'
});
