SAN.registerLesson({
  id: 'essay/07-topic-req',
  module: 'essay',
  order: 7,
  title: '常考主题:需求工程',
  minutes: 5,
  keywords: ['论文主题', '需求工程', '需求获取', '需求管理', '提纲', '论文'],
  concept: '<p>需求工程是系分论文<b>最高频</b>主题。本课给可直接套的提纲。</p>',
  exam: '<p><b>考纲定位:</b>论文主题准备。重点:需求全流程的论述提纲。</p>',
  core: '<div class="ex"><b>主题:论需求工程在XX项目中的应用</b><br>主体三到四点:① <gd data-term="requirement">需求</gd>获取(方法选择与隐性需求挖掘);② 需求分析与建模(DFD 或用例+类);③ 需求验证(评审/原型);④ <gd data-term="req-baseline">需求管理</gd>与变更控制(基线+跟踪矩阵,防蔓延)。每点结合项目讲做法与效果。</div>',
  pitfalls: '<div class="pit"><b>误解:只写"收集了需求"。</b>要体现<b>方法选择、建模、验证、变更控制</b>的完整闭环与取舍,才显专业。</div>',
  quiz: [
    { type: 'choice', q: '写"需求工程"主题,主体最该覆盖?', options: ['只讲收集', '获取+分析+验证+管理全流程并结合项目', '只写代码', '只画部署图'], answer: 1, source: '实操', explain: '应覆盖需求全流程并结合项目。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/06-material">项目素材</a> · 下一课:<a href="#/l/essay/08-topic-design">常考主题:系统分析与设计</a></p>'
});
