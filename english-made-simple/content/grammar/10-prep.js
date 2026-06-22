/* 语法模块第 10 课:介词 in/on/at。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-10-prep',
  module: 'grammar',
  order: 10,
  title: '介词难点:in on at 的时间和地点',
  minutes: 5,
  keywords: ['介词', 'preposition', 'in', 'on', 'at', '时间', '地点'],

  sections: {
    what: '\
<p><strong>一句话:in / on / at 是用得最多也最容易错的三个介词,记住它们"由大到小"的范围逻辑,时间和地点都能套。</strong></p>\
<p>诀窍:把它们想成<strong>由大到小的三个圈</strong>。in 最大(大范围),on 中等(具体某面/某天),at 最小(精确一点)。时间和地点共用这套逻辑。</p>',

    when: '\
<p>说什么时间、在什么地点时几乎都要用到。错了不影响理解,但很显"中式"。</p>',

    how: '\
<p><strong>时间:in(大段)→ on(具体某天)→ at(精确时刻)。</strong>(点击听)</p>\
<table>\
<tr><th>介词</th><th>用于</th><th>例</th></tr>\
<tr><td>in</td><td>年/月/季节/上下午</td><td><en>in 2026</en> · <en>in June</en> · <en>in the morning</en></td></tr>\
<tr><td>on</td><td>具体某天/星期/日期</td><td><en>on Monday</en> · <en>on June 10</en></td></tr>\
<tr><td>at</td><td>精确时刻/节点</td><td><en>at 7 o\'clock</en> · <en>at noon</en> · <en>at night</en></td></tr>\
</table>\
<p><strong>地点:同样由大到小。</strong></p>\
<table>\
<tr><td>in</td><td>大空间内部</td><td><en>in New York</en> · <en>in the room</en></td></tr>\
<tr><td>on</td><td>表面/街道</td><td><en>on the table</en> · <en>on Main Street</en></td></tr>\
<tr><td>at</td><td>具体某点</td><td><en>at the door</en> · <en>at the bus stop</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:in the morning 但 at night。</b>上午下午用 in(in the morning/afternoon),唯独"夜里"用 <en>at night</en>。这个不规则,单独记。</div>\
<div class="pit"><b>坑 2:具体某天用 in。</b>"星期一"是 <en>on Monday</en>,"6月10日"是 <en>on June 10</en>,不是 in。具体某天一律 on。</div>\
<div class="pit"><b>坑 3:中文"在"一律套 in。</b>"在桌上"是 on the table(表面),"在门口"是 at the door(某点)。中文都说"在",英文分大小。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"在星期一" 用哪个介词?',
      options: ['in Monday', 'on Monday', 'at Monday', 'to Monday'],
      answer: 1,
      explain: '具体某天(星期、日期)用 on:on Monday、on June 10。'
    },
    {
      type: 'choice',
      q: '下面哪个是固定的"不规则"搭配,要单独记?',
      options: ['in the morning', 'at night', 'in the afternoon', 'on Sunday'],
      answer: 1,
      explain: '上午下午用 in(in the morning/afternoon),但"夜里"偏偏用 at night,要单独记。'
    },
    {
      type: 'fill',
      q: '"在7点钟"(精确时刻)用 ____ 7 o\'clock。',
      answer: ['at'],
      explain: '精确时刻用最小的 at:at 7 o\'clock、at noon。in>on>at 由大到小。'
    }
  ]
});
