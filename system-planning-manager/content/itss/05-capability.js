SPM.registerLesson({
  id: 'itss/05-capability',
  module: 'itss',
  order: 5,
  title: '服务能力成熟度与评估',
  minutes: 5,
  keywords: ['成熟度', '能力评估', '级别', 'CMMI'],
  concept: '<p>衡量一个组织"做 IT 服务的水平"用<b>成熟度模型</b>:从"临时做做"到"量化优化",逐级提升。能力评估看四要素是否齐备且持续有效。</p>',
  exam: '<p><b>考纲定位:</b>核心了解,选择题考成熟度思想。</p>',
  core: '<ul>' +
    '<li><b>成熟度思想</b>:可重复 → 已定义 → 已管理 → 量化优化(沿 CMMI 思路)。</li>' +
    '<li><b>能力评估</b>:对人员/过程/技术/资源打分,判定达到某成熟度级别。</li>' +
    '<li>评估促进改进:先摸清"在哪一级",再规划提升路径。</li>' +
    '</ul>' +
    '<div class="ex">成熟度像"段位":先看自己几段,再练功升段。改进与评估是闭环。</div>',
  pitfalls: '<div class="pit"><b>具体成熟度分级数字以 ITSS 现行标准为准</b>,本课讲分级思想,勿背死数字。</div>',
  quiz: [
    { type: 'choice', q: '服务能力成熟度模型体现的思想是?', options: ['一次性达标', '从无序到量化优化的逐级提升', '只看技术', '只看人员数量'], answer: 1, source: '高频', explain: '成熟度模型按从无序到量化优化分级提升。' }
  ],
  links: '<p>上一课:<a href="#/l/itss/04-elements">四要素</a> · 下一课:<a href="#/l/itss/06-governance">服务治理</a></p>'
});
