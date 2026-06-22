SPM.registerLesson({
  id: 'ops/07-capacity-availability',
  module: 'ops',
  order: 7,
  title: '容量管理与可用性管理',
  minutes: 5,
  key: true,
  keywords: ['容量管理', '可用性管理', 'MTBF', 'MTTR', '可用性公式'],
  concept: '<p><gd data-term="capacity">容量管理</gd>确保资源"够用";<gd data-term="availability">可用性管理</gd>确保服务"该在时一直在"。可用性 A = MTBF /(MTBF+MTTR)。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考<b>可用性计算</b>。</p>',
  core: '<ul>' +
    '<li><b>容量</b>:监测使用率,提前扩容,避免瓶颈引发事件。</li>' +
    '<li><b>可用性指标</b>:MTBF(平均故障间隔)、MTTR(平均修复时间)。</li>' +
    '<li><b>公式</b>:A = MTBF/(MTBF+MTTR);"几个 9":99.9%≈年停机 8.76h。</li>' +
    '<li><b>提升手段</b>:冗余/集群、负载均衡、监控、快速恢复。</li>' +
    '</ul>' +
    '<div class="ex">用本站"服务可用性计算器"练;99.9% 与 99.99% 的年停机差近 10 倍,数字很说明问题。</div>',
  pitfalls: '<div class="pit"><b>可用性"几个 9"是算出来的,不是吹出来的。</b>必须有 MTBF/MTTR 的真实统计支撑。</div>',
  quiz: [
    { type: 'choice', q: '某服务 MTBF=720h、MTTR=4h,可用性约为?', options: ['99.45%', '99.95%', '95%', '90%'], answer: 0, source: '高频', explain: '720/(720+4)=0.99448≈99.45%。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/06-sla-mgmt">服务级别管理</a> · 下一课:<a href="#/l/ops/08-continuity">连续性管理</a> · 实战:<a href="#/l/case/04-sla-availability">SLA 与可用性计算</a></p>'
});
