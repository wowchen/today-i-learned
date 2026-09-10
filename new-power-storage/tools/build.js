/* 新型电力系统与储能 · 单一数据源生成器(克隆 AI+电力站引擎,命名空间 NPS)。
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
  ['guide','导览','怎么用这个站、新型电力系统是什么、学习路线','基础','Guide'],
  ['basics','概念基础','双碳目标、能源转型、源网荷储、电力电量平衡','基础','Basics'],
  ['sources','电源侧变化','高比例新能源、风光出力特性、火电转型、电源结构','核心','Generation Side'],
  ['grid','电网侧变革','特高压、柔性输电、有源配电网、微电网','核心','Grid Side'],
  ['stability','稳定与安全','惯量下降、频率与电压稳定、构网型、宽频振荡','核心','Stability'],
  ['storebasic','储能总论','为什么需要储能、储能分类、时长、度电成本','核心','Storage Basics'],
  ['storetech','储能技术路线','抽蓄、锂电、液流、压缩空气、飞轮、储热','核心','Storage Tech'],
  ['storesys','储能系统集成','电芯、PCS、BMS、EMS、热管理、消防','核心','Integration'],
  ['storeapp','储能应用场景','电源侧、电网侧、用户侧、共享储能、工商业储能','应用','Applications'],
  ['storeops','储能运维与安全','状态监测、SOH评估、热失控、梯次利用与回收','应用','O&M and Safety'],
  ['market','电力市场与商业模式','现货、辅助服务、容量电价、峰谷套利、绿证、CCER','应用','Market'],
  ['vpp','虚拟电厂与需求响应','聚合资源、可调负荷、需求响应、车网互动','应用','VPP and DR'],
  ['digital','数字化与智能化','储能云平台、数字孪生、大数据、边缘计算、安全预警','进阶','Digital'],
  ['hydrogen','氢能与长时储能','绿氢、电解槽、掺氢燃烧、燃料电池、长时储能','进阶','Hydrogen'],
  ['policy','政策与标准','储能政策、并网标准、安全规程、市场规则、碳核算','进阶','Policy'],
  ['future','挑战与展望','成本曲线、体制机制、产业生态、零碳电力、标准体系','前沿','Future'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 概念基础
  ['dual-carbon','双碳','Dual Carbon','碳达峰与碳中和的总称:中国承诺 2030 年前碳达峰、2060 年前碳中和。','先把排放到顶,再降到零。','basics'],
  ['new-power-system','新型电力系统','New-type Power System','以新能源为供给主体、源网荷储协同互动、数字化智能化的新一代电力系统。','新能源当家作主的电网。','basics'],
  ['energy-transition','能源转型','Energy Transition','能源结构从化石能源为主转向清洁低碳能源为主的历史过程。','换赛道。','basics'],
  ['source-grid-load-storage','源网荷储','Source-Grid-Load-Storage','把电源、电网、负荷、储能四类要素统筹规划、协同运行的一体化模式。','四方一起打配合。','basics'],
  ['power-balance','电力电量平衡','Power Balance','电力系统任意时刻发电出力与用电负荷(含损耗)必须相等的基本约束。','发多少用多少。','basics'],
  ['penetration','新能源渗透率','Renewable Penetration','新能源发电量占全社会用电量的比例,是衡量转型进度的核心指标。','新能源占多大份额。','basics'],
  ['flexibility','灵活性资源','Flexibility','能快速增减出力或用电、用来平抑供需波动的资源,如储能、可调负荷、灵活煤电。','能屈能伸的量。','basics'],
  ['n-1','N-1 准则','N-1 Criterion','电网安全校核原则:任一元件(线路、变压器、机组)故障,系统仍需保持稳定供电。','坏一个也撑得住。','basics'],
  ['clean-energy','清洁能源','Clean Energy','不产生或极少产生碳排放的能源,含水电、风电、光伏、核电等。','干净的能源。','basics'],
  ['electricity-consumption','全社会用电量','Total Electricity Consumption','一定时期内全社会所有终端用电之和,是观察经济与能源转型的晴雨表。','全社会的用电总账。','basics'],

  // 电源侧变化
  ['vre','波动性可再生能源','Variable Renewable Energy','出力随天气变化的可再生能源,主要是风电和光伏,也叫间歇性电源。','看天吃饭的电。','sources'],
  ['curtailment','弃风弃光','Curtailment','因消纳能力不足而被迫限制风电、光伏出力的现象,俗称弃电。','发得出、用不掉。','sources'],
  ['thermal-flex','煤电灵活性改造','Thermal Flexibility Retrofit','对煤电机组改造,使其能更低负荷运行、更快启停,为新能源腾出空间。','让火电学会慢跑。','sources'],
  ['distributed-pv','分布式光伏','Distributed PV','建在用户侧、就地发电就地消纳的光伏,典型是屋顶光伏。','房顶上的电站。','sources'],
  ['offshore-wind','海上风电','Offshore Wind','在海上建设的风电场,风速更稳、年利用小时数更高,造价也更贵。','海上的大风车。','sources'],
  ['peak-valley','峰谷差','Peak-Valley Difference','一天中最高负荷与最低负荷之差,是调峰需求与储能价值的主要来源。','最高减去最低。','sources'],
  ['capacity-credit','有效容量','Capacity Credit','一类电源在系统高峰时段能可靠贡献的容量,新能源的这个指标偏低。','关键时刻顶得上多少。','sources'],
  ['base-load','基荷与峰荷','Base Load and Peak Load','负荷曲线上长期稳定的部分叫基荷,高峰时段的那部分叫峰荷。','一直用的和尖峰用的。','sources'],

  // 电网侧变革
  ['uhv','特高压','Ultra-High Voltage','±800 千伏及以上直流、1000 千伏交流及以上的输电技术,用于远距离大容量送电。','电力的高速公路。','grid'],
  ['facts','柔性交流输电','FACTS','用电力电子装置动态调节电压、阻抗与相角,提升既有线路的输送能力与可控性。','给电网装个调节阀。','grid'],
  ['vsc-hvdc','柔性直流','VSC-HVDC','基于电压源换流器的直流输电,可独立控制有功与无功,适合新能源送出与弱电网接入。','能自己控的直流。','grid'],
  ['active-dn','有源配电网','Active Distribution Network','接入了分布式电源、储能与可调负荷的配电网,潮流可以双向流动。','配网里也有电了。','grid'],
  ['microgrid','微电网','Microgrid','由分布式电源、储能、负荷与控制系统组成,可并网也可孤岛运行的小型电力系统。','能单飞的小电网。','grid'],
  ['da','配电自动化','Distribution Automation','用自动化装置与通信实现配网故障定位、隔离与恢复供电,常与馈线自动化配合。','配网的自动驾驶。','grid'],
  ['transformer','主变压器','Main Transformer','变电站里实现电压变换的核心设备,容量大、价值高、故障影响面广。','变电站的心脏。','grid'],

  // 稳定与安全
  ['inertia','惯量','Inertia','同步发电机转子储存的旋转动能,能在扰动瞬间自动抵抗频率变化。','电网的体重。','stability'],
  ['rocof','频率变化率','RoCoF','扰动后频率变化的速率,单位赫兹每秒;系统惯量越小,这个值越大。','掉频有多快。','stability'],
  ['freq-stability','频率稳定','Frequency Stability','系统频率维持在额定值附近的能力,靠惯量与一次调频共同支撑。','电网的心跳。','stability'],
  ['grid-forming','构网型','Grid-Forming','像同步机一样主动建立电压与频率参考的变流器控制方式,可提供惯量支撑。','能当老大的逆变器。','stability'],
  ['grid-following','跟网型','Grid-Following','跟随电网电压相位注入电流的变流器控制方式,依赖外部电网提供参考。','跟着电网走的逆变器。','stability'],
  ['oscillation','宽频振荡','Wideband Oscillation','新能源与电力电子设备相互作用引起、跨越数赫兹到数千赫兹的振荡现象。','电网的怪频率抖动。','stability'],
  ['black-start','黑启动','Black Start','系统全停后不依赖外部电源自行恢复供电的能力,储能与水电常作为黑启动电源。','自己把自己救活。','stability'],
  ['lvrt','低电压穿越','Low Voltage Ride Through','电网电压骤降时新能源机组不脱网、继续支撑一段时间的能力。','电压跌了也别跑。','stability'],

  // 储能总论
  ['ess','储能系统','Energy Storage System','把电能转化储存、需要时再释放回电网或负荷的系统,统称储能。','超大号的充电宝。','storebasic'],
  ['power-energy-type','功率型与能量型','Power-type and Energy-type','功率型储能短时大功率、适合调频;能量型储时长、适合调峰与套利。','爆发型与耐力型。','storebasic'],
  ['duration','储能时长','Storage Duration','储能额定能量与额定功率的比值,常以小时计,是区分短时与长时储能的关键参数。','能放几个小时。','storebasic'],
  ['lcos','平准化储能成本','LCOS','把全生命周期投资、运维、充电与残值折算到每放出一度电的成本,用于横向比较。','放出一度电要多少钱。','storebasic'],
  ['peak-shaving','调峰','Peak Shaving','负荷高峰放出、低谷充入,削峰填谷以减小峰谷差的运行方式。','削峰填谷。','storebasic'],
  ['freq-regulation','调频','Frequency Regulation','快速增减出力以维持系统频率在允许范围内,对响应速度要求最高。','盯着频率救火。','storebasic'],
  ['soc','荷电状态','State of Charge','电池当前剩余电量占额定容量的百分比,通俗说就是还剩几格电。','还剩几格电。','storebasic'],

  // 储能技术路线
  ['phes','抽水蓄能','Pumped Hydro Storage','低谷抽水到上库、高峰放水发电,目前装机占比最大、寿命最长、度电成本最低的储能。','把水当成电池。','storetech'],
  ['lib','锂离子电池','Lithium-ion Battery','靠锂离子在正负极间嵌入脱出实现充放电的电池,能量密度高、响应快,是新型储能主力。','当前最主流的储能电池。','storetech'],
  ['lfp','磷酸铁锂','LFP','正极用磷酸铁锂的锂电池,循环寿命长、安全性好、成本低,是储能电站首选。','耐造的储能电池。','storetech'],
  ['nmc','三元锂','NMC','正极含镍钴锰的锂电池,能量密度高,但热稳定性与成本不占优,多用于动力电池。','能跑得远的电池。','storetech'],
  ['sodium-ion','钠离子电池','Sodium-ion Battery','用钠离子替代锂离子,资源丰富、低温性能好,能量密度略低。','不吃锂的电池。','storetech'],
  ['flow-battery','液流电池','Flow Battery','电解液储存在外部罐体、循环流过电堆反应的电池,功率与容量可独立设计,适合长时。','把电量装在罐子里。','storetech'],
  ['caes','压缩空气储能','Compressed Air Energy Storage','用电把空气压缩储存,需要时释放推动透平发电;新型技术多采用非补燃与储热耦合。','把电存成高压气。','storetech'],
  ['flywheel','飞轮储能','Flywheel Storage','用电机把转子加速旋转来储能,功率密度高、响应快、寿命长,但储能量小。','把电存成转速。','storetech'],
  ['thermal-storage','储热','Thermal Storage','把电或余热转为热能储存,常见熔盐储热,可与光热发电、火电调峰耦合。','把电存成热能。','storetech'],
  ['gravity-storage','重力储能','Gravity Storage','用提升重物储存势能、下落时发电的储能方式,原理简单、寿命长。','把电存成高度。','storetech'],

  // 储能系统集成
  ['cell','电芯','Cell','电池的最小储能单元,决定整站的容量、安全与寿命基础。','电池的最小砖块。','storesys'],
  ['pcs','储能变流器','PCS','连接电池直流侧与电网交流侧的电力电子装置,负责充放电与并网控制。','储能的翻译官。','storesys'],
  ['bms','电池管理系统','BMS','监测并管理每颗电芯的电压、温度、SOC 与均衡,是电池的安全大脑。','电池的监护仪。','storesys'],
  ['ems-storage','能量管理系统','EMS','储能站的调度大脑,根据策略与市场价格决定何时充、何时放、放多少。','储能站的指挥中心。','storesys'],
  ['container','储能集装箱','Container','把电池簇、变流器、热管理与消防集成进标准集装箱的预制式储能单元。','拼装好的大电池箱。','storesys'],
  ['thermal-management','热管理','Thermal Management','用风冷或液冷把电芯温度控制在合理区间、减小温差,直接影响寿命与安全。','给电池吹空调。','storesys'],
  ['fire-safety','消防与安全','Fire Safety','储能站的分级预警、灭火与防爆设计,是新型储能绕不开的硬约束。','储能站的灭火队。','storesys'],
  ['round-trip','循环效率','Round-trip Efficiency','充进去的电与放出来的电之比,锂电通常约 85% 到 90%,抽蓄约 75%。','充放一次损耗多少。','storesys'],
  ['degradation','容量衰减','Capacity Degradation','电池随循环与日历老化导致的可用容量下降,通常按首年与全生命周期分别考核。','电池一年不如一年。','storesys'],
  ['dod','放电深度','Depth of Discharge','每次放电放掉的容量占总容量的比例,放电越深循环寿命越短。','一次放电用掉多少。','storesys'],

  // 储能应用场景
  ['gen-side','电源侧储能','Generation-side Storage','建在新能源电站内,主要减少弃电、平滑出力、参与调频的储能。','给风光配个仓库。','storeapp'],
  ['grid-side','电网侧储能','Grid-side Storage','建在变电站或汇集站,主要提供调峰调频、缓解阻塞与提升供电能力的储能。','电网的缓冲池。','storeapp'],
  ['user-side','用户侧储能','User-side Storage','建在用户内部,用于峰谷套利、需量管理与后备供电的储能。','装在用户家里的电池。','storeapp'],
  ['shared-storage','共享储能','Shared Storage','一个储能电站同时为多个新能源电站提供租赁服务的模式,提高利用率与收益。','一个仓库多家用。','storeapp'],
  ['independent-storage','独立储能','Independent Storage','不与特定电源绑定、作为独立市场主体直接参与电力市场的储能电站。','独立身份的储能。','storeapp'],
  ['ci-storage','工商业储能','Commercial and Industrial Storage','面向工厂与园区,靠峰谷价差与需量管理回收投资的用户侧储能。','工厂的存钱罐。','storeapp'],
  ['fm-storage','调频储能','Frequency Regulation Storage','专为辅助服务市场调频需求配置的储能,要求高倍率与快速响应,通常是功率型。','专治频率波动。','storeapp'],

  // 储能运维与安全
  ['soh','电池健康度','State of Health','电池当前可用容量与额定容量之比,反映老化程度,是运维与评估的核心指标。','电池的老化指数。','storeops'],
  ['soc-estimation','SOC 估算','SOC Estimation','用电压、电流、温度等数据推算电池剩余电量的算法,精度直接影响可用容量与安全。','猜还剩多少电。','storeops'],
  ['thermal-runaway','热失控','Thermal Runaway','电池内部放热反应失控、温度急剧上升并可能起火爆炸的连锁过程,是储能最大安全风险。','电池自己烧起来了。','storeops'],
  ['condition-monitoring','状态监测','Condition Monitoring','对电压、温度、内阻、气体等参数在线采集分析,用于早期发现异常。','给电池做体检。','storeops'],
  ['echelon-use','梯次利用','Echelon Utilization','把退役的动力电池降级用于性能要求更低的场景,延长其全生命周期价值。','退下来的电池再上岗。','storeops'],
  ['recycling','电池回收','Battery Recycling','对报废电池进行拆解与材料再生,回收锂、镍、钴等有价金属,是产业闭环的最后一环。','把电池拆回原料。','storeops'],

  // 电力市场与商业模式
  ['spot-market','电力现货市场','Electricity Spot Market','以日前与实时竞价形成分时电价的电力市场,价格波动是储能收益的核心来源。','按小时定价的电市。','market'],
  ['ancillary-service','辅助服务市场','Ancillary Services Market','为调频、调峰、备用、无功等系统服务付费的市场机制。','给稳电网的活儿付钱。','market'],
  ['capacity-price','容量电价','Capacity Price','按可用容量而非发电量付费的机制,让调节性电源与储能回收固定成本。','不用也给你钱。','market'],
  ['tou-price','分时电价','Time-of-Use Tariff','按峰、平、谷时段设定不同电价的机制,峰谷价差是用户侧储能的经济基础。','不同时段不同价。','market'],
  ['arbitrage','峰谷套利','Peak-Valley Arbitrage','低谷充电、高峰放电赚取价差收益,当前用户侧储能最主要的盈利模式。','低买高卖。','market'],
  ['green-certificate','绿证','Green Certificate','可再生能源电力消费的唯一凭证,用于证明用电的绿色属性。','绿电的身份证。','market'],
  ['green-power','绿电交易','Green Power Trading','用户直接购买风电、光伏等绿色电力的交易品种,同时获得对应绿证。','买电顺便买绿。','market'],
  ['ccer','CCER','China Certified Emission Reduction','国家核证自愿减排量,减排项目经审定后可交易,用于碳市场履约与抵销。','减排量能卖钱。','market'],

  // 虚拟电厂与需求响应
  ['vpp','虚拟电厂','Virtual Power Plant','把分布式光伏、储能、可调负荷等分散资源聚合成一个整体,参与电网调度与市场交易。','拼起来的电厂。','vpp'],
  ['demand-response','需求响应','Demand Response','用户根据电价或邀约信号主动调整用电并获得补偿的机制。','少用一点也是帮忙。','vpp'],
  ['load-aggregator','负荷聚合商','Load Aggregator','把分散的用户负荷聚合起来、代表其参与市场与需求响应的市场主体。','散户的代言人。','vpp'],
  ['v2g','车网互动','Vehicle to Grid','电动汽车既能充电也能向电网放电,把车载电池变成移动储能资源。','电动车反向供电。','vpp'],
  ['flexible-load','可调负荷','Flexible Load','用电时间或功率可以灵活调整的负荷,如空调、充电桩、工业电炉。','能挪时间的用电。','vpp'],
  ['dr-baseline','基线负荷','Baseline Load','用于衡量需求响应效果的用户本来会用多少电的推算基准。','不参与会怎样。','vpp'],
  ['aggregation','资源聚合','Aggregation','把大量小容量分散资源打包成满足市场准入门槛的整体。','小散并成大。','vpp'],

  // 数字化与智能化
  ['digital-twin','数字孪生','Digital Twin','物理设备或系统的虚拟镜像,实时映射运行状态并支持仿真推演与预测。','设备的分身。','digital'],
  ['storage-cloud','储能云平台','Storage Cloud Platform','把分散的储能电站接入云端统一监控、策略下发与运营分析的平台。','储能站的总控室。','digital'],
  ['big-data','电力大数据','Power Big Data','来自计量、调度、气象、设备等海量数据的集合与分析应用。','电力数据的矿。','digital'],
  ['edge-computing','边缘计算','Edge Computing','在靠近数据源处就地计算与决策,降低时延、节省带宽、提升可靠性。','就地算。','digital'],
  ['safety-warning','安全预警','Safety Warning','用数据与模型提前识别风险并分级告警,争取处置时间。','提前拉警报。','digital'],
  ['smart-om','智能运维','Smart O&M','用监测数据、模型与自动化工单提升运维效率、降低人工巡检成本。','运维不用全靠人跑。','digital'],

  // 氢能与长时储能
  ['green-hydrogen','绿氢','Green Hydrogen','用可再生能源电解水制取的氢,制取过程几乎不产生碳排放。','最干净的氢。','hydrogen'],
  ['electrolyzer','电解槽','Electrolyzer','用直流电把水分解成氢和氧的装置,是电解水制氢的核心设备。','用电把水拆开。','hydrogen'],
  ['hydrogen-storage','氢储能','Hydrogen Energy Storage','把富余绿电制氢储存,需要时再发电或作为工业原料,适合跨天跨季的长时储能。','把电存成氢气。','hydrogen'],
  ['hydrogen-blending','掺氢燃烧','Hydrogen Blending','在天然气或煤电机组燃料中掺入一定比例氢气燃烧,降低碳排放。','燃气里兑点氢。','hydrogen'],
  ['fuel-cell','燃料电池','Fuel Cell','把氢的化学能直接转成电能的装置,效率高、无燃烧,排放主要是水。','用氢发电。','hydrogen'],
  ['long-duration','长时储能','Long-Duration Storage','通常指持续放电 4 小时以上、用于跨天或跨季节调节的储能技术路线。','能放一整天的储能。','hydrogen'],

  // 政策与标准
  ['new-storage-policy','新型储能政策','New Energy Storage Policy','国家与地方关于新型储能规划、电价、补贴与市场准入的政策体系,以关于加快推动新型储能发展的指导意见等文件为框架。','储能的政策底座。','policy'],
  ['grid-connection-std','并网技术标准','Grid Connection Standard','规定储能电站并网电压、电能质量、保护与调度通信等技术要求的国家标准与行业标准。','并网的规矩。','policy'],
  ['safety-code','储能安全规程','Safety Code','针对储能电站消防设计、运行维护与应急处置的强制性或推荐性规程要求。','安全底线。','policy'],
  ['mandatory-std','强制性国家标准','Mandatory National Standard','必须执行、不得低于的国家标准,是产品与工程准入的硬门槛。','不能讨价还价的国标。','policy'],
  ['market-rule','电力市场规则','Market Rules','规定市场主体准入、报价、出清与结算方式的规则体系,是储能参与市场的依据。','市场的游戏规则。','policy'],
  ['carbon-accounting','碳核算','Carbon Accounting','按统一方法学计算企业或产品碳排放量的过程,是碳市场与绿证的基础。','把排放算清楚。','policy'],

  // 挑战与展望
  ['cost-curve','储能成本曲线','Cost Curve','储能系统单位造价与度电成本随规模扩大和技术进步而下降的趋势。','越来越便宜。','future'],
  ['mechanism','体制机制','Institutional Mechanism','电价、市场、调度与考核制度等非技术因素,常是新型储能落地的真实瓶颈。','技术之外的坎。','future'],
  ['ecosystem','产业生态','Industry Ecosystem','从材料、电芯、集成到运营与回收的完整产业链及其协作网络。','一条链上的所有玩家。','future'],
  ['zero-carbon','零碳电力','Zero-carbon Electricity','发电环节基本不产生碳排放的电力供给结构,是碳中和的核心图景。','不冒烟的电力。','future'],
  ['standardization','标准体系','Standards System','覆盖规划、设计、并网、运行、安全与回收的标准集合,决定产业能否规模化。','量产的前提条件。','future'],
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
s += 'window.NPS = window.NPS || {};\n';
s += 'NPS.modules = ' + J(mods) + ';\n';
s += 'NPS.path = ' + J(path_) + ';\n';
s += 'NPS.totalLessons = NPS.path.length;\n';

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
    let body = '/* ' + id + ' (自动生成) */\nNPS.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    bodies.push(body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* ---------- 命名空间自检(防克隆本站后 sed 替换遗漏:曾因残留他站命名空间导致整站崩溃) ---------- */
const termText = '/* 术语表(新型电力系统与储能)(自动生成) {id,name,en,def,analogy,module} */\nwindow.NPS = window.NPS || {};\nNPS.terms = ' + J(termObjs) + ';\n';
const genAll = s + termText + bodies.join('\n');
const NS = 'NPS';
const SIBLINGS = ['AIP', 'AIX', 'AGT', 'TCM', 'CCN', 'FIN', 'PRS', 'EMT', 'ML', 'DAT', 'WHS', 'GTR', 'LIT', 'TSP',
  'FIT', 'MUS', 'MATH', 'ECON', 'PSY', 'GEO', 'CG', 'CHS', 'EBD', 'EMS', 'FYP', 'PGF', 'PFIN',
  'SAD', 'SAN', 'SPM', 'NPD', 'HIT', 'ISL', 'ISPM', 'CDC', 'NH', 'AST', 'WAH'];
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
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 NPS.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
