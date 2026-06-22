/* 视图:课程页 —— 五段模板渲染(无小测,ADR-10)+ 标记已读 + 路线前后导航。 */
(function () {
  'use strict';
  var R = function () { return MUS.registry; };
  var P = function () { return MUS.progress; };

  var SECTS = [
    { key: 'what',     tag: '① 一句话是什么' },
    { key: 'why',      tag: '② 为什么重要' },
    { key: 'how',      tag: '③ 怎么运作' },
    { key: 'pitfalls', tag: '④ 常见误解与易混' },
    { key: 'links',    tag: '⑤ 关联与延伸' }
  ];

  MUS.views.lesson = function (id) {
    var l = R().lesson(id);
    if (!l) {
      MUS.render('<p class="empty">这一课还在编写中,先看看<a href="#/path">路线上的其他课</a>。</p>');
      return;
    }
    MUS.currentLessonId = id;
    var pi = R().pathIndexOf(id);
    var mod = R().module(l.module);

    var head =
      '<div class="crumb" style="margin-top:14px">' +
      (pi >= 0 ? '<b>第 ' + (pi + 1) + ' 步</b> / ' : '') +
      '模块 ' + mod.no + ' · ' + MUS.esc(mod.title) +
      ' / 第 ' + (l.order || '?') + ' 课</div>' +
      '<h1 class="page">' + MUS.esc(l.title) + '</h1>' +
      '<p class="meta">约 ' + (l.minutes || 5) + ' 分钟' +
      (l.key ? ' · <span class="key">' + MUS.esc(l.key) + '</span>' : '') +
      ' · 虚线术语可点查可收藏</p>';

    var body = SECTS.map(function (s, i) {
      if (!l.sections || !l.sections[s.key]) return '';
      return '<section class="blk"><h2><span class="no">' + '①②③④⑤'[i] + '</span>' +
        s.tag.slice(1).trim() + '</h2>' +
        '<div class="bd">' + l.sections[s.key] + '</div></section>';
    }).join('');

    var foot =
      '<div class="lesson-foot">' +
      '<button class="btn' + (P().isRead(id) ? ' done' : '') + '" id="readBtn">' +
      (P().isRead(id) ? '已学完 ✓(点击取消)' : '✓ 标记已读') + '</button>' +
      '<div class="navlinks">' + pathNav(pi) + '</div></div>';

    MUS.render(head + body + foot);
    bind(l);
  };

  function pathNav(pi) {
    if (pi < 0) return '<a href="#/path">查看路线</a>';
    var path = R().path(), out = [];
    var prev = pi > 0 ? path[pi - 1] : null;
    var next = pi < path.length - 1 ? path[pi + 1] : null;
    if (prev && R().lesson(prev.id)) out.push('<a href="#/l/' + prev.id + '">' + MUS.icon('arrowL', 12) + ' 上一课</a>');
    out.push('<a href="#/path">路线</a>');
    if (next) {
      out.push(R().lesson(next.id)
        ? '<a href="#/l/' + next.id + '">下一课 ' + MUS.icon('arrowR', 12) + '</a>'
        : '<span class="dead">下一课待编写</span>');
    }
    return out.join('');
  }

  function bind(l) {
    var readBtn = document.getElementById('readBtn');
    if (readBtn) readBtn.addEventListener('click', function () {
      if (P().isRead(l.id)) {
        P().unmarkRead(l.id);
        readBtn.classList.remove('done');
        readBtn.textContent = '✓ 标记已读';
      } else {
        P().markRead(l.id);
        readBtn.classList.add('done');
        readBtn.textContent = '已学完 ✓(点击取消)';
      }
    });
  }
})();
