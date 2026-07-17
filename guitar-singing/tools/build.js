/* 吉他弹唱 · 单一数据源生成器(科普通识,克隆 astronomy 框架)。
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
  ['intro','吉他入门','认识吉他、定弦、姿势、左右手','入门','Getting Started'],
  ['theory','乐理速通','音名、半音全音、音阶、音程、调','基础','Music Theory'],
  ['chords','和弦大全','开放和弦、大横按、五和弦、和弦进行','核心','Chords'],
  ['rhythm','节奏与扫弦','拍号、扫弦节奏型、切分、闷音','核心','Rhythm & Strumming'],
  ['fingerstyle','指弹与分解','指弹基础、分解和弦、Travis 扫弦','核心','Fingerstyle'],
  ['playsing','弹唱配合','协调、气息、音域匹配、层次','核心','Play & Sing'],
  ['capo','变调夹与移调','变调夹用法、找到适合你的调','实用','Capo & Transposing'],
  ['techniques','常用技巧','击弦勾弦、滑音、推弦、揉弦、泛音','进阶','Techniques'],
  ['songs','经典弹唱曲目','从入门到进阶的弹唱实战','实战','Songs'],
  ['arrange','编配与即兴','歌曲结构、和弦替代、前奏尾奏、即兴','进阶','Arranging'],
  ['practice','练习方法','高效练习、肌肉记忆、听力训练','实用','Practice'],
  ['gear','器材与保养','选琴、琴弦配件、扩音、保养','实用','Gear & Care']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['guitar','吉他','Guitar','一种拨弦乐器，通常六根弦，用手指或拨片弹奏。','会唱歌的木头。','intro'],
  ['acoustic-guitar','木吉他','Acoustic Guitar','琴箱共鸣发声的吉他，无需扩音。','自带音箱的吉他。','intro'],
  ['classical-guitar','古典吉他','Classical Guitar','使用尼龙弦、琴颈较宽的木吉他，音色柔和。','温柔的吉他。','intro'],
  ['electric-guitar','电吉他','Electric Guitar','靠拾音器将弦振动转为电信号、需扩音的吉他。','插电的吉他。','intro'],
  ['tuning','定弦','Tuning','把吉他各弦调到标准音高的过程。','给吉他校音。','intro'],
  ['standard-tuning','标准定弦','Standard Tuning','从粗到细六根弦依次为 E A D G B E 的定弦方式。','吉他的出厂设置。','intro'],
  ['fret','品','Fret','指板上金属横条，按在不同品可得不同音高。','音高的格子。','intro'],
  ['pick','拨片','Pick','用来拨弦的小片，多为塑料材质。','弹琴的小指甲。','intro'],

  ['note','音名','Note Name','用字母 C D E F G A B 标记的音高名称。','音的名字。','theory'],
  ['semitone','半音','Semitone','十二平均律中最小的音高距离，吉他上相邻一品。','音的最小步。','theory'],
  ['whole-tone','全音','Whole Tone','两个半音的距离，吉他上隔一品。','走两步。','theory'],
  ['scale','音阶','Scale','按一定规律排列的一组音，如大调、小调。','音的楼梯。','theory'],
  ['major-scale','大调音阶','Major Scale','全全半全全全半的七声音阶，听感明朗。','阳光的楼梯。','theory'],
  ['minor-scale','小调音阶','Minor Scale','全半全全半全全的七声音阶，听感忧郁。','阴天的楼梯。','theory'],
  ['pentatonic','五声音阶','Pentatonic Scale','只含五个音的音阶，好听不易错，弹唱常用。','五个音走天下。','theory'],
  ['interval','音程','Interval','两个音之间的距离，如大三度、纯五度。','音与音的间距。','theory'],
  ['key','调','Key','以某个音为中心组织起来的音高体系。','音的家。','theory'],
  ['root-note','根音','Root Note','和弦或音阶的基准音，决定其名称。','和弦的老大。','theory'],

  ['chord','和弦','Chord','三个或以上音同时发响的组合。','几个音一起响。','chords'],
  ['triad','三和弦','Triad','由根音、三音、五音构成的三音和弦。','和弦的三脚架。','chords'],
  ['major-chord','大三和弦','Major Chord','根音上叠大三度再叠小三度，听感明朗。','阳光的和弦。','chords'],
  ['minor-chord','小三和弦','Minor Chord','根音上叠小三度再叠大三度，听感忧郁。','阴天的和弦。','chords'],
  ['open-chord','开放和弦','Open Chord','利用空弦、在低把位按出的和弦，好按好听。','新手的友好和弦。','chords'],
  ['barre-chord','大横按和弦','Barre Chord','一根手指横按多根弦、可沿指板移动的和弦。','万能的和弦。','chords'],
  ['power-chord','五和弦','Power Chord','只含根音和五音（可加八度）的和弦，电吉他常用。','力量的和弦。','chords'],
  ['chord-progression','和弦进行','Chord Progression','一串和弦按顺序排列，构成歌曲的骨架。','和弦的接力赛。','chords'],
  ['slash-chord','斜线和弦','Slash Chord','低音非根音的和弦，写作 C/G 等。','换了个脚的和弦。','chords'],

  ['time-signature','拍号','Time Signature','以分数表示每小节几拍、以什么音符为一拍。','节奏的配方。','rhythm'],
  ['beat','拍','Beat','音乐中基本的时间单位，常以四分音符为一拍。','心跳的一下。','rhythm'],
  ['tempo','速度','Tempo','每分钟拍数（BPM），决定音乐快慢。','音乐的步速。','rhythm'],
  ['strumming','扫弦','Strumming','用手指或拨片扫过多根弦使之同时或依次发声。','刷一下琴弦。','rhythm'],
  ['downstroke','下扫','Downstroke','从低音弦向高音弦方向扫下。','往下刷。','rhythm'],
  ['upstroke','上扫','Upstroke','从高音弦向低音弦方向扫上。','往上挑。','rhythm'],
  ['syncopation','切分音','Syncopation','重音落在弱拍或反拍上，制造律动感。','踩在不该踩的拍上。','rhythm'],
  ['palm-mute','闷音','Palm Mute','右手掌缘轻触琴弦使音发短发闷。','捂住嘴说话。','rhythm'],

  ['fingerpicking','指弹','Fingerpicking','用右手指逐弦拨奏的技法。','一根弦一根弦弹。','fingerstyle'],
  ['arpeggio','分解和弦','Arpeggio','把和弦各音依次弹出而非同时。','和弦拆开念。','fingerstyle'],
  ['travis-picking','Travis 扫弦法','Travis Picking','以交替低音为骨架、穿插旋律音的指弹模式。','低音走路旋律唱歌。','fingerstyle'],
  ['alternating-bass','交替低音','Alternating Bass','拇指在两根低音弦间交替拨奏的技巧。','低音的左右脚。','fingerstyle'],

  ['vocal-range','音域','Vocal Range','一个人能唱出的最低到最高音的范围。','嗓子的尺码。','playsing'],
  ['breathing','气息','Breathing','唱歌时吸气和呼气的控制。','唱歌的燃料。','playsing'],
  ['dynamics','强弱','Dynamics','音量大小的变化，制造层次感。','音乐的呼吸。','playsing'],

  ['folk','民谣','Folk','以木吉他伴奏、叙事性强的音乐风格。','讲故事的歌。','songs'],

  ['capo','变调夹','Capo','夹在指板上使所有弦升高相同半音的工具。','给吉他换个调的夹子。','capo'],
  ['transpose','移调','Transpose','把一首歌从原调转到另一个调。','给歌换个家。','capo'],
  ['key-signature','调号','Key Signature','乐谱开头标记的升降号，表示该调的固定升降音。','调的身份证。','capo'],

  ['hammer-on','击弦','Hammer-on','左手手指击打品丝发声、右手不拨的技巧。','敲出来的音。','techniques'],
  ['pull-off','勾弦','Pull-off','左手手指勾离弦使低品发声的技巧。','勾出来的音。','techniques'],
  ['slide','滑音','Slide','左手手指沿弦滑动改变音高。','音的滑梯。','techniques'],
  ['bend','推弦','Bend','左手推拉弦使音升高。','把音拉高。','techniques'],
  ['vibrato','揉弦','Vibrato','推拉弦使音高微小波动，增加表现力。','音在发抖。','techniques'],
  ['harmonics','泛音','Harmonics','轻触弦的特定位置拨弦，发出钟声般的高音。','铃铛一样的音。','techniques'],

  ['verse','主歌','Verse','歌曲中叙述段落，通常旋律和歌词变化较多。','讲故事的段落。','arrange'],
  ['chorus','副歌','Chorus','歌曲中反复出现的核心段落，旋律最洗脑。','最上口的部分。','arrange'],
  ['bridge','桥段','Bridge','连接副歌与尾声、引入新素材的段落。','歌曲的转折。','arrange'],
  ['intro','前奏','Intro','歌曲开头的器乐段落。','歌的开场白。','arrange'],
  ['outro','尾奏','Outro','歌曲结尾的器乐段落。','歌的告别语。','arrange'],
  ['solo','独奏','Solo','一段以乐器为主旋律的段落。','吉他说话时间。','arrange'],
  ['improvisation','即兴','Improvisation','不预先写好、当场创作演奏。','现编现弹。','arrange'],

  ['muscle-memory','肌肉记忆','Muscle Memory','经反复练习后手指自动完成动作的能力。','手指学会了。','practice'],
  ['ear-training','听力训练','Ear Training','训练耳朵辨别音高、音程、和弦的能力。','给耳朵上课。','practice'],
  ['metronome','节拍器','Metronome','发出固定节拍声的工具，用于练习节奏稳定。','音乐的钟。','practice'],

  ['string','琴弦','String','吉他上振动的弦，民谣吉他多为钢弦。','发声的线。','gear'],
  ['amplifier','扩音器','Amplifier','将电吉他信号放大发声的设备。','吉他的大喇叭。','gear'],
  ['effects-pedal','效果器','Effects Pedal','改变吉他音色的脚踏设备，如失真、混响。','变声的踏板。','gear'],
  ['action','弦距','Action','琴弦到指板的距离，影响手感和音色。','弦离板的远近。','gear'],
  ['intonation','音准','Intonation','吉他各品位音高的准确程度。','每品都准不准。','gear']
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
let s = '/* 模块元数据 + 学习路径(吉他弹唱)(自动生成,勿手改) */\n';
s += 'window.GTR = window.GTR || {};\n';
s += 'GTR.modules = ' + J(mods) + ';\n';
s += 'GTR.path = ' + J(path_) + ';\n';
s += 'GTR.totalLessons = GTR.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(吉他弹唱)(自动生成) {id,name,en,def,analogy,module} */\nwindow.GTR = window.GTR || {};\nGTR.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nGTR.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 GTR.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
