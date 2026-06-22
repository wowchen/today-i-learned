/* 词汇模块第 10 课:功能词包·时间/日期。架构点名项。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-10-time',
  module: 'vocab',
  order: 10,
  title: '功能词包·时间、日期、星期、月份',
  minutes: 5,
  keywords: ['时间', 'time', '日期', 'date', '星期', '月份', 'months', '功能词'],

  sections: {
    what: '\
<p><strong>一句话:报时间、说日期是天天要用的刚需,美式有自己的固定说法和顺序(尤其日期是"月-日-年",和中文相反)。</strong></p>\
<p>约会、订票、问"几点了"全靠这些。这一课把读钟点、说日期、星期月份一次配齐,全部可点读。</p>',

    when: '\
<p>问时间、约时间、填表写日期、说生日和节日时。</p>',

    how: '\
<p><strong>读钟点:先时后分,直接连读最常用。</strong>(点击听)</p>\
<div class="ex"><en>7:15</en> → seven fifteen(或 a quarter past seven)<br>\
<en>9:30</en> → nine thirty(或 half past nine)　|　<en>10:45</en> → ten forty-five(或 a quarter to eleven)<br>\
上下午:<en>7 a.m.</en> 早7点 · <en>7 p.m.</en> 晚7点 · <en>noon</en> 中午 · <en>midnight</en> 午夜</div>\
<p><strong>美式日期顺序:月 → 日 → 年。</strong></p>\
<div class="ex"><en>June 10, 2026</en> → June tenth, twenty twenty-six(日要读序数:tenth)<br>\
数字写法 <en>6/10/2026</en> 在美国是"6月10日"(注意:英式是日/月,顺序相反!)</div>\
<p><strong>星期与月份(点击听):</strong></p>\
<div class="ex">周:<en>Monday</en> <en>Tuesday</en> <en>Wednesday</en> <en>Thursday</en> <en>Friday</en> <en>Saturday</en> <en>Sunday</en><br>\
月:<en>January</en> <en>February</en> <en>March</en> <en>April</en> <en>May</en> <en>June</en> <en>July</en> <en>August</en> <en>September</en> <en>October</en> <en>November</en> <en>December</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:日期顺序搞反。</b>美式是<strong>月/日/年</strong>。<en>6/10/2026</en> 在美国=6月10日,在英国=10月6日。跨国沟通最好写全月份名。</div>\
<div class="pit"><b>坑 2:日期读基数。</b>日要读<strong>序数</strong>:June 10 读 "June tenth",不是 "June ten"。</div>\
<div class="pit"><b>坑 3:星期月份首字母不大写。</b>英语里 Monday、June 永远首字母大写,这点和中文习惯不同,写作别漏。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美式日期 6/10/2026 表示?',
      options: ['10月6日', '6月10日', '2026个6月', '无法确定'],
      answer: 1,
      explain: '美式顺序是月/日/年,所以 6/10 = 6月10日。英式则相反(日/月)。'
    },
    {
      type: 'choice',
      q: '"June 10" 里的 10 应该读作?',
      options: ['ten', 'tenth(序数)', 'the ten', 'number ten'],
      answer: 1,
      explain: '日期里"日"读序数:June tenth。不读基数 ten。'
    },
    {
      type: 'fill',
      q: '一周的第一个工作日"星期一"是 ____(注意首字母大写)。',
      answer: ['Monday', 'monday'],
      explain: 'Monday。英语里星期和月份名永远首字母大写。'
    }
  ]
});
