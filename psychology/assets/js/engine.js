/* 路由引擎 + 启动(文档布局:侧栏 shell + 主区 #app) */
window.PSY = window.PSY || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    var map = {
      '':          function(){ PSY.views.home(); },
      'l':         function(){ PSY.views.lesson(parts.slice(1).join('/')); },
      'm':         function(){ PSY.views.module(parts[1]); },
      'timeline':  function(){ PSY.views.timeline(); },
      'figures':   function(){ PSY.views.figures(); },
      'cheatsheet':function(){ PSY.views.cheatsheet(); },
      'compare':   function(){ PSY.views.compare(); },
      'lab':       function(){ PSY.views.lab(parts[1] || ''); },
      'terms':     function(){ PSY.views.terms(); },
      'book':      function(){ PSY.views.myTerms(); },
      'search':    function(){ PSY.views.search(); },
      'settings':  function(){ PSY.views.settings(); }
    };

    if (PSY.renderShell) PSY.renderShell(view, parts);
    (map[view] || map[''])();
    window.scrollTo(0, 0);
    if (PSY.closeDrawer) PSY.closeDrawer();
  }

  PSY.go = function(hash){ window.location.hash = hash; };

  PSY.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    PSY.progress().setPref('theme', next);
    if (PSY.renderShell) PSY.renderShell();
  };

  function boot() {
    var prefs = PSY.progress().getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.dataset.theme = 'dark';
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    if (PSY.buildShell) PSY.buildShell();
    window.addEventListener('hashchange', route);
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
