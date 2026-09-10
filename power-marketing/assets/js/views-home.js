/* 首页视图(客户-服务-电网三层结构 + 双向数据脉冲 SVG · 青柠森绿/墨绿亮青柠双主题) */
window.EMK = window.EMK || {};
EMK.views = EMK.views || {};

EMK.views.home = function() {
  var P = EMK.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = EMK.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < EMK.path.length ? EMK.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + emkSVG() + '</div>';
  html += '<p class="gh-kicker">电力营销 · 大白话讲透</p>';
  html += '<h1 class="gh-title">让每个客户<em>用好电</em></h1>';
  html += '<p class="gh-latin">Power Marketing &middot; Customer Service</p>';
  html += '<p class="gh-lede">从客户想装一块电表开始,到每月那张电费单上的每一行怎么算出来,再到一个投诉电话打进来之后怎么收场——<b>电力营销就是电网企业面对客户的这一整条线。</b>本站讲清两件事:一张电费单到底由什么构成,以及客户服务这件事是怎么被组织、被考核、被做好的。</p>';
  if (nextLesson && EMK.lessons[nextLesson]) {
    var nl = EMK.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + EMK.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(EMK.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 政策与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>政策与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 9 月。</b>本站涉及的电价政策、收费标准、办电时限、服务规范与监管要求调整频繁,一律以国家发展改革委、国家能源局及各省主管部门现行发布的价格文件、办法与规则为准,并会随政策更新而变化。</p>';
  html += '<p><b>本站不构成业务办理、收费、合规或法律依据</b>,也不提供任何规避监管的做法。涉及具体客户与业务事项,请以供电企业的正式答复、供用电合同约定与现行有效文件为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + EMK.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < EMK.modules.length; i++) {
    var m = EMK.modules[i];
    var mRead = 0;
    for (var j = 0; j < EMK.path.length; j++) {
      if (EMK.path[j].indexOf(m.id + '/') === 0 && P.isRead(EMK.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + EMK.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + EMK.esc(m.en || '') + '</div>';
    html += '<p>' + EMK.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>电费清单测算、功率因数调整电费、业扩报装方案、需求响应收益、客户电费风险评分。</p>';
  html += '<div class="prog">5 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', '电费清单测算器', 'bill breakdown');
  html += toolCell('≈', '功率因数调整电费', 'power factor');
  html += toolCell('▣', '业扩报装方案测算', 'new connection');
  html += toolCell('⊗', '需求响应收益测算', 'demand response');
  html += toolCell('◎', '客户电费风险评分', 'credit risk');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电力市场机制(已有<b>电力市场与能源交易站</b>),不讲配电网网架与自动化(已有<b>配电网与配电自动化站</b>),也不讲电力系统原理(已有<b>电网通识站</b>)。本站只讲一件事:<b>电网企业面向客户的这条线怎么运转</b>——电怎么接进来、表怎么装、费怎么算、钱怎么收、服务怎么给、投诉怎么处理、政策怎么落地。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>一张电费单上的每一行分别是什么,基本电费为什么按容量或需量算;</li>' +
          '<li>居民阶梯、峰谷分时、功率因数调整分别想引导客户做什么;</li>' +
          '<li>高供高计与高供低计差在哪,计量差错电量怎么退补;</li>' +
          '<li>报装接电走哪几步、每步的时限要求从哪来;</li>' +
          '<li>95598 接到一个投诉之后,内部是怎么闭环的;</li>' +
          '<li>需求响应、电能替代、综合能源服务这些新业务靠什么算账;</li>' +
          '<li>用电检查与营销稽查到底在查什么,违约用电和窃电怎么定性。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重业务逻辑与判断,不替代任何业务规程与政策文件。涉电价与收费之处写的是机制与口径,具体执行以现行有效文件为准;涉及客户信息与业务数据的处理,强调依法合规、最小必要。<b>内容基线 2026 年 9 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>电力营销与客户服务 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-09</span></div>';

  EMK.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:客户-服务-电网三层结构
   上层 供电侧母线(3 个接入点) → 中层 三类服务渠道 → 下层 三类客户;
   竖线上双向数据脉冲:上行(客户向电网,报装/缴费/咨询)取 --acc,
   下行(电网向客户,供电/服务响应)取 --acc2;中央服务节点带呼吸光环。
   描边/填色随主题取 --acc / --acc2 / --acc-soft
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function emkSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var xs = [50, 100, 150];
  var k;

  // 顶部说明
  svg += '<text x="100" y="18" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">供电侧 · 电网</text>';

  // 供电母线 + 接入点
  svg += '<line x1="38" y1="42" x2="162" y2="42" style="stroke:var(--acc2);stroke-width:1.4" stroke-linecap="round" opacity=".55"/>';
  for (k = 0; k < 3; k++) {
    svg += '<circle cx="' + xs[k] + '" cy="42" r="3.4" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.1"/>';
  }

  // 竖线(静止底稿)
  for (k = 0; k < 3; k++) {
    svg += '<line x1="' + xs[k] + '" y1="45.5" x2="' + xs[k] + '" y2="93" style="stroke:var(--acc2);stroke-width:1" opacity=".28"/>';
    svg += '<line x1="' + xs[k] + '" y1="117" x2="' + xs[k] + '" y2="152" style="stroke:var(--acc2);stroke-width:1" opacity=".28"/>';
  }

  // 供脉冲运动的复用路径
  for (k = 0; k < 3; k++) {
    svg += '<path id="emkup' + k + '" d="M' + xs[k] + ' 152 V46" fill="none" stroke="none"/>';
    svg += '<path id="emkdn' + k + '" d="M' + xs[k] + ' 46 V152" fill="none" stroke="none"/>';
  }

  // 双向脉冲:上行取 acc(客户发声),下行取 acc2(服务响应)
  for (k = 0; k < 3; k++) {
    svg += '<circle r="2" style="fill:var(--acc)">' +
           '<animateMotion dur="5.5s" repeatCount="indefinite" begin="' + (k * 1.5) + 's"><mpath href="#emkup' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="5.5s" repeatCount="indefinite" begin="' + (k * 1.5) + 's"/></circle>';
    svg += '<circle r="2" style="fill:var(--acc2)">' +
           '<animateMotion dur="5.5s" repeatCount="indefinite" begin="' + (k * 1.5 + 2.75) + 's"><mpath href="#emkdn' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="5.5s" repeatCount="indefinite" begin="' + (k * 1.5 + 2.75) + 's"/></circle>';
  }

  // 服务渠道节点(中央那个带呼吸光环)
  svg += '<circle cx="100" cy="105" r="11.5" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="11.5;11.5;26" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.38;0" dur="4s" repeatCount="indefinite"/></circle>';
  for (k = 0; k < 3; k++) {
    svg += '<circle cx="' + xs[k] + '" cy="105" r="11.5" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.1"/>';
  }
  svg += glyphPhone(50, 105);
  svg += glyphScreen(100, 105);
  svg += glyphCounter(150, 105);

  // 客户节点
  svg += custAt(50, 162, 0);
  svg += custAt(100, 162, 1);
  svg += custAt(150, 162, 2);

  // 底部说明
  svg += '<text x="100" y="193" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">客户侧 · 居民 / 工商业 / 大工业</text>';

  svg += '</svg>';
  return svg;
}

/* 服务渠道图标:热线听筒 / 线上屏幕 / 营业厅柜台 */
function glyphPhone(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">';
  s += '<path d="M' + (x - 4.4) + ' ' + (y - 4.4) + ' c-1.6 1.6 -1.2 4.4 .6 6.4 c1.9 2.1 5.2 4.6 7.6 3.6 c1.1 -.5 1.3 -1.6 .9 -2.6 l-1.4 -2 c-.4 -.6 -1.1 -.7 -1.7 -.3 l-1 .7 c-1.4 -.5 -2.8 -1.9 -3.4 -3.3 l.8 -1 c.4 -.6 .3 -1.3 -.3 -1.7 l-2 -1.4"/>';
  s += '</g>';
  return s;
}
function glyphScreen(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round">';
  s += '<rect x="' + (x - 3.8) + '" y="' + (y - 5.4) + '" width="7.6" height="10.8" rx="1.4"/>';
  s += '<path d="M' + (x - 1.3) + ' ' + (y + 3.1) + ' h2.6"/>';
  s += '</g>';
  return s;
}
function glyphCounter(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">';
  s += '<path d="M' + (x - 4.8) + ' ' + (y + 3.6) + ' v-6.4 h9.6 v6.4"/>';
  s += '<path d="M' + (x - 6.2) + ' ' + (y + 3.6) + ' h12.4"/>';
  s += '<path d="M' + (x - 1.6) + ' ' + (y - 2.8) + ' v3.4 M' + (x + 1.6) + ' ' + (y - 2.8) + ' v3.4"/>';
  s += '</g>';
  return s;
}

/* 客户节点:圆角矩形 + 内部类型符号(居民房 / 商铺 / 厂房) */
function custAt(x, y, kind) {
  var s = '';
  s += '<rect x="' + (x - 10.5) + '" y="' + (y - 8.5) + '" width="21" height="17" rx="3" style="fill:var(--paper);stroke:var(--acc2);stroke-width:1.1"/>';
  var g = '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">';
  if (kind === 0) {
    g += '<path d="M' + (x - 4) + ' ' + (y + 2.6) + ' l4 -4.4 l4 4.4 z"/>';
    g += '<path d="M' + (x - 2.6) + ' ' + (y + 2.6) + ' v-2.2 h1.6 v2.2"/>';
  } else if (kind === 1) {
    g += '<path d="M' + (x - 4.6) + ' ' + (y + 3) + ' v-4.4 h9.2 v4.4"/>';
    g += '<path d="M' + (x - 5.8) + ' ' + (y - 1.4) + ' h11.6"/>';
    g += '<path d="M' + (x - 2.4) + ' ' + (y + 3) + ' v-2.6 h2.4 v2.6"/>';
  } else {
    g += '<path d="M' + (x - 5) + ' ' + (y + 3) + ' v-6 h10 v6 z"/>';
    g += '<path d="M' + (x - 3.2) + ' ' + (y - 3) + ' v-2.4 h1.8 v2.4 M' + (x + .4) + ' ' + (y - 3) + ' v-2.4 h1.8 v2.4"/>';
    g += '<path d="M' + (x - 2.6) + ' ' + (y + 3) + ' v-2.4 h5.2 v2.4"/>';
  }
  s += g + '</g>';
  return s;
}
