SAN.registerLesson({
  id: 'db/04-normalization',
  module: 'db',
  order: 4,
  title: '规范化:函数依赖与范式',
  minutes: 5,
  key: true,
  keywords: ['规范化', '范式', '函数依赖', '1NF', '2NF', '3NF', 'BCNF'],
  concept: '<p>表设计不好会有冗余和异常。规范化按<gd data-term="functional-dependency">函数依赖</gd>把表越拆越干净,达到不同<gd data-term="normal-form">范式</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例高频。重点:1NF~BCNF判定、求候选键。</p>',
  core: '<table><tr><th>范式</th><th>要求(在前一范式上)</th></tr>' +
    '<tr><td>1NF</td><td>属性不可再分</td></tr>' +
    '<tr><td>2NF</td><td>消除非主属性对候选键的部分依赖</td></tr>' +
    '<tr><td>3NF</td><td>消除传递依赖</td></tr>' +
    '<tr><td>BCNF</td><td>每个决定因素都是候选键</td></tr></table>' +
    '<div class="ex">部分依赖只可能在<b>联合主键</b>时出现;单属性主键天然满足2NF。</div>',
  pitfalls: '<div class="pit"><b>误解:范式越高越好。</b>过度规范化增加连接、降性能;实践常 3NF/BCNF 后适度反规范化换性能。</div>',
  quiz: [
    { type: 'choice', q: '消除非主属性对候选键的"部分依赖"达到?', options: ['1NF', '2NF', '3NF', 'BCNF'], answer: 1, source: '高频', explain: '2NF消除部分依赖。' }
  ],
  links: '<p>上一课:<a href="#/l/db/03-relational">关系代数</a> · 下一课:<a href="#/l/db/05-transaction">事务与并发</a></p>'
});
