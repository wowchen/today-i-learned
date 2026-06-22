SAN.registerLesson({
  id: 'comp/05-performance',
  module: 'comp',
  order: 5,
  title: '系统性能与 Amdahl 定律',
  minutes: 5,
  keywords: ['性能', '响应时间', '吞吐量', 'Amdahl', '加速比', '基准测试'],
  concept: '<p>性能要量化:<b>响应时间、吞吐量(TPS/QPS)、资源利用率</b>。优化时遵循 <b>Amdahl 定律</b>:整体提速受不可优化部分限制。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:性能指标、Amdahl 加速比计算。</p>',
  core: '<p><b>Amdahl:</b> 加速比 S = 1/((1−p)+p/n),上限 1/(1−p)。</p>' +
    '<div class="ex">例:60%可并行、8倍加速:S=1/(0.4+0.6/8)=1/0.475≈<b>2.1倍</b>;上限=1/0.4=<b>2.5倍</b>。说明优化占比大的部分才划算。</div>' +
    '<p>性能评估:基准测试、负载测试、压力测试、排队论建模。</p>',
  pitfalls: '<div class="pit"><b>误解:核数翻倍性能翻倍。</b>受串行部分制约,加速比有上限,盲目堆核收益递减。</div>',
  quiz: [
    { type: 'choice', q: '某程序80%可并行,理论最大加速比为?', options: ['4', '5', '8', '无穷'], answer: 1, source: '高频计算', explain: '上限=1/(1−0.8)=5倍。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/04-io">IO方式</a> · 下一课:<a href="#/l/comp/06-embedded">嵌入式基础</a></p>'
});
