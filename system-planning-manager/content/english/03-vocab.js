SPM.registerLesson({
  id: 'english/03-vocab',
  module: 'english',
  order: 3,
  title: '真题高频词与短语',
  minutes: 4,
  keywords: ['高频词', '短语', '词汇'],
  concept: '<p>真题英语题高频词集中在服务生命周期与流程:<b>service/incident/problem/change/configuration/release/availability/capacity/continuity/improvement</b>等。记牢这些即可覆盖多数题。</p>',
  exam: '<p><b>考纲定位:</b>英语篇,词汇。</p>',
  core: '<ul>' +
    '<li><b>流程词</b>:incident 事件、problem 问题、change 变更、release 发布。</li>' +
    '<li><b>能力词</b>:availability 可用性、capacity 容量、continuity 连续性、reliability 可靠性。</li>' +
    '<li><b>改进词</b>:improvement 改进、measurement 测量、baseline 基线。</li>' +
    '</ul>' +
    '<div class="ex">这些词既是术语也是英语题主角;一举两得。</div>',
  pitfalls: '<div class="pit"><b>注意形近词</b>:continuity(连续性) vs continuity(同)与 capability(能力) vs capacity(容量),别看走眼。</div>',
  quiz: [
    { type: 'choice', q: '"可用性"对应的英文是?', options: ['capacity', 'availability', 'change', 'release'], answer: 1, source: '高频', explain: 'availability = 可用性;capacity = 容量。' }
  ],
  links: '<p>上一课:<a href="#/l/english/02-reading">阅读技巧</a> · 实战:<a href="#/l/case/01-overview">案例分析总览</a></p>'
});
