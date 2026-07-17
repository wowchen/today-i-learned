/* 工具视图:四个吉他互动工具(和弦指板图 / 节拍器 / 标准音调音 / 变调夹计算器)+ 术语/搜索/设置/模块 */
window.GTR = window.GTR || {};
GTR.views = GTR.views || {};

GTR._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
GTR._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* ---- 和弦数据 ---- [id, name, frets(6->1弦), fingers] ---- */
var CHORDS = {
  'C':    { name:'C',    frets:'x32010', fingers:'x32010' },
  'D':    { name:'D',    frets:'xx0232', fingers:'xx1321' },
  'E':    { name:'E',    frets:'022100', fingers:'023100' },
  'F':    { name:'F',    frets:'133211', fingers:'134211' },
  'G':    { name:'G',    frets:'320003', fingers:'210003' },
  'A':    { name:'A',    frets:'x02220', fingers:'x01230' },
  'Am':   { name:'Am',   frets:'x02210', fingers:'x02310' },
  'Dm':   { name:'Dm',   frets:'xx0231', fingers:'xx1321' },
  'Em':   { name:'Em',   frets:'022000', fingers:'023000' },
  'C7':   { name:'C7',   frets:'x32310', fingers:'x32410' },
  'G7':   { name:'G7',   frets:'320001', fingers:'320001' },
  'A7':   { name:'A7',   frets:'x02020', fingers:'x01020' },
  'D7':   { name:'D7',   frets:'xx0212', fingers:'xx0131' },
  'E7':   { name:'E7',   frets:'020100', fingers:'020100' },
  'B7':   { name:'B7',   frets:'x21202', fingers:'x21304' }
};

/* ===== 工具总页 ===== */
GTR.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">弹唱离不开"查"与"练":查一个和弦怎么按、用节拍器稳节奏、听标准音调弦、算变调夹该夹几品。这四个小工具全部在本地浏览器运行，<b>边弹边用，把练习变成能上手的事</b>。</p>';

  // 1. 和弦指板图
  html += '<div class="calc-card">';
  html += '<h3><span class="g">♪</span>和弦指板图</h3>';
  html += '<p class="lab-desc">选一个和弦，查看指板图：圆点表示按弦位置，数字表示用哪根手指（1=食指 2=中指 3=无名指 4=小指），x 表示不弹，0 表示空弦。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>选和弦 <select id="ch-sel" onchange="GTR.showChord()">';
  var chordKeys = Object.keys(CHORDS);
  for (var i = 0; i < chordKeys.length; i++) {
    html += '<option value="' + chordKeys[i] + '">' + CHORDS[chordKeys[i]].name + '</option>';
  }
  html += '</select></label>';
  html += '</div>';
  html += '<div id="ch-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 节拍器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">♩</span>节拍器</h3>';
  html += '<p class="lab-desc">设定速度（BPM）和拍号，点击开始后发出固定节拍声。每小节第一拍为强拍（高音），其余为弱拍（低音）。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>速度 BPM <input type="range" id="mt-bpm" min="40" max="200" value="80" oninput="document.getElementById(\'mt-val\').textContent=this.value"></label>';
  html += '<span id="mt-val" style="font-size:1.4em;font-weight:bold;color:var(--acc)">80</span>';
  html += '<label>拍号 <select id="mt-beat"><option value="4">4/4</option><option value="3">3/4</option><option value="6">6/8</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" id="mt-toggle" onclick="GTR.toggleMetronome()">开始</button></div>';
  html += '<div id="mt-visual" style="display:flex;gap:8px;justify-content:center;margin-top:12px"></div>';
  html += '</div>';

  // 3. 标准音调音
  html += '<div class="calc-card">';
  html += '<h3><span class="g">♫</span>标准音调音</h3>';
  html += '<p class="lab-desc">点击按钮播放对应弦的标准音，用耳朵对比你的琴弦音高来调弦。标准定弦从粗到细：6E 5A 4D 3G 2B 1E。</p>';
  html += '<div class="calc-inputs" style="flex-wrap:wrap;gap:10px">';
  var tuneNotes = [
    { str:'6 弦', note:'E2', freq:82.41 },
    { str:'5 弦', note:'A2', freq:110.00 },
    { str:'4 弦', note:'D3', freq:146.83 },
    { str:'3 弦', note:'G3', freq:196.00 },
    { str:'2 弦', note:'B3', freq:246.94 },
    { str:'1 弦', note:'E4', freq:329.63 }
  ];
  for (var t = 0; t < tuneNotes.length; t++) {
    var tn = tuneNotes[t];
    html += '<button class="calc-btn" style="min-width:70px" onclick="GTR.playTone(' + tn.freq + ',\'' + tn.note + '\')">' + tn.str + '<br><small>' + tn.note + '</small></button>';
  }
  html += '</div>';
  html += '<p class="calc-note" id="tn-msg">点击按钮播放标准音。按住按钮可持续发声，松开停止。</p>';
  html += '</div>';

  // 4. 变调夹计算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≡</span>变调夹计算器</h3>';
  html += '<p class="lab-desc">输入原调和你想唱的调，计算变调夹应夹第几品，以及用原调指法弹出的实际调。升调用变调夹，降调需换和弦指法。</p>';
  html += '<div class="calc-inputs">';
  var keys = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  html += '<label>原调 <select id="cp-from">';
  for (var k1 = 0; k1 < keys.length; k1++) html += '<option value="' + k1 + '"' + (keys[k1]==='C'?' selected':'') + '>' + keys[k1] + '</option>';
  html += '</select></label>';
  html += '<label>目标调 <select id="cp-to">';
  for (var k2 = 0; k2 < keys.length; k2++) html += '<option value="' + k2 + '"' + (keys[k2]==='D'?' selected':'') + '>' + keys[k2] + '</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="GTR.calcCapo()">计算</button></div>';
  html += '<div id="cp-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：和弦指法以常见开放和弦版本为准；节拍器使用 Web Audio API 生成音色；调音参考音为标准十二平均律频率（A4=440Hz）；变调夹计算器假设使用原调指法+变调夹升降调，降调（目标调低于原调）无法用变调夹实现，需换和弦。</p>';
  html += '</div>';
  GTR.render(html);
  GTR.showChord();
};

