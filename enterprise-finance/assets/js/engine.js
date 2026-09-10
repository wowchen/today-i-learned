/* 路由引擎 + 启动 */
window.FIN = window.FIN || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        FIN.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        FIN.views.lesson(id);
        break;
      case 'm':
        FIN.views.module(parts[1]);
        break;
      case 'terms':
        FIN.views.terms();
        break;
      case 'book':
        FIN.views.myTerms();
        break;
      case 'search':
        FIN.views.search();
        break;
      case 'calc':
        FIN.views.calc();
        break;
      case 'settings':
        FIN.views.settings();
        break;
      default:
        FIN.views.home();
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
  FIN.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    var P = FIN.progress();
    P.setPref('theme', next);
  };

  function boot() {
    var P = FIN.progress();
    var prefs = P.getPrefs();
    // 主题:已有偏好优先,否则跟随系统
    if (prefs.theme) {
      document.documentElement.dataset.theme = prefs.theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.dataset.theme = 'dark';
    }
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    FIN.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
