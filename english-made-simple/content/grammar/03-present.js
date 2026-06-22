/* 语法模块第 3 课:一般现在时 & 现在进行时。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-03-present',
  module: 'grammar',
  order: 3,
  title: '一般现在时 & 现在进行时',
  minutes: 5,
  keywords: ['现在时', '一般现在时', '现在进行时', 'present', '时态', '第三人称单数'],

  sections: {
    what: '\
<p><strong>一句话:一般现在时讲"经常/习惯性"的事(每天跑步),现在进行时讲"此刻正在"发生的事(现在正跑着)。</strong></p>\
<p>中文动词不变形,靠"经常""正在"这些词区分;英语要靠<strong>动词变形</strong>。这是中国人学时态的第一道坎,搞懂这两个,后面时态都是套路。</p>',

    when: '\
<p>说习惯、事实、时间表 → 一般现在时;说眼下正在进行的动作 → 现在进行时。</p>',

    how: '\
<p><strong>一般现在时:动词原形;主语是 he/she/it 时动词加 -s。</strong>(点击听)</p>\
<div class="ex"><en>I work every day.</en> 我每天工作。<br>\
<en>She works in a bank.</en> 她在银行上班。(third person → works,加 s)<br>否定/疑问用 do/does:<en>He does not like tea.</en> · <en>Do you speak English?</en></div>\
<p><strong>现在进行时:am/is/are + 动词-ing。</strong></p>\
<div class="ex"><en>I am working now.</en> 我正在工作。<br>\
<en>They are watching TV.</en> 他们在看电视。<br>\
<en>It is raining.</en> 正在下雨。</div>\
<table>\
<tr><th></th><th>一般现在时</th><th>现在进行时</th></tr>\
<tr><td>用于</td><td>习惯/事实</td><td>此刻正在</td></tr>\
<tr><td>标志词</td><td>every day, usually, often</td><td>now, right now, at the moment</td></tr>\
<tr><td>例</td><td><en>I read books.</en></td><td><en>I am reading now.</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:第三人称单数忘加 s。</b>he/she/it 做主语,动词要加 -s:<en>She likes it</en>,不是 "She like it"。这是中国人最高频语法错。</div>\
<div class="pit"><b>坑 2:该用进行时却用一般现在。</b>"我正在吃饭"是 <en>I am eating</en>,不是 "I eat"。eat 表习惯,am eating 表此刻。</div>\
<div class="pit"><b>坑 3:状态动词硬加 ing。</b><en>like</en>、<en>know</en>、<en>want</en> 这类状态词一般不用进行时。说 "I want it" 不说 "I am wanting it"。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"她在银行上班"(习惯/事实)正确的是?',
      options: ['She work in a bank', 'She works in a bank', 'She is work in a bank', 'She working in a bank'],
      answer: 1,
      explain: '第三人称单数 she,一般现在时动词加 -s:She works。表示习惯性事实。'
    },
    {
      type: 'choice',
      q: '"我正在吃饭"用哪个时态?',
      options: ['I eat', 'I am eating', 'I eats', 'I eated'],
      answer: 1,
      explain: '此刻正在进行用现在进行时:am/is/are + doing → I am eating。'
    },
    {
      type: 'fill',
      q: 'He ____ not like tea.(否定句,填助动词)',
      answer: ['does'],
      explain: '第三人称单数的否定用 does not:He does not like tea。注意此时 like 用原形。'
    }
  ]
});
