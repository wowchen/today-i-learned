/* 工具视图：术语本、搜索、设置、理财计算器 */
window.PFIN = window.PFIN || {};
PFIN.views = PFIN.views || {};

/* ===== 理财计算器（复利 / 定投回测 / 退休缺口 / 贷款摊销） ===== */
PFIN.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>理财计算器</h2>';
  html += '<p class="calc-intro">理财高频可算项，输入即时计算，配合复利、资产配置、退休、房产等课时使用。所有计算在本地完成，<b>结果为估算，不构成投资建议</b>。</p>';

  // 复利计算器
  html += '<div class="calc-card">';
  html += '<h3>复利计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>初始本金（元） <input type="number" id="cmp-p" placeholder="如 100000"></label>';
  html += '<label>每月追加（元） <input type="number" id="cmp-m" placeholder="如 2000"></label>';
  html += '<label>预期年化（%） <input type="number" id="cmp-r" placeholder="如 8"></label>';
  html += '<label>投资年限（年） <input type="number" id="cmp-y" placeholder="如 30"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="PFIN.calcCompound()">计算</button>';
  html += '<div id="cmp-result" class="calc-result"></div>';
  html += '</div>';

  // 定投回测
  html += '<div class="calc-card">';
  html += '<h3>定投估算</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>每月定投（元） <input type="number" id="dca-m" placeholder="如 1500"></label>';
  html += '<label>预期年化（%） <input type="number" id="dca-r" placeholder="如 7"></label>';
  html += '<label>定投年限（年） <input type="number" id="dca-y" placeholder="如 20"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="PFIN.calcDCA()">计算</button>';
  html += '<div id="dca-result" class="calc-result"></div>';
  html += '</div>';

  // 退休缺口
  html += '<div class="calc-card">';
  html += '<h3>退休缺口估算</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>当前年龄 <input type="number" id="ret-age" placeholder="如 30"></label>';
  html += '<label>计划退休年龄 <input type="number" id="ret-rage" placeholder="如 60"></label>';
  html += '<label>预期寿命 <input type="number" id="ret-life" placeholder="如 85"></label>';
  html += '<label>退休后年支出（今值，元） <input type="number" id="ret-exp" placeholder="如 80000"></label>';
  html += '<label>已有积蓄（元） <input type="number" id="ret-have" placeholder="如 200000"></label>';
  html += '<label>投资年化（%） <input type="number" id="ret-r" placeholder="如 5"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="PFIN.calcRetire()">计算</button>';
  html += '<div id="ret-result" class="calc-result"></div>';
  html += '</div>';

  // 贷款摊销
  html += '<div class="calc-card">';
  html += '<h3>贷款月供（等额本息）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>贷款金额（元） <input type="number" id="loan-p" placeholder="如 1000000"></label>';
  html += '<label>年利率（%） <input type="number" id="loan-r" placeholder="如 4.0"></label>';
  html += '<label>贷款年限（年） <input type="number" id="loan-y" placeholder="如 30"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="PFIN.calcLoan()">计算</button>';
  html += '<div id="loan-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  PFIN.render(html);
};

// ---- 工具 ----
PFIN._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
PFIN._money = function(n) {
  var neg = n < 0; n = Math.abs(Math.round(n));
  var s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '−' : '') + '¥' + s;
};

// 复利：FV = P(1+r)^n + 月供年金终值
PFIN.calcCompound = function() {
  var P = PFIN._num('cmp-p') || 0, m = PFIN._num('cmp-m') || 0;
  var r = PFIN._num('cmp-r'), y = PFIN._num('cmp-y');
  var el = document.getElementById('cmp-result');
  if (r === null || y === null || y <= 0) { el.innerHTML = '<div class="calc-warn">请填写年化与年限</div>'; return; }
  var mr = r / 100 / 12, n = Math.round(y * 12);
  var fvP = P * Math.pow(1 + mr, n);
  var fvM = mr === 0 ? m * n : m * (Math.pow(1 + mr, n) - 1) / mr;
  var fv = fvP + fvM;
  var invested = P + m * n;
  var gain = fv - invested;
  var dbl = r > 0 ? (72 / r) : null;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">期末总额</td><td class="cr-val cr-good">' + PFIN._money(fv) + '</td><td class="cr-formula">本金复利 + 月供年金终值</td></tr>';
  html += '<tr><td class="cr-name">累计投入</td><td class="cr-val">' + PFIN._money(invested) + '</td><td class="cr-formula">本金 + 月供×月数</td></tr>';
  html += '<tr><td class="cr-name">投资收益</td><td class="cr-val">' + PFIN._money(gain) + '</td><td class="cr-formula">期末 − 投入</td></tr>';
  if (dbl) html += '<tr><td class="cr-name">本金翻倍约需</td><td class="cr-val">' + dbl.toFixed(1) + ' 年</td><td class="cr-formula">72 法则:72 ÷ ' + r + '</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">假设收益率恒定、复利计算，未计入费用与税；实际收益会波动。</p>';
  el.innerHTML = html;
};

