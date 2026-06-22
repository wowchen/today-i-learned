SAD.registerLesson({
  id: 'style/06-compare',
  module: 'style',
  order: 6,
  title: '风格选型与比较',
  minutes: 5,
  key: true,
  keywords: ['架构风格', '选型', '比较', '场景', '质量属性', '案例'],
  concept: '<p>案例题常给一个系统让你"选风格并说理由"。诀窍:把<b>系统特征 → 风格</b>对号入座,并用质量属性解释。</p>',
  exam: '<p><b>考纲定位:</b>案例高频大题。本课是"按场景选风格"的速查与答题模板。</p>',
  core: '<table><tr><th>系统特征</th><th>宜选风格</th></tr>' +
    '<tr><td>分阶段批量处理数据(编译/ETL)</td><td>管道-过滤器</td></tr>' +
    '<tr><td>多视图、前后端分离的交互应用</td><td>MVC</td></tr>' +
    '<tr><td>清晰分级、需可移植可替换</td><td>分层</td></tr>' +
    '<tr><td>构件松耦合、要易扩展、异步</td><td>事件驱动</td></tr>' +
    '<tr><td>以共享数据为中心、多模块访问</td><td>仓库/数据库</td></tr>' +
    '<tr><td>无确定算法、多专家协作</td><td>黑板</td></tr></table>' +
    '<div class="ex">答题模板:<b>①点明风格 ②结合本题特征说为什么 ③说该风格满足了哪些质量属性、牺牲了什么</b>。这样既准又拿满分点。</div>',
  pitfalls: '<div class="pit"><b>误解:风格只能选一种。</b>真实系统常<b>混合多种风格</b>(如分层+事件驱动+仓库)。案例作答可指出主风格并说明各部分的风格组合。</div>',
  quiz: [
    { type: 'choice', q: '一个需要前后端分离、支持多种展示界面的交互系统,宜优先考虑?', options: ['管道-过滤器', 'MVC', '黑板', '批处理'], answer: 1, source: '场景', explain: 'MVC分离模型/视图/控制器,天然支持多视图与前后端分离。' }
  ],
  links: '<p>架构风格模块完。下一模块:<a href="#/l/quality/01-attributes">质量属性总览</a> · 案例练习:<a href="#/l/case/02-quality-scenario">质量属性场景案例</a></p>'
});
