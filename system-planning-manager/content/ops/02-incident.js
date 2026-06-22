SPM.registerLesson({
  id: 'ops/02-incident',
  module: 'ops',
  order: 2,
  title: '事件管理',
  minutes: 5,
  key: true,
  keywords: ['事件管理', '快速恢复', '优先级', '服务台', '升级'],
  concept: '<p><gd data-term="incident">事件管理</gd>目标是<b>尽快恢复服务、降低对业务影响</b>,不追根因。任何"不对劲"都可记为事件,经服务台受理、分类、优先级排序、处置、关闭。</p>',
  exam: '<p><b>考纲定位:</b>运营篇最高频,案例必考"事件处理流程"。</p>',
  core: '<ul>' +
    '<li><b>流程</b>:识别记录 → 分类分级 → 优先级 → 诊断处置 → 恢复 → 关闭。</li>' +
    '<li><b>优先级</b>:综合影响度 × 紧急度矩阵确定。</li>' +
    '<li><b>升级</b>:功能升级(转更高技术线)、层级升级(超时上报管理层)。</li>' +
    '<li>处置可引用 <gd data-term="known-error">已知错误</gd> 的临时方案快速恢复。</li>' +
    '</ul>' +
    '<div class="ex">事件管理是"先止血":别在恢复服务时纠结根因,根因留给问题管理。</div>',
  pitfalls: '<div class="pit"><b>事件 ≠ 问题。</b>事件是"服务异常的表象",问题是"根因";事件管理只管尽快恢复。</div>',
  quiz: [
    { type: 'choice', q: '事件管理的首要目标是?', options: ['查明根本原因', '尽快恢复服务降低影响', '发布新版本', '修改配置'], answer: 1, source: '高频', explain: '事件管理目标是快速恢复,治本归问题管理。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/01-overview">运营总览</a> · 下一课:<a href="#/l/ops/03-problem">问题管理</a></p>'
});
