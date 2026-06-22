/* 17 个模块元信息 + 学习路线(路线图优先:首页"继续学习"按此推进)。
   short 用于侧边图签(≤2 字),no 是目录序号。
   路线占位共 138 课:未编写的课程显示"待编写",写好课程文件后自动激活。 */
(function () {
  'use strict';

  [
    { id: 'guide',     no: 0,  short: '导览', title: '学习导览',          sub: '怎么用 · 全景图 · 路线',        desc: '网站怎么用、一图看懂电力行业全景、学习路线怎么走、术语点查与收藏怎么玩。' },
    { id: 'energy',    no: 1,  short: '能源', title: '能源全景',          sub: '价值链 · 公用事业 · 禀赋',      desc: '一次/二次能源、能源价值链、公用事业三大基因(自然垄断·网络型·强监管)、中国能源禀赋与转型大势。' },
    { id: 'basics',    no: 2,  short: '电学', title: '电的物理通识',      sub: 'kW与kWh · 50Hz · 总钥匙',       desc: '全站地基:功率与电量、电压电流、交直流、三相电、50Hz、电不能大规模储存(总钥匙)、一度电的旅程、线损。' },
    { id: 'gen',       no: 3,  short: '发电', title: '发电',              sub: '六大家族 · 基荷调峰',           desc: '火电、水电、核电、风电、光伏、燃气抽蓄,基荷与调峰的分工、利用小时数、中国电源结构。' },
    { id: 'trans',     no: 4,  short: '输变', title: '输电与变电',        sub: '电压等级 · 特高压 · N-1',       desc: '电压等级阶梯、为什么升压、变电站、交直流输电、特高压、西电东送、电网拓扑与 N-1。' },
    { id: 'dist',      no: 5,  short: '配用', title: '配电与用电',        sub: '台区 · 可靠性 · 有源配网',      desc: '输配区别、配网层级、台区、接线方式与可靠性、配电自动化 FLISR、有源配电网、负荷曲线。' },
    { id: 'dispatch',  no: 6,  short: '调度', title: '调度运行',          sub: '五级体系 · 三大目标 · AGC',     desc: '电网的大脑:五级调度、频率与功率平衡、平衡/安全/经济的取舍、AGC/AVC、负荷预测、备用、新型调度。' },
    { id: 'china',     no: 7,  short: '格局', title: '中国电网格局与电改', sub: '两大一小 · 电改 · 电价构成',    desc: '国网/南网/蒙西的由来、厂网分开、5号文到9号文、终端电价拆解、电网怎么赚钱(准许收益)。' },
    { id: 'org',       no: 8,  short: '组织', title: '监管体制与国网组织', sub: '发改委 · 能源局 · 国网架构',    desc: '发改委/能源局/省市政府与国家电网的关系,国网总部部门、省公司架构、处室级拆解。' },
    { id: 'market',    no: 9,  short: '市场', title: '电力市场',          sub: '中长期 · 现货 · 辅助服务',      desc: '为什么要市场化、三个特殊、中长期/现货/辅助服务、节点电价与负电价、售电公司、一笔电量的闭环。' },
    { id: 'newenergy', no: 10, short: '新能', title: '新能源与新型电力系统', sub: '鸭子曲线 · 消纳 · 源网荷储',  desc: '风光三性、反调峰与鸭子曲线、消纳与弃风弃光、源网荷储、虚拟电厂、惯量下降、构网型。' },
    { id: 'storage',   no: 11, short: '储能', title: '储能',              sub: '技术路线 · 商业模式',           desc: '储能为什么是刚需、功率型与能量型、技术路线全景、抽蓄主力、五种商业模式、配储争议、两道坎。' },
    { id: 'retail',    no: 12, short: '营销', title: '营销与电价',        sub: '计量 · 阶梯分时 · 两部制',      desc: '营销不是推销电:报装到收费全流程、智能电表与采集、阶梯/分时/两部制电价、需求响应、电力大数据。' },
    { id: 'carbon',    no: 13, short: '双碳', title: '双碳与碳市场',      sub: '3060 · 配额交易 · 绿证',        desc: '双碳目标、碳定价原理、cap-and-trade、全国碳市场、CCER、碳配额/绿证/绿电四概念辨析。' },
    { id: 'digital',   no: 14, short: '数字', title: '能源数字化',        sub: 'SCADA/EMS · 中台 · AI',         desc: '信息流驾驭能量流:四层架构、SCADA/EMS/DMS、营销系统与 AMI、数据中台、AI 应用、数字孪生与安全分区。' },
    { id: 'finance',   no: 15, short: '金融', title: '能源金融',          sub: '盈利模式 · 估值 · REITs',       desc: '发电/电网/新能源运营商的盈利模式、类债券特征、DCF 估值、PPA、REITs、电力板块投资逻辑。' },
    { id: 'multi',     no: 16, short: '气水', title: '气·水·氢',          sub: '产业链 · 横向对比',             desc: '天然气产业链与气电耦合、水务产业链与水价、氢能颜色与制储运,电气水氢四品种横向对比。' }
  ].forEach(PGF.registerModule);

  /* 学习路线:有序课程 id,共 138 个占位。
     内容扩充时:写好课程文件 → 在 index.html 加 script 标签 → 此处占位自动激活。 */
  PGF.registerPath([
    /* ── 模块 0 · 学习导览(4) ── */
    { id: 'guide-01-howto',      module: 'guide', title: '欢迎:这个网站怎么用' },
    { id: 'guide-02-bigmap',     module: 'guide', title: '一图看懂电力行业全景' },
    { id: 'guide-03-route',      module: 'guide', title: '学习路线:先学什么后学什么' },
    { id: 'guide-04-terms',      module: 'guide', title: '术语点查与收藏怎么玩' },

    /* ── 模块 1 · 能源全景(6) ── */
    { id: 'energy-01-chain',     module: 'energy', title: '能源价值链:从一次能源到插座' },
    { id: 'energy-02-secondary', module: 'energy', title: '为什么说电是"二次能源"' },
    { id: 'energy-03-utility',   module: 'energy', title: '公用事业三大基因:自然垄断·网络型·强监管' },
    { id: 'energy-04-endowment', module: 'energy', title: '中国能源禀赋:富煤、贫油、少气' },
    { id: 'energy-05-mix',       module: 'energy', title: '中国能源消费结构与电气化' },
    { id: 'energy-06-transition', module: 'energy', title: '能源转型大势:从化石到可再生' },

    /* ── 模块 2 · 电的物理通识(8) ── */
    { id: 'basics-01-kwh',       module: 'basics', title: 'kW 与 kWh:功率和电量,最常混的一对' },
    { id: 'basics-02-via',       module: 'basics', title: '电压·电流·电阻:水管模型一次讲清' },
    { id: 'basics-03-acdc',      module: 'basics', title: '交流与直流:插座里的电为什么是交流' },
    { id: 'basics-04-threephase', module: 'basics', title: '三相电:工厂的电和你家的电差在哪' },
    { id: 'basics-05-no-storage', module: 'basics', title: '电为什么不能大规模储存?' },
    { id: 'basics-06-50hz',      module: 'basics', title: '50Hz:电网的心跳' },
    { id: 'basics-07-journey',   module: 'basics', title: '一度电的旅程:从电厂到插座' },
    { id: 'basics-08-loss',      module: 'basics', title: '线损:电在路上也会"漏"' },

    /* ── 模块 3 · 发电(10) ── */
    { id: 'gen-01-overview',     module: 'gen', title: '发电方式总览:一张表看懂六大家族' },
    { id: 'gen-02-coal',         module: 'gen', title: '煤电:曾经的主力,如今的"调节器"' },
    { id: 'gen-03-hydro',        module: 'gen', title: '水电:会发电的水库' },
    { id: 'gen-04-nuclear',      module: 'gen', title: '核电:烧"石头"的蒸汽机' },
    { id: 'gen-05-wind',         module: 'gen', title: '风电:靠天吃饭的大风车' },
    { id: 'gen-06-solar',        module: 'gen', title: '光伏:把阳光变成电' },
    { id: 'gen-07-gas',          module: 'gen', title: '燃气与抽蓄:电网的"快速反应部队"' },
    { id: 'gen-08-baseload',     module: 'gen', title: '基荷与调峰:电源的分工' },
    { id: 'gen-09-hours',        module: 'gen', title: '利用小时数:电厂的"出勤率"' },
    { id: 'gen-10-mix',          module: 'gen', title: '中国电源结构:装机与发电量为什么不一样' },

    /* ── 模块 4 · 输电与变电(8) ── */
    { id: 'trans-01-voltage',    module: 'trans', title: '电压等级阶梯:220V 到 1000kV' },
    { id: 'trans-02-stepup',     module: 'trans', title: '为什么远距离输电要升压' },
    { id: 'trans-03-substation', module: 'trans', title: '变电站里有什么' },
    { id: 'trans-04-acdc-line',  module: 'trans', title: '交流输电 vs 直流输电' },
    { id: 'trans-05-uhv',        module: 'trans', title: '特高压:中国的"电力高铁"' },
    { id: 'trans-06-westeast',   module: 'trans', title: '西电东送:为什么要跨半个中国送电' },
    { id: 'trans-07-n1',         module: 'trans', title: '电网拓扑与 N-1:断一条线也不能停电' },
    { id: 'trans-08-corridor',   module: 'trans', title: '输电走廊与通道约束' },

    /* ── 模块 5 · 配电与用电(8) ── */
    { id: 'dist-01-vs',          module: 'dist', title: '输电网 vs 配电网:四个维度分清' },
    { id: 'dist-02-layers',      module: 'dist', title: '配电网层级:35kV 到你家 220V' },
    { id: 'dist-03-taiqu',       module: 'dist', title: '台区:电网管理的最小单元' },
    { id: 'dist-04-topology',    module: 'dist', title: '接线方式:辐射、手拉手、双电源' },
    { id: 'dist-05-reliability', module: 'dist', title: '供电可靠性:年户均停电时间' },
    { id: 'dist-06-da',          module: 'dist', title: '配电自动化:故障自愈 FLISR' },
    { id: 'dist-07-active',      module: 'dist', title: '有源配电网:屋顶光伏和充电桩带来的新难题' },
    { id: 'dist-08-load',        module: 'dist', title: '用户类别与负荷曲线' },

    /* ── 模块 6 · 调度运行(10) ── */
    { id: 'dispatch-01-what',    module: 'dispatch', title: '调度:电网的大脑' },
    { id: 'dispatch-02-levels',  module: 'dispatch', title: '五级调度体系:国调到县调' },
    { id: 'dispatch-03-freq',    module: 'dispatch', title: '频率与功率平衡:有功-频率,无功-电压' },
    { id: 'dispatch-04-goals',   module: 'dispatch', title: '三大目标:平衡、安全、经济的取舍' },
    { id: 'dispatch-05-agc',     module: 'dispatch', title: 'AGC 与 AVC:秒级自动调节' },
    { id: 'dispatch-06-forecast', module: 'dispatch', title: '负荷预测:明天用多少电,今天就要知道' },
    { id: 'dispatch-07-plan',    module: 'dispatch', title: '发电计划:机组组合与经济调度' },
    { id: 'dispatch-08-reserve', module: 'dispatch', title: '检修与备用:电网为什么要留冗余' },
    { id: 'dispatch-09-accident', module: 'dispatch', title: '事故处理:电网出事时调度在干什么' },
    { id: 'dispatch-10-new',     module: 'dispatch', title: '新型调度:新能源带来的新挑战' },

    /* ── 模块 7 · 中国电网格局与电改(8) ── */
    { id: 'china-01-pattern',    module: 'china', title: '国网、南网、蒙西:"两大一小"的由来' },
    { id: 'china-02-separation', module: 'china', title: '厂网分开:2002 年那场大拆分' },
    { id: 'china-03-reform',     module: 'china', title: '电改脉络:5 号文到 9 号文' },
    { id: 'china-04-price',      module: 'china', title: '终端电价拆解:一度电的钱去了哪' },
    { id: 'china-05-profit',     module: 'china', title: '电网公司怎么赚钱:准许收益' },
    { id: 'china-06-tariff',     module: 'china', title: '输配电价怎么核定' },
    { id: 'china-07-invest',     module: 'china', title: '电网投资逻辑:为什么总在建' },
    { id: 'china-08-global',     module: 'china', title: '全球视角:各国电网长什么样' },

    /* ── 模块 8 · 监管体制与国网组织(10) ── */
    { id: 'org-01-system',       module: 'org', title: '能源管理体制总览:谁在管能源' },
    { id: 'org-02-ndrc',         module: 'org', title: '国家发改委:管价格、管规划、管项目' },
    { id: 'org-03-nea',          module: 'org', title: '国家能源局:行业管理与市场监管' },
    { id: 'org-04-local',        module: 'org', title: '省市政府的角色:地方与电网的博弈' },
    { id: 'org-05-regulate',     module: 'org', title: '政府怎么"管"国家电网' },
    { id: 'org-06-sgcc',         module: 'org', title: '国家电网是谁:央企定位与国资委' },
    { id: 'org-07-hq1',          module: 'org', title: '国网总部部门(上):核心业务条线' },
    { id: 'org-08-hq2',          module: 'org', title: '国网总部部门(下):职能支撑与直属单位' },
    { id: 'org-09-province',     module: 'org', title: '省公司架构:省-市-县三级穿透' },
    { id: 'org-10-section',      module: 'org', title: '处室级拆解:一项业务如何从总部走到县' },

    /* ── 模块 9 · 电力市场(10) ── */
    { id: 'market-01-why',       module: 'market', title: '为什么要电力市场化:统购统销的弊端' },
    { id: 'market-02-special',   module: 'market', title: '电力商品的三个特殊' },
    { id: 'market-03-medium',    module: 'market', title: '中长期交易:锁量锁价的"期货"' },
    { id: 'market-04-spot',      module: 'market', title: '现货市场:日前、日内、实时' },
    { id: 'market-05-link',      module: 'market', title: '中长期与现货怎么衔接:价差结算' },
    { id: 'market-06-price',     module: 'market', title: '节点电价、负电价与价格尖峰' },
    { id: 'market-07-ancillary', module: 'market', title: '辅助服务:调频、调峰、备用' },
    { id: 'market-08-players',   module: 'market', title: '市场主体生态:谁在市场里玩' },
    { id: 'market-09-retailer',  module: 'market', title: '售电公司:商业模式与偏差考核' },
    { id: 'market-10-loop',      module: 'market', title: '一笔电量的完整闭环:从签约到结算' },

    /* ── 模块 10 · 新能源与新型电力系统(8) ── */
    { id: 'ne-01-nature',        module: 'newenergy', title: '风光的"三性":波动、间歇、随机' },
    { id: 'ne-02-duck',          module: 'newenergy', title: '反调峰与鸭子曲线' },
    { id: 'ne-03-curtail',       module: 'newenergy', title: '消纳与弃风弃光' },
    { id: 'ne-04-system',        module: 'newenergy', title: '新型电力系统:从源随荷动到源荷互动' },
    { id: 'ne-05-sghc',          module: 'newenergy', title: '源网荷储:四端一起发力' },
    { id: 'ne-06-vpp',           module: 'newenergy', title: '虚拟电厂与需求响应' },
    { id: 'ne-07-inertia',       module: 'newenergy', title: '惯量下降:电网为什么"变脆"了' },
    { id: 'ne-08-gfm',           module: 'newenergy', title: '构网型 vs 跟网型' },

    /* ── 模块 11 · 储能(8) ── */
    { id: 'storage-01-why',      module: 'storage', title: '储能为什么是刚需' },
    { id: 'storage-02-type',     module: 'storage', title: '功率型与能量型:两种储能两种活' },
    { id: 'storage-03-tech',     module: 'storage', title: '技术路线全景:抽蓄到氢储' },
    { id: 'storage-04-pumped',   module: 'storage', title: '抽水蓄能:为什么它是绝对主力' },
    { id: 'storage-05-biz',      module: 'storage', title: '储能怎么赚钱:五种商业模式' },
    { id: 'storage-06-policy',   module: 'storage', title: '强制配储的逻辑与争议' },
    { id: 'storage-07-dual',     module: 'storage', title: '既是电源又是负荷:储能的双重身份' },
    { id: 'storage-08-bottleneck', module: 'storage', title: '安全与经济性:储能的两道坎' },

    /* ── 模块 12 · 营销与电价(8) ── */
    { id: 'retail-01-what',      module: 'retail', title: '电力营销不是"推销电"' },
    { id: 'retail-02-journey',   module: 'retail', title: '一度电的电费旅程:报装到收费' },
    { id: 'retail-03-meter',     module: 'retail', title: '智能电表与用电信息采集' },
    { id: 'retail-04-ladder',    module: 'retail', title: '居民阶梯电价' },
    { id: 'retail-05-tou',       module: 'retail', title: '分时电价:把用电搬到谷段去' },
    { id: 'retail-06-twopart',   module: 'retail', title: '两部制电价:工商业为什么交"两份钱"' },
    { id: 'retail-07-dsm',       module: 'retail', title: '需求侧管理与需求响应' },
    { id: 'retail-08-bigdata',   module: 'retail', title: '电力大数据:负荷画像与反窃电' },

    /* ── 模块 13 · 双碳与碳市场(8) ── */
    { id: 'carbon-01-3060',      module: 'carbon', title: '双碳:2030 达峰、2060 中和' },
    { id: 'carbon-02-power',     module: 'carbon', title: '为什么电力是双碳主战场' },
    { id: 'carbon-03-price',     module: 'carbon', title: '给碳定价:碳税 vs 碳市场' },
    { id: 'carbon-04-ets',       module: 'carbon', title: 'cap-and-trade:总量控制与配额交易' },
    { id: 'carbon-05-quota',     module: 'carbon', title: '配额分配与履约' },
    { id: 'carbon-06-national',  module: 'carbon', title: '全国碳市场与扩围' },
    { id: 'carbon-07-ccer',      module: 'carbon', title: 'CCER:自愿减排市场' },
    { id: 'carbon-08-green',     module: 'carbon', title: '碳配额、CCER、绿证、绿电:四个概念一次分清' },

    /* ── 模块 14 · 能源数字化(8) ── */
    { id: 'digital-01-why',      module: 'digital', title: '信息流驾驭能量流' },
    { id: 'digital-02-arch',     module: 'digital', title: '四层架构:感知、网络、平台、应用' },
    { id: 'digital-03-scada',    module: 'digital', title: 'SCADA 与 EMS:调度的眼睛和大脑' },
    { id: 'digital-04-dms',      module: 'digital', title: '配电侧的 DMS' },
    { id: 'digital-05-ami',      module: 'digital', title: '营销侧的 AMI 与业务系统' },
    { id: 'digital-06-platform', module: 'digital', title: '数据中台与物联网平台' },
    { id: 'digital-07-ai',       module: 'digital', title: 'AI 在电力里的真实应用' },
    { id: 'digital-08-twin',     module: 'digital', title: '数字孪生与安全分区' },

    /* ── 模块 15 · 能源金融(8) ── */
    { id: 'finance-01-model',    module: 'finance', title: '三类玩家的盈利模式' },
    { id: 'finance-02-bond',     module: 'finance', title: '公用事业为什么像"债券"' },
    { id: 'finance-03-dcf',      module: 'finance', title: '电力资产怎么估值:DCF 与股息' },
    { id: 'finance-04-vars',     module: 'finance', title: '关键变量敏感性:电价、煤价、利率' },
    { id: 'finance-05-ppa',      module: 'finance', title: 'PPA:长期购电协议' },
    { id: 'finance-06-reits',    module: 'finance', title: '能源基础设施 REITs' },
    { id: 'finance-07-logic',    module: 'finance', title: '电力板块投资逻辑' },
    { id: 'finance-08-sectors',  module: 'finance', title: '子板块对比:火、水、核、绿电、电网设备' },

    /* ── 模块 16 · 气·水·氢(8) ── */
    { id: 'multi-01-gas',        module: 'multi', title: '天然气产业链:从井口到灶台' },
    { id: 'multi-02-lng',        module: 'multi', title: 'LNG 与天然气定价' },
    { id: 'multi-03-gaspower',   module: 'multi', title: '气电耦合:燃气电厂的双重身份' },
    { id: 'multi-04-water',      module: 'multi', title: '水务产业链:从水源到水龙头' },
    { id: 'multi-05-waterprice', module: 'multi', title: '水价与 BOT/PPP' },
    { id: 'multi-06-h2color',    module: 'multi', title: '氢能的颜色:绿氢、蓝氢、灰氢' },
    { id: 'multi-07-h2tech',     module: 'multi', title: '电解水制氢与燃料电池' },
    { id: 'multi-08-compare',    module: 'multi', title: '电、气、水、氢横向对比' }
  ]);
})();
