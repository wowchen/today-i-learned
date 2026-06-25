/* 术语点查(ADR-8,全站灵魂):
   课程正文里 <gd data-term="id">术语</gd>,点击在其下方弹出小卡片
   (大白话定义 + 类比 + 去那一课 + 收藏)。全局事件委托,一处实现全站生效。
   data-term 省略时按文本内容查术语名。 */
(function () {
  'use strict';
  window.EBD = window.EBD || {};

  var pop = null, popTimer = null;

  function el() {
    if (!pop) {
      pop = document.createElement('div');
      pop.id = 'termPop';
      document.body.appendChild(pop);
    }
    return pop;
  }
  function hide() { if (pop) pop.style.display = 'none'; }

  function lookup(g) {
    var id = g.getAttribute('data-term');
    if (id) {
      var t = EBD.registry.term(id);
      if (t) return t;
    }
    return EBD.registry.termByName(g.textContent.trim());
  }

  function show(g) {
    var t = lookup(g);
    var p = el();
    if (!t) {
      // 术语库还没收录:仍给出占位提示,提醒内容侧补条目
      p.innerHTML = '<div class="t">' + EBD.esc(g.textContent.trim()) + '</div>' +
        '<div class="a">这个术语的卡片还没编写。</div>';
    } else {
      var faved = EBD.progress.hasTerm(t.id);
      var lessonLink = '';
      if (t.lesson && EBD.registry.lesson(t.lesson)) {
        lessonLink = '<a href="#/l/' + t.lesson + '">去那一课 ' + EBD.icon('arrowR', 12) + '</a>';
      }
      p.innerHTML =
        '<div class="t">' + EBD.esc(t.name) +
        (t.en ? '<small>' + EBD.esc(t.en) + '</small>' : '') + '</div>' +
        '<div class="d">' + EBD.esc(t.def) + '</div>' +
        (t.analogy ? '<div class="a">类比:' + EBD.esc(t.analogy) + '</div>' : '') +
        '<div class="ops">' +
        (faved
          ? '<button type="button" class="faved">已在术语本 ✓</button>'
          : '<button type="button" class="fav">' + EBD.icon('star', 12) + ' 收藏</button>') +
        lessonLink + '</div>';
      var favBtn = p.querySelector('.fav');
      if (favBtn) favBtn.onclick = function (ev) {
        ev.stopPropagation();
        EBD.progress.addTerm(t.id, EBD.currentLessonId);
        favBtn.outerHTML = '<button type="button" class="faved">已收藏 ✓</button>';
        clearTimeout(popTimer);
        popTimer = setTimeout(hide, 1400);
      };
    }
    var r = g.getBoundingClientRect();
    p.style.display = 'block';
    var left = window.scrollX + r.left;
    p.style.left = Math.max(8, Math.min(left, window.scrollX + window.innerWidth - 320)) + 'px';
    p.style.top = (window.scrollY + r.bottom + 8) + 'px';
    clearTimeout(popTimer);
    popTimer = setTimeout(hide, 6000);
  }

  /* 术语表/术语本里也能点开卡片:任何带 data-termpop 的元素同样触发 */
  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var g = e.target.closest('gd, [data-termpop]');
    if (g) { show(g); return; }
    if (!e.target.closest('#termPop')) hide();
  });

  window.addEventListener('hashchange', hide);
})();
