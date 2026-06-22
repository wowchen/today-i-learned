SAN.registerLesson({
  id: 'analysis/05-uml-static',
  module: 'analysis',
  order: 5,
  title: 'UML 静态结构图',
  minutes: 5,
  key: true,
  keywords: ['UML', '类图', '关联', '聚合', '组合', '继承', '依赖', '部署图'],
  concept: '<p><gd data-term="uml">UML</gd> 静态图描述系统结构,核心是<b>类图</b>(类及其关系),还有对象图、构件图、部署图。</p>',
  exam: '<p><b>考纲定位:</b>系分案例高频(补类图关系)。重点:类间关系强弱与区分。</p>',
  core: '<table><tr><th>关系</th><th>含义</th></tr>' +
    '<tr><td>依赖</td><td>临时使用(最弱)</td></tr>' +
    '<tr><td>关联</td><td>长期结构关系</td></tr>' +
    '<tr><td>聚合</td><td>整体-部分,可分离(球队-球员)</td></tr>' +
    '<tr><td>组合</td><td>整体-部分,同生共死(人-心脏)</td></tr>' +
    '<tr><td>继承/泛化</td><td>一般-特殊(最强)</td></tr></table>' +
    '<div class="ex">强弱:依赖 < 关联 < 聚合 < 组合 < 继承。聚合可分离,组合同生共死,这是案例高频考点。</div>',
  pitfalls: '<div class="pit"><b>误解:聚合=组合。</b>聚合部分可独立存在;组合部分随整体消亡。考试常对调出题。</div>',
  quiz: [
    { type: 'choice', q: '表示"整体与部分同生共死"的类关系是?', options: ['关联', '聚合', '组合', '依赖'], answer: 2, source: '高频', explain: '组合是强整体-部分,部分随整体消亡。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/04-oo-concept">面向对象基础</a> · 下一课:<a href="#/l/analysis/06-uml-dynamic">UML动态图</a> · 案例:<a href="#/l/case/04-uml-case">UML案例</a></p>'
});
