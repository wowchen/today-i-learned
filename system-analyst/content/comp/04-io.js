SAN.registerLesson({
  id: 'comp/04-io',
  module: 'comp',
  order: 4,
  title: 'IO 方式与总线',
  minutes: 4,
  keywords: ['IO', '中断', 'DMA', '通道', '总线', '寻址'],
  concept: '<p>IO 控制方式解决"CPU 怎样不被慢外设拖死",从笨到省 CPU:<b>程序查询 → 中断 → <gd data-term="dma">DMA</gd> → 通道</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考。重点:四种方式 CPU 参与度排序、DMA特点、地址总线寻址。</p>',
  core: '<table><tr><th>方式</th><th>CPU参与</th></tr>' +
    '<tr><td>程序查询</td><td>最高(死等轮询)</td></tr>' +
    '<tr><td>中断</td><td>较高(按字节搬)</td></tr>' +
    '<tr><td>DMA</td><td>低(成块直传)</td></tr>' +
    '<tr><td>通道</td><td>最低(专用处理器)</td></tr></table>' +
    '<div class="ex">地址总线 n 位 → 可寻址 2ⁿ;32 位即 4GB。DMA 仅在传输首尾介入 CPU。</div>',
  pitfalls: '<div class="pit"><b>误解:DMA完全不需CPU。</b>DMA仍需CPU在开始设参数、结束响应中断,只是过程不占CPU。</div>',
  quiz: [
    { type: 'choice', q: 'CPU参与程度最低的IO方式是?', options: ['程序查询', '中断', 'DMA', '通道'], answer: 3, source: '高频', explain: '通道有独立处理能力,CPU参与最少。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/03-checkcode">校验码</a> · 下一课:<a href="#/l/comp/05-performance">系统性能</a></p>'
});
