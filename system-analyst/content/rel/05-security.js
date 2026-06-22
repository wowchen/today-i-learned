SAN.registerLesson({
  id: 'rel/05-security',
  module: 'rel',
  order: 5,
  title: '安全性设计',
  minutes: 4,
  keywords: ['安全性', '纵深防御', '最小权限', '访问控制', '安全架构'],
  concept: '<p>安全性把防护内建到系统结构,核心思想<b>纵深防御</b>(多层设防、层层兜底),并遵循最小权限等设计原则。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(安全)。重点:纵深防御分层、安全设计原则。</p>',
  core: '<p><b>纵深防御分层:</b>物理→网络→主机→应用→数据,层层设防。</p>' +
    '<table><tr><th>原则</th><th>含义</th></tr>' +
    '<tr><td>最小权限</td><td>只给完成任务所需的最少权限</td></tr>' +
    '<tr><td>失败安全</td><td>出错默认拒绝</td></tr>' +
    '<tr><td>权限分离</td><td>关键操作需多方协作</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:有防火墙就安全。</b>边界只是一层;纵深防御要求各层都设防,不能只靠单点。</div>',
  quiz: [
    { type: 'choice', q: '"只授予完成工作所需最小权限"是?', options: ['纵深防御', '最小权限', '失败安全', '权限分离'], answer: 1, source: '高频', explain: '这是最小权限原则。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/04-design">可靠性设计</a> · 下一课:<a href="#/l/rel/06-test">可靠性测试与评估</a></p>'
});