/* ---- 1. 和弦指板图 ---- */
GTR.showChord = function() {
  var sel = document.getElementById('ch-sel');
  if (!sel) return;
  var key = sel.value;
  var chord = CHORDS[key];
  if (!chord) return;
  var el = document.getElementById('ch-result');
  var frets = chord.frets.split('');
  var fingers = chord.fingers.split('');
  var maxFret = 0;
  for (var i = 0; i < 6; i++) { var f = parseInt(frets[i]); if (!isNaN(f) && f > maxFret) maxFret = f; }
  if (maxFret === 0) maxFret = 1;

  // SVG chord diagram
  var svg = '<svg viewBox="0 0 160 180" style="max-width:200px;margin:8px auto;display:block">';
  // Strings (6 vertical lines)
  for (var s = 0; s < 6; s++) {
    var x = 30 + s * 20;
    svg += '<line x1="' + x + '" y1="30" x2="' + x + '" y2="160" style="stroke:var(--ink);stroke-width:1"/>';
  }
  // Frets (horizontal lines)
  var startFret = 1;
  if (maxFret > 4) startFret = maxFret - 3;
  for (var fr = 0; fr <= 4; fr++) {
    var y = 30 + fr * 30;
    svg += '<line x1="30" y1="' + y + '" x2="130" y2="' + y + '" style="stroke:var(--ink);stroke-width:' + (fr===0?2:1) + '"/>';
  }
  // Fret position label
  if (startFret > 1) {
    svg += '<text x="18" y="50" style="fill:var(--acc);font-size:12;font-weight:bold">' + startFret + 'fr</text>';
  }
  // Dots and markers
  for (var d = 0; d < 6; d++) {
    var dx = 30 + d * 20;
    var fret = parseInt(frets[d]);
    var fing = fingers[d];
    if (frets[d] === 'x') {
      svg += '<text x="' + (dx-4) + '" y="24" style="fill:var(--note);font-size:14;font-weight:bold">x</text>';
    } else if (frets[d] === '0') {
      svg += '<circle cx="' + dx + '" cy="22" r="6" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>';
    } else {
      var dotRow = fret - startFret + 1;
      var dy = 30 + (dotRow - 0.5) * 30;
      svg += '<circle cx="' + dx + '" cy="' + dy + '" r="8" style="fill:var(--acc)"/>';
      svg += '<text x="' + (dx-3) + '" y="' + (dy+4) + '" style="fill:var(--paper);font-size:11;font-weight:bold">' + fing + '</text>';
    }
  }
  svg += '</svg>';
  el.innerHTML = '<div style="text-align:center"><b style="font-size:1.3em;color:var(--acc)">' + chord.name + '</b>' + svg +
    '<p class="calc-note">x = 不弹此弦 · 0 = 空弦 · 数字 = 手指编号（1食 2中 3无名 4小）</p></div>';
};

