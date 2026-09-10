/* 工具视图:四件售前互动工具(方案体检 / 评分办法拆解 / 讲标时间规划 / 报价测算)+ 术语/搜索/设置/模块 */
window.PRS = window.PRS || {};
PRS.views = PRS.views || {};

PRS._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
PRS._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* ===== 工具总页 ===== */
PRS.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">售前与投标的四个关键动作：方案写得够不够格、评分办法怎么拆、讲标时间怎么分、报价怎么算。这四个小工具全部在本地浏览器运行，<b>边学边玩，把方法论练成手感</b>。</p>';

  // 1. 方案体检器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">☑</span>方案体检器</h3>';
  html += '<p class="lab-desc">把方案摘要或主打卖点贴进来，按五个维度体检：客户视角、问题定义、价值量化、差异化、可交付与证据。五项齐全的方案，才有资格上评委的桌。</p>';
  html += '<textarea id="pc-text" class="term-search" style="width:100%;min-height:110px;line-height:1.6">我司拥有多年行业经验，产品功能完善、性能优异，采用先进技术架构，支持多种部署方式，提供全面的售后服务体系。</textarea>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="PRS.propCheck()">开始体检</button></div>';
  html += '<div id="pc-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 评分办法拆解器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▦</span>评分办法拆解器</h3>';
  html += '<p class="lab-desc">拿到招标文件先看评分办法：技术、商务、价格三块各占多少权重，基本决定了你该把力气花在哪。填入权重看看主战场在哪。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>技术分权重 <input type="number" id="sm-t" step="5" min="0" max="100" value="50" oninput="PRS.scoreMatrix()"></label>';
  html += '<label>商务分权重 <input type="number" id="sm-b" step="5" min="0" max="100" value="20" oninput="PRS.scoreMatrix()"></label>';
  html += '<label>价格分权重 <input type="number" id="sm-p" step="5" min="0" max="100" value="30" oninput="PRS.scoreMatrix()"></label>';
  html += '<label>价格评分方式 <select id="sm-f" onchange="PRS.scoreMatrix()">';
  html += '<option value="low" selected>低价优先（最低价得满分）</option>';
  html += '<option value="bench">基准价法（贴近基准价得满分）</option>';
  html += '<option value="avg">平均价法（接近平均价得满分）</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="sm-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 讲标时间规划器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◷</span>讲标时间规划器</h3>';
  html += '<p class="lab-desc">讲标最怕前松后紧：讲功能和架构滔滔不绝，到案例和承诺时只剩两分钟。填入总时长，看每个环节该分多少。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>讲标总时长（分钟） <input type="number" id="pt-min" step="5" min="5" max="120" value="20" oninput="PRS.pitchPlan()"></label>';
  html += '</div>';
  html += '<div id="pt-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 报价测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>报价测算器</h3>';
  html += '<p class="lab-desc">报价不是"成本加一点"这么简单：太低亏本、太高丢分。填入成本与目标毛利，看保本价、目标价与建议区间的账。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>项目成本(万元) <input type="number" id="qc-cost" step="1" min="0" value="80" oninput="PRS.quoteCalc()"></label>';
  html += '<label>目标毛利率 % <input type="number" id="qc-mg" step="1" min="0" max="80" value="25" oninput="PRS.quoteCalc()"></label>';
  html += '<label>竞品预估价(万元,选填) <input type="number" id="qc-com" step="1" min="0" value="0" placeholder="不知道填 0" oninput="PRS.quoteCalc()"></label>';
  html += '</div>';
  html += '<div id="qc-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：方案体检为关键词启发式，不是语义评审；报价测算为成本加成模型的简化演示，不含税费、资金成本与风险准备金，实际报价请以企业财务口径与招标文件为准。</p>';
  html += '</div>';
  PRS.render(html);
  PRS.propCheck(); PRS.scoreMatrix(); PRS.pitchPlan(); PRS.quoteCalc();
};

