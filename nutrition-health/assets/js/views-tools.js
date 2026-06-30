/* 工具视图:四个营养互动工具(BMI / 每日能量 TDEE / 营养素推荐量 DRI / 食物红绿灯)+ 术语/搜索/设置/模块 */
window.NH = window.NH || {};
NH.views = NH.views || {};

NH._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
NH._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
function crRow(name, val, formula) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val cr-good">' + val + '</td><td class="cr-formula">' + (formula || '') + '</td></tr>';
}

/* ===== 工具总页 ===== */
NH.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">营养离不开"算":该吃多少能量、体重落在哪一档、每天需要多少钙铁、某种食物该不该常吃。这四个小工具全部在本地浏览器实时运算,<b>边读边算,把抽象的营养素变成能上手的数</b>。结果均为概念性估算,不替代个体化营养方案。</p>';

  // 1. BMI 与体重判定
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◴</span>BMI 与体重判定</h3>';
  html += '<p class="lab-desc">BMI = 体重 ÷ 身高²(单位 kg/m²)。这里用中国标准:<18.5 偏瘦、18.5—23.9 正常、24—27.9 超重、≥28 肥胖。可填腰围看中心性肥胖风险。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>身高（cm） <input type="number" id="bmi-h" placeholder="如 170"></label>';
  html += '<label>体重（kg） <input type="number" id="bmi-w" placeholder="如 65"></label>';
  html += '<label>腰围（cm，可选） <input type="number" id="bmi-waist" placeholder="如 80"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NH.calcBMI()">判定</button></div>';
  html += '<div id="bmi-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 每日能量 TDEE
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>每日能量需求 TDEE</h3>';
  html += '<p class="lab-desc">基础代谢(BMR)用 Mifflin-St Jeor 公式估算,再乘活动量得每日总能耗(TDEE),并按比例给出三大宏量营养素参考量。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>性别 <select id="t-gender"><option value="m">男</option><option value="f">女</option></select></label>';
  html += '<label>年龄 <input type="number" id="t-age" placeholder="如 30"></label>';
  html += '<label>身高（cm） <input type="number" id="t-h" placeholder="如 170"></label>';
  html += '<label>体重（kg） <input type="number" id="t-w" placeholder="如 65"></label>';
  html += '<label>活动量 <select id="t-act">' +
          '<option value="1.2">久坐（办公室、少运动）</option>' +
          '<option value="1.375">轻度（每周 1—3 次）</option>' +
          '<option value="1.55" selected>中度（每周 3—5 次）</option>' +
          '<option value="1.725">重度（每周 6—7 次）</option>' +
          '<option value="1.9">极重（体力劳动/运动员）</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NH.calcTDEE()">计算</button></div>';
  html += '<div id="tdee-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 营养素推荐量 DRI
  html += '<div class="calc-card">';
  html += '<h3><span class="g">∿</span>营养素推荐量速查</h3>';
  html += '<p class="lab-desc">按性别与年龄段查《中国居民膳食营养素参考摄入量(2023)》的几个关键指标:能量、蛋白质、钙、铁、维生素 C、维生素 D。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>性别 <select id="d-gender"><option value="m">男</option><option value="f">女</option></select></label>';
  html += '<label>年龄段 <select id="d-age">' +
          '<option value="child">儿童（1—10 岁）</option>' +
          '<option value="teen">青少年（11—17 岁）</option>' +
          '<option value="adult" selected>成人（18—64 岁）</option>' +
          '<option value="elder">老年（65 岁及以上）</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NH.calcDRI()">查询</button></div>';
  html += '<div id="dri-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 食物红绿灯
  html += '<div class="calc-card">';
  html += '<h3><span class="g">☼</span>食物红绿灯</h3>';
  html += '<p class="lab-desc">按加工程度与营养密度给常见食物分级:绿灯常吃、黄灯适量、红灯少碰。没有"绝对不能吃",只有"该常吃还是少吃"。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>选一种食物 <select id="fl-food">' +
          '<option value="">请选择…</option>' +
          '<option value="whole-grain|绿|全谷物:保留麸皮胚芽,纤维与 B 族丰富,常吃。">全麦面包 / 糙米</option>' +
          '<option value="oat|绿|燕麦:可溶性纤维 β-葡聚糖丰富,利于控糖降脂。">燕麦</option>' +
          '<option value="veg|绿|蔬菜:低能量、高纤维、高微量营养素,餐餐都该有。">蔬菜</option>' +
          '<option value="fruit|绿|水果:维生素与纤维来源,适量吃,不榨汁更好。">水果</option>' +
          '<option value="fish|绿|鱼:优质蛋白与 n-3 脂肪酸,建议每周有。">鱼</option>' +
          '<option value="chicken-breast|绿|鸡胸肉:高蛋白低脂,常见蛋白来源。">鸡胸肉</option>' +
          '<option value="egg|绿|鸡蛋:营养全面,蛋白利用高,适量吃。">鸡蛋</option>' +
          '<option value="tofu|绿|豆腐:植物蛋白与钙,常吃无妨。">豆腐</option>' +
          '<option value="milk|绿|牛奶:钙与蛋白的好来源,推荐每天。">牛奶</option>' +
          '<option value="nuts|黄|坚果:好脂肪与矿物质,但能量高,一小把为宜。">坚果</option>' +
          '<option value="olive-oil|黄|橄榄油:单不饱和脂肪好,但仍是油,控量。">橄榄油</option>' +
          '<option value="white-rice|黄|白米饭:精制碳水,GI 偏高,搭配粗粮更稳。">白米饭</option>' +
          '<option value="juice|黄|果汁:滤掉纤维、糖浓缩,不如直接吃水果。">果汁</option>' +
          '<option value="french-fries|红|薯条:高温油炸,高脂高盐高能量,少碰。">薯条</option>' +
          '<option value="sugary-drink|红|含糖饮料:空能量、升糖快,与肥胖和慢病相关,少喝。">含糖饮料</option>' +
          '<option value="processed-meat|红|加工肉:高盐,且与某些癌症风险相关,尽量少吃。">加工肉</option>' +
          '<option value="cake|红|蛋糕:高糖高脂高能量,偶尔解馋即可。">蛋糕</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NH.calcFoodLight()">判定</button></div>';
  html += '<div id="fl-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上均为简化模型与概念性估算(BMI 用中国标准、BMR 用 Mifflin-St Jeor、DRI 取 2023 版教学概数),个体差异、孕期、慢病等情况以医生或临床营养师为准,不作诊断或处方依据。</p>';
  html += '</div>';
  NH.render(html);
};

