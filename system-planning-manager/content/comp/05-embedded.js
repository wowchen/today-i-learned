SPM.registerLesson({
  id: 'comp/05-embedded',
  module: 'comp',
  order: 5,
  title: '嵌入式与新型计算形态',
  minutes: 4,
  keywords: ['嵌入式', '实时系统', '边缘计算'],
  concept: '<p><b>嵌入式系统</b>是专用、资源受限、常带实时性的计算系统(如工控、物联终端)。配合云与<b>边缘计算</b>,构成新型 IT 服务对象。</p>',
  exam: '<p><b>考纲定位:</b>基础了解,常以概念题出现。</p>',
  core: '<ul>' +
    '<li><b>实时系统</b>:硬实时(必须在截止期内,如刹车)与软实时(尽量及时,如视频)。</li>' +
    '<li><b>边缘计算</b>:把算力下沉到靠近数据源,降低时延、减轻中心压力。</li>' +
    '<li>服务管理对象正从机房服务器扩展到<gd data-term="cloud">云</gd>、终端、边缘设备。</li>' +
    '</ul>' +
    '<div class="ex">物联网/边缘场景里,服务台要受理的"设备"数量级远超传统机房。</div>',
  pitfalls: '<div class="pit"><b>硬实时≠速度快。</b>它强调"绝不超截止期",哪怕慢点也要可预测。</div>',
  quiz: [
    { type: 'choice', q: '把算力部署在靠近数据源处以降低时延的是?', options: ['云计算', '边缘计算', '网格计算', '大型机'], answer: 1, source: '高频', explain: '边缘计算下沉算力,减少时延与回传压力。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/04-os">操作系统</a> · 下一篇:<a href="#/l/net/01-model">网络模型</a></p>'
});
