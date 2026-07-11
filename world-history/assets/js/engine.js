/* 路由引擎 + 启动 */
window.WHS = window.WHS || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        WHS.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        WHS.views.lesson(id);
        break;
      case 'm':
        WHS.views.module(parts[1]);
        break;
      case 'terms':
        WHS.views.terms();
        break;
      case 'book':
        WHS.views.myTerms();
        break;
      case 'search':
        WHS.views.search();
        break;
      case 'tools':
        WHS.views.tools();
        break;
      case 'timeline':
        WHS.views.timeline();
        break;
      case 'figures':
        WHS.views.figures();
        break;
      case 'civ-table':
        WHS.views.civTable();
        break;
      case 'cross-ref':
        WHS.views.crossRef();
        break;
      case 'settings':
        WHS.views.settings();
        break;
      default:
        WHS.views.home();
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

  // 主题切换
  WHS.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    var P = WHS.progress();
    P.setPref('theme', next);
  };

  function boot() {
    var P = WHS.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) {
      document.documentElement.dataset.theme = prefs.theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.dataset.theme = 'dark';
    }
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    WHS.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();