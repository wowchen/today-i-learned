/* 电力市场与能源交易 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及电价机制、市场规则、政策文号、补贴与期限的具体口径,
   必须写明政策依据与适用期;内容基线为 2026 年 9 月。
   改内容时同步更新 index.html 与首页的基线日期。 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);

/* ---------- 小工具 ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别踩坑 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['basics','电力市场入门','电为什么特殊、市场要解决什么问题、谁在牌桌上——先把规则看清','入门','Market Basics'],
  ['reform','中国电改历程','从厂网分开到管住中间放开两头，二十年电改的逻辑主线','入门','Power Reform'],
  ['pricing','电价体系与形成机制','上网电价、输配电价、目录电价、峰谷分时、容量电价与交叉补贴','基础','Pricing Mechanism'],
  ['wholesale','中长期交易','年度/月度/多日、双边协商、集中竞价、挂牌、偏差与合同转让','核心','Medium & Long Term'],
  ['spot','现货市场','日前/日内/实时、出清与结算、节点电价与阻塞','核心','Spot Market'],
  ['ancillary','辅助服务市场','调频、调峰、备用、无功——电的配套服务怎么定价','核心','Ancillary Services'],
  ['retail','售电侧与零售市场','售电公司怎么赚钱、大用户入市、零售套餐与偏差考核','核心','Retail Market'],
  ['demand','需求响应与虚拟电厂','把负荷变成可交易资源：需求响应、VPP、聚合商','实战','Demand Response'],
  ['storage','储能的市场机会','独立储能、共享储能、容量补偿、峰谷套利、调频里程','实战','Storage Business'],
  ['newenergy','新能源入市','消纳责任权重、机制电价、午间低谷与负电价、绿电直连','核心','Renewables in Market'],
  ['green','绿电交易与绿证','绿电交易、绿证核发与交易、消纳量核算、国际互认','核心','Green Power'],
  ['carbon','碳市场与碳交易','全国碳市场、配额分配、MRV、CCER、碳价传导与扩围','核心','Carbon Market'],
  ['finance','电力金融与风险管理','差价合约、电力期货、套期保值、价格与信用风险','实战','Power Finance'],
  ['practice','交易实务与能力建设','交易员做什么、报量报价、复盘、考核指标、合规红线','实战','Trading Practice'],
  ['interprovincial','省间交易与跨区送电','省间中长期与省间现货、跨区通道与输电费、省间壁垒与跨省消纳','核心','Inter-Provincial Trading']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  /* --- basics --- */
  ['electricity-market','电力市场','Electricity Market','把电当作商品来买卖、由竞争形成价格的制度安排，而不是全部由政府定价。','电从配给品变成了可交易的商品。','basics'],
  ['non-storability','难以经济存储','Non-Storability','电在现有技术下无法大规模、低损耗地存起来，发出来基本要立刻用掉。','面包能囤，电囤不住。','basics'],
  ['instant-balance','瞬时平衡','Instantaneous Balance','发电和用电必须在每一个瞬间相等，差一点点都会影响频率和电压。','走钢丝，两边重量必须实时相等。','basics'],
  ['homogeneous-good','同质商品','Homogeneous Good','一度电就是一度电，没有品牌差异，区别只在时间、地点和来源。','同一瓶水，区别只在你何时何地买。','basics'],
  ['demand-rigidity','需求刚性','Demand Rigidity','用电需求对价格短期很不敏感，涨价了也很少能立刻少用。','渴了就得喝，贵也得买。','basics'],
  ['natural-monopoly','自然垄断','Natural Monopoly','电网建设成本巨大、重复建设无效率，一家建比多家建更划算，因此需要监管。','一条路就够了，没必要修三条平行的。','basics'],
  ['dispatch','电力调度','Dispatch','指挥发电机组什么时候发多少电，是电力系统的总指挥。','乐队的指挥，谁什么时候出声。','basics'],
  ['wholesale-market','批发市场','Wholesale Market','发电企业与售电公司、大用户之间进行的大宗电力交易市场。','菜农批发给菜贩子的那一层。','basics'],
  ['retail-market','零售市场','Retail Market','售电公司面向终端用户卖电的市场，套餐、服务、价格各显神通。','菜贩子卖给买菜的人那一层。','basics'],
  ['power-exchange','电力交易机构','Power Exchange','组织市场交易、提供交易平台与结算服务的机构，如各省电力交易中心。','交易所本身不买卖，只搭台子。','basics'],
  ['market-clearing','市场出清','Market Clearing','把所有人的买卖报价汇总，找出让供需刚好平衡的那个价格和数量。','拍卖落槌的那一刻。','basics'],
  ['trading-sequence','交易时序','Trading Sequence','从多年、年度、月度到日前、实时，交易按时间由远到近层层推进。','远期先定大方向，临近再微调。','basics'],

  /* --- reform --- */
  ['document-5','5 号文','Document No.5 (2002)','2002 年《电力体制改革方案》，确立厂网分开、竞价上网的总体方向。','电改的第一张图纸。','reform'],
  ['plant-grid-separation','厂网分开','Generation-Grid Separation','把发电厂和电网拆开，电网只负责输电，不再自己办电厂。','裁判和运动员不能是一家人。','reform'],
  ['bidding-ongrid','竞价上网','Competitive On-Grid Bidding','让发电企业报价竞争上网，取代一厂一价的政府定价。','谁便宜谁先上。','reform'],
  ['document-9','9 号文','Document No.9 (2015)','2015 年《关于进一步深化电力体制改革的若干意见》，新一轮电改的纲领。','电改的第二张图纸，也是现在这张。','reform'],
  ['regulate-middle','管住中间、放开两头','Regulate the Middle, Liberalize Both Ends','输配电环节由政府定价监管，发电侧和售电侧放开竞争。','中间的过路费政府定，两头的买卖自己谈。','reform'],
  ['three-open','三放开、一独立、三强化','Three Liberalizations, One Independence','9 号文的改革框架：放开竞争性环节价格、放开发电与售电、交易机构相对独立，强化规划、监管与电力安全。','一句话说清这轮电改干什么。','reform'],
  ['spot-pilot','现货试点','Spot Market Pilot','2017 年起在南方、蒙西、浙江、山西、山东、福建、四川、甘肃等地区先行开展的现货市场试点。','先划八个试验田。','reform'],
  ['market-oriented-price','市场化电价','Market-Based Electricity Price','由买卖双方竞争形成、而非政府逐一核定的电价。','价格由市场说了算。','reform'],
  ['unified-market','全国统一电力市场','National Unified Power Market','打破省间壁垒、统一规则与标准的全国性电力市场体系。','把各省的池塘连成一片湖。','reform'],
  ['dual-track','双轨制','Dual-Track System','计划定价电量与市场化电量并存的过渡状态，是中国电改的现实起点。','一半凭票一半凭市。','reform'],

  /* --- pricing --- */
  ['ongrid-tariff','上网电价','On-Grid Tariff','电网向发电企业购电的价格，即发电侧的卖出价。','电厂卖给电网的价格。','pricing'],
  ['transmission-tariff','输配电价','Transmission & Distribution Tariff','电网输送电力的服务价格，按准许收入除以输配电量核定，是电价的过路费。','高速公路的通行费。','pricing'],
  ['catalog-price','目录电价','Catalog Price','政府按用户类别统一发布、长期执行的销售电价，正在逐步退出工商业领域。','贴在墙上人人照办的价格牌。','pricing'],
  ['government-fund','政府性基金及附加','Government Funds and Surcharges','电价中代收的政府性资金，如可再生能源电价附加、重大水利工程建设基金等。','电价里替政府代收的那一块。','pricing'],
  ['tou-price','峰谷分时电价','Time-of-Use Tariff','按用电时段不同定不同价格，高峰贵、低谷便宜，引导错峰用电。','机票淡旺季一个道理。','pricing'],
  ['sharp-peak','尖峰电价','Sharp Peak Price','在最高负荷的极少数时段加价，比高峰时段更贵。','黄金时段的加价票。','pricing'],
  ['capacity-price','容量电价','Capacity Price','按随时能发电的可用能力付费，而不是按发了多少电付费。','包月费，人到了就付，不看干了多少活。','pricing'],
  ['two-part-tariff','两部制电价','Two-Part Tariff','电价拆成容量与电量两部分：一部分买可用性，一部分买实际用的电。','月租加通话费。','pricing'],
  ['allowed-revenue','准许收入','Allowed Revenue','监管机构核定电网企业可以回收的合理成本加准许收益，是输配电价的基础。','给电网核定的一份合理账。','pricing'],
  ['cost-supervision','成本监审','Cost Supervision','政府对电网企业成本进行审核，剔除不合理支出，防止把浪费转嫁给用户。','查账，把不该算的剔出去。','pricing'],
  ['cross-subsidy','交叉补贴','Cross Subsidy','工商业电价相对偏高、居民农业电价相对偏低，用一类用户补贴另一类。','这边多收一点补那边。','pricing'],
  ['agent-purchase','代理购电','Agent Power Purchase','电网企业代未直接入市的用户统一从市场购电，按市场价格加输配费用结算。','电网替你去市场买菜。','pricing'],
  ['price-floating','价格上下浮动','Price Floating Range','市场化电价可在基准价基础上上下浮动，燃煤发电原则上不超过 20%（高耗能不受限）。','基准价上下的一个弹性区间。','pricing'],

  /* --- wholesale --- */
  ['medium-long-term','中长期交易','Medium and Long-Term Trading','交易周期从多日到多年不等的电力交易，是市场的压舱石。','先签大合同，锁定基本盘。','wholesale'],
  ['annual-trade','年度交易','Annual Trading','跨越整个年度的电量交易，通常约定全年总量与分月曲线。','一年的框架合同。','wholesale'],
  ['monthly-trade','月度交易','Monthly Trading','以月为单位的电量交易，用来滚动修正年度合同的偏差。','每月对一次账。','wholesale'],
  ['bilateral-negotiation','双边协商','Bilateral Negotiation','买卖双方一对一谈价格与电量，成交后到交易机构确认。','自己谈妥了再去备案。','wholesale'],
  ['centralized-bidding','集中竞价','Centralized Bidding','买卖双方各自报价，交易平台统一撮合出清、形成成交价。','股票集合竞价那一套。','wholesale'],
  ['listing-trade','挂牌交易','Listing Trade','一方挂出价格和数量，另一方摘牌成交的公开交易方式。','贴上价签等人来拿。','wholesale'],
  ['contract-volume','合同电量','Contract Volume','中长期合同中约定的电量，是偏差考核与结算的比较基准。','说好的这一个月用多少度。','wholesale'],
  ['deviation-assessment','偏差考核','Deviation Assessment','实际电量与合同电量偏离超过约定范围时的考核或罚款机制。','说少了用多了得挨罚。','wholesale'],
  ['contract-transfer','合同转让','Contract Transfer','把已签的合同电量转给其他市场主体，用于调整持仓。','把订好的货转手。','wholesale'],
  ['rolling-adjustment','滚动调整','Rolling Adjustment','按月或按周对合同电量做小幅修正，避免偏差累积。','边走边微调路线。','wholesale'],
  ['curve-decomposition','曲线分解','Curve Decomposition','把合同电量拆成每个时段的电力，让电量合同落到具体时段上。','把一年的量摊到每小时。','wholesale'],
  ['price-spread','价差','Price Spread','成交价与基准价（或目录电价）之间的差额，常用来描述优惠幅度。','比标杆价便宜几分钱。','wholesale'],

  /* --- spot --- */
  ['spot-market','现货市场','Spot Market','交易次日及以内的电力市场，价格随时间地点波动，反映真实供需。','菜市场今天的时价。','spot'],
  ['day-ahead','日前市场','Day-Ahead Market','提前一天进行的市场出清，确定次日各时段的发电计划与价格。','今天晚上定明天的菜。','spot'],
  ['intraday','日内市场','Intraday Market','当天滚动进行的短期交易，用来修正日前计划的偏差。','开饭前还能再补一次菜。','spot'],
  ['real-time','实时市场','Real-Time Market','按分钟级滚动出清，处理实际供需与日前计划的偏差。','现场随时调度补位。','spot'],
  ['lmp','节点电价','Locational Marginal Price','在电网某个节点上增加 1 兆瓦负荷的成本，反映电能量、阻塞与网损。','同一个城市不同小区菜价不一样。','spot'],
  ['zonal-price','分区电价','Zonal Price','把电网划分成若干价区，同价区内价格相同、价区间不同。','分片区定价。','spot'],
  ['congestion','阻塞','Congestion','某条线路输送能力到顶，便宜的电送不过去，只能启用贵的电。','高速堵了，只能绕远路。','spot'],
  ['network-loss','网损','Network Loss','电在输送过程中的损耗，会体现在不同节点的电价差异里。','送货路上的损耗。','spot'],
  ['security-check','安全校核','Security Check','出清结果必须通过电网安全约束检验，不通过就要重新调整。','价格算完了还得过安全这一关。','spot'],
  ['scuc-sced','安全约束机组组合与调度','SCUC / SCED','现货出清的核心算法：先定开停机，再定各机组出力，兼顾经济与安全。','先定谁上班，再定每人干多少。','spot'],
  ['bidding-curve','申报曲线','Bidding Curve','市场主体按不同价格报出愿意发或愿意用的电量，形成阶梯状曲线。','每个价位我愿卖多少。','spot'],
  ['marginal-price','边际电价','Marginal Price','由最后一台满足需求的机组报价决定的市场价格，即边际机组定价。','最后一位中标者定全场价。','spot'],
  ['price-cap','价格上限与下限','Price Cap and Floor','监管设定的现货价格天花板与地板，防止极端价格与市场操纵。','涨停跌停板。','spot'],
  ['negative-price','负电价','Negative Price','供大于求时，发电方倒贴钱请人用电，多见于新能源大发时段。','东西太多，倒贴运费请你拉走。','spot'],
  ['spot-settlement','现货结算','Spot Settlement','按日前、实时等不同市场分别结算，偏差电量按实时价格清算。','分开算账，偏差另算。','spot'],

  /* --- ancillary --- */
  ['ancillary-service','辅助服务','Ancillary Services','为保障电力系统安全稳定运行而提供的各类服务，如调频、调峰、备用。','主菜之外的配套服务。','ancillary'],
  ['frequency-regulation','调频','Frequency Regulation','机组快速调整出力，把系统频率稳定在 50 赫兹附近。','踩着油门微调车速。','ancillary'],
  ['peak-shaving','调峰','Peak Shaving','在负荷高峰时增加出力、低谷时减少出力，削峰填谷。','高峰期加班，低谷期歇着。','ancillary'],
  ['spinning-reserve','旋转备用','Spinning Reserve','已开机但未满发的机组保留的容量，随时顶上突发缺口。','发动机空转着，随时能加速。','ancillary'],
  ['reactive-power','无功与电压支撑','Reactive Power & Voltage Support','提供无功功率维持电压水平，保证电能质量。','水压不够就加压。','ancillary'],
  ['black-start','黑启动','Black Start','全系统停电后，靠特定机组自启动带动系统恢复供电的能力。','断电后能自己点着的那根火柴。','ancillary'],
  ['two-detailed-rules','两个细则','Two Detailed Rules','《发电厂并网运行管理实施细则》与《并网发电厂辅助服务管理实施细则》的合称。','辅助服务领域的基本法。','ancillary'],
  ['ancillary-cost-allocation','辅助服务费用分摊','Ancillary Cost Allocation','辅助服务费用由谁承担、按什么规则分摊的机制。','这笔公共开销大家怎么摊。','ancillary'],
  ['mileage','调频里程','Regulation Mileage','调频机组实际调整了多少功率，是调频补偿的计量单位。','你实际跑了多少路。','ancillary'],
  ['new-type-storage','新型储能','New-Type Energy Storage','除抽水蓄能外的新型储能技术，如电化学储能，可作为独立主体参与市场。','新款的电力充电宝。','ancillary'],

  /* --- retail --- */
  ['electricity-retailer','售电公司','Electricity Retailer','从批发市场买电、再零售给终端用户的市场主体。','电的二道贩子，合规的那种。','retail'],
  ['retail-package','零售套餐','Retail Package','售电公司给用户设计的电价方案，如固定价、价差分成、分时套餐。','手机套餐的电版。','retail'],
  ['big-user','大用户','Large Consumer','用电量大、可直接参与批发市场交易的用户。','批量采购的大客户。','retail'],
  ['retail-deviation','偏差','Deviation','用户实际用电量与合同电量之差，是零售业务最核心的风险来源。','说好买 100 斤，实际只拿了 80 斤。','retail'],
  ['price-inversion','价格倒挂','Price Inversion','零售卖出价低于批发买入价，卖一度亏一度。','进货价比卖价还高。','retail'],
  ['value-added-service','增值服务','Value-Added Service','售电公司除卖电外提供的用能诊断、节能改造、需求响应等服务。','不光卖菜，还教你做菜。','retail'],
  ['integrated-energy','综合能源服务','Integrated Energy Service','围绕用户用能需求提供电、气、热、冷一体化的整体方案。','不只卖电，把能源这摊事全包了。','retail'],

  /* --- demand --- */
  ['demand-response','需求响应','Demand Response','用户根据价格信号或邀约主动调整用电行为，相当于把负荷当成资源来用。','让用电的人参与调节。','demand'],
  ['peak-clipping','削峰','Peak Clipping','在高峰时段主动少用电，降低系统最大负荷。','高峰期主动让路。','demand'],
  ['valley-filling','填谷','Valley Filling','在低谷时段主动多用电，抬高低谷负荷、促进新能源消纳。','半夜把该干的活干掉。','demand'],
  ['price-based-dr','价格型需求响应','Price-Based Demand Response','通过峰谷电价、实时电价等价格信号，让用户自觉调整用电。','用价格哄你自己改。','demand'],
  ['incentive-based-dr','激励型需求响应','Incentive-Based Demand Response','通过补贴、奖金等激励，约定用户在需要时把负荷降下来。','给钱请你帮个忙。','demand'],
  ['vpp','虚拟电厂','Virtual Power Plant','把分散的储能、可调负荷、分布式电源聚合成一个可统一调度的电厂。','把散兵游勇编成一个军团。','demand'],
  ['aggregator','负荷聚合商','Load Aggregator','把大量中小用户的零散可调负荷聚合起来，代表它们参与市场。','团购团长，代表大家去谈。','demand'],
  ['adjustable-load','可调节负荷','Adjustable Load','可以在不显著影响生产生活的前提下改变用电时间或功率的负荷。','能被商量的那部分用电。','demand'],

  /* --- storage --- */
  ['independent-storage','独立储能','Independent Storage','作为独立市场主体接入电网、直接参与各类电力市场的储能电站。','不依附电厂，自己当市场主体。','storage'],
  ['shared-storage','共享储能','Shared Storage','一个储能电站同时为多个新能源场站或多个用户提供服务的模式。','共享充电宝的思路。','storage'],
  ['capacity-lease','容量租赁','Capacity Lease','新能源场站租用储能容量以完成配储要求，储能方收取租金。','租个仓库凑指标。','storage'],
  ['capacity-compensation','容量补偿','Capacity Compensation','按可用容量给予储能或机组固定补偿，回收部分固定成本。','按随叫随到付费。','storage'],
  ['peak-valley-arbitrage','峰谷套利','Peak-Valley Arbitrage','低谷低价充电、高峰高价放电，赚取价差。','低买高卖，只不过买卖的是电。','storage'],
  ['round-trip-efficiency','循环效率','Round-Trip Efficiency','充进去的电与放出来的电之比，反映能量损耗。','存一百取八十。','storage'],
  ['cycle-life','循环寿命','Cycle Life','电池在容量衰减到一定程度前能完成的充放电循环次数。','能用多少次的次数额度。','storage'],
  ['lcos','平准化储能成本','Levelized Cost of Storage','把全生命周期成本折算到每度放电成本，用来比较不同储能方案。','把整体花销摊到每度电上。','storage'],

  /* --- newenergy --- */
  ['consumption-quota','消纳责任权重','Renewable Consumption Quota','各省和市场主体必须消纳的可再生能源电量比例要求。','必须完成的绿色份额。','newenergy'],
  ['mechanism-price','机制电价','Mechanism Price','新能源全面入市后，通过竞价形成、用于差价结算的固定价格，稳定项目收益预期。','入市了但给你一份价格保险。','newenergy'],
  ['document-136','136 号文','Document No.136 (2025)','2025 年《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》。','新能源全面入市的分水岭。','newenergy'],
  ['duck-curve','鸭子曲线','Duck Curve','光伏大发时段净负荷被压低、傍晚骤升形成的曲线形状，形似鸭子。','中午凹下去、傍晚翘起来。','newenergy'],
  ['curtailment','弃风弃光','Wind and Solar Curtailment','因消纳能力不足而不得不放弃的新能源发电量。','发的电用不掉，只能白白扔掉。','newenergy'],
  ['green-direct','绿电直连','Direct Green Power Connection','新能源电站通过专线直接向特定用户供电的模式。','绕开公共电网的点对点供电。','newenergy'],
  ['source-grid-load-storage','源网荷储一体化','Source-Grid-Load-Storage Integration','把电源、电网、负荷、储能作为一个整体统筹规划运行的模式。','四件事一起算账。','newenergy'],
  ['mandatory-storage','新能源配储','Mandatory Storage for Renewables','要求新建新能源项目按一定比例配置储能的规定，各地要求不一。','新来的先自己带个充电宝。','newenergy'],

  /* --- green --- */
  ['green-power','绿电','Green Power','来自风、光、水等可再生能源，并附带绿色环境属性证明的电力。','带出身证明的电。','green'],
  ['green-power-trading','绿电交易','Green Power Trading','买卖双方在交易电力的同时，明确环境权益归属的专项交易。','买的不仅是电，还有那一份绿。','green'],
  ['green-certificate','绿证','Green Certificate','可再生能源电力消费的唯一凭证，可核发、可交易、可分次使用。','绿电的身份证。','green'],
  ['green-premium','绿电溢价','Green Premium','绿电价格高于普通电的部分，本质是为环境属性付的钱。','为绿这一个字多花的钱。','green'],
  ['consumption-accounting','消纳量核算','Consumption Accounting','对市场主体实际消纳的可再生能源电量进行统计与确认。','把你用掉的绿电记上账。','green'],
  ['re100','RE100','RE100','由国际组织发起的倡议，加入企业承诺 100% 使用可再生能源电力。','国际大厂的绿色承诺书。','green'],
  ['triple-accounting','三重计量','Triple Accounting','电力交易、绿证交易与消纳量核算三套口径相互衔接的关系。','一笔绿电在三本账上都要对得上。','green'],

  /* --- carbon --- */
  ['carbon-market','碳市场','Carbon Market','把二氧化碳排放权当作商品交易的市场，用价格机制推动减排。','给排放权标上价格。','carbon'],
  ['cap-and-trade','总量控制与交易','Cap and Trade','政府设定排放总量上限，把配额分给企业，企业之间可买卖余缺。','总量封顶，内部调剂。','carbon'],
  ['carbon-quota','碳配额','Carbon Allowance','政府分配给重点排放单位的二氧化碳排放额度，单位通常为吨。','一张可排放多少吨的许可证。','carbon'],
  ['benchmark-method','基准线法','Benchmarking Method','按行业先进排放水平（基准值）乘以产量来分配配额的方法。','按行业平均线算你能排多少。','carbon'],
  ['mrv','MRV','Monitoring, Reporting and Verification','碳排放的监测、报告与核查体系，是碳市场数据可信的基础。','先量准，才能算清。','carbon'],
  ['ccer','CCER','Chinese Certified Emission Reduction','国家核证自愿减排量，可用于抵销部分碳配额履约。','自己额外减排挣来的抵扣券。','carbon'],
  ['carbon-price','碳价','Carbon Price','每吨二氧化碳排放权的价格，通过碳市场交易形成。','排放的标价。','carbon'],
  ['carbon-cost-transmission','碳成本传导','Carbon Cost Transmission','碳价通过发电成本传导到电价，进而影响用户用能成本的过程。','碳的成本顺着链条传下去。','carbon'],
  ['carbon-leakage','碳泄漏','Carbon Leakage','高排放产业因碳成本上升而转移到减排要求更松的地区。','把排放挪个地方，总量没少。','carbon'],
  ['coverage-expansion','扩围','Coverage Expansion','全国碳市场从发电行业扩展到钢铁、水泥、电解铝等更多行业。','摊子越铺越大。','carbon'],

  /* --- finance --- */
  ['cfd','差价合约','Contract for Difference','约定一个参考价，实际价格与它之差由双方结算，用来锁定价格波动。','多退少补的价格保险。','finance'],
  ['power-futures','电力期货','Power Futures','以电力为标的的标准化远期合约，可在交易所买卖以管理价格风险。','把未来的电提前定个价。','finance'],
  ['hedging','套期保值','Hedging','用金融或合同工具对冲价格波动风险，让收益更可预期。','提前买个保险，别赌运气。','finance'],
  ['price-risk','价格风险','Price Risk','由于电价波动导致收益不确定的风险，是电力市场最基础的风险。','价格的涨跌风险。','finance'],
  ['credit-risk','信用风险','Credit Risk','交易对手不履约、不付款带来的损失可能性。','对方赖账的风险。','finance'],
  ['margin','保证金','Margin','交易中按比例缴纳的担保资金，用于覆盖潜在违约损失。','先押一笔钱在桌上。','finance'],
  ['power-derivatives','电力衍生品','Power Derivatives','以电力为标的的期货、期权、掉期等金融工具的总称。','关于电的金融合约。','finance'],
  ['speculation','投机','Speculation','以获取价差收益为目的参与交易，承担价格风险，也为市场提供流动性。','赌价格方向的那部分人。','finance'],
  ['arbitrage','套利','Arbitrage','利用不同市场或时间的价格差获取低风险收益。','同一个东西两地有价差，来回搬。','finance'],

  /* --- practice --- */
  ['trader','交易员','Trader','代表市场主体在市场中进行报价、成交与风险管理的专业人员。','牌桌上的操盘手。','practice'],
  ['quantity-price-declaration','报量报价','Quantity and Price Declaration','按规则向市场提交电量与价格申报，是参与市场的核心动作。','把你的条件写成报价单交上去。','practice'],
  ['trading-log','交易日志','Trading Log','记录每笔交易依据、判断与结果的台账，是复盘的基础。','交易员的日记本。','practice'],
  ['review-loop','复盘','Review Loop','对已发生交易的过程与结果做系统回顾，找出可改进之处。','打完牌回头看看哪手出错了。','practice'],
  ['position','持仓','Position','市场主体持有的合同电量与现货头寸的合计状态。','手里握着多少货。','practice'],
  ['market-power','市场力','Market Power','某主体通过控制供给或需求影响市场价格的能力，是监管重点。','一个人能左右全场价格。','practice'],
  ['market-compliance','市场合规','Market Compliance','遵守交易规则、信息披露与反操纵要求的底线要求。','牌桌上不能出老千。','practice'],
  ['settlement-risk','结算风险','Settlement Risk','从成交到资金交割之间可能出现的对方不付款或延迟付款风险。','成交了不等于收到钱。','practice'],

  /* --- interprovincial --- */
  ['interprovincial-trading','省间交易','Inter-Provincial Trading','不同省份之间买卖电力的交易，把资源富余省的电送到负荷中心省。','跨省串门买电。','interprovincial'],
  ['interprovincial-spot','省间现货','Inter-Provincial Spot Market','在省间层面开展的日前与实时现货交易，价格反映跨区供需与通道充裕度。','跨省的当日时价。','interprovincial'],
  ['power-corridor','跨区输电通道','Inter-Regional Power Corridor','把电从一个区域送到另一个区域的特高压交直流输电通道，容量有限。','跨省的电力高速。','interprovincial'],
  ['uhv-dc','特高压直流','UHVDC','远距离、大容量、点对点送电的直流输电技术，是跨区送电的主力。','电力版的高铁专线。','interprovincial'],
  ['atc','可用输电能力','Available Transfer Capability','通道在满足安全约束前提下还能用于交易输送的容量，是省间交易的物理天花板。','这条路还能挤进去多少车。','interprovincial'],
  ['west-east-power','西电东送','West-East Power Transmission','把西部水电、煤电与风光送到东部负荷中心的长期国家战略。','西边的电往东边搬。','interprovincial'],
  ['sending-price','送端电价','Sending-End Price','在送出省一侧形成的上网或交易价格。','产地出货价。','interprovincial'],
  ['receiving-price','受端电价','Receiving-End Price','在受电省一侧落地的价格，等于送端价格加输电费用与网损分摊。','到货价。','interprovincial'],
  ['interprovincial-transmission-fee','省间输电费','Inter-Provincial Transmission Fee','使用跨省跨区通道需要支付的输电服务费用。','跨省的过路费。','interprovincial'],
  ['interprovincial-barrier','省间壁垒','Inter-Provincial Barrier','地方为保本地电量、电价或税收而限制外来电进入的做法，是统一市场的主要障碍。','各自护着自家的小院。','interprovincial'],
  ['tie-line','省间联络线','Tie Line','两个省级电网之间的连接线路，其潮流决定省间交换功率。','两个省之间那根接线。','interprovincial'],
  ['cross-provincial-green','跨省绿电交易','Cross-Provincial Green Power Trading','绿电跨省交易，卖方在送电省、买方在受电省，环境属性随电量一并转移。','异地的绿电也能买。','interprovincial'],
  ['prioritized-generation','优先发电','Prioritized Generation','保障性收购的发电量（水电、核电、部分新能源等），通常不参与市场化竞争。','有免排队资格的电。','interprovincial'],
  ['provincial-balance','省内电力平衡','Provincial Power Balance','以省为单位开展的电量与电力平衡，是"省为实体"的技术基础。','各自盘点自家够不够用。','interprovincial']
];

