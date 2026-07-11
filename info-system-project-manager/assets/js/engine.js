/* 路由引擎 + 启动 */
window.ISPM = window.ISPM || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        ISPM.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        ISPM.views.lesson(id);
        break;
      case 'm':
        ISPM.views.module(parts[1]);
        break;
      case 'terms':
        ISPM.views.terms();
        break;
      case 'book':
        ISPM.views.myTerms();
        break;
      case 'mistakes':
        ISPM.views.mistakes();
        break;
      case 'search':
        ISPM.views.search();
        break;
      case 'calc':
        ISPM.views.calc();
        break;
      case 'settings':
        ISPM.views.settings();
        break;
      default:
        ISPM.views.home();
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
    var P = ISPM.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    if (ISPM.sync) ISPM.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
