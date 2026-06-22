SPM.registerLesson({
  id: 'ops/04-change',
  module: 'ops',
  order: 4,
  title: '变更管理',
  minutes: 5,
  key: true,
  keywords: ['变更管理', '变更类型', 'CAB', '回退', '受控'],
  concept: '<p><gd data-term="change">变更管理</gd>对 IT 环境的新增/修改/删除进行<b>受控评估、审批、实施与回顾</b>,降低变更带来的风险。变更是事故的头号来源。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考变更流程与 CAB。</p>',
  core: '<ul>' +
    '<li><b>变更类型</b>:标准变更(预批准)、普通变更(走审批)、紧急变更(快速通道)。</li>' +
    '<li><b>CAB</b>:<gd data-term="cab">变更顾问委员会</gd>评估重大/高风险变更。</li>' +
    '<li><b>必备</b>:风险评估、<gd data-term="rollback">回退方案</gd>、实施与回顾。</li>' +
    '</ul>' +
    '<div class="ex">任何改动都走变更:先评估、再审批、有回退、后回顾——拒绝"偷偷改"。</div>',
  pitfalls: '<div class="pit"><b>紧急变更≠不走流程。</b>它走快速通道事后补审,仍需评估与回退预案,不能放任。</div>',
  quiz: [
    { type: 'choice', q: '评估重大/高风险变更的跨职能小组是?', options: ['服务台', 'CAB', '研发组', '财务部'], answer: 1, source: '高频', explain: 'CAB 负责评估与批准高风险变更。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/03-problem">问题管理</a> · 下一课:<a href="#/l/ops/05-release-config">发布与配置</a></p>'
});
