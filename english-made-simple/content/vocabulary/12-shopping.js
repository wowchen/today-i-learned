/* 词汇模块第 12 课:场景词包·购物与问路。词汇模块收官。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-12-shopping',
  module: 'vocab',
  order: 12,
  title: '场景词包·购物与问路',
  minutes: 5,
  keywords: ['购物', 'shopping', '问路', 'directions', '商店', '退货', '场景词包'],

  sections: {
    what: '\
<p><strong>一句话:买东西和问路是出门必用的两大场景——各有一组高频词和句型,打包记住,逛街不哑、迷路不慌。</strong></p>\
<p>这是词汇模块的收官场景课。掌握后,你已经能用英语应付吃、买、走这三件日常最高频的事了。</p>',

    when: '\
<p>商场、超市、便利店购物;在陌生街区找地方、问方向时。</p>',

    how: '\
<p><strong>购物关键词与句(点击听):</strong></p>\
<table>\
<tr><th>词/句</th><th>意思</th></tr>\
<tr><td><en>How much is this?</en></td><td>这个多少钱?</td></tr>\
<tr><td><en>Do you have this in a smaller size?</en></td><td>有小一号的吗?</td></tr>\
<tr><td><en>Can I try it on?</en></td><td>能试穿吗?</td></tr>\
<tr><td><en>I am just looking.</en></td><td>我随便看看(店员问时)</td></tr>\
<tr><td><en>refund</en> / <en>return</en></td><td>退款 / 退货</td></tr>\
<tr><td><en>receipt</en></td><td>收据(注意 p 不发音)</td></tr>\
</table>\
<p><strong>问路关键词与句(点击听):</strong></p>\
<table>\
<tr><td><en>Excuse me, how do I get to the subway?</en></td><td>请问怎么去地铁站?</td></tr>\
<tr><td><en>Go straight</en> · <en>turn left</en> · <en>turn right</en></td><td>直走 · 左转 · 右转</td></tr>\
<tr><td><en>It is on your right.</en></td><td>在你右手边</td></tr>\
<tr><td><en>block</en></td><td>街区(美式问路常用:two blocks down)</td></tr>\
</table>\
<div class="ex">🎯 问路黄金开头:永远先说 <en>Excuse me</en>,再问。礼貌开场,对方更乐意帮你。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:receipt 把 p 念出来。</b>这个词的 p 不发音,读 /rɪˈsiːt/(瑞-西特)。常见拼读"违章户"。</div>\
<div class="pit"><b>坑 2:问路不说 Excuse me。</b>上来直接问会显得冲。先 "Excuse me" 是基本礼貌。</div>\
<div class="pit"><b>坑 3:用 meter 估距离。</b>美国问路常用 <en>block</en>(街区)和英制(mile/feet),不太用米。"two blocks down" 比 "200 meters" 地道。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '店员问你需要帮忙,你只想自己看看,该说?',
      options: ['Go away', 'I am just looking', 'No money', 'Nothing'],
      answer: 1,
      explain: '"I\'m just looking"(我随便看看)是礼貌又地道的回应。'
    },
    {
      type: 'choice',
      q: 'receipt 这个词的发音要注意?',
      options: ['c 不发音', 'p 不发音', 't 不发音', '全部发音'],
      answer: 1,
      explain: 'receipt 的 p 不发音,读 /rɪˈsiːt/。这是拼读规则的"违章户"。'
    },
    {
      type: 'fill',
      q: '问路时礼貌的开头两个词是 "____ ____"。',
      answer: ['Excuse me', 'excuse me'],
      explain: '"Excuse me" 是问路、打扰别人时的标准礼貌开场,先说它再问。'
    }
  ]
});
