EBD.registerLesson({
  id: 'asset-06-construction',
  module: 'asset',
  order: 6,
  title: '基建施工进度的时空管理',
  minutes: 4,
  keywords: ['基建', '施工', '进度', '放样', '质量'],
  sections: {
    what:
      '<p>电网基建(建线路、立<gd data-term="ganta">杆塔</gd>、盖变电站)是个大工程。北斗在这里管两头:<strong>精准放样</strong>(把设计图上的点测到地上)和<strong>进度可视</strong>(哪基塔立好了、干到哪了一目了然)。</p>',
    why:
      '<p>线路工程战线长、点位多、分布散,传统进度管理靠人工上报,既滞后又难核实。用北斗:施工放样用 <gd data-term="rtk">RTK</gd> 把塔位精确定到设计坐标;每完成一个节点带<gd data-term="shikongbiaoqian">时空标签</gd>上报,管理者在图上实时看到全线进度和质量留痕。</p>',
    how:
      '<ul>' +
      '<li><strong>放样</strong>:用高精度定位把设计坐标放到实地,塔基位置不跑偏。</li>' +
      '<li><strong>进度打点</strong>:基础、组立、架线等节点完成即带位置时间上报。</li>' +
      '<li><strong>竣工对齐</strong>:实际建成坐标回填,直接成为运维期的<gd data-term="ganta">杆塔坐标库</gd>。</li>' +
      '</ul>' +
      '<div class="ex">妙处在于"<strong>建管一体</strong>":施工期测的精确坐标,竣工后直接变成运维巡检要用的坐标库,数据一次采集、长期受用。</div>',
    pitfalls:
      '<div class="pit"><b>误解:进度管理就是拍照上报。</b>关键是每条记录都<strong>带准确的位置和时间</strong>,才能在图上拼出真实进度、对得上设计、留得下质量证据,而不是一堆无法定位的照片。</div>',
    links:
      '<p>· 建好后的物资和备件怎么管:下一课《仓储与备品备件定位》。<br>· 竣工坐标进运维,回看模块 6《杆塔精准坐标库》。'
  }
});
