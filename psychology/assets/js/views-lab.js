/* 互动实验室:① 斯特鲁普效应 ② 视错觉画廊 ③ 锚定效应演示 ④ 记忆序列位置
   全部纯前端、离线、自包含;为可亲身体验的经典实验演示,结果仅供自我观察,非诊断。 */
window.PSY = window.PSY || {};
PSY.views = PSY.views || {};

PSY.views.lab = function(sub) {
  if (sub === 'stroop') return labStroop();
  if (sub === 'illusion') return labIllusion();
  if (sub === 'anchor') return labAnchor();
  if (sub === 'serial') return labSerial();
  return labIndex();
};

function labIndex() {
  var h = '<div class="tool-head"><h1 class="page">互动实验室</h1>' +
    '<p class="sub">心理学最迷人的地方,是很多结论你能<b>亲身体验</b>。下面四个经典演示都在你浏览器里跑,离线、不上传任何数据——亲手玩一遍,比读十遍更懂。</p></div>';
  h += '<div class="lab-grid">';
  h += labCard('stroop', '斯特鲁普效应', 'S', '说出字的"颜色"而不是字义,你会明显变慢——大脑自动读字,很难关掉。亲手测一测你的干扰有多大。');
  h += labCard('illusion', '视错觉画廊', 'I', '等长的线看着不一样长、等大的圆看着有大有小。点"显示真相"看看你的眼睛是怎么被骗的。');
  h += labCard('anchor', '锚定效应演示', 'A', '先给你一个数字,你的估计就会被它"拽过去"。做个小实验,看看锚是怎么悄悄影响你的。');
  h += labCard('serial', '记忆序列位置', 'M', '记一串词,你会更记得开头和结尾、忘掉中间——首因与近因效应。测测你的记忆曲线。');
  h += '</div>';
  PSY.render(h);
}

function labCard(sub, title, ic, desc) {
  return '<a class="labcard" href="#/lab/' + sub + '"><div class="ic">' + ic + '</div>' +
    '<h3>' + title + '</h3><p>' + desc + '</p></a>';
}
function labBack() { return '<div class="crumb"><a href="#/lab">互动实验室</a> / 演示</div>'; }

/* ==================== ① 斯特鲁普效应 ==================== */
var STR = {
  colors: [
    { name: '红', css: '#e03131' },
    { name: '绿', css: '#2f9e44' },
    { name: '蓝', css: '#1c7ed6' },
    { name: '黄', css: '#f08c00' }
  ],
  trials: [], i: 0, t0: 0, results: []
};

function strMake() {
  STR.trials = []; STR.i = 0; STR.results = [];
  for (var k = 0; k < 10; k++) {
    var w = Math.floor(Math.random() * 4);          // 字义
    var ink;                                          // 墨色
    var congruent = k < 2;                            // 前两题一致(热身)
    if (congruent) ink = w;
    else { do { ink = Math.floor(Math.random() * 4); } while (ink === w); }
    STR.trials.push({ word: w, ink: ink, congruent: ink === w });
  }
}

function labStroop() {
  strMake();
  var h = labBack();
  h += '<h1 class="page">斯特鲁普效应</h1>';
  h += '<p class="sub">下面会出现一个<b>字</b>,你的任务是又快又准地点出它的<b>颜色</b>(墨水的颜色),<b>不是</b>它写的字义。共 10 题,留意"字和颜色不一致"时你是不是慢了下来。</p>';
  h += '<div class="panel" id="str-stage"></div>';
  h += '<div id="str-out"></div>';
  h += '<p class="warnnote">这是约翰·斯特鲁普 1935 年的经典发现:阅读对识字的人是<b>自动化</b>的,想"不读字、只看颜色"会引发冲突,反应变慢、易出错。这说明很多心理过程并不受意识完全控制。</p>';
  PSY.render(h);
  strRender();
}

PSY.strPick = function(idx) {
  var tr = STR.trials[STR.i];
  var rt = Date.now() - STR.t0;
  STR.results.push({ correct: idx === tr.ink, rt: rt, congruent: tr.congruent });
  STR.i++;
  if (STR.i >= STR.trials.length) strSummary();
  else strRender();
};

