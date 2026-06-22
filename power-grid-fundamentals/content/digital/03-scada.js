PGF.registerLesson({
  id: 'digital-03-scada',
  module: 'digital',
  order: 3,
  title: 'SCADA 与 EMS:调度的眼睛和大脑',
  minutes: 4,
  keywords: ['SCADA', 'EMS', '监控', '调度自动化', '状态估计'],
  sections: {
    what:
      '<p>调度中心有两个核心系统:</p>' +
      '<table><tr><th>系统</th><th>全称</th><th>功能</th></tr>' +
      '<tr><td><strong>SCADA</strong></td><td>数据采集与监控系统</td>' +
      '<td>"眼睛":实时采集电网各节点的电压、电流、功率、开关状态</td></tr>' +
      '<tr><td><strong>EMS</strong></td><td>能量管理系统</td>' +
      '<td>"大脑":在 SCADA 数据基础上做分析、预警、优化决策</td></tr></table>',
    why:
      '<p>没有 SCADA,调度员看不到电网实际运行状态;没有 EMS,调度员只能凭经验判断。' +
      '两者配合才能实现"看得清、算得准、控得住"。</p>',
    how:
      '<p>EMS 的典型功能(不需要记名词,理解功能即可):</p>' +
      '<ul>' +
      '<li><strong>状态估计</strong>:根据部分量测数据推算出整个电网的运行状态;</li>' +
      '<li><strong>安全分析</strong>:模拟"如果某条线路跳闸,电网会怎样";</li>' +
      '<li><strong>经济调度</strong>:在保证安全的前提下,让发电成本最低;</li>' +
      '<li><strong>AGC</strong>:自动发指令调节发电机出力,保持频率稳定。</li>' +
      '</ul>' +
      '<div class="ex">SCADA 的数据刷新周期:通常 2~4 秒采集一次——调度员看到的是"近实时"画面,' +
      '不是真正的实时。对于需要毫秒级响应的场景(如继电保护),有更快的专用系统。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"SCADA 就是大屏幕。"</b>' +
      '大屏只是展示界面,背后是一整套数据采集、传输、处理的系统。' +
      '中国的调度自动化系统(D5000/OS2 等)是自主研发的,技术水平世界领先。</div>',
    links:
      '<p>· 下一课讲配电侧的 DMS——配网的"SCADA+EMS"。<br>' +
      '· 模块 6《调度》讲 SCADA/EMS 背后的业务逻辑。</p>'
  }
});
