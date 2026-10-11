/* AI 产品与交互设计 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及模型能力、平台功能、设计规范与无障碍标准的表述,
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
  ['guide','导览','怎么用这个站、AI 产品是什么、学习路线','基础','Guide'],
  ['product','AI 产品思维','产品与用户、价值主张、AI 原生、能力边界、产品形态、商业模式','基础','Product Thinking'],
  ['discovery','用户研究与需求洞察','用户研究、访谈、情境、画像、痛点、机会点、需求分级','核心','Discovery'],
  ['scenario','场景与任务设计','任务分解、人机分工、输入输出、容错、降级、适配度','核心','Scenario'],
  ['interaction','交互范式','对话式、生成式、智能体式、多模态、主动式、可控性','核心','Interaction'],
  ['prompt','提示词与内容设计','提示词资产、系统提示、结构化输出、示例、空状态、微文案','核心','Prompt and Copy'],
  ['trust','信任与预期管理','不确定性表达、引用溯源、可解释、纠错撤销、人在回路','进阶','Trust'],
  ['prototype','原型与快速验证','低保真、提示词原型、绿野仙踪、可用性测试、迭代','核心','Prototyping'],
  ['agentic','智能体产品设计','能力与工具、记忆、多步任务、权限确认、编排、失败处理','进阶','Agentic UX'],
  ['multimodal','多模态交互','语音、视觉、视频、实时交互、无障碍、设备场景','进阶','Multimodal'],
  ['personalization','个性化与记忆','偏好模型、记忆机制、偏好设置、隐私边界、冷启动','进阶','Personalization'],
  ['metrics','产品指标与体验度量','指标分层、北极星、采纳留存、任务完成、体验度量','核心','Metrics'],
  ['ethics','伦理、无障碍与包容性','偏见公平、无障碍、包容性语言、隐私设计、内容安全','进阶','Ethics'],
  ['collab','设计与研发协作','设计系统、跨职能、需求交付、AI 辅助设计、评审与治理','应用','Collaboration'],
  ['practice','实战案例与复盘','产品地图、助手案例、生成案例、智能体案例、失败复盘','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['ai-product','AI 产品','AI Product','把模型能力包装成可被用户持续使用的功能与体验,并交付明确价值的产品。','会思考的功能。','guide'],
  ['ai-product-management','AI 产品管理','AI Product Management','在模型能力不确定的前提下,决定做什么、给谁做、做到什么程度的产品工作方法。','在流沙上盖房子还得住人。','guide'],
  ['product-sense','产品感','Product Sense','对「什么值得做、用户会不会用」形成快速而准确判断的能力。','一看就知道靠不靠谱。','guide'],
  ['capability-boundary','能力边界','Capability Boundary','模型能做什么、不能做什么、做到几分准的那条线。','知道自己几斤几两。','guide'],
  ['three-layers','模型-应用-交互三层','Model-Application-Interaction','AI 产品常见的三层分工:底层模型能力、中层应用与编排、上层用户交互。','发动机、变速箱、方向盘。','guide'],

  // AI 产品思维
  ['value-proposition','价值主张','Value Proposition','产品对某一类用户承诺解决什么问题、带来什么好处的那句话。','一句话说清凭什么用你。','product'],
  ['user-need','用户需求','User Need','用户想要达成的目标或想摆脱的麻烦,而不是他嘴上说的那个功能。','要的是洞,不是钻头。','product'],
  ['jtbd','待办任务','Jobs to be Done','把用户使用产品理解为「雇佣它来完成任务」的一套视角。','用户雇你来干的活。','product'],
  ['pmf','产品市场契合','Product-Market Fit','产品真正被一群用户持续、主动地使用并愿意付费的状态。','有人抢着用还回头。','product'],
  ['ai-native','AI 原生','AI Native','从设计之初就以模型能力为核心,而不是给传统软件硬加一个 AI 按钮。','生来就带脑子。','product'],
  ['assistant-paradigm','助手范式','Assistant Paradigm','把 AI 定位为协助人完成任务的「副手」而非全自动替代者的产品取向。','帮手而不是替身。','product'],
  ['product-form','产品形态','Product Form','产品以什么形态交付给用户,如对话框、嵌入式、独立应用、接口等。','以什么面孔出现。','product'],
  ['business-model','商业模式','Business Model','产品如何创造价值、又如何把价值换成收入(席位、用量、结果等)。','怎么把价值变成钱。','product'],

  // 用户研究与需求洞察
  ['user-research','用户研究','User Research','通过观察、访谈与数据,理解用户真实行为与动机的系统方法。','先去现场看,再回屋画。','discovery'],
  ['user-interview','用户访谈','User Interview','与用户一对一交谈,挖掘其目标、行为与痛点的方法。','听用户讲自己的故事。','discovery'],
  ['context-inquiry','情境调查','Contextual Inquiry','到用户真实工作环境中边观察边提问,看他到底怎么干活。','去工位上蹲一天。','discovery'],
  ['persona','用户画像','Persona','基于研究虚构出的典型用户角色,用来代表一类人的目标与处境。','给用户画张像。','discovery'],
  ['pain-point','痛点','Pain Point','用户在完成任务过程中真正难受、愿意付出代价去解决的环节。','用户最想骂的那句。','discovery'],
  ['opportunity','机会点','Opportunity','痛点严重、用户多、又恰好能被 AI 明显改善的交集区域。','值得下手的缝。','discovery'],
  ['requirement-priority','需求优先级','Requirement Priority','在一堆需求里排出先做哪个、后做哪个的判断方法。','先捡重要的做。','discovery'],
  ['stakeholder','干系人','Stakeholder','会使用、影响或被产品影响的全部角色,包括用户、业务方与合规方。','所有跟这事有关的人。','discovery'],

  // 场景与任务设计
  ['task-decomposition','任务分解','Task Decomposition','把一个大目标拆成 AI 能吃下的若干个可验收小步骤。','把大活切成一口一块。','scenario'],
  ['human-ai-division','人机分工','Human-AI Division','决定哪一步交给 AI、哪一步必须留给人来做的边界划分。','谁干什么说清楚。','scenario'],
  ['io-design','输入输出设计','Input-Output Design','规定用户给什么、系统还什么,以及这一步的形态与约束。','一进一出怎么设计。','scenario'],
  ['error-tolerance','容错度','Error Tolerance','这一环节出错时后果有多重,决定了 AI 能放多少自主权。','错了会死人的活别全交出去。','scenario'],
  ['fallback','降级策略','Fallback','AI 搞不定时系统退回人工、退回模板或退回确定性流程的兜底方案。','不行就退回老办法。','scenario'],
  ['copilot-pattern','副驾驶模式','Copilot Pattern','AI 给建议、人做决定的协作方式,人始终握着最终控制权。','AI 提词,人开飞机。','scenario'],
  ['change-management','变革管理','Change Management','让人愿意改用新工具、改掉旧习惯的组织配套工作。','光有好工具还不算数。','scenario'],

  // 交互范式
  ['interaction-paradigm','交互范式','Interaction Paradigm','人机之间传递意图与结果的基本模式,如命令、对话、生成与代理。','用哪种方式跟它说话。','interaction'],
  ['conversational-ui','对话式交互','Conversational UI','用自然语言一来一回地完成任务的交互方式。','像聊天一样用。','interaction'],
  ['generative-ui','生成式界面','Generative UI','界面本身由模型按需生成,而不全是事先画好的固定页面。','界面也是现写的。','interaction'],
  ['agentic-ui','智能体交互','Agentic UI','用户下达目标、系统自行分解与执行,人主要做监督与确认。','你说要啥,它自己跑。','interaction'],
  ['multimodal-interaction','多模态交互','Multimodal Interaction','文本、语音、图像、视频等多种输入输出方式混合使用。','能听能看能说。','interaction'],
  ['proactive-interaction','主动式交互','Proactive Interaction','系统在合适时机主动提示或建议,而不是只等人来问。','它会先开口。','interaction'],
  ['user-control','可控性','User Control','用户随时能暂停、修改、撤销与接管的程度。','方向盘还在自己手里。','interaction'],
  ['progressive-disclosure','渐进式披露','Progressive Disclosure','先给最简单的入口,需要时再逐步露出高级能力,避免一上来把人吓退。','先给一句话,再给一页纸。','interaction'],
  ['feedback-loop','反馈闭环','Feedback Loop','让用户知道系统在干什么、干到哪了、结果如何的即时反馈。','别让人干等。','interaction'],

  // 提示词与内容设计
  ['prompt-as-asset','提示词资产','Prompt as Asset','把提示词当作需要版本管理、评审与迭代的产品资产,而非随手写的草稿。','提示词也是代码。','prompt'],
  ['ai-persona','AI 人设','AI Persona','为 AI 设定的角色、语气与风格,决定用户感受到的性格。','它是个什么脾气。','prompt'],
  ['system-prompt','系统提示','System Prompt','在对话开始前设定的全局指令,规定角色、边界与输出要求。','开场就交代好规矩。','prompt'],
  ['few-shot','少样本示例','Few-shot Examples','在提示里放几个正确示例,让模型照着模仿的做法。','给两个样板照着写。','prompt'],
  ['structured-output','结构化输出','Structured Output','要求模型按固定字段或格式返回结果,方便程序继续处理。','让它填表而不是写作文。','prompt'],
  ['empty-state','空状态','Empty State','用户刚进来、还没有任何输入时看到的引导内容。','第一眼看到什么。','prompt'],
  ['microcopy','微文案','Microcopy','按钮、提示、报错等短小文案,直接决定体验的温度与清晰度。','字少但最要命。','prompt'],
  ['guardrail-prompt','护栏提示','Guardrail Prompt','用来约束模型不越界、不胡说、不泄露的指令与规则。','给 AI 画条红线。','prompt'],

  // 信任与预期管理
  ['trust','信任','Trust','用户愿意把任务交给系统、并相信其结果的意愿,是 AI 产品能否被用的前提。','敢不敢把事交给它。','trust'],
  ['uncertainty','不确定性表达','Communicating Uncertainty','用「可能」「置信度」等方式如实告诉用户结果有多可靠。','有多少把握说多少。','trust'],
  ['citation','引用溯源','Citation and Provenance','给出结论所依据的来源,让用户能自己去核对。','说是谁说的。','trust'],
  ['explainability','可解释性','Explainability','让用户理解系统为什么给出这个结果的程度。','把想法讲出来。','trust'],
  ['undo','纠错与撤销','Error Correction and Undo','让用户能方便地改掉错误结果或撤回上一步操作。','点错了还能退。','trust'],
  ['human-in-the-loop','人在回路','Human in the Loop','在高风险环节保留人工审核或确认的机制。','关键处得有人签字。','trust'],
  ['transparency','透明度','Transparency','向用户如实说明系统的能力、局限与数据用法。','别藏着掖着。','trust'],
  ['expectation-management','预期管理','Expectation Management','把用户对效果的期待调整到与真实能力相符的位置。','别让人以为你无所不能。','trust'],

  // 原型与快速验证
  ['prototype','原型','Prototype','用来快速验证想法、成本远低于成品的可交互或可演示版本。','先搭个假的试试。','prototype'],
  ['low-fi-prototype','低保真原型','Low-fidelity Prototype','用草图、线框或纯文字描述表达思路的原型,主打快。','纸上画两笔。','prototype'],
  ['prompt-prototype','提示词原型','Prompt Prototype','不写代码,直接用提示词与现成模型搭出效果验证最小样本。','拿提示词先试试。','prototype'],
  ['wizard-of-oz','绿野仙踪法','Wizard of Oz','表面是自动系统、背后其实是人在手工应答的验证方法。','幕布后面藏着人。','prototype'],
  ['usability-test','可用性测试','Usability Test','请真实用户试用原型,观察他在哪里卡住、为什么卡住。','看真人怎么用。','prototype'],
  ['severity-rating','问题严重度','Severity Rating','对发现的可用性问题按影响程度分级,决定先修哪个。','哪个坑最深先填。','prototype'],
  ['iteration-loop','迭代循环','Iteration Loop','设计-原型-测试-改进这样一圈圈往前的节奏。','转一圈好一点。','prototype'],

  // 智能体产品设计
  ['ai-agent','智能体','AI Agent','能自行规划步骤、调用工具、朝目标推进的 AI 系统。','会自己安排活的 AI。','agentic'],
  ['tool-use','工具调用','Tool Use','让模型调用外部接口或功能来完成自己做不到的事。','给它一双手。','agentic'],
  ['agent-memory','智能体记忆','Agent Memory','智能体跨轮次、跨会话保存与调用信息的能力。','让它记得住。','agentic'],
  ['multi-step-task','多步任务','Multi-step Task','需要连续若干步、中间还可能变化的任务类型。','一串活儿。','agentic'],
  ['permission-confirm','权限与确认','Permission and Confirmation','在关键操作前向用户请求许可,避免不可逆的动作被擅自执行。','下手前先请示。','agentic'],
  ['task-orchestration','任务编排','Task Orchestration','把多个步骤与工具按顺序、条件组织起来执行的过程。','把流程串起来。','agentic'],
  ['agent-failure','智能体失败','Agent Failure','智能体跑偏、卡死、绕圈或误操作的典型失效情形。','它自作主张跑歪了。','agentic'],
  ['multi-agent','多智能体','Multi-agent','让多个各司其职的智能体协作完成复杂任务的结构。','一队人分工干。','agentic'],
  ['autonomy-level','自主性等级','Autonomy Level','从「每步都问」到「放手全权」之间系统自主程度的档位。','放多少手给它。','agentic'],

  // 多模态交互
  ['multimodal','多模态','Multimodal','同时处理文本、语音、图像、视频等多种信息形式的能力。','五官齐上。','multimodal'],
  ['voice-ui','语音交互','Voice UI','用说话与听话来完成交互的方式,适合双手被占用的场景。','动嘴不动手。','multimodal'],
  ['vision-ui','视觉交互','Vision UI','让系统看图像或画面并据此理解与回应。','让它长眼睛。','multimodal'],
  ['video-understanding','视频理解','Video Understanding','对连续画面做识别、跟踪与事件判断的能力。','看懂一段录像。','multimodal'],
  ['realtime-interaction','实时交互','Real-time Interaction','低延迟、边说边回的双向交互,体验接近面对面。','随说随应。','multimodal'],
  ['accessibility','无障碍','Accessibility','让残障用户也能顺畅使用产品的设计与工程实践。','让所有人都用得上。','multimodal'],
  ['screen-reader','屏幕阅读器','Screen Reader','把界面内容读成语音的辅助工具,是无障碍设计的重点适配对象。','读给你听。','multimodal'],
  ['device-context','设备与场景','Device and Context','交互方式要适配设备形态与使用场景,如车内、工地、家庭。','在哪儿用很关键。','multimodal'],

  // 个性化与记忆
  ['personalization','个性化','Personalization','根据用户的偏好与历史,调整内容、语气与建议。','投其所好。','personalization'],
  ['preference-model','偏好模型','Preference Model','系统对某位用户喜好所形成的内部表示。','心里记着一本账。','personalization'],
  ['memory-mechanism','记忆机制','Memory Mechanism','系统保存与取用用户信息的技术方式,分短期与长期。','记住还是忘掉。','personalization'],
  ['preference-setting','偏好设置','Preference Setting','让用户显式告知喜好的开关与选项。','直接告诉我你想要啥。','personalization'],
  ['privacy-by-design','隐私设计','Privacy by Design','把隐私保护前置到设计阶段,而不是事后打补丁。','一开始就想着别泄露。','personalization'],
  ['cold-start','冷启动','Cold Start','新用户或新产品没有历史数据时,个性化无从下手的问题。','第一次见面还不熟。','personalization'],
  ['personalization-metric','个性化度量','Personalization Metric','衡量个性化是否真的改善了体验的指标。','怎么知道它确实更懂我。','personalization'],

  // 产品指标与体验度量
  ['metric-hierarchy','指标分层','Metric Hierarchy','把指标分成业务、产品、体验与质量等层次,避免只看一个数。','一层层看才看得清。','metrics'],
  ['north-star-metric','北极星指标','North Star Metric','最能代表产品给用户创造价值的那一个核心指标。','盯住这一颗星。','metrics'],
  ['adoption-rate','采纳率','Adoption Rate','用户开始使用某项功能的比率,是 AI 功能的第一道生死线。','有多少人真的去用了。','metrics'],
  ['retention','留存','Retention','用户用过之后还会再回来的比例。','还会不会回来。','metrics'],
  ['task-completion','任务完成率','Task Completion Rate','用户成功把想办的事办成的比例,比「点了几次」更接近真相。','事办成了没有。','metrics'],
  ['experience-metric','体验度量','Experience Metric','对流畅度、信任感、控制感等主观体验的量化方法。','用着舒不舒服。','metrics'],
  ['heuristics','启发式评估','Heuristic Evaluation','由专家按一套经验规则快速找出界面问题的评审方法。','内行挑毛病。','metrics'],
  ['vanity-metric','虚荣指标','Vanity Metric','看着好看但不反映真实价值的指标,如单纯的调用次数。','好看但不中用。','metrics'],

  // 伦理、无障碍与包容性
  ['ai-ethics','AI 伦理','AI Ethics','关于算法公平、透明、责任与不伤害的原则与规范。','哪些事不该做。','ethics'],
  ['bias-fairness','偏见与公平','Bias and Fairness','模型因数据或设计偏差而对某些群体产生不公结果的问题。','别让它偏心。','ethics'],
  ['inclusive-design','包容性设计','Inclusive Design','让尽可能多样的人都能用得上的设计取向。','把边角上的人也想到。','ethics'],
  ['wcag','WCAG','Web Content Accessibility Guidelines','万维网联盟发布的网页内容无障碍指南,常用 AA 级作为达标线。','无障碍的国际通用尺子。','ethics'],
  ['content-safety','内容安全','Content Safety','防止生成违法、有害或不当内容的技术与流程。','别让它乱说话。','ethics'],
  ['responsibility','责任边界','Responsibility Boundary','当 AI 输出造成后果时,责任如何在人、产品与提供方之间划分。','出了事谁负责。','ethics'],
  ['dark-pattern','暗黑模式','Dark Pattern','用误导性设计诱导用户做出非本意的选择。','看着帮你其实坑你。','ethics'],
  ['consent','知情同意','Informed Consent','在收集与使用用户数据前,清楚告知并取得其同意。','先问一声再用。','ethics'],

  // 设计与研发协作
  ['design-system','设计系统','Design System','把组件、样式与规范沉淀下来,供团队复用的统一资产。','大家的同一套乐高。','collab'],
  ['cross-functional','跨职能协作','Cross-functional Collaboration','产品、设计、研发、业务与合规共同推进一件事的工作方式。','一桌人一起定。','collab'],
  ['spec-handoff','需求交付','Spec Handoff','把设计意图完整、无歧义地交给研发实现的过程。','把想法交接清楚。','collab'],
  ['ai-assisted-design','AI 辅助设计','AI-assisted Design','用 AI 帮助生成界面草稿、文案与变体的设计工作方式。','让 AI 先出几版。','collab'],
  ['design-review','设计评审','Design Review','在方案定稿前由多方共同评审、挑错与确认的环节。','一起过一遍。','collab'],
  ['design-debt','设计债','Design Debt','为了赶进度而留下的不一致、难维护的设计欠账。','早晚要还的账。','collab'],
  ['workflow-governance','流程治理','Workflow Governance','把 AI 进入流程后的权责、审核与变更管起来的机制。','定好规矩再上路。','collab'],

  // 实战案例与复盘
  ['product-map','AI 产品地图','AI Product Map','按交互范式与自主程度给 AI 产品分类的一张全景图。','把产品摆在一张图上。','practice'],
  ['assistant-case','助手类案例','Assistant Case','以对话助手形态落地的产品案例与经验。','问答助手的样本。','practice'],
  ['content-gen-case','内容生成类案例','Content Generation Case','以生成文案、图像、代码等内容为核心的产品案例。','帮你写东西的样本。','practice'],
  ['agent-case','智能体类案例','Agent Case','以自主多步执行为核心的产品案例与踩坑。','自己会干活的样本。','practice'],
  ['postmortem','复盘','Postmortem','项目结束后系统回顾做对了什么、错在哪、下次怎么改的方法。','事后坐下来算账。','practice'],
  ['capability-map','能力地图','Capability Map','把 AI 产品团队需要的能力按角色整理出来的一张图。','谁会什么一目了然。','practice'],
  ['anti-pattern','反模式','Anti-pattern','看起来管用、实际反复导致失败的做法。','看着像对的坑。','practice'],
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
let s = '/* 模块元数据 + 学习路径(AI 产品与交互设计)(自动生成,勿手改) */\n';
s += 'window.APD = window.APD || {};\n';
s += 'APD.modules = ' + J(mods) + ';\n';
s += 'APD.path = ' + J(path_) + ';\n';
s += 'APD.totalLessons = APD.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(AI 产品与交互设计)(自动生成) {id,name,en,def,analogy,module} */\nwindow.APD = window.APD || {};\nAPD.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nAPD.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
