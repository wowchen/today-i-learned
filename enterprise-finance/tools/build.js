/* 企业财税与内控审计通识 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及税率、优惠、申报期限的具体口径,必须写明政策文号与适用期;
   内容基线为 2026 年 9 月。改内容时同步更新 index.html 与首页的基线日期。 */
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
  ['statements','三张报表怎么读','资产负债表、利润表、现金流量表——报表是公司的体检报告','入门','Financial Statements'],
  ['ratios','关键财务比率','偿债、营运、盈利、杜邦——用几个数字看透一家公司','基础','Financial Ratios'],
  ['analysis','财务分析与经营决策','经营分析框架、成本性态、本量利、敏感性与杠杆、投资决策、定价取舍','实战','Business Analysis'],
  ['tax-system','中国税制全景','18 个税种怎么分类、增值税怎么转、所得税怎么算','核心','China Tax System'],
  ['invoices','发票与征管实务','专票普票、数电发票、进项抵扣、三流一致、虚开红线','核心','Invoices & Administration'],
  ['tax-compliance','纳税申报与税务风险','纳税义务时点、申报周期、税收优惠、纳税信用、金税四期','核心','Tax Filing & Risk'],
  ['internal-control','内部控制基础','COSO 与内控基本规范、不相容岗位分离、授权审批、业务闭环','核心','Internal Control'],
  ['fraud','舞弊识别与防范','舞弊三角、收入舞弊、账外循环、举报机制——内控为什么失效','实战','Fraud Detection'],
  ['audit-basics','审计基础','审计是干什么的、三方关系、合理保证、重要性、审计风险','核心','Audit Basics'],
  ['audit-process','审计流程与意见','计划、风险评估、函证监盘、调整、五种审计意见怎么读','核心','Audit Process'],
  ['audit-ready','审计准备与整改','资料清单、截止性测试、关联方披露、稽查应对、整改闭环','实战','Audit Readiness'],
  ['contract','合同与商务条款','合同类型与税目、价款与发票条款、付款结算、验收与风险转移、违约变更、档案','实战','Contract Terms'],
  ['project-finance','项目制业务的财税','价税分离、收入确认、成本归集、付款条件、回款现金流','实战','Project Finance']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  /* --- statements --- */
  ['balance-sheet','资产负债表','Balance Sheet','某一时点上的家底快照：有多少资产、欠多少债、真正属于股东的有多少。','月底拍一张全身照。','statements'],
  ['income-statement','利润表','Income Statement','一段时间的收入减成本费用，看这段时间到底赚没赚、赚了多少。','一段时间的水电账单。','statements'],
  ['cash-flow-statement','现金流量表','Cash Flow Statement','一段时间钱的真实进出，按经营、投资、筹资三类活动分开看。','流水账，只记进出不记欠条。','statements'],
  ['accounting-equation','会计恒等式','Accounting Equation','资产 = 负债 + 所有者权益，整个会计体系的地基，永远成立。','天平两端必须一样重。','statements'],
  ['accrual-basis','权责发生制','Accrual Basis','事情发生了就记账，不管钱有没有到账，这是会计和法律视角的差别。','签了合同就算业绩，不看何时收钱。','statements'],
  ['revenue-recognition','收入确认','Revenue Recognition','判断"什么时候才算真的赚到了"，开票不等于收入，收款也不等于收入。','货交了、控制权转移了才算。','statements'],
  ['gross-profit','毛利','Gross Profit','收入直接减去与业务直接相关的成本，最贴近业务本身赚不赚钱。','卖价减去进货价。','statements'],
  ['notes-disclosure','报表附注','Notes to Financial Statements','报表数字背后的说明：会计政策、估计、或有事项，往往藏关键信息。','体检报告后面的小字注释。','statements'],
  ['going-concern','持续经营','Going Concern','假设企业下一年还能正常经营下去，所有资产计价都建立在这个前提上。','默认明天照常开门。','statements'],

  /* --- ratios --- */
  ['current-ratio','流动比率','Current Ratio','流动资产除以流动负债，看短期还债能力，一般 2 左右算从容。','手头现金够不够还这个月的账。','ratios'],
  ['quick-ratio','速动比率','Quick Ratio','把存货剔掉后的短期偿债能力，更保守也更真实。','不看仓库里那堆货，只看能马上变现的。','ratios'],
  ['debt-ratio','资产负债率','Debt Ratio','总负债除以总资产，看这家公司的杠杆有多重。','房贷占家庭总资产的比例。','ratios'],
  ['receivable-turnover','应收账款周转率','Receivables Turnover','一年把欠账收回几次，次数越低说明钱压在客户手里越久。','钱在外面转几圈才回来。','ratios'],
  ['inventory-turnover','存货周转率','Inventory Turnover','一年把存货卖完几次，越低说明库房压货越重。','货架上的东西多久换一批。','ratios'],
  ['gross-margin','毛利率','Gross Margin','毛利除以收入，反映产品本身的定价能力和成本控制。','每卖 100 块能留下多少做毛利。','ratios'],
  ['net-margin','净利率','Net Margin','净利润除以收入，扣完所有开销后真正留下多少。','一百块收入最后落到兜里几毛。','ratios'],
  ['roe','净资产收益率','ROE','净利润除以净资产，衡量股东投的钱一年生出多少。','自有本金的一年回报率。','ratios'],
  ['dupont','杜邦分析','DuPont Analysis','把 ROE 拆成净利率 × 周转率 × 权益乘数，看清高回报靠什么驱动。','一拆三，看钱是赚来的还是借来的。','ratios'],
  ['cash-to-revenue','收现比','Cash-to-Revenue Ratio','销售收到的现金除以营业收入，长期小于 1 说明收入质量存疑。','赚的是一百块还是一百块白条。','ratios'],

  /* --- analysis --- */
  ['operating-analysis','经营分析','Operating Analysis','用财务数据回答经营问题的过程：发生了什么、差在哪、为什么、怎么办。','把报表翻译成经营动作。','analysis'],
  ['cost-behavior','成本性态','Cost Behavior','成本随业务量变化的规律，决定企业抗风险的方式。','成本怎么跟着产量走。','analysis'],
  ['fixed-cost','固定成本','Fixed Cost','业务量变化时总额基本不变的成本，如房租、折旧、管理人员薪酬。','不开工也得付的那部分。','analysis'],
  ['variable-cost','变动成本','Variable Cost','随业务量同向变化的成本，如材料、计件人工、按量结算的外包。','多做一件就多花一份。','analysis'],
  ['contribution-margin','边际贡献','Contribution Margin','收入减去变动成本，用来先覆盖固定成本、再看剩下多少是利润。','先填固定成本的坑，再算赚。','analysis'],
  ['break-even-point','盈亏平衡点','Break-even Point','收入刚好等于总成本时的销量或收入，也就是保本线。','不赚不亏的那条线。','analysis'],
  ['cvp-analysis','本量利分析','CVP Analysis','研究成本、业务量与利润三者关系的经典模型。','三个旋钮怎么拧才不亏。','analysis'],
  ['sensitivity-analysis','敏感性分析','Sensitivity Analysis','逐个变动关键假设，看结果对哪个变量最敏感。','哪个假设一碰就崩。','analysis'],
  ['operating-leverage','经营杠杆','Operating Leverage','固定成本占比越高，利润对收入变化越敏感，涨跌被放大。','收入动一点，利润动很多。','analysis'],
  ['payback-period','投资回收期','Payback Period','收回初始投资所需的时间，直观但不考虑资金时间价值。','几年回本。','analysis'],
  ['npv','净现值','Net Present Value','未来各期现金流折现后减去初始投资的净额，大于零值得投。','把未来的钱折成今天的钱再比。','analysis'],
  ['irr','内部收益率','Internal Rate of Return','使净现值刚好为零的折现率，高于要求回报率即值得投。','项目自己的回报率。','analysis'],
  ['discount-rate','折现率','Discount Rate','把未来现金流折算成现值的比率，反映资金成本与风险。','未来的钱打几折。','analysis'],
  ['target-cost','目标成本','Target Cost','先定市场可接受的价格，再倒推允许的成本上限。','倒着算成本。','analysis'],
  ['pricing-decision','定价决策','Pricing Decision','结合边际贡献、产能与资金占用判断某个价格该不该接。','这单接不接。','analysis'],
  ['pyramid-principle','金字塔原理','Pyramid Principle','结论先行、论据分层递进的表达结构，分析报告的基本骨架。','先报答案再讲理由。','analysis'],
  ['benchmark','基准','Benchmark','用来对照的外部参照：行业均值、竞品水平、标杆实践。','及格线在哪。','analysis'],
  ['baseline','基线','Baseline','对比发生前的原始水平，一切提升都相对它而言。','起点成绩。','analysis'],
  ['uncertainty','不确定性','Uncertainty','预测与真实值之间的差距，分析里必须诚实交代的部分。','天气预报的降水概率。','analysis'],

  /* --- tax-system --- */
  ['tax-category','税种分类','Tax Categories','按征税对象分征收类、所得类、财产行为类，按归属分中央、地方、共享。','同一批税按两种刀法各切一遍。','tax-system'],
  ['turnover-tax','货物和劳务税','Goods and Services Tax','增值税、消费税、车辆购置税、关税四个，在交易流转环节征收，是我国税收主体。','买卖一次就过一道。','tax-system'],
  ['income-tax-class','所得税','Income Tax','企业所得税与个人所得税两个，对净所得征税而不是对交易额征税。','赚到手的钱才交。','tax-system'],
  ['property-behavior-tax','财产和行为税','Property and Behavior Tax','房产税、印花税、契税、城建税等 12 个，针对持有、转移或特定行为征收。','针对"东西"和"动作"收。','tax-system'],
  ['central-tax','中央税','Central Tax','收入全部归中央的税种：消费税、关税、车辆购置税、船舶吨税共 4 个。','全额上交国库。','tax-system'],
  ['local-tax','地方税','Local Tax','收入全部归地方的税种：房产税、契税、城镇土地使用税等共 11 个。','留在本地财政。','tax-system'],
  ['shared-tax','共享税','Shared Tax','中央与地方按比例分成的税种：增值税、企业所得税、个人所得税共 3 个。','两家分成。','tax-system'],
  ['vat','增值税','Value-Added Tax','对交易中的"增值额"征税，通过销项减进项实现，是我国第一大税种。','只对新增的那一块收。','tax-system'],
  ['output-vat','销项税额','Output VAT','你开票卖东西时按税率算出的税额，是先从客户手里收来的。','代国家向客户收的钱。','tax-system'],
  ['input-vat','进项税额','Input VAT','你采购时取得的、可以在申报时抵扣的税额，抵扣链的核心。','上游已经替你交过的那部分。','tax-system'],
  ['value-added-tax-law','增值税法','VAT Law','2024 年 12 月通过、2026 年 1 月 1 日起施行的增值税上位法，税率三档不变。','把暂行条例升格成法律。','tax-system'],
  ['general-taxpayer','一般纳税人','General VAT Taxpayer','可以抵扣进项、按 13%/9%/6% 计算销项的纳税人身份。','能开专票、能抵进项。','tax-system'],
  ['small-scale-taxpayer','小规模纳税人','Small-Scale Taxpayer','按征收率简易计税、不能抵扣进项的纳税人身份，操作更简单。','小本生意，算法简单。','tax-system'],
  ['cit','企业所得税','Corporate Income Tax','对企业年度应纳税所得额征税，法定税率 25%，符合条件可享优惠。','一年一次，按利润算。','tax-system'],
  ['iit','个人所得税','Individual Income Tax','对自然人所得征税，综合所得 3% 至 45% 七级超额累进。','个人一年一次汇算。','tax-system'],
  ['taxable-income','应纳税所得额','Taxable Income','税法口径下的"利润"，与企业会计利润常因调整项不同而不一致。','税务版的利润。','tax-system'],
  ['tax-basis','计税依据','Tax Base','每个税种用来乘税率的那把尺子：销售额、所得额、数量或净吨位。','税率乘的那个基数。','tax-system'],

  /* --- invoices --- */
  ['invoice','发票','Invoice','证明交易发生、载明金额税额的法定凭证，也是征管的抓手。','交易的开票记录。','invoices'],
  ['special-invoice','增值税专用发票','VAT Special Invoice','购买方可以据此抵扣进项税额的发票，抵扣链的关键凭证。','能让对方抵税的票。','invoices'],
  ['general-invoice','增值税普通发票','VAT General Invoice','不能用于进项抵扣的发票，多用于终端消费者或不可抵扣场景。','只是消费凭证。','invoices'],
  ['e-invoice','数电发票','Fully Digitalized E-Invoice','票面要素全数字化、号码全国统一赋予、额度智能授予的新型发票。','不再有纸质联次。','invoices'],
  ['invoice-quota','发票总额度','Invoice Quota','一个自然月内发票开具总金额（不含税）的上限，按信用和风险动态调整。','每月开票的天花板。','invoices'],
  ['input-deduction','进项税额抵扣','Input VAT Deduction','把采购环节已付的增值税从销项中减掉，只对增值部分实际交税。','避免一笔钱反复交税。','invoices'],
  ['red-invoice','红字发票','Red Invoice','发生退货、开票有误或折让时用于冲销原发票的负数发票。','数电票不能作废，只能开红冲。','invoices'],
  ['three-flows','三流一致','Consistency of Three Flows','合同流、资金流、发票流指向同一交易主体，否则易被认定为虚开。','谁签的、谁付钱、谁开票得是同一件事。','invoices'],
  ['false-invoice','虚开发票','False Invoicing','没有真实业务或金额不实而开票，是行政乃至刑事层面的红线。','票是真的，业务是假的。','invoices'],
  ['tax-digital-account','税务数字账户','Tax Digital Account','税务机关为纳税人建立的电子账户，发票自动归集流转到里面。','发票自动进了你的电子抽屉。','invoices'],

  /* --- tax-compliance --- */
  ['tax-obligation-timing','纳税义务发生时间','Timing of Tax Obligation','税法规定"什么时候开始欠这笔税"，与开票、收款时点都不一定重合。','欠税的起算时点。','tax-compliance'],
  ['filing-period','纳税申报期','Tax Filing Period','各税种规定的申报与缴款截止期限，逾期会产生滞纳金和信用影响。','每月每年要交作业的日子。','tax-compliance'],
  ['withholding-agent','代扣代缴','Withholding','由付款方在支付时代为扣税并缴库，如单位代扣工资个税。','让别人顺手替你交。','tax-compliance'],
  ['annual-settlement','汇算清缴','Annual Tax Settlement','一个纳税年度结束后统一清算、多退少补，企业所得税与个税综合所得都要做。','年终总清算。','tax-compliance'],
  ['tax-incentive','税收优惠','Tax Incentive','税法体系内的减免、低税率、加计扣除等，必须对号入座、不能自创。','规则内的省钱口子。','tax-compliance'],
  ['small-micro-enterprise','小型微利企业','Small Low-Profit Enterprise','同时满足应纳税所得额不超 300 万、人数不超 300、资产不超 5000 万三个条件的企业。','三个门槛全过才算。','tax-compliance'],
  ['high-tech-enterprise','高新技术企业','High-Tech Enterprise','经认定可减按 15% 缴纳企业所得税的资格身份。','认定一次，省十年。','tax-compliance'],
  ['rnd-super-deduction','研发费用加计扣除','R&D Super Deduction','符合条件的研发投入在计算应纳税所得额时可超额扣除，鼓励真研发。','花的钱按倍数算成本。','tax-compliance'],
  ['tax-credit-rating','纳税信用等级','Tax Credit Rating','税务机关按申报、缴税、违规记录给企业评级，影响发票额度和办税便利。','企业的税务征信分。','tax-compliance'],
  ['tax-inspection','税务稽查','Tax Inspection','税务机关依法对涉税事项进行的检查，与日常申报管理不是一回事。','被税务机关找上门。','tax-compliance'],
  ['smart-tax','智慧税务','Smart Taxation','依托数据集中与系统联通实现的税收征管数字化，数据比对能力大幅提升。','系统比你自己更清楚你的账。','tax-compliance'],
  ['transfer-pricing','转让定价','Transfer Pricing','关联企业之间交易的定价，是税务机关反避税关注的重点领域。','左右口袋互相卖东西的价格。','tax-compliance'],

  /* --- internal-control --- */
  ['internal-control','内部控制','Internal Control','由全员实施的、为经营效率、财务报告可靠和合规提供合理保证的过程。','不是管人，是管流程。','internal-control'],
  ['coso','COSO 框架','COSO Framework','国际通用的内控框架，把内控分为五个相互关联的要素。','内控领域的通用坐标系。','internal-control'],
  ['ic-basic-norm','企业内部控制基本规范','Basic Norm for Internal Control','中国企业内控的基础性规范，与配套指引共同构成国内的合规依据。','国内内控的准则底座。','internal-control'],
  ['segregation-of-duties','不相容岗位分离','Segregation of Duties','授权、执行、记录、保管这几类职责不能由同一人兼任，防舞弊的基本功。','不能既管钱又管账。','internal-control'],
  ['authorization-approval','授权审批','Authorization and Approval','每项业务必须有明确权限层级和审批路径，越权即为控制失效。','谁有权签、签到哪一级。','internal-control'],
  ['control-activity','控制活动','Control Activity','具体落到流程里的控制手段：审批、复核、对账、盘点、系统权限。','制度落到动作上。','internal-control'],
  ['risk-assessment','风险评估','Risk Assessment','识别目标可能受哪些威胁、概率与影响多大，决定控制资源放哪。','先找会出事的环节。','internal-control'],
  ['control-deficiency','内控缺陷','Control Deficiency','控制设计或运行没能及时发现并纠正错报，分一般、重要、重大三级。','防线漏了个口子。','internal-control'],
  ['material-weakness','重大缺陷','Material Weakness','可能导致重大错报未被及时防止或发现的内控缺陷，审计中要报出来。','口子在关键位置。','internal-control'],
  ['compensating-control','补偿性控制','Compensating Control','为弥补某项控制缺陷而额外设置的控制，评价缺陷时要考虑它。','一道关没守住，再补一道。','internal-control'],
  ['control-environment','内部环境','Control Environment','治理结构、企业文化、诚信与道德价值观等基础氛围，决定内控的上限。','水土决定能种出什么。','internal-control'],
  ['business-loop','业务闭环','Business Process Loop','从需求、采购、验收、付款到归档的完整链条，每环都有对账与控制点。','一件事从头走到尾不留断点。','internal-control'],

  /* --- fraud --- */
  ['fraud-triangle','舞弊三角','Fraud Triangle','压力、机会、借口三要素同时具备时舞弊最可能发生，是识别舞弊的框架。','有动机、有条件、有说法。','fraud'],
  ['fraud-opportunity','舞弊机会','Fraud Opportunity','内控漏洞给出的空间：不相容岗位未分离、缺乏复核、系统权限过大。','没人盯着的那段路。','fraud'],
  ['revenue-fraud','收入舞弊','Revenue Fraud','提前确认收入、虚构客户与交易、把关联方交易伪装成正常销售等手法。','把未来的钱挪到今天。','fraud'],
  ['related-party','关联方交易','Related-Party Transaction','与控股股东、董监高及其控制企业之间的交易，是利益输送与舞弊高发区。','自己人跟自己人做生意。','fraud'],
  ['off-book-account','账外资金循环','Off-Book Fund Circulation','资金在体外循环、不入账，常见于私设小金库或虚增业绩。','钱走了另一条路没留痕。','fraud'],
  ['whistleblower','吹哨人','Whistleblower','掌握舞弊线索并主动举报的内部人员，是发现舞弊最有效的渠道之一。','最了解漏洞的人站出来。','fraud'],
  ['fraud-red-flag','舞弊红旗标志','Fraud Red Flag','提示可能存在舞弊的异常信号，如管理层频繁更替、审计师被更换、指标刚好达标。','异常的信号灯。','fraud'],
  ['management-override','管理层凌驾于控制之上','Management Override','管理层绕过既定控制，是内控体系最大的系统性风险。','锁再结实，钥匙在管理层手里。','fraud'],

  /* --- audit-basics --- */
  ['audit','审计','Audit','独立第三方按准则对财务报表是否公允反映发表意见的鉴证活动。','给报表做一次独立质检。','audit-basics'],
  ['audit-three-party','审计三方关系','Audit Three-Party Relationship','委托人、被审计单位、注册会计师三方构成的审计关系，独立性是前提。','出钱的人、被查的人、查的人。','audit-basics'],
  ['independence','独立性','Independence','注册会计师在实质与形式上都不受被审计单位左右，审计价值的前提。','既不能收人情也不能看起来像收人情。','audit-basics'],
  ['professional-skepticism','职业怀疑','Professional Skepticism','对证据保持质疑、不轻信管理层口头解释的职业态度。','先怀疑，再验证。','audit-basics'],
  ['reasonable-assurance','合理保证','Reasonable Assurance','审计提供的是高水平但非绝对的保证，抽样与判断天然有局限。','很有把握，但不是百分之百。','audit-basics'],
  ['materiality','重要性水平','Materiality','错报大到可能改变使用者的判断时才算重要，是审计工作的标尺。','多少算"大事"的及格线。','audit-basics'],
  ['audit-risk','审计风险','Audit Risk','财务报表存在重大错报而审计师却发表了不恰当意见的风险。','漏掉了大问题的概率。','audit-basics'],
  ['detection-risk','检查风险','Detection Risk','审计程序未能发现已存在重大错报的风险，可通过程序设计与抽样范围控制。','查了但没查出来。','audit-basics'],
  ['audit-evidence','审计证据','Audit Evidence','支持审计意见的充分性与适当性依据，越客观的证据越有力。','不能只听管理层说。','audit-basics'],
  ['internal-audit','内部审计','Internal Audit','企业内部设立的独立监督评价职能，服务于治理层而非管理层。','自己家里的体检医生。','audit-basics'],
  ['external-audit','外部审计','External Audit','由会计师事务所实施的独立审计，出具对外可用的审计报告。','外面请来的第三方质检。','audit-basics'],
  ['government-audit','政府审计','Government Audit','由审计机关依法对公共资金与国有资产实施的审计监督。','国家派来的审计。','audit-basics'],

  /* --- audit-process --- */
  ['audit-planning','审计计划','Audit Planning','确定审计范围、时间安排、资源投入与总体应对策略的前期工作。','出门前先画路线图。','audit-process'],
  ['risk-assessment-procedure','风险评估程序','Risk Assessment Procedure','通过了解业务、行业与内控来识别重大错报风险，是实质性程序的前置。','先搞清楚哪里最可能出错。','audit-process'],
  ['substantive-procedure','实质性程序','Substantive Procedure','针对具体认定执行的检查、观察、询问、函证、重新计算等程序。','直接去验证数字。','audit-process'],
  ['confirmation-letter','函证','Confirmation','直接向银行、客户或供应商取得书面回函，是可靠性很高的审计证据。','绕过被审计单位自己问。','audit-process'],
  ['physical-count','监盘','Physical Inventory Observation','现场观察并参与存货、现金等实物的盘点，验证存在性认定。','数一数仓库里到底有没有。','audit-process'],
  ['analytical-procedure','分析程序','Analytical Procedure','通过比率、趋势与预期值的比较发现异常波动，定位需要深挖的方向。','数字不合常理就追下去。','audit-process'],
  ['audit-sampling','审计抽样','Audit Sampling','从总体中抽取部分项目测试并据以推断总体特征的方法。','抽一勺汤判断整锅咸淡。','audit-process'],
  ['audit-adjustment','审计调整','Audit Adjustment','审计中发现错报后提出的调整建议，管理层可以接受也可以拒绝。','查出来的错要不要改。','audit-process'],
  ['unadjusted-misstatement','未更正错报','Unadjusted Misstatement','管理层未接受调整的错报，累计起来评估是否影响审计意见。','没改的那些错加起来算总账。','audit-process'],
  ['audit-opinion','审计意见','Audit Opinion','审计报告的核心结论，分无保留、保留、无法表示、否定等类型。','质检报告的最终结论。','audit-process'],
  ['key-audit-matter','关键审计事项','Key Audit Matter','审计师认为本期审计中最重要的事项，在报告中向使用者说明。','报告里点名的重点关切。','audit-process'],
  ['management-representation','管理层声明','Management Representation','管理层向审计师提供的书面声明，用于确认其责任与关键陈述。','白纸黑字的承诺书。','audit-process'],

  /* --- audit-ready --- */
  ['engagement-letter','业务约定书','Engagement Letter','审计业务开始前约定范围、责任与收费的书面协议，界定双方边界。','先把规矩谈清楚。','audit-ready'],
  ['cutoff-test','截止性测试','Cutoff Test','检查资产负债表日前后的交易是否记入正确期间，防止跨期调节利润。','别把明年的收入记到今年。','audit-ready'],
  ['related-party-disclosure','关联方披露','Related-Party Disclosure','关联方关系与交易必须充分披露，是报表最容易出问题的地方之一。','自己人的交易要摊开讲。','audit-ready'],
  ['rectification-loop','整改闭环','Rectification Loop','从缺陷认定、责任分工、整改措施到验证销号的完整过程。','发现问题要能证明改完了。','audit-ready'],
  ['internal-control-audit','内控审计','Internal Control Audit','注册会计师对财务报告内部控制有效性单独发表意见的审计业务。','不光查数字，还查流程。','audit-ready'],
  ['going-concern-doubt','持续经营重大不确定性','Material Uncertainty over Going Concern','可能导致对持续经营能力产生重大疑虑的事项，需在报表与审计报告中披露。','明年还开不开得下去有疑问。','audit-ready'],
  ['financial-warning-signal','财务预警信号','Financial Warning Signal','现金流持续为负、债务集中到期、老客户回款变慢等提前暴露风险的迹象。','出事前的征兆。','audit-ready'],
  ['audit-committee','审计委员会','Audit Committee','董事会下设机构，负责监督财务报告与审计工作、对接内外部审计。','治理层里盯着账的那群。','audit-ready'],

  /* --- contract --- */
  ['contract-type','合同类型','Contract Type','合同的法律与业务属性，直接决定适用税目、税率与发票类型。','一纸合同定税目。','contract'],
  ['taxable-item','应税项目','Taxable Item','税法口径下这笔交易属于哪一类，是适用税率的前提。','这笔业务算哪一类。','contract'],
  ['price-clause','价款条款','Price Clause','约定合同金额口径（含税/不含税）、税率与税率变动处理的条款。','钱和税到底怎么算。','contract'],
  ['tax-inclusive-pricing','含税定价','Tax-Inclusive Pricing','以含税总价成交，税率变动时总价不变、税额随税率变化。','总价锁死，税自己扛。','contract'],
  ['invoice-clause','发票条款','Invoice Clause','约定发票类型、税率、开票时点与票款对应关系的条款。','这张票怎么开。','contract'],
  ['payment-node','付款节点','Payment Milestone','合同约定的付款触发点与比例，直接决定现金流节奏。','什么时候能拿到钱。','contract'],
  ['progress-payment','进度款','Progress Payment','按施工或交付进度分期支付的款项，是执行期回款的主力。','干一段结一段。','contract'],
  ['acceptance-certificate','验收单','Acceptance Certificate','确认交付物合格并完成交付的书面凭据，同时触发多个关键时点。','一张纸触发三件事。','contract'],
  ['risk-transfer','风险转移','Transfer of Risk','标的毁损灭失风险由供方转给需方的时点，通常与交付验收挂钩。','东西坏了算谁的。','contract'],
  ['breach-liability','违约责任','Breach Liability','违约方应承担的赔偿或补救义务，重点看比例、上限与扣除方式。','违约要赔多少。','contract'],
  ['variation-order','变更单','Variation Order','对超范围工作书面确认范围、金额与工期影响的凭据。','口头答应等于白干。','contract'],
  ['contract-ledger','合同台账','Contract Ledger','汇总合同金额、履约、开票与回款状态的登记表，是财税管理的基础工具。','一张表管住四类风险。','contract'],

  /* --- project-finance --- */
  ['project-lifecycle','项目全周期','Project Lifecycle','投标、合同、执行、验收、结算、回款、质保的完整链条，每段都有财税动作。','一件事从接单到收尾。','project-finance'],
  ['price-tax-separation','价税分离','Price-Tax Separation','把合同金额拆成不含税价与税额，增值税是价外税，必须先拆再算。','把税和货款分开看。','project-finance'],
  ['performance-obligation','履约义务','Performance Obligation','合同中向客户转让可明确区分商品或服务的承诺，是收入确认的计量单元。','合同里到底答应了几件事。','project-finance'],
  ['five-step-model','收入确认五步法','Five-Step Revenue Model','识别合同、识别履约义务、确定交易价格、分摊、履行时确认收入。','把收入确认拆成五步走。','project-finance'],
  ['cost-collection','成本归集','Cost Collection','把人工、材料、差旅、分包等按项目归集，才能算出真实项目毛利。','钱花在哪个项目上要分得清。','project-finance'],
  ['project-margin','项目毛利','Project Margin','项目收入减项目直接成本，衡量单个项目到底赚不赚钱。','单子本身划不划算。','project-finance'],
  ['payment-term','付款条件','Payment Term','合同约定的付款节点与比例，直接决定现金流节奏与垫资压力。','什么时候能拿到钱。','project-finance'],
  ['retention-money','质保金','Retention Money','验收后按比例留存、质保期满再付的部分，是回款周期最长的一笔。','压在最后的那笔尾款。','project-finance'],
  ['advance-payment','预收款','Advance Payment','合同签订后客户先付的部分，既是现金流利好，也是履约义务的开始。','先收钱后干活。','project-finance']
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
let s = '/* 模块元数据 + 学习路径(企业财税与内控审计通识)(自动生成,勿手改) */\n';
s += 'window.FIN = window.FIN || {};\n';
s += 'FIN.modules = ' + J(mods) + ';\n';
s += 'FIN.path = ' + J(path_) + ';\n';
s += 'FIN.totalLessons = FIN.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(企业财税与内控审计通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.FIN = window.FIN || {};\nFIN.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nFIN.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
