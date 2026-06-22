SPM.registerLesson({
  id: 'itss/03-itss-system',
  module: 'itss',
  order: 3,
  title: 'ITSS 标准体系框架',
  minutes: 5,
  key: true,
  keywords: ['ITSS', '标准体系', '基础标准', '系统建设', '服务管控', '行业应用'],
  concept: '<p><gd data-term="itss">ITSS</gd>是成套国家标准,体系分四大类:<b>基础标准、服务管控标准、服务业务规范标准、服务外包标准</b>,再加行业/产品应用等。它是国内 IT 服务最权威的依据。</p>',
  exam: '<p><b>考纲定位:</b>核心考点,选择题常考体系分类。</p>',
  core: '<ul>' +
    '<li><b>基础标准</b>:术语、服务分类与代码等"地基"。</li>' +
    '<li><b>服务管控标准</b>:服务能力评价、交付质量、监理等"怎么管"。</li>' +
    '<li><b>服务业务规范标准</b>:咨询设计、集成实施、运行维护、云服务等"怎么干"。</li>' +
    '<li><b>人员/资源/过程/技术</b>:参见下一课四要素。</li>' +
    '</ul>' +
    '<div class="ex">背法:基础是地基、管控是法眼、业务是干活、还有外包与行业应用。</div>',
  pitfalls: '<div class="pit"><b>ITSS ≠ ITIL。</b>ITIL 是国际最佳实践框架,ITSS 是我国国家标准;考试以 ITSS 为主线,ITIL 作背景了解。</div>',
  quiz: [
    { type: 'choice', q: '下列属于 ITSS 体系的是?', options: ['基础标准与服务管控标准', '只有云服务标准', '只有人员标准', '仅国际框架'], answer: 0, source: '高频', explain: 'ITSS 含基础、管控、业务规范等标准。' }
  ],
  links: '<p>上一课:<a href="#/l/itss/02-lifecycle">服务生命周期</a> · 下一课:<a href="#/l/itss/04-elements">四要素</a></p>'
});
