PGF.registerLesson({
  id: 'basics-06-50hz',
  module: 'basics',
  order: 6,
  title: '50Hz:电网的心跳',
  minutes: 4,
  keywords: ['50Hz', '频率', '心跳', '转速', '发电机', '供需平衡', '频率偏差'],
  sections: {
    what:
      '<p>中国电网的<gd data-term="pinlv">频率</gd>是 <strong>50Hz</strong>——' +
      '交流电每秒正负交替 50 次,所有并网的发电机都以同一节奏旋转。</p>' +
      '<p>频率不是一个"设定值然后不变",而是一面<strong>实时镜子</strong>:' +
      '它反映的是全网发电与用电的平衡状态。</p>' +
      '<div class="ex">类比:把电网想象成一个巨型跑步机,所有发电机一起踩踏板带动皮带转。' +
      '踩的力(发电)多于阻力(用电)——跑步机加速,频率>50Hz;' +
      '阻力大于踩力——跑步机减速,频率<50Hz。</div>',
    why:
      '<p>频率偏差是电网最灵敏的"体温计":</p>' +
      '<ul>' +
      '<li>频率<strong>下降</strong> → 说明用电 > 发电,电不够了;</li>' +
      '<li>频率<strong>上升</strong> → 说明发电 > 用电,电多了。</li>' +
      '</ul>' +
      '<p>正常波动范围只允许 <strong>&plusmn;0.2Hz</strong>(50.0 的千分之四),' +
      '超过 &plusmn;0.5Hz 就要启动紧急措施。如果一路跌到 47Hz~48Hz,' +
      '发电机会被迫脱网——可能引发连锁跳闸,大面积停电。</p>' +
      '<p>所以<gd data-term="diaodu">调度</gd>24 小时盯着频率,' +
      '<gd data-term="agc">AGC</gd> 系统每几秒就自动调整电厂出力,让频率始终稳在 50Hz 附近。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 180" width="100%" style="max-width:580px">' +
      '<g text-anchor="middle">' +
      '<line x1="60" y1="90" x2="560" y2="90" class="f-line" style="stroke-dasharray:6 3"/>' +
      '<text x="40" y="94" class="f-txt" style="font-size:11px;text-anchor:end">50Hz</text>' +
      '<rect x="60" y="30" width="500" height="20" rx="3" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="310" y="44" class="f-ok" style="font-size:11px">正常范围 49.8 ~ 50.2 Hz</text>' +
      '<rect x="60" y="8" width="500" height="12" rx="2" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="310" y="17" class="f-hot" style="font-size:10px">危险区:低于 49.5 或高于 50.5 → 紧急措施</text>' +
      '<rect x="120" y="100" width="120" height="36" rx="4" class="f-box2"/>' +
      '<text x="180" y="122" class="f-txt" style="font-size:12px">频率下降</text>' +
      '<rect x="360" y="100" width="120" height="36" rx="4" class="f-box2"/>' +
      '<text x="420" y="122" class="f-txt" style="font-size:12px">频率上升</text>' +
      '<text x="180" y="155" class="f-hot" style="font-size:12px">用电 > 发电</text>' +
      '<text x="180" y="172" class="f-dim" style="font-size:11px">加发电 / 切负荷</text>' +
      '<text x="420" y="155" class="f-ok" style="font-size:12px">发电 > 用电</text>' +
      '<text x="420" y="172" class="f-dim" style="font-size:11px">减发电 / 增用电</text>' +
      '</g></svg>' +
      '<figcaption>图 · 频率是供需平衡的实时仪表</figcaption></figure>' +
      '<div class="ex">关键数字对照:<br>' +
      '· 中国/欧洲/大部分亚洲:50Hz<br>' +
      '· 美国/日本东部:60Hz<br>' +
      '· 日本是世界上唯一一个国内同时用 50Hz 和 60Hz 的国家(东 50 / 西 60,历史遗留)</div>' +
      '<p>为什么全世界选了 50 或 60?主要是历史惯性:频率太低灯会闪,太高线损大,50~60 是工程平衡点。</p>',
    pitfalls:
      '<div class="pit"><b>误解 1:"50Hz 是固定的,永远不变。"</b>' +
      '50Hz 是目标值,实际每一秒都在微微波动。维持它稳定是调度最核心的任务。</div>' +
      '<div class="pit"><b>误解 2:"频率偏了 0.1Hz 没什么大不了。"</b>' +
      '电网规模巨大,0.1Hz 意味着数百万千瓦级别的供需缺口。' +
      '对精密制造和电子时钟等敏感设备,微小偏差也会造成影响。</div>' +
      '<div class="pit"><b>误解 3:"每个电厂自己转自己的频率。"</b>' +
      '不行。所有并网发电机必须<strong>同频运转</strong>,像一支乐团必须跟同一个节拍器。' +
      '步调不一致的发电机会被电网甩出去(脱网)。</div>',
    links:
      '<p>· 上一课回顾:电不能大规模储存,发用必须瞬时平衡——频率就是衡量平衡的尺子。<br>' +
      '· 下一课《一度电的旅程》把五个环节串起来走一遍。<br>' +
      '· 模块 6《调度运行》的 AGC 一课,详细讲怎么用自动系统把频率控制在 &plusmn;0.2Hz 以内。</p>'
  }
});