/* ============ 加载课程内容 ============ */
const L = {};
const srcDir = path.join(__dirname, '_src');
fs.readdirSync(srcDir).filter(f => f.endsWith('.js')).sort().forEach(f => {
  eval(fs.readFileSync(path.join(srcDir, f), 'utf8'));
});

/* ============ 组装 + 校验 + 写文件 ============ */
const termIds = new Set(TERMS.map(t => t[0]));
const moduleIds = new Set(MODULES.map(m => m[0]));
const path_ = [];
const lessonIds = new Set();
MODULES.forEach(m => (L[m[0]] || []).forEach(les => { var id = m[0] + '/' + les[0]; path_.push(id); lessonIds.add(id); }));

let errors = [];
function checkBody(id, html) {
  if (!html) return;
  let m; const re = /data-term="([^"]+)"/g;
  while ((m = re.exec(html))) if (!termIds.has(m[1])) errors.push(id + ' 未知术语: ' + m[1]);
  const rl = /href="#\/l\/([^"]+)"/g;
  while ((m = rl.exec(html))) if (!lessonIds.has(m[1])) errors.push(id + ' 链接到不存在的课: ' + m[1]);
  const rm = /href="#\/m\/([^"]+)"/g;
  while ((m = rm.exec(html))) if (!moduleIds.has(m[1])) errors.push(id + ' 链接到不存在的模块: ' + m[1]);
  if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(html)) errors.push(id + ' 含 emoji/特殊符号');
}
MODULES.forEach(m => (L[m[0]] || []).forEach(les => {
  var id = m[0] + '/' + les[0];
  [les[4], les[5], les[6], les[8]].forEach(b => checkBody(id, b));
  (les[7] || []).forEach(q => { checkBody(id, q.q); checkBody(id, q.explain); });
}));
/* 模块完整性校验:模块表里有,但 _src 里没写内容的模块要报错 */
MODULES.forEach(m => { if (!L[m[0]] || !L[m[0]].length) errors.push('模块 ' + m[0] + ' 没有任何课时内容'); });
/* 反向校验:_src 里写了但模块表里没有的模块 */
Object.keys(L).forEach(k => { if (!moduleIds.has(k) && L[k] && L[k].length) errors.push('_src 中的模块 ' + k + ' 未登记在 MODULES 中'); });
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js */
const mods = MODULES.map((m, i) => ({ id: m[0], order: i, title: m[1], desc: m[2], lessons: (L[m[0]] || []).length, tag: m[3], en: m[4] }));
let s = '/* 模块元数据 + 学习路径(电力市场与能源交易)(自动生成,勿手改) */\n';
s += 'window.EMT = window.EMT || {};\n';
s += 'EMT.modules = ' + J(mods) + ';\n';
s += 'EMT.path = ' + J(path_) + ';\n';
s += 'EMT.totalLessons = EMT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(电力市场与能源交易)(自动生成) {id,name,en,def,analogy,module} */\nwindow.EMT = window.EMT || {};\nEMT.terms = ' + J(termObjs) + ';\n');

