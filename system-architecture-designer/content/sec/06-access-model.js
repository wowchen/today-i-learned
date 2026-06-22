SAD.registerLesson({
  id: 'sec/06-access-model',
  module: 'sec',
  order: 6,
  title: '访问控制与安全模型',
  minutes: 5,
  keywords: ['访问控制', 'DAC', 'MAC', 'RBAC', 'BLP', 'Biba', '安全模型'],
  concept: '<p>访问控制决定"谁能对什么做什么"。三种机制:自主(DAC)、强制(MAC)、基于角色(RBAC)。经典安全模型:保密性看 <gd data-term="blp">BLP</gd>,完整性看 <gd data-term="biba">Biba</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:三种访问控制、BLP与Biba的"读写规则"对比(极易混)。</p>',
  core: '<table><tr><th>模型</th><th>目标</th><th>规则</th></tr>' +
    '<tr><td>BLP</td><td>保密性</td><td><b>不上读、不下写</b>(下读上写)</td></tr>' +
    '<tr><td>Biba</td><td>完整性</td><td><b>不下读、不上写</b>(上读下写)</td></tr></table>' +
    '<div class="ex">记忆:BLP 怕<b>泄密</b>(高密级别往低写),所以"不下写";Biba 怕<b>被污染</b>(低可信往高写),所以"不上写"。两者读写规则正好相反。<br>RBAC:权限给"角色",用户通过任职角色获得权限,便于大规模管理。</div>',
  pitfalls: '<div class="pit"><b>误解:BLP和Biba规则一样。</b>正相反:<b>BLP 不上读不下写(保密)</b>;<b>Biba 不下读不上写(完整)</b>。这是高频陷阱题。</div>',
  quiz: [
    { type: 'choice', q: 'BLP模型的核心规则是?', options: ['不下读、不上写', '不上读、不下写', '可读可写', '只读不写'], answer: 1, source: '高频', explain: 'BLP保密性模型:不上读、不下写。' },
    { type: 'choice', q: '把权限赋予"角色"、用户经角色获权的访问控制是?', options: ['DAC', 'MAC', 'RBAC', 'BLP'], answer: 2, source: '高频', explain: 'RBAC基于角色的访问控制。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/05-pki">PKI</a> · 下一课:<a href="#/l/sec/07-security-arch">安全架构与纵深防御</a></p>'
});
