PGF.registerLesson({
  id: 'basics-03-acdc',
  module: 'basics',
  order: 3,
  title: '交流与直流:插座里的电为什么是交流',
  minutes: 4,
  keywords: ['交流', '直流', 'AC', 'DC', '正弦波', '变压', '交流电', '直流电'],
  sections: {
    what:
      '<p><gd data-term="zhiliudian">直流电(DC)</gd>像一条<strong>单行道</strong>,' +
      '电流永远朝一个方向跑,手机电池、充电宝出来的都是直流。</p>' +
      '<p><gd data-term="jiaoliudian">交流电(AC)</gd>像一条<strong>潮汐公路</strong>,' +
      '电流每秒来回换方向 50 次(中国标准),画成曲线就是一条平滑的正弦波。' +
      '你家插座里的 220V 就是交流。</p>' +
      '<div class="ex">类比:直流像推车——只往前推;交流像拉锯——一推一拉循环往复,' +
      '但"锯"(做功)照样在动。</div>',
    why:
      '<p>19 世纪末爱迪生(直流)和特斯拉(交流)打了一场"电流之战",交流完胜。' +
      '原因只有一个:<strong>交流可以用变压器轻松升降压,直流不行</strong>。</p>' +
      '<p>发电厂出来的电要跑几百上千公里——' +
      '升高电压就能减小电流、减少线损(上一课讲的欧姆定律)。' +
      '到了城市再降回来。交流变压器结构简单、效率超过 99%,' +
      '这是交流成为全世界电网标准的根本原因。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 170" width="100%" style="max-width:580px">' +
      '<g text-anchor="middle">' +
      '<text x="140" y="15" class="f-txt" style="font-size:13px">交流 AC:正弦波,方向交替</text>' +
      '<line x1="30" y1="60" x2="270" y2="60" class="f-dim" style="stroke-dasharray:4 3"/>' +
      '<path d="M30 60 Q70 15 110 60 Q150 105 190 60 Q230 15 270 60" fill="none" class="f-line" style="stroke-width:2"/>' +
      '<text x="280" y="40" class="f-dim" style="font-size:11px;text-anchor:start">+</text>' +
      '<text x="280" y="82" class="f-dim" style="font-size:11px;text-anchor:start">&minus;</text>' +
      '<text x="440" y="15" class="f-txt" style="font-size:13px">直流 DC:恒定方向</text>' +
      '<line x1="320" y1="60" x2="560" y2="60" class="f-dim" style="stroke-dasharray:4 3"/>' +
      '<line x1="320" y1="35" x2="560" y2="35" class="f-line" style="stroke:var(--ok);stroke-width:2"/>' +
      '<text x="575" y="40" class="f-dim" style="font-size:11px;text-anchor:start">+</text>' +
      '<text x="575" y="65" class="f-dim" style="font-size:11px;text-anchor:start">0</text>' +
      '<text x="300" y="130" class="f-hot" style="font-size:12px">电网主干 = 交流(可变压)</text>' +
      '<text x="300" y="150" class="f-dim" style="font-size:12px">电子设备 / 电池 / 光伏板 / 远距直流输电 = 直流</text>' +
      '</g></svg>' +
      '<figcaption>图 · 交流与直流的波形对比</figcaption></figure>' +
      '<p>但直流也没输到底——今天它卷土重来:</p>' +
      '<table><tr><th>场景</th><th>用交流还是直流</th><th>原因</th></tr>' +
      '<tr><td>电网主干</td><td>交流为主</td><td>变压器升降压方便</td></tr>' +
      '<tr><td>跨大区远距离输电</td><td>直流(特高压直流)</td><td>损耗更低、不需两端同步</td></tr>' +
      '<tr><td>光伏板/电池</td><td>天生直流</td><td>需逆变器转成交流才能并网</td></tr>' +
      '<tr><td>手机/电脑/LED</td><td>内部直流</td><td>充电器把交流整流成直流</td></tr></table>' +
      '<div class="ex">一句话:大电网的"公路系统"是交流,但两头(发电侧的光伏、用电侧的电子设备)越来越多是直流,' +
      '中间靠变压器和逆变器来回转换。</div>',
    pitfalls:
      '<div class="pit"><b>误解 1:"交流电来回跑,等于没做功。"</b>' +
      '来回跑的是方向,不是不做功。正弦波正半周推、负半周拉,每半周都在传递能量。</div>' +
      '<div class="pit"><b>误解 2:"直流落后、交流先进。"</b>' +
      '各有所长。直流在超远距离输电和电子设备领域反而更优,未来占比还会上升。</div>' +
      '<div class="pit"><b>误解 3:"220V 是直流还是交流分不清。"</b>' +
      '中国家用 220V 是<strong>交流</strong>;手机电池 3.7V 是<strong>直流</strong>。充电器就是交流→直流的转换器。</div>',
    links:
      '<p>· 下一课《三相电》解释工厂为什么用 380V 而不是 220V。<br>' +
      '· 模块 4《交流输电 vs 直流输电》会深入讲两种输电方式的工程取舍。<br>' +
      '· 模块 10 新能源里,光伏天生直流,并网必须经过逆变器——AC/DC 转换无处不在。</p>'
  }
});
