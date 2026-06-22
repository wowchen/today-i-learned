/* 视图:术语表、我的术语本、翻牌复习(纯回顾不判分,ADR-10)、搜索、设置。 */
(function () {
  'use strict';
  var R = function () { return PGF.registry; };
  var P = function () { return PGF.progress; };

  /* ── 术语表:全站术语,按模块分组 ── */
  PGF.views.terms = function () {
    var all = R().terms();
    var byModule = {};
    all.forEach(function (t) {
      var l = t.lesson ? R().lesson(t.lesson) : null;
      var mid = l ? l.module : (t.module || 'other');
      (byModule[mid] = byModule[mid] || []).push(t);
    });
    var groups = R().modules().filter(function (m) { return byModule[m.id]; })
      .map(function (m) {
        return '<div class="glossary-group">' +
          '<div class="chapter"><span>模块 ' + m.no + '</span><h2>' + PGF.esc(m.title) + '</h2></div>' +
          '<ul class="terms">' + byModule[m.id].map(termRow).join('') + '</ul></div>';
      }).join('');
    if (byModule.other) {
      groups += '<div class="glossary-group">' +
        '<div class="chapter"><span>通用</span><h2>未归类</h2></div>' +
        '<ul class="terms">' + byModule.other.map(termRow).join('') + '</ul></div>';
    }
    PGF.render(
      '<div class="chapter" style="margin-top:30px"><span>词典</span><h2>术语表 · 共 ' + all.length + ' 条</h2></div>' +
      '<p class="sub">电网行业的"黑话"都在这里,随内容更新。点术语名弹出卡片,可收藏进自己的术语本。</p>' +
      '<div class="searchbox"><input id="tq" type="search" placeholder="搜术语,比如:特高压 / 台区 / 现货"></div>' +
      '<div id="tlist">' + (groups || '<p class="empty">术语库随课程内容陆续收录。</p>') + '</div>'
    );
    var input = document.getElementById('tq'), box = document.getElementById('tlist'), t = null;
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var q = input.value.trim().toLowerCase();
        if (!q) { box.innerHTML = groups; return; }
        var hits = all.filter(function (tm) {
          return [tm.name, tm.en || '', tm.def, tm.analogy || ''].join(' ').toLowerCase().indexOf(q) >= 0;
        });
        box.innerHTML = hits.length
          ? '<ul class="terms">' + hits.map(termRow).join('') + '</ul>'
          : '<p class="empty">没有找到「' + PGF.esc(q) + '」。</p>';
      }, 180);
    });
  };

  function termRow(t) {
    var src = t.lesson && R().lesson(t.lesson)
      ? '<a class="src" href="#/l/' + t.lesson + '">出自:' + PGF.esc(R().lesson(t.lesson).title) + '</a>' : '';
    return '<li><span class="term" data-termpop data-term="' + PGF.esc(t.id) + '">' + PGF.esc(t.name) + '</span>' +
      '<span class="def">' + PGF.esc(t.def) + '</span>' + src + '</li>';
  }

  /* ── 我的术语本 ── */
  PGF.views.book = function () {
    var favs = P().listTerms();
    var list = favs.length ? '<ul class="terms">' + favs.map(function (f) {
      var t = R().term(f._id);
      if (!t) return '';
      var src = f.lesson && R().lesson(f.lesson)
        ? '<a class="src" href="#/l/' + f.lesson + '">出自:' + PGF.esc(R().lesson(f.lesson).title) + '</a>' : '';
      return '<li><span class="term" data-termpop data-term="' + PGF.esc(t.id) + '">' + PGF.esc(t.name) + '</span>' +
        '<span class="def">' + PGF.esc(t.def) + '</span>' + src +
        '<button class="del" data-del="' + PGF.esc(t.id) + '">删除</button></li>';
    }).join('') + '</ul>'
      : '<p class="empty">术语本还是空的。<br>读课程时点带虚线的术语,卡片里点「收藏」即可加入。</p>';
    PGF.render(
      '<div class="chapter" style="margin-top:30px"><span>积累</span><h2>我的术语本 · ' + favs.length + ' 条</h2></div>' +
      '<p class="sub">收藏过的术语都在这里,可随时翻牌复习。</p>' + list +
      (favs.length ? '<div style="margin-top:26px"><a class="btn ghost" href="#/review">用它们翻牌复习 ' + PGF.icon('arrowR', 12) + '</a></div>' : '')
    );
    document.querySelectorAll('[data-del]').forEach(function (b) {
      b.addEventListener('click', function () {
        P().removeTerm(b.getAttribute('data-del'));
        PGF.views.book();
      });
    });
  };

  /* ── 翻牌复习:随机抽 5 张,纯回顾不判分 ── */
  PGF.views.review = function () {
    var pool = P().listTerms().map(function (f) { return R().term(f._id); })
      .filter(function (t) { return !!t; });
    if (!pool.length) {
      PGF.render('<p class="empty">术语本还是空的,先去课程里收藏几个术语吧。<br><br><a class="btn solid" href="#/">去学习</a></p>');
      return;
    }
    var cards = pool.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 5);
    var idx = 0, flipped = false;

    PGF.render(
      '<div class="chapter" style="margin-top:30px"><span>复习</span><h2>翻牌复习 · 抽 ' + cards.length + ' 张</h2></div>' +
      '<p class="sub">看正面术语名,心里想含义,点卡片翻面对一下。纯回顾,不计分。</p>' +
      '<div class="flash"><div class="face" id="cardFace"></div>' +
      '<p class="flash-meta" id="cardMeta"></p>' +
      '<div class="flash-ctl">' +
      '<button class="btn" id="flipBtn">翻面</button>' +
      '<button class="btn solid" id="nextBtn">下一张 ' + PGF.icon('arrowR', 12) + '</button>' +
      '<button class="btn ghost" id="reBtn">重抽 5 张</button>' +
      '</div></div>'
    );

    function draw() {
      var c = cards[idx];
      var face = document.getElementById('cardFace');
      var lessonTitle = c.lesson && R().lesson(c.lesson) ? R().lesson(c.lesson).title : '';
      if (!flipped) {
        face.innerHTML = '<p class="big">' + PGF.esc(c.name) + '</p>' +
          (c.en ? '<p class="small">' + PGF.esc(c.en) + '</p>' : '') +
          '<p class="small">这个术语什么意思?想好再翻面</p>';
      } else {
        face.innerHTML = '<p style="font-size:16.5px;max-width:34em">' + PGF.esc(c.def) + '</p>' +
          (c.analogy ? '<p class="small">类比:' + PGF.esc(c.analogy) + '</p>' : '') +
          (lessonTitle ? '<p class="small">出自:' + PGF.esc(lessonTitle) + '</p>' : '');
      }
      document.getElementById('cardMeta').textContent =
        '第 ' + (idx + 1) + ' / ' + cards.length + ' 张';
    }
    document.getElementById('cardFace').addEventListener('click', function () {
      flipped = !flipped; draw();
    });
    document.getElementById('flipBtn').addEventListener('click', function () { flipped = !flipped; draw(); });
    document.getElementById('nextBtn').addEventListener('click', function () {
      idx = (idx + 1) % cards.length; flipped = false; draw();
    });
    document.getElementById('reBtn').addEventListener('click', PGF.views.review);
    draw();
  };

  /* ── 搜索 ── */
  PGF.views.search = function () {
    PGF.render(
      '<div class="chapter" style="margin-top:30px"><span>检索</span><h2>全文搜索</h2></div>' +
      '<p class="sub">搜课程标题、关键词、正文,也搜术语。索引由内容数据自动生成。</p>' +
      '<div class="searchbox"><input id="sq" type="search" placeholder="比如:特高压 / 鸭子曲线 / 现货"></div>' +
      '<div id="sr"></div>'
    );
    var input = document.getElementById('sq'), box = document.getElementById('sr'), t = null;
    input.focus();
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var q = input.value.trim();
        if (!q) { box.innerHTML = ''; return; }
        var hits = R().search(q);
        var html = '';
        if (hits.terms.length) {
          html += '<div class="chapter"><span>术语</span><h2>' + hits.terms.length + ' 条</h2></div>' +
            '<ul class="terms">' + hits.terms.map(function (tm) {
              return '<li><span class="term" data-termpop data-term="' + PGF.esc(tm.id) + '">' +
                PGF.esc(tm.name) + '</span><span class="def">' + PGF.esc(tm.def) + '</span></li>';
            }).join('') + '</ul>';
        }
        if (hits.lessons.length) {
          html += '<div class="chapter"><span>课程</span><h2>' + hits.lessons.length + ' 课</h2></div>' +
            hits.lessons.map(function (h) {
              var mod = R().module(h.lesson.module);
              return '<div class="result"><p class="crumb">' + PGF.esc(mod.title) + '</p>' +
                '<a href="#/l/' + h.lesson.id + '">' + PGF.esc(h.lesson.title) + '</a>' +
                '<p>' + PGF.esc(h.snippet) + '</p></div>';
            }).join('');
        }
        box.innerHTML = html || '<p class="empty">没有找到「' + PGF.esc(q) + '」——可能这部分内容还没编写。</p>';
      }, 200);
    });
  };

  /* ── 设置 ── */
  PGF.views.settings = function () {
    var cfg = PGF.sync.config();
    PGF.render(
      '<div class="chapter" style="margin-top:30px"><span>偏好</span><h2>设置</h2></div>' +

      '<div class="card set-group"><h3>外观</h3>' +
      '<div class="set-row"><label>主题</label><span class="seg" id="segTheme">' +
      '<button data-v="dark">蓝晒图纸(深)</button><button data-v="light">白图纸(浅)</button></span></div>' +
      '<div class="set-row"><label>字号</label><span class="seg" id="segFs">' +
      '<button data-v="s">小</button><button data-v="m">标准</button><button data-v="l">大</button></span></div></div>' +

      '<div class="card set-group"><h3>GitHub 进度同步(可选)</h3>' +
      '<p class="d">用一个<b>自己的 private 仓库</b>存进度(如 you/grid-progress),fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>' +
      '<div class="set-row"><label>仓库</label><input id="syRepo" placeholder="owner/grid-progress" value="' + PGF.esc(cfg.repo || '') + '"></div>' +
      '<div class="set-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + PGF.esc(cfg.branch || 'main') + '"></div>' +
      '<div class="set-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + PGF.esc(cfg.token || '') + '"></div>' +
      '<div class="set-row" style="margin-top:14px">' +
      '<button class="btn solid" id="sySave">保存并立即同步</button>' +
      '<button class="btn ghost" id="syPull">只拉取一次</button>' +
      '<button class="btn ghost" id="syClear">清除 token</button></div>' +
      '<p class="sync-msg" id="syMsg">' + PGF.esc(PGF.sync.statusText) + '</p></div>' +

      '<div class="card set-group"><h3>手动备份</h3>' +
      '<p class="d">自动同步之外的备用通道:导出/导入 progress.json。导入采用智能合并,不会覆盖丢数据。</p>' +
      '<div class="set-row"><button class="btn" id="expBtn">导出 progress.json</button>' +
      '<label class="btn ghost" style="cursor:pointer">导入<input type="file" id="impFile" accept=".json" style="display:none"></label></div></div>'
    );

    // 外观
    seg('segTheme', P().pref('theme') || 'dark', function (v) {
      P().setPref('theme', v);
      document.documentElement.setAttribute('data-theme', v);
    });
    seg('segFs', P().pref('fs') || 'm', function (v) {
      P().setPref('fs', v);
      document.documentElement.setAttribute('data-fs', v);
    });

    // 同步
    function msg(text, cls) {
      var el = document.getElementById('syMsg');
      el.textContent = text; el.className = 'sync-msg ' + (cls || '');
    }
    document.getElementById('sySave').addEventListener('click', function () {
      PGF.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!PGF.sync.ready()) { msg('仓库和 token 都要填。', 'bad'); return; }
      msg('同步中…');
      PGF.sync.pullNow().then(function () { return PGF.sync.pushNow(); })
        .then(function (ok) { msg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + PGF.sync.statusText, ok ? 'ok' : 'bad'); });
    });
    document.getElementById('syPull').addEventListener('click', function () {
      msg('拉取中…');
      PGF.sync.pullNow().then(function (ok) { msg(ok ? '已拉取并合并远端进度 ✓' : PGF.sync.statusText, ok ? 'ok' : ''); });
    });
    document.getElementById('syClear').addEventListener('click', function () {
      PGF.sync.clearToken();
      document.getElementById('syToken').value = '';
      msg('token 已从本机清除。');
    });

    // 备份
    document.getElementById('expBtn').addEventListener('click', function () {
      var blob = new Blob([P().exportJson()], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'progress.json';
      a.click();
      URL.revokeObjectURL(a.href);
    });
    document.getElementById('impFile').addEventListener('change', function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        alert(P().importJson(fr.result) ? '导入成功,已与本机数据合并。' : '导入失败:不是有效的 progress.json。');
      };
      fr.readAsText(f);
    });

    function seg(id, cur, onPick) {
      var box = document.getElementById(id);
      box.querySelectorAll('button').forEach(function (b) {
        if (b.getAttribute('data-v') === cur) b.classList.add('on');
        b.addEventListener('click', function () {
          box.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
          b.classList.add('on');
          onPick(b.getAttribute('data-v'));
        });
      });
    }
  };
})();
