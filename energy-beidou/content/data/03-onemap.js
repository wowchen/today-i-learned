EBD.registerLesson({
  id: 'data-03-onemap',
  module: 'data',
  order: 3,
  title: '电网一张图:把设备、线路、地理对齐',
  minutes: 4,
  key: '协同基础',
  keywords: ['电网一张图', '一张图', '对齐', '协同', '统一'],
  sections: {
    what:
      '<p><gd data-term="yizhangtu">电网一张图</gd>,就是把设备、线路、用户、地理,在统一时空基准下<strong>对齐到同一张图上</strong>,让全公司各部门看的是"同一份底图、同一套坐标"。</p>',
    why:
      '<p>过去各专业(调度、运检、营销、规划)各画各的图,坐标不一、口径不同,同一基塔在不同系统里能标到不同地方,协同起来鸡同鸭讲。"一张图"用统一<gd data-term="shikongjizhun">时空基准</gd>把它们拉齐,<strong>数据一处维护、各处共享</strong>,协同才有共同语言。北斗提供的精确坐标,正是"对得齐"的前提。</p>',
    how:
      '<ul>' +
      '<li><strong>统一底图</strong>:基于 <gd data-term="gis">GIS</gd> 和统一坐标,承载全量设备和线路。</li>' +
      '<li><strong>多源对齐</strong>:各业务数据按位置、时间挂到同一张图上。</li>' +
      '<li><strong>共享应用</strong>:巡检、调度、抢修、规划都在这张图上协同作业。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:一张图就是把各系统的图叠在一起显示。</b>核心是"<strong>对齐</strong>"——统一坐标系、统一时间、统一编码,数据才真能融合。坐标不统一硬叠,只会错位重影,不是真正的一张图。</div>',
    links:
      '<p>· 一张图再进一步就是"会动的镜像":下一课《数字孪生》。<br>· 底座支撑,回看《时空数据底座》。'
  }
});
