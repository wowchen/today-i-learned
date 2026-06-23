/* 术语表(投资理财 · 科普) {id,name,en,def,analogy,module} */
window.PFIN = window.PFIN || {};

PFIN.terms = [
  // 通识
  { id: 'asset', name: '资产', en: 'Asset', def: '能带来未来收益或可变现的东西,如存款、股票、房产。', analogy: '会下蛋的鸡,或能卖钱的东西。', module: 'basics' },
  { id: 'liability', name: '负债', en: 'Liability', def: '需要偿还的钱,如房贷、信用卡欠款。', analogy: '别人对你钱包的"提款权"。', module: 'basics' },
  { id: 'net-worth', name: '净资产', en: 'Net Worth', def: '资产减去负债,衡量你真实有多少钱。', analogy: '把欠的都还清后,口袋里还剩多少。', module: 'basics' },
  { id: 'cash-flow', name: '现金流', en: 'Cash Flow', def: '一段时间内流入与流出的钱;正现金流即收大于支。', analogy: '钱包的进水管 vs 出水管。', module: 'basics' },
  { id: 'emergency-fund', name: '应急基金', en: 'Emergency Fund', def: '应对失业、疾病等突发的备用钱,一般够 3–6 个月开销。', analogy: '家里的灭火器,平时不用但必须有。', module: 'basics' },
  { id: 'budget', name: '预算', en: 'Budget', def: '事先规划钱怎么花,给每一块钱安排去处。', analogy: '出门前先列购物清单。', module: 'basics' },
  { id: 'liquidity', name: '流动性', en: 'Liquidity', def: '资产变成现金的快慢与代价;存款流动性高,房产低。', analogy: '能否随时打车走人,还是得先卖车。', module: 'basics' },

  // 复利
  { id: 'simple-interest', name: '单利', en: 'Simple Interest', def: '只对本金计息,利息不再生息。', analogy: '雪球只滚一圈不再变大。', module: 'compound' },
  { id: 'compound-interest', name: '复利', en: 'Compound Interest', def: '利息也加入本金继续生息,时间越长增长越快。', analogy: '雪球越滚越大,坡越长越夸张。', module: 'compound' },
  { id: 'rule-72', name: '72 法则', en: 'Rule of 72', def: '本金翻倍所需年数 ≈ 72 ÷ 年化收益率(%)。', analogy: '估算翻倍速度的口算捷径。', module: 'compound' },
  { id: 'present-value', name: '现值', en: 'Present Value', def: '未来一笔钱按某收益率折算到今天值多少。', analogy: '明年的 100 元,今天不值 100。', module: 'compound' },
  { id: 'future-value', name: '未来值', en: 'Future Value', def: '今天一笔钱按某收益率增长到未来值多少。', analogy: '今天的种子,几年后长成的树。', module: 'compound' },
  { id: 'annuity', name: '年金', en: 'Annuity', def: '每隔固定期投入或领取的等额现金流。', analogy: '每月定额存或每月定额领。', module: 'compound' },
  { id: 'irr', name: '内部收益率', en: 'IRR', def: '让一笔投资的现值收支相等的年化收益率,衡量真实回报。', analogy: '把一堆进进出出的钱折成一个年化数。', module: 'compound' },
  { id: 'inflation', name: '通货膨胀', en: 'Inflation', def: '物价整体上涨、货币购买力下降。', analogy: '同样 100 元,明年能买的东西变少。', module: 'compound' },
  { id: 'annualized', name: '年化收益率', en: 'Annualized Return', def: '把不同期限的收益换算成"一年"的标准回报率,便于比较。', analogy: '不同长短的赛道换算成同一速度。', module: 'compound' },

  // 资产配置
  { id: 'asset-allocation', name: '资产配置', en: 'Asset Allocation', def: '把钱分配到股票、债券、现金、另类等不同类别的比例决策。', analogy: '不把鸡蛋放一个篮子,还要选篮子。', module: 'allocation' },
  { id: 'diversification', name: '分散', en: 'Diversification', def: '投资多个相关性低的资产以降低整体波动。', analogy: '东边不亮西边亮。', module: 'allocation' },
  { id: 'rebalance', name: '再平衡', en: 'Rebalancing', def: '定期把偏离目标比例的资产买卖回原配置。', analogy: '给天平两端加减砝码恢复平衡。', module: 'allocation' },
  { id: 'risk-tolerance', name: '风险承受度', en: 'Risk Tolerance', def: '你能承受多大亏损而不影响生活与睡眠的程度。', analogy: '坐过山车能承受多陡。', module: 'allocation' },
  { id: 'correlation', name: '相关性', en: 'Correlation', def: '两类资产涨跌同步的程度;低相关才有分散效果。', analogy: '两人步调是否一致。', module: 'allocation' },
  { id: 'lazy-portfolio', name: '懒人组合', en: 'Lazy Portfolio', def: '少数宽基指数按固定比例长期持有、定期再平衡的简单组合。', analogy: '搭好就少折腾的自动挡。', module: 'allocation' },

  // 股票
  { id: 'equity', name: '股权', en: 'Equity', def: '对公司的所有权份额,持股即当股东、分享盈利与风险。', analogy: '买一家店的一小块股份。', module: 'stock' },
  { id: 'pe-ratio', name: '市盈率', en: 'P/E Ratio', def: '股价 ÷ 每股盈利,衡量为每元利润付多少钱(回本年数)。', analogy: '这门生意几年能赚回买价。', module: 'stock' },
  { id: 'pb-ratio', name: '市净率', en: 'P/B Ratio', def: '股价 ÷ 每股净资产,衡量相对账面价值的贵贱。', analogy: '按家底打几折买。', module: 'stock' },
  { id: 'roe', name: '净资产收益率', en: 'ROE', def: '净利润 ÷ 净资产,衡量公司用股东的钱赚钱的效率。', analogy: '本钱的赚钱能力。', module: 'stock' },
  { id: 'dividend', name: '分红', en: 'Dividend', def: '公司把部分利润以现金或股票分给股东。', analogy: '果树每年结的果子。', module: 'stock' },
  { id: 'index', name: '指数', en: 'Index', def: '按规则选一篮子股票编成的整体表现指标,如沪深300。', analogy: '一个班的平均分。', module: 'stock' },
  { id: 'blue-chip', name: '蓝筹股', en: 'Blue Chip', def: '规模大、经营稳、声誉好的成熟公司股票。', analogy: '班里成绩稳的优等生。', module: 'stock' },
  { id: 'market-cap', name: '市值', en: 'Market Cap', def: '股价 × 总股本,公司在市场上的总价格。', analogy: '整家公司挂的标价。', module: 'stock' },

  // 债券
  { id: 'bond', name: '债券', en: 'Bond', def: '借钱给政府或企业、约定到期还本付息的凭证。', analogy: '一张有息的借条。', module: 'bond' },
  { id: 'coupon', name: '票面利率', en: 'Coupon Rate', def: '债券按面值每年支付利息的比率。', analogy: '借条上写好的利息率。', module: 'bond' },
  { id: 'ytm', name: '到期收益率', en: 'YTM', def: '按当前价格买入并持有到期的实际年化回报。', analogy: '把买价算进去的真实利率。', module: 'bond' },
  { id: 'duration', name: '久期', en: 'Duration', def: '债券价格对利率变动的敏感度,久期越长越敏感。', analogy: '杠杆越长,利率一动它晃得越厉害。', module: 'bond' },
  { id: 'credit-spread', name: '信用利差', en: 'Credit Spread', def: '风险债券比无风险国债多出的收益,补偿违约风险。', analogy: '借给信用差的人要更高利息。', module: 'bond' },
  { id: 'yield-curve', name: '收益率曲线', en: 'Yield Curve', def: '不同期限债券收益率连成的曲线,反映利率预期。', analogy: '不同存期利率画成的线。', module: 'bond' },
  { id: 'default-risk', name: '违约风险', en: 'Default Risk', def: '借款方无法按时还本付息的可能性。', analogy: '借条可能收不回来。', module: 'bond' },

  // 基金 ETF
  { id: 'fund', name: '基金', en: 'Fund', def: '把众多投资者的钱集合、由管理人统一投资的工具。', analogy: '大家凑钱请人代为打理。', module: 'fund' },
  { id: 'index-fund', name: '指数基金', en: 'Index Fund', def: '被动跟踪某指数、复制其成分的基金,费率低。', analogy: '照着名单抄作业。', module: 'fund' },
  { id: 'etf', name: 'ETF', en: 'Exchange-Traded Fund', def: '在交易所像股票一样买卖的基金,多为指数型。', analogy: '能当股票买卖的一篮子。', module: 'fund' },
  { id: 'active-fund', name: '主动基金', en: 'Active Fund', def: '由基金经理主动选股择时、力图跑赢市场的基金,费率较高。', analogy: '请大厨即兴发挥,贵但不保证更好吃。', module: 'fund' },
  { id: 'expense-ratio', name: '管理费率', en: 'Expense Ratio', def: '基金每年从资产中扣除的运营与管理费用占比。', analogy: '请人打理收的"服务费"。', module: 'fund' },
  { id: 'tracking-error', name: '跟踪误差', en: 'Tracking Error', def: '指数基金实际表现与所跟踪指数的偏离程度。', analogy: '抄作业抄得有多准。', module: 'fund' },
  { id: 'dca', name: '定投', en: 'Dollar-Cost Averaging', def: '每隔固定期投入固定金额,摊平买入成本。', analogy: '不管菜价高低每周都买点。', module: 'fund' },
  { id: 'nav', name: '基金净值', en: 'NAV', def: '基金每份额的当前价值 = 总资产 ÷ 份额。', analogy: '一份基金现在值多少钱。', module: 'fund' },
  { id: 'qdii', name: 'QDII', en: 'QDII', def: '合格境内机构投资者,让境内资金投资海外市场的渠道。', analogy: '出海投资的"通行证"。', module: 'fund' },

  // 房产
  { id: 'rent-ratio', name: '租售比', en: 'Rent-to-Price', def: '年租金 ÷ 房价,衡量房产作为收租资产的回报率。', analogy: '这房子靠收租几年回本。', module: 'realestate' },
  { id: 'leverage', name: '杠杆', en: 'Leverage', def: '借钱放大投资规模,放大收益也放大亏损。', analogy: '借力撬重物,撬不好砸自己。', module: 'realestate' },
  { id: 'reits', name: 'REITs', en: 'Real Estate Investment Trust', def: '把不动产证券化、可像基金一样买卖并分红的工具。', analogy: '把整栋楼切成小份卖,你收一份租。', module: 'realestate' },
  { id: 'mortgage', name: '按揭', en: 'Mortgage', def: '以房产抵押向银行贷款分期偿还。', analogy: '房子押给银行,慢慢还。', module: 'realestate' },

  // 保险
  { id: 'insurance', name: '保险', en: 'Insurance', def: '用小额保费转移大额意外损失的风险工具。', analogy: '众人凑份子,谁出事谁拿钱。', module: 'insurance' },
  { id: 'term-life', name: '定期寿险', en: 'Term Life', def: '约定期限内身故则赔付的纯保障型寿险,保费低。', analogy: '给家人留的"接力棒"。', module: 'insurance' },
  { id: 'critical-illness', name: '重疾险', en: 'Critical Illness', def: '确诊约定重大疾病即一次性赔付的保险。', analogy: '生大病时的一笔救急钱。', module: 'insurance' },
  { id: 'medical-ins', name: '医疗险', en: 'Medical Insurance', def: '报销因疾病住院、手术等实际医疗费用的保险。', analogy: '帮你付医院账单。', module: 'insurance' },
  { id: 'annuity-ins', name: '年金险', en: 'Annuity Insurance', def: '约定期限按期领取的储蓄理财型保险,保障弱。', analogy: '强制储蓄的"养老存钱罐"。', module: 'insurance' },
  { id: 'cash-value', name: '现金价值', en: 'Cash Value', def: '理财型保单退保时能拿回的金额,早期通常很低。', analogy: '提前退保能退回的"残值"。', module: 'insurance' },

  // 退休
  { id: 'three-pillars', name: '养老三支柱', en: 'Three Pillars', def: '基本养老保险、企业(职业)年金、个人养老金三层养老体系。', analogy: '退休收入的三条腿板凳。', module: 'retirement' },
  { id: 'personal-pension', name: '个人养老金', en: 'Personal Pension', def: '个人自愿参加、享税收优惠的第三支柱养老账户(额度以现行政策为准)。', analogy: '为自己加的第三条腿。', module: 'retirement' },
  { id: 'replacement-rate', name: '养老替代率', en: 'Replacement Rate', def: '退休金 ÷ 退休前收入,衡量退休后生活水平的维持程度。', analogy: '退休后收入打几折。', module: 'retirement' },
  { id: 'withdrawal-rate', name: '提取率', en: 'Withdrawal Rate', def: '退休后每年从资产中取出的比例,常讨论的经验值约 4%。', analogy: '每年从养老金池子舀多少。', module: 'retirement' },

  // 税务
  { id: 'income-tax', name: '个人所得税', en: 'Individual Income Tax', def: '对个人工资、经营等所得按超额累进税率征收的税。', analogy: '挣得越多、超出部分税率越高。', module: 'tax' },
  { id: 'special-deduction', name: '专项附加扣除', en: 'Special Deductions', def: '子女教育、房贷利息、赡养老人等可在税前扣除的项目(以现行规定为准)。', analogy: '算税前先减掉的"减负项"。', module: 'tax' },
  { id: 'capital-gains', name: '资本利得', en: 'Capital Gains', def: '买卖资产的差价收益,不同资产税收待遇不同。', analogy: '低买高卖赚的差价。', module: 'tax' },
  { id: 'tax-deferred', name: '税收递延', en: 'Tax-Deferred', def: '当期暂不缴税、延后到领取时再缴,如个人养老金。', analogy: '税单往后挪,先让钱滚起来。', module: 'tax' },

  // 风险与行为
  { id: 'volatility', name: '波动率', en: 'Volatility', def: '价格上下起伏的剧烈程度,常被当作"风险"的代理指标。', analogy: '路面颠不颠。', module: 'risk' },
  { id: 'max-drawdown', name: '最大回撤', en: 'Max Drawdown', def: '从最高点跌到最低点的最大跌幅,衡量最坏的持有体验。', analogy: '坐过山车最深的那一跌。', module: 'risk' },
  { id: 'sharpe-ratio', name: '夏普比率', en: 'Sharpe Ratio', def: '每承担一单位风险换来的超额回报,越高越划算。', analogy: '颠簸换来的车速值不值。', module: 'risk' },
  { id: 'stop-loss', name: '止损', en: 'Stop Loss', def: '预设亏损线,触及即卖出以控制损失。', analogy: '账户的"安全气囊"。', module: 'risk' },
  { id: 'loss-aversion', name: '损失厌恶', en: 'Loss Aversion', def: '亏 100 的痛远大于赚 100 的快乐,导致非理性决策。', analogy: '丢钱比捡钱印象深得多。', module: 'risk' },
  { id: 'anchoring', name: '锚定效应', en: 'Anchoring', def: '过度依赖某个参考点(如买入价)做判断。', analogy: '死盯着买入价不肯松手。', module: 'risk' },
  { id: 'fomo', name: '错失恐惧', en: 'FOMO', def: '怕错过上涨而追高买入的情绪冲动。', analogy: '看别人吃肉就慌着冲进去。', module: 'risk' },
  { id: 'ponzi', name: '庞氏骗局', en: 'Ponzi Scheme', def: '用后来者的钱付前面人的"收益",无真实盈利、终会崩盘。', analogy: '拆东墙补西墙,墙总会塌。', module: 'risk' },
  { id: 'opportunity-cost', name: '机会成本', en: 'Opportunity Cost', def: '选了这个就放弃的另一个最优选择的价值。', analogy: '钱投了 A,就赚不到 B 的收益。', module: 'risk' }
];
