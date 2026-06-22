SPM.registerLesson({
  id: 'standard/04-service-standard',
  module: 'standard',
  order: 4,
  title: 'IT 服务相关标准',
  minutes: 4,
  keywords: ['ITSS', '运维通用要求', '服务外包', '云服务标准'],
  concept: '<p>IT 服务领域标准以 <gd data-term="itss">ITSS</gd> 为主体,含<b>运行维护通用要求、咨询设计、云服务、服务外包</b>等系列标准,为服务能力建设与评估提供依据。</p>',
  exam: '<p><b>考纲定位:</b>标准篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>运维通用要求</b>:人员/资源/过程/技术四要素的基准。</li>' +
    '<li><b>云服务标准</b>:云服务能力与分类。</li>' +
    '<li><b>服务外包</b>:外包服务能力评估。</li>' +
    '</ul>' +
    '<div class="ex">这些标准是服务"怎么干、怎么评"的尺子;承接政企项目常需对照达标。</div>',
  pitfalls: '<div class="pit"><b>标准名称与编号随 ITSS 体系更新</b>,以现行国标为准,勿背死编号。</div>',
  quiz: [
    { type: 'choice', q: '我国 IT 服务领域的核心标准体系是?', options: ['ISO 9001', 'ITSS', 'CMMI', 'PMP'], answer: 1, source: '高频', explain: 'ITSS 是我国信息技术服务标准体系。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/03-law">法律法规</a> · 下一篇:<a href="#/l/english/01-terms">专业英语术语</a></p>'
});
