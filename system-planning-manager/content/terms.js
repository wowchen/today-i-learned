/* 术语表(系统规划与管理师)。格式 {id,name,en,def,analogy,module}
   id 为正文 <gd data-term="id"> 引用键,务必与课时一致。 */
window.SPM = window.SPM || {};

SPM.terms = [
  // ITSS / IT 服务核心
  { id: 'itss', name: 'ITSS', en: 'Information Technology Service Standards', def: '信息技术服务标准,我国 IT 服务领域的成套国家标准,核心是「人员、过程、技术、资源」四要素与服务生命周期。', analogy: '把"怎么做好 IT 服务"写成一本国标教科书。', module: 'itss' },
  { id: 'itsm', name: 'IT 服务管理', en: 'IT Service Management', def: '以流程为导向、以客户为中心,把 IT 能力转化为有价值服务并持续运营改进的管理方法。', analogy: '把 IT 部门当成一家"服务公司"来经营。', module: 'itss' },
  { id: 'itil', name: 'ITIL', en: 'IT Infrastructure Library', def: 'IT 服务管理的国际最佳实践框架,提出服务战略、设计、转换、运营、持续改进的生命周期。', analogy: 'IT 服务界的"国际通用菜谱"。', module: 'itss' },
  { id: 'it-service', name: 'IT 服务', en: 'IT Service', def: '运用信息技术、依靠人和流程,为客户创造价值的活动;具有无形性、不可分离、不可存储、差异性等特征。', analogy: '你买的不是服务器,而是"系统一直能用"这件事。', module: 'itss' },
  { id: 'ppt-r', name: '四要素', en: 'People/Process/Technology/Resource', def: 'ITSS 的服务能力四要素:人员(能力)、过程(方法)、技术(工具手段)、资源(知识/数据/设施)。', analogy: '人会做、有章法、有工具、有家底,缺一不可。', module: 'itss' },
  { id: 'lifecycle', name: '服务生命周期', en: 'Service Lifecycle', def: 'IT 服务"规划设计→部署实施→服务运营→持续改进→监督管理"的全过程管理(PDCA 思想)。', analogy: '服务也有"出生—成长—体检—进化"。', module: 'itss' },
  { id: 'governance', name: 'IT 服务治理', en: 'IT Service Governance', def: '从组织层面对 IT 服务的方向、决策、监督进行控制,明确职责、规则与绩效,确保服务支撑业务战略。', analogy: '治理是"董事会定规矩",管理是"经理去执行"。', module: 'itss' },

  // SLA 与服务级别
  { id: 'sla', name: 'SLA', en: 'Service Level Agreement', def: '服务级别协议:服务方与客户就服务内容、质量指标、责任与赔偿达成的书面约定。', analogy: '服务的"质保承诺书",写明做到什么程度。', module: 'plan' },
  { id: 'ola', name: 'OLA', en: 'Operational Level Agreement', def: '运营级别协议:服务组织内部各团队之间为支撑 SLA 而签订的协作约定。', analogy: '为了对客户兑现承诺,内部各班组先立的"军令状"。', module: 'plan' },
  { id: 'uc', name: '支持合同', en: 'Underpinning Contract', def: 'UC,服务方与外部供应商签订的合同,用于支撑对客户的 SLA 承诺。', analogy: '把一部分活外包出去时签的"背靠背合同"。', module: 'plan' },
  { id: 'slo', name: 'SLO', en: 'Service Level Objective', def: '服务级别目标:SLA 中可量化的具体目标值,如"可用性≥99.9%"。', analogy: 'SLA 是承诺书,SLO 是承诺书里的"具体分数线"。', module: 'plan' },
  { id: 'sli', name: 'SLI', en: 'Service Level Indicator', def: '服务级别指标:实际测量得到的服务质量数值,用来对照 SLO。', analogy: '体检报告上的"实测值"。', module: 'plan' },
  { id: 'service-catalog', name: '服务目录', en: 'Service Catalog', def: '面向客户、结构化列出当前可提供服务及其级别、价格、申请方式的清单。', analogy: 'IT 服务的"菜单"。', module: 'plan' },

  // 运营管理流程
  { id: 'incident', name: '事件管理', en: 'Incident Management', def: '尽快恢复服务、降低对业务影响的流程;目标是"快速恢复",不追根因。', analogy: '先止血,别管伤口怎么来的。', module: 'ops' },
  { id: 'problem', name: '问题管理', en: 'Problem Management', def: '查找事件根本原因、消除或规避以防止再次发生的流程;目标是"治本"。', analogy: '事件是发烧,问题管理是查出病因根治。', module: 'ops' },
  { id: 'known-error', name: '已知错误', en: 'Known Error', def: '已查明根本原因或有临时解决方案(Workaround)的问题,登记入库供快速处置。', analogy: '"这毛病我们见过,先这么应付"的备忘录。', module: 'ops' },
  { id: 'change', name: '变更管理', en: 'Change Management', def: '对 IT 环境的新增/修改/删除进行受控审批、评估、实施与回顾,降低变更风险。', analogy: '动线上的东西前先走"审批+预案"。', module: 'ops' },
  { id: 'cab', name: '变更顾问委员会', en: 'Change Advisory Board', def: 'CAB,评估与批准变更的跨职能小组,对重大/高风险变更把关。', analogy: '改动前的"专家评审会"。', module: 'ops' },
  { id: 'release', name: '发布管理', en: 'Release Management', def: '将一组变更打包、测试并部署到生产环境的流程,确保平稳上线。', analogy: '把多处改动统一"打包发车"。', module: 'ops' },
  { id: 'config', name: '配置管理', en: 'Configuration Management', def: '识别、记录、维护 IT 组件(配置项)及其关系的流程,提供准确的环境信息。', analogy: '给所有家当建一本"户口本"。', module: 'ops' },
  { id: 'ci', name: '配置项', en: 'Configuration Item', def: 'CI,纳入配置管理的任何组件,如硬件、软件、文档、SLA 等。', analogy: '"户口本"上的每一口人。', module: 'ops' },
  { id: 'cmdb', name: 'CMDB', en: 'Configuration Management Database', def: '配置管理数据库,存储配置项及其相互关系,是多流程的共享信息底座。', analogy: 'IT 家当的"关系族谱数据库"。', module: 'ops' },
  { id: 'servicedesk', name: '服务台', en: 'Service Desk', def: '用户与 IT 服务的单一联系点(SPOC),受理事件/请求、记录派发、跟踪反馈。', analogy: 'IT 的"前台兼 110"。', module: 'ops' },
  { id: 'spoc', name: '单一联系点', en: 'Single Point of Contact', def: '用户只需通过一个统一入口即可获得服务,内部协调对用户透明。', analogy: '一个电话搞定,不用到处找人。', module: 'ops' },
  { id: 'sl-mgmt', name: '服务级别管理', en: 'Service Level Management', def: '协商、签订、监控、报告并改进 SLA 的流程,使服务质量与约定一致。', analogy: '盯着"承诺书"逐条兑现的管家。', module: 'ops' },
  { id: 'capacity', name: '容量管理', en: 'Capacity Management', def: '确保 IT 资源能力以合理成本满足当前与未来业务需求的流程。', analogy: '提前算好"够不够用、要不要扩"。', module: 'ops' },
  { id: 'availability', name: '可用性管理', en: 'Availability Management', def: '规划、测量并改进服务可用性,使其满足约定水平的流程。', analogy: '让服务"该在的时候一直在"。', module: 'ops' },
  { id: 'continuity', name: '连续性管理', en: 'IT Service Continuity Management', def: '通过风险评估与恢复方案,确保灾难发生后服务能在约定时间内恢复。', analogy: '给服务买"灾备保险+逃生预案"。', module: 'ops' },

  // 可用性 / 可靠性指标
  { id: 'mtbf', name: 'MTBF', en: 'Mean Time Between Failures', def: '平均故障间隔时间,衡量可靠性,越大越可靠。', analogy: '两次坏之间能撑多久。', module: 'ops' },
  { id: 'mttr', name: 'MTTR', en: 'Mean Time To Repair', def: '平均修复时间,衡量可维护性,越小越好。', analogy: '坏了多快能修好。', module: 'ops' },
  { id: 'availability-fml', name: '可用性公式', en: 'Availability', def: '可用性 A = MTBF /(MTBF+MTTR),常以"几个 9"表示,如 99.9%。', analogy: '能用时间占总时间的比例。', module: 'ops' },
  { id: 'rto', name: 'RTO', en: 'Recovery Time Objective', def: '恢复时间目标:灾难后业务可容忍的最长停机时间。', analogy: '"最多停多久"的红线。', module: 'ops' },
  { id: 'rpo', name: 'RPO', en: 'Recovery Point Objective', def: '恢复点目标:可容忍的最大数据丢失量(回到多久前的数据)。', analogy: '"最多丢多少数据"的红线。', module: 'ops' },

  // 持续改进
  { id: 'pdca', name: 'PDCA 循环', en: 'Plan-Do-Check-Act', def: '戴明环:计划—执行—检查—处理,持续改进的基本方法论。', analogy: '边干边复盘,螺旋上升。', module: 'improve' },
  { id: 'csi', name: '持续服务改进', en: 'Continual Service Improvement', def: 'CSI,通过测量与分析不断提升服务质量、效率与价值的活动。', analogy: '服务永远在"打补丁升级"。', module: 'improve' },
  { id: 'kpi', name: 'KPI', en: 'Key Performance Indicator', def: '关键绩效指标,衡量流程/服务是否达成目标的可量化指标。', analogy: '考核的"几道大题分数"。', module: 'improve' },
  { id: 'csf', name: '关键成功因素', en: 'Critical Success Factor', def: 'CSF,某活动要成功必须做到的少数关键条件,KPI 据此设定。', analogy: '"成败就看这几条"。', module: 'improve' },
  { id: 'baseline', name: '基线', en: 'Baseline', def: '某一时点的测量基准值,用于对比改进前后的效果。', analogy: '减肥前先称的"起始体重"。', module: 'improve' },
  { id: 'rca', name: '根本原因分析', en: 'Root Cause Analysis', def: 'RCA,通过追问("5 个为什么"等)找出问题真正根因的方法。', analogy: '一直问"为什么",问到底。', module: 'improve' },

  // 监督 / 评价
  { id: 'audit', name: '服务审计', en: 'Service Audit', def: '依据标准/合同独立核查服务过程与结果是否合规有效的活动。', analogy: '请人来"查账+查作业"。', module: 'supervise' },
  { id: 'satisfaction', name: '客户满意度', en: 'Customer Satisfaction', def: '客户对服务感知与期望对比后的评价,常用问卷/CSAT/NPS 测量。', analogy: '客户给你打的"星级"。', module: 'supervise' },
  { id: 'nps', name: 'NPS', en: 'Net Promoter Score', def: '净推荐值,以"愿不愿向他人推荐"衡量客户忠诚度。', analogy: '"你会不会安利给朋友"。', module: 'supervise' },

  // 团队 / 营销
  { id: 'raci', name: 'RACI 矩阵', en: 'RACI Matrix', def: '用执行(R)/批准(A)/咨询(C)/知会(I)界定角色职责的责任分配矩阵。', analogy: '一张表说清"谁干、谁拍板、问谁、告诉谁"。', module: 'people' },
  { id: 'tuckman', name: '塔克曼模型', en: 'Tuckman Model', def: '团队发展五阶段:组建、震荡、规范、执行、解散。', analogy: '团队从"磨合吵架"到"默契开挂"。', module: 'people' },
  { id: 'crm', name: 'CRM', en: 'Customer Relationship Management', def: '客户关系管理:以客户为中心,管理售前售中售后全周期关系的理念与系统。', analogy: '把每个客户的"交情"系统记下来经营。', module: 'market' },
  { id: 'service-marketing', name: '服务营销', en: 'Service Marketing', def: '针对服务无形性等特征的营销,常用 7P(产品/价格/渠道/促销/人员/过程/有形展示)。', analogy: '卖"看不见的服务"得讲方法。', module: 'market' },

  // 工具 / 新技术
  { id: 'devops', name: 'DevOps', en: 'Development & Operations', def: '打通开发与运维、以自动化与协作实现快速可靠交付的文化与实践。', analogy: '开发和运维"拆墙合体"。', module: 'tech' },
  { id: 'itsm-tool', name: 'ITSM 工具', en: 'ITSM Tool', def: '支撑 IT 服务管理流程落地的平台,集成工单流转、CMDB、知识库、SLA 监控与报告,使流程可追溯可统计。', analogy: '服务流程的"执行器与账本"。', module: 'tech' },
  { id: 'aiops', name: 'AIOps', en: 'AI for IT Operations', def: '用大数据与机器学习增强 IT 运维,实现异常检测、根因分析、预测与自动化。', analogy: '给运维装上"AI 大脑"。', module: 'tech' },
  { id: 'cicd', name: 'CI/CD', en: 'Continuous Integration / Delivery', def: '持续集成/持续交付:代码频繁集成并自动化测试、部署的流水线。', analogy: '代码上线的"自动流水线"。', module: 'tech' },
  { id: 'cloud', name: '云计算', en: 'Cloud Computing', def: '按需获取可弹性伸缩的共享计算资源,模式分 IaaS/PaaS/SaaS。', analogy: '算力像水电,用多少买多少。', module: 'tech' },
  { id: 'sla-monitor', name: '监控告警', en: 'Monitoring & Alerting', def: '对系统指标实时采集、阈值判断与告警通知,是事件发现的前哨。', analogy: '给系统装"体温计+报警器"。', module: 'tech' },

  // 项目管理
  { id: 'wbs', name: 'WBS', en: 'Work Breakdown Structure', def: '工作分解结构,把项目可交付成果逐层分解为可管理的工作包。', analogy: '把大任务"拆成小块"。', module: 'pm' },
  { id: 'critical-path', name: '关键路径', en: 'Critical Path', def: '网络图中工期最长、决定项目总工期的路径,其上活动无机动时间。', analogy: '决定整体进度的"最长那条链"。', module: 'pm' },
  { id: 'risk', name: '风险管理', en: 'Risk Management', def: '识别、分析、应对并监控不确定性的过程,应对策略含规避/转移/减轻/接受。', analogy: '给项目"提前买保险、想退路"。', module: 'pm' },
  { id: 'roi', name: '投资回收期', en: 'Payback Period', def: '累计净收益抵偿初始投资所需的时间,越短回本越快(静态法不考虑货币时间价值)。', analogy: '多久把本钱赚回来。', module: 'pm' },

  // 标准化 / 知识产权 / 安全
  { id: 'mlps', name: '等级保护', en: 'Multi-Level Protection Scheme', def: '网络安全等级保护制度(等保 2.0),按重要性将系统分为五级实施分级保护。', analogy: '按"重要程度"分级上锁。', module: 'sec' },
  { id: 'cia', name: 'CIA 三性', en: 'Confidentiality/Integrity/Availability', def: '信息安全三要素:保密性、完整性、可用性。', analogy: '不外泄、不被改、用得上。', module: 'sec' },
  { id: 'pki', name: 'PKI', en: 'Public Key Infrastructure', def: '公钥基础设施,以数字证书和 CA 实现身份认证、加密与签名。', analogy: '网络世界的"身份证签发体系"。', module: 'sec' },
  { id: 'standardization', name: '标准化', en: 'Standardization', def: '为重复性事物制定并实施统一规则以获得最佳秩序的活动;标准分国际/国家/行业/团体/企业等。', analogy: '大家约定"按同一把尺子来"。', module: 'standard' },
  { id: 'ip', name: '知识产权', en: 'Intellectual Property', def: '对智力成果依法享有的专有权,含著作权、专利权、商标权等。', analogy: '脑力劳动成果的"产权证"。', module: 'standard' },

  // 规划 / 部署
  { id: 'feasibility', name: '可行性研究', en: 'Feasibility Study', def: '从经济、技术、运行、法律/社会等方面论证项目是否值得且可行。', analogy: '动手前先算"划不划算、行不行得通"。', module: 'plan' },
  { id: 'demand-mgmt', name: '需求管理', en: 'Demand Management', def: '识别、分析并引导业务对 IT 服务的需求,使供需匹配、产能合理。', analogy: '摸清客户"到底要什么、要多少"。', module: 'plan' },
  { id: 'acceptance', name: '转产验收', en: 'Transition & Acceptance', def: '服务从建设/部署转入正式运营前,对就绪度与交付物进行的检验确认。', analogy: '正式开业前的"竣工验收"。', module: 'deploy' },
  { id: 'rollback', name: '回退方案', en: 'Rollback Plan', def: '变更/发布失败时把环境恢复到变更前状态的预案。', analogy: '改坏了能"一键还原"。', module: 'ops' },
  { id: 'bcp', name: '业务连续性计划', en: 'Business Continuity Plan', def: 'BCP,确保关键业务在中断时持续或快速恢复的整体计划。', analogy: '公司级的"灾难逃生总预案"。', module: 'ops' }
];
