/* 内容注册中心:内容即数据。
   内容文件(content/**.js)通过 <script> 标签加载,调用 EMS.registerModule / EMS.registerLesson
   把自己注册进来——这样 file:// 下无需 fetch,绕开 CORS,零构建。 */
(function () {
  'use strict';
  window.EMS = window.EMS || {};

  var modules = {};        // id -> {id, no, title, short, tagline, desc}
  var moduleOrder = [];
  var lessons = {};        // id -> lesson 数据(五段模板,见 CLAUDE.md)
  var path = [];           // 学习路线:[{id, title, module}] 有序;未编写的课程也可占位

  EMS.registerModule = function (m) {
    if (!m || !m.id) return;
    if (!modules[m.id]) moduleOrder.push(m.id);
    modules[m.id] = m;
  };

  EMS.registerPath = function (list) { path = list || []; };

  EMS.registerLesson = function (l) {
    if (!l || !l.id || !l.module) return;
    lessons[l.id] = l;
  };

  EMS.registry = {
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
    // 全文搜索索引:从注册数据自动生成(标题/关键词/正文去标签)
    search: function (q) {
      q = (q || '').trim().toLowerCase();
      if (!q) return [];
      var out = [];
      Object.keys(lessons).forEach(function (k) {
        var l = lessons[k];
        var hay = [l.title, (l.keywords || []).join(' '),
          stripHtml(sectionsText(l))].join(' ').toLowerCase();
        if (hay.indexOf(q) >= 0) {
          out.push({ lesson: l, snippet: makeSnippet(stripHtml(sectionsText(l)), q) });
        }
      });
      return out;
    }
  };

  function sectionsText(l) {
    if (!l.sections) return '';
    return ['what', 'when', 'how', 'pitfalls'].map(function (s) {
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
