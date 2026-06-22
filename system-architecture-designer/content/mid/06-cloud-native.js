SAD.registerLesson({
  id: 'mid/06-cloud-native',
  module: 'mid',
  order: 6,
  title: '云原生与容器',
  minutes: 5,
  keywords: ['云原生', '容器', 'Docker', 'Kubernetes', '编排', '不可变基础设施', '弹性'],
  concept: '<p>云原生让应用"为云而生":用<gd data-term="container">容器</gd>打包、用编排(K8s)调度,配合微服务与 DevOps,实现弹性伸缩与快速交付。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(新趋势)。重点:容器与虚拟机区别、K8s作用、云原生要素。</p>',
  core: '<table><tr><th>对比</th><th>虚拟机</th><th>容器</th></tr>' +
    '<tr><td>隔离</td><td>含完整OS,重</td><td>共享内核,轻</td></tr>' +
    '<tr><td>启动</td><td>分钟级</td><td>秒级</td></tr>' +
    '<tr><td>密度</td><td>低</td><td>高</td></tr></table>' +
    '<div class="ex">云原生四要素常被概括为:<b>容器化 + 微服务 + DevOps/CI-CD + 持续交付</b>。Kubernetes(K8s)负责容器编排:自动调度、扩缩容、自愈。</div>',
  pitfalls: '<div class="pit"><b>误解:容器是更小的虚拟机。</b>容器<b>共享宿主内核</b>、不含完整OS,启动更快、更轻;虚拟机有独立OS、隔离更强但更重。机制不同。</div>',
  quiz: [
    { type: 'choice', q: '容器相比虚拟机的主要特点是?', options: ['更重、隔离更强', '共享内核、轻量、秒级启动', '必须每个含完整OS', '不能编排'], answer: 1, source: '高频', explain: '容器共享宿主内核,轻量、启动快、密度高。' },
    { type: 'choice', q: 'Kubernetes的主要职责是?', options: ['编写业务代码', '容器编排(调度、扩缩容、自愈)', '加密通信', '数据库备份'], answer: 1, source: '高频', explain: 'K8s负责容器编排:调度、弹性伸缩、自愈等。' }
  ],
  links: '<p>上一课:<a href="#/l/mid/05-microservice">微服务</a> · 下一课:<a href="#/l/mid/07-devops">DevOps与持续交付</a> · 云:<a href="#/l/future/01-cloud">云计算</a></p>'
});
