/* 工具视图:体裁格律谱 / 意象寓意典 / 朝代诗流年表 / 飞花集句 */
window.TSP = window.TSP || {};
TSP.views = TSP.views || {};

/* ===== 数据 ===== */
var METER = {
  'wujue': {name:'五言绝句', zi:'20 字', ju:'4 句(每句 5 字)', yun:'偶句押韵,首句可押可不押,一韵到底', dui:'不要求', pz:'有固定平仄谱,讲究粘对', li:'白日依山尽,黄河入海流。'},
  'qijue': {name:'七言绝句', zi:'28 字', ju:'4 句(每句 7 字)', yun:'偶句押韵,首句多押,一韵到底', dui:'不要求', pz:'有固定平仄谱', li:'朝辞白帝彩云间,千里江陵一日还。'},
  'wulv': {name:'五言律诗', zi:'40 字', ju:'8 句(每句 5 字)', yun:'偶句押韵,一韵到底', dui:'颔联(3-4句)、颈联(5-6句)须对仗', pz:'严格,讲究粘对', li:'国破山河在,城春草木深。'},
  'qilv': {name:'七言律诗', zi:'56 字', ju:'8 句(每句 7 字)', yun:'偶句押韵,首句多押', dui:'颔联、颈联须对仗', pz:'严格', li:'风急天高猿啸哀,渚清沙白鸟飞回。'},
  'wugu': {name:'五言古诗', zi:'不限', ju:'不限(每句 5 字)', yun:'较自由,可换韵', dui:'不要求', pz:'不拘平仄', li:'结庐在人境,而无车马喧。'},
  'qigu': {name:'七言古诗', zi:'不限', ju:'不限(每句 7 字)', yun:'较自由,可换韵', dui:'不要求', pz:'不拘平仄', li:'君不见黄河之水天上来。'},
  'huanxisha': {name:'浣溪沙(词)', zi:'42 字', ju:'上下阕各 3 句', yun:'平韵,一韵到底', dui:'下阕头两句多对仗', pz:'依词谱', li:'一曲新词酒一杯,去年天气旧亭台。'},
  'rumengling': {name:'如梦令(词)', zi:'33 字', ju:'7 句', yun:'仄韵,一韵到底', dui:'不要求', pz:'依词谱', li:'常记溪亭日暮,沉醉不知归路。'},
  'niannujiao': {name:'念奴娇(词)', zi:'100 字', ju:'上下阕各 10 句', yun:'仄韵,气势阔大', dui:'部分对仗', pz:'依词谱', li:'大江东去,浪淘尽,千古风流人物。'}
};

