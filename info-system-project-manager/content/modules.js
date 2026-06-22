/* 模块元数据 + 学习路径 */
window.ISPM = window.ISPM || {};

ISPM.modules = [
  {
    id: 'guide',
    order: 0,
    title: '学习导览',
    desc: '考试介绍、学习路径、备考策略、术语系统',
    lessons: 4,
    tag: '导览'
  },
  {
    id: 'overview',
    order: 1,
    title: '信息化与信息系统',
    desc: '信息化发展、新一代IT技术、国家信息化体系、电子政务',
    lessons: 8,
    tag: '基础'
  },
  {
    id: 'syseng',
    order: 2,
    title: '系统工程',
    desc: '系统工程方法、生命周期、霍尔三维结构、系统分析',
    lessons: 6,
    tag: '基础'
  },
  {
    id: 'se',
    order: 3,
    title: '软件工程',
    desc: '需求分析、设计、编码、测试、CMMI、敏捷方法',
    lessons: 10,
    tag: '基础'
  },
  {
    id: 'infra',
    order: 4,
    title: 'IT基础设施',
    desc: '网络、存储、云计算、物联网、大数据、人工智能',
    lessons: 8,
    tag: '基础'
  },
  {
    id: 'pm-framework',
    order: 5,
    title: '项目管理框架',
    desc: 'PMBOK框架、五大过程组、十大知识领域、项目生命周期',
    lessons: 6,
    tag: '核心'
  },
  {
    id: 'pm-scope',
    order: 6,
    title: '范围管理',
    desc: 'WBS、需求收集、范围确认、范围蔓延、变更控制',
    lessons: 8,
    tag: '核心'
  },
  {
    id: 'pm-schedule',
    order: 7,
    title: '进度管理',
    desc: '关键路径法、甘特图、资源平衡、进度压缩、网络图',
    lessons: 8,
    tag: '核心'
  },
  {
    id: 'pm-cost',
    order: 8,
    title: '成本管理',
    desc: '估算方法、挣值管理EVM、预算、成本控制、S曲线',
    lessons: 8,
    tag: '核心'
  },
  {
    id: 'pm-quality',
    order: 9,
    title: '质量管理',
    desc: '质量规划、质量保证、质量控制、七种基本工具、六西格玛',
    lessons: 6,
    tag: '核心'
  },
  {
    id: 'pm-risk',
    order: 10,
    title: '风险管理',
    desc: '风险识别、定性/定量分析、应对策略、风险监控、概率影响矩阵',
    lessons: 8,
    tag: '核心'
  },
  {
    id: 'pm-hr',
    order: 11,
    title: '资源与沟通管理',
    desc: '团队建设、冲突管理、干系人管理、沟通模型、RACI矩阵',
    lessons: 8,
    tag: '核心'
  },
  {
    id: 'pm-proc',
    order: 12,
    title: '采购与合同管理',
    desc: '采购类型、合同管理、招投标流程、索赔管理',
    lessons: 6,
    tag: '核心'
  },
  {
    id: 'pm-integ',
    order: 13,
    title: '整合管理与变更',
    desc: '项目章程、整体变更控制、配置管理、收尾过程',
    lessons: 8,
    tag: '核心'
  },
  {
    id: 'program',
    order: 14,
    title: '项目集与项目组合',
    desc: '项目集管理、组合管理、OPM3、战略对齐、收益管理',
    lessons: 6,
    tag: '进阶'
  },
  {
    id: 'standard',
    order: 15,
    title: '法律法规与标准',
    desc: '知识产权法、招投标法、政府采购法、标准化、合同法',
    lessons: 8,
    tag: '进阶'
  },
  {
    id: 'case',
    order: 16,
    title: '案例分析专题',
    desc: '计算题解法、分析框架、答题模板、真题拆解、评分标准',
    lessons: 10,
    tag: '实战'
  },
  {
    id: 'essay',
    order: 17,
    title: '论文写作专题',
    desc: '论文结构、子题域模板、项目素材积累、评分标准、范文分析',
    lessons: 8,
    tag: '实战'
  }
];

