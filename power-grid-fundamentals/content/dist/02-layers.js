PGF.registerLesson({
  id: 'dist-02-layers',
  module: 'dist',
  order: 2,
  title: '配电网层级:35kV 到你家 220V',
  minutes: 4,
  keywords: ['配电网', '高压配电', '中压', '低压', '10kV', '配变'],
  sections: {
    what:
      '<p>配电网有三层,像一棵倒着的树:</p>' +
      '<ul>' +
      '<li><strong>高压配电</strong>(110kV / 35kV):区域变电站到片区;</li>' +
      '<li><strong>中压配电</strong>(10kV):从片区变电站到街道、小区;</li>' +
      '<li><strong>低压配电</strong>(380V / 220V):从<gd data-term="taiqu">台区</gd>配电变压器到你家。</li>' +
      '</ul>',
    why:
      '<p>10kV 中压线路是配电网的"主动脉"——城市里密密麻麻的电线杆、电缆沟走的大多是 10kV。' +
      '配电变压器(配变)再把 10kV 降到 380/220V 入户。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 560 140" width="100%" style="max-width:540px">' +
      '<defs><marker id="ard2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="10"  y="30" width="110" height="44" rx="4" class="f-box"/>' +
      '<text x="65"  y="48" class="f-txt" style="font-size:11px">110/35kV</text>' +
      '<text x="65"  y="64" class="f-dim" style="font-size:10px">高压配电</text>' +
      '<rect x="150" y="30" width="110" height="44" rx="4" class="f-box2"/>' +
      '<text x="205" y="48" class="f-txt" style="font-size:11px">10kV</text>' +
      '<text x="205" y="64" class="f-dim" style="font-size:10px">中压配电</text>' +
      '<rect x="290" y="30" width="110" height="44" rx="4" class="f-box"/>' +
      '<text x="345" y="48" class="f-txt" style="font-size:11px">配变 10→0.4kV</text>' +
      '<text x="345" y="64" class="f-dim" style="font-size:10px">台区变压器</text>' +
      '<rect x="430" y="30" width="110" height="44" rx="4" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="485" y="48" class="f-ok" style="font-size:11px">380/220V</text>' +
      '<text x="485" y="64" class="f-dim" style="font-size:10px">你家</text>' +
      '<line x1="120" y1="52" x2="146" y2="52" class="f-line" marker-end="url(#ard2)"/>' +
      '<line x1="260" y1="52" x2="286" y2="52" class="f-line" marker-end="url(#ard2)"/>' +
      '<line x1="400" y1="52" x2="426" y2="52" class="f-line" marker-end="url(#ard2)"/>' +
      '<text x="280" y="110" class="f-hot" style="font-size:11px">10kV 线路是配电网的"主动脉"</text>' +
      '<text x="280" y="128" class="f-dim" style="font-size:10px">城市里看到的电线杆、电缆沟,多数走 10kV</text>' +
      '</g></svg>' +
      '<figcaption>图 · 配电网三层:高压配 → 中压配(10kV) → 低压配(380/220V)</figcaption></figure>' +
      '<div class="ex">数字感:一座中等城市约有几百条 10kV 馈线、几万台配变、几十万低压用户。' +
      '管理粒度比输电网细得多。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"配电网就是低压线。"</b>' +
      '10kV 不低,触碰致命。配电网涵盖从 110kV 到 220V 的整个区间,不只是最后入户那段。</div>',
    links:
      '<p>· 下一课讲台区:电网管理的最小单元。<br>' +
      '· 本课是模块 4 输电与变电的"下游延续"。</p>'
  }
});
