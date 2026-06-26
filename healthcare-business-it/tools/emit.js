/* 生成全部内容文件 + 注入 index.html 的课程脚本列表。
   用法: node emit.js <站点根目录绝对路径> */
const meta = require('./gen.js');
const { LESSONS } = require('./lessons.js');
const fs = require('fs');
const path = require('path');
const ROOT = process.argv[2];
if (!ROOT) { console.error('需要站点根目录参数'); process.exit(1); }
const C = (...a) => path.join(ROOT, 'content', ...a);
const { MODULES, TERMS, FIGURES, TIMELINE, MODELS, COMPARE } = meta;

const termIds = new Set(TERMS.map(t => t[0]));
const moduleIds = new Set(MODULES.map(m => m[0]));

/* 组装 path + 校验 */
const path_ = [];
const lessonIds = new Set();
let totalLessons = 0;
let errors = [];

MODULES.forEach((m, mi) => {
  const mid = m[0];
  const list = LESSONS[mid] || [];
  if (!list.length) errors.push('模块无课时: ' + mid);
  list.forEach((L, li) => {
    const id = mid + '/' + L[0];
    lessonIds.add(id);
    path_.push(id);
    totalLessons++;
  });
});

/* 校验 data-term / 内部链接 */
function checkBody(id, html) {
  let m;
  const re = /data-term="([^"]+)"/g;
  while ((m = re.exec(html))) if (!termIds.has(m[1])) errors.push(id + ' 未知术语: ' + m[1]);
  const rl = /href="#\/l\/([^"]+)"/g;
  while ((m = rl.exec(html))) if (!lessonIds.has(m[1])) errors.push(id + ' 链接到不存在的课: ' + m[1]);
  const rm = /href="#\/m\/([^"]+)"/g;
  while ((m = rm.exec(html))) if (!moduleIds.has(m[1])) errors.push(id + ' 链接到不存在的模块: ' + m[1]);
  if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(html)) errors.push(id + ' 含 emoji');
  const hex = html.match(/#[0-9a-fA-F]{3,6}\b/g);
  if (hex) errors.push(id + ' 含写死颜色: ' + hex.join(','));
}

MODULES.forEach((m) => {
  const mid = m[0];
  (LESSONS[mid] || []).forEach((L) => {
    const id = mid + '/' + L[0];
    [L[4], L[5], L[6], L[7]].forEach((b) => checkBody(id, b || ''));
  });
});

/* 校验 figures/timeline 关联课 */
FIGURES.forEach(f => (f[7] || []).forEach(r => { if (!lessonIds.has(r)) errors.push('figure ' + f[0] + ' 关联不存在课: ' + r); }));
TIMELINE.forEach(t => { if (t[3] && !lessonIds.has(t[3])) errors.push('timeline ' + t[0] + ' 关联不存在课: ' + t[3]); });

if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

/* ===== 写文件 ===== */
function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = (o) => JSON.stringify(o);

/* modules.js */
const modObjs = MODULES.map((m, i) => ({ id: m[0], order: i + 1, shortTitle: m[1], title: m[2], desc: m[3] }));
let s = '/* 模块定义 + 学习路径(自动生成,勿手改) */\n';
s += 'HIT.modules = ' + JSON.stringify(modObjs, null, 0) + ';\n';
s += 'HIT.path = ' + JSON.stringify(path_) + ';\n';
s += 'HIT.totalLessons = ' + totalLessons + ';\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '' }));
w(C('terms.js'), '/* 术语表(自动生成) */\nHIT.terms = ' + JSON.stringify(termObjs) + ';\n');

/* figures.js */
const figObjs = FIGURES.map(f => ({ id: f[0], name: f[1], en: f[2], role: f[3], years: f[4], oneliner: f[5], contributions: f[6], related: f[7], group: f[8] }));
w(C('figures.js'), '/* 人物图鉴(自动生成) */\nwindow.HIT_FIGURES = ' + JSON.stringify(figObjs) + ';\n');

/* timeline.js */
const tlObjs = TIMELINE.map(t => ({ year: t[0], title: t[1], desc: t[2], lesson: t[3] || '' }));
w(C('timeline.js'), '/* 发展史时间轴(自动生成) */\nwindow.HIT_TIMELINE = ' + JSON.stringify(tlObjs) + ';\n');

/* models.js */
const mdObjs = MODELS.map(m => ({ name: m[0], org: m[1], kind: m[2], open: m[3], note: m[4] }));
w(C('models.js'), '/* 大模型速查(自动生成) */\nwindow.HIT_MODELS = ' + JSON.stringify(mdObjs) + ';\n');

/* compare.js */
const cmpObjs = COMPARE.map(c => ({ year: c[0], world: c[1], china: c[2] }));
w(C('compare.js'), '/* 中外对照(自动生成) */\nwindow.HIT_COMPARE = ' + JSON.stringify(cmpObjs) + ';\n');

/* 课时文件 */
const scriptTags = [];
MODULES.forEach((m) => {
  const mid = m[0];
  (LESSONS[mid] || []).forEach((L, li) => {
    const id = mid + '/' + L[0];
    const obj = {
      id: id, module: mid, order: li + 1, title: L[1], minutes: L[2],
      keywords: L[3], concept: L[4], core: L[5], pitfalls: L[6], links: L[7]
    };
    let body = '/* ' + id + ' (自动生成) */\nHIT.registerLesson({\n';
    body += '  id:' + J(obj.id) + ', module:' + J(obj.module) + ', order:' + obj.order + ',\n';
    body += '  title:' + J(obj.title) + ', minutes:' + obj.minutes + ',\n';
    body += '  keywords:' + J(obj.keywords) + ',\n';
    body += '  concept:' + J(obj.concept) + ',\n';
    body += '  core:' + J(obj.core) + ',\n';
    body += '  pitfalls:' + J(obj.pitfalls) + ',\n';
    body += '  links:' + J(obj.links) + '\n});\n';
    w(C(mid, L[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + L[0] + '.js"></script>');
  });
});

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + totalLessons + ' 课, ' +
  TERMS.length + ' 术语, ' + FIGURES.length + ' 人物, ' + TIMELINE.length + ' 时间节点。');
console.log('已注入 ' + scriptTags.length + ' 个课时脚本到 index.html');
