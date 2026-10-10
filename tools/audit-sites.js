#!/usr/bin/env node
/**
 * 全站一致性体检 · audit-sites.js
 *
 * 用法:node tools/audit-sites.js
 *
 * 检查项:
 *  1. 三份清单对齐 —— 站点目录 / 首页 index.html 卡片 / README 表格行
 *  2. 首页卡片编号连续性(01..N 无重无缺)
 *  3. 每站结构完整性(index.html / assets/css / content/modules.js / sync.js)
 *  4. 宣称数字 vs 实际内容(模块数 / 课时 / 术语数)
 *  5. 命名空间唯一性(防克隆串站)
 *  6. 子站 index.html 本地引用断链
 *  7. 回总站入口(除 design/ tools/ 草稿外)
 *  8. README 表格是否被空行截断
 *
 * 退出码:0 = 全部通过;1 = 存在待修问题
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['node_modules', 'homepage-designs', 'tools']);
const NON_LESSON = new Set([
  'modules.js', 'path.js', 'terms.js', 'notices.js', 'quizzes.js', 'glossary.js',
  'index.js', 'lessons.js', 'registry.js', 'figures.js', 'years.js', 'timeline.js',
  'tools.js', 'data.js', 'compare.js', 'models.js', 'artists.js', 'crossref.js', 'parallel.js',
]);

const problems = [];
const note = (level, msg) => problems.push({ level, msg });

function readJSONish(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

/** 列出全部子站目录 */
function listSites() {
  return fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !SKIP_DIRS.has(d.name))
    .map((d) => d.name)
    .sort();
}

/** 递归收集某目录下的 .js 文件名(相对 content 的路径,去扩展名) */
function collectLessonFiles(cdir) {
  const out = [];
  const walk = (dir) => {
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      const fp = path.join(dir, f.name);
      if (f.isDirectory()) walk(fp);
      else if (f.name.endsWith('.js') && !NON_LESSON.has(f.name)) {
        out.push(path.relative(cdir, fp).replace(/\.js$/, ''));
      }
    }
  };
  if (fs.existsSync(cdir)) walk(cdir);
  return out;
}

