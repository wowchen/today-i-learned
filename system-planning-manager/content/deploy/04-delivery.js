SPM.registerLesson({
  id: 'deploy/04-delivery',
  module: 'deploy',
  order: 4,
  title: '服务交付与试运行',
  minutes: 4,
  keywords: ['服务交付', '试运行', '割接', '数据迁移'],
  concept: '<p>服务交付是"把服务正式交给客户用"的关键动作:完成<b>数据迁移、系统割接、试运行</b>,边跑边校验 SLA 是否能达成。</p>',
  exam: '<p><b>考纲定位:</b>部署篇,案例常考"割接与试运行要点"。</p>',
  core: '<ul>' +
    '<li><b>数据迁移</b>:迁移、校验、保留回退能力。</li>' +
    '<li><b>割接</b>:选低峰窗口、制定步骤与回退预案。</li>' +
    '<li><b>试运行</b>:观察指标、收集问题、验证 SLA 达标后转正。</li>' +
    '</ul>' +
    '<div class="ex">割接三件套:计划、窗口、<gd data-term="rollback">回退方案</gd>——任一缺失都是赌。</div>',
  pitfalls: '<div class="pit"><b>没有回退预案的割接等于裸奔。</b>一旦失败无法快速恢复,直接违约 SLA。</div>',
  quiz: [
    { type: 'choice', q: '服务割接必须预先准备的是?', options: ['回退方案', '广告', '加薪', '团建'], answer: 0, source: '高频', explain: '割接须有回退预案,确保失败可快速恢复。' }
  ],
  links: '<p>上一课:<a href="#/l/deploy/03-tech-prep">技术准备</a> · 下一课:<a href="#/l/deploy/05-acceptance">转产验收</a></p>'
});
