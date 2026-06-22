PGF.registerLesson({
  id: 'basics-04-threephase',
  module: 'basics',
  order: 4,
  title: '三相电:工厂的电和你家的电差在哪',
  minutes: 4,
  keywords: ['三相电', '单相', '380V', '220V', '相电压', '线电压', '三根线', '相位'],
  sections: {
    what:
      '<p>发电机同时产生三组<gd data-term="jiaoliudian">交流电</gd>,' +
      '三组波形一模一样,但在时间上<strong>各错开 120&deg;</strong>(一圈的三分之一)。' +
      '这就是<gd data-term="sanxiang">三相电</gd>。</p>' +
      '<div class="ex">类比:三个人骑同一辆三脚踏板车,脚踏板均匀错开 120&deg;,' +
      '任何一瞬间总有人在用力蹬——所以输出功率特别平稳,不会像单人骑车那样一蹬一空。</div>',
    why:
      '<p>三相电有两大好处让它成为全世界电网的标准:</p>' +
      '<ul>' +
      '<li><strong>输出更平稳</strong>:单相交流功率在零附近来回晃,三相合在一起功率恒定不抖动,大电机跑得更稳。</li>' +
      '<li><strong>省铜省线</strong>:三根相线 + 一根零线就能传输三倍功率,而三套独立单相需要六根线——节省约一半导线。</li>' +
      '</ul>' +
      '<p>你家用的 220V 其实是三相电里<strong>抽出来的一相</strong>:一根相线 + 一根零线 = 220V。' +
      '整栋楼的住户分散在三相上,电网才能保持三相平衡。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 540 200" width="100%" style="max-width:520px">' +
      '<defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<circle cx="100" cy="100" r="60" class="f-box"/>' +
      '<text x="100" y="95" class="f-txt" style="font-size:12px">发电机</text>' +
      '<text x="100" y="112" class="f-dim" style="font-size:11px">三组绕线</text>' +
      '<line x1="160" y1="60"  x2="310" y2="40"  class="f-line" style="stroke:var(--ok)" marker-end="url(#ar4)"/>' +
      '<line x1="160" y1="100" x2="310" y2="100" class="f-line" style="stroke:var(--hot)" marker-end="url(#ar4)"/>' +
      '<line x1="160" y1="140" x2="310" y2="160" class="f-line" style="stroke:var(--accent)" marker-end="url(#ar4)"/>' +
      '<text x="240" y="32"  class="f-ok"  style="font-size:11px">A 相</text>' +
      '<text x="240" y="92"  class="f-hot" style="font-size:11px">B 相</text>' +
      '<text x="240" y="178" class="f-txt" style="font-size:11px;fill:var(--accent)">C 相</text>' +
      '<rect x="320" y="20"  width="200" height="40" rx="4" class="f-box"/>' +
      '<text x="420" y="45"  class="f-txt" style="font-size:12px">工厂:接三相 380V</text>' +
      '<rect x="320" y="80"  width="200" height="40" rx="4" class="f-box"/>' +
      '<text x="420" y="105" class="f-txt" style="font-size:12px">你家:取一相 220V</text>' +
      '<rect x="320" y="140" width="200" height="40" rx="4" class="f-box"/>' +
      '<text x="420" y="165" class="f-txt" style="font-size:12px">邻居:取另一相 220V</text>' +
      '</g></svg>' +
      '<figcaption>图 · 三相电的分配:工厂接三相,住户各取一相</figcaption></figure>' +
      '<p>两个关键电压:</p>' +
      '<table><tr><th>名称</th><th>测量方式</th><th>中国标准值</th><th>谁在用</th></tr>' +
      '<tr><td>相电压</td><td>一根相线 vs 零线</td><td><strong>220V</strong></td><td>居民、小商户</td></tr>' +
      '<tr><td>线电压</td><td>两根相线之间</td><td><strong>380V</strong></td><td>工厂电机、大空调</td></tr></table>' +
      '<div class="ex">220 &times; &radic;3 &asymp; 380。两个电压不是两套系统,而是同一套三相电的不同"取法"。</div>',
    pitfalls:
      '<div class="pit"><b>误解 1:"工厂用 380V,家里用 220V,是两种不同的电。"</b>' +
      '不是。它们都来自同一套三相电:取一相对零线就是 220V,取两相之间就是 380V。</div>' +
      '<div class="pit"><b>误解 2:"三相电更危险。"</b>' +
      '单看电压,380V 确实比 220V 危险;但三相本身不比单相更"凶",只是电压更高了一档。</div>' +
      '<div class="pit"><b>误解 3:"家里用不到三相电。"</b>' +
      '你家的 220V 就是三相电的一相,整栋楼三相都在用。少数大功率家用设备(如充电桩)也可能接三相。</div>',
    links:
      '<p>· 上一课回顾:交流电是正弦波,三相就是三条错开的正弦波。<br>' +
      '· 下一课《电为什么不能大规模储存》是全站总钥匙,必读。<br>' +
      '· 模块 4《变电站》会讲三相电压怎么一级一级降下来。</p>'
  }
});
