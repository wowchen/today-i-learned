NPD.registerLesson({
  id: 'comm/01-signal',
  module: 'comm',
  order: 1,
  title: '信号:模拟、数字与带宽',
  minutes: 4,
  keywords: ['信号', '模拟', '数字', '带宽', '基带', '频带'],
  concept: '<p><b>信号</b>是信息的物理载体。按取值是否连续分两类:</p>' +
    '<ul><li><b>模拟信号</b>:时间和幅度都连续,如话音波形。</li>' +
    '<li><b>数字信号</b>:取离散值(常用 0/1),计算机与数据通信的主角。</li></ul>' +
    '<div class="ex">数据通信研究的是<b>数字信号</b>怎么在各种介质上搬过去、且对方能正确还原。</div>',
  exam: '<p><b>频度:中。</b>综合知识偶考信号分类、基带/频带传输区分。属基础概念题。</p>',
  core: '<p><b>三个关键概念:</b></p>' +
    '<ul>' +
    '<li><b>基带传输</b>:直接把数字信号的电平送上信道,不搬移频率(局域网常用)。</li>' +
    '<li><b>频带传输</b>:用<gd data-term="modulation">调制</gd>把信号搬移到载波频段再传(无线/电话线)。</li>' +
    '<li><b><gd data-term="bandwidth">带宽</gd></b>:既指信号占的频率范围(Hz),也常指信道最高速率(bps),语境区分。</li>' +
    '</ul>' +
    '<p class="ex">带宽单位要分清:<b>Hz</b> 是模拟/物理带宽,<b>bps</b> 是数字数据率;二者通过编码与定理相关但不相等。</p>',
  pitfalls: '<div class="pit"><b>易混:带宽(Hz) ≠ 速率(bps)。</b>奈奎斯特/香农定理才把"Hz 带宽"换算成"bps 上限"。</div>' +
    '<div class="pit"><b>易混:基带 vs 频带。</b>基带是"原样直传",频带是"搭车(载波)再传"。</div>',
  quiz: [
    { type: 'choice', q: '下列关于模拟与数字信号正确的是?', options: ['模拟信号幅度离散', '数字信号幅度连续', '数字信号取离散值(如0/1)', '两者无区别'], answer: 2, source: '基础', explain: '数字信号取离散值,模拟信号连续。' },
    { type: 'choice', q: '局域网以太网通常采用?', options: ['频带传输', '基带传输', '光载波调制', '跳频传输'], answer: 1, source: '基础', explain: '以太网用基带传输,直接送数字电平。' }
  ],
  links: '<p>下一课:<a href="#/l/comm/02-encoding-modulation">编码与调制</a> · 关联定理:<a href="#/l/comm/04-nyquist-shannon">奈氏与香农</a></p>'
});
