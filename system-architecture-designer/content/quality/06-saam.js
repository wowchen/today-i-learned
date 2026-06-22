SAD.registerLesson({
  id: 'quality/06-saam',
  module: 'quality',
  order: 6,
  title: 'SAAM 架构分析法',
  minutes: 4,
  keywords: ['SAAM', '场景', '可修改性', '架构分析', '评估方法'],
  concept: '<p><gd data-term="saam">SAAM</gd> 是<b>最早</b>的架构分析方法,以<b>场景驱动</b>,尤其侧重<b>可修改性</b>,评估架构对各类变更的适应能力。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:SAAM 与 ATAM 的对比。</p>',
  core: '<table><tr><th>对比</th><th>SAAM</th><th>ATAM</th></tr>' +
    '<tr><td>出现</td><td>最早</td><td>在SAAM基础上发展</td></tr>' +
    '<tr><td>侧重</td><td>可修改性为主</td><td>多质量属性 + 权衡</td></tr>' +
    '<tr><td>核心</td><td>场景驱动</td><td>场景 + 效用树 + 权衡分析</td></tr></table>' +
    '<div class="ex">一句话:<b>SAAM 偏单一(可修改性)、ATAM 偏综合(多属性权衡)</b>;ATAM 可看作 SAAM 的升级。</div>',
  pitfalls: '<div class="pit"><b>误解:SAAM 能充分分析性能/安全等多属性权衡。</b>SAAM 主要面向<b>可修改性</b>;要综合权衡多个质量属性,用 ATAM。</div>',
  quiz: [
    { type: 'choice', q: '以"可修改性"为主要评估侧重、最早出现的架构分析方法是?', options: ['ATAM', 'SAAM', 'CBAM', 'PERT'], answer: 1, source: '高频', explain: 'SAAM最早,场景驱动,侧重可修改性。' }
  ],
  links: '<p>上一课:<a href="#/l/quality/05-atam">ATAM</a> · 下一课:<a href="#/l/quality/07-cbam">CBAM</a></p>'
});
