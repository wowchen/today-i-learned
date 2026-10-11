/* 电力现货与交易实务 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及市场规则、出清机制、报价限额、结算口径、考核标准与价格水平的具体内容,
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
  ['guide','导览','怎么用这个站、现货交易是什么、和电力市场通识的差异、学习路线','基础','Guide'],
  ['spotbasics','现货市场基础','为什么有现货、与中长期的关系、出清机制、价格形成、节点与分区电价','基础','Spot Basics'],
  ['clearing','出清与定价','机组组合、经济调度、边际机组、日前与实时出清、阻塞再调度、结算分摊','核心','Clearing'],
  ['bidding','报价与策略','报价三要素、成本与报价、分段报价、报价约束、市场力、风险偏好、报价复盘','核心','Bidding'],
  ['settlement','结算与偏差','结算方式、日清月结、偏差考核、正负偏差、与中长期衔接、不平衡资金、看懂结算单','核心','Settlement'],
  ['trading','交易实务','交易员一天、中长期签约、现货申报、日前与日内、交易策略、交易纪律、交易系统','核心','Trading'],
  ['retailer','售电公司运营','怎么赚钱、购售电匹配、偏差管理、客户结构、套餐设计、风险对冲、退出与清算','核心','Retailer'],
  ['risk','风险与对冲','价格风险、量价偏差、金融输电权、差价合约、期权对冲、保证金与违约、风险管理体系','进阶','Risk'],
  ['ancillary','辅助服务市场','调频、调峰、备用、无功、黑启动、辅助服务定价、费用分摊','核心','Ancillary'],
  ['capacity','容量机制','容量电价、容量补偿、容量市场、稀缺定价、可靠性定价、机制比较','进阶','Capacity'],
  ['green','绿电与现货','绿电参与现货、环境价值、绿证与现货、新能源入市、报价下限、消纳','进阶','Green'],
  ['forecast','预测与数据','负荷预测、新能源功率预测、价格预测、气象数据、数据质量、预测误差、预测系统','进阶','Forecast'],
  ['regulation','监管与合规','市场监管、信息披露、市场力认定、违规行为、合规体系、争议处理、信用管理','进阶','Regulation'],
  ['case','案例复盘','广东现货、山西现货、山东现货、甘肃与浙江、负电价、极端价格、复盘方法','应用','Case'],
  ['practice','实战与成长','交易员能力、交易复盘、指标看板、团队配置、模拟交易、职业路径、常见错误','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['spot-market','电力现货市场','Electricity Spot Market','对次日及更短周期的电量进行集中竞价与出清的市场。','当天/隔天的电当天定。','guide'],
  ['day-ahead','日前市场','Day-ahead Market','提前一天对次日各时段电量进行报价与出清的市场。','头一天把明天的电定下来。','guide'],
  ['real-time','实时市场','Real-time Market','对运行当日临近时段进行平衡与结算的市场。','临时补差价的场子。','guide'],
  ['trading-practice','交易实务','Trading Practice','交易员在日常工作中做申报、盯盘、复盘与风控的具体做法。','纸面规则落到操作台上那一步。','guide'],
  ['clearing-price','出清价','Clearing Price','市场撮合后使供需平衡的成交价格。','买卖两边刚好对上的那个价。','guide'],

  // 现货市场基础
  ['spot-vs-forward','现货与中长期','Spot vs Forward','现货管短期平衡,中长期锁量锁价,两者互为补充。','一个管天,一个管年。','spotbasics'],
  ['market-structure','市场体系','Market Structure','由中长期、现货、辅助服务、容量等市场共同构成的整体。','一桌菜,各有各的作用。','spotbasics'],
  ['supply-demand','供需平衡','Supply-demand Balance','发用电在每一时刻必须严格相等这一物理约束。','电不能囤,发多少用多少。','spotbasics'],
  ['marginal-cost','边际成本','Marginal Cost','每多发一单位电量所增加的成本。','再多做一份要花的钱。','spotbasics'],
  ['nodal-price','节点电价','Nodal Price','按电网各节点分别计算的出清价格,反映阻塞与损耗。','每个路口的水价不一样。','spotbasics'],
  ['zonal-price','分区电价','Zonal Price','按若干相邻节点合并成区后计算的电价。','把附近路口并成一个价。','spotbasics'],
  ['merit-order','优先次序','Merit Order','按报价从低到高排列机组、依次满足负荷的顺序。','谁便宜谁先上。','spotbasics'],
  ['price-cap','价格上限','Price Cap','市场对出清价格设定的最高限值。','天花板价。','spotbasics'],

  // 出清与定价
  ['unit-commitment','机组组合','Unit Commitment','决定哪些机组在哪些时段开机运行的优化问题。','排班表。','clearing'],
  ['economic-dispatch','经济调度','Economic Dispatch','在已开机机组间分配出力以最小化总成本。','排好班后谁多干谁少干。','clearing'],
  ['marginal-unit','边际机组','Marginal Unit','决定该时段出清价格的最后一台机组。','最后一个被叫到号的人定价。','clearing'],
  ['security-constrained','安全约束出清','Security-constrained Clearing','在满足电网安全约束前提下求最优出清方案。','既要便宜又不能跳闸。','clearing'],
  ['congestion','阻塞','Congestion','输电通道容量不足导致无法按最低成本送电。','路太窄,便宜的电送不过来。','clearing'],
  ['re-dispatch','再调度','Re-dispatch','为消除阻塞而调整机组出力或启停。','临时改排班绕开堵点。','clearing'],
  ['uplift','不平衡资金','Uplift','市场结算中收支难以完全平衡而产生的差额分摊。','账不平的那部分大家摊。','clearing'],
  ['price-spike','价格尖峰','Price Spike','供需紧张时段出清价大幅跳升的现象。','抢电时的跳价。','clearing'],

  // 报价与策略
  ['bid-three','报价三要素','Bid Components','报价通常包含量、价与时段三个部分。','报多少、报多贵、报哪段。','bidding'],
  ['segmented-bid','分段报价','Segmented Bid','把机组容量分成若干段分别报价。','一份报价拆成几档卖。','bidding'],
  ['opportunity-cost','机会成本','Opportunity Cost','为获取更高收益而放弃的次优选择价值。','不卖这个还能卖多少。','bidding'],
  ['market-power','市场力','Market Power','某主体影响市场价格的能力。','大到能左右价格。','bidding'],
  ['bid-limit','报价限额','Bid Limit','监管对报价上下限的规定。','不许乱喊价。','bidding'],
  ['risk-appetite','风险偏好','Risk Appetite','交易主体对收益波动与亏损的接受程度。','敢不敢赌这一把。','bidding'],
  ['bid-review','报价复盘','Bid Review','事后分析报价与结果差异、改进策略的过程。','回头看看当时怎么想的。','bidding'],
  ['markup','加价','Markup','在成本之上为提高收益而加的价差。','成本价上再抬一点。','bidding'],

  // 结算与偏差
  ['settlement','结算','Settlement','按成交与计量结果计算各方应收应付的过程。','把账算清楚。','settlement'],
  ['deviation','偏差','Deviation','实际发用电量与计划或成交量的差额。','说好的数和实际不一样。','settlement'],
  ['deviation-penalty','偏差考核','Deviation Penalty','对超出允许范围的偏差收取的考核费用。','差太多要挨罚。','settlement'],
  ['two-settlement','双结算','Two-settlement System','日前按出清价结算、实时按偏差再结算的制度。','先按计划结一次,再按实际补一次。','settlement'],
  ['contract-for-difference','差价合约','Contract for Difference','约定参考价与合同价之差进行结算的金融合约。','只结算差价,不真的交割电。','settlement'],
  ['metering','计量','Metering','对发用电量进行测量与记录的过程。','抄表。','settlement'],
  ['settlement-statement','结算单','Settlement Statement','逐项列出电量、价格与金额的结算凭据。','账单明细。','settlement'],
  ['imbalance','不平衡电量','Imbalance Energy','实际与计划不一致而被实时市场接纳的电量。','临时多出来或少掉的那部分。','settlement'],

  // 交易实务
  ['trader-day','交易员一天','A Trader Day','交易员从开盘前准备到收盘复盘的完整工作节奏。','从早会到复盘的一天。','trading'],
  ['declaration','申报','Declaration','向交易系统提交电量与价格意向的行为。','把想法填进系统。','trading'],
  ['intraday','日内市场','Intraday Market','在运行当日对尚未交付时段进行交易的市场。','当天还能再改主意。','trading'],
  ['position','持仓','Position','交易主体在某一时段已成交的电量敞口。','手里攥着多少电。','trading'],
  ['trading-strategy','交易策略','Trading Strategy','围绕目标收益与风险约束形成的申报与调整规则。','打法的套路。','trading'],
  ['trading-discipline','交易纪律','Trading Discipline','严格执行既定策略与风控,不被情绪带偏。','该止损就止损。','trading'],
  ['trading-system','交易系统','Trading System','支持申报、查询、结算与风控的信息系统。','干活的工具台。','trading'],
  ['curve-trading','曲线交易','Curve Trading','按逐时段电量曲线进行买卖的方式。','一小时一小时地对。','trading'],

  // 售电公司运营
  ['retailer','售电公司','Electricity Retailer','代理用户参与市场、赚取购售电价差的主体。','批发来零售出去。','retailer'],
  ['purchase-sale-match','购售电匹配','Purchase-sale Matching','使购电曲线与用户用电曲线尽量吻合。','进多少货卖多少。','retailer'],
  ['package-design','套餐设计','Package Design','面向不同用户设计的电价与结算方案。','菜单怎么排。','retailer'],
  ['customer-mix','客户结构','Customer Mix','代理用户的行业、规模与用电特性构成。','手里客户是些什么人。','retailer'],
  ['proxy-purchase','代购电','Proxy Purchase','电网企业代理暂未直接入市用户购电的机制。','先替你买着。','retailer'],
  ['retail-spread','购售价差','Retail Spread','零售电价与购电成本之间的差额空间。','赚的这点差。','retailer'],
  ['exit-clearing','退出与清算','Exit and Clearing','售电公司退出市场时的余额处理与责任交接。','不干了要把账结清。','retailer'],

  // 风险与对冲
  ['price-risk','价格风险','Price Risk','出清价格波动带来收益不确定的风险。','价说变就变。','risk'],
  ['volume-risk','电量风险','Volume Risk','实际电量与计划不符带来的风险。','量说变就变。','risk'],
  ['financial-transmission-right','金融输电权','Financial Transmission Right','用于对冲阻塞价差风险的金融工具。','买张通行证对冲堵车费。','risk'],
  ['hedging','对冲','Hedging','用相反头寸抵消价格波动影响的做法。','两头押,少亏点。','risk'],
  ['margin-call','保证金','Margin','为履约担保而缴纳的资金。','先押一笔钱在这。','risk'],
  ['default','违约','Default','未按约定履约的行为及其后果。','说话不算数。','risk'],
  ['risk-control-system','风控体系','Risk Control System','由限额、审批、监控与处置构成的风险管理制度。','给交易装个刹车。','risk'],
  ['stress-test','压力测试','Stress Test','在极端价格或极端工况下评估承受能力的方法。','假设最坏会怎样。','risk'],

  // 辅助服务市场
  ['ancillary-service','辅助服务','Ancillary Service','为保障电网安全稳定运行而提供的各类调节服务。','给电网打下手。','ancillary'],
  ['agc','自动发电控制','AGC','按调度指令自动调整机组出力以跟踪负荷变化。','自动跟着指令走。','ancillary'],
  ['peak-shaving','调峰','Peak Shaving','在负荷高峰增加出力、低谷减少出力的服务。','忙时多干点。','ancillary'],
  ['reserve','备用','Reserve','为应对突发功率缺额而预留的可用容量。','留着救急的。','ancillary'],
  ['reactive-power','无功','Reactive Power','维持电压水平所需的功率。','撑住电压的那只手。','ancillary'],
  ['black-start','黑启动','Black Start','全停后由特定机组率先启动恢复电网的能力。','一片漆黑时第一盏灯。','ancillary'],
  ['ancillary-pricing','辅助服务定价','Ancillary Pricing','辅助服务的补偿与结算方式。','打下手也有价。','ancillary'],
  ['cost-allocation','费用分摊','Cost Allocation','将辅助服务费用在市场主体间分摊的规则。','谁受益谁掏钱。','ancillary'],

  // 容量机制
  ['capacity-price','容量电价','Capacity Price','对可用容量而非电量支付的补偿价格。','不看用不用,看能不能用。','capacity'],
  ['capacity-compensation','容量补偿','Capacity Compensation','对承担保供责任机组给予的固定补偿。','保底的钱。','capacity'],
  ['capacity-market','容量市场','Capacity Market','通过竞价为未来容量付费的市场机制。','提前订够发电能力。','capacity'],
  ['scarcity-pricing','稀缺定价','Scarcity Pricing','在容量紧张时用高价格激励新增供给。','缺的时候价格就该高。','capacity'],
  ['reliability','可靠性','Reliability','系统持续满足用电需求的能力。','该有电的时候有电。','capacity'],
  ['missing-money','缺失资金','Missing Money','电量市场收入不足以覆盖固定成本的现象。','光靠卖电养不活。','capacity'],

  // 绿电与现货
  ['green-premium','环境溢价','Green Premium','为可再生能源环境属性额外支付的价格。','为绿色多掏的那点钱。','green'],
  ['renewable-entry','新能源入市','Renewable Entry into Market','可再生能源电量逐步参与市场化交易的过程。','补贴退坡后自己找饭吃。','green'],
  ['bid-floor','报价下限','Bid Floor','允许报价的最低水平,常为负值以体现弃电成本。','便宜到倒贴也有个底线。','green'],
  ['negative-price','负电价','Negative Price','供大于求时出清价格为负的现象。','发的电太多,倒付钱请人用。','green'],
  ['curtailment','弃风弃光','Curtailment','因消纳或安全原因被迫减少的可再生发电量。','发得出来送不出去。','green'],
  ['green-certificate-spot','绿证与现货','Certificate and Spot','绿证机制与现货市场的衔接方式。','环境属性怎么跟着电走。','green'],
  ['environmental-attribute','环境属性','Environmental Attribute','可再生能源电量所附带的绿色价值。','这度电的绿色身份。','green'],

  // 预测与数据
  ['load-forecast','负荷预测','Load Forecast','对未来用电需求水平的预测。','猜明天要用多少电。','forecast'],
  ['renewable-forecast','功率预测','Renewable Power Forecast','对风光出力的短期预测。','猜明天刮多大风、出多少太阳。','forecast'],
  ['price-forecast','价格预测','Price Forecast','对出清价格的预测。','猜明天电价多少钱。','forecast'],
  ['forecast-error','预测误差','Forecast Error','预测值与实际值之间的偏差。','猜不准的那部分。','forecast'],
  ['weather-data','气象数据','Weather Data','用于负荷与新能源预测的气象观测与预报数据。','看天吃饭的输入。','forecast'],
  ['data-quality','数据质量','Data Quality','数据在完整、准确、及时等方面的可靠程度。','原料好才做得出好菜。','forecast'],
  ['forecast-system','预测系统','Forecast System','集成数据、模型与发布流程的预测平台。','把猜变成系统化的事。','forecast'],
  ['scenario','情景分析','Scenario Analysis','对多种可能情形分别推演并比较的做法。','把几种可能都算一遍。','forecast'],

  // 监管与合规
  ['market-regulation','市场监管','Market Regulation','对市场运行、报价行为与结算执行的监督。','有人在旁边看着。','regulation'],
  ['information-disclosure','信息披露','Information Disclosure','市场主体按规定公开关键信息的义务。','该说的必须说清楚。','regulation'],
  ['market-power-mitigation','市场力抑制','Market Power Mitigation','通过限额、拆分、行为约束等抑制市场力的措施。','不许一家说了算。','regulation'],
  ['violation','违规行为','Violation','违反市场规则并可能受到处理的行为。','不守规矩要挨罚。','regulation'],
  ['compliance','合规体系','Compliance System','企业为保证业务符合规则而建立的制度与流程。','给自己立个规矩表。','regulation'],
  ['dispute','争议处理','Dispute Resolution','对结算或考核结果提出异议并处理的机制。','有意见按流程提。','regulation'],
  ['credit-management','信用管理','Credit Management','对市场主体履约能力与信用状况的管理。','看你还敢不敢赖账。','regulation'],

  // 案例复盘
  ['guangdong-spot','广东现货','Guangdong Spot Market','全国较早开展连续结算试运行的现货市场。','最早下场跑的那批。','case'],
  ['shanxi-spot','山西现货','Shanxi Spot Market','以新能源占比高为特点的现货市场实践。','风光的压力测试场。','case'],
  ['shandong-spot','山东现货','Shandong Spot Market','光伏大省中出现频繁低价与负价的现货实践。','中午的电没人要。','case'],
  ['extreme-price','极端价格','Extreme Price','在极端供需或阻塞条件下出现的异常价格。','平时见不到的价。','case'],
  ['case-review','案例复盘','Case Review','对真实市场事件做因果分析并提炼经验的方法。','把事后的账翻回来算。','case'],
  ['pilot-run','试运行','Pilot Run','新机制在小范围或分阶段先行验证的做法。','先小步跑一遍。','case'],
  ['tie-line','联络线','Tie Line','省间或区域间相连的输电通道。','两个省的接口。','case'],

  // 实战与成长
  ['trading-desk','交易台','Trading Desk','交易团队集中值守与执行交易的工作岗位设置。','一屋子盯盘的人。','practice'],
  ['kpi-dashboard','指标看板','KPI Dashboard','把成交量、价差、偏差、盈亏等关键指标集中展示的界面。','一眼看清好不好。','practice'],
  ['simulation-trading','模拟交易','Simulation Trading','在沙盘环境中进行无资金风险的交易演练。','先练手再上场。','practice'],
  ['career-path','职业路径','Career Path','从交易助理到交易员、策略与风控的成长通道。','这条路怎么走。','practice'],
  ['common-mistake','常见错误','Common Mistake','新手在申报、结算与风控上最容易犯的错。','大家都会踩的那几个坑。','practice'],
  ['playbook','操作手册','Playbook','把常见场景与标准动作固化成文的操作指引。','遇事照着手册做。','practice'],
  ['daily-review','每日复盘','Daily Review','每日收盘后对交易与结果的例行回顾。','每天收工要过一遍。','practice'],
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
let s = '/* 模块元数据 + 学习路径(电力现货与交易实务)(自动生成,勿手改) */\n';
s += 'window.SPOT = window.SPOT || {};\n';
s += 'SPOT.modules = ' + J(mods) + ';\n';
s += 'SPOT.path = ' + J(path_) + ';\n';
s += 'SPOT.totalLessons = SPOT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(电力现货与交易实务)(自动生成) {id,name,en,def,analogy,module} */\nwindow.SPOT = window.SPOT || {};\nSPOT.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nSPOT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
