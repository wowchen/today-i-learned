/* 路由引擎 + 启动(克隆 AI+电力站,命名空间 AIP->WAH;增加艺术史工具子路由) */
window.WAH = window.WAH || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    updateNav(view);

    switch(view) {
      case '':
        WAH.views.home();
        break;
      case 'l':
        var id = parts.slice(1).join('/');
        WAH.views.lesson(id);
        break;
      case 'm':
        WAH.views.module(parts[1]);
        break;
      case 'terms':
        WAH.views.terms();
        break;
      case 'book':
        WAH.views.myTerms();
        break;
      case 'search':
        WAH.views.search();
        break;
      case 'calc':
        WAH.views.tools();
        break;
      case 'timeline':
        WAH.views.timeline();
        break;
      case 'figures':
        WAH.views.figures();
        break;
      case 'styles':
        WAH.views.styles();
        break;
      case 'cross-ref':
        WAH.views.crossRef();
        break;
      case 'settings':
        WAH.views.settings();
        break;
      default:
        WAH.views.home();
    }

    window.scrollTo(0, 0);
  }

  function updateNav(view) {
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';
      var target = href.slice(2).split('/')[0] || '';
      // 工具子页(timeline/figures/styles/cross-ref)高亮"工具"
      if (target === 'calc' && (view === 'timeline' || view === 'figures' || view === 'styles' || view === 'cross-ref')) {
        links[i].classList.add('active');
      } else {
        links[i].classList.toggle('active', target === view);
      }
    }
  }

  // 主题切换(顶栏按钮调用):写入进度 prefs.theme + data-theme,深浅互换
  WAH.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    var P = WAH.progress();
    P.setPref('theme', next);
  };

  function boot() {
    var P = WAH.progress();
    var prefs = P.getPrefs();
    if (prefs.theme) {
      document.documentElement.dataset.theme = prefs.theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.dataset.theme = 'dark';
    }
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    window.addEventListener('hashchange', route);
    WAH.sync.boot();
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
