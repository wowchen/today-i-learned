SAN.registerLesson({
  id: 'essay/06-material',
  module: 'essay',
  order: 6,
  title: '项目素材与选题',
  minutes: 5,
  key: true,
  keywords: ['项目素材', '选题', '万能项目', '准备', '真实', '论文'],
  concept: '<p>论文成败八成在考前——<b>提前准备1~2个"万能项目"</b>,练熟后几乎任何主题都能套。这是论文最重要的一课。</p>',
  exam: '<p><b>考纲定位:</b>论文备考根本。重点:选什么项目、怎么"可套多主题"。</p>',
  core: '<table><tr><th>要素</th><th>建议</th></tr>' +
    '<tr><td>规模</td><td>中大型、有并发/数据量,显含金量</td></tr>' +
    '<tr><td>角色</td><td>明确是"系统分析师",主导需求与设计</td></tr>' +
    '<tr><td>技术广度</td><td>含需求工程、分析设计、数据库、架构,便于套多主题</td></tr>' +
    '<tr><td>可量化成果</td><td>记住几个数字(用户、效率、满意度)</td></tr></table>' +
    '<div class="ex">一个政务/电商/管理信息系统类项目通常能覆盖"需求工程、系统设计、项目管理、数据"等多数命题。真实经历最好。</div>',
  pitfalls: '<div class="pit"><b>误解:考场再编项目。</b>临场编细节经不起推敲、时间不够,极易低分。<b>务必提前准备并计时手写练熟。</b></div>',
  quiz: [
    { type: 'choice', q: '论文备考最重要的准备是?', options: ['背范文', '提前备可套多主题的真实项目并练写', '只看结构', '准备很多图'], answer: 1, source: '策略', explain: '提前备"万能项目"并计时练写。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/05-closing">结尾模板</a> · 下一课:<a href="#/l/essay/07-topic-req">常考主题:需求工程</a></p>'
});
