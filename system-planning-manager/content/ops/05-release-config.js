SPM.registerLesson({
  id: 'ops/05-release-config',
  module: 'ops',
  order: 5,
  title: '发布管理与配置管理',
  minutes: 5,
  keywords: ['发布管理', '配置管理', 'CMDB', '配置项', '关系'],
  concept: '<p><gd data-term="release">发布管理</gd>把一组变更打包测试后部署上线;<gd data-term="config">配置管理</gd>维护所有 <gd data-term="ci">配置项</gd> 及其关系,存于 <gd data-term="cmdb">CMDB</gd>,是多流程的信息底座。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考 CMDB 作用。</p>',
  core: '<ul>' +
    '<li><b>发布</b>:打包 → 测试 → 部署 → 回顾,配回退预案。</li>' +
    '<li><b>配置项</b>:纳入管理的任何组件(硬件/软件/文档/SLA)。</li>' +
    '<li><b>CMDB</b>:存储配置项及关系,支撑事件定位、变更影响评估、容量规划。</li>' +
    '</ul>' +
    '<div class="ex">CMDB 是"IT 家底关系图":出事能快速定位影响面,变更能评估波及范围。</div>',
  pitfalls: '<div class="pit"><b>CMDB 最怕"不准"。</b>数据不维护等于没有;它要靠流程(变更必更新配置)保持鲜活。</div>',
  quiz: [
    { type: 'choice', q: '存储配置项及其相互关系的数据库是?', options: ['CMDB', '服务台', '知识库', '工单'], answer: 0, source: '高频', explain: 'CMDB 是配置管理数据库,记录 CI 及关系。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/04-change">变更管理</a> · 下一课:<a href="#/l/ops/06-sla-mgmt">服务级别管理</a></p>'
});
