SAN.registerLesson({
  id: 'os/05-memory',
  module: 'os',
  order: 5,
  title: '存储管理:分页 / 分段 / 虚存',
  minutes: 5,
  keywords: ['存储管理', '分页', '分段', '虚拟存储', '页面置换', 'LRU', '缺页'],
  concept: '<p><gd data-term="paging">分页</gd>按固定大小切、解决外部碎片;分段按逻辑模块切、便于共享保护;<gd data-term="virtual-memory">虚拟存储</gd>让程序大于内存也能跑。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:分页vs分段、置换算法、缺页。</p>',
  core: '<table><tr><th>对比</th><th>分页</th><th>分段</th></tr>' +
    '<tr><td>划分</td><td>固定大小(物理)</td><td>逻辑模块(可变)</td></tr>' +
    '<tr><td>碎片</td><td>内部碎片</td><td>外部碎片</td></tr></table>' +
    '<p>置换算法:OPT(理想)、FIFO(可能Belady异常)、<b>LRU</b>。</p>',
  pitfalls: '<div class="pit"><b>误解:分页产生外部碎片。</b>分页是固定大小,产生<b>内部碎片</b>;外部碎片是分段的问题。FIFO可能Belady异常,LRU/OPT不会。</div>',
  quiz: [
    { type: 'choice', q: '可能出现Belady异常的置换算法是?', options: ['LRU', 'OPT', 'FIFO', '都会'], answer: 2, source: '高频', explain: 'FIFO可能Belady异常。' },
    { type: 'choice', q: '分页存储产生的碎片主要是?', options: ['外部碎片', '内部碎片', '无碎片', '段间碎片'], answer: 1, source: '高频', explain: '分页最后一页可能用不满,产生内部碎片。' }
  ],
  links: '<p>操作系统模块完。下一模块:<a href="#/l/db/01-model">数据库与三级模式</a></p>'
});
