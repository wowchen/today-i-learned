SAN.registerLesson({
  id: 'analysis/03-decision-table',
  module: 'analysis',
  order: 3,
  title: '判定表与判定树',
  minutes: 5,
  key: true,
  keywords: ['判定表', '判定树', '加工逻辑', '条件', '动作', '组合'],
  concept: '<p>当加工逻辑有多个条件组合时,用<gd data-term="decision-table">判定表</gd>或判定树把"什么条件 → 做什么"列全,避免遗漏分支。</p>',
  exam: '<p><b>考纲定位:</b>系分案例可考(补全判定表)。重点:判定表结构、规则数=条件取值组合数。</p>',
  core: '<p><b>判定表四部分:</b>条件桩、条件项、动作桩、动作项。</p>' +
    '<div class="ex">n 个二值条件 → 最多 <b>2ⁿ</b> 条规则。例:3 个条件 → 8 种组合,逐列填该组合下执行哪些动作。可合并"无关项(−)"简化规则。</div>',
  pitfalls: '<div class="pit"><b>误解:判定表能漏掉某些条件组合。</b>必须覆盖<b>所有组合</b>(或用无关项合并),漏组合=逻辑有缺口,案例会扣分。</div>',
  quiz: [
    { type: 'fill', q: '判定表有4个相互独立的二值条件,最多有____条规则。', answer: ['16'], source: '高频计算', explain: '2⁴=16种条件组合。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/02-data-dictionary">数据字典</a> · 下一课:<a href="#/l/analysis/04-oo-concept">面向对象基础</a></p>'
});
