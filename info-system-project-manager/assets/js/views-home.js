/* 首页视图 */
window.ISPM = window.ISPM || {};

ISPM.views = ISPM.views || {};

ISPM.views.home = function() {
  var P = ISPM.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = ISPM.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var streak = P.streak();
  var termCount = P.termCount();

  var nextLesson = step < ISPM.path.length ? ISPM.path[step] : null;
  var nextTitle = '';
  var nextModule = '';
  if (nextLesson) {
    var l = ISPM.lessons[nextLesson];
    if (l) {
      nextTitle = l.title;
      var mod = ISPM.modules.find(function(m) { return m.id === l.module; });
      nextModule = mod ? mod.title : '';
    } else {
      var parts = nextLesson.split('/');
      var mod = ISPM.modules.find(function(m) { return m.id === parts[0]; });
      nextModule = mod ? mod.title : parts[0];
      nextTitle = parts[1] || '待解锁';
    }
  }

  var html = '<div class="hero">';
  html += '<div class="hero-main">';
  if (nextLesson) {
    html += '<h2>继续学习<br><span class="accent">第 ' + (step + 1) + ' 步</span></h2>';
    html += '<p>' + ISPM.esc(nextModule) + ' › ' + ISPM.esc(nextTitle) + '</p>';
    if (ISPM.lessons[nextLesson]) {
      html += '<a class="hero-btn" href="#/l/' + nextLesson + '">开始学习</a>';
    }
  } else {
    html += '<h2>全部<br>完成!</h2><p>恭喜你学完了全部 ' + total + ' 课时</p>';
  }
  html += '</div>';
  html += '<div class="hero-side">';
  html += '<div class="progress-text">学习进度</div>';
  html += '<div class="progress-bar"><div class="fill" style="width:' + percent + '%"></div></div>';
  html += '<div class="progress-text">' + readCount + ' / ' + total + ' 课时 · ' + percent + '%</div>';
  html += '</div>';
  html += '</div>';

  html += '<div class="stats">';
  html += '<div class="stat"><div class="num">' + readCount + '</div><div class="label">已学课时</div></div>';
  html += '<div class="stat"><div class="num">' + total + '</div><div class="label">总课时</div></div>';
  html += '<div class="stat"><div class="num">' + streak + '</div><div class="label">连续天数</div></div>';
  html += '<div class="stat"><div class="num">' + termCount + '</div><div class="label">收藏术语</div></div>';
  html += '</div>';

  html += '<h3 class="section-title">知识模块</h3>';
  html += '<div class="module-grid">';
  for (var i = 0; i < ISPM.modules.length; i++) {
    var m = ISPM.modules[i];
    var mRead = 0;
    for (var j = 0; j < ISPM.path.length; j++) {
      if (ISPM.path[j].indexOf(m.id + '/') === 0 && P.isRead(ISPM.path[j])) mRead++;
    }
    html += '<a class="module-card" href="#/m/' + m.id + '">';
    html += '<span class="tag tag-' + tagClass(m.tag) + '">' + ISPM.esc(m.tag) + '</span>';
    html += '<h4>' + ISPM.esc(m.title) + '</h4>';
    html += '<p>' + ISPM.esc(m.desc) + '</p>';
    html += '<div class="bottom"><span>' + m.lessons + ' 课时</span><span>' + mRead + '/' + m.lessons + '</span></div>';
    html += '</a>';
  }
  html += '</div>';

  ISPM.render(html);
};

function tagClass(tag) {
  switch(tag) {
    case '核心': return 'core';
    case '基础': return 'base';
    case '进阶': return 'adv';
    case '实战': return 'prac';
    default: return 'base';
  }
}
