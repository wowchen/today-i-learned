SAD.registerLesson({
  id: 'db/04-normalization',
  module: 'db',
  order: 4,
  title: '规范化:函数依赖与范式',
  minutes: 5,
  key: true,
  keywords: ['规范化', '范式', '函数依赖', '1NF', '2NF', '3NF', 'BCNF', '冗余'],
  concept: '<p>表设计不好会有冗余和"改一处漏一处"的异常。规范化按<gd data-term="functional-dependency">函数依赖</gd>把表越拆越干净,达到不同<gd data-term="normal-form">范式</gd>等级。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例高频。重点:1NF~BCNF 判定、求候选键、判断范式级别。</p>',
  core: '<table><tr><th>范式</th><th>要求(在前一范式基础上)</th></tr>' +
    '<tr><td>1NF</td><td>每个属性不可再分(原子)</td></tr>' +
    '<tr><td>2NF</td><td>消除<b>非主属性对候选键的部分依赖</b></td></tr>' +
    '<tr><td>3NF</td><td>消除<b>传递依赖</b></td></tr>' +
    '<tr><td>BCNF</td><td>每个决定因素都是候选键</td></tr></table>' +
    '<div class="ex">口诀:1NF原子、2NF去部分依赖、3NF去传递依赖、BCNF决定因素皆为键。<br>部分依赖只可能出现在"<b>联合主键</b>"时,单属性主键天然满足2NF。</div>',
  pitfalls: '<div class="pit"><b>误解1:范式越高越好。</b>过度规范化会增加连接、降低查询性能;实践常<b>3NF/BCNF 后适度反规范化</b>换性能。</div>' +
    '<div class="pit"><b>误解2:2NF 针对所有依赖。</b>2NF 仅消除<b>非主属性</b>对候选键的<b>部分</b>依赖;传递依赖归 3NF 管。</div>',
  quiz: [
    { type: 'choice', q: '消除非主属性对候选键的"部分函数依赖",达到的范式是?', options: ['1NF', '2NF', '3NF', 'BCNF'], answer: 1, source: '高频', explain: '2NF在1NF基础上消除部分依赖。' },
    { type: 'choice', q: '关系R已是3NF,还可能存在的问题是?', options: ['属性不原子', '部分依赖', '主属性对候选键的部分/传递依赖(BCNF才解决)', '无任何冗余'], answer: 2, source: '高频', explain: '3NF仍可能存在主属性对候选键的依赖问题,BCNF更严格。' }
  ],
  links: '<p>上一课:<a href="#/l/db/03-relational">关系代数与SQL</a> · 下一课:<a href="#/l/db/05-transaction">事务与并发</a></p>'
});
