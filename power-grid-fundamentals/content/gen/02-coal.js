PGF.registerLesson({
  id: 'gen-02-coal',
  module: 'gen',
  order: 2,
  title: '煤电:曾经的主力,如今的"调节器"',
  minutes: 5,
  keywords: ['煤电', '火电', '锅炉', '蒸汽轮机', '超超临界', '调峰', '碳排放'],
  sections: {
    what:
      '<p><gd data-term="meidian">煤电</gd>(火力发电的主体)原理很直白:' +
      '<strong>烧煤 → 烧水 → 蒸汽推动汽轮机转 → 带动发电机发电</strong>。' +
      '本质上和 200 年前的蒸汽机是一个原理,只是效率高了很多。</p>' +
      '<div class="ex">最先进的"超超临界"机组,热效率能到 45% 左右——' +
      '也就是烧 100 份煤的热量,约 45 份变成了电,其余还是散热损失。</div>',
    why:
      '<p>煤电在中国的地位:</p>' +
      '<ul>' +
      '<li>装机约 12 亿千瓦(1200GW),发电量占比约 58%,是<strong>绝对主力</strong>;</li>' +
      '<li>但角色正在转变:从"发多少用多少"的主力,变成"风光不够时顶上"的<strong>调节器</strong>;</li>' +
      '<li>煤电最大的问题是<strong>碳排放</strong>:发一度电排放约 800~900 克 CO₂,是所有电源里最高的。</li>' +
      '</ul>',
    how:
      '<p>煤电的运作流程:</p>' +
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 100" width="100%" style="max-width:580px">' +
      '<defs><marker id="arg3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="10"  y="20" width="90" height="44" rx="4" class="f-box2"/>' +
      '<text x="55"  y="46" class="f-txt" style="font-size:11px">煤仓</text>' +
      '<rect x="120" y="20" width="90" height="44" rx="4" class="f-box"/>' +
      '<text x="165" y="46" class="f-txt" style="font-size:11px">锅炉</text>' +
      '<rect x="230" y="20" width="90" height="44" rx="4" class="f-box"/>' +
      '<text x="275" y="46" class="f-txt" style="font-size:11px">汽轮机</text>' +
      '<rect x="340" y="20" width="90" height="44" rx="4" class="f-box"/>' +
      '<text x="385" y="46" class="f-txt" style="font-size:11px">发电机</text>' +
      '<rect x="450" y="20" width="130" height="44" rx="4" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="515" y="46" class="f-ok" style="font-size:11px">升压 → 电网</text>' +
      '<line x1="100" y1="42" x2="116" y2="42" class="f-line" marker-end="url(#arg3a)"/>' +
      '<line x1="210" y1="42" x2="226" y2="42" class="f-line" marker-end="url(#arg3a)"/>' +
      '<line x1="320" y1="42" x2="336" y2="42" class="f-line" marker-end="url(#arg3a)"/>' +
      '<line x1="430" y1="42" x2="446" y2="42" class="f-line" marker-end="url(#arg3a)"/>' +
      '<text x="55"  y="82" class="f-dim" style="font-size:9px">化学能</text>' +
      '<text x="165" y="82" class="f-dim" style="font-size:9px">→ 热能</text>' +
      '<text x="275" y="82" class="f-dim" style="font-size:9px">→ 机械能</text>' +
      '<text x="385" y="82" class="f-dim" style="font-size:9px">→ 电能</text>' +
      '</g></svg>' +
      '<figcaption>图 · 煤电厂的能量转换链</figcaption></figure>' +
      '<p>煤电的关键参数:</p>' +
      '<table><tr><th>指标</th><th>典型值</th></tr>' +
      '<tr><td>单机容量</td><td>300MW~1000MW(大型)</td></tr>' +
      '<tr><td>热效率</td><td>38%~45%</td></tr>' +
      '<tr><td>年利用小时</td><td>约 4200~4800 小时</td></tr>' +
      '<tr><td>启停时间</td><td>冷态启动 8~12 小时</td></tr>' +
      '<tr><td>碳排放</td><td>约 800~900 g CO₂/kWh</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>误解:"煤电要全部关掉。"</b>' +
      '短期不可能。风光靠天吃饭,没风没光时还得靠煤电顶上。煤电的角色是从"主力发电"转为"灵活调峰"。</div>' +
      '<div class="pit"><b>误解:"煤电厂想开就开、想关就关。"</b>' +
      '煤电冷启动需要 8~12 小时,不像燃气轮机分钟级就能点火。频繁启停还会增加磨损和煤耗。</div>',
    links:
      '<p>· 下一课讲水电:会发电的水库。<br>' +
      '· 模块 13《双碳》讲煤电的碳排放问题和退煤路径。</p>'
  }
});
