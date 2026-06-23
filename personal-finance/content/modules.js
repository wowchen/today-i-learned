/* 模块元数据 + 学习路径(投资理财 · 科普通识)
   tag:入门/核心/进阶/实战;lessons 为该模块课时数。
   路径顺序 = 推荐学习动线(入门→核心→进阶→实战)。
   科普,非应试:无真题/错题本/论文,课时含轻量"想一想"。 */
window.PFIN = window.PFIN || {};

PFIN.modules = [
  { id: 'basics',     order: 0,  title: '理财通识',        desc: '钱从哪来到哪去、记账与预算、应急金、资产负债表、理财心态', lessons: 7, tag: '入门' },
  { id: 'compound',   order: 1,  title: '复利与时间价值',   desc: '单利复利、72法则、现值未来值、年金、IRR、通胀的侵蚀', lessons: 6, tag: '入门' },
  { id: 'allocation', order: 2,  title: '资产配置',        desc: '四象限、风险承受度、再平衡、分散、生命周期、懒人组合', lessons: 7, tag: '核心' },
  { id: 'stock',      order: 3,  title: '股票基础',        desc: '股权、PE/PB/ROE、分红、指数、主动vs被动、长持、常见误区', lessons: 8, tag: '核心' },
  { id: 'bond',       order: 4,  title: '债券与利率',      desc: '债券是什么、价格与利率、久期、信用、收益率曲线、配置作用', lessons: 6, tag: '核心' },
  { id: 'fund',       order: 5,  title: '基金与 ETF',      desc: '公募/指数/主动、ETF、费率、跟踪误差、定投、QDII', lessons: 7, tag: '核心' },
  { id: 'realestate', order: 6,  title: '房产与 REITs',    desc: '自住非投资品、租售比、杠杆、REITs、流动性', lessons: 5, tag: '进阶' },
  { id: 'insurance',  order: 7,  title: '保险规划',        desc: '保险原理、四大险种、谁先买、保障vs理财、避坑', lessons: 6, tag: '进阶' },
  { id: 'retirement', order: 8,  title: '退休与养老',      desc: '养老三支柱、个人养老金、替代率、退休缺口、提早规划', lessons: 6, tag: '进阶' },
  { id: 'tax',        order: 9,  title: '税务基础',        desc: '个税、专项附加扣除、资本利得、合法节税、申报', lessons: 5, tag: '实战' },
  { id: 'risk',       order: 10, title: '风险管理与行为',   desc: '波动≠风险、最大回撤、夏普、止损、行为偏差、骗局识别', lessons: 7, tag: '实战' }
];

PFIN.path = [
  // 理财通识
  'basics/01-what-is-pf', 'basics/02-income-expense', 'basics/03-budget', 'basics/04-emergency-fund',
  'basics/05-balance-sheet', 'basics/06-goals', 'basics/07-mindset',
  // 复利与时间价值
  'compound/01-simple-vs-compound', 'compound/02-rule-72', 'compound/03-present-future-value',
  'compound/04-annuity', 'compound/05-irr', 'compound/06-inflation',
  // 资产配置
  'allocation/01-four-buckets', 'allocation/02-risk-tolerance', 'allocation/03-diversification',
  'allocation/04-rebalance', 'allocation/05-lifecycle', 'allocation/06-lazy-portfolio', 'allocation/07-correlation',
  // 股票基础
  'stock/01-what-is-stock', 'stock/02-how-to-earn', 'stock/03-valuation', 'stock/04-dividend',
  'stock/05-index', 'stock/06-active-vs-passive', 'stock/07-long-term', 'stock/08-pitfalls',
  // 债券与利率
  'bond/01-what-is-bond', 'bond/02-price-yield', 'bond/03-duration', 'bond/04-credit',
  'bond/05-yield-curve', 'bond/06-role',
  // 基金与 ETF
  'fund/01-what-is-fund', 'fund/02-index-fund', 'fund/03-etf', 'fund/04-fees',
  'fund/05-tracking-error', 'fund/06-dca', 'fund/07-qdii',
  // 房产与 REITs
  'realestate/01-home-not-asset', 'realestate/02-rent-vs-buy', 'realestate/03-leverage',
  'realestate/04-reits', 'realestate/05-liquidity',
  // 保险规划
  'insurance/01-principle', 'insurance/02-four-types', 'insurance/03-priority',
  'insurance/04-protect-vs-invest', 'insurance/05-how-much', 'insurance/06-pitfalls',
  // 退休与养老
  'retirement/01-three-pillars', 'retirement/02-personal-pension', 'retirement/03-replacement-rate',
  'retirement/04-gap', 'retirement/05-start-early', 'retirement/06-withdrawal',
  // 税务基础
  'tax/01-income-tax', 'tax/02-special-deduction', 'tax/03-capital-gains',
  'tax/04-tax-saving', 'tax/05-filing',
  // 风险管理与行为
  'risk/01-volatility-vs-risk', 'risk/02-drawdown', 'risk/03-sharpe', 'risk/04-stop-loss',
  'risk/05-behavior-bias', 'risk/06-scam', 'risk/07-checklist'
];

PFIN.totalLessons = PFIN.path.length;