/* ---- 2. 节拍器 ---- */
GTR._metro = null;
GTR.toggleMetronome = function() {
  var btn = document.getElementById('mt-toggle');
  if (GTR._metro) {
    clearInterval(GTR._metro.timer);
    GTR._metro.ac.close();
    GTR._metro = null;
    btn.textContent = '开始';
    btn.classList.remove('active');
    document.getElementById('mt-visual').innerHTML = '';
    return;
  }
  var bpm = parseInt(document.getElementById('mt-bpm').value);
  var beats = parseInt(document.getElementById('mt-beat').value);
  var ac = new (window.AudioContext || window.webkitAudioContext)();
  var beatIdx = 0;
  // Visual
  var vis = document.getElementById('mt-visual');
  var visHtml = '';
  for (var v = 0; v < beats; v++) visHtml += '<span class="beat-dot" id="bd' + v + '" style="width:14px;height:14px;border-radius:50%;background:var(--line);transition:background .1s"></span>';
  vis.innerHTML = visHtml;

  function tick() {
    var isDownbeat = beatIdx % beats === 0;
    var osc = ac.createOscillator();
    var gain = ac.createGain();
    osc.frequency.value = isDownbeat ? 880 : 440;
    gain.gain.setValueAtTime(0.3, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ac.currentTime + 0.05);
    osc.connect(gain); gain.connect(ac.destination);
    osc.start(); osc.stop(ac.currentTime + 0.05);
    // Visual
    var curBeat = beatIdx % beats;
    for (var b = 0; b < beats; b++) {
      var dot = document.getElementById('bd' + b);
      if (dot) dot.style.background = (b === curBeat) ? (b === 0 ? 'var(--acc)' : 'var(--acc2)') : 'var(--line)';
    }
    beatIdx++;
  }
  tick();
  var interval = 60000 / bpm;
  var timer = setInterval(tick, interval);
  GTR._metro = { ac: ac, timer: timer };
  btn.textContent = '停止';
  btn.classList.add('active');
};

/* ---- 3. 调音参考音 ---- */
GTR._toneOsc = null;
GTR._toneAc = null;
GTR.playTone = function(freq, note) {
  var msg = document.getElementById('tn-msg');
  // Stop existing tone
  if (GTR._toneOsc) {
    GTR._toneOsc.stop();
    GTR._toneOsc = null;
    if (msg) msg.textContent = '点击按钮播放标准音。';
    return;
  }
  GTR._toneAc = GTR._toneAc || new (window.AudioContext || window.webkitAudioContext)();
  var osc = GTR._toneAc.createOscillator();
  var gain = GTR._toneAc.createGain();
  osc.frequency.value = freq;
  osc.type = 'sine';
  gain.gain.setValueAtTime(0.15, GTR._toneAc.currentTime);
  osc.connect(gain); gain.connect(GTR._toneAc.destination);
  osc.start();
  GTR._toneOsc = osc;
  if (msg) msg.textContent = '正在播放 ' + note + ' (' + freq.toFixed(2) + ' Hz)，再次点击停止。';
  // Auto stop after 3 seconds
  setTimeout(function() {
    if (GTR._toneOsc === osc) {
      osc.stop();
      GTR._toneOsc = null;
      if (msg) msg.textContent = '点击按钮播放标准音。';
    }
  }, 3000);
};

