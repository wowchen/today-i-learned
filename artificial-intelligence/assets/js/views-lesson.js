/* 课时视图(文档手册版:正文 + 右栏大纲;无小测) */
window.AIX = window.AIX || {};
AIX.views = AIX.views || {};

AIX.views.lesson = function(id) {
  var l = AIX.lessons[id];
  if (!l) {
    AIX.render('<div class="empty-state"><h2 class="page">课时待编写</h2>' +
      '<p>ID: ' + AIX.esc(id) + '</p><a class="btn" href="#/">返回首页</a></div>');
    return;
  }

  var P = AIX.progress();
  P.recordActivity();
  var esc = AIX.esc;

  var pathIdx = AIX.path.indexOf(id);
  var mod = AIX.modules.find(function(m) { return m.id === l.module; });

  var secs = [];
  if (l.concept)  secs.push({ id: 's1', n: '01', tag: '一句话', body: l.concept });
  if (l.core)     secs.push({ id: 's2', n: '02', tag: '讲透',   body: l.core });
  if (l.pitfalls) secs.push({ id: 's3', n: '03', tag: '别踩坑', body: l.pitfalls });
  if (l.links)    secs.push({ id: 's4', n: '04', tag: '接着读', body: l.links });

  var h = '<div class="lesson-layout"><article class="lesson">';

  // 面包屑
  h += '<div class="crumb"><a href="#/">首页</a> / ';
  if (mod) h += '<a href="#/m/' + mod.id + '">' + esc(mod.shortTitle || mod.title) + '</a> / ';
  h += (pathIdx >= 0 ? '第 ' + (pathIdx + 1) + ' 课' : '课时') + '</div>';

  h += '<h1 class="page">' + esc(l.title) + '</h1>';
  h += '<div class="meta">';
  if (mod) h += '<span class="key">模块</span> ' + esc(mod.title) + '　';
  if (l.minutes) h += '<span class="key">用时</span> 约 ' + l.minutes + ' 分钟';
  h += '</div>';
  h += '<hr class="rule">';

  for (var i = 0; i < secs.length; i++) {
    h += '<h2 class="sec" id="' + secs[i].id + '"><span class="n">' + secs[i].n + '</span>' + secs[i].tag + '</h2>';
    h += '<div class="sec-body">' + secs[i].body + '</div>';
  }

  // 翻页 + 标记
  h += '<div class="pager">';
  if (pathIdx > 0) {
    var prev = AIX.path[pathIdx - 1];
    h += '<a href="#/l/' + prev + '">上一课<b>' + esc(AIX.lessons[prev] ? AIX.lessons[prev].title : prev) + '</b></a>';
  }
  if (!P.isRead(id)) {
    h += '<span class="mark" onclick="AIX.markAndNext(\'' + id + '\')">标记已学 ✓</span>';
  } else {
    h += '<span class="mark done">已学 ✓</span>';
  }
  if (pathIdx >= 0 && pathIdx < AIX.path.length - 1) {
    var next = AIX.path[pathIdx + 1];
    h += '<a class="next" href="#/l/' + next + '">下一课<b>' + esc(AIX.lessons[next] ? AIX.lessons[next].title : next) + '</b></a>';
  }
  h += '</div>';

  h += '</article>';

  // 右栏大纲
  h += '<aside class="rail"><h4>本课大纲</h4>';
  for (var k = 0; k < secs.length; k++) {
    h += '<a href="#' + secs[k].id + '" data-sec="' + secs[k].id + '">' + secs[k].tag + '</a>';
  }
  if (mod) {
    h += '<div class="tcard"><div class="t">' + esc(mod.shortTitle || mod.title) + '</div>' +
         '<div class="d">' + esc(mod.desc || '') + '</div></div>';
  }
  h += '</aside>';

  h += '</div>';
  AIX.render(h);
  bindRail();
};

AIX.markAndNext = function(id) {
  var P = AIX.progress();
  P.markRead(id);
  var idx = AIX.path.indexOf(id);
  if (idx >= 0 && idx < AIX.path.length - 1) {
    window.location.hash = '#/l/' + AIX.path[idx + 1];
  } else {
    AIX.go('#/');
  }
  if (AIX.renderShell) AIX.renderShell();
};

function bindRail() {
  var links = document.querySelectorAll('aside.rail a[data-sec]');
  if (!links.length) return;
  function onScroll() {
    var best = null, bestTop = -Infinity;
    for (var i = 0; i < links.length; i++) {
      var el = document.getElementById(links[i].getAttribute('data-sec'));
      if (!el) continue;
      var top = el.getBoundingClientRect().top - 80;
      if (top <= 0 && top > bestTop) { bestTop = top; best = links[i]; }
    }
    for (var j = 0; j < links.length; j++) links[j].classList.remove('on');
    if (best) best.classList.add('on'); else if (links[0]) links[0].classList.add('on');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
