PGF.registerLesson({
  id: 'energy-01-chain',
  module: 'energy',
  order: 1,
  title: '能源价值链:从一次能源到插座',
  minutes: 4,
  keywords: ['一次能源', '二次能源', '价值链', '煤', '石油', '天然气', '转化'],
  sections: {
    what:
      '<p><gd data-term="yici-nengyuan">一次能源</gd>是自然界直接提供的:煤、石油、天然气、水力、风、太阳辐射、铀矿。' +
      '它们不能直接给你手机充电,需要经过<strong>开采 → 运输 → 转化 → 输送 → 消费</strong>这条价值链,' +
      '最终变成你能用的<gd data-term="erci-nengyuan">二次能源</gd>——电、汽油、天然气管道气、氢等。</p>' +
      '<div class="ex">类比:一次能源是"原矿石",二次能源是"加工好的零件"。' +
      '煤矿里的煤(一次)→ 电厂烧煤发电 → 电(二次)→ 你家插座。</div>',
    why:
      '<p>理解价值链,才能理解行业里的钱从哪来、利润在哪个环节、政策为什么要管那些事:</p>' +
      '<ul>' +
      '<li>开采端:资源禀赋决定了"有没有";</li>' +
      '<li>运输端:物流成本决定了"贵不贵";</li>' +
      '<li>转化端:效率决定了"浪不浪费";</li>' +
      '<li>输送端:电网/管网决定了"送不送得到";</li>' +
      '<li>消费端:需求决定了"够不够用"。</li>' +
      '</ul>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 640 130" width="100%" style="max-width:620px">' +
      '<defs><marker id="are1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
      '<path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '<g text-anchor="middle">' +
      '<rect x="10"  y="30" width="100" height="44" rx="5" class="f-box2"/>' +
      '<text x="60"  y="56" class="f-txt" style="font-size:12px">开采</text>' +
      '<rect x="135" y="30" width="100" height="44" rx="5" class="f-box"/>' +
      '<text x="185" y="56" class="f-txt" style="font-size:12px">运输</text>' +
      '<rect x="260" y="30" width="100" height="44" rx="5" class="f-box"/>' +
      '<text x="310" y="56" class="f-txt" style="font-size:12px">转化</text>' +
      '<rect x="385" y="30" width="100" height="44" rx="5" class="f-box"/>' +
      '<text x="435" y="56" class="f-txt" style="font-size:12px">输送</text>' +
      '<rect x="510" y="30" width="110" height="44" rx="5" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="565" y="56" class="f-ok" style="font-size:12px">终端消费</text>' +
      '<line x1="110" y1="52" x2="131" y2="52" class="f-line" marker-end="url(#are1)"/>' +
      '<line x1="235" y1="52" x2="256" y2="52" class="f-line" marker-end="url(#are1)"/>' +
      '<line x1="360" y1="52" x2="381" y2="52" class="f-line" marker-end="url(#are1)"/>' +
      '<line x1="485" y1="52" x2="506" y2="52" class="f-line" marker-end="url(#are1)"/>' +
      '<text x="60"  y="96" class="f-dim" style="font-size:10px">煤矿/油田</text>' +
      '<text x="60"  y="110" class="f-dim" style="font-size:10px">风场/水坝</text>' +
      '<text x="185" y="96" class="f-dim" style="font-size:10px">铁路/管道</text>' +
      '<text x="185" y="110" class="f-dim" style="font-size:10px">油轮/LNG船</text>' +
      '<text x="310" y="96" class="f-dim" style="font-size:10px">电厂/炼厂</text>' +
      '<text x="310" y="110" class="f-dim" style="font-size:10px">一次→二次</text>' +
      '<text x="435" y="96" class="f-dim" style="font-size:10px">电网/气管</text>' +
      '<text x="435" y="110" class="f-dim" style="font-size:10px">加油站</text>' +
      '<text x="565" y="96" class="f-dim" style="font-size:10px">工厂/家庭</text>' +
      '<text x="565" y="110" class="f-dim" style="font-size:10px">交通/建筑</text>' +
      '</g></svg>' +
      '<figcaption>图 · 能源价值链五环节</figcaption></figure>' +
      '<p>电力在这条链中的特殊之处:</p>' +
      '<div class="ex">电是唯一<strong>运输和转化高度耦合</strong>的二次能源——' +
      '电网既是"公路"(输送)也是"工厂"(通过调度实时匹配供需)。' +
      '而且电不能大规模储存,必须即产即消,这让电力价值链比油气复杂得多。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"能源 = 电。"</b>' +
      '电只是二次能源的一种。中国终端能源消费里,电占约 28%(2025 年前后量级),其余是油品、天然气、煤直烧、热力等。</div>' +
      '<div class="pit"><b>误解:"煤是落后能源,应该马上淘汰。"</b>' +
      '煤在中国一次能源消费中仍占约 55%,是现阶段能源安全的压舱石。转型要转,但"安全转"比"快转"更重要。</div>',
    links:
      '<p>· 下一课讲"为什么说电是二次能源"——理解电在能源体系中的特殊地位。<br>' +
      '· 模块 16《气·水·氢》会把天然气、水务、氢能的产业链也走一遍。</p>'
  }
});
