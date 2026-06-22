PGF.registerLesson({
  id: 'dist-04-topology',
  module: 'dist',
  order: 4,
  title: '接线方式:辐射、手拉手、双电源',
  minutes: 4,
  keywords: ['辐射', '手拉手', '双电源', '接线', '配电', '联络开关'],
  sections: {
    what:
      '<p>配电网有几种基本接线方式,可靠性由低到高:</p>' +
      '<ul>' +
      '<li><strong>辐射状</strong>:一条线从变电站出来,像树枝分叉,断了就停;</li>' +
      '<li><strong>手拉手(环网)</strong>:两条线首尾相连形成环,中间有联络开关,断一条可以从另一条倒送;</li>' +
      '<li><strong>双电源</strong>:两个独立电源供电,一个挂了另一个自动接管。</li>' +
      '</ul>',
    why:
      '<p>接线方式直接决定<strong>停电时长</strong>:辐射状断了要等抢修,手拉手倒送只需几分钟,' +
      '双电源几乎无感切换。城市核心区、医院、数据中心必须用高可靠方案。</p>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 160" width="100%" style="max-width:580px">' +
      '<defs><marker id="ard4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<text x="100" y="15" class="f-txt" style="font-size:12px">辐射状</text>' +
      '<rect x="50" y="25" width="30" height="20" rx="3" class="f-box2"/>' +
      '<line x1="80" y1="35" x2="110" y2="35" class="f-line" marker-end="url(#ard4)"/>' +
      '<line x1="110" y1="35" x2="110" y2="25" class="f-line"/>' +
      '<line x1="110" y1="35" x2="110" y2="50" class="f-line"/>' +
      '<line x1="110" y1="25" x2="140" y2="25" class="f-line" marker-end="url(#ard4)"/>' +
      '<line x1="110" y1="50" x2="140" y2="50" class="f-line" marker-end="url(#ard4)"/>' +
      '<text x="100" y="72" class="f-dim" style="font-size:10px">断=停</text>' +
      '<text x="310" y="15" class="f-txt" style="font-size:12px">手拉手(环网)</text>' +
      '<rect x="240" y="25" width="30" height="20" rx="3" class="f-box2"/>' +
      '<rect x="350" y="25" width="30" height="20" rx="3" class="f-box2"/>' +
      '<line x1="270" y1="35" x2="310" y2="35" class="f-line" marker-end="url(#ard4)"/>' +
      '<line x1="350" y1="35" x2="310" y2="35" class="f-line"/>' +
      '<circle cx="310" cy="35" r="6" class="f-box" style="stroke:var(--hot)"/>' +
      '<text x="310" y="72" class="f-dim" style="font-size:10px">联络开关倒送</text>' +
      '<text x="520" y="15" class="f-txt" style="font-size:12px">双电源</text>' +
      '<rect x="460" y="25" width="30" height="20" rx="3" class="f-box2"/>' +
      '<rect x="540" y="25" width="30" height="20" rx="3" class="f-box2"/>' +
      '<line x1="490" y1="35" x2="510" y2="55" class="f-line" marker-end="url(#ard4)"/>' +
      '<line x1="540" y1="35" x2="520" y2="55" class="f-line" marker-end="url(#ard4)"/>' +
      '<rect x="503" y="55" width="24" height="16" rx="2" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="515" y="66" class="f-ok" style="font-size:8px">负荷</text>' +
      '<text x="520" y="95" class="f-dim" style="font-size:10px">自动切换</text>' +
      '<text x="310" y="140" class="f-hot" style="font-size:11px">可靠性:辐射 &lt; 手拉手 &lt; 双电源,成本也依次递增</text>' +
      '</g></svg>' +
      '<figcaption>图 · 配电网三种基本接线方式</figcaption></figure>',
    pitfalls:
      '<div class="pit"><b>误解:"都应该用双电源。"</b>' +
      '双电源成本是辐射状的好几倍。农村地区用辐射状就够了,关键是因地制宜。</div>',
    links:
      '<p>· 下一课讲供电可靠性:年户均停电时间。<br>' +
      '· 模块 6《调度》的故障处理也涉及配电网倒送操作。</p>'
  }
});
