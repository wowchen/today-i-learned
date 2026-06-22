SAN.registerLesson({
  id: 'comp/01-architecture',
  module: 'comp',
  order: 1,
  title: '计算机体系结构与CPU',
  minutes: 5,
  keywords: ['CPU', '冯诺依曼', 'CISC', 'RISC', '体系结构', '流水线'],
  concept: '<p>硬件遵循<b>冯·诺依曼结构</b>:运算器、控制器、存储器、输入、输出五大部件,程序与数据都以二进制存储、按地址访问。CPU = 运算器+控制器+寄存器。</p>',
  exam: '<p><b>考纲定位:</b>综合知识送分。常考冯诺依曼部件、CISC/RISC对比、寻址、流水线。</p>',
  core: '<table><tr><th>对比</th><th>CISC</th><th>RISC</th></tr>' +
    '<tr><td>指令</td><td>多、复杂、不定长</td><td>少、简单、定长</td></tr>' +
    '<tr><td>实现</td><td>微程序为主</td><td>硬布线、寄存器多</td></tr>' +
    '<tr><td>流水线</td><td>难</td><td>易,适合<gd data-term="pipeline">流水线</gd></td></tr>' +
    '<tr><td>代表</td><td>x86</td><td>ARM/MIPS</td></tr></table>' +
    '<div class="ex">手机/嵌入式多用 RISC(ARM):省电、规整、好流水线。</div>',
  pitfalls: '<div class="pit"><b>误解:RISC指令少所以弱。</b>RISC用多条简单指令组合完成复杂功能,换更高主频与流水线效率。</div>',
  quiz: [
    { type: 'choice', q: 'RISC的典型特征是?', options: ['指令变长', '指令多而复杂', '指令定长精简、寄存器多', '难以流水'], answer: 2, source: '高频', explain: 'RISC指令定长精简、寄存器多,便于流水线。' },
    { type: 'choice', q: '冯·诺依曼结构的核心思想是?', options: ['程序数据分开存', '存储程序、按地址执行', '无需存储器', '指令必硬布线'], answer: 1, source: '高频', explain: '核心是"存储程序"。' }
  ],
  links: '<p>下一课:<a href="#/l/comp/02-storage">存储体系</a></p>'
});
