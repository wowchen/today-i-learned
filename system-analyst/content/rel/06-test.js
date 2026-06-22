SAN.registerLesson({
  id: 'rel/06-test',
  module: 'rel',
  order: 6,
  title: '可靠性测试与评估',
  minutes: 4,
  keywords: ['可靠性测试', '老化测试', '故障注入', '可靠性增长模型', '压力测试'],
  concept: '<p>可靠性要测得出、估得准:用压力、老化、故障注入收集失效数据,再用可靠性模型预测。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:可靠性测试类型、增长模型思想。</p>',
  core: '<table><tr><th>测试</th><th>作用</th></tr>' +
    '<tr><td>压力/负载</td><td>高负载下是否稳定</td></tr>' +
    '<tr><td>老化(稳定性)</td><td>长时间运行看是否退化/泄漏</td></tr>' +
    '<tr><td>故障注入</td><td>主动制造故障验证容错</td></tr></table>' +
    '<div class="ex">可靠性增长模型:边测边修,失效率应逐步下降,据此预测"还要测多久达标"。</div>',
  pitfalls: '<div class="pit"><b>误解:功能测试通过就代表可靠。</b>功能测试验"对不对";可靠性靠<b>长时间老化、压力、故障注入</b>验"久不久、稳不稳"。</div>',
  quiz: [
    { type: 'choice', q: '主动制造故障以验证容错能力的测试是?', options: ['功能测试', '故障注入', '单元测试', '验收测试'], answer: 1, source: '高频', explain: '故障注入测试验证容错与恢复。' }
  ],
  links: '<p>可靠性模块完。下一模块:<a href="#/l/test/01-strategy">系统测试策略</a></p>'
});
