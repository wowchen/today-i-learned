/* 标准样板课 ②:含 SVG 图解(figure.fig + f-* 取色类,自动适配深浅主题)。 */
PGF.registerLesson({
  id: 'basics-05-no-storage',
  module: 'basics',
  order: 5,
  title: '电为什么不能大规模储存?',
  minutes: 4,
  key: '全站总钥匙',
  keywords: ['储存', '瞬时平衡', '实时平衡', '传送带', '总钥匙', '发用平衡'],
  sections: {
    what:
      '<p>电是一种<strong>当场生产、当场消费</strong>的商品——你家开灯的那一瞬间,某个电厂正好多发了这一点电。' +
      '电网不是"水库",而是一张<strong>实时传送带</strong>:传送带上不能堆货,发多少就得用多少。</p>' +
      '<div class="ex">类比:自来水可以先存水塔里慢慢用,电却像<strong>演唱会的现场直播</strong>——' +
      '演员(电厂)唱多少,观众(用户)就听多少,没法"先录下来攒着播"。</div>',
    why:
      '<p>这是理解整个电力行业的<strong>总钥匙</strong>。' +
      '<gd data-term="diaodu">调度</gd>为什么 24 小时盯着屏幕、' +
      '<gd data-term="xianhuo">电力现货市场</gd>为什么每 15 分钟一个价、' +
      '<gd data-term="chuneng">储能</gd>为什么突然成了风口、新能源为什么会"弃风弃光"——' +
      '根子全在这一条:<strong>电不能大规模储存,发电与用电必须每一秒都相等</strong>(行话叫' +
      '<gd data-term="shunshi-pingheng">瞬时平衡</gd>)。</p>',
    how:
      '<p>电从电厂到你家插座,走的是一条一气呵成的"高速公路",全程以光速的量级传递,<strong>中途没有仓库</strong>:</p>' +
      '<figure class="fig">' +
      '<svg viewBox="0 0 640 110" width="100%" style="max-width:620px">' +
      '<defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="8"   y="30" width="92" height="44" class="f-box"/>' +
      '<rect x="138" y="30" width="92" height="44" class="f-box"/>' +
      '<rect x="268" y="30" width="92" height="44" class="f-box"/>' +
      '<rect x="398" y="30" width="92" height="44" class="f-box"/>' +
      '<rect x="528" y="30" width="92" height="44" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="54"  y="56" class="f-txt">发电</text>' +
      '<text x="184" y="56" class="f-txt">输电</text>' +
      '<text x="314" y="56" class="f-txt">变电</text>' +
      '<text x="444" y="56" class="f-txt">配电</text>' +
      '<text x="574" y="56" class="f-ok" style="font-size:13px">用电</text>' +
      '<line x1="100" y1="52" x2="134" y2="52" class="f-line" marker-end="url(#ar5)"/>' +
      '<line x1="230" y1="52" x2="264" y2="52" class="f-line" marker-end="url(#ar5)"/>' +
      '<line x1="360" y1="52" x2="394" y2="52" class="f-line" marker-end="url(#ar5)"/>' +
      '<line x1="490" y1="52" x2="524" y2="52" class="f-line" marker-end="url(#ar5)"/>' +
      '<text x="54"  y="20" class="f-dim">电厂</text>' +
      '<text x="314" y="20" class="f-dim">全程无仓库</text>' +
      '<text x="574" y="20" class="f-dim">你家</text>' +
      '<text x="320" y="98" class="f-hot">实时平衡:发电量 = 用电量(每一秒)</text>' +
      '</g></svg>' +
      '<figcaption>图 · 电力系统五环节——一条没有仓库的传送带</figcaption></figure>' +
      '<p>一旦"发"和"用"不相等,电网的<gd data-term="pinlv">频率</gd>就会偏离 50Hz:' +
      '用电多了频率往下掉,发电多了频率往上飘。偏差大了,发电机会被迫脱网,可能引发连锁停电。' +
      '所以电网有一个角色专门负责让两边时刻相等——<gd data-term="diaodu">调度</gd>。</p>' +
      '<div class="ex">关键数字:中国电网频率 = <strong>50Hz</strong>,正常波动范围只允许 ±0.2Hz——' +
      '相当于在高速上开车,车速只许差千分之四。</div>',
    pitfalls:
      '<div class="pit"><b>误解 1:"电存在电网里,我随用随取。"</b>' +
      '电网里一度电都没存。你能"随用随取",是因为调度让发电厂时刻跟着全国的用电量增减出力。</div>' +
      '<div class="pit"><b>误解 2:"不是有充电宝、电池吗?怎么能说不能储存?"</b>' +
      '能存,但<strong>太贵、太小</strong>。全国一天用电约 270 亿度,目前所有储能加起来也只够全国用几十分钟——' +
      '所以严谨说法是"不能<strong>大规模</strong>储存"。</div>' +
      '<div class="pit"><b>误解 3:"发电厂可以先发好电等着用。"</b>' +
      '发出来的电如果没人用,发电机转速会飙升被迫停机。电厂"待命"待的是产能,不是攒好的电。</div>',
    links:
      '<p>· 下一课《50Hz:电网的心跳》讲频率如何实时反映供需平衡。<br>' +
      '· 模块 6《调度运行》整个模块都建立在这一课之上。<br>' +
      '· 模块 11《储能》讲人类如何花大价钱给电网"修仓库"。</p>'
  }
});
