/* 唐诗宋词 · 单一数据源生成器(唐诗三百首 + 宋词一百五十首,克隆「今日得到」框架并自带生成+校验)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html 的 <!--LESSONS-->。
   课程源数据在 tools/_src/*.js(L['module-id'] = [...])。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);

/* ---------- 通用 helper(build.js eval 作用域内,_src 可直接调用) ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别踩坑 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });
const qf = (q, answers, explain, source) => ({ type: 'fill', q: q, answer: answers, explain: explain, source: source || '想一想' });

/* ---------- 诗词专用 helper ---------- */
/* 作者行:pm(朝代, 作者) */
const pm = (dyn, author) => '<div class="poem-meta"><span class="poem-dyn">' + dyn + '</span> · <span class="poem-author">' + author + '</span></div>';
/* 原文:pt([句, 句, ...]) 每句一行,居中衬线;句中可含 <sup>①</sup> 注释标 */
const pt = (lines) => '<div class="poem-text">' + lines.map(l => '<span class="pl">' + l + '</span>').join('') + '</div>';
/* 段落:pseg(段标题, 段正文HTML) */
const pseg = (h, body) => '<div class="poem-seg"><div class="poem-seg-h">' + h + '</div>' + body + '</div>';
/* 单条注释:pnote(序号, 字词, 解释) */
const pnote = (n, w, e) => '<li><b class="pn-n">' + n + '</b><span class="pn-w">' + w + '</span> ' + e + '</li>';
/* 注释列表:pnotes([[序号,字词,解释], ...]) */
const pnotes = (items) => '<ol class="poem-notes">' + items.map(it => pnote(it[0], it[1], it[2])).join('') + '</ol>';
/* 译白:ptrans(白话译文) */
const ptrans = (t) => '<div class="poem-trans">' + t + '</div>';

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['tang-wugu','五言古诗','《唐诗三百首》五古卷,古朴浑厚,不拘格律,多抒情言志','唐诗','Five-char Ancient Verse'],
  ['tang-qigu','七言古诗','七古卷,篇幅开阔,纵意抒写,长于叙事铺陈','唐诗','Seven-char Ancient Verse'],
  ['tang-wulv','五言律诗','五律卷,格律严谨,对仗工稳,凝练含蓄','唐诗','Five-char Regulated Verse'],
  ['tang-qilv','七言律诗','七律卷,沉雄顿挫,气象宏大,最见工力','唐诗','Seven-char Regulated Verse'],
  ['tang-wujue','五言绝句','五绝卷,言简意远,二十字见天地','唐诗','Five-char Quatrain'],
  ['tang-qijue','七言绝句','七绝卷,风神摇曳,意境悠长','唐诗','Seven-char Quatrain'],
  ['song-haofang','豪放词','苏轼辛弃疾一派,气象阔大,慷慨纵横','宋词','Heroic Ci'],
  ['song-wanyue','婉约词','柳永李清照一派,细腻深婉,曲折尽意','宋词','Graceful Ci']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  /* 格律 */
  ['pingze','平仄','Tone','汉语字音分平声仄声,近体诗按平仄规律交替排列。','诗的节拍高低。','tang-qilv'],
  ['yun','押韵','Rhyme','诗句末尾用同韵字收束,使诗谐和可诵。','句尾的回声。','tang-qijue'],
  ['duizhang','对仗','Antithesis','律诗中间两联,上下句词性结构两两相对。','上下句的镜像。','tang-wulv'],
  ['gelv','格律','Meter','近体诗对字数、平仄、对仗、押韵的固定要求。','诗的规矩尺。','tang-qilv'],
  ['jintishi','近体诗','Regulated Verse','唐代成熟的格律诗,含律诗绝句,讲平仄对仗。','戴着镣铐跳舞的诗。','tang-qilv'],
  ['guti','古体诗','Ancient Verse','唐以前不拘格律的古诗,又称古风。','格律之前的自由诗。','tang-wugu'],
  ['gufeng','古风','Gufeng','即古体诗,不拘平仄对仗,古朴自然。','唐以前的自由体。','tang-wugu'],
  ['yuefu','乐府','Yuefu','本为采诗机构,后指可入乐的诗体,多叙事抒情。','汉代的流行歌词。','tang-wugu'],
  ['lushi','律诗','Lüshi','八句格律诗,中间两联须对仗,分五七言。','八句的格律诗。','tang-wulv'],
  ['jueju','绝句','Jueju','四句格律诗,分五七言,言简意永。','四句成绝。','tang-wujue'],
  ['wuyan','五言','Five-char','每句五字,凝练含蓄。','五字一句。','tang-wugu'],
  ['qiyan','七言','Seven-char','每句七字,流丽舒展。','七字一句。','tang-qigu'],
  ['hanlian','颔联','Second Couplet','律诗第三四句,须对仗。','律诗的第二对联。','tang-wulv'],
  ['jinglian','颈联','Third Couplet','律诗第五六句,须对仗,最见功力。','律诗的第三对联。','tang-wulv'],
  ['pailv','排律','Pailü','超过八句的律诗,通篇对仗。','加长的律诗。','tang-wulv'],
  ['gexing','歌行','Gexing','七古一种,篇幅长,纵放抒写,如《长恨歌》。','可放声长吟的古诗。','tang-qigu'],
  ['cipai','词牌','Cipai','词的曲调名,规定字数句式平仄,与内容未必相关。','词的曲谱格式。','song-haofang'],
  ['xiaoling','小令','Xiaoling','短词,一般五十八字以内。','短篇幅的词。','song-wanyue'],
  ['zhongdiao','中调','Zhongdiao','中等篇幅的词,五十九至九十字。','中等篇幅的词。','song-wanyue'],
  ['changdiao','长调','Changdiao','长词,九十一字以上。','长篇幅的词。','song-haofang'],
  ['ciming','词题','Ci Title','词牌外另标的题目,点明内容。','词的内容标题。','song-wanyue'],
  ['shangxiaque','上下阕','Stanzas','词分两段,上阕下阕,下阕常换意。','词的上下两段。','song-haofang'],

  /* 意象 · 诗话 */
  ['yiyi','意象','Imagery','寄寓情思的具体物象。','带情绪的画面。','tang-qijue'],
  ['yijing','意境','Yijing','意象群烘出的整体氛围与境界。','意象搭出的气场。','tang-qijue'],
  ['shiyan','诗眼','Poetic Eye','全诗最传神、最关键的字或句。','一首诗的点睛笔。','tang-qijue'],
  ['qiyun','气韵','Spirit','作品整体气势与韵味。','诗的精气神。','tang-qilv'],
  ['fenggu','风骨','Fenggu','刚健有力的风格与骨力。','诗的脊梁。','tang-qilv'],
  ['shenyun','神韵','Shenyun','含蓄深远、意在言外的韵味。','说不尽的那点意思。','tang-wujue'],
  ['xingxiang','兴象','Xingxiang','以景物兴起情思所成的形象。','触景生情的画面。','tang-wugu'],
  ['hangu','含蓄','Implicit','言有尽意无穷,不直说尽。','话留半句。','tang-wujue'],
  ['ziran','自然','Naturalness','不事雕琢,如出天成。','不雕琢的真。','tang-wujue'],
  ['shengong','神来之笔','Inspiration','自然天成、不可凑泊的妙句。','天才的一闪。','tang-qijue'],
  ['gongzheng','工整','Neatness','对仗平仄严整合律。','对得齐整。','tang-wulv'],
  ['jingjie','境界','Realm','作品达到的艺术层次,王国维论词核心。','诗抵达的高度。','song-wanyue'],
  ['gebuji','隔与不隔','Direct vs Indirect','王国维论词:隔=晦涩,不隔=真切。','说清楚了没有。','song-wanyue'],
  ['qingjing','情景交融','Fusion','景与情合,以景写情,浑然一体。','景就是情。','tang-qijue'],
  ['dongjing','动静','Dynamic & Static','动静相衬相生,以动写静或以静衬动。','动与静的搭配。','tang-wujue'],

  /* 修辞 · 手法 */
  ['fubixing','赋比兴','Fu Bi Xing','赋=铺陈,比=比喻,兴=起兴,古诗三种基本手法。','直说、打比方、借物起头。','tang-wugu'],
  ['bixing','比兴','Bi Xing','比=比喻,兴=起兴,诗之双翼。','打比方和借物起头。','tang-wugu'],
  ['yongdian','用典','Allusion','引用古事古语以达意,增厚度。','借古人的话说话。','tang-qilv'],
  ['lianzi','炼字','Word Polishing','反复推敲选用最传神的字。','捻断数茎须。','tang-qijue'],
  ['tuowu','托物言志','Symbolism','借咏物寄寓志向情怀。','借着东西说自己。','tang-wujue'],
  ['xushi','虚实','Virtual & Real','实景与虚景、实写与虚写相生。','有与无的配合。','tang-qijue'],
  ['yanzhi','言志','Expressing Will','诗言志,诗以达意抒情。','诗是心声。','tang-wugu'],
  ['duibi','对比','Contrast','以对立面相衬,突出主旨。','放在一起才显出。','tang-qijue'],

  /* 流派 · 题材 */
  ['shanshui','山水诗','Landscape Poetry','以山水自然为题材,谢灵运王维为代表。','写山写水的诗。','tang-wulv'],
  ['biansai','边塞诗','Frontier Poetry','写边塞征战苍凉,高适岑参王昌龄为代表。','写大漠烽烟的诗。','tang-qigu'],
  ['tianyuan','田园诗','Pastoral Poetry','写田园隐逸生活,陶渊明为代表。','写田园生活的诗。','tang-wulv'],
  ['haofang','豪放派','Heroic School','宋词一大流派,气象阔大,苏轼辛弃疾为代表。','大江东去的词风。','song-haofang'],
  ['wanyue','婉约派','Graceful School','宋词一大流派,细腻委婉,柳永李清照为代表。','杨柳岸晓风残月的词风。','song-wanyue'],
  ['yongwu','咏物诗','Object Poetry','以咏物寄情言志。','写东西说心思。','tang-wujue'],
  ['songbie','送别诗','Farewell Poetry','写离别之情,唐人最擅。','折柳送行的诗。','tang-qijue'],
  ['yonghuai','咏怀诗','Expressing Feelings','抒写怀抱志趣与感慨。','说心里话。','tang-wugu'],
  ['yongshi','咏史','Historical Poetry','以史事寄慨、借古讽今的诗。','借古说今。','tang-qijue'],
  ['guiyuan','闺怨诗','Boudoir Lament','写女子独处幽怨之情。','深闺里的叹息。','tang-wujue'],

  /* 文化 · 典故 */
  ['zheliu','折柳','Willow Farewell','古人折柳送别,柳谐"留"。','送别时的那枝柳。','tang-qijue'],
  ['wangyue','望月','Moon Gazing','月寄思乡怀人之情。','抬头看月亮想家。','tang-wujue'],
  ['denggao','登高','Climbing High','重阳登高,寄思乡悲秋。','重阳节的登高望远。','tang-qilv'],
  ['yinjiu','饮酒','Drinking','酒寄豪情愁绪,陶李苏皆善饮。','诗与酒不分家。','tang-qigu'],
  ['chuci','楚辞','Chuci','战国楚地屈原为代表的浪漫诗体。','南方的香草美人。','tang-wugu'],
  ['shijing','诗经','Book of Songs','中国最早诗歌总集,西周至春秋 305 篇。','三千年前的歌本。','tang-wugu'],
  ['wenbian','文变','Literary Evolution','文章随世情而变,一代有一代之文学。','时代变诗也变。','song-haofang'],

  /* 常见意象 */
  ['yue-xiang','月亮','Moon','诗词最常见意象,寄思乡怀人孤寂。','天上那轮思乡的月。','tang-wujue'],
  ['liu-xiang','柳','Willow','折柳送别,谐"留",寄离别。','送别的柳。','tang-qijue'],
  ['mei-xiang','梅','Plum','凌寒独放,寄高洁坚贞。','雪里的傲骨。','tang-wujue'],
  ['yan-xiang','雁','Wild Goose','候鸟,寄思乡传书孤寂。','传书的那只雁。','tang-qijue'],
  ['jiu-xiang','酒','Wine','寄豪情愁绪忘忧。','解愁忘忧的杯。','tang-qigu'],
  ['ju-xiang','菊','Chrysanthemum','凌霜盛开,寄隐逸高洁。','霜里的隐士。','tang-wulv'],
  ['song-xiang','松','Pine','岁寒不凋,寄坚贞。','不凋的节操。','tang-wulv'],
  ['zhu-xiang','竹','Bamboo','虚心有节,寄君子。','有节的君子。','tang-wulv']
];

/* ============ 课程(由 _src/*.js 注入) ============ */
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
let s = '/* 模块元数据 + 学习路径(唐诗宋词)(自动生成,勿手改) */\n';
s += 'window.TSP = window.TSP || {};\n';
s += 'TSP.modules = ' + J(mods) + ';\n';
s += 'TSP.path = ' + J(path_) + ';\n';
s += 'TSP.totalLessons = TSP.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(唐诗宋词)(自动生成) {id,name,en,def,analogy,module} */\nwindow.TSP = window.TSP || {};\nTSP.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nTSP.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
  idx = idx.replace(/<!-- Lessons[^>]*-->[\s\S]*?<\/body>/, '<!-- Lessons (由 TSP.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
