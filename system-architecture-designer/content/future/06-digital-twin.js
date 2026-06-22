SAD.registerLesson({
  id: 'future/06-digital-twin',
  module: 'future',
  order: 6,
  title: '数字孪生与边缘计算',
  minutes: 4,
  keywords: ['数字孪生', '边缘计算', '仿真', '实时同步', '云边协同'],
  concept: '<p><gd data-term="digital-twin">数字孪生</gd>为物理实体建可实时同步的虚拟镜像,用于仿真、监控与优化;<b>边缘计算</b>把算力下沉到设备附近,降时延、省带宽。两者常在工业互联网协同。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(新技术)。重点:数字孪生用途、边缘vs云。</p>',
  core: '<table><tr><th>技术</th><th>解决什么</th></tr>' +
    '<tr><td>数字孪生</td><td>在虚拟世界预演与优化物理系统(产线、城市、设备)</td></tr>' +
    '<tr><td>边缘计算</td><td>就近处理,降低上云延迟与带宽,提升实时性</td></tr></table>' +
    '<div class="ex"><b>云边协同</b>:边缘做实时处理与初步分析,云端做全局训练、汇总与长期存储;数字孪生靠边缘实时采集 + 云端建模仿真。</div>',
  pitfalls: '<div class="pit"><b>误解:边缘计算会取代云计算。</b>两者<b>互补协同</b>:边缘管实时近场,云管全局与重计算,不是替代关系。</div>',
  quiz: [
    { type: 'choice', q: '把计算下沉到靠近数据源处以降低时延的是?', options: ['云计算', '边缘计算', '数字孪生', '区块链'], answer: 1, source: '高频', explain: '边缘计算就近处理,降低延迟与带宽消耗。' }
  ],
  links: '<p>上一课:<a href="#/l/future/05-blockchain">区块链</a> · 下一课:<a href="#/l/future/07-new-tech">综合新技术辨析</a> · 物联网:<a href="#/l/future/03-iot">物联网架构</a></p>'
});
