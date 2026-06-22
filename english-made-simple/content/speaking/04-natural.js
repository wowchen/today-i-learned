/* 口语模块第 4 课:地道表达 vs 中式直译。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-04-natural',
  module: 'speak',
  order: 4,
  title: '地道美式表达 vs 中式直译',
  minutes: 5,
  keywords: ['地道表达', '中式英语', 'Chinglish', '直译', '口语'],

  sections: {
    what: '\
<p><strong>一句话:很多中式英语语法没错,但母语者不那么说——地道的关键是记"他们怎么说",而不是把中文逐字翻过去。</strong></p>\
<p>"中式英语"往往不是语法错,是"不自然"。<en>How to say…</en>(中式)语法没大错,但地道是 <en>How do you say…</en>。这一课挑几组高频的"中翻英陷阱",直接给你地道版。</p>',

    when: '\
<p>每次想"这句中文用英语怎么说"时。先警惕:别逐字翻,想想母语者的固定说法。</p>',

    how: '\
<p><strong>高频对照(✗ 中式直译 → ✔ 地道说法,点击听地道版):</strong></p>\
<table>\
<tr><th>想说</th><th>✗ 中式</th><th>✔ 地道</th></tr>\
<tr><td>这个用英语怎么说?</td><td>How to say this?</td><td><en>How do you say this?</en></td></tr>\
<tr><td>我很喜欢</td><td>I very like it</td><td><en>I really like it.</en></td></tr>\
<tr><td>没关系/不客气</td><td>Never mind(场合不对)</td><td><en>No problem.</en> / <en>You\'re welcome.</en></td></tr>\
<tr><td>我想想</td><td>Let me think think</td><td><en>Let me think.</en></td></tr>\
<tr><td>身体好</td><td>My body is good</td><td><en>I\'m healthy.</en> / <en>I\'m in good shape.</en></td></tr>\
<tr><td>太贵了</td><td>Too expensive(略冲)</td><td><en>That\'s a bit pricey.</en></td></tr>\
</table>\
<div class="ex">🎯 攒"地道说法"的最好办法:看美剧/听播客时,遇到一个你"本来会用中式说法"的场景,记下母语者的版本。收藏进生词本反复用。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:very + 动词。</b>中文"很喜欢"→ 不能 "very like",very 不修饰动词。用 <en>really like</en> 或 <en>like… a lot</en>。</div>\
<div class="pit"><b>坑 2:逐字翻译成语俗话。</b>"人山人海"直译没人懂。地道是 <en>It was super crowded</en> 或 <en>packed</en>。意思优先,别硬翻字面。</div>\
<div class="pit"><b>坑 3:重复词强调。</b>"think think""look look"是中文叠词习惯,英语不这么干。说一次就好。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"这个用英语怎么说?" 地道说法是?',
      options: ['How to say this?', 'How do you say this?', 'This English how say?', 'What this say English?'],
      answer: 1,
      explain: '地道是 "How do you say this?"。"How to say" 是常见中式说法,需要主语 you。'
    },
    {
      type: 'choice',
      q: '"我很喜欢"正确的是?',
      options: ['I very like it', 'I really like it', 'I very much it', 'I like very it'],
      answer: 1,
      explain: 'very 不能修饰动词。用 "really like" 或 "like it a lot"。'
    },
    {
      type: 'fill',
      q: '别人帮了你,回"不客气"最常用:"You\'re ____."',
      answer: ['welcome'],
      explain: '"You\'re welcome." 是标准的"不客气"。注意 Never mind 不是这个意思(那是"算了")。'
    }
  ]
});
