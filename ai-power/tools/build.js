/* AI+电力 · 单一数据源生成器(克隆天文/地理/营养健康框架,命名空间 AIP)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html 的 <!--LESSONS-->。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。
   课程数据从 tools/_src/<module>.js 加载(每文件 module.exports = [...]) */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);
const SRC = path.resolve(__dirname, '_src');

/* ---------- 小工具 ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别绕晕 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });
const qf = (q, answers, explain, source) => ({ type: 'fill', q: q, answer: answers, explain: explain, source: source || '想一想' });

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['guide','导览','怎么用这个站、AI+电力全景图、学习路线','基础','Guide'],
  ['basics','基础速览','AI速览+电力数字基础,不重复两站深度','基础','Basics'],
  ['gen','发电侧 AI','功率预测、设备健康、智能燃烧与巡检','核心','Generation AI'],
  ['trans','输变电 AI','无人机巡检、通道隐患、变压器诊断','核心','Transmission AI'],
  ['dist','配用电 AI','故障定位、台区分析、负荷预测、电表异常','核心','Distribution AI'],
  ['dispatch','调度 AI','负荷/功率预测进调度、计划优化、应急辅助','核心','Dispatch AI'],
  ['newenergy','新能源与储能 AI','光伏缺陷、风电叶片、储能SOH、虚拟电厂','核心','New Energy AI'],
  ['compute','算电协同','算力耗电、东数西算、PUE、源网荷储算一体化','核心','Compute-Power'],
  ['marketing','营销与客服 AI','智能客服、用电画像、需求响应、反窃电','应用','Marketing AI'],
  ['security','安全与安防 AI','工控网安、变电站安防、作业安全监控','应用','Security AI'],
  ['engineering','工程与基建 AI','智能设计、施工安全、BIM与数字孪生','应用','Engineering AI'],
  ['llm','大模型在电力','行业大模型、RAG、智能体探索','进阶','LLM in Power'],
  ['platform','数据与平台','数据中台、MLOps、边缘计算、数据质量','进阶','Data & Platform'],
  ['future','挑战与展望','数据壁垒、模型可靠性、安全合规、未来走向','前沿','Challenges'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // AI基础
  ['ai','人工智能','Artificial Intelligence','让机器模拟人类智能行为的技术,包括感知、学习、推理与决策。','让机器学人办事。','basics'],
  ['machine-learning','机器学习','Machine Learning','不写死规则,让机器从数据中学出规律的方法。','从例子中找规律。','basics'],
  ['deep-learning','深度学习','Deep Learning','用多层神经网络从数据中自动学特征的方法。','层层抽丝剥茧。','basics'],
  ['cnn','卷积神经网络','CNN','擅长处理图像的深度学习模型,通过卷积核提取空间特征。','图像识别的主力。','basics'],
  ['rnn','循环神经网络','RNN','擅长处理时序数据的深度学习模型,有记忆能力。','有记忆的网络。','basics'],
  ['lstm','长短期记忆网络','LSTM','一种改进的RNN,能记住长期依赖关系,常用于时间序列预测。','记得住远事的RNN。','basics'],
  ['transformer','Transformer','Transformer','基于注意力机制的深度学习架构,大模型的基础。','一次看全局的架构。','basics'],
  ['llm-term','大语言模型','Large Language Model','用海量文本预训练、能理解和生成语言的大型AI模型。','读遍万卷书的AI。','basics'],
  ['rag','检索增强生成','RAG','先检索知识库再让大模型生成答案的方法,减少幻觉。','开卷考试。','basics'],
  ['agent','智能体','Agent','能自主调用工具、分步完成任务的AI系统。','会自己干活的AI。','basics'],
  ['mlops','MLOps','MLOps','机器学习模型的全生命周期管理:训练、部署、监控、迭代。','模型管家。','basics'],

  // 电力数字基础
  ['scada','SCADA','Supervisory Control and Data Acquisition','数据采集与监控系统,电网运行的神经末梢。','电网的眼睛和手。','basics'],
  ['ems','EMS','Energy Management System','能量管理系统,电网调度的核心平台。','调度的驾驶舱。','basics'],
  ['pmu','PMU','Phasor Measurement Unit','同步相量测量装置,高频采集电网状态,像心电图。','电网的心电图。','basics'],
  ['ami','AMI','Advanced Metering Infrastructure','高级计量架构,智能电表+通信网络,用电数据的源头。','电表的升级版。','basics'],
  ['security-zone','安全分区','Security Zone','电力系统按安全要求划分的生产控制大区与管理信息大区。','电网的隔离墙。','basics'],
  ['data-silo','数据孤岛','Data Silo','各系统数据互不相通、难以整合利用的状况。','数据各管各的。','basics'],

  // 发电
  ['power-forecast','功率预测','Power Forecast','预测风电/光伏电站未来出力的技术,AI在电力的第一战场。','猜明天发多少电。','gen'],
  ['nwp','数值天气预报','NWP','用超级计算机解大气方程来预报天气的方法。','算出来的天气。','gen'],
  ['cbm','状态检修','Condition Based Maintenance','根据设备实时状态决定是否检修的策略,替代定期检修。','该修才修。','gen'],
  ['pdm','预测性维护','Predictive Maintenance','用AI预测设备何时出故障并提前维护。','还没坏就修。','gen'],
  ['rul','剩余寿命','Remaining Useful Life','预测设备还能用多久,预测性维护的核心输出。','还能撑几天。','gen'],
  ['thermal-imaging','红外热成像','Thermal Imaging','通过检测物体红外辐射来显示温度分布的技术。','看热的眼睛。','gen'],

  // 输变
  ['uav-inspection','无人机巡检','UAV Inspection','用无人机搭载相机/红外自动巡检输电线路。','飞着查线路。','trans'],
  ['cv','计算机视觉','Computer Vision','让机器从图像/视频中识别目标的AI技术。','机器的眼睛。','trans'],
  ['yolo','YOLO','You Only Look Once','一种实时目标检测算法,巡检缺陷识别的常用模型。','一眼识别。','trans'],
  ['dga','油色谱分析','DGA','分析变压器油中溶解气体来诊断内部故障的方法。','抽血验变压器。','trans'],
  ['pd-detection','局放检测','Partial Discharge Detection','检测设备局部放电信号以发现绝缘缺陷的技术。','听绝缘的杂音。','trans'],
  ['digital-twin','数字孪生','Digital Twin','物理设备/系统的虚拟镜像,实时映射状态,支持仿真推演。','设备的分身。','trans'],

  // 配用
  ['flisr','FLISR','Fault Location Isolation and Service Restoration','故障定位、隔离与恢复供电的自动化系统。','秒级自愈。','dist'],
  ['taiqu','台区','Taiqu','一台配电变压器供电的范围,配网的基本单元。','一台变的领地。','dist'],
  ['load-forecast','负荷预测','Load Forecast','预测未来用电负荷的技术,调度的输入。','猜明天用多少电。','dist'],
  ['smart-meter','智能电表','Smart Meter','能远程采集用电数据、支持双向通信的电表。','会说话的电表。','dist'],
  ['edge-ai','边缘AI','Edge AI','在设备本地(边缘)运行AI推理,不回传云端。','就地决断。','dist'],
  ['active-dn','有源配电网','Active Distribution Network','接入了分布式电源的配电网,从辐射式变为有源。','配网也有电了。','dist'],

  // 调度
  ['agc','AGC','Automatic Generation Control','自动发电控制,自动调节机组出力维持频率稳定。','自动调频。','dispatch'],
  ['uc','机组组合','Unit Commitment','决定哪些机组开哪些机组停的优化问题。','谁开谁停。','dispatch'],
  ['vpp','虚拟电厂','Virtual Power Plant','聚合分布式资源(光伏/储能/可调负荷)统一参与电网调度。','拼起来的电厂。','dispatch'],
  ['reserve','备用容量','Reserve','为应对突发情况预留的发电能力。','留一手。','dispatch'],
  ['power-flow','潮流计算','Power Flow','计算电网各节点电压与功率分布的核心运算。','电网的地图。','dispatch'],

  // 新能源储能
  ['soh','电池健康度','State of Health','电池老化程度的量化指标,影响容量和寿命。','电池的老化指数。','newenergy'],
  ['el-imaging','EL检测','Electroluminescence','给光伏组件通电发光,拍摄发现隐裂等缺陷。','光伏的X光。','newenergy'],
  ['curtailment','弃风弃光','Curtailment','因消纳不了而被迫减少风电/光伏发电的现象。','发出来用不完。','newenergy'],
  ['bess','储能系统','BESS','Battery Energy Storage System,电池储能系统。','巨型充电宝。','newenergy'],

  // 算电协同
  ['compute-power','算电协同','Compute-Power Synergy','算力与电力系统的协同优化,让算力负荷参与电网调节。','算力帮电力。','compute'],
  ['pue','PUE','Power Usage Effectiveness','数据中心总能耗与IT设备能耗的比值,越接近1越节能。','数据中心的能效尺。','compute'],
  ['east-data-west-compute','东数西算','East Data West Compute','把东部数据送到西部算的国家算力布局战略。','东部数据西部算。','compute'],
  ['source-grid-load-storage-compute','源网荷储算','Source-Grid-Load-Storage-Compute','在源网荷储基础上加入算力负荷的一体化协同模式。','五字真言。','compute'],
  ['green-direct','绿电直供','Green Power Direct Supply','数据中心直接使用新能源发电,不经大电网。','直接用绿电。','compute'],
  ['liquid-cooling','液冷','Liquid Cooling','用液体替代空气冷却服务器,散热效率更高。','泡水降温。','compute'],

  // 营销客服
  ['demand-response','需求响应','Demand Response','用户响应电网信号、调节用电以获取激励的机制。','少用就是帮。','marketing'],
  ['ivrs','智能客服','AI Customer Service','用AI自动应答用户咨询、处理工单的系统。','7×24在线。','marketing'],
  ['anti-theft','反窃电','Anti-theft Detection','用大数据识别窃电和计量异常的技术。','抓偷电。','marketing'],

  // 安全
  ['cps','信息物理系统','CPS','Cyber-Physical System,信息系统与物理系统深度融合的系统。','IT遇上OT。','security'],
  ['situational-awareness','态势感知','Situational Awareness','对网络安全状态实时感知、分析预警的能力。','安全雷达。','security'],
  ['adversarial-attack','对抗攻击','Adversarial Attack','用精心设计的扰动让AI模型做出错误判断的攻击方法。','骗AI的眼睛。','security'],
  ['dengbao','等保',' classified Protection','信息安全等级保护,电力系统必须遵守的强制安全标准。','安全护身符。','security'],

  // 工程基建
  ['bim','BIM','Building Information Modeling','建筑信息模型,从设计到运维的全生命周期数字化。','建筑的三维档案。','engineering'],
  ['smart-construction','智慧工地','Smart Construction','用AI+物联网监控施工安全、进度、质量的工地。','工地长了眼。','engineering'],

  // 大模型
  ['domain-llm','行业大模型','Domain LLM','在通用大模型基础上,用行业语料继续训练的行业专用大模型。','大模型的行业版。','llm'],
  ['hallucination','幻觉','Hallucination','大模型生成看似合理但实际错误内容的现象。','一本正经胡说。','llm'],
  ['fine-tune','微调','Fine-tuning','在预训练模型基础上用特定数据继续训练以适配下游任务。','再补一课。','llm'],
  ['mcp','MCP','Model Context Protocol','让AI模型安全调用外部工具与数据源的协议标准。','AI的工具箱接口。','llm'],

  // 平台
  ['data-middleware','数据中台','Data Middleware','统一采集、治理、服务的数据基础设施,打破数据孤岛。','数据的集散中心。','platform'],
  ['edge-computing','边缘计算','Edge Computing','在靠近数据源的地方做计算,降低时延、节省带宽。','就地算。','platform'],
  ['data-quality','数据质量','Data Quality','数据的准确性、完整性、及时性和一致性。','数据好不好。','platform'],
];

/* ============ 从 _src 加载课程 ============
   每个文件 module.exports = [[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links], ...]
   concept/core/pitfalls/links 是 HTML 字符串,可用 g/ex/pit/fml/qc/qf helpers
*/
const L = {};
MODULES.forEach(m => {
  const fp = path.join(SRC, m[0] + '.js');
  if (fs.existsSync(fp)) {
    L[m[0]] = require(fp);
  } else {
    L[m[0]] = [];
    console.warn('警告: 未找到课程文件 ' + fp);
  }
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
let s = '/* 模块元数据 + 学习路径(AI+电力)(自动生成,勿手改) */\n';
s += 'window.AIP = window.AIP || {};\n';
s += 'AIP.modules = ' + J(mods) + ';\n';
s += 'AIP.path = ' + J(path_) + ';\n';
s += 'AIP.totalLessons = AIP.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(AI+电力)(自动生成) {id,name,en,def,analogy,module} */\nwindow.AIP = window.AIP || {};\nAIP.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nAIP.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') !== -1) {
  idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
} else {
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 AIP.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
