/* 首页视图(节点+容器+数据流 SVG · 两列模块格 · 云白蓝/深空蓝双主题) */
window.CCN = window.CCN || {};
CCN.views = CCN.views || {};

CCN.views.home = function() {
  var P = CCN.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = CCN.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < CCN.path.length ? CCN.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + clusterSVG() + '</div>';
  html += '<p class="gh-kicker">云原生通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">一朵<em>云</em></h1>';
  html += '<p class="gh-latin">Compute · Storage · Network</p>';
  html += '<p class="gh-lede">从"云到底在卖什么"、虚拟化与容器，到 K8s 编排、微服务治理、数据库与数据工程、流水线与可观测性，再到高可用、云安全、云上 AI 平台与上云选型——把一套云原生体系拆成 98 节能讲清的微课。<b>搞懂这套骨架，就搞懂了现代系统是怎么跑起来的。</b></p>';
  if (nextLesson && CCN.lessons[nextLesson]) {
    var nl = CCN.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + CCN.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(CCN.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + CCN.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < CCN.modules.length; i++) {
    var m = CCN.modules[i];
    var mRead = 0;
    for (var j = 0; j < CCN.path.length; j++) {
      if (CCN.path[j].indexOf(m.id + '/') === 0 && P.isRead(CCN.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + CCN.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + CCN.esc(m.en || '') + '</div>';
    html += '<p>' + CCN.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>可用性停机换算、容器资源单位、副本与容量估算、云成本估算。</p>';
  html += '<div class="prog">4 件 · 边学边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('9', '可用性与停机换算', 'availability');
  html += toolCell('m', '容器资源单位换算', 'resource units');
  html += toolCell('n', '副本与资源估算', 'replica sizing');
  html += toolCell('¥', '云成本估算', 'cloud cost');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不堆概念、不背参数、不吹术语。每节五到七分钟，用<b>大白话</b>把云上那些真正重要、却常被讲过头的道理讲清：<b>为什么</b>这样设计、出问题是什么样、做决策时看什么。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>云到底在卖什么，IaaS/PaaS/SaaS 怎么选，为什么"上云不一定省钱"；</li>' +
          '<li>虚拟机与容器差在哪，镜像、K8s 的 Pod/Service/探针各自解决什么问题；</li>' +
          '<li>数据库怎么选型、慢查询怎么治、什么时候才该分库分表、数仓与湖仓解决什么；</li>' +
          '<li>VPC、安全组、负载均衡、专线怎么搭出一张既通又安全的网；</li>' +
          '<li>流水线、灰度发布、可观测性、几个 9、云安全责任共担——一线落地时真正要过的关；</li>' +
          '<li>GPU 资源池、断点续训、推理服务化与模型管理——AI 时代的算力怎么花得值。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为云计算与云原生科普通识，重工程直觉与实战判断，不替代厂商文档与产品手册。具体规格、价格与合规要求请以实际产品与现行规定为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>云计算与云原生通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  CCN.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 集群:云朵 + 三个工作节点 + 节点内容器方块 + 数据流(沿连线 dash 流动);
   描边/填色随主题取 --acc / --acc2 / --acc-soft,
   流动用 CSS stroke-dashoffset 动画(core-flow),脉动复用 wave/ghBreathe */
function clusterSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var cx = 100;

  // 背景扩散波(云端的"信号"感)
  for (var r = 30; r <= 72; r += 21) {
    svg += '<circle class="wave" cx="' + cx + '" cy="52" r="' + r + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((r - 30) * 0.09) + 's"/>';
  }

  // 云朵(轮廓 + 浅填充)
  svg += '<path d="M 68 74 C 57 74 51 65 54 56 C 51 44 62 35 73 38 C 77 26 91 20 101 26 C 111 17 128 23 130 36 C 141 36 149 45 146 56 C 150 66 142 74 131 74 Z" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.4"/>';

  // 云 → 节点 的竖向数据流(三条)
  var xs = [42, 100, 158];
  for (var i = 0; i < 3; i++) {
    svg += '<line class="core-flow' + (i === 1 ? '' : ' slow') + '" x1="' + xs[i] + '" y1="76" x2="' + xs[i] + '" y2="124" style="stroke:var(--acc);stroke-width:1.4;opacity:.75"/>';
  }

  // 三个工作节点(服务器) + 节点内容器方块
  for (var n = 0; n < 3; n++) {
    var nx = 18 + n * 58;
    svg += '<rect x="' + nx + '" y="126" width="48" height="34" rx="4" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.4"/>';
    for (var c = 0; c < 3; c++) {
      var sq = nx + 9 + c * 12;
      var op = c === 1 ? '.9' : '.6';
      svg += '<rect class="photon" x="' + sq + '" y="133" width="9" height="9" rx="1.5" style="fill:var(--acc);opacity:' + op + ';animation-delay:' + (n * 0.3 + c * 0.4) + 's"/>';
    }
    svg += '<rect x="' + (nx + 9) + '" y="147" width="30" height="3" rx="1.5" style="fill:var(--acc2);opacity:.45"/>';
  }

  // 节点之间的横向数据流
  svg += '<line class="core-flow" x1="66" y1="143" x2="76" y2="143" style="stroke:var(--acc2);stroke-width:1.6"/>';
  svg += '<line class="core-flow slow" x1="124" y1="143" x2="134" y2="143" style="stroke:var(--acc2);stroke-width:1.6"/>';

  // 装饰文字
  svg += '<text x="146" y="30" style="fill:var(--acc);font-size:14px;font-family:serif;opacity:.55">k8s</text>';
  svg += '<text x="12" y="180" style="fill:var(--acc2);font-size:10px;font-family:monospace;opacity:.5">99.95%</text>';
  svg += '<text x="146" y="180" style="fill:var(--acc2);font-size:10px;font-family:monospace;opacity:.5">VPC</text>';

  svg += '</svg>';
  return svg;
}
