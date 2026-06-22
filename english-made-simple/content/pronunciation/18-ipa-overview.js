/* 第 18 课:48 音标总表 + 查字典。发音模块收尾整合课。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-18-ipa-overview',
  module: 'pron',
  order: 18,
  title: '48 音标总表 + 怎么用字典听发音',
  minutes: 5,
  keywords: ['音标', 'IPA', '48音标', '国际音标', '查字典', '音标表', '总表'],

  sections: {
    what: '\
<p><strong>一句话:音标是"发音的精确身份证"——拼读管大多数,音标是查任何生词都能读准的兜底工具。这一课把美式 48 个音标汇成一张表,随时点读。</strong></p>\
<p>前面 17 课你已经见过它们大半。这一课不是从头学,而是<strong>归档</strong>:给你一张可点读的总表,以后查字典看到音标,就能对上号。</p>',

    when: '\
<p>查生词、纠正一个老读错的词、看字典音标标注时用。日常阅读靠拼读,精确发音靠音标。</p>',

    how: '\
<p><strong>元音(20 个,点击听例词):</strong></p>\
<table>\
<tr><th colspan="2">短元音</th><th colspan="2">长/紧元音</th></tr>\
<tr><td>/ɪ/ <en>sit</en></td><td>/e/ <en>bed</en></td><td>/iː/ <en>see</en></td><td>/uː/ <en>blue</en></td></tr>\
<tr><td>/æ/ <en>cat</en></td><td>/ʌ/ <en>cup</en></td><td>/ɑ/ <en>hot</en></td><td>/ɔ/ <en>dog</en></td></tr>\
<tr><td>/ʊ/ <en>book</en></td><td>/ə/ <en>about</en></td><td>/ɝ/ <en>bird</en></td><td>/ɚ/ <en>teacher</en></td></tr>\
<tr><th colspan="4">双元音</th></tr>\
<tr><td>/eɪ/ <en>day</en></td><td>/aɪ/ <en>my</en></td><td>/ɔɪ/ <en>boy</en></td><td>/aʊ/ <en>now</en></td></tr>\
<tr><td>/oʊ/ <en>go</en></td><td colspan="3"></td></tr>\
</table>\
<p><strong>辅音(28 个,点击听例词):</strong></p>\
<table>\
<tr><td>/p/ <en>pen</en></td><td>/b/ <en>bag</en></td><td>/t/ <en>ten</en></td><td>/d/ <en>dog</en></td></tr>\
<tr><td>/k/ <en>cat</en></td><td>/g/ <en>go</en></td><td>/f/ <en>fan</en></td><td>/v/ <en>van</en></td></tr>\
<tr><td>/θ/ <en>think</en></td><td>/ð/ <en>this</en></td><td>/s/ <en>sun</en></td><td>/z/ <en>zoo</en></td></tr>\
<tr><td>/ʃ/ <en>she</en></td><td>/ʒ/ <en>vision</en></td><td>/tʃ/ <en>chair</en></td><td>/dʒ/ <en>job</en></td></tr>\
<tr><td>/m/ <en>man</en></td><td>/n/ <en>no</en></td><td>/ŋ/ <en>sing</en></td><td>/h/ <en>hat</en></td></tr>\
<tr><td>/l/ <en>light</en></td><td>/r/ <en>red</en></td><td>/w/ <en>we</en></td><td>/j/ <en>yes</en></td></tr>\
</table>\
<div class="ex">📖 查字典三步:① 看音标定位每个音;② 找重音符号 ˈ(标在重读音节前);③ 美式标注通常写在 US 或 🇺🇸 旁,认准它。推荐:有道、欧路、Merriam-Webster、Cambridge Dictionary 都给美音。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把音标当唯一方法死背。</b>音标是兜底,不是日常。80% 的词靠拼读就能读,音标用来查那剩下的、和纠错。</div>\
<div class="pit"><b>坑 2:只看音标不看重音。</b>音标念对了、重音放错了,照样听不懂。永远连重音符号 ˈ 一起看。</div>\
<div class="pit"><b>坑 3:查到英音当美音。</b>很多词英美音标不同(<en>schedule</en>、<en>tomato</en>)。查字典认准美式标注那一栏。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '音标在学习里最恰当的角色是?',
      options: ['唯一的发音方法,全靠它', '兜底工具:查生词和纠错', '只用来考试', '比拼读更重要,先背它'],
      answer: 1,
      explain: '拼读管日常的大多数词(约 80%),音标用来查生词、纠正读错的词。两者配合,不是互相替代。'
    },
    {
      type: 'choice',
      q: '字典里音标前的小竖线 ˈ 表示?',
      options: ['这是个长音', '重音在它后面的音节', '这里要停顿', '这是美式标注'],
      answer: 1,
      explain: 'ˈ 标在重读音节前面。看音标一定要连重音一起看,否则重音放错照样难懂。'
    },
    {
      type: 'fill',
      q: '/θ/ 这个音标的例词是 ____(本课表里给的咬舌音词)。',
      answer: ['think', 'mouth', 'three'],
      explain: '/θ/ 是清咬舌音,例词 think。回顾第 7 课的咬舌音练习。'
    }
  ]
});
