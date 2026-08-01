/* 健身与运动 · 单一数据源生成器(科普通识,克隆 astronomy/guitar 框架)。
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
  ['intro','入门通识','为什么动、运动分类、体能要素、装备与安全','入门','Getting Started'],
  ['body','身体认知','肌肉、心肺、能量系统、骨骼关节','基础','Body Basics'],
  ['strength','力量训练','自重与器械、深蹲硬拉卧推、计划','核心','Strength'],
  ['cardio','有氧耐力','跑步、骑行、游泳、配速与心率','核心','Cardio'],
  ['flex','柔韧拉伸','静态/动态拉伸、关节活动度','核心','Flexibility'],
  ['core','核心稳定','核心肌群、平板、抗旋、呼吸','核心','Core'],
  ['hiit','高强度间歇','间歇原理、Tabata、编排','进阶','HIIT'],
  ['posture','体态与功能','体态自查、圆肩骨盆、功能性动作','实用','Posture'],
  ['nutrition','运动营养','三大营养素、练前练后、补水','实用','Nutrition'],
  ['recovery','恢复与睡眠','睡眠、DOMS、过度训练、减载','实用','Recovery'],
  ['fatloss','减脂与塑形','热量缺口、有氧+力量、平台期','实战','Fat Loss'],
  ['muscle','增肌与力量','渐进超负荷、容量、分化、节奏','进阶','Hypertrophy'],
  ['mindset','运动心理','习惯、目标、坚持、平台期','实用','Mindset'],
  ['sports','运动项目','球类、游泳、骑行、攀岩、搏击','实战','Sports']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['exercise','运动','Exercise','规律的身体活动，旨在提升或维持体能与健康。','给身体充电。','intro'],
  ['physical-fitness','体能','Physical Fitness','身体适应环境、应对负荷的综合能力。','身体的本钱。','intro'],
  ['cardio-fitness','心肺耐力','Cardiorespiratory Fitness','心脏、血管、肺持续供氧给运动肌肉的能力。','身体的发动机排量。','intro'],
  ['strength-fitness','肌肉力量','Muscular Strength','肌肉一次发力能产生的最大力量。','身体的马力。','intro'],
  ['flexibility','柔韧性','Flexibility','关节可活动范围与肌肉延展能力。','身体的松紧度。','intro'],
  ['warm-up','热身','Warm-up','运动前逐步提升心率、激活肌肉的轻度活动。','给身体预热。','intro'],
  ['cool-down','放松','Cool-down','运动后逐步降心率、拉伸放松的收尾活动。','让身体软着陆。','intro'],

  ['skeletal-muscle','骨骼肌','Skeletal Muscle','附着在骨骼上、受意识控制收缩的肌肉。','拉动骨头的绳索。','body'],
  ['muscle-fiber','肌纤维','Muscle Fiber','构成肌肉的细长细胞，分慢肌与快肌。','肌肉的纤维丝。','body'],
  ['slow-twitch','慢肌','Slow-twitch Fiber','适合耐力、抗疲劳、靠有氧供能的肌纤维。','长跑型肌纤维。','body'],
  ['fast-twitch','快肌','Fast-twitch Fiber','爆发力强、易疲劳、靠无氧供能的肌纤维。','短跑型肌纤维。','body'],
  ['atp','ATP','ATP','细胞直接使用的能量货币，肌肉收缩的即时能量。','身体的零钱。','body'],
  ['atp-pc','磷酸原系统','ATP-PC System','靠磷酸肌酸快速供能的系统，维持数秒极限发力。','闪电钱包。','body'],
  ['glycolysis','糖酵解','Glycolysis','分解糖原无氧供能的系统，维持数十秒高强度。','短期信用卡。','body'],
  ['aerobic-system','有氧系统','Aerobic System','靠氧气氧化糖与脂肪供能，持久但慢。','长期存款。','body'],
  ['vo2max','最大摄氧量','VO2max','每分钟每公斤体重能利用的最大氧气量。','发动机的进气上限。','body'],
  ['joint','关节','Joint','两块骨头的连接处，决定活动范围。','身体的铰链。','body'],

  ['resistance-training','阻力训练','Resistance Training','对抗外部阻力以增强力量的训练。','和重力较劲。','strength'],
  ['rep','次数','Repetition','一次完整动作叫一次，一组里的动作数叫次数。','动作的计量单位。','strength'],
  ['set','组','Set','连续做完若干次后休息，算一组。','动作的一轮。','strength'],
  ['1rm','1RM','One Repetition Maximum','一个动作能举起一次的最大重量。','你的力量天花板。','strength'],
  ['squat','深蹲','Squat','屈髋屈膝下蹲的下肢基础动作。','力量动作之王。','strength'],
  ['deadlift','硬拉','Deadlift','从地面把重物拉起的髋部主导动作。','把东西捡起来的力量版。','strength'],
  ['bench-press','卧推','Bench Press','仰卧推起重量的上肢推举动作。','胸膀的力量测试。','strength'],
  ['progressive-overload','渐进超负荷','Progressive Overload','逐步增加训练负荷以持续进步的原则。','一点点加码。','strength'],
  ['compound','复合动作','Compound Exercise','多关节协同的动作，如深蹲硬拉。','全家一起干。','strength'],
  ['isolation','孤立动作','Isolation Exercise','单关节针对某块肌肉的动作。','单兵作战。','strength'],

  ['aerobic','有氧','Aerobic','依赖氧气供能、可长时间维持的中低强度运动。','能喘着气一直做。','cardio'],
  ['heart-rate','心率','Heart Rate','每分钟心跳次数。','运动的油门表。','cardio'],
  ['resting-hr','静息心率','Resting Heart Rate','安静时的心率，反映心肺基础。','引擎的怠速。','cardio'],
  ['max-hr','最大心率','Max Heart Rate','心脏每分钟最多能跳的次数估算值。','心跳的红线。','cardio'],
  ['pace','配速','Pace','完成单位距离所需时间，常指每公里几分钟。','跑步的步速。','cardio'],
  ['lsd','LSD','Long Slow Distance','长距离慢跑，低强度长时间有氧。','慢慢跑很久。','cardio'],
  ['cadence','步频','Cadence','每分钟脚步落地次数。','跑步的节奏。','cardio'],
  ['vo2max-train','最大摄氧量训练','VO2max Training','接近最大心率的高强度间歇，提升摄氧上限。','把发动机扩缸。','cardio'],

  ['stretching','拉伸','Stretching','延展肌肉以增加柔韧性的练习。','把橡皮筋拉长。','flex'],
  ['static-stretch','静态拉伸','Static Stretch','保持一个拉伸姿势数十秒。','定住慢慢拉。','flex'],
  ['dynamic-stretch','动态拉伸','Dynamic Stretch','用动作带动关节活动范围。','边动边拉。','flex'],
  ['mobility','活动度','Mobility','关节能主动活动的范围。','关节能转多大圈。','flex'],
  ['rom','关节活动度','ROM','Range of Motion，关节从屈到伸的可用范围。','关节的开合角度。','flex'],

  ['core','核心','Core','腰盆区域的肌群，负责稳定与传力。','身体的中枢。','core'],
  ['plank','平板支撑','Plank','俯撑保持身体一条线的静态核心动作。','人板。','core'],
  ['anti-rotation','抗旋','Anti-rotation','抵抗躯干被扭转的稳定能力。','别让我转。','core'],
  ['transverse','腹横肌','Transverse Abdominis','像束腰般包裹腹部的深层核心肌群。','身体自带的腰带。','core'],
  ['bracing','核心收紧','Bracing','收紧腹压稳定脊柱的动作。','给身体充气。','core'],

  ['hiit','HIIT','High-Intensity Interval Training','高强度间歇训练，交替短时爆发与休息。','冲刺一下歇一下。','hiit'],
  ['interval','间歇','Interval','训练中工作与休息的交替。','干一阵歇一阵。','hiit'],
  ['tabata','Tabata','Tabata','20秒全力+10秒休息×8轮的经典间歇。','4分钟地狱。','hiit'],
  ['work-rest','工作休息比','Work-Rest Ratio','间歇中工作时长与休息时长的比例。','干和歇的比例。','hiit'],
  ['epoc','运动后过量氧耗','EPOC','Excess Post-exercise Oxygen Consumption，高强度后身体恢复多消耗的氧与热量。','运动后的余热。','hiit'],

  ['posture','体态','Posture','身体在静止或运动中的排列方式。','身体的站相坐相。','posture'],
  ['rounded-shoulder','圆肩','Rounded Shoulder','肩胛前引、含胸的体态问题。','肩往前扣。','posture'],
  ['anterior-pelvic-tilt','骨盆前倾','Anterior Pelvic Tilt','骨盆向前倾斜、腰部过度前凸的体态。','屁股翘腰塌。','posture'],
  ['upper-cross','上交叉综合征','Upper Crossed Syndrome','圆肩头前伸的常见体态失衡。','脖子前探含胸。','posture'],
  ['glute-bridge','臀桥','Glute Bridge','仰卧顶髋激活臀部的动作。','把胯顶起来。','posture'],

  ['macronutrients','三大营养素','Macronutrients','碳水、蛋白质、脂肪三种供能营养素。','食物的三巨头。','nutrition'],
  ['protein','蛋白质','Protein','构成肌肉等组织、由氨基酸组成的营养素。','肌肉的砖块。','nutrition'],
  ['carbohydrate','碳水化合物','Carbohydrate','主要供能营养素，以糖原形式储存。','身体的燃料。','nutrition'],
  ['glycogen','糖原','Glycogen','储存在肌肉和肝脏的碳水形式。','身体的备用油箱。','nutrition'],
  ['fat','脂肪','Fat','高能量密度的供能营养素，也参与激素合成。','身体的蓄电池。','nutrition'],
  ['calorie','卡路里','Calorie','衡量食物能量与消耗的单位。','能量的账本。','nutrition'],
  ['tdee','每日总消耗','TDEE','Total Daily Energy Expenditure，一天消耗的总热量。','每天的能量支出。','nutrition'],
  ['hydration','补水','Hydration','补充身体水分以维持运动与代谢。','给身体加水。','nutrition'],

  ['recovery','恢复','Recovery','训练后身体修复与超量恢复的过程。','练完长本事的时间。','recovery'],
  ['sleep','睡眠','Sleep','身体修复与激素调节的关键恢复期。','最好的补剂。','recovery'],
  ['doms','肌肉酸痛','DOMS','延迟性肌肉酸痛，训练后24-72小时出现的酸痛。','第二天才疼。','recovery'],
  ['active-recovery','主动恢复','Active Recovery','低强度活动促进恢复的方式。','轻动比躺着更能恢复。','recovery'],
  ['overtraining','过度训练','Overtraining','训练超过恢复能力导致表现下降的状态。','练过头了。','recovery'],
  ['deload','减载周','Deload','周期性降低训练量与强度以恢复的安排。','刻意减负的一周。','recovery'],
  ['supercompensation','超量恢复','Supercompensation','恢复后身体回升到超过原有水平的现象。','练完更强一截。','recovery'],

  ['fat-loss','减脂','Fat Loss','减少体脂、保留肌肉的体重管理。','减油箱不减压。','fatloss'],
  ['calorie-deficit','热量缺口','Calorie Deficit','摄入低于消耗以消耗脂肪的状态。','入不敷出。','fatloss'],
  ['body-fat','体脂率','Body Fat Percentage','脂肪占体重的比例。','身体的含油量。','fatloss'],
  ['bmr','基础代谢','BMR','Basal Metabolic Rate，安静时维持生命的最低热量消耗。','躺着也烧的热量。','fatloss'],
  ['metabolic-adaptation','代谢适应','Metabolic Adaptation','长期节食使代谢下降的现象。','身体省电模式。','fatloss'],

  ['hypertrophy','肌肥大','Hypertrophy','肌肉体积增大的过程。','让肌肉变大。','muscle'],
  ['muscle-damage','肌肉微损伤','Muscle Damage','训练造成的肌纤维微小撕裂，修复后增粗。','破而后立。','muscle'],
  ['volume','训练容量','Training Volume','组数×次数×重量的总量。','训练的总工作量。','muscle'],
  ['frequency','频率','Frequency','每周训练某肌群或部位的次数。','多久练一次。','muscle'],
  ['split','训练分化','Split','把全身拆分到不同训练日的安排。','分块练。','muscle'],
  ['tempo','节奏','Tempo','动作离心、停顿、向心的时长控制。','动作的速度配方。','muscle'],
  ['mps','肌肉蛋白质合成','MPS','Muscle Protein Synthesis，身体合成新肌肉蛋白的过程。','长肌肉的施工。','muscle'],

  ['habit','习惯','Habit','自动化、不需意志力的行为模式。','不用想就去做。','mindset'],
  ['intrinsic-motivation','内在动机','Intrinsic Motivation','因活动本身的乐趣而坚持。','因为喜欢所以做。','mindset'],
  ['smart-goal','SMART目标','SMART Goal','具体、可测、可达、相关、有期限的目标。','把目标说清楚。','mindset'],
  ['consistency','一致性','Consistency','长期规律地坚持训练的程度。','贵在坚持。','mindset'],
  ['plateau','平台期','Plateau','进步停滞的阶段。','卡住了。','mindset'],

  ['sport','项目','Sport','有规则、竞技或娱乐性的身体活动。','玩起来的运动。','sports'],
  ['ball-sport','球类运动','Ball Sport','用球进行的对抗性运动，如篮球足球羽毛球。','围着球跑。','sports'],
  ['climbing','攀岩','Climbing','攀爬岩壁或人工墙的力量与技术运动。','在墙上跳舞。','sports'],
  ['combat-sport','搏击运动','Combat Sport','拳击、散打、柔术等对抗性格斗运动。','两人对练。','sports'],
  ['cross-training','交叉训练','Cross Training','用不同项目互补训练。','换个花样练。','sports']
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
let s = '/* 模块元数据 + 学习路径(健身与运动)(自动生成,勿手改) */\n';
s += 'window.FIT = window.FIT || {};\n';
s += 'FIT.modules = ' + J(mods) + ';\n';
s += 'FIT.path = ' + J(path_) + ';\n';
s += 'FIT.totalLessons = FIT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(健身与运动)(自动生成) {id,name,en,def,analogy,module} */\nwindow.FIT = window.FIT || {};\nFIT.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nFIT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') !== -1) {
  idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
} else {
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 FIT.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
