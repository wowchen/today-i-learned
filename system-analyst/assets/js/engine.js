/* 路由引擎 + 启动 */
window.SAN = window.SAN || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        SAN.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        SAN.views.lesson(id);
        break;
      case 'm':
        SAN.views.module(parts[1]);
        break;
      case 'terms':
        SAN.views.terms();
        break;
      case 'book':
        SAN.views.myTerms();
        break;
      case 'mistakes':
        SAN.views.mistakes();
        break;
      case 'search':
        SAN.views.search();
        break;
      case 'calc':
        SAN.views.calc();
        break;
      case 'settings':
        SAN.views.settings();
        break;
      default:
        SAN.views.home();
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
    var P = SAN.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    SAN.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
