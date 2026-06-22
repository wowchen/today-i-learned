SAD.registerLesson({
  id: 'comp/02-storage-hierarchy',
  module: 'comp',
  order: 2,
  title: '存储体系:Cache 到外存',
  minutes: 5,
  key: true,
  keywords: ['存储体系', 'Cache', '局部性', '命中率', '虚拟存储', '寄存器'],
  concept: '<p>存储器按"速度快→慢、容量小→大、价贵→廉"分层:<b>寄存器 → <gd data-term="cache">Cache</gd> → 主存 → 外存</b>。靠<gd data-term="locality">局部性原理</gd>,让常用数据待在快的层,整体又快又便宜。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考。重点:层次顺序、Cache命中率与平均访问时间计算、局部性。</p>',
  core: '<p><b>层次金字塔(越上越快越贵越小):</b></p>' +
    '<figure class="fig"><svg viewBox="0 0 300 120" width="100%" role="img" aria-label="存储层次金字塔">' +
    '<rect x="120" y="8" width="60" height="20" fill="none" stroke="var(--accent)"/><text x="150" y="22" text-anchor="middle" fill="var(--ink)" font-size="11">寄存器</text>' +
    '<rect x="100" y="32" width="100" height="20" fill="none" stroke="var(--accent)"/><text x="150" y="46" text-anchor="middle" fill="var(--ink)" font-size="11">Cache</text>' +
    '<rect x="80" y="56" width="140" height="20" fill="none" stroke="var(--line2)"/><text x="150" y="70" text-anchor="middle" fill="var(--ink)" font-size="11">主存(内存)</text>' +
    '<rect x="60" y="80" width="180" height="20" fill="none" stroke="var(--line2)"/><text x="150" y="94" text-anchor="middle" fill="var(--ink)" font-size="11">外存(磁盘/SSD)</text>' +
    '</svg><figcaption>图 · 存储层次:上快下大</figcaption></figure>' +
    '<p><b>平均访问时间</b> = 命中率×快层时间 + (1−命中率)×慢层时间。</p>' +
    '<div class="ex">例:Cache命中率98%、Cache访问1ns、主存100ns,则平均≈0.98×1+0.02×100=<b>2.98ns</b>。命中率每提高一点,收益巨大。</div>',
  pitfalls: '<div class="pit"><b>误解1:Cache越大越好。</b>Cache过大成本高、查找慢,关键是<b>命中率</b>;靠局部性而非堆容量。</div>' +
    '<div class="pit"><b>误解2:Cache由程序员手动管理。</b>硬件Cache对程序透明、自动换入换出;程序员能影响的是访问模式(改善局部性)。</div>',
  quiz: [
    { type: 'choice', q: '存储层次"由快到慢"正确的是?', options: ['主存→Cache→寄存器→外存', '寄存器→Cache→主存→外存', '外存→主存→Cache→寄存器', 'Cache→寄存器→主存→外存'], answer: 1, source: '高频', explain: '寄存器最快,其后Cache、主存、外存。' },
    { type: 'fill', q: 'Cache命中率90%,Cache访问10ns,主存访问110ns,平均访问时间为____ns。', answer: ['20'], source: '计算', explain: '0.9×10+0.1×110=9+11=20ns。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/01-computer-architecture">体系结构与CPU</a> · 虚存见:<a href="#/l/os/05-memory">存储管理</a></p>'
});
