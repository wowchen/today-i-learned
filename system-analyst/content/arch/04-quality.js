SAN.registerLesson({
  id: 'arch/04-quality',
  module: 'arch',
  order: 4,
  title: '质量属性与场景',
  minutes: 5,
  key: true,
  keywords: ['质量属性', '性能', '可用性', '安全性', '可修改性', '质量属性场景', '六元组'],
  concept: '<p><gd data-term="quality-attribute">质量属性</gd>是系统非功能特性,是架构设计的核心驱动。用<b>质量属性场景(六元组)</b>把它说清、可度量。</p>',
  exam: '<p><b>考纲定位:</b>案例高频。重点:运行期/开发期质量属性、六元组。</p>',
  core: '<table><tr><th>类别</th><th>属性</th></tr>' +
    '<tr><td>运行期</td><td>性能、可用性、安全性、易用性</td></tr>' +
    '<tr><td>开发期</td><td>可修改性、可测试性、可移植性</td></tr></table>' +
    '<div class="ex">六元组:刺激源、刺激、环境、制品、响应、<b>响应度量(必须量化)</b>。如"1万并发下单,订单服务95%请求≤2秒"。</div>',
  pitfalls: '<div class="pit"><b>误解:质量属性能同时全部最优。</b>它们常冲突(安全vs性能),架构本质是<b>权衡取舍</b>。响应度量必须量化,忌"很快"。</div>',
  quiz: [
    { type: 'choice', q: '"系统支持1万并发且响应<2秒"刻画的质量属性是?', options: ['可用性', '性能', '安全性', '可移植性'], answer: 1, source: '高频', explain: '并发与响应时间是性能。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/03-style">架构风格</a> · 下一课:<a href="#/l/arch/05-evaluation">架构评估</a></p>'
});
