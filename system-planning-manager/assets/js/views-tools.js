/* 工具视图：术语本、错题本、搜索、设置、计算器 */
window.SPM = window.SPM || {};
SPM.views = SPM.views || {};

/* ===== 交互计算器（服务可用性 / 投资回收期 / 服务人力测算） ===== */
SPM.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>系规计算器</h2>';
  html += '<p class="calc-intro">系统规划与管理师案例高频可算项，输入即时计算，配合服务级别管理、可用性、成本效益、人力资源课时使用。所有计算在本地完成。</p>';

  // 服务可用性
  html += '<div class="calc-card">';
  html += '<h3>服务可用性计算器（MTBF / MTTR）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>MTBF 平均故障间隔（小时） <input type="number" id="av-mtbf" placeholder="如 720"></label>';
  html += '<label>MTTR 平均修复时间（小时） <input type="number" id="av-mttr" placeholder="如 4"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SPM.calcAvailability()">计算</button>';
  html += '<div id="av-result" class="calc-result"></div>';
  html += '</div>';

  // 投资回收期 / 成本效益
  html += '<div class="calc-card">';
  html += '<h3>投资回收期计算器（静态）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>初始投资 <input type="number" id="roi-init" placeholder="如 100"></label>';
  html += '<label>各年净收益（逗号分隔） <input type="text" id="roi-cash" placeholder="如 30,40,40,50"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SPM.calcROI()">计算</button>';
  html += '<div id="roi-result" class="calc-result"></div>';
  html += '</div>';

  // 服务人力测算
  html += '<div class="calc-card">';
  html += '<h3>服务人力测算计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>总工作量（人·时） <input type="number" id="st-work" placeholder="如 1600"></label>';
  html += '<label>单人有效产能（人·时/人） <input type="number" id="st-cap" placeholder="如 160"></label>';
  html += '<label>人员有效利用率（0~1，可空） <input type="number" id="st-util" placeholder="如 0.8"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SPM.calcStaffing()">计算</button>';
  html += '<div id="st-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  SPM.render(html);
};

SPM.calcAvailability = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var mtbf = v('av-mtbf'), mttr = v('av-mttr');
  var el = document.getElementById('av-result');
  if (mtbf === null || mttr === null || mtbf < 0 || mttr < 0) { el.innerHTML = '<div class="calc-warn">请填写非负的 MTBF 与 MTTR</div>'; return; }
  if (mtbf + mttr === 0) { el.innerHTML = '<div class="calc-warn">MTBF 与 MTTR 不能同时为 0</div>'; return; }
  var a = mtbf / (mtbf + mttr);
  var pct = a * 100;
  var downYear = (1 - a) * 365 * 24; // 全年停机小时
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">可用性 A</td><td class="cr-val cr-good">' + pct.toFixed(4) + '%</td><td class="cr-formula">MTBF/(MTBF+MTTR)</td></tr>';
  html += '<tr><td class="cr-name">不可用率</td><td class="cr-val">' + ((1 - a) * 100).toFixed(4) + '%</td><td class="cr-formula">1−A</td></tr>';
  html += '<tr><td class="cr-name">约合年停机</td><td class="cr-val">' + downYear.toFixed(2) + ' 小时</td><td class="cr-formula">(1−A)×8760h</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

SPM.calcROI = function() {
  var init = parseFloat(document.getElementById('roi-init').value);
  var raw = (document.getElementById('roi-cash').value || '').trim();
  var el = document.getElementById('roi-result');
  if (isNaN(init) || init < 0) { el.innerHTML = '<div class="calc-warn">请填写非负的初始投资</div>'; return; }
  if (!raw) { el.innerHTML = '<div class="calc-warn">请输入各年净收益，逗号分隔</div>'; return; }
  var parts = raw.split(/[，,\s]+/).filter(function(s){ return s !== ''; });
  var cash = [], ok = true;
  for (var i = 0; i < parts.length; i++) { var x = parseFloat(parts[i]); if (isNaN(x)) { ok = false; break; } cash.push(x); }
  if (!ok || cash.length === 0) { el.innerHTML = '<div class="calc-warn">各年净收益须为数字</div>'; return; }
  var cum = -init, payback = null, total = 0;
  var rows = '<tr><td class="cr-name">第0年</td><td class="cr-val">-' + init + '</td><td class="cr-formula">累计 ' + cum.toFixed(2) + '</td></tr>';
  for (var j = 0; j < cash.length; j++) {
    var prev = cum; cum += cash[j]; total += cash[j];
    if (payback === null && cum >= 0) { payback = j + (prev < 0 ? (-prev) / cash[j] : 0); }
    rows += '<tr><td class="cr-name">第' + (j + 1) + '年</td><td class="cr-val">+' + cash[j] + '</td><td class="cr-formula">累计 ' + cum.toFixed(2) + '</td></tr>';
  }
  var roi = init > 0 ? (total - init) / init * 100 : 0;
  rows += '<tr><td class="cr-name">静态回收期</td><td class="cr-val cr-good">' + (payback === null ? '未收回' : payback.toFixed(2) + ' 年') + '</td><td class="cr-formula">累计净收益转正</td></tr>';
  rows += '<tr><td class="cr-name">总投资收益率</td><td class="cr-val">' + roi.toFixed(2) + '%</td><td class="cr-formula">(总净收益−投资)/投资</td></tr>';
  el.innerHTML = '<table class="cr-table">' + rows + '</table>';
};

