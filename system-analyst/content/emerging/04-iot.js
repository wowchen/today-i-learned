SAN.registerLesson({
  id: 'emerging/04-iot',
  module: 'emerging',
  order: 4,
  title: '物联网',
  minutes: 4,
  keywords: ['物联网', 'IoT', '感知层', '网络层', '应用层', '边缘计算'],
  concept: '<p><gd data-term="iot">物联网</gd>把设备连网采集与控制,三层架构:<b>感知层 → 网络层 → 应用层</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:三层职责、边缘计算。</p>',
  core: '<table><tr><th>层</th><th>职责</th></tr>' +
    '<tr><td>感知层</td><td>传感器采集、执行器控制</td></tr>' +
    '<tr><td>网络层</td><td>数据传输(5G/NB-IoT)</td></tr>' +
    '<tr><td>应用层</td><td>处理与业务应用</td></tr></table>' +
    '<div class="ex">边缘计算把部分计算放到靠近设备处,降时延省带宽,适合实时性高的物联网场景。</div>',
  pitfalls: '<div class="pit"><b>误解:物联网数据都要上云。</b>实时大量数据宜用<b>边缘计算</b>就近处理,只把必要数据上云。</div>',
  quiz: [
    { type: 'choice', q: '物联网三层架构中传感器采集属于?', options: ['感知层', '网络层', '应用层', '会话层'], answer: 0, source: '高频', explain: '感知层负责采集与执行。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/03-ai">人工智能</a> · 下一课:<a href="#/l/emerging/05-blockchain">区块链</a></p>'
});
