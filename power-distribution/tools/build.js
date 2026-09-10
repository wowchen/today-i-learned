/* 配电网与配电自动化 · 单一数据源生成器(克隆新型电力系统与储能站引擎,命名空间 PDN)。
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
  ['guide','导览','怎么用这个站、配电网是什么、学习路线','基础','Guide'],
  ['basic','配电网基础','配电网的范围与分级、电压等级、接线方式、开闭所与环网柜、供电半径、线损','基础','Basics'],
  ['load','负荷与配网规划','负荷预测、负荷密度与同时率、供电分区与网格化规划、容载比','基础','Load and Planning'],
  ['equip','配电设备与设施','配电变压器、柱上开关与环网柜、架空绝缘线与电缆、箱式变电站、开闭所','核心','Equipment'],
  ['terminal','配电终端与感知','FTU 馈线终端、DTU 站所终端、TTU 配变终端、故障指示器、智能电表与采集、一二次融合','核心','Terminals'],
  ['comm','配网通信','光纤专网、无线公网与电力专网、中压载波、通信方式选型、安全防护','核心','Communication'],
  ['auto','配电自动化','DA 三种模式、自动化主站、馈线自动化、故障定位隔离与恢复供电、遥控与实用化','核心','Automation'],
  ['reliability','供电可靠性与运维','可靠性指标、停电统计口径、状态检修与带电作业、线损管理、抢修与台区管理','核心','Reliability'],
  ['dg','分布式电源与有源配网','分布式光伏接入、反向潮流、电压越限治理、并网标准、微电网与源网荷储','进阶','Distributed Generation'],
  ['newtech','配网新技术','智能融合终端、低压透明化与拓扑识别、数字孪生、无人机与机器人巡检、AI 应用','进阶','New Tech'],
  ['market','配网业务与市场','增量配电业务改革、配网投资与造价、供电服务与获得电力、分布式交易与虚拟电厂','应用','Business'],
  ['policy','标准与合规','配网规划设计标准、配电自动化标准、分布式电源并网标准、供电监管与安全规程','进阶','Standards'],
  ['practice','一线实战','配网工程全流程、自动化改造实施、一二次融合选型、故障处置案例、数据治理、竣工验收','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['distribution-network','配电网','Distribution Network','从变电站出线到用户电表之间的电力网络,承担电能的分配与直接供给。','电网的最后一公里。','guide'],

  // 配电网基础
  ['hv-dn','高压配电网','High-voltage Distribution Network','通常指 110 千伏与 35 千伏等级的配电网,负责把电送到各供电分区。','配网的上游。','basic'],
  ['mv-dn','中压配电网','Medium-voltage Distribution Network','通常指 10 千伏与 20 千伏等级的配电网,是配电自动化的主战场。','配网的主干。','basic'],
  ['lv-dn','低压配电网','Low-voltage Distribution Network','通常指 380 伏与 220 伏等级、直接供给居民与商业用户的配电网络。','配网的末梢。','basic'],
  ['voltage-level','电压等级','Voltage Level','电力系统中规定的标准电压序列,配网常见 110、35、20、10、6、0.4 千伏。','电的规格尺寸。','basic'],
  ['radial','辐射式接线','Radial Connection','从电源点单向放射状引出的接线方式,结构简单、成本低,但无备用。','一条道走到黑。','basic'],
  ['ring-connection','环式接线','Ring Connection','线路首尾相连或双回路互为备用的接线方式,可靠性高、可转供。','绕一圈还有后路。','basic'],
  ['ring-main-unit','环网柜','Ring Main Unit','中压配网中用于环网接线、实现分合与转供的成套开关设备组合。','配网的分岔口。','basic'],
  ['switching-station','开闭所','Switching Station','只有母线、开关与保护、不装变压器的站所,用于汇集与分配中压出线。','只分电不变压。','basic'],
  ['supply-radius','供电半径','Supply Radius','变电站或配电站到最远负荷点的电气距离,过长会导致电压偏低与线损升高。','电能够到多远。','basic'],
  ['line-loss','线损率','Line Loss Rate','配电网中损耗电量占总供电量的比例,是配网运行效率的核心指标。','路上漏掉多少电。','basic'],
  ['n-1-dn','N-1 校核','N-1 Criterion','配网安全准则:任一元件故障或检修时,仍能通过转供保持对用户供电。','坏一个也顶得住。','basic'],
  ['distribution-reliability','供电可靠性','Supply Reliability','配电网持续向用户供电的能力,用停电时间与次数等指标衡量。','会不会老停电。','basic'],

  // 负荷与配网规划
  ['load-forecast','负荷预测','Load Forecast','对未来一段时间用电负荷大小与分布的预估,是配网规划与运行的基础。','猜以后要多少电。','load'],
  ['spatial-load','空间负荷预测','Spatial Load Forecast','按地块或网格预测负荷的地理分布,用于确定变电站与线路的布点。','算清楚哪块地要电。','load'],
  ['load-density','负荷密度','Load Density','单位面积上的用电负荷大小,常以千瓦每平方公里或兆瓦每平方公里表示。','每平方公里吃多少电。','load'],
  ['simultaneity','同时率','Coincidence Factor','一组用户或设备同一时刻实际最大负荷与各自最大负荷之和的比值。','不会同时开到最大。','load'],
  ['grid-planning','网格化规划','Grid-based Planning','把供电区域划分为标准供电网格与单元,按网格配置变电站与通道的规划方法。','一格一格地配。','load'],
  ['capacity-load-ratio','容载比','Capacity-to-Load Ratio','变电容量与对应最大负荷之比,反映配网容量裕度与投资效率。','备用的余量。','load'],
  ['power-supply-zone','供电分区','Supply Zone','按地理与行政边界划定的供电责任区域,是配网规划与管理的基本单元。','谁的片区谁负责。','load'],

  // 配电设备与设施
  ['distribution-transformer','配电变压器','Distribution Transformer','把中压降为低压、直接供给用户的变压器,数量巨大、损耗总量可观。','家门口的那台变压器。','equip'],
  ['pole-mounted-switch','柱上开关','Pole-mounted Switch','安装在电杆上、用于分段与联络的中压开关,是架空配网最常见的开关设备。','杆子上的开关。','equip'],
  ['drop-out-fuse','跌落式熔断器','Drop-out Fuse','靠熔丝熔断后自跌落实现开断与明显断开点的保护电器,常用于配变高压侧。','烧断了会掉下来。','equip'],
  ['load-break-switch','负荷开关','Load Break Switch','能开断正常工作电流但不能开断短路电流的开关,常与熔断器配合使用。','能切负荷不能切故障。','equip'],
  ['vacuum-breaker','真空断路器','Vacuum Circuit Breaker','利用真空中电弧熄灭原理开断电流的断路器,可开断短路故障,用于中压配网。','能切故障的开关。','equip'],
  ['box-substation','箱式变电站','Box Substation','把变压器、开关与低压配电集成在一个箱体内的紧凑型变电站,占地小、安装快。','一个箱子就是一座变电站。','equip'],
  ['overhead-insulated','架空绝缘导线','Insulated Overhead Conductor','表面带绝缘层的架空导线,可减小树线矛盾与短路风险,提高通道利用率。','穿了外套的电线。','equip'],
  ['power-cable','电力电缆','Power Cable','敷设于地下或电缆沟内的绝缘电力线路,不占地面空间但故障查找与修复慢。','埋在地下的线。','equip'],
  ['surge-arrester','避雷器','Surge Arrester','限制过电压、保护变压器与电缆绝缘免受雷击与操作过电压损害的设备。','给设备顶雷。','equip'],
  ['dry-type-transformer','干式变压器','Dry-type Transformer','不使用变压器油、以空气或树脂绝缘的变压器,防火性能好,多用于室内与地下。','不怕烧的变压器。','equip'],

  // 配电终端与感知
  ['distribution-terminal','配电终端','Distribution Terminal','安装在配网站所或馈线上、采集运行数据并执行控制命令的二次装置总称。','配网的神经末梢。','terminal'],
  ['ftu','馈线终端','FTU','装设在馈线开关处的配电终端,采集电压电流并执行分合闸,是馈线自动化的执行者。','管一条线的终端。','terminal'],
  ['dtu','站所终端','DTU','装设在开闭所、环网柜等多回路站所的配电终端,可同时监控多条线路。','管一个站的终端。','terminal'],
  ['ttu','配变终端','TTU','装设在配电变压器处的终端,监测配变运行与低压侧数据,用于配变监测与台区管理。','管一台变压器的终端。','terminal'],
  ['fault-indicator','故障指示器','Fault Indicator','安装在配电线路上、通过电流突变判断故障区段的装置,用于快速定位故障点。','线路上报信的哨兵。','terminal'],
  ['smart-meter','智能电表','Smart Meter','具备双向计量、分时计量与通信能力的电能表,是低压侧数据的主要来源。','会说话的电表。','terminal'],
  ['hplc','高速电力线载波','HPLC','利用低压电力线传输数据的高速载波通信技术,是台区抄表与低压感知的主要通道。','用电线当网线。','terminal'],
  ['ami','用电信息采集系统','AMI','采集、传输与处理用户电能表数据的系统,支撑抄表、线损与负荷分析。','把所有电表连起来。','terminal'],
  ['primary-secondary-fusion','一二次融合','Primary-secondary Fusion','把一次开关设备与二次终端、传感器在结构上集成设计,提高可靠性与施工效率。','一次二次装在一起。','terminal'],

  // 配网通信
  ['epon','无源光网络','EPON','基于以太网的无源光网络,一条光纤被多个终端共享,是配网光纤到节点的常用方案。','一根光纤分给多家用。','comm'],
  ['industrial-ethernet','工业以太网','Industrial Ethernet','面向工业环境、具备高可靠与实时能力的以太网技术,用于配网站所间组网。','能扛住现场的网线。','comm'],
  ['distribution-optical','配网光纤专网','Distribution Optical Network','电力自建、专门承载配网自动化与保护业务的光纤通信网络,安全性高、带宽大。','自己家的光纤。','comm'],
  ['wireless-public','无线公网','Public Wireless Network','租用运营商 4G 或 5G 网络承载业务的方式,建设快、成本低,但时延与安全性需评估。','借运营商的网。','comm'],
  ['power-wireless-private','电力无线专网','Power Wireless Private Network','电力自建的无线通信网络,如 230 兆赫与 1.8 吉赫频段,可控性强、覆盖专有。','自己的无线网。','comm'],
  ['mv-plc','中压电力线载波','MV Power Line Carrier','利用中压电力线传输信号的通信方式,不用单独敷设通信通道,但速率与稳定性受限。','借电线传数据。','comm'],
  ['security-access-zone','安全接入区','Secure Access Zone','把无线或公网接入的终端数据先汇聚、经安全防护设备再进入内网的隔离区域。','进门前先过安检。','comm'],
  ['vertical-encryption','纵向加密认证','Vertical Encryption','在调度与自动化系统中对上下级之间的数据通信做加密与身份认证的防护措施。','上下级之间的密话。','comm'],

  // 配电自动化
  ['da','配电自动化','Distribution Automation','利用自动化装置、终端与通信系统,对配电网进行监测、控制与故障处理的整体技术。','配网的自动驾驶。','auto'],
  ['da-modes','DA 三种模式','Three DA Modes','按故障处理方式分为就地型、集中型与智能分布式三种配电自动化实现模式。','三种处理故障的路子。','auto'],
  ['da-master','配电自动化主站','DA Master Station','配网自动化的中枢系统,负责数据采集、监视控制、故障处理与管理分析。','配网的大脑。','auto'],
  ['feeder-automation','馈线自动化','Feeder Automation','面向馈线的故障自动定位、隔离与非故障区段恢复供电的技术,简称 FA。','管一条线的自动化。','auto'],
  ['flisr','故障定位隔离与恢复供电','FLISR','Fault Location, Isolation and Service Restoration 的缩写,是配网自动化的核心功能。','哪坏了、切哪、剩下的先送电。','auto'],
  ['scada','数据采集与监视控制','SCADA','采集现场数据并支持远程监视与控制的系统,是配网自动化的基础平台。','看得见也管得着。','auto'],
  ['telecontrol','遥控','Telecontrol','由主站远程下发命令操作开关分合的功能,是配电自动化最关键的实用化指标。','远程按开关。','auto'],
  ['telesignal','遥信','Telesignal','把开关位置、告警状态等开关量上传到主站的功能。','设备的状态报上来。','auto'],
  ['telemeter','遥测','Telemeter','把电压、电流、功率等模拟量上传到主站的功能。','数据实时报上来。','auto'],
  ['graph-model','图模库一体','Graph-Model-Database Integration','把配网地理接线图、设备模型与数据库统一维护,保证主站看到的就是现场实际。','图、模型、数据一套账。','auto'],
  ['da-coverage','配电自动化覆盖率','DA Coverage Rate','已实现自动化覆盖的线路或设备占总数的比例,衡量建设规模。','自动化铺到多少。','auto'],
  ['da-practical','自动化实用化','Practical Application of DA','自动化系统真正被用于日常监视与故障处理、而非只建成不使用的程度评价。','建了要真用。','auto'],

  // 供电可靠性与运维
  ['saidi','用户平均停电时间','SAIDI','System Average Interruption Duration Index,一年内用户平均停电的小时数。','平均停多久。','reliability'],
  ['saifi','用户平均停电次数','SAIFI','System Average Interruption Frequency Index,一年内用户平均停电的次数。','平均停几次。','reliability'],
  ['caidi','平均停电持续时间','CAIDI','用户平均停电总时间与停电总次数之比,反映每次停电恢复得快不快。','一次停多久。','reliability'],
  ['asai','供电可用率','ASAI','Average Service Availability Index,一年中用户实际获得供电的时间比例。','一年有百分之多少时间有电。','reliability'],
  ['planned-outage','计划停电','Planned Outage','为检修、施工与改造需要,提前安排并通知用户的停电。','提前打招呼的停电。','reliability'],
  ['live-line-work','带电作业','Live-line Work','在不停电状态下对设备进行检查、检修与消缺的作业方式,可减少停电时间。','不停电也能干活。','reliability'],
  ['condition-based-maintenance','状态检修','Condition-based Maintenance','依据设备状态监测与评价结果安排检修,替代按固定周期检修的做法。','该修才修。','reliability'],
  ['station-area','台区','Distribution Transformer Area','一台配电变压器及其低压供电范围构成的配网最小管理单元。','一台变压器管的那一片。','reliability'],

  // 分布式电源与有源配网
  ['distributed-generation','分布式电源','Distributed Generation','接入配电网或用户侧、就近发电就近消纳的小型电源,如屋顶光伏、小型风电。','身边的小电站。','dg'],
  ['reverse-power','反向潮流','Reverse Power Flow','分布式电源出力超过本地负荷时,功率由用户侧向上级电网倒送的现象。','电往上倒着走。','dg'],
  ['voltage-violation','电压越限','Voltage Violation','因分布式电源倒送导致并网点电压超出允许范围的现象,是光伏高渗透的主要问题。','电压被顶高了。','dg'],
  ['anti-islanding','防孤岛保护','Anti-islanding Protection','电网停电时,防止分布式电源继续向局部线路送电而危及检修人员的保护措施。','停电了必须跟着停。','dg'],
  ['islanding','孤岛运行','Islanding','分布式电源与储能带着局部负荷脱离主网独立运行的状态,可提高供电可靠性。','脱网自己过。','dg'],
  ['microgrid','微电网','Microgrid','由分布式电源、储能、负荷与控制系统组成、可并网也可孤岛运行的小型电力系统。','能单飞的小电网。','dg'],
  ['source-grid-load-storage','源网荷储','Source-Grid-Load-Storage','把电源、电网、负荷、储能统筹规划与协同运行的一体化模式。','四方一起打配合。','dg'],
  ['pv-inverter','并网逆变器','Grid-tied Inverter','把光伏直流电转为与电网同频同相的交流电并送入电网的电力电子设备。','光伏的翻译官。','dg'],

  // 配网新技术
  ['iot-fusion-terminal','智能融合终端','Smart Fusion Terminal','集配变监测、低压采集与无功补偿控制等功能于一体的台区综合终端。','台区的一台多面手。','newtech'],
  ['topology-identification','拓扑识别','Topology Identification','利用电气量与信号特征自动识别台区与低压线路连接关系,替代人工摸排。','自动认出谁接在哪。','newtech'],
  ['lv-transparency','低压透明化','Low-voltage Transparency','对低压配网做到可观可测可控,让每个台区与支线的运行状态都能看见。','低压也看得清清楚楚。','newtech'],
  ['digital-twin-dn','配网数字孪生','Distribution Digital Twin','配电网的虚拟镜像,可实时映射运行状态并支持仿真推演与方案比选。','配网的分身。','newtech'],
  ['uav-inspection','无人机巡检','UAV Inspection','用无人机搭载可见光、红外等设备对线路与设备进行巡检,效率与安全性更高。','让无人机去看线。','newtech'],
  ['edge-computing-dn','边缘计算','Edge Computing','在配电终端或站所侧就地完成数据分析与决策,降低时延与主站压力。','就地算。','newtech'],
  ['ai-in-dn','人工智能在配网','AI in Distribution','把机器学习与图像识别用于负荷预测、故障研判、缺陷识别与线损分析等场景。','让配网会自己判断。','newtech'],

  // 配网业务与市场
  ['incremental-distribution','增量配电业务','Incremental Distribution Business','放开增量配电网投资与运营、允许社会资本参与试点的改革举措。','新配网允许别人投。','market'],
  ['distribution-investment','配电网投资','Distribution Investment','用于配网建设与改造的资本性支出,通常按规划项目库与投资计划管理。','配网花了多少钱。','market'],
  ['electricity-obtaining','获得电力','Getting Electricity','衡量企业办电便利度与成本的指标,是营商环境评价的重要内容。','办电快不快、贵不贵。','market'],
  ['distributed-trading','分布式发电市场化交易','Distributed Generation Market Trading','允许分布式电源就近与电力用户直接交易、按约定价格结算的机制。','隔墙卖电。','market'],
  ['dso','配电网运营商','Distribution System Operator','负责配电网运行、接入与市场服务的主体,角色随分布式资源增多而扩展。','管配网也管接入。','market'],
  ['vpp-dn','虚拟电厂','Virtual Power Plant','把分布式电源、储能与可调负荷聚合起来、统一参与电网调度与市场交易的模式。','拼起来的电厂。','market'],

  // 标准与合规
  ['planning-std','配电网规划设计标准','Distribution Planning Standard','规定配网规划原则、供电分区、容载比与接线方式等要求的技术标准。','配网怎么规划的规矩。','policy'],
  ['da-std','配电自动化技术标准','DA Technical Standard','规定配电自动化系统架构、终端功能、通信与安全要求的技术标准体系。','自动化按什么做。','policy'],
  ['dg-grid-std','分布式电源并网标准','DG Grid Connection Standard','规定分布式电源接入电压等级、电能质量、保护与计量要求的标准。','小电源怎么接进网。','policy'],
  ['supply-regulation','供电监管','Power Supply Regulation','监管部门对供电质量、供电服务与可靠性的监督考核制度。','盯着供电好坏。','policy'],
  ['safety-code','电力安全工作规程','Safety Work Regulations','规定电力生产现场作业安全要求的强制性规程,是一切现场作业的底线。','保命的规矩。','policy'],
  ['work-ticket','工作票','Work Permit','在电力设备上作业前办理的书面许可凭证,明确任务、范围与安全措施。','干活前先开票。','policy'],

  // 一线实战
  ['feasibility-study','可行性研究','Feasibility Study','项目立项前对必要性、技术方案、投资与效益进行的系统论证。','这事值不值得干。','practice'],
  ['completion-acceptance','竣工验收','Completion Acceptance','工程完工后对质量、资料与功能是否满足要求进行的检查与确认。','交钥匙前的最后一道关。','practice'],
  ['data-governance','数据治理','Data Governance','对设备台账、图模与运行数据的一致性、完整性与准确性进行管理与整治。','把账做平。','practice'],
  ['fault-disposal','故障处置','Fault Disposal','配网发生故障后的研判、隔离、转供与修复的完整处理过程。','出了事怎么收场。','practice'],
  ['emergency-repair','配网抢修','Emergency Repair','故障发生后组织人员与物资尽快恢复供电的作业组织过程。','抢着把电送回去。','practice'],
  ['project-archive','项目档案','Project Archive','项目实施过程中形成的图纸、合同、验收与结算资料的归档管理。','留下证据链。','practice'],
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
let s = '/* 模块元数据 + 学习路径(新型电力系统与储能)(自动生成,勿手改) */\n';
s += 'window.PDN = window.PDN || {};\n';
s += 'PDN.modules = ' + J(mods) + ';\n';
s += 'PDN.path = ' + J(path_) + ';\n';
s += 'PDN.totalLessons = PDN.path.length;\n';

