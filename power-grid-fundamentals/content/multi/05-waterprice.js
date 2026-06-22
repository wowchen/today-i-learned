PGF.registerLesson({
  id: 'multi-05-waterprice',
  module: 'multi',
  order: 5,
  title: '水价与 BOT/PPP',
  minutes: 4,
  keywords: ['水价', 'BOT', 'PPP', '特许经营', '阶梯水价'],
  sections: {
    what:
      '<p>中国水价和电价一样由政府定价,结构也类似:</p>' +
      '<ul>' +
      '<li><strong>自来水费</strong>:水厂制水+管网输配成本;</li>' +
      '<li><strong>污水处理费</strong>:随水费代收;</li>' +
      '<li><strong>水资源费/税</strong>:取用水资源的资源补偿。</li>' +
      '</ul>' +
      '<p>居民水价也实行<strong>阶梯制</strong>:用得越多越贵(与电的阶梯电价逻辑一致)。</p>',
    why:
      '<p>水务投资巨大(管网建设、污水处理厂)但回收期长,政府财力有限——' +
      '于是引入社会资本,通过<strong>BOT/PPP</strong>模式让企业投资建设、运营,政府按约定付费。</p>',
    how:
      '<table><tr><th>模式</th><th>全称</th><th>机制</th></tr>' +
      '<tr><td><strong>BOT</strong></td><td>Build-Operate-Transfer</td><td>企业建设→运营 20~30 年→移交政府</td></tr>' +
      '<tr><td><strong>PPP</strong></td><td>Public-Private Partnership</td><td>政企合作,风险共担,可涵盖更广的范围</td></tr></table>' +
      '<div class="ex">水务 BOT 的收入模式:企业建一座污水处理厂,' +
      '政府承诺每年给"保底水量 &times; 处理单价"的费用。运营期满(如 25 年),' +
      '设施无偿移交政府。企业赚的是运营期的利润。</div>' +
      '<p>电力也有 BOT(如一些垃圾发电厂),但规模远不如水务——因为电力有全国统一市场,' +
      '而水务高度本地化,更适合 BOT/PPP。</p>',
    pitfalls:
      '<div class="pit"><b>误解:"PPP 是万能的融资工具。"</b>' +
      '中国 PPP 在 2017~2018 年经历过一轮"泡沫":地方政府借 PPP 变相举债,' +
      '后来被严厉规范。PPP 项目的核心风险是政府付费能力和意愿。</div>',
    links:
      '<p>· 下一课转向氢能——能源领域最前沿的话题。<br>' +
      '· 模块 12《阶梯电价》与阶梯水价的设计逻辑完全相通。</p>'
  }
});
