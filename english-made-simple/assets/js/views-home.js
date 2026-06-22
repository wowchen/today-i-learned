/* 视图:首页(路线图优先)、完整路线、模块页。 */
(function () {
  'use strict';
  var R = function () { return EMS.registry; };
  var P = function () { return EMS.progress; };

  /* 下一步 = 路线中第一个「未读且已编写」的课 */
  EMS.nextStep = function () {
    var path = R().path();
    for (var i = 0; i < path.length; i++) {
      var step = path[i];
      if (R().lesson(step.id) && !P().isRead(step.id)) {
        return { step: step, index: i };
      }
    }
    return null;
  };
  EMS.pathDone = function () {
    var n = 0;
    R().path().forEach(function (s) { if (P().isRead(s.id)) n++; });
    return n;
  };

  /* ── 首页 ── */
  EMS.views.home = function () {
    var next = EMS.nextStep();
    var path = R().path();
    var hero;
    if (next) {
      var mod = R().module(next.step.module);
      hero =
        '<section class="lesson-hero">' +
        '<div>' +
        '<p class="eyebrow"><b>第 ' + (next.index + 1) + ' 步</b>' + EMS.esc(mod.title) + '</p>' +
        '<h1><mark>' + EMS.esc(next.step.title) + '</mark></h1>' +
        '<p class="intro">约 ' + (R().lesson(next.step.id).minutes || 5) + ' 分钟,学完即测。不用想"接下来学什么",跟着路线走就行。</p>' +
        '<div class="cta">' +
        '<a class="btn solid" href="#/l/' + next.step.id + '">继续学习 第 ' + (next.index + 1) + ' 步 →</a>' +
        '<a class="btn ghost" href="#/path">查看完整路线</a>' +
        '</div></div>' +
        sidenote() +
        '</section>';
    } else {
      hero =
        '<section class="lesson-hero"><div>' +
        '<p class="eyebrow"><b>路线</b>已全部学完</p>' +
        '<h1>已编写的课程都学完了 <mark>🎉</mark></h1>' +
        '<p class="intro">可以去快速复习巩固,或等待新课程上线。</p>' +
        '<div class="cta"><a class="btn solid" href="#/review">去快速复习</a>' +
        '<a class="btn ghost" href="#/path">回看路线</a></div>' +
        '</div>' + sidenote() + '</section>';
    }

    var demo =
      '<div class="chapter"><span>特色</span><h2>点哪里,就听哪里</h2></div>' +
      '<p class="sub">全站任何英文都可以点——浏览器自带美音引擎,离线也能发声。试试👇</p>' +
      '<div class="card">' +
      '<p class="sentence">' +
      EMS.rich('<en>Could</en> <en>I</en> <en>get</en> <en>a</en> <en>coffee</en>, <en>please</en>?') +
      '<button class="say-all" data-say="Could I get a coffee, please?">▶ 听整句</button></p>' +
      '<p class="trans">我能来杯咖啡吗?——美国咖啡店里最常用的点单句。</p>' +
      '<div class="chips">' +
      chip('/æ/', 'cat') + chip('/θ/', 'think') + chip('/ɪ/', 'sit') +
      chip('/t̬/', 'water') + chip('/ɝ/', 'bird') +
      '</div>' +
      '<p class="hint">提示:音标点击朗读例词;48 音标的口型详解在「发音」模块。点任何单词还能 ☆ 收藏进生词本。</p>' +
      '</div>';

    var toc =
      '<div class="chapter" id="toc"><span>目录</span><h2>九大模块</h2></div>' +
      '<p class="sub">想跳着查也可以——但零基础建议跟着上面的路线走,不迷路。</p>' +
      '<ul class="toc">' + R().modules().map(tocRow).join('') + '</ul>';

    var vocabN = P().listVocab().length, misN = P().listMistakes().length;
    var review =
      '<section class="review-strip">' +
      '<p>📒 生词本 <b>' + vocabN + '</b> 词 · 错题本 <b>' + misN + '</b> 道——随机抽 5 个,一分钟过一遍?</p>' +
      '<a class="btn" href="#/review">开始快速复习</a></section>';

    EMS.render(hero + demo + toc + review);
  };

  function sidenote() {
    return '<aside class="sidenote">' +
      '<p><b>🔥 ' + P().streak() + ' 天</b>连续学习</p>' +
      '<p><b>' + EMS.pathDone() + ' / ' + R().path().length + '</b>路线进度</p>' +
      '<p><b>' + P().listVocab().length + ' 词</b>生词本</p>' +
      '</aside>';
  }
  function chip(ipa, word) {
    return '<span class="chip" data-say="' + word + '"><i>' + ipa + '</i><s>如 ' + word + '</s></span>';
  }
  function tocRow(m) {
    var ls = R().lessonsOf(m.id);
    var read = P().readCountOf(m.id);
    var next = EMS.nextStep();
    var live = next && next.step.module === m.id;
    var pg = !ls.length ? '<span class="pg">待编写</span>'
      : live ? '<span class="pg live">学到 ' + read + ' / ' + ls.length + '</span>'
        : '<span class="pg">' + (read ? read + ' / ' + ls.length : '未开始') + '</span>';
    return '<li><span class="no">' + m.no + '</span>' +
      '<a class="t" href="#/m/' + m.id + '">' + EMS.esc(m.title) +
      '<small>' + EMS.esc(m.sub) + '</small></a>' +
      '<span class="lead"></span>' + pg + '</li>';
  }

  /* ── 完整路线 ── */
  EMS.views.path = function () {
    var next = EMS.nextStep();
    var rows = R().path().map(function (s, i) {
      var lesson = R().lesson(s.id);
      var read = P().isRead(s.id);
      var state, title;
      if (!lesson) {
        state = '<span class="pg">待编写</span>';
        title = '<span class="t" style="color:var(--note);font-weight:600;font-size:16.5px">' + EMS.esc(s.title) + '</span>';
      } else {
        state = read ? '<span class="pg" style="color:var(--ok)">已学 ✓</span>'
          : (next && next.step.id === s.id) ? '<span class="pg live">▶ 你在这</span>'
            : '<span class="pg">未学</span>';
        title = '<a class="t" href="#/l/' + s.id + '">' + EMS.esc(s.title) + '</a>';
      }
      return '<li><span class="no">' + (i + 1) + '</span>' + title +
        '<span class="lead"></span>' + state + '</li>';
    }).join('');
    EMS.render(
      '<div class="chapter" style="margin-top:44px"><span>路线</span><h2>学习路线 · 一步一步来</h2></div>' +
      '<p class="sub">已完成 ' + EMS.pathDone() + ' / ' + R().path().length +
      ' 步。"待编写"的课会陆续上线,路线顺序不变。</p>' +
      '<ul class="toc">' + rows + '</ul>'
    );
  };

  /* ── 模块页 ── */
  EMS.views.module = function (id) {
    var m = R().module(id);
    if (!m) { EMS.views.home(); return; }
    var ls = R().lessonsOf(id);
    var rows = ls.map(function (l, i) {
      var read = P().isRead(l.id);
      return '<li><span class="no">' + (i + 1) + '</span>' +
        '<a class="t" href="#/l/' + l.id + '">' + EMS.esc(l.title) +
        '<small>' + (l.minutes || 5) + ' 分钟</small></a>' +
        '<span class="lead"></span>' +
        '<span class="pg"' + (read ? ' style="color:var(--ok)"' : '') + '>' + (read ? '已学 ✓' : '未学') + '</span></li>';
    }).join('');
    // 路线里属于本模块但还没编写的课,列为"即将上线"
    var coming = R().path().filter(function (s) {
      return s.module === id && !R().lesson(s.id);
    }).map(function (s) {
      return '<li><span class="no">·</span><span class="t" style="color:var(--note);font-weight:600;font-size:16.5px">' +
        EMS.esc(s.title) + '</span><span class="lead"></span><span class="pg">待编写</span></li>';
    }).join('');
    EMS.render(
      '<section class="lesson-head"><p class="eyebrow"><b>模块 ' + m.no + '</b>' + EMS.esc(m.sub) + '</p>' +
      '<h1>' + EMS.esc(m.title) + '</h1>' +
      '<p class="meta" style="max-width:38em">' + EMS.esc(m.desc) + '</p></section>' +
      (rows || coming ? '<ul class="toc" style="margin-top:18px">' + rows + coming + '</ul>'
        : '<p class="empty">本模块内容编写中。</p>')
    );
  };
})();
