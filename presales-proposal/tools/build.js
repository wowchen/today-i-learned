/* 售前方案与投标表达 · 单一数据源生成器(职场实战,克隆 data-literacy 框架)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji、生成物命名空间是否正确。 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);
const NS = 'PRS';

/* ---------- 小工具 ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别踩坑 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['needs','需求洞察','听懂客户嘴上没说出口的——痛点、决策链、真需求与伪需求','入门','Needs Discovery'],
  ['solution','方案架构','逻辑线、价值主张、差异化——方案不是功能清单，是解法','核心','Solution Design'],
  ['bidding','标书与响应','招标文件怎么读、评分办法怎么拆、废标雷区都在哪','核心','Bidding & Response'],
  ['pricing','报价与竞争','成本构成、报价策略、价格分博弈——赚得到还要中得了','核心','Pricing & Competition'],
  ['pitch','讲标与汇报','结构、控场、答辩——同一份方案，讲得好与讲得差差一个量级','实战','Pitch & Presentation'],
  ['customer','客户沟通','拜访、需求确认、期望管理——关系是日常做出来的','核心','Customer Relations'],
  ['cases','案例包装','STAR、数字化、客户证言——把做过的项目变成能打的弹药','实战','Case Packaging'],
  ['compete','竞品应对','竞品分析、差异化话术、被质疑怎么接——正面交锋不慌','实战','Competitive Response'],
  ['review','投后复盘','中标丢标都复盘——把一次胜败变成下一次的胜率','进阶','Review & Retro']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['rfp','RFP 招标需求书','RFP','客户发出的正式采购需求文件，写明要什么、什么条件、怎么评。','客户出的考卷题目。','needs'],
  ['rfi','RFI 信息征询','RFI','正式招标前的信息摸底，客户先了解市场上有谁、能做什么。','相亲前的打听。','needs'],
  ['pain-point','痛点','Pain Point','客户业务上真正卡住、愿意花钱解决的那件事。','鞋里那颗石子。','needs'],
  ['decision-chain','决策链','Decision Chain','一个采购决定要经过的所有人：使用者、技术、采购、财务、领导。','接力赛的每一棒。','needs'],
  ['stakeholder','干系人','Stakeholder','项目中所有会受影响、或能施加影响的人。','牌桌上的每一位。','needs'],

  ['value-proposition','价值主张','Value Proposition','一句话说清"选我能得到什么结果"，而不是"我有什么功能"。','一句话的卖点。','solution'],
  ['differentiator','差异化','Differentiator','让客户在几家里记住你、并且只有你能给的东西。','人群里你认得出的那张脸。','solution'],
  ['logic-line','逻辑线','Logic Line','方案从问题到解法再到价值的一根主线，所有内容都挂在上面。','故事的主线。','solution'],
  ['scope','工作范围','Scope','这次到底做哪些、不做哪些，白纸黑字写清边界。','圈地的篱笆。','solution'],
  ['sow','SOW 工作说明书','SOW','把交付内容、时间、验收标准写成的正式说明文件。','装修合同里的施工清单。','solution'],
  ['architecture-diagram','架构图','Architecture Diagram','一张图讲清系统由哪些部分组成、怎么连、怎么跑。','房子的户型图。','solution'],

  ['tender','招标文件','Tender Document','招标方发布的完整规则文件：需求、评分、格式、时间、废标条款。','比赛规则手册。','bidding'],
  ['scoring-method','评分办法','Scoring Method','评标打分的具体规则：分几块、各占多少、每一项怎么给分。','游戏的通关计分表。','bidding'],
  ['technical-bid','技术标','Technical Bid','响应技术需求的部分：方案、实施、团队、服务。','答题卷的第一部分。','bidding'],
  ['commercial-bid','商务标','Commercial Bid','响应商务条款的部分：报价、资质、业绩、财务、承诺。','答题卷的第二部分。','bidding'],
  ['deviation-table','偏离表','Deviation Table','逐条列出对招标要求的响应情况：完全响应、正偏离还是负偏离。','逐题对答案。','bidding'],
  ['disqualification','废标','Disqualification','因不满足实质性要求而被直接判无效，不进入打分环节。','犯规直接罚下场。','bidding'],
  ['substantive-response','实质性响应','Substantive Response','对招标文件关键条款的完全满足，缺一项就可能导致废标。','必须答对的必答题。','bidding'],

  ['cost-basis','成本价','Cost Basis','完成项目所需的最低真实成本，低于它就是亏本。','进货价。','pricing'],
  ['benchmark-price','评标基准价','Benchmark Price','价格评分的参照价，按招标文件公式从各家报价中算出。','考试的及格线。','pricing'],
  ['price-score','价格分','Price Score','报价在评分表里拿到的分数，通常报价越低分越高。','价签上的数字。','pricing'],
  ['bid-bond','投标保证金','Bid Bond','投标时缴纳的担保金，防止随意撤标，未中标通常退还。','比赛的报名押金。','pricing'],
  ['performance-bond','履约保证金','Performance Bond','中标后缴纳的担保金，保证按合同履约。','装修完才退的押金。','pricing'],
  ['negotiation','议价','Negotiation','中标前后就价格与条款的往来磋商，不是简单砍价。','菜市场的讨价还价，但更讲章法。','pricing'],

  ['pitch','讲标','Bid Presentation','在评标现场向评委口头陈述方案并答辩的环节。','面试的现场发挥。','pitch'],
  ['qa-session','答辩','Q&A Session','讲标后回答评委提问的环节，最能看出方案的虚实。','现场的追问环节。','pitch'],
  ['elevator-pitch','电梯演讲','Elevator Pitch','用一两分钟讲清你是谁、解决什么问题、凭什么。','电梯里遇见客户的 60 秒。','pitch'],
  ['demo','演示','Demo','用真实或模拟环境把方案跑给客户看，比讲十页 PPT 都管用。','现场试车。','pitch'],
  ['time-control','控场','Time Control','按计划分配时间、应对突发提问、把节奏握在自己手里。','开车时握着方向盘。','pitch'],

  ['visit-report','拜访纪要','Visit Report','记录每次客户沟通的要点、承诺与下一步，避免信息丢失。','聊天记录也要存档。','customer'],
  ['expectation-management','期望管理','Expectation Management','把客户期待拉回可兑现的范围，别为了签单乱承诺。','别把话说太满。','customer'],
  ['champion','内线','Champion','客户内部愿意替你说话、推你一把的人。','在客户那边的自己人。','customer'],
  ['requirement-confirmation','需求确认','Requirement Confirmation','把理解到的需求写成文字让客户确认，防止后期扯皮。','白纸黑字画个押。','customer'],
  ['account-planning','客户规划','Account Planning','针对一个客户的长期经营策略：找谁、什么时候、推什么。','种地的年度计划。','customer'],

  ['star','STAR 法则','STAR','用情境-任务-行动-结果的结构讲案例，比堆形容词有说服力。','讲故事的四步法。','cases'],
  ['benchmark-case','标杆案例','Benchmark Case','挑一个最有代表性、结果最硬的案例重点包装。','招牌菜。','cases'],
  ['testimonial','客户证言','Testimonial','让老客户亲口说好话，第三方口吻比自己夸自己管用十倍。','别人替你说的好评。','cases'],
  ['roi-proof','价值证明','ROI Proof','用数字证明投入产出比：花了多少、省了多少、赚了多少。','算得清的账。','cases'],
  ['reference','案例参考','Reference','可被客户回访核实的同类项目，是信任的硬通货。','可以打电话求证的熟客。','cases'],

  ['swot','SWOT 分析','SWOT','从优势、劣势、机会、威胁四个角度看竞争格局。','四面镜子照自己。','compete'],
  ['battle-card','竞争卡片','Battle Card','把主要竞品的优劣势与应对话术浓缩成一页，随身可查。','对垒前的小抄。','compete'],
  ['lock-in','技术锁定','Lock-in','用专有技术或数据把客户绑定，切换成本高。','进门容易出门难。','compete'],
  ['sole-source','单一来源采购','Sole Source','因唯一性不经公开招标直接采购，通常是差异化做到极致的结果。','独家供应。','compete'],

  ['win-loss','赢单丢标复盘','Win-Loss Review','对每个项目的成败做结构化复盘，找出可复用的规律。','赛后看录像。','review'],
  ['win-rate','赢单率','Win Rate','中标项目占参与项目总数的比例，售前团队的核心指标。','出手命中的比率。','review'],
  ['lessons-learned','经验沉淀','Lessons Learned','把复盘结论写进可查的知识库，让下一次少踩坑。','把学费变成教材。','review']
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
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js */
const mods = MODULES.map((m, i) => ({ id: m[0], order: i, title: m[1], desc: m[2], lessons: (L[m[0]] || []).length, tag: m[3], en: m[4] }));
let s = '/* 模块元数据 + 学习路径(售前方案与投标)(自动生成,勿手改) */\n';
s += 'window.' + NS + ' = window.' + NS + ' || {};\n';
s += NS + '.modules = ' + J(mods) + ';\n';
s += NS + '.path = ' + J(path_) + ';\n';
s += NS + '.totalLessons = ' + NS + '.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(售前方案与投标)(自动生成) {id,name,en,def,analogy,module} */\nwindow.' + NS + ' = window.' + NS + ' || {};\n' + NS + '.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\n' + NS + '.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 命名空间自检:生成物必须引用本命名空间,防止克隆站漏替换 */
['modules.js', 'terms.js'].forEach(f => {
  const out = fs.readFileSync(C(f), 'utf8');
  if (out.indexOf(NS + '.') === -1) { console.error('命名空间自检失败: content/' + f + ' 未引用 ' + NS + '。'); process.exit(1); }
  const stray = out.match(/\b(DAT|AGT|TCM|CCN|FIN|ML)\b/g);
  if (stray) { console.error('命名空间自检失败: content/' + f + ' 含他站命名空间 ' + [...new Set(stray)].join(',') + '。'); process.exit(1); }
});

