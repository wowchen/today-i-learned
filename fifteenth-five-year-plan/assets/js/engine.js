/* 引擎启动:hash 路由、侧边图签索引、顶部导航高亮、偏好应用。 */
(function () {
  'use strict';

  /* ── 路由表:#/  #/path  #/m/<id>  #/l/<id>  #/terms  #/book  #/review  #/search  #/settings ── */
  function route() {
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = h.split('/');
    var name = parts[0] || 'home';
    FYP.currentLessonId = '';

    if (name === '' || name === 'home') FYP.views.home();
    else if (name === 'path') FYP.views.path();
    else if (name === 'm' && parts[1]) FYP.views.module(parts[1]);
    else if (name === 'l' && parts[1]) FYP.views.lesson(parts[1]);
    else if (name === 'terms') FYP.views.terms();
    else if (name === 'book') FYP.views.book();
    else if (name === 'review') FYP.views.review();
    else if (name === 'search') FYP.views.search();
    else if (name === 'settings') FYP.views.settings();
    else FYP.views.home();

    paintNav(name, parts[1]);
  }

  /* ── 当前模块(用于侧边图签高亮) ── */
  function currentModule(name, arg) {
    if (name === 'm') return arg;
    if (name === 'l') {
      var l = FYP.registry.lesson(arg);
      if (l) return l.module;
    }
    if (name === '' || name === 'home' || name === 'path') {
      var next = FYP.nextStep && FYP.nextStep();
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
      var n = FYP.progress.listTerms().length;
      badge.textContent = n ? String(n) : '';
    }
  }

  /* 侧边图签:模块短名(导览不占签,走首页) */
  function buildThumb() {
    var nav = document.getElementById('thumbNav');
    nav.innerHTML = FYP.registry.modules()
      .filter(function (m) { return m.id !== 'guide'; })
      .map(function (m) {
        return '<a href="#/m/' + m.id + '" data-mod="' + m.id + '">' + FYP.esc(m.short) + '</a>';
      }).join('');
  }

  /* ── 进度变化时刷新角标(由 progress.save 回调) ── */
  FYP.onProgressChange = refreshBadge;

  /* ── 启动 ── */
  function boot() {
    // 应用本机偏好(默认深色蓝晒)
    var theme = FYP.progress.pref('theme');
    var fs = FYP.progress.pref('fs');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    if (fs) document.documentElement.setAttribute('data-fs', fs);

    buildThumb();
    route();
    window.addEventListener('hashchange', route);

    // 配置过同步则启动时拉取合并;之后数据变更自动推送
    FYP.sync.boot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
