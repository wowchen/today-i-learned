SAN.registerLesson({
  id: 'req/02-elicitation',
  module: 'req',
  order: 2,
  title: '需求获取',
  minutes: 5,
  key: true,
  keywords: ['需求获取', '访谈', '问卷', '观察', '原型', '联合开发', '头脑风暴'],
  concept: '<p>需求获取是从用户那"挖"出真实需求。方法多样,要按场景组合使用。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:各获取方法的适用与优缺点。</p>',
  core: '<table><tr><th>方法</th><th>适用</th></tr>' +
    '<tr><td>访谈</td><td>深入了解,但耗时、依赖技巧</td></tr>' +
    '<tr><td>问卷调查</td><td>覆盖面广,适合大量用户</td></tr>' +
    '<tr><td>现场观察</td><td>发现用户说不出的隐性需求</td></tr>' +
    '<tr><td>原型法</td><td>需求不清时"以图代话"快速确认</td></tr>' +
    '<tr><td>联合需求计划(JRP)</td><td>关键干系人集中研讨</td></tr></table>' +
    '<div class="ex">隐性需求(用户习以为常、说不出口的)最容易遗漏,<b>现场观察</b>和<b>原型</b>最能挖出来。</div>',
  pitfalls: '<div class="pit"><b>误解:用户说什么就是什么。</b>用户表述常不完整、矛盾、甚至错误;分析师要<b>追问、验证、归纳</b>,而非照单全收。</div>',
  quiz: [
    { type: 'choice', q: '最适合发现用户"说不出的隐性需求"的方法是?', options: ['问卷', '现场观察', '查文档', '抽签'], answer: 1, source: '高频', explain: '现场观察能发现用户习以为常的隐性需求。' }
  ],
  links: '<p>上一课:<a href="#/l/req/01-overview">需求工程概述</a> · 下一课:<a href="#/l/req/03-analysis">需求分析</a></p>'
});
