/* 首页视图(电力网格 + 供需曲线交叉 + 出清点脉冲 + 撮合光束 SVG · 两列模块格 · 电蓝/电光青金双主题) */
window.EMT = window.EMT || {};
EMT.views = EMT.views || {};

EMT.views.home = function() {
  var P = EMT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = EMT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < EMT.path.length ? EMT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + marketSVG() + '</div>';
  html += '<p class="gh-kicker">电力市场与能源交易 · 大白话讲透</p>';
  html += '<h1 class="gh-title">算清<em>每一度电</em>的价格</h1>';
  html += '<p class="gh-latin">Power &middot; Price &middot; Trade</p>';
  html += '<p class="gh-lede">从电为什么不能像普通商品一样买卖、中国电改二十年怎么走到今天，到一度电的价格由哪几笔钱构成、中长期与现货怎么衔接怎么结算，再到储能与需求响应靠什么挣钱、新能源入市之后收益为什么变了、绿电绿证与碳市场怎么对上账——把电力市场这套规则拆成 100 节能听懂的微课。<b>价格会波动，机制逻辑不会变；这里给的是机制，不是行情。</b></p>';
  if (nextLesson && EMT.lessons[nextLesson]) {
    var nl = EMT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + EMT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(EMT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 时效与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>时效性与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 9 月。</b>本站涉及的电价机制、市场规则、辅助服务标准、补贴政策、考核办法与价格水平，均会随政策调整而变化。撰写时已在正文标注政策依据与适用期，但<b>不保证在阅读时仍然有效</b>。</p>';
  html += '<p><b>本站不构成投资、交易、报价、法律或财务意见</b>，也不能替代专业判断。特别声明：本站<b>不提供任何交易策略、报价建议、套利方案或规避监管的路径</b>，也不对任何具体市场、项目或业务给出结论性建议。涉及实际交易、结算、投资与合规事项，请以电力交易机构与主管部门发布的正式文件及具备资质的专业意见为准。</p>';
  html += '<p>引用与核对口径：中共中央 国务院《关于进一步深化电力体制改革的若干意见》（中发〔2015〕9 号）、《电力市场运行基本规则》（国家发展改革委令 2024 年第 20 号）、《电力现货市场基本规则（试行）》（发改能源规〔2023〕1217 号）、《关于进一步深化燃煤发电上网电价市场化改革的通知》（发改价格〔2021〕1439 号）、《关于加快建设全国统一电力市场体系的指导意见》（发改体改〔2022〕118 号）、《关于建立煤电容量电价机制的通知》（发改价格〔2023〕1501 号）、新能源上网电价市场化改革相关通知、《关于做好可再生能源绿色电力证书全覆盖工作促进可再生能源电力消费的通知》（发改能源〔2023〕1044 号）、《碳排放权交易管理暂行条例》等。以上名称与文号仅用于标注内容依据，请以官方发布的最新全文为准。案例数字均为教学演示。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + EMT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < EMT.modules.length; i++) {
    var m = EMT.modules[i];
    var mRead = 0;
    for (var j = 0; j < EMT.path.length; j++) {
      if (EMT.path[j].indexOf(m.id + '/') === 0 && P.isRead(EMT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + EMT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + EMT.esc(m.en || '') + '</div>';
    html += '<p>' + EMT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>供需出清模拟、峰谷电费测算、现货结算演练、储能套利测算、绿电与碳减排测算。</p>';
  html += '<div class="prog">5 件 · 边学边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('⇄', '供需曲线与出清模拟器', 'supply / demand');
  html += toolCell('◔', '峰谷分时电费测算', 'time-of-use');
  html += toolCell('¥', '现货结算演练', 'day-ahead / real-time');
  html += toolCell('⇅', '储能峰谷套利测算', 'storage arbitrage');
  html += toolCell('CO₂', '绿电与碳减排测算', 'green / carbon');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不教交易软件操作、不背政策条文、不给报价与投资建议。每节五分钟，用<b>大白话</b>把电力市场里那些真正要紧、却常被含糊带过的道理讲清：<b>为什么</b>价格这样形成、这个规则为什么这么设计、这笔钱到底是谁在承担。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>电为什么不能像普通商品一样买卖，为什么要有市场、又为什么不能全靠市场；</li>' +
          '<li>中国电改二十年怎么走到今天，5 号文与 9 号文到底改了什么；</li>' +
          '<li>一度电的价格由哪几笔钱构成，输配电价为什么要"成本监审"；</li>' +
          '<li>中长期与现货各管什么、怎么衔接，为什么大部分电量不进现货；</li>' +
          '<li>现货价格怎么算出来，节点电价、阻塞、负电价到底意味着什么；</li>' +
          '<li>储能、需求响应、虚拟电厂靠什么在市场挣钱，算账要算哪些参数；</li>' +
          '<li>新能源入市后收益为什么变了，绿电、绿证、碳市场之间是什么关系；</li>' +
          '<li>交易员一天在做什么，报价的底线在哪，哪些红线碰不得。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为通识科普，重机制与判断，不追求规则条文的穷尽。案例数字均为教学演示；凡涉及价格机制、政策文件与考核标准之处，正文均标注依据与适用期，并请以现行有效规定为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>电力市场与能源交易 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-09</span></div>';

  EMT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 供需曲线动效:①电力网格(横竖格线)②供给/需求两条阶梯曲线自左向右生长
   ③曲线交点"出清点"脉冲呼吸 + 向外扩散波纹 ④交点到两轴的投影虚线(价格/数量)
   ⑤沿曲线的价格光子流动 ⑥撮合光束
   描边/填色取 --acc / --acc2 / --acc-soft / --grat,
   复用 CSS sphere / grat / core-flow / photon / wave 动画类 */
function marketSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 背景波纹(自出清点向外扩散)
  for (var wr = 40; wr <= 86; wr += 15) {
    svg += '<circle class="wave" cx="105" cy="102" r="' + wr + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((wr - 40) * 0.08) + 's"/>';
  }

  // ① 电力网格(横 + 竖)
  var grid = '';
  for (var gy = 40; gy <= 160; gy += 20) grid += '<line x1="36" y1="' + gy + '" x2="176" y2="' + gy + '" style="stroke:var(--grat);stroke-width:1"/>';
  for (var gx = 36; gx <= 176; gx += 28) grid += '<line x1="' + gx + '" y1="40" x2="' + gx + '" y2="160" style="stroke:var(--grat);stroke-width:1"/>';
  svg += '<g class="grat">' + grid + '</g>';

  // 坐标轴
  svg += '<g class="grat">';
  svg += '<line x1="36" y1="160" x2="176" y2="160" style="stroke:var(--acc-soft);stroke-width:1.6"/>';
  svg += '<line x1="36" y1="40" x2="36" y2="160" style="stroke:var(--acc-soft);stroke-width:1.6"/>';
  svg += '</g>';

  // ② 供给曲线(上升,电蓝)与需求曲线(下降,电能金)：低透明实线底 + 流动光段叠层
  svg += '<path d="M44 152 L80 126 L110 104 L140 78 L170 52" style="stroke:var(--acc);stroke-width:1.5;fill:none;opacity:.30" stroke-linejoin="round" stroke-linecap="round"/>';
  svg += '<path d="M44 54 L80 78 L110 100 L140 126 L170 150" style="stroke:var(--acc2);stroke-width:1.5;fill:none;opacity:.30" stroke-linejoin="round" stroke-linecap="round"/>';
  svg += '<path class="core-flow" d="M44 152 L80 126 L110 104 L140 78 L170 52" style="stroke:var(--acc);stroke-width:2.4;fill:none" stroke-linejoin="round" stroke-linecap="round"/>';
  svg += '<path class="core-flow slow" d="M44 54 L80 78 L110 100 L140 126 L170 150" style="stroke:var(--acc2);stroke-width:2.4;fill:none" stroke-linejoin="round" stroke-linecap="round"/>';

  // ⑤ 沿曲线的价格光子
  var spts = [[44, 152], [80, 126], [110, 104], [140, 78], [170, 52]];
  for (var i = 0; i < spts.length; i++) {
    svg += '<circle class="photon" cx="' + spts[i][0] + '" cy="' + spts[i][1] + '" r="1.9" style="fill:var(--acc);animation-delay:' + (i * 0.22) + 's"/>';
  }
  var dpts = [[44, 54], [80, 78], [110, 100], [140, 126], [170, 150]];
  for (var j = 0; j < dpts.length; j++) {
    svg += '<circle class="photon" cx="' + dpts[j][0] + '" cy="' + dpts[j][1] + '" r="1.9" style="fill:var(--acc2);animation-delay:' + (j * 0.22 + 0.12) + 's"/>';
  }

  // ④ 出清点到两轴的投影虚线
  svg += '<line x1="105" y1="102" x2="105" y2="160" style="stroke:var(--acc2);stroke-width:1;stroke-dasharray:3 3;opacity:.55"/>';
  svg += '<line x1="36" y1="102" x2="105" y2="102" style="stroke:var(--acc2);stroke-width:1;stroke-dasharray:3 3;opacity:.55"/>';

  // ⑥ 撮合光束(买卖双方在出清点成交)
  svg += '<path class="core-flow" d="M72 112 L105 102 L138 92" style="stroke:var(--acc2);stroke-width:1.2;fill:none;opacity:.7"/>';

  // ③ 出清点脉冲
  svg += '<circle cx="105" cy="102" r="11" style="stroke:var(--acc);stroke-width:1.3;fill:none;opacity:.7"/>';
  svg += '<circle class="photon" cx="105" cy="102" r="5.4" style="fill:var(--acc2);animation-duration:2.6s"/>';

  // 标注
  svg += '<text x="18" y="44" style="fill:var(--acc);font-size:8;font-family:monospace;opacity:.65">P</text>';
  svg += '<text x="178" y="164" style="fill:var(--acc);font-size:8;font-family:monospace;opacity:.65">Q</text>';
  svg += '<text x="100" y="30" style="fill:var(--acc2);font-size:8;font-family:monospace;opacity:.75">P*</text>';
  svg += '<text x="22" y="188" style="fill:var(--acc2);font-size:9;font-family:monospace;opacity:.5">clearing</text>';

  svg += '</svg>';
  return svg;
}
