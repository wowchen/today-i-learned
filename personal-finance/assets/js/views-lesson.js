/* 课时视图 + 练习系统 */
window.PFIN = window.PFIN || {};
PFIN.views = PFIN.views || {};

PFIN.views.lesson = function(id) {
  var l = PFIN.lessons[id];
  if (!l) {
    PFIN.render('<div class="empty"><h2>课时待编写</h2><p>ID: ' + PFIN.esc(id) + '</p><a href="#/">返回首页</a></div>');
    return;
  }

  var P = PFIN.progress();
  P.recordActivity();

  var pathIdx = PFIN.path.indexOf(id);
  var stepNum = pathIdx >= 0 ? pathIdx + 1 : '';
  var mod = PFIN.modules.find(function(m) { return m.id === l.module; });

  var html = '<article class="lesson">';
  html += '<div class="lesson-head">';
  html += '<a class="back" href="#/m/' + l.module + '">' + (mod ? PFIN.esc(mod.title) : '') + '</a>';
  if (stepNum) html += '<span class="step">第 ' + stepNum + ' 步</span>';
  html += '</div>';
  html += '<h1>' + PFIN.esc(l.title) + '</h1>';
  if (l.minutes) html += '<div class="lesson-meta">约 ' + l.minutes + ' 分钟</div>';

  // ① 一句话
  if (l.concept) {
    html += '<div class="sec"><div class="sec-tag">① 一句话</div>' + l.concept + '</div>';
  }
  // ② 讲透
  if (l.core) {
    html += '<div class="sec"><div class="sec-tag">② 讲透</div>' + l.core + '</div>';
  }
  // ③ 别踩坑
  if (l.pitfalls) {
    html += '<div class="sec"><div class="sec-tag">③ 别踩坑</div>' + l.pitfalls + '</div>';
  }
  // ④ 想一想
  if (l.quiz && l.quiz.length > 0) {
    html += '<div class="sec"><div class="sec-tag">④ 想一想</div>';
    html += '<div class="quiz-area" id="quiz-area">';
    for (var i = 0; i < l.quiz.length; i++) {
      html += renderQuiz(l.quiz[i], i, id);
    }
    html += '</div></div>';
  }
  // ⑤ 接着读
  if (l.links) {
    html += '<div class="sec"><div class="sec-tag">⑤ 接着读</div>' + l.links + '</div>';
  }

  // 底部导航
  html += '<div class="lesson-nav">';
  if (pathIdx > 0) {
    var prev = PFIN.path[pathIdx - 1];
    html += '<a class="nav-prev" href="#/l/' + prev + '">上一课</a>';
  }
  if (!P.isRead(id)) {
    html += '<button class="mark-read-btn" onclick="PFIN.markAndNext(\'' + id + '\')">标记已学</button>';
  } else {
    html += '<span class="read-done" onclick="PFIN.toggleRead(\'' + id + '\')" title="点击取消已学" style="cursor:pointer">✓ 已学</span>';
  }
  if (pathIdx < PFIN.path.length - 1) {
    var next = PFIN.path[pathIdx + 1];
    html += '<a class="nav-next" href="#/l/' + next + '">下一课</a>';
  }
  html += '</div>';

  html += '</article>';
  PFIN.render(html);
  bindQuizEvents(id);
};

PFIN.markAndNext = function(id) {
  var P = PFIN.progress();
  P.markRead(id);
  var idx = PFIN.path.indexOf(id);
  if (idx < PFIN.path.length - 1) {
    window.location.hash = '#/l/' + PFIN.path[idx + 1];
  } else {
    window.location.hash = '#/';
  }
};

