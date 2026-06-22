/* 引擎启动:hash 路由、侧边便利贴索引(选中底色切换)、顶部导航、偏好应用。 */
(function () {
  'use strict';

  /* ── 路由表:#/  #/path  #/m/<id>  #/l/<id>  #/review  #/book  #/search  #/settings ── */
  function route() {
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = h.split('/');
    var name = parts[0] || 'home';
    EMS.currentLessonId = '';

    if (name === '' || name === 'home') EMS.views.home();
    else if (name === 'path') EMS.views.path();
    else if (name === 'm' && parts[1]) EMS.views.module(parts[1]);
    else if (name === 'l' && parts[1]) EMS.views.lesson(parts[1]);
    else if (name === 'review') EMS.views.review();
    else if (name === 'book') EMS.views.book();
    else if (name === 'search') EMS.views.search();
    else if (name === 'settings') EMS.views.settings();
    else EMS.views.home();

    paintNav(name, parts[1]);
  }

  /* ── 侧边便利贴 + 顶部导航高亮 ── */
  function currentModule(name, arg) {
    if (name === 'm') return arg;
    if (name === 'l') {
      var l = EMS.registry.lesson(arg);
      if (l) return l.module;
    }
    if (name === '' || name === 'home' || name === 'path') {
      var next = EMS.nextStep && EMS.nextStep();
      return next ? next.step.module : '';
    }
    return '';
  }

  function paintNav(name, arg) {
    var modId = currentModule(name, arg);
    // 侧边标签:选中项底色切换(荧光黄 .now)
    document.querySelectorAll('#thumbNav a').forEach(function (a) {
      a.classList.toggle('now', a.getAttribute('data-mod') === modId && !!modId);
    });
    // 顶部导航
    var topKey = (name === '' || name === 'home' || name === 'm' || name === 'l') ? 'home'
      : name === 'path' ? 'path'
        : name === 'review' ? 'book'
          : name;
    document.querySelectorAll('#topNav a').forEach(function (a) {
      a.classList.toggle('now', a.getAttribute('data-nav') === topKey);
    });
    // 生词本角标
    var badge = document.getElementById('navVocabCount');
    if (badge) {
      var n = EMS.progress.listVocab().length;
      badge.textContent = n ? String(n) : '';
    }
  }

  function buildThumb() {
    var nav = document.getElementById('thumbNav');
    nav.innerHTML = EMS.registry.modules()
      .filter(function (m) { return m.id !== 'guide'; }) // 标签放 8 个学习模块;导览走首页
      .map(function (m) {
        return '<a href="#/m/' + m.id + '" data-mod="' + m.id + '">' + EMS.esc(m.short) + '</a>';
      }).join('');
  }

  /* ── 进度变化时刷新角标(由 progress.save 回调) ── */
  EMS.onProgressChange = function () {
    var badge = document.getElementById('navVocabCount');
    if (badge) {
      var n = EMS.progress.listVocab().length;
      badge.textContent = n ? String(n) : '';
    }
  };

  /* ── 启动 ── */
  function boot() {
    // 应用本机偏好
    var theme = EMS.progress.pref('theme');
    var fs = EMS.progress.pref('fs');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    if (fs) document.documentElement.setAttribute('data-fs', fs);

    buildThumb();
    route();
    window.addEventListener('hashchange', route);

    // 配置过同步则启动时拉取合并;之后数据变更自动推送
    EMS.sync.boot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
