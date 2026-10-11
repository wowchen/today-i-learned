/* 虚拟电厂 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及聚合商准入、资源接入规范、需求响应补偿与市场参与规则的具体内容,
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
  ['guide','导览','怎么用这个站、虚拟电厂是什么、和微电网与需求响应的差异、学习路线','基础','Guide'],
  ['basics','虚拟电厂基础','定义、为什么需要、与微电网区别、与需求响应区别、类型划分、发展历程','基础','Basics'],
  ['resources','可调节资源','可中断负荷、空调、电动汽车、储能、分布式光伏、柴发、自备电厂、资源盘点','核心','Resources'],
  ['platform','平台与架构','主站、聚合平台、边缘终端、通信协议、量测体系、控制链路、信息安全','核心','Platform'],
  ['aggregation','聚合与调节能力','可调容量评估、基线负荷、调节能力测算、响应速度、持续时间、可调次数、聚合算法、不确定性','核心','Aggregation'],
  ['dr','需求响应','邀约型、实时型、价格型、补贴机制、响应考核、基线核定、收益分配','核心','Demand Response'],
  ['ancillary','参与辅助服务','调频、调峰、备用、一次调频、无功、结算、准入条件','核心','Ancillary'],
  ['spot','参与现货市场','参与路径、报量报价、聚合报价、结算、偏差处理、风险、试点情况','核心','Spot'],
  ['market','交易与商业模式','谁付费、收益来源、分成模式、聚合商模式、业主模式、合同设计、盈利测算、可持续性','核心','Market'],
  ['protocol','标准与规范','国家标准、接口规范、聚合商准入、资源接入规范、数据规范、互操作','进阶','Protocol'],
  ['ev','电动汽车与充电','V1G、V2G、V2H、有序充电、光储充、充电桩聚合、车网互动','核心','EV'],
  ['industry','工商业与园区','园区级聚合、工商业负荷、中央空调、空压机、生产线可中断、合同能源管理、收益','核心','Industry'],
  ['residential','居民与社区','居民负荷、智能家居、家庭储能、社区聚合、参与路径、收益','进阶','Residential'],
  ['overseas','国内外实践','美国、欧洲、澳洲、日本、国内试点、差异比较、经验借鉴','进阶','Overseas'],
  ['practice','项目实战','落地步骤、资源签约、平台选型、收益测算案例、运行管理、常见问题、能力地图','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['vpp','虚拟电厂','Virtual Power Plant','把分散的可调节资源聚合起来、像一个电厂那样参与电网运行与市场交易的组织形态。','把散落的小电源凑成一个厂。','guide'],
  ['aggregated-resource','聚合资源','Aggregated Resource','被纳入虚拟电厂统一调度的各类分散资源。','被攒到一起的那些设备。','guide'],
  ['regulation-capability','调节能力','Regulation Capability','虚拟电厂能够提供的功率调整幅度与速度。','能往上顶多少、往下压多少。','guide'],
  ['vpp-participation','参与市场','Market Participation','虚拟电厂作为市场主体参与交易或响应邀约。','以什么身份进场。','guide'],
  ['vpp-value','虚拟电厂价值','VPP Value','虚拟电厂为电网、用户与聚合商带来的综合价值。','这件事对谁有好处。','guide'],

  // 虚拟电厂基础
  ['vpp-definition','定义与边界','Definition and Boundary','虚拟电厂是什么、不是什么,以及它与相邻概念的界限。','先把它跟别的概念分开。','basics'],
  ['why-vpp','为什么需要','Why VPP','在新能源占比提高背景下系统对灵活性资源的迫切需要。','电网为什么非要它。','basics'],
  ['microgrid-diff','与微电网的区别','Difference from Microgrid','微电网强调就地自治,虚拟电厂强调聚合参与市场。','一个是小岛,一个是联盟。','basics'],
  ['dr-diff','与需求响应的区别','Difference from Demand Response','需求响应偏临时邀约,虚拟电厂是常态化聚合运营。','一个临时叫,一个长期干。','basics'],
  ['storage-vpp-diff','与储能电站的区别','Difference from Storage Plant','储能电站是单一资产,虚拟电厂是资源集合与调度体系。','一个是一台设备,一个是一张网。','basics'],
  ['load-type-vpp','负荷型虚拟电厂','Load-type VPP','以可调节负荷为主体的虚拟电厂。','靠大家少用一点。','basics'],
  ['generation-type-vpp','电源型虚拟电厂','Generation-type VPP','以分布式电源为主体的虚拟电厂。','靠大家多发一点。','basics'],
  ['vpp-history','发展历程','Development History','虚拟电厂从概念提出到试点推广的演进过程。','一步步走到今天。','basics'],

  // 可调节资源
  ['interruptible-load','可中断负荷','Interruptible Load','可在约定时间内被削减或暂停的用电负荷。','说停就停。','resources'],
  ['air-conditioning','空调负荷','Air Conditioning Load','中央空调等暖通设备形成的可调节负荷。','调温度就是在调功率。','resources'],
  ['ev-resource','电动汽车','Electric Vehicle','可充可放、具备双向调节潜力的移动储能资源。','会跑的大电池。','resources'],
  ['storage-resource','储能资源','Storage Resource','响应快、精度高的优质调节资源。','最好使的那一类。','resources'],
  ['distributed-pv','分布式光伏','Distributed PV','分散安装、可就地发电的可再生电源。','屋顶上的电站。','resources'],
  ['diesel-resource','柴油发电机','Diesel Generator','可作为后备或应急出力的自备发电资源。','平时不用关键时刻上。','resources'],
  ['self-supply-plant','自备电厂','Captive Power Plant','企业自建自用的发电设施,可参与调节。','自家的小电厂。','resources'],
  ['resource-inventory','资源盘点','Resource Inventory','对可聚合资源的数量、容量与特性进行摸排。','先把家底盘清楚。','resources'],

  // 平台与架构
  ['main-station','主站','Main Station','虚拟电厂的核心监控与调度系统。','总指挥部。','platform'],
  ['aggregation-platform','聚合平台','Aggregation Platform','对分散资源统一监测、调度与结算的系统。','把散兵游勇管起来的平台。','platform'],
  ['edge-terminal','边缘终端','Edge Terminal','部署在资源现场、负责采集与执行的装置。','装在现场的小盒子。','platform'],
  ['communication-protocol','通信协议','Communication Protocol','平台与终端之间约定的数据交互规则。','两边说话的方式。','platform'],
  ['measurement-system','量测体系','Measurement System','用于采集功率、电量与状态数据的量测装置与流程。','怎么把数拿准。','platform'],
  ['control-link','控制链路','Control Link','从平台下发指令到资源执行的通路。','命令怎么传下去。','platform'],
  ['security-protection','信息安全','Cyber Security','虚拟电厂在接入与控制环节的安全防护要求。','别被人黑进来。','platform'],
  ['architecture-layer','架构分层','Architecture Layering','虚拟电厂在设备、通信、平台与应用层的分层设计。','一层管一层。','platform'],

  // 聚合与调节能力
  ['capacity-assessment','可调容量评估','Capacity Assessment','对可聚合资源能提供多少调节能力进行测算。','到底能挤出多少。','aggregation'],
  ['baseline-load','基线负荷','Baseline Load','用于衡量响应量的对照负荷水平。','不响应的话本来会用多少。','aggregation'],
  ['response-speed','响应速度','Response Speed','从接到指令到达到目标功率的时间。','叫你多快能到位。','aggregation'],
  ['duration','持续时间','Duration','能够维持约定调节功率的时长。','能顶多久。','aggregation'],
  ['call-frequency','可调次数','Call Frequency','在一定时段内可被调用的次数上限。','一天能叫你几回。','aggregation'],
  ['aggregation-algorithm','聚合算法','Aggregation Algorithm','把多个资源的调节能力合成整体曲线的算法。','小本事怎么拼成大本事。','aggregation'],
  ['uncertainty','不确定性','Uncertainty','资源可用性与响应行为不确定带来的偏差。','答应的事未必做得到。','aggregation'],
  ['response-accuracy','响应精度','Response Accuracy','实际响应量与指令目标之间的吻合程度。','说多少就多少。','aggregation'],

  // 需求响应
  ['invited-dr','邀约型需求响应','Invited Demand Response','由电网或聚合商发出邀约、用户自愿响应的机制。','来活了,接不接。','dr'],
  ['realtime-dr','实时型需求响应','Real-time Demand Response','按实时价格或紧急信号即时调整用电。','说到就要做到。','dr'],
  ['price-based-dr','价格型需求响应','Price-based Demand Response','用户按价格信号自主调整用电的行为。','看价钱自己决定。','dr'],
  ['subsidy-mechanism','补贴机制','Subsidy Mechanism','对响应行为给予补偿的规则与标准。','干完了给多少钱。','dr'],
  ['response-assessment','响应考核','Response Assessment','对响应量、精度与及时性进行评价。','干得好不好要打分。','dr'],
  ['baseline-method','基线核定','Baseline Determination','确定对照负荷所采用的方法与口径。','拿什么当参照。','dr'],
  ['revenue-sharing','收益分配','Revenue Sharing','把响应收益在聚合商与资源方之间分配的规则。','挣到的钱怎么分。','dr'],
  ['response-volume','响应量','Response Volume','实际削减或增加的功率与电量。','到底动了多少。','dr'],

  // 参与辅助服务
  ['frequency-regulation-vpp','调频服务','Frequency Regulation','通过快速调节维持系统频率稳定的服务。','电网问你快不快。','ancillary'],
  ['peak-regulation','调峰服务','Peak Regulation','在负荷高峰增加出力或低谷减少用电的服务。','忙时多顶一点。','ancillary'],
  ['reserve-service','备用服务','Reserve Service','预留可调用能力以应对突发的服务。','留着救急。','ancillary'],
  ['primary-frequency-vpp','一次调频','Primary Frequency Response','按频率偏差自动快速响应的能力。','不用命令自己上。','ancillary'],
  ['reactive-service','无功服务','Reactive Power Service','维持电压水平所需的无功支撑。','撑住电压。','ancillary'],
  ['ancillary-settlement','辅助服务结算','Ancillary Settlement','按调用量、里程与考核系数计算补偿的过程。','这笔调节怎么结钱。','ancillary'],
  ['access-condition','准入条件','Access Condition','参与辅助服务须满足的技术与容量门槛。','进场先过门槛。','ancillary'],
  ['performance-score','考核系数','Performance Score','按响应精度与速度折算的补偿调整系数。','干得好不好按分算钱。','ancillary'],

  // 参与现货市场
  ['spot-path','现货参与路径','Spot Participation Path','虚拟电厂参与现货市场的方式与流程。','走哪条路进场。','spot'],
  ['quantity-price-bid','报量报价','Quantity and Price Bid','按电量与价格提交交易申报。','报多少、报多贵。','spot'],
  ['aggregated-bid','聚合报价','Aggregated Bid','把多个资源的申报合成一个整体报价。','大家凑一份报价单。','spot'],
  ['spot-settlement-vpp','现货结算','Spot Settlement','按出清结果与计量数据计算应收应付。','把账算清楚。','spot'],
  ['deviation-handling','偏差处理','Deviation Handling','对实际与计划不一致部分的处理规则。','对不上怎么办。','spot'],
  ['spot-risk','参与风险','Participation Risk','参与市场可能带来的收益与履约风险。','去赚这笔钱的代价。','spot'],
  ['pilot-situation','试点情况','Pilot Status','各地虚拟电厂参与市场的试点进展。','各地跑到哪一步了。','spot'],
  ['market-threshold','入市门槛','Market Threshold','参与市场所须满足的容量与技术条件。','够不够格。','spot'],

  // 交易与商业模式
  ['who-pays-vpp','谁付费','Who Pays','虚拟电厂收益的最终支付主体与资金来源。','这笔钱到底谁掏。','market'],
  ['revenue-source','收益来源','Revenue Source','需求响应、辅助服务、现货、容量等各类收入。','钱从哪几处来。','market'],
  ['split-model','分成模式','Split Model','聚合商与资源方按比例分配收益的做法。','按比例分。','market'],
  ['aggregator-model','聚合商模式','Aggregator Model','以聚合商为主体签约资源并对外交易的模式。','有人专门去谈生意。','market'],
  ['owner-model','业主模式','Owner Model','资源方自行组织并直接参与市场的模式。','自己上阵。','market'],
  ['contract-design','合同设计','Contract Design','明确权责、调用条件与结算方式的合同安排。','把丑话说在前面。','market'],
  ['profit-calculation','盈利测算','Profit Calculation','对虚拟电厂项目的收入与成本进行建模测算。','这门生意赚不赚。','market'],
  ['sustainability','可持续性','Sustainability','商业模式在补贴退坡后能否自我维持。','不给补贴还活不活得下去。','market'],

  // 标准与规范
  ['national-standard','国家标准','National Standard','对虚拟电厂技术要求与接口作出的统一规定。','大家照同一本册子来。','protocol'],
  ['interface-spec','接口规范','Interface Specification','平台与资源、平台与电网之间的接口约定。','插头要一样才插得上。','protocol'],
  ['aggregator-access','聚合商准入','Aggregator Access','对聚合商资质、能力与责任的要求。','想当聚合商先过审。','protocol'],
  ['resource-access-spec','资源接入规范','Resource Access Specification','资源接入平台须满足的技术与数据条件。','设备怎么接进来。','protocol'],
  ['data-spec','数据规范','Data Specification','对采集频率、字段与质量的要求。','数据得按规矩报。','protocol'],
  ['interoperability','互操作','Interoperability','不同厂商设备与平台之间协同工作的能力。','谁的设备都能接。','protocol'],

  // 电动汽车与充电
  ['v1g','有序充电','V1G','单向受控充电,可调节充电功率与时序。','能控制什么时候充。','ev'],
  ['v2g','车网互动','V2G','电动汽车向电网反向送电的双向互动。','车也能往电网里送电。','ev'],
  ['v2h','车家互动','V2H','电动汽车为家庭负荷供电的应用。','车给家里供电。','ev'],
  ['orderly-charging','有序充电','Orderly Charging','按电网需要安排充电时序的做法。','排好队错峰充。','ev'],
  ['pv-storage-charging','光储充','PV-Storage-Charging','把光伏、储能与充电桩组合成一体的站点。','三件套打包。','ev'],
  ['charging-aggregation','充电桩聚合','Charging Pile Aggregation','把分散充电桩聚合起来参与调节。','一把桩当成一个资源。','ev'],
  ['v2x','车网互动体系','V2X','车辆与电网及各类设施之间的能量与信息互动。','车跟外面打交道。','ev'],
  ['charging-load','充电负荷','Charging Load','电动汽车充电产生的时间与功率可调的负荷。','一群车同时插上。','ev'],

  // 工商业与园区
  ['park-vpp','园区级虚拟电厂','Park-level VPP','以一个园区为范围组织的虚拟电厂。','整个园区当一家。','industry'],
  ['industrial-load','工商业负荷','Industrial and Commercial Load','工厂与商业建筑的可调节用电负荷。','厂房和商场里的用电。','industry'],
  ['central-ac','中央空调','Central Air Conditioning','可通过温度设定与蓄冷实现调节的空调系统。','调一点温度省不少电。','industry'],
  ['air-compressor','空压机','Air Compressor','工业通用设备,具有一定的调节与蓄能潜力。','工厂里那台一直响的机器。','industry'],
  ['production-line','生产线可中断','Interruptible Production Line','可在不影响交付的前提下短时降载的产线。','停一会儿也不误事。','industry'],
  ['emc-industry','合同能源管理','Energy Management Contract','由服务方投资、与用户分成收益的商业模式。','我出钱你出场地,收益分。','industry'],
  ['industrial-revenue','工业调节收益','Industrial Regulation Revenue','工商业参与调节所获得的补偿收入。','少用一会儿能换多少钱。','industry'],
  ['load-management','负荷管理','Load Management','对用户用电进行计划与调控的管理手段。','把用电排排班。','industry'],

  // 居民与社区
  ['residential-load','居民负荷','Residential Load','家庭用电设备形成的分散负荷。','一家一户那点电。','residential'],
  ['smart-home','智能家居','Smart Home','可远程控制与自动调节的家庭设备体系。','家里设备能听话。','residential'],
  ['home-storage','家庭储能','Home Storage','家庭场景配置的储能系统。','家里的那块电池。','residential'],
  ['community-aggregation','社区聚合','Community Aggregation','以社区为单位聚合居民资源参与调节。','整栋楼一起参与。','residential'],
  ['resident-path','居民参与路径','Resident Participation Path','居民参与虚拟电厂的渠道与方式。','普通人怎么参与。','residential'],
  ['resident-revenue','居民收益','Resident Revenue','居民参与调节所能获得的收益水平。','能分到多少钱。','residential'],

  // 国内外实践
  ['us-practice','美国实践','US Practice','美国需求响应与虚拟电厂的市场化经验。','看美国怎么搞。','overseas'],
  ['eu-practice','欧洲实践','EU Practice','欧洲在聚合与平衡市场方面的做法。','看欧洲怎么搞。','overseas'],
  ['australia-practice','澳洲实践','Australia Practice','澳洲在户用光储与虚拟电厂方面的探索。','看澳洲怎么搞。','overseas'],
  ['japan-practice','日本实践','Japan Practice','日本在聚合商制度与需求响应方面的做法。','看日本怎么搞。','overseas'],
  ['china-pilot','国内试点','China Pilot','国内各地虚拟电厂试点的进展与差异。','国内各地跑到哪了。','overseas'],
  ['comparison','差异比较','Comparison','不同市场在机制、结算与准入门槛上的差异。','几家有什么不同。','overseas'],
  ['lesson-learned','经验借鉴','Lesson Learned','从境外实践中可迁移的机制设计与注意事项。','哪些能拿来用。','overseas'],

  // 项目实战
  ['rollout-step','落地步骤','Rollout Step','虚拟电厂项目从规划到运行的主要阶段。','按什么顺序推进。','practice'],
  ['resource-contract','资源签约','Resource Contracting','与资源方签订合作协议的过程。','先把人拉进来。','practice'],
  ['platform-selection','平台选型','Platform Selection','选择或自建聚合平台时的考量要点。','用谁家的系统。','practice'],
  ['revenue-case','收益测算案例','Revenue Case','对具体项目做收益测算的完整示例。','把账真算一遍。','practice'],
  ['operation-management','运行管理','Operation Management','日常监测、调用、结算与维护的管理工作。','上线之后怎么管。','practice'],
  ['common-problem','常见问题','Common Problem','虚拟电厂落地中最常遇到的障碍与误解。','大家都会踩的坑。','practice'],
  ['capability-map-vpp','能力地图','Capability Map','从事虚拟电厂业务所需知识与技能的清单。','干这行要会什么。','practice'],
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
let s = '/* 模块元数据 + 学习路径(虚拟电厂)(自动生成,勿手改) */\n';
s += 'window.VPP = window.VPP || {};\n';
s += 'VPP.modules = ' + J(mods) + ';\n';
s += 'VPP.path = ' + J(path_) + ';\n';
s += 'VPP.totalLessons = VPP.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(虚拟电厂)(自动生成) {id,name,en,def,analogy,module} */\nwindow.VPP = window.VPP || {};\nVPP.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nVPP.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
