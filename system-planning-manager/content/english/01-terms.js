SPM.registerLesson({
  id: 'english/01-terms',
  module: 'english',
  order: 1,
  title: '专业英语:IT 服务常用术语',
  minutes: 4,
  keywords: ['专业英语', '术语', '缩写', 'ITSM'],
  concept: '<p>综合知识含专业英语题,多为 IT 服务管理术语的英文释义选择。掌握高频缩写即可应对:<b>SLA/OLA/UC/ITSM/ITIL/ITSS/MTBF/MTTR/RTO/RPO</b>等。</p>',
  exam: '<p><b>考纲定位:</b>英语篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>SLA</b> Service Level Agreement 服务级别协议。</li>' +
    '<li><b>ITSM</b> IT Service Management IT 服务管理。</li>' +
    '<li><b>MTBF/MTTR</b> 平均故障间隔/平均修复时间。</li>' +
    '<li><b>RTO/RPO</b> 恢复时间目标/恢复点目标。</li>' +
    '</ul>' +
    '<div class="ex">背法:先把全称和中文对上,再看英文释义;缩写就是"首字母拼起来"。</div>',
  pitfalls: '<div class="pit"><b>别只记缩写不记全称。</b>英语题常考全称释义,只认缩写会失分。</div>',
  quiz: [
    { type: 'choice', q: 'SLA 的英文全称是?', options: ['Service Level Agreement', 'System Level Access', 'Service Line Asset', 'Standard Level Agreement'], answer: 0, source: '高频', explain: 'SLA = Service Level Agreement。' }
  ],
  links: '<p>下一篇:<a href="#/l/english/02-reading">阅读技巧</a></p>'
});
