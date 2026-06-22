SAD.registerLesson({
  id: 'guide/04-features',
  module: 'guide',
  order: 4,
  title: '题库·错题本·计算器怎么用',
  minutes: 3,
  keywords: ['功能', '术语', '错题本', '计算器', '搜索', '使用说明'],
  concept: '<p>本站为备考做了几个趁手工具,先花两分钟认识它们,后面学起来更顺。</p>',
  exam: '<p><b>考纲定位:</b>工具不考,但用好它们能显著提升刷题与复盘效率。</p>',
  core: '<p><b>顶部导航的几件武器:</b></p>' +
    '<table><tr><th>功能</th><th>用法</th></tr>' +
    '<tr><td>术语</td><td>全站术语库;正文里带下划线的词点开即看解释与类比,可<b>收藏</b></td></tr>' +
    '<tr><td>收藏</td><td>你收藏的术语集中在这里,随时回看</td></tr>' +
    '<tr><td>错题</td><td>每课⑤的练习答错会<b>自动进错题本</b>,考前专攻错题</td></tr>' +
    '<tr><td>计算器</td><td><b>系统可靠度(串/并联)、Amdahl加速比、海明校验位</b>三件套,配合计算课用</td></tr>' +
    '<tr><td>搜索</td><td>跨课时和术语全文搜索</td></tr></table>' +
    '<div class="ex">试试:点这个术语 <gd data-term="hamming">海明码</gd> 看弹窗;再去顶部"计算器"用海明位数计算器验证一下。</div>',
  pitfalls: '<div class="pit"><b>误解:进度会丢。</b>学习进度、收藏、错题都存在<b>你自己的浏览器(localStorage)</b>,不联网也在;换设备或清缓存才会清空,可在设置里导出备份。</div>',
  quiz: [
    { type: 'choice', q: '做练习答错的题目会怎样?', options: ['被忽略', '自动收集进错题本', '直接公布答案给所有人', '扣除积分'], answer: 1, source: '功能', explain: '答错的题会自动进入错题本,方便考前集中复盘。' }
  ],
  links: '<p>导览结束。开始基础篇:<a href="#/l/comp/01-computer-architecture">计算机体系结构与CPU</a></p>'
});
