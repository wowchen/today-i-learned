PGF.registerLesson({
  id: 'ne-05-sghc',
  module: 'newenergy',
  order: 5,
  title: '源网荷储:四端一起发力',
  minutes: 5,
  keywords: ['源网荷储', '源', '网', '荷', '储', '协同', '灵活性'],
  sections: {
    what:
      '<p>"源网荷储"是新型电力系统的四个支柱:</p>' +
      '<table><tr><th>端</th><th>含义</th><th>核心任务</th></tr>' +
      '<tr><td><strong>源</strong>(电源)</td><td>发电侧</td><td>多元互补:风、光、水、核、煤、气搭配</td></tr>' +
      '<tr><td><strong>网</strong>(电网)</td><td>输配侧</td><td>大范围优化配置:特高压+智能配网</td></tr>' +
      '<tr><td><strong>荷</strong>(负荷)</td><td>用电侧</td><td>需求响应:该少用就少用,该多用就多用</td></tr>' +
      '<tr><td><strong>储</strong>(储能)</td><td>储能设施</td><td>时间搬运:削峰填谷、平滑波动</td></tr></table>',
    why:
      '<p>过去只靠"源"端(发电厂)来平衡电网。新能源占比越来越高,单靠发电侧已经不够,' +
      '必须四端同时发力——这是从"独奏"到"四重奏"的转变。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 460 240" width="100%" style="max-width:460px">' +
      '<defs><marker id="arne5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<rect x="30" y="20" width="100" height="50" rx="6" class="f-box2"/>' +
      '<text x="80" y="50" text-anchor="middle" class="f-txt" style="font-size:13px">源(电源)</text>' +
      '<rect x="330" y="20" width="100" height="50" rx="6" class="f-box2"/>' +
      '<text x="380" y="50" text-anchor="middle" class="f-txt" style="font-size:13px">荷(负荷)</text>' +
      '<rect x="180" y="90" width="100" height="50" rx="6" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="230" y="120" text-anchor="middle" class="f-ok" style="font-size:13px">网(电网)</text>' +
      '<rect x="180" y="170" width="100" height="50" rx="6" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="230" y="200" text-anchor="middle" class="f-hot" style="font-size:13px">储(储能)</text>' +
      '<line x1="130" y1="50" x2="176" y2="100" class="f-line" marker-end="url(#arne5)"/>' +
      '<line x1="330" y1="50" x2="284" y2="100" class="f-line" marker-end="url(#arne5)"/>' +
      '<line x1="230" y1="140" x2="230" y2="166" class="f-line" marker-end="url(#arne5)"/>' +
      '<line x1="80" y1="70" x2="80" y2="185" class="f-line" style="stroke-dasharray:4 3"/>' +
      '<line x1="80" y1="185" x2="176" y2="195" class="f-line" style="stroke-dasharray:4 3" marker-end="url(#arne5)"/>' +
      '<line x1="380" y1="70" x2="380" y2="185" class="f-line" style="stroke-dasharray:4 3"/>' +
      '<line x1="380" y1="185" x2="284" y2="195" class="f-line" style="stroke-dasharray:4 3" marker-end="url(#arne5)"/>' +
      '<text x="230" y="235" text-anchor="middle" class="f-dim" style="font-size:10px">四端协同,灵活性叠加</text>' +
      '</svg>' +
      '<figcaption>图 · 源网荷储四端协同</figcaption></figure>' +
      '<div class="ex">实际场景:中午光伏大发 → "储"充电(储能) + "荷"多用(需求响应) + ' +
      '"网"外送(特高压) → 三端一起消化多余电力。傍晚光伏下线 → ' +
      '"储"放电 + "源"里煤电顶上 + "荷"适当错峰。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"储能可以解决所有问题。"</b>' +
      '储能是关键一环但不是万能的——以 2025 年前后的成本,全靠储能来消纳波动太贵。' +
      '必须四端一起上,相互配合。</div>',
    links:
      '<p>· 下一课讲虚拟电厂与需求响应——"荷"端的灵活性怎么挖。<br>' +
      '· 模块 11 整个模块专讲"储"端。</p>'
  }
});