SPM.calcStaffing = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var work = v('st-work'), cap = v('st-cap'), util = v('st-util');
  var el = document.getElementById('st-result');
  if (work === null || cap === null || work < 0 || cap <= 0) { el.innerHTML = '<div class="calc-warn">请填写总工作量与单人产能（产能须>0）</div>'; return; }
  var effCap = cap;
  var formula = '总工作量 / 单人产能';
  if (util !== null) {
    if (util <= 0 || util > 1) { el.innerHTML = '<div class="calc-warn">利用率需在 0~1 之间</div>'; return; }
    effCap = cap * util; formula = '总工作量 / (单人产能 × 利用率)';
  }
  var raw = work / effCap;
  var need = Math.ceil(raw);
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">理论人数</td><td class="cr-val">' + raw.toFixed(2) + '</td><td class="cr-formula">' + formula + '</td></tr>';
  html += '<tr><td class="cr-name">所需人数</td><td class="cr-val cr-good">' + need + ' 人</td><td class="cr-formula">向上取整</td></tr>';
  if (util !== null) html += '<tr><td class="cr-name">有效产能</td><td class="cr-val">' + effCap.toFixed(2) + '</td><td class="cr-formula">单人产能×利用率</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

SPM.views.module = function(id) {
  var mod = SPM.modules.find(function(m) { return m.id === id; });
  if (!mod) { SPM.views.home(); return; }
  var P = SPM.progress();

  var lessons = SPM.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + SPM.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + SPM.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = SPM.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + SPM.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + SPM.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  SPM.render(html);
};

SPM.views.terms = function() {
  var P = SPM.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="SPM.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(SPM.terms);
  html += '</div></div>';
  SPM.render(html);
};

SPM.filterTerms = function(q) {
  var filtered = SPM.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = SPM.terms.filter(function(t) {
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
    html += '<div class="term-name">' + SPM.esc(t.name) + ' <span class="term-en">' + SPM.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + SPM.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + SPM.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

SPM.views.myTerms = function() {
  var P = SPM.progress();
  var collected = [];
  for (var i = 0; i < SPM.terms.length; i++) {
    if (P.hasTerm(SPM.terms[i].id)) collected.push(SPM.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  SPM.render(html);
};

SPM.views.mistakes = function() {
  var P = SPM.progress();
  var mistakes = P.allMistakes();

  var html = '<div class="tools-page">';
  html += '<h2>错题本 (' + mistakes.length + ')</h2>';
  if (mistakes.length === 0) {
    html += '<p class="empty-hint">还没有错题。做题答错后会自动收集到这里。</p>';
  } else {
    html += '<div class="mistake-list">';
    for (var i = 0; i < mistakes.length; i++) {
      var m = mistakes[i];
      html += '<div class="mistake-item">';
      html += '<div class="mistake-q">' + SPM.esc(m.q) + '</div>';
      html += '<div class="mistake-my">你的答案: ' + SPM.esc(m.my) + '</div>';
      html += '<div class="mistake-ans">正确答案: ' + SPM.esc(m.ans) + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  SPM.render(html);
};

SPM.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="SPM.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  SPM.render(html);
};

SPM.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = SPM.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + SPM.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + SPM.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

SPM.views.settings = function() {
  var P = SPM.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || 'dark';
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="SPM.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="SPM.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="SPM.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="SPM.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="SPM.setFontSize(\'l\')">大</button>';
  html += '</div>';

  /* ── GitHub 进度同步(可选) ── */
  var syncCfg = SPM.sync.config();
  html += '<h3>GitHub 进度同步（可选）</h3>';
  html += '<p class="calc-intro">用一个<b>自己的 private 仓库</b>存放进度（如 you/spm-progress），fine-grained PAT 仅授权该仓库的 Contents 读写。token 只存本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/repo" value="' + SPM.esc(syncCfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + SPM.esc(syncCfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + SPM.esc(syncCfg.token || '') + '"></div>';
  html += '<div class="setting-row"><button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-intro" id="syMsg">' + SPM.esc((SPM.sync && SPM.sync.statusText) || '仅本机') + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="SPM.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="SPM.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  SPM.render(html);

  // 同步(可选)
  function syncMsg(text, cls) {
    var el = document.getElementById('syMsg');
    if (!el) return;
    el.textContent = text;
    el.style.color = cls === 'ok' ? 'var(--ok)' : cls === 'bad' ? 'var(--bad, var(--red))' : '';
  }
  var sySaveEl = document.getElementById('sySave');
  if (sySaveEl) {
    sySaveEl.addEventListener('click', function () {
      SPM.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!SPM.sync.ready()) { syncMsg('仓库和 token 都要填。', 'bad'); return; }
      syncMsg('同步中…');
      SPM.sync.pullNow().then(function () { return SPM.sync.pushNow(); })
        .then(function (ok) { syncMsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + SPM.sync.statusText, ok ? 'ok' : 'bad'); });
    });
  }
  var syPullEl = document.getElementById('syPull');
  if (syPullEl) {
    syPullEl.addEventListener('click', function () {
      syncMsg('拉取中…');
      SPM.sync.pullNow().then(function (ok) { syncMsg(ok ? '已拉取并合并远端进度 ✓' : SPM.sync.statusText, ok ? 'ok' : ''); });
    });
  }
  var syClearEl = document.getElementById('syClear');
  if (syClearEl) {
    syClearEl.addEventListener('click', function () {
      SPM.sync.clearToken();
      document.getElementById('syToken').value = '';
      syncMsg('token 已从本机清除。');
    });
  }
};

SPM.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  SPM.progress().setPref('theme', t);
  SPM.views.settings();
};

SPM.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  SPM.progress().setPref('fontSize', s);
  SPM.views.settings();
};

SPM.exportData = function() {
  var data = SPM.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'spm-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

SPM.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('spm.progress.v1');
    window.location.reload();
  }
};
