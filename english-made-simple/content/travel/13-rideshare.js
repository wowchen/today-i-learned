/* 旅行模块第 13 课:出租车·Uber·Lyft。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-13-rideshare',
  module: 'travel',
  order: 13,
  title: '交通①:出租车·Uber·Lyft',
  minutes: 5,
  keywords: ['打车', 'taxi', 'Uber', 'Lyft', '网约车', '司机', 'driver', '后备箱', 'trunk', '小费'],

  sections: {
    what: '\
<p><strong>一句话:美国出租车少,大家主要用 Uber / Lyft——叫车付款全在手机上,但接车时仍要和司机核对身份、放行李、说路线。</strong></p>\
<p>场景地图:App 叫到车后,走到 pick-up 点,先核对司机名字和车牌,上车确认目的地,到了 App 自动扣款。</p>',

    when: '\
<p>机场到酒店、景点之间、夜间出行。下载 Uber/Lyft,绑好信用卡,落地即用。</p>',

    how: '\
<p><strong>接车与上车(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>你好,你是 David 吗?</td><td><en>Hi, are you David?</en></td></tr>\
<tr><td>我能把行李放后备箱吗?</td><td><en>Could I put my luggage in the trunk?</en></td></tr>\
<tr><td>去第五大道万豪酒店。</td><td><en>I\'m going to the Marriott on Fifth Avenue, please.</en></td></tr>\
<tr><td>能走高速吗?我赶时间。</td><td><en>Could you take the highway? I\'m in a rush.</en></td></tr>\
<tr><td>就在这停,谢谢。</td><td><en>You can drop me off here, please.</en></td></tr>\
<tr><td>预计多久到?</td><td><en>How long will it take?</en></td></tr>\
</table>\
<p><strong>司机常问,这样接(点读):</strong></p>\
<table>\
<tr><th>司机说</th><th>你的回应</th></tr>\
<tr><td><en>Where to?</en></td><td><en>The Marriott on Fifth Avenue, please.</en></td></tr>\
<tr><td><en>Do you have any luggage?</en></td><td><en>Yes, one suitcase in the trunk.</en></td></tr>\
<tr><td><en>That\'ll be 28 dollars.</en></td><td><en>Great, I\'ll add a tip in the app.</en></td></tr>\
</table>\
<div class="ex">💡 <strong>付款与小费</strong>:车费 App 自动扣,不用现金;小费一般 15–20%,App 里选 $1/$2/$3 或百分比。<strong>评分是双向的</strong>——准时到接车点、不带食物上车、友好交流,有助保持高评分,低分乘客可能被拒载。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:不核对就上车。</b>上车前一定先问 <en>Are you David?</en> 并对车牌。美国偶有假冒网约车,核对身份是安全第一步。</div>\
<div class="pit"><b>坑 2:"我要下车"说成 I want to get off。</b>打车场景更地道是 <en>You can drop me off here.</en> 或 <en>I\'ll get out here, please.</en></div>\
<div class="pit"><b>坑 3:以为要给现金小费。</b>Uber/Lyft 小费在 App 里加最方便 <en>I\'ll add a tip in the app.</en>,不必翻现金。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '叫到 Uber 走到接车点,上车前第一件事应该?',
      options: ['直接钻进车里', '核对司机姓名和车牌', '先付现金', '问要不要小费'],
      answer: 1,
      explain: '先核对司机名字(Are you David?)和车牌,确认是你叫的车,安全第一。'
    },
    {
      type: 'choice',
      q: 'Uber/Lyft 的小费一般怎么给最方便?',
      options: ['必须给现金', '在 App 里加,约 15–20%', '不能给', '给司机发红包'],
      answer: 1,
      explain: '小费在 App 内选择最方便,通常 15–20%;现金也可以但非必须。'
    },
    {
      type: 'fill',
      q: '"就在这让我下车":"You can ____ me off here, please."',
      answer: ['drop'],
      explain: 'drop me off = 让我在此下车,是打车场景最地道的说法。'
    }
  ]
});