/* 注入 index.html(幂等:<!--LESSONS--> 标记常驻,重复 build 不损耗) */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') === -1) {
  /* 迁移:旧结构(<!-- Lessons 旧块)转标记结构 */
  if (/<!-- Lessons[\s\S]*?<\/body>/.test(idx)) {
    idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!--LESSONS-->\n\n</body>');
  } else if (/<script src="content\/terms\.js"><\/script>/.test(idx)) {
    /* 兜底:historical 形态(无标记但有课时标签) —— 在 terms.js 后补标记 */
    idx = idx.replace('<script src="content/terms.js"></script>',
      '<script src="content/terms.js"></script>\n<!--LESSONS-->');
  } else {
    console.error('注入失败: index.html 既无 <!--LESSONS--> 标记也无可识别的旧结构。');
    process.exit(1);
  }
}
/* 每次先清旧课时标签(保留 modules/terms),再在标记处插入新标签,标记保留 */
idx = idx.replace(/<script src="content\/(?!modules\.js|terms\.js)[^"]*"><\/script>\s*/g, '');
idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n') + '\n<!--LESSONS-->');
const injected = (idx.match(/<script src="content\//g) || []).length - 2; /* 减去 modules/terms */
if (injected !== scriptTags.length) {
  console.error('注入校验失败: index.html 课时标签 ' + injected + ' 个 != 应注入 ' + scriptTags.length + ' 个。');
  process.exit(1);
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
