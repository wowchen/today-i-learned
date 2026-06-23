/* 渲染工具 + 术语弹窗 */
window.PFIN = window.PFIN || {};

PFIN.esc = function(s) {
  if (!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
};

PFIN.render = function(html) {
  document.getElementById('app').innerHTML = html;
  PFIN.bindTerms();
};

PFIN.findTerm = function(id) {
  for (var i = 0; i < PFIN.terms.length; i++) {
    if (PFIN.terms[i].id === id) return PFIN.terms[i];
  }
  return null;
};

PFIN.bindTerms = function() {
  var els = document.querySelectorAll('gd[data-term]');
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function(e) {
      var id = this.getAttribute('data-term');
      PFIN.showTermCard(id, this);
    });
  }
};

PFIN.showTermCard = function(id, anchor) {
  var old = document.getElementById('term-popover');
  if (old) old.remove();

  var term = PFIN.findTerm(id);
  if (!term) return;

  var P = PFIN.progress();
  var collected = P.hasTerm(id);

  var card = document.createElement('div');
  card.id = 'term-popover';
  card.className = 'term-card';
  card.innerHTML =
    '<div class="tc-head"><b>' + PFIN.esc(term.name) + '</b> <span class="tc-en">' + PFIN.esc(term.en) + '</span></div>' +
    '<div class="tc-def">' + PFIN.esc(term.def) + '</div>' +
    (term.analogy ? '<div class="tc-analogy">' + PFIN.esc(term.analogy) + '</div>' : '') +
    '<button class="tc-btn" data-id="' + id + '">' + (collected ? '已收藏 ✓' : '收藏术语') + '</button>';

  document.body.appendChild(card);

  var rect = anchor.getBoundingClientRect();
  card.style.top = (rect.bottom + window.scrollY + 8) + 'px';
  card.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - 320)) + 'px';

  card.querySelector('.tc-btn').addEventListener('click', function() {
    var tid = this.getAttribute('data-id');
    if (P.hasTerm(tid)) {
      P.removeTerm(tid);
      this.textContent = '收藏术语';
    } else {
      P.addTerm(tid);
      this.textContent = '已收藏 ✓';
    }
  });

  setTimeout(function() {
    document.addEventListener('click', function handler(e) {
      if (!card.contains(e.target) && e.target !== anchor) {
        card.remove();
        document.removeEventListener('click', handler);
      }
    });
  }, 10);
};

PFIN.icons = {
  home: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8l6-5.5L14 8"/><path d="M3.5 7v6.5h3.5v-4h2v4h3.5V7"/></svg>',
  book: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2h4.5c1 0 1.5.5 1.5 1.5v10M14 2H9.5C8.5 2 8 2.5 8 3.5"/><path d="M2 2v11h4.5c1 0 1.5.5 1.5 1M14 2v11H9.5c-1 0-1.5.5-1.5 1"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>',
  gear: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="2.5"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.3 3.3l1.4 1.4M11.3 11.3l1.4 1.4M3.3 12.7l1.4-1.4M11.3 4.7l1.4-1.4"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8.5l3.5 3.5 6.5-7"/></svg>'
};
