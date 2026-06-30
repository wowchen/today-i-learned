/* 首页视图(衬线优雅 · 膳食宝塔 SVG · 两列模块格 · 海蓝/暗夜绿双主题) */
window.NH = window.NH || {};
NH.views = NH.views || {};

NH.views.home = function() {
  var P = NH.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = NH.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < NH.path.length ? NH.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + nutritionSVG() + '</div>';
  html += '<p class="gh-kicker">科普通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">营养之<em>衡</em></h1>';
  html += '<p class="gh-latin">Balance · on · the · Plate</p>';
  html += '<p class="gh-lede">吃是人生最日常的事,也是健康最根本的杠杆。营养学不教禁食清单,而教你读懂身体的能量与营养账本——三大宏量、维生素矿物质、消化吸收与膳食宝塔,从孕期到老年,从减脂到慢病。<b>学会用"平衡"看吃,就不必被"神食""排毒"带跑。</b></p>';
  if (nextLesson && NH.lessons[nextLesson]) {
    var nl = NH.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + NH.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(NH.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + NH.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < NH.modules.length; i++) {
    var m = NH.modules[i];
    var mRead = 0;
    for (var j = 0; j < NH.path.length; j++) {
      if (NH.path[j].indexOf(m.id + '/') === 0 && P.isRead(NH.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + NH.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + NH.esc(m.en || '') + '</div>';
    html += '<p>' + NH.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>BMI 与体重判定、每日能量 TDEE、营养素推荐量、食物红绿灯。</p>';
  html += '<div class="prog">4 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◴', 'BMI 与体重判定', 'body mass index');
  html += toolCell('◐', '每日能量 TDEE', 'daily energy');
  html += toolCell('∿', '营养素推荐量', 'DRI lookup');
  html += toolCell('☼', '食物红绿灯', 'food traffic light');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不背营养素表、不刷题、不贩卖焦虑。每节五分钟,用<b>大白话</b>把营养里那些真正重要、却常被讲成"记忆负担"或"神效传说"的道理讲清:<b>为什么</b>这样吃更健康,而不是什么能吃什么不能吃。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>能量平衡如何决定增重减重;</li>' +
          '<li>宏量与微量营养素各自干什么;</li>' +
          '<li>膳食宝塔与膳食指南怎么用;</li>' +
          '<li>慢病风险与"超级食物"的真相。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为科普通识,不替代医疗建议;疾病诊疗与个体化营养方案以医生或临床营养师为准。参考摄入量据《中国居民膳食营养素参考摄入量(2023)》、膳食指南据《中国居民膳食指南(2022)》。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>营养与健康 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  NH.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 膳食宝塔:五层(谷薯→蔬果→鱼蛋奶豆→畜禽肉→油盐顶尖),底宽顶尖;底层谷薯轻脉动,塔尖有"少"的标记;
   光点沿塔身缓升(SMIL animateMotion);描边/填色随主题取 --acc / --acc2 / --acc-soft,prefers-reduced-motion 守卫 */
function nutritionSVG() {
  return '<svg viewBox="0 0 200 200" fill="none">' +
    // 第1层 谷薯(最底,最宽)
    '<path d="M28 168 H172 L156 150 H44 Z" style="fill:var(--acc-soft);stroke:var(--acc2)" stroke-width="1" opacity=".95"/>' +
    // 第2层 蔬果
    '<path d="M44 150 H156 L144 132 H56 Z" style="fill:var(--acc2)" opacity=".32"/>' +
    // 第3层 鱼蛋奶豆
    '<path d="M56 132 H144 L134 114 H66 Z" style="fill:var(--acc2)" opacity=".55"/>' +
    // 第4层 畜禽肉
    '<path d="M66 114 H134 L126 96 H74 Z" style="fill:var(--acc)" opacity=".55"/>' +
    // 第5层 油盐(顶尖,最窄)
    '<path d="M74 96 H126 L118 80 H82 Z" style="fill:var(--acc)" opacity=".8"/>' +
    // 塔尖"少"标记(脉动)
    '<circle class="sat-halo" cx="100" cy="80" r="5.5" style="fill:none;stroke:var(--acc2)" stroke-width="1" opacity=".5"/>' +
    '<circle cx="100" cy="80" r="2.4" style="fill:var(--acc2)"/>' +
    // 餐盘底盘线
    '<line x1="20" y1="172" x2="180" y2="172" style="stroke:var(--acc2)" stroke-width=".8" opacity=".3"/>' +
    // 沿塔身缓升的光点(能量/营养上升)
    '<path id="nh-rise" d="M100 168 L100 150 L100 132 L100 114 L100 96 L100 82" style="stroke:none" fill="none"/>' +
    '<g class="sat">' +
      '<circle class="sat-halo" cx="0" cy="0" r="4" style="fill:var(--acc)"/>' +
      '<circle cx="0" cy="0" r="1.8" style="fill:var(--acc2)"/>' +
      '<animateMotion dur="7s" repeatCount="indefinite"><mpath href="#nh-rise"/></animateMotion>' +
    '</g>' +
    '<g>' +
      '<circle cx="0" cy="0" r="1.4" style="fill:var(--acc2)" opacity=".6"/>' +
      '<animateMotion dur="7s" repeatCount="indefinite" begin="3.5s"><mpath href="#nh-rise"/></animateMotion>' +
    '</g>' +
    '</svg>';
}
