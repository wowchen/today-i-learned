/* 第 5 课:辅音(上)——和中文接近、一看就会的那批。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-05-consonants-1',
  module: 'pron',
  order: 5,
  title: '辅音(上):一看就会的 16 个',
  minutes: 5,
  keywords: ['辅音', 'consonants', '声母', 'b p m f'],

  sections: {
    what: '\
<p><strong>一句话:英语的辅音里,有一大半发音和中文声母几乎一样,你早就会了,只是没意识到。</strong></p>\
<p>这一课专挑"送分题"——这 16 个辅音你用中文的肌肉记忆就能发对,先把它们拿下,建立信心。下一课再单独收拾那几个中国人专属难点。</p>',

    when: '\
<p>拼读任何单词时,辅音负责"开头和结尾的骨架"。把这批熟脸先认全,拼读速度立刻上来。</p>\
<div class="ex">💡 小提醒:英语辅音结尾时,后面别习惯性加个中文的"呃"。<en>map</en> 是干脆的"普"收尾,不是"马普呃"。</div>',

    how: '\
<p>分两组,跟着点读。括号里是中文近似声母,帮你定位,不是精确等价:</p>\
<p><strong>清浊成对的(嘴型一样,区别在喉咙振不振动):</strong></p>\
<table>\
<tr><th>清音(不振)</th><th>浊音(振动)</th><th>例词(点击听)</th></tr>\
<tr><td>p(泼)</td><td>b(波)</td><td><en>pen</en> / <en>bed</en></td></tr>\
<tr><td>t(特)</td><td>d(得)</td><td><en>ten</en> / <en>dog</en></td></tr>\
<tr><td>k(科)</td><td>g(哥)</td><td><en>cat</en> / <en>go</en></td></tr>\
<tr><td>f(夫)</td><td>v(用上齿咬下唇,振动)</td><td><en>fan</en> / <en>van</en></td></tr>\
<tr><td>s(丝)</td><td>z(嗡嗡的丝)</td><td><en>sun</en> / <en>zoo</en></td></tr>\
</table>\
<p><strong>单个就会的:</strong></p>\
<table>\
<tr><th>辅音</th><th>近似</th><th>例词(点击听)</th></tr>\
<tr><td>m</td><td>摸</td><td><en>man</en> · <en>mom</en></td></tr>\
<tr><td>n</td><td>讷</td><td><en>no</en> · <en>net</en></td></tr>\
<tr><td>h</td><td>喝(哈气)</td><td><en>hat</en> · <en>home</en></td></tr>\
<tr><td>w</td><td>乌</td><td><en>we</en> · <en>win</en></td></tr>\
<tr><td>y</td><td>呀</td><td><en>yes</en> · <en>you</en></td></tr>\
<tr><td>sh</td><td>师</td><td><en>she</en> · <en>fish</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:v 发成 w。</b><en>very</en> 不是 <en>wery</en>。v 要用上牙咬下嘴唇、喉咙振动;w 是双唇收圆。点 <en>van</en> 和 <en>wine</en> 对比一下。</div>\
<div class="pit"><b>坑 2:词尾辅音加"呃"。</b>中文习惯让我们给 <en>bed</en> 补成"贝德呃"。英语词尾要干净利落地收住。</div>\
<div class="pit"><b>坑 3:清浊不分。</b><en>pig</en>(猪)和 <en>big</en>(大)只差 p/b 的喉咙振动。手放喉咙上,发 b/d/g/v/z 时应该能摸到振动。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'f 和 v 这一对,区别在哪里?',
      options: ['嘴型完全不同', '喉咙振不振动', '舌头位置', '没区别'],
      answer: 1,
      explain: 'f 和 v 嘴型一样(上齿咬下唇),区别只在 v 要让喉咙振动。这就是"清浊成对"。'
    },
    {
      type: 'choice',
      q: '把 very 念成 "wery" 是哪个辅音出了问题?',
      options: ['把 v 发成了 w', '把 r 发成了 l', '重音错了', '元音错了'],
      answer: 0,
      explain: 'v 要上齿咬下唇,w 是双唇收圆。这是中国人很常见的混淆,要专门练。'
    }
  ]
});
