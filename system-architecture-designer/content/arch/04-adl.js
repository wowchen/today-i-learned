SAD.registerLesson({
  id: 'arch/04-adl',
  module: 'arch',
  order: 4,
  title: '架构描述语言 ADL',
  minutes: 4,
  keywords: ['ADL', '架构描述语言', '构件', '连接件', '配置', 'UniCon', 'Wright'],
  concept: '<p><gd data-term="adl">ADL</gd> 是描述软件架构的<b>形式化语言</b>,用三要素表达结构:<b>构件、连接件、配置(架构拓扑)</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:ADL 三要素、与 UML 的区别。</p>',
  core: '<table><tr><th>ADL要素</th><th>含义</th></tr>' +
    '<tr><td>构件(Component)</td><td>计算/数据存储单元</td></tr>' +
    '<tr><td>连接件(Connector)</td><td>构件间交互的显式实体</td></tr>' +
    '<tr><td>配置(Configuration)</td><td>构件与连接件组成的拓扑结构</td></tr></table>' +
    '<div class="ex">ADL 把"<b>连接件</b>"当成<b>一等公民</b>显式建模(交互方式本身可被描述、复用),这是它区别于一般建模的特点。代表:UniCon、Wright、C2、ACME。</div>',
  pitfalls: '<div class="pit"><b>误解:ADL 就是 UML。</b>UML 是通用建模、半形式化;ADL 是<b>专门描述架构、更形式化</b>,且把连接件作为一等实体显式建模。</div>',
  quiz: [
    { type: 'choice', q: 'ADL用来描述架构的三个基本要素是?', options: ['类、对象、方法', '构件、连接件、配置', '需求、设计、实现', '前端、后端、数据'], answer: 1, source: '高频', explain: 'ADL三要素:构件、连接件、配置。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/03-absd">ABSD</a> · 下一课:<a href="#/l/arch/05-reuse">架构复用与构件</a></p>'
});
