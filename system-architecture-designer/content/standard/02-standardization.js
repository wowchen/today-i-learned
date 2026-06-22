SAD.registerLesson({
  id: 'standard/02-standardization',
  module: 'standard',
  order: 2,
  title: '标准化基础',
  minutes: 4,
  keywords: ['标准化', '国际标准', '国家标准', '行业标准', '企业标准', '强制标准'],
  concept: '<p><gd data-term="standardization">标准化</gd>为重复性事物制定共同准则,让各方能对接协作。按层级分国际、国家、行业、地方、团体/企业标准。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:标准层级、强制性vs推荐性。</p>',
  core: '<table><tr><th>层级</th><th>说明</th></tr>' +
    '<tr><td>国际标准</td><td>ISO、IEC、ITU 等</td></tr>' +
    '<tr><td>国家标准</td><td>我国 GB(强制)/GB-T(推荐)</td></tr>' +
    '<tr><td>行业标准</td><td>各行业主管部门制定</td></tr>' +
    '<tr><td>企业标准</td><td>企业自定,不得低于上位强制标准</td></tr></table>' +
    '<div class="ex"><b>GB</b> 是强制性国家标准、<b>GB/T</b> 是推荐性国家标准。层级越高,适用面越广。</div>',
  pitfalls: '<div class="pit"><b>误解:GB/T 也是强制执行。</b>带"T"是<b>推荐性</b>标准;不带T的 GB 才是强制性国家标准。</div>',
  quiz: [
    { type: 'choice', q: '"GB/T"表示我国的?', options: ['强制性国家标准', '推荐性国家标准', '行业标准', '国际标准'], answer: 1, source: '高频', explain: 'GB/T为推荐性国家标准,GB为强制性。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/01-ip">知识产权</a> · 下一课:<a href="#/l/standard/03-standards-classification">标准的分类与代号</a></p>'
});
