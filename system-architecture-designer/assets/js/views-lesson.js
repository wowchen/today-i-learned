/* 课时视图 + 练习系统 */
window.SAD = window.SAD || {};
SAD.views = SAD.views || {};

SAD.views.lesson = function(id) {
  var l = SAD.lessons[id];
  if (!l) {
    SAD.render('<div class="empty"><h2>课时待编写</h2><p>ID: ' + SAD.esc(id) + '</p><a href="#/">返回首页</a></div>');
    return;
  }

  var P = SAD.progress();
  P.recordActivity();

  var pathIdx = SAD.path.indexOf(id);
  var stepNum = pathIdx >= 0 ? pathIdx + 1 : '';
  var mod = SAD.modules.find(function(m) { return m.id === l.module; });

  var html = '<article class="lesson">';
  html += '<div class="lesson-head">';
  html += '<a class="back" href="#/m/' + l.module + '">' + (mod ? SAD.esc(mod.title) : '') + '</a>';
  if (stepNum) html += '<span class="step">第 ' + stepNum + ' 步</span>';
  html += '</div>';
  html += '<h1>' + SAD.esc(l.title) + '</h1>';
  if (l.minutes) html += '<div class="lesson-meta">约 ' + l.minutes + ' 分钟</div>';

  // ① 概念
  if (l.concept) {
    html += '<div class="sec"><div class="sec-tag">① 概念</div>' + l.concept + '</div>';
  }
  // ② 考纲定位
  if (l.exam) {
    html += '<div class="sec"><div class="sec-tag">② 考纲定位</div>' + l.exam + '</div>';
  }
  // ③ 核心要点
  if (l.core) {
    html += '<div class="sec"><div class="sec-tag">③ 核心要点</div>' + l.core + '</div>';
  }
  // ④ 易混辨析
  if (l.pitfalls) {
    html += '<div class="sec"><div class="sec-tag">④ 易混辨析</div>' + l.pitfalls + '</div>';
  }
  // ⑤ 真题练习
  if (l.quiz && l.quiz.length > 0) {
    html += '<div class="sec"><div class="sec-tag">⑤ 真题练习</div>';
    html += '<div class="quiz-area" id="quiz-area">';
    for (var i = 0; i < l.quiz.length; i++) {
      html += renderQuiz(l.quiz[i], i, id);
    }
    html += '</div></div>';
  }
  // ⑥ 关联
  if (l.links) {
    html += '<div class="sec"><div class="sec-tag">⑥ 关联</div>' + l.links + '</div>';
  }

  // 底部导航
  html += '<div class="lesson-nav">';
  if (pathIdx > 0) {
    var prev = SAD.path[pathIdx - 1];
    html += '<a class="nav-prev" href="#/l/' + prev + '">上一课</a>';
  }
  if (!P.isRead(id)) {
    html += '<button class="mark-read-btn" onclick="SAD.markAndNext(\'' + id + '\')">标记已学</button>';
  } else {
    html += '<span class="read-done">✓ 已学</span>';
  }
  if (pathIdx < SAD.path.length - 1) {
    var next = SAD.path[pathIdx + 1];
    html += '<a class="nav-next" href="#/l/' + next + '">下一课</a>';
  }
  html += '</div>';

  html += '</article>';
  SAD.render(html);
  bindQuizEvents(id);
};

SAD.markAndNext = function(id) {
  var P = SAD.progress();
  P.markRead(id);
  var idx = SAD.path.indexOf(id);
  if (idx < SAD.path.length - 1) {
    window.location.hash = '#/l/' + SAD.path[idx + 1];
  } else {
    window.location.hash = '#/';
  }
};

function renderQuiz(q, idx, lessonId) {
  var html = '<div class="quiz-item" data-idx="' + idx + '">';
  html += '<div class="q-title">第 ' + (idx + 1) + ' 题 · ' + (q.type === 'choice' ? '选择题' : '填空题');
  if (q.source) html += ' · ' + SAD.esc(q.source);
  html += '</div>';
  html += '<div class="q-text">' + q.q + '</div>';

  if (q.type === 'choice') {
    html += '<div class="opts">';
    var labels = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < q.options.length; i++) {
      html += '<button class="opt" data-answer="' + q.answer + '" data-idx="' + i + '">' +
              labels[i] + '. ' + SAD.esc(q.options[i]) + '</button>';
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
        var P = SAD.progress();
        var qIdx = parent.getAttribute('data-idx');
        P.addMistake(lessonId + '#' + qIdx, {
          lesson: lessonId,
          q: parent.querySelector('.q-text').textContent,
          my: this.textContent,
          ans: allOpts[correctIdx].textContent
        });
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
        input.value = input.value + '  →  正确: ' + answers[0];
        var P = SAD.progress();
        P.addMistake(lessonId + '#' + qIdx, {
          lesson: lessonId,
          q: parent.querySelector('.q-text').textContent,
          my: val,
          ans: answers[0]
        });
      }
      input.disabled = true;
      var explain = parent.querySelector('.explain');
      if (explain) explain.classList.add('show');
      checkQuizDone(area);
    });
  }
}

function getQuizByIdx(lessonId, idx) {
  var l = SAD.lessons[lessonId];
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
      ? '<div class="quiz-result ok">全对! ' + correct + ' / ' + total + '</div>'
      : '<div class="quiz-result">' + correct + ' / ' + total + '，错题已进入错题本</div>';
    area.insertAdjacentHTML('beforeend', msg);
  }
}
