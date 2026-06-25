EBD.registerLesson({
  id: 'future-02-gps-account',
  module: 'future',
  order: 2,
  title: '替代 GPS 的一笔"安全账"',
  minutes: 4,
  keywords: ['GPS', '替代', '安全账', '风险', '依赖'],
  sections: {
    what:
      '<p>把"为什么要替代 GPS"算成一笔账:依赖外部单一系统,电力要承担三类<strong>看不见但真实的风险成本</strong>;换成北斗为主,就是把这三笔风险买了"保险"。</p>',
    how:
      '<table><tr><th>风险</th><th>依赖 GPS 时</th><th>北斗为主后</th></tr>' +
      '<tr><td>断供</td><td>可能被降精度/关闭</td><td>自主系统,不受制于人</td></tr>' +
      '<tr><td>单点失效</td><td>单一来源,全网同险</td><td>多源互备,分散风险</td></tr>' +
      '<tr><td>被攻击</td><td>受扰/<gd data-term="qipian">欺骗</gd>难自主应对</td><td>可建自主的监测与防护</td></tr></table>' +
      '<p>账面上,北斗替代要投入设备改造和运维成本;但对照"<strong>关键时刻授时失准、保护误动、电网失稳</strong>"可能造成的损失,这笔投入是必要的安全冗余。</p>',
    why:
      '<p>这也解释了替代的<strong>优先级</strong>:授时这种"出错代价极高、又长期依赖 GPS"的环节最先替代;定位、通信类应用逐步跟进。先把风险最大的口子堵上。</p>',
    pitfalls:
      '<div class="pit"><b>误解:多花钱换北斗不划算。</b>这是"<strong>安全冗余</strong>",不是普通采购。命脉行业的逻辑是"不能出事",为降低小概率但高后果的风险付费,本身就划算。</div>',
    links:
      '<p>· 自主之后还要防攻击:下一课《抗干扰与防欺骗》。<br>· 安全账的技术细节,回看模块 5《授时安全》。'
  }
});
