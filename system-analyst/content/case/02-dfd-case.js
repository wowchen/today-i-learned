SAN.registerLesson({
  id: 'case/02-dfd-case',
  module: 'case',
  order: 2,
  title: '数据流图 DFD 案例',
  minutes: 5,
  key: true,
  keywords: ['DFD', '数据流图', '补全', '加工', '数据存储', '平衡', '案例'],
  concept: '<p>系分案例几乎必有一道 <gd data-term="dfd">DFD</gd> 题:给一张缺了数据流/数据存储/外部实体的图,要你<b>补全并说明理由</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例必考。重点:补全数据流、查"黑洞/奇迹"、父子图平衡。</p>',
  core: '<div class="ex"><b>答题套路:</b><br>① 通读题干场景,理清谁(外部实体)给系统什么、系统产出什么。<br>② <b>补数据流</b>:看每个加工的输入输出是否齐全——只进不出(黑洞)、只出不进(奇迹)都要补。<br>③ <b>补数据存储</b>:需要持久化或后续读取的数据要有存储。<br>④ 用<b>父子图平衡</b>校验:父图加工的输入输出 = 子图边界数据流。</div>',
  pitfalls: '<div class="pit"><b>误解:加工可以只有输入或只有输出。</b>违反数据守恒(黑洞/奇迹)是 DFD 题最常见扣分点,补全时重点查这个。</div>',
  quiz: [
    { type: 'choice', q: 'DFD中某加工只有输入没有输出,这种错误俗称?', options: ['奇迹', '黑洞', '平衡', '守恒'], answer: 1, source: '案例高频', explain: '只进不出叫"黑洞";只出不进叫"奇迹"。' }
  ],
  links: '<p>上一课:<a href="#/l/case/01-overview">题型策略</a> · 下一课:<a href="#/l/case/03-er-case">ER案例</a> · 原理:<a href="#/l/analysis/01-structured-dfd">数据流图</a></p>'
});
