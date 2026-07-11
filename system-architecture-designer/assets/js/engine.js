/* 路由引擎 + 启动 */
window.SAD = window.SAD || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        SAD.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        SAD.views.lesson(id);
        break;
      case 'm':
        SAD.views.module(parts[1]);
        break;
      case 'terms':
        SAD.views.terms();
        break;
      case 'book':
        SAD.views.myTerms();
        break;
      case 'mistakes':
        SAD.views.mistakes();
        break;
      case 'search':
        SAD.views.search();
        break;
      case 'calc':
        SAD.views.calc();
        break;
      case 'settings':
        SAD.views.settings();
        break;
      default:
        SAD.views.home();
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

  function boot() {
    var P = SAD.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    SAD.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
