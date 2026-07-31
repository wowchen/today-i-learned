/* 工具视图:四个文学互动工具(体裁格律谱 / 叙事视角切换器 / 情节弧线绘制器 / 修辞赏析台)+ 术语/搜索/设置/模块 */
window.LIT = window.LIT || {};
LIT.views = LIT.views || {};

LIT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
LIT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
LIT._esc = function(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

/* ===== 体裁格律谱数据 ===== */
var LIT_FORMS = {
  'wujue': {name:'五言绝句', lines:'4 句', chars:'每句 5 字', total:'共 20 字', rhyme:'二、四句押平声韵(首句可押可不押),一韵到底', antith:'不要求对仗', scheme:'仄仄平平仄,平平仄仄平(韵)<br>平平平仄仄,仄仄仄平平(韵)', eg:'李白《静夜思》'},
  'qijue': {name:'七言绝句', lines:'4 句', chars:'每句 7 字', total:'共 28 字', rhyme:'二、四句押平声韵(首句可押可不押)', antith:'不要求对仗', scheme:'平起或仄起,平仄相间,二四句押韵', eg:'张继《枫桥夜泊》'},
  'wulv': {name:'五言律诗', lines:'8 句(四联)', chars:'每句 5 字', total:'共 40 字', rhyme:'偶句押韵,一韵到底', antith:'颔联(三、四句)、颈联(五、六句)必须对仗', scheme:'仄仄平平仄…八句平仄相粘相间', eg:'杜甫《春望》'},
  'qilv': {name:'七言律诗', lines:'8 句(四联)', chars:'每句 7 字', total:'共 56 字', rhyme:'偶句押韵,一韵到底', antith:'颔联、颈联必须对仗', scheme:'平仄相粘相间,八句四联', eg:'杜甫《登高》'},
  'huanxisha': {name:'词·浣溪沙', lines:'上下片各 3 句', chars:'7·7·7 / 7·7·7', total:'共 42 字', rhyme:'平韵,一韵到底', antith:'下片前两句常作对仗', scheme:'依词谱填,句式齐整', eg:'晏殊《一曲新词酒一杯》'},
  'rumengling': {name:'词·如梦令', lines:'单调 7 句', chars:'句式长短', total:'共 33 字', rhyme:'仄韵,一韵到底,末句叠', antith:'不要求', scheme:'依词谱填,长短句', eg:'李清照《昨夜雨疏风骤》'}
};

/* ===== 叙事视角数据(同一场景的五种讲法) ===== */
var LIT_VIEWS = {
  'omniscient': {
    name:'全知视角',
    text:'老人把手伸进四个口袋,又一个一个抽出来--车票没了,他心里一沉。售票员远远望着他,犹豫着该不该催。命运像一张看不见的网,罩着这对素不相识的人,谁也不知道下一刻会怎样。',
    note:'全知视角:叙述者什么都知道,可钻进任何人的内心(老人"心里一沉"),可描述旁人(售票员),甚至可议论命运。自由,但易松散。'
  },
  'limited3': {
    name:'限知第三人称',
    text:'老人把手伸进四个口袋,指尖发凉。车票不在。他抬头望向检票口,人多得像潮水,而他被钉在原地,动弹不得。',
    note:'限知第三人称:只跟一个人(老人),他看见的读者才看见,他不知道的读者也不知道。售票员在想什么,读者无从知晓。紧凑,有悬念。'
  },
  'first': {
    name:'第一人称',
    text:'我把手伸进四个口袋,心一下子沉到谷底--车票没了。这么多人,就我一个人被钉在原地,进退两难。',
    note:'第一人称:"我"来讲,主观、亲切。但"我"不知道的(比如售票员的想法)读者也无从知晓,且"我"可能不可靠--这是他的主观。'
  },
  'second': {
    name:'第二人称',
    text:'你把手伸进四个口袋,指尖发凉--车票没了。潮水般的人群从你身边涌过,你被钉在原地,无人留意。',
    note:'第二人称:"你"来讲,把读者按进故事,代入感极强。但长篇易疲累,常用于短制或特定情绪。'
  },
  'objective': {
    name:'客观(戏剧式)',
    text:'老人把手伸进四个口袋,又抽出来。他抬头看了看检票口,停下脚步。售票窗口上方的电子钟跳到 14:23。',
    note:'客观视角:只写可见可闻的动作与物件,绝不钻入内心。"心里一沉"之类全无。冷峻,像摄影机,留给读者自己判断。'
  }
};

/* ===== 修辞赏析数据 ===== */
var LIT_RHET = {
  'metaphor': {name:'比喻', mech:'以彼物喻此物,化生疏为熟悉、化抽象为具体。', samples:[
    {line:'问君能有几多愁,恰似一江春水向东流。', note:'李煜把无形的愁,比作有形的春水--绵绵不绝,奔涌向东。愁有了体积与方向。'},
    {line:'叶子出水很高,像亭亭的舞女的裙。', note:'朱自清以舞裙喻荷叶,姿态轻盈而出,画面顿活。'}
  ]},
  'personify': {name:'拟人', mech:'赋予物以人的情态动作,使无生命者活起来。', samples:[
    {line:'红杏枝头春意闹。', note:'宋祁一个"闹"字,春意便有了人的喧腾,花繁似可闻其声。'},
    {line:'感时花溅泪,恨别鸟惊心。', note:'杜甫让花溅泪、鸟惊心,把人的感恨移入万物,物我同悲。'}
  ]},
  'synecdoche': {name:'借代', mech:'以局部代整体、以特征代本物,简练而鲜明。', samples:[
    {line:'烽火连三月,家书抵万金。', note:'杜甫以"烽火"代战争,一词而战乱之气扑面。'},
    {line:'巾帼不让须眉。', note:'以"巾帼"代女子、"须眉"代男子,借装束代性别,凝练传神。'}
  ]},
  'hyperbole': {name:'夸张', mech:'故意夸大或缩小,以突出特征、强化感受。', samples:[
    {line:'白发三千丈,缘愁似个长。', note:'李白把白发夸张到三千丈,反衬愁之深长--非写实,是写心。'},
    {line:'蜀道之难,难于上青天。', note:'以"上青天"极言蜀道之难,惊心动魄,过耳难忘。'}
  ]},
  'parallel': {name:'排比', mech:'以三个或以上结构相似的句子连缀,气势贯通、层层加力。', samples:[
    {line:'不为五斗米折腰,不为权贵低头,不为流俗所移。', note:'三句排比,把一种骨气反复锤打,掷地有声。'},
    {line:'我走着,我看着,我记着。', note:'三段排比,简劲而有节奏,层层递进。'}
  ]},
  'antithesis': {name:'对偶', mech:'两句字数相等、结构相同、意义相关,对称而凝练。', samples:[
    {line:'两个黄鹂鸣翠柳,一行白鹭上青天。', note:'杜甫工对:数量、色彩、动作、景物一一相对,画面对称而灵动。'},
    {line:'海内存知己,天涯若比邻。', note:'王勃以对偶收束豪情,天涯之远被知己之情压缩。'}
  ]},
  'irony': {name:'反讽', mech:'字面之意与实际之意相反,含蓄而锐利。', samples:[
    {line:'遍身罗绮者,不是养蚕人。', note:'张俞以陈述作反讽:穿绸缎的偏不养蚕,刺社会之不公,字字冷静字字锋。'},
    {line:'唉,我现在想想,那时真是太聪明了!', note:'朱自清《背影》以"聪明"自嘲,反衬当年的不懂事,讽中有悔。'}
  ]}
};

/* ===== 工具总页 ===== */
LIT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">文学也要"动手":查一种诗体的格律谱、把同一段故事换五个视角看、画一条情节起伏的弧线、拆一种修辞看它如何工作。这四个小工具全部在本地浏览器运行,<b>边读边玩,把抽象的"怎么写"变成能上手的东西</b>。</p>';

  // 1. 体裁格律谱
  html += '<div class="calc-card">';
  html += '<h3><span class="g">谱</span>诗词体裁格律谱</h3>';
  html += '<p class="lab-desc">选一种诗(词)体,看它的字数、押韵、对仗与平仄谱--格律不是束缚,是前人把汉语声韵美规律化后的"赛道"。了解规矩,才懂戴着镣铐跳舞的妙处。</p>';
  html += '<div class="calc-inputs"><label>选体裁 <select id="fm-f" onchange="LIT.calcForm()">' +
          '<option value="wujue">五言绝句</option>' +
          '<option value="qijue">七言绝句</option>' +
          '<option value="wulv">五言律诗</option>' +
          '<option value="qilv">七言律诗</option>' +
          '<option value="huanxisha">词·浣溪沙</option>' +
          '<option value="rumengling">词·如梦令</option>' +
          '</select></label></div>';
  html += '<div id="fm-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 叙事视角切换器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">视</span>叙事视角切换器</h3>';
  html += '<p class="lab-desc">同一段车站丢票的场景,换五种视角讲一遍。视角决定"谁的眼在看",一换,故事的味道与信息量全变。感受全知之广、限知之紧、第一人称之亲、第二人称之入、客观之冷。</p>';
  html += '<div class="calc-inputs"><label>选视角 <select id="vp-v" onchange="LIT.calcViewpoint()">' +
          '<option value="omniscient">全知视角</option>' +
          '<option value="limited3">限知第三人称</option>' +
          '<option value="first">第一人称</option>' +
          '<option value="second">第二人称</option>' +
          '<option value="objective">客观(戏剧式)</option>' +
          '</select></label></div>';
  html += '<div id="vp-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 情节弧线绘制器
  html += '<div class="calc-inputs" style="margin-top:18px"></div>';
  html += '<div class="calc-card">';
  html += '<h3><span class="g">弧</span>情节弧线绘制器</h3>';
  html += '<p class="lab-desc">情节是一条起伏的弧线。输入一串"事件紧张度"(0-100,逗号分隔),画出来;可叠加三幕结构参考线(建置-对抗-结局),看你的故事是否符合"平地起波澜、推向高潮、再收束"的骨架。</p>';
  html += '<div class="calc-inputs"><label>事件紧张度(0-100,逗号分隔) <input type="text" id="pl-v" placeholder="如 10,25,40,30,60,85,95,50,20" style="width:320px"></label>';
  html += '<label>参考线 <select id="pl-ref">' +
          '<option value="none">无</option>' +
          '<option value="three" selected>三幕结构</option>' +
          '<option value="hero">英雄之旅</option>' +
          '</select></label></div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="LIT.calcPlot()">绘制弧线</button></div>';
  html += '<div id="pl-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 修辞赏析台
  html += '<div class="calc-card">';
  html += '<h3><span class="g">辞</span>修辞手法赏析台</h3>';
  html += '<p class="lab-desc">选一种修辞,看它的机理与名句例证,配一句赏析。好修辞不是装饰,是让一句话"活过来"的机关--看它如何工作,自己写时才用得活。</p>';
  html += '<div class="calc-inputs"><label>选修辞 <select id="rh-r" onchange="LIT.calcRhetoric()">' +
          '<option value="metaphor">比喻</option>' +
          '<option value="personify">拟人</option>' +
          '<option value="synecdoche">借代</option>' +
          '<option value="hyperbole">夸张</option>' +
          '<option value="parallel">排比</option>' +
          '<option value="antithesis">对偶</option>' +
          '<option value="irony">反讽</option>' +
          '</select></label></div>';
  html += '<div id="rh-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上工具用于建立直觉与辅助赏析。格律谱取常见教学范式,实际古人写作有"一三五不论"等变通;视角与情节为概念演示;修辞例句取自名篇,赏析为编者一得之见。</p>';
  html += '</div>';
  LIT.render(html);
  LIT.calcForm(); LIT.calcViewpoint(); LIT.calcRhetoric();
};

