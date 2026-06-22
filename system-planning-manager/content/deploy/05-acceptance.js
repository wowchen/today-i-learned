SPM.registerLesson({
  id: 'deploy/05-acceptance',
  module: 'deploy',
  order: 5,
  title: '转产验收',
  minutes: 4,
  keywords: ['转产验收', '验收准则', '交付物', '正式运营'],
  concept: '<p><gd data-term="acceptance">转产验收</gd>是服务从"建设/部署"转入"正式运营"的关口:对照验收准则检查交付物、就绪度与 SLA 保障能力,确认后方可转产。</p>',
  exam: '<p><b>考纲定位:</b>部署篇,选择题与案例。</p>',
  core: '<ul>' +
    '<li><b>验收内容</b>:文档齐备、流程上线、人员到位、工具可用、SLA 可度量。</li>' +
    '<li><b>试运行结果</b>:指标达标、遗留问题闭环或有处置计划。</li>' +
    '<li><b>转产</b>:责任移交运营团队,进入 <gd data-term="lifecycle">运营阶段</gd>。</li>' +
    '</ul>' +
    '<div class="ex">验收 = "竣工验收";过了这关,服务才算正式开门营业,责任主体切换。</div>',
  pitfalls: '<div class="pit"><b>遗留问题不能"不验收"也不能"裸转产"。</b>应记录遗留项、定整改时限,风险可控方可转产。</div>',
  quiz: [
    { type: 'choice', q: '转产验收的核心目的是?', options: ['发奖金', '确认服务就绪可正式运营并移交责任', '宣传造势', '淘汰人员'], answer: 1, source: '高频', explain: '验收确认就绪度并完成责任移交,转入运营。' }
  ],
  links: '<p>上一课:<a href="#/l/deploy/04-delivery">服务交付</a> · 下一篇:<a href="#/l/ops/01-overview">运营管理总览</a></p>'
});