function strRender() {
  var stage = document.getElementById('str-stage');
  if (!stage) return;
  var tr = STR.trials[STR.i];
  var h = '<div style="text-align:center;padding:10px 0 18px">';
  h += '<div style="font-family:var(--mono);font-size:12px;color:var(--ink-dim)">第 ' + (STR.i + 1) + ' / ' + STR.trials.length + ' 题 · 点"颜色"</div>';
  h += '<div style="font-size:72px;font-weight:800;margin:18px 0;color:' + STR.colors[tr.ink].css + '">' + STR.colors[tr.word].name + '</div>';
  h += '<div class="chips" style="justify-content:center">';
  for (var c = 0; c < STR.colors.length; c++) {
    h += '<button class="chip" style="border-color:' + STR.colors[c].css + ';color:' + STR.colors[c].css + '" onclick="PSY.strPick(' + c + ')">' + STR.colors[c].name + '</button>';
  }
  h += '</div></div>';
  stage.innerHTML = h;
  STR.t0 = Date.now();
}

function strSummary() {
  var stage = document.getElementById('str-stage');
  var con = STR.results.filter(function(r) { return r.congruent; });
  var inc = STR.results.filter(function(r) { return !r.congruent; });
  function avg(a) { return a.length ? Math.round(a.reduce(function(s, r) { return s + r.rt; }, 0) / a.length) : 0; }
  var acc = Math.round(STR.results.filter(function(r) { return r.correct; }).length / STR.results.length * 100);
  var conAvg = avg(con), incAvg = avg(inc);
  var diff = incAvg - conAvg;
  if (stage) stage.innerHTML = '<div style="text-align:center;padding:16px"><h3>测完啦</h3>' +
    '<p style="font-size:14px;margin-top:8px">正确率 <b style="color:var(--accent)">' + acc + '%</b></p>' +
    '<p style="font-family:var(--mono);font-size:13px;margin-top:8px">一致(字=色)平均 ' + conAvg + ' ms　·　不一致平均 ' + incAvg + ' ms</p>' +
    '<p style="font-size:15px;margin-top:10px"><b>斯特鲁普干扰 ≈ <span style="color:var(--accent)">' + (diff > 0 ? '+' + diff : diff) + ' ms</span></b></p>' +
    '<button class="btn solid" style="margin-top:14px" onclick="PSY.views.lab(\'stroop\')">再测一次</button></div>';
  var out = document.getElementById('str-out');
  if (out) out.innerHTML = '<div class="panel"><p style="font-size:13.5px;color:var(--ink-dim)">' +
    (diff > 60 ? '你在"不一致"时明显变慢了——这正是斯特鲁普效应:大脑忍不住先读字,再去压制它,这个"压制"要花时间。' :
     diff > 0 ? '你也出现了干扰(慢了一点),只是控制得不错。多数人在不一致条件下都会变慢。' :
     '这次差异不大,可能题量少或你状态好;严格实验里几十次平均后,干扰几乎总会出现。') + '</p></div>';
}

/* ==================== ② 视错觉画廊 ==================== */
var ILL = { show: false };

function labIllusion() {
  var h = labBack();
  h += '<h1 class="page">视错觉画廊</h1>';
  h += '<p class="sub">"眼见为实"并不总成立。下面几张图,先凭直觉判断,再点按钮看真相——感受一下大脑是怎么"脑补"和被骗的。</p>';
  h += '<div style="margin:12px 0"><button class="btn solid" onclick="PSY.illToggle()" id="ill-btn">显示真相 / 参考线</button></div>';
  h += '<div id="ill-stage"></div>';
  h += '<p class="warnnote">错觉不是"眼睛坏了",而是大脑用一套高效的"假设"去解释世界——大多数时候很准,偶尔会被特意设计的图形钻空子。这提醒我们:知觉是大脑主动<b>建构</b>的,不是被动拍照。</p>';
  PSY.render(h);
  illRender();
}

PSY.illToggle = function() {
  ILL.show = !ILL.show;
  var b = document.getElementById('ill-btn');
  if (b) b.textContent = ILL.show ? '隐藏参考' : '显示真相 / 参考线';
  illRender();
};

