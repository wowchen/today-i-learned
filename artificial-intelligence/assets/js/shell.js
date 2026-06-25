/* 外壳:左侧模块树 + 移动端抽屉 + 顶栏。engine.js 调用 buildShell/renderShell/closeDrawer。 */
window.AIX = window.AIX || {};

(function() {
  var TOOLS = [
    { v: 'timeline',   hash: '#/timeline',  label: '发展史' },
    { v: 'figures',    hash: '#/figures',   label: '人物图鉴' },
    { v: 'cheatsheet', hash: '#/cheatsheet',label: '大模型速查' },
    { v: 'compare',    hash: '#/compare',   label: '中外对照' },
    { v: 'lab',        hash: '#/lab',       label: '互动实验室' },
    { v: 'terms',      hash: '#/terms',     label: '术语表' },
    { v: 'book',       hash: '#/book',      label: '收藏本' },
    { v: 'search',     hash: '#/search',    label: '搜索' }
  ];

  function lessonsOf(moduleId) {
    var out = [];
    for (var i = 0; i < AIX.path.length; i++) {
      if (AIX.path[i].indexOf(moduleId + '/') === 0) out.push(AIX.path[i]);
    }
    return out;
  }

  function currentState() {
    var hash = window.location.hash || '#/';
    var parts = hash.slice(2).split('/');
    var view = parts[0] || '';
    var st = { view: view, module: null, lesson: null };
    if (view === 'm') st.module = parts[1];
    if (view === 'l') {
      st.lesson = parts.slice(1).join('/');
      st.module = st.lesson.split('/')[0];
    }
    return st;
  }

  AIX.renderShell = function() {
    var side = document.getElementById('side');
    if (!side) return;
    var st = currentState();
    var P = AIX.progress();
    var esc = AIX.esc;

    var h = '';
    h += '<a class="brand" href="#/"><span class="mk">AI</span>' +
         '<span><b>人工智能</b><small>ARTIFICIAL · 通识</small></span></a>';

    h += '<div class="tools">';
    for (var t = 0; t < TOOLS.length; t++) {
      var on = (st.view === TOOLS[t].v) ? ' class="on"' : '';
      h += '<a' + on + ' href="' + TOOLS[t].hash + '">' + TOOLS[t].label + '</a>';
    }
    h += '</div>';

    h += '<div class="tree"><div class="grp">课程模块</div>';
    for (var i = 0; i < AIX.modules.length; i++) {
      var m = AIX.modules[i];
      var mOn = (st.module === m.id) ? ' on' : '';
      var ord = m.order < 10 ? '0' + m.order : '' + m.order;
      h += '<a class="mlink' + mOn + '" href="#/m/' + m.id + '">' +
           '<span class="ix">' + ord + '</span><span>' + esc(m.shortTitle || m.title) + '</span></a>';

      var ls = lessonsOf(m.id);
      var open = (st.module === m.id) ? ' open' : '';
      h += '<div class="leaf' + open + '">';
      for (var j = 0; j < ls.length; j++) {
        var lid = ls[j];
        var lesson = AIX.lessons[lid];
        var title = lesson ? lesson.title : lid.split('/')[1];
        var done = P.isRead(lid) ? ' done' : '';
        var lOn = (st.lesson === lid) ? ' on' : '';
        h += '<a class="' + (done ? 'done' : '') + lOn + '" href="#/l/' + lid + '">' +
             '<span class="dot"></span>' + esc(title) + '</a>';
      }
      h += '</div>';
    }
    h += '</div>';

    h += '<div class="foot">';
    h += '<button id="theme-btn" title="切换深浅">' +
         (document.documentElement.dataset.theme === 'dark' ? '☼ 浅色' : '☾ 深色') + '</button>';
    h += '<a href="#/settings" title="设置">设置</a>';
    h += '<span class="sp"></span>';
    h += '<a href="../" title="返回总站">↗ 总站</a>';
    h += '</div>';

    side.innerHTML = h;

    var tb = document.getElementById('theme-btn');
    if (tb) tb.addEventListener('click', AIX.toggleTheme);
  };

  AIX.closeDrawer = function() {
    var shell = document.getElementById('app-shell');
    if (shell) shell.classList.remove('drawer');
  };

  AIX.buildShell = function() {
    var burger = document.getElementById('burger');
    var scrim = document.getElementById('scrim');
    var shell = document.getElementById('app-shell');
    if (burger && shell) burger.addEventListener('click', function() { shell.classList.toggle('drawer'); });
    if (scrim && shell) scrim.addEventListener('click', function() { shell.classList.remove('drawer'); });
    AIX.renderShell();
  };
})();
