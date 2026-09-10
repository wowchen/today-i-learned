/* 冒烟测试:按 index.html 真实脚本顺序加载,用真实默认值驱动全部视图与 4 件工具。
   用法: node tools/smoke-test.js */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = global;
global.addEventListener = () => {};
global.scrollTo = () => {};

const DEFAULTS = {
  'pc-text': '我司拥有多年行业经验，产品功能完善、性能优异，采用先进技术架构，支持多种部署方式，提供全面的售后服务体系。',
  'sm-t': '50', 'sm-b': '20', 'sm-p': '30', 'sm-f': 'low',
  'pt-min': '20',
  'qc-cost': '80', 'qc-mg': '25', 'qc-com': '95'
};
const els = {};
function fakeEl() {
  const o = { innerHTML: '', textContent: '', value: '', scrollTop: 0, scrollHeight: 0, className: '',
    addEventListener: () => {}, querySelectorAll: () => [], querySelector: () => null };
  return new Proxy(o, { set(t, k, v) { t[k] = v; return true; }, get(t, k) { return t[k]; } });
}
global.document = {
  getElementById: (id) => { if (!els[id]) { els[id] = fakeEl(); if (DEFAULTS[id] !== undefined) els[id].value = DEFAULTS[id]; } return els[id]; },
  createElement: () => fakeEl(),
  documentElement: { dataset: {}, setAttribute: () => {} },
  addEventListener: () => {}, querySelectorAll: () => [], querySelector: () => null
};
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
global.location = { hash: '#/', reload: () => {} };
global.navigator = {};
global.matchMedia = () => ({ matches: false });
global.confirm = () => false;

const scripts = [...fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').matchAll(/script src="([^"]+)"/g)]
  .map(m => m[1]).filter(s => s.startsWith('assets/') || s.startsWith('content/'));
/* engine 最后加载 = 模拟 DOMContentLoaded 时机 */
const ordered = [...scripts.filter(s => s !== 'assets/js/engine.js'), 'assets/js/engine.js'];
for (const s of ordered) require(path.join(ROOT, s));

let fails = 0;
const chk = (name, cond, extra) => { if (!cond) { fails++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };

console.log('scripts=' + ordered.length + '  lessons=' + Object.keys(PRS.lessons).length +
  '  path=' + PRS.path.length + '  terms=' + PRS.terms.length + '  modules=' + PRS.modules.length);
chk('lessons 应为 50', Object.keys(PRS.lessons).length === 50, Object.keys(PRS.lessons).length);
chk('path 应为 50', PRS.path.length === 50, PRS.path.length);
chk('terms 应为 46', PRS.terms.length === 46, PRS.terms.length);
chk('modules 应为 9', PRS.modules.length === 9, PRS.modules.length);

['home', 'terms', 'calc', 'search', 'settings', 'myTerms'].forEach(v => {
  try { if (PRS.views[v]) PRS.views[v](); else { fails++; console.log('  FAIL 缺视图 ' + v); } }
  catch (e) { fails++; console.log('  FAIL view ' + v + ': ' + e.message); }
});

PRS.path.forEach(id => {
  try { PRS.views.lesson(id); } catch (e) { fails++; console.log('  FAIL lesson ' + id + ': ' + e.message); }
});

PRS.modules.forEach(m => {
  try { PRS.views.module(m.id); } catch (e) { fails++; console.log('  FAIL module ' + m.id + ': ' + e.message); }
});

/* 4 件工具:用真实默认值驱动,检查输出确实生成 */
const toolChecks = [
  ['propCheck', 'pc-result', ['体检得分', '客户视角', '问题定义', '价值量化', '差异化', '可交付与证据']],
  ['scoreMatrix', 'sm-result', ['权重合计', '主战场', '总体策略', '价格评分公式']],
  ['pitchPlan', 'pt-result', ['总时长', '需求理解', '方案主体', '合计校验']],
  ['quoteCalc', 'qc-result', ['保本价', '目标报价', '建议区间', '竞品参考价', '策略提示']]
];
toolChecks.forEach(([fn, outId, keywords]) => {
  els[outId] ? (els[outId].innerHTML = '') : null;
  try {
    PRS[fn]();
    const html = (els[outId] || {}).innerHTML || '';
    keywords.forEach(k => chk(fn + ' 输出含「' + k + '」', html.indexOf(k) !== -1));
    chk(fn + ' 输出非空', html.length > 80, 'len=' + html.length);
  } catch (e) { fails++; console.log('  FAIL tool ' + fn + ': ' + e.message); }
});

/* 工具边界:异常输入不应抛错 */
try {
  els['qc-mg'].value = '150'; PRS.quoteCalc();
  els['qc-mg'].value = '25';
  els['pt-min'].value = '1'; PRS.pitchPlan();
  els['pt-min'].value = '20';
  els['sm-t'].value = ''; PRS.scoreMatrix();
  els['sm-t'].value = '50';
} catch (e) { fails++; console.log('  FAIL 边界输入抛错: ' + e.message); }

/* 模块页课程链接数应等于该模块课时数 */
let linkFails = 0;
PRS.modules.forEach(m => {
  PRS.views.module(m.id);
  const n = ((els['app'] || {}).innerHTML || '').split('href="#/l/' + m.id + '/').length - 1;
  if (n !== m.lessons) { linkFails++; console.log('  FAIL module ' + m.id + ' 链接数 ' + n + ' != ' + m.lessons); }
});
if (linkFails === 0) console.log('  模块页课程链接: 9/9 全部匹配 ✓');

console.log(fails === 0 ? 'SMOKE OK — 全绿' : 'SMOKE FAILED: ' + fails);
process.exit(fails === 0 ? 0 : 1);
