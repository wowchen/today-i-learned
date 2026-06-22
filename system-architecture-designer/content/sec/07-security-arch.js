SAD.registerLesson({
  id: 'sec/07-security-arch',
  module: 'sec',
  order: 7,
  title: '安全架构与纵深防御',
  minutes: 5,
  key: true,
  keywords: ['安全架构', '纵深防御', '安全分层', '最小权限', '安全设计原则'],
  concept: '<p>安全架构把安全"内建"到系统结构中,核心思想是<gd data-term="defense-in-depth">纵深防御</gd>:<b>多层设防,层层兜底</b>,而非只在边界放一道墙。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例(安全主题)、论文常考。重点:纵深防御分层、安全设计原则。</p>',
  core: '<p><b>纵深防御分层(从外到内):</b>物理安全 → 网络安全(防火墙/IDS) → 主机安全 → 应用安全 → 数据安全(加密/脱敏)。</p>' +
    '<table><tr><th>安全设计原则</th><th>含义</th></tr>' +
    '<tr><td>最小权限</td><td>只给完成任务所需的最少权限</td></tr>' +
    '<tr><td>失败安全</td><td>出错时默认拒绝(默认安全)</td></tr>' +
    '<tr><td>纵深防御</td><td>多层冗余防护</td></tr>' +
    '<tr><td>权限分离</td><td>关键操作需多方协作</td></tr></table>' +
    '<div class="ex">案例答题常用:从"网络-主机-应用-数据"多层提防护措施,再叠加身份认证、审计日志、加密——这就是纵深防御的标准答法。</div>',
  pitfalls: '<div class="pit"><b>误解:有了防火墙就安全了。</b>边界防护只是一层;<b>纵深防御</b>要求各层都设防,任何单点都不能成为唯一防线。</div>',
  quiz: [
    { type: 'choice', q: '"只授予完成工作所需的最小权限"是哪条安全原则?', options: ['纵深防御', '最小权限', '失败安全', '权限分离'], answer: 1, source: '高频', explain: '这是最小权限原则。' },
    { type: 'choice', q: '纵深防御的核心思想是?', options: ['只在边界设一道强防线', '多层设防、层层兜底', '只加密数据', '只靠杀毒软件'], answer: 1, source: '理解', explain: '纵深防御强调多层防护、互相兜底。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/06-access-model">访问控制与安全模型</a> · 下一课:<a href="#/l/sec/08-zero-trust">零信任架构</a></p>'
});
