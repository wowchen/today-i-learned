EBD.registerLesson({
  id: 'energy-03-autonomy',
  module: 'energy',
  order: 3,
  title: '自主可控:为什么一定要换掉 GPS',
  minutes: 4,
  key: '战略要害',
  keywords: ['自主可控', 'GPS', '替代', '安全', '卡脖子', '授时'],
  sections: {
    what:
      '<p>过去电力很多<gd data-term="shoushi">授时</gd>、定位用的是 GPS。<gd data-term="zizhukekong">自主可控</gd>的核心诉求很直白:<strong>把"时与空"这条命脉,从别人手里换到自己的北斗上</strong>。</p>',
    why:
      '<p>因为电力是<strong>关键基础设施</strong>,而 GPS 由他国掌控,存在两类风险:</p>' +
      '<ul>' +
      '<li><strong>被动受制</strong>:对方可在特定区域、特定时段降低精度甚至关闭民用信号,关键时刻"断供"。</li>' +
      '<li><strong>安全隐患</strong>:依赖外部系统,授时一旦被扰乱或欺骗,继电保护、录波、调度都可能跟着出问题。</li>' +
      '</ul>' +
      '<p>把授时源换成北斗,等于<strong>把命门攥回自己手里</strong>。这也是国家层面推动"重要行业北斗替代 GPS"的根本逻辑。</p>',
    how:
      '<ul>' +
      '<li><strong>授时优先替代</strong>:变电站、调度等的授时装置由"GPS 单源"改为"北斗为主、多源备份"。</li>' +
      '<li><strong>定位与通信跟进</strong>:巡检、监测、作业终端用北斗,无网区域用<gd data-term="duanbaowen">短报文</gd>。</li>' +
      '<li><strong>不是排斥多系统</strong>:工程上常北斗 + GPS 兼容互备,但<strong>主用、可信源必须是北斗</strong>,确保任何时候有自己的底牌。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:自主可控就是禁用 GPS。</b>不是排斥,而是<strong>不依赖</strong>:平时可多系统互备,但要保证"别人没了我也行"。主用授时源、关键链路要落到北斗。</div>',
    links:
      '<p>· 替代 GPS 的"安全账"细算,见模块 11《替代 GPS 的一笔"安全账"》。<br>· 授时为什么不能只押 GPS,见模块 5《为什么不能把授时全押在 GPS 上》。'
  }
});
