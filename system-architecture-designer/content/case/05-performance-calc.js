SAD.registerLesson({
  id: 'case/05-performance-calc',
  module: 'case',
  order: 5,
  title: '性能计算专项',
  minutes: 5,
  key: true,
  keywords: ['性能计算', 'Amdahl', '加速比', '吞吐量', '响应时间', '利用率', '案例'],
  concept: '<p>性能计算常考三类:<b>Amdahl 加速比、吞吐量/响应时间、资源利用率</b>。套公式 + 写过程即可拿分。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识。重点:Amdahl、利用率(ρ=λ/μ思想)、吞吐换算。</p>',
  core: '<div class="ex"><b>例1(Amdahl):</b>某系统70%处理可并行,用8台并行。加速比 S=1/((1−0.7)+0.7/8)=1/(0.3+0.0875)=1/0.3875≈<b>2.58倍</b>;上限=1/(1−0.7)≈<b>3.33倍</b>。<br><br>' +
    '<b>例2(吞吐):</b>单台TPS=200,4台负载均衡近似线性扩展,理论吞吐≈<b>800 TPS</b>(实际受同步/瓶颈打折)。<br><br>' +
    '<b>例3(利用率):</b>到达率λ=80请求/秒,单台服务率μ=100请求/秒,利用率ρ=λ/μ=<b>0.8</b>(80%),接近饱和需扩容。</div>',
  pitfalls: '<div class="pit"><b>误解:加机器吞吐就线性翻倍。</b>受<b>串行部分(Amdahl)与共享瓶颈</b>制约,实际扩展有折损与上限,答题可注明"理论近似线性,实际打折"。</div>',
  quiz: [
    { type: 'fill', q: '某任务90%可并行,理论最大加速比为____倍。', answer: ['10'], source: '案例计算', explain: '上限=1/(1−0.9)=10倍。' },
    { type: 'choice', q: '到达率λ=60/s,服务率μ=100/s,系统利用率约为?', options: ['0.4', '0.6', '1.67', '0.06'], answer: 1, source: '案例计算', explain: 'ρ=λ/μ=60/100=0.6。' }
  ],
  links: '<p>上一课:<a href="#/l/case/04-reliability-calc">可靠性计算</a> · 下一课:<a href="#/l/case/06-db-design">数据库设计案例</a> · 原理:<a href="#/l/perf/02-amdahl">Amdahl定律</a></p>'
});