/* ---- 1. 体裁格律谱 ---- */
LIT.calcForm = function() {
  var k = document.getElementById('fm-f').value;
  var f = LIT_FORMS[k];
  if (!f) return;
  var el = document.getElementById('fm-result');
  var html = '<div class="form-card">';
  html += '<div class="form-name">' + LIT._esc(f.name) + '</div>';
  html += '<table class="cr-table">';
  html += '<tr><td class="cr-name">句数</td><td class="cr-val">' + LIT._esc(f.lines) + '</td></tr>';
  html += '<tr><td class="cr-name">字数</td><td class="cr-val">' + LIT._esc(f.chars) + '　' + LIT._esc(f.total) + '</td></tr>';
  html += '<tr><td class="cr-name">押韵</td><td class="cr-val">' + LIT._esc(f.rhyme) + '</td></tr>';
  html += '<tr><td class="cr-name">对仗</td><td class="cr-val">' + LIT._esc(f.antith) + '</td></tr>';
  html += '<tr><td class="cr-name">平仄谱</td><td class="cr-val cr-formula">' + f.scheme + '</td></tr>';
  html += '<tr><td class="cr-name">名篇</td><td class="cr-val">' + LIT._esc(f.eg) + '</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">格律是"戴着镣铐跳舞"的镣铐:五七言绝句短而求韵味,律诗长而讲对仗,词依谱填可长短。了解这些"赛道",读诗时才看得出诗人在规矩里腾挪的功夫。</p>';
  html += '</div>';
  el.innerHTML = html;
};

