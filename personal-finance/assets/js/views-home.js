/* 首页视图(D2 瑞士黑白 + 中国红 · 模块用长条列表) */
window.PFIN = window.PFIN || {};
PFIN.views = PFIN.views || {};

PFIN.views.home = function() {
  var P = PFIN.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = PFIN.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;

  var nextLesson = step < PFIN.path.length ? PFIN.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="pf-hero">';
  html += '<h1 class="pf-nm">投资理财<span class="dot"></span>' +
          '<small>' + PFIN.modules.length + ' Modules</small></h1>';
  html += '<p class="pf-sub">把工资条到资产配置之间的事，<b>用大白话讲透</b>。' +
          '<mark>' + total + ' 节微课。</mark>纯文字、零依赖、离线可读。<br>' +
          '不荐股、不带货、不焦虑，不构成任何投资建议。</p>';
  if (nextLesson && PFIN.lessons[nextLesson]) {
    var nl = PFIN.lessons[nextLesson];
    html += '<a class="pf-cta-big" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + PFIN.esc(nl.title) + '</span></a>';
  }
  html += '</header>';

  // ===== Meta row =====
  html += '<div class="pf-meta-row">';
  html += metaCell('Modules', PFIN.modules.length + ' <em>个</em>');
  html += metaCell('Lessons', readCount + ' <em>/</em> ' + total);
  html += metaCell('Progress', '<em>' + percent + '%</em>');
  html += metaCell('Cost', '¥ <em>0</em>');
  html += '</div>';

  // ===== Module list =====
  html += '<div class="pf-sec-head" id="modules">';
  html += '<h2><span class="red">/</span>Index · 模块目录</h2>';
  html += '<span class="right"><b>01</b> — <b>' + pad(PFIN.modules.length) + '</b></span>';
  html += '</div>';

  html += '<div class="pf-list">';
  for (var i = 0; i < PFIN.modules.length; i++) {
    var m = PFIN.modules[i];
    var mRead = 0;
    for (var j = 0; j < PFIN.path.length; j++) {
      if (PFIN.path[j].indexOf(m.id + '/') === 0 && P.isRead(PFIN.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="pf-row" href="#/m/' + m.id + '">';
    html += '<span class="ord">' + pad(i + 1) + '</span>';
    html += '<h3 class="title">' + PFIN.esc(m.title) +
            '<small>' + PFIN.esc(m.desc) + '</small></h3>';
    html += '<span class="tag' + (done ? ' hot' : '') + '">' +
            PFIN.esc(m.tag) + ' · ' + mRead + '/' + m.lessons + '</span>';
    html += '<span class="arrow">→</span>';
    html += '</a>';
  }
  html += '</div>';

  // ===== Tools =====
  html += '<div class="pf-sec-head" id="tools-sec">';
  html += '<h2><span class="red">/</span>Tools · 理财计算器</h2>';
  html += '<span class="right"><b>4</b> 件 · 边读边算</span>';
  html += '</div>';
  html += '<div class="pf-tools">';
  html += toolCell('T·01', '复利计算器', '本金 + 月供 + 年化 + 年限，算未来值与翻倍年。');
  html += toolCell('T·02', '定投回测', '每月定投指数，N 年后大致的累计与终值。');
  html += toolCell('T·03', '退休缺口', '年龄/支出/已存/年化，算退休前还需积累多少。');
  html += toolCell('T·04', '贷款摊销', '贷款额 + 利率 + 年限，算等额本息月供与总利息。');
  html += '</div>';

  // ===== About =====
  html += '<div class="pf-disc" id="about-sec">';
  html += '<h3><span class="red">/</span>About</h3>';
  html += '<div class="body">';
  html += '<p>本站不提供行情、不推荐产品、不构成任何投资建议。' +
          '每节五分钟，用<b>大白话</b>把那些每个人都该懂、却没人愿意慢慢讲的事讲清。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>复利是数学，不是鸡汤；</li>' +
          '<li>资产配置比"挑哪只"更重要；</li>' +
          '<li>保险先看保障、再谈理财；</li>' +
          '<li>税务与退休越早规划越省力。</li>' +
          '</ul>';
  html += '</div></div>';

  PFIN.render(html);
};

function metaCell(k, v) {
  return '<div><p class="k">' + k + '</p><p class="v">' + v + '</p></div>';
}
function toolCell(num, title, desc) {
  return '<a class="pf-tool" href="#/calc">' +
    '<p class="tool-num">' + num + '</p>' +
    '<h3>' + title + '</h3>' +
    '<p>' + desc + '</p>' +
    '<span class="open">打开</span></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }
