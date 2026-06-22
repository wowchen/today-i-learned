SAN.registerLesson({
  id: 'os/02-process-thread',
  module: 'os',
  order: 2,
  title: '进程与线程',
  minutes: 5,
  key: true,
  keywords: ['进程', '线程', '三态', '五态', '状态转换'],
  concept: '<p><gd data-term="process">进程</gd>是资源分配基本单位(独立地址空间);<gd data-term="thread">线程</gd>是CPU调度基本单位(同进程内共享资源,切换更轻)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:进程三态/五态转换、进程与线程区别。</p>',
  core: '<p><b>三态转换:</b>就绪⇄运行、运行→阻塞、阻塞→就绪。<b>注意阻塞不能直接到运行</b>,必须先回就绪。五态再加新建、终止。</p>' +
    '<div class="ex">运行→就绪:时间片到;运行→阻塞:等IO;阻塞→就绪:IO完成。</div>',
  pitfalls: '<div class="pit"><b>误解:阻塞可直接被调度运行。</b>不行,阻塞→就绪→(被调度)→运行,必经就绪态。</div>',
  quiz: [
    { type: 'choice', q: '进程状态转换中不存在的是?', options: ['就绪→运行', '运行→就绪', '运行→阻塞', '阻塞→运行'], answer: 3, source: '高频', explain: '阻塞不能直接到运行。' },
    { type: 'choice', q: '关于进程与线程,正确的是?', options: ['线程是资源分配单位', '进程切换比线程快', '同进程线程共享地址空间', '线程不能并发'], answer: 2, source: '高频', explain: '同进程线程共享地址空间与资源。' }
  ],
  links: '<p>上一课:<a href="#/l/os/01-overview">概述</a> · 下一课:<a href="#/l/os/03-scheduling">调度与同步</a></p>'
});
