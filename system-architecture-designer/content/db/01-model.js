SAD.registerLesson({
  id: 'db/01-model',
  module: 'db',
  order: 1,
  title: '数据库与三级模式',
  minutes: 5,
  key: true,
  keywords: ['数据库', '三级模式', '两级映像', '数据独立性', '外模式', '内模式'],
  concept: '<p>数据库用<gd data-term="three-schema">三级模式</gd>把"用户看的、整体逻辑、物理存储"分开:<b>外模式(视图)/概念模式(全局逻辑)/内模式(物理)</b>,两级映像带来数据独立性。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:三级模式对应、两级映像保证的独立性。</p>',
  core: '<table><tr><th>模式</th><th>面向</th><th>对应</th></tr>' +
    '<tr><td>外模式</td><td>用户/应用</td><td>视图</td></tr>' +
    '<tr><td>概念模式</td><td>DBA全局</td><td>基本表</td></tr>' +
    '<tr><td>内模式</td><td>存储</td><td>物理文件/索引</td></tr></table>' +
    '<div class="ex"><b>两级映像与独立性:</b><br>· 外/概念映像 → 改了概念模式,改映像即可,应用不变 → <b>逻辑独立性</b>。<br>· 概念/内映像 → 改了存储,改映像即可,逻辑不变 → <b>物理独立性</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:逻辑独立性靠概念/内映像。</b>记反了:<b>外/概念映像→逻辑独立性;概念/内映像→物理独立性</b>。口诀:动谁保谁的"上一层"。</div>',
  quiz: [
    { type: 'choice', q: '保证数据物理独立性的是?', options: ['外模式/概念模式映像', '概念模式/内模式映像', '外模式本身', '内模式本身'], answer: 1, source: '高频', explain: '概念/内模式映像保证物理独立性;外/概念映像保证逻辑独立性。' },
    { type: 'choice', q: '三级模式中,用户视图对应?', options: ['内模式', '概念模式', '外模式', '存储模式'], answer: 2, source: '高频', explain: '外模式面向用户,对应视图。' }
  ],
  links: '<p>下一课:<a href="#/l/db/02-er">ER模型与概念设计</a></p>'
});