/* ---- 1. BMI ---- */
NH.calcBMI = function() {
  var h = NH._num('bmi-h'), w = NH._num('bmi-w'), waist = NH._num('bmi-waist');
  var el = document.getElementById('bmi-result');
  if (h === null || w === null) { el.innerHTML = '<div class="calc-warn">请填写身高与体重</div>'; return; }
  if (h <= 0 || w <= 0) { el.innerHTML = '<div class="calc-warn">身高与体重应为正数</div>'; return; }
  var hm = h / 100, bmi = w / (hm * hm);
  var cat, tag;
  if (bmi < 18.5) { cat = '偏瘦'; tag = 'cr-warn'; }
  else if (bmi < 24) { cat = '正常'; tag = 'cr-good'; }
  else if (bmi < 28) { cat = '超重'; tag = 'cr-warn'; }
  else { cat = '肥胖'; tag = 'cr-warn'; }
  var rows = '';
  rows += crRow('BMI', NH._fix(bmi, 1) + ' kg/m²', '体重 ÷ 身高²');
  rows += '<tr><td class="cr-name">判定</td><td class="cr-val ' + tag + '">' + cat + '</td><td class="cr-formula">中国标准</td></tr>';
  rows += crRow('区间', '< 18.5 偏瘦 · 18.5—23.9 正常 · 24—27.9 超重 · ≥28 肥胖', '中国成人体重分类');
  if (waist !== null) {
    var risk = (waist >= 90) ? '腰围偏大(≥90cm),提示中心性肥胖风险' : (waist >= 85 ? '腰围接近上限(男≥90 / 女≥85cm 风险升高)' : '腰围在安全范围内');
    rows += crRow('腰围', NH._fix(waist, 0) + ' cm', risk);
  }
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">BMI 只看身高体重,看不出肌肉与脂肪比例;运动员可能 BMI 偏高却并不胖。体成分比 BMI 更能说明问题,判定仅供参考。</p>';
};

