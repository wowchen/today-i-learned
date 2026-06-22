ISPM.registerLesson({
  id: 'infra/04-cloud-service-models',
  module: 'infra',
  order: 4,
  title: '云服务模型详解',
  minutes: 4,
  keywords: ['云计算', 'IaaS', 'PaaS', 'SaaS', '云原生', '容器', 'Kubernetes'],
  concept: '<p>前面在信息技术概览里讲过云计算三层模型，本课从基础设施角度补充<b>云原生</b>、<b>容器</b>等落地技术，这是当前考纲的新热点。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考。云服务三层模型已学，本课重点是云原生和容器概念。</p>',
  core: '<p><b>云服务三层模型回顾：</b>IaaS（基础设施）、PaaS（平台）、SaaS（软件）。管理责任从 IaaS 到 SaaS 递减。</p>' +
    '<p><b>云原生（Cloud Native）：</b>专为云环境设计的应用构建和运行方式，充分发挥云的弹性和分布式优势。核心技术：</p>' +
    '<ul><li><b>容器（如 Docker）</b>：把应用和依赖打包成轻量、可移植的单元，"一次构建，处处运行"。比虚拟机更轻量。</li>' +
    '<li><b>容器编排（如 Kubernetes/K8s）</b>：自动管理大量容器的部署、扩缩容、调度。</li>' +
    '<li><b>微服务</b>：应用拆成独立小服务。</li>' +
    '<li><b>DevOps/持续交付</b>：自动化交付。</li></ul>' +
    '<p><b>容器 vs 虚拟机：</b>虚拟机虚拟化<em>硬件</em>（每个 VM 含完整操作系统，重）；容器虚拟化<em>操作系统</em>（共享宿主机内核，轻量、启动快）。</p>',
  pitfalls: '<div class="pit"><b>误解 1：容器就是虚拟机。</b> 虚拟机虚拟化硬件、含完整 OS（重、启动慢）；容器共享宿主机内核、只打包应用和依赖（轻、秒级启动）。容器更轻量。</div>' +
    '<div class="pit"><b>误解 2：云原生就是把应用搬到云上。</b> 云原生是<em>专为云设计</em>（容器化、微服务、弹性伸缩），不是简单地把传统应用"上云"。</div>',
  quiz: [
    {
      type: 'choice',
      q: '将应用及其依赖打包成轻量、可移植单元，共享宿主机内核、启动快的技术是：',
      options: ['虚拟机', '容器', '物理服务器', '数据库'],
      answer: 1,
      source: '高频考点',
      explain: '容器（如 Docker）把应用和依赖打包成轻量可移植单元，共享宿主机操作系统内核，比虚拟机更轻量、启动更快。'
    },
    {
      type: 'choice',
      q: '用于自动管理大量容器的部署、扩缩容和调度的容器编排平台是：',
      options: ['Docker', 'Kubernetes', 'Linux', 'MySQL'],
      answer: 1,
      explain: 'Kubernetes（K8s）是主流的容器编排平台，负责自动化管理容器的部署、扩缩容、负载均衡和调度。Docker 是容器引擎。'
    }
  ],
  links: '<p>上一课：<a href="#/l/infra/03-storage-tech">存储技术</a> · 下一课：<a href="#/l/infra/05-virtualization">虚拟化技术</a></p>'
});
