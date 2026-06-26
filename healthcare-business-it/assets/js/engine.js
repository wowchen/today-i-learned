/* 路由引擎 + 启动(文档布局:侧栏 shell + 主区 #app) */
window.HIT = window.HIT || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    var map = {
      '':          function(){ HIT.views.home(); },
      'l':         function(){ HIT.views.lesson(parts.slice(1).join('/')); },
      'm':         function(){ HIT.views.module(parts[1]); },
      'timeline':  function(){ HIT.views.timeline(); },
      'figures':   function(){ HIT.views.figures(); },
      'cheatsheet':function(){ HIT.views.cheatsheet(); },
      'compare':   function(){ HIT.views.compare(); },
      'lab':       function(){ HIT.views.lab(parts[1] || ''); },
      'terms':     function(){ HIT.views.terms(); },
      'book':      function(){ HIT.views.myTerms(); },
      'search':    function(){ HIT.views.search(); },
      'settings':  function(){ HIT.views.settings(); }
    };

    if (HIT.renderShell) HIT.renderShell(view, parts);
    (map[view] || map[''])();
    window.scrollTo(0, 0);
    if (HIT.closeDrawer) HIT.closeDrawer();
  }

  HIT.go = function(hash){ window.location.hash = hash; };

  HIT.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    HIT.progress().setPref('theme', next);
    if (HIT.renderShell) HIT.renderShell();
  };

  function boot() {
    var prefs = HIT.progress().getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.dataset.theme = 'dark';
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    if (HIT.buildShell) HIT.buildShell();
    window.addEventListener('hashchange', route);
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