// 定投：逐年终值(每月期末投入)
PFIN.calcDCA = function() {
  var m = PFIN._num('dca-m'), r = PFIN._num('dca-r'), y = PFIN._num('dca-y');
  var el = document.getElementById('dca-result');
  if (m === null || r === null || y === null || y <= 0) { el.innerHTML = '<div class="calc-warn">请填写每月定投、年化与年限</div>'; return; }
  var mr = r / 100 / 12, n = Math.round(y * 12);
  var fv = mr === 0 ? m * n : m * (Math.pow(1 + mr, n) - 1) / mr;
  var invested = m * n;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">累计投入</td><td class="cr-val">' + PFIN._money(invested) + '</td><td class="cr-formula">' + PFIN._money(m) + ' × ' + n + ' 月</td></tr>';
  html += '<tr><td class="cr-name">期末估值</td><td class="cr-val cr-good">' + PFIN._money(fv) + '</td><td class="cr-formula">月供年金终值</td></tr>';
  html += '<tr><td class="cr-name">收益倍数</td><td class="cr-val">' + (fv / invested).toFixed(2) + ' ×</td><td class="cr-formula">估值 ÷ 投入</td></tr>';
  html += '</table>';
  // 逐年文字序列(每 5 年或末年)
  var seq = [];
  for (var yr = 5; yr <= y; yr += 5) {
    var nn = yr * 12;
    var f = mr === 0 ? m * nn : m * (Math.pow(1 + mr, nn) - 1) / mr;
    seq.push('第 ' + yr + ' 年约 ' + PFIN._money(f));
  }
  if (seq.length) html += '<p class="calc-note">里程碑:' + seq.join(' · ') + '</p>';
  html += '<p class="calc-note">定投平滑成本但不保证盈利;此处假设年化恒定,真实市场有涨有跌。</p>';
  el.innerHTML = html;
};

// 退休缺口
PFIN.calcRetire = function() {
  var age = PFIN._num('ret-age'), rage = PFIN._num('ret-rage'), life = PFIN._num('ret-life');
  var exp = PFIN._num('ret-exp'), have = PFIN._num('ret-have') || 0, r = PFIN._num('ret-r');
  var el = document.getElementById('ret-result');
  if (age === null || rage === null || life === null || exp === null || r === null) { el.innerHTML = '<div class="calc-warn">请完整填写各项</div>'; return; }
  if (rage <= age || life <= rage) { el.innerHTML = '<div class="calc-warn">需满足:当前年龄 < 退休年龄 < 预期寿命</div>'; return; }
  var years = rage - age;          // 距退休年数
  var retYears = life - rage;      // 退休后年数
  var ar = r / 100;
  // 退休所需总额:退休后每年支出 × 年数(简化:不计退休后通胀与继续投资增值,给保守估计)
  var need = exp * retYears;
  // 已有积蓄按年化增长到退休时
  var haveFv = have * Math.pow(1 + ar, years);
  var gap = need - haveFv;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">距退休</td><td class="cr-val">' + years + ' 年</td><td class="cr-formula">退休后约 ' + retYears + ' 年</td></tr>';
  html += '<tr><td class="cr-name">退休所需总额</td><td class="cr-val">' + PFIN._money(need) + '</td><td class="cr-formula">年支出 × 退休年数(简化)</td></tr>';
  html += '<tr><td class="cr-name">已有积蓄届时</td><td class="cr-val">' + PFIN._money(haveFv) + '</td><td class="cr-formula">现有按 ' + r + '% 增长 ' + years + ' 年</td></tr>';
  if (gap > 0) {
    var mr = ar / 12, n = years * 12;
    var monthly = mr === 0 ? gap / n : gap * mr / (Math.pow(1 + mr, n) - 1);
    html += '<tr><td class="cr-name">资金缺口</td><td class="cr-val cr-bad">' + PFIN._money(gap) + '</td><td class="cr-formula">所需 − 届时积蓄</td></tr>';
    html += '<tr><td class="cr-name">建议每月储备</td><td class="cr-val cr-good">' + PFIN._money(monthly) + '</td><td class="cr-formula">填补缺口的月供年金</td></tr>';
  } else {
    html += '<tr><td class="cr-name">资金缺口</td><td class="cr-val cr-good">无缺口</td><td class="cr-formula">届时积蓄已覆盖</td></tr>';
  }
  html += '</table>';
  html += '<p class="calc-note">高度简化:未计退休后通胀、退休后继续投资增值与养老金收入,仅作量级参考。</p>';
  el.innerHTML = html;
};

