SAN.registerLesson({
  id: 'test/04-conversion',
  module: 'test',
  order: 4,
  title: '系统转换(切换)',
  minutes: 5,
  key: true,
  keywords: ['系统转换', '直接转换', '并行转换', '分段转换', '数据迁移'],
  concept: '<p><gd data-term="system-conversion">系统转换</gd>是新系统替换旧系统的切换。三种方式各有风险与成本,系分常考。</p>',
  exam: '<p><b>考纲定位:</b>系分综合+案例。重点:三种转换方式的优缺点与适用。</p>',
  core: '<table><tr><th>方式</th><th>做法</th><th>优/缺</th></tr>' +
    '<tr><td>直接转换</td><td>停旧立即上新</td><td>省钱;<b>风险最大</b>,出问题无退路</td></tr>' +
    '<tr><td>并行转换</td><td>新旧同时运行一段</td><td>安全、可对比;<b>成本高</b>(两套都维护)</td></tr>' +
    '<tr><td>分段(试点)转换</td><td>分模块/分部门逐步切</td><td>风险可控;周期长、接口复杂</td></tr></table>' +
    '<div class="ex">关键业务(银行核心)多用<b>并行转换</b>求稳;还需做好<b>数据迁移与校验</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:直接转换最好(省钱省事)。</b>直接转换<b>风险最大</b>,一旦失败无退路;重要系统宜并行或分段。</div>',
  quiz: [
    { type: 'choice', q: '新旧系统同时运行一段、可对比但成本高的转换方式是?', options: ['直接转换', '并行转换', '分段转换', '冷转换'], answer: 1, source: '高频', explain: '并行转换安全可对比,但需维护两套,成本高。' }
  ],
  links: '<p>上一课:<a href="#/l/test/03-levels">测试层次</a> · 下一课:<a href="#/l/test/05-maintenance">系统维护与评价</a></p>'
});
