/* 旅行模块第 23 课:购物。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-23-shopping',
  module: 'travel',
  order: 23,
  title: '购物:询问·试穿·退换·退税',
  minutes: 5,
  keywords: ['购物', 'shopping', '试穿', 'try on', '尺码', 'size', '退货', 'return', '退税', 'duty-free', '打折'],

  sections: {
    what: '\
<p><strong>一句话:美国购物三特点——店员主动打招呼(礼貌回应即可)、退换货很宽松、标价不含税。会"问商品、试穿、退换、机场免税"这四句就够用。</strong></p>\
<p>场景地图:进店店员说 <en>Hi, can I help you?</en>(职业礼仪,非推销);随便看就 <en>I\'m just browsing, thank you.</en>;要买就试穿、确认尺码,不满意 30–90 天内多能退。</p>',

    when: '\
<p>逛商场、买衣服鞋子、退换货、机场免税店购物时。</p>',

    how: '\
<p><strong>询问与试穿(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我只是随便看看,谢谢。</td><td><en>I\'m just browsing, thank you.</en></td></tr>\
<tr><td>这件有中号吗?</td><td><en>Do you have this in a medium?</en></td></tr>\
<tr><td>这个打折吗?</td><td><en>Is this on sale?</en></td></tr>\
<tr><td>我能试穿这些吗?</td><td><en>Could I try these on?</en></td></tr>\
<tr><td>这件有点紧,能拿件大号吗?</td><td><en>This is a bit tight. Could I get a large?</en></td></tr>\
<tr><td>这件正好,我要了。</td><td><en>This fits perfectly. I\'ll take it.</en></td></tr>\
</table>\
<p><strong>退换与免税(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我想退这件。</td><td><en>I\'d like to return this, please.</en></td></tr>\
<tr><td>我想换一个尺码。</td><td><en>I\'d like to exchange this for a different size.</en></td></tr>\
<tr><td>有收据,我刷信用卡付的。</td><td><en>Here\'s my receipt. I paid by credit card.</en></td></tr>\
<tr><td>没收据,能换成店内积分吗?</td><td><en>I don\'t have a receipt — could I get store credit?</en></td></tr>\
<tr><td>这个是免税的吗?</td><td><en>Is this duty-free?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>关键认知</strong>:美国<strong>没有针对游客的退税</strong>(不像欧洲日本);但 Oregon 等几个州<strong>0 销售税</strong>。退货政策宽松(Target/Walmart 90 天、Nordstrom 几乎不限),口诀:<strong>留收据 + 原包装 + 付款的那张卡</strong>。"试穿"固定搭配是 <en>try on</en>,单说 try 对方不懂。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"我可以试穿吗"说成 Can I try?。</b>缺 on,对方不懂试什么。用 <en>Could I try this on?</en> 或问 <en>Where are the fitting rooms?</en></div>\
<div class="pit"><b>坑 2:把店员的 "Can I help you?" 当推销压力。</b>那是礼仪。随便看就 <en>I\'m just browsing, thank you.</en>,对方会点头离开,不会纠缠。</div>\
<div class="pit"><b>坑 3:退货扔了收据。</b>留好收据(或邮件电子发票)+ 原包装 + 付款卡,退换最顺。没收据多数店还能退,但只能换等值店内积分(store credit),拿不回现金。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '关于美国购物,下列哪项正确?',
      options: ['对游客有统一退税(像欧洲)', '标价已含税', '没有游客退税,但有的州 0 销售税', '不能退货'],
      answer: 2,
      explain: '美国无游客退税;标价不含税,结账才加;但 Oregon 等州 0 销售税。退货则普遍宽松。'
    },
    {
      type: 'choice',
      q: '退货最该带齐的三样是?',
      options: ['身份证、现金、护照', '收据、原包装、付款的那张卡', '只要商品就行', '会员卡、优惠券、小票照片'],
      answer: 1,
      explain: '留收据 + 原包装 + 当时付款的信用卡,退换最顺;没收据多只能换 store credit。'
    },
    {
      type: 'fill',
      q: '"我能试穿这件吗":"Could I ____ this on?"',
      answer: ['try'],
      explain: 'try on 是"试穿"的固定搭配;单说 try 对方不知道你要试什么。'
    }
  ]
});