// 贷款等额本息
PFIN.calcLoan = function() {
  var P = PFIN._num('loan-p'), r = PFIN._num('loan-r'), y = PFIN._num('loan-y');
  var el = document.getElementById('loan-result');
  if (P === null || r === null || y === null || P <= 0 || y <= 0) { el.innerHTML = '<div class="calc-warn">请填写贷款额、利率与年限</div>'; return; }
  var mr = r / 100 / 12, n = Math.round(y * 12);
  var pay = mr === 0 ? P / n : P * mr * Math.pow(1 + mr, n) / (Math.pow(1 + mr, n) - 1);
  var totalPay = pay * n;
  var totalInt = totalPay - P;
  // 首月本息拆分
  var firstInt = P * mr, firstPrin = pay - firstInt;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">每月月供</td><td class="cr-val cr-good">' + PFIN._money(pay) + '</td><td class="cr-formula">等额本息</td></tr>';
  html += '<tr><td class="cr-name">还款总额</td><td class="cr-val">' + PFIN._money(totalPay) + '</td><td class="cr-formula">月供 × ' + n + ' 期</td></tr>';
  html += '<tr><td class="cr-name">利息合计</td><td class="cr-val cr-bad">' + PFIN._money(totalInt) + '</td><td class="cr-formula">总额 − 本金</td></tr>';
  html += '<tr><td class="cr-name">首月本息</td><td class="cr-val">息 ' + PFIN._money(firstInt) + ' / 本 ' + PFIN._money(firstPrin) + '</td><td class="cr-formula">前期还息多、还本少</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">实际以银行 LPR、放款规则与还款方式为准;此为等额本息估算。</p>';
  el.innerHTML = html;
};

PFIN.views.module = function(id) {
  var mod = PFIN.modules.find(function(m) { return m.id === id; });
  if (!mod) { PFIN.views.home(); return; }
  var P = PFIN.progress();

  var lessons = PFIN.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + PFIN.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + PFIN.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = PFIN.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + PFIN.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + PFIN.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  PFIN.render(html);
};

PFIN.views.terms = function() {
  var P = PFIN.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="PFIN.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(PFIN.terms);
  html += '</div></div>';
  PFIN.render(html);
};

PFIN.filterTerms = function(q) {
  var filtered = PFIN.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = PFIN.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 ||
             t.en.toLowerCase().indexOf(q) !== -1 ||
             t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};

function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + PFIN.esc(t.name) + ' <span class="term-en">' + PFIN.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + PFIN.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + PFIN.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

PFIN.views.myTerms = function() {
  var P = PFIN.progress();
  var collected = [];
  for (var i = 0; i < PFIN.terms.length; i++) {
    if (P.hasTerm(PFIN.terms[i].id)) collected.push(PFIN.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  PFIN.render(html);
};

PFIN.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="PFIN.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  PFIN.render(html);
};

PFIN.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = PFIN.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + PFIN.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + PFIN.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

PFIN.views.settings = function() {
  var P = PFIN.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="PFIN.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="PFIN.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="PFIN.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="PFIN.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="PFIN.setFontSize(\'l\')">大</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="PFIN.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="PFIN.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  PFIN.render(html);
};

PFIN.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  PFIN.progress().setPref('theme', t);
  PFIN.views.settings();
};

PFIN.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  PFIN.progress().setPref('fontSize', s);
  PFIN.views.settings();
};

PFIN.exportData = function() {
  var data = PFIN.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pfin-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

PFIN.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('pfin.progress.v1');
    window.location.reload();
  }
};
