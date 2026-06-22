/* 模块元数据 + 学习路径(系统架构设计师 · 软考高级)
   tag:导览/基础/核心/进阶/实战;lessons 为该模块课时数。
   路径顺序 = 推荐学习动线(基础→核心→进阶→实战)。 */
window.SAD = window.SAD || {};

SAD.modules = [
  { id: 'guide',    order: 0,  title: '学习导览',          desc: '考试介绍、学习路线、备考策略、题库与计算器怎么用', lessons: 4,  tag: '导览' },
  { id: 'comp',     order: 1,  title: '计算机系统基础',    desc: 'CPU与体系结构、存储体系、校验码、IO、RAID、嵌入式硬件', lessons: 7, tag: '基础' },
  { id: 'os',       order: 2,  title: '操作系统',          desc: '进程线程、调度同步、死锁、存储管理、文件与设备', lessons: 6,  tag: '基础' },
  { id: 'db',       order: 3,  title: '数据库系统',        desc: '三级模式、ER、关系与SQL、范式、事务并发、分布式、数仓NoSQL', lessons: 8, tag: '基础' },
  { id: 'net',      order: 4,  title: '计算机网络',        desc: '网络体系结构、协议、IP子网、组网、网络存储、规划', lessons: 6, tag: '基础' },
  { id: 'se',       order: 5,  title: '软件工程',          desc: '过程模型、CMMI、需求工程、结构化/面向对象、UML、测试、维护', lessons: 10, tag: '核心' },
  { id: 'pattern',  order: 6,  title: '设计模式',          desc: '设计原则、创建型/结构型/行为型模式、常考辨析', lessons: 5, tag: '核心' },
  { id: 'sec',      order: 7,  title: '信息安全与安全架构', desc: '加密、签名、PKI、安全模型、安全架构、零信任、Web安全', lessons: 9, tag: '核心' },
  { id: 'arch',     order: 8,  title: '软件架构设计基础',  desc: '架构概念、4+1视图、ABSD、ADL、架构复用、DSSA', lessons: 6, tag: '核心' },
  { id: 'style',    order: 9,  title: '架构风格',          desc: '数据流、调用返回(分层/MVC)、独立构件、虚拟机仓库、风格选型', lessons: 6, tag: '核心' },
  { id: 'quality',  order: 10, title: '质量属性与架构评估', desc: '质量属性、场景六元组、战术、敏感点权衡点、ATAM/SAAM/CBAM', lessons: 7, tag: '核心' },
  { id: 'rel',      order: 11, title: '软件可靠性',        desc: '可靠性概念与指标、串并联计算、可靠性设计、容错、测试', lessons: 6, tag: '核心' },
  { id: 'perf',     order: 12, title: '系统性能',          desc: '性能指标、Amdahl定律、性能评估、负载均衡、缓存优化', lessons: 5, tag: '进阶' },
  { id: 'mid',      order: 13, title: '中间件·SOA·微服务',  desc: '中间件、SOA、Web Service、ESB、微服务、云原生、DevOps', lessons: 7, tag: '进阶' },
  { id: 'embed',    order: 14, title: '嵌入式系统架构',    desc: '嵌入式概述、实时系统、架构设计、嵌入式软件、可靠性安全', lessons: 5, tag: '进阶' },
  { id: 'evo',      order: 15, title: '架构演化与维护',    desc: '架构演化、维护腐化、大型网站架构演进、重构、遗留系统', lessons: 5, tag: '进阶' },
  { id: 'future',   order: 16, title: '未来信息综合技术',  desc: '云计算、大数据、物联网、人工智能、区块链、数字孪生', lessons: 7, tag: '进阶' },
  { id: 'standard', order: 17, title: '标准化与知识产权',  desc: '知识产权、标准化基础、标准分类与代号、文档与工程标准', lessons: 4, tag: '进阶' },
  { id: 'case',     order: 18, title: '案例分析专题',      desc: '题型策略、质量属性场景、ATAM、可靠性/性能计算、数据库/Web/微服务/缓存案例、答题模板', lessons: 10, tag: '实战' },
  { id: 'essay',    order: 19, title: '论文写作专题',      desc: '论文全解、结构、摘要开头、主体框架、结尾、选题素材、常考主题、范文评分', lessons: 10, tag: '实战' }
];

