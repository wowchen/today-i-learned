ISPM.registerLesson({
  id: 'pm-cost/04-evm-basics',
  module: 'pm-cost',
  order: 4,
  title: '挣值管理基础',
  minutes: 5,
  key: true,
  keywords: ['挣值', 'EVM', 'PV', 'EV', 'AC', '计划价值', '实际成本'],
  concept: '<p><gd data-term="evm">挣值管理（EVM）</gd>是高项案例的"必考王牌"。它用三个基本量，同时回答"进度快慢"和"成本盈亏"两个问题。理解三个量是后面所有计算的根基。</p>',
  exam: '<p><b>考纲定位：</b>案例分析<b>几乎必考一道大题（约25分）</b>，综合知识也常考。三个基本量的定义必须烂熟。</p>',
  core: '<p><b>三个基本量（先记住"价值"和"成本"的区别）：</b></p>' +
    '<ul><li><b>PV（<gd data-term="pv">计划价值</gd>，Planned Value）</b>：到检查点，<em>计划</em>应该完成的工作量对应的预算。即"按计划该干多少"。</li>' +
    '<li><b>EV（<gd data-term="ev">挣值</gd>，Earned Value）</b>：到检查点，<em>实际完成</em>的工作量对应的预算。即"实际干了多少（折算成钱）"。<b>EV = BAC × 实际完成百分比</b>。</li>' +
    '<li><b>AC（<gd data-term="ac">实际成本</gd>，Actual Cost）</b>：到检查点，完成上述工作<em>实际花掉</em>的钱。即"实际花了多少"。</li></ul>' +
    '<div class="ex"><b>记忆诀窍：</b><br>PV = 计划做的（按计划该完成的价值）<br>EV = 实际做的（实际完成的价值）← 核心，"挣"到的值<br>AC = 实际花的（真金白银的支出）</div>' +
    '<div class="ex"><b>例：</b>修一条路计划 10 天修 100 米，预算 10 万元。第 5 天检查：<br>' +
    'PV = 计划修 50 米 → 5 万元<br>' +
    '实际只修了 40 米 → EV = 100万×40% ... 即 10万×40% = <b>4 万元</b><br>' +
    '修这 40 米实际花了 6 万元 → AC = <b>6 万元</b><br>' +
    '初步判断：EV(4) < PV(5) 进度落后；EV(4) < AC(6) 成本超支。</div>',
  pitfalls: '<div class="pit"><b>误解 1：EV 是实际花的钱。</b> EV 是"实际完成的工作折算成预算价值"，AC 才是实际花的钱。EV 看产出，AC 看投入。</div>' +
    '<div class="pit"><b>误解 2：PV 是计划要花的钱总数。</b> PV 是"<em>到当前时间点</em>按计划应完成工作的预算"，是个随时间累积的值，不是项目总预算（那是 BAC）。</div>' +
    '<div class="pit"><b>误解 3：三个量记混。</b> 牢记口诀——PV 计划做的、EV 实际做的、AC 实际花的。EV 永远是"完成量×预算单价"。</div>',
  quiz: [
    {
      type: 'choice',
      q: '挣值（EV）的含义是：',
      options: [
        '计划完成工作的预算成本',
        '实际完成工作对应的预算价值',
        '实际完成工作花费的实际成本',
        '项目的总预算'
      ],
      answer: 1,
      source: '案例必考',
      explain: 'EV（挣值）= 实际完成的工作量对应的预算价值 = BAC × 实际完成百分比。它衡量"实际干了多少"，AC 才是实际花的钱。'
    },
    {
      type: 'choice',
      q: '某项目总预算100万，计划工期10个月。第4个月末，计划应完成40%，实际完成30%，已花费35万。此时 EV = ？',
      options: ['40万', '35万', '30万', '100万'],
      answer: 2,
      source: '案例高频',
      explain: 'EV = BAC × 实际完成百分比 = 100万 × 30% = 30万。（PV = 100×40% = 40万，AC = 35万。）'
    },
    {
      type: 'fill',
      q: '挣值公式 EV = BAC × 实际完成____。',
      answer: ['百分比', '百分数', '比例'],
      explain: 'EV = 完工预算（BAC）× 实际完成百分比。这是挣值计算的起点。'
    }
  ],
  links: '<p>相关术语：<gd data-term="evm">挣值管理</gd>、<gd data-term="pv">PV</gd>、<gd data-term="ev">EV</gd>、<gd data-term="ac">AC</gd></p>' +
    '<p>上一课：<a href="#/l/pm-cost/03-budget-determination">制定预算</a> · 下一课：<a href="#/l/pm-cost/05-evm-indicators">挣值偏差与绩效指标</a></p>'
});
