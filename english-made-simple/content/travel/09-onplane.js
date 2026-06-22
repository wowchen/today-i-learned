/* 旅行模块第 9 课:在飞机上。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-09-onplane',
  module: 'travel',
  order: 9,
  title: '机场④:在飞机上',
  minutes: 5,
  keywords: ['飞机', 'plane', '空乘', 'flight attendant', '座位', 'seat', '餐食', 'meal', '毯子', 'blanket'],

  sections: {
    what: '\
<p><strong>一句话:上了飞机,你要会找座位、(礼貌地)请人让出你的位子、向空乘要东西、点餐、问能不能去洗手间。</strong></p>\
<p>场景地图:空乘送餐会问 <en>Chicken or pasta?</en>,送饮料问 <en>Anything to drink?</en>。你需要的多半是毯子、热水、耳机,或者把椅背灯一类小事说清楚。</p>',

    when: '\
<p>登机找座位、飞行途中需要服务、用餐与如厕时。</p>',

    how: '\
<p><strong>找座位 / 让座(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>麻烦您,12A 怎么走?</td><td><en>Excuse me, could you help me find seat 12A?</en></td></tr>\
<tr><td>不好意思,您好像坐了我的座位,我是 12A。</td><td><en>Sorry, I think you\'re in my seat. I\'m 12A.</en></td></tr>\
<tr><td>能换个座位吗?</td><td><en>Could I switch seats?</en></td></tr>\
</table>\
<p><strong>向空乘要东西 / 点餐(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>能再给我一床毯子吗?</td><td><en>Could I have another blanket, please?</en></td></tr>\
<tr><td>要热水,有柠檬加一片。</td><td><en>Hot water, please. With lemon if you have it.</en></td></tr>\
<tr><td>(鸡肉还是意面)意面,谢谢。</td><td><en>Pasta, please.</en></td></tr>\
<tr><td>我有预订特殊餐食。</td><td><en>I have a special meal booked.</en></td></tr>\
<tr><td>能给我一副耳机吗?</td><td><en>Could I get headphones?</en></td></tr>\
<tr><td>有点冷,能调下空调吗?</td><td><en>It\'s a bit cold. Could you adjust the air?</en></td></tr>\
<tr><td>我不太舒服 / 有点头晕。</td><td><en>I\'m not feeling well.</en> · <en>I feel dizzy.</en></td></tr>\
<tr><td>安全带灯灭了,现在能去洗手间吗?</td><td><en>The seatbelt sign is off — could I use the restroom now?</en></td></tr>\
</table>\
<div class="ex">💡 想吃素而当时没预订:<en>Could I have just the pasta, no meat, please?</en> 提前订好特殊餐(vegetarian / halal / diabetic)最稳。<en>water</en> 美音读 /ˈwɑːɾər/,中间 t 像"了"。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:别人坐了你的位子,语气太冲或干脆忍了。</b>平静说 <en>Sorry, I think you\'re in my seat. I\'m 12A.</en> 出示登机牌即可,不必激动也不用忍。</div>\
<div class="pit"><b>坑 2:安全带灯亮着就起身去洗手间。</b><en>seatbelt sign</en> 亮着必须坐好。等它灭了(off)再问 <en>Could I use the restroom now?</en></div>\
<div class="pit"><b>坑 3:要水说 "Give me water"。</b>飞机上更要礼貌。用 <en>Could I have some water, please?</en>,空乘服务一整程,礼貌很值。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '发现有人坐了你的座位,最得体的说法是?',
      options: ['Get out of my seat!', 'Sorry, I think you\'re in my seat. I\'m 12A.', 'This is mine!', 'You are wrong.'],
      answer: 1,
      explain: '平静说明 + 报出自己座位号 + 出示登机牌,既清楚又不冲突。'
    },
    {
      type: 'choice',
      q: '什么时候可以去飞机洗手间?',
      options: ['任何时候', '安全带灯(seatbelt sign)灭了之后', '起飞时', '只有空乘允许的头等舱'],
      answer: 1,
      explain: 'seatbelt sign 亮着要坐好;灭了(off)再去,可先问 "Could I use the restroom now?"'
    },
    {
      type: 'fill',
      q: '再要一床毯子:"Could I have another ____, please?"',
      answer: ['blanket'],
      explain: 'blanket = 毯子。飞机上常用 "Could I have another blanket?" 加被子。'
    }
  ]
});
