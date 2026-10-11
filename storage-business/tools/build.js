/* 储能商业模式 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及电价机制、辅助服务补偿、容量租赁、需求响应与补贴政策的具体内容,
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
  ['guide','导览','怎么用这个站、储能靠什么赚钱、和储能技术通识的差异、学习路线','基础','Guide'],
  ['value','储能价值来源','为什么需要储能、时间转移、容量价值、调节价值、备用价值、黑启动、价值叠加','基础','Value'],
  ['tech','技术路线与经济性','锂电、液流、压缩空气、飞轮、钠电、寿命与衰减、度电成本 LCOS','基础','Tech'],
  ['calc','收益测算方法','收益来源清单、峰谷套利、容量租赁、辅助服务、现货套利、需量管理、综合收益、敏感性分析','核心','Calculation'],
  ['arbitrage','峰谷套利与需量管理','峰谷价差、循环次数、充放策略、需量电费、两部制电价、削峰填谷、收益边界','核心','Arbitrage'],
  ['ancillary','辅助服务收益','调频 AGC、一次调频、调峰、备用、无功、收益分配、政策变化','核心','Ancillary'],
  ['spot','现货与容量收益','现货套利、容量租赁、容量补偿、共享储能、独立储能、价格波动、收益波动','核心','Spot'],
  ['sharing','共享储能与租赁','共享储能模式、容量租赁、容量转让、多用户分摊、结算、风险','进阶','Sharing'],
  ['commercial','工商业储能','客户画像、收益测算、合同能源管理、投资方与业主、分成模式、融资租赁、风险控制','核心','Commercial'],
  ['grid','电网侧储能','定位、替代输配电投资、延缓扩容、系统备用、调度调用、成本疏导、监管','进阶','Grid Side'],
  ['sourceside','电源侧储能','新能源配储、强制配储政策、减少弃电、平滑出力、一次调频、联合运行、政策退坡','进阶','Source Side'],
  ['vpp','储能与虚拟电厂','储能聚合、需求响应、现货参与、聚合收益、结算、协同','进阶','Storage and VPP'],
  ['market','市场化机制','谁为储能付费、成本疏导、容量机制、辅助服务市场、现货市场、价格机制、政策趋势','核心','Market Mechanism'],
  ['invest','投资与金融','投资测算模型、IRR、NPV、回收期、融资方式、租赁与自投比较、风险与保险','应用','Investment'],
  ['practice','实战案例','用户侧、电网侧、电源侧、独立储能、收益复盘、失败案例、能力地图','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['storage-business','储能商业模式','Storage Business Model','储能项目获取收入并覆盖成本的整体方式与结构。','这套设备靠什么把本赚回来。','guide'],
  ['revenue-stack','收益叠加','Revenue Stack','把多种收入来源叠加到一个储能资产上的做法。','一份投资,几份收入。','guide'],
  ['lcos','度电成本','LCOS','平准化的储能度电成本,摊到每一度充放电量上的总成本。','每倒腾一度电要花多少钱。','guide'],
  ['business-model-comparison','模式比较','Business Model Comparison','对不同商业模式在收益、风险与门槛上的横向比对。','几种路子放一起比。','guide'],
  ['payback-period','回收期','Payback Period','累计收益抵平初始投资所需的年数。','几年能回本。','guide'],

  // 储能价值来源
  ['energy-shifting','时间转移','Energy Shifting','把低价时段的电移到高价时段使用或出售。','低买高卖。','value'],
  ['capacity-value','容量价值','Capacity Value','在容量紧张时提供可用出力所体现的价值。','关键时刻顶得上。','value'],
  ['regulation-value','调节价值','Regulation Value','快速响应指令、跟踪负荷波动所体现的价值。','让它快它就快。','value'],
  ['reserve-value','备用价值','Reserve Value','随时可调用以应对突发缺额的价值。','留着救急。','value'],
  ['blackstart-value','黑启动价值','Black Start Value','在大停电后率先供电恢复电网的价值。','一片黑里第一盏灯。','value'],
  ['value-stacking','价值叠加','Value Stacking','同一资产同时提供多种服务以获得多重收益。','一台设备干几份活。','value'],
  ['flexibility','灵活性','Flexibility','系统在时间与功率上可调节的能力。','能屈能伸。','value'],
  ['system-balance','系统平衡','System Balance','发用电在每一时刻保持相等的运行要求。','发多少用多少。','value'],

  // 技术路线与经济性
  ['lithium-battery','锂离子电池','Lithium-ion Battery','当前主流储能电池技术,能量密度与效率较高。','最常见的那种大电池。','tech'],
  ['flow-battery','液流电池','Flow Battery','用电解液储能的电池,适合长时储能。','把电存在两个罐子里。','tech'],
  ['compressed-air','压缩空气储能','Compressed Air Storage','把电转成压缩空气储存、需要时再发电。','把电压进山洞里。','tech'],
  ['flywheel','飞轮储能','Flywheel Storage','用高速旋转的飞轮储能的短时高功率技术。','靠转得快来存能量。','tech'],
  ['sodium-battery','钠离子电池','Sodium-ion Battery','以钠为载体的电池路线,原料更易得。','不用锂也能做电池。','tech'],
  ['cycle-life','循环寿命','Cycle Life','电池在容量衰减到阈值前可完成的充放次数。','能充放多少次。','tech'],
  ['degradation','衰减','Degradation','储能随使用与时间推移容量与效率下降的现象。','越用越不顶用。','tech'],
  ['round-trip-efficiency','循环效率','Round-trip Efficiency','充进去与放出来电量的比值。','进出还剩几成。','tech'],

  // 收益测算方法
  ['revenue-model','收益模型','Revenue Model','把各类收入来源与成本按时间序列建模测算的方法。','把账按年按月推一遍。','calc'],
  ['peak-valley-spread','峰谷价差','Peak-valley Spread','峰段电价与谷段电价之间的差额。','高价与低价差多少。','calc'],
  ['demand-charge','需量电费','Demand Charge','按最大需量而非用电量计收的电费部分。','看你最高峰拉了多少。','calc'],
  ['capacity-lease','容量租赁','Capacity Lease','把储能容量按功率或容量出租收取租金。','把容量租给别人用。','calc'],
  ['arbitrage-revenue','套利收益','Arbitrage Revenue','通过低充高放获得的价差收入。','一充一放的差价。','calc'],
  ['sensitivity','敏感性分析','Sensitivity Analysis','考察关键参数变化对收益影响程度的方法。','哪个参数最要紧。','calc'],
  ['internal-rate-of-return','内部收益率','IRR','使项目净现值为零的折现率。','这笔投资年化能挣多少。','calc'],
  ['net-present-value','净现值','NPV','未来现金流按折现率折现后的总和。','把未来的钱折到今天看。','calc'],

  // 峰谷套利与需量管理
  ['charge-discharge-strategy','充放策略','Charge-discharge Strategy','决定何时充、何时放、充放多少功率的规则。','什么时候进什么时候出。','arbitrage'],
  ['daily-cycle','日循环','Daily Cycle','储能每天完成一次完整充放的运行模式。','一天一来回。','arbitrage'],
  ['depth-of-discharge','放电深度','Depth of Discharge','一次放电放掉额定容量的比例。','一次放掉多少。','arbitrage'],
  ['two-part-tariff','两部制电价','Two-part Tariff','由基本电费与电度电费两部分构成的电价。','月租加用量。','arbitrage'],
  ['peak-shaving-storage','削峰填谷','Peak Shaving and Valley Filling','用储能削减高峰负荷、填补低谷负荷的做法。','把高的削到谷里。','arbitrage'],
  ['revenue-boundary','收益边界','Revenue Boundary','在给定价差与循环次数下收益能达到的上下限。','最多能挣多少、最少是多少。','arbitrage'],
  ['state-of-charge','荷电状态','State of Charge','电池当前剩余电量占额定容量的比例。','还剩几格电。','arbitrage'],
  ['degradation-cost','衰减成本','Degradation Cost','每完成一次循环所摊销的寿命损耗成本。','用一次少一点寿命。','arbitrage'],

  // 辅助服务收益
  ['frequency-regulation','调频','Frequency Regulation','跟随调度指令快速调整出力以维持频率。','电网问你快不快。','ancillary'],
  ['primary-frequency','一次调频','Primary Frequency Response','发电机组按频率偏差自动快速响应。','不用命令自己上。','ancillary'],
  ['ancillary-storage','辅助服务储能','Storage for Ancillary Services','以提供辅助服务为主要收益来源的储能应用。','专门给电网打下手的储能。','ancillary'],
  ['mileage-payment','里程补偿','Mileage Payment','按实际调节里程支付辅助服务费用的方式。','按你跑了多少付钱。','ancillary'],
  ['capability-payment','容量补偿','Capacity Payment','按可提供能力而非实际调用支付的费用。','能不能用就付钱。','ancillary'],
  ['ancillary-allocation','费用分摊','Cost Allocation','辅助服务费用在各市场主体间的分摊规则。','谁受益谁掏钱。','ancillary'],
  ['response-speed','响应速度','Response Speed','从接到指令到达到目标出力的时间。','叫你多快能到位。','ancillary'],
  ['performance-score','考核系数','Performance Score','按响应精度与速度折算的补偿调整系数。','干得好不好按分算钱。','ancillary'],

  // 现货与容量收益
  ['spot-arbitrage','现货套利','Spot Arbitrage','依据现货价格波动进行充放以获取价差。','看着价格表进进出出。','spot'],
  ['independent-storage','独立储能','Independent Storage','不依附于特定电源或用户的独立并网储能电站。','自己立项自己赚钱。','spot'],
  ['shared-storage','共享储能','Shared Storage','容量可被多方共同使用的储能电站模式。','一座电站大家共用。','spot'],
  ['capacity-compensation','容量补偿','Capacity Compensation','为保障可用容量而给予的固定补偿。','保底的那笔钱。','spot'],
  ['price-volatility','价格波动','Price Volatility','市场价格在时间上的起伏幅度。','价上上下下。','spot'],
  ['revenue-volatility','收益波动','Revenue Volatility','收益随价格与调用情况变化的不确定性。','挣多挣少说不准。','spot'],
  ['ancillary-market','辅助服务市场','Ancillary Service Market','辅助服务通过市场竞价获取补偿的机制。','打下手也进场竞价。','spot'],
  ['spot-price-signal','价格信号','Price Signal','价格对供需状况的反映与对投资的引导。','价格在告诉你要不要建。','spot'],

  // 共享储能与租赁
  ['lease-model','租赁模式','Lease Model','投资方持有资产、用户按需租用容量的模式。','用多少租多少。','sharing'],
  ['capacity-transfer','容量转让','Capacity Transfer','把已租容量在用户之间再转让的安排。','用不完的再转给别人。','sharing'],
  ['multi-user-allocation','多用户分摊','Multi-user Allocation','把一座电站的成本与收益在多个用户间分配。','一座站几家一起摊。','sharing'],
  ['settlement-rule','结算规则','Settlement Rule','约定电量、容量与费用如何计算与支付的规则。','怎么算钱怎么付。','sharing'],
  ['lease-risk','租赁风险','Lease Risk','承租方违约、调用不足或价格变化带来的风险。','租出去也可能收不回本。','sharing'],
  ['utilization-rate','利用率','Utilization Rate','储能实际调用量相对可用能力的比例。','到底用了多少次。','sharing'],

  // 工商业储能
  ['ci-customer-profile','客户画像','Customer Profile','对工商业用户用电特征与用电成本结构的刻画。','先看清客户是什么用电习惯。','commercial'],
  ['emc','合同能源管理','EMC','由服务方投资建设、与用户按约定分成收益的模式。','我出钱你出屋顶,收益分。','commercial'],
  ['profit-sharing','收益分成','Profit Sharing','投资方与业主按比例分配节能或套利收益。','挣了钱怎么分。','commercial'],
  ['financial-lease','融资租赁','Financial Lease','以租赁方式取得设备使用权并分期支付的融资安排。','先租后用,分年付钱。','commercial'],
  ['site-conditions','现场条件','Site Conditions','配电容量、场地、消防与并网条件等落地约束。','能不能装得下、接得上。','commercial'],
  ['load-profile','负荷曲线','Load Profile','用户用电功率随时间变化的曲线。','一天里用电怎么起伏。','commercial'],
  ['investment-boundary','投资边界','Investment Boundary','在给定条件下项目可行所要求的最低收益水平。','低于这条线就不划算。','commercial'],
  ['roof-top-storage','用户侧储能','Behind-the-meter Storage','装在用户侧、用于降低用电成本的储能。','装在自家院子里的电池。','commercial'],

  // 电网侧储能
  ['grid-side-storage','电网侧储能','Grid-side Storage','接入电网侧、服务系统运行需要的储能。','给电网当工具用。','grid'],
  ['deferral-value','延缓扩容','Deferral Value','用储能推迟输配电设施扩容投资的价值。','先不建线,拖几年再说。','grid'],
  ['system-reserve','系统备用','System Reserve','为系统安全预留的可用调节能力。','留着以防万一。','grid'],
  ['dispatch-call','调度调用','Dispatch Call','调度机构按需要下达的调用指令。','叫你上你就上。','grid'],
  ['cost-recovery','成本疏导','Cost Recovery','把电网侧投资与运行成本通过价格机制回收。','这笔钱从哪里收回来。','grid'],
  ['regulation-review','监管审核','Regulatory Review','对电网侧投资必要性、成本与效率的审查。','有人管着你花钱。','grid'],
  ['grid-adequacy','电网充裕度','Grid Adequacy','电网在各类工况下满足用电需求的能力。','顶得住顶不住。','grid'],
  ['asset-utilization','资产利用率','Asset Utilization','资产被实际使用的程度与效率。','买来到底用了多少。','grid'],

  // 电源侧储能
  ['new-energy-storage','新能源配储','Storage Co-located with Renewables','新能源电站按政策要求配置的储能。','风光项目必须搭一块电池。','sourceside'],
  ['mandatory-storage','强制配储','Mandatory Storage Requirement','以行政要求方式规定新能源项目配置储能比例。','政策要求你必须配。','sourceside'],
  ['curtailment-reduction','减少弃电','Curtailment Reduction','通过储能把本会被弃掉的电量存下来。','把扔掉的电捡回来。','sourceside'],
  ['output-smoothing','平滑出力','Output Smoothing','用储能抑制新能源出力的剧烈波动。','让曲线别那么抖。','sourceside'],
  ['co-located-operation','联合运行','Co-located Operation','储能与电源作为一个整体接受调度与结算。','绑在一起当成一个电站。','sourceside'],
  ['policy-stepdown','政策退坡','Policy Stepdown','配储强制要求或补贴逐步放宽乃至取消。','扶上马之后要松手。','sourceside'],
  ['self-consumption','自用比例','Self-consumption Ratio','储能存下的电用于自身消纳的比例。','存下来的电自己用多少。','sourceside'],
  ['grid-connection-point','并网点','Grid Connection Point','电源或储能与电网物理连接的位置。','接口在哪。','sourceside'],

  // 储能与虚拟电厂
  ['storage-aggregation','储能聚合','Storage Aggregation','把分散的储能资源聚合起来统一调度。','把零散电池攒成一个大队。','vpp'],
  ['demand-response','需求响应','Demand Response','用户按价格或激励信号调整用电的行为。','叫你少用你就少用。','vpp'],
  ['aggregator','聚合商','Aggregator','代表分散资源参与市场或响应邀约的主体。','替大家去谈生意的人。','vpp'],
  ['aggregated-revenue','聚合收益','Aggregated Revenue','聚合后整体获得的收益,再在各资源间分配。','一群人干完活一起分钱。','vpp'],
  ['response-call','响应邀约','Response Invitation','由电网或聚合商发出的需求响应调用通知。','来活了,接不接。','vpp'],
  ['baseline-load','基线负荷','Baseline Load','用于衡量响应量的对照负荷水平。','不响应的话本来会用多少。','vpp'],

  // 市场化机制
  ['who-pays','谁为储能付费','Who Pays for Storage','明确储能收益的最终支付主体这一核心问题。','这笔钱到底谁掏。','market'],
  ['price-mechanism','价格机制','Price Mechanism','通过价格信号引导储能投资与运行的方式。','用价格指挥投资。','market'],
  ['spot-market-participation','现货市场参与','Spot Market Participation','储能作为市场主体参与现货交易的过程。','进场买卖电。','market'],
  ['capacity-mechanism','容量机制','Capacity Mechanism','为可用容量付费的机制安排。','买的是能不能用。','market'],
  ['market-access','市场准入','Market Access','储能参与各类市场所须满足的条件。','想玩先够门槛。','market'],
  ['policy-trend','政策趋势','Policy Trend','政策对储能定位与支持方式的演变方向。','风往哪边吹。','market'],
  ['technical-requirement','技术准入要求','Technical Requirement','并网、涉网性能与安全方面须满足的技术条件。','过不过得了技术这关。','market'],
  ['revenue-certainty','收益确定性','Revenue Certainty','收益在长期内可预期与稳定的程度。','这份收入稳不稳。','market'],

  // 投资与金融
  ['investment-model','投资测算模型','Investment Model','把投资、成本、收益与融资按年建模测算的工具。','把账摊到十年二十年算。','invest'],
  ['discount-rate','折现率','Discount Rate','把未来现金流折算为现值的利率。','未来的钱值多少今天的钱。','invest'],
  ['equity-irr','资本金收益率','Equity IRR','扣除融资后自有资金部分的内部收益率。','自己那部分钱挣多少。','invest'],
  ['financing-structure','融资结构','Financing Structure','项目资本金与债务的比例与安排。','自己出多少、借多少。','invest'],
  ['self-investment','自投模式','Self-investment Model','业主自行投资建设储能并独享收益的模式。','自己掏钱自己赚。','invest'],
  ['insurance','保险','Insurance','对设备损失、性能不达标等风险的保障安排。','买个安心。','invest'],
  ['asset-disposal','资产处置','Asset Disposal','项目期满后设备转让、回收或延寿的处理。','到期之后这套设备怎么办。','invest'],
  ['project-risk','项目风险','Project Risk','项目在建设、运营与结算各阶段面临的风险。','哪里可能出岔子。','invest'],

  // 实战案例
  ['user-side-case','用户侧案例','User-side Case','工商业用户配置储能的典型项目与收益复盘。','装在工厂里的那一类。','practice'],
  ['grid-side-case','电网侧案例','Grid-side Case','电网侧储能项目的典型做法与效果复盘。','电网自己建的那一类。','practice'],
  ['source-side-case','电源侧案例','Source-side Case','新能源配储项目的典型做法与效果复盘。','风光场站旁边的那一块。','practice'],
  ['independent-case','独立储能案例','Independent Storage Case','独立储能电站的商业模式与运行复盘。','单独一座站自己挣钱。','practice'],
  ['revenue-review','收益复盘','Revenue Review','对项目实际收益与测算差异的原因分析。','本来算的和实际差在哪。','practice'],
  ['failure-case','失败案例','Failure Case','因收益不足、调用不够或成本失控而失败的项目。','翻车的那些。','practice'],
  ['capability-map','能力地图','Capability Map','从事储能业务所需知识与技能的清单与路径。','干这行要会些什么。','practice'],
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
let s = '/* 模块元数据 + 学习路径(储能商业模式)(自动生成,勿手改) */\n';
s += 'window.ESB = window.ESB || {};\n';
s += 'ESB.modules = ' + J(mods) + ';\n';
s += 'ESB.path = ' + J(path_) + ';\n';
s += 'ESB.totalLessons = ESB.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(储能商业模式)(自动生成) {id,name,en,def,analogy,module} */\nwindow.ESB = window.ESB || {};\nESB.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nESB.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
