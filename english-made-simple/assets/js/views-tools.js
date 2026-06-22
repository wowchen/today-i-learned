/* 视图:快速复习(翻牌)、生词本/错题本、搜索、设置。 */
(function () {
  'use strict';
  var R = function () { return EMS.registry; };
  var P = function () { return EMS.progress; };

  /* ── 快速复习:随机抽 5 张翻牌 ── */
  EMS.views.review = function () {
    var pool = [];
    P().listVocab().forEach(function (v) {
      pool.push({ kind: 'vocab', front: v.term, back: v.note || '(点下方按钮再听一遍)', say: v.term, src: v.lesson });
    });
    P().listMistakes().forEach(function (m) {
      pool.push({ kind: 'mistake', front: m.q, back: '正确答案:' + m.ans, say: '', src: m.lesson });
    });
    if (!pool.length) {
      EMS.render('<p class="empty">生词本和错题本都还是空的。<br>学课程时点单词 ☆ 收藏、做错小测,这里就会有东西可复习。<br><br><a class="btn solid" href="#/">去学习</a></p>');
      return;
    }
    // 洗牌取 5
    var cards = pool.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 5);
    var idx = 0, flipped = false;

    EMS.render(
      '<div class="chapter" style="margin-top:44px"><span>复习</span><h2>快速复习 · 抽 ' + cards.length + ' 张</h2></div>' +
      '<p class="sub">看正面,心里想答案,点卡片翻面对一下。</p>' +
      '<div class="flash"><div class="face" id="cardFace"></div>' +
      '<p class="flash-meta" id="cardMeta"></p>' +
      '<div class="flash-ctl">' +
      '<button class="btn" id="flipBtn">翻面</button>' +
      '<button class="btn solid" id="nextBtn">下一张 →</button>' +
      '<button class="btn ghost" id="reBtn">重抽 5 张</button>' +
      '</div></div>'
    );

    function draw() {
      var c = cards[idx];
      var face = document.getElementById('cardFace');
      var lessonTitle = c.src && R().lesson(c.src) ? R().lesson(c.src).title : '';
      if (!flipped) {
        face.innerHTML = (c.kind === 'vocab'
          ? '<p class="big w" data-say="' + EMS.esc(c.say) + '">' + EMS.esc(c.front) + '</p><p class="small">这个词什么意思?(点词可发音)</p>'
          : '<p style="font-size:18px">' + EMS.esc(c.front) + '</p><p class="small">想好答案再翻面</p>');
      } else {
        face.innerHTML = '<p style="font-size:17px">' + EMS.esc(c.back) + '</p>' +
          (c.say ? '<button class="say-all" data-say="' + EMS.esc(c.say) + '">▶ 再听一遍</button>' : '') +
          (lessonTitle ? '<p class="small">出自:' + EMS.esc(lessonTitle) + '</p>' : '');
      }
      document.getElementById('cardMeta').textContent =
        '第 ' + (idx + 1) + ' / ' + cards.length + ' 张 · ' + (c.kind === 'vocab' ? '生词' : '错题');
    }
    document.getElementById('cardFace').addEventListener('click', function (e) {
      if (e.target.closest('.w') || e.target.closest('.say-all')) return; // 点词只发音
      flipped = !flipped; draw();
    });
    document.getElementById('flipBtn').addEventListener('click', function () { flipped = !flipped; draw(); });
    document.getElementById('nextBtn').addEventListener('click', function () {
      idx = (idx + 1) % cards.length; flipped = false; draw();
    });
    document.getElementById('reBtn').addEventListener('click', EMS.views.review);
    draw();
  };

  /* ── 生词本 / 错题本 ── */
  EMS.views.book = function (tab) {
    tab = tab === 'mistakes' ? 'mistakes' : 'vocab';
    var vocab = P().listVocab(), mis = P().listMistakes();
    var list;
    if (tab === 'vocab') {
      list = vocab.length ? '<ul class="booklist">' + vocab.map(function (v) {
        var src = v.lesson && R().lesson(v.lesson)
          ? '<a class="src" href="#/l/' + v.lesson + '">出自:' + EMS.esc(R().lesson(v.lesson).title) + '</a>' : '';
        return '<li><span class="term" data-say="' + EMS.esc(v.term) + '">' + EMS.esc(v.term) + '</span>' +
          '<span class="note2">' + EMS.esc(v.note || '') + '</span>' + src +
          '<button class="del" data-del-vocab="' + EMS.esc(v._id) + '">删除</button></li>';
      }).join('') + '</ul>'
        : '<p class="empty">还没有生词。学课程时点任何英文单词,浮条里点「☆ 收藏」即可加入。</p>';
    } else {
      list = mis.length ? '<ul class="booklist">' + mis.map(function (m) {
        var src = m.lesson && R().lesson(m.lesson)
          ? '<a class="src" href="#/l/' + m.lesson + '">回去重学</a>' : '';
        return '<li><span class="note2"><b>' + EMS.esc(m.q) + '</b><br>你答:' + EMS.esc(m.my) +
          ' · 正确:' + EMS.esc(m.ans) + '</span>' + src +
          '<button class="del" data-del-mis="' + EMS.esc(m._id) + '">移除</button></li>';
      }).join('') + '</ul>'
        : '<p class="empty">错题本是空的——保持住!小测做错的题会自动出现在这里。</p>';
    }
    EMS.render(
      '<div class="chapter" style="margin-top:44px"><span>积累</span><h2>我的本子</h2></div>' +
      '<div class="tabs2">' +
      '<button data-tab="vocab" class="' + (tab === 'vocab' ? 'on' : '') + '">生词本 ' + vocab.length + '</button>' +
      '<button data-tab="mistakes" class="' + (tab === 'mistakes' ? 'on' : '') + '">错题本 ' + mis.length + '</button>' +
      '</div>' + list +
      '<div style="margin-top:26px"><a class="btn ghost" href="#/review">用它们快速复习 →</a></div>'
    );
    document.querySelectorAll('[data-tab]').forEach(function (b) {
      b.addEventListener('click', function () { EMS.views.book(b.getAttribute('data-tab')); });
    });
    document.querySelectorAll('[data-del-vocab]').forEach(function (b) {
      b.addEventListener('click', function () {
        P().removeVocab(b.getAttribute('data-del-vocab')); EMS.views.book('vocab');
      });
    });
    document.querySelectorAll('[data-del-mis]').forEach(function (b) {
      b.addEventListener('click', function () {
        P().removeMistake(b.getAttribute('data-del-mis')); EMS.views.book('mistakes');
      });
    });
  };

  /* ── 搜索 ── */
  EMS.views.search = function () {
    EMS.render(
      '<div class="chapter" style="margin-top:44px"><span>检索</span><h2>全文搜索</h2></div>' +
      '<p class="sub">搜标题、关键词、正文。索引由内容数据自动生成。</p>' +
      '<div class="searchbox"><input id="sq" type="search" placeholder="比如:连读 / 字母 / phonics"></div>' +
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
        box.innerHTML = hits.length ? hits.map(function (h) {
          var mod = R().module(h.lesson.module);
          return '<div class="result"><p class="crumb">' + EMS.esc(mod.title) + '</p>' +
            '<a href="#/l/' + h.lesson.id + '">' + EMS.esc(h.lesson.title) + '</a>' +
            '<p>' + EMS.esc(h.snippet) + '</p></div>';
        }).join('') : '<p class="empty">没有找到「' + EMS.esc(q) + '」——可能这部分内容还没编写。</p>';
      }, 200);
    });
  };

  /* ── 设置 ── */
  EMS.views.settings = function () {
    var cfg = EMS.sync.config();
    var voices = EMS.listVoices();
    EMS.render(
      '<div class="chapter" style="margin-top:44px"><span>偏好</span><h2>设置</h2></div>' +

      '<div class="card set-group"><h3>外观</h3>' +
      '<div class="set-row"><label>主题</label><span class="seg" id="segTheme">' +
      '<button data-v="light">浅色</button><button data-v="dark">深色</button></span></div>' +
      '<div class="set-row"><label>字号</label><span class="seg" id="segFs">' +
      '<button data-v="s">小</button><button data-v="m">标准</button><button data-v="l">大</button></span></div>' +
      '<div class="set-row"><label>美音嗓音</label><select id="voiceSel"><option value="">自动(优先本地嗓音)</option>' +
      voices.map(function (v) {
        return '<option value="' + EMS.esc(v.name) + '">' + EMS.esc(v.name) + (v.localService ? '(本地)' : '(联网)') + '</option>';
      }).join('') + '</select> <button class="btn small" data-say="Welcome to English Made Simple!">试听</button></div></div>' +

      '<div class="card set-group"><h3>GitHub 进度同步</h3>' +
      '<p class="d">用一个<b>独立 private 仓库</b>存进度(如 you/english-progress),fine-grained PAT 只授权该仓库的 Contents 读写、设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。</p>' +
      '<div class="set-row"><label>仓库</label><input id="syRepo" placeholder="owner/english-progress" value="' + EMS.esc(cfg.repo || '') + '"></div>' +
      '<div class="set-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + EMS.esc(cfg.branch || 'main') + '"></div>' +
      '<div class="set-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + EMS.esc(cfg.token || '') + '"></div>' +
      '<div class="set-row" style="margin-top:14px">' +
      '<button class="btn solid" id="sySave">保存并立即同步</button>' +
      '<button class="btn ghost" id="syPull">只拉取一次</button>' +
      '<button class="btn ghost" id="syClear">清除 token</button></div>' +
      '<p class="sync-msg" id="syMsg">' + EMS.esc(EMS.sync.statusText) + '</p></div>' +

      '<div class="card set-group"><h3>手动备份</h3>' +
      '<p class="d">自动同步之外的备用通道:导出/导入 progress.json。导入采用智能合并,不会覆盖丢数据。</p>' +
      '<div class="set-row"><button class="btn" id="expBtn">导出 progress.json</button>' +
      '<label class="btn ghost" style="cursor:pointer">导入<input type="file" id="impFile" accept=".json" style="display:none"></label></div></div>'
    );

    // 外观
    seg('segTheme', P().pref('theme') || 'light', function (v) {
      P().setPref('theme', v);
      document.documentElement.setAttribute('data-theme', v);
    });
    seg('segFs', P().pref('fs') || 'm', function (v) {
      P().setPref('fs', v);
      document.documentElement.setAttribute('data-fs', v);
    });
    var vs = document.getElementById('voiceSel');
    vs.value = P().pref('voice') || '';
    vs.addEventListener('change', function () { P().setPref('voice', vs.value); });

    // 同步
    function msg(text, cls) {
      var el = document.getElementById('syMsg');
      el.textContent = text; el.className = 'sync-msg ' + (cls || '');
    }
    document.getElementById('sySave').addEventListener('click', function () {
      EMS.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!EMS.sync.ready()) { msg('仓库和 token 都要填。', 'bad'); return; }
      msg('同步中…');
      EMS.sync.pullNow().then(function () { return EMS.sync.pushNow(); })
        .then(function (ok) { msg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + EMS.sync.statusText, ok ? 'ok' : 'bad'); });
    });
    document.getElementById('syPull').addEventListener('click', function () {
      msg('拉取中…');
      EMS.sync.pullNow().then(function (ok) { msg(ok ? '已拉取并合并远端进度 ✓' : EMS.sync.statusText, ok ? 'ok' : ''); });
    });
    document.getElementById('syClear').addEventListener('click', function () {
      EMS.sync.clearToken();
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
