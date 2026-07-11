/* 路由引擎 + 启动 */
window.SPM = window.SPM || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        SPM.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        SPM.views.lesson(id);
        break;
      case 'm':
        SPM.views.module(parts[1]);
        break;
      case 'terms':
        SPM.views.terms();
        break;
      case 'book':
        SPM.views.myTerms();
        break;
      case 'mistakes':
        SPM.views.mistakes();
        break;
      case 'search':
        SPM.views.search();
        break;
      case 'calc':
        SPM.views.calc();
        break;
      case 'settings':
        SPM.views.settings();
        break;
      default:
        SPM.views.home();
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
    var P = SPM.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    SPM.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
