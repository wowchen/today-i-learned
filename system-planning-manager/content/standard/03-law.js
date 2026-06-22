SPM.registerLesson({
  id: 'standard/03-law',
  module: 'standard',
  order: 3,
  title: '相关法律法规',
  minutes: 4,
  keywords: ['网络安全法', '数据安全法', '个人信息保护', '合同法'],
  concept: '<p>IT 服务相关法规含<b>《网络安全法》《数据安全法》《个人信息保护法》</b>及合同/招投标等。服务商须依法落实等保、数据安全与个人信息保护义务。</p>',
  exam: '<p><b>考纲定位:</b>标准篇,选择题考法规义务。</p>',
  core: '<ul>' +
    '<li><b>网络安全法</b>:落实等保、关键信息基础设施保护、日志留存。</li>' +
    '<li><b>数据安全法</b>:数据分类分级、跨境传输、安全保护义务。</li>' +
    '<li><b>个人信息保护法</b>:合法正当必要、知情同意、最小必要。</li>' +
    '</ul>' +
    '<div class="ex">处理政企数据常同时受多部法约束;合规是服务的"硬底线"。</div>',
  pitfalls: '<div class="pit"><b>具体条款与责任以现行法律法规为准</b>,本课只点名称与主线,勿背条文。</div>',
  quiz: [
    { type: 'choice', q: '要求"合法正当必要、知情同意、最小必要"的法律是?', options: ['网络安全法', '个人信息保护法', '合同法', '招标法'], answer: 1, source: '高频', explain: '个人信息保护法强调知情同意与最小必要。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/02-ip">知识产权</a> · 下一课:<a href="#/l/standard/04-service-standard">IT 服务标准</a></p>'
});
