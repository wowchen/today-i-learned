SPM.registerLesson({
  id: 'case/09-real-1',
  module: 'case',
  order: 9,
  title: '真题精解一:运营与可用性',
  minutes: 5,
  keywords: ['真题', '运营', '可用性', '事件问题'],
  concept: '<p>【题型示例】某服务近月多次宕机,MTBF 与 MTTR 变化,问:①当前可用性是否达标 SLA 99.9%?②频繁宕机应启动哪个流程?③改进建议。</p>',
  exam: '<p><b>考纲定位:</b>案例篇,真题样例(非照抄题面)。</p>',
  core: '<ul>' +
    '<li><b>①计算</b>:A = MTBF/(MTBF+MTTR),对比 99.9% 判断达标与否。</li>' +
    '<li><b>②流程</b>:频繁复发→<gd data-term="problem">问题管理</gd>查根因;单次恢复→<gd data-term="incident">事件管理</gd>。</li>' +
    '<li><b>③改进</b>:PDCA——立基线、降 MTTR(监控自愈)、提 MTBF(冗余)、验证。</li>' +
    '</ul>' +
    '<div class="ex">作答示范:"当前 A=99.45%,低于承诺 99.9%,未达标;应启动问题管理查根因;按 PDCA 改进……"</div>',
  pitfalls: '<div class="pit"><b>真题只标年份来源不照抄题面。</b>本课为题型示范,具体题面以官方真题为准。</div>',
  quiz: [
    { type: 'choice', q: '服务频繁复发同类故障,应启动?', options: ['事件管理', '问题管理', '发布管理', '服务台'], answer: 1, source: '真题题型', explain: '频繁复发属问题管理,需查根因治本。' }
  ],
  links: '<p>上一课:<a href="#/l/case/08-answer-template">答题模板</a> · 下一篇:<a href="#/l/case/10-real-2">真题精解二</a></p>'
});
