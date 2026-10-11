/* 数据中心与算电协同 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及能耗与 PUE 要求、绿电采购、需求响应、算力调度与数据中心政策的具体内容,
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
  ['guide','导览','怎么用这个站、算电协同是什么、和算力基础设施通识的差异、学习路线','基础','Guide'],
  ['overview','数据中心全景','是什么、分类与等级、规模与选址、建设周期、产业链、用能特征','基础','Overview'],
  ['power','供配电系统','市电引入、变压器、UPS、高压直流、柴发、母线冗余、Tier 等级、供电可靠性','基础','Power'],
  ['cooling','制冷与能效','风冷、水冷、液冷、冷板、浸没、自然冷却、PUE 与 WUE、能效优化','核心','Cooling'],
  ['load','负荷特性','IT 负载、功率密度、负载率、峰谷特性、备用容量、负载波动、机柜功率','核心','Load'],
  ['energy','用能管理','能耗构成、电费构成、需量管理、峰谷价差、绿电采购、自备电源、能耗指标','核心','Energy'],
  ['green','绿色数据中心','绿电直供、绿证、源网荷储、PUE 与碳、碳中和数据中心、余热回收、零碳园区','核心','Green'],
  ['synergy','算电协同原理','什么是算电协同、算力与电力耦合、时空灵活性、算力可迁移、任务可调度、联合优化、协同架构','核心','Synergy'],
  ['scheduling','算力调度与需求响应','可中断负载、批处理任务、削峰填谷、需求响应、参与辅助服务、参与现货、收益测算','核心','Scheduling'],
  ['vpp','数据中心参与虚拟电厂','聚合模式、备用电源、柴发、UPS 储能、参与路径、收益与风险','进阶','VPP'],
  ['storage','数据中心储能','储能配置、UPS 锂电化、削峰、备电、调频、收益、安全','进阶','Storage'],
  ['hvdc','高压直流与新型供电','传统 UPS 与 HVDC、巴拿马电源、一体化电源、直流微网、效率提升、可靠性、趋势','进阶','HVDC'],
  ['ai','智算中心','智算与通算、GPU 集群、功率密度、液冷刚需、训练与推理负载、算力调度、能耗挑战','核心','AI DC'],
  ['policy','政策与市场','双碳与数据中心、能耗双控、PUE 要求、绿电消纳、算力枢纽、东数西算、政策趋势','进阶','Policy'],
  ['practice','实战案例','选址、绿电直供、源网荷储、参与需求响应、液冷改造、PUE 优化、能力地图','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['compute-power-synergy','算电协同','Compute-Power Synergy','把算力负荷与电力系统统筹调度、互相支撑的做法。','算和电一起安排。','guide'],
  ['data-center','数据中心','Data Center','集中放置计算、存储与网络设备并提供运行环境的设施。','装服务器的大房子。','guide'],
  ['pue','电能利用效率','PUE','数据中心总耗电与 IT 设备耗电的比值。','一共用了多少电摊到设备上。','guide'],
  ['flexible-load','灵活性负荷','Flexible Load','可在时间或功率上调整的用电负荷。','能挪一挪的用电。','guide'],
  ['carbon-footprint-dc','数据中心碳足迹','Data Center Carbon Footprint','数据中心在全生命周期产生的温室气体总量。','这座机房一共排了多少碳。','guide'],

  // 数据中心全景
  ['idc','互联网数据中心','IDC','以对外提供机柜与带宽服务为主的数据中心。','租机柜给别人的那种。','overview'],
  ['edc','企业数据中心','EDC','企业自建自用、支撑自身业务的数据中心。','自己用的那种。','overview'],
  ['tier-level','可用性等级','Tier Level','按冗余与可用性划分的数据中心等级。','看能扛几次故障。','overview'],
  ['site-selection','选址','Site Selection','综合电力、气候、网络与政策条件确定建设地点。','建在哪儿最合适。','overview'],
  ['rack-density','机柜功率密度','Rack Density','单个机柜承载的功率,单位为 kW/柜。','一个柜子吃多少电。','overview'],
  ['energy-profile','用能特征','Energy Profile','数据中心用能在时间、构成与强度上的特点。','用电是个什么脾气。','overview'],
  ['construction-cycle','建设周期','Construction Cycle','从立项到投产所需的整体时间。','多久能建好。','overview'],
  ['colocation','托管','Colocation','把设备放在第三方机房并租用其电与网。','借别人家的机房放自己的机器。','overview'],

  // 供配电系统
  ['power-distribution-dc','供配电系统','Power Distribution System','从市电引入到机柜末端的整套供电链路。','从大门到插座的这条路。','power'],
  ['ups','不间断电源','UPS','市电异常时持续供电的装置。','断电时顶上的那一下。','power'],
  ['diesel-generator','柴油发电机','Diesel Generator','长时间停电时提供后备电力的发电设备。','最后的保底发电。','power'],
  ['busway','母线槽','Busway','替代电缆、用于大电流配电的母线通道。','粗铜排组成的输电干道。','power'],
  ['redundancy','冗余','Redundancy','关键环节配置备用路径以提高可靠性的做法。','多配一套以防万一。','power'],
  ['dual-power','双路供电','Dual Power Supply','由两个独立电源分别供电的安排。','两条命。','power'],
  ['automatic-transfer','自动切换','Automatic Transfer','电源故障时自动切换到备用电源。','断了自动换。','power'],
  ['power-reliability','供电可靠性','Power Reliability','供电不中断且质量达标的能力。','别断、别闪。','power'],

  // 制冷与能效
  ['air-cooling','风冷','Air Cooling','用空气作为冷媒带走设备热量的方式。','用风吹。','cooling'],
  ['water-cooling','水冷','Water Cooling','用冷水循环带走热量的方式。','用水带。','cooling'],
  ['liquid-cooling','液冷','Liquid Cooling','用液体直接或间接接触发热器件散热的方式。','把板子泡进去。','cooling'],
  ['cold-plate','冷板液冷','Cold Plate Cooling','冷却液在贴近芯片的冷板内循环散热。','贴着芯片贴个水袋。','cooling'],
  ['immersion','浸没液冷','Immersion Cooling','把设备整体浸入绝缘冷却液中散热。','整台泡在油里。','cooling'],
  ['free-cooling','自然冷却','Free Cooling','利用室外低温空气或水直接散热的方式。','外面够冷就不用开空调。','cooling'],
  ['wue','水资源利用效率','WUE','数据中心耗水量与 IT 耗电量的比值。','每度电用了多少水。','cooling'],
  ['heat-reuse','余热回收','Heat Reuse','回收数据中心排出的热量加以利用。','废热也别浪费。','cooling'],

  // 负荷特性
  ['it-load','IT 负载','IT Load','服务器、存储与网络设备本身的耗电。','真正干活的那些机器吃的电。','load'],
  ['load-factor','负载率','Load Factor','实际负载与额定容量之比。','装了多少、用了多少。','load'],
  ['standby-capacity','备用容量','Standby Capacity','预留用于冗余与扩容的容量。','留一手的部分。','load'],
  ['load-fluctuation','负载波动','Load Fluctuation','负载在时间上的起伏。','一会儿忙一会儿闲。','load'],
  ['peak-valley-dc','峰谷特性','Peak-valley Profile','数据中心用电在一天内的升降规律。','白天忙还是夜里忙。','load'],
  ['diversity-factor','同时使用系数','Diversity Factor','各类设备同时达到峰值的可能程度。','不会所有设备同时满负荷。','load'],
  ['gpu-load','GPU 负载','GPU Load','由算力芯片产生的集中且高密度的用电负荷。','一群卡一起烧电。','load'],
  ['power-usage','功率使用','Power Usage','设备实际消耗的功率水平。','实际吃多少瓦。','load'],

  // 用能管理
  ['energy-composition','能耗构成','Energy Composition','总能耗中各子系统所占的比例。','电都花在哪些地方了。','energy'],
  ['electricity-bill-dc','电费构成','Electricity Bill Composition','由电度电费、基本电费与力调等部分组成的电费。','账单里都有哪些项。','energy'],
  ['demand-management','需量管理','Demand Management','通过控制最大需量降低基本电费的做法。','别让最高峰冲太高。','energy'],
  ['peak-valley-price','峰谷电价','Peak-valley Price','按用电时段分别定价的电价机制。','忙时贵闲时便宜。','energy'],
  ['green-power-purchase','绿电采购','Green Power Purchase','购买可再生能源电力的行为。','买干净的电。','energy'],
  ['self-generation','自备电源','Self Generation','企业自建的发电或供电设施。','自己发电自己用。','energy'],
  ['energy-kpi','能耗指标','Energy KPI','衡量数据中心用能水平的关键指标。','用电好不好看这几个数。','energy'],
  ['renewable-direct','绿电直供','Direct Green Power Supply','新能源电站直接向数据中心供电的模式。','从风场直接拉线过来。','energy'],

  // 绿色数据中心
  ['green-certificate','绿证','Green Certificate','可再生能源电量环境属性的凭证。','证明你买了绿电的那张纸。','green'],
  ['source-grid-load-storage','源网荷储一体化','Source-Grid-Load-Storage Integration','把电源、电网、负荷与储能统筹规划运行的模式。','四件事一起安排。','green'],
  ['carbon-neutral-dc','碳中和数据中心','Carbon Neutral Data Center','通过减排与抵消实现净零排放的数据中心。','碳账归零的机房。','green'],
  ['zero-carbon-park','零碳园区','Zero Carbon Park','在园区尺度实现净零碳排放的建设模式。','整个园区不排碳。','green'],
  ['pue-optimization','PUE 优化','PUE Optimization','通过技术与管理手段降低 PUE 的过程。','把比值往 1 上压。','green'],
  ['carbon-accounting-dc','碳排放核算','Carbon Accounting','按标准方法核算数据中心排放量的过程。','把碳算清楚。','green'],
  ['green-power-trading','绿电交易','Green Power Trading','以绿电及其环境属性为标的的交易。','专门买卖绿电。','green'],
  ['energy-storage-dc','储能配置','Storage Deployment','为数据中心配置储能系统的做法。','给机房配块电池。','green'],

  // 算电协同原理
  ['spatial-flexibility','空间灵活性','Spatial Flexibility','算力任务在不同地理位置之间迁移的能力。','这活可以挪到别处干。','synergy'],
  ['temporal-flexibility','时间灵活性','Temporal Flexibility','算力任务在时间上提前或推迟执行的能力。','这活可以晚点干。','synergy'],
  ['workload-migration','算力迁移','Workload Migration','把计算任务从一处迁到另一处执行。','活跟着电价走。','synergy'],
  ['schedulable-task','可调度任务','Schedulable Task','对执行时间不敏感、可灵活安排的计算任务。','不急的活。','synergy'],
  ['joint-optimization','联合优化','Joint Optimization','同时考虑算力需求与电力约束求最优方案。','两边一起算最优解。','synergy'],
  ['synergy-architecture','协同架构','Synergy Architecture','支撑算电协同的信息与调度系统结构。','这套协同怎么搭起来。','synergy'],
  ['demand-side','需求侧','Demand Side','用电一侧的资源与调节能力。','用电那边的本事。','synergy'],
  ['synergy-value','协同价值','Synergy Value','协同带来的成本下降、绿电消纳与可靠性收益。','协同到底省了什么。','synergy'],

  // 算力调度与需求响应
  ['interruptible-load','可中断负载','Interruptible Load','可在短时内被削减或暂停的负荷。','说停就能停的活。','scheduling'],
  ['batch-task','批处理任务','Batch Task','可成批排队执行、时间不敏感的计算任务。','排队慢慢跑的那种。','scheduling'],
  ['dr-participation','需求响应参与','Demand Response Participation','以可调负荷身份参与电网需求响应。','跟着信号调整用电。','scheduling'],
  ['ancillary-participation','辅助服务参与','Ancillary Service Participation','以调节能力参与调频调峰等辅助服务。','帮电网做调节。','scheduling'],
  ['revenue-calculation','收益测算','Revenue Calculation','测算参与需求响应或辅助服务能获得的收益。','这笔调节能换多少钱。','scheduling'],
  ['response-capacity','可响应容量','Response Capacity','在约定条件下可提供的调节能力。','能拿出多少可调。','scheduling'],
  ['notice-period','提前通知时长','Notice Period','从接到邀约到需要响应之间的时间。','提前多久告诉你。','scheduling'],
  ['settlement-dr','响应结算','Demand Response Settlement','按实际响应量计算与支付补偿的过程。','响应完怎么结钱。','scheduling'],

  // 数据中心参与虚拟电厂
  ['dc-aggregation','数据中心聚合','Data Center Aggregation','把多个数据中心的调节能力聚合起来参与市场。','几家机房凑成一个大电源。','vpp'],
  ['backup-power','备用电源','Backup Power','在市电中断时提供支撑的电源。','顶上来的那套。','vpp'],
  ['vpp-path','参与路径','Participation Path','参与虚拟电厂或需求响应的具体方式与流程。','走哪条路进场。','vpp'],
  ['dc-flexibility-value','灵活性价值','Flexibility Value','数据中心提供灵活性所体现的经济价值。','能调节就值钱。','vpp'],
  ['participation-risk','参与风险','Participation Risk','参与市场可能带来的业务中断或违约风险。','去赚这笔钱的代价。','vpp'],
  ['aggregation-platform','聚合平台','Aggregation Platform','对分散资源统一监测、调度与结算的系统。','把散兵游勇管起来的那套系统。','vpp'],

  // 数据中心储能
  ['ups-lithium','UPS 锂电化','Lithium UPS','把传统铅酸 UPS 替换为锂电方案的改造。','把备用电池换成锂电。','storage'],
  ['peak-shaving-dc','削峰','Peak Shaving','用储能削减最大需量的做法。','把尖峰削平。','storage'],
  ['backup-battery','备电','Backup Battery','用于断电支撑的电池容量。','留着断电时用。','storage'],
  ['storage-revenue-dc','储能收益','Storage Revenue','储能通过削峰与辅助服务获得的收益。','这块电池能挣的钱。','storage'],
  ['battery-safety','电池安全','Battery Safety','储能在消防、热失控防护等方面的要求。','别烧起来。','storage'],
  ['storage-capacity','储能容量','Storage Capacity','储能系统的能量与功率规模。','能存多少、放多快。','storage'],
  ['dual-use','一机两用','Dual Use','同一套储能兼顾备电与套利收益。','既当备胎又当挣钱工具。','storage'],
  ['cycle-cost','循环成本','Cycle Cost','每次充放循环分摊的成本。','用一次划掉多少钱。','storage'],

  // 高压直流与新型供电
  ['hvdc','高压直流供电','HVDC','以高压直流方式向 IT 设备供电的架构。','不走交流,直接上直流。','hvdc'],
  ['panama-power','巴拿马电源','Panama Power','一种集成整流与配电的一体化供电方案。','把几个柜子合成一个。','hvdc'],
  ['integrated-power','一体化电源','Integrated Power','把多级变换整合为一体化设备的供电方案。','少几个环节少几份损耗。','hvdc'],
  ['dc-microgrid','直流微网','DC Microgrid','以直流母线构建的小型供电网络。','拉一条直流总线。','hvdc'],
  ['efficiency-gain','效率提升','Efficiency Gain','通过架构优化减少变换环节带来的效率改善。','少绕几圈省电。','hvdc'],
  ['conversion-loss','变换损耗','Conversion Loss','电能变换过程中的损失。','倒腾一次掉一点。','hvdc'],
  ['power-trend','供电趋势','Power Supply Trend','数据中心供电架构的演进方向。','往哪边走。','hvdc'],

  // 智算中心
  ['intelligent-computing-center','智算中心','Intelligent Computing Center','以 AI 训练与推理为主要负载的数据中心。','专门跑 AI 的机房。','ai'],
  ['general-computing','通算','General Computing','面向通用业务的计算负载类型。','什么都干的那种。','ai'],
  ['gpu-cluster','GPU 集群','GPU Cluster','由大量加速卡互联构成的计算集群。','一大群卡连起来。','ai'],
  ['training-load','训练负载','Training Load','模型训练阶段的持续高负载。','一跑就是几周那种。','ai'],
  ['inference-load','推理负载','Inference Load','模型推理阶段的请求驱动型负载。','有人用才跑那种。','ai'],
  ['high-density-rack','高密度机柜','High Density Rack','单柜功率显著高于常规的机柜。','一柜顶别人好几柜。','ai'],
  ['liquid-necessity','液冷刚需','Liquid Cooling Necessity','高功率密度下必须采用液冷的情形。','风冷吹不动了。','ai'],
  ['compute-scheduling','算力调度','Compute Scheduling','按资源与约束分配计算任务的安排。','把活派给哪台机器。','ai'],

  // 政策与市场
  ['dual-carbon-dc','双碳与数据中心','Dual Carbon and Data Centers','双碳目标对数据中心建设与运行的要求。','机房也得减碳。','policy'],
  ['energy-dual-control','能耗双控','Dual Control of Energy','对能耗总量与强度同时控制的制度。','总量和强度都管。','policy'],
  ['pue-requirement','PUE 要求','PUE Requirement','对新建或在运数据中心 PUE 的准入要求。','不达标不让建。','policy'],
  ['green-consumption','绿电消纳','Green Power Consumption','按要求消纳一定比例可再生能源电量。','必须用多少绿电。','policy'],
  ['computing-hub','算力枢纽','Computing Hub','国家层面规划的算力集群节点。','国家定的大算力基地。','policy'],
  ['east-data-west-computing','东数西算','East Data West Computing','把东部算力需求引导到西部承接的工程。','东边的活拿到西边算。','policy'],
  ['policy-trend-dc','政策趋势','Policy Trend','对数据中心能效、布局与绿电要求的演变方向。','政策往哪走。','policy'],

  // 实战案例
  ['case-selection','选址案例','Site Selection Case','结合电力与气候条件进行选址的实际案例。','为什么建在这里。','practice'],
  ['green-direct-case','绿电直供案例','Green Direct Supply Case','新能源直供数据中心的项目案例。','直连风电光伏的机房。','practice'],
  ['sgsl-case','源网荷储案例','Source-Grid-Load-Storage Case','数据中心参与源网荷储一体化的项目案例。','四合一的项目怎么做。','practice'],
  ['dr-case','需求响应案例','Demand Response Case','数据中心参与需求响应的实践与收益复盘。','真去响应挣了多少。','practice'],
  ['liquid-retrofit','液冷改造','Liquid Cooling Retrofit','对既有风冷机房进行液冷改造的工程实践。','老机房怎么改成液冷。','practice'],
  ['pue-case','PUE 优化案例','PUE Optimization Case','通过综合手段降低 PUE 的实际案例。','把比值压下来。','practice'],
  ['capability-map-dc','能力地图','Capability Map','从事数据中心与算电协同工作所需能力清单。','干这行要会什么。','practice'],
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
let s = '/* 模块元数据 + 学习路径(数据中心与算电协同)(自动生成,勿手改) */\n';
s += 'window.DTC = window.DTC || {};\n';
s += 'DTC.modules = ' + J(mods) + ';\n';
s += 'DTC.path = ' + J(path_) + ';\n';
s += 'DTC.totalLessons = DTC.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(数据中心与算电协同)(自动生成) {id,name,en,def,analogy,module} */\nwindow.DTC = window.DTC || {};\nDTC.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nDTC.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
