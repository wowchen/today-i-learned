SAD.registerLesson({
  id: 'quality/01-attributes',
  module: 'quality',
  order: 1,
  title: '质量属性总览',
  minutes: 5,
  key: true,
  keywords: ['质量属性', '性能', '可用性', '安全性', '可修改性', '易用性', '可测试性'],
  concept: '<p><gd data-term="quality-attribute">质量属性</gd>是系统的"非功能"特性——不是"能不能用",而是"用得好不好"。它是架构设计的<b>头号驱动力</b>,也是案例与论文的核心。</p>',
  exam: '<p><b>考纲定位:</b>案例必考、论文常考。重点:六大运行期/开发期质量属性的区分与含义。</p>',
  core: '<table><tr><th>类别</th><th>质量属性</th></tr>' +
    '<tr><td>运行期(运行时体现)</td><td>性能、可用性、安全性、易用性、可伸缩性</td></tr>' +
    '<tr><td>开发期(开发时体现)</td><td>可修改性、可测试性、可移植性、可重用性</td></tr></table>' +
    '<div class="ex">区分小技巧:用户运行时能感受到的(快不快、稳不稳、安不安全)是<b>运行期</b>;开发/维护时才体现的(好不好改、好不好测)是<b>开发期</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:质量属性可以同时全部最优。</b>质量属性之间常<b>互相冲突</b>(如安全 vs 性能、可修改 vs 性能),架构设计本质就是<b>权衡取舍</b>(见权衡点、ATAM)。</div>',
  quiz: [
    { type: 'choice', q: '下列属于"开发期"质量属性的是?', options: ['性能', '可用性', '可修改性', '安全性'], answer: 2, source: '高频', explain: '可修改性、可测试性、可移植性属开发期质量属性。' },
    { type: 'choice', q: '架构设计的头号驱动力通常是?', options: ['编码规范', '质量属性(非功能需求)', '注释数量', '界面配色'], answer: 1, source: '理解', explain: '质量属性(非功能需求)是架构设计的主要驱动。' }
  ],
  links: '<p>下一课:<a href="#/l/quality/02-scenario">质量属性场景</a></p>'
});
