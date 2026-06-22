PGF.registerLesson({
  id: 'trans-01-voltage',
  module: 'trans',
  order: 1,
  title: '电压等级阶梯:220V 到 1000kV',
  minutes: 4,
  keywords: ['电压等级', '220V', '10kV', '110kV', '500kV', '1000kV', '阶梯'],
  sections: {
    what:
      '<p>中国电网从你家插座到最高等级输电线,有一套<strong>电压阶梯</strong>:' +
      '220V → 380V → 10kV → 35kV → 110kV → 220kV → 500kV → 1000kV。' +
      '每一级之间靠<gd data-term="biandian">变电站</gd>升降。</p>' +
      '<div class="ex">类比:公路体系有小区路、城市路、国道、高速公路;' +
      '电压等级就是电网的"道路等级"——等级越高,通道容量越大,传输距离越远。</div>',
    why:
      '<p>为什么不直接用一个电压?因为<strong>不同场景需要不同等级</strong>:</p>' +
      '<ul>' +
      '<li>用户端(220/380V):安全,设备兼容;</li>' +
      '<li>配电(10/35kV):覆盖城市片区;</li>' +
      '<li>输电(110~500kV):跨城市、跨省;</li>' +
      '<li>特高压(1000kV/&plusmn;800kV):跨大区、几千公里。</li>' +
      '</ul>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 220" width="100%" style="max-width:580px">' +
      '<g text-anchor="start">' +
      '<rect x="30" y="10"  width="540" height="25" rx="3" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="40" y="27" class="f-hot" style="font-size:11px">1000kV / &plusmn;800kV 特高压 —— 跨大区(西电东送)</text>' +
      '<rect x="30" y="45"  width="460" height="25" rx="3" class="f-box"/>' +
      '<text x="40" y="62" class="f-txt" style="font-size:11px">500kV / 330kV —— 跨省、省内骨干</text>' +
      '<rect x="30" y="80"  width="380" height="25" rx="3" class="f-box"/>' +
      '<text x="40" y="97" class="f-txt" style="font-size:11px">220kV —— 省内主网</text>' +
      '<rect x="30" y="115" width="300" height="25" rx="3" class="f-box"/>' +
      '<text x="40" y="132" class="f-txt" style="font-size:11px">110kV / 35kV —— 城市/区域配网</text>' +
      '<rect x="30" y="150" width="220" height="25" rx="3" class="f-box"/>' +
      '<text x="40" y="167" class="f-txt" style="font-size:11px">10kV —— 中压配电</text>' +
      '<rect x="30" y="185" width="140" height="25" rx="3" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="40" y="202" class="f-ok" style="font-size:11px">380 / 220V —— 用户</text>' +
      '</g></svg>' +
      '<figcaption>图 · 中国电压等级阶梯(从高到低)</figcaption></figure>' +
      '<table><tr><th>电压等级</th><th>对应设施</th><th>你在哪能看到</th></tr>' +
      '<tr><td>1000kV / &plusmn;800kV</td><td>特高压线路、换流站</td><td>野外超高铁塔</td></tr>' +
      '<tr><td>500kV</td><td>省级输电主网</td><td>郊外大铁塔</td></tr>' +
      '<tr><td>220kV</td><td>城市周边输电</td><td>城郊铁塔、电缆隧道</td></tr>' +
      '<tr><td>110/35kV</td><td>区域变电站</td><td>围墙里的变电站</td></tr>' +
      '<tr><td>10kV</td><td>小区外配电线路</td><td>路边电线杆/箱变</td></tr>' +
      '<tr><td>380/220V</td><td>入户配电</td><td>你家配电箱</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>误解:"电压等级越高越先进。"</b>' +
      '不是。每个等级解决不同距离和容量的问题。城市配电用 10kV 就够了,没必要上 500kV。</div>' +
      '<div class="pit"><b>误解:"全国电压等级都一样。"</b>' +
      '大框架统一,但部分地区有差异:比如东北和西北用 330kV(而非 500kV)作为骨干网。</div>',
    links:
      '<p>· 下一课讲"为什么远距离输电要升压"——把物理原理讲透。<br>' +
      '· 模块 5《配电与用电》会展开讲 10kV 以下的配电世界。</p>'
  }
});
