/* 工具视图:五个健身互动工具(BMI 体成分 / 1RM 最大重量 / 心率区间 / 热量消耗 / 间歇计时器)+ 术语/搜索/设置/模块 */
window.FIT = window.FIT || {};
FIT.views = FIT.views || {};

FIT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
FIT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* 热量消耗 MET 表(代谢当量,概数) */
var METS = {
  walk3: 2.0, walk5: 3.5, jog8: 8.0, run10: 9.8, run12: 11.5,
  cycle: 7.0, swim: 7.0, rope: 10.0, strength: 5.0, hiit: 8.0,
  yoga: 3.0, badminton: 5.5, basketball: 6.5, hike: 7.3
};

/* ===== 工具总页 ===== */
FIT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">健身离不开"算"与"练":算体成分与热量、估最大重量、定心率区间、用计时器练间歇。这五个小工具全部在本地浏览器运行，<b>边练边用，把训练变成能上手的事</b>。</p>';

  // 1. BMI 体成分
  html += '<div class="calc-card">';
  html += '<h3><span class="g">○</span>BMI 体成分</h3>';
  html += '<p class="lab-desc">输入身高体重，计算 BMI 并给出中国成人体重分类，以及你的理想体重范围。BMI 只看身高体重，不能区分肌肉和脂肪，仅作参考。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>身高 cm <input type="number" id="bm-h" value="170" min="100" max="220"></label>';
  html += '<label>体重 kg <input type="number" id="bm-w" value="65" min="30" max="200"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="FIT.calcBMI()">计算</button></div>';
  html += '<div id="bm-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 1RM 最大重量
  html += '<div class="calc-card">';
  html += '<h3><span class="g">↑</span>1RM 最大重量</h3>';
  html += '<p class="lab-desc">输入你能举起的重量和重复次数（1-12 次），估算单次最大重量（1RM），并给出不同训练目标的建议负荷。次数越多估算越不准，建议 5-10 次较准。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>重量 kg <input type="number" id="rm-w" value="60" min="1" max="500"></label>';
  html += '<label>次数 <input type="number" id="rm-r" value="8" min="1" max="12"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="FIT.calc1RM()">计算</button></div>';
  html += '<div id="rm-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 心率区间
  html += '<div class="calc-card">';
  html += '<h3><span class="g">♥</span>心率区间</h3>';
  html += '<p class="lab-desc">输入年龄（可选静息心率），估算最大心率与 5 个训练心率区间。静息心率越低通常心肺越好；填了静息心率则用 Karvonen 公式（更个体化）。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年龄 <input type="number" id="hr-age" value="30" min="10" max="100"></label>';
  html += '<label>静息心率(选填) <input type="number" id="hr-rest" value="65" min="35" max="100"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="FIT.calcHR()">计算</button></div>';
  html += '<div id="hr-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 热量消耗
  html += '<div class="calc-card">';
  html += '<h3><span class="g">※</span>热量消耗</h3>';
  html += '<p class="lab-desc">选活动、输入体重和时长，按 MET（代谢当量）估算消耗热量。仅为概数，实际受强度、体能、地形等影响。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>活动 <select id="ca-act">';
  var actOpts = [
    ['walk3','步行(慢,3km/h)'],['walk5','快走(5km/h)'],['jog8','慢跑(8km/h)'],
    ['run10','跑步(10km/h)'],['run12','跑步(12km/h)'],['cycle','骑行(中速)'],
    ['swim','游泳(中等)'],['rope','跳绳'],['strength','力量训练'],
    ['hiit','高强度间歇 HIIT'],['yoga','瑜伽'],['badminton','羽毛球'],
    ['basketball','篮球'],['hike','爬山']
  ];
  for (var a = 0; a < actOpts.length; a++) html += '<option value="' + actOpts[a][0] + '">' + actOpts[a][1] + '</option>';
  html += '</select></label>';
  html += '<label>体重 kg <input type="number" id="ca-w" value="65" min="30" max="200"></label>';
  html += '<label>时长 分钟 <input type="number" id="ca-d" value="30" min="1" max="600"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="FIT.calcCal()">计算</button></div>';
  html += '<div id="ca-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 间歇计时器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⏱</span>间歇计时器</h3>';
  html += '<p class="lab-desc">HIIT/Tabata 计时器：设定工作秒数、休息秒数和轮数，开始后用提示音引导--工作高音、休息低音、最后 3 秒倒计时。预设 Tabata 为 20 秒工作 / 10 秒休息 / 8 轮。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>工作(秒) <input type="number" id="hi-work" value="20" min="5" max="300"></label>';
  html += '<label>休息(秒) <input type="number" id="hi-rest" value="10" min="0" max="300"></label>';
  html += '<label>轮数 <input type="number" id="hi-rounds" value="8" min="1" max="20"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" id="hi-toggle" onclick="FIT.toggleHIIT()">开始</button><button class="calc-btn" onclick="FIT.setHIITPreset(20,10,8)">Tabata 预设</button><button class="calc-btn" onclick="FIT.setHIITPreset(40,20,6)">经典 40/20</button></div>';
  html += '<div class="hiit-display" style="text-align:center;padding:22px;border:1px solid var(--line);border-radius:4px;margin-top:12px">';
  html += '<div id="hi-phase" style="font-family:var(--mono);font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;color:var(--note)">待开始</div>';
  html += '<div id="hi-cd" style="font-family:var(--serif);font-size:4rem;font-weight:600;color:var(--acc);line-height:1;margin:8px 0">--</div>';
  html += '<div id="hi-round" style="font-family:var(--mono);font-size:.78rem;color:var(--note)">第 0 / 0 轮</div>';
  html += '<div style="height:6px;background:var(--line);border-radius:3px;margin-top:14px;overflow:hidden"><div id="hi-bar" style="height:100%;width:0;background:var(--acc);transition:width 1s linear"></div></div>';
  html += '</div>';
  html += '</div>';

  html += '<p class="calc-note">说明：BMI 仅反映身高体重比，不能区分肌肉与脂肪；1RM 为估算值（Epley/Brzycki 公式），实际最大重量请有保护下测试；心率区间为群体估算，个体差异大；热量消耗基于 MET 代谢当量，为概数；间歇计时器使用 Web Audio API 发声。涉及伤病请遵医嘱。</p>';
  html += '</div>';
  FIT.render(html);
  FIT.calcBMI(); FIT.calc1RM(); FIT.calcHR(); FIT.calcCal();
};

