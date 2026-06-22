ISPM.registerLesson({
  id: 'pm-scope/06-wbs-dictionary',
  module: 'pm-scope',
  order: 6,
  title: 'WBS 词典',
  minutes: 3,
  keywords: ['WBS词典', '工作包', '控制账户', '账户编码'],
  concept: '<p><gd data-term="wbs">WBS</gd> 是一张只有"框和名字"的树形图，光看框不知道每个工作包具体要干什么。<b>WBS 词典</b>就是这张图的"详细说明书"——逐个解释每个 WBS 元素的内容。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考 1 题，常与 WBS 一起考。常考 WBS 词典的内容、控制账户的概念。</p>',
  core: '<p><b>WBS 词典为每个组件提供：</b></p>' +
    '<ul><li>账户编码标识</li>' +
    '<li>工作描述</li>' +
    '<li>负责人 / 负责组织</li>' +
    '<li>进度里程碑、相关活动</li>' +
    '<li>所需资源、成本估算</li>' +
    '<li>质量要求、验收标准</li></ul>' +
    '<p><b>控制账户：</b>WBS 中的一个管理控制点，在该点上把范围、预算、实际成本、进度整合起来，用<gd data-term="evm">挣值</gd>来测量绩效。一个控制账户可包含多个工作包。</p>' +
    '<p><b>规划包：</b>位于控制账户之下、工作包之上，工作内容已知但活动细节未明确的过渡性组件。</p>',
  pitfalls: '<div class="pit"><b>误解 1：控制账户 = 工作包。</b> 控制账户是更高层级的管理控制点（用于挣值测量），一个控制账户下可以包含多个工作包。</div>' +
    '<div class="pit"><b>误解 2：WBS 词典可有可无。</b> 没有 WBS 词典，工作包就只是个名字，无法指导执行。它是范围基准的组成部分，明确每个工作包的责任和标准。</div>',
  quiz: [
    {
      type: 'choice',
      q: 'WBS 中用于整合范围、预算、成本和进度，并以挣值法测量绩效的管理控制点称为：',
      options: ['工作包', '控制账户', '规划包', '里程碑'],
      answer: 1,
      source: '高频考点',
      explain: '控制账户是 WBS 中的管理控制点，在该点整合范围、预算、实际成本和进度，用挣值法测量绩效。一个控制账户可包含多个工作包。'
    }
  ],
  links: '<p>相关术语：<gd data-term="wbs">WBS</gd>、<gd data-term="evm">挣值管理</gd></p>' +
    '<p>上一课：<a href="#/l/pm-scope/05-wbs">WBS 工作分解结构</a> · 下一课：<a href="#/l/pm-scope/07-scope-validation">确认范围</a></p>'
});