function illRender() {
  var stage = document.getElementById('ill-stage');
  if (!stage) return;
  var ref = ILL.show;
  var ac = 'var(--accent)';
  // 缪勒-莱耶错觉:两条等长线,箭头方向相反
  var ml = '<figure class="fig"><svg viewBox="0 0 360 150" width="100%" style="max-width:420px">' +
    '<line x1="60" y1="50" x2="300" y2="50" class="f-line" stroke-width="3"/>' +
    '<line x1="60" y1="50" x2="80" y2="38" class="f-line" stroke-width="3"/><line x1="60" y1="50" x2="80" y2="62" class="f-line" stroke-width="3"/>' +
    '<line x1="300" y1="50" x2="280" y2="38" class="f-line" stroke-width="3"/><line x1="300" y1="50" x2="280" y2="62" class="f-line" stroke-width="3"/>' +
    '<line x1="60" y1="105" x2="300" y2="105" class="f-line" stroke-width="3"/>' +
    '<line x1="60" y1="105" x2="40" y2="93" class="f-line" stroke-width="3"/><line x1="60" y1="105" x2="40" y2="117" class="f-line" stroke-width="3"/>' +
    '<line x1="300" y1="105" x2="320" y2="93" class="f-line" stroke-width="3"/><line x1="300" y1="105" x2="320" y2="117" class="f-line" stroke-width="3"/>' +
    (ref ? '<line x1="60" y1="20" x2="60" y2="135" stroke="' + ac + '" stroke-width="1" stroke-dasharray="3 3"/><line x1="300" y1="20" x2="300" y2="135" stroke="' + ac + '" stroke-width="1" stroke-dasharray="3 3"/>' : '') +
    '</svg><figcaption>缪勒-莱耶错觉:上下两条线' + (ref ? '<b>其实等长</b>(看虚线两端对齐)' : '哪条更长?') + '</figcaption></figure>';
  // 艾宾浩斯错觉:两个等大中心圆,被不同大小的圆环绕
  function circ(cx, big) {
    var s = '<circle cx="' + cx + '" cy="75" r="16" class="f-arr"/>';
    var n = 6, R = big ? 46 : 26, rr = big ? 16 : 7;
    for (var k = 0; k < n; k++) {
      var a = k / n * Math.PI * 2;
      s += '<circle cx="' + (cx + Math.cos(a) * R) + '" cy="' + (75 + Math.sin(a) * R) + '" r="' + rr + '" class="f-box" fill="var(--accent-soft)"/>';
    }
    return s;
  }
  var eb = '<figure class="fig"><svg viewBox="0 0 360 150" width="100%" style="max-width:420px">' +
    circ(95, true) + circ(265, false) +
    (ref ? '<line x1="79" y1="75" x2="111" y2="75" stroke="' + ac + '" stroke-width="1.5"/><line x1="249" y1="75" x2="281" y2="75" stroke="' + ac + '" stroke-width="1.5"/>' : '') +
    '</svg><figcaption>艾宾浩斯错觉:中间两个橙色圆' + (ref ? '<b>其实一样大</b>(看参考横线)' : '哪个更大?') + '——周围的圆改变了你的判断</figcaption></figure>';
  stage.innerHTML = ml + eb;
}

/* ==================== ③ 锚定效应演示 ==================== */
var ANC = { anchor: 0, high: false, step: 0 };

function labAnchor() {
  ANC.high = Math.random() < 0.5;
  ANC.anchor = ANC.high ? 1200 : 50;
  ANC.step = 0;
  var h = labBack();
  h += '<h1 class="page">锚定效应演示</h1>';
  h += '<p class="sub">先回答一个小问题,再做估计。做完会告诉你刚才发生了什么——建议先别往下看说明,凭直觉答。</p>';
  h += '<div class="panel" id="anc-stage"></div>';
  h += '<p class="warnnote">锚定效应(特沃斯基与卡尼曼):一个先出现的数字,哪怕明显无关,也会把你的估计"拽"向它。它无处不在——原价划线、第一次报价、谈判开价,都是在给你下锚。知道它,才好抵抗它。</p>';
  PSY.render(h);
  ancRender();
}

PSY.ancNext = function() {
  var inp = document.getElementById('anc-input');
  if (inp) ANC.guess = parseFloat(inp.value);
  ANC.step = 1;
  ancRender();
};

function ancRender() {
  var stage = document.getElementById('anc-stage');
  if (!stage) return;
  if (ANC.step === 0) {
    stage.innerHTML =
      '<p style="font-size:15px">问题 1:你觉得<b>一棵成年橡树的高度</b>,比 <b style="color:var(--accent)">' + ANC.anchor + ' 米</b> 更高,还是更矮?</p>' +
      '<p style="font-size:15px;margin-top:14px">问题 2:那么你<b>具体估计</b>它大约多少米?</p>' +
      '<div class="ctrl" style="margin-top:8px"><input class="field" id="anc-input" type="number" placeholder="输入你的估计(米)" style="max-width:220px"></div>' +
      '<button class="btn solid" style="margin-top:10px" onclick="PSY.ancNext()">看看结果</button>';
  } else {
    var anchorTxt = ANC.high ? '一个偏高的锚(1200 米)' : '一个偏低的锚(50 米)';
    stage.innerHTML =
      '<p style="font-size:15px">你的估计是 <b style="color:var(--accent)">' + (isNaN(ANC.guess) ? '(没填)' : ANC.guess + ' 米') + '</b>。</p>' +
      '<p style="font-size:14px;margin-top:10px">刚才那个"比 X 米高还是矮"的 X,是随机给你的<b>' + anchorTxt + '</b>。成年橡树通常 20–30 米左右。</p>' +
      '<p style="font-size:14px;margin-top:10px">研究反复发现:拿到<b>高锚</b>的人,估计会明显偏高;拿到<b>低锚</b>的人,会偏低——哪怕大家都知道这个数字是随便给的。你可以刷新再试另一个锚,对比一下自己。</p>' +
      '<button class="btn solid" style="margin-top:12px" onclick="PSY.views.lab(\'anchor\')">换个锚再来</button>';
  }
}

