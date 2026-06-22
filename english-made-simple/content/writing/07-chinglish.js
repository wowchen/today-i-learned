/* 写作模块第 7 课:写作版中式英语避坑。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-07-chinglish',
  module: 'write',
  order: 7,
  title: '写作版中式英语避坑',
  minutes: 5,
  keywords: ['中式英语', 'Chinglish', '写作', '避坑', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:写作里的中式英语,多半是"逐字翻译 + 多余的词 + 中文逻辑"造成的——改掉几个高频毛病,文章立刻清爽地道。</strong></p>\
<p>口语第4课讲过口头表达的中式陷阱,这一课专攻<strong>写作</strong>里的:啰嗦、堆形容词、连词冗余。英文写作崇尚"简洁清楚",和中文爱铺陈不同。</p>',

    when: '\
<p>写完一段后检查时。带着这份"黑名单"自查,能挑出大半中式毛病。</p>',

    how: '\
<p><strong>写作高频中式毛病(✗→✔):</strong></p>\
<table>\
<tr><th>毛病</th><th>✗ 中式</th><th>✔ 地道</th></tr>\
<tr><td>啰嗦冗余</td><td>In my opinion, I think…</td><td><en>I think…</en>(二选一)</td></tr>\
<tr><td>there is 滥用</td><td>There are many people think…</td><td><en>Many people think…</en></td></tr>\
<tr><td>because…so</td><td>Because it rained, so I stayed.</td><td><en>Because it rained, I stayed.</en></td></tr>\
<tr><td>形容词堆砌</td><td>very very good and nice</td><td><en>great</en>(一个准确的词)</td></tr>\
<tr><td>although…but</td><td>Although…, but…</td><td><en>Although it rained, we went.</en></td></tr>\
</table>\
<div class="ex">🎯 英文写作三字诀:<strong>简、准、清</strong>。能用一个词别用三个,能短句别长句,意思清楚永远第一位。删掉多余的词,文章立刻提升。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:成对连词。</b>英文里 because/so 留一个、although/but 留一个,不像中文成对出现。这是最高频写作错误。</div>\
<div class="pit"><b>坑 2:意义重复。</b>"In my opinion, I think" 两个都表"我认为",留一个。"repeat again""return back" 也是重复。</div>\
<div class="pit"><b>坑 3:堆 very 和形容词。</b>"very very good" 不如一个 <en>excellent</en>。精准的词胜过一堆修饰。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"Although it rained, but we went out" 错在?',
      options: ['完全正确', 'although 和 but 不能同时用', '缺主语', '时态错'],
      answer: 1,
      explain: '英文 although 和 but 只能用一个(像 because/so 一样)。中文"虽然…但是…"成对,英文不行。'
    },
    {
      type: 'choice',
      q: '英文写作崇尚的风格是?',
      options: ['越华丽越好', '简洁、准确、清楚', '越长越好', '多用生僻词'],
      answer: 1,
      explain: '英文写作讲究"简、准、清":能用一个词别用三个,意思清楚第一位。'
    },
    {
      type: 'fill',
      q: '"In my opinion, I think…" 的问题是意义____,该删掉一个。',
      answer: ['重复', '冗余'],
      explain: 'In my opinion 和 I think 都表"我认为",重复了,留一个即可。'
    }
  ]
});
