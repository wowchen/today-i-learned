/* 首页视图(时代瓦片 · Bento 网格) */
window.WHS = window.WHS || {};
WHS.views = WHS.views || {};

WHS.views.home = function() {
  var P = WHS.progress();
  var readCount = P.readCount();
  var total = WHS.totalLessons;
  var step = P.currentStep();
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < WHS.path.length ? WHS.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="ch-hero">';
  html += '<h1 class="ch-nm">世界<em>历史</em><br>从文明曙光到当代</h1>';
  html += '<p class="ch-sub">从两河与尼罗河的第一座城市，到希腊罗马、伊斯兰、文艺复兴、工业革命，再到两次世界大战与全球化。' +
          '<mark>' + total + ' 节微课</mark>串起人类几千年的主干，先有<b>整体画面感</b>，再谈细节。</p>';
  if (nextLesson && WHS.lessons[nextLesson]) {
    var nl = WHS.lessons[nextLesson];
    html += '<a class="ch-cta-big" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + WHS.esc(nl.title) + '</span></a>';
  }
  html += '</header>';

  // ===== Meta row =====
  html += '<div class="ch-meta-row">';
  html += metaCell('Eras', WHS.modules.length + ' <em>章</em>');
  html += metaCell('Lessons', readCount + ' <em>/</em> ' + total);
  html += metaCell('Progress', '<em>' + percent + '%</em>');
  html += metaCell('Cost', '¥ <em>0</em>');
  html += '</div>';

  // ===== Eras · 时代瓦片 =====
  html += '<div class="ch-sec-head" id="modules">';
  html += '<h2><span class="red">/</span>Eras · 时代瓦片</h2>';
  html += '<span class="right"><b>01</b> — <b>' + pad(WHS.modules.length) + '</b></span>';
  html += '</div>';

  html += '<div class="ch-grid">';
  for (var i = 0; i < WHS.modules.length; i++) {
    var m = WHS.modules[i];
    var featureClass = (i === 0 || i === WHS.modules.length - 1) ? ' ch-tile feature' : '';
    html += '<a class="ch-tile' + featureClass + '" href="#/m/' + m.id + '" style="--brand:var(' + m.color + ')">';
    html += '<span class="ghost">' + m.ghost + '</span>';
    html += '<div class="head"><span class="num">' + (m.order < 10 ? '0' + m.order : m.order);

    var eraTag = m.eraTag || m.tag;
    if (i === 0) html += ' · ' + eraTag;
    else if (i === WHS.modules.length - 1) html += ' · ' + eraTag;
    html += '</span><span class="tag">' + escapeHtml(m.tag) + '</span></div>';

    if (featureClass) {
      html += '<div>';
      html += '<h3>' + escapeHtml(m.title) + '</h3>';
      html += '<div class="zh">' + escapeHtml(m.era) + '</div>';
      html += '<p class="desc">' + m.desc + '</p>';
      html += '</div>';
    } else {
      html += '<h3>' + escapeHtml(m.title) + '</h3>';
      html += '<div class="zh">' + escapeHtml(m.era) + '</div>';
    }

    html += '<div class="yr"><b>' + m.yearStart + '</b>' + m.yearEnd + '</div>';
    html += '</a>';
  }
  html += '</div>';

  // ===== Tools · 世界史工具 =====
  html += '<div class="ch-sec-head" id="tools-sec">';
  html += '<h2><span class="red">/</span>Tools · 世界史工具</h2>';
  html += '<span class="right"><b>4</b> 件</span>';
  html += '</div>';
  html += '<div class="ch-tools">';
  html += toolCell('T·01', '时间轴', '从公元前 3500 到今天的时代条带，点任意一段跳到该时代课时。');
  html += toolCell('T·02', '人物图鉴', '按时代/角色过滤的卡片墙，点开看生平 + 关键事件 + 关联课时。');
  html += toolCell('T·03', '文明速查', '12 个时代/文明的一览表：起讫、地域、代表政权、关键转折、一句话。');
  html += toolCell('T·04', '中外对照', '同一时间线上，左看世界、右看中国，建立"同一时期东西方在做什么"的坐标。');
  html += '</div>';

  // ===== About =====
  html += '<div class="ch-disc" id="about-sec">';
  html += '<h3><span class="red">/</span>About</h3>';
  html += '<div class="body">';
  html += '<p>本站不戏说、不阴谋论；以时代为章、以白话为体，' +
          '给非历史专业的普通读者一个<b>整体而清晰</b>的世界历史画面感，' +
          '多文明并重、不以单一文明为中心。</p>';
  html += '<p>读完会清楚：</p>';
  html += '<ul>' +
          '<li>每个时代<b>大致在做什么</b>、为何兴衰；</li>' +
          '<li>哪些是<b>关键节点</b>（轴心时代、罗马陷落、大航海、法国大革命、二战…）；</li>' +
          '<li>不同文明之间的制度、宗教、技术、贸易如何<b>彼此影响</b>。</li>' +
          '</ul>';
  html += '</div></div>';

  WHS.render(html);
};

function metaCell(k, v) {
  return '<div><p class="k">' + k + '</p><p class="v">' + v + '</p></div>';
}
function toolCell(num, title, desc) {
  return '<a class="ch-tool" href="#/tools">' +
    '<p class="tool-num">' + num + '</p>' +
    '<h3>' + title + '</h3>' +
    '<p>' + desc + '</p>' +
    '<span class="open">打开</span></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }
function escapeHtml(s) {
  if (typeof s !== 'string') return s;
  return s.replace(/[&<>"']/g, function(m) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m] || m;
  });
}
