PFIN.registerLesson({
  id: 'allocation/01-four-buckets',
  module: 'allocation',
  order: 1,
  title: '资产配置四象限',
  minutes: 5,
  key: true,
  keywords: ['资产配置', '股债现金', '另类', '四象限'],
  concept: '<p><b><gd data-term="asset-allocation">资产配置</gd></b>就是决定钱在<b>股票、债券、现金、另类</b>四大类之间各放多少。研究普遍认为,它对长期回报的影响,远大于"具体挑哪只"。</p>' +
    '<div class="ex">先分好"篮子比例",再谈篮子里放什么——顺序别反。</div>',
  core: '<p><b>四大类的角色:</b></p>' +
    '<table><tr><th>类别</th><th>角色</th><th>特点</th></tr>' +
    '<tr><td>现金类</td><td>安全垫</td><td>不亏本、流动性高、收益低</td></tr>' +
    '<tr><td>债券</td><td>压舱石</td><td>较稳、提供利息、跌时常抗跌</td></tr>' +
    '<tr><td>股票</td><td>增长引擎</td><td>长期回报高、波动大</td></tr>' +
    '<tr><td>另类</td><td>分散器</td><td>黄金/REITs 等,与股债相关性低</td></tr></table>' +
    '<p><b>为什么配置比选品重要:</b>各类资产涨跌节奏不同,搭配在一起能<b>在不大幅牺牲收益的前提下降低整体波动</b>(下一课讲风险承受度,第 3 课讲分散原理)。</p>' +
    '<p><b>一个直观的起点:</b>"<b>100 − 年龄</b> = 股票占比"。30 岁约 70% 股 / 30% 债;这只是粗略起点,要结合自身情况调整。</p>' +
    '<p class="ex">没有"最优配置",只有"适合你的配置"——取决于目标、期限和你能睡得着觉的波动。</p>',
  pitfalls: '<div class="pit"><b>误区:把全部精力花在选股/选基。</b>研究显示长期回报差异主要来自<b>大类配置</b>,而非择股择时。</div>' +
    '<div class="pit"><b>误区:配置一次定终身。</b>年龄、目标、市场会变,配置需定期检视与再平衡(见第 4 课)。</div>',
  quiz: [
    { type: 'choice', q: '资产配置四大类通常指?', options: ['股票/债券/现金/另类', '茅台/腾讯/比特币/黄金', '活期/定期/国债/基金', '房/车/股/币'], answer: 0, source: '记忆', explain: '股票、债券、现金、另类是经典四大类。' },
    { type: 'choice', q: '"100 − 年龄"这个经验法则用来估算?', options: ['每月该存多少', '股票大致占比', '退休年龄', '保险保额'], answer: 1, source: '理解', explain: '它给出股票配置比例的粗略起点。' }
  ],
  links: '<p>下一课:<a href="#/l/allocation/02-risk-tolerance">风险承受度</a> · 相关:<a href="#/l/allocation/06-lazy-portfolio">懒人组合</a></p>'
});
