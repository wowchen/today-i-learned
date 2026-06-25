EBD.registerLesson({
  id: 'asset-08-geofence',
  module: 'asset',
  order: 8,
  title: '高风险区电子围栏:越界就报警',
  minutes: 4,
  key: '作业安全',
  keywords: ['电子围栏', 'geofence', '越界', '报警', '带电', '外破'],
  sections: {
    what:
      '<p><gd data-term="dianziweilan">电子围栏</gd>就是在地图上划一圈虚拟边界,<strong>有人或机械越界、进出就自动报警</strong>。在电力里,它常用来圈两类区域:<strong>带电危险区</strong>(防人员误入)和<strong>线路保护区</strong>(防大型机械外破)。</p>',
    why:
      '<p>对上两大安全痛点:</p>' +
      '<ul>' +
      '<li><strong>人员防误入</strong>:作业时圈出带电间隔/区域,人一旦靠近就预警,防触电。</li>' +
      '<li><strong>防外力破坏</strong>:在<gd data-term="shudiantongdao">输电通道</gd>保护区设围栏,吊车、挖掘机闯入就报警,把"事后追责"变"<strong>事前拦截</strong>"。</li>' +
      '</ul>',
    how:
      '<ul>' +
      '<li><strong>划界</strong>:基于设备/通道精确坐标,在系统里设定虚拟边界。</li>' +
      '<li><strong>判越界</strong>:人员终端、施工机械定位实时和边界比对。</li>' +
      '<li><strong>报警联动</strong>:越界即声光提醒、平台告警,必要时通知现场和管理方。室内区域配<gd data-term="shineidingwei">室内定位</gd>实现。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:电子围栏是真装了一圈电网/栏杆。</b>它是<strong>软件上的虚拟边界 + 定位比对</strong>,靠位置触发报警,不是物理围栏。效果取决于定位精度和报警响应,得配套到位。</div>',
    links:
      '<p>· 模块 8 结束。下一站模块 9《短报文与应急通信》,从《短报文是什么》开始。<br>· 防外破也回看模块 6《输电通道巡检》。'
  }
});