/* ---- 1. BMI ---- */
FIT.calcBMI = function() {
  var h = FIT._num('bm-h'), w = FIT._num('bm-w'), el = document.getElementById('bm-result');
  if (!h || !w || h < 50 || w < 10) { el.innerHTML = '<p class="calc-warn">请输入合理的身高体重。</p>'; return; }
  var hm = h / 100;
  var bmi = w / (hm * hm);
  var cat, cls;
  if (bmi < 18.5) { cat = '偏瘦'; cls = 'cr-warn'; }
  else if (bmi < 24) { cat = '正常'; cls = 'cr-good'; }
  else if (bmi < 28) { cat = '超重'; cls = 'cr-warn'; }
  else { cat = '肥胖'; cls = 'cr-warn'; }
  var lo = 18.5 * hm * hm, hi = 24 * hm * hm;
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">BMI</td><td class="cr-val ' + cls + '">' + FIT._fix(bmi, 1) + '</td></tr>' +
    '<tr><td class="cr-name">分类</td><td class="cr-val ' + cls + '">' + cat + '</td></tr>' +
    '<tr><td class="cr-name">理想体重范围</td><td class="cr-val">' + FIT._fix(lo, 1) + ' - ' + FIT._fix(hi, 1) + ' kg</td></tr>' +
    '</table><p class="calc-note">中国成人标准：18.5-23.9 正常，24-27.9 超重，≥28 肥胖。BMI 不区分肌肉与脂肪，健身者可能偏高但仍健康。</p>';
};

