/* 电力营销与客户服务 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及电价机制、市场规则、政策文号、补贴与期限的具体口径,
   必须写明政策依据与适用期;内容基线为 2026 年 9 月。
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
  ['guide','导览','怎么用这个站、电力营销是什么、学习路线','基础','Guide'],
  ['basic','营销业务全景','营销在电网中的位置、业务体系、客户分类、组织架构','基础','Business Overview'],
  ['price','电价与电费','目录电价与代理购电、居民阶梯、工商业、两部制、峰谷分时、功率因数调整','核心','Tariff and Billing'],
  ['billing','抄表核算收费','抄表方式与例日、电费核算出账、缴费渠道、欠费催收、差错处理','核心','Meter Reading and Billing'],
  ['metering','电能计量','计量装置构成、互感器与倍率、计量方式、差错电量追补、智能电表','核心','Metering'],
  ['business','业扩报装','报装接电全流程、供电方案、受电工程审查、装表接电、时限与获得电力','核心','New Connection'],
  ['service','客户服务与供电质量','95598 与营业厅、服务规范、投诉举报、抢修服务、满意度与电压质量','核心','Customer Service'],
  ['dsm','需求侧管理与能效','需求侧管理、需求响应、能效服务、电能替代、综合能源服务','进阶','DSM and Efficiency'],
  ['market','市场下的营销变革','售电与代理购电、绿电绿证、分布式光伏、市场化结算、能源托管','进阶','Marketing in Market'],
  ['digital','营销数字化','营销业务系统、网上国网、数据中台与客户画像、AI 客服、低压透明化','进阶','Digital Marketing'],
  ['check','用电检查与稽查','用电检查职责、违约用电与窃电、营销稽查、电价执行稽查、供用电合同','应用','Inspection and Audit'],
  ['policy','政策与合规','电力法与供电营业规则、供电监管、服务规范、营商环境、信息保护','进阶','Policy and Compliance'],
  ['practice','一线实战','客户经理日常、报装案例、投诉处置、营业厅实务、常见差错与能力地图','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览与业务全景
  ['power-marketing','电力营销','Power Marketing','电网企业面向客户的一整套业务:报装接电、抄表核算收费、用电检查、客户服务与需求侧管理。','把电卖出去、把钱收回来、把客户服务好。','guide'],
  ['marketing-system','营销业务体系','Marketing Business System','由业扩、抄核收、计量、用电检查、客户服务等业务构成的完整链条。','一条从接电到服务的长链。','basic'],
  ['customer-classification','客户分类','Customer Classification','按用电性质与容量把客户分为居民、一般工商业、大工业、农业生产等类别,对应不同电价与服务方式。','先分清是谁在用电。','basic'],
  ['residential-customer','居民客户','Residential Customer','以生活用电为主的城乡居民用户,执行居民阶梯电价,数量最多、单户电量小。','千家万户。','basic'],
  ['commercial-customer','一般工商业客户','Commercial Customer','除大工业以外的商业、服务业、小型工业等用户,执行工商业电价。','开店办厂的这些。','basic'],
  ['industrial-customer','大工业客户','Large Industrial Customer','受电变压器容量达到规定标准以上的工业用户,执行两部制电价并考核功率因数。','用电大户。','basic'],
  ['agricultural-load','农业生产用电','Agricultural Load','农田灌溉、农业生产加工等用电,执行相应电价政策。','地里的电。','basic'],
  ['customer-file','客户档案','Customer File','记录客户基本信息、受电设备、计量方式、合同与历史业务的数据集合。','客户的户口本。','basic'],
  ['marketing-org','营销组织架构','Marketing Organization','省、市、县供电公司与供电所各层级的营销职能划分与岗位设置。','谁在管客户。','basic'],

  // 电价与电费
  ['catalog-price','目录销售电价','Catalog Retail Price','由政府核定的销售电价表,规定不同客户类别的到户电价水平。','政府定的价目表。','price'],
  ['agent-purchase','代理购电','Agent Power Purchase','工商业用户未直接入市时,由电网企业代为从市场购电并按代理购电价格结算的方式。','电网替你买电。','price'],
  ['tiered-price','居民阶梯电价','Residential Tiered Pricing','居民用电按电量分档定价,用得越多单价越高,保障基本用电、引导节约。','用得越多越贵。','price'],
  ['tou-price','峰谷分时电价','Time-of-Use Tariff','按峰、平、谷时段设定不同电价,引导客户错峰用电。','不同时段不同价。','price'],
  ['sharp-peak','尖峰电价','Sharp Peak Price','在峰段中再划出用电最紧张的短时段,执行更高电价,是峰谷分时的加强版。','峰里最高的那一尖。','price'],
  ['two-part-tariff','两部制电价','Two-part Tariff','由基本电费与电度电费两部分构成,基本电费按容量或需量计收,电度电费按电量计收。','一笔按能力收,一笔按用量收。','price'],
  ['basic-charge','基本电费','Basic Charge','两部制电价中按受电容量或最大需量计收的固定部分,与实际用电量无关。','用不用都要交的那部分。','price'],
  ['capacity-based','按容量计收','Capacity-based Charge','基本电费按受电变压器容量乘以单价计收,适合负荷率高的客户。','按装机大小算。','price'],
  ['demand-based','按需量计收','Demand-based Charge','基本电费按实际最大需量乘以单价计收,适合负荷率低、容量有富余的客户。','按实际峰值算。','price'],
  ['power-factor-adjust','功率因数调整电费','Power Factor Adjustment','按客户实际功率因数高低对电费进行减收或增收,激励客户做无功补偿。','功率因数高就少交钱。','price'],
  ['price-composition','电价构成','Price Composition','到户电价通常由上网电价、输配电价、政府性基金及附加、税费等部分构成。','电价里的几块钱分别归谁。','price'],
  ['cross-subsidy','交叉补贴','Cross Subsidy','工商业电价补贴居民与农业电价的安排,是电价改革中需要逐步理顺的问题。','一类客户替另一类客户买单。','price'],
  ['electricity-bill','电费清单','Electricity Bill','列明电量、电价、基本电费、力率调整、附加等项目的详细费用单据。','一张账单上的每一行。','price'],

  // 抄表核算收费
  ['meter-reading','抄表','Meter Reading','按周期记录客户电能表读数、作为电费计算依据的基础工作。','把表上的数记下来。','billing'],
  ['reading-cycle','抄表例日','Reading Cycle','规定的抄表日期安排,同一台区一般固定在每月同一天,保证电量周期一致。','每月哪天抄表是定死的。','billing'],
  ['remote-reading','远程抄表','Remote Meter Reading','通过采集系统自动获取电能表数据,替代人工现场抄表。','不用上门也能抄。','billing'],
  ['bill-issuing','电费核算','Bill Issuing','根据抄表数据、电价政策与计费规则计算应缴电费并生成账单的过程。','算账出单。','billing'],
  ['payment-channel','缴费渠道','Payment Channel','客户缴纳电费的途径,包括营业厅、银行代扣、线上支付、第三方平台等。','到哪里交钱。','billing'],
  ['arrears-collection','欠费催收','Arrears Collection','对逾期未缴电费客户进行的提醒、催缴与依法停限电处理。','催账。','billing'],
  ['bill-error','电费差错','Billing Error','因抄表、电价套用、计量或系统原因导致的电费计算错误,需按规定退补。','算错了要退要补。','billing'],
  ['recovery-rate','电费回收率','Electricity Fee Recovery Rate','实收电费占应收电费的比例,是营销经营的核心指标之一。','钱收回来多少。','billing'],

  // 电能计量
  ['metering-device','计量装置','Metering Device','由电能表、互感器、二次回路与计量柜(箱)等构成的整套计量设备。','一整套量电的家伙。','metering'],
  ['instrument-transformer','互感器','Instrument Transformer','把高电压大电流按比例变换为小信号,供计量与保护使用的设备。','把大信号变小。','metering'],
  ['metering-multiplier','计量倍率','Metering Multiplier','电能表读数需乘以的倍数,由互感器变比决定,是电量计算的关键参数。','表上的数还要乘一个数。','metering'],
  ['high-voltage-metering','高供高计','High-voltage Metering','在高压侧装设互感器与电能表的计量方式,计量精度高、技术损耗由客户承担。','高压侧就把电量量了。','metering'],
  ['low-voltage-metering','高供低计','High-voltage Supply with Low-voltage Metering','变压器由客户自备、在低压侧计量的方式。','高压供电、低压量电。','metering'],
  ['smart-meter','智能电表','Smart Meter','具备双向计量、分时计量与通信能力的电能表,支撑远程抄表与用电分析。','会说话的电表。','metering'],
  ['metering-error','计量差错','Metering Error','因接线错误、互感器故障、表计异常等原因造成的电量计量偏差。','量出来不对。','metering'],
  ['energy-adjustment','差错电量追补','Energy Adjustment','对计量差错期间的电量按规则进行退补处理,分等比例、参照、实际测量等方法。','多退少补。','metering'],
  ['meter-rotation','计量装置轮换','Meter Rotation','按周期对到期电能表与互感器进行更换,保证计量准确可靠。','到期就得换。','metering'],

  // 业扩报装
  ['new-connection','业扩报装','New Connection Application','客户申请新装、增容或变更用电时,电网企业办理的受理、勘查、方案、检验与接电全流程。','办电的全过程。','business'],
  ['supply-scheme','供电方案','Power Supply Scheme','根据客户报装容量与现场条件确定的供电电压、接入点、计量方式与投资分界方案。','怎么把电接过去。','business'],
  ['receiving-project','受电工程','Customer Receiving Project','客户侧为接受供电而建设的变配电与用电设施工程。','客户自己那部分工程。','business'],
  ['design-review','设计审查','Design Review','对客户受电工程设计文件是否符合标准与供电方案要求进行的审核。','图纸先审一遍。','business'],
  ['intermediate-check','中间检查','Intermediate Inspection','对隐蔽工程与关键工序在施工过程中进行的检查。','盖起来之前看一眼。','business'],
  ['completion-inspection','竣工检验','Completion Inspection','受电工程完工后对其质量与安全条件进行的检查与确认。','完工验收。','business'],
  ['meter-installation','装表接电','Meter Installation and Energization','计量装置安装、合同签订与正式送电的环节,标志客户可以正式用电。','装表通电。','business'],
  ['connection-timeline','接电时限','Connection Time Limit','按客户类型与接入方式规定的办电各环节与全流程时限要求。','多久必须办完。','business'],
  ['capacity-change','变更用电','Change of Electricity Use','客户在用电过程中办理的增容、减容、暂停、迁址、改类等业务。','用着用着要改。','business'],

  // 客户服务与供电质量
  ['95598','供电服务热线','95598 Customer Service Hotline','全国统一的供电服务热线,受理报修、咨询、投诉、举报与建议。','一个号码管所有事。','service'],
  ['service-channel','服务渠道','Service Channel','客户与电网企业交互的途径,包括热线、营业厅、线上应用、客户经理等。','从哪能找到你。','service'],
  ['business-hall','营业厅','Business Hall','办理用电业务、缴费与咨询的线下服务场所。','实体窗口。','service'],
  ['online-service','线上服务','Online Service','通过手机应用、网上平台等线上方式办理业务与查询信息。','掌上办。','service'],
  ['complaint-handling','投诉处理','Complaint Handling','对客户投诉的受理、调查、答复与整改的闭环过程。','投诉要有回音。','service'],
  ['repair-service','抢修服务','Emergency Repair Service','客户侧或电网侧故障停电时的报修受理与现场抢修服务。','坏了就去修。','service'],
  ['customer-satisfaction','客户满意度','Customer Satisfaction','客户对供电质量与服务水平的综合评价,是营销服务考核的核心指标。','客户满不满意。','service'],
  ['important-customer','重要客户','Important Customer','中断供电可能造成人身伤亡、重大损失或社会影响的客户,需特殊保障。','不能停电的那些客户。','service'],
  ['voltage-quality','电压质量','Voltage Quality','供电电压偏差是否在允许范围内,直接影响客户设备正常运行。','电压稳不稳。','service'],
  ['outage-notice','停限电通知','Outage Notice','因检修、施工或供需紧张需要停限电时,按规定提前告知客户。','停电前先打招呼。','service'],
  ['service-standard','供电服务规范','Power Supply Service Standard','对服务用语、办理时限、服务行为等提出的统一要求。','服务有标准动作。','service'],

  // 需求侧管理与能效
  ['dsm','需求侧管理','Demand Side Management','通过价格、技术与管理手段引导客户优化用电方式,提高终端用电效率。','管好用电那一头。','dsm'],
  ['demand-response','需求响应','Demand Response','客户根据电价信号或邀约主动调整用电并获得补偿的机制。','少用一点也是贡献。','dsm'],
  ['price-based-dr','价格型需求响应','Price-based Demand Response','通过峰谷价差、尖峰电价等价格信号引导客户自主调整用电。','用价格引导。','dsm'],
  ['incentive-dr','激励型需求响应','Incentive-based Demand Response','通过补偿或奖励邀约客户在特定时段削减负荷。','用钱买你的配合。','dsm'],
  ['efficiency-service','能效服务','Energy Efficiency Service','为客户提供用能诊断、节能改造建议与效果评估的服务。','帮客户省电。','dsm'],
  ['energy-substitution','电能替代','Electric Energy Substitution','以电代煤、以电代油,在终端用能环节扩大电力使用。','把烧的换成用电的。','dsm'],
  ['integrated-energy','综合能源服务','Integrated Energy Service','围绕客户冷热电水气等多种用能需求提供的整体解决方案。','不止卖电,还卖服务。','dsm'],
  ['load-aggregator','负荷聚合商','Load Aggregator','把分散的可调负荷聚合起来参与需求响应与市场交易的主体。','散户的代言人。','dsm'],

  // 市场下的营销变革
  ['retail-company','售电公司','Retail Electricity Company','从批发市场购电、向用户售电并承担偏差风险的经营主体,是营销的重要伙伴与竞争者。','帮客户买电的公司。','market'],
  ['green-power','绿电交易','Green Power Trading','客户直接购买风电光伏等绿色电力的交易品种。','买电顺便买绿。','market'],
  ['green-certificate','绿证','Green Certificate','可再生能源电力消费的唯一凭证,用于证明用电的绿色属性。','绿电的身份证。','market'],
  ['pv-service','分布式光伏服务','Distributed PV Service','围绕客户屋顶光伏的接入申请、并网服务、计量结算与运维服务。','给客户的光伏服务。','market'],
  ['market-settlement','市场化结算','Market-based Settlement','参与市场交易的客户按市场形成的价格与规则进行电费结算。','按市场价算账。','market'],
  ['emc','合同能源管理','Energy Management Contract','由服务方投资改造、以节能收益分期回收的商业模式。','省下来的钱分着付。','market'],
  ['energy-trusteeship','能源托管','Energy Trusteeship','客户把用能系统的运营管理委托给专业方并支付托管费用。','用能外包。','market'],
  ['vpp','虚拟电厂','Virtual Power Plant','把分布式电源、储能与可调负荷聚合起来统一参与调度与交易。','拼起来的电厂。','market'],

  // 营销数字化
  ['marketing-it-system','营销业务系统','Marketing IT System','承载客户档案、业扩、抄核收、计量与服务的核心业务系统。','营销的作业平台。','digital'],
  ['online-state-grid','网上国网','Online Service Platform','面向客户的统一线上服务入口,支持办电、缴费、查询等业务。','客户手机里的营业厅。','digital'],
  ['customer-profile','客户画像','Customer Profile','基于用电与业务数据刻画客户特征与需求,支撑精准服务与营销。','给客户画个像。','digital'],
  ['ai-customer-service','智能客服','AI Customer Service','用语音识别、自然语言处理与知识库支撑客户咨询与受理的服务方式。','会答话的机器人。','digital'],
  ['rpa','流程自动化','RPA','用软件机器人模拟人工完成重复性操作,提升业务处理效率。','让机器人干重复活。','digital'],
  ['station-area-mgmt','台区管理','Station Area Management','以配电变压器供电范围为单元开展线损、抄表、服务与运维管理。','一台变压器管的那片。','digital'],
  ['lv-transparency','低压透明化','Low-voltage Transparency','对低压配网做到可观可测可控,支撑台区线损与客户侧异常分析。','低压也看得清。','digital'],
  ['smart-hall','数字化营业厅','Digital Business Hall','以自助终端、智能设备与线上协同改造的传统营业厅。','升级版的窗口。','digital'],

  // 用电检查与稽查
  ['utilization-inspection','用电检查','Power Utilization Inspection','对客户用电安全、计量装置、用电行为与合同履行情况进行检查。','上门看看用得对不对。','check'],
  ['default-use','违约用电','Default Electricity Use','客户违反供用电合同或用电规定的行为,如擅自变更用电类别、私自增容等。','不按规矩用电。','check'],
  ['electricity-theft','窃电','Electricity Theft','以非法手段使电能表少计或不计电量、逃避电费的行为,依法应追补电费并承担违约责任。','偷电。','check'],
  ['marketing-audit','营销稽查','Marketing Audit','对营销业务办理过程与结果的合规性、准确性进行的检查。','自己查自己。','check'],
  ['tariff-audit','电价执行稽查','Tariff Execution Audit','核查客户电价类别与计费方式是否按规定执行到位。','有没有收错钱。','check'],
  ['customer-side-safety','客户侧安全','Customer Side Safety','客户受电设施与用电设备的安全状况,涉及电网与人身安全。','客户那一侧的安全。','check'],
  ['supply-contract','供用电合同','Power Supply Contract','明确供电方式、容量、电价、计量、双方权责与违约责任的书面协议。','把关系写清楚。','check'],

  // 政策与合规
  ['electric-power-law','电力法','Electric Power Law','规范电力建设、生产、供应与使用活动的基本法律。','电力行业的根本大法。','policy'],
  ['supply-business-rules','供电营业规则','Power Supply Business Rules','规定供电营业区域、报装接电、计量收费与双方权责的部门规章。','办电收费的规矩。','policy'],
  ['supply-supervision','供电监管','Power Supply Supervision','监管机构对供电质量、供电服务与市场行为的监督考核。','有人在外面盯着。','policy'],
  ['business-environment','营商环境','Business Environment','企业开办经营的外部条件,电力接入的便利度是其中的重要评价内容。','办电快不快。','policy'],
  ['info-protection','客户信息保护','Customer Information Protection','对客户身份、用电与缴费等个人信息依法进行的保护与合规使用。','客户数据不能乱用。','policy'],
  ['service-redline','服务红线','Service Red Line','服务过程中不得触碰的行为底线,涉及廉洁、态度与合规要求。','有些事绝对不许做。','policy'],

  // 一线实战
  ['account-manager','客户经理','Account Manager','对接特定客户、负责其用电业务与服务的营销人员。','客户的固定联系人。','practice'],
  ['customer-visit','客户走访','Customer Visit','主动上门了解客户用电需求、宣传政策并发现问题的服务方式。','上门聊一聊。','practice'],
  ['demand-mining','需求挖掘','Demand Mining','在与客户接触中发现其潜在用电、能效与综合能源需求。','从用电里看出机会。','practice'],
  ['hall-practice','营业厅实务','Business Hall Practice','窗口受理、政策解释、情绪安抚与业务办理的实际操作要点。','窗口那点事。','practice'],
  ['error-case','差错案例','Error Case','营销业务中出现的典型差错及其原因与防范措施。','踩过的坑记下来。','practice'],
  ['capability-map','能力地图','Capability Map','营销岗位所需的知识、技能与素养的完整清单。','干这行要会什么。','practice'],
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
let s = '/* 模块元数据 + 学习路径(电力营销与客户服务)(自动生成,勿手改) */\n';
s += 'window.EMK = window.EMK || {};\n';
s += 'EMK.modules = ' + J(mods) + ';\n';
s += 'EMK.path = ' + J(path_) + ';\n';
s += 'EMK.totalLessons = EMK.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(电力营销与客户服务)(自动生成) {id,name,en,def,analogy,module} */\nwindow.EMK = window.EMK || {};\nEMK.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nEMK.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
