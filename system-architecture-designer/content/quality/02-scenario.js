SAD.registerLesson({
  id: 'quality/02-scenario',
  module: 'quality',
  order: 2,
  title: '质量属性场景(六元组)',
  minutes: 5,
  key: true,
  keywords: ['质量属性场景', '六元组', '刺激源', '刺激', '响应', '响应度量', '环境'],
  concept: '<p>"系统要快要稳"太模糊,没法设计也没法验收。<gd data-term="qa-scenario">质量属性场景</gd>用<b>六元组</b>把它说清楚、可度量。</p>',
  exam: '<p><b>考纲定位:</b>案例必考大题。重点:六元组的每个要素、能给场景"填空"。</p>',
  core: '<table><tr><th>六元组</th><th>含义</th><th>例(性能)</th></tr>' +
    '<tr><td>刺激源</td><td>谁发起</td><td>1000个并发用户</td></tr>' +
    '<tr><td>刺激</td><td>什么事件</td><td>同时提交下单</td></tr>' +
    '<tr><td>环境</td><td>什么条件下</td><td>峰值运行</td></tr>' +
    '<tr><td>制品</td><td>作用于谁</td><td>订单服务</td></tr>' +
    '<tr><td>响应</td><td>系统怎么应对</td><td>处理并返回结果</td></tr>' +
    '<tr><td>响应度量</td><td>量化指标</td><td>95%请求<2秒</td></tr></table>' +
    '<div class="ex">案例答题就是把题目情景<b>套进六元组</b>。响应度量(可量化)是得分关键:别写"很快",要写"≤2秒/≥99.9%可用"。</div>',
  pitfalls: '<div class="pit"><b>误解:场景描述写得越文学越好。</b>核心价值在<b>可度量的响应度量</b>。没有量化指标的质量场景,无法设计也无法验收,案例会丢分。</div>',
  quiz: [
    { type: 'choice', q: '质量属性场景六元组中,用于"可量化验收"的是?', options: ['刺激源', '环境', '响应度量', '制品'], answer: 2, source: '高频', explain: '响应度量给出可量化的指标,用于验收。' },
    { type: 'fill', q: '质量属性场景共由____个要素(元组)构成。', answer: ['6', '六'], source: '高频', explain: '质量属性场景是六元组:刺激源、刺激、环境、制品、响应、响应度量。' }
  ],
  links: '<p>上一课:<a href="#/l/quality/01-attributes">质量属性总览</a> · 下一课:<a href="#/l/quality/03-tactics">架构战术</a> · 案例:<a href="#/l/case/02-quality-scenario">质量属性场景案例</a></p>'
});
