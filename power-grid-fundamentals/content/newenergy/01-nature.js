PGF.registerLesson({
  id: 'ne-01-nature',
  module: 'newenergy',
  order: 1,
  title: '风光的"三性":波动、间歇、随机',
  minutes: 4,
  keywords: ['波动性', '间歇性', '随机性', '风电', '光伏', '新能源'],
  sections: {
    what:
      '<p>风电和光伏跟煤电最大的区别:它们的出力由老天决定,不受人控制。' +
      '业内用<strong>三个词</strong>概括这个特点:</p>' +
      '<table><tr><th>特性</th><th>含义</th><th>类比</th></tr>' +
      '<tr><td>波动性</td><td>出力持续上下变化</td><td>水龙头忽大忽小</td></tr>' +
      '<tr><td>间歇性</td><td>有时段完全停发(夜间光伏=0)</td><td>水龙头会关掉</td></tr>' +
      '<tr><td>随机性</td><td>变化难以精确预测</td><td>不知道水龙头什么时候变</td></tr></table>',
    why:
      '<p>电网要保证<gd data-term="gongxu-pingheng">供需平衡</gd>,发多少用多少,秒级不差。' +
      '传统电网靠"调发电"来匹配用电;风光大量接入后,发电侧自己就在剧烈波动,' +
      '平衡难度成倍增加——这是新能源时代的核心挑战。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 500 180" width="100%" style="max-width:500px">' +
      '<defs><marker id="arne1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<line x1="40" y1="150" x2="480" y2="150" class="f-line" marker-end="url(#arne1)"/>' +
      '<line x1="40" y1="150" x2="40" y2="10" class="f-line" marker-end="url(#arne1)"/>' +
      '<text x="260" y="172" text-anchor="middle" class="f-dim" style="font-size:11px">时间(0:00 → 24:00)</text>' +
      '<text x="18" y="80" text-anchor="middle" class="f-dim" style="font-size:11px;writing-mode:tb">出力</text>' +
      '<polyline points="40,130 80,125 120,80 160,55 200,40 240,35 280,38 320,55 360,90 400,130 440,148 470,150" ' +
      'fill="none" style="stroke:var(--hot);stroke-width:2"/>' +
      '<text x="255" y="28" class="f-hot" style="font-size:10px">光伏:中午高 夜间零</text>' +
      '<polyline points="40,70 80,90 120,60 160,100 200,50 240,85 280,55 320,95 360,65 400,80 440,75 470,90" ' +
      'fill="none" style="stroke:var(--ok);stroke-width:2"/>' +
      '<text x="400" y="55" class="f-ok" style="font-size:10px">风电:全天波动</text>' +
      '<line x1="40" y1="100" x2="470" y2="100" class="f-line" style="stroke-dasharray:4 4"/>' +
      '<text x="480" y="103" class="f-dim" style="font-size:9px">煤电</text>' +
      '</svg>' +
      '<figcaption>图 · 一天之内风光出力 vs 煤电稳定出力</figcaption></figure>' +
      '<div class="ex">关键数字:中国风电年利用小时约 2000 h,光伏约 1200 h(全年共 8760 h)。' +
      '也就是说,风机一年有大约 3/4 的时间低于满功率,光伏白天才发电。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"风光不靠谱,不如煤电。"</b>' +
      '风光的"不靠谱"是物理特性,不是缺陷——人类不能控制太阳几点落山。' +
      '解决办法不是不用它,而是用储能、灵活电源、需求响应来"配合"它。</div>',
    links:
      '<p>· 下一课讲这种波动在电网层面造成的具体问题:鸭子曲线。<br>' +
      '· 模块 2 第 5 课《电为什么不能大规模储存》是理解本课的前置知识。</p>'
  }
});
