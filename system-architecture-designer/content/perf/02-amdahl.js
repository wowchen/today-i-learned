SAD.registerLesson({
  id: 'perf/02-amdahl',
  module: 'perf',
  order: 2,
  title: '性能计算与 Amdahl 定律',
  minutes: 5,
  key: true,
  keywords: ['Amdahl', '加速比', '并行', '性能计算', '瓶颈', '上限'],
  concept: '<p><gd data-term="amdahl">Amdahl 定律</gd>回答"优化一部分,整体能快多少":加速比 <b>S = 1 / ((1−p) + p/n)</b>,p 是可优化部分占比、n 是该部分加速倍数。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例计算。重点:套公式、理解"上限 1/(1−p)"。可用顶部计算器验证。</p>',
  core: '<div class="ex"><b>例:</b>某任务 60% 可并行(p=0.6),用 4 核加速(n=4):<br>' +
    'S = 1 / ((1−0.6) + 0.6/4) = 1 / (0.4 + 0.15) = 1/0.55 ≈ <b>1.82 倍</b>。<br>' +
    '即使 n→∞,上限 S = 1/(1−0.6) = <b>2.5 倍</b>——剩下 40% 串行部分卡死了上限。</div>' +
    '<p>启示:<b>优化占比大的部分收益才大</b>;只优化小部分,整体提升有限(呼应"找瓶颈")。</p>',
  pitfalls: '<div class="pit"><b>误解:核数翻倍性能就翻倍。</b>受串行部分制约,加速比有<b>上限 1/(1−p)</b>。盲目堆核/堆机器,收益递减。</div>',
  quiz: [
    { type: 'choice', q: '某程序80%可并行,理论最大加速比(n→∞)为?', options: ['4', '5', '8', '无穷'], answer: 1, source: '高频计算', explain: 'S上限=1/(1−0.8)=1/0.2=5倍。' },
    { type: 'fill', q: 'p=0.5、n=2时,Amdahl加速比为____倍(保留2位小数)。', answer: ['1.33'], source: '高频计算', explain: 'S=1/((1−0.5)+0.5/2)=1/(0.5+0.25)=1/0.75≈1.33。' }
  ],
  links: '<p>上一课:<a href="#/l/perf/01-metrics">性能指标</a> · 下一课:<a href="#/l/perf/03-evaluation">性能评估方法</a> · 案例:<a href="#/l/case/05-performance-calc">性能计算专项</a></p>'
});
