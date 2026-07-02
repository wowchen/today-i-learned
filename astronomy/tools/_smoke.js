/* DOM-shim 冒烟测试:模拟浏览器环境,加载引擎+内容,渲染各视图,检查无报错。
   用法: node tools/_smoke.js  (运行后可删)
   依赖 jsdom? 不——用最小 shim:document/window/localStorage/matchMedia。 */
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
    querySelector(){ return null; }, querySelectorAll(){ return []; },
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
  getElementById(id){ if(id==='app') return appEl; if(id==='quiz-area') return makeEl('div'); return makeEl('div'); },
  querySelector(){ return null; }, querySelectorAll(sel){ if(sel==='.nav-link') return []; return []; },
  createElement(tag){ return makeEl(tag); },
  createTextNode(t){ return {_text:t}; },
  addEventListener(t,fn){ (_docListeners[t]=_docListeners[t]||[]).push(fn); },
  readyState: 'loading',
};
const _winListeners = {};
const window = { matchMedia(){ return { matches:false }; }, addEventListener(t,fn){ (_winListeners[t]=_winListeners[t]||[]).push(fn); }, scrollTo(){}, location:{ hash:'#/' } };
const sandbox = { window, document, localStorage, console, navigator:{userAgent:'node'}, setTimeout, clearTimeout, setInterval, clearInterval, URL:{ createObjectURL(){return 'blob:x';} }, Blob:function(){}, Date, Math, JSON, parseInt, parseFloat, isNaN, Object, Array, String, Number, Boolean, RegExp, Error };
sandbox.globalThis = sandbox;
sandbox.AST = sandbox.window.AST = {};  // 让 window.AST 与裸 AST 标识同源(浏览器行为)
vm.createContext(sandbox);

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  vm.runInContext(code, sandbox, { filename: rel });
}

let errs = [];
const origErr = console.error;
console.error = (...a) => { errs.push(a.join(' ')); };

// 引擎
['assets/js/registry.js','assets/js/progress.js','assets/js/ui.js','assets/js/views-home.js','assets/js/views-lesson.js','assets/js/views-tools.js','assets/js/engine.js'].forEach(load);
// 内容元数据
['content/modules.js','content/terms.js'].forEach(load);
// 课时
const pathArr = sandbox.AST.path;
pathArr.forEach(p => load('content/' + p + '.js'));

// 内容加载完毕,触发 DOMContentLoaded → 引擎 boot
(_docListeners['DOMContentLoaded']||[]).forEach(fn => { try{ fn(); }catch(e){ errs.push('boot: '+e.message); } });

console.error = origErr;

// ---- 检查 ----
const AST = sandbox.AST;
let ok = true;
function chk(cond, msg){ if(!cond){ console.log('FAIL: '+msg); ok=false; } else console.log('OK:   '+msg); }

chk(AST.modules.length === 13, '13 模块 ('+AST.modules.length+')');
chk(AST.path.length === 85, 'path 85 课 ('+AST.path.length+')');
chk(Object.keys(AST.lessons).length === 85, '注册 85 课 ('+Object.keys(AST.lessons).length+')');
chk(AST.terms.length === 84, '84 术语 ('+AST.terms.length+')');
chk(AST.path.length === pathArr.length, 'path==课文件数');

