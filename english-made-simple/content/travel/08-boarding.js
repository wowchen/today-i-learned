/* 旅行模块第 8 课:登机口·候机·转机。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-08-boarding',
  module: 'travel',
  order: 8,
  title: '机场③:登机口·候机·转机',
  minutes: 5,
  keywords: ['登机口', 'gate', '候机', 'boarding', '转机', 'connection', 'layover', '延误', 'delayed'],

  sections: {
    what: '\
<p><strong>一句话:拿到登机牌后,你要找对登机口、听懂分组登机广播;如果是转机,还要会问"往哪走、要不要再过安检、行李会不会自动转"。</strong></p>\
<p>场景地图:候机时留意广播 <en>Now boarding Group 4…</en>(按组号登机);转机则跟着 <strong>Connecting Flights</strong> 指示牌走,必要时问工作人员。</p>',

    when: '\
<p>过完安检到登机口候机、航班延误改口、以及在中转机场赶下一程时。</p>',

    how: '\
<p><strong>登机口候机(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>请问这是 UA858 的登机口吗?</td><td><en>Excuse me, is this the gate for flight UA 858?</en></td></tr>\
<tr><td>登机口换了吗?</td><td><en>Has the gate changed?</en></td></tr>\
<tr><td>航班延误了吗?</td><td><en>Is the flight delayed?</en></td></tr>\
<tr><td>我什么时候登机?</td><td><en>When do I board?</en></td></tr>\
<tr><td>(广播叫到组号)是我,第 4 组。</td><td><en>That\'s me. I\'m in Group 4.</en></td></tr>\
</table>\
<p><strong>转机(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我转机到 UA1234 飞旧金山,往哪走?</td><td><en>I\'m connecting to flight UA 1234 to San Francisco. Where do I go?</en></td></tr>\
<tr><td>需要再过一次安检吗?</td><td><en>Do I need to go through security again?</en></td></tr>\
<tr><td>我的行李会自动转吗?</td><td><en>Will my bags be transferred automatically?</en></td></tr>\
<tr><td>我的中转停留多久?</td><td><en>How long is my layover?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>美国分组登机</strong>:Group 1 多为头等/高级会员,带儿童或需协助者可提前 <en>pre-board</en>,其余按舱位/票价分 Group 3–5。<strong>听到自己的组号再起身</strong>,早排会被请回。<br>🔁 <strong>第一次入境美国必须在第一落地站</strong>取行李、过海关、重新托运——即使行李最终目的地不在这。转机留足 ≥2 小时。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:听到开始登机就冲上去排队。</b>美国按组号登机,不到你的 Group 排队会被请回。听清 <en>Now boarding Group ___.</en> 再起身。</div>\
<div class="pit"><b>坑 2:以为行李一定一票到底自动转。</b>只有"出发地一票托运到终点"才自动转。不确定就问 <en>Will my bags be transferred automatically?</en>;第一次入境美国必须自己取出过海关再托运。</div>\
<div class="pit"><b>坑 3:转机时间留太短。</b>国际转国内常要换航站楼 + 重新安检。留 ≥2 小时,认准 <strong>Connecting Flights</strong> 指示牌。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国机场广播 "Now boarding Group 4",你是第 5 组,应该?',
      options: ['马上去排队', '等叫到 Group 5 再起身', '插队上去', '不用登机了'],
      answer: 1,
      explain: '按组号登机,等叫到自己的 Group 再起身;提前排队会被请回。'
    },
    {
      type: 'choice',
      q: '第一次入境美国转机,关于行李的正确做法是?',
      options: ['一定自动转,不用管', '在第一落地站取行李过海关再重新托运', '直接去登机口', '托运给海关保管'],
      answer: 1,
      explain: '第一入境站必须取行李、过海关、重新托运,即使最终目的地不在这一站。'
    },
    {
      type: 'fill',
      q: '问"中转停留多久":"How long is my ____?"',
      answer: ['layover'],
      explain: 'layover = 中转停留时间;connection 指转机这件事本身。'
    }
  ]
});
