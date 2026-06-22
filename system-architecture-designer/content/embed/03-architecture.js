SAD.registerLesson({
  id: 'embed/03-architecture',
  module: 'embed',
  order: 3,
  title: '嵌入式系统架构设计',
  minutes: 4,
  keywords: ['嵌入式架构', '分层', '硬件抽象', 'BSP', '驱动', '裁剪'],
  concept: '<p>嵌入式架构同样讲分层与抽象,核心是用<b>硬件抽象层(HAL/BSP)</b>隔离硬件差异,让上层软件可移植、可裁剪。</p>',
  exam: '<p><b>考纲定位:</b>案例(嵌入式架构)。重点:分层结构、硬件抽象的价值。</p>',
  core: '<p><b>典型分层:</b>应用 → 中间件/库 → 操作系统(RTOS)→ <b>BSP/驱动(硬件抽象层)</b> → 硬件。</p>' +
    '<div class="ex">硬件抽象层把"操作具体寄存器"封装成统一接口,换芯片时<b>只改底层、上层不动</b>——这正是分层与可移植性在嵌入式里的体现。资源受限,故强调按需<b>裁剪</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:嵌入式资源紧张就不该分层。</b>合理分层(尤其硬件抽象)反而提升<b>可移植与可维护性</b>,代价可控;关键是按需裁剪,而非放弃结构。</div>',
  quiz: [
    { type: 'choice', q: '嵌入式中用于隔离硬件差异、提升可移植性的是?', options: ['应用层', '硬件抽象层(BSP/驱动)', '数据库', '编译器'], answer: 1, source: '高频', explain: '硬件抽象层(BSP/驱动)隔离硬件差异,换硬件只改底层。' }
  ],
  links: '<p>上一课:<a href="#/l/embed/02-rtos">实时操作系统</a> · 下一课:<a href="#/l/embed/04-software">嵌入式软件与中间件</a></p>'
});
