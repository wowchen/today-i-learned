PGF.registerLesson({
  id: 'gen-10-mix',
  module: 'gen',
  order: 10,
  title: '中国电源结构:装机与发电量为什么不一样',
  minutes: 4,
  keywords: ['电源结构', '装机', '发电量', '占比', '风光', '煤电'],
  sections: {
    what:
      '<p>"装机容量"是<strong>产能</strong>,"发电量"是<strong>产出</strong>——' +
      '就像工厂有 100 台机器不等于每台都在转。看电源结构必须看这两张图,只看一张会被误导。</p>',
    why:
      '<p>2025 年前后,中国发电<strong>装机</strong>约 33 亿千瓦(3300GW),<strong>发电量</strong>约 9.5 万亿度。' +
      '两张饼图长得完全不同:</p>' +
      '<table><tr><th>电源</th><th>装机占比</th><th>发电量占比</th><th>差异原因</th></tr>' +
      '<tr><td>煤电</td><td>约 36%</td><td>约 58%</td><td>利用小时高(4500)</td></tr>' +
      '<tr><td>水电</td><td>约 13%</td><td>约 14%</td><td>基本匹配</td></tr>' +
      '<tr><td>风电</td><td>约 15%</td><td>约 10%</td><td>利用小时低(2200)</td></tr>' +
      '<tr><td>光伏</td><td>约 25%</td><td>约 7%</td><td>利用小时最低(1300)</td></tr>' +
      '<tr><td>核电</td><td>约 2%</td><td>约 5%</td><td>利用小时最高(7500)</td></tr>' +
      '<tr><td>气电+抽蓄+其他</td><td>约 9%</td><td>约 6%</td><td>调峰为主,不满发</td></tr></table>',
    how:
      '<figure class="fig">' +
      '<svg viewBox="0 0 600 140" width="100%" style="max-width:580px">' +
      '<g text-anchor="middle">' +
      '<rect x="10" y="10" width="580" height="30" rx="4" class="f-box"/>' +
      '<rect x="10" y="10" width="209" height="30" rx="4" class="f-box2" style="fill:var(--fg);opacity:0.15"/>' +
      '<text x="115" y="30" class="f-txt" style="font-size:11px">煤 36%</text>' +
      '<rect x="219" y="10" width="75" height="30" rx="0" class="f-box2" style="fill:var(--ok);opacity:0.15"/>' +
      '<text x="257" y="30" class="f-ok" style="font-size:10px">水 13%</text>' +
      '<rect x="294" y="10" width="87" height="30" rx="0" class="f-box2" style="fill:var(--hot);opacity:0.15"/>' +
      '<text x="338" y="30" class="f-hot" style="font-size:10px">风 15%</text>' +
      '<rect x="381" y="10" width="145" height="30" rx="0" class="f-box2" style="fill:var(--accent);opacity:0.15"/>' +
      '<text x="454" y="30" class="f-txt" style="font-size:10px">光 25%</text>' +
      '<text x="555" y="30" class="f-dim" style="font-size:10px">核+其他</text>' +
      '<text x="300" y="60" class="f-dim" style="font-size:11px">装机容量(产能)</text>' +
      '<rect x="10" y="75" width="580" height="30" rx="4" class="f-box"/>' +
      '<rect x="10" y="75" width="336" height="30" rx="4" class="f-box2" style="fill:var(--fg);opacity:0.15"/>' +
      '<text x="178" y="95" class="f-txt" style="font-size:11px">煤 58%</text>' +
      '<rect x="346" y="75" width="81" height="30" rx="0" class="f-box2" style="fill:var(--ok);opacity:0.15"/>' +
      '<text x="387" y="95" class="f-ok" style="font-size:10px">水 14%</text>' +
      '<rect x="427" y="75" width="58" height="30" rx="0" class="f-box2" style="fill:var(--hot);opacity:0.15"/>' +
      '<text x="456" y="95" class="f-hot" style="font-size:10px">风 10%</text>' +
      '<rect x="485" y="75" width="41" height="30" rx="0" class="f-box2" style="fill:var(--accent);opacity:0.15"/>' +
      '<text x="506" y="95" class="f-txt" style="font-size:9px">光7%</text>' +
      '<text x="555" y="95" class="f-dim" style="font-size:10px">核+其他</text>' +
      '<text x="300" y="125" class="f-dim" style="font-size:11px">发电量(产出)</text>' +
      '</g></svg>' +
      '<figcaption>图 · 装机占比 vs 发电量占比——煤电"产出远超产能比",风光相反</figcaption></figure>' +
      '<div class="ex">核心结论:看新闻说"风光装机超过煤电"时,不要以为风光发的电也超过了煤电。' +
      '装机是面子,发电量才是里子。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"装机占比 = 发电占比。"</b>' +
      '这是最常见的误读。光伏装机已占 25%,但发电量只有 7%——四分之一的"产能"只贡献了十四分之一的"产出"。</div>' +
      '<div class="pit"><b>误解:"煤电装机占比才 36% 说明快退出了。"</b>' +
      '36% 的装机贡献了 58% 的发电量,说明煤电仍在满负荷或高负荷运行。' +
      '真正衡量退出进程的应该看发电量占比的下降速度。</div>',
    links:
      '<p>· 发电模块到此结束。下一站:模块 4《输电与变电》,讲电发出来之后怎么送走。<br>' +
      '· 模块 10《新能源》会讲风光占比继续上升给电网带来的系统性挑战。</p>'
  }
});
