/* 语法模块第 7 课:12 时态总览。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-07-tenses',
  module: 'grammar',
  order: 7,
  title: '12 时态总览:一张表看懂全部',
  minutes: 5,
  keywords: ['时态', '12时态', 'tenses', '总览', '时态表'],

  sections: {
    what: '\
<p><strong>一句话:英语 12 个时态不是 12 套孤立规则,而是"3 个时间 × 4 种状态"的网格——看懂这张表,时态就不再可怕。</strong></p>\
<p>3 个时间:过去 / 现在 / 将来。4 种状态:一般(做不做)/ 进行(正在做)/ 完成(做完了)/ 完成进行(一直做到现在)。3×4 = 12。前几课你已经学了最常用的那几格,这一课把它们归到一张地图上。</p>',

    when: '\
<p>当你被时态绕晕时,回到这张表定位:先问"什么时间",再问"什么状态",交叉点就是要用的时态。</p>',

    how: '\
<p><strong>12 时态网格(以 do 为例,点击听典型例句):</strong></p>\
<table>\
<tr><th></th><th>一般</th><th>进行</th><th>完成</th></tr>\
<tr><td>现在</td><td>do/does</td><td>am/is/are doing</td><td>have/has done</td></tr>\
<tr><td>过去</td><td>did</td><td>was/were doing</td><td>had done</td></tr>\
<tr><td>将来</td><td>will do</td><td>will be doing</td><td>will have done</td></tr>\
</table>\
<p>(第四种"完成进行"如 have been doing 进阶时再补,日常先掌握上面 9 格。)</p>\
<div class="ex">🎯 各举一例(点击听):<br>\
<en>I work here.</en> 现在一般 ·\
<en>I am working now.</en> 现在进行 ·\
<en>I have worked here for years.</en> 现在完成<br>\
<en>I worked yesterday.</en> 过去一般 ·\
<en>I will work tomorrow.</en> 将来一般</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:想一次背全 12 个。</b>日常 90% 只用得到 5–6 个(现在一般/进行/完成、过去一般、将来 will)。先把高频格用熟,生僻格遇到再学。</div>\
<div class="pit"><b>坑 2:只记公式不记"何时用"。</b>每个时态的关键是"表达什么意思",不是机械套 be+ing。结合前几课的场景理解。</div>\
<div class="pit"><b>坑 3:中文思维选时态。</b>中文一个"了"对应英语好几种时态。别靠翻译,靠"时间+状态"定位。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '12 时态的构成逻辑是?',
      options: ['12 套独立规则', '3 个时间 × 4 种状态', '4 个时间 × 3 种语气', '随机的'],
      answer: 1,
      explain: '3 时间(过去/现在/将来)× 4 状态(一般/进行/完成/完成进行)= 12。是网格不是孤立规则。'
    },
    {
      type: 'choice',
      q: '"I am working now" 在网格里属于?',
      options: ['现在一般', '现在进行', '现在完成', '过去进行'],
      answer: 1,
      explain: '时间=现在,状态=进行(正在做)→ 现在进行时 am/is/are + doing。'
    },
    {
      type: 'fill',
      q: '定位时态的两步:先问什么"时间",再问什么"____"。',
      answer: ['状态'],
      explain: '先定时间(过去/现在/将来),再定状态(一般/进行/完成),交叉点就是该用的时态。'
    }
  ]
});
