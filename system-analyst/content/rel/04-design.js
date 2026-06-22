SAN.registerLesson({
  id: 'rel/04-design',
  module: 'rel',
  order: 4,
  title: '可靠性设计与容错',
  minutes: 5,
  key: true,
  keywords: ['可靠性设计', '冗余', '热备', '冷备', 'N版本', '容错', '故障转移'],
  concept: '<p>提升可靠性的核心是<b>冗余</b>;系统失效时仍能服务靠<gd data-term="fault-tolerance">容错</gd>:检测→转移→恢复。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文。重点:冗余/热备冷备、N版本与恢复块、容错三步。</p>',
  core: '<table><tr><th>容错技术</th><th>说明</th></tr>' +
    '<tr><td>N版本程序设计</td><td>多版本并行+表决(静态冗余)</td></tr>' +
    '<tr><td>恢复块</td><td>主块出错切备份块重试(动态冗余)</td></tr>' +
    '<tr><td>双机热备</td><td>备机实时同步、秒级切换</td></tr></table>' +
    '<div class="ex">高可用常组合:双机热备+心跳检测+自动故障转移+数据多副本;并配熔断、限流、降级。</div>',
  pitfalls: '<div class="pit"><b>误解:N版本=恢复块。</b>N版本是多版本并行+表决(静态);恢复块是出错再切备份串行重试(动态)。</div>',
  quiz: [
    { type: 'choice', q: '"多个独立版本并行运行、多数表决"的容错技术是?', options: ['恢复块', 'N版本程序设计', '冷备份', '看门狗'], answer: 1, source: '高频', explain: 'N版本程序设计是静态冗余+表决。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/03-series-parallel">串并联计算</a> · 下一课:<a href="#/l/rel/05-security">安全性设计</a></p>'
});