/* ---- 4. 变调夹计算器 ---- */
GTR.calcCapo = function() {
  var from = parseInt(document.getElementById('cp-from').value);
  var to = parseInt(document.getElementById('cp-to').value);
  var el = document.getElementById('cp-result');
  var keys = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  var diff = (to - from + 12) % 12;
  if (diff === 0) {
    el.innerHTML = '<p style="color:var(--acc);font-size:1.1em">原调和目标调相同，不需要变调夹。</p>';
    return;
  }
  if (diff > 6) {
    // 降调，变调夹无法实现
    el.innerHTML = '<div class="calc-warn">目标调比原调低 ' + (12 - diff) + ' 个半音。变调夹只能升调不能降调。<br>建议：用 <b>' + keys[to] + '</b> 调的和弦指法直接弹，不夹变调夹。<br>或反过来想：把原调当成 <b>' + keys[to] + '</b> 调指法，夹 ' + (12 - diff) + ' 品回到原调。</div>';
    return;
  }
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">原调</td><td class="cr-val">' + keys[from] + '</td></tr>' +
    '<tr><td class="cr-name">目标调</td><td class="cr-val">' + keys[to] + '</td></tr>' +
    '<tr><td class="cr-name">变调夹位置</td><td class="cr-val cr-good">第 ' + diff + ' 品</td></tr>' +
    '<tr><td class="cr-name">指法</td><td class="cr-val">用原调 ' + keys[from] + ' 的和弦指法</td></tr>' +
    '<tr><td class="cr-name">实际效果</td><td class="cr-val">夹 ' + diff + ' 品 + ' + keys[from] + ' 指法 = ' + keys[to] + ' 调</td></tr>' +
    '</table>' +
    '<p class="calc-note">夹第 ' + diff + ' 品后，所有空弦升高 ' + diff + ' 个半音。用 ' + keys[from] + ' 调指法弹出的音实际是 ' + keys[to] + ' 调。例如：原调 C 调歌，夹 2 品用 C 指法弹 = D 调。</p>';
};

/* ===== 模块页 ===== */
GTR.views.module = function(id) {
  var mod = GTR.modules.find(function(m) { return m.id === id; });
  if (!mod) { GTR.views.home(); return; }
  var P = GTR.progress();
  var lessons = GTR.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + GTR.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + GTR.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = GTR.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + GTR.esc(title) + '</a>';
    else html += '<span class="title">' + GTR.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  GTR.render(html);
};

/* ===== 术语 ===== */
GTR.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>吉他弹唱名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 和弦 / 扫弦 / 变调夹" oninput="GTR.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(GTR.terms) + '</div></div>';
  GTR.render(html);
};
GTR.filterTerms = function(q) {
  var filtered = GTR.terms;
  if (q) { q = q.toLowerCase();
    filtered = GTR.terms.filter(function(t) {
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
    html += '<div class="term-name">' + GTR.esc(t.name) + ' <span class="term-en">' + GTR.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + GTR.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + GTR.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
GTR.views.myTerms = function() {
  var P = GTR.progress(); var collected = [];
  for (var i = 0; i < GTR.terms.length; i++) if (P.hasTerm(GTR.terms[i].id)) collected.push(GTR.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  GTR.render(html);
};

/* ===== 搜索 ===== */
GTR.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 和弦 / 扫弦 / 变调夹" oninput="GTR.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  GTR.render(html);
};
GTR.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = GTR.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + GTR.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + GTR.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
GTR.views.settings = function() {
  var P = GTR.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="GTR.setTheme(\'dark\')">深色 · 暖金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="GTR.setTheme(\'light\')">浅色 · 琥珀</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="GTR.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="GTR.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="GTR.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = GTR.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/gtr-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/gtr-progress" value="' + GTR.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + GTR.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + GTR.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + GTR.esc(GTR.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="GTR.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="GTR.clearData()">清除数据</button></div>';
  html += '</div>';
  GTR.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    GTR.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!GTR.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    GTR.sync.pullNow().then(function () { return GTR.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + GTR.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    GTR.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : GTR.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    GTR.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
GTR.setTheme = function(t) { document.documentElement.dataset.theme = t; GTR.progress().setPref('theme', t); GTR.views.settings(); };
GTR.setFontSize = function(s) { document.documentElement.dataset.fs = s; GTR.progress().setPref('fontSize', s); GTR.views.settings(); };
GTR.exportData = function() {
  var data = GTR.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'gtr-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
GTR.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('gtr.progress.v1');
    window.location.reload();
  }
};
