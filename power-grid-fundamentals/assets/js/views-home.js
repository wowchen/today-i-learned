/* 视图:首页(路线图优先,ADR-7)、完整路线、模块页。 */
(function () {
  'use strict';
  var R = function () { return PGF.registry; };
  var P = function () { return PGF.progress; };

  /* 下一步 = 路线中第一个「未读且已编写」的课 */
  PGF.nextStep = function () {
    var path = R().path();
    for (var i = 0; i < path.length; i++) {
      var step = path[i];
      if (R().lesson(step.id) && !P().isRead(step.id)) {
        return { step: step, index: i };
      }
    }
    return null;
  };
  PGF.pathDone = function () {
    var n = 0;
    R().path().forEach(function (s) { if (P().isRead(s.id)) n++; });
    return n;
  };

  /* ── 首页 ── */
  PGF.views.home = function () {
    var next = PGF.nextStep();
    var hero;
    if (next) {
      var mod = R().module(next.step.module);
      hero =
        '<section class="hero">' +
        '<div class="main">' +
        '<p class="eyebrow"><b>第 ' + (next.index + 1) + ' 步</b>' + PGF.esc(mod.title) + '</p>' +
        '<h1><mark>' + PGF.esc(next.step.title) + '</mark></h1>' +
        '<p class="intro">约 ' + (R().lesson(next.step.id).minutes || 5) +
        ' 分钟一课。不用想"接下来学什么",跟着路线走就行。</p>' +
        '<div class="cta">' +
        '<a class="btn solid" href="#/l/' + next.step.id + '">继续学习 第 ' + (next.index + 1) + ' 步 ' + PGF.icon('arrowR', 13) + '</a>' +
        '<a class="btn ghost" href="#/path">查看完整路线</a>' +
        '</div></div>' +
        sidenote() +
        '</section>';
    } else {
      hero =
        '<section class="hero"><div class="main">' +
        '<p class="eyebrow"><b>路线</b>已全部学完</p>' +
        '<h1>已编写的课程都学完了</h1>' +
        '<p class="intro">可以去术语本翻牌复习,或等待新课程上线。</p>' +
        '<div class="cta"><a class="btn solid" href="#/review">去翻牌复习</a>' +
        '<a class="btn ghost" href="#/path">回看路线</a></div>' +
        '</div>' + sidenote() + '</section>';
    }

    var demo =
      '<div class="chapter"><span>特色</span><h2>看不懂的词,点一下</h2></div>' +
      '<p class="sub">全站正文里带虚线下划线的术语都可以点——弹出大白话解释和类比,还能收藏进自己的术语本。试试:</p>' +
      '<div class="card"><p style="font-size:16.5px">' +
      '电网公司最怕两件事:<gd data-term="pinlv">频率</gd>跑偏和大面积停电。' +
      '为了让发电与用电每秒相等,<gd data-term="diaodu">调度</gd>24 小时值守;' +
      '为了把西部的电送到东部,建起了<gd data-term="tegaoya">特高压</gd>;' +
      '为了应付风光的波动,又给电网配上了<gd data-term="chuneng">储能</gd>。' +
      '</p><p class="sub" style="margin:10px 0 0">提示:点术语弹出卡片后,可以「收藏」或「去那一课」。</p></div>';

    var toc =
      '<div class="chapter" id="toc"><span>目录</span><h2>17 个模块</h2></div>' +
      '<p class="sub">想跳着查也可以——但零基础建议跟着上面的路线走,不迷路。</p>' +
      '<ul class="toc">' + R().modules().map(tocRow).join('') + '</ul>';

    var termN = P().listTerms().length;
    var review = termN
      ? '<div class="chapter"><span>复习</span><h2>术语本翻牌</h2></div>' +
        '<p class="sub">术语本已有 <b style="color:var(--accent)">' + termN +
        '</b> 条——随机抽 5 张翻牌,一分钟过一遍。 <a class="btn small" href="#/review">开始复习</a></p>'
      : '';

    PGF.render(hero + demo + toc + review);
  };

  function sidenote() {
    return '<aside class="sidenote">' +
      '<p><b>' + P().streak() + ' 天</b>连续学习</p>' +
      '<p><b>' + PGF.pathDone() + ' / ' + R().path().length + '</b>路线进度</p>' +
      '<p><b>' + P().listTerms().length + ' 条</b>术语本</p>' +
      '</aside>';
  }

  function tocRow(m) {
    var ls = R().lessonsOf(m.id);
    var read = P().readCountOf(m.id);
    var next = PGF.nextStep();
    var live = next && next.step.module === m.id;
    var total = R().path().filter(function (s) { return s.module === m.id; }).length;
    var pg = !ls.length ? '<span class="pg">待编写 0/' + total + '</span>'
      : live ? '<span class="pg live">学到 ' + read + ' / ' + total + '</span>'
        : '<span class="pg">' + (read ? read + ' / ' + total : '未开始') + '</span>';
    return '<li><span class="no">' + m.no + '</span>' +
      '<a class="t" href="#/m/' + m.id + '">' + PGF.esc(m.title) +
      '<small>' + PGF.esc(m.sub) + '</small></a>' +
      '<span class="lead"></span>' + pg + '</li>';
  }

  /* ── 完整路线 ── */
  PGF.views.path = function () {
    var next = PGF.nextStep();
    var rows = R().path().map(function (s, i) {
      var lesson = R().lesson(s.id);
      var read = P().isRead(s.id);
      var state, title;
      if (!lesson) {
        state = '<span class="pg">待编写</span>';
        title = '<span class="t dead">' + PGF.esc(s.title) + '</span>';
      } else {
        state = read ? '<span class="pg done">已学 ✓</span>'
          : (next && next.step.id === s.id) ? '<span class="pg live">你在这</span>'
            : '<span class="pg">未学</span>';
        title = '<a class="t" href="#/l/' + s.id + '">' + PGF.esc(s.title) + '</a>';
      }
      return '<li><span class="no">' + (i + 1) + '</span>' + title +
        '<span class="lead"></span>' + state + '</li>';
    }).join('');
    PGF.render(
      '<div class="chapter" style="margin-top:30px"><span>路线</span><h2>学习路线 · 一步一步来</h2></div>' +
      '<p class="sub">已完成 ' + PGF.pathDone() + ' / ' + R().path().length +
      ' 步。"待编写"的课会陆续上线,路线顺序不变。</p>' +
      '<ul class="toc">' + rows + '</ul>'
    );
  };

  /* ── 模块页 ── */
  PGF.views.module = function (id) {
    var m = R().module(id);
    if (!m) { PGF.views.home(); return; }
    var ls = R().lessonsOf(id);
    var rows = ls.map(function (l, i) {
      var read = P().isRead(l.id);
      return '<li><span class="no">' + (i + 1) + '</span>' +
        '<a class="t" href="#/l/' + l.id + '">' + PGF.esc(l.title) +
        '<small>' + (l.minutes || 5) + ' 分钟</small></a>' +
        '<span class="lead"></span>' +
        '<span class="pg' + (read ? ' done' : '') + '">' + (read ? '已学 ✓' : '未学') + '</span></li>';
    }).join('');
    // 路线里属于本模块但还没编写的课,列为"待编写"
    var coming = R().path().filter(function (s) {
      return s.module === id && !R().lesson(s.id);
    }).map(function (s) {
      return '<li><span class="no">·</span><span class="t dead">' +
        PGF.esc(s.title) + '</span><span class="lead"></span><span class="pg">待编写</span></li>';
    }).join('');
    PGF.render(
      '<div class="crumb" style="margin-top:14px"><b>模块 ' + m.no + '</b> / ' + PGF.esc(m.sub) + '</div>' +
      '<h1 class="page">' + PGF.esc(m.title) + '</h1>' +
      '<p class="meta" style="font-family:inherit;font-size:14px;max-width:44em">' + PGF.esc(m.desc) + '</p>' +
      (rows || coming ? '<ul class="toc">' + rows + coming + '</ul>'
        : '<p class="empty">本模块内容编写中。</p>')
    );
  };
})();
