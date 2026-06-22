SAD.registerLesson({
  id: 'os/01-overview',
  module: 'os',
  order: 1,
  title: '操作系统概述与类型',
  minutes: 4,
  keywords: ['操作系统', '批处理', '分时', '实时', '功能', '内核'],
  concept: '<p>操作系统(OS)是管理硬件资源、为程序提供运行环境的系统软件。五大功能:<b>处理机管理、存储管理、设备管理、文件管理、作业管理</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识基础题。重点:OS类型与特征、五大管理功能。</p>',
  core: '<table><tr><th>类型</th><th>特征</th><th>例</th></tr>' +
    '<tr><td>批处理</td><td>成批作业、吞吐高、无交互</td><td>早期大型机</td></tr>' +
    '<tr><td>分时</td><td>多用户分时间片、交互性强</td><td>UNIX/Linux</td></tr>' +
    '<tr><td>实时</td><td>限定时间内响应、强确定性</td><td>工业控制、车载</td></tr>' +
    '<tr><td>分布式</td><td>多机协同、透明</td><td>集群系统</td></tr></table>' +
    '<div class="ex">实时系统又分硬实时(超时即失败,如刹车)和软实时(偶尔超时可容忍,如视频)。</div>',
  pitfalls: '<div class="pit"><b>误解:实时系统就是"速度快"。</b>实时强调的是<b>确定性(在规定时间内必完成)</b>,不是平均速度快。</div>',
  quiz: [
    { type: 'choice', q: '强调"在规定时间内必须响应"的操作系统是?', options: ['批处理系统', '分时系统', '实时系统', '单道系统'], answer: 2, source: '高频', explain: '实时系统强调时间确定性,规定时间内必须完成响应。' }
  ],
  links: '<p>下一课:<a href="#/l/os/02-process-thread">进程与线程</a> · 实时深入:<a href="#/l/embed/02-rtos">实时操作系统</a></p>'
});