// 术语 used-but-undefined:每课 data-term 必须在 terms 中
const termIds = new Set(AST.terms.map(t=>t.id));
let badTerms = 0;
for (const id in AST.lessons) {
  const l = AST.lessons[id];
  [l.concept,l.core,l.pitfalls,l.links].forEach(b=>{
    if(!b) return;
    let m; const re=/data-term="([^"]+)"/g;
    while((m=re.exec(b))) if(!termIds.has(m[1])){ console.log('  未知术语 '+id+': '+m[1]); badTerms++; }
  });
  (l.quiz||[]).forEach(q=>{ ['q','explain'].forEach(k=>{ const b=q[k]; if(!b)return; let m;const re=/data-term="([^"]+)"/g; while((m=re.exec(b))) if(!termIds.has(m[1])){console.log('  未知术语 '+id+' quiz: '+m[1]);badTerms++;} });});
}
chk(badTerms===0, '术语零 used-but-undefined ('+badTerms+')');

// 每课五段式 pit(③) 齐全 + quiz 结构合法
let badStruct = 0;
for (const id in AST.lessons) {
  const l = AST.lessons[id];
  if(typeof l.pitfalls !== 'string' || l.pitfalls.indexOf('<div class="pit">')!==0) { console.log('  pit 缺失/异常: '+id); badStruct++; }
  if(!Array.isArray(l.quiz) || l.quiz.length<1) { console.log('  quiz 缺失: '+id); badStruct++; }
  l.quiz.forEach(q=>{ if(!q.type || typeof q.q!=='string' || (q.type==='choice'&&!Array.isArray(q.options))) { console.log('  quiz 结构异常: '+id); badStruct++; } });
}
chk(badStruct===0, '85 课五段式 pit+quiz 结构合法 ('+badStruct+')');

// 内部链接 #/l 与 #/m 存在性
let badLink=0;
const lessonIds=new Set(AST.path);
const moduleIds=new Set(AST.modules.map(m=>m.id));
for(const id in AST.lessons){const l=AST.lessons[id];[l.concept,l.core,l.pitfalls,l.links].forEach(b=>{if(!b)return;let m;let re=/href="#\/l\/([^"]+)"/g;while((m=re.exec(b)))if(!lessonIds.has(m[1])){console.log('  坏链 '+id+': #/l/'+m[1]);badLink++;}re=/href="#\/m\/([^"]+)"/g;while((m=re.exec(b)))if(!moduleIds.has(m[1])){console.log('  坏链 '+id+': #/m/'+m[1]);badLink++;}});}
chk(badLink===0,'内部链接零坏链 ('+badLink+')');

// 渲染各视图 0 报错
errs = [];
console.error = (...a)=>{ errs.push(a.join(' ')); };
const views = ['home','terms','calc','search','settings'];
views.forEach(v=>{ try{ AST.views[v](); }catch(e){ errs.push(v+': '+e.message); } });
// 模块页
AST.modules.forEach(m=>{ try{ AST.views.module(m.id); }catch(e){ errs.push('module '+m.id+': '+e.message); } });
// 首课课时页
try{ AST.views.lesson(AST.path[0]); }catch(e){ errs.push('lesson: '+e.message); }
console.error = origErr;
chk(errs.length===0, '8 类视图渲染 0 报错 ('+errs.length+(errs.length?'): '+errs.slice(0,3).join(' | '):')'));

// 工具实测
function num(id,v){ const el=sandbox.document._fakes&&sandbox.document._fakes[id]; return v; }
// 行星体重秤:65kg × 木星2.34 ≈ 152.1
let pwErr=0;
try{
  sandbox.AST._num = ()=>65;
  sandbox.document.getElementById = (id)=>{ const e=makeEl('input'); if(id==='pw-body'){ e.tagName='SELECT'; e._value='2.34|木星'; e.value='2.34|木星'; } return e; };
  sandbox.AST.calcPlanetWeight();
}catch(e){ pwErr=1; }
chk(pwErr===0, '行星体重秤执行无异常');

// 距离换算:1 AU → km
let dcErr=0;
try{
  sandbox.AST._num = ()=>1;
  sandbox.document.getElementById = (id)=>{ const e=makeEl('input'); if(id==='dc-u'){ e._value='au'; e.value='au'; } return e; };
  sandbox.AST.calcDistance();
}catch(e){ dcErr=1; }
chk(dcErr===0, '宇宙距离换算执行无异常');

// 开普勒:a=1,M=1 → T=1 年
let kpErr=0;
try{
  sandbox.AST._num = ()=>1;
  sandbox.AST.calcKepler();
}catch(e){ kpErr=1; }
chk(kpErr===0, '开普勒第三定律执行无异常');

// 史瓦西:1 M☉ → ≈2950 m
let bhErr=0;
try{
  sandbox.AST._num = ()=>1;
  sandbox.document.getElementById = (id)=>{ const e=makeEl('input'); if(id==='bh-u'){ e._value='msun'; e.value='msun'; } return e; };
  sandbox.AST.calcSchwarzschild();
}catch(e){ bhErr=1; }
chk(bhErr===0, '史瓦西半径执行无异常');

console.log('\n' + (ok ? '=== 冒烟全部通过 ===' : '=== 冒烟有失败项 ==='));
process.exit(ok?0:1);
