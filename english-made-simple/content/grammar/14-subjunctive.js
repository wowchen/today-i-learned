/* 语法模块第 14 课:虚拟语气。语法模块收官。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-14-subjunctive',
  module: 'grammar',
  order: 14,
  title: '虚拟语气:If I were you…',
  minutes: 5,
  keywords: ['虚拟语气', 'subjunctive', 'if I were', '假设', '条件句', 'would'],

  sections: {
    what: '\
<p><strong>一句话:虚拟语气用来说"和事实相反的假设"——不是真的,只是想象。标志是动词"往回退一个时态",并配 would。</strong></p>\
<p>真实条件:如果明天下雨(可能发生)。虚拟假设:如果我是你(我不可能是你,纯想象)。英语用不同的动词形式区分这两种"如果",这是语法模块最后、也是让表达变高级的一招。</p>',

    when: '\
<p>给建议(If I were you…)、表达遗憾、说不可能的假设、做白日梦时。</p>',

    how: '\
<p><strong>与现在事实相反:If + 过去式,主句 would + 原形。</strong>(点击听)</p>\
<div class="ex"><en>If I were you, I would tell her.</en> 如果我是你,我会告诉她。(我不是你)<br>\
<en>If I had money, I would buy a car.</en> 如果我有钱,我会买车。(其实没钱)<br>\
📌 注意:虚拟里 be 动词一律用 <strong>were</strong>,连 I/he 也用 were(If I were…,不是 was)。</div>\
<p><strong>对比真实条件句(回顾第 12 课):</strong></p>\
<table>\
<tr><th></th><th>真实条件(可能发生)</th><th>虚拟(与事实相反)</th></tr>\
<tr><td>形式</td><td>If + 现在式, will</td><td>If + 过去式, would</td></tr>\
<tr><td>例</td><td><en>If it rains, I will stay.</en></td><td><en>If I were rich, I would travel.</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:If I was。</b>虚拟语气里 be 一律用 were:<en>If I were you</en>,正式英语不说 "If I was you"。这是虚拟的招牌标志。</div>\
<div class="pit"><b>坑 2:虚拟和真实条件混。</b>"如果明天下雨"(可能)用 If it rains, I will…;"如果我是鸟"(不可能)用 If I were a bird, I would…。看是不是真有可能。</div>\
<div class="pit"><b>坑 3:主句忘了 would。</b>虚拟主句要用 would + 原形:<en>I would tell her</en>,不是 "I will tell" 也不是 "I told"。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"如果我是你,我会告诉她" 正确的是?',
      options: ['If I am you, I will tell her', 'If I were you, I would tell her', 'If I was you, I will tell her', 'If I be you, I would tell'],
      answer: 1,
      explain: '与事实相反的假设:If + 过去式(were)+ would + 原形。be 一律用 were。'
    },
    {
      type: 'choice',
      q: '虚拟语气里 be 动词的特殊规则是?',
      options: ['一律用 is', '一律用 were(连 I/he 也是)', '一律用 was', '不用 be 动词'],
      answer: 1,
      explain: '虚拟语气里 be 一律用 were:If I were…、If he were…。这是虚拟的招牌标志。'
    },
    {
      type: 'fill',
      q: '"如果我有钱,我会买车":If I had money, I ____ buy a car.(填情态动词)',
      answer: ['would'],
      explain: '虚拟主句用 would + 动词原形:I would buy a car。与现在事实相反(其实没钱)。'
    }
  ]
});
