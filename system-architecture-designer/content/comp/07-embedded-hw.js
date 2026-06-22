SAD.registerLesson({
  id: 'comp/07-embedded-hw',
  module: 'comp',
  order: 7,
  title: '嵌入式硬件基础',
  minutes: 4,
  keywords: ['嵌入式', '单片机', 'SoC', 'FPGA', '固件', 'BootLoader'],
  concept: '<p>嵌入式系统是"为特定任务定制、嵌入在设备里"的计算机,硬件常见形态:单片机(MCU)、片上系统(SoC)、可编程逻辑(FPGA)。本课先认识硬件,架构在进阶篇展开。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例都涉及。本课偏基础概念,嵌入式架构见进阶篇专门模块。</p>',
  core: '<table><tr><th>形态</th><th>特点</th><th>适用</th></tr>' +
    '<tr><td>MCU 单片机</td><td>CPU+存储+IO集成一片,便宜低功耗</td><td>家电、传感器节点</td></tr>' +
    '<tr><td>SoC 片上系统</td><td>把CPU/GPU/通信等集成一芯</td><td>手机、智能设备</td></tr>' +
    '<tr><td>FPGA</td><td>硬件可编程,并行性强</td><td>高性能定制、原型验证</td></tr></table>' +
    '<div class="ex">启动链:上电 → <b>BootLoader</b>(初始化硬件、引导)→ 加载操作系统/固件 → 应用运行。固件常存于 Flash。</div>',
  pitfalls: '<div class="pit"><b>误解:嵌入式就是低端、性能差。</b>嵌入式强调"够用、实时、低功耗、可靠",很多嵌入式SoC性能很强(如车载、手机),不等于低端。</div>',
  quiz: [
    { type: 'choice', q: '嵌入式系统区别于通用计算机的核心特征是?', options: ['运行Windows', '面向特定应用、强调实时与低功耗', '一定没有操作系统', '不能联网'], answer: 1, source: '理解', explain: '嵌入式面向特定应用,强调专用、实时、低功耗、可靠。' }
  ],
  links: '<p>基础·计算机系统完。进阶篇深入:<a href="#/l/embed/01-concept">嵌入式系统概述</a> · 下一模块:<a href="#/l/os/01-overview">操作系统概述</a></p>'
});
