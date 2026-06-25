EBD.registerLesson({
  id: 'data-01-base',
  module: 'data',
  order: 1,
  title: '时空数据底座:数字电网的"地基"',
  minutes: 4,
  key: '数据地基',
  keywords: ['时空数据底座', '数字电网', '底座', '统一基准', '数据'],
  sections: {
    what:
      '<p>前面各模块产生了海量带"位置 + 时间"的数据(巡检照片、监测位移、设备坐标、作业轨迹)。把它们在<strong>统一<gd data-term="shikongjizhun">时空基准</gd></strong>下整合起来,形成一个共享的基础平台,就是<gd data-term="shikongshuju">时空数据底座</gd>——数字电网这栋楼的"地基"。</p>',
    why:
      '<p>没有底座,数据就是一座座<strong>孤岛</strong>:巡检的、监测的、调度的各存各的,坐标不一、时间不齐,拼不到一起。有了统一底座,所有数据"<strong>对得齐、连得通</strong>",上层应用(一张图、数字孪生、AI 分析)才能长出来。这也是模块 4 讲的"平台化"在数据层的落地。</p>',
    how:
      '<ul>' +
      '<li><strong>统一基准</strong>:全部数据归到统一坐标系(<gd data-term="cgcs2000">CGCS2000</gd>)和统一时间(北斗授时)。</li>' +
      '<li><strong>汇聚整合</strong>:把设备、地理、量测、作业等时空数据汇到一处。</li>' +
      '<li><strong>对外服务</strong>:以标准接口供各业务调用,避免重复建设。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:时空数据底座就是个大数据库。</b>它的关键不在"存得多",而在"<strong>统一时空基准 + 对齐互通</strong>"。同样的数据,挂不到统一时空上,就还是孤岛,成不了底座。</div>',
    links:
      '<p>· 底座之上的第一层应用:下一课《GIS 与北斗》。<br>· 统一基准的来历,回看模块 2《时空基准》。'
  }
});
