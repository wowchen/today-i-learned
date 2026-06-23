PFIN.registerLesson({
  id: 'stock/03-valuation',
  module: 'stock',
  order: 3,
  title: '看懂 PE / PB / ROE',
  minutes: 5,
  key: true,
  keywords: ['PE', 'PB', 'ROE', '估值', '市盈率'],
  concept: '<p>三个最常用的指标:<b><gd data-term="pe-ratio">市盈率 PE</gd></b>(贵不贵)、<b><gd data-term="pb-ratio">市净率 PB</gd></b>(相对家底贵不贵)、<b><gd data-term="roe">净资产收益率 ROE</gd></b>(赚钱能力强不强)。</p>' +
    '<div class="ex">PE/PB 看"买得贵不贵",ROE 看"公司本身好不好"。</div>',
  core: '<p><b>市盈率 PE = 股价 ÷ 每股盈利</b></p>' +
    '<ul><li>含义:按当前盈利,多少年回本。PE=20 ≈ 20 年回本。</li>' +
    '<li>越低看似越便宜,但要看行业:成长行业 PE 天然高,夕阳行业 PE 低不代表便宜。</li></ul>' +
    '<p><b>市净率 PB = 股价 ÷ 每股净资产</b></p>' +
    '<ul><li>含义:相对公司账面家底,溢价多少。重资产行业(银行)常看 PB。</li></ul>' +
    '<p><b>净资产收益率 ROE = 净利润 ÷ 净资产</b></p>' +
    '<ul><li>含义:公司用股东的钱赚钱的效率,是衡量"生意好坏"的核心指标。长期 ROE 高且稳,通常是好生意。</li></ul>' +
    '<p><b>怎么连起来看:</b>好公司(高 ROE)+ 合理价格(PE/PB 不离谱)≈ 值得长期持有。光便宜不够,便宜的烂公司是陷阱("价值陷阱")。</p>' +
    '<p class="ex">这些指标是"参考",不是"公式答案"。它们要和行业、成长性、历史区间一起看,孤立一个数字没意义。</p>',
  pitfalls: '<div class="pit"><b>误区:PE 越低越值得买。</b>低 PE 可能是市场预期盈利下滑;夕阳行业、出问题的公司常年低 PE,是价值陷阱。</div>' +
    '<div class="pit"><b>误区:跨行业比 PE。</b>科技股和银行股 PE 天然不同,只能同行业、同公司历史区间内比较。</div>',
  quiz: [
    { type: 'choice', q: 'ROE 衡量的是?', options: ['股价高低', '公司用股东资本赚钱的效率', '分红多少', '市场情绪'], answer: 1, source: '理解', explain: 'ROE=净利润÷净资产,反映赚钱效率。' },
    { type: 'choice', q: '关于"低 PE",正确的理解是?', options: ['一定便宜值得买', '可能是价值陷阱,需结合行业与前景判断', '越低越好', '与盈利无关'], answer: 1, source: '理解', explain: '低 PE 也可能是盈利预期恶化,要警惕陷阱。' }
  ],
  links: '<p>上一课:<a href="#/l/stock/02-how-to-earn">怎么赚钱</a> · 下一课:<a href="#/l/stock/04-dividend">分红</a></p>'
});
