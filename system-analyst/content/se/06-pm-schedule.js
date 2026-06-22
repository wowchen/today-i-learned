SAN.registerLesson({
  id: 'se/06-pm-schedule',
  module: 'se',
  order: 6,
  title: '项目进度管理',
  minutes: 5,
  key: true,
  keywords: ['进度管理', '关键路径', '网络图', 'PERT', '甘特图', '总时差'],
  concept: '<p>进度管理把活动排成网络图,找出<gd data-term="critical-path">关键路径</gd>(最长路径=最短工期)。PERT 用三点估算求期望工期。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例计算高频。重点:关键路径、总时差、PERT。可用顶部计算器。</p>',
  core: '<div class="ex"><b>PERT:</b>期望工期 te=(O+4M+P)/6,标准差 σ=(P−O)/6。<br><b>总时差:</b>不影响总工期前提下活动可拖延的时间;关键路径上活动总时差=0。<br>关键路径决定项目最短完成时间,压缩工期要压关键路径上的活动。</div>',
  pitfalls: '<div class="pit"><b>误解:压缩任意活动都能缩短工期。</b>只有压缩<b>关键路径</b>上的活动才缩短总工期;压非关键活动只是消耗其时差。</div>',
  quiz: [
    { type: 'fill', q: 'PERT中O=6,M=9,P=18,期望工期te=____。', answer: ['10'], source: '高频计算', explain: '(6+4×9+18)/6=60/6=10。' },
    { type: 'choice', q: '关键路径上活动的总时差为?', options: ['最大', '0', '不确定', '负数'], answer: 1, source: '高频', explain: '关键路径上活动总时差为0。' }
  ],
  links: '<p>上一课:<a href="#/l/se/05-maintenance">软件维护</a> · 下一课:<a href="#/l/se/07-pm-cost">项目成本管理</a> · 网络计划:<a href="#/l/math/05-network-plan">网络计划技术</a></p>'
});
