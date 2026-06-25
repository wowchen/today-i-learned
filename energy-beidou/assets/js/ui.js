/* UI 工具层:转义、渲染、线性图标。
   术语点查(<gd>)的交互在 terms.js;本文件只放纯工具。 */
(function () {
  'use strict';
  window.EBD = window.EBD || {};
  EBD.views = {};            // 各视图文件往这里注册
  EBD.currentLessonId = '';  // 收藏术语时记录来源课程

  EBD.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  EBD.render = function (html) {
    document.getElementById('app').innerHTML = html;
    window.scrollTo(0, 0);
  };

  /* 线性图标(stroke SVG,不用 emoji)。用法:EBD.icon('star') */
  var ICONS = {
    star: '<path d="M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.2L8 11.5l-3.8 2 .7-4.2-3.1-3 4.3-.6z"/>',
    check: '<path d="M2.5 8.5l3.5 3.5 7.5-8"/>',
    arrowR: '<path d="M3 8h10M9 4l4 4-4 4"/>',
    arrowL: '<path d="M13 8H3M7 4L3 8l4 4"/>',
    search: '<circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/>',
    flame: '<path d="M8 1.5c1 2.5 4 3.8 4 7a4 4 0 0 1-8 0c0-1.5.7-2.6 1.5-3.7.3 1 .9 1.7 1.5 2 0-2 .2-4 1-5.3z"/>',
    book: '<path d="M2.5 2.5h8a2 2 0 0 1 2 2v9h-8a2 2 0 0 0-2 2z"/><path d="M2.5 13.5v-11"/>'
  };
  EBD.icon = function (name, size) {
    var body = ICONS[name];
    if (!body) return '';
    return '<svg class="li" width="' + (size || 14) + '" height="' + (size || 14) +
      '" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ' +
      'style="vertical-align:-2px">' + body + '</svg>';
  };
})();
