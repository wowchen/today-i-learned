/* AI 应用工程 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及模型能力、平台功能、评测方法与合规要求的具体内容,
   必须写明依据与适用期;内容基线为 2026 年 10 月。
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
  ['guide','导览','怎么用这个站、AI 应用工程讲什么、与模型本身怎么分工、学习路线','基础','Guide'],
  ['gap','从 Demo 到生产的鸿沟','演示能跑通不等于能用:演示鸿沟、快乐路径、分布漂移、长尾输入、失败模式、幻觉与非确定性、护栏','基础','From Demo to Production'],
  ['scoping','场景筛选与需求定义','什么样的活儿适合交给 AI:场景筛选、任务分解、工作单元、验收标准、容错度、人在回路、适配度评估、变革管理','基础','Scoping'],
  ['harness','Harness 编排层','模型外面那层工程:编排、提示词与模板、工具与函数调用、智能体循环、工作流图、重试与降级','核心','Harness'],
  ['context','上下文与知识供给','上下文窗口与预算、RAG 检索增强、切块与向量化、重排、落地依据、记忆','核心','Context and Knowledge'],
  ['eval','评测体系','评测集与黄金集、离线与在线评测、模型裁判、评分标准、准确率与召回率、回归测试、评测驱动开发','核心','Evaluation'],
  ['observability','可观测性与线上监控','可观测性、链路追踪与跨度、Token 计量、漂移监控、质量抽检、告警与事故分级','核心','Observability'],
  ['rollout','灰度、A/B 与发布','灰度发布、影子模式、A/B 测试、特性开关、统计显著性、回滚与发布门禁','核心','Rollout and Release'],
  ['cost','成本与 Token 经济','Token 成本与输入输出计费、缓存、模型分层、批处理、单任务成本、单位经济、预算上限','核心','Cost and Token Economics'],
  ['value','价值度量与结果定价','价值指标与北极星、结果定价与席位定价与用量定价、基线、反事实、价值实现周期','进阶','Value and Outcome Pricing'],
  ['flywheel','数据飞轮与冷启动','数据飞轮、冷启动、反馈闭环、人工反馈、合成数据、数据标注、自举','进阶','Data Flywheel'],
  ['org','人机协同与组织适配','人机协同、增强而非替代、岗位重塑、审核负荷、自动化偏见、技能迁移、采纳率、变革曲线','进阶','Human-AI Collaboration'],
  ['security','安全与合规','知你的智能体(KYA)、提示词注入、数据泄露与个人信息、越狱、智能体权限、审计留痕、合规审查','进阶','Security and Compliance'],
  ['roi','ROI 论证与汇报','投资回报率、总拥有成本、回收期、净现值、收益量化、试点到规模化、干系人','进阶','ROI and Reporting'],
  ['practice','实战案例与失败复盘','案例复盘、事后复盘、概念验证与试点、规模化推广、经验教训、反模式','应用','Case Studies'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['ai-application','AI 应用层','AI Application Layer','把模型能力封装成可交付、可运维、可度量的业务能力的这一层。','把发动机装进车里,还要能上路。','guide'],
  ['demo-to-production','从 Demo 到生产','Demo to Production','一个 AI 能力从「演示能跑通」走到「每天稳定服务真实用户」的全过程。','从样机到量产。','guide'],
  ['last-mile','最后一公里','Last Mile','模型能力已经具备,但把它稳定接进真实业务流程的最后一段工程工作。','最后一公里往往最难走。','guide'],
  ['ai-engineering','AI 应用工程','AI Application Engineering','围绕模型之外的一切工程:数据供给、编排、评测、监控、灰度、成本与治理。','模型是零件,工程是产线。','guide'],
  ['production-readiness','生产就绪','Production Readiness','系统在准确性、时延、成本、可观测、可回滚与合规上都达到可上线标准的状态。','到底能不能真上岗。','guide'],

  // 从 Demo 到生产的鸿沟
  ['demo-gap','Demo 鸿沟','Demo Gap','演示环境只覆盖少量理想输入,真实环境输入分布完全不同,导致效果断崖式下滑。','展厅里跑得好,门市里就趴窝。','gap'],
  ['happy-path','快乐路径','Happy Path','只考虑输入规范、流程顺畅的理想路径,忽略异常与边界。','只排练过顺利那一遍。','gap'],
  ['distribution-shift','分布漂移','Distribution Shift','线上输入的数据分布与开发时不同,且随时间变化,让效果慢慢变差。','世界变了,模型没变。','gap'],
  ['long-tail','长尾输入','Long-tail Inputs','真实场景里大量低频但花样极多的异常输入,靠枚举永远覆盖不全。','总有想不到的输入。','gap'],
  ['failure-mode','失败模式','Failure Mode','AI 系统出错的具体方式,如答非所问、编造、拒答、格式错乱、超时。','出错的花样清单。','gap'],
  ['guardrail','护栏','Guardrail','对输入输出做的约束与校验,防止越界、泄密、产生有害或不符格式的输出。','给车装上护栏。','gap'],
  ['hallucination','幻觉','Hallucination','模型生成了流畅但事实上不存在或不正确的内容。','一本正经地胡说。','gap'],
  ['non-determinism','非确定性','Non-determinism','相同输入多次调用可能得到不同输出,使测试与复现变难。','同一句话问两遍,答案不一样。','gap'],

  // 场景筛选与需求定义
  ['use-case-screening','场景筛选','Use Case Screening','按价值、可行性、数据可得性与风险,从一堆想法里挑出值得做的 AI 场景。','先挑赛道,再谈跑法。','scoping'],
  ['task-decomposition','任务分解','Task Decomposition','把一个模糊的业务诉求拆成一串边界清晰、可单独评测的子任务。','把大活拆成小活。','scoping'],
  ['unit-of-work','工作单元','Unit of Work','一次 AI 调用要完成的、可度量成败的最小任务边界。','一次能干完的最小一件事。','scoping'],
  ['acceptance-criteria','验收标准','Acceptance Criteria','事先写清「做到什么程度算过关」的量化条件。','先说好及格线在哪。','scoping'],
  ['tolerance','容错度','Tolerance','业务能接受多大比例的出错,决定了要不要人工兜底与投入多少评测。','能忍多少错。','scoping'],
  ['human-in-the-loop','人在回路','Human in the Loop','把人工审核嵌入流程,由人确认或修正 AI 的输出。','AI 先干,人来拍板。','scoping'],
  ['ai-fit','适配度评估','AI Fit Assessment','判断一个任务是否真的适合用模型做,而不是规则或传统程序更合适。','这活到底该不该交给 AI。','scoping'],
  ['change-management','变革管理','Change Management','让流程、岗位与考核随 AI 落地同步调整的组织工作。','工具换了,人也得跟着换法。','scoping'],

  // Harness 编排层
  ['harness','Harness 编排层','Harness','包裹在模型外面的那层工程代码:拼上下文、调工具、校验输出、重试与记录。','模型外面的那套脚手架。','harness'],
  ['orchestration','编排','Orchestration','把模型、工具、检索、校验等步骤按顺序与条件组织起来执行。','指挥各个零件配合干活。','harness'],
  ['prompt','提示词','Prompt','发给模型的指令与上下文,决定模型这次到底要做什么。','给模型下的那道指令。','harness'],
  ['prompt-template','提示词模板','Prompt Template','把可变部分留成槽位的提示词骨架,便于复用与版本管理。','填空题式的指令。','harness'],
  ['tool-calling','工具调用','Tool Calling','让模型在需要时调用外部函数或接口取数、算数、执行动作。','模型伸手去够外面的工具。','harness'],
  ['function-calling','函数调用','Function Calling','以结构化参数调用预定义函数的机制,是工具调用的常见实现形式。','按约定格式喊函数。','harness'],
  ['agent-loop','智能体循环','Agent Loop','模型观察、决定、行动、再观察的反复循环,直到任务完成或触发上限。','边看边做,做完再看。','harness'],
  ['workflow-graph','工作流图','Workflow Graph','把多步骤 AI 流程画成有向图,节点是步骤、边是转移条件。','把流程画成一张图。','harness'],
  ['retry-fallback','重试与降级','Retry and Fallback','调用失败或输出不合格时,自动重试、换模型或退回规则与人工。','不行就再来一次,再不行就换条路。','harness'],

  // 上下文与知识供给
  ['context-window','上下文窗口','Context Window','模型单次调用能看到的最大 Token 数,是上下文供给的硬上限。','模型的短期记忆容量。','context'],
  ['context-budget','上下文预算','Context Budget','在窗口限制下,给系统指令、检索资料、历史对话与输出各分配多少 Token。','一份总额度的分配表。','context'],
  ['rag','检索增强生成','Retrieval-Augmented Generation','先从知识库里检索相关片段,再把它塞进上下文让模型据此作答。','先查资料,再回答。','context'],
  ['chunking','切块','Chunking','把长文档切成适合检索与放入上下文的小段。','把厚书拆成小卡片。','context'],
  ['embedding','向量化','Embedding','把文本映射成向量,使语义相近的内容在向量空间里靠得更近。','把字变成坐标。','context'],
  ['rerank','重排','Rerank','对初步检索出的候选做更精细的相关性排序,取最相关的几条。','粗筛之后再细挑。','context'],
  ['grounding','落地依据','Grounding','让回答有可追溯的来源,而不是凭模型记忆凭空生成。','每句话都要有出处。','context'],
  ['memory','记忆','Memory','跨多轮或跨会话保留的有用信息,分短期会话记忆与长期用户记忆。','它记得你上次说过什么。','context'],

  // 评测体系
  ['eval-set','评测集','Eval Set','一组带标准答案或评分依据的测试样本,用来量化系统表现。','一套标准考卷。','eval'],
  ['golden-set','黄金集','Golden Set','由专家精心标注、质量最高的核心评测样本,用于把关上线。','压箱底的那套标准答案。','eval'],
  ['offline-eval','离线评测','Offline Evaluation','上线前用固定评测集跑批,快速比较不同版本的效果。','关起门来模拟考。','eval'],
  ['online-eval','在线评测','Online Evaluation','在真实流量上通过灰度、影子或抽检来评估效果。','真刀真枪地考。','eval'],
  ['llm-as-judge','模型裁判','LLM as Judge','用另一个模型按评分标准给输出打分,把主观评价量化为可重复的分数。','请个助教来判卷。','eval'],
  ['rubric','评分标准','Rubric','把「好答案」拆成可打分的维度与档位,减少评判的随意性。','阅卷的评分细则。','eval'],
  ['precision-recall','准确率与召回率','Precision and Recall','查得准不准(准确率)与该查的有没有漏(召回率),两者常此消彼长。','挑出来的对不对,该挑的漏没漏。','eval'],
  ['regression-test','回归测试','Regression Test','每次改动后重跑既有评测集,确认没有把原来对的能力改坏。','改一处别弄坏别处。','eval'],
  ['eval-driven','评测驱动开发','Eval-driven Development','先定评测集与指标,再迭代提示词与流程,用分数决定要不要合入。','先立考纲,再练功。','eval'],

  // 可观测性与线上监控
  ['observability','可观测性','Observability','凭日志、指标与追踪就能回答「系统现在怎么样、哪里慢、为什么错」。','给系统装上仪表盘。','observability'],
  ['trace','链路追踪','Trace','把一次请求经过的全部步骤串成一条可回看的完整记录。','把整条流水账记下来。','observability'],
  ['span','跨度','Span','链路里一个具体步骤的记录,含耗时、输入输出与状态。','流水账里的一笔。','observability'],
  ['token-accounting','Token 计量','Token Accounting','按请求、用户、功能统计输入输出 Token 与费用,是成本治理的基础。','给每次调用记一笔账。','observability'],
  ['drift-monitoring','漂移监控','Drift Monitoring','持续监测输入分布与效果指标的变化,及早发现效果下滑。','盯着水质有没有变。','observability'],
  ['quality-sampling','质量抽检','Quality Sampling','按比例抽取线上样本人工复核,用少量成本持续校准信心。','时不时抽查几件。','observability'],
  ['alerting','告警','Alerting','对错误率、时延、成本、拒答率等设定阈值并主动通知。','出了问题会喊人。','observability'],
  ['incident-triage','事故分级','Incident Triage','按影响面与严重度给线上问题分级,决定响应速度与升级路径。','先分清是火警还是烟感。','observability'],

  // 灰度、A/B 与发布
  ['canary','灰度发布','Canary Release','先给小比例流量用新版本,确认无异常再逐步放量。','先让一小撮人试。','rollout'],
  ['shadow-mode','影子模式','Shadow Mode','新版本在后台跟随真实流量运行但不影响用户,用于对齐效果。','先跟着跑,不算分。','rollout'],
  ['ab-test','A/B 测试','A/B Test','把流量随机分成两组分别用新旧方案,用统计方法比较效果差异。','两组对照着比。','rollout'],
  ['feature-flag','特性开关','Feature Flag','运行时开关某个功能的开关,便于快速启用、关闭与定向放量。','一个随时可拨的开关。','rollout'],
  ['statistical-significance','统计显著性','Statistical Significance','判断观察到的效果差异是真差异还是随机波动。','这差别是不是碰巧。','rollout'],
  ['rollback','回滚','Rollback','发现问题时迅速退回上一稳定版本的能力。','一键退回上一版。','rollout'],
  ['release-gate','发布门禁','Release Gate','上线前必须通过的硬性检查,如评测分数、成本与时延阈值。','过了闸机才放行。','rollout'],

  // 成本与 Token 经济
  ['token-cost','Token 成本','Token Cost','按输入与输出 Token 分别计价的调用费用,是 AI 应用的主要边际成本。','按字计费。','cost'],
  ['input-output-token','输入与输出 Token','Input and Output Tokens','输入通常便宜、输出通常更贵,两者的比例决定优化方向。','进去的字和出来的字不是一个价。','cost'],
  ['caching','缓存','Caching','把重复的提示前缀或查询结果缓存下来,避免重复计算与重复付费。','算过一遍就别再算。','cost'],
  ['model-tiering','模型分层','Model Tiering','按任务难度把请求分给不同档位的模型,好钢用在刀刃上。','大活给大将,小活给小兵。','cost'],
  ['batch-offline','批处理','Batch Offline','把不要求实时性的任务攒起来低价批处理,换取单位成本下降。','攒一堆再一起干。','cost'],
  ['cost-per-task','单任务成本','Cost per Task','一次完整业务动作的平均花费,比单次调用成本更能反映真实开销。','干成一件事要花多少钱。','cost'],
  ['unit-economics','单位经济','Unit Economics','单个用户或单笔业务的收入与成本关系,决定这门生意是否成立。','一单到底赚不赚钱。','cost'],
  ['budget-cap','预算上限','Budget Cap','为功能或用户设定的花费天花板,超限即降级或拒绝。','花到多少钱就打住。','cost'],

  // 价值度量与结果定价
  ['value-metric','价值指标','Value Metric','能真实反映业务收益的指标,如处理时长、一次通过率、人均产出。','真正说明有没有用的那个数。','value'],
  ['outcome-pricing','结果定价','Outcome Pricing','按实际达成的业务结果而非调用量收费的定价方式。','按成果结账。','value'],
  ['seat-pricing','席位定价','Seat Pricing','按使用人数收费,适合内部工具与协作类场景。','按人头收费。','value'],
  ['consumption-pricing','用量定价','Consumption Pricing','按实际消耗的 Token 或调用量收费,用多少付多少。','按用量收费。','value'],
  ['baseline','基线','Baseline','改动之前的状态,是衡量收益的参照物。','跟原来比。','value'],
  ['counterfactual','反事实','Counterfactual','如果没有引入 AI 会怎样,用于剥离其他因素造成的效果变化。','假如没上会怎样。','value'],
  ['time-to-value','价值实现周期','Time to Value','从投入建设到开始产生可观测收益所需要的时间。','多久能看到回头钱。','value'],
  ['north-star','北极星指标','North Star Metric','最能代表整体价值的单一指标,用来对齐各方取舍。','所有事都围着它转的那个数。','value'],

  // 数据飞轮与冷启动
  ['data-flywheel','数据飞轮','Data Flywheel','真实使用产生的数据反过来改进系统,改进后又带来更多使用。','越用越好用,越好用越多人用。','flywheel'],
  ['cold-start','冷启动','Cold Start','没有真实数据与反馈的起步阶段,只能靠先验知识与人工构造。','开局没有数据。','flywheel'],
  ['feedback-loop','反馈闭环','Feedback Loop','把使用中的采纳、修改、报错等信息收集回来并用于改进。','用完要收反馈。','flywheel'],
  ['human-feedback','人工反馈','Human Feedback','由人给出的对错、偏好与修改意见,是最高价值的训练与评测素材。','人那一下纠正最值钱。','flywheel'],
  ['synthetic-data','合成数据','Synthetic Data','由模型或程序生成的训练与评测数据,用于补足稀缺样本。','自己造题自己练。','flywheel'],
  ['data-labeling','数据标注','Data Labeling','按统一口径给数据打上标准答案或评分,是评测与微调的基础。','把答案标上去。','flywheel'],
  ['bootstrapping','自举','Bootstrapping','先用较弱的方式启动,再用产出改进自身,逐步提升。','先把自己拽起来。','flywheel'],

  // 人机协同与组织适配
  ['human-ai-collaboration','人机协同','Human-AI Collaboration','把人的判断力与机器的规模效率组合起来的分工方式。','人管判断,机器管体力。','org'],
  ['augmentation','增强而非替代','Augmentation','用 AI 放大人的能力,而不是简单地把人换掉。','给人加 buff,不是换人。','org'],
  ['role-redesign','岗位重塑','Role Redesign','随 AI 接手部分环节,重新定义岗位职责与产出标准。','活变了,岗也得变。','org'],
  ['review-workload','审核负荷','Review Workload','人工审核 AI 产出所增加的认知负担与工时,常被低估。','检查的活也是活。','org'],
  ['automation-bias','自动化偏见','Automation Bias','人倾向于过度信任机器输出而放松审查,导致错误被放过。','机器说的就信了。','org'],
  ['skill-shift','技能迁移','Skill Shift','团队需从执行细节转向定义标准、评审质量与设计流程。','从动手的变成定规矩的。','org'],
  ['adoption','采纳率','Adoption Rate','用户实际使用该功能的真实比例,是价值兑现的前置条件。','到底有多少人真在用。','org'],
  ['change-curve','变革曲线','Change Curve','组织对新工作方式从抗拒到熟练再到常态的心理与能力演进过程。','先抵触,后上手,再习惯。','org'],

  // 安全与合规
  ['kya','知你的智能体','Know Your Agent','对企业内每个智能体的身份、权限、数据边界与行为建立台账与管控。','先弄清这个 AI 是谁、能碰什么。','security'],
  ['prompt-injection','提示词注入','Prompt Injection','外部内容里夹带指令,诱使模型偏离原定任务或泄露信息。','有人在中途偷偷塞话。','security'],
  ['data-leakage','数据泄露','Data Leakage','敏感数据在提示、日志、缓存或输出中被带出授权范围。','不该出去的出去了。','security'],
  ['pii','个人信息','PII','可识别到具体自然人的信息,处理时须遵循最小必要与合规要求。','能认出是谁的那些信息。','security'],
  ['jailbreak','越狱攻击','Jailbreak','用构造输入绕过模型与护栏的安全限制。','想办法骗过安检。','security'],
  ['agent-permission','智能体权限','Agent Permission','智能体可访问的数据、可调用的接口与可执行动作的边界。','这个 AI 手里有哪些钥匙。','security'],
  ['audit-trail','审计留痕','Audit Trail','对输入输出、工具调用与人工干预做不可篡改的完整记录。','每一步都留个底。','security'],
  ['compliance-review','合规审查','Compliance Review','按行业与监管要求在数据、内容、算法与责任界定上做事前审查。','过一遍规矩。','security'],

  // ROI 论证与汇报
  ['roi','投资回报率','ROI','净收益与投入之比,是立项与续期的核心判断依据。','投进去的换回来多少。','roi'],
  ['tco','总拥有成本','TCO','含建设、调用、运维、人力与合规成本的完整投入。','不只是标价那点钱。','roi'],
  ['payback','回收期','Payback Period','累计收益抵平投入所需的时间,越短越容易立项。','多久能回本。','roi'],
  ['npv','净现值','NPV','把未来各期现金流按折现率折算到今天后的净值,用于跨期比较。','未来的钱折成今天的钱。','roi'],
  ['benefit-quantification','收益量化','Benefit Quantification','把省时、省人、增收、降错等收益折算成可比的货币口径。','把好处都换算成钱。','roi'],
  ['pilot-to-scale','试点到规模化','Pilot to Scale','从单点验证走到全组织推广的路径与门槛。','从一个部门推到全公司。','roi'],
  ['stakeholder','干系人','Stakeholder','对项目成败有影响或有诉求的角色,其关切决定汇报口径。','谁关心、谁拍板、谁买单。','roi'],

  // 实战案例与失败复盘
  ['case-study','案例复盘','Case Study','按背景、做法、结果与教训复盘一个真实项目。','把做过的项目摊开讲。','practice'],
  ['postmortem','事后复盘','Postmortem','事故或失败之后不追责地还原过程、找根因、定改进项。','出事后坐下来把过程捋一遍。','practice'],
  ['poc','概念验证','Proof of Concept','用最小成本验证「技术上到底行不行」。','先试试能不能成。','practice'],
  ['pilot','试点','Pilot','在小范围真实业务里验证效果、成本与流程可行性。','找个小范围真跑一跑。','practice'],
  ['scale-up','规模化推广','Scale-up','把验证过的方案推广到更多团队与业务,重点是标准化与运维。','从一变到十。','practice'],
  ['lessons-learned','经验教训','Lessons Learned','从实践中沉淀出的可复用判断与禁忌。','吃过亏之后总结的话。','practice'],
  ['anti-pattern','反模式','Anti-pattern','看似合理却屡屡导致失败的常见做法。','看起来像对,实则是坑。','practice'],
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
let s = '/* 模块元数据 + 学习路径(AI 应用工程)(自动生成,勿手改) */\n';
s += 'window.AIPE = window.AIPE || {};\n';
s += 'AIPE.modules = ' + J(mods) + ';\n';
s += 'AIPE.path = ' + J(path_) + ';\n';
s += 'AIPE.totalLessons = AIPE.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(AI 应用工程)(自动生成) {id,name,en,def,analogy,module} */\nwindow.AIPE = window.AIPE || {};\nAIPE.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nAIPE.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
