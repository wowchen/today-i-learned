/* 路由引擎 + 启动(文档布局:侧栏 shell + 主区 #app) */
window.ISL = window.ISL || {};

(function() {
  function route() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';

    var map = {
      '':          function(){ ISL.views.home(); },
      'l':         function(){ ISL.views.lesson(parts.slice(1).join('/')); },
      'm':         function(){ ISL.views.module(parts[1]); },
      'timeline':  function(){ ISL.views.timeline(); },
      'figures':   function(){ ISL.views.figures(); },
      'cheatsheet':function(){ ISL.views.cheatsheet(); },
      'compare':   function(){ ISL.views.compare(); },
      'lab':       function(){ ISL.views.lab(parts[1] || ''); },
      'terms':     function(){ ISL.views.terms(); },
      'book':      function(){ ISL.views.myTerms(); },
      'search':    function(){ ISL.views.search(); },
      'settings':  function(){ ISL.views.settings(); }
    };

    if (ISL.renderShell) ISL.renderShell(view, parts);
    (map[view] || map[''])();
    window.scrollTo(0, 0);
    if (ISL.closeDrawer) ISL.closeDrawer();
  }

  ISL.go = function(hash){ window.location.hash = hash; };

  ISL.toggleTheme = function() {
    var cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    ISL.progress().setPref('theme', next);
    if (ISL.renderShell) ISL.renderShell();
  };

  function boot() {
    var prefs = ISL.progress().getPrefs();
    if (prefs.theme) document.documentElement.dataset.theme = prefs.theme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.dataset.theme = 'dark';
    if (prefs.fontSize) document.documentElement.dataset.fs = prefs.fontSize;

    if (ISL.buildShell) ISL.buildShell();
    window.addEventListener('hashchange', route);
    if (ISL.sync) ISL.sync.boot();
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
