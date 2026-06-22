PGF.registerLesson({
  id: 'basics-02-via',
  module: 'basics',
  order: 2,
  title: '电压·电流·电阻:水管模型一次讲清',
  minutes: 4,
  keywords: ['电压', '电流', '电阻', '伏特', '安培', '欧姆', 'V', 'A', '水管模型'],
  sections: {
    what:
      '<p>电有三个最基本的量:' +
      '<gd data-term="dianya">电压</gd>是"推力",单位<strong>伏特(V)</strong>;' +
      '<gd data-term="dianliu">电流</gd>是"流量",单位<strong>安培(A)</strong>;' +
      '<gd data-term="dianzu">电阻</gd>是"阻碍",单位<strong>欧姆(&Omega;)</strong>。' +
      '三者的关系只有一条公式:<strong>电压 = 电流 &times; 电阻</strong>(欧姆定律)。</p>' +
      '<div class="ex">水管模型:电压好比水压——水塔越高水压越大;电流好比水流量——管子里每秒流过多少水;' +
      '电阻好比管子的粗细——管子越细(电阻越大)同样水压下水流越小。</div>',
    why:
      '<p>功率(上一课)= 电压 &times; 电流。要理解电网为什么分那么多电压等级,' +
      '为什么远距离输电要升压,都绕不开这三个量。</p>' +
      '<p>举个例子:同样输送 1 GW 的电,用 220V 需要的电流是 <strong>450 万安培</strong>,' +
      '导线要粗到无法想象;换成 500kV 只需要 2000 安培——电压越高,电流越小,导线就可以细得多。' +
      '这就是升压输电的根本原因。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 520 200" width="100%" style="max-width:500px">' +
      '<defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="20" y="10" width="160" height="80" rx="6" class="f-box2"/>' +
      '<text x="100" y="40" class="f-txt" style="font-size:13px">水塔(高度=水压)</text>' +
      '<text x="100" y="60" class="f-hot" style="font-size:13px">类比:电压 V</text>' +
      '<rect x="20" y="110" width="160" height="80" rx="6" class="f-box"/>' +
      '<text x="100" y="140" class="f-txt" style="font-size:13px">水管(粗细=阻力)</text>' +
      '<text x="100" y="160" class="f-dim" style="font-size:13px">类比:电阻 &Omega;</text>' +
      '<line x1="100" y1="90" x2="100" y2="106" class="f-line" marker-end="url(#ar2)"/>' +
      '<rect x="260" y="60" width="220" height="80" rx="6" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="370" y="90" class="f-txt" style="font-size:13px">水流量(每秒多少水)</text>' +
      '<text x="370" y="112" class="f-ok" style="font-size:13px">类比:电流 A</text>' +
      '<line x1="180" y1="150" x2="256" y2="100" class="f-line" marker-end="url(#ar2)"/>' +
      '<text x="370" y="168" class="f-hot" style="font-size:12px">水压 = 水流 &times; 阻力</text>' +
      '<text x="370" y="188" class="f-hot" style="font-size:12px">电压 = 电流 &times; 电阻</text>' +
      '</g></svg>' +
      '<figcaption>图 · 水管模型:电压、电流、电阻的直觉对应</figcaption></figure>' +
      '<p>日常会碰到的电压等级:</p>' +
      '<table><tr><th>场景</th><th>电压</th><th>直觉感受</th></tr>' +
      '<tr><td>手机充电器</td><td>5 V</td><td>摸到不怕</td></tr>' +
      '<tr><td>你家插座</td><td>220 V</td><td>能致命</td></tr>' +
      '<tr><td>工厂车间</td><td>380 V</td><td>三相电</td></tr>' +
      '<tr><td>小区配电</td><td>10 kV</td><td>变压器里的那根线</td></tr>' +
      '<tr><td>跨省输电</td><td>500 kV</td><td>铁塔上的大线</td></tr>' +
      '<tr><td>特高压</td><td>1000 kV</td><td>世界最高电压等级</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>坑 1:以为电压越高越危险,低压就安全。</b>' +
      '致命的不是电压本身而是通过人体的电流。但高电压能让更多电流穿过人体,' +
      '所以高压<strong>大概率更危险</strong>,36V 以下才算安全电压。</div>' +
      '<div class="pit"><b>坑 2:把"伏特"和"瓦特"搞混。</b>' +
      '伏特(V)是电压,瓦特(W)是功率。功率 = 电压 &times; 电流:' +
      '你家 220V 的插座,接一台 10A 的空调,功率就是 2200W ≈ 2.2kW。</div>' +
      '<div class="pit"><b>坑 3:以为导线不占电阻。</b>' +
      '再好的导线也有电阻,电流通过会发热、损失能量——这就是"线损",后面专门有一课讲。</div>',
    links:
      '<p>· 下一课《交流与直流》解释插座里的 220V 为什么是"一会儿正一会儿负"。<br>' +
      '· 模块 4《输电与变电》会系统讲电压等级阶梯、为什么要升压。<br>' +
      '· 上一课回顾:功率 = 电压 &times; 电流,所以 kW 和 V、A 是一套体系。</p>'
  }
});
