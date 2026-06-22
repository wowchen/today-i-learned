SAD.registerLesson({
  id: 'embed/05-reliability',
  module: 'embed',
  order: 5,
  title: '嵌入式可靠性与安全',
  minutes: 4,
  keywords: ['嵌入式可靠性', '看门狗', '冗余', '功能安全', '容错', 'Watchdog'],
  concept: '<p>嵌入式常用于关键场景(车/医/工控),可靠性与安全是命门。常用手段:看门狗、冗余、自检、功能安全设计。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:看门狗作用、嵌入式容错手段。</p>',
  core: '<table><tr><th>手段</th><th>作用</th></tr>' +
    '<tr><td>看门狗(Watchdog)</td><td>程序跑飞/卡死时定时器超时自动复位</td></tr>' +
    '<tr><td>冗余/双机</td><td>关键部件备份,故障切换</td></tr>' +
    '<tr><td>上电自检(POST)</td><td>启动时检查硬件是否正常</td></tr>' +
    '<tr><td>功能安全</td><td>按标准(如ISO 26262)设计失效安全</td></tr></table>' +
    '<div class="ex">看门狗是嵌入式"保命"标配:正常时程序定时"喂狗",一旦卡死不喂,看门狗超时就重启系统,避免永久死机。</div>',
  pitfalls: '<div class="pit"><b>误解:看门狗能修复软件bug。</b>看门狗只能在卡死时<b>复位重启</b>恢复运行,治标不治本;根因还需靠可靠性设计与测试解决。</div>',
  quiz: [
    { type: 'choice', q: '嵌入式系统中,程序卡死时自动复位系统的机制是?', options: ['缓存', '看门狗', '中断', 'DMA'], answer: 1, source: '高频', explain: '看门狗定时器在程序未按时"喂狗"时触发复位。' }
  ],
  links: '<p>嵌入式模块完。下一模块:<a href="#/l/evo/01-evolution">软件架构演化</a> · 可靠性:<a href="#/l/rel/04-design">可靠性设计与冗余</a></p>'
});
