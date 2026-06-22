SAD.registerLesson({
  id: 'perf/03-evaluation',
  module: 'perf',
  order: 3,
  title: '性能评估方法',
  minutes: 4,
  keywords: ['性能评估', '基准测试', '负载测试', '压力测试', '排队论', '监控'],
  concept: '<p>性能评估就是"测出系统多快、能扛多少"。方法从简到深:基准测试、负载/压力测试、排队论建模、实际监控分析。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:各类性能测试的区分、排队论思想。</p>',
  core: '<table><tr><th>方法</th><th>目的</th></tr>' +
    '<tr><td>基准测试 Benchmark</td><td>用标准负载横向对比</td></tr>' +
    '<tr><td>负载测试</td><td>逐步加压,看在预期负载下表现</td></tr>' +
    '<tr><td>压力测试</td><td>压到极限,找崩溃点与瓶颈</td></tr>' +
    '<tr><td>排队论建模</td><td>用数学模型预测响应时间/排队长度</td></tr></table>' +
    '<div class="ex">区分:<b>负载测试</b>验"预期负载下达不达标";<b>压力测试</b>验"压垮它需要多大、垮了怎么表现"。</div>',
  pitfalls: '<div class="pit"><b>误解:负载测试=压力测试。</b>负载测试看<b>预期负载下的表现</b>;压力测试是<b>超出极限找崩溃点</b>。目的不同。</div>',
  quiz: [
    { type: 'choice', q: '为找出系统崩溃点和性能瓶颈,应做?', options: ['负载测试', '压力测试', '单元测试', '验收测试'], answer: 1, source: '高频', explain: '压力测试压到极限,定位崩溃点与瓶颈。' }
  ],
  links: '<p>上一课:<a href="#/l/perf/02-amdahl">Amdahl定律</a> · 下一课:<a href="#/l/perf/04-design">性能设计</a></p>'
});
