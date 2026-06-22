SAN.registerLesson({
  id: 'standard/02-standardization',
  module: 'standard',
  order: 2,
  title: '标准化基础',
  minutes: 4,
  keywords: ['标准化', '国家标准', '行业标准', '企业标准', '强制', '推荐'],
  concept: '<p><gd data-term="standardization">标准化</gd>为重复性事物制定共同准则。按层级:国际、国家、行业、地方、团体/企业标准。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:标准层级、强制vs推荐。</p>',
  core: '<table><tr><th>层级</th><th>说明</th></tr>' +
    '<tr><td>国家标准</td><td>GB(强制)/GB-T(推荐)</td></tr>' +
    '<tr><td>行业标准</td><td>各行业主管部门制定</td></tr>' +
    '<tr><td>企业标准</td><td>不得低于上位强制标准</td></tr></table>' +
    '<div class="ex">GB 是强制性国标,GB/T 是推荐性国标。</div>',
  pitfalls: '<div class="pit"><b>误解:GB/T也是强制的。</b>带"T"是<b>推荐性</b>;不带T的GB才是强制性国家标准。</div>',
  quiz: [
    { type: 'choice', q: '"GB/T"表示?', options: ['强制性国标', '推荐性国标', '行业标准', '国际标准'], answer: 1, source: '高频', explain: 'GB/T是推荐性国家标准。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/01-ip">知识产权</a> · 下一课:<a href="#/l/standard/03-classification">标准分类与代号</a></p>'
});
