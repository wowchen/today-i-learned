SAN.registerLesson({
  id: 'guide/04-features',
  module: 'guide',
  order: 4,
  title: '题库·错题本·计算器怎么用',
  minutes: 3,
  keywords: ['功能', '术语', '错题本', '计算器', '搜索', '使用说明'],
  concept: '<p>本站为备考做了几个趁手工具,先认识它们,后面学起来更顺。</p>',
  exam: '<p><b>考纲定位:</b>工具不考,但用好能显著提升刷题与复盘效率。</p>',
  core: '<table><tr><th>功能</th><th>用法</th></tr>' +
    '<tr><td>术语</td><td>全站术语库;正文带下划线的词点开看解释,可<b>收藏</b></td></tr>' +
    '<tr><td>收藏</td><td>收藏的术语集中查看</td></tr>' +
    '<tr><td>错题</td><td>每课⑤练习答错<b>自动进错题本</b>,考前专攻</td></tr>' +
    '<tr><td>计算器</td><td><b>决策树期望值、PERT 三点估算、系统可靠度</b>三件套,配数学/可靠性课用</td></tr>' +
    '<tr><td>搜索</td><td>跨课时与术语全文搜索</td></tr></table>' +
    '<div class="ex">试试点这个术语 <gd data-term="er-model">ER模型</gd> 看弹窗;再去顶部"计算器"用 PERT 算一道期望工期。</div>',
  pitfalls: '<div class="pit"><b>误解:进度会丢。</b>进度/收藏/错题存在<b>你自己的浏览器</b>,不联网也在;换设备或清缓存才清空,可在设置导出备份。</div>',
  quiz: [
    { type: 'choice', q: '本站计算器不包含下列哪项?', options: ['决策树期望值', 'PERT三点估算', '系统可靠度', '汇率换算'], answer: 3, source: '功能', explain: '计算器是决策树、PERT、可靠度三件套。' }
  ],
  links: '<p>导览结束。开始基础篇:<a href="#/l/comp/01-architecture">计算机体系结构与CPU</a></p>'
});
