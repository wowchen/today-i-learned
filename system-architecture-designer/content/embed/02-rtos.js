SAD.registerLesson({
  id: 'embed/02-rtos',
  module: 'embed',
  order: 2,
  title: '实时操作系统与调度',
  minutes: 5,
  key: true,
  keywords: ['RTOS', '硬实时', '软实时', '优先级调度', '抢占', '可预测'],
  concept: '<p><gd data-term="rtos">实时操作系统(RTOS)</gd>的关键不是"快",而是"<b>准</b>"——在确定时间内必有响应。分硬实时(超时即失败)和软实时(偶尔超时可容忍)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:硬/软实时区分、实时调度(优先级抢占、优先级反转)。</p>',
  core: '<table><tr><th>类型</th><th>要求</th><th>例</th></tr>' +
    '<tr><td>硬实时</td><td>绝不能超时</td><td>刹车、飞控、起搏器</td></tr>' +
    '<tr><td>软实时</td><td>偶尔超时可接受</td><td>视频播放、抢票</td></tr></table>' +
    '<div class="ex">实时调度多用<b>基于优先级的抢占式</b>调度。要警惕<b>优先级反转</b>:低优先级任务持锁挡住高优先级,解法是优先级继承/天花板协议。</div>',
  pitfalls: '<div class="pit"><b>误解:实时系统就是运行速度快。</b>实时强调<b>时间确定性(按时完成)</b>,一个慢但永远准时的系统也是合格实时系统。</div>',
  quiz: [
    { type: 'choice', q: '汽车防抱死刹车(ABS)控制系统属于?', options: ['软实时', '硬实时', '非实时', '批处理'], answer: 1, source: '高频', explain: '刹车控制超时会致命,属硬实时。' },
    { type: 'choice', q: '低优先级任务持有锁导致高优先级任务被阻塞,称为?', options: ['死锁', '优先级反转', '饥饿', '抖动'], answer: 1, source: '高频', explain: '这是优先级反转,可用优先级继承等解决。' }
  ],
  links: '<p>上一课:<a href="#/l/embed/01-concept">嵌入式概述</a> · 下一课:<a href="#/l/embed/03-architecture">嵌入式系统架构设计</a> · 调度:<a href="#/l/os/03-scheduling">进程调度</a></p>'
});
