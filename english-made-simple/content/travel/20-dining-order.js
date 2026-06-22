/* 旅行模块第 20 课:餐厅预订 + 入座点餐。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-20-dining-order',
  module: 'travel',
  order: 20,
  title: '餐饮①:预订 + 入座点餐',
  minutes: 5,
  keywords: ['餐厅', 'restaurant', '预订', 'reservation', '点餐', 'order', '菜单', 'menu', '服务员', 'server', '牛排'],

  sections: {
    what: '\
<p><strong>一句话:美国正餐有固定流程——预订 → 领位 → 服务员自我介绍 → 点饮料 → 点菜。点菜的标准句是 <en>I\'ll have the…, please.</en>,不是 "I want"。</strong></p>\
<p>场景地图:领位问 <en>How many in your party?</en>(几位),服务员报名字 <en>I\'m Jake, I\'ll be taking care of you.</en>,先点饮料再点菜,席间会来问 <en>How is everything?</en>(只需答 Great!)。</p>',

    when: '\
<p>去餐厅吃正餐:电话或 OpenTable/Resy 预订、到店入座、看菜单点餐。热门餐厅周末需提前 1–2 周订。</p>',

    how: '\
<p><strong>预订(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我想订周六晚上四人的位子。</td><td><en>I\'d like to make a reservation for four people on Saturday evening.</en></td></tr>\
<tr><td>大约 7 点,如果可以的话。</td><td><en>Around seven o\'clock, if possible.</en></td></tr>\
<tr><td>名字是张,Z-H-A-N-G。</td><td><en>The name is Zhang, Z-H-A-N-G.</en></td></tr>\
<tr><td>我们有人过生日,能备注吗?</td><td><en>Could you note we have a birthday in our group?</en></td></tr>\
</table>\
<p><strong>入座点餐(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>(几位)两位,谢谢。</td><td><en>Two, please.</en></td></tr>\
<tr><td>给我一瓶气泡水和一罐健怡可乐。</td><td><en>Could I get a sparkling water and a Diet Coke, please?</en></td></tr>\
<tr><td>我们可以点了,我要烤三文鱼。</td><td><en>I think we\'re ready. I\'ll have the grilled salmon, please.</en></td></tr>\
<tr><td>你们推荐什么?</td><td><en>What do you recommend?</en></td></tr>\
<tr><td>酱汁能单独放一边吗?</td><td><en>Could the dressing be on the side?</en></td></tr>\
<tr><td>我们还需要几分钟。</td><td><en>Could we have a few more minutes?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>菜单词</strong>:appetizer=前菜 · entree=主菜(美式) · side=配菜 · today\'s special=今日特供 · medium rare/medium/well done=三分/五分/全熟。服务员报名字后,需要叫人可说 <en>Excuse me, Jake?</en>。salmon 的 l 不发音,读 /ˈsæmən/。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:点菜说 "I want this one"。</b>偏直接。标准美式是 <en>I\'ll have this, please.</en> 或 <en>I\'d like the grilled salmon, please.</en>,指菜单说 this 也行。</div>\
<div class="pit"><b>坑 2:把 "How is everything?" 当真要逐道点评。</b>这是客套。标准回答 <en>Great, thank you!</en> 或 <en>It\'s delicious.</en>;真有问题这时说正好。</div>\
<div class="pit"><b>坑 3:外国姓名被写错。</b>预订/星巴克报名时<strong>拼出字母</strong> <en>Zhang, Z-H-A-N-G.</en>,或用个常见英文名,避免叫号找不到。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国餐厅点菜最地道的开头是?',
      options: ['I want this.', 'Give me that.', 'I\'ll have the grilled salmon, please.', 'This food!'],
      answer: 2,
      explain: '"I\'ll have the…, please." 是美式点餐标准句;I want 偏命令。'
    },
    {
      type: 'choice',
      q: '服务员席间问 "How is everything?" 通常该?',
      options: ['逐道菜详细点评', '简单答 "Great, thank you!"', '不理他', '要求退菜'],
      answer: 1,
      explain: '这是客套话,标准回答 "Great, thank you!";真有问题这时提出最合适。'
    },
    {
      type: 'fill',
      q: '让酱汁另放:"Could the dressing be on the ____?"',
      answer: ['side'],
      explain: 'on the side = 酱汁/配料单独放一边,是常见的个性化点餐要求。'
    }
  ]
});
