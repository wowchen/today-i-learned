/* 数据分析通识 · 单一数据源生成器(科普通识,克隆 ai-agents 框架)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。 */
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
  ['stats','大白话统计','均值中位数、分布、抽样、波动——统计直觉的地基','入门','Statistics Basics'],
  ['charts','图表的选择','柱线饼散直——什么数据配什么图，别人怎么用图骗你','基础','Chart Choice'],
  ['correlation','相关与因果','混杂因子、辛普森悖论、A/B 测试——一起变不等于谁导致谁','核心','Correlation & Causation'],
  ['metrics','指标体系','口径、北极星、虚荣指标、古德哈特——定一个不打架的指标','核心','Metrics'],
  ['data','数据思维','数据从哪来、表结构、清洗——动手分析前的基本功','核心','Data Thinking'],
  ['narrative','分析叙事','结论先行、参照物、不确定性——把数字写成能说服人的报告','实战','Data Storytelling'],
  ['pitfalls','经典陷阱','幸存者偏差、回归均值、p-hacking——数据是怎么骗人的','实战','Classic Pitfalls'],
  ['marketing','营销实战','漏斗、留存、细分、A/B——从数据到经营建议的完整案例','实战','Marketing Analytics']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['mean','均值','Mean','所有数加起来除以个数，最常用也最容易被极端值带偏的平均。','全班身高加起来平摊。','stats'],
  ['median','中位数','Median','把数从小到大排，站在正中间的那个，极端值拉不动它。','排队时正中间那个人。','stats'],
  ['mode','众数','Mode','出现次数最多的数，唯一的"大多数"答案。','班里最常见的尺码。','stats'],
  ['distribution','分布','Distribution','一列数的整体长相：集中在哪、往哪偏、散得多开。','人群的身材轮廓。','stats'],
  ['outlier','离群值','Outlier','明显脱离大部队的极端数值，可能是真信号也可能是脏数据。','队伍里两米三的那个人。','stats'],
  ['sampling','抽样','Sampling','从总体里取一部分来推断整体，关键是"每份被抽到的机会均等"。','尝一勺汤就知道咸淡。','stats'],
  ['sample-size','样本量','Sample Size','抽样调查的有效份数，决定结论的可靠程度。','汤要尝多少口才准。','stats'],
  ['std-dev','标准差','Standard Deviation','衡量数据偏离均值程度的指标，越大越散。','波浪的高度。','stats'],
  ['confidence','置信水平','Confidence Level','用样本推断总体时的把握程度，常用 95%。','十次里赢九次的底气。','stats'],

  ['bar-chart','柱状图','Bar Chart','用长短比大小的图，最适合类别比较。','比个子站一排。','charts'],
  ['line-chart','折线图','Line Chart','用线的走向展示随时间的变化趋势。','体温单。','charts'],
  ['pie-chart','饼图','Pie Chart','用扇形面积展示构成占比，超过五块就难读了。','切蛋糕。','charts'],
  ['scatter','散点图','Scatter Plot','每点一个样本，展示两个变量如何一起变化。','撒了一把芝麻看形状。','charts'],
  ['histogram','直方图','Histogram','把连续数据切桶看疏密的图，横轴是区间不是类别。','成绩分数段人数表。','charts'],
  ['y-axis-truncation','截断 Y 轴','Truncated Axis','纵轴不从零开始，把小差异放大成大变化的画法。','踮脚拍照。','charts'],

  ['correlation','相关','Correlation','两个变量一起变化的统计关系，有方向和强弱之分。','两人总一起出现。','correlation'],
  ['causation','因果','Causation','一个变量的变化直接引起另一个变量的变化。','谁动了谁的手。','correlation'],
  ['confounder','混杂因子','Confounder','同时影响两个变量的隐藏第三者，制造出虚假相关。','幕后第三人。','correlation'],
  ['simpson','辛普森悖论','Simpson\'s Paradox','分组与合计结论相反的现象，元凶是各组的权重分布。','局部赢全局输。','correlation'],
  ['ab-test','A/B 测试','A/B Test','把对象随机分成两组各给一种处理，用结果差异证明因果。','双胞胎对照实验。','correlation'],

  ['metric','指标','Metric','把一个目标翻译成可测量、可比较的数字。','给目标装上仪表盘。','metrics'],
  ['caliber','口径','Caliber','指标的计算规则：数什么、除以什么、时间窗多长、怎么去重。','菜谱里"一勺"到底多大。','metrics'],
  ['kpi','关键绩效指标','KPI','组织选定重点考核的少数核心指标。','考试划的重点。','metrics'],
  ['north-star','北极星指标','North Star Metric','唯一最重要的指标，所有团队朝它对齐。','夜里认路的那颗星。','metrics'],
  ['vanity-metric','虚荣指标','Vanity Metric','只涨心情不涨业务的数字，好看但不可行动。','朋友圈点赞数。','metrics'],
  ['goodhart','古德哈特定律','Goodhart\'s Law','指标一旦成为考核目标，就不再是好指标。','一考就变形。','metrics'],
  ['counter-metric','护栏指标','Counter Metric','与主指标配套、防止"按下葫芦浮起瓢"的反向观察指标。','油门旁边的刹车。','metrics'],

  ['data-source','数据源','Data Source','数据的来处：系统埋点、业务系统、人工录入或外部购买。','数据的出生地。','data'],
  ['tidy-data','整洁数据','Tidy Data','一行一个观测对象、一列一个属性的标准表结构。','图书馆的标准书架。','data'],
  ['sql','SQL','Structured Query Language','向数据库提问的标准语言："从哪张表、筛哪些行、怎么汇总"。','跟仓库管理员下的订单。','data'],
  ['data-cleaning','数据清洗','Data Cleaning','处理缺失、重复、异常与口径不一，让数据能被相信。','洗菜择菜。','data'],
  ['dimension','维度','Dimension','用来看数据的角度：地区、渠道、客群、时间。','切蛋糕的刀法。','data'],
  ['measure','度量','Measure','被计算的数值：金额、数量、比率。','蛋糕本身的大小。','data'],

  ['pyramid-principle','金字塔原理','Pyramid Principle','结论先行、论据分层递进的表达结构。','先报答案再讲理由。','narrative'],
  ['benchmark','基准','Benchmark','用来对照的外部参照：行业均值、竞品、历史最好水平。','及格线。','narrative'],
  ['baseline','基线','Baseline','改动发生前的原始水平，一切"提升"都相对它而言。','起点成绩。','narrative'],
  ['uncertainty','不确定性','Uncertainty','估计值与真值之间的差距，分析里必须诚实交代的部分。','天气预报的降水概率。','narrative'],
  ['exec-summary','管理层摘要','Executive Summary','三分钟讲清结论、依据与建议的浓缩版本。','电梯里的一段话。','narrative'],

  ['survivorship-bias','幸存者偏差','Survivorship Bias','只统计"活下来"的样本导致的结论扭曲。','只听见赢家的声音。','pitfalls'],
  ['regression-to-mean','回归均值','Regression to the Mean','极端表现之后趋向常态的统计现象，常被误认成干预效果。','运气散了分数回落。','pitfalls'],
  ['ecological-fallacy','生态谬误','Ecological Fallacy','把群体统计结论直接套到个体身上的错误。','平均身高不等于人人都高。','pitfalls'],
  ['p-value','P 值','P-value','假设为真时，出现当前或更极端数据的概率——不是结论正确的概率。','纯属巧合的可能性。','pitfalls'],
  ['p-hacking','数据拷打','P-hacking','反复换切法直到"显著"出现，把巧合当发现。','把数据打到招供为止。','pitfalls'],
  ['selection-bias','自选择偏差','Self-selection Bias','样本自己决定要不要参与，导致样本代表性失衡。','爱发声的才是少数派。','pitfalls'],

  ['funnel','漏斗','Funnel','按步骤统计转化流失的分析框架，每层都问"谁掉队了"。','沙子过筛。','marketing'],
  ['conversion-rate','转化率','Conversion Rate','完成目标行为的比例，分子分母必须成对。','进店的人里多少买了单。','marketing'],
  ['retention','留存率','Retention Rate','一段时间后还在使用/复购的用户比例，衡量产品真实价值。','回头客比例。','marketing'],
  ['churn','流失率','Churn Rate','一段时间内离开的用户比例，留存的反面。','不再回来的客人。','marketing'],
  ['rfm','RFM 分群','RFM Model','按最近消费、频次、金额三维给客户分群的方法。','给客户贴三张标签。','marketing'],
  ['segmentation','细分分析','Segmentation','把整体拆成子群分别看，防止"平均数掩盖真相"。','把一锅炖拆成小碟尝。','marketing'],
  ['cohort','同期群','Cohort','按加入时间分组追踪表现的分析方式，排除"批次"干扰。','同届同学一起跟踪。','marketing']
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
let s = '/* 模块元数据 + 学习路径(数据分析通识)(自动生成,勿手改) */\n';
s += 'window.DAT = window.DAT || {};\n';
s += 'DAT.modules = ' + J(mods) + ';\n';
s += 'DAT.path = ' + J(path_) + ';\n';
s += 'DAT.totalLessons = DAT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(数据分析通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.DAT = window.DAT || {};\nDAT.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nDAT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
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