/* 课时文件 */
const scriptTags = [];
MODULES.forEach(m => {
  const mid = m[0];
  (L[mid] || []).forEach((les, idx) => {
    const id = mid + '/' + les[0];
    const obj = {
      id: id, module: mid, order: idx + 1, title: les[1], minutes: les[2],
      keywords: les[3], concept: les[4], core: les[5], pitfalls: les[6], quiz: les[7] || [], links: les[8]
    };
    let body = '/* ' + id + ' (自动生成) */\nEMT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html(幂等:<!--LESSONS--> 标记常驻,重复 build 不损耗) */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') === -1) {
  if (/<!-- Lessons[\s\S]*?<\/body>/.test(idx)) {
    idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!--LESSONS-->\n\n</body>');
  } else if (/<script src="content\/terms\.js"><\/script>/.test(idx)) {
    idx = idx.replace('<script src="content/terms.js"></script>',
      '<script src="content/terms.js"></script>\n<!--LESSONS-->');
  } else {
    console.error('注入失败: index.html 既无 <!--LESSONS--> 标记也无可识别的旧结构。');
    process.exit(1);
  }
}
idx = idx.replace(/<script src="content\/(?!modules\.js|terms\.js)[^"]*"><\/script>\s*/g, '');
idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n') + '\n<!--LESSONS-->');
const injected = (idx.match(/<script src="content\//g) || []).length - 2;
if (injected !== scriptTags.length) {
  console.error('注入校验失败: index.html 课时标签 ' + injected + ' 个 != 应注入 ' + scriptTags.length + ' 个。');
  process.exit(1);
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
