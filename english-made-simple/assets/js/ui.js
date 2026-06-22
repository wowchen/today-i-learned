/* UI 工具层:转义、富文本(<en> → 点读)、渲染、收藏浮条。 */
(function () {
  'use strict';
  window.EMS = window.EMS || {};
  EMS.views = {};            // 各视图文件往这里注册
  EMS.currentLessonId = '';  // 收藏时记录来源课程

  EMS.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* 内容约定:英文用 <en>…</en> 包裹,这里统一转成可点读的 span.w */
  EMS.rich = function (html) {
    return String(html || '').replace(/<en>([\s\S]*?)<\/en>/g, function (_, t) {
      var plain = t.replace(/<[^>]*>/g, '').trim();
      return '<span class="w" data-say="' + EMS.esc(plain) + '">' + t + '</span>';
    });
  };

  EMS.render = function (html) {
    document.getElementById('app').innerHTML = html;
    window.scrollTo(0, 0);
  };

  /* ── 收藏浮条:点任意 .w 单词,在其下方浮出「☆ 收藏」 ── */
  var pop = null, popTimer = null;

  function hidePop() { if (pop) pop.style.display = 'none'; }

  function showPop(w) {
    var term = (w.getAttribute('data-say') || w.textContent).trim();
    if (!term) return;
    if (!pop) {
      pop = document.createElement('div');
      pop.id = 'wordPop';
      document.body.appendChild(pop);
    }
    if (EMS.progress.hasVocab(term)) {
      pop.innerHTML = '<span>已在生词本 ✓</span>';
    } else {
      pop.innerHTML = '<button type="button">☆ 收藏 ' + EMS.esc(term) + '</button>';
      pop.querySelector('button').onclick = function (ev) {
        ev.stopPropagation();
        EMS.progress.addVocab(term, '', EMS.currentLessonId);
        pop.innerHTML = '<span>已收藏 ✓</span>';
        clearTimeout(popTimer);
        popTimer = setTimeout(hidePop, 1200);
      };
    }
    var r = w.getBoundingClientRect();
    pop.style.display = 'flex';
    pop.style.left = Math.max(8, window.scrollX + r.left) + 'px';
    pop.style.top = (window.scrollY + r.bottom + 8) + 'px';
    clearTimeout(popTimer);
    popTimer = setTimeout(hidePop, 3000);
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var w = e.target.closest('.w');
    if (w) { showPop(w); return; }
    if (!e.target.closest('#wordPop')) hidePop();
  });
})();
