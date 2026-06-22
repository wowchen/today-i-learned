SPM.registerLesson({
  id: 'supervise/04-audit',
  module: 'supervise',
  order: 4,
  title: '审计与合规',
  minutes: 4,
  keywords: ['审计', '合规', '等保', '证据', '独立'],
  concept: '<p><gd data-term="audit">服务审计</gd>是依据标准/合同/法规独立核查服务过程与结果是否合规有效。合规包括 <gd data-term="mlps">等保</gd>、数据安全法规、行业监管等。</p>',
  exam: '<p><b>考纲定位:</b>监督篇,选择题考审计性质。</p>',
  core: '<ul>' +
    '<li><b>审计类型</b>:财务/合规/绩效/IT 审计。</li>' +
    '<li><b>原则</b>:独立、客观、证据导向。</li>' +
    '<li><b>合规重点</b>:等保、数据安全、个人信息保护、行业监管。</li>' +
    '</ul>' +
    '<div class="ex">审计靠"证据"说话;过程记录(工单、日志、报告)齐备才经得起查。</div>',
  pitfalls: '<div class="pit"><b>审计不是"事后追责"。</b>它是持续合规保障;平时留痕、定期自查,远胜临时应付。</div>',
  quiz: [
    { type: 'choice', q: '服务审计的核心原则是?', options: ['人情优先', '独立客观、证据导向', '越快越好', '只看结果不看过程'], answer: 1, source: '高频', explain: '审计须独立客观、以证据为依据。' }
  ],
  links: '<p>上一课:<a href="#/l/supervise/03-satisfaction">满意度管理</a> · 下一篇:<a href="#/l/people/01-team">团队建设</a></p>'
});
