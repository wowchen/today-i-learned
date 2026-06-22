SAN.registerLesson({
  id: 'db/01-model',
  module: 'db',
  order: 1,
  title: '数据库与三级模式',
  minutes: 5,
  key: true,
  keywords: ['数据库', '三级模式', '两级映像', '数据独立性'],
  concept: '<p><gd data-term="three-schema">三级模式</gd>把数据库分外模式(视图)、概念模式(全局逻辑)、内模式(物理),两级映像带来数据独立性。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:三级模式对应、两级映像保证的独立性。</p>',
  core: '<div class="ex"><b>两级映像:</b>外/概念映像→<b>逻辑独立性</b>(改概念模式应用不变);概念/内映像→<b>物理独立性</b>(改存储逻辑不变)。</div>',
  pitfalls: '<div class="pit"><b>误解:逻辑独立性靠概念/内映像。</b>记反了:<b>外/概念→逻辑独立性;概念/内→物理独立性</b>。</div>',
  quiz: [
    { type: 'choice', q: '保证数据物理独立性的是?', options: ['外/概念映像', '概念/内映像', '外模式', '内模式'], answer: 1, source: '高频', explain: '概念/内映像保证物理独立性。' }
  ],
  links: '<p>下一课:<a href="#/l/db/02-er">ER模型</a></p>'
});
