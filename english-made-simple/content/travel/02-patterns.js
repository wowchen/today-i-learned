/* 旅行模块第 2 课:8 大黄金句型。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-02-patterns',
  module: 'travel',
  order: 2,
  title: '8 大黄金句型:覆盖 80% 旅行需求',
  minutes: 5,
  keywords: ['句型', 'pattern', '黄金句型', '万能', '旅行', 'travel', 'could I have'],

  sections: {
    what: '\
<p><strong>一句话:把这 8 个句型当"模具",需要什么词就往空里一灌,立刻造出能用的句子——旅行里 80% 的话都是这么说出来的。</strong></p>\
<p>你不需要背几百句对话,只要这 8 个框架熟到本能。点餐、问路、购物、求助……换的只是填进去的那个词。</p>',

    when: '\
<p>任何场景开口前,先想"我这是要<strong>要东西、问位置、问路、问有没有、问价、点单、求助,还是征求许可</strong>?"——对号入座,套句型。</p>',

    how: '\
<p><strong>八个模具(点例句听整句):</strong></p>\
<table>\
<tr><th>句型</th><th>意思</th><th>例句(点读)</th></tr>\
<tr><td>Could I have ___ ?</td><td>我能要…吗(最礼貌的索取)</td><td><en>Could I have a window seat?</en> · <en>Could I have the check, please?</en></td></tr>\
<tr><td>Where is ___ ?</td><td>…在哪里</td><td><en>Where is the restroom?</en> · <en>Where is baggage claim?</en></td></tr>\
<tr><td>How do I get to ___ ?</td><td>我怎么去…(问路万能)</td><td><en>How do I get to Times Square?</en> · <en>How do I get to downtown?</en></td></tr>\
<tr><td>Do you have ___ ?</td><td>你们有…吗(购物/酒店)</td><td><en>Do you have a smaller size?</en> · <en>Do you have any vegetarian options?</en></td></tr>\
<tr><td>How much is ___ ?</td><td>…多少钱</td><td><en>How much is this?</en> · <en>How much is the fare?</en></td></tr>\
<tr><td>I\'d like ___ , please.</td><td>我想要…(点餐/办事)</td><td><en>I\'d like a cappuccino, please.</en> · <en>I\'d like to check in.</en></td></tr>\
<tr><td>Can you help me ___ ?</td><td>能帮我…吗</td><td><en>Can you help me find this address?</en> · <en>Can you help me with my luggage?</en></td></tr>\
<tr><td>Can I ___ ?</td><td>我可以…吗(征求许可)</td><td><en>Can I pay by card?</en> · <en>Can I try this on?</en></td></tr>\
</table>\
<div class="ex">💡 记忆口诀:<strong>要(have)· 在哪(where)· 怎么去(get to)· 有没有(do you have)· 多少钱(how much)· 想要(I\'d like)· 帮我(help me)· 可以吗(can I)</strong>。把这八个动作记住,填词就行。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:用 "I want…" 索取。</b><en>I want a coffee.</en> 在美国人耳里偏冲、像命令。换成 <en>Could I have…</en> 或 <en>I\'d like…</en>,礼貌度立刻拉满。</div>\
<div class="pit"><b>坑 2:问路用 "Where is the airport?" 想问怎么走。</b>Where is 问的是"位置/方向",问<strong>怎么到达</strong>要用 <en>How do I get to…?</en>,对方才会告诉你坐什么车、怎么走。</div>\
<div class="pit"><b>坑 3:句型记住了,却忘了 please 和升降调。</b>请求句结尾加 please、句末用降调,听起来才礼貌完整。机械蹦句型容易显得生硬。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '想礼貌地要一个靠窗座位,最合适的是?',
      options: ['I want a window seat.', 'Give me a window seat.', 'Could I have a window seat?', 'Window seat!'],
      answer: 2,
      explain: '"Could I have…?" 是最礼貌的索取模具;"I want / Give me" 偏命令。'
    },
    {
      type: 'choice',
      q: '想问"我怎么去时代广场",该用哪个句型?',
      options: ['Where is Times Square?', 'How do I get to Times Square?', 'Do you have Times Square?', 'How much is Times Square?'],
      answer: 1,
      explain: 'How do I get to…? 才是问"怎么到达/坐什么车";Where is 只问位置方向。'
    },
    {
      type: 'fill',
      q: '点单时"我想要一杯卡布奇诺"填:"I\'d ____ a cappuccino, please."',
      answer: ['like'],
      explain: 'I\'d like…(I would like)是点餐办事的礼貌万能开头。'
    }
  ]
});
