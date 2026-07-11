/* 路由引擎 + 启动 */
window.NPD = window.NPD || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        NPD.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        NPD.views.lesson(id);
        break;
      case 'm':
        NPD.views.module(parts[1]);
        break;
      case 'terms':
        NPD.views.terms();
        break;
      case 'book':
        NPD.views.myTerms();
        break;
      case 'mistakes':
        NPD.views.mistakes();
        break;
      case 'search':
        NPD.views.search();
        break;
      case 'calc':
        NPD.views.calc();
        break;
      case 'settings':
        NPD.views.settings();
        break;
      default:
        NPD.views.home();
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
    var P = NPD.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    route();

    // 配置过同步则启动时拉取合并;之后数据变更自动推送
    NPD.sync.boot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
