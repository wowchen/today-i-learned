PFIN.registerLesson({
  id: 'allocation/07-correlation',
  module: 'allocation',
  order: 7,
  title: '相关性:分散的灵魂',
  minutes: 4,
  keywords: ['相关性', '负相关', '对冲', '黄金'],
  concept: '<p><b><gd data-term="correlation">相关性</gd></b>衡量两类资产涨跌的同步程度,范围 −1 到 +1。它是分散效果的"灵魂"。</p>' +
    '<div class="ex">配两个一起涨一起跌的资产=白搭;配两个此消彼长的,才真正平滑波动。</div>',
  core: '<p><b>相关性怎么读:</b></p>' +
    '<table><tr><th>相关性</th><th>含义</th><th>分散效果</th></tr>' +
    '<tr><td>接近 +1</td><td>几乎同步涨跌</td><td>几乎没有</td></tr>' +
    '<tr><td>接近 0</td><td>各走各的</td><td>较好</td></tr>' +
    '<tr><td>接近 −1</td><td>一个涨另一个跌</td><td>最强(但很罕见)</td></tr></table>' +
    '<p><b>常见的低/负相关搭配:</b></p>' +
    '<ul>' +
    '<li><b>股票 ↔ 债券</b>:多数时候相关性低,股跌时债常抗跌,是经典搭配。</li>' +
    '<li><b>黄金</b>:避险情绪升温时常与股票反向,作为"保险"配少量。</li>' +
    '</ul>' +
    '<p><b>重要提醒:相关性不是固定的。</b>在极端危机中,很多资产会"一起跌"(相关性趋同),分散在最需要时可能短暂失效——所以现金和保障仍不可少。</p>' +
    '<p class="ex">不用去算具体数字;记住原则:配进来的资产,要和已有的"不那么合拍",才有意义。</p>',
  pitfalls: '<div class="pit"><b>误区:相关性永远不变。</b>危机时各类风险资产可能同跌,历史相关性会失灵;别以为分散就万无一失。</div>' +
    '<div class="pit"><b>误区:为分散而堆资产。</b>加入高相关资产只是增加复杂度,不增加分散;宁缺毋滥。</div>',
  quiz: [
    { type: 'choice', q: '两类资产相关性接近 +1,意味着?', options: ['分散效果最好', '几乎同步涨跌、分散效果差', '一定亏损', '收益最高'], answer: 1, source: '理解', explain: '高正相关=同涨同跌,起不到分散作用。' },
    { type: 'choice', q: '关于危机中的相关性,正确的是?', options: ['危机中分散一定有效', '极端危机时许多资产可能一起跌', '相关性永远恒定', '黄金一定大涨'], answer: 1, source: '理解', explain: '危机中相关性趋同,分散可能短暂失效。' }
  ],
  links: '<p>上一课:<a href="#/l/allocation/06-lazy-portfolio">懒人组合</a> · 进入股票模块:<a href="#/l/stock/01-what-is-stock">股票是什么</a></p>'
});