/* ---- 2. TDEE ---- */
NH.calcTDEE = function() {
  var g = document.getElementById('t-gender').value;
  var age = NH._num('t-age'), h = NH._num('t-h'), w = NH._num('t-w');
  var act = parseFloat(document.getElementById('t-act').value);
  var el = document.getElementById('tdee-result');
  if (age === null || h === null || w === null) { el.innerHTML = '<div class="calc-warn">请填写年龄、身高、体重</div>'; return; }
  if (age <= 0 || h <= 0 || w <= 0) { el.innerHTML = '<div class="calc-warn">数值应为正数</div>'; return; }
  // Mifflin-St Jeor
  var bmr = 10 * w + 6.25 * h - 5 * age + (g === 'm' ? 5 : -161);
  if (bmr < 0) bmr = 0;
  var tdee = bmr * act;
  // 三大宏量:蛋白 ~1.2 g/kg,脂肪 25% 能量(9 kcal/g),碳水 55% 能量(4 kcal/g)
  var proteinG = w * 1.2;
  var fatKcal = tdee * 0.25, fatG = fatKcal / 9;
  var carbKcal = tdee * 0.55, carbG = carbKcal / 4;
  var rows = '';
  rows += crRow('基础代谢 BMR', NH._fix(bmr, 0) + ' kcal', 'Mifflin-St Jeor');
  rows += crRow('每日总能耗 TDEE', NH._fix(tdee, 0) + ' kcal', 'BMR × 活动量 ' + act);
  rows += crRow('蛋白质参考', NH._fix(proteinG, 0) + ' g', '约 1.2 g/kg 体重');
  rows += crRow('脂肪参考', NH._fix(fatG, 0) + ' g', '约 25% 能量(9 kcal/g)');
  rows += crRow('碳水参考', NH._fix(carbG, 0) + ' g', '约 55% 能量(4 kcal/g)');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">BMR 随肌肉量、年龄、激素变化,公式只是估算;宏量比例为常见参考范围,个体与目标不同可调整(增肌可加蛋白、控糖可降碳水),慢病者以医嘱为准。</p>';
};

/* ---- 3. DRI 速查 ---- */
NH.calcDRI = function() {
  var g = document.getElementById('d-gender').value;
  var band = document.getElementById('d-age').value;
  var el = document.getElementById('dri-result');
  // 简化教学值(据《中国居民膳食营养素参考摄入量 2023》概数)
  var T = {
    child: { m: { eer: 1300, pro: 30, ca: 600, fe: 10, vc: 50, vd: 10 }, f: { eer: 1250, pro: 30, ca: 600, fe: 10, vc: 50, vd: 10 } },
    teen: { m: { eer: 2400, pro: 70, ca: 1000, fe: 16, vc: 100, vd: 10 }, f: { eer: 2000, pro: 60, ca: 1000, fe: 18, vc: 100, vd: 10 } },
    adult: { m: { eer: 2250, pro: 65, ca: 800, fe: 12, vc: 100, vd: 10 }, f: { eer: 1800, pro: 55, ca: 800, fe: 18, vc: 100, vd: 10 } },
    elder: { m: { eer: 2050, pro: 72, ca: 1000, fe: 12, vc: 100, vd: 15 }, f: { eer: 1700, pro: 62, ca: 1000, fe: 12, vc: 100, vd: 15 } }
  };
  var bandName = { child: '儿童 1—10 岁', teen: '青少年 11—17 岁', adult: '成人 18—64 岁', elder: '老年 65 岁及以上' }[band];
  var v = T[band][g];
  var rows = '';
  rows += crRow('适用人群', (g === 'm' ? '男' : '女') + ' · ' + bandName, '查询条件');
  rows += crRow('能量 EER', v.eer + ' kcal/d', '中等身体活动水平');
  rows += crRow('蛋白质 RNI', v.pro + ' g/d', '推荐摄入量');
  rows += crRow('钙 RNI', v.ca + ' mg/d', '骨骼与神经肌肉');
  rows += crRow('铁 RNI', v.fe + ' mg/d', '育龄女性需求更高');
  rows += crRow('维生素 C RNI', v.vc + ' mg/d', '抗氧化与免疫');
  rows += crRow('维生素 D RNI', v.vd + ' μg/d', '老年可增至 15');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">为简化教学概数,具体以《中国居民膳食营养素参考摄入量(2023)》原表为准;RNI=推荐摄入量(满足绝大多数人需要),EER=估计能量需要量(随活动量变动)。孕期、慢病等需个体化调整。</p>';
};

