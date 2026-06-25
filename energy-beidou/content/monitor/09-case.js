EBD.registerLesson({
  id: 'monitor-09-case',
  module: 'monitor',
  order: 9,
  title: '一个滑坡预警案例的全流程',
  minutes: 4,
  keywords: ['案例', '滑坡', '预警', '全流程', '杆塔'],
  sections: {
    what:
      '<p>把前八课串起来,走一遍"<strong>山区杆塔旁边坡滑动预警</strong>"的典型流程(为讲清原理的示意场景):某基<gd data-term="ganta">杆塔</gd>建在山坡上,坡体被判定有滑动风险,于是上北斗监测。</p>',
    how:
      '<ol>' +
      '<li><strong>布点</strong>:在坡体上、中、下部和塔基布设北斗监测点,在远处稳固山脊设基准点。</li>' +
      '<li><strong>观测</strong>:各点长期连续接收北斗信号,数据经<gd data-term="duanbaowen">短报文</gd>/网络回传平台。</li>' +
      '<li><strong>解算</strong>:平台相对解算,得到各点逐日<gd data-term="xingbianjiance">位移曲线</gd>,平时基本平稳。</li>' +
      '<li><strong>异动</strong>:连续强降雨后,坡体中部位移明显加快,速率持续上升。</li>' +
      '<li><strong>预警</strong>:超过阈值且在加速,系统发橙色预警。</li>' +
      '<li><strong>处置</strong>:运维单位现场核查、做好防护,必要时调整运行方式、提前安排抢险,避免突然倒塔断电。</li>' +
      '</ol>',
    why:
      '<p>这个流程把全模块的要点都用上了:毫米级精度(模块 3)、稳定基准(本模块)、无网回传(模块 9)、预警闭环。它展示的正是北斗监测的核心价值——<strong>把"突发事故"变成"提前可见、可处置的渐变"</strong>。</p>',
    pitfalls:
      '<div class="pit"><b>说明:</b>本案例为讲解原理的示意流程,具体阈值、分级、响应以各单位实际规程为准。要点是理解"监测—研判—预警—处置"如何形成闭环,而非套用某组具体数字。</div>',
    links:
      '<p>· 模块 7 结束。下一站模块 8《资产与作业管理》,从《时空标签》开始。<br>· 数据回传细节,见模块 9《监测终端用短报文回传数据》。'
  }
});
