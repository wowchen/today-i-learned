SPM.registerLesson({
  id: 'guide/02-learning-path',
  module: 'guide',
  order: 2,
  title: '学习路线:基础→核心→进阶→实战',
  minutes: 5,
  keywords: ['学习路线', '复习顺序', '动线'],
  concept: '<p>本站 18 个模块按推荐动线排列:<b>基础(够用)→ 核心(ITSS 服务全流程)→ 进阶(团队/营销/工具/标准)→ 实战(案例)</b>。跟着首页顺序走即可。</p>',
  exam: '<p><b>考纲定位:</b>方法课。明确"哪块多花时间"。</p>',
  core: '<p><b>权重分配建议:</b></p>' +
    '<ul>' +
    '<li><b>核心 ITSS(itss/plan/deploy/ops/improve)</b>:重中之重,选择与案例都靠它,投入最多。</li>' +
    '<li><b>基础(comp/net/db/sec)</b>:综合知识里的常识题,理解即可,不深挖。</li>' +
    '<li><b>进阶(supervise/people/market/pm/tech/standard/english)</b>:补全选择题面。</li>' +
    '<li><b>实战(case)</b>:最后冲刺,练答题套路与计算。</li>' +
    '</ul>' +
    '<div class="ex">记忆口诀:<b>规划设计→部署实施→运营管理→持续改进→监督管理</b>,这条服务生命周期主线背熟,全书都串起来了。</div>',
  pitfalls: '<div class="pit"><b>别在基础技术上钻牛角尖。</b>本考不是考架构师/系分,技术题点到为止,把时间留给服务管理。</div>',
  quiz: [
    { type: 'choice', q: '本科目复习应投入最多精力的是?', options: ['计算机硬件', 'IT 服务管理(ITSS)', '高等数学', '编程'], answer: 1, source: '常识', explain: 'ITSS 服务全流程是核心,选择与案例都考。' }
  ],
  links: '<p>上一课:<a href="#/l/guide/01-exam-intro">考试介绍</a> · 下一课:<a href="#/l/guide/03-strategy">备考策略</a></p>'
});
