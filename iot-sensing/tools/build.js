/* 电力物联网与感知层 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及通信制式、频段划分、标准编号、政策口径的具体内容,
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
  ['guide','导览','怎么用这个站、电力物联网是什么、学习路线','基础','Guide'],
  ['basics','电力物联网全景','端边网云四层、来路与格局、泛在电力物联网、价值怎么算','基础','Overview'],
  ['card','通信模组与物联网卡','模组形态、卡片制式、写号、APN/VPDN、机卡绑定、流量池','核心','Module and SIM'],
  ['monitor','物联网卡全链路监测','链路分段、状态采集、分钟级故障定界、异常识别、平台与打通','核心','Full-link Monitoring'],
  ['network','公网与电力专网','公网场景、230MHz 与 1.8GHz 专网、5G 切片、NB-IoT 与 LoRa、选型','核心','Network Options'],
  ['plc','载波与本地通信','HPLC、为什么用自己的线、拓扑识别、双模、常见问题','核心','PLC and Local'],
  ['terminal','传感器与智能终端','物理量、台区融合终端、微环境、局放、结构监测、安防、选型','核心','Sensors and Terminals'],
  ['edge','边缘计算与网关','为什么在现场算、网关形态、协议转换、边缘推理、断点续传、远程运维','进阶','Edge Computing'],
  ['platform','设备接入与物联网平台','平台职责、物模型、设备影子、接入鉴权、规则引擎、OTA、数据开放','进阶','Platform'],
  ['dataq','感知数据治理与数据质量','数据为什么不可信、时标与口径、缺失跳变与坏数据、清洗边界、质量指标、主数据','进阶','Data Quality'],
  ['security','感知层安全','最脆弱的一环、安全接入区、纵向加密、卡侧风险、等保与防护','进阶','Security'],
  ['scenes','典型场景实战','用采、配自、充电桩、光伏、动环、微环境、光缆防外破、统一接入','应用','Scenarios'],
  ['ops','感知层运维与缺陷处置','运维修什么、台账与资产、巡视、故障定界派单、现场处置、备品、变更、指标','应用','Operations'],
  ['delivery','项目建设与运营','选型、造价、联调、验收、运营指标、风险、趋势','应用','Delivery'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['power-iot','电力物联网','Power IoT','把电力系统中的设备、传感器与终端连起来,实现状态采集、远程控制与数据汇聚的技术体系。','给电网装上神经末梢。','guide'],
  ['sensing-layer','感知层','Sensing Layer','整个体系中最靠现场的一层,负责识别物体、采集物理量并向上传递数据。','手和眼睛。','guide'],
  ['ubiquitous-power-iot','泛在电力物联网','Ubiquitous Power IoT','围绕电力系统各环节,充分应用移动互联与人工智能技术实现万物互联、人机交互的建设方向。','让电网处处可感知。','guide'],
  ['terminal-device','终端设备','Terminal Device','部署在现场、直接面向被监测对象并具备通信能力的设备总称。','现场干活的那台。','guide'],

  // 全景
  ['four-layers','端边网云','Device-Edge-Network-Cloud','电力物联网常见的四层划分:终端感知、边缘计算、网络传输、平台应用。','从现场一路到云。','basics'],
  ['edge-layer','边缘层','Edge Layer','介于终端与平台之间的一层,在现场完成汇聚、转换与初步计算,减轻网络与平台压力。','家门口的小算力。','basics'],
  ['network-layer','网络层','Network Layer','把现场数据可靠传回平台的一层,由各种有线与无线通信方式构成。','数据走的那条路。','basics'],
  ['platform-layer','平台层','Platform Layer','负责设备接入、数据存储、规则计算与服务开放的中间层。','数据的中转站。','basics'],
  ['application-layer','应用层','Application Layer','面向具体业务提供监测、分析、控制与决策能力的上层系统。','最后拿来用的那部分。','basics'],
  ['centralized-arch','集中式接入','Centralized Access','终端数据统一汇聚到一个中心平台处理,结构简单但中心压力大。','全都送回去算。','basics'],
  ['distributed-arch','分布式接入','Distributed Access','在边缘侧先做处理与决策,只把必要数据上传的架构。','就近先算一遍。','basics'],
  ['power-iot-standard','电力物联网标准体系','Power IoT Standards','覆盖终端、通信、平台、安全与应用各层的国家标准、行业标准与企业标准集合。','大家照着同一本说明书干。','basics'],

  // 通信模组与物联网卡
  ['communication-module','通信模组','Communication Module','把基带、射频与协议栈封装在一起的硬件模块,设备通过它接入移动网络。','设备上网的网卡。','card'],
  ['iot-card','物联网卡','IoT SIM Card','面向物联网设备发行的用户识别卡,提供数据通信与身份识别能力,通常不支持语音。','设备用的手机卡。','card'],
  ['esim','eSIM','Embedded SIM','直接焊接在设备上、号码可远程下载与切换的嵌入式用户识别卡。','焊在板子上的卡。','card'],
  ['imsi','IMSI','International Mobile Subscriber Identity','国际移动用户识别码,是卡在网络中的唯一身份标识,写号的核心数据。','卡在网络里的身份证号。','card'],
  ['card-writing','写号','Number Writing','把运营商分配的号码与身份数据写入卡中的过程,决定卡能否正常入网。','给卡登记身份。','card'],
  ['apn','APN','Access Point Name','接入点名称,决定终端通过哪个网络出口访问哪个业务网络。','走哪个门进网。','card'],
  ['vpdn','VPDN','Virtual Private Dial-up Network','基于公网构建的虚拟专用拨号网络,让终端只能访问指定内网资源。','公网里的专用通道。','card'],
  ['card-binding','机卡绑定','Device-SIM Binding','把卡与设备绑定,换设备即失效,用于防止卡被挪用到其他终端。','卡和机器锁在一起。','card'],
  ['traffic-pool','流量池','Traffic Pool','把多张卡的流量合并共享,按池总量计费,降低整体通信成本。','大家的流量放一个池子。','card'],
  ['card-lifecycle','卡生命周期','SIM Lifecycle','从开卡、激活、使用、停机到销户的完整管理过程。','一张卡的一生。','card'],

  // 全链路监测
  ['full-link-monitoring','全链路监测','Full-link Monitoring','对从卡、模组、无线网络、专线到平台的整条数据通路进行状态采集与故障定位的能力。','一路盯到底。','monitor'],
  ['link-segment','链路分段','Link Segmentation','把端到端通路拆成若干可独立观测的段落,是故障定界的前提。','把长链切成几段看。','monitor'],
  ['silent-card','沉默卡','Silent Card','长时间没有任何通信行为的物联网卡,可能是设备停运,也可能是故障或异常。','一声不吭的卡。','monitor'],
  ['roaming-card','漫游卡','Roaming Card','在非归属地网络中使用的卡,可能导致流量异常与安全风险。','跑到别人地盘上的卡。','monitor'],
  ['card-theft','卡盗用','SIM Theft and Abuse','物联网卡被取出、复制或挪作他用,造成流量损失与安全风险的行为。','卡被人拿走了。','monitor'],
  ['fault-localization','故障定界','Fault Localization','在整条链路中判断故障发生在哪一段、由谁负责处理的过程。','先搞清楚是谁的锅。','monitor'],
  ['monitoring-indicator','监测指标','Monitoring Indicator','用于衡量链路健康度的量化指标,如在线率、时延、流量突降与心跳缺失。','好不好用数字说话。','monitor'],
  ['alarm-closed-loop','告警闭环','Alarm Closed Loop','从告警产生、派单、处理到复核归档的完整处理过程。','响了就得有人管到底。','monitor'],

  // 网络
  ['public-network','公网','Public Network','由电信运营商建设运营、面向公众开放的移动通信网络。','大家共用的网。','network'],
  ['power-wireless-private','电力无线专网','Power Wireless Private Network','电力企业自建自营、专用于电力业务的无线通信网络。','自己家的网。','network'],
  ['230mhz','230MHz 专网','230MHz Private Network','利用 230MHz 频段建设的电力无线专网,覆盖广、适合采集类业务。','电力自己的频段。','network'],
  ['network-slicing','网络切片','Network Slicing','在同一张物理网络上划分出多个逻辑独立的虚拟网络,各自保障不同性能。','一条路划出几条专用道。','network'],
  ['nbiot','NB-IoT','Narrowband IoT','窄带物联网技术,功耗低、覆盖广、速率低,适合小数据量低频次上报。','慢但省电的网。','network'],
  ['lora','LoRa','Long Range','一种非授权频段的低功耗广域通信技术,可自建网络。','自己搭的长距离小网。','network'],
  ['coverage','覆盖','Coverage','无线信号能够有效到达的范围与质量,直接影响终端在线率。','信号够不够得着。','network'],
  ['communication-selection','通信选型','Communication Selection','按业务时延、带宽、可靠性、覆盖与成本等要求选择合适通信方式的过程。','挑一条合适的路。','network'],

  // 载波
  ['hplc','HPLC','High-speed Power Line Carrier','高速电力线载波,利用低压电力线传输数据,是用电信息采集的主要本地通信方式。','用电线当网线。','plc'],
  ['power-line-carrier','电力线载波','Power Line Carrier','把数据调制到电力线上传输的通信方式,无需额外布线。','有电的地方就能通信。','plc'],
  ['concentrator','集中器','Data Concentrator','台区中汇聚多只电能表数据并向上传输的设备。','台区的小管家。','plc'],
  ['topology-identification','拓扑识别','Topology Identification','通过通信与电气特征自动判断台区下电表与分支的挂接关系。','自动画出接线关系。','plc'],
  ['dual-mode','双模通信','Dual-mode Communication','同时支持载波与无线两种通道,按条件择优或互补使用。','两条路都留着。','plc'],
  ['last-mile','最后一公里','Last Mile','从集中设备到最末端终端之间的一段通信,往往是最难保障的部分。','最难走的那一小段。','plc'],

  // 传感器与终端
  ['sensor','传感器','Sensor','把温度、湿度、位移、气体等物理量转换为可传输电信号的器件。','把物理世界翻译成数据。','terminal'],
  ['ttu','台区智能融合终端','Station Area Smart Terminal','集配变监测、用电采集、计量与边缘计算于一体的台区侧综合终端。','台区的全能小盒子。','terminal'],
  ['micro-environment','微环境监测','Micro-environment Monitoring','对设备柜内、机房局部的温度湿度等微小环境进行的监测。','柜子里那点小气候。','terminal'],
  ['partial-discharge','局部放电','Partial Discharge','绝缘内部或表面发生的局部放电现象,是设备绝缘劣化的重要征兆。','绝缘要坏的早期信号。','terminal'],
  ['tilt-sensor','倾角传感器','Tilt Sensor','测量杆塔、支架等结构倾斜角度的传感器,用于形变监测。','量歪了多少度。','terminal'],
  ['water-immersion','水浸监测','Water Immersion Monitoring','对电缆沟、机房等场所积水情况的监测与报警。','进水了要马上知道。','terminal'],
  ['door-magnetic','门磁','Door Magnetic Contact','通过磁感应判断机柜、房门开合状态的简单可靠的传感装置。','门开没开它知道。','terminal'],
  ['sensor-selection','传感器选型','Sensor Selection','按量程、精度、环境适应性、供电与通信方式选择合适的传感器。','挑对那个能用的。','terminal'],

  // 边缘
  ['edge-computing','边缘计算','Edge Computing','在靠近数据源的现场侧完成计算与决策,减少上传数据量与响应时间。','就近把活干了。','edge'],
  ['edge-gateway','边缘网关','Edge Gateway','部署在现场、负责多类终端接入、协议转换与数据预处理的计算设备。','现场的翻译加调度。','edge'],
  ['protocol-conversion','协议转换','Protocol Conversion','把不同设备使用的通信协议统一转换为平台可识别的格式。','把方言翻成普通话。','edge'],
  ['edge-inference','边缘推理','Edge Inference','在边缘设备上运行轻量模型完成识别与判断,不必把原始数据全部上传。','在现场就把结论算出来。','edge'],
  ['breakpoint-resume','断点续传','Breakpoint Resume','通信中断期间本地暂存数据,恢复后从断点继续上传的机制。','断了也不丢数。','edge'],
  ['edge-ops','边缘运维','Edge Operations','对分散部署的边缘节点进行配置下发、状态监控与远程升级的管理工作。','远程照看一堆小盒子。','edge'],

  // 平台
  ['iot-platform','物联网平台','IoT Platform','承担设备接入、数据管理、规则计算与应用开放职能的中间平台。','设备与应用的中间人。','platform'],
  ['things-model','物模型','Thing Model','用属性、事件与服务三个维度对一类设备能力进行标准化描述的数据模型。','给设备写一份标准说明书。','platform'],
  ['device-shadow','设备影子','Device Shadow','在平台上保存的设备最新状态副本,即使设备离线也能查询与下发期望值。','设备的云端替身。','platform'],
  ['device-access','设备接入','Device Access','设备通过指定协议与鉴权方式连接到平台的过程。','让设备进门登记。','platform'],
  ['rule-engine','规则引擎','Rule Engine','按预设条件对上报数据做判断并触发动作的机制。','if 这样 then 那样。','platform'],
  ['ota','OTA','Over-The-Air Upgrade','通过网络对现场设备的固件进行远程升级。','不用跑现场就能升级。','platform'],
  ['open-api','开放接口','Open API','平台向业务系统提供的数据与控制接口,是价值兑现的出口。','数据从哪出去。','platform'],
  ['digital-twin','数字孪生','Digital Twin','在数字空间建立与物理对象对应的模型,用于状态映射与仿真推演。','给设备建个数字分身。','platform'],

  // 安全
  ['security-access-zone','安全接入区','Security Access Zone','终端接入电力内网前必须经过的安全隔离与认证区域。','进门之前的安检口。','security'],
  ['vertical-encryption','纵向加密','Vertical Encryption','在上下级节点之间对传输数据进行的加密保护,防止数据被窃取或篡改。','上下级之间说悄悄话。','security'],
  ['security-certificate','安全认证装置','Security Authentication Device','对终端身份进行证书认证的设备,确保只有合法终端才能接入。','查验身份证的岗亭。','security'],
  ['logical-isolation','逻辑隔离','Logical Isolation','通过技术手段使两个网络在逻辑上不能直接互通,只允许受控的数据交换。','看着连着其实过不去。','security'],
  ['classified-protection','等级保护','Classified Protection','按信息系统的重要程度分级并实施相应安全保护要求的制度。','按重要程度配保安。','security'],
  ['security-protection','电力监控系统安全防护','Power Monitoring System Security Protection','针对电力监控系统提出的安全分区、网络专用、横向隔离、纵向认证等要求。','生产系统的安全规矩。','security'],

  // 场景
  ['electricity-information-collection','用电信息采集','Electricity Information Collection','对电能表数据进行的自动采集、传输与处理,是感知层规模最大的应用。','把每块表的数据收回来。','scenes'],
  ['distribution-automation-scene','配电自动化','Distribution Automation','利用终端与通信实现对配电网运行状态的监测、故障隔离与恢复供电。','配网自己会判断故障。','scenes'],
  ['charging-pile','充电桩','Charging Pile','为电动汽车提供充电服务的设备,其运行状态与计量需接入平台管理。','给车充电的那个桩。','scenes'],
  ['ordered-charging','有序充电','Ordered Charging','在配网容量约束下对充电时间与功率进行调度,避免集中冲击。','排队充,别一起上。','scenes'],
  ['distributed-pv-monitoring','分布式光伏监测','Distributed PV Monitoring','对分布式光伏发电与并网状态进行的采集与监测。','屋顶电站也要看得见。','scenes'],
  ['dynamic-environment','动环监测','Dynamic Environment Monitoring','对机房动力设备与运行环境进行的集中监测与告警。','机房的体温和心跳。','scenes'],
  ['cable-anti-breaking','光缆防外破','Optical Cable Anti-breaking','通过监测与巡查手段防止外力施工等造成光缆中断。','别把线挖断了。','scenes'],
  ['unified-platform','统一接入平台','Unified Access Platform','把不同专业、不同协议的终端统一接入与管理的平台,避免重复建设。','别再各建各的。','scenes'],

  // 数据治理与数据质量
  ['data-quality','数据质量','Data Quality','数据在完整性、准确性、及时性与一致性等方面满足使用要求的程度。','数据到底能不能信。','dataq'],
  ['point-measurement','点位与量测','Point and Measurement','一个可独立采集的量测点及其数值,是感知数据的最小单位。','数据的原子。','dataq'],
  ['time-stamp-alignment','时标与对齐','Timestamp and Alignment','为每条数据打上时间标记,并把不同来源的数据按时间轴对齐的处理。','先把表对准。','dataq'],
  ['missing-data','数据缺失','Missing Data','应上报而未上报、或上报为空值的数据,是最常见的数据质量问题。','该有的没有。','dataq'],
  ['data-jump','数据跳变','Data Jump','相邻采样值出现不合常理的突变,往往由通信误码或设备异常引起。','数字突然抽风。','dataq'],
  ['bad-data','坏数据','Bad Data','明显偏离真实运行状态、不能直接参与计算与判断的数据。','看着像真的,其实是假的。','dataq'],
  ['caliber-unification','口径统一','Caliber Unification','对同一指标在不同系统中的统计范围、时点与算法作出统一约定。','同一个词说的是同一件事。','dataq'],
  ['data-cleaning','数据清洗','Data Cleaning','对缺失、异常与重复数据进行识别、修正或标记的处理过程。','把脏数据挑出去。','dataq'],
  ['quality-indicator','数据质量指标','Data Quality Indicator','用完整性、准确率、及时率等可量化指标衡量数据质量的方式。','好不好用数字说话。','dataq'],
  ['master-data','主数据','Master Data','描述设备、台区、客户等核心对象的基础数据,是全站数据对齐的基准。','大家共用的那本名册。','dataq'],
  ['data-asset','数据资产','Data Asset','能够被识别、管理并持续产生价值的数据资源。','数据也是家当。','dataq'],

  // 感知层安全(补)
  ['terminal-admission','终端准入','Terminal Admission','对申请接入的终端进行身份核验并决定是否放行的控制过程。','不是接上就能进。','security'],
  ['data-egress','数据出域','Data Egress','数据从生产控制区或本专业系统向外传递时受到的范围与方式约束。','数据能走到哪儿去。','security'],

  // 运维与缺陷处置
  ['sensing-ops','感知层运维','Sensing O&M','对现场终端、通信与接入链路进行的日常监视、巡视、消缺与优化工作。','建完之后谁管。','ops'],
  ['asset-ledger','台账','Asset Ledger','记录设备与终端型号、位置、归属与状态的基础档案。','现场到底装了什么。','ops'],
  ['patrol-inspection','巡视','Patrol Inspection','按周期对现场设备进行的目视与检测检查。','定期去现场看一眼。','ops'],
  ['fault-dispatch','派单','Fault Dispatch','把监测发现的异常按责任边界分配给相应班组处理的过程。','这事该谁去。','ops'],
  ['onsite-handling','现场处置','On-site Handling','到现场对故障终端进行排查、修复或更换的作业。','上门把问题解决掉。','ops'],
  ['spare-parts','备品备件','Spare Parts','为缩短故障恢复时间而储备的易损件与整机。','手里得有货。','ops'],
  ['change-management','变更管理','Change Management','对现场设备、配置与参数的任何改动进行审批、记录与同步的过程。','改了要留痕。','ops'],
  ['ops-kpi','运维指标','Operations KPI','衡量运维工作成效的量化指标,如在线率、消缺及时率与重复故障率。','干得好不好用数说话。','ops'],
  ['outsourcing','外委运维','Outsourced O&M','把部分运维工作委托给外部单位承担的方式,需明确责任与考核。','请人帮忙也得管。','ops'],
  ['work-order-loop','工单闭环','Work Order Closed Loop','从异常发现、派单、处置、复核到归档的完整处理链路。','每一单都要有个结果。','ops'],

  // 交付
  ['scheme-design','方案设计','Scheme Design','从业务需求出发确定感知对象、终端选型、通信方式与平台对接的整体方案。','先想清楚怎么搭。','delivery'],
  ['cost-composition','造价构成','Cost Composition','项目投资中终端、通信、平台、施工与运维各部分费用的组成。','钱花在哪几块。','delivery'],
  ['joint-debugging','联调','Joint Debugging','在各方设备与系统之间进行的接口与流程贯通测试。','大家一起对一遍。','delivery'],
  ['acceptance','验收','Acceptance','按合同与标准对建成系统进行的检查与确认。','完工了要签字。','delivery'],
  ['ops-indicator','运营指标','Operations Indicator','衡量系统建成后运行效果与价值的量化指标。','建完到底有没有用。','delivery'],
  ['project-risk','项目风险','Project Risk','项目实施过程中可能导致进度、成本或效果偏差的因素。','哪里可能出问题。','delivery'],
  ['sensing-intelligence','感知智能化','Sensing Intelligence','从单纯采集数据走向自动识别、预测与决策的演进方向。','从看得见到看得懂。','delivery'],
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
let s = '/* 模块元数据 + 学习路径(电力物联网与感知层)(自动生成,勿手改) */\n';
s += 'window.IOT = window.IOT || {};\n';
s += 'IOT.modules = ' + J(mods) + ';\n';
s += 'IOT.path = ' + J(path_) + ';\n';
s += 'IOT.totalLessons = IOT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(电力物联网与感知层)(自动生成) {id,name,en,def,analogy,module} */\nwindow.IOT = window.IOT || {};\nIOT.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nIOT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