/* ---- 1. 方案体检器 ---- */
var PC_ITEMS = [
  ['客户视角', /贵方|贵司|贵单位|您|客户|使用者|一线|业务场景|现场/, '通篇"我司/我们的产品"是自我介绍，不是方案。先站到客户那边说话，用他的业务语言。'],
  ['问题定义', /痛点|现状|问题|挑战|难点|瓶颈|需求|困扰|目标|为什么/, '方案要先讲清"客户现在卡在哪"，否则后面列的所有功能都没有落点。'],
  ['价值量化', /\d+\s*%|\d+\s*倍|提升|降低|减少|节约|缩短|增效|降本|\d+\s*万|\d+\s*小时|\d+\s*天/, '把"提升效率"换成"人均每天少 2 小时"这类可核对的数，评委才记得住。'],
  ['差异化', /不同于|相比|对比|特色|独有|专利|优势|首创|唯一|专门|定制/, '没有差异化，就是一份可以被任何同行替换的标书——评委凭什么给你高分？'],
  ['可交付与证据', /交付|实施|周期|里程碑|验收|培训|售后|服务|案例|业绩|资质|标杆|实测|承诺/, '承诺要落到"谁、什么时候、交什么、怎么验"，最好再配一个同类客户案例。']
];
PRS.propCheck = function() {
  var el = document.getElementById('pc-result');
  var ta = document.getElementById('pc-text');
  if (!el || !ta) return;
  var text = ta.value || '';
  var score = 0, rows = '', missing = [];
  for (var i = 0; i < PC_ITEMS.length; i++) {
    var it = PC_ITEMS[i];
    var hit = it[1].test(text);
    if (hit) score += 20; else missing.push(it[0]);
    rows += '<tr><td class="cr-name">' + (hit ? '✓' : '✗') + ' ' + it[0] + '</td>' +
      '<td class="cr-val ' + (hit ? 'cr-good' : 'cr-bad') + '" style="font-weight:400">' + (hit ? '已具备' : '缺失 —— ' + it[2]) + '</td></tr>';
  }
  var verdict, cls;
  if (score >= 80) { verdict = '扎实：该有的维度都有了，下一步抠深度和证据'; cls = 'cr-good'; }
  else if (score >= 60) { verdict = '及格：补上缺的维度，方案立刻立得住'; cls = 'cr-warn'; }
  else { verdict = '偏弱：现在这份更像产品介绍，不是解决方案'; cls = 'cr-bad'; }
  var tail = missing.length > 0
    ? '<p class="calc-note">优先补：<b>' + missing.join('、') + '</b>。一份方案的说服力，往往就补在这几块上。</p>'
    : '<p class="calc-note">五个维度都齐了。接下来问自己：每一块有没有<b>具体数字和真实案例</b>撑着？</p>';
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">体检得分</td><td class="cr-val ' + cls + '">' + score + ' / 100 —— ' + verdict + '</td></tr>' +
    rows + '</table>' + tail;
};

/* ---- 2. 评分办法拆解器 ---- */
PRS.scoreMatrix = function() {
  var el = document.getElementById('sm-result');
  if (!el) return;
  var t = PRS._num('sm-t'), b = PRS._num('sm-b'), p = PRS._num('sm-p');
  var f = (document.getElementById('sm-f') || {}).value || 'low';
  if (t === null || b === null || p === null) { el.innerHTML = '<div class="calc-warn">三项权重都要填。</div>'; return; }
  var sum = t + b + p;
  var warn = Math.abs(sum - 100) > 0.01
    ? '<tr><td class="cr-name">权重合计</td><td class="cr-val cr-bad">' + sum + '（应为 100，请核对招标文件）</td></tr>'
    : '<tr><td class="cr-name">权重合计</td><td class="cr-val cr-good">100 ✓ 权重有效</td></tr>';

  var parts = [['技术分', t, '方案深度、架构合理性、功能响应、亮点创新'],
               ['商务分', b, '企业资质、同类业绩、团队配置、财务与信誉'],
               ['价格分', p, '报价水平与价格评分公式的匹配度']];
  parts.sort(function(a, c) { return c[1] - a[1]; });

  var orderRows = '', rank = 1;
  for (var i = 0; i < parts.length; i++) {
    var tag = rank === 1 ? '主战场' : (rank === 2 ? '次战场' : '保底线');
    orderRows += '<tr><td class="cr-name">第 ' + rank + ' 优先 · ' + parts[i][0] + '（' + parts[i][1] + ' 分）</td>' +
      '<td class="cr-val' + (rank === 1 ? ' cr-warn' : '') + '" style="font-weight:400">' + tag + ' —— ' + parts[i][2] + '</td></tr>';
    rank++;
  }

  var strategy;
  if (sum > 0 && (p / sum) >= 0.4) {
    strategy = '价格主导型：报价是最主要的胜负手。技术标的首要目标是<b>不废标、不丢分</b>，商务标备齐资质业绩，把精力压在成本测算与竞争报价上。';
  } else if (sum > 0 && (t / sum) >= 0.5) {
    strategy = '技术主导型：方案是主战场，值得为差异化、深度和证据链投入最多时间。价格只要不失控、不废标即可，不必打价格战。';
  } else if (sum > 0 && (b / sum) >= 0.3) {
    strategy = '商务主导型：资质、业绩、团队是硬分。这类分往往靠<b>平时积累</b>而非临场发挥——投标前先盘一遍手里有什么材料。';
  } else {
    strategy = '均衡型：三块都不能有短板。先保证没有明显失分项，再把资源向权重最高的一块倾斜。';
  }

  var formula;
  if (f === 'low') formula = '价格分 =（最低有效报价 ÷ 本方报价）× 价格权重。报价越低分越高，但低于成本价可能被认定无效——先算出保本价再说。';
  else if (f === 'bench') formula = '价格分 =（1 − |本方报价 − 基准价| ÷ 基准价）× 价格权重。得分最高点是<b>猜准基准价</b>，报价过高过低都扣分，是心理战。';
  else formula = '价格分 =（1 − |本方报价 − 平均价| ÷ 平均价）× 价格权重。最高分靠近<b>各家平均报价</b>，需要研判对手与自家定位。';

  el.innerHTML = '<table class="cr-table">' + warn + orderRows +
    '<tr><td class="cr-name">总体策略</td><td class="cr-val" style="font-weight:400">' + strategy + '</td></tr>' +
    '<tr><td class="cr-name">价格评分公式</td><td class="cr-val" style="font-weight:400">' + formula + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">拆评分办法两个动作：先把权重排序，定资源投向；再把每一分对应的<b>评分细则</b>抄成清单，逐条对照自家材料，缺哪条补哪条。</p>';
};

