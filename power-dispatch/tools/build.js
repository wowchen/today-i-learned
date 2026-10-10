/* 电力调度与二次系统 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及调度规程、标准编号、保护定值、政策口径的具体内容,
   必须写明依据与适用期;内容基线为 2026 年 9 月。
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
  ['guide','导览','怎么用这个站、电力调度是什么、二次系统为什么是电网的神经','基础','Guide'],
  ['system','调度体系与职责','五级调度、机构与职责、管辖范围、规程规则、并网协议、控制区','基础','Dispatching System'],
  ['grid','电力系统运行基础','系统构成、有功与频率、无功与电压、三道防线、稳定、工况、安全约束','基础','System Operation'],
  ['secondary','二次系统总论','一次与二次分工、二次系统组成、二次回路、直流电源、互感器、二次设计','核心','Secondary System'],
  ['relay','继电保护','保护是什么、保护四性、过流、距离、差动、零序与母线、整定、校验与录波','核心','Relay Protection'],
  ['stability','安全稳定控制','为什么稳控、系统组成、切机切负荷、低频低压减载、策略表、装置联调、振荡','核心','Stability Control'],
  ['automation','调度自动化','SCADA 与 EMS、主站、RTU 与测控、四遥、状态估计、潮流、AGC 与 AVC、数据网','核心','Dispatch Automation'],
  ['comm','调度通信与时钟','调度通信要求、传输手段、保护通道、调度电话、时间同步、通信网管','核心','Dispatch Communication'],
  ['operation','调度运行','调度计划、发电计划、机组组合与备用、实时调度、操作票、检修、事故处理','进阶','Dispatch Operation'],
  ['newenergy','新能源与有源调度','出力特性、功率预测、消纳与弃电、调峰调频、源网荷储、新型调度问题','进阶','Renewable Dispatch'],
  ['distribution','配网调度','配调职责、配网自动化、故障处置、分布式电源、配网保护、市县一体化','进阶','Distribution Dispatch'],
  ['security','二次安防与网络安全','为什么要防、安全分区、横向隔离与纵向认证、防护体系、等保、态势感知、现场纪律','进阶','Secondary Security'],
  ['delivery','调度业务与实战','新站接入、调度验收、值班交接、事故复盘、数字化、能力地图、趋势','应用','Dispatch Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['dispatch','电力调度','Power Dispatching','对电力系统的运行方式进行组织、指挥、协调与控制,保证电网安全、优质、经济运行的工作。','电网的总指挥。','guide'],
  ['dispatching-center','调度机构','Dispatching Center','承担电力调度职能的机构,按层级设置,负责所辖电网的运行指挥与协调。','指挥部的所在地。','guide'],
  ['five-level-dispatch','五级调度','Five-Level Dispatching','国调、网调、省调、地调、县调构成的五级调度体系,各自在管辖范围内负责。','一级管一级。','guide'],
  ['dispatch-model','调度管理模式','Dispatch Management Model','调度机构在纵向上分级、横向上按专业分工的组织与运行方式。','怎么摆班子、怎么分工。','guide'],

  // 调度体系与职责
  ['dispatch-scope','调度管辖范围','Dispatch Jurisdiction','某一级调度机构负责指挥的设备与业务范围,是划分权限的基础。','谁的地盘谁说了算。','system'],
  ['dispatch-regulation','调度规程','Dispatching Regulations','规定调度机构与厂站职责、操作与事故处理要求的规范性文件。','调度工作的规矩手册。','system'],
  ['dispatch-agreement','并网调度协议','Grid Connection Dispatch Agreement','发电企业或用户在并网前与调度机构签订的、明确双方调度权利义务的协议。','先说好怎么配合。','system'],
  ['dispatch-order','调度指令','Dispatch Order','调度机构向下级或厂站下达的、具有强制性的运行操作指令。','下令必须执行。','system'],
  ['dispatch-duty','调度值班','Dispatch Duty','调度机构按班次连续值守、监盘与处置的工作制度。','一天二十四小时有人在。','system'],
  ['control-area','控制区','Control Area','在互联电网中,由某一调度机构负责维持其发电与负荷平衡、并管理联络线交换功率的区域。','自己负责平衡的一块。','system'],
  ['tie-line-power','联络线功率','Tie-line Power','控制区之间联络线上的交换功率,是考核控制区平衡责任的关键指标。','两块之间来往的电。','system'],

  // 电力系统运行基础
  ['power-system','电力系统','Power System','由发电、输电、变电、配电与用电设备及其控制系统构成的整体。','从发电到用电的一整条链。','grid'],
  ['active-power-balance','有功平衡','Active Power Balance','发电有功出力与用电负荷及网损之间的实时平衡关系,决定系统频率。','发多少用多少。','grid'],
  ['frequency','频率','Frequency','交流电每秒周期性变化的次数,我国额定为 50 赫兹,是全网统一的运行指标。','全网共用的一个节拍。','grid'],
  ['reactive-power-voltage','无功与电压','Reactive Power and Voltage','无功功率的分布决定各节点电压水平,是电压控制的核心。','电压靠无功撑着。','grid'],
  ['three-defense-lines','三道防线','Three Defense Lines','电网安全的三层设计:正常时保持稳定、故障时保护快速切除、极端时减载保网。','层层设防。','grid'],
  ['power-system-stability','电力系统稳定','Power System Stability','系统受扰后能否恢复到可接受运行状态的能力,分功角、电压、频率等类型。','被推一下能不能站住。','grid'],
  ['operating-condition','运行工况','Operating Condition','在特定设备投停与出力负荷组合下的电网运行状态。','此刻电网是什么样子。','grid'],
  ['security-constraint','安全约束','Security Constraint','设备容量、电压范围、稳定极限等必须满足的边界条件。','不能越过的红线。','grid'],
  ['n-1-criterion','N-1 准则','N-1 Criterion','系统中任一元件故障退出后,电网仍能保持稳定供电的基本要求。','坏一样还能撑住。','grid'],

  // 二次系统总论
  ['primary-equipment','一次设备','Primary Equipment','直接参与电能生产、变换、输送与使用的设备,如发电机、变压器、断路器、线路。','干电的活的主角。','secondary'],
  ['secondary-system','二次系统','Secondary System','对一次设备进行测量、监视、保护、控制与通信的设备与系统总称。','管安全的配角群。','secondary'],
  ['secondary-circuit','二次回路','Secondary Circuit','连接互感器、测量、保护与控制装置的电气回路,承担信号与指令的传递。','图纸上那一堆细线。','secondary'],
  ['dc-power-supply','直流电源系统','DC Power Supply System','为保护、控制、信号等装置提供不间断直流电源的系统,通常由蓄电池组与充电装置组成。','二次系统的心脏。','secondary'],
  ['ups','UPS','Uninterruptible Power Supply','不间断电源,为监控与通信等交流负载提供短时后备供电。','停电了还能撑一会儿。','secondary'],
  ['instrument-transformer','互感器','Instrument Transformer','电流互感器与电压互感器的合称,把高电压大电流按比例变换为测量与保护可用的小信号。','把大数缩小了再看。','secondary'],
  ['secondary-design','二次设计','Secondary Design','针对保护、自动化、通信与直流等二次部分进行的系统与接线设计工作。','配角也要出图纸。','secondary'],
  ['secondary-standardization','二次标准化','Secondary Standardization','统一二次设备接口、回路与组屏方式,提高建设效率与运维水平的做法。','大家按同一套尺寸做。','secondary'],

  // 继电保护
  ['relay-protection','继电保护','Relay Protection','反映电力系统故障与异常运行状态,自动、快速、有选择地切除故障元件的技术与装置。','电网的免疫系统。','relay'],
  ['protection-four-requirements','保护四性','Four Requirements of Protection','对继电保护提出的选择性、速动性、灵敏性与可靠性四项基本要求。','快、准、稳、不误动。','relay'],
  ['overcurrent-protection','过流保护','Overcurrent Protection','以电流超过定值为判据的保护,是最基础、最常用的保护方式之一。','电流大了就跳。','relay'],
  ['distance-protection','距离保护','Distance Protection','通过测量电压电流推算故障点到保护安装处的距离,并按距离分段动作的保护。','量一量故障有多远。','relay'],
  ['differential-protection','差动保护','Differential Protection','比较被保护元件两端电流之差来判断故障的保护,选择性好、灵敏度高。','进出对账,不对就跳。','relay'],
  ['zero-sequence-protection','零序保护','Zero-sequence Protection','利用接地故障时出现的零序电流构成的保护,专管接地故障。','专抓漏电的那一路。','relay'],
  ['busbar-protection','母线保护','Busbar Protection','针对母线故障设置的保护,动作范围覆盖母线及其连接元件。','枢纽的贴身保镖。','relay'],
  ['protection-setting','保护整定','Protection Setting','按系统参数与运行方式计算并确定保护动作值与时限的工作。','给保护调好刻度。','relay'],
  ['protection-verification','保护校验','Protection Verification','通过试验验证保护装置动作特性与定值是否满足要求的检查工作。','定期体检。','relay'],
  ['fault-recorder','故障录波','Fault Recorder','在故障时自动记录电压电流波形与开关量变化的装置,是事故分析的原始证据。','把事发瞬间录下来。','relay'],
  ['auto-reclosing','自动重合闸','Auto-reclosing','线路保护动作跳闸后自动重新合闸的装置,用于恢复瞬时性故障的供电。','跳完自己再试一次。','relay'],
  ['protection-channel','保护通道','Protection Channel','纵联保护两端之间传递信号的通信通道,是线路保护能否快速动作的关键。','保护之间的专线。','relay'],

  // 安全稳定控制
  ['stability-control-system','安全稳定控制系统','Stability Control System','为提高电网稳定水平、按预定策略自动执行切机切负荷等控制措施的系统。','出事时的紧急刹车。','stability'],
  ['generator-tripping','切机','Generator Tripping','在系统功率过剩或稳定受威胁时快速切除部分发电机的控制措施。','先把发多的掐掉。','stability'],
  ['load-shedding','切负荷','Load Shedding','在功率缺额时快速切除部分负荷以维持系统稳定的控制措施。','先把用多的掐掉。','stability'],
  ['ufls','低频减载','Under-Frequency Load Shedding','当频率下降到设定轮次定值时按轮次自动切除负荷的装置,是防止频率崩溃的最后手段。','最后一道闸。','stability'],
  ['uvls','低压减载','Under-Voltage Load Shedding','当电压低于定值时按轮次自动切除负荷,防止电压崩溃。','电压撑不住时卸包袱。','stability'],
  ['stability-strategy','稳控策略','Stability Control Strategy','规定在什么故障、什么方式下执行哪些控制措施的方案表。','if 这样 then 那样。','stability'],
  ['stability-device','稳控装置','Stability Control Device','执行稳控策略、采集运行信息并输出控制命令的二次设备。','执行紧急预案的那台。','stability'],
  ['sub-synchronous-oscillation','次同步振荡','Sub-synchronous Oscillation','机网之间在低于同步频率范围内发生的能量交换与振荡现象。','频率对不上时的抖动。','stability'],

  // 调度自动化
  ['scada','SCADA','Supervisory Control and Data Acquisition','数据采集与监视控制系统,实现远方测量、信号、控制与调节的基础系统。','调度台的眼睛和手。','automation'],
  ['ems','EMS','Energy Management System','能量管理系统,在 SCADA 基础上提供状态估计、潮流分析与优化调度等高级功能。','会算账的调度大脑。','automation'],
  ['dispatch-master-station','调度主站','Dispatch Master Station','部署在调度机构、承担数据汇集与运行监视控制的自动化系统主体。','指挥部的机房。','automation'],
  ['rtu','RTU','Remote Terminal Unit','安装在厂站侧、采集现场信息并与主站通信的远方终端装置。','现场的传令兵。','automation'],
  ['measurement-control-device','测控装置','Measurement and Control Device','采集电气量、开关量并接受远方控制命令的站端设备。','又看又听还能动手。','automation'],
  ['four-remote','四遥','Four Remotes','遥测、遥信、遥控、遥调的合称,是调度自动化的基本功能集合。','看得见、听得见、动得了、调得准。','automation'],
  ['state-estimation','状态估计','State Estimation','利用冗余量测推算全网最优运行状态、剔除坏数据的计算功能。','把收到的数据梳理成事实。','automation'],
  ['power-flow-calculation','潮流计算','Power Flow Calculation','在给定运行方式下求解电网各节点电压与支路功率分布的计算。','算一遍电怎么流。','automation'],
  ['agc','AGC','Automatic Generation Control','自动发电控制,按频率与联络线偏差自动调整机组出力。','自动维持发用平衡。','automation'],
  ['avc','AVC','Automatic Voltage Control','自动电压控制,按电压目标自动调节无功设备与机组励磁。','自动把电压拉回区间。','automation'],
  ['dispatch-data-network','调度数据网','Dispatch Data Network','专门承载调度自动化与保护信息业务的电力数据通信网络。','调度信息的专用公路。','automation'],

  // 调度通信与时钟
  ['dispatch-communication','调度通信','Dispatch Communication','为调度指挥、自动化与保护业务提供的专用通信能力。','指挥系统的神经。','comm'],
  ['opgw','OPGW','Optical Ground Wire','光纤复合架空地线,兼具地线与通信光缆功能,是电力通信的主要载体。','既防雷又能通信。','comm'],
  ['pilot-protection','纵联保护','Pilot Protection','利用通道比较线路两端信息、实现全线快速动作的保护方式。','两头对一下再决定。','comm'],
  ['dispatch-telephone','调度电话','Dispatch Telephone','供调度指挥使用的专用电话系统,通常具备录音与优先接入能力。','专门用来下令的电话。','comm'],
  ['time-synchronization','时间同步','Time Synchronization','使全网设备的时间基准保持一致的技术,通常基于卫星授时。','全网点对表。','comm'],
  ['clock-sync-device','时钟同步装置','Clock Synchronization Device','接收卫星或上级时钟信号并向站内设备提供同步时间的装置。','给全站发标准时间。','comm'],
  ['communication-network-management','通信网管','Communication Network Management','对通信设备与通道进行监视、配置与故障处置的管理系统。','看着通信这条路通不通。','comm'],

  // 调度运行
  ['dispatching-plan','调度计划','Dispatching Plan','对未来时段发电、检修、交换与负荷安排作出的计划性安排。','明天怎么开机先排好。','operation'],
  ['generation-schedule','发电计划','Generation Schedule','按负荷预测与运行约束确定的各机组出力安排。','谁发多少提前定。','operation'],
  ['real-time-dispatch','实时调度','Real-time Dispatch','在运行中根据实际负荷与运行状态对发电与运行方式作出的即时调整。','盯着屏幕随时改。','operation'],
  ['operation-ticket','操作票','Operation Ticket','按顺序列出操作项目、经审核后据以执行的书面依据。','照着单子一步步来。','operation'],
  ['switching-operation','倒闸操作','Switching Operation','通过拉开与合上开关刀闸改变设备运行状态的操作。','把电倒到该去的地方。','operation'],
  ['accident-handling','事故处理','Accident Handling','电网发生故障或异常后,为尽快恢复安全运行而采取的处置工作。','最考验人的那一刻。','operation'],
  ['maintenance-management','检修管理','Maintenance Management','对设备检修申请进行审批、安排与协调,兼顾检修需求与供电可靠性。','既要修又不能乱停。','operation'],
  ['grid-connection-management','并网管理','Grid Connection Management','对发电机组与用户接入电网进行的申请、审查与协议管理工作。','进门之前的手续。','operation'],
  ['unit-commitment','机组组合','Unit Commitment','确定未来时段各机组开停机状态与出力分配的优化问题。','哪几台开、哪几台停。','operation'],
  ['reserve-capacity','备用容量','Reserve Capacity','为应对负荷波动与事故而在运行中预留的可调出力。','兜底的那部分余量。','operation'],

  // 新能源与有源调度
  ['power-forecast','功率预测','Power Forecast','对未来时段新能源出力或负荷作出的预测,是调度安排的基础输入。','提前猜出明天发多少。','newenergy'],
  ['renewable-curtailment','弃风弃光','Wind and Solar Curtailment','因消纳或安全约束而主动限制新能源出力的现象。','发得出来但送不出去。','newenergy'],
  ['peak-shaving','调峰','Peak Shaving','为适应负荷峰谷变化而对发电出力进行的调整,是新能源高占比下的难点。','跟着用电的起伏走。','newenergy'],
  ['ancillary-service','辅助服务','Ancillary Service','为维持电力系统安全稳定运行而提供的调频、调峰、备用、无功等服务。','不发电但不可缺少的服务。','newenergy'],
  ['source-grid-load-storage','源网荷储','Source-Grid-Load-Storage','把电源、电网、负荷与储能作为一个整体统筹协调的运行理念。','四方面一起商量。','newenergy'],
  ['virtual-power-plant','虚拟电厂','Virtual Power Plant','把分散的可调资源聚合起来,作为一个整体参与电网调节与市场交易。','散兵集合成一支队伍。','newenergy'],
  ['power-electronics-dominated','电力电子化','Power Electronics Dominated','电源与负荷大量经电力电子设备接入,导致系统转动惯量与调节特性发生变化的趋势。','转的东西少了,脾气变了。','newenergy'],

  // 配网调度
  ['distribution-dispatch','配网调度','Distribution Dispatch','对配电网运行进行的调度指挥,通常由地调与县调承担。','管最后一公里的调度。','distribution'],
  ['distribution-automation-system','配网自动化系统','Distribution Automation System','实现配电网运行监视、故障隔离与恢复供电的自动化系统。','配网自己会判断。','distribution'],
  ['fault-isolation-restoration','故障隔离与恢复供电','Fault Isolation and Restoration','在配网故障后自动或人工隔离故障区段、恢复非故障区段供电的过程。','把坏的隔开,好的先送上。','distribution'],
  ['distributed-generation-dispatch','分布式电源调度','Distributed Generation Dispatch','对分布式光伏等分散电源进行的可观可测可调管理。','小而多的电源也要看得见。','distribution'],
  ['distribution-protection','配网保护','Distribution Network Protection','针对配电网特点配置的过流、零序与自动化配合等保护方式。','配网的保护不好整定。','distribution'],
  ['city-county-integration','市县一体化','City-County Integration','把地市与县级配网调度业务统一到一个平台与一套流程的管理模式。','上下用同一套系统。','distribution'],

  // 二次安防与网络安全
  ['security-zone-division','安全分区','Security Zone Division','按业务重要程度把电力监控系统划分为生产控制大区与管理信息大区。','重要的和一般的分开住。','security'],
  ['network-dedication','网络专用','Network Dedication','生产控制大区使用专用网络,不与外部网络直接互联。','自己的线自己用。','security'],
  ['horizontal-isolation','横向隔离','Horizontal Isolation','在生产控制大区与管理信息大区之间部署强隔离装置,仅允许单向或受控数据交换。','两边不能随便串门。','security'],
  ['vertical-authentication','纵向认证','Vertical Authentication','上下级节点之间通过加密认证装置进行身份与数据保护的措施。','上下级之间要验明身份。','security'],
  ['power-monitoring-security','电力监控系统安全防护','Power Monitoring System Security Protection','针对电力监控系统提出的安全分区、网络专用、横向隔离、纵向认证等总体要求。','生产系统的安全总规矩。','security'],
  ['classified-protection-secondary','二次系统等级保护','Classified Protection of Secondary System','按信息系统等级保护要求对二次系统开展的分级保护工作。','按重要程度配保安。','security'],
  ['cyber-situational-awareness','网络安全态势感知','Cyber Situational Awareness','对网络安全状态进行持续监测、分析与预警的能力。','早点知道有没有人摸进来。','security'],

  // 调度业务与实战
  ['station-commissioning','新站接入','New Station Commissioning','新建厂站从提出接入申请、调试到纳入调度管理的完整过程。','新兵入队要走完流程。','delivery'],
  ['dispatch-acceptance','调度验收','Dispatch Acceptance','在厂站投运前对二次系统、通信与自动化条件进行的检查确认。','合格了才准上岗。','delivery'],
  ['shift-handover','交接班','Shift Handover','调度值班在交班与接班之间对运行方式、缺陷与注意事项进行的交接。','把情况说清楚再走。','delivery'],
  ['dispatch-digitalization','调度数字化','Dispatch Digitalization','利用数据分析与智能化手段提升调度监视、分析与决策能力的演进方向。','从看得见到看得懂。','delivery'],
  ['dispatcher','调度员','Dispatcher','在调度机构承担值班、下达指令与处置事故职责的运行人员。','坐在屏幕前的那个人。','delivery'],
  ['capability-map','能力地图','Capability Map','把岗位所需知识、技能与经验按层次整理出的能力框架。','知道自己还差哪一块。','delivery'],
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
let s = '/* 模块元数据 + 学习路径(电力调度与二次系统)(自动生成,勿手改) */\n';
s += 'window.DSP = window.DSP || {};\n';
s += 'DSP.modules = ' + J(mods) + ';\n';
s += 'DSP.path = ' + J(path_) + ';\n';
s += 'DSP.totalLessons = DSP.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(电力调度与二次系统)(自动生成) {id,name,en,def,analogy,module} */\nwindow.DSP = window.DSP || {};\nDSP.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nDSP.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
