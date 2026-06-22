/* 旅行模块第 3 课:数字·价格·金钱。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-03-numbers',
  module: 'travel',
  order: 3,
  title: '数字·价格·金钱:别听错说错',
  minutes: 5,
  keywords: ['数字', 'numbers', '价格', 'price', '钱', 'money', '小费', 'tip', 'thirteen', 'thirty'],

  sections: {
    what: '\
<p><strong>一句话:旅行里最容易出错的就是数字——报错航班号、听错房间号、多付钱,都从数字开始;而最致命的是 <span>-teen 和 -ty 分不清</span>。</strong></p>\
<p>这一课解决三件事:听准 13 还是 30、读对价格、搞懂美国的税和小费。</p>',

    when: '\
<p>值机报航班号、前台报房间号、商店结账、餐厅给小费、打车付费——一切跟数字有关的场景。</p>',

    how: '\
<p><strong>① 致命对立:-teen 重音在后,-ty 重音在前。</strong></p>\
<table>\
<tr><th>数</th><th>-teen(重音在后,尾音拉长)</th><th>-ty(重音在前,短促)</th></tr>\
<tr><td>13 / 30</td><td><en>thirteen</en></td><td><en>thirty</en></td></tr>\
<tr><td>14 / 40</td><td><en>fourteen</en></td><td><en>forty</en></td></tr>\
<tr><td>15 / 50</td><td><en>fifteen</en></td><td><en>fifty</en></td></tr>\
<tr><td>19 / 90</td><td><en>nineteen</en></td><td><en>ninety</en></td></tr>\
</table>\
<div class="ex">🔊 发音提示:thir<strong>TEEN</strong> 把末尾 "-teen" 用力拉长;<strong>THIR</strong>-ty 重音砸在前面、后半轻读。听不准就复述确认(见坑 1)。</div>\
<p><strong>② 价格读法(美国标价不含税,结账才加):</strong></p>\
<table>\
<tr><th>价格</th><th>怎么说(点读)</th></tr>\
<tr><td>$5.50</td><td><en>five fifty</en>(口语常省略 dollars)</td></tr>\
<tr><td>$0.99</td><td><en>ninety-nine cents</en></td></tr>\
<tr><td>$1.05</td><td><en>one oh five</en>(0 读 oh)</td></tr>\
<tr><td>$125.50</td><td><en>a hundred twenty-five fifty</en></td></tr>\
</table>\
<p><strong>③ 税与小费——美国账单的两个"隐藏数字":</strong></p>\
<div class="ex">🧾 <strong>税(tax):</strong>标价不含税,结账自动加约 <strong>8–10%</strong>(各州不同)。<br>💵 <strong>小费(tip):</strong>正餐堂食 <strong>15–20%</strong>,按税前金额算,是服务员的主要收入,不给视为失礼。快餐自取一般不用。</div>\
<p>确认数字的万能句:<en>Sorry, did you say thirteen or thirty?</en> · <en>Could you write that down for me?</en></p>',

    pitfalls: '\
<div class="pit"><b>坑 1:嘈杂环境听 13/30 全凭猜。</b>机场前台噪音大,thirteen 和 thirty 极易混。养成习惯:对方报数字后复述确认 <en>Did you say thirteen or thirty?</en>——母语者也这么做,不会觉得你奇怪。</div>\
<div class="pit"><b>坑 2:以为标价就是要付的钱。</b>美国标签价<strong>不含税</strong>,结账会多出 8–10%。看到 $9.99 别只掏 10 美元。</div>\
<div class="pit"><b>坑 3:忘了小费或按含税总额算。</b>正餐堂食必给 15–20%,且习惯按<strong>税前</strong>金额算。漏给小费在美国很失礼。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"thirty"(30)的重音在哪、听感如何?',
      options: ['重音在后,尾音拉长', '重音在前,短促', '两个音节一样重', '没有重音'],
      answer: 1,
      explain: '-ty 结尾(30/40/50…)重音在前、后半轻读;-teen 结尾(13/14/15…)重音在后、尾音拉长。'
    },
    {
      type: 'choice',
      q: '在美国餐厅吃正餐,小费通常给多少、怎么算?',
      options: ['不用给', '5%,按含税总额', '15–20%,按税前金额', '50%'],
      answer: 2,
      explain: '正餐堂食 15–20%,习惯按税前金额算,是服务员主要收入,漏给很失礼。'
    },
    {
      type: 'fill',
      q: '听不准数字时,复述确认:"Sorry, did you say thirteen ____ thirty?"',
      answer: ['or'],
      explain: '"Did you say thirteen or thirty?" 用重读把两个数对比出来,最有效的确认法。'
    }
  ]
});
