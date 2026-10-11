/* 能源政策与碳市场 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及法规条文、政策口径、标准编号、市场规则与碳价的具体内容,
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
  ['guide','导览','怎么用这个站、能源政策与碳市场是什么、学习路线','基础','Guide'],
  ['basics','能源政策基础','能源法、能源安全、能源转型、能耗双控与碳排放双控、规划体系','基础','Policy Basics'],
  ['powerreform','电力体制改革','厂网分开、输配改革、电力市场体系、中长期与现货、辅助服务','核心','Power Reform'],
  ['pricing','电价机制','电价构成、标杆电价、输配电价、峰谷分时、两部制、容量电价','核心','Pricing'],
  ['renewable','可再生能源政策','补贴退坡、平价上网、竞争性配置、消纳保障、绿证、弃风弃光','核心','Renewable Policy'],
  ['dualcarbon','双碳目标与路径','碳达峰碳中和、1+N 政策体系、能源结构调整、碳汇、CCUS、公正转型','核心','Dual Carbon'],
  ['accounting','碳排放核算','温室气体、核算标准、排放因子、三个范围、MRV、碳盘查','核心','Accounting'],
  ['carbonmarket','碳市场原理','总量控制与交易、配额分配、基准线法、历史法、碳价、碳泄漏','核心','Carbon Market'],
  ['nationalets','全国碳市场','建设历程、覆盖行业、纳入门槛、配额方案、履约清缴、核查、扩容','核心','National ETS'],
  ['pilotets','地方碳市场试点','试点全景、北京广东湖北、有偿分配、与全国衔接','进阶','Pilot ETS'],
  ['ccer','CCER 与自愿减排','CCER、方法学、额外性、基准线、林业碳汇、签发与注销','进阶','CCER'],
  ['greenpower','绿证与绿电','绿电交易、证电合一与分离、消纳责任权重、绿证核发、RE100','核心','Green Power'],
  ['carbonfinance','碳资产与碳金融','碳资产、碳质押回购远期、碳基金、碳保险、碳会计处理','进阶','Carbon Finance'],
  ['international','国际规则与碳关税','巴黎协定、NDC、欧盟碳市场、CBAM、第六条、隐含排放','进阶','International'],
  ['practice','碳管理与实务','碳管理岗位、碳盘查报告、碳足迹、碳中和认证、信息披露、减排成本','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['energy-policy','能源政策','Energy Policy','政府为实现能源安全、经济与低碳目标,对能源生产与消费作出的制度安排。','国家给能源定的规矩。','guide'],
  ['carbon-market','碳市场','Carbon Market','以碳排放配额与减排量为交易标的的市场机制。','给碳排放权开的买卖场。','guide'],
  ['dual-carbon','双碳','Dual Carbon','碳达峰与碳中和两个国家目标的合称。','先到顶再归零。','guide'],
  ['carbon-peak','碳达峰','Carbon Peak','碳排放量达到历史最高点后转为下降的拐点。','排放量爬到山顶。','guide'],
  ['carbon-neutrality','碳中和','Carbon Neutrality','人为排放与人为移除相抵,净排放为零。','收支相抵归零。','guide'],

  // 能源政策基础
  ['energy-law','能源法','Energy Law','规定能源规划、开发、供应、使用与安全基本制度的法律。','能源领域的基本大法。','basics'],
  ['energy-security','能源安全','Energy Security','以可承受的价格稳定获得所需能源的状态。','不能断供,也不能太贵。','basics'],
  ['energy-transition','能源转型','Energy Transition','能源结构从高碳化石能源向低碳可再生能源转变的过程。','换一种能源过日子。','basics'],
  ['energy-mix','能源结构','Energy Mix','一次能源消费中各类能源的构成比例。','菜谱里各种能源占多少。','basics'],
  ['energy-planning','能源规划','Energy Planning','对一定时期内能源发展目标、布局与重大项目的统筹安排。','提前画好能源路线图。','basics'],
  ['energy-intensity','能耗强度','Energy Intensity','单位经济产出所消耗的能源量。','每挣一块钱耗多少能。','basics'],
  ['dual-control','能耗双控','Dual Control of Energy','对能源消费总量与强度同时实行控制的制度。','总量和强度两头都管。','basics'],
  ['carbon-dual-control','碳排放双控','Dual Control of Carbon','对碳排放总量与强度同时实行控制的制度。','管碳也管两头。','basics'],

  // 电力体制改革
  ['power-system-reform','电力体制改革','Power Sector Reform','围绕政企分开、厂网分开、主辅分开与市场化交易推进的体制改革。','把电这盘棋重新摆。','powerreform'],
  ['separation-generation-grid','厂网分开','Separation of Generation and Grid','把发电业务与电网业务分开经营。','发电和送电分家。','powerreform'],
  ['transmission-distribution','输配分开','Separation of Transmission and Distribution','把输电与配电业务分开核算或经营。','主干道和支路分开管。','powerreform'],
  ['power-market-system','电力市场体系','Power Market System','由中长期、现货、辅助服务等子市场共同构成的市场体系。','电的批发零售综合体。','powerreform'],
  ['medium-long-term-trading','中长期交易','Medium and Long-term Trading','以年度、月度等周期签订电量与电价的交易方式。','提前把电定下来。','powerreform'],
  ['spot-market','现货市场','Spot Market','以日前、实时等短周期竞价形成电价的交易市场。','当天的电当天定。','powerreform'],
  ['ancillary-service','辅助服务','Ancillary Service','为维持电网安全稳定运行而提供的调频、备用等服务。','电网的护航服务。','powerreform'],
  ['incremental-distribution','增量配电','Incremental Distribution','对新增配电网业务引入社会资本投资的改革试点。','新支路让别人来修。','powerreform'],

  // 电价机制
  ['electricity-price-mechanism','电价机制','Electricity Pricing Mechanism','形成与调整电价的制度安排与计算方法。','电卖多少钱的规矩。','pricing'],
  ['benchmark-price','标杆电价','Benchmark Price','按资源类型与区域设定的可再生能源上网电价标杆。','一把公开的尺子。','pricing'],
  ['transmission-price','输配电价','Transmission and Distribution Price','电网收取的过网费,由政府按准许收入核定。','走电网要交的过路费。','pricing'],
  ['two-part-tariff','两部制电价','Two-part Tariff','由基本电费(容量)与电度电费(电量)构成的价格。','底价加用量。','pricing'],
  ['time-of-use-price','峰谷分时电价','Time-of-use Price','按峰、平、谷时段分别定价的电价。','忙时贵,闲时便宜。','pricing'],
  ['capacity-price','容量电价','Capacity Price','为可用容量而非实际电量支付的补偿电价。','备用能力也要给钱。','pricing'],
  ['market-price','市场化电价','Market-based Price','由竞争交易形成的电价,区别于政府定价。','竞价定出来的价。','pricing'],
  ['price-cross-subsidy','电价交叉补贴','Cross Subsidy in Tariff','一类用户电价高于成本去补贴另一类用户的价内补贴。','高价户补低价户。','pricing'],

  // 可再生能源政策
  ['renewable-portfolio-standard','可再生能源配额制','Renewable Portfolio Standard','要求市场主体可再生能源电量达到一定比例的制度。','必须用够绿电。','renewable'],
  ['feed-in-tariff','上网电价补贴','Feed-in Tariff','对可再生能源发电按高于市场的电价给予补贴。','高价兜底收绿电。','renewable'],
  ['grid-parity','平价上网','Grid Parity','可再生能源上网电价与常规电源持平,不再依赖补贴。','不用补贴也能活。','renewable'],
  ['competitive-allocation','竞争性配置','Competitive Allocation','通过优选或竞价方式配置可再生能源建设规模。','谁划算谁先上。','renewable'],
  ['renewable-consumption','消纳保障','Renewable Consumption Guarantee','通过责任权重与监测机制保障可再生能源电量被消纳。','发出来得有人用。','renewable'],
  ['curtailment','弃风弃光','Curtailment','因消纳或调度原因放弃的风电与光伏发电量。','发了却不让上网。','renewable'],
  ['green-certificate','绿证','Green Certificate','可再生能源电量环境属性的唯一凭证。','绿电的身份证。','renewable'],
  ['subsidy-retreat','补贴退坡','Subsidy Phase-out','逐步降低并最终取消财政补贴的政策安排。','断奶扶上马。','renewable'],

  // 双碳目标与路径
  ['double-carbon-goal','双碳目标','Double Carbon Goal','2030 年前碳达峰、2060 年前碳中和的国家目标。','两个时间节点。','dualcarbon'],
  ['one-plus-n-policy','1+N 政策体系','1+N Policy Framework','以顶层设计为统领、分领域配套方案为支撑的双碳政策体系。','一份总纲加一摞细则。','dualcarbon'],
  ['carbon-peak-action','碳达峰行动','Carbon Peak Action','为实现碳达峰部署的重点领域专项行动。','达峰的施工图。','dualcarbon'],
  ['energy-structure-adjustment','能源结构调整','Energy Structure Adjustment','提高非化石能源比重、压减煤炭消费的调整措施。','把菜单换个配比。','dualcarbon'],
  ['non-fossil-share','非化石能源占比','Non-fossil Energy Share','一次能源消费中非化石能源所占比重。','清洁能源占多少。','dualcarbon'],
  ['carbon-sink','碳汇','Carbon Sink','通过森林、湿地等生态系统吸收并储存二氧化碳的能力。','把碳吸进去。','dualcarbon'],
  ['ccus','CCUS','CCUS','把二氧化碳捕集后加以利用或封存的技术路线。','把碳抓起来存好。','dualcarbon'],
  ['just-transition','公正转型','Just Transition','低碳转型中兼顾就业、区域与弱势群体利益的安排。','转型别把人落下。','dualcarbon'],

  // 碳排放核算
  ['greenhouse-gas','温室气体','Greenhouse Gas','能吸收并再辐射红外辐射、导致温室效应的气体。','让地球捂热的气。','accounting'],
  ['ghg-protocol','温室气体核算体系','GHG Protocol','国际上广泛使用的温室气体核算标准体系。','算碳的国际说明书。','accounting'],
  ['emission-factor','排放因子','Emission Factor','单位活动水平对应的温室气体排放量。','一度电排多少碳。','accounting'],
  ['organization-boundary','组织边界','Organizational Boundary','碳盘查时确定纳入核算的组织与设施范围。','算哪些部门。','accounting'],
  ['scope-1','范围一','Scope 1','企业直接拥有或控制的排放源产生的排放。','自己烧出来的。','accounting'],
  ['scope-2','范围二','Scope 2','企业外购电力、热力等能源产生的间接排放。','买来的电带的碳。','accounting'],
  ['scope-3','范围三','Scope 3','价值链上下游产生的其他间接排放。','供应链上的碳。','accounting'],
  ['mrv','MRV','MRV','可监测、可报告、可核查的碳排放数据管理体系。','测得准、报得清、查得到。','accounting'],

  // 碳市场原理
  ['cap-and-trade','总量控制与交易','Cap and Trade','设定排放总量上限并允许配额交易的市场机制。','定个天花板再让买卖。','carbonmarket'],
  ['emission-allowance','碳排放配额','Emission Allowance','政府分配给排放主体的允许排放量额度。','允许排多少的额度。','carbonmarket'],
  ['allowance-allocation','配额分配','Allowance Allocation','把排放总量上限分解到各排放主体的过程。','额度怎么分下去。','carbonmarket'],
  ['benchmarking-method','基准线法','Benchmarking Method','按行业基准排放强度分配配额的方法。','照行业先进水平划尺。','carbonmarket'],
  ['grandfathering','历史法','Grandfathering','按历史排放水平分配配额的方法。','按以前排多少来分。','carbonmarket'],
  ['carbon-price','碳价','Carbon Price','碳排放配额或减排量在市场上的成交价格。','排一吨碳的价钱。','carbonmarket'],
  ['carbon-leakage','碳泄漏','Carbon Leakage','因碳约束差异导致高碳产业向约束宽松地区转移。','碳跟着工厂跑到别处。','carbonmarket'],
  ['offset-mechanism','抵消机制','Offset Mechanism','允许用自愿减排量抵销部分履约义务的机制。','用减排量顶一部分账。','carbonmarket'],

  // 全国碳市场
  ['national-ets','全国碳市场','National ETS','全国统一的碳排放权交易市场。','全国的碳买卖总场。','nationalets'],
  ['coverage-threshold','纳入门槛','Coverage Threshold','纳入碳市场管理的排放量或产能门槛。','多大的厂才要管。','nationalets'],
  ['compliance-cycle','履约周期','Compliance Cycle','配额分配、交易、核查与清缴组成的周期。','一年一轮的流程。','nationalets'],
  ['surrender','配额清缴','Surrender','履约主体在截止日前上缴与排放量相当的配额。','交账销号。','nationalets'],
  ['verification','核查','Verification','由第三方机构对排放报告进行独立核查。','请外人来查账。','nationalets'],
  ['emission-data-quality','排放数据质量管理','Emission Data Quality Control','对排放数据采集、计量与报告全过程的质量管理。','保证账本准。','nationalets'],
  ['non-compliance-penalty','未履约处罚','Non-compliance Penalty','对未按期足额清缴配额主体的处罚措施。','欠账要罚。','nationalets'],
  ['ets-expansion','碳市场扩容','ETS Expansion','将更多行业与主体纳入碳市场覆盖范围。','把更多厂拉进来。','nationalets'],

  // 地方碳市场试点
  ['pilot-ets','地方试点碳市场','Pilot ETS','在部分省市先行开展碳排放权交易试点的市场。','先挑几个地方试。','pilotets'],
  ['beijing-ets','北京碳市场','Beijing ETS','北京开展的碳排放权交易试点。','北京的试点。','pilotets'],
  ['guangdong-ets','广东碳市场','Guangdong ETS','广东开展的碳排放权交易试点,规模居前。','广东的试点。','pilotets'],
  ['hubei-ets','湖北碳市场','Hubei ETS','湖北开展的碳排放权交易试点,交易活跃。','湖北的试点。','pilotets'],
  ['pilot-linkage','试点与全国衔接','Pilot-National Linkage','地方试点向全国碳市场过渡与衔接的安排。','地方并到中央。','pilotets'],
  ['allowance-auction','有偿分配','Allowance Auction','通过拍卖方式有偿取得配额的分配形式。','花钱买额度。','pilotets'],

  // CCER 与自愿减排
  ['ccer','CCER','CCER','国家核证自愿减排量,可用于碳市场抵消。','自己减的碳能卖钱。','ccer'],
  ['methodology','方法学','Methodology','审定自愿减排项目减排量所依据的技术规范。','算减排量的公式书。','ccer'],
  ['voluntary-emission-reduction','自愿减排','Voluntary Emission Reduction','主体自愿实施并经核证的温室气体减排活动。','主动减下来的碳。','ccer'],
  ['forestry-carbon-sink','林业碳汇','Forestry Carbon Sink','通过造林营林增加碳吸收形成的可交易减排量。','种树也能卖碳。','ccer'],
  ['additionality','额外性','Additionality','项目减排量相对于基准情景是额外产生的。','没有这个项目就不会减。','ccer'],
  ['baseline-scenario','基准线情景','Baseline Scenario','不实施项目时可能发生的排放情景。','假如啥都不做。','ccer'],
  ['ccer-registry','减排量签发','Issuance of Reduction','经审定核查后由主管机构签发减排量的过程。','盖个章才生效。','ccer'],

  // 绿证与绿电
  ['green-power','绿电','Green Power','以可再生能源生产、具有环境属性的电力。','干净的电子。','greenpower'],
  ['green-power-trading','绿电交易','Green Power Trading','以绿电及其环境属性为标的的交易。','买干净的电子。','greenpower'],
  ['certificate-power-unified','证电合一','Certificate-Power Unification','绿证与绿电物理电量捆绑交易的模式。','证跟电一起走。','greenpower'],
  ['certificate-power-separate','证电分离','Certificate-Power Separation','绿证与物理电量分开交易与持有的模式。','证和电各走各的。','greenpower'],
  ['consumption-responsibility','消纳责任权重','Consumption Responsibility Weight','市场主体应消纳可再生能源电量的最低比重。','必须用多少绿电。','greenpower'],
  ['green-power-certificate-issuance','绿证核发','Certificate Issuance','对可再生能源电量核发绿证的行政环节。','给绿电发证。','greenpower'],
  ['re100','RE100','RE100','国际企业承诺 100% 使用可再生能源电力的倡议。','大公司承诺全用绿电。','greenpower'],
  ['environmental-attribute','环境属性','Environmental Attribute','可再生能源电力相对化石电力的低碳等环境价值。','绿电的附加卖点。','greenpower'],

  // 碳资产与碳金融
  ['carbon-asset','碳资产','Carbon Asset','由配额、减排量等构成的具有价值与可交易性的资产。','碳也能当资产。','carbonfinance'],
  ['carbon-pledge','碳质押','Carbon Pledge','以碳资产作为质押物取得融资的方式。','拿碳去抵押借钱。','carbonfinance'],
  ['carbon-repo','碳回购','Carbon Repo','以碳资产为标的、约定到期回购的融资安排。','先卖后买,借钱周转。','carbonfinance'],
  ['carbon-forward','碳远期','Carbon Forward','约定未来某时按约定价格交割碳资产的合约。','提前把价格锁住。','carbonfinance'],
  ['carbon-fund','碳基金','Carbon Fund','以碳资产或减排项目为投资标的的基金。','专门投碳的钱。','carbonfinance'],
  ['carbon-insurance','碳保险','Carbon Insurance','对碳资产价格波动或交付风险提供的保险。','给碳上保险。','carbonfinance'],
  ['carbon-accounting-treatment','碳会计处理','Carbon Accounting Treatment','碳资产与碳负债在财务上的确认、计量与披露。','碳怎么记账。','carbonfinance'],

  // 国际规则与碳关税
  ['paris-agreement','巴黎协定','Paris Agreement','全球应对气候变化、控制温升的国际协定。','全球一起减碳的约定。','international'],
  ['nationally-determined-contribution','国家自主贡献','NDC','各国自主提出的减排目标与行动。','各国自报减碳任务。','international'],
  ['eu-ets','欧盟碳市场','EU ETS','欧盟建立的全球首个跨国碳排放交易体系。','欧洲的碳市场。','international'],
  ['cbam','碳边境调节机制','CBAM','对进口高碳产品征收的碳边境调节措施。','进口也得交碳钱。','international'],
  ['carbon-border-adjustment','碳边境调节','Carbon Border Adjustment','对碳约束差异导致的竞争力与泄漏问题在边境采取的调节措施。','在关口把碳账补平。','international'],
  ['article-6','第六条','Article 6','巴黎协定中关于国际碳市场合作机制的条款。','跨国买卖碳的规则。','international'],
  ['international-carbon-market-linkage','国际碳市场链接','International Carbon Market Linkage','不同碳市场之间相互承认与连接交易。','各国碳市场互通。','international'],
  ['embedded-emission','隐含排放','Embedded Emission','产品在生产过程中累积的温室气体排放。','产品里藏着的碳。','international'],

  // 碳管理与实务
  ['carbon-inventory','碳盘查','Carbon Inventory','按标准对特定时期内温室气体排放进行量化的过程。','给企业算一次碳账。','practice'],
  ['carbon-inventory-report','碳盘查报告','Carbon Inventory Report','记录温室气体排放核算结果与方法的报告。','企业碳账本。','practice'],
  ['carbon-footprint','碳足迹','Carbon Footprint','产品或活动全生命周期产生的温室气体排放总量。','一件东西摊多少碳。','practice'],
  ['carbon-neutral-certification','碳中和认证','Carbon Neutral Certification','经核查确认实现碳中和的第三方认证。','官方盖章说你是零碳。','practice'],
  ['carbon-disclosure','碳信息披露','Carbon Disclosure','企业对外公开其碳排放与气候风险信息。','把碳账摊开给人看。','practice'],
  ['carbon-management-system','碳管理体系','Carbon Management System','企业为管理碳数据、履约与减排建立的制度与流程。','一套管碳的章程。','practice'],
  ['carbon-officer','碳管理师','Carbon Management Professional','负责企业碳核算、履约与减排的专业岗位。','专门管碳的人。','practice'],
  ['abatement-cost','减排成本','Abatement Cost','每减少一吨二氧化碳当量所需的成本。','减一吨碳要花多少钱。','practice'],
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
let s = '/* 模块元数据 + 学习路径(能源政策与碳市场)(自动生成,勿手改) */\n';
s += 'window.ENC = window.ENC || {};\n';
s += 'ENC.modules = ' + J(mods) + ';\n';
s += 'ENC.path = ' + J(path_) + ';\n';
s += 'ENC.totalLessons = ENC.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(能源政策与碳市场)(自动生成) {id,name,en,def,analogy,module} */\nwindow.ENC = window.ENC || {};\nENC.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nENC.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
