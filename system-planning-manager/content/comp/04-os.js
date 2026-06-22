SPM.registerLesson({
  id: 'comp/04-os',
  module: 'comp',
  order: 4,
  title: '操作系统常识',
  minutes: 5,
  keywords: ['进程', '线程', '内存', '文件系统', '调度'],
  concept: '<p>操作系统管理 CPU、内存、设备、文件。运维要懂基本概念:<b>进程/线程、内存、文件系统、负载</b>,才能看监控、判故障。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,选择题少量。</p>',
  core: '<ul>' +
    '<li><b>进程 vs 线程</b>:进程是资源分配单位,线程是 CPU 调度单位;线程更轻、共享进程内存。</li>' +
    '<li><b>内存管理</b>:虚拟内存、分页;内存不足会频繁换页(性能骤降)。</li>' +
    '<li><b>常见运维指标</b>:CPU 使用率、负载 load、内存/磁盘使用率、IO 等待——监控与<gd data-term="capacity">容量管理</gd>的基础。</li>' +
    '</ul>' +
    '<div class="ex">看监控:load 持续高于核心数、内存频繁 swap、磁盘满,都是事件预警信号。</div>',
  pitfalls: '<div class="pit"><b>CPU 使用率高不等于一定有问题</b>;要结合 load、响应时间、业务量综合判断。</div>',
  quiz: [
    { type: 'choice', q: '操作系统中 CPU 调度的基本单位是?', options: ['进程', '线程', '文件', '页'], answer: 1, source: '高频', explain: '线程是调度单位,进程是资源分配单位。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/03-integration">系统集成</a> · 下一课:<a href="#/l/comp/05-embedded">嵌入式</a></p>'
});
