SAN.registerLesson({
  id: 'math/04-queuing',
  module: 'math',
  order: 4,
  title: '排队论',
  minutes: 4,
  keywords: ['排队论', '到达率', '服务率', '利用率', 'M/M/1', '队长'],
  concept: '<p><gd data-term="queuing">排队论</gd>研究"随机到达+服务"的排队系统,帮你算<b>该开几个窗口、要等多久</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:利用率 ρ=λ/μ、基本指标。</p>',
  core: '<div class="ex"><b>M/M/1 单窗口:</b>到达率 λ、服务率 μ,利用率 <b>ρ=λ/μ</b>(需<1否则队列无限增长)。<br>例:λ=60/h、μ=100/h → ρ=0.6,系统不饱和。ρ 越接近1,排队越长、等待越久。</div>',
  pitfalls: '<div class="pit"><b>误解:服务率大于到达率就不用排队。</b>只要是随机到达,即使 ρ<1 也会排队;ρ 越接近1队列越长,需留余量。</div>',
  quiz: [
    { type: 'choice', q: 'λ=80/h,μ=100/h,系统利用率ρ为?', options: ['0.6', '0.8', '1.25', '0.08'], answer: 1, source: '高频计算', explain: 'ρ=λ/μ=80/100=0.8。' }
  ],
  links: '<p>上一课:<a href="#/l/math/03-decision">决策论</a> · 下一课:<a href="#/l/math/05-network-plan">网络计划技术</a></p>'
});
