/* DOM-shim 冒烟测试:模拟浏览器环境,加载引擎+内容,渲染各视图,检查无报错。
   用法: node tools/_smoke.js
   不依赖 jsdom--用最小 shim:document/window/localStorage/matchMedia。 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..');

// ---- 最小 DOM shim ----
function makeEl(tag) {
  const el = {
    tagName: (tag || 'div').toUpperCase(), nodeType: 1, children: [], childNodes: [],
    classList: { _s: new Set(), add(c){this._s.add(c);}, remove(c){this._s.delete(c);}, toggle(c,f){ if(f===undefined) f=!this._s.has(c); f?this._s.add(c):this._s.delete(c);}, contains(c){return this._s.has(c);} },
    attributes: {}, dataset: {}, style: {}, _html: '', _text: '',
    setAttribute(k,v){ this.attributes[k]=v; if(k.indexOf('data-')===0){ this.dataset[k.slice(5)]=v; } },
    getAttribute(k){ return this.attributes[k]; },
    appendChild(c){ this.children.push(c); this.childNodes.push(c); return c; },
    removeChild(c){},
    addEventListener(){}, removeEventListener(){},
    querySelector(){ return null; }, querySelectorAll(sel){ return []; },
    get innerHTML(){ return this._html; }, set innerHTML(v){ this._html=v; },
    get textContent(){ return this._text; }, set textContent(v){ this._text=v; },
    get value(){ return this._value||''; }, set value(v){ this._value=v; },
    focus(){}, click(){},
  };
  return el;
}
const appEl = makeEl('main'); appEl.id = 'app';
const docEl = makeEl('html'); docEl.dataset = {}; docEl.attributes = {};
const store = {};
const localStorage = { getItem(k){ return k in store?store[k]:null; }, setItem(k,v){ store[k]=String(v); }, removeItem(k){ delete store[k]; } };
const _docListeners = {};
const document = {
  documentElement: docEl,
  body: makeEl('body'),
  getElementById(id){ return makeEl('div'); },
  querySelector(){ return null; }, querySelectorAll(sel){ if(sel==='.nav-link') return []; return []; },
  createElement(tag){ return makeEl(tag); },
  createTextNode(t){ return {_text:t}; },
  addEventListener(t,fn){ (_docListeners[t]=_docListeners[t]||[]).push(fn); },
  readyState: 'loading',
};
const _winListeners = {};
const window = { matchMedia(){ return { matches:false }; }, addEventListener(t,fn){ (_winListeners[t]=_winListeners[t]||[]).push(fn); }, scrollTo(){}, location:{ hash:'#/' } };
const sandbox = { window, document, localStorage, console, navigator:{userAgent:'node'}, setTimeout, clearTimeout, setInterval, clearInterval, URL:{ createObjectURL(){return 'blob:x';} }, Blob:function(){}, Date, Math, JSON, parseInt, parseFloat, isNaN, Object, Array, String, Number, Boolean, RegExp, Error, fetch:undefined };
sandbox.globalThis = sandbox;
sandbox.WAH = sandbox.window.WAH = {};
vm.createContext(sandbox);

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  vm.runInContext(code, sandbox, { filename: rel });
}

let errs = [];
const origErr = console.error;
console.error = (...a) => { errs.push(a.join(' ')); };

// 引擎
['assets/js/registry.js','assets/js/progress.js','assets/js/sync.js','assets/js/ui.js','assets/js/views-home.js','assets/js/views-lesson.js','assets/js/views-tools.js','assets/js/engine.js'].forEach(load);
// 内容元数据 + 工具数据
['content/modules.js','content/terms.js','content/artists.js','content/crossref.js'].forEach(load);
// 课时
const pathArr = sandbox.WAH.path;
pathArr.forEach(p => load('content/' + p + '.js'));

// 内容加载完毕,触发 DOMContentLoaded -> 引擎 boot
(_docListeners['DOMContentLoaded']||[]).forEach(fn => { try{ fn(); }catch(e){ errs.push('boot: '+e.message); } });

console.error = origErr;

// ---- 检查 ----
const WAH = sandbox.WAH;
let ok = true;
function chk(cond, msg){ if(!cond){ console.log('FAIL: '+msg); ok=false; } else console.log('OK:   '+msg); }

chk(WAH.modules.length === 15, '15 模块 ('+WAH.modules.length+')');
chk(WAH.path.length === Object.keys(WAH.lessons).length, 'path==注册课数 ('+WAH.path.length+')');
chk(WAH.terms.length === 74, '74 术语 ('+WAH.terms.length+')');
chk((window.WAH_FIGURES||[]).length > 0, '艺术家数据 ('+(window.WAH_FIGURES||[]).length+' 位)');
chk((window.WAH_PARALLEL||[]).length > 0, '中外对照数据 ('+(window.WAH_PARALLEL||[]).length+' 节点)');

// 术语 used-but-undefined
const termIds = new Set(WAH.terms.map(t=>t.id));
let badTerms = 0;
for (const id in WAH.lessons) {
  const l = WAH.lessons[id];
  [l.concept,l.core,l.pitfalls,l.links].forEach(b=>{
    if(!b) return;
    let m; const re=/data-term="([^"]+)"/g;
    while((m=re.exec(b))) if(!termIds.has(m[1])){ console.log('  未知术语 '+id+': '+m[1]); badTerms++; }
  });
  (l.quiz||[]).forEach(q=>{ ['q','explain'].forEach(k=>{ const b=q[k]; if(!b)return; let m;const re=/data-term="([^"]+)"/g; while((m=re.exec(b))) if(!termIds.has(m[1])){console.log('  未知术语 '+id+' quiz: '+m[1]);badTerms++;} });});
}
chk(badTerms===0, '术语零 used-but-undefined ('+badTerms+')');

// 五段式 pit(③) + quiz 结构
let badStruct = 0;
for (const id in WAH.lessons) {
  const l = WAH.lessons[id];
  if(typeof l.pitfalls !== 'string' || l.pitfalls.indexOf('<div class="pit">')!==0) { console.log('  pit 缺失/异常: '+id); badStruct++; }
  if(!Array.isArray(l.quiz) || l.quiz.length<1) { console.log('  quiz 缺失: '+id); badStruct++; }
  l.quiz.forEach(q=>{ if(!q.type || typeof q.q!=='string' || (q.type==='choice'&&!Array.isArray(q.options))) { console.log('  quiz 结构异常: '+id); badStruct++; } });
}
chk(badStruct===0, WAH.path.length+' 课五段式 pit+quiz 结构合法 ('+badStruct+')');

// 内部链接 #/l 与 #/m 存在性
let badLink=0;
const lessonIds=new Set(WAH.path);
const moduleIds=new Set(WAH.modules.map(m=>m.id));
for(const id in WAH.lessons){const l=WAH.lessons[id];[l.concept,l.core,l.pitfalls,l.links].forEach(b=>{if(!b)return;let m;let re=/href="#\/l\/([^"]+)"/g;while((m=re.exec(b)))if(!lessonIds.has(m[1])){console.log('  坏链 '+id+': #/l/'+m[1]);badLink++;}re=/href="#\/m\/([^"]+)"/g;while((m=re.exec(b)))if(!moduleIds.has(m[1])){console.log('  坏链 '+id+': #/m/'+m[1]);badLink++;}});}
chk(badLink===0,'内部链接零坏链 ('+badLink+')');

// 渲染各视图 0 报错
errs = [];
console.error = (...a)=>{ errs.push(a.join(' ')); };
const views = ['home','terms','tools','search','settings','timeline','figures','styles','crossRef'];
views.forEach(v=>{ try{ WAH.views[v](); }catch(e){ errs.push(v+': '+e.message); } });
WAH.modules.forEach(m=>{ try{ WAH.views.module(m.id); }catch(e){ errs.push('module '+m.id+': '+e.message); } });
if (WAH.path.length) { try{ WAH.views.lesson(WAH.path[0]); }catch(e){ errs.push('lesson: '+e.message); } }
console.error = origErr;
chk(errs.length===0, '视图渲染 0 报错 ('+errs.length+(errs.length?'): '+errs.slice(0,3).join(' | '):')'));

// 工具实测:过滤与详情不抛错
let tErr = 0;
try {
  WAH.filterFigures('all');
  WAH.filterCross('文艺复兴');
  const firstFig = (window.WAH_FIGURES||[])[0];
  if (firstFig) WAH.showFigureDetail(firstFig.id);
} catch (e) { tErr = 1; console.log('  tool err: ' + e.message); }
chk(tErr === 0, '工具过滤/详情执行无异常');

console.log('\n' + (ok ? '=== 冒烟全部通过 ===' : '=== 冒烟有失败项 ==='));
process.exit(ok?0:1);