/* ---- 2. 叙事视角切换器 ---- */
LIT.calcViewpoint = function() {
  var k = document.getElementById('vp-v').value;
  var v = LIT_VIEWS[k];
  if (!v) return;
  var el = document.getElementById('vp-result');
  var html = '<div class="vp-name">' + LIT._esc(v.name) + '</div>';
  html += '<div class="vp-text">' + LIT._esc(v.text) + '</div>';
  html += '<div class="vp-note">' + LIT._esc(v.note) + '</div>';
  el.innerHTML = html;
};

/* ---- 3. 情节弧线绘制器 ---- */
LIT.calcPlot = function() {
  var raw = document.getElementById('pl-v').value;
  var ref = document.getElementById('pl-ref').value;
  var el = document.getElementById('pl-result');
  var nums = (raw || '').split(/[,\s，]+/).map(function(s){ return parseFloat(s); }).filter(function(n){ return !isNaN(n); });
  if (nums.length < 2) { el.innerHTML = '<div class="calc-warn">请至少输入两个 0-100 的紧张度数值(逗号分隔)</div>'; return; }
  for (var i=0;i<nums.length;i++) if (nums[i]<0) nums[i]=0; else if (nums[i]>100) nums[i]=100;
  var W = 560, H = 240, pad = 36;
  var n = nums.length;
  var xAt = function(i){ return pad + (W - 2*pad) * (n<=1?0:i/(n-1)); };
  var yAt = function(v){ return H - pad - (H - 2*pad) * (v/100); };
  var pts = nums.map(function(v,i){ return xAt(i).toFixed(1)+','+yAt(v).toFixed(1); }).join(' ');
  var svg = '<svg class="plot-svg" viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg">';
  // 网格 + 轴
  for (var g=0; g<=4; g++){ var yy=pad+(H-2*pad)*g/4; svg+='<line x1="'+pad+'" y1="'+yy+'" x2="'+(W-pad)+'" y2="'+yy+'" stroke="currentColor" stroke-opacity=".08" stroke-width="1"/>'; var lbl=100-25*g; svg+='<text x="'+(pad-6)+'" y="'+(yy+4)+'" text-anchor="end" font-size="11" fill="currentColor" opacity=".5">'+lbl+'</text>'; }
  svg+='<line x1="'+pad+'" y1="'+(H-pad)+'" x2="'+(W-pad)+'" y2="'+(H-pad)+'" stroke="currentColor" stroke-opacity=".3" stroke-width="1.2"/>';
  svg+='<line x1="'+pad+'" y1="'+pad+'" x2="'+pad+'" y2="'+(H-pad)+'" stroke="currentColor" stroke-opacity=".3" stroke-width="1.2"/>';
  // 参考线
  if (ref === 'three') {
    var x25=xAt(Math.max(0,Math.round(n*0.25)-1)||1), x75=xAt(Math.round(n*0.75)-1||1);
    svg+='<line x1="'+x25.toFixed(1)+'" y1="'+pad+'" x2="'+x25.toFixed(1)+'" y2="'+(H-pad)+'" stroke="var(--acc)" stroke-opacity=".35" stroke-dasharray="4 4"/>';
    svg+='<line x1="'+x75.toFixed(1)+'" y1="'+pad+'" x2="'+x75.toFixed(1)+'" y2="'+(H-pad)+'" stroke="var(--acc)" stroke-opacity=".35" stroke-dasharray="4 4"/>';
    svg+='<text x="'+(x25+4).toFixed(1)+'" y="'+(pad+14)+'" font-size="11" fill="var(--acc)">建置|对抗</text>';
    svg+='<text x="'+(x75+4).toFixed(1)+'" y="'+(pad+14)+'" font-size="11" fill="var(--acc)">高潮|结局</text>';
  } else if (ref === 'hero') {
    var xh=[0.12,0.3,0.5,0.7,0.88]; var lab=['召唤','试炼','深渊','蜕变','归来'];
    for (var h=0;h<xh.length;h++){ var xx=pad+(W-2*pad)*xh[h]; svg+='<line x1="'+xx.toFixed(1)+'" y1="'+pad+'" x2="'+xx.toFixed(1)+'" y2="'+(H-pad)+'" stroke="var(--acc)" stroke-opacity=".28" stroke-dasharray="3 4"/>'; svg+='<text x="'+(xx+3).toFixed(1)+'" y="'+(pad+14+h%2*14)+'" font-size="10" fill="var(--acc)">'+lab[h]+'</text>'; }
  }
  // 曲线
  svg+='<polyline points="'+pts+'" fill="none" stroke="var(--acc)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>';
  // 点
  for (var d=0;d<n;d++){ svg+='<circle cx="'+xAt(d).toFixed(1)+'" cy="'+yAt(nums[d]).toFixed(1)+'" r="3.4" fill="var(--acc)"/>'; }
  // 高潮标注
  var maxI=0; for(var m=1;m<n;m++){ if(nums[m]>nums[maxI]) maxI=m; }
  svg+='<text x="'+xAt(maxI).toFixed(1)+'" y="'+(yAt(nums[maxI])-10).toFixed(1)+'" text-anchor="middle" font-size="11" fill="var(--acc)">高潮 '+Math.round(nums[maxI])+'</text>';
  svg+='</svg>';
  var note = ref==='three' ? '三幕结构:前约 25% 建置(铺人物情境),中段对抗(冲突升级推向高潮),后段结局(收束)。看你的弧线是否在约 3/4 处冲到最高。'
           : ref==='hero' ? '英雄之旅:召唤启程→试炼→深渊(最低/最险)→蜕变→归来。看你的弧线是否有"先沉后扬"的蜕变节拍。'
           : '情节弧线:横轴为事件顺序,纵轴为紧张度。好的情节常是"平地起波澜—推向高潮—再收束"的抛物线,而非一条直线。';
  el.innerHTML = svg + '<p class="calc-note">'+note+'</p>';
};

