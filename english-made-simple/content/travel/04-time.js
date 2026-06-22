/* 旅行模块第 4 课:时间·日期·航班时刻。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-04-time',
  module: 'travel',
  order: 4,
  title: '时间·日期·航班时刻',
  minutes: 5,
  keywords: ['时间', 'time', '日期', 'date', '航班', 'flight', '几点', 'AM', 'PM', 'noon'],

  sections: {
    what: '\
<p><strong>一句话:问登机时间、预约餐厅、确认行程,全靠时间和日期说得准——美国用 12 小时制,AM/PM 和"月/日/年"的顺序是中国人最容易栽的两个点。</strong></p>',

    when: '\
<p>查登机/发车时间、订餐厅和酒店、跟人约见面、确认营业时间。</p>',

    how: '\
<p><strong>① 时间说法(点读):</strong></p>\
<table>\
<tr><th>时间</th><th>美式说法(点读)</th></tr>\
<tr><td>9:15 AM</td><td><en>nine fifteen</en> / <en>a quarter past nine</en></td></tr>\
<tr><td>9:45 AM</td><td><en>nine forty-five</en> / <en>a quarter to ten</en></td></tr>\
<tr><td>7:05 PM</td><td><en>seven oh five PM</en>(0 读 oh)</td></tr>\
<tr><td>12:00 中午</td><td><en>noon</en>(比 twelve PM 更地道)</td></tr>\
<tr><td>12:00 午夜</td><td><en>midnight</en></td></tr>\
</table>\
<div class="ex">🔊 报航班/预约时间,直接说数字最稳:<en>nine forty-five</en> 比 "a quarter to ten" 更清楚、不易误会。</div>\
<p><strong>② 日期:美国是"月/日/年",序数词读法:</strong></p>\
<p>"April 29, 2026" 读作 <en>April twenty-ninth, twenty twenty-six</en>。</p>\
<table>\
<tr><th>写法</th><th>读法(点读)</th></tr>\
<tr><td>1st</td><td><en>first</en></td></tr>\
<tr><td>2nd / 3rd</td><td><en>second</en> / <en>third</en></td></tr>\
<tr><td>5th</td><td><en>fifth</en></td></tr>\
<tr><td>12th</td><td><en>twelfth</en></td></tr>\
<tr><td>29th</td><td><en>twenty-ninth</en></td></tr>\
</table>\
<p><strong>③ 高频问句(点读):</strong></p>\
<table>\
<tr><th>你想说</th><th>English(点读)</th></tr>\
<tr><td>现在几点?</td><td><en>What time is it?</en></td></tr>\
<tr><td>我的航班是早上 9:15。</td><td><en>My flight is at nine fifteen AM.</en></td></tr>\
<tr><td>你们几点开门/关门?</td><td><en>What time do you open and close?</en></td></tr>\
<tr><td>还要等多久?</td><td><en>How long is the wait?</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:日期顺序搞反。</b>美国是<strong>月/日/年</strong>:<en>4/29/2026</en> = 4 月 29 日;英国式才是 29/4。看到 03/04 别想当然,必要时问 <en>Month-day or day-month?</en></div>\
<div class="pit"><b>坑 2:AM/PM 不分。</b>12 小时制下,把早上 9 点的航班记成晚上会误机。报时间习惯带上 <en>AM</en> / <en>PM</en>,或说 <en>in the morning</en> / <en>at night</en>。</div>\
<div class="pit"><b>坑 3:中午说成 twelve AM。</b>中午 12 点是 <en>noon</en>(或 twelve PM),午夜 12 点才是 <en>midnight</en>(twelve AM)。记混就订错时段。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国写法 "4/29/2026" 指的是?',
      options: ['2026 年 4 月 29 日', '2026 年 29 月 4 日', '4 月 2029 日', '29 年 4 月'],
      answer: 0,
      explain: '美式日期是 月/日/年,所以 4/29/2026 = 4 月 29 日。英国式才是 日/月/年。'
    },
    {
      type: 'choice',
      q: '"中午 12 点"最地道的说法是?',
      options: ['twelve AM', 'midnight', 'noon', 'half day'],
      answer: 2,
      explain: 'noon = 中午 12 点;midnight = 午夜 12 点。说 twelve AM 反而指午夜,容易订错。'
    },
    {
      type: 'fill',
      q: '问"现在几点"最简单的一句:"What ____ is it?"',
      answer: ['time'],
      explain: 'What time is it? 是问时间最常用的一句。'
    }
  ]
});
