/* 旅行模块第 10 课:行李丢失/延误报失。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-10-baggage',
  module: 'travel',
  order: 10,
  title: '机场⑤:行李丢失/延误报失',
  minutes: 5,
  keywords: ['行李', 'luggage', '丢失', 'lost', '报失', 'baggage', 'PIR', '理赔', 'claim', '延误'],

  sections: {
    what: '\
<p><strong>一句话:转盘等不到行李,别慌也别先离开机场——去航空公司的 Baggage Service 柜台报失,说清行李长什么样、你住哪、怎么联系你,拿到查询单号。</strong></p>\
<p>场景地图:柜台先看你的<strong>行李条(baggage tag)</strong>和护照,然后问 <en>What does the bag look like?</en> 和 <en>Where are you staying?</en>,最后给你一个 claim reference / PIR 单号。</p>',

    when: '\
<p>到达后在行李转盘(baggage claim)等不到箱子,或箱子破损/少东西时。<strong>务必在离开机场前办</strong>,否则索赔很难。</p>',

    how: '\
<p><strong>报失说清三件事:行李样子 + 住址 + 联系方式(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我的行李没出来,可能丢了。</td><td><en>My luggage didn\'t come out. I think it\'s lost.</en></td></tr>\
<tr><td>航班是从北京来的 CA981。</td><td><en>The flight was CA 981 from Beijing.</en></td></tr>\
<tr><td>黑色硬壳箱,中号,把手系了红丝带。</td><td><en>It\'s a black hard-shell suitcase, medium size, with a red ribbon on the handle.</en></td></tr>\
<tr><td>我住洛杉矶市中心希尔顿,这是地址。</td><td><en>The Hilton in downtown LA. Here\'s the address.</en></td></tr>\
<tr><td>是中国号——能也发邮件给我吗?</td><td><en>It\'s a Chinese number — could you also email me?</en></td></tr>\
<tr><td>能直接送到酒店吗?</td><td><en>Could you deliver it to my hotel?</en></td></tr>\
<tr><td>能给我一个报失查询单号吗?</td><td><en>Could I get a claim reference?</en></td></tr>\
</table>\
<p><strong>描述行李的形容词顺序:颜色 → 材质 → 大小 → 标识</strong>(英语固定语序)。例:<en>a black hard-shell medium suitcase with a red ribbon</en>。</p>\
<div class="ex">💡 <strong>报失流程</strong>:① 立刻去 <strong>Baggage Service / Lost &amp; Found</strong> 柜台,别先出机场;② 拿到 <strong>PIR 报失单号</strong>和查询网址;③ 美国规则下延误赔偿约 $50/天、丢失最高约 $3800,留好发票更利索赔。<en>PIR</en> 按字母读 /piː aɪ ɑːr/。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:行李没出来就直接离开机场。</b>离开后再回来索赔极难。<strong>当场</strong>去 Baggage Service 柜台办报失,拿 PIR 单号。</div>\
<div class="pit"><b>坑 2:只留中国手机号。</b>航空公司联系不上你,行李就停在仓库。主动加一句 <en>Could you also email me?</en> 留邮箱,或留酒店电话。</div>\
<div class="pit"><b>坑 3:描述行李颠三倒四。</b>按"颜色→材质→大小→特征"说:<en>black hard-shell, medium, red ribbon on the handle</en>,工作人员一听就能定位。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '到达后行李没出现,第一步应该?',
      options: ['先去酒店明天再说', '当场去 Baggage Service 柜台报失拿 PIR 单号', '直接回国', '在转盘一直等'],
      answer: 1,
      explain: '务必在离开机场前去航空公司柜台办报失、拿 PIR 单号,离开后索赔很难。'
    },
    {
      type: 'choice',
      q: '描述行李 "黑色硬壳中号箱" 的英语语序,哪个对?',
      options: ['medium black hard-shell suitcase', 'hard-shell medium black suitcase', 'a black hard-shell medium suitcase', 'suitcase black medium hard'],
      answer: 2,
      explain: '英语形容词顺序:颜色→材质→大小。a black hard-shell medium suitcase 最自然。'
    },
    {
      type: 'fill',
      q: '只留中国号怕联系不上,补一句:"Could you also ____ me?"(留邮箱)',
      answer: ['email', 'e-mail'],
      explain: '主动请对方也发邮件 "Could you also email me?",避免中国手机号联系不上。'
    }
  ]
});