/* ---- 4. 修辞赏析台 ---- */
LIT.calcRhetoric = function() {
  var k = document.getElementById('rh-r').value;
  var r = LIT_RHET[k];
  if (!r) return;
  var el = document.getElementById('rh-result');
  var html = '<div class="rh-name">' + LIT._esc(r.name) + '</div>';
  html += '<div class="rh-mech"><b>机理:</b>' + LIT._esc(r.mech) + '</div>';
  r.samples.forEach(function(s, i){
    html += '<div class="rh-sample">';
    html += '<div class="rh-line">「' + LIT._esc(s.line) + '」</div>';
    html += '<div class="rh-note">' + LIT._esc(s.note) + '</div>';
    html += '</div>';
  });
  html += '<p class="calc-note">同一修辞,因情境而异其妙。读时多问:此处为何用此修辞?换成直说会丢什么?这机关替作者多做了什么?--问多了,自己下笔自有点子。</p>';
  el.innerHTML = html;
};

/* ===== 模块页 ===== */
LIT.views.module = function(id) {
  var mod = LIT.modules.find(function(m) { return m.id === id; });
  if (!mod) { LIT.views.home(); return; }
  var P = LIT.progress();
  var lessons = LIT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + LIT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + LIT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = LIT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + LIT.esc(title) + '</a>';
    else html += '<span class="title">' + LIT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  LIT.render(html);
};

