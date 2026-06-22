SPM.registerLesson({
  id: 'plan/04-sla',
  module: 'plan',
  order: 4,
  title: 'SLA 设计与三层协议',
  minutes: 5,
  key: true,
  keywords: ['SLA', 'OLA', 'UC', '服务级别协议', '三层协议'],
  concept: '<p><gd data-term="sla">SLA</gd>是服务方与客户的"质保承诺书"。支撑它的是内部 <gd data-term="ola">OLA</gd>(运营级别协议)与外部 <gd data-term="uc">UC</gd>(支持合同),三者构成支撑链。</p>',
  exam: '<p><b>考纲定位:</b>规划篇核心,选择与案例高频,务必分清三层。</p>',
  core: '<ul>' +
    '<li><b>SLA(对客户)</b>:服务内容、<gd data-term="slo">SLO</gd>目标值、响应/解决时效、责任与赔偿。</li>' +
    '<li><b>OLA(对内部)</b>:班组间协作约定,支撑 SLA。</li>' +
    '<li><b>UC(对供应商)</b>:外部供应商合同,支撑 SLA。</li>' +
    '<li>设计要点:可衡量、可达成、有奖惩、可监控。</li>' +
    '</ul>' +
    '<div class="ex">三句话记牢:SLA 是对客户的承诺,OLA 是内部班组的军令状,UC 是对外包的背靠背合同。</div>',
  pitfalls: '<div class="pit"><b>SLA 不是越严越好。</b>承诺做不到反而违约赔款;要在"客户期望"与"能力可达"间取平衡。</div>',
  quiz: [
    { type: 'choice', q: '服务组织内部班组之间为支撑 SLA 而签的协议是?', options: ['SLA', 'OLA', 'UC', 'SOW'], answer: 1, source: '高频', explain: 'OLA 是内部运营级别协议,支撑对客户的 SLA。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/03-scheme">方案设计</a> · 下一课:<a href="#/l/plan/05-catalog">服务目录</a> · 实战:<a href="#/l/case/04-sla-availability">SLA 与可用性计算</a></p>'
});
