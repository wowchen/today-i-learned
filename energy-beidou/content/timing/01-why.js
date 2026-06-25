EBD.registerLesson({
  id: 'timing-01-why',
  module: 'timing',
  order: 1,
  title: '电网为什么对"时间"这么较真',
  minutes: 4,
  key: '授时总钥匙',
  keywords: ['授时', '时间', '同步', '为什么', '电网'],
  sections: {
    what:
      '<p>电网是个高速运转、瞬时平衡的系统。出了事,往往在<strong>几毫秒到几十毫秒</strong>内连锁发生。要弄清"谁先谁后、谁是元凶",全网设备就必须对准<strong>同一块表</strong>,误差小到微秒。这就是电力对<gd data-term="shoushi">授时</gd>近乎苛刻的原因。</p>',
    why:
      '<p>三件大事全押在"时间对得齐"上:</p>' +
      '<ul>' +
      '<li><strong>保护动作</strong>:线路<gd data-term="chadong">差动保护</gd>比较两端电流,两端采样必须对准同一刻,差几微秒就可能误判。</li>' +
      '<li><strong>事故复盘</strong>:各处<gd data-term="guzhangluobo">故障录波</gd>和<gd data-term="soe">事件记录</gd>要拼出"事件时间线",时标不齐就拼错因果。</li>' +
      '<li><strong>广域感知</strong>:<gd data-term="pmu">同步相量测量</gd>要把全网各点的电气量"同一时刻"拍下来对比,没有统一时间就无从谈起。</li>' +
      '</ul>',
    how:
      '<p>这块"全网统一的表",过去多来自 GPS,如今正大规模换成北斗:卫星把精准时间播下来,站里的授时装置输出标准时刻和秒脉冲(1PPS),全站设备据此对齐。</p>',
    pitfalls:
      '<div class="pit"><b>误解:对时嘛,差几秒无所谓。</b>电力要的是<strong>微秒级</strong>。差动保护、行波测距对时间的敏感,是"差 1 微秒、测距偏几百米"的量级,绝不是"差几秒没关系"。</div>',
    links:
      '<p>· 到底要准到什么程度?下一课《同步要多准:从毫秒到纳秒》。<br>· 这把"总钥匙"是怎么从卫星送到设备的,回看模块 2《授时原理》。'
  }
});
