/* 路由引擎 + 启动 */
window.VPP = window.VPP || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        VPP.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        VPP.views.lesson(id);
        break;
      case 'm':
        VPP.views.module(parts[1]);
        break;
      case 'terms':
        VPP.views.terms();
        break;
      case 'book':
        VPP.views.myTerms();
        break;
      case 'search':
        VPP.views.search();
        break;
      case 'calc':
        VPP.views.calc();
        break;
      case 'settings':
        VPP.views.settings();
        break;
      default:
        VPP.views.home();
    }

    window.scrollTo(0, 0);
  }

  function updateNav(view) {
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';
      var target = href.slice(2).split('/')[0] || '';
      links[i].classList.toggle('active', target === view);
    }
  }

  // 主题切换(顶栏按钮调用):写入进度 prefs.theme + data-theme,深浅互换
  VPP.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    var P = VPP.progress();
    P.setPref('theme', next);
  };

  function boot() {
    var P = VPP.progress();
    var prefs = P.getPrefs();
    // 主题:已有偏好优先,否则跟随系统
    if (prefs.theme) {
      document.documentElement.dataset.theme = prefs.theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.dataset.theme = 'dark';
    }
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    VPP.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
