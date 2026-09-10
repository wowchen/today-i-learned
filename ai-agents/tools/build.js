/* AI 智能体 · 单一数据源生成器(科普通识,克隆 telecom 框架)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。 */
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
  ['basics','智能体大白话','是什么、和聊天机器人差在哪、感知思考行动循环','入门','Agent Basics'],
  ['prompting','提示词工程','角色、结构化、few-shot、思维链——提示词的基本功','基础','Prompt Engineering'],
  ['planning','规划与分解','ReAct、计划执行、任务拆分——想清楚再动手','核心','Planning & Decomposition'],
  ['context','上下文工程','窗口、token、压缩、检索与记忆——最贵的地产','核心','Context Engineering'],
  ['adapting','定制化三板斧','提示词、RAG、微调——让模型更懂你的业务','核心','Adaptation'],
  ['tools','工具调用','function calling、MCP、结构化输出——给模型装上','核心','Tool Use'],
  ['multimodal','多模态','看图、听声、读文件——给智能体配齐感官','核心','Multimodal'],
  ['workflow','工作流编排','固定流程、循环反馈、人工在环、检查点','核心','Workflow Orchestration'],
  ['multiagent','多智能体协作','角色分工、交接、监督者、争论与成本陷阱','核心','Multi-Agent Systems'],
  ['coding','编码智能体','最成熟的岗位：测试驱动循环与仓库守则','实战','Coding Agents'],
  ['reliability','可靠性与评测','失败模式、评测集、模型评审、护栏','实战','Reliability & Eval'],
  ['security','安全与边界','提示词注入、最小权限、计算机操作、安全清单','实战','Safety & Security'],
  ['practice','研究工作流实战','深度研究、AI 日报、文档流水线、研究复盘、数据分析','实战','Field Notes'],
  ['future','趋势与未来','行业版图、A2A、长任务、具身与智能体经济','进阶','Trends & Future']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['agent','智能体','Agent','能感知环境、自主决策并调用工具完成目标的 AI 程序。','会自己干活的 AI 员工。','basics'],
  ['llm','大语言模型','LLM','经海量文本训练、按概率预测下一个词的模型，智能体的"大脑"。','超级会接话的复读机。','basics'],
  ['agent-loop','智能体循环','Agent Loop','感知→思考→行动→观察反复迭代，直到目标达成。','干活的流水线节奏。','basics'],
  ['autonomy','自主性','Autonomy','智能体自己做决策的程度，从辅助建议到全自动执行。','放手程度旋钮。','basics'],
  ['hallucination','幻觉','Hallucination','模型一本正经地编造不存在的事实或引用。','自信的瞎编。','basics'],

  ['prompt','提示词','Prompt','给模型的输入指令，决定它干什么、怎么干。','岗位说明书。','prompting'],
  ['role-prompting','角色设定','Role Prompting','给模型指定一个身份或专业视角。','开工前先发工牌。','prompting'],
  ['few-shot','少样本示例','Few-shot','在提示词里给几个输入输出例子当样板。','给样板比讲道理管用。','prompting'],
  ['chain-of-thought','思维链','Chain of Thought','让模型把推理步骤写出来再给答案。','先打草稿再交卷。','prompting'],
  ['system-prompt','系统提示','System Prompt','设定模型全局行为的高优先级指令。','员工手册。','prompting'],
  ['temperature','温度','Temperature','控制输出随机性的参数，越高越发散。','创造力旋钮。','prompting'],

  ['react','ReAct','ReAct','Reason+Act 交替循环的智能体模式：想一步做一步看一眼。','边想边干的行为模式。','planning'],
  ['plan-and-execute','计划与执行','Plan-and-Execute','先一次性拆解完整计划，再按计划执行并按需修补。','先画路线图再出发。','planning'],
  ['task-decomposition','任务分解','Task Decomposition','把大目标拆成有序、可验证、粒度合适的子任务。','拆活儿的手艺。','planning'],

  ['token','Token','Token','模型处理文本的最小单位，一个汉字约 1~2 个 token。','文字的积木块。','context'],
  ['context-window','上下文窗口','Context Window','模型一次能"看到"的文本总量上限。','办公桌的大小。','context'],
  ['context-engineering','上下文工程','Context Engineering','决定往窗口里放什么、不放什么、什么时候清的学问。','桌面整理术。','context'],
  ['context-rot','上下文腐烂','Context Rot','塞进窗口的信息越多，模型反而越抓不住重点。','桌上堆满纸反而找不到笔。','context'],
  ['rag','检索增强生成','RAG','先从资料库检索相关内容，再让模型据此作答。','开卷考试。','context'],
  ['embedding','向量嵌入','Embedding','把文字变成一串数字，让"意思相近"可以计算。','文字的坐标。','context'],
  ['vector-database','向量数据库','Vector Database','按语义相似度存储和检索文本的数据库。','按意思找书的图书馆。','context'],
  ['knowledge-cutoff','知识截止','Knowledge Cutoff','模型训练数据的时间下限，之后的事它不知道。','教科书的印刷日期。','context'],
  ['memory','记忆','Memory','智能体跨轮次保留和使用信息的能力。','智能体的笔记本。','context'],
  ['token-budget','Token 预算','Token Budget','为一次运行规划的资源上限与分配方案。','出差的差旅预算。','context'],
  ['episodic-memory','情景记忆','Episodic Memory','记住具体发生过的事件与交互片段的长期记忆。','日记本。','context'],
  ['prompt-caching','提示词缓存','Prompt Caching','复用重复前缀的计算结果，大幅降低重复请求成本。','常用材料先复印好。','context'],
  ['batch-processing','批处理','Batch Processing','非实时任务批量离线处理，以延迟换价格。','拼单更便宜。','context'],
  ['distillation','蒸馏','Distillation','用大模型的输出训练小模型，保能力、降成本。','名师带出高徒。','context'],

  ['fine-tuning','微调','Fine-tuning','用自己的数据继续训练模型以改变其行为。','给模型报培训班。','adapting'],
  ['sft','SFT','Supervised Fine-Tuning','用输入-输出对做监督训练的微调方式。','照着标准答案练。','adapting'],
  ['lora','LoRA','Low-Rank Adaptation','冻结原模型、只训练少量外挂适配参数的高效微调。','只换西装不合体改造。','adapting'],

  ['tool-use','工具调用','Tool Use','模型通过调用外部程序（API/函数）来实际做事。','给大脑装上手。','tools'],
  ['function-calling','函数调用','Function Calling','模型输出结构化参数、由程序执行函数的机制。','模型填单子，程序干活。','tools'],
  ['mcp','MCP','Model Context Protocol','连接模型与工具、数据源的开放协议。','工具界的 USB-C。','tools'],
  ['api','API','API','程序之间约定好的调用接口。','机构的服务窗口。','tools'],
  ['json','JSON','JSON','结构化数据格式，机器读写的通用语言。','填表格的标准格式。','tools'],
  ['sandbox','沙箱','Sandbox','隔离的执行环境，智能体出事不伤主系统。','试驾场地。','tools'],
  ['idempotency','幂等性','Idempotency','同一操作执行多次结果不变，是安全重试的基础。','按多少次电梯都只来一趟。','tools'],
  ['structured-output','结构化输出','Structured Output','约束模型按预定 schema 生成机器可解析的输出。','按表格填答案。','tools'],
  ['json-mode','JSON Mode','JSON Mode','从生成机制上强制模型输出合法 JSON 的约束模式。','只能填表不能散文。','tools'],
  ['schema','Schema','Schema','描述数据结构、字段与类型的约定。','表格的表头定义。','tools'],

  ['workflow','工作流','Workflow','预先定义好的固定步骤序列，自由度低但可控。','钢轨道。','workflow'],
  ['dag','有向无环图','DAG','任务依赖关系的图：前一步输出是后一步输入，不绕圈。','施工流程图。','workflow'],
  ['human-in-the-loop','人工在环','Human-in-the-loop','关键节点由人审核拍板再继续。','人是最后一道闸。','workflow'],
  ['checkpoint','检查点','Checkpoint','保存中间状态，断了能从存档续跑。','游戏存档。','workflow'],
  ['retry-backoff','重试与退避','Retry & Backoff','失败后等一会儿再试，且越试等越久。','敲门被拒先等等再来。','workflow'],
  ['orchestration','编排','Orchestration','协调多个步骤或智能体的顺序与数据流转。','片场导演。','workflow'],
  ['agent-framework','智能体框架','Agent Framework','帮你搭智能体的脚手架库。','乐高积木包。','workflow'],

  ['vlm','视觉语言模型','Vision Language Model','能同时理解图像与文本的多模态模型。','会看图的模型。','multimodal'],
  ['ocr','OCR','Optical Character Recognition','把图片里的文字识别成可编辑文本。','图片文字的搬运工。','multimodal'],
  ['asr','语音识别','Automatic Speech Recognition','把语音转成文字的技术。','语音的听写员。','multimodal'],

  ['multi-agent-system','多智能体系统','Multi-Agent System','多个智能体分工协作完成同一任务。','一个项目组。','multiagent'],
  ['role-agent','角色智能体','Role Agent','只承担单一职责的智能体，如专职审稿员。','专职岗位。','multiagent'],
  ['handoff','交接','Handoff','一个智能体把工作连同上下文交给下一个。','交接班。','multiagent'],
  ['supervisor','监督者','Supervisor','负责分派任务、汇总结果的调度型智能体。','项目经理。','multiagent'],
  ['red-teaming','红队','Red Teaming','专门负责挑错与攻击的对抗角色。','请人来砸场子。','multiagent'],
  ['context-isolation','上下文隔离','Context Isolation','让每个智能体只看必要信息，防止互相污染。','各看各的卷子。','multiagent'],

  ['coding-agent','编码智能体','Coding Agent','在代码仓库中自主读码、改码、跑测试、提 PR 的智能体。','AI 程序员同事。','coding'],
  ['test-driven','测试驱动','Test-Driven','先写测试再实现，用测试结果驱动迭代循环。','先立靶子再射箭。','coding'],

  ['eval','评测','Evaluation','用固定题集检验智能体输出质量的手段。','模拟考。','reliability'],
  ['regression','回归','Regression','改动之后原来正确的输出变错了。','修好东墙塌西墙。','reliability'],
  ['trace','轨迹','Trace','智能体一次运行的完整步骤记录，调试的依据。','行车记录仪。','reliability'],
  ['guardrail','护栏','Guardrail','对输入输出做自动检查与拦截的安全机制。','防撞栏。','reliability'],
  ['self-reflection','自我反思','Self-reflection','智能体检查并修正自己输出的机制。','交卷前自查。','reliability'],
  ['graceful-degradation','优雅降级','Graceful Degradation','出错时退回保守方案而不是直接崩掉。','自动挡的 L 挡。','reliability'],
  ['flaky','不稳定输出','Flakiness','同样的输入，结果时好时坏。','手气问题。','reliability'],
  ['llm-as-judge','模型评审','LLM-as-Judge','用一个模型按评分标准给另一个模型的输出打分。','请专家阅卷。','reliability'],

  ['prompt-injection','提示词注入','Prompt Injection','用恶意指令劫持模型行为，让它偏离本职。','往说明书里夹私货。','security'],
  ['indirect-injection','间接注入','Indirect Injection','藏在智能体读取的网页、文件里的恶意指令。','毒饵。','security'],
  ['least-privilege','最小权限','Least Privilege','只授予完成任务所必需的最小权限。','钥匙只给到需要的门。','security'],
  ['data-exfiltration','数据外泄','Data Exfiltration','敏感信息被智能体有意或无意地送出去。','嘴不严的员工。','security'],
  ['confirmation-gate','确认门','Confirmation Gate','高危操作前必须由人确认才能执行的关卡。','大额转账要验指纹。','security'],
  ['jailbreak','越狱','Jailbreak','绕过模型安全限制的攻击手法。','撬锁。','security'],
  ['computer-use','计算机操作','Computer Use','智能体模拟人操作图形界面（点击/输入/浏览）的能力。','数字世界的替身司机。','security'],

  ['deep-research','深度研究','Deep Research','多轮检索、综合、写作的研究型智能体任务。','会查资料的助理研究员。','practice'],
  ['model-selection','模型选型','Model Selection','按能力、成本、速度三角挑选合适的模型。','按活选人。','practice'],
  ['cost-per-task','单任务成本','Cost per Task','完成一次任务的 token、时间与人工复核开销之和。','一单的总账。','practice'],
  ['stop-condition','停止条件','Stop Condition','明确什么时候该停，防止死循环与失控开销。','出门前定的闹钟。','practice'],
  ['a2a','A2A','Agent-to-Agent','智能体之间互相发现、通信与协作的协议。','智能体的名片交换。','future'],
  ['embodied-agent','具身智能体','Embodied Agent','能感知并作用于物理世界的智能体，如机器人。','长了身体的 AI。','future'],
  ['agi','通用人工智能','AGI','在绝大多数认知任务上达到人类水平的假想智能。','还没到的终点站。','future']
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
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js */
const mods = MODULES.map((m, i) => ({ id: m[0], order: i, title: m[1], desc: m[2], lessons: (L[m[0]] || []).length, tag: m[3], en: m[4] }));
let s = '/* 模块元数据 + 学习路径(AI 智能体)(自动生成,勿手改) */\n';
s += 'window.AGT = window.AGT || {};\n';
s += 'AGT.modules = ' + J(mods) + ';\n';
s += 'AGT.path = ' + J(path_) + ';\n';
s += 'AGT.totalLessons = AGT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(AI 智能体)(自动生成) {id,name,en,def,analogy,module} */\nwindow.AGT = window.AGT || {};\nAGT.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nAGT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
    /* 兜底:historical 形态(无标记但有课时标签) —— 在 terms.js 后补标记 */
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
