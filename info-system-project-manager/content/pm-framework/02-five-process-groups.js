ISPM.registerLesson({
  id: 'pm-framework/02-five-process-groups',
  module: 'pm-framework',
  order: 2,
  title: '五大过程组',
  minutes: 5,
  key: true,
  keywords: ['五大过程组', '启动', '规划', '执行', '监控', '收尾', '过程组'],
  concept: '<p>做任何一件正经事，都逃不过这五步：决定要不要做、做计划、动手干、边干边检查、收尾。项目管理把这五步正式命名为<gd data-term="five-process-groups">五大过程组</gd>：<b>启动、规划、执行、监控、收尾</b>。</p>' +
    '<p>注意：过程组不是项目阶段。一个项目可能分多个阶段，每个阶段内部都会经历这五个过程组。</p>',
  exam: '<p><b>考纲定位：</b>综合知识必考，每年 2-3 题。常考：①过程组的顺序和定义；②某个具体过程属于哪个过程组；③过程组与知识领域的交叉（47/49 个过程的归属）。</p>' +
    '<p><b>分值权重：</b>这是整个项目管理的骨架，约 3-5 分，且是案例分析的底层逻辑。</p>',
  core: '<p><b>五大过程组：</b></p>' +
    '<ul><li><b>启动（Initiating）</b>：定义新项目或新阶段，获得授权。产出<gd data-term="project-charter">项目章程</gd>、识别干系人。</li>' +
    '<li><b>规划（Planning）</b>：建立项目范围、制定计划。这是过程最多的过程组（涉及全部十大知识领域）。</li>' +
    '<li><b>执行（Executing）</b>：完成计划中的工作，投入资源最多、花钱最多。</li>' +
    '<li><b>监控（Monitoring & Controlling）</b>：跟踪、审查、调节进展和绩效。贯穿项目始终，与其他过程组并行。</li>' +
    '<li><b>收尾（Closing）</b>：正式完成或关闭项目/阶段。</li></ul>' +
    '<figure class="fig"><svg width="420" height="120" viewBox="0 0 420 120">' +
    '<rect x="5" y="45" width="70" height="34" fill="none" stroke="var(--accent)" stroke-width="1.5"/>' +
    '<text x="40" y="66" text-anchor="middle" fill="var(--ink)" font-size="12">启动</text>' +
    '<rect x="95" y="45" width="70" height="34" fill="none" stroke="var(--accent)" stroke-width="1.5"/>' +
    '<text x="130" y="66" text-anchor="middle" fill="var(--ink)" font-size="12">规划</text>' +
    '<rect x="185" y="45" width="70" height="34" fill="none" stroke="var(--accent)" stroke-width="1.5"/>' +
    '<text x="220" y="66" text-anchor="middle" fill="var(--ink)" font-size="12">执行</text>' +
    '<rect x="345" y="45" width="70" height="34" fill="none" stroke="var(--accent)" stroke-width="1.5"/>' +
    '<text x="380" y="66" text-anchor="middle" fill="var(--ink)" font-size="12">收尾</text>' +
    '<rect x="95" y="8" width="250" height="26" fill="none" stroke="var(--ok)" stroke-width="1" stroke-dasharray="4 2"/>' +
    '<text x="220" y="25" text-anchor="middle" fill="var(--ink)" font-size="11">监控（贯穿全程）</text>' +
    '<line x1="75" y1="62" x2="95" y2="62" stroke="var(--ink2)" stroke-width="1"/>' +
    '<line x1="165" y1="62" x2="185" y2="62" stroke="var(--ink2)" stroke-width="1"/>' +
    '<line x1="255" y1="62" x2="345" y2="62" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="3 2"/>' +
    '<text x="300" y="58" text-anchor="middle" fill="var(--ink2)" font-size="9">执行↔监控循环</text>' +
    '</svg><figcaption>图 · 五大过程组关系</figcaption></figure>' +
    '<p>过程组之间会<b>迭代和重叠</b>：执行中发现问题，回到规划调整，再继续执行——这是正常的，不是一条直线走到底。</p>',
  pitfalls: '<div class="pit"><b>误解 1：过程组 = 项目阶段。</b> 过程组不是阶段。一个项目可以有"需求、设计、开发"等多个阶段，每个阶段内部都要走启动→规划→执行→监控→收尾。</div>' +
    '<div class="pit"><b>误解 2：监控在执行之后。</b> 监控贯穿项目始终，与所有过程组并行，不是排在执行后面的一个独立环节。</div>' +
    '<div class="pit"><b>误解 3：规划做完就不改了。</b> 规划过程组的成果会随项目推进不断更新（渐进明细），执行中发现偏差会回到规划重新调整。</div>',
  quiz: [
    {
      type: 'choice',
      q: '以下哪个过程组贯穿项目始终，与其他过程组并行进行？',
      options: ['启动', '规划', '监控', '收尾'],
      answer: 2,
      source: '高频考点',
      explain: '监控过程组贯穿项目全过程，持续跟踪、审查和调节项目绩效，与启动、规划、执行、收尾都并行，而非排在执行之后。'
    },
    {
      type: 'choice',
      q: '在五大过程组中，包含过程数量最多、涉及全部十大知识领域的是：',
      options: ['启动过程组', '规划过程组', '执行过程组', '收尾过程组'],
      answer: 1,
      explain: '规划过程组涉及全部十大知识领域，包含的过程数量最多，因为每个知识领域都需要制定相应的管理计划。'
    },
    {
      type: 'fill',
      q: '五大过程组按顺序为：启动、规划、执行、____、收尾。',
      answer: ['监控', '监控过程组'],
      explain: '五大过程组为：启动、规划、执行、监控、收尾。其中监控虽列第四，但实际贯穿全程并行进行。'
    }
  ],
  links: '<p>相关术语：<gd data-term="five-process-groups">五大过程组</gd>、<gd data-term="project-charter">项目章程</gd></p>' +
    '<p>上一课：<a href="#/l/pm-framework/01-what-is-pm">什么是项目管理</a> · 下一课：<a href="#/l/pm-framework/03-ten-knowledge-areas">十大知识领域</a></p>'
});
