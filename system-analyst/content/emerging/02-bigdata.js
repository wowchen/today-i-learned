SAN.registerLesson({
  id: 'emerging/02-bigdata',
  module: 'emerging',
  order: 2,
  title: '大数据',
  minutes: 4,
  keywords: ['大数据', '4V', 'Hadoop', 'Spark', '批处理', '流处理'],
  concept: '<p><gd data-term="big-data">大数据</gd>有 <b>4V</b>:Volume量大、Variety多样、Velocity高速、Value价值密度低。处理思路"分而治之+批流结合"。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:4V、批vs流。</p>',
  core: '<table><tr><th>模式</th><th>特点</th><th>技术</th></tr>' +
    '<tr><td>批处理</td><td>海量、延迟高</td><td>Hadoop</td></tr>' +
    '<tr><td>流处理</td><td>实时、低延迟</td><td>Flink/Spark Streaming</td></tr></table>' +
    '<div class="ex">Lambda架构=批处理层(准)+速度层(快);数据湖存原始数据,数仓存治理后的结构化数据。</div>',
  pitfalls: '<div class="pit"><b>误解:大数据=数据量大。</b>量大只是其一,4V共同定义,处理思路也随之不同。</div>',
  quiz: [
    { type: 'choice', q: '大数据4V不包括?', options: ['Volume', 'Variety', 'Velocity', 'Virtual'], answer: 3, source: '高频', explain: '4V是Volume/Variety/Velocity/Value。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/01-cloud">云计算</a> · 下一课:<a href="#/l/emerging/03-ai">人工智能</a></p>'
});
