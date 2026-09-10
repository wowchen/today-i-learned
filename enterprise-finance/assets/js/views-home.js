/* 首页视图(账簿格线+分录生长+利润曲线+印章 SVG · 两列模块格 · 商务藏青/墨金双主题) */
window.FIN = window.FIN || {};
FIN.views = FIN.views || {};

FIN.views.home = function() {
  var P = FIN.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = FIN.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < FIN.path.length ? FIN.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + ledgerSealSVG() + '</div>';
  html += '<p class="gh-kicker">企业财税与内控审计通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">看懂<em>账</em>，算清<em>税</em></h1>';
  html += '<p class="gh-latin">Read &middot; Compute &middot; Control</p>';
  html += '<p class="gh-lede">从三张报表怎么读、几个比率与经营分析看透一家公司，到中国 18 个税种怎么分类、增值税与企业所得税怎么算、发票怎么开怎么抵，再到内控、舞弊、审计、合同条款与项目上的钱——把企业财税与内控审计拆成 89 节能讲清的微课。<b>税率会变，判断框架不会变；这里给的是框架，不是速查表。</b></p>';
  if (nextLesson && FIN.lessons[nextLesson]) {
    var nl = FIN.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + FIN.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(FIN.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 时效与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>时效性与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 9 月。</b>本站涉及的全部税率、优惠政策、申报期限、征收率与征管要求，均会随立法与政策调整而变化。撰写时已逐处标注政策依据文号与适用期，但<b>不保证在阅读时仍然有效</b>。</p>';
  html += '<p><b>本站不构成税务、审计、法律、会计或投资意见</b>，也不能替代专业判断。特别声明：本站<b>不提供任何税收筹划方案、开票方案或规避路径</b>，也不对任何具体业务给出结论性建议。涉及实际申报、纳税、审计、合同与诉讼事项，请咨询主管税务机关或具备相应资质的税务师、注册会计师、律师。</p>';
  html += '<p>引用与核对口径：《中华人民共和国增值税法》及其实施条例、《中华人民共和国企业所得税法》、《中华人民共和国个人所得税法》、《中华人民共和国发票管理办法》、财政部与税务总局相关公告（如财政部 税务总局公告 2023 年第 12 号、2026 年第 10 号，国家税务总局公告 2024 年第 11 号）、中国注册会计师审计准则、企业内部控制基本规范及配套指引。以上名称与文号仅用于标注内容依据，请以官方发布的最新全文为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + FIN.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < FIN.modules.length; i++) {
    var m = FIN.modules[i];
    var mRead = 0;
    for (var j = 0; j < FIN.path.length; j++) {
      if (FIN.path[j].indexOf(m.id + '/') === 0 && P.isRead(FIN.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + FIN.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + FIN.esc(m.en || '') + '</div>';
    html += '<p>' + FIN.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>税负测算、价税分离换算、项目毛利与回款推演、内控与合规自检、本量利与经营杠杆。</p>';
  html += '<div class="prog">5 件 · 边学边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('税', '税负测算器', 'tax burden');
  html += toolCell('÷', '价税分离换算', 'price / tax');
  html += toolCell('¥', '项目毛利与回款推演', 'project cash');
  html += toolCell('✓', '内控与合规自检', 'control check');
  html += toolCell('◎', '本量利与经营杠杆', 'cvp / leverage');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不教做账软件、不背条文、不给"筹划妙招"。每节五分钟，用<b>大白话</b>把企业里那些真正要紧、却常被含糊带过的道理讲清：<b>为什么</b>这个数这么算、这笔税这时候交、这道控制在这里设。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>三张报表怎么互相印证，为什么"利润不等于现金"；</li>' +
          '<li>怎么从数字走到经营动作：成本性态、保本点、经营杠杆、投资决策怎么算；</li>' +
          '<li>中国 18 个税种怎么分类、谁归中央谁归地方、增值税的抵扣链怎么转；</li>' +
          '<li>专票普票差在哪、数电发票为什么不能作废、三流一致为什么最容易被查；</li>' +
          '<li>纳税义务发生时间、申报周期、汇算清缴、税收优惠各自的口径与期限；</li>' +
          '<li>内控怎么设才不流于形式，舞弊有哪些信号，审计到底在查什么、五种意见怎么读；</li>' +
          '<li>合同里价款、发票、付款、验收四类条款怎么写才不吃亏；</li>' +
          '<li>项目制业务的钱怎么算：价税分离、收入确认、成本归集、垫资与回款。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为通识科普，重框架与判断，不追求条文体例的穷尽。案例数字均为教学演示；凡涉及税率与政策之处，正文均标注依据文号与适用期，并请以现行有效规定为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>企业财税与内控审计通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-09</span></div>';

  FIN.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 账本动效:①账簿格线(横格+竖栏)②四格"分录"依次落账(生长)
   ③利润曲线 dash 流动 + 节点光点呼吸 ④右下印章双环呼吸
   描边/填色取 --acc / --acc2 / --acc-soft / --grat,
   复用 CSS sphere / grat / core-flow / photon / wave 动画类 */
function ledgerSealSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 背景波纹(向外扩散,与主题色呼应)
  for (var wr = 44; wr <= 86; wr += 14) {
    svg += '<circle class="wave" cx="100" cy="100" r="' + wr + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((wr - 44) * 0.08) + 's"/>';
  }

  // ① 账簿格线:横格线 + 竖栏线(淡)
  var gx0 = 30, gy0 = 40, cw = 140, ch = 118;
  var rule = '';
  for (var r = 0; r <= 5; r++) rule += '<line x1="' + gx0 + '" y1="' + (gy0 + r * ch / 5) + '" x2="' + (gx0 + cw) + '" y2="' + (gy0 + r * ch / 5) + '" style="stroke:var(--grat);stroke-width:1"/>';
  rule += '<line x1="' + gx0 + '" y1="' + gy0 + '" x2="' + gx0 + '" y2="' + (gy0 + ch) + '" style="stroke:var(--acc-soft);stroke-width:1.4"/>';
  rule += '<line x1="' + (gx0 + cw * 0.42) + '" y1="' + gy0 + '" x2="' + (gx0 + cw * 0.42) + '" y2="' + (gy0 + ch) + '" style="stroke:var(--acc-soft);stroke-width:1"/>';
  rule += '<line x1="' + (gx0 + cw * 0.76) + '" y1="' + gy0 + '" x2="' + (gx0 + cw * 0.76) + '" y2="' + (gy0 + ch) + '" style="stroke:var(--acc-soft);stroke-width:1"/>';
  svg += '<g class="grat">' + rule + '</g>';

  // ② 四笔"分录"依次落账(从下往上长,逐条延迟)
  var rows = [0.72, 0.55, 0.40, 0.26];
  for (var b = 0; b < rows.length; b++) {
    var ry = gy0 + ch / 5 * (b + 1) - 5;
    var rw = cw * (0.30 + b * 0.055);
    svg += '<rect class="sphere" x="' + (gx0 + 3) + '" y="' + (ry - 10) + '" width="' + rw + '" height="10" rx="1.5" style="fill:' + (b === 0 ? 'var(--acc)' : 'var(--acc-soft)') + ';stroke:var(--acc);stroke-width:1;animation-delay:' + (0.15 + b * 0.14) + 's"/>';
    // 右侧金额"格"（数字位)
    svg += '<rect class="sphere" x="' + (gx0 + cw * 0.80) + '" y="' + (ry - 9) + '" width="' + (cw * 0.14) + '" height="8" rx="1" style="fill:var(--acc2);opacity:.55;animation-delay:' + (0.3 + b * 0.14) + 's"/>';
  }

  // ③ 利润曲线(穿过账簿,dash 流动)+ 节点光点
  var pts = [[34, 148], [58, 132], [82, 138], [106, 112], [130, 96], [152, 74], [168, 62]];
  var path = 'M';
  for (var p = 0; p < pts.length; p++) path += (p > 0 ? ' L' : '') + pts[p][0] + ' ' + pts[p][1];
  svg += '<path class="core-flow" d="' + path + '" style="stroke:var(--acc);stroke-width:2.2;fill:none" stroke-linejoin="round" stroke-linecap="round"/>';
  for (var q = 0; q < pts.length; q++) {
    svg += '<circle class="photon" cx="' + pts[q][0] + '" cy="' + pts[q][1] + '" r="2.2" style="fill:var(--acc2);animation-delay:' + (q * 0.24) + 's"/>';
  }

  // ④ 印章:双环 + 内框(落款感),整体呼吸
  svg += '<g class="photon" style="animation-duration:3.4s">';
  svg += '<circle cx="152" cy="152" r="30" style="stroke:var(--acc2);stroke-width:2.2;fill:none"/>';
  svg += '<circle cx="152" cy="152" r="24" style="stroke:var(--acc);stroke-width:1;fill:none;opacity:.7"/>';
  svg += '<rect x="142" y="142" width="20" height="20" rx="2" style="stroke:var(--acc);stroke-width:1.6;fill:none"/>';
  svg += '<line x1="152" y1="142" x2="152" y2="162" style="stroke:var(--acc);stroke-width:1;opacity:.65"/>';
  svg += '<line x1="142" y1="152" x2="162" y2="152" style="stroke:var(--acc);stroke-width:1;opacity:.65"/>';
  svg += '</g>';

  // 装饰字符
  svg += '<text x="26" y="30" style="fill:var(--acc);font-size:12;font-family:serif;opacity:.5">&#8721;</text>';
  svg += '<text x="26" y="186" style="fill:var(--acc2);font-size:9;font-family:monospace;opacity:.45">n=89</text>';

  svg += '</svg>';
  return svg;
}
