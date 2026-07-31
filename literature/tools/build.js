/* 文学通识 · 单一数据源生成器(科普通识,克隆 astronomy/guitar-singing 框架)。
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
const pit = (t) => '<div class="pit"><b>别绕晕 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });
const qf = (q, answers, explain, source) => ({ type: 'fill', q: q, answer: answers, explain: explain, source: source || '想一想' });

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['intro','文学基础','文学是什么、虚构、体裁、语言与读法','基础','Literature Basics'],
  ['poetry','诗歌','诗的本质、意象、诗体、格律与赏析','核心','Poetry'],
  ['novel','小说','人物、情节、视角、环境与主题','核心','The Novel'],
  ['essay','散文','边界、形散神聚、类型与名家','核心','The Essay'],
  ['drama','戏剧','要素、冲突、对话、悲喜剧与舞台','核心','Drama'],
  ['classical-cn','中国古典文学','诗经楚辞、唐诗宋词、元曲明清小说','进阶','Classical Chinese Lit'],
  ['modern-cn','中国现当代文学','五四新文学、现代小说、新诗与当代','进阶','Modern Chinese Lit'],
  ['classical-west','西方古典文学','神话史诗、希腊悲剧、文艺复兴与莎翁','进阶','Classical Western Lit'],
  ['modern-west','西方近现代文学','浪漫、现实、现代主义到魔幻现实','进阶','Modern Western Lit'],
  ['theory','文学理论','模仿与表现、形式、结构到后殖民','进阶','Literary Theory'],
  ['criticism','批评与赏析','细读、知人论世、比较与经典化','实用','Criticism'],
  ['lit-era','文学与时代','历史、政治、市场、翻译、网络与影视','实用','Literature & Era']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['literature','文学','Literature','以语言为媒介塑造形象、表达情感与思考的艺术。','用文字搭起的世界。','intro'],
  ['fiction','虚构','Fiction','文学中编造不实之人之事以达更高真实的手法。','假事说真。','intro'],
  ['genre','体裁','Genre','文学的类别划分,如诗歌、小说、散文、戏剧。','文学的分类盒。','intro'],
  ['form','形式','Form','文学作品的结构与外在形态,含格律、篇幅与布局。','文学的骨架。','intro'],
  ['imagery','意象','Imagery','用具体可感的形象寄寓情思的文学单位。','带情绪的画面。','intro'],
  ['canon','经典','Canon','公认具有持久价值、被反复传读的作品集合。','时间挑出来的书。','intro'],

  ['poem','诗歌','Poetry','高度凝练、讲求节奏与意象的文学体裁。','文字的音乐。','poetry'],
  ['meter','格律','Meter','诗中音节轻重长短的规律排列。','诗的节拍。','poetry'],
  ['rhyme','押韵','Rhyme','句末或行末用同韵字收束。','句尾的回声。','poetry'],
  ['verse','韵文','Verse','讲求格律节奏的诗体,与散文相对。','押韵的那一支。','poetry'],
  ['free-verse','自由诗','Free Verse','不拘固定格律、依内在节奏的诗。','不押韵也成诗。','poetry'],
  ['lyric','抒情诗','Lyric','抒发个人情感的短诗。','诗里的独白。','poetry'],
  ['narrative-poem','叙事诗','Narrative Poem','讲述事件与人物的诗。','唱出来的故事。','poetry'],

  ['novel','小说','Novel','以散文虚构叙述人物与故事的长篇文学体裁。','一个人造的漫长人生。','novel'],
  ['character','人物','Character','小说中塑造的角色,含性格与命运。','故事里的人。','novel'],
  ['plot','情节','Plot','事件按因果组织成的序列。','故事的骨架。','novel'],
  ['viewpoint','视角','Viewpoint','叙述者所处的位置与所知范围。','谁的眼在看。','novel'],
  ['narrator','叙述者','Narrator','讲故事的那个"声音"。','故事的嘴巴。','novel'],
  ['setting','环境','Setting','故事发生的时空与氛围。','故事的舞台。','novel'],
  ['theme','主题','Theme','作品贯穿的核心意念。','故事其实在说什么。','novel'],
  ['conflict','冲突','Conflict','推动情节的对立与矛盾。','故事的发动机。','novel'],

  ['essay','散文','Essay','形式自由、抒写真实见闻感受的文学体裁。','想到哪写到哪的真心话。','essay'],
  ['prose','散文(泛)','Prose','不押韵、不分行的一般文体,与韵文相对。','不分行的那一支。','essay'],
  ['shensan','神聚','Intimate Focus','形散而神不散,材料虽散而有一贯之意。','散乱的珠子一根线。','essay'],
  ['sketch','速写','Sketch','简练勾勒人物场景的短文。','文字的速写本。','essay'],
  ['familiar-essay','小品文','Familiar Essay','短小亲切、谈家常抒性情的散文。','桌边的闲聊。','essay'],
  ['montage','联想','Montage','散文中以联想跳跃连缀材料的写法。','思绪的跳格子。','essay'],

  ['drama','戏剧','Drama','以对话与动作在舞台上演绎故事的文学体裁。','活在台上的故事。','drama'],
  ['dialogue','对话','Dialogue','剧中人物之间的言语交锋。','角色的你来我往。','drama'],
  ['monologue','独白','Monologue','一个角色单独抒发的长段言语。','角色的自言自语。','drama'],
  ['tragedy','悲剧','Tragedy','主人公因性格或命运走向毁灭的严肃戏剧。','把美的撕给人看。','drama'],
  ['comedy','喜剧','Comedy','以滑稽与误会制造笑料的戏剧。','让人笑着想哭。','drama'],
  ['stagecraft','舞台','Stagecraft','戏剧演出的空间与调度艺术。','故事的现场。','drama'],
  ['catharsis','净化','Catharsis','悲剧引发怜悯恐惧使情感得以宣泄。','哭一场就轻了。','drama'],

  ['shijing','诗经','Book of Songs','中国最早的诗歌总集,收西周至春秋 305 篇。','三千年前的歌本。','classical-cn'],
  ['chuci','楚辞','Chuci','战国楚地以屈原为代表的浪漫诗体。','南方的香草美人。','classical-cn'],
  ['gufeng','古风','Gufeng','唐以前不拘格律的古体诗。','格律之前的诗。','classical-cn'],
  ['jintishi','近体诗','Regulated Verse','唐代成熟、讲求平仄对仗的格律诗。','戴着镣铐跳舞的诗。','classical-cn'],
  ['ci','词','Ci','句式长短、依谱填词的宋代诗体。','唱出来的长短句。','classical-cn'],
  ['qu','曲','Sanqu & Yuanqu','元代兴盛、可演可唱的戏曲与散曲。','元人时代的戏与歌。','classical-cn'],
  ['zhanghui','章回小说','Chapter Novel','明清分回标目、连载叙事的长篇小说。','一回一回的书。','classical-cn'],
  ['guwen','古文运动','Classical Prose Movement','唐宋以复古散文明道达意的文学运动。','扔掉骈文写真文章。','classical-cn'],

  ['new-culture','新文化运动','New Culture Movement','五四前后以白话文与民主科学为旗的思想文学运动。','把文言换成大白话。','modern-cn'],
  ['baihua','白话文','Vernacular','用日常口语写成的现代汉语书面语。','说话怎么写就怎么写。','modern-cn'],
  ['xinshi','新诗','New Poetry','打破旧格律、用白话写作的现代诗歌。','不再戴镣铐的诗。','modern-cn'],
  ['modern-novel','现代小说','Modern Novel','五四后受西方影响、以白话叙述的新小说。','现代人的新故事。','modern-cn'],
  ['xiangtu','乡土文学','Native Soil Literature','以乡村为题材、写土地与农民的文学流派。','写泥土里的人。','modern-cn'],
  ['scar-lit','伤痕文学','Scar Literature','文革后写创伤与苦难的文学思潮。','把伤口说出来。','modern-cn'],
  ['root-seeking','寻根文学','Root-seeking Literature','80 年代反思文化之根的文学思潮。','往回找自己是谁。','modern-cn'],

  ['myth','神话','Myth','先民解释世界与神祇的口传叙事。','古人的百科全书。','classical-west'],
  ['epic','史诗','Epic','歌咏英雄与民族命运的长篇叙事诗。','唱出来的英雄传。','classical-west'],
  ['greek-tragedy','希腊悲剧','Greek Tragedy','古雅典以命运与英雄为主题的戏剧。','命运的绞肉机。','classical-west'],
  ['medieval','中世纪文学','Medieval Lit','欧洲中世纪宗教与骑士题材的文学。','神与剑的故事。','classical-west'],
  ['renaissance','文艺复兴','Renaissance','14-17 世纪以人文主义复兴古典的思潮。','把人重新放回中心。','classical-west'],
  ['humanism','人文主义','Humanism','强调人的价值与世俗生活的思潮。','人比神重要。','classical-west'],
  ['shakespeare','莎士比亚','Shakespeare','英国文艺复兴戏剧与诗歌巨匠。','英语文学的顶峰。','classical-west'],

  ['romanticism','浪漫主义','Romanticism','18 世纪末强调情感、想象与个性的文学思潮。','把心放到天上。','modern-west'],
  ['realism','现实主义','Realism','如实描写社会生活与典型人物的文学。','把眼对准人间。','modern-west'],
  ['naturalism','自然主义','Naturalism','以科学决定论写人的文学倾向。','把人当标本写。','modern-west'],
  ['symbolism','象征主义','Symbolism','以象征与暗示表达幽微心象的诗派。','不直说,只暗示。','modern-west'],
  ['modernism','现代主义','Modernism','20 世纪初反传统、重形式实验的文学。','打碎再重组。','modern-west'],
  ['stream-of-consciousness','意识流','Stream of Consciousness','直接呈现意识流动的叙事手法。','把脑子里的水流给你看。','modern-west'],
  ['postmodernism','后现代主义','Postmodernism','解构宏大叙事、戏仿拼贴的文学。','把一切都不当真。','modern-west'],
  ['magical-realism','魔幻现实主义','Magical Realism','把魔幻当作现实来写的拉美文学。','现实里长出鬼神。','modern-west'],

  ['mimesis','模仿说','Mimesis','艺术模仿自然与现实的理论。','文学是现实的镜子。','theory'],
  ['expression','表现说','Expression','艺术是内心情感的外化。','文学是心声。','theory'],
  ['formalism','形式主义','Formalism','关注文本自身形式、悬置作者意图的理论。','只看怎么写。','theory'],
  ['structuralism','结构主义','Structuralism','以结构关系与符号系统分析文学。','文学是符号网。','theory'],
  ['reader-response','读者反应','Reader Response','以读者的接受与阐释为重的理论。','读者也是作者。','theory'],
  ['psychoanalysis','精神分析批评','Psychoanalytic Criticism','以无意识解读文本与作者。','给文本做精神分析。','theory'],
  ['feminist','女性主义批评','Feminist Criticism','从性别权力关系重读文学。','重新听女性的声音。','theory'],

  ['close-reading','细读','Close Reading','对文本语言细节的细致分析。','一字一句地抠。','criticism'],
  ['intertextuality','互文性','Intertextuality','文本之间相互引用改写的关系。','文本之间互相借东西。','criticism'],
  ['comparative','比较文学','Comparative Literature','跨语言跨文化比较研究文学。','把不同文学放一起看。','criticism'],
  ['canonization','经典化','Canonization','某作品被逐步纳入经典的过程。','怎么变成经典的。','criticism'],
  ['context','知人论世','Context','结合作者身世与时代理解作品。','把书放回它的人与时代。','criticism'],
  ['interpretation','阐释','Interpretation','对文本意义的解释与建构。','给文本找意义。','criticism'],
  ['archetype','原型','Archetype','作品中反复出现的母题与人物模式。','故事的老基因。','criticism'],

  ['lit-history','文学与历史','Literature & History','文学是时代的镜子,历史是其底色。','时代怎么走,文学怎么写。','lit-era'],
  ['censorship','审查','Censorship','对文学出版的政治与制度管控。','写什么得先看脸色。','lit-era'],
  ['literary-market','文学市场','Literary Market','文学的商品化与读者消费。','书也要卖得动。','lit-era'],
  ['translation','翻译','Translation','把作品转入另一语言以传播。','让书跨越语言。','lit-era'],
  ['web-literature','网络文学','Web Literature','互联网原生、连载互动的文学形态。','写在网上的长篇连载。','lit-era'],
  ['adaptation','改编','Adaptation','把文学转为影视等其他媒介。','把书变成剧。','lit-era']
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
let s = '/* 模块元数据 + 学习路径(文学通识)(自动生成,勿手改) */\n';
s += 'window.LIT = window.LIT || {};\n';
s += 'LIT.modules = ' + J(mods) + ';\n';
s += 'LIT.path = ' + J(path_) + ';\n';
s += 'LIT.totalLessons = LIT.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(文学通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.LIT = window.LIT || {};\nLIT.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nLIT.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 LIT.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
