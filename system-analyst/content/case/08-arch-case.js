SAN.registerLesson({
  id: 'case/08-arch-case',
  module: 'case',
  order: 8,
  title: '系统架构案例',
  minutes: 5,
  keywords: ['架构案例', '架构风格', '质量属性', '架构评估', '权衡', '高并发'],
  concept: '<p>架构类案例:给系统让你<b>选架构风格、识别质量属性、判敏感点/权衡点、给高可用高性能方案</b>。系分较架构师浅但同套路。</p>',
  exam: '<p><b>考纲定位:</b>案例可考。重点:风格选型、质量属性场景、措施清单。</p>',
  core: '<div class="ex"><b>答题骨架:</b><br>· 选风格:按系统特征对号(交互多视图→MVC;异步松耦合→事件驱动)。<br>· 提质量属性:用<gd data-term="quality-attribute">质量属性</gd>场景描述(量化指标)。<br>· 给措施:高并发→缓存+负载均衡+读写分离;高可用→冗余+故障转移。<br>· 判点:影响一个属性=敏感点,多个=权衡点(<gd data-term="atam">ATAM</gd>)。</div>',
  pitfalls: '<div class="pit"><b>误解:堆技术=好架构。</b>要结合题目并发量/预算<b>说明每个决策解决什么、代价是什么</b>(权衡)。</div>',
  quiz: [
    { type: 'choice', q: '应对"突发高并发读"的首选组合是?', options: ['加密+签名', 'CDN+缓存+负载均衡', '分库加锁', '关日志'], answer: 1, source: '案例', explain: '高并发读用CDN、缓存、负载均衡。' }
  ],
  links: '<p>上一课:<a href="#/l/case/07-reliability-calc">可靠性计算</a> · 下一课:<a href="#/l/case/09-data-case">数据案例</a> · 原理:<a href="#/l/arch/05-evaluation">架构评估</a></p>'
});
