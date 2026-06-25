EBD.registerLesson({
  id: 'inspect-08-indoor',
  module: 'inspect',
  order: 8,
  title: '变电站室内定位:卫星照不到怎么办',
  minutes: 4,
  keywords: ['室内定位', 'UWB', '蓝牙', '变电站', '无缝'],
  sections: {
    what:
      '<p>北斗信号进不了厚墙包裹的室内:变电站主控楼、开关室、电缆隧道里，卫星基本"失灵"。这时靠<gd data-term="shineidingwei">室内定位</gd>接力——用蓝牙、UWB(超宽带)、5G 等地面手段,在室内继续给出位置。</p>',
    why:
      '<p>室内恰恰是<strong>高风险区</strong>:带电设备密集,走错一个间隔可能酿成事故。室内定位能确认"作业人员在不在正确的设备间隔、有没有误入带电区",把模块 8 要讲的"到位管控、<gd data-term="dianziweilan">电子围栏</gd>"延伸进室内。</p>',
    how:
      '<ul>' +
      '<li><strong>室外北斗、室内接力</strong>:出门用北斗,进楼自动切到室内定位,做到"室内外无缝"。</li>' +
      '<li><strong>技术按需</strong>:要厘米级(精确到间隔)用 UWB;要大致楼层区域用蓝牙信标,成本低。</li>' +
      '<li><strong>统一坐标</strong>:室内坐标和室外北斗坐标对齐到同一套基准,位置才能连成一条完整轨迹。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:北斗能搞定室内定位。</b>卫星导航本质上<strong>室内不可用</strong>。室内定位是另一套技术,北斗负责室外、并提供统一的坐标和<gd data-term="shoushi">时间基准</gd>把两者拼起来。</div>',
    links:
      '<p>· 巡检数据怎么自动带上位置和时间:下一课《巡检数据的时空标签》。<br>· 室内外无缝的未来方案,见模块 11《北斗 + 5G》。'
  }
});
