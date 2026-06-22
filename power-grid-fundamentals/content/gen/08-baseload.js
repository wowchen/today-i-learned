PGF.registerLesson({
  id: 'gen-08-baseload',
  module: 'gen',
  order: 8,
  title: '基荷与调峰:电源的分工',
  minutes: 4,
  keywords: ['基荷', '调峰', '腰荷', '负荷曲线', '分工', '出力'],
  sections: {
    what:
      '<p>一天 24 小时的用电量不是平的——白天多、深夜少、傍晚最高。' +
      '这条起伏的曲线叫<gd data-term="fuhe-quxian">负荷曲线</gd>。' +
      '不同电源按照自身特点"分工":有的托底,有的补峰。</p>' +
      '<ul>' +
      '<li><strong>基荷电源</strong>:24 小时稳稳托住底部,不轻易调——核电、大型煤电;</li>' +
      '<li><strong>腰荷电源</strong>:白天跟着需求上调,晚上降——中等煤电、水电;</li>' +
      '<li><strong>调峰电源</strong>:只在高峰时段顶上,其余时间休息——燃气、抽蓄、部分水电。</li>' +
      '</ul>' +
      '<div class="ex">类比:基荷是公交车(全天运行),腰荷是通勤班车(早晚加密),调峰是出租车(随叫随到)。</div>',
    why:
      '<p>为什么不全用一种电源?因为成本结构不同:</p>' +
      '<ul>' +
      '<li>核电/煤电:建设贵(固定成本高)但燃料便宜,跑的小时数越多,每度电越便宜 → 适合基荷;</li>' +
      '<li>燃气:建设便宜但燃料贵,跑得越多花越多 → 适合只在高峰跑几小时。</li>' +
      '</ul>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 200" width="100%" style="max-width:580px">' +
      '<g text-anchor="middle">' +
      '<line x1="50" y1="180" x2="570" y2="180" class="f-line"/>' +
      '<line x1="50" y1="180" x2="50"  y2="20"  class="f-line"/>' +
      '<text x="30" y="100" class="f-dim" style="font-size:10px;writing-mode:tb">负荷(MW)</text>' +
      '<text x="310" y="198" class="f-dim" style="font-size:10px">0h &mdash;&mdash;&mdash; 6h &mdash;&mdash;&mdash; 12h &mdash;&mdash;&mdash; 18h &mdash;&mdash;&mdash; 24h</text>' +
      '<rect x="50" y="140" width="520" height="40" rx="0" class="f-box2" style="opacity:0.5"/>' +
      '<text x="310" y="164" class="f-txt" style="font-size:11px">基荷:核电 + 大煤电(24h 稳定)</text>' +
      '<path d="M50 140 Q160 120 200 110 Q310 90 360 80 Q430 70 460 75 Q520 90 570 140" fill="none" class="f-line" style="stroke:var(--hot);stroke-width:2"/>' +
      '<text x="400" y="60" class="f-hot" style="font-size:11px">调峰:燃气/抽蓄</text>' +
      '<text x="260" y="104" class="f-dim" style="font-size:11px">腰荷:煤电+水电</text>' +
      '<path d="M50 140 Q160 130 200 125 Q310 108 360 100 Q430 95 460 100 Q520 120 570 140" fill="none" class="f-line" style="stroke:var(--ok);stroke-width:1.5;stroke-dasharray:5 3"/>' +
      '</g></svg>' +
      '<figcaption>图 · 基荷-腰荷-调峰:不同电源填充负荷曲线的不同层</figcaption></figure>' +
      '<div class="ex">随着风光大量接入,传统的"基荷-腰荷-调峰"分工正在被打破:' +
      '中午光伏大发时,煤电要深度调低(以前不用),傍晚光伏退场煤电又要快速爬坡——' +
      '煤电越来越像"调峰"角色了。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"基荷电源最重要。"</b>' +
      '每层都重要。没有调峰电源,傍晚高峰就顶不住;没有基荷电源,深夜低谷也没人托底。</div>' +
      '<div class="pit"><b>误解:"风光是调峰电源。"</b>' +
      '风光"靠天发电",出力不可控,不能按需调节。它更像"见缝插针"的额外供应,' +
      '把传统电源该发的电"挤"掉了一部分。</div>',
    links:
      '<p>· 下一课讲利用小时数:衡量电厂"出勤率"的核心指标。<br>' +
      '· 模块 6《调度运行》详细讲怎么安排各电源的发电计划。</p>'
  }
});
