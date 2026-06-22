SPM.registerLesson({
  id: 'case/08-answer-template',
  module: 'case',
  order: 8,
  title: '案例答题模板与套路',
  minutes: 5,
  key: true,
  keywords: ['答题模板', '套路', '分点', '流程名'],
  concept: '<p>案例答题有固定套路可套。<b>三步法</b>:①定性(这是什么问题/该走什么流程)→ ②列点展开(步骤+角色+指标)→ ③小结/建议。计算题加:公式→代入→结果。</p>',
  exam: '<p><b>考纲定位:</b>案例篇方法,提分利器。</p>',
  core: '<p><b>常用模板:</b></p>' +
    '<ul>' +
    '<li><b>流程题</b>:"该场景应走 XX 管理流程,步骤为:识别→分类→处置→关闭,关键角色是…,指标是…"</li>' +
    '<li><b>设计题</b>:"从战略对齐/需求/SLA/资源四要素展开,本场景…"</li>' +
    '<li><b>改进题</b>:"按 PDCA:Plan…/Do…/Check…/Act…"</li>' +
    '<li><b>计算题</b>:公式 → 代入 → 计算 → 结论(是否达标/需几人)。</li>' +
    '</ul>' +
    '<div class="ex">记住:先报"流程名/方法名",阅卷一眼看到得分词,再展开细节。</div>',
  pitfalls: '<div class="pit"><b>别堆砌无关知识。</b>紧扣题目场景答,跑题再多字也不得分。</div>',
  quiz: [
    { type: 'choice', q: '案例答题三步法的第一步是?', options: ['直接列点', '定性(判断问题/流程)', '写公式', '小结'], answer: 1, source: '方法', explain: '先定性点明流程/问题,再展开列点。' }
  ],
  links: '<p>上一课:<a href="#/l/case/07-cost-staffing">成本与人力</a> · 下一篇:<a href="#/l/case/09-real-1">真题精解一</a></p>'
});
