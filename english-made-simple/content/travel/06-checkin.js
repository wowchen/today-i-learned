/* 旅行模块第 6 课:机场值机柜台。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-06-checkin',
  module: 'travel',
  order: 6,
  title: '机场①:值机柜台 check-in',
  minutes: 5,
  keywords: ['机场', 'airport', '值机', 'check-in', '托运', '座位', 'seat', '行李', 'boarding pass'],

  sections: {
    what: '\
<p><strong>一句话:值机就是去航空公司柜台"报到"——出示护照、选座位、托运行李、拿登机牌。出国第一道关,把这几句练熟就一路顺。</strong></p>\
<p>场景地图:你走到柜台,地勤先说 <en>May I see your passport?</en>,接着问你 <en>Aisle or window?</en>(走道还是靠窗)和 <en>Any bags to check?</en>(要托运吗)。听懂这三问,基本就过关了。</p>',

    when: '\
<p>到达机场出发层、找到对应航空公司柜台办登机手续时。提前在 App 上选座/付行李费能更快。</p>',

    how: '\
<p><strong>你要说的(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我想办 CA981 飞洛杉矶的值机。</td><td><en>Hi, I\'d like to check in for flight CA 981 to Los Angeles.</en></td></tr>\
<tr><td>能给我靠窗/走道座位吗?</td><td><en>Could I get a window seat?</en> · <en>Could I get an aisle seat?</en></td></tr>\
<tr><td>能坐靠前一点吗?</td><td><en>Could I sit near the front?</en></td></tr>\
<tr><td>我有 1 件行李要托运。</td><td><en>I have one bag to check.</en></td></tr>\
<tr><td>这个手提的我自己带。</td><td><en>This carry-on stays with me.</en></td></tr>\
<tr><td>几点登机?登机口在哪?</td><td><en>What time is boarding, and which gate?</en></td></tr>\
</table>\
<p><strong>对方常问,这样接(点读):</strong></p>\
<table>\
<tr><th>地勤说</th><th>你的回应</th></tr>\
<tr><td><en>May I see your passport?</en></td><td><en>Here you are.</en></td></tr>\
<tr><td><en>Aisle or window?</en></td><td><en>Window, please.</en></td></tr>\
<tr><td><en>Any bags to check?</en></td><td><en>Just one. This carry-on stays with me.</en></td></tr>\
<tr><td><en>Your bag is overweight.</en></td><td><en>Could I move some items to my carry-on?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>行李规则</strong>:国际经济舱通常含 1 件免费托运(≤23 kg/50 lb)+ 1 件手提。但<strong>美国国内航班大多收行李费</strong>($30–40/件),值机前先在 App 上付能省钱。<en>aisle</en> 的 s 不发音,读 /aɪl/。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"我想托运行李"说成 I want to check my baggage。</b>check 在这里是"托运",但更地道是 <en>I\'d like to check in my bag.</en> 或 <en>I have one bag to check.</en> "check"想表达"检查"才用 inspect。</div>\
<div class="pit"><b>坑 2:carry-on 和 checked bag 混了。</b><en>carry-on</en> = 随身带上飞机的;<strong>checked bag</strong> = 托运的。说错地勤会把你想随身的箱子收走托运。</div>\
<div class="pit"><b>坑 3:以为美国国内航班也免费托运。</b>美国国内航班普遍收行李费,且不提前付更贵。出发前查清楚、App 上先付。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '地勤问 "Aisle or window?",你想要靠窗,怎么答?',
      options: ['Yes, please.', 'Window, please.', 'I want window.', 'No bags.'],
      answer: 1,
      explain: 'Aisle=走道,window=靠窗。直接 "Window, please." 即可,简洁又礼貌。'
    },
    {
      type: 'choice',
      q: '关于美国国内航班行李,下列哪项正确?',
      options: ['一定免费托运 2 件', '大多收行李费,提前在 App 付更省', '不能带手提', '托运没有重量限制'],
      answer: 1,
      explain: '美国国内航班大多收行李费($30–40/件),值机前在 App 上付通常更便宜。'
    },
    {
      type: 'fill',
      q: '"这个随身行李我自己带":"This ____-on stays with me."',
      answer: ['carry'],
      explain: 'carry-on = 随身行李;checked bag = 托运行李,两者别说反。'
    }
  ]
});