/** 在沙箱里真实执行 content/modules.js,拿到模块数 / 课时数(兼容各代写法) */
function parseModules(src) {
  const ns = (src.match(/window\.([A-Za-z0-9_$]+)/) || [])[1] || null;
  let modules = null, lessons = null;

  // 优先:沙箱求值(能正确处理嵌套 lessons,不会把课时 id 误计为模块)
  try {
    const sb = {};
    sb.window = sb;
    vm.createContext(sb);
    vm.runInContext(src, sb, { timeout: 5000 });
    const NS = ns && sb[ns];
    if (NS && Array.isArray(NS.modules)) {
      modules = NS.modules.length;
      if (Array.isArray(NS.path)) {
        lessons = NS.path.length;
      } else {
        lessons = NS.modules.reduce((acc, m) => {
          if (typeof m.lessons === 'number') return acc + m.lessons;
          if (Array.isArray(m.lessons)) return acc + m.lessons.length;
          return acc;
        }, 0);
      }
      return { ns, modules, lessons };
    }
  } catch { /* 沙箱失败 → 回退到正则 */ }

  // 回退:正则(旧站可能依赖运行期变量,沙箱跑不通)
  const p = src.match(/\.path\s*=\s*\[([\s\S]*?)\]\s*;/);
  if (p) lessons = (p[1].match(/['"][^'"]+['"]/g) || []).length;
  const m = src.match(/\.modules\s*=\s*\[([\s\S]*?)\]\s*;/);
  if (m) modules = (m[1].match(/\{\s*["']?id["']?\s*:/g) || []).length;
  if (!modules) {
    const im = src.match(/id:\s*['"][a-z0-9-]+['"],\s*no:/g);
    if (im) modules = im.length;
  }
  if (!lessons) {
    const ls = [...src.matchAll(/lessons\s*:\s*(\d+)/g)].map((x) => +x[1]);
    if (ls.length) lessons = ls.reduce((a, b) => a + b, 0);
  }
  return { ns, modules, lessons };
}

/** 统计术语条目数 */
function countTerms(p) {
  const src = readJSONish(p);
  if (!src) return null;
  const arr = src.match(/=\s*\[([\s\S]*)\]\s*;?\s*$/);
  if (arr) {
    const n = (arr[1].match(/\{\s*"?[^:{}]+"\s*:/g) || []).length;
    if (n) return n;
  }
  return (src.match(/term\s*:/g) || []).length || null;
}

// ---------- 1. 三份清单 ----------
const sites = listSites();
const html = readJSONish(path.join(ROOT, 'index.html'));
const readme = readJSONish(path.join(ROOT, 'README.md'));

const hrefs = [...html.matchAll(/<a class="tile[^"]*" href="([^"]+)\/?"/g)].map((m) => m[1].replace(/\/$/, ''));
const ghosts = [...html.matchAll(/<span class="ghost">(\d+)<\/span>/g)].map((m) => m[1]);
const readmeDirs = [...readme.matchAll(/\[`([a-z0-9-]+)\/`\]/g)].map((m) => m[1]);

const setSites = new Set(sites), setHrefs = new Set(hrefs), setReadme = new Set(readmeDirs);
sites.filter((s) => !setHrefs.has(s)).forEach((s) => note('P1', `首页缺卡片:${s}`));
hrefs.filter((h) => !setSites.has(h)).forEach((h) => note('P1', `首页卡片无对应目录:${h}`));
sites.filter((s) => !setReadme.has(s)).forEach((s) => note('P1', `README 缺行:${s}`));
readmeDirs.filter((r) => !setSites.has(r)).forEach((r) => note('P1', `README 行无对应目录:${r}`));

// ---------- 2. 编号 ----------
const expect = Array.from({ length: ghosts.length }, (_, i) => String(i + 1).padStart(2, '0'));
if (ghosts.join(',') !== expect.join(',')) {
  const dup = ghosts.filter((g, i) => ghosts.indexOf(g) !== i);
  note('P2', `首页卡片编号异常(重复:${dup.join(',') || '无'};共 ${ghosts.length} 个)`);
}

// ---------- 3~5. 逐站 ----------
const nsSeen = new Map();
const rows = [];
for (const d of sites) {
  const dir = path.join(ROOT, d);
  const has = (f) => fs.existsSync(path.join(dir, f));
  const mf = path.join(dir, 'content', 'modules.js');
  const { ns, modules, lessons } = has('content/modules.js') ? parseModules(readJSONish(mf)) : { ns: null, modules: null, lessons: null };
  const terms = countTerms(path.join(dir, 'content', 'terms.js'));
  const files = collectLessonFiles(path.join(dir, 'content'));

  if (!has('index.html')) note('P1', `${d}: 缺 index.html`);
  if (!has('assets/css/main.css')) note('P2', `${d}: 缺 assets/css/main.css`);
  if (!has('assets/js/sync.js')) note('P1', `${d}: 缺 assets/js/sync.js(进度同步)`);
  if (lessons != null && files.length && lessons !== files.length) {
    note('P2', `${d}: 课时路径 ${lessons} ≠ 课时文件 ${files.length}`);
  }
  if (ns) {
    if (nsSeen.has(ns)) note('P1', `命名空间冲突:${ns} 同时被 ${nsSeen.get(ns)} 与 ${d} 使用`);
    else nsSeen.set(ns, d);
  }

  // 断链
  if (has('index.html')) {
    const h = readJSONish(path.join(dir, 'index.html'));
    const refs = [...h.matchAll(/(?:src|href)="([^"#?]+)"/g)].map((m) => m[1])
      .filter((u) => !/^(https?:|\/\/|data:|mailto:|javascript:)/.test(u));
    for (const u of new Set(refs)) {
      const t = u.startsWith('/') ? path.join(ROOT, u) : path.join(dir, u);
      if (!fs.existsSync(t)) note('P1', `${d}: 断链 ${u}`);
    }
  }

  // 回总站入口(排除草稿目录)
  const live = [path.join(dir, 'index.html'), ...(fs.existsSync(path.join(dir, 'assets', 'js'))
    ? fs.readdirSync(path.join(dir, 'assets', 'js')).filter((f) => f.endsWith('.js')).map((f) => path.join(dir, 'assets', 'js', f))
    : [])];
  const hasBack = live.some((f) => fs.existsSync(f) && /href="\.\.\/"|今日得到|Today I Learned/.test(readJSONish(f)));
  if (!hasBack) note('P2', `${d}: 无回总站入口(../)`);

  rows.push({ d, ns, modules, lessons, terms, files: files.length });
}

// ---------- 6. 宣称 vs 实际 ----------
const cards = [...html.matchAll(/<a class="tile[^"]*" href="([^"]+)\/?"[\s\S]*?<p class="desc">([\s\S]*?)<\/p>/g)]
  .map((m) => ({ dir: m[1].replace(/\/$/, ''), desc: m[2].replace(/<[^>]+>/g, '') }));
for (const c of cards) {
  const cm = c.desc.match(/(\d+)\s*模块\s*(\d+)\s*(课|首)/);
  const ct = c.desc.match(/(\d+)\s*术语/);
  const row = rows.find((r) => r.d === c.dir);
  if (!row) continue;
  if (cm) {
    if (row.modules != null && +cm[1] !== row.modules) note('P2', `${c.dir}: 宣称模块 ${cm[1]} ≠ 实际 ${row.modules}`);
    if (row.lessons != null && +cm[2] !== row.lessons) note('P2', `${c.dir}: 宣称课时 ${cm[2]} ≠ 实际 ${row.lessons}`);
  }
  if (ct && row.terms != null && Math.abs(+ct[1] - row.terms) > 2) {
    note('P2', `${c.dir}: 宣称术语 ${ct[1]} ≠ 实际 ${row.terms}`);
  }
}

// ---------- 7. README 表格 ----------
{
  const lines = readme.split('\n');
  lines.forEach((s, i) => {
    if (s.trim() === '' && /^\|/.test(lines[i - 1] || '') && /^\|/.test(lines[i + 1] || '')) {
      note('P2', `README 第 ${i + 1} 行为空,表格被截断成两张`);
    }
  });
}

// ---------- 输出 ----------
const pad = (s, n) => String(s).padEnd(n);
console.log('\n今日得到 · 全站一致性体检');
console.log('='.repeat(78));
console.log(`站点目录 ${sites.length} | 首页卡片 ${hrefs.length} | README 行 ${readmeDirs.length}`);
console.log('-'.repeat(78));
console.log(pad('站点', 30), pad('NS', 6), pad('模块', 6), pad('课时', 6), pad('术语', 6), '课文件');
for (const r of rows) {
  console.log(pad(r.d, 30), pad(r.ns || '-', 6), pad(r.modules ?? '-', 6), pad(r.lessons ?? '-', 6), pad(r.terms ?? '-', 6), r.files);
}
console.log('='.repeat(78));
if (!problems.length) {
  console.log('✅ 全部检查通过,无需修复。\n');
  process.exit(0);
}
const order = { P1: 0, P2: 1 };
problems.sort((a, b) => order[a.level] - order[b.level]);
console.log(`发现 ${problems.length} 项待确认:\n`);
for (const p of problems) console.log(`  [${p.level}] ${p.msg}`);
console.log('');
process.exit(1);