SAD.path = [
  // 导览
  'guide/01-exam-intro', 'guide/02-learning-path', 'guide/03-strategy', 'guide/04-features',
  // 计算机系统基础
  'comp/01-computer-architecture', 'comp/02-storage-hierarchy', 'comp/03-checkcode', 'comp/04-io',
  'comp/05-bus-pipeline', 'comp/06-raid', 'comp/07-embedded-hw',
  // 操作系统
  'os/01-overview', 'os/02-process-thread', 'os/03-scheduling', 'os/04-deadlock', 'os/05-memory', 'os/06-file-device',
  // 数据库系统
  'db/01-model', 'db/02-er', 'db/03-relational', 'db/04-normalization', 'db/05-transaction',
  'db/06-backup-recovery', 'db/07-distributed', 'db/08-warehouse-nosql',
  // 计算机网络
  'net/01-model', 'net/02-protocol', 'net/03-addressing', 'net/04-networking', 'net/05-storage', 'net/06-planning',
  // 软件工程
  'se/01-process', 'se/02-capability', 'se/03-requirements', 'se/04-structured', 'se/05-oo',
  'se/06-uml', 'se/07-testing', 'se/08-cleanroom', 'se/09-reverse', 'se/10-maintenance',
  // 设计模式
  'pattern/01-overview', 'pattern/02-creational', 'pattern/03-structural', 'pattern/04-behavioral', 'pattern/05-exam',
  // 信息安全与安全架构
  'sec/01-overview', 'sec/02-symmetric', 'sec/03-asymmetric', 'sec/04-hash-signature', 'sec/05-pki',
  'sec/06-access-model', 'sec/07-security-arch', 'sec/08-zero-trust', 'sec/09-web-security',
  // 软件架构设计基础
  'arch/01-concept', 'arch/02-views', 'arch/03-absd', 'arch/04-adl', 'arch/05-reuse', 'arch/06-dssa',
  // 架构风格
  'style/01-overview', 'style/02-dataflow', 'style/03-call-return', 'style/04-independent', 'style/05-vm-repo', 'style/06-compare',
  // 质量属性与架构评估
  'quality/01-attributes', 'quality/02-scenario', 'quality/03-tactics', 'quality/04-sensitivity',
  'quality/05-atam', 'quality/06-saam', 'quality/07-cbam',
  // 软件可靠性
  'rel/01-concept', 'rel/02-metrics', 'rel/03-series-parallel', 'rel/04-design', 'rel/05-fault-tolerance', 'rel/06-testing',
  // 系统性能
  'perf/01-metrics', 'perf/02-amdahl', 'perf/03-evaluation', 'perf/04-design', 'perf/05-cache',
  // 中间件·SOA·微服务
  'mid/01-middleware', 'mid/02-soa', 'mid/03-webservice', 'mid/04-esb', 'mid/05-microservice',
  'mid/06-cloud-native', 'mid/07-devops',
  // 嵌入式系统架构
  'embed/01-concept', 'embed/02-rtos', 'embed/03-architecture', 'embed/04-software', 'embed/05-reliability',
  // 架构演化与维护
  'evo/01-evolution', 'evo/02-maintenance', 'evo/03-web-evolution', 'evo/04-refactoring', 'evo/05-legacy',
  // 未来信息综合技术
  'future/01-cloud', 'future/02-bigdata', 'future/03-iot', 'future/04-ai', 'future/05-blockchain',
  'future/06-digital-twin', 'future/07-new-tech',
  // 标准化与知识产权
  'standard/01-ip', 'standard/02-standardization', 'standard/03-standards-classification', 'standard/04-doc',
  // 案例分析专题
  'case/01-overview', 'case/02-quality-scenario', 'case/03-atam-case', 'case/04-reliability-calc', 'case/05-performance-calc',
  'case/06-db-design', 'case/07-web-arch', 'case/08-microservice-case', 'case/09-cache-case', 'case/10-answer-template',
  // 论文写作专题
  'essay/01-overview', 'essay/02-structure', 'essay/03-opening', 'essay/04-body', 'essay/05-closing',
  'essay/06-material', 'essay/07-topic-style', 'essay/08-topic-microservice', 'essay/09-topic-data', 'essay/10-scoring'
];

SAD.totalLessons = SAD.path.length;