/* ---- 4. 食物红绿灯 ---- */
NH.calcFoodLight = function() {
  var sel = document.getElementById('fl-food').value;
  var el = document.getElementById('fl-result');
  if (!sel) { el.innerHTML = '<div class="calc-warn">请选择一种食物</div>'; return; }
  var p = sel.split('|');
  var light = p[0], lvl = p[1], note = p[2];
  var color = lvl === '绿' ? '#3fae5b' : (lvl === '黄' ? '#d9a93a' : '#c9543a');
  var rows = '';
  rows += crRow('分级', '<span style="display:inline-block;width:1.1em;height:1.1em;border-radius:50%;background:' + color + ';vertical-align:middle;margin-right:6px"></span>' + lvl + '灯', light === '绿' ? '常吃' : (light === '黄' ? '适量' : '少碰'));
  rows += '<tr><td class="cr-name">说明</td><td class="cr-val cr-good" colspan="2" style="text-align:left">' + note + '</td></tr>';
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">红绿灯看的是"加工程度 + 营养密度":加工程度越高、空能量越多越红,营养越密、越接近天然越绿。没有绝对禁忌,红灯食物偶尔解馋无妨,关键是日常比例。</p>';
};

/* ===== 模块页 ===== */
NH.views.module = function(id) {
  var mod = NH.modules.find(function(m) { return m.id === id; });
  if (!mod) { NH.views.home(); return; }
  var P = NH.progress();
  var lessons = NH.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + NH.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + NH.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = NH.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + NH.esc(title) + '</a>';
    else html += '<span class="title">' + NH.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  NH.render(html);
};

/* ===== 术语 ===== */
NH.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>营养与健康名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 蛋白质 / 膳食纤维 / 维生素 D" oninput="NH.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(NH.terms) + '</div></div>';
  NH.render(html);
};
NH.filterTerms = function(q) {
  var filtered = NH.terms;
  if (q) { q = q.toLowerCase();
    filtered = NH.terms.filter(function(t) {
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
    html += '<div class="term-name">' + NH.esc(t.name) + ' <span class="term-en">' + NH.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + NH.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + NH.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
NH.views.myTerms = function() {
  var P = NH.progress(); var collected = [];
  for (var i = 0; i < NH.terms.length; i++) if (P.hasTerm(NH.terms[i].id)) collected.push(NH.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  NH.render(html);
};

/* ===== 搜索 ===== */
NH.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 蛋白质 / 能量平衡 / 膳食宝塔" oninput="NH.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  NH.render(html);
};
NH.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = NH.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + NH.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + NH.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
NH.views.settings = function() {
  var P = NH.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="NH.setTheme(\'dark\')">深色 · 暗夜绿</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="NH.setTheme(\'light\')">浅色 · 海蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="NH.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="NH.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="NH.setFontSize(\'l\')">大</button></div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="NH.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="NH.clearData()">清除数据</button></div>';
  html += '</div>';
  NH.render(html);
};
NH.setTheme = function(t) { document.documentElement.dataset.theme = t; NH.progress().setPref('theme', t); NH.views.settings(); };
NH.setFontSize = function(s) { document.documentElement.dataset.fs = s; NH.progress().setPref('fontSize', s); NH.views.settings(); };
NH.exportData = function() {
  var data = NH.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'nh-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
NH.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('nh.progress.v1');
    window.location.reload();
  }
};
