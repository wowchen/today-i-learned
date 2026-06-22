SPM.registerLesson({
  id: 'pm/05-risk',
  module: 'pm',
  order: 5,
  title: '风险管理',
  minutes: 5,
  key: true,
  keywords: ['风险', '识别', '应对策略', '规避', '转移'],
  concept: '<p><gd data-term="risk">风险管理</gd>识别、分析、应对并监控不确定性。应对策略:<b>规避、转移、减轻、接受</b>(消极风险);按概率×影响排序重点应对。</p>',
  exam: '<p><b>考纲定位:</b>项目篇,选择题考四种策略。</p>',
  core: '<ul>' +
    '<li><b>规避</b>:改变计划消除风险源。</li>' +
    '<li><b>转移</b>:外包、买保险,把风险给第三方。</li>' +
    '<li><b>减轻</b>:降低概率或影响(如冗余、备份)。</li>' +
    '<li><b>接受</b>:概率/影响小,留应急储备。</li>' +
    '</ul>' +
    '<div class="ex">容灾/备份是"减轻";买保险是"转移";明知小概率就留应急储备是"接受"。</div>',
  pitfalls: '<div class="pit"><b>风险≠问题。</b>风险是"可能发生的不确定";已发生的不利事件叫问题。风险管理面向未来。</div>',
  quiz: [
    { type: 'choice', q: '通过买保险把风险转给第三方,属于?', options: ['规避', '转移', '减轻', '接受'], answer: 1, source: '高频', explain: '保险/外包属风险转移策略。' }
  ],
  links: '<p>上一课:<a href="#/l/pm/04-quality">质量管理</a> · 下一篇:<a href="#/l/tech/01-itsm-tool">ITSM 工具</a></p>'
});