var IMAGERY = {
  'yue': {name:'月亮', mean:'思乡、怀人、孤寂、永恒。月是唐诗最高频意象,见月如见故乡与故人。', li:'举头望明月,低头思故乡'},
  'liu': {name:'柳', mean:'离别、挽留。柳谐"留",古人折柳送行,故杨柳多与送别相连。', li:'年年柳色,灞陵伤别'},
  'mei': {name:'梅', mean:'高洁、坚贞、报春。凌寒独放,喻孤傲不群的品格。', li:'遥知不是雪,为有暗香来'},
  'yan': {name:'雁', mean:'思乡、传书、孤寂。雁是候鸟,秋去春来,最牵客愁。', li:'乡书何处达,归雁洛阳边'},
  'jiu': {name:'酒', mean:'豪情、愁绪、忘忧、送别。诗酒不分家,酒是诗的引子。', li:'劝君更尽一杯酒,西出阳关无故人'},
  'ju': {name:'菊', mean:'隐逸、高洁、坚贞。凌霜盛开,喻君子之风。', li:'采菊东篱下,悠然见南山'},
  'song': {name:'松', mean:'坚贞、不屈、高洁。岁寒不凋,喻节操。', li:'亭亭山上松,瑟瑟谷中风'},
  'zhu': {name:'竹', mean:'君子、虚心、有节。竹中空有节,喻人之德。', li:'独坐幽篁里,弹琴复长啸'},
  'luoye': {name:'落花落叶', mean:'伤春、迟暮、生命无常。落花最易惹人伤感时光。', li:'无边落木萧萧下,不尽长江滚滚来'},
  'mu': {name:'夕阳落日', mean:'迟暮、苍凉、思归。落日易起日暮途远之叹。', li:'夕阳无限好,只是近黄昏'},
  'zhou': {name:'舟船', mean:'漂泊、羁旅、归隐。一叶扁舟载尽天涯客愁。', li:'孤帆远影碧空尽,唯见长江天际流'},
  'chan': {name:'蝉', mean:'高洁、悲凉。蝉饮露不食,古人视为清高之象。', li:'居高声自远,非是藉秋风'},
  'shan': {name:'山', mean:'永恒、隐逸、崇高。山是归隐之所,亦喻品格。', li:'空山不见人,但闻人语响'},
  'shui': {name:'水江', mean:'时光流逝、愁绪绵长、漂泊。流水无穷,喻愁无尽。', li:'问君能有几多愁,恰似一江春水向东流'},
  'yu': {name:'雨', mean:'愁绪、离别、润泽。雨丝牵愁,亦洗尘心。', li:'清明时节雨纷纷,路上行人欲断魂'}
};

/* 飞花令名句库(覆盖常见字) */
var FEIHUA = [
  '床前明月光,疑是地上霜','月落乌啼霜满天,江枫渔火对愁眠','春江潮水连海平,海上明月共潮生',
  '明月几时有,把酒问青天','举杯邀明月,对影成三人','海上生明月,天涯共此时',
  '春风又绿江南岸,明月何时照我还','二十四桥明月夜,玉人何处教吹箫','野旷天低树,江清月近人',
  '春眠不觉晓,处处闻啼鸟','春色满园关不住,一枝红杏出墙来','红豆生南国,春来发几枝',
  '春风得意马蹄疾,一日看尽长安花','不知细叶谁裁出,二月春风似剪刀','国破山河在,城春草木深',
  '夜来风雨声,花落知多少','春风不度玉门关','春蚕到死丝方尽,蜡炬成灰泪始干',
  '夜来幽梦忽还乡','随风潜入夜,润物细无声','昨夜西风凋碧树','七月七日长生殿,夜半无人私语时',
  '大漠孤烟直,长河落日圆','黄河之水天上来,奔流到海不复回','白日依山尽,黄河入海流',
  '孤帆远影碧空尽,唯见长江天际流','天门中断楚江开,碧水东流至此回','飞流直下三千尺,疑是银河落九天',
  '日出江花红胜火,春来江水绿如蓝','落霞与孤鹜齐飞,秋水共长天一色','山重水复疑无路,柳暗花明又一村',
  '空山新雨后,天气晚来秋','空山不见人,但闻人语响','会当凌绝顶,一览众山小',
  '千山鸟飞绝,万径人踪灭','青山遮不住,毕竟东流去','绿树村边合,青山郭外斜',
  '白日放歌须纵酒,青春作伴好还乡','花间一壶酒,独酌无相亲','劝君更尽一杯酒,西出阳关无故人',
  '借问酒家何处有,牧童遥指杏花村','葡萄美酒夜光杯,欲饮琵琶马上催','人生得意须尽欢,莫使金樽空对月',
  '停车坐爱枫林晚,霜叶红于二月花','接天莲叶无穷碧,映日荷花别样红','忽如一夜春风来,千树万树梨花开',
  '人面不知何处去,桃花依旧笑春风','去年今日此门中,人面桃花相映红','人间四月芳菲尽,山寺桃花始盛开',
  '人间自有真情在,宜将诗酒付流年','人生自古谁无死,留取丹心照汗青','人生如梦,一尊还酹江月',
  '天生我材必有用,千金散尽还复来','同是天涯沦落人,相逢何必曾相识','此情可待成追忆,只是当时已惘然',
  '两情若是久长时,又岂在朝朝暮暮','衣带渐宽终不悔,为伊消得人憔悴','众里寻他千百度,蓦然回首,那人却在灯火阑珊处',
  '问君能有几多愁,恰似一江春水向东流','剪不断,理还乱,是离愁','无可奈何花落去,似曾相识燕归来',
  '夕阳无限好,只是近黄昏','采菊东篱下,悠然见南山','莫愁前路无知己,天下谁人不识君'
];

