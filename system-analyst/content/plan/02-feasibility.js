SAN.registerLesson({
  id: 'plan/02-feasibility',
  module: 'plan',
  order: 2,
  title: '可行性研究',
  minutes: 5,
  key: true,
  keywords: ['可行性研究', '技术可行性', '经济可行性', '操作可行性', '法律可行性', '进度可行性'],
  concept: '<p><gd data-term="feasibility">可行性研究</gd>在立项前评估"该不该做、能不能做成",从多个维度论证。</p>',
  exam: '<p><b>考纲定位:</b>系分综合+论文常考。重点:五个可行性维度。</p>',
  core: '<table><tr><th>维度</th><th>评估什么</th></tr>' +
    '<tr><td>技术可行性</td><td>现有技术能否实现</td></tr>' +
    '<tr><td>经济可行性</td><td>成本效益是否划算(ROI)</td></tr>' +
    '<tr><td>操作可行性</td><td>组织/人员能否接受运行</td></tr>' +
    '<tr><td>法律可行性</td><td>是否合规、有无侵权</td></tr>' +
    '<tr><td>进度可行性</td><td>能否按期完成</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:可行性只看技术。</b>很多项目技术可行但<b>经济或操作不可行</b>(没钱、用户抵触)而失败,五维度都要评。</div>',
  quiz: [
    { type: 'choice', q: '评估"项目投入产出是否划算"属于哪种可行性?', options: ['技术', '经济', '操作', '法律'], answer: 1, source: '高频', explain: '成本效益属经济可行性。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/01-planning">系统规划</a> · 下一课:<a href="#/l/plan/03-cost-benefit">成本效益分析</a></p>'
});
