SAD.registerLesson({
  id: 'arch/06-dssa',
  module: 'arch',
  order: 6,
  title: '特定领域软件架构 DSSA',
  minutes: 4,
  keywords: ['DSSA', '特定领域', '参考架构', '领域工程', '应用工程', '复用'],
  concept: '<p><gd data-term="dssa">DSSA</gd> 是面向<b>某个特定领域</b>的、可复用的参考架构,支撑该领域系统的快速开发。它是"架构级复用"的典型。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:DSSA 概念、领域工程与应用工程、三种建立方式。</p>',
  core: '<p><b>两条主线:</b></p>' +
    '<table><tr><th>工程</th><th>做什么</th></tr>' +
    '<tr><td>领域工程</td><td>分析领域共性,产出可复用的 DSSA 与构件库</td></tr>' +
    '<tr><td>应用工程</td><td>基于 DSSA 快速组装具体应用</td></tr></table>' +
    '<div class="ex">DSSA 建立方式有自顶向下、自底向上、混合。参与角色:领域专家、领域分析师、领域设计师、领域实现人员。</div>',
  pitfalls: '<div class="pit"><b>误解:DSSA 是某一个具体系统的架构。</b>DSSA 是<b>一类系统(整个领域)</b>共享的参考架构,不是单个应用的架构。</div>',
  quiz: [
    { type: 'choice', q: 'DSSA(特定领域软件架构)的本质是?', options: ['某个具体项目的架构', '面向某领域、可复用的参考架构', '一种编程语言', '测试方法'], answer: 1, source: '高频', explain: 'DSSA是面向特定领域、可复用的参考架构。' }
  ],
  links: '<p>软件架构基础模块完。下一模块:<a href="#/l/style/01-overview">架构风格总览</a></p>'
});
