SAN.registerLesson({
  id: 'case/05-req-case',
  module: 'case',
  order: 5,
  title: '需求分析案例',
  minutes: 5,
  key: true,
  keywords: ['需求分析', '需求获取', '需求变更', '需求分类', '案例'],
  concept: '<p>需求类案例:给一个项目情景,问<b>需求获取方法选择、功能/非功能需求分类、需求变更如何处理</b>。这是系分案例的"文字大题"。</p>',
  exam: '<p><b>考纲定位:</b>案例高频。重点:获取方法适用、需求分类、变更控制流程。</p>',
  core: '<div class="ex"><b>常见问法与答法:</b><br>· "该用什么获取方法"→按场景选(用户多→问卷;隐性需求→观察;需求不清→原型)。<br>· "把下列需求分类"→区分<gd data-term="requirement">功能</gd>与<gd data-term="nonfunctional-req">非功能</gd>(性能/安全/可用)。<br>· "中途要加需求怎么办"→走<b>变更控制</b>:影响分析→CCB评审→批准→更新<gd data-term="req-baseline">基线</gd>,防需求蔓延。</div>',
  pitfalls: '<div class="pit"><b>误解:用户提的变更直接做。</b>必须走变更控制评估影响;有求必应=需求蔓延,项目失控主因。</div>',
  quiz: [
    { type: 'choice', q: '项目中途客户频繁加需求,最该做的是?', options: ['全部照做', '走变更控制评估影响后再定', '全部拒绝', '加班硬扛'], answer: 1, source: '案例', explain: '变更走控制流程,评估影响后决策,防蔓延。' }
  ],
  links: '<p>上一课:<a href="#/l/case/04-uml-case">UML案例</a> · 下一课:<a href="#/l/case/06-math-calc">数学计算专项</a> · 原理:<a href="#/l/req/06-management">需求管理</a></p>'
});
