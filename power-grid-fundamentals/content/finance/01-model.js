PGF.registerLesson({
  id: 'finance-01-model',
  module: 'finance',
  order: 1,
  title: '三类玩家的盈利模式',
  minutes: 4,
  keywords: ['盈利模式', '发电商', '电网', '售电', '资产回报'],
  sections: {
    what:
      '<p>电力行业的三类主要企业,赚钱的方式完全不同:</p>' +
      '<table><tr><th>类型</th><th>代表</th><th>收入来源</th><th>核心成本</th></tr>' +
      '<tr><td><strong>发电商</strong></td><td>华能、大唐、国电投</td><td>卖电(上网电量 &times; 电价)</td><td>燃料(煤/气)、折旧</td></tr>' +
      '<tr><td><strong>电网公司</strong></td><td>国网、南网</td><td>输配电价(过网费)</td><td>设备折旧、运维、融资</td></tr>' +
      '<tr><td><strong>售电/综合能源</strong></td><td>独立售电公司</td><td>批零价差、服务费</td><td>偏差考核、客户获取</td></tr></table>',
    why:
      '<p>理解盈利模式才能看懂财务报表和行业新闻。' +
      '比如"煤价上涨"对发电商是利空(成本增加),对电网公司影响不大(收入与煤价无关)。</p>',
    how:
      '<div class="ex"><strong>发电商的利润公式</strong>(简化):<br>' +
      '利润 = 上网电量 &times; (上网电价 - 度电燃料成本 - 度电折旧运维) - 财务费用<br>' +
      '煤电最大的变量是煤价;风光没有燃料成本,最大变量是利用小时数和电价。</div>' +
      '<div class="ex"><strong>电网公司的利润公式</strong>(简化):<br>' +
      '利润 = 输配电量 &times; 输配电价 - 折旧运维 - 财务费用<br>' +
      '输配电价由政府核定(准许收入),类似"固定收益"。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"电力公司都是赚暴利的。"</b>' +
      '煤电在煤价高企时经常亏损(2021 年大面积亏损);电网公司利润率不到 5%。' +
      '电力行业整体利润率并不高——它是<gd data-term="gongyong-shiye">公用事业</gd>,不是暴利行业。</div>',
    links:
      '<p>· 下一课讲公用事业为什么像"债券"。<br>' +
      '· 模块 7《电网盈利》从政策角度讲电网的收入机制。</p>'
  }
});
