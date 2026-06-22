ISPM.registerLesson({
  id: 'syseng/03-hall-three-dimensional',
  module: 'syseng',
  order: 3,
  title: '霍尔三维结构',
  minutes: 4,
  key: true,
  keywords: ['霍尔三维结构', '时间维', '逻辑维', '知识维', '系统工程方法论'],
  concept: '<p><b>霍尔三维结构</b>是系统工程的经典方法论，把系统工程活动从三个维度（时间、逻辑、知识）来组织，是高项必考点。</p>',
  exam: '<p><b>考纲定位：</b>综合知识<b>常考</b>。三个维度的名称和内容必须记牢。</p>',
  core: '<p><b>霍尔三维结构的三个维度：</b></p>' +
    '<ul><li><b>时间维</b>：系统工程的<em>工作阶段</em>——规划、拟定方案、研制、生产、安装、运行、更新（按时间推进的 7 个阶段）。</li>' +
    '<li><b>逻辑维</b>：每个阶段的<em>思维步骤</em>——明确问题、确定目标、系统综合、系统分析、优化、决策、实施（解决问题的 7 个逻辑步骤）。</li>' +
    '<li><b>知识维</b>：完成各步骤所需的<em>专业知识</em>——工程、医学、法律、管理、社会科学等。</li></ul>' +
    '<div class="ex"><b>速记：</b>时间维=干活的阶段（先后）；逻辑维=思考的步骤（怎么想）；知识维=需要的学问（用什么知识）。</div>' +
    '<figure class="fig"><svg width="240" height="160" viewBox="0 0 240 160">' +
    '<line x1="40" y1="130" x2="40" y2="30" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="44" y="28" fill="var(--accent)" font-size="11">时间维</text>' +
    '<line x1="40" y1="130" x2="180" y2="130" stroke="var(--ok)" stroke-width="2"/>' +
    '<text x="140" y="146" fill="var(--ok)" font-size="11">逻辑维</text>' +
    '<line x1="40" y1="130" x2="120" y2="70" stroke="var(--bad)" stroke-width="2"/>' +
    '<text x="118" y="66" fill="var(--bad)" font-size="11">知识维</text>' +
    '</svg><figcaption>图 · 霍尔三维结构</figcaption></figure>',
  pitfalls: '<div class="pit"><b>误解 1：时间维和逻辑维搞混。</b> 时间维是"工作<em>阶段</em>"（规划→运行，按时间推进）；逻辑维是每个阶段内"思维<em>步骤</em>"（明确问题→决策→实施）。一个是时间轴，一个是思考流程。</div>' +
    '<div class="pit"><b>误解 2：霍尔三维只适合硬件工程。</b> 它是通用的系统工程方法论，知识维涵盖工程、管理、社科等，适用于各类复杂系统。</div>',
  quiz: [
    {
      type: 'choice',
      q: '霍尔三维结构的三个维度是：',
      options: [
        '时间维、逻辑维、知识维',
        '范围维、进度维、成本维',
        '输入维、处理维、输出维',
        '人、机、料'
      ],
      answer: 0,
      source: '高频考点',
      explain: '霍尔三维结构包括时间维（工作阶段）、逻辑维（思维步骤）、知识维（专业知识），是经典的系统工程方法论。'
    },
    {
      type: 'choice',
      q: '霍尔三维结构中，描述"明确问题→确定目标→系统分析→优化→决策→实施"思维步骤的是：',
      options: ['时间维', '逻辑维', '知识维', '空间维'],
      answer: 1,
      explain: '逻辑维描述每个工作阶段内解决问题的思维步骤。时间维是按时间推进的工作阶段（规划→运行）。'
    }
  ],
  links: '<p>上一课：<a href="#/l/syseng/02-system-engineering-method">系统工程方法</a> · 下一课：<a href="#/l/syseng/04-lifecycle-methodology">系统生命周期方法论</a></p>'
});
