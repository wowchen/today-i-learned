/* 视图:首页(路线图优先,ADR-7)、完整路线、模块页。 */
(function () {
  'use strict';
  var R = function () { return MUS.registry; };
  var P = function () { return MUS.progress; };

  /* 下一步 = 路线中第一个「未读且已编写」的课 */
  MUS.nextStep = function () {
    var path = R().path();
    for (var i = 0; i < path.length; i++) {
      var step = path[i];
      if (R().lesson(step.id) && !P().isRead(step.id)) {
        return { step: step, index: i };
      }
    }
    return null;
  };
  MUS.pathDone = function () {
    var n = 0;
    R().path().forEach(function (s) { if (P().isRead(s.id)) n++; });
    return n;
  };

  /* ── 首页 ── */
  MUS.views.home = function () {
    var next = MUS.nextStep();
    var hero;
    if (next) {
      var mod = R().module(next.step.module);
      hero =
        '<section class="hero">' +
        '<div class="main">' +
        '<p class="eyebrow"><b>第 ' + (next.index + 1) + ' 步</b>' + MUS.esc(mod.title) + '</p>' +
        '<h1><mark>' + MUS.esc(next.step.title) + '</mark></h1>' +
        '<p class="intro">约 ' + (R().lesson(next.step.id).minutes || 5) +
        ' 分钟一课。不用想"接下来学什么",跟着路线走就行。</p>' +
        '<div class="cta">' +
        '<a class="btn solid" href="#/l/' + next.step.id + '">继续学习 第 ' + (next.index + 1) + ' 步 ' + MUS.icon('arrowR', 13) + '</a>' +
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
      '学音乐,先认识几个词:每个音都有自己的<gd data-term="yingao">音高</gd>;' +
      '音乐快慢的脉搏叫<gd data-term="jiepai">节拍</gd>;' +
      '几个音叠在一起好听的组合是<gd data-term="hexian">和弦</gd>;' +
      '唱歌时让声音更亮更圆,靠的是<gd data-term="gongming">共鸣</gd>。' +
      '</p><p class="sub" style="margin:10px 0 0">提示:点术语弹出卡片后,可以「收藏」或「去那一课」。</p></div>';

    var toc =
      '<div class="chapter" id="toc"><span>目录</span><h2>' + R().modules().length + ' 个模块</h2></div>' +
      '<p class="sub">想跳着查也可以——但零基础建议跟着上面的路线走,不迷路。</p>' +
      '<ul class="toc">' + R().modules().map(tocRow).join('') + '</ul>';

    var termN = P().listTerms().length;
    var review = termN
      ? '<div class="chapter"><span>复习</span><h2>术语本翻牌</h2></div>' +
        '<p class="sub">术语本已有 <b style="color:var(--accent)">' + termN +
        '</b> 条——随机抽 5 张翻牌,一分钟过一遍。 <a class="btn small" href="#/review">开始复习</a></p>'
      : '';

    MUS.render(hero + demo + toc + review);
  };

  function sidenote() {
    return '<aside class="sidenote">' +
      '<p><b>' + P().streak() + ' 天</b>连续学习</p>' +
      '<p><b>' + MUS.pathDone() + ' / ' + R().path().length + '</b>路线进度</p>' +
      '<p><b>' + P().listTerms().length + ' 条</b>术语本</p>' +
      '</aside>';
  }

  function tocRow(m) {
    var ls = R().lessonsOf(m.id);
    var read = P().readCountOf(m.id);
    var next = MUS.nextStep();
    var live = next && next.step.module === m.id;
    var total = R().path().filter(function (s) { return s.module === m.id; }).length;
    var pg = !ls.length ? '<span class="pg">待编写 0/' + total + '</span>'
      : live ? '<span class="pg live">学到 ' + read + ' / ' + total + '</span>'
        : '<span class="pg">' + (read ? read + ' / ' + total : '未开始') + '</span>';
    return '<li><span class="no">' + m.no + '</span>' +
      '<a class="t" href="#/m/' + m.id + '">' + MUS.esc(m.title) +
      '<small>' + MUS.esc(m.sub) + '</small></a>' +
      '<span class="lead"></span>' + pg + '</li>';
  }

  /* ── 完整路线 ── */
  MUS.views.path = function () {
    var next = MUS.nextStep();
    var rows = R().path().map(function (s, i) {
      var lesson = R().lesson(s.id);
      var read = P().isRead(s.id);
      var state, title;
      if (!lesson) {
        state = '<span class="pg">待编写</span>';
        title = '<span class="t dead">' + MUS.esc(s.title) + '</span>';
      } else {
        state = read ? '<span class="pg done">已学 ✓</span>'
          : (next && next.step.id === s.id) ? '<span class="pg live">你在这</span>'
            : '<span class="pg">未学</span>';
        title = '<a class="t" href="#/l/' + s.id + '">' + MUS.esc(s.title) + '</a>';
      }
      return '<li><span class="no">' + (i + 1) + '</span>' + title +
        '<span class="lead"></span>' + state + '</li>';
    }).join('');
    MUS.render(
      '<div class="chapter" style="margin-top:30px"><span>路线</span><h2>学习路线 · 一步一步来</h2></div>' +
      '<p class="sub">已完成 ' + MUS.pathDone() + ' / ' + R().path().length +
      ' 步。"待编写"的课会陆续上线,路线顺序不变。</p>' +
      '<ul class="toc">' + rows + '</ul>'
    );
  };

  /* ── 模块页 ── */
  MUS.views.module = function (id) {
    var m = R().module(id);
    if (!m) { MUS.views.home(); return; }
    var ls = R().lessonsOf(id);
    var rows = ls.map(function (l, i) {
      var read = P().isRead(l.id);
      return '<li><span class="no">' + (i + 1) + '</span>' +
        '<a class="t" href="#/l/' + l.id + '">' + MUS.esc(l.title) +
        '<small>' + (l.minutes || 5) + ' 分钟</small></a>' +
        '<span class="lead"></span>' +
        '<span class="pg' + (read ? ' done' : '') + '">' + (read ? '已学 ✓' : '未学') + '</span></li>';
    }).join('');
    // 路线里属于本模块但还没编写的课,列为"待编写"
    var coming = R().path().filter(function (s) {
      return s.module === id && !R().lesson(s.id);
    }).map(function (s) {
      return '<li><span class="no">·</span><span class="t dead">' +
        MUS.esc(s.title) + '</span><span class="lead"></span><span class="pg">待编写</span></li>';
    }).join('');
    MUS.render(
      '<div class="crumb" style="margin-top:14px"><b>模块 ' + m.no + '</b> / ' + MUS.esc(m.sub) + '</div>' +
      '<h1 class="page">' + MUS.esc(m.title) + '</h1>' +
      '<p class="meta" style="font-family:inherit;font-size:14px;max-width:44em">' + MUS.esc(m.desc) + '</p>' +
      (rows || coming ? '<ul class="toc">' + rows + coming + '</ul>'
        : '<p class="empty">本模块内容编写中。</p>')
    );
  };
})();
