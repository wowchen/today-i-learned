SAN.registerLesson({
  id: 'plan/01-planning',
  module: 'plan',
  order: 1,
  title: '系统规划',
  minutes: 4,
  key: true,
  keywords: ['系统规划', '战略对齐', '总体规划', 'BSP', '关键成功因素', 'CSF'],
  concept: '<p>系统规划站在全局,确定信息系统建设的<b>目标、范围、优先级</b>,并与组织战略对齐。是系分"自顶向下"的起点。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:规划方法(BSP、CSF、SST)、战略对齐。</p>',
  core: '<table><tr><th>方法</th><th>思路</th></tr>' +
    '<tr><td>关键成功因素 CSF</td><td>抓决定成败的少数关键因素定需求</td></tr>' +
    '<tr><td>战略目标集转化 SST</td><td>把组织战略目标转成信息系统目标</td></tr>' +
    '<tr><td>企业系统规划 BSP</td><td>自上而下规划、自下而上实施</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:系统规划就是列要建的系统。</b>核心是<b>与战略对齐、定优先级</b>,而非堆项目清单。</div>',
  quiz: [
    { type: 'choice', q: '"抓住决定组织成败的少数关键因素"来确定需求的方法是?', options: ['BSP', 'CSF关键成功因素', 'SST', 'PERT'], answer: 1, source: '高频', explain: 'CSF聚焦关键成功因素。' }
  ],
  links: '<p>下一课:<a href="#/l/plan/02-feasibility">可行性研究</a></p>'
});
