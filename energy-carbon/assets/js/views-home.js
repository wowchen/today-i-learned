/* 首页视图(「碳市场与减排路径」配额—排放缺口折线图 + 沿曲线脉冲 SVG · 墨绿/冷白 双主题) */
window.ENC = window.ENC || {};
ENC.views = ENC.views || {};

ENC.views.home = function() {
  var P = ENC.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = ENC.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < ENC.path.length ? ENC.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + encSVG() + '</div>';
  html += '<p class="gh-kicker">能源政策 · 碳市场</p>';
  html += '<h1 class="gh-title">给碳<em>定个价</em></h1>';
  html += '<p class="gh-latin">Energy Policy &middot; Carbon Market</p>';
  html += '<p class="gh-lede">减碳这件事,光靠喊口号推不动。得有人定目标、有人把目标拆成额度、有人把额度摆上货架、有人盯着你按时交账——<b>这套从政策到市场再到企业的传导链,就是能源政策与碳市场</b>。本站沿着这条链讲:政策怎么定、电价怎么来、碳怎么算、配额怎么分、碳价怎么形成、绿电绿证怎么用、国际规则怎么接。</p>';
  if (nextLesson && ENC.lessons[nextLesson]) {
    var nl = ENC.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + ENC.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(ENC.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及的法规条文、政策口径、电价机制、碳市场规则、核算标准与国际碳规则都会持续演进;凡涉具体依据与口径之处,一律以现行有效的法律、行政法规、部门规章、国家标准(GB)与主管机构发布的现行文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成投资、交易、报价、审计或法律依据。</b>具体项目的核算口径、履约策略与交易决策,请以企业台账、现行核算指南与真实市场数据为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + ENC.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < ENC.modules.length; i++) {
    var m = ENC.modules[i];
    var mRead = 0;
    for (var j = 0; j < ENC.path.length; j++) {
      if (ENC.path[j].indexOf(m.id + '/') === 0 && P.isRead(ENC.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + ENC.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + ENC.esc(m.en || '') + '</div>';
    html += '<p>' + ENC.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>碳排放量测算、配额缺口与履约成本、碳边境调节(CBAM)、绿电与绿证收益、消纳责任权重达标、碳达峰路径、减排措施成本排序。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('▤', '碳排放量测算器', 'emission accounting');
  html += toolCell('◧', '配额缺口与履约成本测算器', 'allowance gap and compliance cost');
  html += toolCell('⇥', '碳边境调节(CBAM)测算器', 'carbon border adjustment');
  html += toolCell('◍', '绿电与绿证收益测算器', 'green power and certificate revenue');
  html += toolCell('◎', '消纳责任权重达标测算器', 'consumption responsibility');
  html += toolCell('⌒', '碳达峰时间与路径测算器', 'carbon peak pathway');
  html += toolCell('≣', '减排措施成本排序器', 'abatement cost ranking');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲能源技术本身怎么实现(已有<b>发电技术通识站</b>与<b>新型电力系统与储能站</b>),不讲电力市场的交易品种细节(已有<b>电力市场站</b>),不讲配网与感知层怎么建(已有<b>配电网站</b>与<b>电力物联网站</b>)。本站只讲一件事:<b>从政策目标到市场机制,再到企业动作,这条减碳的传导链是怎么走通的</b>——法规与规划、能源转型、电力体制与电价、可再生能源政策、双碳路径、碳核算、碳市场、绿电绿证、碳金融与国际规则。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>能源政策到底在管什么,为什么「能耗双控」正在转向「碳排放双控」;</li>' +
          '<li>中国的电从哪来、电价有几种、为什么居民电价和工业电价差这么多;</li>' +
          '<li>可再生能源补贴为什么要退坡,平价上网之后靠什么活下去;</li>' +
          '<li>电力市场里中长期、现货、辅助服务各管什么,电价是怎么被「竞价」出来的;</li>' +
          '<li>双碳目标下面的 1+N 政策体系长什么样,碳达峰十大行动在抓什么;</li>' +
          '<li>企业的碳到底怎么算:排放因子、三个范围、组织边界与 MRV 分别是什么;</li>' +
          '<li>碳市场为什么能减碳:总量控制与交易、配额分配、基准线法与历史法的差别;</li>' +
          '<li>全国碳市场覆盖了谁、门槛在哪、配额怎么分、履约怎么交、不交会怎样;</li>' +
          '<li>CCER、林业碳汇与方法学:自愿减排量是怎么变出来的、能顶多少账;</li>' +
          '<li>绿电和绿证到底在卖什么,证电合一与证电分离差在哪,消纳责任权重怎么算;</li>' +
          '<li>碳资产怎么变成金融工具,碳质押、碳远期、碳基金与碳会计处理各是什么;</li>' +
          '<li>欧盟碳市场与 CBAM 会带来什么影响,企业该怎么提前应对;</li>' +
          '<li>碳管理岗位日常在做什么,碳盘查报告、碳足迹与碳中和认证怎么落地。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重机制与逻辑,不替代任何法规释义、核算指南、交易规则与合规审计意见。涉政策法规、碳价与配额比例之处写的是机制与口径,具体执行以现行有效文件为准;涉投资与交易之处,本站只讲原理,<b>不构成任何投资、交易、报价或法律意见</b>。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>能源政策与碳市场 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  ENC.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「碳市场与减排路径」——一张配额与排放的示意折线图
   实线 = 实际排放(先高后降);虚线 = 配额上限(逐年收紧);
   两线之间是「减排缺口」,右端交汇处标出达标点,并画一条竖向虚线引到横轴;
   左上角有两行图例;两枚脉冲小球沿实际排放曲线运动(取 --acc / --acc2);
   描边/填色随主题取 --acc / --acc2 / --note
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function encSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  // 坐标轴
  svg += '<g style="stroke:var(--note);stroke-width:0.9" opacity=".5">';
  svg += '<path d="M32 34 V166"/>';
  svg += '<path d="M32 166 H182"/>';
  svg += '</g>';
  // 两条曲线
  var emiD = 'M32 70 C72 76 118 90 170 104';                 // 实际排放
  var capD = 'M32 100 C72 108 118 112 170 104';                // 配额上限
  var gapD = 'M32 70 C72 76 118 90 170 104 C118 112 72 108 32 100 Z';
  // 减排缺口阴影
  svg += '<path d="' + gapD + '" style="fill:var(--acc)" opacity=".11"/>';
  // 配额上限(虚线)
  svg += '<path d="' + capD + '" style="stroke:var(--acc2);stroke-width:1.1" stroke-dasharray="3 3"/>';
  // 实际排放(实线)
  svg += '<path d="' + emiD + '" style="stroke:var(--acc);stroke-width:1.5" stroke-linecap="round"/>';
  // 达标点与竖向虚线
  svg += '<path d="M170 104 V166" style="stroke:var(--acc2);stroke-width:0.8" stroke-dasharray="2 3" opacity=".65"/>';
  svg += '<circle cx="170" cy="104" r="2.6" style="fill:var(--acc2)"/>';
  svg += '<text x="170" y="176" font-size="6.2" text-anchor="middle" style="fill:var(--acc2)">达标</text>';
  // 缺口标注
  svg += '<text x="70" y="93" font-size="6.4" text-anchor="middle" style="fill:var(--acc2)">减排缺口</text>';
  // 图例
  svg += '<path d="M36 44 h13" style="stroke:var(--acc);stroke-width:1.5"/>';
  svg += '<text x="54" y="47" font-size="6.8" style="fill:var(--acc)">实际排放</text>';
  svg += '<path d="M36 58 h13" style="stroke:var(--acc2);stroke-width:1.1" stroke-dasharray="3 3"/>';
  svg += '<text x="54" y="61" font-size="6.8" style="fill:var(--acc2)">配额上限</text>';
  // 轴名
  svg += '<text x="106" y="184" font-size="6.2" text-anchor="middle" style="fill:var(--note)">时间</text>';
  svg += '<text x="21" y="104" font-size="6.2" text-anchor="middle" style="fill:var(--note)">排放</text>';
  // 复用路径(供脉冲运动)
  svg += '<path id="encpath" d="' + emiD + '" fill="none" stroke="none"/>';
  // 沿实际排放曲线运动的脉冲
  svg += encPulse('encpath', 'var(--acc)', 8, 0);
  svg += encPulse('encpath', 'var(--acc2)', 8, 4);
  svg += '</svg>';
  return svg;
}

/* 通用脉冲小球:沿给定 path id 运动 */
function encPulse(pathId, color, dur, delay) {
  return '<circle r="2.1" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}
