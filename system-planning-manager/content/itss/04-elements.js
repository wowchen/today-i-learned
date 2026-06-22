SPM.registerLesson({
  id: 'itss/04-elements',
  module: 'itss',
  order: 4,
  title: '服务能力四要素:人/过程/技术/资源',
  minutes: 5,
  key: true,
  keywords: ['四要素', '人员', '过程', '技术', '资源'],
  concept: '<p><gd data-term="ppt-r">ITSS 四要素</b></gd>是服务能力的支柱:<b>人员</b>(能力与组织)、<b>过程</b>(方法与流程)、<b>技术</b>(工具与手段)、<b>资源</b>(知识/数据/设施)。缺一不可。</p>',
  exam: '<p><b>考纲定位:</b>核心高频,选择题与案例反复考,务必记牢。</p>',
  core: '<ul>' +
    '<li><b>人员 People</b>:角色、技能、数量、培训、岗位、绩效。</li>' +
    '<li><b>过程 Process</b>:流程定义、职责、规则、目标、指标。</li>' +
    '<li><b>技术 Technology</b>:工具、脚本、监控、自动化手段。</li>' +
    '<li><b>资源 Resource</b>:数据、知识库、备件、平台、设施。</li>' +
    '</ul>' +
    '<div class="ex">案例口诀:"有没人干(人员)、有章法(过程)、有工具(技术)、有家底(资源)"——四要素答题万能模板。</div>',
  pitfalls: '<div class="pit"><b>四要素的"资源"不是指人力资源。</b>人力资源属"人员";这里的资源指数据、知识、备件、平台等支撑物。</div>',
  quiz: [
    { type: 'choice', q: 'ITSS 服务能力四要素是?', options: ['人机料法', '人员/过程/技术/资源', 'PDCA', '范围进度成本质量'], answer: 1, source: '高频', explain: 'ITSS 四要素:People/Process/Technology/Resource。' }
  ],
  links: '<p>上一课:<a href="#/l/itss/03-itss-system">ITSS 体系</a> · 下一课:<a href="#/l/itss/05-capability">能力评估</a></p>'
});
