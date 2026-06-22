/* 19 个模块元信息(0 导览 + 第一至十八篇)+ 学习路线。
   short 用于侧边图签(≤2 字),no 是目录序号。
   路线占位共 63 课:未编写的课程显示"待编写",写好课程文件后自动激活。
   数据来源:《国民经济和社会发展第十五个五年规划纲要》(2026-03 十四届全国人大四次会议通过)
   及 2026 政府工作报告;详见 需求与讨论.md。 */
(function () {
  'use strict';

  [
    { id: 'guide',    no: 0,  short: '导览', title: '学习导览',        sub: '怎么用 · 什么是十五五 · 全景', desc: '网站怎么用、什么是"十五五"、一图看懂十八篇全景、术语点查与收藏怎么玩。' },
    { id: 'overview', no: 1,  short: '总览', title: '总览:新局面与目标', sub: '形势 · 方针 · 目标 · 指标',     desc: '第一篇:我们处在什么形势、指导方针、主要目标、约束性与预期性指标专栏、通向 2035 的历史方位。' },
    { id: 'industry', no: 2,  short: '产业', title: '现代化产业体系',    sub: '传统升级 · 新兴未来 · 基建',   desc: '第二篇:把实体经济做强做优,传统产业改造提升、新兴与未来产业、现代化基础设施。' },
    { id: 'tech',     no: 3,  short: '科技', title: '科技自立自强',      sub: '原始创新 · 企业主体 · 教科人', desc: '第三篇:高水平科技自立自强、关键核心技术攻关、企业创新主体、教育科技人才一体推进。' },
    { id: 'digital',  no: 4,  short: '数字', title: '数字中国',          sub: '算力数据 · 人工智能+ · 治理',  desc: '第四篇:数字中国与"数智化"、算力算法数据供给、"人工智能+"行动、健康有序的发展生态。' },
    { id: 'market',   no: 5,  short: '市场', title: '强大国内市场',      sub: '新格局 · 提振消费 · 大市场',   desc: '第五篇:构建新发展格局、大力提振消费、扩大有效投资、纵深推进全国统一大市场。' },
    { id: 'econ',     no: 6,  short: '体制', title: '经济体制改革',      sub: '经营主体 · 要素市场 · 宏观',   desc: '第六篇:高水平社会主义市场经济体制、激发各类经营主体活力、要素市场化、宏观经济治理。' },
    { id: 'open',     no: 7,  short: '开放', title: '高水平对外开放',    sub: '自主开放 · 一带一路 · 共同体', desc: '第七篇:积极扩大自主开放、提升贸易投资质量、高质量共建"一带一路"、推动构建人类命运共同体。' },
    { id: 'rural',    no: 8,  short: '三农', title: '农业农村现代化',    sub: '粮食 · 和美乡村 · 强农惠农',   desc: '第八篇:乡村全面振兴、提升农业综合生产能力、宜居宜业和美乡村、强农惠农富农政策。' },
    { id: 'region',   no: 9,  short: '区域', title: '区域协调发展',      sub: '协调 · 城镇化 · 国土 · 海洋',  desc: '第九篇:优化区域经济布局、区域联动、国土空间格局、以人为本的新型城镇化、海洋开发保护。' },
    { id: 'culture',  no: 10, short: '文化', title: '繁荣社会主义文化',  sub: '价值观 · 文化产业 · 文明',     desc: '第十篇:弘扬社会主义核心价值观、繁荣文化事业、发展文化产业、提升中华文明传播力影响力。' },
    { id: 'pop',      no: 11, short: '人口', title: '人口高质量发展',    sub: '生育 · 教育 · 健康 · 养老',    desc: '第十一篇:完善人口发展战略、建设生育友好型社会、办好教育、健康中国、积极应对老龄化。' },
    { id: 'life',     no: 12, short: '民生', title: '保障改善民生',      sub: '就业 · 分配 · 社保 · 住房',    desc: '第十二篇:共同富裕、高质量充分就业、收入分配、社会保障、房地产高质量发展、基本公共服务。' },
    { id: 'green',    no: 13, short: '绿色', title: '绿色转型 美丽中国',  sub: '碳达峰 · 环境 · 生态 · 生活',  desc: '第十三篇:经济社会发展全面绿色转型、积极稳妥推进碳达峰、改善环境质量、提升生态系统、绿色生活。' },
    { id: 'safety',   no: 14, short: '安全', title: '国家安全 平安中国',  sub: '安全体系 · 经济安全 · 治理',   desc: '第十四篇:国家安全体系和能力现代化、保障经济安全、公共安全治理、完善社会治理体系。' },
    { id: 'defense',  no: 15, short: '国防', title: '国防和军队现代化',  sub: '建军百年 · 一体化战略',        desc: '第十五篇:如期实现建军一百年奋斗目标、提高国防和军队现代化质量效益、一体化国家战略体系。' },
    { id: 'law',      no: 16, short: '法治', title: '民主与法治',        sub: '全过程民主 · 依法治国',        desc: '第十六篇:发展全过程人民民主、完善中国特色社会主义法治体系、推进全面依法治国。' },
    { id: 'hk',       no: 17, short: '统一', title: '一国两制 祖国统一',  sub: '港澳繁荣 · 两岸 · 统一',       desc: '第十七篇:坚持和完善"一国两制"、促进香港澳门长期繁荣稳定、推动两岸关系和平发展、推进祖国统一。' },
    { id: 'impl',     no: 18, short: '落实', title: '规划实施保障',      sub: '党的领导 · 全周期机制 · 工程', desc: '第十八篇:加强规划实施保障、坚持党中央集中统一领导、健全全周期推进机制、重大工程与行动。' }
  ].forEach(FYP.registerModule);

  /* 学习路线:有序课程 id,共 63 个占位。
     内容扩充时:写好课程文件 → 在 index.html 加 script 标签 → 此处占位自动激活。 */
  FYP.registerPath([
    /* ── 模块 0 · 学习导览(4) ── */
    { id: 'guide-01-howto', module: 'guide', title: '欢迎:这个网站怎么用' },
    { id: 'guide-02-what',  module: 'guide', title: '什么是"十五五"?五年规划的逻辑' },
    { id: 'guide-03-map',   module: 'guide', title: '一图看懂十五五:十八篇全景' },
    { id: 'guide-04-terms', module: 'guide', title: '术语点查与收藏怎么玩' },

    /* ── 第一篇 · 总览(5) ── */
    { id: 'overview-01-env',   module: 'overview', title: '我们处在什么形势:发展环境' },
    { id: 'overview-02-guide', module: 'overview', title: '指导方针:这五年怎么干' },
    { id: 'overview-03-goals', module: 'overview', title: '主要目标:五年要达成什么' },
    { id: 'overview-04-index', module: 'overview', title: '指标专栏:约束性 vs 预期性' },
    { id: 'overview-05-2035',  module: 'overview', title: '通向 2035:十五五的历史方位' },

    /* ── 第二篇 · 现代化产业体系(4) ── */
    { id: 'industry-01-system',    module: 'industry', title: '现代化产业体系是什么' },
    { id: 'industry-02-tradition', module: 'industry', title: '改造提升传统产业:不是淘汰是升级' },
    { id: 'industry-03-emerging',  module: 'industry', title: '新兴产业与未来产业:押注下一程' },
    { id: 'industry-04-infra',     module: 'industry', title: '现代化基础设施:看得见与看不见的网' },

    /* ── 第三篇 · 科技自立自强(4) ── */
    { id: 'tech-01-selfreliance', module: 'tech', title: '高水平科技自立自强:为什么是"命门"' },
    { id: 'tech-02-original',     module: 'tech', title: '原始创新与关键核心技术攻关' },
    { id: 'tech-03-firm',         module: 'tech', title: '让企业当创新主体' },
    { id: 'tech-04-edu',          module: 'tech', title: '教育、科技、人才一体推进' },

    /* ── 第四篇 · 数字中国(3) ── */
    { id: 'digital-01-china',   module: 'digital', title: '数字中国与"数智化"是什么' },
    { id: 'digital-02-compute', module: 'digital', title: '算力、算法、数据:数字时代的"水电煤"' },
    { id: 'digital-03-ai',      module: 'digital', title: '"人工智能+":AI 怎么改造各行各业' },

    /* ── 第五篇 · 强大国内市场(3) ── */
    { id: 'market-01-pattern', module: 'market', title: '新发展格局与强大国内市场' },
    { id: 'market-02-consume', module: 'market', title: '大力提振消费:为什么是头等大事' },
    { id: 'market-03-unified', module: 'market', title: '全国统一大市场与有效投资' },

    /* ── 第六篇 · 经济体制改革(3) ── */
    { id: 'econ-01-system', module: 'econ', title: '高水平社会主义市场经济体制' },
    { id: 'econ-02-subject', module: 'econ', title: '激发各类经营主体活力:国企与民企' },
    { id: 'econ-03-factor', module: 'econ', title: '要素市场化与宏观经济治理' },

    /* ── 第七篇 · 高水平对外开放(3) ── */
    { id: 'open-01-auto',      module: 'open', title: '自主开放:把门继续打开' },
    { id: 'open-02-trade',     module: 'open', title: '贸易投资与高质量共建"一带一路"' },
    { id: 'open-03-community', module: 'open', title: '推动构建人类命运共同体' },

    /* ── 第八篇 · 农业农村现代化(3) ── */
    { id: 'rural-01-food',   module: 'rural', title: '粮食安全:饭碗端在自己手里' },
    { id: 'rural-02-village', module: 'rural', title: '宜居宜业和美乡村' },
    { id: 'rural-03-policy', module: 'rural', title: '强农惠农富农:让农民有奔头' },

    /* ── 第九篇 · 区域协调发展(4) ── */
    { id: 'region-01-coord', module: 'region', title: '区域协调发展:东西南北怎么搭配' },
    { id: 'region-02-link',  module: 'region', title: '区域联动与国土空间格局' },
    { id: 'region-03-urban', module: 'region', title: '以人为本的新型城镇化' },
    { id: 'region-04-ocean', module: 'region', title: '海洋开发利用与保护' },

    /* ── 第十篇 · 繁荣文化(3) ── */
    { id: 'culture-01-value',    module: 'culture', title: '社会主义核心价值观' },
    { id: 'culture-02-industry', module: 'culture', title: '文化事业与文化产业' },
    { id: 'culture-03-civil',    module: 'culture', title: '提升中华文明传播力影响力' },

    /* ── 第十一篇 · 人口高质量发展(4) ── */
    { id: 'pop-01-birth',  module: 'pop', title: '建设生育友好型社会' },
    { id: 'pop-02-edu',    module: 'pop', title: '办好人民满意的教育' },
    { id: 'pop-03-health', module: 'pop', title: '健康中国怎么建' },
    { id: 'pop-04-aging',  module: 'pop', title: '积极应对人口老龄化' },

    /* ── 第十二篇 · 保障改善民生(4) ── */
    { id: 'life-01-job',      module: 'life', title: '高质量充分就业' },
    { id: 'life-02-income',   module: 'life', title: '收入分配:把蛋糕分好' },
    { id: 'life-03-security', module: 'life', title: '社会保障:兜住底线' },
    { id: 'life-04-house',    module: 'life', title: '房地产高质量发展与公共服务' },

    /* ── 第十三篇 · 绿色转型(4) ── */
    { id: 'green-01-transition', module: 'green', title: '全面绿色转型是什么' },
    { id: 'green-02-carbon',     module: 'green', title: '积极稳妥推进碳达峰' },
    { id: 'green-03-env',        module: 'green', title: '环境质量改善:蓝天碧水净土' },
    { id: 'green-04-eco',        module: 'green', title: '生态系统与绿色生活方式' },

    /* ── 第十四篇 · 国家安全(3) ── */
    { id: 'safety-01-system', module: 'safety', title: '国家安全体系和能力现代化' },
    { id: 'safety-02-econ',   module: 'safety', title: '经济安全:粮食、能源、产业链' },
    { id: 'safety-03-public', module: 'safety', title: '公共安全与社会治理' },

    /* ── 第十五篇 · 国防和军队现代化(2) ── */
    { id: 'defense-01-army',      module: 'defense', title: '如期实现建军一百年奋斗目标' },
    { id: 'defense-02-integrate', module: 'defense', title: '一体化国家战略体系和能力' },

    /* ── 第十六篇 · 民主与法治(2) ── */
    { id: 'law-01-democracy', module: 'law', title: '发展全过程人民民主' },
    { id: 'law-02-law',       module: 'law', title: '推进全面依法治国' },

    /* ── 第十七篇 · 一国两制与统一(2) ── */
    { id: 'hk-01-hkmacao', module: 'hk', title: '促进香港澳门长期繁荣稳定' },
    { id: 'hk-02-taiwan',  module: 'hk', title: '两岸关系和平发展与祖国统一' },

    /* ── 第十八篇 · 规划实施保障(3) ── */
    { id: 'impl-01-party',     module: 'impl', title: '坚持党中央集中统一领导' },
    { id: 'impl-02-mechanism', module: 'impl', title: '规划实施全周期推进机制' },
    { id: 'impl-03-action',    module: 'impl', title: '重大工程与重大行动:规划怎么落地' }
  ]);

})();
