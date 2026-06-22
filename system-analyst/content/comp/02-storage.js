SAN.registerLesson({
  id: 'comp/02-storage',
  module: 'comp',
  order: 2,
  title: '存储体系:Cache 到外存',
  minutes: 5,
  key: true,
  keywords: ['存储体系', 'Cache', '命中率', '局部性', '平均访问时间'],
  concept: '<p>存储按"快→慢、小→大、贵→廉"分层:<b>寄存器 → <gd data-term="cache">Cache</gd> → 主存 → 外存</b>。靠局部性原理让常用数据待在快层。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考。重点:层次顺序、Cache命中率与平均访问时间计算。</p>',
  core: '<p><b>平均访问时间</b> = 命中率×快层时间 + (1−命中率)×慢层时间。</p>' +
    '<div class="ex">例:命中率98%、Cache 1ns、主存100ns,平均≈0.98×1+0.02×100=<b>2.98ns</b>。命中率每升一点收益巨大。</div>',
  pitfalls: '<div class="pit"><b>误解:Cache越大越好。</b>关键是<b>命中率</b>,靠局部性而非堆容量;过大反而成本高、查找慢。</div>',
  quiz: [
    { type: 'fill', q: 'Cache命中率90%,Cache 10ns,主存110ns,平均访问时间为____ns。', answer: ['20'], source: '计算', explain: '0.9×10+0.1×110=20ns。' },
    { type: 'choice', q: '存储层次由快到慢正确的是?', options: ['主存→Cache→寄存器', '寄存器→Cache→主存→外存', '外存→主存→Cache', 'Cache→寄存器→主存'], answer: 1, source: '高频', explain: '寄存器最快,其后Cache、主存、外存。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/01-architecture">体系结构</a> · 下一课:<a href="#/l/comp/03-checkcode">校验码</a></p>'
});
