/* 路由引擎 + 启动(文档布局:侧栏 shell + 主区 #app) */
window.AIX = window.AIX || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    var map = {
      '':          function(){ AIX.views.home(); },
      'l':         function(){ AIX.views.lesson(parts.slice(1).join('/')); },
      'm':         function(){ AIX.views.module(parts[1]); },
      'timeline':  function(){ AIX.views.timeline(); },
      'figures':   function(){ AIX.views.figures(); },
      'cheatsheet':function(){ AIX.views.cheatsheet(); },
      'compare':   function(){ AIX.views.compare(); },
      'lab':       function(){ AIX.views.lab(parts[1] || ''); },
      'terms':     function(){ AIX.views.terms(); },
      'book':      function(){ AIX.views.myTerms(); },
      'search':    function(){ AIX.views.search(); },
      'settings':  function(){ AIX.views.settings(); }
    };

    if (AIX.renderShell) AIX.renderShell(view, parts);
    (map[view] || map[''])();
    window.scrollTo(0, 0);
    if (AIX.closeDrawer) AIX.closeDrawer();
  }

  AIX.go = function(hash){ window.location.hash = hash; };

  AIX.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    AIX.progress().setPref('theme', next);
    if (AIX.renderShell) AIX.renderShell();
  };

  function boot() {
    var prefs = AIX.progress().getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.dataset.theme = 'dark';
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    if (AIX.buildShell) AIX.buildShell();
    window.addEventListener('hashchange', route);
    AIX.sync.boot();
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
