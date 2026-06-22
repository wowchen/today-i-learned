SAN.registerLesson({
  id: 'case/04-uml-case',
  module: 'case',
  order: 4,
  title: 'UML 建模案例',
  minutes: 5,
  key: true,
  keywords: ['UML', '用例图', '类图', '时序图', '补全', '关系', '案例'],
  concept: '<p>UML 案例:给一段需求,补全<b>用例图(参与者/用例/关系)、类图(类/关系/多重度)或时序图(消息)</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例高频。重点:用例 include/extend、类图关系(聚合/组合/继承)。</p>',
  core: '<div class="ex"><b>用例图:</b>公共必然步骤用 include,可选附加用 extend。<br><b>类图:</b>判关系强弱——依赖<关联<聚合<组合<继承;聚合可分离、组合同生共死。<br><b>时序图:</b>按时间补全对象间消息(同步/返回)。</div>',
  pitfalls: '<div class="pit"><b>误解:include 和 extend 随便用。</b>include 是必然公共复用;extend 是有条件可选扩展,案例常考这个判断。</div>',
  quiz: [
    { type: 'choice', q: '"下单"必然要"验证库存",该用?', options: ['include包含', 'extend扩展', '泛化', '关联'], answer: 0, source: '案例高频', explain: '必然的公共步骤用include。' }
  ],
  links: '<p>上一课:<a href="#/l/case/03-er-case">ER案例</a> · 下一课:<a href="#/l/case/05-req-case">需求分析案例</a> · 原理:<a href="#/l/analysis/05-uml-static">UML静态图</a></p>'
});
