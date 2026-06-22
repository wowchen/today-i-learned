SAN.registerLesson({
  id: 'test/05-maintenance',
  module: 'test',
  order: 5,
  title: '系统维护与评价',
  minutes: 4,
  keywords: ['系统维护', '可维护性', '系统评价', '效益评价', '运行维护'],
  concept: '<p>系统上线后进入运维:持续维护并定期<b>评价</b>系统的技术性能与经济效益,决定继续优化或退役。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:维护类型、系统评价维度。</p>',
  core: '<p><b>维护类型(同软件):</b>改正性、适应性、完善性(占比最高)、预防性。</p>' +
    '<table><tr><th>评价维度</th><th>看什么</th></tr>' +
    '<tr><td>技术性能</td><td>响应、可靠性、可用性等是否达标</td></tr>' +
    '<tr><td>经济效益</td><td>实际收益对比投入(事后ROI)</td></tr>' +
    '<tr><td>用户满意度</td><td>是否满足业务与用户需要</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:上线即结束。</b>运维与评价是长期过程;完善性维护占比最高,且评价结果指导后续演化或退役。</div>',
  quiz: [
    { type: 'choice', q: '系统维护中通常占比最高的是?', options: ['改正性', '适应性', '完善性', '预防性'], answer: 2, source: '高频', explain: '完善性维护占比最高。' }
  ],
  links: '<p>测试转换维护模块完。下一模块:<a href="#/l/mis/01-informatization">企业信息化</a></p>'
});
