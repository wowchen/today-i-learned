SAN.registerLesson({
  id: 'req/03-analysis',
  module: 'req',
  order: 3,
  title: '需求分析',
  minutes: 5,
  key: true,
  keywords: ['需求分析', '建模', '结构化分析', '面向对象分析', '冲突', '优先级'],
  concept: '<p>需求分析把杂乱的原始需求<b>建模、归类、消解冲突、定优先级</b>,产出清晰一致的需求。常用建模:结构化(DFD)或面向对象(用例+类)。</p>',
  exam: '<p><b>考纲定位:</b>系分核心,案例高频(画模型)。重点:分析任务、两种建模路线。</p>',
  core: '<p><b>分析的主要任务:</b></p>' +
    '<ul>' +
    '<li>建立分析模型(结构化用 <gd data-term="dfd">DFD</gd>+数据字典;面向对象用 <gd data-term="use-case">用例</gd>+类图)。</li>' +
    '<li>消解需求间的<b>冲突、重复、矛盾</b>。</li>' +
    '<li>区分优先级(如 MoSCoW:必须/应该/可以/暂不)。</li>' +
    '</ul>' +
    '<div class="ex">分析的核心是"<b>转译与建模</b>":把人话翻成可分析的模型,暴露遗漏和矛盾。这正是案例画图题考的。</div>',
  pitfalls: '<div class="pit"><b>误解:分析就是把需求抄进文档。</b>分析要<b>建模、查漏、消冲突、排优先级</b>,是再加工,不是搬运。</div>',
  quiz: [
    { type: 'choice', q: '结构化需求分析的核心模型工具是?', options: ['类图', '数据流图DFD', '甘特图', 'WBS'], answer: 1, source: '高频', explain: '结构化分析用DFD+数据字典建模。' }
  ],
  links: '<p>上一课:<a href="#/l/req/02-elicitation">需求获取</a> · 下一课:<a href="#/l/req/04-definition">需求定义</a> · 建模:<a href="#/l/analysis/01-structured-dfd">数据流图</a></p>'
});
