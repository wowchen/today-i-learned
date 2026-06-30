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
sandbox.window = sandbox;
sandbox.self = sandbox;
sandbox.document = document;
sandbox.localStorage = localStorage;
vm.createContext(sandbox);

const load = (rel) => {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  vm.runInContext(code, sandbox, { filename: rel });
};
['assets/js/registry.js','assets/js/progress.js','assets/js/ui.js','assets/js/views-home.js','assets/js/views-lesson.js','assets/js/views-tools.js',
 'content/modules.js','content/terms.js'].forEach(load);

const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const lessonFiles = [...idx.matchAll(/<script src="(content\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
lessonFiles.forEach(load);

load('assets/js/engine.js');

const NH = sandbox.NH;
let fail = 0;
function ok(cond, msg) { if (cond) { console.log('  ✓ ' + msg); } else { console.log('  ✗ FAIL: ' + msg); fail++; } }

console.log('\n=== 基本结构 ===');
ok(NH.modules.length === 13, '13 模块 (got ' + NH.modules.length + ')');
ok(NH.path.length === 84, '84 课 (got ' + NH.path.length + ')');
ok(NH.terms.length === 84, '84 术语 (got ' + NH.terms.length + ')');
ok(Object.keys(NH.lessons).length === 84, '84 课时已注册 (got ' + Object.keys(NH.lessons).length + ')');

console.log('\n=== 课时五段式 + quiz 结构 ===');
let pitMiss = 0, quizBad = 0, termUndef = 0;
const termIds = new Set(NH.terms.map(t => t.id));
for (const id of NH.path) {
  const l = NH.lessons[id];
  if (!l) { quizBad++; continue; }
  if (!l.concept || !l.core || !l.pitfalls || !l.links) pitMiss++;
  if (!Array.isArray(l.quiz)) quizBad++;
  else for (const q of l.quiz) {
    if (q.type === 'choice' && (typeof q.answer !== 'number' || !Array.isArray(q.options))) quizBad++;
    if (q.type === 'fill' && !Array.isArray(q.answer)) quizBad++;
  }
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
  try { sandbox.window.location.hash = '#/'; if (v === 'home') NH.views.home(); else NH.views[v](); }
  catch (e) { console.log('  ✗ views.' + v + ' → ' + e.message); viewErr++; }
}
try { sandbox.window.location.hash = '#/m/macro'; NH.views.module('macro'); } catch (e) { viewErr++; console.log('  ✗ module → ' + e.message); }
try { NH.views.lesson(NH.path[0]); } catch (e) { viewErr++; console.log('  ✗ lesson → ' + e.message); }
try { sandbox.window.location.hash = '#/book'; NH.views.myTerms(); } catch (e) { viewErr++; console.log('  ✗ myTerms → ' + e.message); }
ok(viewErr === 0, '8 视图渲染 0 报错 (err=' + viewErr + ')');

console.log('\n=== 计算器实测 ===');
sandbox.window.location.hash = '#/calc';
NH.views.calc();
// BMI: 170cm/65kg → BMI ≈ 22.5 正常
document.getElementById('bmi-h')._val = '170';
document.getElementById('bmi-w')._val = '65';
document.getElementById('bmi-waist')._val = '80';
NH.calcBMI();
const bmiHtml = document.getElementById('bmi-result')._html;
ok(bmiHtml.indexOf('22.5') !== -1 && bmiHtml.indexOf('正常') !== -1, 'BMI:170/65 → ≈22.5 正常');
// TDEE: 男 30岁 170 65 中度(1.55) → BMR≈1596, TDEE≈2474
document.getElementById('t-gender')._val = 'm';
document.getElementById('t-age')._val = '30';
document.getElementById('t-h')._val = '170';
document.getElementById('t-w')._val = '65';
document.getElementById('t-act')._val = '1.55';
NH.calcTDEE();
const tdeeHtml = document.getElementById('tdee-result')._html;
ok(tdeeHtml.indexOf('1568') !== -1 && tdeeHtml.indexOf('2430') !== -1, 'TDEE:男30/170/65/中度 → BMR≈1568 TDEE≈2430');
// DRI: 男 成人 → 蛋白65 钙800
document.getElementById('d-gender')._val = 'm';
document.getElementById('d-age')._val = 'adult';
NH.calcDRI();
const driHtml = document.getElementById('dri-result')._html;
ok(driHtml.indexOf('65 g') !== -1 && driHtml.indexOf('800') !== -1, 'DRI:男/成人 → 蛋白65g 钙800mg');
// 食物红绿灯:含糖饮料 → 红灯
document.getElementById('fl-food')._val = 'sugary-drink|红|含糖饮料:空能量、升糖快,与肥胖和慢病相关,少喝。';
NH.calcFoodLight();
const flHtml = document.getElementById('fl-result')._html;
ok(flHtml.indexOf('红灯') !== -1, '食物红绿灯:含糖饮料 → 红灯');
// 燕麦 → 绿灯
document.getElementById('fl-food')._val = 'oat|绿|燕麦:可溶性纤维 β-葡聚糖丰富,利于控糖降脂。';
NH.calcFoodLight();
const flHtml2 = document.getElementById('fl-result')._html;
ok(flHtml2.indexOf('绿灯') !== -1, '食物红绿灯:燕麦 → 绿灯');

console.log('\n=== 结果 ===');
if (fail === 0) console.log('🎉 全部通过');
else { console.log('❌ ' + fail + ' 项失败'); process.exit(1); }
