SPM.registerLesson({
  id: 'tech/02-monitor',
  module: 'tech',
  order: 2,
  title: '监控与告警',
  minutes: 4,
  keywords: ['监控', '告警', '阈值', '指标', '可用性'],
  concept: '<p><gd data-term="sla-monitor">监控告警</gd>是事件发现的前哨:实时采集指标(CPU/内存/响应时延等),超阈值即告警通知值班,把"被动救火"变"主动发现"。</p>',
  exam: '<p><b>考纲定位:</b>工具篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>监控对象</b>:基础资源、应用性能、业务指标、用户体验。</li>' +
    '<li><b>阈值</b>:合理设置,避免漏报或告警风暴。</li>' +
    '<li><b>告警链</b>:分级 → 通知 → 值班 → 自动处置/人工介入。</li>' +
    '</ul>' +
    '<div class="ex">监控与 SLA 联动:SLI 指标实时采集,临近 SLO 即预警,争取在违约前处置。</div>',
  pitfalls: '<div class="pit"><b>告警泛滥=没有告警。</b>阈值乱设会让人麻木,真正关键的告警反被淹没。</div>',
  quiz: [
    { type: 'choice', q: '监控告警系统最需避免的是?', options: ['告警风暴导致麻木', '采集数据', '设阈值', '值班'], answer: 0, source: '高频', explain: '过多无效告警会使人麻木,关键告警被淹没。' }
  ],
  links: '<p>上一课:<a href="#/l/tech/01-itsm-tool">ITSM 工具</a> · 下一课:<a href="#/l/tech/03-automation">自动化运维</a></p>'
});
