SPM.registerLesson({
  id: 'ops/08-continuity',
  module: 'ops',
  order: 8,
  title: 'IT 服务连续性管理',
  minutes: 5,
  keywords: ['连续性管理', 'RTO', 'RPO', '灾备', 'BCP'],
  concept: '<p><gd data-term="continuity">连续性管理</gd>确保灾难发生后服务能在约定时间内恢复。两条红线:<gd data-term="rto">RTO</gd>(最长停机)、<gd data-term="rpo">RPO</gd>(可丢数据量),并配套 <gd data-term="bcp">BCP</gd> 与演练。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考 RTO/RPO 含义与备份策略。</p>',
  core: '<ul>' +
    '<li><b>RTO</b>:恢复时间目标——多快恢复服务。</li>' +
    '<li><b>RPO</b>:恢复点目标——最多丢多久的数据。</li>' +
    '<li><b>手段</b>:备份(频率决定 RPO)、主备/双活(切换速度决定 RTO)、异地容灾。</li>' +
    '<li><b>必备</b>:BCP 预案 + 定期演练。</li>' +
    '</ul>' +
    '<div class="ex">备份频率定 RPO,恢复速度定 RTO;两者对应不同的容灾投入,与 SLA 联动。</div>',
  pitfalls: '<div class="pit"><b>RPO 越小备份越频繁、成本越高。</b>并非所有系统都要"零丢失",按业务影响分级定 RPO。</div>',
  quiz: [
    { type: 'choice', q: '"最多可丢失多少数据"的指标是?', options: ['RTO', 'RPO', 'MTBF', 'MTTR'], answer: 1, source: '高频', explain: 'RPO 是恢复点目标,表示可容忍的数据丢失量。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/07-capacity-availability">容量与可用性</a> · 下一课:<a href="#/l/ops/09-servicedesk">服务台</a></p>'
});