/* ---- 2. 1RM ---- */
FIT.calc1RM = function() {
  var w = FIT._num('rm-w'), r = FIT._num('rm-r'), el = document.getElementById('rm-result');
  if (!w || !r || r < 1) { el.innerHTML = '<p class="calc-warn">请输入重量和次数（1-12）。</p>'; return; }
  r = Math.min(Math.round(r), 12);
  var epley = w * (1 + r / 30);
  var brzycki = w * 36 / (37 - r);
  var one = (epley + brzycki) / 2;
  var rows = [[0.95, '1-2'], [0.90, '4'], [0.85, '6'], [0.80, '8'], [0.75, '10'], [0.70, '12']];
  var t = '<table class="cr-table">';
  for (var i = 0; i < rows.length; i++) {
    t += '<tr><td class="cr-name">' + Math.round(rows[i][0] * 100) + '% 1RM</td><td>约 ' + rows[i][1] + ' 次</td><td class="cr-val">' + FIT._fix(one * rows[i][0], 1) + ' kg</td></tr>';
  }
  t += '</table>';
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">Epley 估算</td><td class="cr-val">' + FIT._fix(epley, 1) + ' kg</td></tr>' +
    '<tr><td class="cr-name">Brzycki 估算</td><td class="cr-val">' + FIT._fix(brzycki, 1) + ' kg</td></tr>' +
    '<tr><td class="cr-name">综合 1RM</td><td class="cr-val cr-good">' + FIT._fix(one, 1) + ' kg</td></tr>' +
    '</table>' +
    '<p class="calc-note" style="margin-top:12px">训练负荷参考（占 1RM 百分比）：</p>' + t +
    '<p class="calc-note">力量（1-5 次）用 85% 以上，肌肥大（8-12 次）用 70-80%，耐力（15+ 次）用 60% 左右。</p>';
};

/* ---- 3. 心率区间 ---- */
FIT.calcHR = function() {
  var age = FIT._num('hr-age'), rest = FIT._num('hr-rest'), el = document.getElementById('hr-result');
  if (!age || age < 10) { el.innerHTML = '<p class="calc-warn">请输入年龄。</p>'; return; }
  var max = 208 - 0.7 * age;       // Tanaka
  var maxOld = 220 - age;
  var useK = rest && rest >= 35 && rest < max;
  var zones = [
    [0.5, 0.6, '热身 / 恢复', '轻度，适合热身、放松、恢复跑'],
    [0.6, 0.7, '燃脂 / 基础有氧', '可长时间维持，减脂入门'],
    [0.7, 0.8, '有氧耐力', '提升心肺，长跑主训练区'],
    [0.8, 0.9, '无氧阈值', '乳酸拐点附近，提升耐力上限'],
    [0.9, 1.0, '最大摄氧', '高强度间歇，难以长时间维持']
  ];
  var t = '<table class="cr-table">';
  for (var i = 0; i < zones.length; i++) {
    var z = zones[i];
    var lo = useK ? Math.round((max - rest) * z[0] + rest) : Math.round(max * z[0]);
    var hi = useK ? Math.round((max - rest) * z[1] + rest) : Math.round(max * z[1]);
    t += '<tr><td class="cr-name">' + z[2] + '</td><td>' + Math.round(z[0] * 100) + '-' + Math.round(z[1] * 100) + '%</td><td class="cr-val">' + lo + '-' + hi + ' bpm</td></tr>';
  }
  t += '</table>';
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">最大心率(Tanaka)</td><td class="cr-val cr-good">' + Math.round(max) + ' bpm</td></tr>' +
    '<tr><td class="cr-name">传统公式(220-年龄)</td><td class="cr-val">' + Math.round(maxOld) + ' bpm</td></tr>' +
    (useK ? '<tr><td class="cr-name">静息心率</td><td class="cr-val">' + Math.round(rest) + ' bpm（已用 Karvonen）</td></tr>' : '') +
    '</table>' +
    '<p class="calc-note" style="margin-top:12px">训练心率区间：</p>' + t +
    '<p class="calc-note">最大心率为群体估算，个体差异可达 10-12 bpm。若有条件，以实测为准。</p>';
};

