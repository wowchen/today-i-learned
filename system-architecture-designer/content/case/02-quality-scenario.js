SAD.registerLesson({
  id: 'case/02-quality-scenario',
  module: 'case',
  order: 2,
  title: '质量属性场景案例',
  minutes: 5,
  key: true,
  keywords: ['质量属性场景', '六元组', '案例', '填空', '性能', '可用性', '安全性'],
  concept: '<p>案例最高频的一类题:给一段需求描述,要你<b>识别质量属性</b>并用<gd data-term="qa-scenario">六元组</gd>补全场景,或判断某句话属于哪个质量属性。</p>',
  exam: '<p><b>考纲定位:</b>案例几乎必考。掌握六元组填空 = 稳拿这类分。</p>',
  core: '<p><b>六元组模板:</b>刺激源 / 刺激 / 环境 / 制品 / 响应 / 响应度量。</p>' +
    '<div class="ex"><b>例题:</b>"系统在双十一高峰,1万用户同时下单时,订单服务应在2秒内完成95%的请求。"<br>' +
    '拆解:刺激源=<b>1万并发用户</b>;刺激=<b>同时下单</b>;环境=<b>双十一高峰</b>;制品=<b>订单服务</b>;响应=<b>完成下单请求</b>;响应度量=<b>95%请求≤2秒</b>。<br>→ 该场景刻画的是<b>性能</b>。</div>' +
    '<table><tr><th>关键词信号</th><th>质量属性</th></tr>' +
    '<tr><td>并发/响应时间/吞吐</td><td>性能</td></tr>' +
    '<tr><td>故障/宕机/恢复/可用比例</td><td>可用性</td></tr>' +
    '<tr><td>攻击/越权/篡改/加密</td><td>安全性</td></tr>' +
    '<tr><td>新增/修改功能/上线周期</td><td>可修改性</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:响应度量可以写"较快、较高"。</b>必须<b>量化</b>(≤2秒、≥99.9%),否则不得分。这是这类题的核心采分点。</div>',
  quiz: [
    { type: 'choice', q: '"系统遭受SQL注入攻击时应能拦截并记录日志"主要刻画哪个质量属性?', options: ['性能', '可用性', '安全性', '易用性'], answer: 2, source: '案例高频', explain: '攻击、拦截、审计日志刻画的是安全性。' },
    { type: 'fill', q: '质量属性场景中,给出可量化指标的要素叫____。', answer: ['响应度量', '响应度量(Response Measure)'], source: '案例', explain: '响应度量给出可量化验收指标。' }
  ],
  links: '<p>上一课:<a href="#/l/case/01-overview">案例题型策略</a> · 下一课:<a href="#/l/case/03-atam-case">ATAM案例</a> · 战术:<a href="#/l/quality/03-tactics">架构战术</a></p>'
});