/* ===== 渲染 ===== */
TSP.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<a class="back" href="#/">首页</a>';
  html += '<h2>诗词工具台</h2>';
  html += '<p class="calc-intro">四件小工具,边读边用:<b>查体裁格律</b>、<b>识意象寓意</b>、<b>览朝代年表</b>、<b>玩飞花集句</b>。颜色随主题红/金切换。</p>';

  /* 1 体裁格律谱 */
  html += '<div class="calc-card">';
  html += '<h3><span class="g">谱</span>体裁格律谱</h3>';
  html += '<p class="lab-desc">选一种诗(词)体,看它的字数、句数、押韵、对仗与平仄要求。</p>';
  html += '<div class="calc-inputs"><label>体裁<select id="meter-sel" onchange="TSP.renderMeter()">';
  for (var k in METER) html += '<option value="' + k + '">' + METER[k].name + '</option>';
  html += '</select></label></div>';
  html += '<div class="calc-result" id="meter-out"></div>';
  html += '</div>';

  /* 2 意象寓意典 */
  html += '<div class="calc-card">';
  html += '<h3><span class="g">意</span>意象寓意典</h3>';
  html += '<p class="lab-desc">选一个常见意象,看它在诗词里通常寄寓什么情思。</p>';
  html += '<div class="calc-inputs"><label>意象<select id="img-sel" onchange="TSP.renderImagery()">';
  for (var ik in IMAGERY) html += '<option value="' + ik + '">' + IMAGERY[ik].name + '</option>';
  html += '</select></label></div>';
  html += '<div class="calc-result" id="img-out"></div>';
  html += '</div>';

  /* 3 朝代诗流年表 */
  html += '<div class="calc-card">';
  html += '<h3><span class="g">时</span>朝代诗流年表</h3>';
  html += '<p class="lab-desc">唐宋诗流脉络一图览:初盛中晚唐与两宋的代表诗人。</p>';
  html += '<div class="lab-canvas-wrap" style="padding:14px">' + timelineSVG() + '</div>';
  html += '</div>';

  /* 4 飞花集句 */
  html += '<div class="calc-card">';
  html += '<h3><span class="g">令</span>飞花集句</h3>';
  html += '<p class="lab-desc">输入一个字(如「月」「春」「花」),集出本库中含此字的经典诗句。</p>';
  html += '<div class="calc-row"><input class="fill-input" id="fh-input" placeholder="输入一个字,如 月" style="flex:1" onkeydown="if(event.key===\'Enter\')TSP.doFeihua()"><button class="calc-btn" onclick="TSP.doFeihua()">集句</button></div>';
  html += '<div class="calc-result" id="fh-out" style="margin-top:14px"></div>';
  html += '</div>';

  html += '</div>';
  TSP.render(html);
  TSP.renderMeter();
  TSP.renderImagery();
  TSP.doFeihua('月');
};

TSP.renderMeter = function() {
  var sel = document.getElementById('meter-sel');
  if (!sel) return;
  var d = METER[sel.value];
  var rows = [['体裁', d.name], ['字数', d.zi], ['句数', d.ju], ['押韵', d.yun], ['对仗', d.dui], ['平仄', d.pz], ['例句', d.li]];
  var h = '<table class="cr-table">';
  for (var i = 0; i < rows.length; i++) h += '<tr><td class="cr-name">' + rows[i][0] + '</td><td class="cr-val' + (i === 0 ? ' cr-good' : '') + '">' + rows[i][1] + '</td></tr>';
  h += '</table>';
  document.getElementById('meter-out').innerHTML = h;
};

