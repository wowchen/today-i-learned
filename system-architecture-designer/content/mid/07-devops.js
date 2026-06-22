SAD.registerLesson({
  id: 'mid/07-devops',
  module: 'mid',
  order: 7,
  title: 'DevOps 与持续交付',
  minutes: 4,
  keywords: ['DevOps', 'CI', 'CD', '持续集成', '持续交付', '自动化', '敏捷'],
  concept: '<p><gd data-term="devops">DevOps</gd> 打通开发(Dev)与运维(Ops),用自动化流水线(CI/CD)和协作文化实现<b>快速、频繁、可靠</b>的交付。它是<gd data-term="agile">敏捷</gd>在交付环节的延伸。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:CI/CD区别、DevOps核心理念。</p>',
  core: '<table><tr><th>概念</th><th>含义</th></tr>' +
    '<tr><td>持续集成 CI</td><td>频繁合并代码并自动构建+测试,尽早发现问题</td></tr>' +
    '<tr><td>持续交付 CD</td><td>随时可一键发布到类生产/生产</td></tr>' +
    '<tr><td>持续部署</td><td>通过测试即自动上线(CD的进一步)</td></tr></table>' +
    '<div class="ex">DevOps 三大支柱:<b>文化(协作)+ 自动化(CI/CD/IaC)+ 度量反馈</b>。配合容器与微服务,实现"小步快发、快速回滚"。</div>',
  pitfalls: '<div class="pit"><b>误解:DevOps就是买套CI/CD工具。</b>工具只是手段,核心是<b>开发运维协作的文化</b>与端到端自动化、度量反馈;只上工具不改协作=假DevOps。</div>',
  quiz: [
    { type: 'choice', q: '"频繁合并代码并自动构建、自动测试"指的是?', options: ['持续集成CI', '持续交付CD', '持续部署', '灰度发布'], answer: 0, source: '高频', explain: '持续集成(CI)强调频繁集成并自动构建测试。' }
  ],
  links: '<p>中间件·微服务模块完。下一模块:<a href="#/l/embed/01-concept">嵌入式系统概述</a> · 敏捷:<a href="#/l/se/01-process">软件过程模型</a></p>'
});
