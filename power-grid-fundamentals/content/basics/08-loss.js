PGF.registerLesson({
  id: 'basics-08-loss',
  module: 'basics',
  order: 8,
  title: '线损:电在路上也会"漏"',
  minutes: 4,
  keywords: ['线损', '损耗', '电阻', '升压', '线损率', '热损耗', 'I²R'],
  sections: {
    what:
      '<p>电在导线里传输时,因为导线有<gd data-term="dianzu">电阻</gd>,电流经过会发热,' +
      '一部分电能变成了热能散掉——这就是<gd data-term="xiansun">线损</gd>。</p>' +
      '<div class="ex">类比:用水管远距离送水,管壁有摩擦力,水一路流一路损失水压。' +
      '电也一样:路越远、电流越大,"路上漏掉"的越多。</div>' +
      '<p>中国电网的综合线损率大约 <strong>5%~6%</strong>——' +
      '也就是说发出来 100 度电,到用户手里只有 94~95 度,其余在路上热没了。</p>',
    why:
      '<p>线损看起来不大,但乘上全国的用电量就是天文数字:' +
      '全国一年用电约 9 万亿度(2025 年前后量级),5% 的线损就是 <strong>4500 亿度</strong>——' +
      '相当于好几个省的全年用电量白白烧掉了。</p>' +
      '<p>降低线损是电网公司永恒的命题:线损每降 0.1 个百分点,一年省下的电以百亿度计。' +
      '升压输电、缩短输送距离、更换低损耗变压器,全都是为了让电在路上少"漏"一点。</p>',
    how:
      '<p>线损的物理公式很简单:</p>' +
      '<div class="ex"><strong>损耗功率 = I&sup2; &times; R</strong><br>' +
      'I = 电流(安培),R = 导线电阻(欧姆)。<br>' +
      '损耗和电流的<strong>平方</strong>成正比——电流翻倍,损耗翻四倍!</div>' +
      '<figure class="fig">' +
      '<svg viewBox="0 0 580 150" width="100%" style="max-width:560px">' +
      '<g text-anchor="middle">' +
      '<rect x="20" y="30" width="160" height="40" rx="4" class="f-box2"/>' +
      '<text x="100" y="55" class="f-txt" style="font-size:12px">低压输送 220V</text>' +
      '<rect x="20" y="90" width="160" height="40" rx="4" class="f-box" style="stroke:var(--ok)"/>' +
      '<text x="100" y="115" class="f-ok" style="font-size:12px">高压输送 220kV</text>' +
      '<text x="310" y="42" class="f-hot" style="font-size:12px">电流大 → I&sup2;R 巨大 → 损耗爆表</text>' +
      '<text x="310" y="62" class="f-dim" style="font-size:11px">导线要极粗,还是损耗高,不经济</text>' +
      '<text x="310" y="105" class="f-ok" style="font-size:12px">电流小 1000 倍 → 损耗降 100 万倍</text>' +
      '<text x="310" y="125" class="f-dim" style="font-size:11px">导线可以细,损耗极低,经济可行</text>' +
      '</g></svg>' +
      '<figcaption>图 · 升压的本质:同样的功率,电压越高电流越小,损耗呈平方下降</figcaption></figure>' +
      '<p>线损的构成:</p>' +
      '<table><tr><th>来源</th><th>占比(大致)</th><th>说明</th></tr>' +
      '<tr><td>输电线路</td><td>约 40%</td><td>高压架空线、电缆</td></tr>' +
      '<tr><td>变压器</td><td>约 30%</td><td>铁损(磁滞)+铜损(绕组电阻)</td></tr>' +
      '<tr><td>配电网(低压段)</td><td>约 25%</td><td>电压低电流大,单位损耗高</td></tr>' +
      '<tr><td>其他(电表等)</td><td>约 5%</td><td>计量设备自身消耗</td></tr></table>' +
      '<div class="ex">有意思:虽然输电距离更长,但配电网的线损占比并不低——因为配电在低压段运行,' +
      '电流大,I&sup2;R 效应明显。</div>',
    pitfalls:
      '<div class="pit"><b>误解 1:"电在导线里传输不损失能量。"</b>' +
      '超导材料理论上零电阻,但目前电网全用常规导线,线损不可避免,只能尽量降低。</div>' +
      '<div class="pit"><b>误解 2:"升压是为了让电跑得更快。"</b>' +
      '电的传播速度接近光速,跟电压无关。升压是为了在传输同样功率时<strong>减小电流</strong>,从而减小 I&sup2;R 损耗。</div>' +
      '<div class="pit"><b>误解 3:"线损是电网公司偷了我的电。"</b>' +
      '线损是物理定律决定的,不是人为"偷"的。但线损确实分摊进了电价——你买的每度电里有约 5% 是"路费"。</div>',
    links:
      '<p>· 本课是模块 2 的最后一课,至此你已经掌握了电的物理通识。<br>' +
      '· 模块 3《发电》将从源头讲起:电是怎么"生产"出来的。<br>' +
      '· 模块 4《输电与变电》会深入讲电压等级阶梯和特高压如何把线损压到最低。</p>'
  }
});
