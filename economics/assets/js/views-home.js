/* 首页视图(D2 瑞士黑白 + 中国红 · 模块用长条列表) */
window.ECON = window.ECON || {};
ECON.views = ECON.views || {};

ECON.views.home = function() {
  var P = ECON.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = ECON.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;

  var nextLesson = step < ECON.path.length ? ECON.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="pf-hero">';
  html += '<h1 class="pf-nm">经济学通识<span class="dot"></span>' +
          '<small>' + ECON.modules.length + ' Modules</small></h1>';
  html += '<p class="pf-sub">从供需、GDP 到货币、政策与贸易，<b>用大白话讲透</b>。' +
          '<mark>' + total + ' 节微课。</mark>纯文字、零依赖、离线可读。<br>' +
          '不预测涨跌、不灌鸡汤、不站队，只帮你看懂经济是怎么运转的。</p>';
  if (nextLesson && ECON.lessons[nextLesson]) {
    var nl = ECON.lessons[nextLesson];
    html += '<a class="pf-cta-big" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + ECON.esc(nl.title) + '</span></a>';
  }
  html += '</header>';

  // ===== Meta row =====
  html += '<div class="pf-meta-row">';
  html += metaCell('Modules', ECON.modules.length + ' <em>个</em>');
  html += metaCell('Lessons', readCount + ' <em>/</em> ' + total);
  html += metaCell('Progress', '<em>' + percent + '%</em>');
  html += metaCell('Cost', '¥ <em>0</em>');
  html += '</div>';

  // ===== Module list =====
  html += '<div class="pf-sec-head" id="modules">';
  html += '<h2><span class="red">/</span>Index · 模块目录</h2>';
  html += '<span class="right"><b>01</b> — <b>' + pad(ECON.modules.length) + '</b></span>';
  html += '</div>';

  html += '<div class="pf-list">';
  for (var i = 0; i < ECON.modules.length; i++) {
    var m = ECON.modules[i];
    var mRead = 0;
    for (var j = 0; j < ECON.path.length; j++) {
      if (ECON.path[j].indexOf(m.id + '/') === 0 && P.isRead(ECON.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="pf-row" href="#/m/' + m.id + '">';
    html += '<span class="ord">' + pad(i + 1) + '</span>';
    html += '<h3 class="title">' + ECON.esc(m.title) +
            '<small>' + ECON.esc(m.desc) + '</small></h3>';
    html += '<span class="tag' + (done ? ' hot' : '') + '">' +
            ECON.esc(m.tag) + ' · ' + mRead + '/' + m.lessons + '</span>';
    html += '<span class="arrow">→</span>';
    html += '</a>';
  }
  html += '</div>';

  // ===== Tools =====
  html += '<div class="pf-sec-head" id="tools-sec">';
  html += '<h2><span class="red">/</span>Tools · 经济计算器</h2>';
  html += '<span class="right"><b>4</b> 件 · 边读边算</span>';
  html += '</div>';
  html += '<div class="pf-tools">';
  html += toolCell('T·01', '经济增长 · 72法则', '增长率 + 年限，算 N 年后规模与翻倍要多少年。');
  html += toolCell('T·02', '通胀购买力', '金额 + 通胀率 + 年限，看钱的实际购买力被磨掉多少。');
  html += toolCell('T·03', '实际利率', '名义利率 − 通胀 ≈ 实际利率，看存款真实增减。');
  html += toolCell('T·04', 'GDP 构成', 'C+I+G+净出口，看四大部分各占多少、合计多大。');
  html += '</div>';

  // ===== About =====
  html += '<div class="pf-disc" id="about-sec">';
  html += '<h3><span class="red">/</span>About</h3>';
  html += '<div class="body">';
  html += '<p>本站不预测行情、不站队、不构成投资建议。' +
          '每节五分钟，用<b>大白话</b>把经济学里那些真正有用、却常被讲得很玄的道理讲清。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>价格不是谁定的，是供需碰出来的；</li>' +
          '<li>GDP、通胀、利率到底在说什么；</li>' +
          '<li>央行加息降息,影响的是你我的钱；</li>' +
          '<li>怎么不被"经济新闻"和直觉带偏。</li>' +
          '</ul>';
  html += '</div></div>';

  ECON.render(html);
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
