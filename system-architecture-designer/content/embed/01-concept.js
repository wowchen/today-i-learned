SAD.registerLesson({
  id: 'embed/01-concept',
  module: 'embed',
  order: 1,
  title: '嵌入式系统概述',
  minutes: 4,
  key: true,
  keywords: ['嵌入式系统', '实时性', '专用', '低功耗', '可靠', '组成'],
  concept: '<p><gd data-term="embedded">嵌入式系统</gd>是为特定功能定制、嵌入设备内部的专用计算机系统,强调<b>专用、实时、可靠、低功耗、资源受限</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例(嵌入式架构)。重点:嵌入式特征、组成层次。</p>',
  core: '<p><b>嵌入式系统层次:</b>硬件层(芯片/外设)→ 驱动/板级支持包(BSP)→ 操作系统层(常为RTOS)→ 中间件 → 应用层。</p>' +
    '<div class="ex">与通用计算机比,嵌入式更看重<b>实时确定性、稳定长跑、功耗与成本</b>,而非峰值算力或通用性。</div>',
  pitfalls: '<div class="pit"><b>误解:嵌入式系统都没有操作系统。</b>简单的可裸机运行,但很多嵌入式<b>带RTOS或精简Linux</b>;不能一概说"无OS"。</div>',
  quiz: [
    { type: 'choice', q: '嵌入式系统最强调的特性通常不包括?', options: ['实时性', '低功耗', '通用高算力', '可靠性'], answer: 2, source: '高频', explain: '嵌入式强调专用、实时、可靠、低功耗,而非通用高算力。' }
  ],
  links: '<p>下一课:<a href="#/l/embed/02-rtos">实时操作系统</a> · 硬件:<a href="#/l/comp/07-embedded-hw">嵌入式硬件基础</a></p>'
});
