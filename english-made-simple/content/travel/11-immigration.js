/* 旅行模块第 11 课:入境边检窗口问答。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-11-immigration',
  module: 'travel',
  order: 11,
  title: '入境①:边检窗口问答',
  minutes: 5,
  keywords: ['入境', 'immigration', '边检', 'CBP', '海关官', 'purpose', '盘问', 'tourism', '签证'],

  sections: {
    what: '\
<p><strong>一句话:美国边检(CBP)问话其实就那几句——问什么答什么,简短、诚实、别主动多说,几乎都能 30 秒过关。</strong></p>\
<p>场景地图:轮到你时官员说 <en>Next, please. Passport.</en>,然后连珠炮一样问目的、停留多久、住哪、来过没、做什么工作。下面把高频问答背熟,听到第一个词就能答。</p>',

    when: '\
<p>下飞机后第一道关:护照查验窗口(immigration counter)。这是出国最让人紧张、但其实最套路化的一关。</p>',

    how: '\
<p><strong>CBP 高频问答(覆盖 95%,点读你的答句):</strong></p>\
<table>\
<tr><th>官员问</th><th>你这样答(点读)</th></tr>\
<tr><td>来美目的?(What\'s the purpose of your visit?)</td><td><en>Tourism.</en> / <en>Business — a conference.</en> / <en>Visiting family.</en></td></tr>\
<tr><td>停留多久?(How long will you stay?)</td><td><en>Two weeks.</en> / <en>Ten days.</en>(说确切数字)</td></tr>\
<tr><td>住哪里?(Where will you stay?)</td><td><en>At the Hilton in downtown LA.</en></td></tr>\
<tr><td>以前来过吗?(Have you been here before?)</td><td><en>Yes, two years ago — for tourism.</en> / <en>No, this is my first time.</en></td></tr>\
<tr><td>做什么工作?(What do you do?)</td><td><en>I\'m a software engineer.</en> / <en>I\'m a college student.</en></td></tr>\
<tr><td>一个人来吗?(Are you traveling alone?)</td><td><en>Yes, alone.</en> / <en>No, with my wife and two kids.</en></td></tr>\
<tr><td>谁出钱?(Who paid for your trip?)</td><td><en>I paid myself.</en> / <en>My company.</en></td></tr>\
</table>\
<p>官员还会让你按指纹拍照:<en>Look at the camera.</en> · <en>Place your fingers on the scanner.</en>(照做即可)。</p>\
<div class="ex">💡 <strong>万一被请进二次盘问(secondary inspection)</strong>:保持冷静、不争辩;配合查手机行李是义务;要翻译是你的合法权利——<en>Could I have a Chinese interpreter, please?</en>;<strong>绝不撒谎</strong>,他们有数据库交叉核对。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:回答展开解释。</b>问 "How long?" 答 <en>Two weeks.</en> 就够,别补 "because I want to see…"。多说反而引来追问。<strong>能一个词答就别两个词。</strong></div>\
<div class="pit"><b>坑 2:"我来玩"直译成 I come play。</b>来美目的用名词:<en>I\'m here for tourism.</en> / <en>…for business.</en> / <en>…visiting family.</en></div>\
<div class="pit"><b>坑 3:停留时间答 "I don\'t know"。</b>这是大忌,会被认为没计划、有移民倾向。给一个确切数字,哪怕是 <en>About ten days.</en></div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '官员问 "How long will you stay?",最稳的回答是?',
      options: ['I don\'t know.', 'Maybe long time.', 'Two weeks.', 'Because I love America.'],
      answer: 2,
      explain: '给确切数字,如 "Two weeks."。说不知道会被认为没计划、有移民倾向。'
    },
    {
      type: 'choice',
      q: '被请进二次盘问室,下面哪条做法错误?',
      options: ['保持冷静配合检查', '撒个小谎让自己显得没问题', '要求中文翻译', '如实回答问题'],
      answer: 1,
      explain: '绝不能撒谎,CBP 有数据库交叉核对,被发现直接拒绝入境并记录在案。'
    },
    {
      type: 'fill',
      q: '要中文翻译:"Could I have a Chinese ____, please?"',
      answer: ['interpreter'],
      explain: 'interpreter = 口译员。要求翻译是入境者的合法权利。'
    }
  ]
});
