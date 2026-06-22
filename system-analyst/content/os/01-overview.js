SAN.registerLesson({
  id: 'os/01-overview',
  module: 'os',
  order: 1,
  title: '操作系统概述与类型',
  minutes: 4,
  keywords: ['操作系统', '批处理', '分时', '实时', '五大功能'],
  concept: '<p>操作系统管理硬件资源、为程序提供运行环境。五大功能:<b>处理机、存储、设备、文件、作业管理</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识基础。重点:OS类型特征、五大功能。</p>',
  core: '<table><tr><th>类型</th><th>特征</th></tr>' +
    '<tr><td>批处理</td><td>成批作业、吞吐高、无交互</td></tr>' +
    '<tr><td>分时</td><td>时间片轮转、交互强</td></tr>' +
    '<tr><td>实时</td><td>规定时间内必响应</td></tr>' +
    '<tr><td>分布式</td><td>多机协同、透明</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:实时系统就是快。</b>实时强调时间确定性,不是平均速度快。</div>',
  quiz: [
    { type: 'choice', q: '强调"规定时间内必须响应"的是?', options: ['批处理', '分时', '实时', '单道'], answer: 2, source: '高频', explain: '实时系统强调时间确定性。' }
  ],
  links: '<p>下一课:<a href="#/l/os/02-process-thread">进程与线程</a></p>'
});
