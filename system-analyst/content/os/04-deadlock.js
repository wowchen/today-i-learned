SAN.registerLesson({
  id: 'os/04-deadlock',
  module: 'os',
  order: 4,
  title: '死锁',
  minutes: 5,
  key: true,
  keywords: ['死锁', '四条件', '预防', '避免', '银行家', '资源数'],
  concept: '<p><gd data-term="deadlock">死锁</gd>是多进程互相等待对方资源的僵局,需<b>同时满足四条件</b>,破坏任一即可。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:四条件、处理策略、资源数计算。</p>',
  core: '<p><b>四条件:</b>互斥、占有并等待、不可剥夺、循环等待。</p>' +
    '<table><tr><th>策略</th><th>做法</th></tr>' +
    '<tr><td>预防</td><td>破坏四条件之一</td></tr>' +
    '<tr><td>避免</td><td>银行家算法,分配前判安全</td></tr>' +
    '<tr><td>检测解除</td><td>事后检测并剥夺</td></tr></table>' +
    '<div class="ex"><b>资源数计算:</b>n进程各最多需R个,系统资源 ≥ <b>n×(R−1)+1</b> 必不死锁。5进程各需3个 → 5×2+1=<b>11</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:银行家算法用于死锁检测。</b>银行家是死锁<b>避免</b>(分配前判安全),不是事后检测。</div>',
  quiz: [
    { type: 'choice', q: '不属于死锁四必要条件的是?', options: ['互斥', '占有并等待', '可剥夺', '循环等待'], answer: 2, source: '高频', explain: '是"不可剥夺",不是可剥夺。' },
    { type: 'fill', q: '5进程每个最多需3个同类资源,系统至少____个该资源一定不死锁。', answer: ['11'], source: '高频计算', explain: 'n×(R−1)+1=5×2+1=11。' }
  ],
  links: '<p>上一课:<a href="#/l/os/03-scheduling">调度同步</a> · 下一课:<a href="#/l/os/05-memory">存储管理</a></p>'
});
