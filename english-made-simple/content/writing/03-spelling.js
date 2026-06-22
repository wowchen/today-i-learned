/* 写作模块第 3 课:拼写规则。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-03-spelling',
  module: 'write',
  order: 3,
  title: '拼写规则与最常拼错的词',
  minutes: 5,
  keywords: ['拼写', 'spelling', '拼错', '美式拼写', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:英文拼写有几条好用的规则能减少出错,加上一份"最常拼错词"清单——而且本站以美式拼写为准。</strong></p>\
<p>拼写错误最影响"专业感"。好在常错的就那几类,规则也有迹可循。这一课给你规则 + 黑名单 + 美式拼写要点。</p>',

    when: '\
<p>写作时,尤其没有拼写检查的场合(手写、考试)。</p>',

    how: '\
<p><strong>几条实用拼写规则:</strong></p>\
<table>\
<tr><th>规则</th><th>例</th></tr>\
<tr><td>辅音+y 变复数/三单:y→ies</td><td>baby→babies, study→studies</td></tr>\
<tr><td>重读闭音节加后缀双写末辅音</td><td>run→running, stop→stopped</td></tr>\
<tr><td>不发音 e 遇元音后缀去 e</td><td>make→making, hope→hoping</td></tr>\
<tr><td>i 在 e 前,c 后例外</td><td>believe, 但 receive(c后ei)</td></tr>\
</table>\
<p><strong>美式拼写 vs 英式(本站用美式,点击听):</strong></p>\
<table>\
<tr><th>美式 ✔</th><th>英式</th></tr>\
<tr><td><en>color</en></td><td>colour</td></tr>\
<tr><td><en>center</en></td><td>centre</td></tr>\
<tr><td><en>organize</en></td><td>organise</td></tr>\
<tr><td><en>traveling</en></td><td>travelling</td></tr>\
</table>\
<div class="ex">📌 最常拼错黑名单:<en>definitely</en>(不是 definately)· <en>separate</en>(不是 seperate)· <en>receive</en>(i前e后?是 ei)· <en>necessary</en>(一个c两个s)· <en>tomorrow</en>(一个m两个r)。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:英美拼写混用。</b>一篇里 color 和 colour 混着写不专业。本站用美式,统一 color/center/organize。</div>\
<div class="pit"><b>坑 2:加后缀忘了变形。</b>run+ing 要双写成 running;hope+ing 去 e 成 hoping。规则记住能避大量错。</div>\
<div class="pit"><b>坑 3:全靠拼写检查。</b>拼写检查抓不出"用错的真词"(their/there、its/it\'s)。这些要靠自己懂。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '本站以哪种拼写为准?"颜色"应该写?',
      options: ['英式 colour', '美式 color', '都行', 'collor'],
      answer: 1,
      explain: '本站以美式拼写为准:color(不是英式 colour)、center、organize。'
    },
    {
      type: 'choice',
      q: 'run 加 -ing,正确拼写是?',
      options: ['runing', 'running', 'runnning', 'runeing'],
      answer: 1,
      explain: '重读闭音节加元音后缀要双写末尾辅音:run→running、stop→stopped。'
    },
    {
      type: 'fill',
      q: '"绝对地"这个常被拼错的词,正确拼写是 defin____ly。(填中间)',
      answer: ['ite', 'itly'],
      explain: 'definitely(不是 definately)。这是英语母语者也高频拼错的词之一。'
    }
  ]
});