/* ==================== ④ 记忆序列位置 ==================== */
var SER = {
  pool: ['苹果', '桌子', '河流', '钢笔', '老虎', '云朵', '钥匙', '森林', '镜子', '面包', '风筝', '石头', '蜡烛', '号角', '雪花'],
  list: [], timer: null, idx: 0
};

function labSerial() {
  SER.list = SER.pool.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 12);
  SER.idx = 0;
  var h = labBack();
  h += '<h1 class="page">记忆序列位置</h1>';
  h += '<p class="sub">屏幕会一个一个闪过 12 个词,请尽量记住。放完后凭记忆把记得的词打出来(顺序不限)。看看你更记得哪些位置。</p>';
  h += '<div class="panel" id="ser-stage"><div style="text-align:center;padding:20px"><button class="btn solid" onclick="PSY.serStart()">开始(约 12 秒)</button></div></div>';
  h += '<p class="warnnote">多数人会更记得<b>开头</b>(首因效应:进了长时记忆)和<b>结尾</b>(近因效应:还在短时记忆里),中间最容易忘——这就是"序列位置曲线",由此可推断记忆分多个系统。</p>';
  PSY.render(h);
}

PSY.serStart = function() {
  var stage = document.getElementById('ser-stage');
  SER.idx = 0;
  function tick() {
    if (SER.idx >= SER.list.length) { serRecall(); return; }
    stage.innerHTML = '<div style="text-align:center;padding:36px 0"><div style="font-size:48px;font-weight:800;color:var(--accent)">' + SER.list[SER.idx] + '</div></div>';
    SER.idx++;
    SER.timer = setTimeout(tick, 900);
  }
  tick();
};

function serRecall() {
  var stage = document.getElementById('ser-stage');
  stage.innerHTML = '<p style="font-size:15px">把你记得的词打出来(用空格或逗号隔开,顺序不限):</p>' +
    '<textarea class="field" id="ser-input" style="min-height:70px;margin:8px 0"></textarea>' +
    '<button class="btn solid" onclick="PSY.serCheck()">提交</button>';
}

PSY.serCheck = function() {
  var v = (document.getElementById('ser-input').value || '').replace(/[,，、]/g, ' ');
  var got = {};
  v.split(/\s+/).forEach(function(w) { if (w) got[w.trim()] = true; });
  var stage = document.getElementById('ser-stage');
  var hit = 0;
  var row = '<div style="display:flex;gap:5px;flex-wrap:wrap;margin:10px 0">';
  SER.list.forEach(function(w, i) {
    var ok = !!got[w]; if (ok) hit++;
    row += '<span class="chip' + (ok ? ' on' : '') + '" style="cursor:default">' + (i + 1) + '.' + w + (ok ? ' ✓' : '') + '</span>';
  });
  row += '</div>';
  var firstThird = SER.list.slice(0, 4), lastThird = SER.list.slice(8), mid = SER.list.slice(4, 8);
  function rate(arr) { var c = arr.filter(function(w) { return got[w]; }).length; return Math.round(c / arr.length * 100); }
  stage.innerHTML = '<p style="font-size:15px">记对 <b style="color:var(--accent)">' + hit + ' / 12</b></p>' + row +
    '<p style="font-family:var(--mono);font-size:13px">开头 4 个:' + rate(firstThird) + '%　·　中间 4 个:' + rate(mid) + '%　·　结尾 4 个:' + rate(lastThird) + '%</p>' +
    '<p style="font-size:13.5px;color:var(--ink-dim);margin-top:8px">' +
    (rate(firstThird) + rate(lastThird) > rate(mid) * 2 - 1 ? '看到了吗?开头和结尾的命中率通常高于中间——首因与近因效应活生生出现在你身上。' : '样本只有一次、词不多,曲线可能不明显;多做几次或增加词数,U 形会更清楚。') + '</p>' +
    '<button class="btn solid" style="margin-top:12px" onclick="PSY.views.lab(\'serial\')">再来一次</button>';
};
