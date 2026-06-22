SAD.registerLesson({
  id: 'future/03-iot',
  module: 'future',
  order: 3,
  title: '物联网架构',
  minutes: 4,
  keywords: ['物联网', 'IoT', '感知层', '网络层', '应用层', '边缘计算', '传感器'],
  concept: '<p><gd data-term="iot">物联网</gd>把物理设备连上网,采集数据并远程控制。经典<b>三层架构:感知层 → 网络层 → 应用层</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:三层职责、边缘计算的作用。</p>',
  core: '<table><tr><th>层</th><th>职责</th></tr>' +
    '<tr><td>感知层</td><td>传感器/RFID采集、执行器控制</td></tr>' +
    '<tr><td>网络层</td><td>数据传输(5G/NB-IoT/WiFi)</td></tr>' +
    '<tr><td>应用层</td><td>数据处理、业务应用、展示</td></tr></table>' +
    '<div class="ex"><b>边缘计算</b>把部分计算放到靠近设备的边缘节点,减少上云延迟与带宽、提升实时性——是物联网/工业场景的关键补充。</div>',
  pitfalls: '<div class="pit"><b>误解:物联网数据都要上云处理。</b>对实时性高、数据量大的场景,<b>边缘计算</b>就近处理更合适,只把必要数据上云。</div>',
  quiz: [
    { type: 'choice', q: '物联网三层架构中,传感器采集数据属于?', options: ['感知层', '网络层', '应用层', '会话层'], answer: 0, source: '高频', explain: '感知层负责采集与执行。' }
  ],
  links: '<p>上一课:<a href="#/l/future/02-bigdata">大数据架构</a> · 下一课:<a href="#/l/future/04-ai">人工智能</a></p>'
});
