ISPM.registerLesson({
  id: 'pm-scope/05-wbs',
  module: 'pm-scope',
  order: 5,
  title: 'WBS 工作分解结构',
  minutes: 5,
  key: true,
  keywords: ['WBS', '工作分解结构', '工作包', '100%规则', '范围基准', '分解'],
  concept: '<p>想象你要搬家——不会直接喊"搬！"，而是拆成：找搬家公司、打包厨房、打包卧室、搬运、验收。<gd data-term="wbs">WBS</gd>（Work Breakdown Structure）就是把项目大目标逐层拆解成可管理、可交付的小<gd data-term="work-package">工作包</gd>的过程。</p>' +
    '<p>WBS 是<gd data-term="scope-baseline">范围基准</gd>的核心组成部分，它与 WBS 词典和范围说明书共同构成范围基准。</p>',
  exam: '<p><b>考纲定位：</b>综合知识每年必考 1-2 题；案例分析高频考点（WBS 编制错误分析、WBS 与活动的区别）。</p>' +
    '<p><b>分值权重：</b>综合知识约 2-3 分，案例分析可能占到一整道题（25分）。</p>' +
    '<p><b>出题方向：</b>①WBS 最底层元素是什么；②100%规则含义；③WBS 分解的是可交付成果还是活动。</p>',
  core: '<p><b>WBS 的核心原则：</b></p>' +
    '<ul><li><b>100% 规则</b>：所有子元素之和必须等于父元素的全部范围，不多不少。</li>' +
    '<li><b>面向可交付成果</b>：分解的是"东西"（名词），不是"动作"（动词）。</li>' +
    '<li><b>最底层是工作包</b>：工作包是能被可靠估算的最小交付单元（8-80 小时规则）。</li>' +
    '<li><b>每个元素只出现一次</b>：避免重复计算。</li></ul>' +
    '<figure class="fig"><svg width="400" height="200" viewBox="0 0 400 200">' +
    '<rect x="150" y="10" width="100" height="36" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="200" y="33" text-anchor="middle" fill="var(--ink)" font-size="13">项目目标</text>' +
    '<line x1="170" y1="46" x2="80" y2="75" stroke="var(--ink2)" stroke-width="1.5"/>' +
    '<line x1="200" y1="46" x2="200" y2="75" stroke="var(--ink2)" stroke-width="1.5"/>' +
    '<line x1="230" y1="46" x2="320" y2="75" stroke="var(--ink2)" stroke-width="1.5"/>' +
    '<rect x="30" y="75" width="100" height="32" rx="4" fill="none" stroke="var(--ok)" stroke-width="1.5"/>' +
    '<text x="80" y="95" text-anchor="middle" fill="var(--ink)" font-size="12">交付物 A</text>' +
    '<rect x="150" y="75" width="100" height="32" rx="4" fill="none" stroke="var(--ok)" stroke-width="1.5"/>' +
    '<text x="200" y="95" text-anchor="middle" fill="var(--ink)" font-size="12">交付物 B</text>' +
    '<rect x="270" y="75" width="100" height="32" rx="4" fill="none" stroke="var(--ok)" stroke-width="1.5"/>' +
    '<text x="320" y="95" text-anchor="middle" fill="var(--ink)" font-size="12">交付物 C</text>' +
    '<line x1="55" y1="107" x2="55" y2="135" stroke="var(--ink2)" stroke-width="1"/>' +
    '<line x1="105" y1="107" x2="105" y2="135" stroke="var(--ink2)" stroke-width="1"/>' +
    '<rect x="25" y="135" width="60" height="28" rx="4" fill="rgba(0,180,216,.12)" stroke="var(--accent)" stroke-width="1"/>' +
    '<text x="55" y="153" text-anchor="middle" fill="var(--ink)" font-size="11">工作包 1</text>' +
    '<rect x="75" y="135" width="60" height="28" rx="4" fill="rgba(0,180,216,.12)" stroke="var(--accent)" stroke-width="1"/>' +
    '<text x="105" y="153" text-anchor="middle" fill="var(--ink)" font-size="11">工作包 2</text>' +
    '<text x="200" y="185" text-anchor="middle" fill="var(--ink2)" font-size="10">WBS 最底层 = 工作包（可估算、可分配责任）</text>' +
    '</svg><figcaption>图 · WBS 分解结构示意</figcaption></figure>' +
    '<p><b>WBS 词典：</b>每个 WBS 元素的详细描述文档，包括工作描述、负责人、进度里程碑、验收标准等。它是理解 WBS 的"说明书"。</p>',
  pitfalls: '<div class="pit"><b>误解 1：WBS 是任务清单。</b> WBS 分解的是<em>可交付成果</em>（名词），不是活动（动词）。"写代码"是活动（属于进度管理的活动定义），"登录模块"才是 WBS 工作包。</div>' +
    '<div class="pit"><b>误解 2：WBS 要分解到最细。</b> WBS 最底层是工作包，粒度标准是 8-80 小时规则——太粗了估算不准，太细了管理成本太高。工作包再往下分解为活动，那就进入进度管理的范畴了。</div>' +
    '<div class="pit"><b>误解 3：控制账户 = 工作包。</b> 控制账户是 WBS 中某一层级的管理控制点（用于挣值测量），一个控制账户下面可以有多个工作包。层级不同。</div>',
  quiz: [
    {
      type: 'choice',
      q: 'WBS 的最底层元素称为：',
      options: ['活动', '工作包', '里程碑', '控制账户'],
      answer: 1,
      source: '2022 上半年真题',
      explain: 'WBS 的最小可交付单元是工作包（Work Package）。活动是对工作包的进一步分解，属于进度管理的"定义活动"过程。控制账户是管理控制点，不是最底层。'
    },
    {
      type: 'choice',
      q: 'WBS 的 100% 规则是指：',
      options: [
        '项目必须100%按时完成',
        '所有子元素之和必须等于父元素的全部范围',
        '每个工作包必须100%完成才能验收',
        'WBS必须覆盖100%的项目团队成员'
      ],
      answer: 1,
      source: '高频考点',
      explain: '100% 规则要求：WBS 中任何一个层级的所有子元素之和，必须完整覆盖其父元素的全部范围——不多不少，不遗漏不重复。'
    },
    {
      type: 'fill',
      q: 'WBS 分解的对象是可交付____(填两个字)，而不是活动。',
      answer: ['成果', '成果物'],
      source: '案例分析高频',
      explain: 'WBS 分解的是"可交付成果"（Deliverables），面向的是"东西"而非"动作"。如果分解出来的是动词（如"编写""测试"），那就错了——那是进度管理中的"活动"。'
    }
  ],
  links: '<p>相关术语：<gd data-term="wbs">WBS</gd>、<gd data-term="work-package">工作包</gd>、<gd data-term="scope-baseline">范围基准</gd>、<gd data-term="scope-creep">范围蔓延</gd></p>' +
    '<p>上一课：<a href="#/l/pm-scope/04-define-scope">定义范围</a> · 下一课：<a href="#/l/pm-scope/06-wbs-dictionary">WBS 词典</a></p>' +
    '<p>关联：本课内容是<a href="#/l/case/05-scope-cases">案例分析·范围案例</a>的基础</p>'
});