/* ---- 4. 热量消耗 ---- */
FIT.calcCal = function() {
  var sel = document.getElementById('ca-act');
  var act = sel.value, w = FIT._num('ca-w'), d = FIT._num('ca-d'), el = document.getElementById('ca-result');
  if (!w || !d) { el.innerHTML = '<p class="calc-warn">请输入体重和时长。</p>'; return; }
  var met = METS[act] || 5;
  var kcal = met * w * (d / 60);
  var bowls = kcal / 116;
  var actName = sel.selectedOptions[0].textContent;
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">活动</td><td class="cr-val">' + FIT.esc(actName) + '</td></tr>' +
    '<tr><td class="cr-name">MET</td><td class="cr-val">' + met + '</td></tr>' +
    '<tr><td class="cr-name">消耗热量</td><td class="cr-val cr-good">' + Math.round(kcal) + ' 千卡</td></tr>' +
    '<tr><td class="cr-name">约相当于</td><td class="cr-val">' + bowls.toFixed(1) + ' 碗米饭（约116千卡/碗）</td></tr>' +
    '</table><p class="calc-note">公式：热量 = MET × 体重(kg) × 时长(小时)。运动消耗只是每日总消耗的一部分，基础代谢占大头。</p>';
};

/* ---- 5. 间歇计时器(HIIT) ---- */
FIT._hiit = null;
FIT.toggleHIIT = function() {
  var btn = document.getElementById('hi-toggle');
  if (FIT._hiit) { FIT.stopHIIT(); btn.textContent = '开始'; btn.classList.remove('active'); return; }
  var work = Math.max(5, parseInt(document.getElementById('hi-work').value) || 20);
  var rest = Math.max(0, parseInt(document.getElementById('hi-rest').value) || 10);
  var rounds = Math.max(1, parseInt(document.getElementById('hi-rounds').value) || 8);
  var ac = new (window.AudioContext || window.webkitAudioContext)();
  FIT._hiit = { work: work, rest: rest, rounds: rounds, round: 1, phase: 'work', remaining: work, ac: ac, timer: null };
  btn.textContent = '停止'; btn.classList.add('active');
  FIT._hiitBeep(880, 0.15);
  FIT._hiitRender();
  FIT._hiit.timer = setInterval(FIT._hiitTick, 1000);
};
FIT._hiitTick = function() {
  var s = FIT._hiit; if (!s) return;
  s.remaining--;
  if (s.remaining <= 3 && s.remaining > 0) FIT._hiitBeep(660, 0.08);
  if (s.remaining <= 0) {
    if (s.phase === 'work') {
      if (s.round >= s.rounds && s.rest === 0) { FIT._hiitDone(); return; }
      if (s.rest > 0) { s.phase = 'rest'; s.remaining = s.rest; FIT._hiitBeep(440, 0.15); }
      else { s.round++; s.phase = 'work'; s.remaining = s.work; FIT._hiitBeep(880, 0.15); }
    } else {
      if (s.round >= s.rounds) { FIT._hiitDone(); return; }
      s.round++; s.phase = 'work'; s.remaining = s.work; FIT._hiitBeep(880, 0.15);
    }
  }
  FIT._hiitRender();
};
FIT._hiitDone = function() {
  FIT._hiitBeep(880, 0.25); setTimeout(function () { FIT._hiitBeep(660, 0.25); }, 220);
  FIT.stopHIIT();
  var btn = document.getElementById('hi-toggle');
  if (btn) { btn.textContent = '再来一轮'; btn.classList.remove('active'); }
  var ph = document.getElementById('hi-phase');
  if (ph) { ph.textContent = '完成 ✓'; ph.style.color = 'var(--ok)'; }
  var cd = document.getElementById('hi-cd'); if (cd) cd.textContent = '✓';
};
FIT.stopHIIT = function() {
  if (FIT._hiit) { clearInterval(FIT._hiit.timer); try { FIT._hiit.ac.close(); } catch (e) {} FIT._hiit = null; }
};
FIT._hiitBeep = function(freq, dur) {
  var s = FIT._hiit; if (!s || !s.ac) return;
  var osc = s.ac.createOscillator(), g = s.ac.createGain();
  osc.frequency.value = freq; osc.type = 'sine';
  g.gain.setValueAtTime(0.25, s.ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.01, s.ac.currentTime + dur);
  osc.connect(g); g.connect(s.ac.destination);
  osc.start(); osc.stop(s.ac.currentTime + dur);
};
FIT._hiitRender = function() {
  var s = FIT._hiit; if (!s) return;
  var ph = document.getElementById('hi-phase'), cd = document.getElementById('hi-cd'), rd = document.getElementById('hi-round'), bar = document.getElementById('hi-bar');
  if (ph) { ph.textContent = s.phase === 'work' ? '工作中' : '休息中'; ph.style.color = s.phase === 'work' ? 'var(--acc)' : 'var(--acc2)'; }
  if (cd) cd.textContent = s.remaining;
  if (rd) rd.textContent = '第 ' + s.round + ' / ' + s.rounds + ' 轮';
  if (bar) {
    var total = s.phase === 'work' ? s.work : s.rest;
    bar.style.width = (total > 0 ? (s.remaining / total * 100) : 0) + '%';
    bar.style.background = s.phase === 'work' ? 'var(--acc)' : 'var(--acc2)';
  }
};
FIT.setHIITPreset = function(w, r, rounds) {
  document.getElementById('hi-work').value = w;
  document.getElementById('hi-rest').value = r;
  document.getElementById('hi-rounds').value = rounds;
};

