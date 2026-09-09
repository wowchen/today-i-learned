/* 首页视图(智能体循环 SVG · 两列模块格 · 紫罗兰/亮紫双主题) */
window.AGT = window.AGT || {};
AGT.views = AGT.views || {};

AGT.views.home = function() {
  var P = AGT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = AGT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < AGT.path.length ? AGT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + agentLoopSVG() + '</div>';
  html += '<p class="gh-kicker">AI 智能体通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">会干活<em>的 AI</em></h1>';
  html += '<p class="gh-latin">Perceive · Think · Act</p>';
  html += '<p class="gh-lede">从智能体的感知—思考—行动循环，到提示词、上下文、工具调用，再到工作流编排、多智能体协作、评测护栏与安全边界，把"智能体怎么干活"拆成 60 节能讲清的微课。<b>懂循环，就懂了智能体的骨架。</b></p>';
  if (nextLesson && AGT.lessons[nextLesson]) {
    var nl = AGT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + AGT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(AGT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + AGT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < AGT.modules.length; i++) {
    var m = AGT.modules[i];
    var mRead = 0;
    for (var j = 0; j < AGT.path.length; j++) {
      if (AGT.path[j].indexOf(m.id + '/') === 0 && P.isRead(AGT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + AGT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + AGT.esc(m.en || '') + '</div>';
    html += '<p>' + AGT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>智能体循环模拟器、提示词体检、上下文预算计算器、流水线设计器。</p>';
  html += '<div class="prog">4 件 · 边学边玩</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('↻', '智能体循环模拟器', 'agent loop');
  html += toolCell('✎', '提示词体检', 'prompt check');
  html += toolCell('▤', '上下文预算计算器', 'context budget');
  html += toolCell('⑂', '流水线设计器', 'pipeline designer');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不神化、不贩卖焦虑、不堆黑话。每节五分钟，用<b>大白话</b>把 AI 智能体里那些真正重要、却常被讲成"玄学"的道理讲清：<b>为什么</b>这样设计，而不是背一串新名词。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>智能体和聊天机器人差在哪，感知—思考—行动循环怎么转；</li>' +
          '<li>提示词、上下文、工具调用——智能体的三大基本功怎么练；</li>' +
          '<li>工作流与多智能体协作怎么编排：角色分工、交接、人工在环；</li>' +
          '<li>可靠性、评测、护栏、安全边界——从能跑的 demo 到敢用的生产，中间差的是什么。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为 AI 智能体科普通识，重直觉与工程实战，不追求论文级穷尽。产品与框架迭代很快，方法论比工具名更长寿。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>AI 智能体 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  AGT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 智能体循环:外圈脉冲波 + 主循环(脉冲 dash 流动)+ 三个节点(感知/思考/行动)
   + 中心芯片(呼吸核)。描边/填色随主题取 --acc / --acc2 / --acc-soft,
   流动复用 CSS core-flow / wave / photon(ghBreathe) 动画类 */
function agentLoopSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var cx = 100, cy = 104, r = 58;

  // 背景脉冲波(向外扩散)
  for (var wr = 34; wr <= 76; wr += 14) {
    svg += '<circle class="wave" cx="' + cx + '" cy="' + cy + '" r="' + wr + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((wr - 34) * 0.08) + 's"/>';
  }

  // 主循环轨道(脉冲沿圈流动)
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="stroke:var(--acc-soft);stroke-width:6;fill:none" opacity=".55"/>';
  svg += '<circle class="core-flow" cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="stroke:var(--acc);stroke-width:2.2;fill:none"/>';
  svg += '<circle class="core-flow slow" cx="' + cx + '" cy="' + cy + '" r="' + (r - 7) + '" style="stroke:var(--acc2);stroke-width:1.2;fill:none" opacity=".6"/>';

  // 三个节点:感知(左上) 思考(右上) 行动(下)
  function node(x, y, label, delay) {
    var s = '';
    s += '<rect x="' + (x - 21) + '" y="' + (y - 11) + '" width="42" height="22" rx="7" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.5"/>';
    s += '<text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" style="fill:var(--ink);font-size:10.5;font-weight:600;font-family:sans-serif">' + label + '</text>';
    // 节点上的光子(呼吸)
    s += '<circle class="photon" cx="' + x + '" cy="' + (y - 11) + '" r="2.4" style="fill:var(--acc);animation-delay:' + delay + 's"/>';
    return s;
  }
  // 节点角度:135° / 45° / 270°(圆心 cx,cy 半径 r)
  var rad = Math.PI / 180;
  svg += node(cx - r * Math.cos(45 * rad), cy - r * Math.sin(45 * rad), '感知', 0);
  svg += node(cx + r * Math.cos(45 * rad), cy - r * Math.sin(45 * rad), '思考', 0.7);
  svg += node(cx, cy + r, '行动', 1.4);

  // 中心芯片
  svg += '<rect x="' + (cx - 17) + '" y="' + (cy - 17) + '" width="34" height="34" rx="8" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.5"/>';
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="6" style="fill:var(--acc)"/>';
  // 芯片引脚
  for (var p = -1; p <= 1; p++) {
    svg += '<line x1="' + (cx + p * 9) + '" y1="' + (cy - 17) + '" x2="' + (cx + p * 9) + '" y2="' + (cy - 23) + '" style="stroke:var(--acc);stroke-width:1.4"/>';
    svg += '<line x1="' + (cx + p * 9) + '" y1="' + (cy + 17) + '" x2="' + (cx + p * 9) + '" y2="' + (cy + 23) + '" style="stroke:var(--acc);stroke-width:1.4"/>';
  }

  // 装饰字符
  svg += '<text x="162" y="34" style="fill:var(--acc);font-size:12;font-family:serif;opacity:.55">↻</text>';
  svg += '<text x="24" y="176" style="fill:var(--acc2);font-size:10;font-family:monospace;opacity:.45">Loop</text>';

  svg += '</svg>';
  return svg;
}
