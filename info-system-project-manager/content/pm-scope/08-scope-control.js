ISPM.registerLesson({
  id: 'pm-scope/08-scope-control',
  module: 'pm-scope',
  order: 8,
  title: '控制范围',
  minutes: 4,
  keywords: ['控制范围', '范围蔓延', '镀金', '偏差分析', '变更控制'],
  concept: '<p>项目做着做着，需求总想加一点、改一点。<b>控制范围</b>就是监督范围状态、管理范围变更，确保所有变更都走<gd data-term="change-control">变更控制</gd>流程，不让范围失控膨胀。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考。最常考<b>范围蔓延</b>和<b>镀金</b>这两个概念的区别。</p>',
  core: '<p><b>控制范围的核心：</b></p>' +
    '<ul><li>通过<b>偏差分析</b>，比较实际范围与范围基准的差异。</li>' +
    '<li>所有范围变更必须通过<b>实施整体变更控制</b>过程处理。</li>' +
    '<li>属于<b>监控过程组</b>。</li></ul>' +
    '<p><b>两个高频概念：</b></p>' +
    '<ul><li><b><gd data-term="scope-creep">范围蔓延</gd>（Scope Creep）</b>：未经控制的范围扩大。客户不断加需求，但没走变更流程。</li>' +
    '<li><b>镀金（Gold Plating）</b>：项目团队<em>主动</em>给客户超出需求的额外功能，自以为是好意，实则增加风险和成本。</li></ul>' +
    '<p>区别：范围蔓延多由<b>外部（客户）</b>不受控加需求引起；镀金是<b>团队自己</b>多做。两者都应避免——任何范围变化都要走变更控制。</p>',
  pitfalls: '<div class="pit"><b>误解 1：镀金是好事，客户会满意。</b> 镀金是团队擅自增加范围，增加成本和风险，可能引入缺陷，且未必是客户想要的，应当避免。</div>' +
    '<div class="pit"><b>误解 2：范围蔓延和镀金是一回事。</b> 范围蔓延由外部（客户）不受控地追加需求引起；镀金由团队内部主动多做引起。来源不同。</div>' +
    '<div class="pit"><b>误解 3：小变更不用走流程。</b> 再小的范围变更也应通过整体变更控制评估影响，否则积少成多导致范围失控。</div>',
  quiz: [
    {
      type: 'choice',
      q: '项目团队主动为客户增加了需求之外的额外功能，这种做法称为：',
      options: ['范围蔓延', '镀金', '渐进明细', '范围确认'],
      answer: 1,
      source: '高频考点',
      explain: '镀金（Gold Plating）指团队主动提供超出需求的额外功能，会增加成本和风险，应当避免。范围蔓延则是外部不受控地追加需求。'
    },
    {
      type: 'choice',
      q: '未经变更控制流程，范围被不受控地逐渐扩大，称为：',
      options: ['镀金', '范围蔓延', '渐进明细', '范围裁剪'],
      answer: 1,
      explain: '范围蔓延（Scope Creep）指未经控制的范围扩大，通常因客户不断追加需求而未走变更流程导致。'
    }
  ],
  links: '<p>相关术语：<gd data-term="scope-creep">范围蔓延</gd>、<gd data-term="change-control">变更控制</gd></p>' +
    '<p>上一课：<a href="#/l/pm-scope/07-scope-validation">确认范围</a> · 进入下一模块：<a href="#/l/pm-schedule/01-schedule-overview">进度管理概述</a></p>'
});
