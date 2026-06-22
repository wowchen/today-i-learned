SAD.registerLesson({
  id: 'quality/07-cbam',
  module: 'quality',
  order: 7,
  title: 'CBAM 成本效益分析',
  minutes: 4,
  keywords: ['CBAM', '成本效益', 'ROI', '架构决策', '经济', '效用'],
  concept: '<p><gd data-term="cbam">CBAM</gd> 在 ATAM 之后引入<b>经济视角</b>:不仅看技术好坏,还权衡架构决策的<b>成本与收益(ROI)</b>,辅助"钱该花在哪"的投资决策。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:CBAM 与 ATAM 的衔接、其关注成本/收益。</p>',
  core: '<p><b>三者关系一条线:</b></p>' +
    '<table><tr><th>方法</th><th>关注</th></tr>' +
    '<tr><td>SAAM</td><td>可修改性(场景)</td></tr>' +
    '<tr><td>ATAM</td><td>多质量属性 + 权衡(技术)</td></tr>' +
    '<tr><td>CBAM</td><td>在ATAM基础上加<b>成本/收益</b>(经济)</td></tr></table>' +
    '<div class="ex">CBAM 帮你回答:几个都可行的架构改进,<b>哪个投入产出比最高、最该先做</b>。它让架构决策从"技术对不对"延伸到"值不值"。</div>',
  pitfalls: '<div class="pit"><b>误解:CBAM 取代 ATAM。</b>CBAM 是 ATAM 的<b>经济视角延伸</b>,通常在 ATAM 之后做,二者互补而非替代。</div>',
  quiz: [
    { type: 'choice', q: '在架构评估中引入成本与收益(经济)分析的方法是?', options: ['SAAM', 'ATAM', 'CBAM', 'DFD'], answer: 2, source: '高频', explain: 'CBAM在ATAM基础上加入成本效益分析。' }
  ],
  links: '<p>质量属性与评估模块完。下一模块:<a href="#/l/rel/01-concept">可靠性基本概念</a></p>'
});
