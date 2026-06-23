PFIN.registerLesson({
  id: 'compound/01-simple-vs-compound',
  module: 'compound',
  order: 1,
  title: '单利 vs 复利',
  minutes: 4,
  key: true,
  keywords: ['单利', '复利', '利滚利', '时间'],
  concept: '<p><b><gd data-term="simple-interest">单利</gd></b>只对本金计息;<b><gd data-term="compound-interest">复利</gd></b>连利息也一起生息——时间一长,差距大到惊人。</p>' +
    '<div class="ex">单利是利息躺平,复利是利息也去打工。</div>',
  core: '<p><b>同样 10 万本金、年化 8%、放 30 年:</b></p>' +
    '<table><tr><th></th><th>单利</th><th>复利</th></tr>' +
    '<tr><td>每年利息</td><td>固定 8000</td><td>逐年变多</td></tr>' +
    '<tr><td>30 年后</td><td>约 34 万</td><td>约 100 万</td></tr></table>' +
    '<p>差出的 60 多万,全靠"利息再生利息"。这就是为什么爱因斯坦(传说)称复利为"世界第八大奇迹"。</p>' +
    '<p><b>复利的两个关键变量:</b></p>' +
    '<ul>' +
    '<li><b>时间</b>:威力主要来自后期,曲线越往后越陡。早开始 10 年,常胜过多投很多钱。</li>' +
    '<li><b>收益率</b>:差几个点,几十年后是数倍差距(下一课 72 法则会量化)。</li>' +
    '</ul>' +
    '<p class="ex">复利曲线前期很平、后期暴涨,叫"曲棍球棒"。很多人前几年觉得没意思就放弃,正好错过最陡那段。</p>',
  pitfalls: '<div class="pit"><b>误区:复利是"高收益"的魔法。</b>复利的核心是<b>时间</b>,不是高收益。8% 滚 30 年,远胜 20% 只滚 3 年。</div>' +
    '<div class="pit"><b>误区:复利只对你有利。</b>债务也有复利:信用卡按日计息、利滚利,欠债不还同样会雪球般膨胀。</div>',
  quiz: [
    { type: 'choice', q: '复利和单利最本质的区别是?', options: ['复利收益率更高', '复利的利息也会再生利息', '单利更安全', '没有区别'], answer: 1, source: '理解', explain: '复利让利息加入本金继续生息,单利不会。' },
    { type: 'choice', q: '复利威力最依赖以下哪个?', options: ['运气', '时间', '本金一次性很大', '频繁交易'], answer: 1, source: '理解', explain: '时间越长,复利后期增长越陡峭。' }
  ],
  links: '<p>下一课:<a href="#/l/compound/02-rule-72">72 法则</a> · 动手:<a href="#/calc">复利计算器</a></p>'
});
