SAD.registerLesson({
  id: 'os/03-scheduling',
  module: 'os',
  order: 3,
  title: '进程调度与同步',
  minutes: 5,
  keywords: ['调度算法', '同步', '互斥', '信号量', 'PV操作', '临界区'],
  concept: '<p>调度决定"下一个让谁用 CPU";同步解决"多个进程协调访问共享资源"。同步的核心工具是<gd data-term="semaphore">信号量(PV操作)</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考调度算法特征;PV操作偶见于案例。</p>',
  core: '<p><b>常见调度算法:</b></p>' +
    '<table><tr><th>算法</th><th>特点</th></tr>' +
    '<tr><td>FCFS 先来先服务</td><td>简单,对长作业有利,短作业可能久等</td></tr>' +
    '<tr><td>SJF 短作业优先</td><td>平均等待最短,但长作业可能饿死</td></tr>' +
    '<tr><td>时间片轮转 RR</td><td>分时系统常用,公平、响应好</td></tr>' +
    '<tr><td>优先级</td><td>按优先级,需防低优先级饿死(老化)</td></tr></table>' +
    '<div class="ex"><b>PV操作:</b>临界区前 P(申请,信号量−1,<0则阻塞),临界区后 V(释放,+1,唤醒等待者)。互斥信号量初值通常为1。</div>',
  pitfalls: '<div class="pit"><b>误解1:短作业优先没有缺点。</b>SJF 平均等待时间最短,但<b>长作业可能长期饿死</b>,且需预知作业长度。</div>' +
    '<div class="pit"><b>误解2:P、V 可以颠倒或漏写。</b>P/V 必须成对、顺序正确,否则会造成<b>死锁或互斥失效</b>。</div>',
  quiz: [
    { type: 'choice', q: '最适合分时交互系统、保证响应公平的调度算法是?', options: ['FCFS', 'SJF', '时间片轮转', '优先级非抢占'], answer: 2, source: '高频', explain: '时间片轮转(RR)让每个进程轮流获得CPU,响应及时、公平,适合分时系统。' },
    { type: 'choice', q: '互斥信号量的初值通常设为?', options: ['0', '1', '−1', '进程数'], answer: 1, source: '高频', explain: '用于互斥的信号量初值通常为1(同一时刻只允许一个进程进入临界区)。' }
  ],
  links: '<p>上一课:<a href="#/l/os/02-process-thread">进程与线程</a> · 下一课:<a href="#/l/os/04-deadlock">死锁</a></p>'
});
