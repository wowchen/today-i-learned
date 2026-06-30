/* 冒烟测试:用 DOM-shim 加载 modules/terms + 全部课时脚本,断言结构合法、视图渲染 0 报错、计算器实测正确。 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..');

// ---- DOM shim ----
const store = {};
const localStorage = {
  getItem: (k) => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: (k) => { delete store[k]; },
};
const elements = {};
function makeEl(id) {
  return {
    _id: id, _val: '', _html: '', _dataset: {}, dataset: {}, children: [],
    setAttribute(k, v) { if (k.indexOf('data-') === 0) this._dataset[k.slice(5)] = v; },
    removeAttribute(k) { if (k.indexOf('data-') === 0) delete this._dataset[k.slice(5)]; },
    appendChild(c) { this.children.push(c); return c; },
    querySelectorAll() { return []; },
    addEventListener() {},
    focus() {},
    click() {},
    set value(v) { this._val = v; },
    get value() { return this._val; },
    set innerHTML(v) { this._html = v; },
    get innerHTML() { return this._html; },
    set textContent(v) { this._text = v; },
    get textContent() { return this._text; },
  };
}
const document = {
  documentElement: makeEl('html'),
  getElementById: (id) => { if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
  createElement: () => makeEl('a'),
  querySelectorAll: () => [],
  addEventListener() {},
  readyState: 'complete',
};
const sandbox = {
  console,
  setTimeout, clearTimeout, parseInt, parseFloat, isNaN, JSON, Math, Date, String, Number, Array, Object,
  matchMedia: () => ({ matches: false }),
  addEventListener() {},
  scrollTo() {},
  location: { hash: '#/' },
  Blob: function(){},
  URL: { createObjectURL() { return 'blob:x'; } },
  confirm: () => true,
};
// 关键:让 window === globalThis,这样 `window.CG = ...` 会创建全局裸 `CG` 引用
sandbox.window = sandbox;
sandbox.self = sandbox;
sandbox.document = document;
sandbox.localStorage = localStorage;
sandbox.document = document;
vm.createContext(sandbox);

// 加载引擎(不含 engine,它最后加载以使其 boot 在内容就绪后运行)+ 内容
const load = (rel) => {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  vm.runInContext(code, sandbox, { filename: rel });
};
['assets/js/registry.js','assets/js/progress.js','assets/js/ui.js','assets/js/views-home.js','assets/js/views-lesson.js','assets/js/views-tools.js',
 'content/modules.js','content/terms.js'].forEach(load);

// 加载全部课时脚本(由 index.html 的 LESSONS 段列出)
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const lessonFiles = [...idx.matchAll(/<script src="(content\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
lessonFiles.forEach(load);

// 最后加载引擎,触发 boot()(此时 CG.path / CG.lessons 均已就绪)
load('assets/js/engine.js');

const CG = sandbox.CG;
let fail = 0;
function ok(cond, msg) { if (cond) { console.log('  ✓ ' + msg); } else { console.log('  ✗ FAIL: ' + msg); fail++; } }

console.log('\n=== 基本结构 ===');
ok(CG.modules.length === 13, '13 模块 (got ' + CG.modules.length + ')');
ok(CG.path.length === 84, '84 课 (got ' + CG.path.length + ')');
ok(CG.terms.length === 88, '88 术语 (got ' + CG.terms.length + ')');
ok(Object.keys(CG.lessons).length === 84, '84 课时已注册 (got ' + Object.keys(CG.lessons).length + ')');

console.log('\n=== 课时五段式 + quiz 结构 ===');
let pitMiss = 0, quizBad = 0, termUndef = 0;
const termIds = new Set(CG.terms.map(t => t.id));
for (const id of CG.path) {
  const l = CG.lessons[id];
  if (!l) { quizBad++; continue; }
  if (!l.concept || !l.core || !l.pitfalls || !l.links) pitMiss++;
  if (!Array.isArray(l.quiz)) quizBad++;
  else for (const q of l.quiz) {
    if (q.type === 'choice' && (typeof q.answer !== 'number' || !Array.isArray(q.options))) quizBad++;
    if (q.type === 'fill' && !Array.isArray(q.answer)) quizBad++;
  }
  // 检查 data-term 引用
  const body = [l.concept, l.core, l.pitfalls, l.links].join(' ');
  const re = /data-term="([^"]+)"/g; let m;
  while ((m = re.exec(body))) if (!termIds.has(m[1])) termUndef++;
}
ok(pitMiss === 0, '84 课五段式齐全 (pit miss=' + pitMiss + ')');
ok(quizBad === 0, 'quiz 结构合法 (bad=' + quizBad + ')');
ok(termUndef === 0, '术语引用零未定义 (undef=' + termUndef + ')');

console.log('\n=== 视图渲染(8 个)0 报错 ===');
let viewErr = 0;
for (const v of ['home','terms','search','calc','settings']) {
  try { sandbox.window.location.hash = '#/'; if (v === 'home') CG.views.home(); else CG.views[v](); }
  catch (e) { console.log('  ✗ views.' + v + ' → ' + e.message); viewErr++; }
}
// module + lesson 视图
try { sandbox.window.location.hash = '#/m/terrain'; CG.views.module('terrain'); } catch (e) { viewErr++; console.log('  ✗ module → ' + e.message); }
try { CG.views.lesson(CG.path[0]); } catch (e) { viewErr++; console.log('  ✗ lesson → ' + e.message); }
try { sandbox.window.location.hash = '#/book'; CG.views.myTerms(); } catch (e) { viewErr++; console.log('  ✗ myTerms → ' + e.message); }
ok(viewErr === 0, '8 视图渲染 0 报错 (err=' + viewErr + ')');

console.log('\n=== 计算器实测 ===');
// 胡焕庸线:北京(39.9,116.4)应判东南半壁
sandbox.window.location.hash = '#/calc';
CG.views.calc();
const huSel = document.getElementById('hu-city');
huSel._val = '39.9,116.4,北京';
CG.calcHuLine();
const huHtml = document.getElementById('hu-result')._html;
ok(huHtml.indexOf('东南半壁') !== -1, '胡焕庸线:北京 → 东南半壁');
// 乌鲁木齐(43.8,87.6)应判西北半壁
huSel._val = '43.8,87.6,乌鲁木齐';
CG.calcHuLine();
const huHtml2 = document.getElementById('hu-result')._html;
ok(huHtml2.indexOf('西北半壁') !== -1, '胡焕庸线:乌鲁木齐 → 西北半壁');
// 河流流域:1万km² × 800mm × 0.3 → 约 24 亿 m³
document.getElementById('b-area')._val = '1';
document.getElementById('b-rain')._val = '800';
document.getElementById('b-coef')._val = '0.3';
CG.calcBasin();
const bHtml = document.getElementById('b-result')._html;
ok(bHtml.indexOf('24') !== -1, '河流流域:1万km²×800mm×0.3 → 含 ~24 亿 m³ (got contains 24: ' + (bHtml.indexOf('24') !== -1) + ')');
// 时区:抚远135.5 vs 帕米尔73.5 → 差约 62°, 约4小时8分
document.getElementById('tz-lon1')._val = '135.5';
document.getElementById('tz-lon2')._val = '73.5';
document.getElementById('tz-time')._val = '';
CG.calcTimezone();
const tzHtml = document.getElementById('tz-result')._html;
ok(tzHtml.indexOf('4 小时') !== -1, '横跨五时区:135.5°E - 73.5°E → 约4小时差');
// 太阳:赤道(0°)春分(0°)→ 正午太阳高度90°、昼长12h
document.getElementById('sun-lat')._val = '0';
document.getElementById('sun-decl')._val = '0';
CG.calcSun();
const sunHtml = document.getElementById('sun-result')._html;
ok(sunHtml.indexOf('90') !== -1 && sunHtml.indexOf('12') !== -1, '太阳高度:赤道春分 → 90° / 12h');

console.log('\n=== 结果 ===');
if (fail === 0) console.log('🎉 全部通过');
else { console.log('❌ ' + fail + ' 项失败'); process.exit(1); }
