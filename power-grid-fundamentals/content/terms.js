/* 全站术语库(ADR-8)。每条:
   id      术语 id(拼音或英文缩写,全站唯一,<gd data-term="id"> 引用)
   name    中文名
   en      英文/缩写(可选)
   def     大白话定义(一两句,独立可读,不依赖上下文)
   analogy 类比(可选,强烈建议给)
   lesson  讲透它的那一课 id(可选;课未编写也可先填,激活后自动可跳转)
   随内容逐模块扩充:每写一个模块的课程,同步把新术语追加到对应分组。 */
PGF.registerTerms([
  /* ── 模块 2 · 电的物理通识 ── */
  {
    id: 'kwh', name: '千瓦时(度)', en: 'kWh',
    def: '电量单位,1 千瓦的电器用 1 小时就是 1 度电。电费按它收。',
    analogy: '功率是水龙头开多大,电量是接了多少水;度就是"一桶水"。',
    lesson: 'basics-01-kwh'
  },
  {
    id: 'gonglv', name: '功率', en: 'kW / MW / GW',
    def: '用电或发电的"快慢",单位瓦/千瓦/兆瓦/吉瓦。1GW=100万千瓦,约等于一台大核电机组。',
    analogy: '水龙头开多大。开得越大(功率越高),同样时间流的水(电量)越多。',
    lesson: 'basics-01-kwh'
  },
  {
    id: 'dianya', name: '电压', en: 'voltage / V',
    def: '驱动电流流动的"推力",单位伏特(V)。电压越高,同样电阻下电流越大。电网分多个电压等级:220V(家用)到 1000kV(特高压)。',
    analogy: '水塔的高度:塔越高水压越大,水流越猛。',
    lesson: 'basics-02-via'
  },
  {
    id: 'dianliu', name: '电流', en: 'current / A',
    def: '单位时间内通过导线的电荷量,单位安培(A)。电流越大,导线发热越多,需要的导线越粗。',
    analogy: '水管里每秒流过多少水。',
    lesson: 'basics-02-via'
  },
  {
    id: 'dianzu', name: '电阻', en: 'resistance / Ω',
    def: '导体对电流的阻碍程度,单位欧姆(Ω)。导线越长越细电阻越大。电流通过电阻会发热,这是线损的根源。',
    analogy: '水管的粗细:管越细阻力越大,同样水压下水流越小。',
    lesson: 'basics-02-via'
  },
  {
    id: 'jiaoliudian', name: '交流电', en: 'AC',
    def: '电流方向每秒来回交替的电,画出来是正弦波。中国电网标准是 50Hz 交流。交流最大的优势是可以用变压器轻松升降压。',
    analogy: '拉锯:一推一拉来回运动,但"锯"照样在切。',
    lesson: 'basics-03-acdc'
  },
  {
    id: 'zhiliudian', name: '直流电', en: 'DC',
    def: '电流始终朝一个方向流动的电。电池、光伏板天生产直流。远距离输电中直流损耗更低,但需要换流站转换。',
    analogy: '单行道:车只朝一个方向开。',
    lesson: 'basics-03-acdc'
  },
  {
    id: 'sanxiang', name: '三相电', en: 'three-phase',
    def: '发电机同时产生三组交流电,相位各错开 120°。三相合在一起功率输出恒定,且比三套单相省一半导线,是全世界电网的标准。',
    analogy: '三人骑三脚踏板车:脚踏板均匀错开,任何时刻总有人在蹬,输出特别平稳。',
    lesson: 'basics-04-threephase'
  },
  {
    id: 'pinlv', name: '频率', en: 'frequency',
    def: '交流电每秒来回变化的次数,中国电网是 50Hz。发电多于用电频率上升,反之下降——它是供需平衡的实时仪表。',
    analogy: '电网的心跳:心率稳定 = 身体健康,频率稳定 = 供需平衡。',
    lesson: 'basics-06-50hz'
  },
  {
    id: 'shunshi-pingheng', name: '瞬时平衡',
    def: '电不能大规模储存,所以每一秒发出来的电必须正好等于用掉的电。这是整个电力行业的总钥匙。',
    analogy: '现场直播:演多少观众看多少,没法先录好攒着播。',
    lesson: 'basics-05-no-storage'
  },
  {
    id: 'fadian', name: '发电', en: 'generation',
    def: '把一次能源(煤、水、风、光、核等)转化成电能的过程。发电厂出口电压通常只有 10~20kV,需要升压后才能远距离输送。',
    analogy: '电的"工厂":把原材料变成产品。',
    lesson: 'basics-07-journey'
  },
  {
    id: 'shudian', name: '输电', en: 'transmission',
    def: '用高压(220kV 及以上)线路把电从发电厂送往负荷中心的过程。电压越高电流越小损耗越低,所以输电线路电压很高。',
    analogy: '电的"高速公路":跑长途、大运量、速度快。',
    lesson: 'basics-07-journey'
  },
  {
    id: 'biandian', name: '变电', en: 'substation / transformation',
    def: '用变压器把电压升高或降低的环节。变电站是电网的"枢纽",负责电压转换和线路分配,自身不发电。',
    analogy: '物流中转站:货物在这里分拣换车,但不在这里生产。',
    lesson: 'basics-07-journey'
  },
  {
    id: 'peidian', name: '配电', en: 'distribution',
    def: '把电从高压变电站经 10kV 中压线路、配电变压器,最终降至 380/220V 送到用户的过程。配电网是电网的"毛细血管"。',
    analogy: '电的"城市小路+快递最后一公里"。',
    lesson: 'basics-07-journey'
  },
  {
    id: 'xiansun', name: '线损', en: 'line loss',
    def: '电在导线里传输时因电阻发热损失掉的部分,距离越长、电流越大损得越多。降低线损是升压输电的根本原因。',
    analogy: '快递的"运输破损率":路越远破损越多,换大卡车(升压)能少跑很多趟。',
    lesson: 'basics-08-loss'
  },

  /* ── 模块 1 · 能源全景 ── */
  {
    id: 'yici-nengyuan', name: '一次能源', en: 'primary energy',
    def: '自然界直接提供的能源:煤、石油、天然气、水力、风、太阳辐射、铀矿等。需要转化后才能方便使用。',
    analogy: '原矿石/原材料:不能直接用,得加工。',
    lesson: 'energy-01-chain'
  },
  {
    id: 'erci-nengyuan', name: '二次能源', en: 'secondary energy',
    def: '由一次能源转化而来的能源形式:电、汽油、柴油、管道天然气、氢等。电是通用性最强的二次能源。',
    analogy: '加工好的零件/面包:方便消费、用途广。',
    lesson: 'energy-02-secondary'
  },
  {
    id: 'gongyong-shiye', name: '公用事业', en: 'utility',
    def: '为社会提供基础服务的行业:电、水、气、热等。天生带自然垄断、网络型、强监管三大基因。',
    analogy: '城市的"生命线工程":全城共用一套管网,离了它没法正常生活。',
    lesson: 'energy-03-utility'
  },
  {
    id: 'nengyuan-bingfu', name: '能源禀赋',
    def: '一个国家或地区天然拥有的能源资源种类和数量。中国是"富煤、贫油、少气",决定了以煤为主的能源结构。',
    analogy: '老天发的牌:有人拿了一手好矿(中东石油),有人拿了一手好风光(中国西北)。',
    lesson: 'energy-04-endowment'
  },
  {
    id: 'dianqihua', name: '电气化', en: 'electrification',
    def: '终端能源消费从直接烧化石燃料转向用电的趋势。中国终端电气化率约 28%(2025 年前后),还在上升。',
    analogy: '从烧柴做饭升级到用电磁炉:把越来越多事情"交给电来干"。',
    lesson: 'energy-05-mix'
  },

  /* ── 模块 3 · 发电 ── */
  {
    id: 'meidian', name: '煤电(火电)', en: 'coal-fired power',
    def: '烧煤产生蒸汽驱动汽轮机发电。中国发电量约 58% 来自煤电,是现阶段绝对主力,正逐步转向调峰角色。',
    analogy: '一台超级大号"烧煤热水壶":烧水→蒸汽→推汽轮机→发电。',
    lesson: 'gen-02-coal'
  },
  {
    id: 'shuidian', name: '水电', en: 'hydropower',
    def: '利用水的落差(势能)推动水轮机发电。效率高达 85%~95%,零碳排放,有水库的可以灵活调峰。',
    analogy: '永不停歇的水磨坊:水从高处落下做功,带动发电机。',
    lesson: 'gen-03-hydro'
  },
  {
    id: 'choushuixuneng', name: '抽水蓄能', en: 'pumped hydro',
    def: '低谷用电把水从低水库抽到高水库(储能),高峰放水发电。转换效率约 75%~80%,是最成熟的大规模储能方式。',
    analogy: '电网的"可充电水塔":便宜时充满,贵时放水赚差价。',
    lesson: 'gen-07-gas'
  },
  {
    id: 'liyong-xiaoshi', name: '利用小时数', en: 'utilization hours',
    def: '全年发电量除以装机容量,反映电厂的"出勤率"。核电约 7500、煤电约 4500、风电约 2200、光伏约 1300。',
    analogy: '员工全勤是 8760 小时/年,跑了多少就是利用小时数,出勤率高低一目了然。',
    lesson: 'gen-09-hours'
  },
  {
    id: 'fuhe-quxian', name: '负荷曲线', en: 'load curve',
    def: '一天或一年中用电需求随时间变化的曲线。白天高、夜间低、傍晚最高峰,是调度安排发电计划的基础。',
    analogy: '城市交通流量图:早晚高峰堵,深夜空荡荡。',
    lesson: 'gen-08-baseload'
  },

  /* ── 模块 4 · 输电与变电 ── */
  {
    id: 'tegaoya', name: '特高压', en: 'UHV',
    def: '交流 1000kV、直流 ±800kV 及以上的输电技术,能把几千公里外的电大容量、低损耗送过来,是"西电东送"的主干道。',
    analogy: '电力世界的高铁:运量大、跑得远、损耗低。',
    lesson: 'trans-05-uhv'
  },
  {
    id: 'n-1', name: 'N-1 准则', en: 'N-1',
    def: '电网安全的底线规则:任何一台设备(线路/变压器/机组)突然退出运行,系统都不能停电、不能越限。',
    analogy: '走钢丝永远系着一根备用安全绳:断一根,人不能掉。',
    lesson: 'trans-07-n1'
  },

  /* ── 模块 5 · 配电与用电 ── */
  {
    id: 'taiqu', name: '台区',
    def: '一台配电变压器供电覆盖的范围,通常是一个小区或几栋楼,是电网营销和运维管理的最小单元。',
    analogy: '电网的"网格化社区":一台变压器管一个片区,像社区网格员管一片楼。',
    lesson: 'dist-03-taiqu'
  },

  /* ── 模块 6 · 调度运行 ── */
  {
    id: 'diaodu', name: '调度', en: 'dispatch',
    def: '电网的"大脑":实时指挥所有电厂发多少电、电网怎么运行,保证发电=用电、系统安全、成本最低。全国分国调-网调-省调-地调-县调五级。',
    analogy: '整个电网的空中交通管制塔台。',
    lesson: 'dispatch-01-what'
  },
  {
    id: 'agc', name: '自动发电控制', en: 'AGC',
    def: '调度系统的"自动驾驶":根据频率偏差,每几秒自动调整电厂出力,让发电时刻跟住用电。',
    analogy: '汽车定速巡航:上坡自动加油门,下坡自动收,车速(频率)始终稳住。',
    lesson: 'dispatch-05-agc'
  },

  /* ── 模块 9 · 电力市场 ── */
  {
    id: 'xianhuo', name: '电力现货市场', en: 'spot market',
    def: '按小时甚至 15 分钟开市的短期电能交易市场,分日前、日内、实时,价格随供需波动,稀缺时冲高、过剩时可为负。',
    analogy: '电的"菜市场":下午快收摊(供大于求)时,菜价(电价)能跌到倒贴。',
    lesson: 'market-04-spot'
  },

  /* ── 模块 10 · 新能源 ── */
  {
    id: 'xiaona', name: '消纳',
    def: '把新能源发出来的电真正用掉(而不是弃掉)。风光大发时用不完、送不出,就会被迫"弃风弃光"。',
    analogy: '丰收的水果得有人买、有车运,否则烂在地里——卖掉吃掉才叫消纳。',
    lesson: 'ne-03-curtail'
  },
  {
    id: 'yazi-quxian', name: '鸭子曲线', en: 'duck curve',
    def: '净负荷(用电减光伏出力)的日曲线:中午光伏大发压成"鸭肚",傍晚光伏退场需求上来翘成"鸭脖",形似鸭子。它直观展示了光伏与用电高峰的错位。',
    analogy: '中午光伏把活全干了,傍晚它下班,火电储能得在两小时内顶上一座"鸭脖"陡坡。',
    lesson: 'ne-02-duck'
  },

  /* ── 模块 11 · 储能 ── */
  {
    id: 'chuneng', name: '储能', en: 'energy storage',
    def: '把电存起来以后用的设施总称:抽水蓄能、锂电池、压缩空气等。它给"不能储存"的电修了仓库,用来移峰填谷、调频、备用。',
    analogy: '电网的"充电宝":便宜时充、贵时放,关键时刻还能救场。',
    lesson: 'storage-01-why'
  },

  /* ── 模块 10 · 新能源 ── */
  {
    id: 'gongxu-pingheng', name: '供需平衡',
    def: '电力系统中发电量与用电量必须时刻相等,多一点少一点都不行,否则频率偏离 50Hz。',
    analogy: '跷跷板:两端重量必须平衡,否则就翻了。',
    lesson: 'ne-01-nature'
  },
  {
    id: 'xuqiu-xiangying', name: '需求响应', en: 'demand response / DR',
    def: '电网通过价格信号或激励措施,引导用户在特定时段增加或减少用电,帮助电网保持供需平衡。',
    analogy: '打车软件的"动态加价":需求大时涨价让一部分人改搭地铁,需求小时降价吸引乘客。',
    lesson: 'retail-07-dsm'
  }
]);
