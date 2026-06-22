ISPM.registerLesson({
  id: 'se/09-devops',
  module: 'se',
  order: 9,
  title: 'DevOps 与持续交付',
  minutes: 3,
  keywords: ['DevOps', '持续集成', 'CI', '持续交付', 'CD', '持续部署', '自动化'],
  concept: '<p><b>DevOps</b> = Development（开发）+ Operations（运维），打破开发和运维之间的墙，通过自动化让软件从开发到上线又快又稳。是敏捷理念向运维的延伸。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。了解 CI/CD 的含义即可。</p>',
  core: '<p><b>DevOps 核心理念：</b>开发与运维协作一体化，通过自动化工具链实现快速、可靠的软件交付。强调文化、自动化、度量、共享。</p>' +
    '<p><b>CI/CD 流水线：</b></p>' +
    '<ul><li><b>持续集成（CI）</b>：开发人员频繁地把代码合并到主干，每次合并自动构建和测试，尽早发现集成问题。</li>' +
    '<li><b>持续交付（CD）</b>：在 CI 基础上，自动把通过测试的代码部署到类生产环境，<em>随时可发布</em>（发布需手动确认）。</li>' +
    '<li><b>持续部署</b>：更进一步，通过测试后<em>自动</em>部署到生产环境，无需人工干预。</li></ul>' +
    '<p><b>价值：</b>缩短交付周期、提高发布频率、降低发布风险、快速响应市场。',
  pitfalls: '<div class="pit"><b>误解 1：DevOps 就是一个工具。</b> DevOps 是一种文化和方法（开发运维协作 + 自动化），工具链（如 Jenkins、Docker）只是支撑手段。</div>' +
    '<div class="pit"><b>误解 2：持续交付和持续部署一样。</b> 持续交付是"随时<em>可</em>发布"（发布需手动点确认）；持续部署是通过测试后<em>自动</em>发布到生产（全自动）。一字之差。</div>',
  quiz: [
    {
      type: 'choice',
      q: '开发人员频繁将代码合并到主干，每次合并自动构建和测试，这种实践是：',
      options: ['持续集成（CI）', '持续部署', '瀑布开发', '结对编程'],
      answer: 0,
      explain: '持续集成（CI）指频繁地将代码合并到主干并自动构建、测试，尽早发现集成问题。是 DevOps 的核心实践之一。'
    }
  ],
  links: '<p>上一课：<a href="#/l/se/08-agile-methods">敏捷开发方法</a> · 下一课：<a href="#/l/se/10-software-maintenance">软件维护</a></p>'
});
