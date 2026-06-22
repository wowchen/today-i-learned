ISPM.registerLesson({
  id: 'standard/08-quality-standards',
  module: 'standard',
  order: 8,
  title: '信息技术服务标准',
  minutes: 3,
  keywords: ['ITSS', 'ITIL', 'ISO20000', 'ISO27001', '信息安全管理', 'IT服务管理'],
  concept: '<p>IT 服务和信息安全也有专门的标准体系。本课了解 ITSS、ITIL、ISO 20000、ISO 27001 等常考标准的定位。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。了解各标准的领域（服务管理 vs 信息安全）。</p>',
  core: '<p><b>IT 服务管理标准：</b></p>' +
    '<ul><li><b>ITSS（信息技术服务标准）</b>：我国的 IT 服务标准体系，核心是"人员、过程、技术、资源"四要素。</li>' +
    '<li><b>ITIL（IT 基础架构库）</b>：国际通行的 IT 服务管理最佳实践。</li>' +
    '<li><b>ISO 20000</b>：IT 服务管理国际标准。</li></ul>' +
    '<p><b>信息安全管理标准：</b></p>' +
    '<ul><li><b>ISO 27001</b>：信息安全管理体系（ISMS）国际标准。</li>' +
    '<li><b>信息安全等级保护</b>：我国的强制性安全制度（前面网络安全法讲过）。</li></ul>' +
    '<div class="ex"><b>区分：</b>ISO 20000 / ITIL / ITSS 管"IT <em>服务</em>"；ISO 27001 管"信息<em>安全</em>"。一个保服务质量，一个保信息安全。</div>',
  pitfalls: '<div class="pit"><b>误解 1：ISO 20000 和 ISO 27001 一样。</b> ISO 20000 是 IT <em>服务管理</em>标准；ISO 27001 是信息<em>安全管理</em>标准。一个管服务，一个管安全。</div>',
  quiz: [
    {
      type: 'choice',
      q: '信息安全管理体系（ISMS）的国际标准是：',
      options: ['ISO 9000', 'ISO 20000', 'ISO 27001', 'ITIL'],
      answer: 2,
      explain: 'ISO 27001 是信息安全管理体系（ISMS）国际标准。ISO 20000 是IT服务管理标准，ISO 9000 是质量管理标准。'
    },
    {
      type: 'choice',
      q: '我国信息技术服务标准（ITSS）的核心四要素是：',
      options: [
        '人员、过程、技术、资源',
        '范围、进度、成本、质量',
        '计划、执行、检查、处理',
        '硬件、软件、网络、数据'
      ],
      answer: 0,
      explain: 'ITSS（信息技术服务标准）的核心是"人员、过程、技术、资源"四要素，构成IT服务能力的基础。'
    }
  ],
  links: '<p>本模块完成。上一课：<a href="#/l/standard/07-project-standards">项目管理标准体系</a> · 进入实战专题：<a href="#/l/case/01-case-overview">案例分析专题</a></p>'
});