/* ===== 术语 ===== */
LIT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>文学通识名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 意象 / 意识流 / 魔幻现实主义" oninput="LIT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(LIT.terms) + '</div></div>';
  LIT.render(html);
};
LIT.filterTerms = function(q) {
  var filtered = LIT.terms;
  if (q) { q = q.toLowerCase();
    filtered = LIT.terms.filter(function(t) {
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
    html += '<div class="term-name">' + LIT.esc(t.name) + ' <span class="term-en">' + LIT.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + LIT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + LIT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
LIT.views.myTerms = function() {
  var P = LIT.progress(); var collected = [];
  for (var i = 0; i < LIT.terms.length; i++) if (P.hasTerm(LIT.terms[i].id)) collected.push(LIT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  LIT.render(html);
};

/* ===== 搜索 ===== */
LIT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 诗经 / 视角 / 浪漫主义" oninput="LIT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  LIT.render(html);
};
LIT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = LIT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + LIT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + LIT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
LIT.views.settings = function() {
  var P = LIT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="LIT.setTheme(\'dark\')">深色 · 墨金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="LIT.setTheme(\'light\')">浅色 · 宣纸朱砂</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="LIT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="LIT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="LIT.setFontSize(\'l\')">大</button></div>';
  var gcfg = LIT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/lit-progress),fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/lit-progress" value="' + LIT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + LIT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + LIT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + LIT.esc(LIT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="LIT.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="LIT.clearData()">清除数据</button></div>';
  html += '</div>';
  LIT.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    LIT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!LIT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中…');
    LIT.sync.pullNow().then(function () { return LIT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + LIT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中…');
    LIT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : LIT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    LIT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
LIT.setTheme = function(t) { document.documentElement.dataset.theme = t; LIT.progress().setPref('theme', t); LIT.views.settings(); };
LIT.setFontSize = function(s) { document.documentElement.dataset.fs = s; LIT.progress().setPref('fontSize', s); LIT.views.settings(); };
LIT.exportData = function() {
  var data = LIT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'lit-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
LIT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('lit.progress.v1');
    window.location.reload();
  }
};