TSP.renderImagery = function() {
  var sel = document.getElementById('img-sel');
  if (!sel) return;
  var d = IMAGERY[sel.value];
  var h = '<table class="cr-table"><tr><td class="cr-name">意象</td><td class="cr-val cr-good">' + d.name + '</td></tr>' +
          '<tr><td class="cr-name">寓意</td><td class="cr-val">' + d.mean + '</td></tr>' +
          '<tr><td class="cr-name">例句</td><td class="cr-val" style="font-family:var(--serif)">' + d.li + '</td></tr></table>';
  document.getElementById('img-out').innerHTML = h;
};

TSP.doFeihua = function(seed) {
  var inp = document.getElementById('fh-input');
  var ch = (seed !== undefined) ? seed : (inp ? inp.value.trim() : '');
  var out = document.getElementById('fh-out');
  if (!out) return;
  if (!ch || ch.length < 1) { out.innerHTML = '<div class="calc-warn">请输入一个字。</div>'; return; }
  ch = ch.charAt(0);
  var hits = FEIHUA.filter(function(s) { return s.indexOf(ch) !== -1; });
  if (!hits.length) { out.innerHTML = '<div class="calc-note">库中暂无含「' + ch + '」的诗句,换一个字试试(如 月/春/花/酒/山)。</div>'; return; }
  var h = '<p class="calc-note">含「<b style="color:var(--acc)">' + ch + '</b>」的诗句 ' + hits.length + ' 句:</p><ol style="margin:6px 0 0;padding-left:22px;line-height:2">';
  for (var i = 0; i < hits.length; i++) {
    h += '<li style="font-family:var(--serif);color:var(--ink)">' + hits[i].replace(new RegExp(ch, 'g'), '<mark>' + ch + '</mark>') + '</li>';
  }
  h += '</ol>';
  out.innerHTML = h;
};

/* 朝代诗流年表(HTML flex 列:诗人名按列自动换行,避免重叠) */
function timelineSVG() {
  var periods = [
    {name: '初唐', years: '650-712', poets: '王勃·骆宾王·陈子昂'},
    {name: '盛唐', years: '712-762', poets: '李白·王维·孟浩然·高适·岑参'},
    {name: '中唐', years: '762-827', poets: '杜甫·白居易·韩愈·柳宗元'},
    {name: '晚唐', years: '827-907', poets: '李商隐·杜牧·温庭筠'},
    {name: '北宋', years: '960-1127', poets: '苏轼·柳永·欧阳修·晏殊·周邦彦'},
    {name: '南宋', years: '1127-1279', poets: '辛弃疾·李清照·陆游·姜夔'}
  ];
  var s = '<div class="tl-wrap" style="position:relative;padding:10px 4px 6px">';
  s += '<div style="position:absolute;left:10%;right:10%;top:46px;height:2px;background:var(--line)"></div>';
  s += '<div style="display:flex;gap:6px;position:relative">';
  periods.forEach(function(p) {
    s += '<div style="flex:1;min-width:0;text-align:center">';
    s += '<div style="font-size:.95rem;font-weight:700;color:var(--ink);font-family:var(--serif)">' + p.name + '</div>';
    s += '<div style="font-size:.7rem;color:var(--note);font-family:var(--mono);margin:2px 0 8px">' + p.years + '</div>';
    s += '<div style="width:11px;height:11px;border-radius:50%;background:var(--acc);margin:0 auto 10px;position:relative;z-index:1"></div>';
    s += '<div style="font-size:.8rem;color:var(--body);line-height:1.7;font-family:var(--serif)">' + p.poets.split('·').join('·<wbr>') + '</div>';
    s += '</div>';
  });
  s += '</div></div>';
  return s;
}

