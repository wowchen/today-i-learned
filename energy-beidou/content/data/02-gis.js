EBD.registerLesson({
  id: 'data-02-gis',
  module: 'data',
  order: 2,
  title: 'GIS 与北斗:地图加上"实时坐标"',
  minutes: 4,
  keywords: ['GIS', '地理信息', '地图', '北斗', '坐标'],
  sections: {
    what:
      '<p><gd data-term="gis">GIS(地理信息系统)</gd>是管理和分析地理空间数据的系统——通俗说是一张"<strong>会算账、能查询的活地图</strong>"。电力用它来装设备、线路、地形。北斗给 GIS 补上了关键一块:<strong>精确、实时的坐标</strong>。</p>',
    why:
      '<p>GIS 是"底图",北斗是"<strong>把真实世界精确钉到底图上的钉子</strong>"。设备建在哪、人走到哪、隐患在哪,靠北斗实测坐标落到 GIS 上,地图才从"画的"变成"准的、活的"。两者结合,才有后面的"电网一张图"和各种空间分析。</p>',
    how:
      '<ul>' +
      '<li><strong>静态入图</strong>:用高精度北斗测得的设备、杆塔坐标录入 GIS。</li>' +
      '<li><strong>动态上图</strong>:人员、车辆、无人机的实时北斗位置叠加到 GIS。</li>' +
      '<li><strong>空间分析</strong>:基于位置做距离、缓冲区(如通道保护区)、就近调度等分析。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:GIS 和北斗是一回事。</b>GIS 是"管理和展示空间数据的系统",北斗是"提供精确位置和时间的手段"。GIS 是地图与分析平台,北斗给它喂准确坐标,二者是搭档,不是同一个东西。</div>',
    links:
      '<p>· 把各业务的图统一到一张:下一课《电网一张图》。<br>· 坐标系一致性,回看模块 2《CGCS2000》。'
  }
});
