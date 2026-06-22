/* 文化模块第 4 课:美国节日。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-04-holidays',
  module: 'culture',
  order: 4,
  title: '美国主要节日与习俗',
  minutes: 5,
  keywords: ['节日', 'holidays', '感恩节', '圣诞', '万圣节', '文化'],

  sections: {
    what: '\
<p><strong>一句话:美国的主要节日各有固定习俗和祝福语——知道它们,既听得懂"Happy Thanksgiving",也能在合适的时候说对话。</strong></p>\
<p>节日是文化的浓缩。了解几个大节,能帮你听懂日常对话、看懂商场氛围,也能在和美国人交往时不冷场、不说错祝福。</p>',

    when: '\
<p>临近节日、收到祝福、看美剧里的节日情节时。</p>',

    how: '\
<p><strong>美国主要节日(点击听祝福语):</strong></p>\
<table>\
<tr><th>节日</th><th>时间</th><th>习俗 / 祝福</th></tr>\
<tr><td>New Year\'s Day</td><td>1/1</td><td><en>Happy New Year!</en></td></tr>\
<tr><td>Valentine\'s Day</td><td>2/14</td><td>情侣送花巧克力</td></tr>\
<tr><td>Independence Day</td><td>7/4</td><td>国庆,烟花烧烤 <en>Happy Fourth!</en></td></tr>\
<tr><td>Halloween</td><td>10/31</td><td>变装、孩子 <en>trick or treat</en></td></tr>\
<tr><td>Thanksgiving</td><td>11月第4个周四</td><td>家人团聚吃火鸡 <en>Happy Thanksgiving!</en></td></tr>\
<tr><td>Christmas</td><td>12/25</td><td>送礼团聚 <en>Merry Christmas!</en></td></tr>\
</table>\
<div class="ex">💡 中性祝福:不确定对方过不过圣诞(美国多元),可说 <en>Happy Holidays!</en>——涵盖年底所有节日,最稳妥不冒犯。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:默认人人过圣诞。</b>美国宗教多元,有人不过圣诞。年底通用祝福用 <en>Happy Holidays</en> 更稳妥。</div>\
<div class="pit"><b>坑 2:Thanksgiving 记成固定日期。</b>它是"11月第四个周四",每年日期不同,不是固定某天。</div>\
<div class="pit"><b>坑 3:把万圣节当鬼节怕。</b>Halloween 是欢乐的变装节,孩子上门 "trick or treat" 讨糖,给糖就行,不是恐怖场合。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '不确定对方是否过圣诞,年底最稳妥的祝福是?',
      options: ['Merry Christmas!', 'Happy Holidays!', 'Happy Birthday!', 'Good luck!'],
      answer: 1,
      explain: '"Happy Holidays" 涵盖年底各节日、不预设宗教,最不容易冒犯。'
    },
    {
      type: 'choice',
      q: '感恩节(Thanksgiving)的时间是?',
      options: ['固定 11月25日', '11月第四个周四', '12月25日', '10月31日'],
      answer: 1,
      explain: '感恩节是 11 月第四个周四,每年具体日期不同,家人团聚吃火鸡。'
    },
    {
      type: 'fill',
      q: '万圣节孩子上门讨糖时会说:"Trick or ____!"',
      answer: ['treat'],
      explain: '"Trick or treat!" 是万圣节讨糖的经典台词,给糖(treat)就好。'
    }
  ]
});
