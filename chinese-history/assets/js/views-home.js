/* 首页视图(C 朝代瓦片 · Bento 网格) */
window.CHS = window.CHS || {};
CHS.views = CHS.views || {};

CHS.views.home = function() {
  var P = CHS.progress();
  var readCount = P.readCount();
  var total = CHS.totalLessons;
  var step = P.currentStep();
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < CHS.path.length ? CHS.path[step] : null;

  var k = 0; // 已学完的模块数
  for (var c = 0; c < CHS.modules.length; c++) {
    var mMod = CHS.modules[c];
    var mRead = 0;
    for (var j = 0; j < CHS.path.length; j++) {
      if (CHS.path[j].indexOf(mMod.id + '/') === 0 && P.isRead(CHS.path[j])) mRead++;
    }
    if (mRead >= mMod.lessons && mMod.lessons > 0) k++;
  }

  var html = '';

  // ===== Hero =====
  html += '<header class="ch-hero">';
  html += '<h1 class="ch-nm">中国<em>历史</em><br>从神话到现代</h1>';
  html += '<p class="ch-sub">从盘古开天、三皇五帝,到夏商周秦汉、隋唐宋元明清,再到民国与新中国。' +
          '<mark>' + total + ' 节微课</mark>一图读完五千年,先有<b>整体画面感</b>,再谈细节。</p>';
  if (nextLesson && CHS.lessons[nextLesson]) {
    var nl = CHS.lessons[nextLesson];
    html += '<a class="ch-cta-big" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + CHS.esc(nl.title) + '</span></a>';
  }
  html += '</header>';

  // ===== Meta row =====
  html += '<div class="ch-meta-row">';
  html += metaCell('Periods', CHS.modules.length + ' <em>卷</em>');
  html += metaCell('Lessons', readCount + ' <em>/</em> ' + total);
  html += metaCell('Progress', '<em>' + percent + '%</em>');
  html += metaCell('Cost', '¥ <em>0</em>');
  html += '</div>';

  // ===== Periods · 朝代瓦片 =====
  html += '<div class="ch-sec-head" id="modules">';
  html += '<h2><span class="red">/</span>Periods · 朝代瓦片</h2>';
  html += '<span class="right"><b>01</b> — <b>' + pad(CHS.modules.length) + '</b></span>';
  html += '</div>';

  html += '<div class="ch-grid">';
  for (var i = 0; i < CHS.modules.length; i++) {
    var m = CHS.modules[i];
    var featureClass = (i === 0 || i === CHS.modules.length - 1) ? ' ch-tile feature' : '';
    html += '<a class="ch-tile' + featureClass + '" href="#/m/' + m.id + '" style="--brand:var(' + m.color + ')">';
    html += '<span class="ghost">' + m.ghost + '</span>';
    html += '<div class="head"><span class="num">' + (m.order < 10 ? '0' + m.order : m.order);

    // 神话/近代标记
    var eraTag = m.eraTag || m.tag;
    if (i === 0) html += ' · ' + eraTag;
    else if (i === CHS.modules.length - 1) html += ' · ' + eraTag;
    html += '</span><span class="tag">' + escapeHtml(m.tag) + '</span></div>';

    if (featureClass) {
      // feature tile: 标题 + desc
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

  // ===== Tools · 历史工具 =====
  html += '<div class="ch-sec-head" id="tools-sec">';
  html += '<h2><span class="red">/</span>Tools · 历史工具</h2>';
  html += '<span class="right"><b>4</b> 件</span>';
  html += '</div>';
  html += '<div class="ch-tools">';
  html += toolCell('T·01', '时间轴', '5000 年全局条带，可缩放到单朝代内的事件流，点节点跳课时。');
  html += toolCell('T·02', '人物图鉴', '按朝代/角色过滤的卡片墙，点开看生平 + 关键事件 + 关联课时。');
  html += toolCell('T·03', '朝代速查', '完整 14 个朝代/时段的一览表：起讫、都城、开国君、亡国君、传位代数。');
  html += toolCell('T·04', '年号换算', '公元 → 朝代/年号/皇帝，反向：年号 → 公元。预置约 200 个主要年号。');
  html += '</div>';

  // ===== About =====
  html += '<div class="ch-disc" id="about-sec">';
  html += '<h3><span class="red">/</span>About</h3>';
  html += '<div class="body">';
  html += '<p>本站不戏说、不阴谋论；以朝代为卷、以白话为体，' +
          '给非历史专业的普通读者一个<b>整体而清晰</b>的中国历史画面感。</p>';
  html += '<p>读完会清楚：</p>';
  html += '<ul>' +
          '<li>每个朝代<b>大致在做什么</b>、为何兴废；</li>' +
          '<li>哪些是<b>关键节点</b>（秦统一、汉武、唐盛、靖康、辛亥…）；</li>' +
          '<li>制度、思想、版图、人物如何<b>一线相连</b>。</li>' +
          '</ul>';
  html += '</div></div>';

  CHS.render(html);
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