ISPM.path = [
  // Module 0: 学习导览
  'guide/01-exam-intro',
  'guide/02-learning-path',
  'guide/03-strategy',
  'guide/04-term-system',
  // Module 5: 项目管理框架 (先建立整体认知)
  'pm-framework/01-what-is-pm',
  'pm-framework/02-five-process-groups',
  'pm-framework/03-ten-knowledge-areas',
  'pm-framework/04-project-lifecycle',
  'pm-framework/05-tailoring',
  'pm-framework/06-role-of-pm',
  // Module 6: 范围管理
  'pm-scope/01-scope-overview',
  'pm-scope/02-requirements-collection',
  'pm-scope/03-requirements-doc',
  'pm-scope/04-define-scope',
  'pm-scope/05-wbs',
  'pm-scope/06-wbs-dictionary',
  'pm-scope/07-scope-validation',
  'pm-scope/08-scope-control',
  // Module 7: 进度管理
  'pm-schedule/01-schedule-overview',
  'pm-schedule/02-activity-definition',
  'pm-schedule/03-activity-sequencing',
  'pm-schedule/04-duration-estimation',
  'pm-schedule/05-critical-path',
  'pm-schedule/06-gantt-chart',
  'pm-schedule/07-resource-leveling',
  'pm-schedule/08-schedule-compression',
  // Module 8: 成本管理
  'pm-cost/01-cost-overview',
  'pm-cost/02-estimation-methods',
  'pm-cost/03-budget-determination',
  'pm-cost/04-evm-basics',
  'pm-cost/05-evm-indicators',
  'pm-cost/06-evm-forecasting',
  'pm-cost/07-s-curve',
  'pm-cost/08-cost-control',
  // Module 9: 质量管理
  'pm-quality/01-quality-overview',
  'pm-quality/02-quality-planning',
  'pm-quality/03-quality-assurance',
  'pm-quality/04-quality-control',
  'pm-quality/05-seven-tools',
  'pm-quality/06-six-sigma',
  // Module 10: 风险管理
  'pm-risk/01-risk-overview',
  'pm-risk/02-risk-identification',
  'pm-risk/03-qualitative-analysis',
  'pm-risk/04-quantitative-analysis',
  'pm-risk/05-risk-response',
  'pm-risk/06-risk-monitoring',
  'pm-risk/07-probability-impact-matrix',
  'pm-risk/08-risk-register',
  // Module 11: 资源与沟通管理
  'pm-hr/01-resource-overview',
  'pm-hr/02-team-building',
  'pm-hr/03-conflict-management',
  'pm-hr/04-motivation-theory',
  'pm-hr/05-communication-model',
  'pm-hr/06-communication-methods',
  'pm-hr/07-stakeholder-management',
  'pm-hr/08-raci-matrix',
  // Module 12: 采购与合同管理
  'pm-proc/01-procurement-overview',
  'pm-proc/02-contract-types',
  'pm-proc/03-bidding-process',
  'pm-proc/04-source-selection',
  'pm-proc/05-contract-admin',
  'pm-proc/06-claims-management',
  // Module 13: 整合管理与变更
  'pm-integ/01-integration-overview',
  'pm-integ/02-project-charter',
  'pm-integ/03-project-plan',
  'pm-integ/04-direct-manage',
  'pm-integ/05-monitor-control',
  'pm-integ/06-change-control',
  'pm-integ/07-configuration-management',
  'pm-integ/08-close-project',
  // Module 1: 信息化与信息系统
  'overview/01-informatization',
  'overview/02-national-info-system',
  'overview/03-e-government',
  'overview/04-enterprise-info',
  'overview/05-new-it-tech',
  'overview/06-cloud-computing',
  'overview/07-big-data-ai',
  'overview/08-iot-blockchain',
  // Module 2: 系统工程
  'syseng/01-system-concept',
  'syseng/02-system-engineering-method',
  'syseng/03-hall-three-dimensional',
  'syseng/04-lifecycle-methodology',
  'syseng/05-system-analysis',
  'syseng/06-system-design',
  // Module 3: 软件工程
  'se/01-software-lifecycle',
  'se/02-requirements-engineering',
  'se/03-software-design',
  'se/04-coding-standards',
  'se/05-testing-methods',
  'se/06-testing-levels',
  'se/07-cmmi',
  'se/08-agile-methods',
  'se/09-devops',
  'se/10-software-maintenance',
  // Module 4: IT基础设施
  'infra/01-network-basics',
  'infra/02-network-architecture',
  'infra/03-storage-tech',
  'infra/04-cloud-service-models',
  'infra/05-virtualization',
  'infra/06-iot-architecture',
  'infra/07-big-data-platform',
  'infra/08-ai-applications',
  // Module 14: 项目集与项目组合
  'program/01-program-management',
  'program/02-portfolio-management',
  'program/03-opm3',
  'program/04-strategic-alignment',
  'program/05-benefits-management',
  'program/06-governance',
  // Module 15: 法律法规与标准
  'standard/01-ip-law',
  'standard/02-bidding-law',
  'standard/03-government-procurement',
  'standard/04-contract-law',
  'standard/05-cybersecurity-law',
  'standard/06-standardization',
  'standard/07-project-standards',
  'standard/08-quality-standards',
  // Module 16: 案例分析
  'case/01-case-overview',
  'case/02-calculation-evm',
  'case/03-calculation-cpm',
  'case/04-analysis-framework',
  'case/05-scope-cases',
  'case/06-schedule-cases',
  'case/07-risk-cases',
  'case/08-change-cases',
  'case/09-answer-template',
  'case/10-scoring-rules',
  // Module 17: 论文写作
  'essay/01-essay-overview',
  'essay/02-essay-structure',
  'essay/03-opening-template',
  'essay/04-body-framework',
  'essay/05-closing-template',
  'essay/06-project-material',
  'essay/07-sub-topics',
  'essay/08-scoring-analysis'
];

ISPM.totalLessons = ISPM.path.length;
