PGF.registerLesson({
  id: 'dist-08-load',
  module: 'dist',
  order: 8,
  title: '用户类别与负荷曲线',
  minutes: 4,
  keywords: ['用户类别', '负荷曲线', '居民', '工商业', '农业', '大工业', '峰谷'],
  sections: {
    what:
      '<p>用电用户按电价和管理方式分四大类:</p>' +
      '<table><tr><th>类别</th><th>用电量占比</th><th>特点</th></tr>' +
      '<tr><td>大工业</td><td>约 40%</td><td>用量大、负荷稳定、电压等级高(10kV+)</td></tr>' +
      '<tr><td>一般工商业</td><td>约 30%</td><td>商场/办公,白天用电为主</td></tr>' +
      '<tr><td>居民</td><td>约 15%</td><td>早晚两高峰,夏冬空调负荷突出</td></tr>' +
      '<tr><td>农业</td><td>约 3%</td><td>季节性强(灌溉期)</td></tr></table>',
    why:
      '<p>不同用户的用电"脾气"(负荷曲线)差别很大:大工业全天平稳,' +
      '居民早晚两个尖峰,商业白天高晚上低。' +
      '理解负荷曲线是制定电价策略(峰谷/阶梯)和调度计划的基础。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 580 160" width="100%" style="max-width:560px">' +
      '<g text-anchor="middle">' +
      '<line x1="50" y1="140" x2="550" y2="140" class="f-line"/>' +
      '<line x1="50" y1="140" x2="50"  y2="15"  class="f-line"/>' +
      '<text x="300" y="158" class="f-dim" style="font-size:10px">0h ——— 6h ——— 12h ——— 18h ——— 24h</text>' +
      '<line x1="50" y1="60" x2="550" y2="60" class="f-line" style="stroke:var(--ok);stroke-dasharray:5 3"/>' +
      '<text x="560" y="64" class="f-ok" style="font-size:9px;text-anchor:start">工业</text>' +
      '<path d="M50 90 Q120 95 180 85 Q240 60 300 50 Q350 45 400 48 Q450 55 500 70 Q530 85 550 90" ' +
      'fill="none" class="f-line" style="stroke:var(--hot);stroke-width:1.5"/>' +
      '<text x="560" y="73" class="f-hot" style="font-size:9px;text-anchor:start">商业</text>' +
      '<path d="M50 100 Q100 105 140 95 Q180 110 220 115 Q280 120 320 110 Q380 90 420 60 Q460 50 480 55 Q520 75 550 100" ' +
      'fill="none" class="f-line" style="stroke-width:1.5"/>' +
      '<text x="560" y="103" class="f-txt" style="font-size:9px;text-anchor:start">居民</text>' +
      '</g></svg>' +
      '<figcaption>图 · 三类用户的典型日负荷曲线(示意)</figcaption></figure>' +
      '<div class="ex">"傍晚高峰"是所有城市电网最紧张的时段:工业还没下班,商场还在营业,居民开始做饭开空调——' +
      '三类负荷叠加到一起,形成全天最高峰。这就是为什么分时电价要在高峰加价。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"居民用电最多。"</b>' +
      '居民用电量只占约 15%。大工业才是用电大户,只是因为居民户数多、点多面广,管理复杂。</div>' +
      '<div class="pit"><b>误解:"用电越多越不好。"</b>' +
      '用电量增长本身不是坏事——电气化率提升(电动车替代燃油车等)恰恰需要用更多电。' +
      '关键是发电要跟上,且发的电要"绿"。</div>',
    links:
      '<p>· 配电与用电模块到此结束。下一站:模块 6《调度运行》。<br>' +
      '· 模块 12《营销与电价》会讲峰谷电价、阶梯电价等针对不同用户的定价策略。</p>'
  }
});
