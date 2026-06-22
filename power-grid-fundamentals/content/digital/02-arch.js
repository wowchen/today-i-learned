PGF.registerLesson({
  id: 'digital-02-arch',
  module: 'digital',
  order: 2,
  title: '四层架构:感知、网络、平台、应用',
  minutes: 4,
  keywords: ['感知层', '网络层', '平台层', '应用层', '架构', '物联网'],
  sections: {
    what:
      '<p>电力数字化系统可以分为<strong>四层</strong>:</p>' +
      '<table><tr><th>层</th><th>功能</th><th>典型设备/系统</th></tr>' +
      '<tr><td><strong>感知层</strong></td><td>采集物理量</td><td>智能电表、温度传感器、PMU(相量测量)</td></tr>' +
      '<tr><td><strong>网络层</strong></td><td>传输数据</td><td>光纤、电力载波、5G、卫星通信</td></tr>' +
      '<tr><td><strong>平台层</strong></td><td>存储、计算、管理</td><td>数据中台、云平台、物联网平台</td></tr>' +
      '<tr><td><strong>应用层</strong></td><td>服务业务决策</td><td>SCADA、EMS、DMS、营销系统</td></tr></table>',
    why:
      '<p>理解分层架构就能理解"数字化哪里难"——每一层都有自己的技术挑战和投资需求,' +
      '缺一层就会出现"数据断路"。</p>',
    how:
      '<div class="ex"><strong>一条数据的旅程</strong>:某变电站温度传感器检测到变压器温度 85°C(感知层)' +
      ' → 通过光纤传回调度中心(网络层) → 数据中台接收并存储(平台层)' +
      ' → EMS 系统判断超温报警,推送调度员屏幕(应用层)。整个过程在秒级完成。</div>' +
      '<p>电力通信网的特殊性:电网自建了全国最大的专用通信网(光纤骨干网覆盖所有 35kV 以上变电站),' +
      '不依赖公网——因为电网调度数据不能"断网"。</p>',
    pitfalls:
      '<div class="pit"><b>误解:"有了 5G 就什么都能联。"</b>' +
      '5G 适合末梢接入(配电终端、分布式设备),但电网骨干通信仍依赖自建光纤。' +
      '安全性、可靠性和延迟要求决定了不能全靠公网。</div>',
    links:
      '<p>· 下一课讲应用层最核心的系统:SCADA 与 EMS。<br>' +
      '· 模块 12《智能电表》是感知层的典型代表。</p>'
  }
});
