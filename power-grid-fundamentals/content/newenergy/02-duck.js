PGF.registerLesson({
  id: 'ne-02-duck',
  module: 'newenergy',
  order: 2,
  title: '反调峰与鸭子曲线',
  minutes: 5,
  keywords: ['鸭子曲线', '反调峰', '净负荷', '光伏', '调峰'],
  sections: {
    what:
      '<p>"鸭子曲线"是加州电网运营商(CAISO)最先画出来的一张图:' +
      '把一天的<strong>净负荷(用电量 - 风光发电量)</strong>画成曲线,' +
      '形状像一只鸭子——中午肚子下凹(光伏大发,挤掉其他电源),傍晚脖子上翘(光伏下线,需求上升)。</p>',
    why:
      '<p>鸭子曲线揭示了新能源的"反调峰"特性:光伏在用电不太高的中午大量发电,' +
      '反而在傍晚用电高峰时退出。传统电厂面临两头为难:' +
      '中午被迫深度降出力(甚至停机),傍晚又要快速拉满——对设备寿命和经济性都是挑战。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 500 220" width="100%" style="max-width:500px">' +
      '<defs><marker id="arne2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<line x1="45" y1="190" x2="480" y2="190" class="f-line" marker-end="url(#arne2)"/>' +
      '<line x1="45" y1="190" x2="45" y2="10" class="f-line" marker-end="url(#arne2)"/>' +
      '<text x="260" y="210" text-anchor="middle" class="f-dim" style="font-size:11px">时间(0:00 → 24:00)</text>' +
      '<text x="20" y="100" text-anchor="middle" class="f-dim" style="font-size:11px;writing-mode:tb">MW</text>' +
      '<polyline points="45,100 90,95 130,90 170,85 210,80 250,82 290,88 330,75 370,55 410,40 450,60 475,80" ' +
      'fill="none" style="stroke:var(--dim);stroke-width:2;stroke-dasharray:6 3"/>' +
      '<text x="200" y="72" class="f-dim" style="font-size:10px">总负荷</text>' +
      '<polyline points="45,100 90,95 130,80 170,130 210,160 250,170 290,155 330,115 370,55 410,35 450,58 475,80" ' +
      'fill="none" style="stroke:var(--hot);stroke-width:2.5"/>' +
      '<text x="260" y="185" class="f-hot" style="font-size:10px">净负荷(鸭子曲线)</text>' +
      '<path d="M170,130 Q210,165 250,170 Q290,165 330,115" fill="none" style="stroke:var(--ok);stroke-width:1;stroke-dasharray:3 2"/>' +
      '<text x="250" y="145" class="f-ok" style="font-size:9px">鸭肚(光伏挤压)</text>' +
      '<line x1="330" y1="115" x2="410" y2="35" class="f-line" style="stroke:var(--hot);stroke-width:1;stroke-dasharray:3 2"/>' +
      '<text x="395" y="28" class="f-hot" style="font-size:9px">鸭颈(爬坡)</text>' +
      '</svg>' +
      '<figcaption>图 · 鸭子曲线:净负荷中午下凹、傍晚急升</figcaption></figure>' +
      '<div class="ex">"鸭肚"越深,说明光伏渗透率越高。中国西北(如青海)已经出现中午净负荷为负的情况,' +
      '即光伏发电量超过了当地全部用电需求。</div>' +
      '<p>应对鸭子曲线的四把钥匙:</p>' +
      '<ul>' +
      '<li><strong>储能</strong>:中午充电、傍晚放电,把鸭肚填平;</li>' +
      '<li><strong>需求响应</strong>:引导用户中午多用电(如电解铝、充电桩);</li>' +
      '<li><strong>灵活电源</strong>:燃气轮机快速启停,应对傍晚爬坡;</li>' +
      '<li><strong>跨区输电</strong>:把多余光伏送到其他省份。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:"鸭子曲线只是加州的问题。"</b>' +
      '只要光伏占比上来,所有地方都会出现鸭子曲线。中国多个省份(青海、山东、河北)已经出现。</div>',
    links:
      '<p>· 下一课讲弃风弃光与消纳问题。<br>' +
      '· 模块 11《储能》是填平鸭肚的关键手段。</p>'
  }
});
