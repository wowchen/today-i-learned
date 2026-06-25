EBD.registerLesson({
  id: 'data-04-twin',
  module: 'data',
  order: 4,
  title: '数字孪生:虚拟电网怎么跟真实对上',
  minutes: 4,
  keywords: ['数字孪生', '孪生', '仿真', '镜像', '实时'],
  sections: {
    what:
      '<p><gd data-term="shuziluansheng">数字孪生</gd>,是给真实电网建一个<strong>实时同步的虚拟镜像</strong>:现实里设备状态变了,虚拟模型跟着变。用它来仿真、预测、优化,在虚拟世界里"先演练再动手"。</p>',
    why:
      '<p>数字孪生要"<strong>对得上</strong>",前提就是位置和时间精准:虚拟模型里每台设备的<strong>坐标</strong>要和现实一致(靠北斗定位),状态数据的<strong>时间</strong>要对齐(靠北斗授时)。位置或时间错了,孪生体就和真实电网"对不上号",仿真预测全失真。所以时空精度是数字孪生的根基之一。</p>',
    how:
      '<ul>' +
      '<li><strong>建模</strong>:基于<gd data-term="yizhangtu">一张图</gd>和精确坐标,建立设备、线路的三维/拓扑模型。</li>' +
      '<li><strong>实时映射</strong>:量测、监测数据带统一时间戳实时灌入,镜像随真实变化。</li>' +
      '<li><strong>仿真优化</strong>:在孪生体上推演运行方式、预测风险、优化决策。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:数字孪生就是个三维炫酷模型。</b>关键不在好看,而在"<strong>实时、对得上</strong>"。没有精准的时空对齐和实时数据,再漂亮的模型也只是静态摆设,不是孪生。</div>',
    links:
      '<p>· 这套数据怎么服务于转型:下一课《和新型电力系统怎么融合》。<br>· 一张图基础,回看《电网一张图》。'
  }
});
