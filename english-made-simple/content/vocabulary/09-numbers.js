/* 词汇模块第 9 课:功能词包·数字/价格/电话。架构点名补的盲区。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-09-numbers',
  module: 'vocab',
  order: 9,
  title: '功能词包·数字、价格、电话号码读法',
  minutes: 5,
  keywords: ['数字', 'numbers', '价格', 'price', '电话', 'phone number', '读法', '功能词'],

  sections: {
    what: '\
<p><strong>一句话:数字、钱、电话号码是落地第一天就要用、却最少被系统教的东西——读法有固定套路,学会就再也不卡壳。</strong></p>\
<p>会说 <en>one</en> 到 <en>ten</en> 不等于会报价格、读电话。美国人念这些有自己的习惯,这一课把套路一次讲清。</p>',

    when: '\
<p>报价、付款、留电话、说年份、给地址门牌——日常高频刚需。</p>',

    how: '\
<p><strong>大数字断三位:</strong>从右往左每三位一个单位 thousand / million。(点击听)</p>\
<div class="ex"><en>1,500</en> → one thousand five hundred(或口语 fifteen hundred)<br>\
<en>25,000</en> → twenty-five thousand　|　<en>3,000,000</en> → three million</div>\
<p><strong>价格:$ 读 dollar(s),小数点后读 cents,或直接连读。</strong></p>\
<div class="ex"><en>$5.99</en> → five ninety-nine(口语最常用)/ five dollars and ninety-nine cents<br>\
<en>$20</en> → twenty dollars　|　<en>$1.50</en> → a dollar fifty</div>\
<p><strong>电话号码:一位一位念,0 读 "oh" 或 "zero",连号可叠读。</strong></p>\
<div class="ex"><en>555-0182</en> → five five five, oh one eight two<br>\
连号:<en>1-800-...</en> → one eight hundred…</div>\
<p><strong>年份:通常两位两位读。</strong></p>\
<div class="ex"><en>1985</en> → nineteen eighty-five　|　<en>2026</en> → twenty twenty-six(或 two thousand twenty-six)</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:价格逐字翻译。</b>$5.99 别念 "five point nine nine dollars"。地道说法是 "five ninety-nine"。</div>\
<div class="pit"><b>坑 2:hundred/thousand 加 s。</b>具体数字前不加 s:<en>three hundred</en> 不是 "three hundreds"。只有泛指"成百上千"时才加(hundreds of people)。</div>\
<div class="pit"><b>坑 3:电话号码连读成大数。</b>555 是 "five five five",不是 "five hundred fifty-five"。号码要一位位念。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '$5.99 最地道的口语读法是?',
      options: ['five point nine nine dollars', 'five ninety-nine', 'five dollars nine nine', 'fifty-nine nine'],
      answer: 1,
      explain: '口语里直接读 "five ninety-nine",前面是 dollar 数、后面是 cent 数,不读 point。'
    },
    {
      type: 'choice',
      q: '电话号码 555 应该怎么念?',
      options: ['five hundred fifty-five', 'five five five(一位一位)', 'triple five hundred', 'fifty-five five'],
      answer: 1,
      explain: '电话号码一位一位念:five five five。不能当成大数 555 读。'
    },
    {
      type: 'fill',
      q: '年份 1985 常读作 nineteen ____。',
      answer: ['eighty-five', 'eighty five', 'eightyfive'],
      explain: '年份通常两位两位读:19→nineteen,85→eighty-five。2026 则常读 twenty twenty-six。'
    }
  ]
});
