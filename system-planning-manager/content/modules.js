/* 模块元数据 + 学习路径(系统规划与管理师 · 软考高级)
   tag:导览/基础/核心/进阶/实战;lessons 为该模块课时数。
   路径顺序 = 推荐学习动线(基础→核心→进阶→实战)。
   本考只考两科:综合知识(选择,含专业英语)+ 案例分析(写作),不考论文。 */
window.SPM = window.SPM || {};

SPM.modules = [
  { id: 'guide',     order: 0,  title: '学习导览',            desc: '考试介绍、学习路线、备考策略、题库与计算器怎么用', lessons: 4, tag: '导览' },
  { id: 'comp',      order: 1,  title: '计算机与信息系统基础', desc: '硬件、软件、系统集成、操作系统、嵌入式', lessons: 5, tag: '基础' },
  { id: 'net',       order: 2,  title: '网络与通信',          desc: '网络模型、协议、IP与子网、网络设备、新型网络', lessons: 5, tag: '基础' },
  { id: 'db',        order: 3,  title: '数据库基础',          desc: '数据模型、SQL、事务并发、数据仓库与大数据', lessons: 4, tag: '基础' },
  { id: 'sec',       order: 4,  title: '信息安全基础',        desc: '加密、认证签名、安全防护、等级保护、常见攻击', lessons: 5, tag: '基础' },
  { id: 'itss',      order: 5,  title: 'IT 服务与 ITSS 体系',  desc: 'IT服务概念、服务生命周期、ITSS标准体系、人/过程/技术/资源、能力评估、服务治理', lessons: 6, tag: '核心' },
  { id: 'plan',      order: 6,  title: 'IT 服务规划设计',      desc: '服务战略规划、需求识别、方案设计、SLA设计、服务目录、资源规划', lessons: 6, tag: '核心' },
  { id: 'deploy',    order: 7,  title: 'IT 服务部署实施',      desc: '部署计划、资源准备、技术准备、服务交付、转产验收', lessons: 5, tag: '核心' },
  { id: 'ops',       order: 8,  title: 'IT 服务运营管理',      desc: '运营总览、事件、问题、变更、发布与配置、服务级别、容量与可用性、连续性、服务台', lessons: 9, tag: '核心' },
  { id: 'improve',   order: 9,  title: 'IT 服务持续改进',      desc: '改进概念、PDCA、服务测量、服务报告、改进实施', lessons: 5, tag: '核心' },
  { id: 'supervise', order: 10, title: 'IT 服务监督管理',      desc: '监督管理概念、服务质量评价、满意度管理、审计与合规', lessons: 4, tag: '进阶' },
  { id: 'people',    order: 11, title: '服务团队与人员管理',  desc: '团队建设、角色岗位、绩效管理、培训发展、沟通激励', lessons: 5, tag: '进阶' },
  { id: 'market',    order: 12, title: 'IT 服务营销',         desc: '服务营销概念、客户关系管理、服务定价、服务推广', lessons: 4, tag: '进阶' },
  { id: 'pm',        order: 13, title: '项目管理基础',        desc: '范围、进度、成本、质量、风险', lessons: 5, tag: '进阶' },
  { id: 'tech',      order: 14, title: '服务工具与新技术',    desc: 'ITSM工具、监控、自动化运维、云服务、AIOps与DevOps', lessons: 5, tag: '进阶' },
  { id: 'standard',  order: 15, title: '标准化与知识产权',    desc: '标准化基础、知识产权、法律法规、IT服务相关标准', lessons: 4, tag: '进阶' },
  { id: 'english',   order: 16, title: '专业英语',            desc: 'IT服务常用术语、阅读技巧、真题高频词', lessons: 3, tag: '进阶' },
  { id: 'case',      order: 17, title: '案例分析专题',        desc: '案例总览、服务规划、运营三大管理、SLA与可用性计算、持续改进、团队、成本人力测算、答题模板、真题精解', lessons: 10, tag: '实战' }
];

SPM.path = [
  // 学习导览
  'guide/01-exam-intro', 'guide/02-learning-path', 'guide/03-strategy', 'guide/04-features',
  // 计算机与信息系统基础
  'comp/01-hardware', 'comp/02-software', 'comp/03-integration', 'comp/04-os', 'comp/05-embedded',
  // 网络与通信
  'net/01-model', 'net/02-protocol', 'net/03-addressing', 'net/04-devices', 'net/05-new-network',
  // 数据库基础
  'db/01-model', 'db/02-sql', 'db/03-transaction', 'db/04-warehouse',
  // 信息安全基础
  'sec/01-crypto', 'sec/02-auth', 'sec/03-defense', 'sec/04-mlps', 'sec/05-attack',
  // IT 服务与 ITSS 体系
  'itss/01-it-service', 'itss/02-lifecycle', 'itss/03-itss-system', 'itss/04-elements', 'itss/05-capability', 'itss/06-governance',
  // IT 服务规划设计
  'plan/01-strategy', 'plan/02-demand', 'plan/03-scheme', 'plan/04-sla', 'plan/05-catalog', 'plan/06-resource',
  // IT 服务部署实施
  'deploy/01-plan', 'deploy/02-resource-prep', 'deploy/03-tech-prep', 'deploy/04-delivery', 'deploy/05-acceptance',
  // IT 服务运营管理
  'ops/01-overview', 'ops/02-incident', 'ops/03-problem', 'ops/04-change', 'ops/05-release-config', 'ops/06-sla-mgmt', 'ops/07-capacity-availability', 'ops/08-continuity', 'ops/09-servicedesk',
  // IT 服务持续改进
  'improve/01-concept', 'improve/02-pdca', 'improve/03-measurement', 'improve/04-report', 'improve/05-implement',
  // IT 服务监督管理
  'supervise/01-concept', 'supervise/02-quality', 'supervise/03-satisfaction', 'supervise/04-audit',
  // 服务团队与人员管理
  'people/01-team', 'people/02-role', 'people/03-performance', 'people/04-training', 'people/05-communication',
  // IT 服务营销
  'market/01-concept', 'market/02-crm', 'market/03-pricing', 'market/04-promotion',
  // 项目管理基础
  'pm/01-scope', 'pm/02-schedule', 'pm/03-cost', 'pm/04-quality', 'pm/05-risk',
  // 服务工具与新技术
  'tech/01-itsm-tool', 'tech/02-monitor', 'tech/03-automation', 'tech/04-cloud', 'tech/05-aiops-devops',
  // 标准化与知识产权
  'standard/01-standardization', 'standard/02-ip', 'standard/03-law', 'standard/04-service-standard',
  // 专业英语
  'english/01-terms', 'english/02-reading', 'english/03-vocab',
  // 案例分析专题
  'case/01-overview', 'case/02-plan-case', 'case/03-ops-case', 'case/04-sla-availability', 'case/05-improve-case', 'case/06-team-case', 'case/07-cost-staffing', 'case/08-answer-template', 'case/09-real-1', 'case/10-real-2'
];

SPM.totalLessons = SPM.path.length;