function renderQuiz(q, idx, lessonId) {
  var html = '<div class="quiz-item" data-idx="' + idx + '">';
  html += '<div class="q-title">想一想 ' + (idx + 1);
  if (q.source) html += ' · ' + PFIN.esc(q.source);
  html += '</div>';
  html += '<div class="q-text">' + q.q + '</div>';

  if (q.type === 'choice') {
    html += '<div class="opts">';
    var labels = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < q.options.length; i++) {
      html += '<button class="opt" data-answer="' + q.answer + '" data-idx="' + i + '">' +
              labels[i] + '. ' + PFIN.esc(q.options[i]) + '</button>';
    }
    html += '</div>';
  } else if (q.type === 'fill') {
    html += '<div class="fill-row"><input class="fill-input" type="text" placeholder="输入答案">';
    html += '<button class="fill-btn">确认</button></div>';
  }

  if (q.explain) {
    html += '<div class="explain">' + q.explain + '</div>';
  }
  html += '</div>';
  return html;
}

function bindQuizEvents(lessonId) {
  var area = document.getElementById('quiz-area');
  if (!area) return;

  var opts = area.querySelectorAll('.opt');
  for (var i = 0; i < opts.length; i++) {
    opts[i].addEventListener('click', function() {
      if (this.classList.contains('settled')) return;
      var parent = this.closest('.quiz-item');
      var allOpts = parent.querySelectorAll('.opt');
      var correctIdx = parseInt(this.getAttribute('data-answer'));
      var myIdx = parseInt(this.getAttribute('data-idx'));

      for (var j = 0; j < allOpts.length; j++) {
        allOpts[j].classList.add('settled');
        if (j === correctIdx) allOpts[j].classList.add('right');
      }
      if (myIdx !== correctIdx) {
        this.classList.add('wrong');
      }
      var explain = parent.querySelector('.explain');
      if (explain) explain.classList.add('show');
      checkQuizDone(area);
    });
  }

  var fillBtns = area.querySelectorAll('.fill-btn');
  for (var f = 0; f < fillBtns.length; f++) {
    fillBtns[f].addEventListener('click', function() {
      if (this.classList.contains('settled')) return;
      var parent = this.closest('.quiz-item');
      var input = parent.querySelector('.fill-input');
      var val = input.value.trim().toLowerCase();
      var qIdx = parseInt(parent.getAttribute('data-idx'));
      var quiz = getQuizByIdx(lessonId, qIdx);
      if (!quiz) return;

      this.classList.add('settled');
      var answers = Array.isArray(quiz.answer) ? quiz.answer : [quiz.answer];
      var correct = false;
      for (var a = 0; a < answers.length; a++) {
        if (val === answers[a].toLowerCase()) { correct = true; break; }
      }

      if (correct) {
        input.classList.add('right');
      } else {
        input.classList.add('wrong');
        input.value = input.value + '  →  参考: ' + answers[0];
      }
      input.disabled = true;
      var explain = parent.querySelector('.explain');
      if (explain) explain.classList.add('show');
      checkQuizDone(area);
    });
  }
}

function getQuizByIdx(lessonId, idx) {
  var l = PFIN.lessons[lessonId];
  if (l && l.quiz && l.quiz[idx]) return l.quiz[idx];
  return null;
}

function checkQuizDone(area) {
  var items = area.querySelectorAll('.quiz-item');
  var total = items.length;
  var done = 0;
  var correct = 0;
  for (var i = 0; i < items.length; i++) {
    var settled = items[i].querySelector('.settled');
    if (settled) {
      done++;
      if (items[i].querySelector('.opt.right.settled') || items[i].querySelector('.fill-input.right')) {
        correct++;
      } else if (items[i].querySelector('.opt.right') && !items[i].querySelector('.opt.wrong')) {
        correct++;
      }
    }
  }
  if (done === total) {
    var existing = area.querySelector('.quiz-result');
    if (existing) existing.remove();
    var msg = correct === total
      ? '<div class="quiz-result ok">都答对了 · ' + correct + ' / ' + total + '</div>'
      : '<div class="quiz-result">答对 ' + correct + ' / ' + total + ' · 看看解析再继续</div>';
    area.insertAdjacentHTML('beforeend', msg);
  }
}

/* 在当前页切换已学/未学,不跳转 */
PFIN.toggleRead = function(id) {
  var P = PFIN.progress();
  if (P.isRead(id)) P.markUnread(id); else P.markRead(id);
  PFIN.views.lesson(id);
  if (PFIN.renderShell) PFIN.renderShell();
};