/* ===== 模块页 ===== */
FIT.views.module = function(id) {
  var mod = FIT.modules.find(function(m) { return m.id === id; });
  if (!mod) { FIT.views.home(); return; }
  var P = FIT.progress();
  var lessons = FIT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + FIT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + FIT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = FIT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + FIT.esc(title) + '</a>';
    else html += '<span class="title">' + FIT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  FIT.render(html);
};

/* ===== 术语 ===== */
FIT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>健身与运动名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 深蹲 / 心率 / 渐进超负荷" oninput="FIT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(FIT.terms) + '</div></div>';
  FIT.render(html);
};
FIT.filterTerms = function(q) {
  var filtered = FIT.terms;
  if (q) { q = q.toLowerCase();
    filtered = FIT.terms.filter(function(t) {
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
    html += '<div class="term-name">' + FIT.esc(t.name) + ' <span class="term-en">' + FIT.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + FIT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + FIT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
FIT.views.myTerms = function() {
  var P = FIT.progress(); var collected = [];
  for (var i = 0; i < FIT.terms.length; i++) if (P.hasTerm(FIT.terms[i].id)) collected.push(FIT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  FIT.render(html);
};

/* ===== 搜索 ===== */
FIT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 深蹲 / 心率 / 渐进超负荷" oninput="FIT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  FIT.render(html);
};
FIT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = FIT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + FIT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + FIT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
FIT.views.settings = function() {
  var P = FIT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="FIT.setTheme(\'dark\')">深色 · 深林</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="FIT.setTheme(\'light\')">浅色 · 草绿</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="FIT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="FIT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="FIT.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = FIT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/fit-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/fit-progress" value="' + FIT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + FIT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + FIT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + FIT.esc(FIT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="FIT.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="FIT.clearData()">清除数据</button></div>';
  html += '</div>';
  FIT.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    FIT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!FIT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    FIT.sync.pullNow().then(function () { return FIT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + FIT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    FIT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : FIT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    FIT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
FIT.setTheme = function(t) { document.documentElement.dataset.theme = t; FIT.progress().setPref('theme', t); FIT.views.settings(); };
FIT.setFontSize = function(s) { document.documentElement.dataset.fs = s; FIT.progress().setPref('fontSize', s); FIT.views.settings(); };
FIT.exportData = function() {
  var data = FIT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'fit-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
FIT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('fit.progress.v1');
    window.location.reload();
  }
};
