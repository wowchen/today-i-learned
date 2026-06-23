PFIN.registerLesson({
  id: 'basics/03-budget',
  module: 'basics',
  order: 3,
  title: '记账与预算:50/30/20',
  minutes: 4,
  keywords: ['预算', '记账', '50/30/20', '消费'],
  concept: '<p><b><gd data-term="budget">预算</gd></b>不是省钱,是<b>给每一块钱安排去处</b>。一个好用的入门框架是 <b>50/30/20</b>。</p>' +
    '<div class="ex">先决定钱怎么分,再花;而不是花完了才发现没剩下。</div>',
  core: '<p><b>50/30/20 法则(税后收入):</b></p>' +
    '<table><tr><th>比例</th><th>用途</th><th>例子</th></tr>' +
    '<tr><td>50%</td><td>必要</td><td>房租、吃饭、通勤、还贷</td></tr>' +
    '<tr><td>30%</td><td>想要</td><td>娱乐、旅行、下馆子</td></tr>' +
    '<tr><td>20%</td><td>储蓄/投资/还债</td><td>应急金、定投、提前还款</td></tr></table>' +
    '<p>比例不是铁律,是<b>起点</b>。大城市房租高,可能必要先到 60%;但"20% 先存"这条尽量守住。</p>' +
    '<p><b>记账的真正目的</b>不是记流水,是<b>看清弹性支出</b>:大多数人的钱漏在"想要"里,记一个月就能发现黑洞。</p>' +
    '<p class="ex">记账可以粗:不必记到每包零食,按"吃/住/行/玩/其他"几个大类即可,坚持比精确更重要。</p>',
  pitfalls: '<div class="pit"><b>误区:记账=记完就行。</b>记账只是采集数据,关键是月底复盘、下月调预算。不复盘的记账等于白记。</div>' +
    '<div class="pit"><b>误区:预算要精确到分。</b>过度精细会让人放弃。先用大类把握 50/30/20,再逐步细化。</div>',
  quiz: [
    { type: 'choice', q: '50/30/20 中的 "20" 指?', options: ['娱乐', '必要开支', '储蓄/投资/还债', '房租'], answer: 2, source: '记忆', explain: '20% 用于储蓄、投资或偿还债务。' },
    { type: 'choice', q: '记账最重要的目的是?', options: ['记录每一笔好看', '看清并优化弹性支出', '向别人展示', '计算缴税'], answer: 1, source: '理解', explain: '记账是为复盘和优化,尤其是发现"想要"类黑洞。' }
  ],
  links: '<p>上一课:<a href="#/l/basics/02-income-expense">收入与支出</a> · 下一课:<a href="#/l/basics/04-emergency-fund">应急基金</a></p>'
});
