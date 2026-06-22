SAN.registerLesson({
  id: 'se/07-pm-cost',
  module: 'se',
  order: 7,
  title: '项目成本管理与挣值',
  minutes: 5,
  keywords: ['成本管理', '挣值', 'EVM', 'PV', 'EV', 'AC', 'SPI', 'CPI'],
  concept: '<p><gd data-term="evm">挣值管理(EVM)</gd>整合范围、进度、成本,用 PV/EV/AC 三个量衡量项目健康。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例计算。重点:挣值公式与判读。</p>',
  core: '<table><tr><th>指标</th><th>公式</th><th>判读</th></tr>' +
    '<tr><td>SV 进度偏差</td><td>EV−PV</td><td>>0超前</td></tr>' +
    '<tr><td>CV 成本偏差</td><td>EV−AC</td><td>>0节约</td></tr>' +
    '<tr><td>SPI</td><td>EV/PV</td><td>>1超前</td></tr>' +
    '<tr><td>CPI</td><td>EV/AC</td><td>>1节约</td></tr>' +
    '<tr><td>EAC</td><td>BAC/CPI</td><td>预计总成本</td></tr></table>' +
    '<div class="ex">例:PV=40,EV=30,AC=40 → SV=−10(落后)、CV=−10(超支)、SPI=CPI=0.75。</div>',
  pitfalls: '<div class="pit"><b>误解:SPI、CPI大于1是坏事。</b>大于1表示<b>超前/节约</b>,是好事;小于1才是落后/超支。</div>',
  quiz: [
    { type: 'choice', q: 'EV=60,AC=75,则CPI为?', options: ['0.75', '0.80', '1.25', '1.0'], answer: 1, source: '高频计算', explain: 'CPI=EV/AC=60/75=0.8,成本超支。' }
  ],
  links: '<p>上一课:<a href="#/l/se/06-pm-schedule">进度管理</a> · 下一课:<a href="#/l/se/08-pm-risk">项目风险管理</a></p>'
});
