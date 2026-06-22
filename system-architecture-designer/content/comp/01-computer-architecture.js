SAD.registerLesson({
  id: 'comp/01-computer-architecture',
  module: 'comp',
  order: 1,
  title: '计算机体系结构与CPU',
  minutes: 5,
  keywords: ['CPU', '体系结构', '冯诺依曼', 'CISC', 'RISC', '运算器', '控制器'],
  concept: '<p>计算机硬件遵循<b>冯·诺依曼结构</b>:运算器、控制器、存储器、输入、输出五大部件,程序与数据都以二进制存在存储器、按地址访问。CPU = 运算器 + 控制器 + 寄存器。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频送分。常考冯诺依曼部件、CISC/RISC对比、流水线、寻址方式。</p>',
  core: '<p><b>CISC vs RISC:</b></p>' +
    '<table><tr><th>对比</th><th>CISC复杂指令集</th><th>RISC精简指令集</th></tr>' +
    '<tr><td>指令</td><td>多、复杂、长度不定</td><td>少、简单、定长</td></tr>' +
    '<tr><td>实现</td><td>微程序为主</td><td>硬布线、寄存器多</td></tr>' +
    '<tr><td>流水线</td><td>难</td><td>易,适合<gd data-term="pipeline">流水线</gd></td></tr>' +
    '<tr><td>代表</td><td>x86</td><td>ARM、MIPS</td></tr></table>' +
    '<div class="ex">手机/嵌入式多用 RISC(ARM):省电、规整、好流水线;桌面历史上多 x86(CISC)。</div>',
  pitfalls: '<div class="pit"><b>误解1:RISC指令少所以功能弱。</b>不是。RISC用多条简单指令组合完成复杂功能,换来更高主频和流水线效率。</div>' +
    '<div class="pit"><b>误解2:冯诺依曼的瓶颈是CPU太慢。</b>瓶颈在<b>CPU与存储器之间的总线</b>(程序和数据共用一条通道),哈佛结构将其分开缓解。</div>',
  quiz: [
    { type: 'choice', q: '下列属于RISC典型特征的是?', options: ['指令长度可变', '指令数量多且复杂', '指令定长、数量精简、寄存器多', '以微程序为主难以流水'], answer: 2, source: '高频', explain: 'RISC指令定长、精简、寄存器多,便于流水线。' },
    { type: 'choice', q: '冯·诺依曼结构的核心思想是?', options: ['程序与数据分开存储', '存储程序、按地址顺序执行', '无需存储器', '指令必须硬布线'], answer: 1, source: '高频', explain: '冯诺依曼的核心是"存储程序"——程序和数据都存于存储器按地址访问。' }
  ],
  links: '<p>下一课:<a href="#/l/comp/02-storage-hierarchy">存储体系:Cache到外存</a> · 流水线深入:<a href="#/l/comp/05-bus-pipeline">流水线与指令系统</a></p>'
});
