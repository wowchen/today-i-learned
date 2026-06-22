PGF.registerLesson({
  id: 'guide-02-bigmap',
  module: 'guide',
  order: 2,
  title: '一图看懂电力行业全景',
  minutes: 4,
  keywords: ['全景图', '发输变配用', '产业链', '电力系统', '行业地图'],
  sections: {
    what:
      '<p>电力行业可以用一句话概括:<strong>把一次能源变成电,通过电网送到每一个用户手里</strong>。' +
      '这条链路从左到右分五大环节:发电 → 输电 → 变电 → 配电 → 用电。</p>' +
      '<div class="ex">如果把电力行业比作"物流业":发电厂是工厂,输电网是高速公路,' +
      '变电站是物流中转仓,配电网是城市快递网点,你家插座是收货地址。</div>',
    why:
      '<p>有了这张全景图,后面遇到任何话题——调度、电价、新能源、碳市场——都能先定位它在地图上的哪个位置,不会迷路。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 700 320" width="100%" style="max-width:680px">' +
      '<defs><marker id="arg2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="10"  y="40" width="110" height="60" rx="6" class="f-box2"/>' +
      '<text x="65"  y="65" class="f-txt" style="font-size:13px">发电</text>' +
      '<text x="65"  y="82" class="f-dim" style="font-size:10px">煤/水/核/风/光</text>' +
      '<rect x="150" y="40" width="110" height="60" rx="6" class="f-box"/>' +
      '<text x="205" y="65" class="f-txt" style="font-size:13px">输电</text>' +
      '<text x="205" y="82" class="f-dim" style="font-size:10px">220~1000kV</text>' +
      '<rect x="290" y="40" width="110" height="60" rx="6" class="f-box"/>' +
      '<text x="345" y="65" class="f-txt" style="font-size:13px">变电</text>' +
      '<text x="345" y="82" class="f-dim" style="font-size:10px">升压/降压</text>' +
      '<rect x="430" y="40" width="110" height="60" rx="6" class="f-box"/>' +
      '<text x="485" y="65" class="f-txt" style="font-size:13px">配电</text>' +
      '<text x="485" y="82" class="f-dim" style="font-size:10px">10kV→220V</text>' +
      '<rect x="570" y="40" width="110" height="60" rx="6" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="625" y="65" class="f-ok" style="font-size:13px">用电</text>' +
      '<text x="625" y="82" class="f-dim" style="font-size:10px">工商居农</text>' +
      '<line x1="120" y1="70" x2="146" y2="70" class="f-line" marker-end="url(#arg2)"/>' +
      '<line x1="260" y1="70" x2="286" y2="70" class="f-line" marker-end="url(#arg2)"/>' +
      '<line x1="400" y1="70" x2="426" y2="70" class="f-line" marker-end="url(#arg2)"/>' +
      '<line x1="540" y1="70" x2="566" y2="70" class="f-line" marker-end="url(#arg2)"/>' +
      '<rect x="120" y="140" width="460" height="40" rx="5" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="350" y="165" class="f-hot" style="font-size:13px">调度(电网的大脑):24h 实时指挥,保证供需平衡</text>' +
      '<rect x="120" y="200" width="460" height="40" rx="5" class="f-box"/>' +
      '<text x="350" y="225" class="f-txt" style="font-size:13px">电力市场:中长期 + 现货 + 辅助服务</text>' +
      '<rect x="120" y="260" width="460" height="40" rx="5" class="f-box"/>' +
      '<text x="350" y="285" class="f-txt" style="font-size:13px">监管与政策:发改委 · 能源局 · 国资委 · 双碳</text>' +
      '<text x="60"  y="165" class="f-dim" style="font-size:10px">横贯</text>' +
      '<text x="60"  y="225" class="f-dim" style="font-size:10px">横贯</text>' +
      '<text x="60"  y="285" class="f-dim" style="font-size:10px">横贯</text>' +
      '</g></svg>' +
      '<figcaption>图 · 电力行业全景:五环节 + 三横贯</figcaption></figure>' +
      '<p>"三横贯"是贯穿整条链的横向主题:</p>' +
      '<table><tr><th>横贯主题</th><th>干什么</th><th>对应模块</th></tr>' +
      '<tr><td>调度</td><td>实时指挥发用平衡、保障安全</td><td>模块 6</td></tr>' +
      '<tr><td>电力市场</td><td>让电有了价格信号</td><td>模块 9</td></tr>' +
      '<tr><td>监管与政策</td><td>定规则、发牌照、管价格</td><td>模块 7 / 8 / 13</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>误解:"电力行业就是发电厂。"</b>' +
      '发电只是第一步。输、变、配、用每个环节都是独立的工程领域,调度和市场更是"软系统",复杂度不亚于硬件。</div>' +
      '<div class="pit"><b>误解:"电网公司 = 发电公司。"</b>' +
      '2002 年"厂网分开"后,发电归五大发电集团,电网归国家电网和南方电网,两者分开经营。</div>',
    links:
      '<p>· 下一课《学习路线》把这 17 个模块排出先后顺序。<br>' +
      '· 模块 2 的《一度电的旅程》会把五环节的细节走一遍。<br>' +
      '· 模块 7《中国电网格局》讲"两大一小"的由来和厂网分开。</p>'
  }
});
