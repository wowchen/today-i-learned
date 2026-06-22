SAN.registerLesson({
  id: 'os/03-scheduling',
  module: 'os',
  order: 3,
  title: '进程调度与同步',
  minutes: 5,
  keywords: ['调度算法', '同步', '互斥', '信号量', 'PV操作', '临界区'],
  concept: '<p>调度决定"下一个谁用CPU";同步用<gd data-term="semaphore">信号量(PV操作)</gd>协调多进程访问共享资源。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考调度算法;PV偶见案例。</p>',
  core: '<table><tr><th>算法</th><th>特点</th></tr>' +
    '<tr><td>FCFS</td><td>简单,对长作业有利</td></tr>' +
    '<tr><td>SJF短作业优先</td><td>平均等待最短,长作业可能饿死</td></tr>' +
    '<tr><td>时间片轮转</td><td>分时常用,公平、响应好</td></tr>' +
    '<tr><td>优先级</td><td>需防低优先级饿死(老化)</td></tr></table>' +
    '<div class="ex">PV:临界区前P(申请,<0则阻塞),后V(释放,唤醒等待者),互斥信号量初值1。</div>',
  pitfalls: '<div class="pit"><b>误解:SJF没缺点。</b>SJF平均等待最短,但长作业可能饿死且需预知作业长度。</div>',
  quiz: [
    { type: 'choice', q: '最适合分时交互、响应公平的调度算法是?', options: ['FCFS', 'SJF', '时间片轮转', '优先级非抢占'], answer: 2, source: '高频', explain: '时间片轮转适合分时系统。' }
  ],
  links: '<p>上一课:<a href="#/l/os/02-process-thread">进程与线程</a> · 下一课:<a href="#/l/os/04-deadlock">死锁</a></p>'
});
