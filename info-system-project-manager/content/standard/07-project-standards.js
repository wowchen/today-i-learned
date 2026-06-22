ISPM.registerLesson({
  id: 'standard/07-project-standards',
  module: 'standard',
  order: 7,
  title: '项目管理标准体系',
  minutes: 3,
  keywords: ['PMBOK', 'PRINCE2', 'ISO21500', '项目管理标准', 'GB/T'],
  concept: '<p>项目管理有多套国际国内标准。了解它们的来源和定位，有助于理解高项考纲的知识来源。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。了解主要标准的名称和来源即可。</p>',
  core: '<p><b>主要项目管理标准：</b></p>' +
    '<ul><li><b>PMBOK 指南</b>：美国 PMI 发布，全球影响力最大，是高项的重要参考来源。</li>' +
    '<li><b>PRINCE2</b>：英国的结构化项目管理方法，强调流程和阶段控制。</li>' +
    '<li><b>ISO 21500</b>：国际标准化组织的项目管理指南。</li>' +
    '<li><b>GB/T 国家标准</b>：我国的项目管理相关国家标准。</li></ul>' +
    '<p><b>高项考纲的依据：</b>以软考官方教程为准，融合了 PMBOK 等国际标准的框架（五大过程组、十大知识领域），并结合中国国情（法律法规、信息化政策）。</p>' +
    '<div class="ex"><b>提示：</b>本站内容以软考官方教程为主，PMBOK 作为补充。两者框架一致，但高项更广（含信息化、法律、技术），术语和侧重略有不同。</div>',
  pitfalls: '<div class="pit"><b>误解 1：高项就是考 PMBOK。</b> 高项以软考官方教程为准，融合 PMBOK 框架但范围更广，还包括信息化、软件工程、法律法规等 PMBOK 不涉及的内容。</div>',
  quiz: [
    {
      type: 'choice',
      q: '全球影响力最大、由美国PMI发布的项目管理标准是：',
      options: ['PRINCE2', 'PMBOK指南', 'ISO9000', 'CMMI'],
      answer: 1,
      explain: 'PMBOK指南由美国项目管理协会（PMI）发布，全球影响力最大，是高项考纲的重要参考来源之一。PRINCE2是英国的方法。'
    }
  ],
  links: '<p>上一课：<a href="#/l/standard/06-standardization">标准化</a> · 下一课：<a href="#/l/standard/08-quality-standards">信息技术服务标准</a></p>'
});
