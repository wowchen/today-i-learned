/* 视图:课程页 —— 五段模板渲染 + 30秒小测(判分/错题收集/微庆祝)+ 标记已读 + 路线前后导航。 */
(function () {
  'use strict';
  var R = function () { return EMS.registry; };
  var P = function () { return EMS.progress; };

  var SECTS = [
    { key: 'what', tag: '① 一句话是什么' },
    { key: 'when', tag: '② 什么时候用' },
    { key: 'how', tag: '③ 怎么用' },
    { key: 'pitfalls', tag: '④ 中国人易踩的坑' }
  ];

  var quizState = null; // {lessonId, total, answered, correct}

  EMS.views.lesson = function (id) {
    var l = R().lesson(id);
    if (!l) {
      EMS.render('<p class="empty">这一课还在编写中,先看看<a href="#/path">路线上的其他课</a>。</p>');
      return;
    }
    EMS.currentLessonId = id;
    var pi = R().pathIndexOf(id);
    var mod = R().module(l.module);
    quizState = { lessonId: id, total: (l.quiz || []).length, answered: 0, correct: 0 };

    var head =
      '<section class="lesson-head">' +
      '<p class="eyebrow">' + (pi >= 0 ? '<b>第 ' + (pi + 1) + ' 步</b>' : '') + EMS.esc(mod.title) + '</p>' +
      '<h1>' + EMS.esc(l.title) + '</h1>' +
      '<p class="meta">约 ' + (l.minutes || 5) + ' 分钟 · 点任何英文听美音 · 点单词可 ☆ 收藏</p>' +
      '</section>';

    var body = SECTS.map(function (s) {
      if (!l.sections || !l.sections[s.key]) return '';
      return '<section class="sect"><span class="sect-tag">' + s.tag + '</span>' +
        '<div class="body-rich">' + EMS.rich(l.sections[s.key]) + '</div></section>';
    }).join('');

    var quiz = '';
    if (quizState.total) {
      quiz = '<section class="sect"><span class="sect-tag">⑤ 30 秒小测</span>' +
        '<div class="body-rich" id="quizBox">' + (l.quiz || []).map(quizItem).join('') +
        '<p class="quiz-result" id="quizResult"></p></div></section>';
    }

    var foot =
      '<div class="lesson-foot">' +
      '<button class="btn readmark' + (P().isRead(id) ? ' done' : '') + '" id="readBtn">' +
      (P().isRead(id) ? '已学完 ✓(点击取消)' : '✓ 标记已读') + '</button>' +
      '<div class="navlinks">' + pathNav(pi) + '</div></div>';

    EMS.render(head + body + quiz + foot);
    bind(l);
  };

  function quizItem(q, i) {
    var inner;
    if (q.type === 'fill') {
      inner = '<div class="fill"><input type="text" data-fill="' + i + '" placeholder="输入答案">' +
        ' <button class="btn small" data-check="' + i + '">确认</button></div>';
    } else {
      inner = '<div class="opts">' + q.options.map(function (op, j) {
        return '<button class="opt" data-q="' + i + '" data-opt="' + j + '">' +
          String.fromCharCode(65 + j) + '. ' + EMS.esc(op) + '</button>';
      }).join('') + '</div>';
    }
    return '<div class="quiz-item" data-item="' + i + '">' +
      '<p class="q"><span class="qno">Q' + (i + 1) + '</span>' + EMS.esc(q.q) + '</p>' + inner +
      '<p class="explain" data-ex="' + i + '">' + EMS.esc(q.explain || '') + '</p></div>';
  }

  function pathNav(pi) {
    if (pi < 0) return '<a href="#/path">查看路线</a>';
    var path = R().path(), out = [];
    var prev = pi > 0 ? path[pi - 1] : null;
    var next = pi < path.length - 1 ? path[pi + 1] : null;
    if (prev && R().lesson(prev.id)) out.push('<a href="#/l/' + prev.id + '">← 上一课</a>');
    out.push('<a href="#/path">路线</a>');
    if (next) {
      out.push(R().lesson(next.id)
        ? '<a href="#/l/' + next.id + '">下一课 →</a>'
        : '<span style="color:var(--note)">下一课待编写</span>');
    }
    return out.join('');
  }

  function bind(l) {
    var app = document.getElementById('app');

    // 选择题:点选项即判分
    app.querySelectorAll('.opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = +btn.getAttribute('data-q'), j = +btn.getAttribute('data-opt');
        var q = l.quiz[i];
        var item = app.querySelector('[data-item="' + i + '"]');
        if (item.getAttribute('data-done')) return;
        item.setAttribute('data-done', '1');
        var right = j === q.answer;
        item.querySelectorAll('.opt').forEach(function (b, k) {
          if (k === q.answer) b.classList.add('right');
          else if (k === j && !right) b.classList.add('wrong');
          b.disabled = true;
        });
        settle(l, i, right, q.options[j]);
      });
    });

    // 填空题
    app.querySelectorAll('[data-check]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = +btn.getAttribute('data-check');
        var q = l.quiz[i];
        var item = app.querySelector('[data-item="' + i + '"]');
        if (item.getAttribute('data-done')) return;
        var input = app.querySelector('[data-fill="' + i + '"]');
        var val = (input.value || '').trim().toLowerCase();
        if (!val) return;
        item.setAttribute('data-done', '1');
        var answers = Array.isArray(q.answer) ? q.answer : [q.answer];
        var right = answers.some(function (a) { return String(a).trim().toLowerCase() === val; });
        input.style.borderColor = right ? 'var(--ok)' : 'var(--bad)';
        input.disabled = true; btn.disabled = true;
        if (!right) input.value = input.value + '  →  正确:' + answers[0];
        settle(l, i, right, val);
      });
    });

    // 标记已读
    var readBtn = document.getElementById('readBtn');
    if (readBtn) readBtn.addEventListener('click', function () {
      if (P().isRead(l.id)) {
        P().unmarkRead(l.id);
        readBtn.classList.remove('done');
        readBtn.textContent = '✓ 标记已读';
      } else {
        P().markRead(l.id);
        readBtn.classList.add('done');
        readBtn.textContent = '已学完 ✓(点击取消)';
      }
    });
  }

  function settle(l, i, right, myAnswer) {
    var q = l.quiz[i];
    var ex = document.querySelector('[data-ex="' + i + '"]');
    if (ex && (q.explain || !right)) ex.classList.add('show');
    quizState.answered++;
    if (right) quizState.correct++;
    else {
      var ans = q.type === 'fill'
        ? (Array.isArray(q.answer) ? q.answer[0] : q.answer)
        : q.options[q.answer];
      P().addMistake(l.id + '#' + i, {
        lesson: l.id, q: q.q, my: String(myAnswer), ans: String(ans)
      });
    }
    if (quizState.answered === quizState.total) {
      var r = document.getElementById('quizResult');
      if (r) {
        if (quizState.correct === quizState.total) {
          r.textContent = '全对!' + quizState.correct + ' / ' + quizState.total + ',漂亮';
          r.classList.add('party');
        } else {
          r.textContent = '答对 ' + quizState.correct + ' / ' + quizState.total +
            ',错题已自动进错题本,复习时会再遇到它';
        }
      }
    }
  }
})();
