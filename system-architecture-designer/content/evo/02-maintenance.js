SAD.registerLesson({
  id: 'evo/02-maintenance',
  module: 'evo',
  order: 2,
  title: '架构维护与腐化',
  minutes: 4,
  key: true,
  keywords: ['架构维护', '架构腐化', '技术债', '架构漂移', '违规', '一致性'],
  concept: '<p>系统久了实现会偏离设计,结构变乱、技术债累积,这就是<gd data-term="arch-erosion">架构腐化</gd>。维护的目标之一就是对抗腐化、保持设计与实现一致。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:腐化的成因与对策、技术债概念。</p>',
  core: '<p><b>腐化的表现与成因:</b>为赶进度走捷径、绕过分层直接调用、复制粘贴、缺少文档与评审 → 结构越来越乱,改一处牵一片。</p>' +
    '<table><tr><th>对抗手段</th><th>说明</th></tr>' +
    '<tr><td>架构守护</td><td>依赖规则检查、分层校验(防违规调用)</td></tr>' +
    '<tr><td>持续重构</td><td>定期偿还技术债</td></tr>' +
    '<tr><td>评审与文档</td><td>保持设计与实现一致</td></tr></table>' +
    '<div class="ex">技术债像信用卡:短期借(赶工)爽,长期不还(不重构)利滚利,最终拖垮迭代速度。</div>',
  pitfalls: '<div class="pit"><b>误解:技术债不用管,等重写就行。</b>放任腐化会让系统<b>越来越难改、缺陷越来越多</b>;持续小重构远比"推倒重写"安全划算。</div>',
  quiz: [
    { type: 'choice', q: '实现逐渐偏离设计架构、结构变乱的现象称为?', options: ['架构演化', '架构腐化', '架构重用', '架构评估'], answer: 1, source: '高频', explain: '这是架构腐化(erosion),需靠重构与守护对抗。' }
  ],
  links: '<p>上一课:<a href="#/l/evo/01-evolution">架构演化</a> · 下一课:<a href="#/l/evo/03-web-evolution">大型网站架构演进</a> · 重构:<a href="#/l/evo/04-refactoring">架构重构</a></p>'
});
