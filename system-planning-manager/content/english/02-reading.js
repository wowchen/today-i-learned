SPM.registerLesson({
  id: 'english/02-reading',
  module: 'english',
  order: 2,
  title: '专业英语阅读技巧',
  minutes: 4,
  keywords: ['阅读', '长句', '术语定位', '上下文'],
  concept: '<p>英语题多为"一段服务管理英文 + 释义选择/填空"。技巧:先抓<b>主语与动词</b>定大意,再用<b>术语缩写定位</b>,最后看上下文排除。</p>',
  exam: '<p><b>考纲定位:</b>英语篇,方法。</p>',
  core: '<ul>' +
    '<li><b>抓主干</b>:主语+谓语先定大意,修饰语后看。</li>' +
    '<li><b>术语定位</b>:文中 SLA/MTBF 等缩写是解题钥匙。</li>' +
    '<li><b>排除法</b>:明显无关/常识错误的先排掉。</li>' +
    '</ul>' +
    '<div class="ex">生词不慌:服务管理英语术语高度重复,认得缩写+主干即可猜对。</div>',
  pitfalls: '<div class="pit"><b>别逐字翻译。</b>长句逐字翻会陷入细节;先抓主谓定方向更高效。</div>',
  quiz: [
    { type: 'choice', q: '做专业英语题最有效的定位线索是?', options: ['逐字翻译', '术语缩写与主干', '猜生词', '数单词'], answer: 1, source: '方法', explain: '术语缩写与主谓主干是解题钥匙。' }
  ],
  links: '<p>上一课:<a href="#/l/english/01-terms">常用术语</a> · 下一课:<a href="#/l/english/03-vocab">真题高频词</a></p>'
});
