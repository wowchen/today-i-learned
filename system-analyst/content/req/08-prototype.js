SAN.registerLesson({
  id: 'req/08-prototype',
  module: 'req',
  order: 8,
  title: '原型法',
  minutes: 4,
  keywords: ['原型法', '抛弃型', '演化型', '需求确认', '低保真', '高保真'],
  concept: '<p>原型法用快速做出的"样品"和用户确认需求,特别适合<b>需求不清</b>的场景,是系分常考的需求获取/确认手段。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:抛弃型vs演化型原型。</p>',
  core: '<table><tr><th>类型</th><th>用途</th></tr>' +
    '<tr><td>抛弃型原型</td><td>只为澄清需求,确认后丢弃重做</td></tr>' +
    '<tr><td>演化型原型</td><td>逐步完善,最终演化成正式系统</td></tr></table>' +
    '<div class="ex">低保真(草图/线框)快、便宜,适合早期讨论;高保真接近成品,适合后期确认细节。</div>',
  pitfalls: '<div class="pit"><b>误解:原型一定要做成最终系统。</b>很多原型是<b>抛弃型</b>,目的就是澄清需求,确认后重做更稳。</div>',
  quiz: [
    { type: 'choice', q: '只为澄清需求、确认后丢弃的原型是?', options: ['演化型', '抛弃型', '增量型', '螺旋型'], answer: 1, source: '高频', explain: '抛弃型原型用完即弃。' }
  ],
  links: '<p>需求工程模块完。下一模块:<a href="#/l/analysis/01-structured-dfd">结构化分析:数据流图</a></p>'
});
