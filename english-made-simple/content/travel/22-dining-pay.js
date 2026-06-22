/* 旅行模块第 22 课:结账小费 + 快餐咖啡。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-22-dining-pay',
  module: 'travel',
  order: 22,
  title: '餐饮③:结账小费 + 快餐咖啡',
  minutes: 5,
  keywords: ['结账', 'check', '小费', 'tip', 'gratuity', 'AA', 'split', '快餐', 'fast food', '星巴克', 'Starbucks', 'combo'],

  sections: {
    what: '\
<p><strong>一句话:正餐结账叫 check(不是 bill),小费 15–20%,POS 机会跳出建议档直接选。快餐和咖啡店点单更短,但星巴克有自己的杯型套路。</strong></p>\
<p>场景地图:正餐你说 <en>Could we get the check?</en>,可要求分单 split;快餐柜台问 <en>What can I get for you?</en>,星巴克按"杯型+温度+要求+饮品"报单。</p>',

    when: '\
<p>正餐买单、和同伴 AA;以及麦当劳/Chipotle 快餐、星巴克/Dunkin 咖啡的日常点单。</p>',

    how: '\
<p><strong>正餐结账(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>麻烦结账。</td><td><en>Could we get the check, please?</en></td></tr>\
<tr><td>能分成两份付吗?</td><td><en>Could we split the check two ways?</en></td></tr>\
<tr><td>我这份加 20% 小费。</td><td><en>I\'ll add a twenty-percent tip on mine.</en></td></tr>\
<tr><td>小费包含了吗?</td><td><en>Is the tip included?</en></td></tr>\
<tr><td>我请客。</td><td><en>This is on me.</en></td></tr>\
</table>\
<p><strong>快餐 / 星巴克(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我要 2 号套餐,能升大份吗?</td><td><en>I\'ll have a number two combo, please. And can I upsize that?</en></td></tr>\
<tr><td>外带。</td><td><en>That\'s to go.</en></td></tr>\
<tr><td>能多给点番茄酱吗?</td><td><en>Could I get some extra ketchup?</en></td></tr>\
<tr><td>一杯中杯燕麦奶冰拿铁。</td><td><en>Can I get a Grande iced latte with oat milk, please?</en></td></tr>\
<tr><td>去冰。</td><td><en>No ice, please.</en></td></tr>\
</table>\
<div class="ex">💡 <strong>小费速算</strong>:账单 ÷10 = 10%,再 ×2 = 20%(如 $52 → $10.40)。6 人以上团体常自动加 18–20% 服务费(auto-gratuity),账单已注明就不必再给。<strong>星巴克杯型</strong>:Tall(小)< Grande(中)< Venti(大);to go=外带、for here=堂食。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:问 "Is the service charge included?"。</b>美国不叫 service charge(英式),叫 <en>tip</en> 或 <en>gratuity</en>。问 <en>Is the tip included?</en> 才地道。</div>\
<div class="pit"><b>坑 2:快餐自取也纠结小费。</b>正餐堂食必给 15–20%;快餐柜台自取一般不用(有提示罐可随意)。别把两者搞混。</div>\
<div class="pit"><b>坑 3:大团吃饭重复给小费。</b>6 人以上账单可能已含 auto-gratuity。结账前看一眼账单是否写了 gratuity included,避免又给一次。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在美国正餐问"小费包含了吗",哪句地道?',
      options: ['Is the service charge included?', 'Is the tip included?', 'Do I pay service?', 'Where is tip?'],
      answer: 1,
      explain: '美国叫 tip / gratuity,不叫 service charge(英式)。"Is the tip included?" 最地道。'
    },
    {
      type: 'choice',
      q: '星巴克杯型从小到大正确的是?',
      options: ['Venti < Grande < Tall', 'Tall < Grande < Venti', 'Grande < Tall < Venti', '都一样大'],
      answer: 1,
      explain: 'Tall(小)< Grande(中)< Venti(大);冷饮还有更大的 Trenta。'
    },
    {
      type: 'fill',
      q: '和同伴 AA 分账:"Could we ____ the check two ways?"',
      answer: ['split'],
      explain: 'split the check = 分账/AA 制;two ways = 分两份。'
    }
  ]
});
