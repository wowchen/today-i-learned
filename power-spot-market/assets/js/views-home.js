/* 首页视图(「报价阶梯与出清价」现货市场示意图 + 沿阶梯脉冲 SVG · 电力现货与交易实务) */
window.SPOT = window.SPOT || {};
SPOT.views = SPOT.views || {};

SPOT.views.home = function() {
  var P = SPOT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = SPOT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < SPOT.path.length ? SPOT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + spotSVG() + '</div>';
  html += '<p class="gh-kicker">电力现货 · 交易实务</p>';
  html += '<h1 class="gh-title">读懂<span>每一度电的价</span></h1>';
  html += '<p class="gh-latin">SPOT MARKET · TRADING</p>';
  html += '<p class="gh-lede">中长期把量和价先锁住,现货按小时重新出清,偏差要考核、调峰调频有价、容量留着备用 —— <b>这套从报价到结算的链条,就是电力现货与交易实务</b>。本站沿着这条链讲:市场怎么组织、价格怎么形成、报价怎么报、结算怎么算、风险怎么控。</p>';
  if (nextLesson && SPOT.lessons[nextLesson]) {
    var nl = SPOT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + SPOT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(SPOT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及市场规则、出清机制、报价限额、结算口径与考核标准之处,均已标注依据与适用期;凡涉具体口径、限值、比例与时间节点之处,一律以现行市场规则、结算办法、交易中心公告与主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成交易、报价、投资或结算依据。</b>具体交易决策、报价策略、偏差处理与结算核算,请以现行市场规则、交易中心公告、结算单据与自身风险管理制度为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + SPOT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < SPOT.modules.length; i++) {
    var m = SPOT.modules[i];
    var mRead = 0;
    for (var j = 0; j < SPOT.path.length; j++) {
      if (SPOT.path[j].indexOf(m.id + '/') === 0 && P.isRead(SPOT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + SPOT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + SPOT.esc(m.en || '') + '</div>';
    html += '<p>' + SPOT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">TOOL</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>报价阶梯与出清价测算、结算与偏差考核、售电公司购售电匹配、辅助服务收益、容量电价与补偿、差价合约对冲、价格风险与保证金。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('01', '报价阶梯与出清价测算器', 'bid ladder and clearing price');
  html += toolCell('02', '结算与偏差考核测算器', 'settlement and deviation penalty');
  html += toolCell('03', '售电公司购售电匹配测算器', 'retailer purchase and sale matching');
  html += toolCell('04', '辅助服务收益测算器', 'ancillary service revenue');
  html += toolCell('05', '容量电价与补偿测算器', 'capacity price and compensation');
  html += toolCell('06', '差价合约对冲测算器', 'contract for difference hedge');
  html += toolCell('07', '价格风险与保证金测算器', 'price risk and margin');
  html += '</div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>电力现货与交易实务 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  SPOT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「报价阶梯与出清价」——一张供给阶梯(优先次序)与需求线相交的示意图
   横轴 = 电量,纵轴 = 价格;阶梯由 5 段平台 + 5 段竖抬拼成,
   报价从低到高、电量从左到右,便宜的机组先上场,贵的机组后上场;
   竖线 = 需求(无弹性),与阶梯最高一档相交于出清点:实心圆点 + 竖向虚线引到横轴读数,
   交点左右分别标注出清价与出清点;
   两枚脉冲小球沿阶梯运动(取 --acc / --acc2),表示报价逐段被叫到号;
   左下角两行图例:实线 = 供给阶梯(优先次序),虚线 = 需求与出清点;
   描边/填色一律取 CSS 变量 --acc / --acc2 / --ink / --note;
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function spotSVG() {
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" fill="none">';
  var k;

  // ===== 坐标轴与刻度短线 =====
  var axes = '';
  axes += '<line x1="60" y1="200" x2="60" y2="30"/>';      // 纵轴:价格
  axes += '<line x1="60" y1="200" x2="640" y2="200"/>';     // 横轴:电量
  var xs = [140, 220, 300, 380, 460];                        // 电量刻度(与阶梯竖段对齐)
  for (k = 0; k < xs.length; k++) axes += '<line x1="' + xs[k] + '" y1="200" x2="' + xs[k] + '" y2="207"/>';
  var ys = [182, 160, 128, 92];                              // 价格刻度(与阶梯平台对齐)
  for (k = 0; k < ys.length; k++) axes += '<line x1="53" y1="' + ys[k] + '" x2="60" y2="' + ys[k] + '"/>';
  svg += spotG(axes);

  // ===== 轴名 =====
  svg += '<text x="54" y="24" font-size="17" text-anchor="end" style="fill:var(--note)">价格</text>';
  svg += '<text x="640" y="224" font-size="17" text-anchor="end" style="fill:var(--note)">电量</text>';

  // ===== 供给阶梯(优先次序):便宜的先上,逐段抬升 =====
  var ladderD = 'M60 200 H140 V182 H220 V160 H300 V128 H380 V92 H460';
  svg += '<path id="spotladder" d="' + ladderD + '" style="stroke:var(--acc);stroke-width:3.2" stroke-linejoin="round"/>';

  // ===== 需求(竖线)与出清点 =====
  svg += '<line x1="400" y1="52" x2="400" y2="92" style="stroke:var(--acc2);stroke-width:2.2"/>';
  svg += '<path d="M400 92 V200" style="stroke:var(--acc2);stroke-width:1.6" stroke-dasharray="4 5" opacity=".72"/>';
  svg += '<circle cx="400" cy="92" r="3.5" style="fill:var(--acc2)"/>';

  // ===== 标注:出清价(交点左侧) / 出清点(交点右侧) / 需求 =====
  svg += '<text x="406" y="64" font-size="16" style="fill:var(--acc2)">需求</text>';
  svg += '<text x="392" y="84" font-size="16" text-anchor="end" style="fill:var(--acc2)">出清价</text>';
  svg += '<text x="408" y="84" font-size="16" style="fill:var(--acc2)">出清点</text>';

  // ===== 主图标题(中间空白处) =====
  svg += '<text x="200" y="78" font-size="26" font-weight="700" text-anchor="middle" style="fill:var(--ink)">报价阶梯与出清价</text>';
  svg += '<text x="200" y="100" font-size="15" text-anchor="middle" style="fill:var(--note)">从便宜的先上,到最后一台机组定价</text>';

  // ===== 左下角图例 =====
  svg += '<path d="M64 222 h26" style="stroke:var(--acc);stroke-width:3.2"/>';
  svg += '<text x="100" y="227" font-size="15" style="fill:var(--note)">供给阶梯(优先次序)</text>';
  svg += '<path d="M64 244 h26" style="stroke:var(--acc2);stroke-width:1.6" stroke-dasharray="4 5"/>';
  svg += '<text x="100" y="249" font-size="15" style="fill:var(--note)">需求与出清点</text>';

  // ===== 复用路径(供脉冲运动):与阶梯完全同轨迹的隐形 path =====
  svg += '<path id="spotladder" d="' + ladderD + '" fill="none" stroke="none"/>';

  // ===== 沿阶梯运动的脉冲:报价逐段被叫到号 =====
  svg += spotPulse('spotladder', 'var(--acc)', 7, 0);
  svg += spotPulse('spotladder', 'var(--acc2)', 7, 3.5);

  svg += '</svg>';
  return svg;
}

/* 统一描边分组:浅色轴与刻度 */
function spotG(inner) {
  return '<g style="stroke:var(--note);stroke-width:1.4;fill:none" opacity=".5">' + inner + '</g>';
}

/* 通用脉冲小球:沿给定 path id 运动 */
function spotPulse(pathId, color, dur, delay) {
  return '<circle r="2.1" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}