/* ===== 模块页(诗卷目录) ===== */
TSP.views.module = function(id) {
  var mod = TSP.modules.find(function(m) { return m.id === id; });
  if (!mod) { TSP.views.home(); return; }
  var P = TSP.progress();
  var lessons = TSP.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + TSP.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + TSP.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = TSP.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + TSP.esc(title) + '</a>';
    else html += '<span class="title">' + TSP.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  TSP.render(html);
};

/* ===== 术语速查 ===== */
TSP.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>诗学速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 律诗 / 意象 / 押韵 / 豪放 / 词牌" oninput="TSP.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(TSP.terms) + '</div></div>';
  TSP.render(html);
};
TSP.filterTerms = function(q) {
  var filtered = TSP.terms;
  if (q) { q = q.toLowerCase();
    filtered = TSP.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || t.en.toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('term-list');
  if (el) el.innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + TSP.esc(t.name) + ' <span class="term-en">' + TSP.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + TSP.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + TSP.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
TSP.views.myTerms = function() {
  var P = TSP.progress(); var collected = [];
  for (var i = 0; i < TSP.terms.length; i++) if (P.hasTerm(TSP.terms[i].id)) collected.push(TSP.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在诗篇里点击带下划线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  TSP.render(html);
};

/* ===== 搜索 ===== */
TSP.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 月 / 送别 / 苏轼 / 豪放 / 蝶恋花" oninput="TSP.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  TSP.render(html);
};
TSP.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = TSP.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + TSP.esc(r.title) + '</a> <span class="search-type">诗篇</span></li>';
    else html += '<li><span class="search-term">' + TSP.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
TSP.views.settings = function() {
  var P = TSP.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var cfg = TSP.sync.config();
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="TSP.setTheme(\'dark\')">深色 · 金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="TSP.setTheme(\'light\')">浅色 · 朱红</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="TSP.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="TSP.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="TSP.setFontSize(\'l\')">大</button></div>';

  html += '<div class="setting-row"><label>GitHub 同步</label></div>';
  html += '<p class="sync-desc">用一个<b>自己的 private 仓库</b>存进度(如 owner/tsp-progress),fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/tsp-progress" value="' + TSP.esc(cfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + TSP.esc(cfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + TSP.esc(cfg.token || '') + '"></div>';
  html += '<div class="setting-row"><label></label>';
  html += '<button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="sync-desc" id="syMsg">' + TSP.esc(TSP.sync.statusText) + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="TSP.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="TSP.clearData()">清除数据</button></div>';
  html += '</div>';
  TSP.render(html);

  function msg(text, cls) {
    var el = document.getElementById('syMsg');
    if (el) { el.textContent = text; el.className = 'sync-desc ' + (cls || ''); }
  }
  document.getElementById('sySave').addEventListener('click', function () {
    TSP.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!TSP.sync.ready()) { msg('仓库和 token 都要填。', 'bad'); return; }
    msg('同步中…');
    TSP.sync.pullNow().then(function () { return TSP.sync.pushNow(); })
      .then(function (ok) { msg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + TSP.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    msg('拉取中…');
    TSP.sync.pullNow().then(function (ok) { msg(ok ? '已拉取并合并远端进度 ✓' : TSP.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    TSP.sync.clearToken();
    document.getElementById('syToken').value = '';
    msg('token 已从本机清除。');
  });
};
TSP.setTheme = function(t) { document.documentElement.dataset.theme = t; TSP.progress().setPref('theme', t); TSP.views.settings(); };
TSP.setFontSize = function(s) { document.documentElement.dataset.fs = s; TSP.progress().setPref('fontSize', s); TSP.views.settings(); };
TSP.exportData = function() {
  var data = TSP.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'tsp-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
TSP.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('tsp.progress.v1');
    window.location.reload();
  }
};
