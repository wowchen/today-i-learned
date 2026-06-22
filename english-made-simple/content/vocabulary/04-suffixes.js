/* 词汇模块第 4 课:高频后缀(词性信号)。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-04-suffixes',
  module: 'vocab',
  order: 4,
  title: '高频后缀:-er -tion -ful -less -ly',
  minutes: 5,
  keywords: ['后缀', 'suffix', '词性', '-er', '-tion', '-ful', '-less', '-ly'],

  sections: {
    what: '\
<p><strong>一句话:后缀加在词尾,主要决定"词性"——看后缀就能判断这个词是名词、动词、形容词还是副词。</strong></p>\
<p>前缀改意思,后缀定身份。<en>care</en>(在意)+ ful = <en>careful</en>(小心的,形容词);+ less = <en>careless</en>(粗心的);+ fully = <en>carefully</en>(小心地,副词)。同一个词根,后缀一换,词性和用法全变。</p>',

    when: '\
<p>读句子时,后缀帮你快速判断某个生词在句中的"角色"(主语?修饰语?),即使不知道确切意思也能读下去。</p>',

    how: '\
<p><strong>按词性分类的高频后缀,点击听例词:</strong></p>\
<table>\
<tr><th>后缀</th><th>变成</th><th>例词(点击听)</th></tr>\
<tr><td>-er / -or</td><td>名词:做…的人/物</td><td><en>teacher</en> · <en>worker</en> · <en>actor</en></td></tr>\
<tr><td>-tion / -sion</td><td>名词:动作/状态</td><td><en>action</en> · <en>decision</en> · <en>education</en></td></tr>\
<tr><td>-ful</td><td>形容词:充满…的</td><td><en>helpful</en> · <en>useful</en> · <en>beautiful</en></td></tr>\
<tr><td>-less</td><td>形容词:没有…的</td><td><en>useless</en> · <en>hopeless</en> · <en>careless</en></td></tr>\
<tr><td>-ly</td><td>副词:…地</td><td><en>quickly</en> · <en>slowly</en> · <en>happily</en></td></tr>\
<tr><td>-able / -ible</td><td>形容词:能…的</td><td><en>comfortable</en> · <en>possible</en></td></tr>\
</table>\
<div class="ex">🎯 一根生四词:<en>care</en>(动/名)→ <en>careful</en>(形)→ <en>carefully</en>(副)→ <en>careless</en>(形,反义)。后缀是"词性变形器"。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:-ful 拼成 -full。</b>后缀 -ful 只有一个 l!<en>helpful</en>、<en>useful</en> 都是单 l。(但 full 单独做词是双 l。)</div>\
<div class="pit"><b>坑 2:加后缀忘了改拼写。</b><en>happy</en> + ly → <en>happily</en>(y 变 i);<en>decide</en> → <en>decision</en>。拼写有小变化,多见就熟。</div>\
<div class="pit"><b>坑 3:-ly 一律当副词。</b>大多对,但 <en>friendly</en>(友好的)、<en>lovely</en>(可爱的)是形容词。别被后缀骗,看用法。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '后缀 -ly 通常把词变成?',
      options: ['名词', '动词', '副词(…地)', '形容词'],
      answer: 2,
      explain: '-ly 多数情况变副词:quickly(快地)、slowly(慢地)。少数例外如 friendly 是形容词。'
    },
    {
      type: 'choice',
      q: 'careful 和 careless 的区别在后缀,意思分别是?',
      options: ['都表示小心', '充满小心 vs 没有小心(粗心)', '都表示粗心', '一个名词一个动词'],
      answer: 1,
      explain: '-ful=充满(careful 小心的),-less=没有(careless 粗心的)。后缀决定正反。'
    },
    {
      type: 'fill',
      q: 'help 加后缀变成形容词"有帮助的",是 help____。',
      answer: ['ful', 'helpful'],
      explain: 'helpful(单个 l)。-ful 表示"充满…的",注意只有一个 l。'
    }
  ]
});
