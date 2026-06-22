SAD.registerLesson({
  id: 'comp/04-io',
  module: 'comp',
  order: 4,
  title: 'IO 方式:中断 / DMA / 通道',
  minutes: 5,
  keywords: ['IO', '中断', 'DMA', '通道', '程序查询', '输入输出'],
  concept: '<p>CPU 与外设速度差巨大,IO 控制方式就是解决"CPU 怎样不被慢外设拖死"的问题。从最笨到最省 CPU:<b>程序查询 → 中断 → <gd data-term="dma">DMA</gd> → 通道</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考。重点:四种方式 CPU 参与度排序、DMA 的特点。</p>',
  core: '<table><tr><th>方式</th><th>CPU参与度</th><th>特点</th></tr>' +
    '<tr><td>程序查询</td><td>最高(死等)</td><td>CPU不停轮询外设状态,效率最低</td></tr>' +
    '<tr><td>中断</td><td>较高</td><td>外设就绪才打断CPU,按字节传仍需CPU搬</td></tr>' +
    '<tr><td>DMA</td><td>低</td><td>外设与内存<b>直接成块传输</b>,CPU只在首尾介入</td></tr>' +
    '<tr><td>通道/IO处理机</td><td>最低</td><td>专用处理器独立管理IO,CPU基本解放</td></tr></table>' +
    '<div class="ex">DMA 传输时 CPU 可去干别的活,只在传输<b>开始(给参数)和结束(收中断)</b>时介入,大幅提升吞吐。</div>',
  pitfalls: '<div class="pit"><b>误解1:DMA 完全不需要 CPU。</b>DMA 仍需 CPU 在开始时设置(源、目的、长度)、结束时响应中断,只是传输过程不占 CPU。</div>' +
    '<div class="pit"><b>误解2:中断方式比程序查询省事但同样按块传。</b>中断方式仍是<b>按字节/字</b>由 CPU 搬运,成块直传是 DMA 的特点。</div>',
  quiz: [
    { type: 'choice', q: '下列IO方式中CPU参与程度最低的是?', options: ['程序查询', '中断', 'DMA', '通道'], answer: 3, source: '高频', explain: '通道(IO处理机)有独立处理能力,CPU参与最少。' },
    { type: 'choice', q: 'DMA方式下CPU在何时介入?', options: ['每传一个字节', '传输全程', '仅传输开始与结束', '完全不介入'], answer: 2, source: '高频', explain: 'DMA仅在传输开始(设置参数)和结束(响应中断)时需要CPU。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/03-checkcode">校验码</a> · 下一课:<a href="#/l/comp/05-bus-pipeline">流水线与指令系统</a></p>'
});
