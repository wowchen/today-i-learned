SAD.registerLesson({
  id: 'arch/05-reuse',
  module: 'arch',
  order: 5,
  title: '架构复用与构件',
  minutes: 4,
  keywords: ['软件复用', '构件', '中间件', '复用粒度', '黑盒复用', '白盒复用'],
  concept: '<p>复用是提高质量与效率的关键。<gd data-term="component">构件</gd>是复用的基本单位:可独立部署、通过接口交互。复用层次从代码到架构(参考架构/DSSA)逐级升高。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:复用粒度与层次、黑盒/白盒复用、构件特征。</p>',
  core: '<table><tr><th>复用方式</th><th>说明</th></tr>' +
    '<tr><td>黑盒复用</td><td>不看内部,只用接口(最理想)</td></tr>' +
    '<tr><td>白盒复用</td><td>需了解并修改内部源码</td></tr></table>' +
    '<div class="ex">复用粒度由小到大:<b>函数/类 → 构件 → 框架/中间件 → 架构(DSSA/参考架构)</b>。粒度越大,复用收益越高,但越难做到通用。</div>',
  pitfalls: '<div class="pit"><b>误解:复用就是复制粘贴代码。</b>复制粘贴是最差的"复用",会带来维护噩梦。真正的复用靠<b>构件/接口/框架</b>,改一处处处生效。</div>',
  quiz: [
    { type: 'choice', q: '只通过接口使用、不需了解内部实现的复用是?', options: ['白盒复用', '黑盒复用', '复制粘贴', '逆向复用'], answer: 1, source: '高频', explain: '黑盒复用只依赖接口,是更理想的复用方式。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/04-adl">ADL</a> · 下一课:<a href="#/l/arch/06-dssa">DSSA</a> · 中间件:<a href="#/l/mid/01-middleware">中间件概念</a></p>'
});