/* ---- 3. 讲标时间规划器 ---- */
var PITCH_SEG = [
  ['开场与团队', 0.08, '一句话点题，团队分工一句带过，别念简历'],
  ['需求理解', 0.15, '复述客户痛点与目标，让他确认"你懂我"'],
  ['总体思路', 0.12, '一张架构图讲清整体解法与落地路径'],
  ['方案主体', 0.30, '核心功能、技术实现与关键难点，重点砸时间'],
  ['案例与业绩', 0.12, '同类客户做成过什么，用数字和结果说话'],
  ['实施与服务', 0.10, '周期、里程碑、培训、售后与响应承诺'],
  ['差异化与承诺', 0.08, '正面回答"凭什么选我"，给出可兑现的承诺'],
  ['收尾', 0.05, '总结一句话，留下联系人与下一步动作']
];
PRS.pitchPlan = function() {
  var el = document.getElementById('pt-result');
  if (!el) return;
  var total = PRS._num('pt-min');
  if (total === null || total < 3 || total > 180) { el.innerHTML = '<div class="calc-warn">请填 3~180 分钟之间的讲标时长。</div>'; return; }

  var rows = '', acc = 0;
  for (var i = 0; i < PITCH_SEG.length; i++) {
    var seg = PITCH_SEG[i];
    var sec = Math.round(total * 60 * seg[1]);
    acc += sec;
    var mm = Math.floor(sec / 60), ss = sec % 60;
    rows += '<tr><td class="cr-name">' + (i + 1) + '. ' + seg[0] + '</td>' +
      '<td class="cr-val cr-warn" style="width:80px">' + mm + ' 分' + (ss > 0 ? ' ' + ss + ' 秒' : '') + '</td>' +
      '<td class="cr-val" style="font-weight:400">' + seg[2] + '</td></tr>';
  }

  var tip;
  if (total <= 8) tip = '<p class="calc-note">短时讲标（≤8 分钟）：只讲三个东西——<b>你懂我的问题、你的解法、你做成过</b>。功能清单和公司介绍全部砍掉，留给答疑。</p>';
  else if (total <= 20) tip = '<p class="calc-note">标准讲标（10~20 分钟）：方案主体占三成，是评委注意力最集中的时段；案例必须留够时间，它是"可信度"的来源。</p>';
  else tip = '<p class="calc-note">长时讲标（＞20 分钟）：主体时长够，但注意<b>节奏</b>——每 7~8 分钟给一个记忆点（一张图、一个数字、一个案例），避免评委走神。</p>';

  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">总时长</td><td class="cr-val cr-good" colspan="2">' + total + ' 分钟（' + total * 60 + ' 秒）</td></tr>' +
    rows +
    '<tr><td class="cr-name">合计校验</td><td class="cr-val" colspan="2">' + Math.floor(acc / 60) + ' 分 ' + (acc % 60) + ' 秒</td></tr>' +
    '</table>' + tip +
    '<p class="calc-note">排练方法：按这张表掐表讲三遍。第三遍的用时，才是你真实的用时。</p>';
};

