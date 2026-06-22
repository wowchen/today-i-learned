/* 全站术语库。每条:
   id      术语 id(拼音或英文缩写,全站唯一,<gd data-term="id"> 引用)
   name    中文名
   en      英文/缩写(可选)
   def     大白话定义(一两句,独立可读)
   analogy 类比(可选,强烈建议给)
   lesson  讲透它的那一课 id(可选;课未编写也可先填)
   随内容逐模块扩充:每写一个模块的课程,同步把新术语追加到对应分组。 */
FYP.registerTerms([
  /* ── 总论·制度概念 ── */
  {
    id: 'wnghj', name: '五年规划', en: 'Five-Year Plan',
    def: '国家每五年制定一次的中长期发展总安排,明确未来五年往哪走、干什么、达成什么目标。从"一五"(1953)延续至今。',
    analogy: '国家版的"五年家庭计划书":先定大方向,再分头执行。',
    lesson: 'guide-02-what'
  },
  {
    id: 'ghgy', name: '规划纲要', en: 'Outline',
    def: '五年规划的正式文件全称,经全国人民代表大会审议通过后具有法律地位,是各部门各地方编制自己规划的总依据。',
    analogy: '总施工图:各专业图纸都要照着它画。',
    lesson: 'guide-02-what'
  },
  {
    id: 'ysxzb', name: '约束性指标', en: 'binding target',
    def: '"必须做到"的硬指标,多涉及生态环保、耕地、安全等底线,政府对结果负责,带有强制约束。',
    analogy: '考试里的"及格线",不达标要问责。',
    lesson: 'overview-04-index'
  },
  {
    id: 'yqxzb', name: '预期性指标', en: 'anticipated target',
    def: '"努力争取"的指标,如经济增长、研发投入,靠引导市场和社会力量去实现,不强制、可浮动。',
    analogy: '考试里的"目标分":尽力冲,但不卡死。',
    lesson: 'overview-04-index'
  },
  {
    id: 'zgsxdh', name: '中国式现代化', en: "Chinese modernization",
    def: '中国共产党领导的、立足国情的现代化道路,特点包括人口规模巨大、全体人民共同富裕、物质与精神文明协调、人与自然和谐、走和平发展道路。',
    lesson: 'overview-01-env'
  },
  {
    id: 'gzlfz', name: '高质量发展', en: 'high-quality development',
    def: '从"有没有"转向"好不好":不再单纯追求增长速度,而强调效率、创新、绿色、协调、共享。是十五五的主线。',
    analogy: '从"吃得饱"升级到"吃得好、吃得健康"。',
    lesson: 'overview-02-guide'
  },
  {
    id: 'xzscl', name: '新质生产力', en: 'new quality productive forces',
    def: '由科技创新主导、摆脱传统增长方式的先进生产力,以高技术、高效能、高质量为特征,核心是创新。',
    analogy: '不是多雇人多开厂,而是靠新技术让同样投入产出更多更好。',
    lesson: 'tech-01-selfreliance'
  },
  {
    id: 'xfzgj', name: '新发展格局', en: 'new development pattern',
    def: '以国内大循环为主体、国内国际双循环相互促进的发展格局。简单说:把国内市场做强做大,同时继续对外开放。',
    analogy: '主要靠"内需引擎"驱动,同时不关上"外贸窗口"。',
    lesson: 'market-01-pattern'
  },
  {
    id: 'gnxh', name: '国内大循环', en: 'domestic circulation',
    def: '让生产、分配、流通、消费主要在国内顺畅转起来,把超大规模国内市场的优势发挥出来。',
    lesson: 'market-01-pattern'
  },
  {
    id: 'qgtydsc', name: '全国统一大市场', en: 'unified national market',
    def: '打破地方保护和市场分割,让商品、要素在全国范围自由流动、公平竞争的统一市场。',
    analogy: '把各省的"小院子"院墙拆掉,连成一个大广场做买卖。',
    lesson: 'market-03-unified'
  },
  {
    id: 'ys2035', name: '2035 远景目标', en: 'Vision 2035',
    def: '到 2035 年基本实现社会主义现代化的长远目标。十五五(2026–2030)是迈向这一目标的关键五年。',
    analogy: '长跑里的"中途冲刺段":这一程跑稳了,终点才有戏。',
    lesson: 'overview-05-2035'
  },
  {
    id: 'rgzn', name: '人工智能+', en: 'AI Plus',
    def: '把人工智能与各行各业深度融合的国家行动,像当年"互联网+"一样,用 AI 改造制造、医疗、教育、政务等领域。',
    analogy: '给各行各业都装上"AI 助手"。',
    lesson: 'digital-03-ai'
  },
  {
    id: 'tdf', name: '碳达峰', en: 'carbon peaking',
    def: '让二氧化碳年排放量先达到历史最高点、随后稳中有降的目标。中国承诺力争 2030 年前实现。',
    analogy: '爬坡到顶后开始下坡:先封住"排放天花板"。',
    lesson: 'green-02-carbon'
  },
  {
    id: 'gtfy', name: '共同富裕', en: 'common prosperity',
    def: '全体人民共享发展成果、逐步实现普遍富裕,不是平均主义,而是把蛋糕做大同时分好。',
    lesson: 'life-02-income'
  },
  {
    id: 'qgcrmmz', name: '全过程人民民主', en: 'whole-process people’s democracy',
    def: '覆盖选举、协商、决策、管理、监督各环节的民主形式,强调全链条、全方位的人民参与。',
    lesson: 'law-01-democracy'
  },

  /* ── 第二篇 · 现代化产业体系 ── */
  {
    id: 'xdhcyts', name: '现代化产业体系', en: 'modern industrial system',
    def: '一个国家从农业、制造业到服务业、基础设施完整咬合的产业大网,强调先进、协同、绿色、智能、自主可控。',
    analogy: '国家的"全套家当":既要能造,又要造得好、造得全、自己说了算。',
    lesson: 'industry-01-system'
  },
  {
    id: 'stjj', name: '实体经济', en: 'real economy',
    def: '实实在在生产商品和服务的经济(制造、农业、建筑、实物服务等),相对于纯金融、炒作类的"虚拟"活动。是国家经济的根基。',
    lesson: 'industry-01-system'
  },
  {
    id: 'xxxcy', name: '战略性新兴产业', en: 'strategic emerging industries',
    def: '已成形、正在放量的高技术新赛道,如新能源、新能源汽车、新材料、高端装备、生物医药。',
    lesson: 'industry-03-emerging'
  },
  {
    id: 'wlcy', name: '未来产业', en: 'future industries',
    def: '尚处早期、赌 5–10 年后的前沿赛道,如量子科技、生物制造、6G、脑机接口、具身智能、商业航天。',
    analogy: '现在埋下的种子,赌的是未来开花。',
    lesson: 'industry-03-emerging'
  },
  {
    id: 'xxjcss', name: '新型基础设施', en: 'new infrastructure',
    def: '数字时代的"底座":5G、算力与数据中心、工业互联网、充电桩、北斗等,相对于铁路公路等传统基建。',
    analogy: '过去修路修桥,现在"修"网络、算力和数据通道。',
    lesson: 'industry-04-infra'
  },

  /* ── 第三篇 · 科技自立自强 ── */
  {
    id: 'qbz', name: '卡脖子', en: 'chokepoint / bottleneck tech',
    def: '指被别国掐住、自己造不出又买不到的关键技术或环节(如高端芯片、光刻机、工业软件),一旦被封锁产业就受制于人。',
    analogy: '别人攥着你的"命门",想松手就松、想掐就掐。',
    lesson: 'tech-01-selfreliance'
  },
  {
    id: 'jgtz', name: '新型举国体制', en: 'new whole-nation system',
    def: '在市场经济条件下"集中力量办大事":政府定方向、出题、给资源,通过揭榜挂帅等机制组织企业和院所联合攻关。',
    analogy: '国家当"总导演",张榜招贤,谁有本事谁上台攻坚。',
    lesson: 'tech-02-original'
  },
  {
    id: 'jkrytt', name: '教育科技人才一体推进', en: 'integrated education-science-talent',
    def: '把教育、科技、人才三件事统筹起来通盘谋划:教育培养人、人才搞科技、科技反哺教育,打通这条链。',
    lesson: 'tech-04-edu'
  },

  /* ── 第四篇 · 数字中国 ── */
  {
    id: 'szzg', name: '数字中国', en: 'Digital China',
    def: '把数字技术全面用到经济、社会、政府治理中的国家战略,让信息化驱动现代化。',
    lesson: 'digital-01-china'
  },
  {
    id: 'szh', name: '数智化', en: 'digital-intelligent transformation',
    def: '在"数字化"基础上叠加人工智能,让系统不只会记录数据,还能分析、判断、辅助决策。',
    analogy: '账本搬上电脑是数字化;电脑还能自动分析、预测、提醒,就是数智化。',
    lesson: 'digital-01-china'
  },
  {
    id: 'sjys', name: '数据要素', en: 'data as a factor',
    def: '把数据当作和土地、资本并列的新型生产要素。它越用越增值,但要先解决确权、定价、流通、安全的规则。',
    analogy: '数字时代的"石油",但原地不动没价值,流通起来才生钱。',
    lesson: 'digital-02-compute'
  },

  /* ── 第五篇 · 强大国内市场 ── */
  {
    id: 'shzysc', name: '社会主义市场经济体制', en: 'socialist market economy',
    def: '中国的经济体制:让市场在资源配置中起决定性作用,同时更好发挥政府作用,即"有效市场+有为政府"。',
    lesson: 'econ-01-system'
  },

  /* ── 第六篇 · 经济体制改革 ── */
  {
    id: 'jyzt', name: '经营主体', en: 'business entities',
    def: '市场上从事经营的各类主体:国有企业、民营企业、外资企业、个体工商户等。',
    lesson: 'econ-02-subject'
  },
  {
    id: 'yssch', name: '要素市场化', en: 'market-based factor allocation',
    def: '让土地、劳动力、资本、技术、数据等生产要素按市场规则自由流动、由市场定价,以提高资源配置效率。',
    analogy: '给经济"通经活络",让资源流到效率最高的地方。',
    lesson: 'econ-03-factor'
  },

  /* ── 第七篇 · 对外开放 ── */
  {
    id: 'zzkf', name: '自主开放', en: 'autonomous opening-up',
    def: '由中国主动、按自己节奏推进的对外开放,强调开放的主动权掌握在自己手里。',
    lesson: 'open-01-auto'
  },
  {
    id: 'zdxkf', name: '制度型开放', en: 'institutional opening-up',
    def: '更高级的开放:不只放开商品和市场准入,还对接国际高标准的规则、规制、管理、标准。',
    analogy: '过去是"开门让货进出",现在是"连规则也跟国际接轨"。',
    lesson: 'open-01-auto'
  },
  {
    id: 'ydyl', name: '一带一路', en: 'Belt and Road Initiative',
    def: '"丝绸之路经济带"和"21世纪海上丝绸之路"的合称,中国与沿线国家在基建、贸易、投资、产能等领域的合作平台。',
    lesson: 'open-02-trade'
  },
  {
    id: 'rlmygtt', name: '人类命运共同体', en: 'community with a shared future',
    def: '中国外交总理念:各国利益交融、安危与共,主张合作共赢、多边主义,反对霸权和零和博弈。',
    lesson: 'open-03-community'
  },

  /* ── 第八篇 · 农业农村现代化 ── */
  {
    id: 'lsaq', name: '粮食安全', en: 'food security',
    def: '确保国家粮食供给稳定、口粮基本自给,核心是"藏粮于地、藏粮于技",守住耕地红线。',
    analogy: '中国人的饭碗要牢牢端在自己手里。',
    lesson: 'rural-01-food'
  },
  {
    id: 'hmxc', name: '和美乡村', en: 'harmonious & beautiful villages',
    def: '宜居宜业和美乡村的简称:住得舒服、能就业创业、和谐又美丽的现代乡村,是乡村全面振兴的落点。',
    lesson: 'rural-02-village'
  },

  /* ── 第九篇 · 区域协调发展 ── */
  {
    id: 'qyxt', name: '区域协调发展', en: 'coordinated regional development',
    def: '统筹东中西、城与乡的发展:让发达地区带动周边、欠发达地区补上短板,各地按比较优势分工,缩小差距。',
    lesson: 'region-01-coord'
  },
  {
    id: 'gtkj', name: '国土空间格局', en: 'territorial spatial layout',
    def: '在全国范围统筹安排"哪里开发、哪里保护、哪里种粮",靠主体功能区和"三区三线"制度落实。',
    analogy: '给国土这张大地图,事先给每块地"定角色"。',
    lesson: 'region-02-link'
  },
  {
    id: 'xxczh', name: '新型城镇化', en: 'new-type urbanization',
    def: '以人为本的城镇化:核心不是盖楼,而是让进城的人真正落户、享受同等公共服务(市民化)。',
    lesson: 'region-03-urban'
  },
  {
    id: 'hyjj', name: '海洋经济', en: 'marine economy',
    def: '开发利用海洋资源形成的经济:海洋装备、海上风电、深海开发、港口航运、海洋生物医药、滨海旅游等。',
    analogy: '把海洋当作潜力巨大的"蓝色国土"。',
    lesson: 'region-04-ocean'
  },

  /* ── 第十篇 · 繁荣文化 ── */
  {
    id: 'hxjzg', name: '社会主义核心价值观', en: 'core socialist values',
    def: '从国家、社会、个人三个层面凝练的价值准则(富强民主文明和谐/自由平等公正法治/爱国敬业诚信友善)。',
    analogy: '社会共同认可的"价值最大公约数"。',
    lesson: 'culture-01-value'
  },
  {
    id: 'whsy', name: '文化事业', en: 'public cultural undertakings',
    def: '政府主导的公益性文化部分:图书馆、博物馆、公共文化服务等,强调普惠和公平。',
    lesson: 'culture-02-industry'
  },
  {
    id: 'whcy', name: '文化产业', en: 'cultural industries',
    def: '市场化经营的文化部分:影视、游戏、出版、文旅、创意设计等,讲经济效益,但社会效益放首位。',
    lesson: 'culture-02-industry'
  },
  {
    id: 'whrsl', name: '文化软实力', en: 'cultural soft power',
    def: '一个国家文化的吸引力和影响力,通过价值、文艺、传播等"软"的方式形成的国际影响,是综合国力的一面。',
    lesson: 'culture-03-civil'
  },

  /* ── 第十一篇 · 人口高质量发展 ── */
  {
    id: 'syyh', name: '生育友好型社会', en: 'birth-friendly society',
    def: '通过减轻生育、养育、教育负担(育儿补贴、普惠托育等),让有意愿的家庭敢生、生得起、养得好。',
    lesson: 'pop-01-birth'
  },
  {
    id: 'jkzg', name: '健康中国', en: 'Healthy China',
    def: '从"以治病为中心"转向"以人民健康为中心"的战略,强调预防为主、强基层、三医联动。',
    lesson: 'pop-03-health'
  },
  {
    id: 'llh', name: '积极应对人口老龄化', en: 'active response to aging',
    def: '不把老龄化只当负担,一边补养老服务短板(居家社区机构+医养结合),一边发展银发经济。',
    lesson: 'pop-04-aging'
  },

  /* ── 第十二篇 · 保障改善民生 ── */
  {
    id: 'gzcfjy', name: '高质量充分就业', en: 'high-quality full employment',
    def: '充分=想干活的人都能有活干;高质量=干得体面、有保障、收入合理、能成长。就业被列为宏观政策优先目标。',
    lesson: 'life-01-job'
  },
  {
    id: 'shbz', name: '社会保障', en: 'social security',
    def: '国家为国民编织的安全网:养老/医疗/失业/工伤/生育保险+社会救助+社会福利,让人遇困不致绝境。',
    analogy: '民生的"压舱石",也是敢消费的"定心丸"。',
    lesson: 'life-03-security'
  },
  {
    id: 'fdcxms', name: '房地产新发展模式', en: 'new real estate model',
    def: '从"高负债高周转高杠杆"转向"保障托底+市场改善+租购并举",让房子回归居住属性。',
    lesson: 'life-04-house'
  },

  /* ── 第十三篇 · 绿色转型 ── */
  {
    id: 'lszx', name: '全面绿色转型', en: 'comprehensive green transition',
    def: '让生产方式、生活方式、能源结构整体变绿,从"先污染后治理"转向发展和保护一起抓,建设美丽中国。',
    analogy: '"绿水青山就是金山银山"——好生态本身就是财富。',
    lesson: 'green-01-transition'
  },
  {
    id: 'ssltths', name: '山水林田湖草沙', en: 'mountains-rivers-forests-farmland-lakes-grasslands-deserts',
    def: '把山、水、林、田、湖、草、沙看作一个生命共同体,一体化保护和系统修复,而不是各管一摊。',
    analogy: '上游护林,下游水才清——生态要系统治理。',
    lesson: 'green-04-eco'
  },
  {
    id: 'wrfz', name: '污染防治攻坚战', en: 'pollution prevention campaign',
    def: '集中治理空气、水、土壤污染的攻坚行动,俗称蓝天、碧水、净土"三大保卫战",强调精准、科学、依法治污。',
    lesson: 'green-03-env'
  },

  /* ── 第十四篇 · 国家安全 ── */
  {
    id: 'zgaqg', name: '总体国家安全观', en: 'holistic approach to national security',
    def: '"大安全"理念:安全不只是军事政治,还包括经济、科技、粮食、能源、网络、生态等各方面,强调统筹发展和安全。',
    lesson: 'safety-01-system'
  },
  {
    id: 'jjaq', name: '经济安全', en: 'economic security',
    def: '确保粮食、能源、产业链供应链、金融等经济命脉自主可控、不被"卡脖子",关键时刻不掉链子。',
    analogy: '把经济的几条命脉攥在自己手里。',
    lesson: 'safety-02-econ'
  },
  {
    id: 'shzl', name: '社会治理', en: 'social governance',
    def: '把基层社会管理服务做细做实,坚持共建共治共享,让矛盾化解在基层(如"枫桥经验")。',
    lesson: 'safety-03-public'
  },

  /* ── 第十五篇 · 国防和军队现代化 ── */
  {
    id: 'jjybn', name: '建军一百年奋斗目标', en: 'PLA centenary goal',
    def: '人民军队 1927 年建军、2027 年满一百年,在此节点要实现的国防和军队现代化阶段性目标。',
    lesson: 'defense-01-army'
  },
  {
    id: 'ythztx', name: '一体化国家战略体系和能力', en: 'integrated national strategic system',
    def: '把经济、科技、教育、国防等力量统筹整合,平时服务发展、需要时转化为战略和安全能力,是军民融合的升级。',
    analogy: '一份投入、平战两用。',
    lesson: 'defense-02-integrate'
  },

  /* ── 第十六篇 · 民主与法治 ── */
  {
    id: 'qmyfzg', name: '全面依法治国', en: 'law-based governance',
    def: '让国家治理按法律来:科学立法、严格执法、公正司法、全民守法,建设法治国家、法治政府、法治社会。',
    analogy: '规则稳、说话算数,才有可预期的秩序。',
    lesson: 'law-02-law'
  },

  /* ── 第十七篇 · 一国两制与统一 ── */
  {
    id: 'yglz', name: '一国两制', en: 'One Country, Two Systems',
    def: '在一个中国前提下,香港、澳门保持原有社会制度和生活方式长期不变,实行高度自治。',
    lesson: 'hk-01-hkmacao'
  },
  {
    id: 'ygzg', name: '一个中国原则', en: 'One-China principle',
    def: '世界上只有一个中国,台湾是中国领土不可分割的一部分。是处理两岸关系和发展对外关系的基础。',
    lesson: 'hk-02-taiwan'
  },

  /* ── 第十八篇 · 规划实施保障 ── */
  {
    id: 'yzlt', name: '一张蓝图干到底', en: 'one blueprint to the end',
    def: '目标定了就一以贯之、接续奋斗,不因换届而摇摆。是中国五年规划制度的突出特点。',
    lesson: 'impl-01-party'
  },
  {
    id: 'qzqtj', name: '全周期推进机制', en: 'full-cycle implementation',
    def: '规划从分解、执行、监测、评估到动态调整的闭环机制,靠年度计划、中期评估、约束性指标考核等保证落地。',
    lesson: 'impl-02-mechanism'
  },
  {
    id: 'zl', name: '专栏(重大工程)', en: 'priority projects box',
    def: '纲要中集中列出重大工程、重大项目、重大行动的栏目,把抽象目标变成能开工、能考核的具体项目。',
    analogy: '规划的"任务清单 + 重点项目库"。',
    lesson: 'impl-03-action'
  }
]);
