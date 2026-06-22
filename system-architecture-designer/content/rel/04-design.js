SAD.registerLesson({
  id: 'rel/04-design',
  module: 'rel',
  order: 4,
  title: '可靠性设计与冗余',
  minutes: 5,
  keywords: ['可靠性设计', '冗余', '热备', '冷备', 'N版本', '恢复块', '双机'],
  concept: '<p>提升可靠性的核心手段是<gd data-term="redundancy">冗余</gd>:用备份在故障时顶上。冗余分硬件、软件、信息、时间四类。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文(可用性主题)。重点:冗余类型、热备/冷备、N版本与恢复块。</p>',
  core: '<table><tr><th>软件容错</th><th>做法</th></tr>' +
    '<tr><td>N版本程序设计</td><td>多个独立团队各写一版,多数表决(<b>静态冗余、并行</b>)</td></tr>' +
    '<tr><td>恢复块</td><td>主块出错则切换备份块重试(<b>动态冗余、串行</b>)</td></tr></table>' +
    '<table><tr><th>备份方式</th><th>说明</th></tr>' +
    '<tr><td>热备(双机热备)</td><td>备机实时同步,故障秒级切换</td></tr>' +
    '<tr><td>冷备</td><td>备机平时不运行,切换慢但省钱</td></tr></table>' +
    '<div class="ex">可用性战术常组合:双机热备 + 心跳检测 + 自动故障转移(failover) + 数据多副本——既提升 MTBF 又降低 MTTR。</div>',
  pitfalls: '<div class="pit"><b>误解:N版本和恢复块一样。</b>N版本是<b>多版本并行+表决</b>(静态冗余);恢复块是<b>出错再切备份串行重试</b>(动态冗余),机制不同。</div>',
  quiz: [
    { type: 'choice', q: '"多个独立开发的版本并行运行、多数表决"的容错技术是?', options: ['恢复块', 'N版本程序设计', '冷备份', '看门狗'], answer: 1, source: '高频', explain: 'N版本程序设计是多版本并行+表决的静态冗余。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/03-series-parallel">串并联计算</a> · 下一课:<a href="#/l/rel/05-fault-tolerance">容错技术</a> · RAID:<a href="#/l/comp/06-raid">磁盘阵列</a></p>'
});