/* ---- 4. 报价测算器 ---- */
PRS.quoteCalc = function() {
  var el = document.getElementById('qc-result');
  if (!el) return;
  var cost = PRS._num('qc-cost'), mg = PRS._num('qc-mg'), com = PRS._num('qc-com');
  if (cost === null || mg === null || cost <= 0 || mg < 0 || mg >= 100) {
    el.innerHTML = '<div class="calc-warn">请填写成本(>0)与 0~99 之间的毛利率。</div>'; return;
  }
  var target = cost / (1 - mg / 100);
  var low = cost * 1.08;
  var high = target * 1.05;

  var rows = '';
  rows += '<tr><td class="cr-name">保本价</td><td class="cr-val cr-bad">' + PRS._fix(cost, 1) + ' 万元 —— 低于此价必然亏本</td></tr>';
  rows += '<tr><td class="cr-name">目标报价</td><td class="cr-val cr-good">' + PRS._fix(target, 1) + ' 万元 —— 毛利 ' + mg + '%</td></tr>';
  rows += '<tr><td class="cr-name">建议区间</td><td class="cr-val">' + PRS._fix(low, 1) + ' ~ ' + PRS._fix(high, 1) + ' 万元</td></tr>';

  var strategy = '';
  if (com && com > 0) {
    var comp = com * 0.95;
    rows += '<tr><td class="cr-name">竞品参考价</td><td class="cr-val">' + PRS._fix(com, 1) + ' 万元（按下浮 5% 计 ' + PRS._fix(comp, 1) + ' 万元）</td></tr>';
    if (target > com * 1.15) {
      strategy = '本方目标价高出竞品 15% 以上。要么拿出<b>可被评委认可的差异化理由</b>（性能、服务、案例、承诺），要么压缩毛利贴近竞品——高价无差异，价格分先丢一截。';
    } else if (target < com * 0.9) {
      strategy = '本方目标价明显低于竞品。价格分占优，但要守住<b>成本红线</b>：低于成本的报价可能被否，也会把后续利润空间压死。';
    } else {
      strategy = '双方报价接近，胜负更多落在<b>技术与商务分</b>上。此时不打价格战，把精力放回方案与证据。';
    }
  } else {
    strategy = '未填竞品价，仅做成本加成测算。实际报价前，先研判对手报价区间与评分公式——同样的成本，在不同公式下的最优报价完全不同。';
  }

  el.innerHTML = '<table class="cr-table">' + rows +
    '<tr><td class="cr-name">策略提示</td><td class="cr-val" style="font-weight:400">' + strategy + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">报价的两个底线：不能低于成本（可能被否决），不能高于评标基准价太多（价格分失血）。中间的区间，取决于你对<b>竞争对手</b>和<b>评分公式</b>的判断。</p>';
};

/* ===== 模块页 ===== */
PRS.views.module = function(id) {
  var mod = PRS.modules.find(function(m) { return m.id === id; });
  if (!mod) { PRS.views.home(); return; }
  var P = PRS.progress();
  var lessons = PRS.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + PRS.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + PRS.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = PRS.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + PRS.esc(title) + '</a>';
    else html += '<span class="title">' + PRS.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  PRS.render(html);
};

/* ===== 术语 ===== */
PRS.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>售前名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 废标 / 偏离表 / 基准价 / 讲标" oninput="PRS.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(PRS.terms) + '</div></div>';
  PRS.render(html);
};
PRS.filterTerms = function(q) {
  var filtered = PRS.terms;
  if (q) { q = q.toLowerCase();
    filtered = PRS.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || t.en.toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + PRS.esc(t.name) + ' <span class="term-en">' + PRS.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + PRS.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + PRS.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
PRS.views.myTerms = function() {
  var P = PRS.progress(); var collected = [];
  for (var i = 0; i < PRS.terms.length; i++) if (P.hasTerm(PRS.terms[i].id)) collected.push(PRS.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  PRS.render(html);
};

/* ===== 搜索 ===== */
PRS.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 废标 / 偏离表 / 基准价 / 讲标" oninput="PRS.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  PRS.render(html);
};
PRS.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = PRS.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + PRS.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + PRS.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
PRS.views.settings = function() {
  var P = PRS.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="PRS.setTheme(\'dark\')">深色 · 绛夜</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="PRS.setTheme(\'light\')">浅色 · 酒红</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="PRS.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="PRS.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="PRS.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = PRS.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/prs-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/prs-progress" value="' + PRS.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + PRS.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + PRS.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + PRS.esc(PRS.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="PRS.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="PRS.clearData()">清除数据</button></div>';
  html += '</div>';
  PRS.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    PRS.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!PRS.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    PRS.sync.pullNow().then(function () { return PRS.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + PRS.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    PRS.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : PRS.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    PRS.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
PRS.setTheme = function(t) { document.documentElement.dataset.theme = t; PRS.progress().setPref('theme', t); PRS.views.settings(); };
PRS.setFontSize = function(s) { document.documentElement.dataset.fs = s; PRS.progress().setPref('fontSize', s); PRS.views.settings(); };
PRS.exportData = function() {
  var data = PRS.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'prs-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
PRS.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('prs.progress.v1');
    window.location.reload();
  }
};
