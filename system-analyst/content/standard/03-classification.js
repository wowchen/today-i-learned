SAN.registerLesson({
  id: 'standard/03-classification',
  module: 'standard',
  order: 3,
  title: '标准的分类与代号',
  minutes: 4,
  keywords: ['标准代号', 'ISO', 'IEEE', 'GB', '编号', '分类'],
  concept: '<p>认标准先认代号。不同组织/层级有固定前缀,考试给编号要会判断层级与来源。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:常见代号识别。</p>',
  core: '<table><tr><th>代号</th><th>含义</th></tr>' +
    '<tr><td>ISO</td><td>国际标准化组织</td></tr>' +
    '<tr><td>IEC/ITU</td><td>国际电工/电信</td></tr>' +
    '<tr><td>IEEE</td><td>电气电子工程师学会(行业/团体)</td></tr>' +
    '<tr><td>GB/GB-T</td><td>中国国家标准(强制/推荐)</td></tr>' +
    '<tr><td>Q/×××</td><td>企业标准</td></tr></table>' +
    '<div class="ex">编号一般是"代号+顺序号+年份",如 GB/T 11457-2006。</div>',
  pitfalls: '<div class="pit"><b>误解:IEEE是国家标准。</b>IEEE是行业/团体(学会)标准组织,不是某国国家标准机构。</div>',
  quiz: [
    { type: 'choice', q: '以"Q/"开头的标准通常是?', options: ['国家标准', '行业标准', '企业标准', '国际标准'], answer: 2, source: '高频', explain: '企业标准代号以Q开头。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/02-standardization">标准化基础</a> · 下一课:<a href="#/l/standard/04-doc">文档标准</a></p>'
});
