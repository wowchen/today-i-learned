/* 词汇模块第 6 课:高频词 + 选词表。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-06-highfreq',
  module: 'vocab',
  order: 6,
  title: '高频词撑起半边天 + 怎么选词表',
  minutes: 5,
  keywords: ['高频词', 'high frequency', '词频', '词表', '2000词', '选词表'],

  sections: {
    what: '\
<p><strong>一句话:英语里最常用的 1000 个词,覆盖了日常文本的约 80%。先吃透高频词,投入产出比最高。</strong></p>\
<p>词汇不是越多越好,而是越"常用"越值钱。与其背一堆冷僻大词,不如把 <en>get</en>、<en>make</en>、<en>thing</en>、<en>way</en> 这些到处都是的词彻底用熟。这一课告诉你抓重点的策略,和怎么挑一份靠谱词表。</p>',

    when: '\
<p>制定背词计划时用。先确认自己把高频词掌握牢了,再往专业/进阶词扩展。</p>',

    how: '\
<p><strong>高频词的特点:短、百搭、一词多义。</strong>看几个"劳模词"(点击听),它们能组合出无数表达:</p>\
<table>\
<tr><th>高频词</th><th>能组出</th></tr>\
<tr><td><en>get</en></td><td>get up 起床 · get it 懂了 · get there 到达</td></tr>\
<tr><td><en>make</en></td><td>make sense 讲得通 · make money · make a call</td></tr>\
<tr><td><en>take</en></td><td>take a break 休息 · take time · take care</td></tr>\
<tr><td><en>thing</en></td><td>the thing is… 问题是 · do my own thing</td></tr>\
</table>\
<div class="ex">📋 怎么选词表(挑一份就够,别贪多):<br>\
• 零基础:<strong>NGSL</strong>(New General Service List,约 2800 高频词)或牛津 3000;<br>\
• 想看美剧/口语:按"电影台词高频词表"练;<br>\
• 别选"GRE/考研红宝书"当起步——那是冲刺词,不是地基。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:追求"大词"显水平。</b>母语者日常用的全是高频小词。<en>get</en> 用得溜,比会十个生僻同义词管用。</div>\
<div class="pit"><b>坑 2:同时背好几份词表。</b>选一份、过完、再换。来回横跳哪份都背不完。</div>\
<div class="pit"><b>坑 3:只背词不学搭配。</b>高频词的价值全在搭配里(get/make/take 后面跟什么)。下一课专门讲搭配。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '为什么要优先背高频词?',
      options: ['它们最难', '最常用的约1000词覆盖日常文本约80%,投入产出比最高', '它们最长', '考试只考这些'],
      answer: 1,
      explain: '高频词覆盖面极广,先吃透它们,用最少的词应对最多的场景,性价比最高。'
    },
    {
      type: 'choice',
      q: '零基础选词表,下面哪个最不合适当起步?',
      options: ['牛津 3000', 'NGSL 高频词表', 'GRE 红宝书', '电影高频词表'],
      answer: 2,
      explain: 'GRE 是冲刺级难词,不是地基。零基础应从牛津3000、NGSL 这类高频词表起步。'
    },
    {
      type: 'fill',
      q: '高频动词 make + sense = "讲得通",这种"动词+名词"的固定组合叫 ____。',
      answer: ['搭配', 'collocation', '搭配collocation'],
      explain: '固定组合叫搭配(collocation)。高频词的价值大半在搭配里,下一课专讲。'
    }
  ]
});
