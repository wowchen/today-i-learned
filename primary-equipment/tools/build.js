/* 输变电一次设备通识 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及设备参数、技术标准、试验规程与反措要求的具体内容,
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
  ['guide','导览','怎么用这个站、输变电一次设备讲什么、一次与二次怎么分工、学习路线','基础','Guide'],
  ['basics','一次设备总论','一次设备与二次设备的分工、额定电压与额定电流、绝缘水平、短路电流与动热稳定、选型原则','基础','Primary Equipment Overview'],
  ['transformer','变压器','变压器原理、油浸与干式、铁芯与绕组、套管、分接开关与调压、冷却方式、空载与负载损耗、负载率','核心','Power Transformer'],
  ['breaker','断路器与 GIS','断路器与灭弧原理、SF6 与真空、开断能力、操动机构、AIS 与 GIS 与 HGIS、重合闸','核心','Circuit Breaker and GIS'],
  ['switch','隔离开关与开合设备','隔离开关、接地开关、负荷开关、熔断器、组合电器、防误闭锁与五防','核心','Disconnectors and Switching Devices'],
  ['ctpt','互感器与测量','电流互感器、电压互感器、电容式电压互感器、变比与准确级、极性、二次负荷、电子式互感器','核心','Instrument Transformers'],
  ['arrester','避雷器与过电压','过电压分类、避雷器与金属氧化物避雷器、雷电与操作过电压、接地、绝缘配合','核心','Arresters and Overvoltage'],
  ['insulator','绝缘子与金具','绝缘子、复合与瓷绝缘子、爬电比距、绝缘子片数、污闪、金具','核心','Insulators and Fittings'],
  ['line','输电线路与导线电缆','架空线路与电力电缆、导线与钢芯铝绞线、弧垂与张力、杆塔、载流量、电晕','核心','Transmission Lines and Conductors'],
  ['busbar','母线与成套设备','母线、开关柜、环网柜、铠装式金属封闭开关设备、间隔、进线与出线、电缆终端','核心','Busbars and Switchgear'],
  ['layout','电气布置与主接线','电气主接线、单母线与双母线、桥式接线、一个半断路器接线、线路-变压器组、平面布置与间隔','进阶','Layout and Main Connection'],
  ['test','状态评价与试验','交接试验与预防性试验、局部放电、油中溶解气体分析、介质损耗与绝缘电阻、状态评价、在线监测与带电检测、状态检修','进阶','Testing and Condition Assessment'],
  ['lifecycle','全寿命周期管理','全寿命周期成本、资产管理、寿命周期、技术改造、退役报废、故障率与可用率、备品备件、拥有总成本','进阶','Life Cycle Management'],
  ['smart','智能运检与数字化','智能变电站、状态监测、巡检机器人与无人机巡检、感知终端、数字孪生、边缘计算、IEC 61850','应用','Smart O&M and Digitalization'],
  ['fault','典型故障与事故','短路与接地故障、雷击、过热、受潮、套管故障、机构故障、事故处理','应用','Typical Faults and Accidents'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['primary-equipment','一次设备','Primary Equipment','直接承担电能变换、输送、分配与开断任务的电气设备总称,如变压器、断路器、隔离开关、母线、线路。','真正干活的电气设备。','guide'],
  ['secondary-equipment','二次设备','Secondary Equipment','对一次设备做测量、监视、控制、保护与调节的设备,如互感器、继电保护、自动化装置、直流电源。','管着一次设备的那些设备。','guide'],
  ['substation','变电站','Substation','变换电压、汇集与分配电能,并实现对线路与设备控制保护的电力设施。','电的中转站。','guide'],
  ['switchyard','开关站','Switchyard','不装主变压器、只做线路汇集与分接的站,高压侧也称开闭所。','只分路、不换压的站。','guide'],
  ['voltage-level','电压等级','Voltage Level','电力系统规定的一组标准电压,用于分层送电与设备标准化。','电的高矮档次。','guide'],

  // 一次设备总论
  ['equipment-classification','一次设备分类','Classification of Primary Equipment','按功能把一次设备分为变换类(变压器)、开断类(断路器)、隔离类(隔离开关)、测量类(互感器)、保护类(避雷器)等。','按干活的性质分家。','basics'],
  ['rated-voltage','额定电压','Rated Voltage','设备设计所依据的电压,是绝缘水平与试验电压的基准。','设备标称能承受的电压。','basics'],
  ['rated-current','额定电流','Rated Current','设备在长期运行中允许持续通过的电流,决定载流与发热水平。','长期能流过多大的电流。','basics'],
  ['rated-capacity','额定容量','Rated Capacity','设备铭牌上标定的输出能力,变压器以视在功率表示。','铭牌上写的能力。','basics'],
  ['insulation-level','绝缘水平','Insulation Level','设备绝缘能承受的试验电压量级,与电压等级和绝缘配合有关。','绝缘能扛多高的电。','basics'],
  ['short-circuit-current','短路电流','Short-circuit Current','系统发生短路时流过的巨大电流,是设备校核的极端工况。','短路那一瞬间的大电流。','basics'],
  ['dynamic-stability','动稳定','Dynamic Stability','设备承受短路电流电动力冲击而不发生机械损坏的能力。','扛住短路时的机械冲击。','basics'],
  ['thermal-stability','热稳定','Thermal Stability','设备在短路电流持续时间内不发生产热损坏的能力。','扛住短路时的发热。','basics'],
  ['operation-mode','运行方式','Operating Mode','系统与设备所处的运行状态,如正常运行、检修、备用与事故后。','设备当前处于什么状态。','basics'],
  ['selection-principle','选型原则','Selection Principles','按电压等级、额定电流、短路水平、环境条件与运行要求综合选择设备的原则。','按什么标准挑设备。','basics'],

  // 变压器
  ['power-transformer','电力变压器','Power Transformer','利用电磁感应变换交流电压与电流的静止电气设备,是输变电的核心。','不转的电压变换器。','transformer'],
  ['oil-immersed-transformer','油浸式变压器','Oil-immersed Transformer','绕组与铁芯浸在变压器油中、靠油循环散热与绝缘的变压器,常见于户外。','泡在油里的变压器。','transformer'],
  ['dry-type-transformer','干式变压器','Dry-type Transformer','不用油、以空气或环氧树脂绝缘的变压器,多用于室内与防火要求高的场所。','不喝油的变压器。','transformer'],
  ['core','铁芯','Core','变压器中构成磁路的铁磁材料,分叠片式与卷铁芯。','导磁的那条路。','transformer'],
  ['winding','绕组','Winding','变压器的导电线圈,分高压绕组与低压绕组,是电能变换的直接承担者。','绕在铁芯上的铜线圈。','transformer'],
  ['bushing','套管','Bushing','把带电导体引出箱体并与箱体绝缘的部件,分纯瓷、油纸电容式等。','导体穿箱而过的绝缘通道。','transformer'],
  ['tap-changer','分接开关','Tap Changer','改变绕组匝数以调整变比的装置,分有载调压与无载调压。','调电压档位的开关。','transformer'],
  ['on-load-tap-changer','有载调压','On-load Tap Changer','在带负荷运行中切换分接、可连续调压的方式,常用于主变。','不停电就能调电压。','transformer'],
  ['transformer-cooling','变压器冷却方式','Transformer Cooling','以 ONAN、ONAF、OFAF、ODAF 等代号表示油循环与风冷的组合方式。','怎么给变压器降温。','transformer'],
  ['no-load-loss','空载损耗','No-load Loss','变压器励磁产生的铁损,与负载无关,又称铁损。','一通电就有的损耗。','transformer'],
  ['load-loss','负载损耗','Load Loss','绕组通过电流产生的铜损,随负载电流平方变化,又称铜损。','带载才有的损耗。','transformer'],
  ['transformer-load-rate','负载率','Load Rate','实际负载与额定容量之比,是判断主变是否过载或轻载的关键指标。','装了多少、用了多少。','transformer'],

  // 断路器与 GIS
  ['circuit-breaker','断路器','Circuit Breaker','能开断与关合正常电流和短路电流的开关设备,是保护系统的执行者。','能拉断短路电流的那个开关。','breaker'],
  ['sf6','六氟化硫','SF6','绝缘与灭弧性能优良的气体,广泛用于高压断路器与 GIS。','又绝缘又能灭弧的气体。','breaker'],
  ['vacuum-interrupter','真空灭弧室','Vacuum Interrupter','在真空中熄灭电弧的元件,多用于中压断路器与开关柜。','在真空里灭掉电弧。','breaker'],
  ['arc-extinguishing','灭弧','Arc Extinguishing','开断电流时把电弧迅速冷却、拉长并熄灭的过程,是断路器的核心能力。','把电弧弄灭。','breaker'],
  ['ais','空气绝缘开关设备','AIS','以空气为外绝缘、设备敞开布置的传统变电站形式。','敞开摆在空气里。','breaker'],
  ['gis','气体绝缘组合电器','GIS','把断路器、隔离开关、母线、互感器封闭在充 SF6 金属壳体内的成套设备。','把开关都装进金属罐里。','breaker'],
  ['hgis','混合绝缘开关设备','HGIS','介于 AIS 与 GIS 之间、母线敞开而断路器封闭的布置形式。','一半封闭一半敞开。','breaker'],
  ['breaking-capacity','开断能力','Breaking Capacity','断路器能安全开断的最大短路电流,是选型的硬指标。','能拉断多大的短路电流。','breaker'],
  ['operating-mechanism','操动机构','Operating Mechanism','驱动断路器分合闸的机构,分弹簧、液压、气动与永磁等类型。','给开关出力的那套机构。','breaker'],
  ['reclosing','重合闸','Reclosing','线路故障跳闸后自动重新合闸,以恢复瞬时故障供电。','跳了再自动合一次。','breaker'],

  // 隔离开关与开合设备
  ['disconnector','隔离开关','Disconnector','没有灭弧能力、只能在无载或小电流下开合的开关,用于形成明显断开点。','只能空着拉合的开关。','switch'],
  ['earthing-switch','接地开关','Earthing Switch','检修时把导体接地以释放残余电荷、保障作业安全的开关。','把电放掉接地。','switch'],
  ['load-switch','负荷开关','Load Switch','能开断正常负荷电流但不能开断短路电流的开关,常与熔断器配合。','能拉负荷、拉不了短路。','switch'],
  ['fuse','熔断器','Fuse','靠熔体过流熔断来切断电流的保护元件,成本低、动作一次需更换。','烧断自己来保护别人。','switch'],
  ['switch-fuse-combination','组合电器','Switch-fuse Combination','负荷开关与熔断器组合使用,兼顾开断负荷与切断短路。','一个拉闸一个保险。','switch'],
  ['interlock','防误闭锁','Interlock','防止误分合、带负荷拉隔离开关等误操作的机械与电气闭锁。','不让你按错。','switch'],
  ['five-prevention','五防','Five Preventions','防误分合断路器、防带负荷拉合隔离开关、防带电挂接地线、防带接地线合闸、防误入带电间隔。','五条不能犯的错。','switch'],

  // 互感器与测量
  ['current-transformer','电流互感器','Current Transformer','把大电流按比例变成小电流供测量与保护使用的设备,二次侧接近短路。','把大电流变小。','ctpt'],
  ['voltage-transformer','电压互感器','Voltage Transformer','把高电压按比例变成低电压供测量与保护使用的设备,二次侧接近开路。','把高电压变低。','ctpt'],
  ['cvt','电容式电压互感器','CVT','用电容分压再经电磁单元输出二次电压的电压互感器,兼作载波耦合。','用电容分压量电压。','ctpt'],
  ['transformation-ratio','变比','Ratio','互感器一次量与二次量之比,决定测量的折算关系。','一次和二次的倍数。','ctpt'],
  ['accuracy-class','准确级','Accuracy Class','互感器在额定条件下允许的误差等级,计量与保护要求不同。','量得准不准的等级。','ctpt'],
  ['polarity','极性','Polarity','互感器一次与二次电流或电压的相位对应关系,接反会导致保护误动。','方向对不对。','ctpt'],
  ['secondary-burden','二次负荷','Secondary Burden','接在互感器二次侧的负载,过大将影响准确级。','挂在互感器后面的负担。','ctpt'],
  ['electronic-transformer','电子式互感器','Electronic Transformer','输出数字或小电压信号的互感器,配合智能变电站使用。','直接给出数字量的互感器。','ctpt'],

  // 避雷器与过电压
  ['overvoltage','过电压','Overvoltage','系统中出现的超过最高工作电压的电压升高,分雷电与操作两类。','电压突然冲高。','arrester'],
  ['arrester','避雷器','Arrester','限制过电压、保护设备绝缘的装置,是绝缘配合的关键一环。','专门替设备挨电压的。','arrester'],
  ['moa','金属氧化物避雷器','MOA','以氧化锌阀片为核心、无间隙的避雷器,是目前的主流形式。','氧化锌做芯的避雷器。','arrester'],
  ['lightning-overvoltage','雷电过电压','Lightning Overvoltage','雷击线路或站内造成的过电压,幅值高、波前陡。','打雷带来的电压。','arrester'],
  ['switching-overvoltage','操作过电压','Switching Overvoltage','开关操作或故障引起的电磁暂态过电压,幅值相对较低、持续时间较长。','拉合闸引起的电压波动。','arrester'],
  ['grounding','接地','Grounding','把设备金属外壳或中性点与大地连接,用于泄流与安全。','把电导进地里。','arrester'],
  ['insulation-coordination','绝缘配合','Insulation Coordination','在设备绝缘水平与保护装置限压水平之间做协调,兼顾安全与经济。','让绝缘和避雷器配合好。','arrester'],

  // 绝缘子与金具
  ['insulator','绝缘子','Insulator','支撑导体并使其与地绝缘的部件,同时承受机械与电气负荷。','既撑得住又绝缘得住。','insulator'],
  ['composite-insulator','复合绝缘子','Composite Insulator','以硅橡胶伞裙与芯棒构成的绝缘子,防污性能好、重量轻。','硅橡胶做的绝缘子。','insulator'],
  ['ceramic-insulator','瓷绝缘子','Ceramic Insulator','以瓷为绝缘材料的传统绝缘子,机械强度高但易污闪。','瓷做的绝缘子。','insulator'],
  ['creepage-distance','爬电比距','Creepage Distance','绝缘子表面爬电路径长度与系统电压之比,反映抗污能力。','沿表面绕多远才爬过去。','insulator'],
  ['insulator-string','绝缘子片数','Insulator String Length','绝缘子串中元件数量,决定绝缘长度与爬距。','一串上有几片。','insulator'],
  ['pollution-flashover','污闪','Pollution Flashover','绝缘子表面积污受潮后绝缘下降导致的沿面闪络。','脏了再受潮就漏电。','insulator'],
  ['fitting','金具','Fittings','连接、固定、保护导线与绝缘子的金属附件总称。','把导线和绝缘子连起来的铁件。','insulator'],

  // 输电线路与导线电缆
  ['transmission-line','输电线路','Transmission Line','把电能从一处输送到另一处的通道,分架空线路与电缆线路。','电走的那条路。','line'],
  ['overhead-line','架空线路','Overhead Line','导线由杆塔架设在空中、以空气绝缘的输电线路。','架在天上的线。','line'],
  ['power-cable','电力电缆','Power Cable','带绝缘层与护套、可埋地或敷设于隧道中的输电载体,多用于城区与站内。','埋在地下的电线。','line'],
  ['conductor','导线','Conductor','承载电流的金属线材,常用铜、铝及铝合金。','导电的那根金属线。','line'],
  ['acsr','钢芯铝绞线','ACSR','以钢芯承担机械拉力、铝层导电的导线,是架空线路的主力。','钢芯加铝皮。','line'],
  ['sag','弧垂','Sag','档距内导线最低点与挂点连线之间的垂直距离,与温度和张力的平衡有关。','线垂下来多少。','line'],
  ['tension','张力','Tension','导线承受的拉力,与弧垂互为制约。','线被拉得多紧。','line'],
  ['tower','杆塔','Tower','支撑导线并保持对地及相互距离的结构,分直线塔、耐张塔、转角塔等。','把线撑起来的架子。','line'],
  ['ampacity','载流量','Ampacity','导体在允许温升下长期通过的最大电流。','最多能过多大电流。','line'],
  ['corona','电晕','Corona','导线表面电场过强导致空气局部放电的现象,带来损耗与噪声。','高压线上的那圈蓝光。','line'],

  // 母线与成套设备
  ['busbar','母线','Busbar','汇集与分配电能的导体,是变电站各回路的公共连接点。','大家共用的那条汇流条。','busbar'],
  ['switchgear','开关柜','Switchgear Cabinet','把断路器、隔离开关、互感器、母线等集中装于金属壳体内的成套配电设备。','把开关都装一个柜子里。','busbar'],
  ['ring-main-unit','环网柜','Ring Main Unit','用于环网供电、由负荷开关与熔断器等组成的紧凑型开关柜。','环着跑的配电柜。','busbar'],
  ['metal-clad-switchgear','铠装式金属封闭开关设备','Metal-clad Switchgear','隔室间用金属隔板分隔、防护等级高的开关柜形式。','铁壳分格的那种柜子。','busbar'],
  ['bay','间隔','Bay','主接线中一个独立功能单元所占的电气与空间组合,如出线间隔。','一路出线占的那一格。','busbar'],
  ['incoming-outgoing','进线与出线','Incoming and Outgoing','开关柜或间隔中电源引入回路与负荷引出回路的区分。','电从哪进、从哪出。','busbar'],
  ['cable-termination','电缆终端','Cable Termination','电缆末端与设备连接处、恢复绝缘并控制电场的部件。','电缆接设备的那个头。','busbar'],

  // 电气布置与主接线
  ['main-connection','电气主接线','Main Electrical Connection','表示变电站各主要设备电气连接关系的接线方式,决定运行灵活性与可靠性。','站里谁跟谁连。','layout'],
  ['single-busbar','单母线','Single Busbar','全部回路接在一组母线上的接线,简单经济但可靠性较低。','大家挤一条母线。','layout'],
  ['double-busbar','双母线','Double Busbar','设两组母线、回路可倒换的接线,运行灵活、检修方便。','两条母线可以倒着用。','layout'],
  ['bridge-connection','桥式接线','Bridge Connection','两台变压器与两回线路之间通过桥开关连接的接线形式。','中间架个桥连起来。','layout'],
  ['one-and-half-breaker','一个半断路器接线','One-and-a-half Breaker','每两回元件共用三台断路器的接线,可靠性高,常用于超高压。','两路用三个开关。','layout'],
  ['line-transformer-unit','线路-变压器组','Line-transformer Unit','线路与变压器直接相连、不设母线的最简接线。','线直接进变压器。','layout'],
  ['layout-plan','平面布置','Layout Plan','按电气主接线把设备在场地与建筑中排布的方式,分户外、户内与 GIS 布置。','设备摆在哪。','layout'],
  ['main-transformer','主变','Main Transformer','变电站中承担主要电压变换任务的变压器,容量与台数由负荷决定。','站里的那台大变压器。','layout'],

  // 状态评价与试验
  ['handover-test','交接试验','Handover Test','设备安装完成后、投运前进行的试验,用于确认安装质量与设备完好。','装完先验一遍。','test'],
  ['preventive-test','预防性试验','Preventive Test','按周期对运行中设备做的试验,用于发现绝缘缺陷与劣化趋势。','定期体检。','test'],
  ['partial-discharge','局部放电','Partial Discharge','绝缘内部或表面局部区域发生的放电,是绝缘劣化的早期征兆。','绝缘里的小火星。','test'],
  ['dga','油中溶解气体分析','DGA','通过分析变压器油中溶解气体的组分与含量判断内部故障类型的方法。','闻油里的气味查故障。','test'],
  ['dielectric-loss','介质损耗','Dielectric Loss','绝缘在交流电场下发热的损耗,其正切值反映绝缘受潮与老化。','绝缘自己发热耗掉的。','test'],
  ['insulation-resistance','绝缘电阻','Insulation Resistance','用兆欧表测量的绝缘电阻值,是最基本的绝缘判断手段。','绝缘好不好,先量电阻。','test'],
  ['state-evaluation','状态评价','Condition Assessment','根据试验、监测与运行数据对设备健康状态打分定级的评价方法。','给设备打分。','test'],
  ['online-monitoring','在线监测','Online Monitoring','在设备运行中连续采集状态量的监测方式,如油色谱、局部放电在线监测。','边跑边测。','test'],
  ['live-testing','带电检测','Live-line Testing','不停电、不接触设备的状态检测手段,如红外测温与超声局放。','不停电去查。','test'],
  ['condition-based-maintenance','状态检修','Condition-based Maintenance','以设备实际状态为依据安排检修的策略,替代固定周期的计划检修。','该修才修。','test'],

  // 全寿命周期管理
  ['lcc','全寿命周期成本','LCC','设备从采购、安装、运行、维护到退役全过程的成本总和,用于方案比选。','一辈子花的钱。','lifecycle'],
  ['asset-management','资产管理','Asset Management','以资产全寿命效益最优为目标的管理体系,覆盖台账、状态、风险与投入。','把设备当资产来管。','lifecycle'],
  ['life-cycle','寿命周期','Life Cycle','设备从投运到退役所经历的全部阶段。','从出生到退休。','lifecycle'],
  ['technical-transformation','技术改造','Technical Transformation','为提升性能、消除缺陷或延长寿命而对既有设备实施的改造。','给老设备动手术。','lifecycle'],
  ['decommissioning','退役报废','Decommissioning','设备达到寿命终点或因不满足要求而退出运行并处置的过程。','干不动了,退下来。','lifecycle'],
  ['failure-rate','故障率','Failure Rate','单位时间内设备发生故障的概率,是可靠性统计的基础指标。','多容易坏。','lifecycle'],
  ['availability','可用率','Availability','设备处于可用状态的时间比例,反映停运影响。','有多少时间能干活。','lifecycle'],
  ['spare-parts','备品备件','Spare Parts','为缩短故障修复时间而储备的部件与设备。','家里存的备件。','lifecycle'],
  ['tco','拥有总成本','TCO','除购置价外还计入安装、运行、维护与处置的总成本口径。','买回来之后还要花多少。','lifecycle'],

  // 智能运检与数字化
  ['smart-substation','智能变电站','Smart Substation','以 IEC 61850 为基础、采用电子式互感器与网络化二次系统的变电站。','会用数字说话的变电站。','smart'],
  ['condition-monitoring','状态监测','Condition Monitoring','对设备关键状态量做持续或周期性采集与趋势分析,服务于状态检修。','一直盯着它的状态。','smart'],
  ['inspection-robot','巡检机器人','Inspection Robot','在站内自主行走或轨道运行、搭载红外与可见光设备完成巡检的机器人。','会自己巡站的机器人。','smart'],
  ['uav-inspection','无人机巡检','UAV Inspection','用无人机搭载传感器对线路与设备做巡检的方式,效率高、覆盖广。','用无人机去看线。','smart'],
  ['sensing-terminal','感知终端','Sensing Terminal','安装在设备或环境现场、采集状态量并上传的终端装置。','现场的眼和耳。','smart'],
  ['digital-twin','数字孪生','Digital Twin','在数字空间建立与实体设备对应的模型,用于仿真、预警与决策。','给设备建个数字影子。','smart'],
  ['edge-computing','边缘计算','Edge Computing','在靠近现场的边缘侧完成数据汇聚与初步分析,减少回传与延时。','在现场先算一遍。','smart'],
  ['iec61850','IEC 61850','IEC 61850','变电站自动化通信的国际标准,规范了信息模型与通信服务。','变电站之间的普通话。','smart'],

  // 典型故障与事故
  ['short-circuit-fault','短路故障','Short-circuit Fault','导体之间或导体对地发生非正常连接,导致电流剧增的故障。','线碰一起了。','fault'],
  ['ground-fault','接地故障','Ground Fault','带电导体与地之间发生非正常连接,分单相、两相与三相接地。','电跑到地里去了。','fault'],
  ['lightning-damage','雷击','Lightning Damage','雷击线路或设备造成的绝缘击穿与设备损坏。','被雷劈了。','fault'],
  ['overheating','过热','Overheating','因接触不良、过载或散热不良导致的设备局部温度异常升高。','某个地方发烫。','fault'],
  ['moisture','受潮','Moisture Ingress','绝缘介质侵入水分导致绝缘性能下降,是变压器与电缆的常见缺陷。','进水气了。','fault'],
  ['bushing-failure','套管故障','Bushing Failure','变压器或开关套管因绝缘缺陷、密封不良或末屏开路导致的故障,常引发爆炸起火。','穿箱那个头出问题。','fault'],
  ['mechanism-failure','机构故障','Mechanism Failure','操动机构拒动、误动或卡涩,导致断路器无法正确分合闸。','开关撤不动了。','fault'],
  ['accident-handling','事故处理','Accident Handling','故障发生后隔离故障、恢复供电、分析原因与整改的全过程。','出事之后怎么办。','fault'],
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
let s = '/* 模块元数据 + 学习路径(输变电一次设备通识)(自动生成,勿手改) */\n';
s += 'window.PEQ = window.PEQ || {};\n';
s += 'PEQ.modules = ' + J(mods) + ';\n';
s += 'PEQ.path = ' + J(path_) + ';\n';
s += 'PEQ.totalLessons = PEQ.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(输变电一次设备通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.PEQ = window.PEQ || {};\nPEQ.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nPEQ.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
