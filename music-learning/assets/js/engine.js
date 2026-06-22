/* 引擎启动:hash 路由、侧边图签索引、顶部导航高亮、偏好应用。 */
(function () {
  'use strict';

  /* ── 路由表:#/  #/path  #/m/<id>  #/l/<id>  #/terms  #/book  #/review  #/search  #/settings ── */
  function route() {
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = h.split('/');
    var name = parts[0] || 'home';
    MUS.currentLessonId = '';

    if (name === '' || name === 'home') MUS.views.home();
    else if (name === 'path') MUS.views.path();
    else if (name === 'm' && parts[1]) MUS.views.module(parts[1]);
    else if (name === 'l' && parts[1]) MUS.views.lesson(parts[1]);
    else if (name === 'terms') MUS.views.terms();
    else if (name === 'book') MUS.views.book();
    else if (name === 'review') MUS.views.review();
    else if (name === 'search') MUS.views.search();
    else if (name === 'settings') MUS.views.settings();
    else MUS.views.home();

    paintNav(name, parts[1]);
  }

  /* ── 当前模块(用于侧边图签高亮) ── */
  function currentModule(name, arg) {
    if (name === 'm') return arg;
    if (name === 'l') {
      var l = MUS.registry.lesson(arg);
      if (l) return l.module;
    }
    if (name === '' || name === 'home' || name === 'path') {
      var next = MUS.nextStep && MUS.nextStep();
      return next ? next.step.module : '';
    }
    return '';
  }

  function paintNav(name, arg) {
    var modId = currentModule(name, arg);
    document.querySelectorAll('#thumbNav a').forEach(function (a) {
      a.classList.toggle('now', a.getAttribute('data-mod') === modId && !!modId);
    });
    var topKey = (name === '' || name === 'home' || name === 'm' || name === 'l') ? 'home'
      : name === 'path' ? 'path'
        : name === 'review' ? 'book'
          : name;
    document.querySelectorAll('#topNav a').forEach(function (a) {
      a.classList.toggle('now', a.getAttribute('data-nav') === topKey);
    });
    refreshBadge();
  }

  function refreshBadge() {
    var badge = document.getElementById('navTermCount');
    if (badge) {
      var n = MUS.progress.listTerms().length;
      badge.textContent = n ? String(n) : '';
    }
  }

  /* 侧边图签:模块短名(导览不占签,走首页) */
  function buildThumb() {
    var nav = document.getElementById('thumbNav');
    nav.innerHTML = MUS.registry.modules()
      .filter(function (m) { return m.id !== 'guide'; })
      .map(function (m) {
        return '<a href="#/m/' + m.id + '" data-mod="' + m.id + '">' + MUS.esc(m.short) + '</a>';
      }).join('');
  }

  /* ── 进度变化时刷新角标(由 progress.save 回调) ── */
  MUS.onProgressChange = refreshBadge;

  /* ── 启动 ── */
  function boot() {
    // 应用本机偏好(默认深色蓝晒)
    var theme = MUS.progress.pref('theme');
    var fs = MUS.progress.pref('fs');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    if (fs) document.documentElement.setAttribute('data-fs', fs);

    buildThumb();
    route();
    window.addEventListener('hashchange', route);

    // 配置过同步则启动时拉取合并;之后数据变更自动推送
    MUS.sync.boot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
