/* 导览模块第 1 课:网站怎么用。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'guide-01-howto',
  module: 'guide',
  order: 1,
  title: '欢迎:这个网站怎么用',
  minutes: 5,
  keywords: ['导览', '怎么用', '使用', '点读', '生词本', '复习', 'guide'],

  sections: {
    what: '\
<p><strong>一句话:这是一个用中文大白话讲透美式英语的网站,专为零基础设计——一看就懂,点哪听哪,边学边练。</strong></p>\
<p>开始学之前,花 5 分钟搞懂这个站怎么用,后面学得顺。它有四个你会天天用到的功能,这一课讲清楚。</p>',

    when: '\
<p>第一次来,或想知道某个功能怎么用时。</p>',

    how: '\
<p><strong>四大核心功能:</strong></p>\
<table>\
<tr><th>功能</th><th>怎么用</th></tr>\
<tr><td>🔊 点读</td><td>页面里任何英文,点一下就用美音读出来(离线也行)</td></tr>\
<tr><td>⭐ 生词本</td><td>点单词,浮条里点"☆ 收藏",存进你的生词本</td></tr>\
<tr><td>⚡ 快速复习</td><td>顶部"生词本/复习",随机抽 5 个翻牌过一遍</td></tr>\
<tr><td>🗺️ 学习路线</td><td>首页"继续学习"按路线一步步走,不用想学什么</td></tr>\
</table>\
<div class="ex">🎯 试一下:点这句 <en>Welcome! Let\'s learn English together.</en><button class="say-all" data-say="Welcome! Let us learn English together.">▶ 听整句</button> 再点单词 <en>welcome</en>,看浮条收藏它。</div>\
<div class="ex">💡 每节课都长一个样:一句话是什么 → 什么时候用 → 怎么用 → 易踩的坑 → 30 秒小测。习惯这个结构,学起来没负担。学完点"标记已读",路线就前进一步。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:只看不点。</b>遇到英文一定要点读、出声跟。光用眼睛看,发音和听力都长不了。</div>\
<div class="pit"><b>坑 2:不收藏生词。</b>看到记不住的词随手 ☆ 收藏,配合快速复习,才记得牢。本站的核心循环就是"学→收藏→复习"。</div>\
<div class="pit"><b>坑 3:乱跳着学。</b>零基础建议跟着"学习路线"走,它按"先声音后表达"排好了顺序,不迷路。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在本站想听一个英文单词的发音,怎么做?',
      options: ['复制到别处查', '直接点那个单词', '没有这个功能', '只能看音标'],
      answer: 1,
      explain: '页面里任何英文点一下就用美音读出来,离线也能用。这是本站的核心功能。'
    },
    {
      type: 'choice',
      q: '每节课统一的五段结构,最后一段是?',
      options: ['一句话是什么', '怎么用', '30秒小测', '什么时候用'],
      answer: 2,
      explain: '五段:是什么→何时用→怎么用→易踩坑→30秒小测。小测帮你即时自查。'
    },
    {
      type: 'fill',
      q: '看到记不住的单词,点它然后点"☆ 收藏",就存进了 ____本。',
      answer: ['生词', '生词本'],
      explain: '收藏进生词本,再用"快速复习"反复过,是本站"学→收藏→复习"的核心循环。'
    }
  ]
});
