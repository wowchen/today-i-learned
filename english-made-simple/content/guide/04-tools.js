/* 导览模块第 4 课:词典与工具。架构点名补的盲区。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'guide-04-tools',
  module: 'guide',
  order: 4,
  title: '词典与 AI 工具怎么用',
  minutes: 5,
  keywords: ['词典', 'dictionary', '工具', 'AI', '查词', 'guide'],

  sections: {
    what: '\
<p><strong>一句话:会查词典、会用工具,本身就是一项关键能力——选对工具、用对方法,自学效率翻倍。</strong></p>\
<p>很多人不是学不会,是不会借助工具。这一课告诉你查词典看什么、AI 工具怎么用得聪明,让你能独立解决大部分问题。</p>',

    when: '\
<p>遇到生词、想确认发音/用法、自学卡住时。</p>',

    how: '\
<p><strong>查词典:看这几样(别只看中文意思):</strong></p>\
<table>\
<tr><th>看什么</th><th>为什么</th></tr>\
<tr><td>美式音标 + 发音</td><td>读准它(认准 US/🇺🇸 标注)</td></tr>\
<tr><td>重音符号 ˈ</td><td>重音放对才好懂</td></tr>\
<tr><td>例句</td><td>看它怎么用,比记释义有用</td></tr>\
<tr><td>常见搭配</td><td>知道它和谁连用</td></tr>\
</table>\
<p>推荐词典:Merriam-Webster、Cambridge、有道、欧路(都给美音和例句)。</p>\
<p><strong>AI 工具(如 Claude/ChatGPT)聪明用法:</strong></p>\
<div class="ex">• 让它<strong>造例句</strong>:"用 decide 给我 3 个日常例句"<br>\
• 让它<strong>改写润色</strong>:"把这句改地道:…"<br>\
• 让它<strong>解释区别</strong>:"affect 和 effect 有什么区别?"<br>\
• 让它<strong>当陪练</strong>:"我们用英语聊点餐场景,你当服务员"</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:查词只看中文释义。</b>错过了发音、重音、例句、搭配——这些才让你"会用"。多看一眼。</div>\
<div class="pit"><b>坑 2:AI 给的全盘照收。</b>AI 偶尔会出错或给非美式表达。重要内容用词典再核一下。</div>\
<div class="pit"><b>坑 3:用工具代替练习。</b>工具帮你查和练,但听说读写还得自己动嘴动手,别只"问"不"练"。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '查词典时,除了中文意思,最该一起看的是?',
      options: ['只看中文就够', '发音、重音、例句、搭配', '只看词性', '只看长度'],
      answer: 1,
      explain: '发音、重音、例句、搭配才让你"会用"这个词,只看中文释义容易记不住、用不对。'
    },
    {
      type: 'choice',
      q: 'AI 工具(如 Claude)用来学英语,下面哪种用法好?',
      options: ['让它替你练口语,你不开口', '让它造例句、改写、解释区别、当陪练', '全盘照收不核对', '只用来翻译'],
      answer: 1,
      explain: 'AI 适合造例句、润色、讲区别、当对话陪练;但要核对、且不能代替你自己动嘴动手练。'
    }
  ]
});
