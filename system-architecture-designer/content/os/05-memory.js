SAD.registerLesson({
  id: 'os/05-memory',
  module: 'os',
  order: 5,
  title: '存储管理:分页 / 分段 / 虚存',
  minutes: 5,
  keywords: ['存储管理', '分页', '分段', '虚拟存储', '页面置换', '缺页', 'LRU'],
  concept: '<p>存储管理解决"程序怎样装进有限内存"。<gd data-term="paging">分页</gd>按固定大小切、解决外部碎片;分段按逻辑模块切、便于共享保护;<gd data-term="virtual-memory">虚拟存储</gd>让程序大于物理内存也能跑。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:分页vs分段、页面置换算法、缺页判断。</p>',
  core: '<table><tr><th>对比</th><th>分页</th><th>分段</th></tr>' +
    '<tr><td>划分依据</td><td>固定大小(物理)</td><td>逻辑模块(可变)</td></tr>' +
    '<tr><td>碎片</td><td>有内部碎片</td><td>有外部碎片</td></tr>' +
    '<tr><td>对用户</td><td>透明</td><td>可见、便于共享保护</td></tr></table>' +
    '<p><b>页面置换算法:</b>OPT(最优,理想)、FIFO(可能Belady异常)、<b>LRU(最近最少使用,常考)</b>。</p>' +
    '<div class="ex">缺页:要访问的页不在内存 → 触发缺页中断 → 调入(必要时按置换算法淘汰一页)。缺页率高严重拖慢系统(抖动)。</div>',
  pitfalls: '<div class="pit"><b>误解1:分页有外部碎片。</b>分页是固定大小,产生的是<b>内部碎片</b>;外部碎片是分段/可变分区的问题。</div>' +
    '<div class="pit"><b>误解2:FIFO 分配的物理块越多缺页越少。</b>FIFO 可能出现 <b>Belady 异常</b>:块数增多反而缺页增多;LRU/OPT 无此问题。</div>',
  quiz: [
    { type: 'choice', q: '可能出现Belady异常(增加物理块反而缺页增多)的置换算法是?', options: ['LRU', 'OPT', 'FIFO', '以上都会'], answer: 2, source: '高频', explain: 'FIFO可能出现Belady异常,LRU和OPT不会。' },
    { type: 'choice', q: '分页存储管理产生的碎片主要是?', options: ['外部碎片', '内部碎片', '没有碎片', '段间碎片'], answer: 1, source: '高频', explain: '分页固定大小,最后一页可能用不满,产生内部碎片。' }
  ],
  links: '<p>上一课:<a href="#/l/os/04-deadlock">死锁</a> · 下一课:<a href="#/l/os/06-file-device">文件与设备管理</a> · 相关:<a href="#/l/comp/02-storage-hierarchy">存储体系</a></p>'
});
