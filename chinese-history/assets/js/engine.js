/* 路由引擎 + 启动 */
window.CHS = window.CHS || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        CHS.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        CHS.views.lesson(id);
        break;
      case 'm':
        CHS.views.module(parts[1]);
        break;
      case 'terms':
        CHS.views.terms();
        break;
      case 'book':
        CHS.views.myTerms();
        break;
      case 'search':
        CHS.views.search();
        break;
      case 'tools':
        CHS.views.tools();
        break;
      case 'timeline':
        CHS.views.timeline();
        break;
      case 'figures':
        CHS.views.figures();
        break;
      case 'era-table':
        CHS.views.eraTable();
        break;
      case 'year-convert':
        CHS.views.yearConvert();
        break;
      case 'settings':
        CHS.views.settings();
        break;
      default:
        CHS.views.home();
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
  CHS.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    var P = CHS.progress();
    P.setPref('theme', next);
  };

  function boot() {
    var P = CHS.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) {
      document.documentElement.dataset.theme = prefs.theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.dataset.theme = 'dark';
    }
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    route();

    // 配置过同步则启动时拉取合并;之后数据变更自动推送
    CHS.sync.boot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();