/* 术语表文本 */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));

/* 课时文件 */
const scriptTags = [];
const bodies = [];
MODULES.forEach(m => {
  const mid = m[0];
  (L[mid] || []).forEach((les, idx) => {
    const id = mid + '/' + les[0];
    const obj = {
      id: id, module: mid, order: idx + 1, title: les[1], minutes: les[2],
      keywords: les[3], concept: les[4], core: les[5], pitfalls: les[6], quiz: les[7] || [], links: les[8]
    };
    let body = '/* ' + id + ' (自动生成) */\nPDN.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    bodies.push(body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* ---------- 命名空间自检(防克隆本站后 sed 替换遗漏:曾因残留他站命名空间导致整站崩溃) ---------- */
const termText = '/* 术语表(新型电力系统与储能)(自动生成) {id,name,en,def,analogy,module} */\nwindow.PDN = window.PDN || {};\nPDN.terms = ' + J(termObjs) + ';\n';
const genAll = s + termText + bodies.join('\n');
const NS = 'PDN';
const SIBLINGS = ['AIP', 'AIX', 'AGT', 'TCM', 'CCN', 'FIN', 'PRS', 'EMT', 'ML', 'DAT', 'WHS', 'GTR', 'LIT', 'TSP',
  'FIT', 'MUS', 'MATH', 'ECON', 'PSY', 'GEO', 'CG', 'CHS', 'EBD', 'EMS', 'FYP', 'PGF', 'PFIN',
  'SAD', 'SAN', 'SPM', 'NPD', 'HIT', 'ISL', 'ISPM', 'CDC', 'NH', 'AST', 'WAH', 'NPS', 'SLP'];
if (genAll.indexOf(NS + '.') === -1) {
  console.error('命名空间自检失败: 生成物未使用本站命名空间 ' + NS + '。');
  process.exit(1);
}
const foreign = SIBLINGS.filter(x => genAll.indexOf(x + '.') !== -1);
if (foreign.length) {
  console.error('命名空间自检失败: 生成物含他站命名空间 ' + foreign.join(', ') + ' —— 克隆后替换不完整。');
  process.exit(1);
}

/* 自检通过后落盘 */
w(C('modules.js'), s);
w(C('terms.js'), termText);
{
  let bi = 0;
  MODULES.forEach(m => {
    const mid = m[0];
    (L[mid] || []).forEach((les) => { w(C(mid, les[0] + '.js'), bodies[bi++]); });
  });
}

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') !== -1) {
  idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
} else {
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 PDN.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
