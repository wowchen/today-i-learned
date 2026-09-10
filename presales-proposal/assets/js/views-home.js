/* 首页视图(方案书+勾选+印章 SVG · 两列模块格 · 酒红/亮玫红双主题) */
window.PRS = window.PRS || {};
PRS.views = PRS.views || {};

PRS.views.home = function() {
  var P = PRS.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = PRS.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < PRS.path.length ? PRS.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + proposalSVG() + '</div>';
  html += '<p class="gh-kicker">售前方案与投标表达 · 大白话讲透</p>';
  html += '<h1 class="gh-title">把方案<em>讲到中标</em></h1>';
  html += '<p class="gh-latin">Listen · Structure · Win</p>';
  html += '<p class="gh-lede">从听懂客户没说出口的需求，到搭出方案的逻辑线、拆解评分办法、写标书、报价讲标，把"怎么把方案写出来、讲明白、赢下来"拆成 50 节能讲清的微课。<b>懂客户要什么，比方案写得多漂亮更重要。</b></p>';
  if (nextLesson && PRS.lessons[nextLesson]) {
    var nl = PRS.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + PRS.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(PRS.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + PRS.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < PRS.modules.length; i++) {
    var m = PRS.modules[i];
    var mRead = 0;
    for (var j = 0; j < PRS.path.length; j++) {
      if (PRS.path[j].indexOf(m.id + '/') === 0 && P.isRead(PRS.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + PRS.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + PRS.esc(m.en || '') + '</div>';
    html += '<p>' + PRS.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>方案体检、评分办法拆解、讲标时间规划、报价测算。</p>';
  html += '<div class="prog">4 件 · 边学边玩</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('☑', '方案体检器', 'proposal check');
  html += toolCell('▦', '评分办法拆解', 'scoring matrix');
  html += toolCell('◷', '讲标时间规划', 'pitch timing');
  html += toolCell('¥', '报价测算器', 'quote calc');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不堆管理黑话、不教 PPT 排版花活、不贩卖"中标玄学"。每节五分钟，用<b>大白话</b>把售前与投标里那些真正决定成败、却常被讲成"经验之谈"的道理讲清：<b>为什么</b>这么问客户、这么搭逻辑线、这么报价、这么讲。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>客户要的到底是什么——需求洞察与决策链怎么摸；</li>' +
          '<li>方案不是堆功能：逻辑线、价值主张与差异化怎么立；</li>' +
          '<li>招标文件怎么读、评分办法怎么拆、废标雷区都在哪；</li>' +
          '<li>报价怎么算、竞争怎么打、讲标怎么控场；</li>' +
          '<li>丢标之后怎么复盘，把一次失败变成下一次的弹药。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为售前与投标方法论通识，案例均为教学改编，不针对任何具体招标项目；实际投标请以招标文件与相关法律法规为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>售前方案与投标表达 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  PRS.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 方案书意象:稿纸波纹 + 带折角的方案书 + 逐条响应勾选 + 盖章通过 + 文档生长动效。
   描边/填色随主题取 --acc / --acc2 / --acc-soft / --paper,
   复用 CSS wave / grat / sphere / core-flow / photon 动画类 */
function proposalSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 背景波纹(向外扩散)
  for (var wr = 46; wr <= 88; wr += 14) {
    svg += '<circle class="wave" cx="96" cy="100" r="' + wr + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((wr - 46) * 0.08) + 's"/>';
  }

  // 方案书纸张(右上折角)
  svg += '<path class="sphere" d="M48 38 H110 L132 60 V158 H48 Z" style="fill:var(--paper);stroke:var(--acc2);stroke-width:2;stroke-linejoin:round;animation-delay:.05s"/>';
  svg += '<path d="M110 38 V60 H132" style="stroke:var(--acc2);stroke-width:2;fill:none;stroke-linejoin:round"/>';

  // 标题线(粗)+ 正文线(细,长短不一,依次浮现)
  svg += '<rect class="sphere" x="60" y="74" width="46" height="5" rx="2.5" style="fill:var(--acc2);animation-delay:.12s"/>';
  var lines = [[60, 88, 62], [60, 98, 50], [60, 108, 58], [60, 118, 38]];
  for (var i = 0; i < lines.length; i++) {
    svg += '<rect class="sphere" x="' + lines[i][0] + '" y="' + lines[i][1] + '" width="' + lines[i][2] + '" height="3" rx="1.5" style="fill:var(--acc);opacity:.32;animation-delay:' + (0.18 + i * 0.07) + 's"/>';
  }

  // 正在书写的一行(dash 流动)
  svg += '<rect class="core-flow" x="60" y="128" width="56" height="3" rx="1.5" style="fill:var(--acc);opacity:.6"/>';

  // 逐条响应勾选(方案书右侧)
  var checks = [72, 92, 112];
  for (var c = 0; c < checks.length; c++) {
    svg += '<path class="sphere" d="M141 ' + checks[c] + ' l3 4 l6.5 -8" style="stroke:var(--acc2);stroke-width:2.2;fill:none;stroke-linecap:round;stroke-linejoin:round;animation-delay:' + (0.34 + c * 0.1) + 's"/>';
  }

  // 盖章(压在文档右下角,双环 + 对勾)
  svg += '<circle class="sphere" cx="122" cy="144" r="21" style="stroke:var(--acc2);stroke-width:2.5;fill:none;animation-delay:.66s"/>';
  svg += '<circle cx="122" cy="144" r="16" style="stroke:var(--acc);stroke-width:1;fill:none;opacity:.7"/>';
  svg += '<path class="photon" d="M112 144 l7 8 l14 -17" style="stroke:var(--acc2);stroke-width:3.4;fill:none;stroke-linecap:round;stroke-linejoin:round;animation-delay:.78s"/>';

  // 装饰字符
  svg += '<text x="24" y="34" style="fill:var(--acc);font-size:9;font-family:monospace;opacity:.45">RFP</text>';
  svg += '<text x="146" y="182" style="fill:var(--acc2);font-size:9;font-family:monospace;opacity:.4">v1.0</text>';

  svg += '</svg>';
  return svg;
}
