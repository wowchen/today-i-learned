PGF.registerLesson({
  id: 'finance-05-ppa',
  module: 'finance',
  order: 5,
  title: 'PPA:长期购电协议',
  minutes: 4,
  keywords: ['PPA', '购电协议', '长期合同', '锁价', '可融资性'],
  sections: {
    what:
      '<p><strong>PPA(Power Purchase Agreement,购电协议)</strong>' +
      '是发电方和购电方签订的长期售电合同,核心条款:买多少电、多少钱一度、买多少年。</p>' +
      '<div class="ex">类比:PPA 像"团购预订"——餐厅(用户)和农场(电厂)签约:' +
      '未来 10 年,每月供 1000 斤菜,单价 3 元/斤。双方都锁定了价格和数量,各取所需。</div>',
    why:
      '<p>PPA 对双方都有价值:</p>' +
      '<ul>' +
      '<li><strong>发电侧</strong>:锁定长期收入,方便拿银行贷款(现金流可预测 = "可融资性"高);</li>' +
      '<li><strong>购电侧</strong>:锁定长期电价,对冲市场价格波动风险;</li>' +
      '<li><strong>绿色 PPA</strong>:企业可以获得"绿电属性",满足 ESG 要求。</li>' +
      '</ul>',
    how:
      '<p>PPA 的主要类型:</p>' +
      '<table><tr><th>类型</th><th>特点</th></tr>' +
      '<tr><td>固定价格 PPA</td><td>约定固定电价,不随市场波动(最常见)</td></tr>' +
      '<tr><td>浮动 PPA</td><td>电价与市场挂钩,加/减一个固定价差</td></tr>' +
      '<tr><td>虚拟 PPA(差价合约)</td><td>不涉及实际送电,只结算约定价和市场价的差额(纯金融工具)</td></tr></table>' +
      '<div class="ex">在中国,中长期购电合同实质上就是 PPA——发电商和用户/售电公司' +
      '签订年度或多年合同,锁定大部分电量和价格,只有少部分进入现货市场。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"签了 PPA 就高枕无忧。"</b>' +
      '如果市场电价大幅下降,固定价格 PPA 的买方会"亏"(买贵了);' +
      '如果市场电价暴涨,卖方会"亏"(卖便宜了)。PPA 是风险管理工具,不是消除风险。</div>',
    links:
      '<p>· 下一课讲能源基础设施 REITs。<br>' +
      '· 模块 9《中长期市场》讲 PPA 在电力市场中的角色。</p>'
  }
});
