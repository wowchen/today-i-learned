/* 内容注册中心:内容即数据(ADR-3)。
   内容文件(content/**.js)通过 <script> 标签加载,调用
   FYP.registerModule / FYP.registerPath / FYP.registerLesson / FYP.registerTerms
   把自己注册进来——file:// 下无需 fetch,绕开 CORS,零构建。 */
(function () {
  'use strict';
  window.FYP = window.FYP || {};

  var modules = {};        // id -> {id, no, short, title, sub, desc}
  var moduleOrder = [];
  var lessons = {};        // id -> lesson 数据(五段模板,见 CLAUDE.md)
  var path = [];           // 学习路线:[{id, title, module}] 有序;未编写的课程占位
  var terms = {};          // id -> {id, name, en, def, analogy, lesson}
  var termOrder = [];

  FYP.registerModule = function (m) {
    if (!m || !m.id) return;
    if (!modules[m.id]) moduleOrder.push(m.id);
    modules[m.id] = m;
  };

  FYP.registerPath = function (list) { path = list || []; };

  FYP.registerLesson = function (l) {
    if (!l || !l.id || !l.module) return;
    lessons[l.id] = l;
  };

  /* 术语库:数组批量注册,可多次调用(分模块扩充) */
  FYP.registerTerms = function (list) {
    (list || []).forEach(function (t) {
      if (!t || !t.id) return;
      if (!terms[t.id]) termOrder.push(t.id);
      terms[t.id] = t;
    });
  };

  FYP.registry = {
    module: function (id) { return modules[id]; },
    modules: function () {
      return moduleOrder.map(function (id) { return modules[id]; });
    },
    lesson: function (id) { return lessons[id]; },
    lessonsOf: function (moduleId) {
      return Object.keys(lessons).map(function (k) { return lessons[k]; })
        .filter(function (l) { return l.module === moduleId; })
        .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
    },
    path: function () { return path; },
    pathIndexOf: function (lessonId) {
      for (var i = 0; i < path.length; i++) if (path[i].id === lessonId) return i;
      return -1;
    },
    term: function (id) { return terms[id]; },
    termByName: function (name) {
      name = String(name || '').trim();
      for (var i = 0; i < termOrder.length; i++) {
        var t = terms[termOrder[i]];
        if (t.name === name) return t;
      }
      return null;
    },
    terms: function () {
      return termOrder.map(function (id) { return terms[id]; });
    },
    /* 全文搜索:课程(标题/关键词/正文去标签) + 术语(名称/定义) */
    search: function (q) {
      q = (q || '').trim().toLowerCase();
      if (!q) return { lessons: [], terms: [] };
      var hitL = [], hitT = [];
      Object.keys(lessons).forEach(function (k) {
        var l = lessons[k];
        var hay = [l.title, (l.keywords || []).join(' '),
          stripHtml(sectionsText(l))].join(' ').toLowerCase();
        if (hay.indexOf(q) >= 0) {
          hitL.push({ lesson: l, snippet: makeSnippet(stripHtml(sectionsText(l)), q) });
        }
      });
      termOrder.forEach(function (id) {
        var t = terms[id];
        var hay = [t.name, t.en || '', t.def, t.analogy || ''].join(' ').toLowerCase();
        if (hay.indexOf(q) >= 0) hitT.push(t);
      });
      return { lessons: hitL, terms: hitT };
    }
  };

  function sectionsText(l) {
    if (!l.sections) return '';
    return ['what', 'why', 'how', 'pitfalls', 'links'].map(function (s) {
      return l.sections[s] || '';
    }).join(' ');
  }
  function stripHtml(s) {
    var d = document.createElement('div');
    d.innerHTML = s;
    return d.textContent || '';
  }
  function makeSnippet(text, q) {
    var i = text.toLowerCase().indexOf(q);
    if (i < 0) return text.slice(0, 90) + '…';
    var start = Math.max(0, i - 36);
    return (start > 0 ? '…' : '') + text.slice(start, i + q.length + 54) + '…';
  }
})();
