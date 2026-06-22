/* 模块元数据 + 学习路径(系统分析师 · 软考高级)
   tag:导览/基础/核心/进阶/实战;lessons 为该模块课时数。
   路径顺序 = 推荐学习动线(基础→核心→进阶→实战)。 */
window.SAN = window.SAN || {};

SAN.modules = [
  { id: 'guide',     order: 0,  title: '学习导览',            desc: '考试介绍、学习路线、备考策略、题库与计算器怎么用', lessons: 4, tag: '导览' },
  { id: 'comp',      order: 1,  title: '计算机系统基础',      desc: 'CPU与体系结构、存储、校验码、IO、性能、嵌入式', lessons: 6, tag: '基础' },
  { id: 'os',        order: 2,  title: '操作系统',            desc: '进程线程、调度同步、死锁、存储管理、文件', lessons: 5, tag: '基础' },
  { id: 'db',        order: 3,  title: '数据库系统',          desc: '三级模式、ER、范式、事务并发、分布式、数仓', lessons: 7, tag: '基础' },
  { id: 'net',       order: 4,  title: '网络与信息安全',      desc: '网络模型协议、子网、加密签名、安全防护', lessons: 6, tag: '基础' },
  { id: 'se',        order: 5,  title: '软件工程',            desc: '过程模型、CMMI、质量、测试、维护、项目管理(进度/成本/风险)', lessons: 8, tag: '核心' },
  { id: 'req',       order: 6,  title: '需求工程',            desc: '需求获取、分析、定义、验证、管理、用例与原型', lessons: 8, tag: '核心' },
  { id: 'analysis',  order: 7,  title: '结构化与面向对象分析设计', desc: 'DFD、数据字典、判定表、OOA/OOD、UML、设计原则与模式', lessons: 9, tag: '核心' },
  { id: 'arch',      order: 8,  title: '系统架构设计',        desc: '架构概念视图、风格、质量属性、架构评估、中间件、SOA微服务', lessons: 8, tag: '核心' },
  { id: 'plan',      order: 9,  title: '系统规划与可行性',    desc: '系统规划、可行性研究、成本效益、方案论证、遗留系统、BPR', lessons: 6, tag: '进阶' },
  { id: 'rel',       order: 10, title: '系统可靠性与安全性',  desc: '可靠性指标、串并联计算、可靠性设计、容错、安全性设计', lessons: 6, tag: '进阶' },
  { id: 'test',      order: 11, title: '系统测试·转换与维护', desc: '测试策略与方法、测试层次、系统转换、维护与评价', lessons: 5, tag: '进阶' },
  { id: 'mis',       order: 12, title: '信息系统综合',        desc: '企业信息化、ERP/CRM/SCM、BI数仓、电子政务、数据治理、电子商务', lessons: 7, tag: '进阶' },
  { id: 'emerging',  order: 13, title: '新技术',              desc: '云计算、大数据、人工智能、物联网、区块链、中台', lessons: 6, tag: '进阶' },
  { id: 'math',      order: 14, title: '数学与经济管理',      desc: '图论、线性规划、决策论、排队论、网络计划、预测、概率统计', lessons: 7, tag: '进阶' },
  { id: 'standard',  order: 15, title: '标准化与知识产权',    desc: '知识产权、标准化基础、标准分类与代号、文档标准', lessons: 4, tag: '进阶' },
  { id: 'case',      order: 16, title: '案例分析专题',        desc: 'DFD/ER/UML案例、需求分析、数学计算、可靠性、架构、数据、答题模板', lessons: 10, tag: '实战' },
  { id: 'essay',     order: 17, title: '论文写作专题',        desc: '论文全解、结构、摘要开头、主体、结尾、选题素材、常考主题、范文评分', lessons: 10, tag: '实战' }
];

SAN.path = [
  // 导览
  'guide/01-exam-intro', 'guide/02-learning-path', 'guide/03-strategy', 'guide/04-features',
  // 计算机系统基础
  'comp/01-architecture', 'comp/02-storage', 'comp/03-checkcode', 'comp/04-io', 'comp/05-performance', 'comp/06-embedded',
  // 操作系统
  'os/01-overview', 'os/02-process-thread', 'os/03-scheduling', 'os/04-deadlock', 'os/05-memory',
  // 数据库系统
  'db/01-model', 'db/02-er', 'db/03-relational', 'db/04-normalization', 'db/05-transaction', 'db/06-distributed', 'db/07-warehouse',
  // 网络与信息安全
  'net/01-model', 'net/02-protocol', 'net/03-addressing', 'net/04-security-crypto', 'net/05-security-defense', 'net/06-storage',
  // 软件工程
  'se/01-process', 'se/02-cmmi', 'se/03-quality', 'se/04-testing', 'se/05-maintenance', 'se/06-pm-schedule', 'se/07-pm-cost', 'se/08-pm-risk',
  // 需求工程
  'req/01-overview', 'req/02-elicitation', 'req/03-analysis', 'req/04-definition', 'req/05-validation', 'req/06-management', 'req/07-usecase', 'req/08-prototype',
  // 结构化与面向对象分析设计
  'analysis/01-structured-dfd', 'analysis/02-data-dictionary', 'analysis/03-decision-table', 'analysis/04-oo-concept', 'analysis/05-uml-static', 'analysis/06-uml-dynamic', 'analysis/07-design-principle', 'analysis/08-pattern', 'analysis/09-sd-detail',
  // 系统架构设计
  'arch/01-concept', 'arch/02-views', 'arch/03-style', 'arch/04-quality', 'arch/05-evaluation', 'arch/06-middleware', 'arch/07-soa-microservice', 'arch/08-doc',
  // 系统规划与可行性
  'plan/01-planning', 'plan/02-feasibility', 'plan/03-cost-benefit', 'plan/04-scheme', 'plan/05-legacy', 'plan/06-bpr',
  // 系统可靠性与安全性
  'rel/01-concept', 'rel/02-metrics', 'rel/03-series-parallel', 'rel/04-design', 'rel/05-security', 'rel/06-test',
  // 系统测试·转换与维护
  'test/01-strategy', 'test/02-methods', 'test/03-levels', 'test/04-conversion', 'test/05-maintenance',
  // 信息系统综合
  'mis/01-informatization', 'mis/02-erp', 'mis/03-crm-scm', 'mis/04-bi-dw', 'mis/05-egov', 'mis/06-data-governance', 'mis/07-ec',
  // 新技术
  'emerging/01-cloud', 'emerging/02-bigdata', 'emerging/03-ai', 'emerging/04-iot', 'emerging/05-blockchain', 'emerging/06-zhongtai',
  // 数学与经济管理
  'math/01-graph', 'math/02-linear-programming', 'math/03-decision', 'math/04-queuing', 'math/05-network-plan', 'math/06-forecast', 'math/07-prob-stat',
  // 标准化与知识产权
  'standard/01-ip', 'standard/02-standardization', 'standard/03-classification', 'standard/04-doc',
  // 案例分析专题
  'case/01-overview', 'case/02-dfd-case', 'case/03-er-case', 'case/04-uml-case', 'case/05-req-case', 'case/06-math-calc', 'case/07-reliability-calc', 'case/08-arch-case', 'case/09-data-case', 'case/10-answer-template',
  // 论文写作专题
  'essay/01-overview', 'essay/02-structure', 'essay/03-opening', 'essay/04-body', 'essay/05-closing', 'essay/06-material', 'essay/07-topic-req', 'essay/08-topic-design', 'essay/09-topic-pm', 'essay/10-scoring'
];

SAN.totalLessons = SAN.path.length;
