SAD.registerLesson({
  id: 'future/02-bigdata',
  module: 'future',
  order: 2,
  title: '大数据架构',
  minutes: 5,
  keywords: ['大数据', '4V', 'Hadoop', 'Spark', 'Lambda架构', '批流', '数据湖'],
  concept: '<p><gd data-term="big-data">大数据</gd>有 <b>4V</b> 特征:Volume(量大)、Variety(多样)、Velocity(高速)、Value(价值密度低)。架构核心是"分而治之 + 批流结合"。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:4V、批处理vs流处理、典型技术栈。</p>',
  core: '<table><tr><th>处理模式</th><th>特点</th><th>技术</th></tr>' +
    '<tr><td>批处理</td><td>海量、延迟高、吞吐大</td><td>Hadoop MapReduce</td></tr>' +
    '<tr><td>流处理</td><td>实时、低延迟</td><td>Spark Streaming/Flink</td></tr></table>' +
    '<div class="ex"><b>Lambda 架构</b>把批处理层(准、全)和速度层(快、实时)结合,兼顾准确与实时;Kappa 架构则用统一流处理简化。数据湖存原始多样数据,数仓存治理后的结构化数据。</div>',
  pitfalls: '<div class="pit"><b>误解:大数据=数据量大。</b>量大只是其一;<b>多样、实时、价值密度低</b>同样关键——4V 共同定义了大数据,处理思路也随之不同。</div>',
  quiz: [
    { type: 'choice', q: '大数据4V特征不包括?', options: ['Volume量大', 'Variety多样', 'Velocity高速', 'Virtual虚拟'], answer: 3, source: '高频', explain: '4V是Volume、Variety、Velocity、Value,无Virtual。' }
  ],
  links: '<p>上一课:<a href="#/l/future/01-cloud">云计算</a> · 下一课:<a href="#/l/future/03-iot">物联网架构</a> · 数仓:<a href="#/l/db/08-warehouse-nosql">数据仓库与NoSQL</a></p>'
});
