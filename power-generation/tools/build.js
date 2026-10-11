/* 发电技术通识 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及机组参数、排放限值、能效与电价政策口径的具体内容,
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
  ['guide','导览','怎么用这个站、发电技术全景、电源与电网什么关系、学习路线','基础','Guide'],
  ['basics','发电总论','发电方式全景、电源结构、基荷腰荷峰荷、容量系数与利用小时、度电成本','基础','Generation Overview'],
  ['thermal','火电厂总貌','燃煤与燃气电厂、锅炉-汽轮机-发电机、朗肯循环、蒸汽参数、超超临界、联合循环','核心','Thermal Power Plant'],
  ['boiler','锅炉与燃烧','锅炉本体、燃烧与制粉、煤粉、空气预热器、给水、脱硫与脱硝','核心','Boiler and Combustion'],
  ['turbine','汽轮机与热力系统','汽轮机、凝汽器、回热加热、再热、冷却塔与循环水、热耗率','核心','Steam Turbine'],
  ['generator','发电机与励磁','同步发电机、励磁系统、定子与转子、冷却方式、功角、无功与电压、发电机保护','核心','Generator and Excitation'],
  ['emission','环保与超低排放','超低排放、除尘、电除尘、湿法脱硫、SCR 脱硝、碳排放、废水零排放','核心','Environment and Emission'],
  ['flex','煤电灵活性与调峰','灵活性运行、调峰深度、最低稳燃负荷、爬坡速率、深度调峰、启停调峰、辅助服务、灵活性改造','核心','Flexibility and Peaking'],
  ['hydro','水电与抽水蓄能','水力发电、混流式与冲击式水轮机、抽水蓄能、水头、调压井、水电站类型','核心','Hydro and Pumped Storage'],
  ['nuclear','核电','核电、压水堆、反应堆、核燃料、蒸汽发生器、安全壳、核安全','核心','Nuclear Power'],
  ['wind','风电','风力发电、风电机组、风速与风功率、切入风速、风电场、海上风电、弃风','核心','Wind Power'],
  ['solar','光伏发电','光伏发电、光伏电池、光伏组件、逆变器、光伏电站、辐照度、弃光','核心','Solar PV'],
  ['electric','电厂电气与厂用电','电厂电气、主变压器、厂用电、厂用电率、厂用电源、升压站、直流系统','进阶','Plant Electrical'],
  ['grid','并网与厂网协调','并网、并网标准、一次调频、AGC、AVC、调度指令、机组组合、厂网协调','进阶','Grid Connection'],
  ['ops','运维、碳与展望','电厂运维、检修、状态监测、碳市场、绿电、生物质发电、CCUS、虚拟电厂、新型电力系统与电源','应用','O&M, Carbon and Outlook'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['power-generation-term','发电','Power Generation','把一次能源转换为电能的生产过程,是电力系统的源头。','把能量变成电。','guide'],
  ['generation-mix','电源结构','Generation Mix','一个电网里各类电源的装机与发电量占比,决定供电特性与排放水平。','电源的搭配比例。','guide'],
  ['energy-conversion','能量转换','Energy Conversion','燃料或自然能转化为电能、并伴随部分损耗的过程,效率是核心指标。','能量换了一副面孔。','guide'],
  ['thermal-efficiency','热效率','Thermal Efficiency','输出电能与输入热量的比值,是火电与核电最关键的效率指标。','多少热量变成了电。','guide'],
  ['power-plant','发电厂','Power Plant','把某种一次能源转换为电能并送出电网的厂站总称。','造电的工厂。','guide'],

  // 发电总论
  ['base-load','基荷','Base Load','长时间稳定运行、承担电网基础用电需求的那部分负荷。','一天到晚都要用的那部分电。','basics'],
  ['peak-load','峰荷','Peak Load','用电高峰时段出现、需要快速响应机组承担的负荷。','最忙那几个小时的电。','basics'],
  ['intermediate-load','腰荷','Intermediate Load','介于基荷与峰荷之间、随昼夜起伏的负荷。','不上不下的那一段。','basics'],
  ['capacity-factor','容量系数','Capacity Factor','实际发电量与满发理论发电量之比,衡量机组利用程度。','一年里真正满发了多少时间。','basics'],
  ['utilization-hours','利用小时数','Utilization Hours','按装机满发折算的年等效运行小时,反映机组实际出力水平。','折合满发跑了多少小时。','basics'],
  ['installed-capacity','装机容量','Installed Capacity','电厂全部机组额定功率之和,衡量的是能力而不是实际发电量。','能出多大的力。','basics'],
  ['dispatchable','可调度电源','Dispatchable Generation','出力可按调度指令调节的电源,如火电、水电、抽蓄。','听指挥的电源。','basics'],
  ['levelized-cost','平准化度电成本','LCOE','把全生命周期投资、燃料与运维折算到每度电上的成本口径,用于横向比较。','一度电到底多少成本。','basics'],
  ['peak-regulation','调峰','Peak Regulation','为跟踪负荷起伏而调整机组出力的过程。','让出力跟着用电走。','basics'],
  ['spinning-reserve','旋转备用','Spinning Reserve','在线运行、可随时顶上去的备用容量,是电网安全的重要支撑。','随时能加码的余量。','basics'],

  // 火电厂总貌
  ['coal-power-plant','燃煤电厂','Coal-fired Power Plant','以煤为燃料、通过锅炉产汽推动汽轮机发电的厂站,是传统主力电源。','烧煤发电的大厂。','thermal'],
  ['gas-power-plant','燃气电厂','Gas Power Plant','以天然气为燃料的发电厂,多采用联合循环,启停快、排放低。','烧气发电的厂。','thermal'],
  ['boiler-turbine-generator','锅炉-汽轮机-发电机','Boiler-Turbine-Generator','火电厂的三大主机链路:燃料在锅炉放热、汽轮机做功、发电机发电。','火电的三步走。','thermal'],
  ['rankine-cycle','朗肯循环','Rankine Cycle','以水为工质、经过泵送-加热-膨胀-冷凝的蒸汽动力循环,是火电的底层原理。','蒸汽走的那个圈。','thermal'],
  ['steam-parameters','蒸汽参数','Steam Parameters','蒸汽的温度与压力水平,参数越高效率越高,对材料要求也越高。','蒸汽有多烫多猛。','thermal'],
  ['supercritical','超超临界','Ultra-supercritical','主蒸汽压力与温度超过临界点的高参数机组,效率更高、煤耗更低。','把蒸汽烧得更猛。','thermal'],
  ['combined-cycle','联合循环','Combined Cycle','燃气轮机排气余热再驱动汽轮机,一次燃料发两次电,效率大幅提升。','一份气发两次电。','thermal'],
  ['turbine-bypass','旁路系统','Bypass System','让蒸汽不经过汽轮机直接排往凝汽器的通道,用于启停与保护。','给蒸汽留条绕行的路。','thermal'],

  // 锅炉与燃烧
  ['boiler','锅炉','Boiler','把燃料的化学能转化为蒸汽热能的设备,是火电厂的能量入口。','烧水产生蒸汽的大锅。','boiler'],
  ['combustion','燃烧','Combustion','燃料与空气反应释放热量的过程,配风与温度决定效率与排放。','把燃料烧透。','boiler'],
  ['pulverized-coal','煤粉','Pulverized Coal','把煤磨成细粉后喷入炉膛燃烧,增大接触面积、提高燃烧效率。','把煤磨成面粉再烧。','boiler'],
  ['air-preheater','空气预热器','Air Preheater','利用烟气余热加热入炉空气的设备,提升燃烧效率、降低排烟损失。','先用废气把空气烘热。','boiler'],
  ['feedwater','给水','Feedwater','补充进锅炉的水,需经除氧与加热处理以保证水质与效率。','送进锅里的水。','boiler'],
  ['desulfurization','脱硫','Desulfurization','去除烟气中二氧化硫的工艺,是达标排放的关键环节。','把硫从烟里洗掉。','boiler'],
  ['denitration','脱硝','Denitration','去除烟气中氮氧化物的工艺,常用选择性催化还原技术。','把氮氧化物从烟里摘掉。','boiler'],
  ['coal-mill','磨煤机','Coal Mill','把原煤研磨成合格细度的煤粉并输往炉膛的设备。','磨面的机器。','boiler'],
  ['once-through-boiler','直流锅炉','Once-through Boiler','给水一次流过受热面即全部变为蒸汽、不设汽包的锅炉,适合高参数机组。','不存水,直接流过。','boiler'],

  // 汽轮机与热力系统
  ['steam-turbine','汽轮机','Steam Turbine','把蒸汽的热能转换为旋转机械功的原动机,拖动发电机发电。','被蒸汽吹转的大风车。','turbine'],
  ['condenser','凝汽器','Condenser','把做过功的乏汽冷凝成水、维持汽轮机排汽真空的设备。','把废汽变回水。','turbine'],
  ['regenerative-heating','回热加热','Regenerative Heating','抽汽加热给水,减少冷源损失、提高循环效率的措施。','用蒸汽把水先暖一暖。','turbine'],
  ['reheat','再热','Reheat','把做过部分功的蒸汽送回锅炉再加热后继续膨胀,提高效率并保护末级叶片。','让蒸汽回炉再干一轮。','turbine'],
  ['cooling-tower-plant','冷却塔','Cooling Tower','把循环水携带的废热排向大气的构筑物,分湿冷与空冷等形式。','给循环水降温的大烟囱。','turbine'],
  ['circulating-water','循环水','Circulating Water','在凝汽器与冷却塔之间循环流动、带走废热的冷却水。','来回跑的冷却水。','turbine'],
  ['heat-rate','热耗率','Heat Rate','发一度电所消耗的热量,数值越低说明机组越省。','一度电烧了多少热。','turbine'],
  ['deaerator','除氧器','Deaerator','去除给水中溶解氧、防止设备腐蚀的加热设备。','把水里的氧气赶出去。','turbine'],

  // 发电机与励磁
  ['synchronous-generator','同步发电机','Synchronous Generator','转速与电网频率严格同步、把机械能转为电能的发电机。','跟着电网节拍转的发电机。','generator'],
  ['excitation-system','励磁系统','Excitation System','为发电机转子提供可调直流电流、控制电压与无功的装置。','给转子通电的那套。','generator'],
  ['stator-rotor','定子与转子','Stator and Rotor','发电机的静止与旋转部分,磁场相对运动才产生电动势。','一个不动一个转。','generator'],
  ['hydrogen-cooling','氢冷','Hydrogen Cooling','用氢气冷却发电机内部、散热能力远强于空气的冷却方式。','用最轻的气来散热。','generator'],
  ['power-angle','功角','Power Angle','发电机电动势与电网电压之间的相位差,决定输送功率大小。','发电机和电网的夹角。','generator'],
  ['reactive-power-gen','无功与电压','Reactive Power','不发有功只交换能量、用于支撑电压的那部分功率,由励磁调节。','撑住电压的那一半。','generator'],
  ['generator-protection-gen','发电机保护','Generator Protection','针对发电机内部故障与异常工况的继电保护配置。','发电机的保险丝。','generator'],
  ['synchronization','同期并列','Synchronization','把发电机安全并入电网的操作,要求频率、电压、相位一致。','对好表再合闸。','generator'],

  // 环保与超低排放
  ['ultra-low-emission','超低排放','Ultra-low Emission','把烟尘、二氧化硫、氮氧化物排放压到很低的水平,是燃煤电厂的环保标杆。','烟囱冒的白汽也干净。','emission'],
  ['dust-removal','除尘','Dust Removal','去除烟气中颗粒物的工艺,常用电除尘与袋式除尘。','把烟里的灰抓住。','emission'],
  ['electrostatic-precipitator','电除尘','Electrostatic Precipitator','利用高压电场使粉尘带电后被收集的除尘设备,效率高、阻力小。','用静电吸灰。','emission'],
  ['desulfurization-wet','湿法脱硫','Wet Desulfurization','用石灰石浆液洗涤烟气脱除二氧化硫的主流工艺。','用浆液给烟气洗澡。','emission'],
  ['denitration-scr','SCR 脱硝','SCR Denitration','在催化剂作用下用氨把氮氧化物还原为氮气和水的高效脱硝工艺。','让氮氧化物变成空气。','emission'],
  ['carbon-emission-gen','碳排放','Carbon Emission','发电过程产生的温室气体排放,火电是电力行业的主要来源。','发电排了多少碳。','emission'],
  ['wastewater-zero','废水零排放','Zero Liquid Discharge','把电厂各类废水处理后回用、不外排的环保要求。','一滴废水都不外流。','emission'],
  ['flue-gas','烟气','Flue Gas','燃料燃烧后产生、经烟道排向大气的混合气体。','炉子里出来的那口烟。','emission'],

  // 煤电灵活性与调峰
  ['flexible-operation','灵活性运行','Flexible Operation','机组快速变负荷、深度调峰、频繁启停的能力,是新能源时代的刚需。','能屈能伸地发电。','flex'],
  ['peaking-depth','调峰深度','Peaking Depth','机组出力可下调的幅度,深度越大越能接纳新能源。','能往下压多少。','flex'],
  ['minimum-load','最低稳燃负荷','Minimum Stable Load','锅炉能稳定燃烧的最低出力,是深度调峰的硬约束。','再低就烧不稳了。','flex'],
  ['ramping-rate','爬坡速率','Ramping Rate','机组单位时间内可增减出力的速度,决定跟踪负荷的能力。','加码减码有多快。','flex'],
  ['deep-peaking','深度调峰','Deep Peaking','把机组出力大幅压低的运行方式,常需改造与额外补偿。','把出力压到很低。','flex'],
  ['start-stop','启停调峰','Start-Stop Peaking','用启停机组的方式参与调峰,灵活性最高但代价也大。','开开关关来调峰。','flex'],
  ['ancillary-service-gen','辅助服务','Ancillary Service','调峰、调频、备用等保障电网安全与电能质量的服务,可获补偿。','帮电网搭把手的服务。','flex'],
  ['flexibility-retrofit','灵活性改造','Flexibility Retrofit','通过设备与控制系统改造提升机组调峰与爬坡能力的工程。','把老机组改得更灵活。','flex'],
  ['frequency-regulation','调频','Frequency Regulation','维持电网频率稳定的调节过程,分一次调频与二次调频。','让频率别乱跳。','flex'],

  // 水电与抽水蓄能
  ['hydropower','水力发电','Hydropower','利用水的落差与流量推动水轮机发电,启停快、调节灵活。','用水往低处流来发电。','hydro'],
  ['francis-turbine','混流式水轮机','Francis Turbine','适用于中高水头的反击式水轮机,是大型水电站的主力机型。','最常见的水轮机。','hydro'],
  ['pelton-turbine','冲击式水轮机','Pelton Turbine','适用于高水头小流量的水轮机,靠高速射流冲击转轮做功。','用水柱打水轮。','hydro'],
  ['pumped-storage','抽水蓄能','Pumped Storage','用电低谷抽水蓄能、高峰放水发电的储能电站,是电网的巨型充电宝。','把水抽上去再来一遍。','hydro'],
  ['water-head','水头','Water Head','上下游水位差,决定水轮机可获得的能量大小。','水从多高处落下。','hydro'],
  ['surge-tank','调压井','Surge Tank','设置在引水系统上、缓冲水锤压力波动的构筑物。','给水流留个缓冲罐。','hydro'],
  ['hydro-plant-type','水电站类型','Hydropower Plant Types','按水头、开发方式与调节能力划分的水电站类别。','水电站也分好几类。','hydro'],
  ['tail-water','尾水','Tail Water','水轮机做功后排出的水及其下游水位。','用完的水往哪去。','hydro'],

  // 核电
  ['nuclear-power','核电','Nuclear Power','利用核裂变释放的热量产生蒸汽发电,能量密度极高、运行稳定。','用原子核发热发电。','nuclear'],
  ['pwr','压水堆','Pressurized Water Reactor','用高压水作为冷却剂与慢化剂的反应堆,是主流商用堆型。','压住不让水沸腾。','nuclear'],
  ['reactor','反应堆','Reactor','核燃料发生可控链式裂变反应、释放热量的装置。','可控的原子炉。','nuclear'],
  ['nuclear-fuel','核燃料','Nuclear Fuel','含易裂变核素、可供反应堆使用的燃料,通常为浓缩铀制品。','浓缩过的燃料棒。','nuclear'],
  ['steam-generator-nuclear','蒸汽发生器','Steam Generator','把反应堆一回路的热量传给二回路、产生蒸汽的设备。','一回路二回路的热桥。','nuclear'],
  ['containment','安全壳','Containment','包围反应堆的预应力钢筋混凝土壳体,是防止放射性外泄的最后屏障。','核岛的厚壳子。','nuclear'],
  ['nuclear-safety','核安全','Nuclear Safety','确保反应堆在正常与事故工况下都安全的一系列要求与措施。','安全是核电的底线。','nuclear'],
  ['spent-fuel','乏燃料','Spent Fuel','辐照后从反应堆取出的核燃料,仍需妥善贮存与处理。','烧过但还有余热的燃料。','nuclear'],

  // 风电
  ['wind-power','风力发电','Wind Power','利用风的动能推动叶片旋转发电,是主力新能源之一。','让风吹着发电。','wind'],
  ['wind-turbine','风电机组','Wind Turbine','把风能转换为电能的发电装置,由叶片、机舱、塔筒等组成。','立在山上的大风车。','wind'],
  ['wind-speed','风速与风功率','Wind Speed and Power','风功率与风速的三次方成正比,风速稍变、出力大变的根源。','风速一变,出力大变。','wind'],
  ['cut-in-speed','切入风速','Cut-in Speed','风机开始并网发电的最低风速,低于它只空转不发电。','风太小转也白转。','wind'],
  ['wind-farm','风电场','Wind Farm','多台风机集中布置、统一并网的风电基地。','一片大风车。','wind'],
  ['offshore-wind','海上风电','Offshore Wind','建在海上、风速稳定且单机容量大的风电形式。','把风机插进海里。','wind'],
  ['wind-curtailment','弃风','Wind Curtailment','因消纳受限而被迫让风机停发的现象。','有风也不让发。','wind'],
  ['pitch-control','变桨控制','Pitch Control','通过转动叶片角度调节出力、保护机组安全的技术。','拧一拧叶片角度。','wind'],

  // 光伏发电
  ['solar-pv','光伏发电','Solar PV','利用半导体光生伏特效应把太阳光直接转换为电能。','晒着太阳就发电。','solar'],
  ['pv-cell','光伏电池','PV Cell','把光能直接转换为电能的最小半导体单元。','发电的小薄片。','solar'],
  ['pv-module','光伏组件','PV Module','多块电池片封装成的成品组件,是光伏电站的基本单元。','一排排的太阳能板。','solar'],
  ['inverter','逆变器','Inverter','把光伏组件产生的直流电转换为交流电并入电网的设备。','直流变交流。','solar'],
  ['pv-station','光伏电站','PV Power Station','集中布置组件、经逆变升压后并网的光伏发电基地。','一大片太阳能板。','solar'],
  ['irradiance','辐照度','Irradiance','单位面积上接收到的太阳辐射功率,直接决定光伏出力。','太阳照得有多猛。','solar'],
  ['pv-curtailment','弃光','PV Curtailment','因消纳受限而被迫限制光伏出力的现象。','太阳好也不让多发。','solar'],
  ['module-efficiency','组件效率','Module Efficiency','组件把接收到的光能转换为电能的比例。','多少阳光变成了电。','solar'],

  // 电厂电气与厂用电
  ['plant-electrical','电厂电气','Plant Electrical System','电厂内电气一次与二次系统的总称,负责发电、升压与自用电。','电厂里的电气那摊事。','electric'],
  ['generator-transformer','主变压器','Generator Transformer','把发电机电压升高到输电电压的变压器,是电厂送出电能的关口。','把电压抬到能上电网。','electric'],
  ['auxiliary-power','厂用电','Auxiliary Power','电厂自身设备消耗的电能,如风机、水泵与控制系统用电。','电厂自己用的电。','electric'],
  ['auxiliary-power-rate','厂用电率','Auxiliary Power Ratio','厂用电量占总发电量的比例,越低说明机组越省电。','自己用掉了多少。','electric'],
  ['station-service','厂用电源','Station Service Power','为厂用负荷供电的电源系统,通常设工作与备用多路。','厂自己的电源。','electric'],
  ['hv-switchgear-gen','升压站','Step-up Substation','把发电机电压升高并送出电网的站内设施。','电厂往电网送电的门。','electric'],
  ['plant-dc-system','直流系统','DC System','为控制、保护与事故照明提供可靠直流电源的系统。','断电也能顶上的电。','electric'],
  ['hv-auxiliary','高压厂用','High-voltage Auxiliary','大型机组采用的高压厂用电压等级系统,直接由发电机或电网引接。','厂里的大电流自用回路。','electric'],

  // 并网与厂网协调
  ['grid-connection','并网','Grid Connection','发电机组或电站与电网连接、开始向电网送电的过程。','接上电网开始送电。','grid'],
  ['grid-code','并网标准','Grid Code','对并网电源的技术要求,涵盖频率电压耐受、保护与调节能力。','上电网得守的规矩。','grid'],
  ['primary-frequency','一次调频','Primary Frequency Regulation','由调速系统自动响应频率偏差、快速调整出力的过程。','电网一抖,自动顶一下。','grid'],
  ['agc-plant','AGC 与调频','AGC','自动发电控制,按调度指令自动调节机组出力以维持频率与联络线功率。','远程自动加减出力。','grid'],
  ['avc-plant','AVC 与调压','AVC','自动电压控制,按指令自动调节发电机无功以维持母线电压。','远程自动调电压。','grid'],
  ['grid-dispatch-gen','调度指令','Dispatch Instruction','调度机构向电厂下达的出力、启停与检修安排。','调度说啥就是啥。','grid'],
  ['unit-commitment','机组组合','Unit Commitment','为满足负荷与备用、在时间上安排各机组启停与出力的优化问题。','先定好谁上谁下。','grid'],
  ['plant-grid-coordination','厂网协调','Plant-Grid Coordination','电厂与电网在调度、检修与辅助服务上的协同关系。','厂和网得配合好。','grid'],
  ['secondary-frequency','二次调频','Secondary Frequency Regulation','通过 AGC 调整机组出力、消除频率持续偏差的过程。','把频率拉回正轨。','grid'],

  // 运维、碳与展望
  ['plant-om','电厂运维','Plant O&M','电厂的日常运行监视、维护、检修与缺陷处理工作。','把厂子看好用好。','ops'],
  ['planned-outage','检修','Planned Outage','按计划停机进行的检查与修理,分定期检修与状态检修。','停下来修一修。','ops'],
  ['condition-monitoring-gen','状态监测','Condition Monitoring','通过振动、温度、油质等手段判断设备健康状况的技术。','给设备做体检。','ops'],
  ['carbon-market-gen','碳市场','Carbon Market','把碳排放权作为商品交易、推动减排的市场机制。','碳也能买卖。','ops'],
  ['green-power-gen','绿电','Green Power','来自风电、光伏等可再生能源、具有环境属性的电力。','干干净净的电。','ops'],
  ['biomass-power','生物质发电','Biomass Power','利用农林废弃物等生物质燃烧或气化发电的形式,属可再生能源。','烧秸秆也能发电。','ops'],
  ['ccs','碳捕集利用与封存','CCUS','把燃烧产生的二氧化碳捕集起来利用或封存,以降低排放。','把碳抓住别让它跑。','ops'],
  ['virtual-power-plant-gen','虚拟电厂','Virtual Power Plant','把分散的可调资源聚合起来、像一座电厂一样参与调度。','把散户凑成大电厂。','ops'],
  ['future-grid-gen','新型电力系统与电源','Future Power System','以新能源为主体、源网荷储协同的新型电力系统,电源角色随之重塑。','电从哪来正在被重写。','ops'],
  ['carbon-allowance','碳配额','Carbon Allowance','政府分配给排放单位的碳排放额度,是碳市场交易的基础。','允许你排多少碳。','ops'],
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
let s = '/* 模块元数据 + 学习路径(发电技术通识)(自动生成,勿手改) */\n';
s += 'window.GEN = window.GEN || {};\n';
s += 'GEN.modules = ' + J(mods) + ';\n';
s += 'GEN.path = ' + J(path_) + ';\n';
s += 'GEN.totalLessons = GEN.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(发电技术通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.GEN = window.GEN || {};\nGEN.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nGEN.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
