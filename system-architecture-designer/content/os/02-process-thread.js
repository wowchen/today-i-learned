SAD.registerLesson({
  id: 'os/02-process-thread',
  module: 'os',
  order: 2,
  title: '进程与线程',
  minutes: 5,
  key: true,
  keywords: ['进程', '线程', 'PCB', '状态', '三态', '五态', '上下文'],
  concept: '<p><gd data-term="process">进程</gd>是资源分配的基本单位,有独立地址空间;<gd data-term="thread">线程</gd>是 CPU 调度的基本单位,同进程内线程共享资源、切换更轻。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:进程三态/五态转换、进程与线程区别。</p>',
  core: '<p><b>进程三态转换:</b></p>' +
    '<figure class="fig"><svg viewBox="0 0 300 90" width="100%" role="img" aria-label="进程三态转换">' +
    '<rect x="20" y="35" width="60" height="24" fill="none" stroke="var(--accent)"/><text x="50" y="51" text-anchor="middle" fill="var(--ink)" font-size="11">就绪</text>' +
    '<rect x="120" y="10" width="60" height="24" fill="none" stroke="var(--accent)"/><text x="150" y="26" text-anchor="middle" fill="var(--ink)" font-size="11">运行</text>' +
    '<rect x="220" y="35" width="60" height="24" fill="none" stroke="var(--line2)"/><text x="250" y="51" text-anchor="middle" fill="var(--ink)" font-size="11">阻塞</text>' +
    '<line x1="80" y1="42" x2="120" y2="28" stroke="var(--accent)"/><text x="92" y="30" fill="var(--ink2)" font-size="9">调度</text>' +
    '<line x1="150" y1="34" x2="80" y2="47" stroke="var(--line2)"/><text x="100" y="62" fill="var(--ink2)" font-size="9">时间片到</text>' +
    '<line x1="180" y1="28" x2="240" y2="42" stroke="var(--line2)"/><text x="196" y="30" fill="var(--ink2)" font-size="9">等待IO</text>' +
    '<line x1="240" y1="52" x2="82" y2="55" stroke="var(--accent)"/><text x="150" y="75" fill="var(--ink2)" font-size="9">IO完成→就绪</text>' +
    '</svg><figcaption>图 · 就绪/运行/阻塞 三态转换</figcaption></figure>' +
    '<p>注意:<b>阻塞不能直接到运行</b>,必须先回就绪;运行也不能直接到阻塞以外随意跳。五态再加"新建""终止"。</p>',
  pitfalls: '<div class="pit"><b>误解1:阻塞态可以直接被调度去运行。</b>不行。阻塞→就绪→(被调度)→运行,必须经过就绪态。</div>' +
    '<div class="pit"><b>误解2:线程开销和进程一样大。</b>线程共享进程资源,创建/切换开销<b>远小于</b>进程。</div>',
  quiz: [
    { type: 'choice', q: '进程状态转换中,不存在的直接转换是?', options: ['就绪→运行', '运行→就绪', '运行→阻塞', '阻塞→运行'], answer: 3, source: '高频', explain: '阻塞不能直接到运行,必须先回到就绪态。' },
    { type: 'choice', q: '关于进程与线程,正确的是?', options: ['线程是资源分配的基本单位', '进程切换比线程切换快', '同进程的线程共享地址空间', '线程不能并发'], answer: 2, source: '高频', explain: '同一进程的线程共享该进程的地址空间和资源。' }
  ],
  links: '<p>下一课:<a href="#/l/os/03-scheduling">进程调度与同步</a></p>'
});
