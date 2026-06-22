PGF.registerLesson({
  id: 'dispatch-02-levels',
  module: 'dispatch',
  order: 2,
  title: '五级调度体系:国调到县调',
  minutes: 4,
  keywords: ['五级调度', '国调', '网调', '省调', '地调', '县调', '分级管辖'],
  sections: {
    what:
      '<p>中国电网调度分<strong>五级</strong>,从上到下:</p>' +
      '<table><tr><th>级别</th><th>全称</th><th>管辖范围</th><th>管什么</th></tr>' +
      '<tr><td>国调</td><td>国家电力调度中心</td><td>全国互联电网</td><td>跨区直流、大区联络线、大型电厂</td></tr>' +
      '<tr><td>网调</td><td>区域/分部调度</td><td>大区电网</td><td>区域内骨干线路、跨省联络</td></tr>' +
      '<tr><td>省调</td><td>省电力调度中心</td><td>省级电网</td><td>省内 220kV 及以上、省内电厂</td></tr>' +
      '<tr><td>地调</td><td>地市调度</td><td>地市电网</td><td>110kV 及以下输配线路</td></tr>' +
      '<tr><td>县调</td><td>县级调度</td><td>县级配网</td><td>10kV 配电线路</td></tr></table>',
    why:
      '<p>电网太大,一个调度中心管不过来,必须<strong>分级管辖、逐级协调</strong>。' +
      '原则是:高电压等级归上级调度管,低电压等级归下级管。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 400 200" width="100%" style="max-width:380px">' +
      '<g text-anchor="middle">' +
      '<rect x="130" y="5"   width="140" height="30" rx="4" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="200" y="24"  class="f-hot" style="font-size:12px">国调</text>' +
      '<rect x="110" y="48"  width="180" height="30" rx="4" class="f-box"/>' +
      '<text x="200" y="67"  class="f-txt" style="font-size:12px">网调(区域)</text>' +
      '<rect x="80"  y="91"  width="240" height="30" rx="4" class="f-box"/>' +
      '<text x="200" y="110" class="f-txt" style="font-size:12px">省调</text>' +
      '<rect x="50"  y="134" width="300" height="30" rx="4" class="f-box"/>' +
      '<text x="200" y="153" class="f-txt" style="font-size:12px">地调</text>' +
      '<rect x="20"  y="177" width="360" height="20" rx="4" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="200" y="191" class="f-ok" style="font-size:11px">县调</text>' +
      '</g></svg>' +
      '<figcaption>图 · 五级调度金字塔:越往上管的范围越大、电压越高、设备越少但越关键</figcaption></figure>' +
      '<div class="ex">国调只管几百台设备(特高压线路、大电厂),但每一台都是"全局心脏级";' +
      '县调管几千条 10kV 线路,单条影响小但数量多,与老百姓最近。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"国调最忙,县调最闲。"</b>' +
      '恰恰相反:国调管的设备少但决策影响面大;县调管的设备多、故障频繁、日常操作量大。' +
      '每级都忙,忙法不同。</div>',
    links:
      '<p>· 下一课讲频率与功率平衡:调度最核心的物理机制。<br>' +
      '· 模块 8《国网组织》会讲调度中心在组织架构中的位置。</p>'
  }
});
