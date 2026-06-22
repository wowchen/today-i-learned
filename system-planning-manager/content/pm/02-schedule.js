SPM.registerLesson({
  id: 'pm/02-schedule',
  module: 'pm',
  order: 2,
  title: '进度管理与关键路径',
  minutes: 5,
  keywords: ['进度', '关键路径', '甘特图', 'PERT', '网络图'],
  concept: '<p>进度管理用网络图排活动依赖,<gd data-term="critical-path">关键路径</gd>是工期最长、决定总工期的路径,其上活动无机动时间。压缩工期只能从关键路径下手。</p>',
  exam: '<p><b>考纲定位:</b>项目篇,选择题考关键路径含义。</p>',
  core: '<ul>' +
    '<li><b>关键路径</b>:最长路径,决定项目最短工期。</li>' +
    '<li><b>机动时间(松弛)</b>:非关键路径活动可推迟的余量。</li>' +
    '<li><b>压缩手段</b>:赶工(加资源)、快速跟进(并行)。</li>' +
    '</ul>' +
    '<div class="ex">赶工只在关键路径有效;给非关键活动加人等于白加。</div>',
  pitfalls: '<div class="pit"><b>关键路径可能不止一条。</b>多条并存时,压缩任一条都可能影响总工期。</div>',
  quiz: [
    { type: 'choice', q: '决定项目总工期、其上活动无机动时间的是?', options: ['非关键路径', '关键路径', '甘特图', 'WBS'], answer: 1, source: '高频', explain: '关键路径是最长路径,决定总工期。' }
  ],
  links: '<p>上一课:<a href="#/l/pm/01-scope">范围管理</a> · 下一课:<a href="#/l/pm/03-cost">成本管理</a></p>'
});
