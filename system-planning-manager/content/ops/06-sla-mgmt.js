SPM.registerLesson({
  id: 'ops/06-sla-mgmt',
  module: 'ops',
  order: 6,
  title: '服务级别管理',
  minutes: 5,
  key: true,
  keywords: ['服务级别管理', 'SLA监控', 'SLI', 'SLO', '服务报告'],
  concept: '<p><gd data-term="sl-mgmt">服务级别管理</gd>贯穿运营全过程:协商、签订 <gd data-term="sla">SLA</gd>、监控实际表现(<gd data-term="sli">SLI</gd>)对照目标(<gd data-term="slo">SLO</gd>)、出服务报告、未达标则改进。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考"如何保证 SLA 达标"。</p>',
  core: '<ul>' +
    '<li><b>三兄弟</b>:SLA(承诺)→ SLO(目标值)→ SLI(实测值)。</li>' +
    '<li><b>监控</b>:采集 SLI,对比 SLO,超阈值即预警/事件。</li>' +
    '<li><b>报告</b>:定期向客户出服务报告,达标情况、趋势、未达标说明。</li>' +
    '</ul>' +
    '<div class="ex">SLA 不是签完就完——要持续监控、定期报告、不达标就启动改进。</div>',
  pitfalls: '<div class="pit"><b>SLI 不准,SLA 就形同虚设。</b>监控数据要可信、可追溯,否则"达标"是自说自话。</div>',
  quiz: [
    { type: 'choice', q: '衡量服务实际表现、用于对照 SLO 的是?', options: ['SLA', 'SLI', 'OLA', 'UC'], answer: 1, source: '高频', explain: 'SLI 是实测指标,对照 SLO 目标。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/05-release-config">发布与配置</a> · 下一课:<a href="#/l/ops/07-capacity-availability">容量与可用性</a></p>'
});
