SPM.registerLesson({
  id: 'standard/01-standardization',
  module: 'standard',
  order: 1,
  title: '标准化基础',
  minutes: 5,
  key: true,
  keywords: ['标准化', '标准分级', '国家标准', '行业标准', '企业标准'],
  concept: '<p><gd data-term="standardization">标准化</gd>是为重复性事物制定并实施统一规则以获最佳秩序。标准按适用范围分级:<b>国际/国家/行业/团体/企业</b>标准;按约束力分强制性与推荐性。</p>',
  exam: '<p><b>考纲定位:</b>标准篇,选择题考分级与代号。</p>',
  core: '<ul>' +
    '<li><b>国家标准</b>:代号 GB(强制)/GB/T(推荐)。</li>' +
    '<li><b>行业标准</b>:如通信、电子等,各有代号。</li>' +
    '<li><b>地方/团体/企业标准</b>:覆盖更细范围。</li>' +
    '<li><b>ITSS</b>本身即属信息技术服务领域的成套标准。</li>' +
    '</ul>' +
    '<div class="ex">背法:GB 国标、GB/T 推荐性国标;T=推。ITSS 是服务领域的国标体系。</div>',
  pitfalls: '<div class="pit"><b>GB 与 GB/T 不同。</b>GB 强制执行,GB/T 推荐性(自愿采用);别混。</div>',
  quiz: [
    { type: 'choice', q: '我国推荐性国家标准的代号是?', options: ['GB', 'GB/T', 'DB', 'Q'], answer: 1, source: '高频', explain: 'GB/T 为推荐性国家标准;GB 为强制性。' }
  ],
  links: '<p>下一篇:<a href="#/l/standard/02-ip">知识产权</a></p>'
});
