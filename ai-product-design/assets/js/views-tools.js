/* 工具视图:七件 AI 产品与交互设计互动工具(任务适配度 / 交互漏斗 / 对话轮次 / 人机协作审核负荷 / 无障碍对比度 / 原型测试样本量 / 价值与定价)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成产品决策、投资测算、无障碍认证或合规依据。 */
window.APD = window.APD || {};
APD.views = APD.views || {};

APD._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
APD._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
APD._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
APD.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">做 AI 产品,很多判断可以先用数字掂一掂:这件活<b>到底适不适合交给 AI(结构化、容错度、数据可得性各占几分)、上线后用户在漏斗哪一环流失最多、一次对话平均要几轮才办成事、引入 AI 之后人工审核还剩多少活、这组前后景颜色读起来够不够清楚、想让八成用户都碰到问题至少得测几个人、卖到多少家客户才回本</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的产品数据、用户行为分布、模型能力差异、定价策略与无障碍标准的完整要求。<b>不作为产品决策、投资测算、无障碍认证或合规依据。</b>实际项目须以真实用户研究、A/B 实验、现行无障碍标准(如 WCAG)与企业口径为准。</p>';
  html += '</div>';

  // 1. 任务适配度评估器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>任务适配度评估器</h3>';
  html += '<p class="lab-desc">同一件事,有的适合交给 AI,有的只适合让 AI 打下手。按<b>结构化程度、容错度、数据可得性</b>三个方面打分,看它落在哪个档位、该用哪种落地方式。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>任务结构化程度(0~10)<input type="number" id="tf-struct" step="1" value="6" min="0" max="10" oninput="APD.calcTaskFit()"></label>';
  html += '<label>容错度(0~10,越高越能容忍错)<input type="number" id="tf-tol" step="1" value="5" min="0" max="10" oninput="APD.calcTaskFit()"></label>';
  html += '<label>数据与知识可得性(0~10)<input type="number" id="tf-data" step="1" value="7" min="0" max="10" oninput="APD.calcTaskFit()"></label>';
  html += '<label>人在回路必要性(0~10,越高越必须留人)<input type="number" id="tf-hitl" step="1" value="5" min="0" max="10" oninput="APD.calcTaskFit()"></label>';
  html += '<label>单次人工耗时(分钟)<input type="number" id="tf-post" step="1" value="20" min="0" oninput="APD.calcTaskFit()"></label>';
  html += '<label>每月处理次数<input type="number" id="tf-freq" step="10" value="200" min="0" oninput="APD.calcTaskFit()"></label>';
  html += '</div>';
  html += '<div id="tf-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 交互漏斗测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▽</span>交互漏斗测算器</h3>';
  html += '<p class="lab-desc">AI 功能最难的不是做出来,是有人真的用下去。填入从曝光到留存各环节人数,看<b>每一环的转化率、流失最大的那一环在哪、以及补上它能把总体转化拉高多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>曝光人数<input type="number" id="fn-a" step="100" value="5000" min="0" oninput="APD.calcFunnel()"></label>';
  html += '<label>首次尝试人数<input type="number" id="fn-b" step="10" value="1200" min="0" oninput="APD.calcFunnel()"></label>';
  html += '<label>持续使用人数<input type="number" id="fn-c" step="10" value="480" min="0" oninput="APD.calcFunnel()"></label>';
  html += '<label>30 日留存人数<input type="number" id="fn-d" step="10" value="240" min="0" oninput="APD.calcFunnel()"></label>';
  html += '</div>';
  html += '<div id="fn-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 对话轮次与完成率测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇄</span>对话轮次与完成率测算器</h3>';
  html += '<p class="lab-desc">对话式产品最怕「聊了半天没办成事」。填入会话数、完成数与平均轮次,看<b>任务完成率、澄清率、办成一件平均要花几轮、以及未完成的那部分卡在哪</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>发起会话数<input type="number" id="dt-total" step="10" value="1000" min="0" oninput="APD.calcDialogTurn()"></label>';
  html += '<label>任务完成会话数<input type="number" id="dt-done" step="10" value="620" min="0" oninput="APD.calcDialogTurn()"></label>';
  html += '<label>平均对话轮次<input type="number" id="dt-turn" step="0.5" value="4.5" min="0" oninput="APD.calcDialogTurn()"></label>';
  html += '<label>需要澄清的会话比例(%)<input type="number" id="dt-clar" step="5" value="35" min="0" max="100" oninput="APD.calcDialogTurn()"></label>';
  html += '</div>';
  html += '<div id="dt-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 人机协作与审核负荷测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⚖</span>人机协作与审核负荷测算器</h3>';
  html += '<p class="lab-desc">引入了 AI,人并没有完全闲着——要审核、要返工。填入自动比例与审核参数,看<b>每天还剩多少人工工时、相对全人工释放了多少人力,以及审核是不是新的瓶颈</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>日处理量(件)<input type="number" id="cl-vol" step="50" value="2000" min="0" oninput="APD.calcCollabLoad()"></label>';
  html += '<label>AI 自动处理比例(%)<input type="number" id="cl-auto" step="5" value="70" min="0" max="100" oninput="APD.calcCollabLoad()"></label>';
  html += '<label>其中需人工审核比例(%)<input type="number" id="cl-rev" step="5" value="30" min="0" max="100" oninput="APD.calcCollabLoad()"></label>';
  html += '<label>单件审核时间(分钟)<input type="number" id="cl-min" step="0.5" value="1.5" min="0" oninput="APD.calcCollabLoad()"></label>';
  html += '<label>AI 错误率(%)<input type="number" id="cl-err" step="1" value="5" min="0" max="100" oninput="APD.calcCollabLoad()"></label>';
  html += '<label>单件返工时间(分钟)<input type="number" id="cl-rw" step="1" value="8" min="0" oninput="APD.calcCollabLoad()"></label>';
  html += '<label>全人工单件耗时(分钟)<input type="number" id="cl-man" step="1" value="4" min="0" oninput="APD.calcCollabLoad()"></label>';
  html += '</div>';
  html += '<div id="cl-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 无障碍对比度检查器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>无障碍对比度检查器</h3>';
  html += '<p class="lab-desc">文字和背景太接近,眼睛再好的用户也读不清。填入前景色与背景色,看<b>对比度比值是多少、够不够 WCAG AA / AAA 的线、当前字号算不算「大字」</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>文字颜色(十六进制)<input type="text" id="ct-fg" value="#1f2937" oninput="APD.calcContrast()"></label>';
  html += '<label>背景颜色(十六进制)<input type="text" id="ct-bg" value="#ffffff" oninput="APD.calcContrast()"></label>';
  html += '<label>字号(pt)<input type="number" id="ct-size" step="1" value="16" min="1" oninput="APD.calcContrast()"></label>';
  html += '<label>是否加粗<select id="ct-bold" onchange="APD.calcContrast()"><option value="0" selected>常规</option><option value="1">加粗</option></select></label>';
  html += '</div>';
  html += '<div id="ct-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 原型测试样本量测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">☺</span>原型测试样本量测算器</h3>';
  html += '<p class="lab-desc">可用性测试要找几个人?这不是拍脑袋。填入单个用户能发现问题的概率,看<b>想发现八成问题至少要测多少人、发现九成又要多少人</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>单个用户发现问题概率(%)<input type="number" id="un-p" step="1" value="31" min="1" max="99" oninput="APD.calcUsabilityN()"></label>';
  html += '<label>目标发现问题比例(%)<input type="number" id="un-target" step="5" value="85" min="1" max="99" oninput="APD.calcUsabilityN()"></label>';
  html += '</div>';
  html += '<div id="un-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 价值与定价测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>价值与定价测算器</h3>';
  html += '<p class="lab-desc">按席位收费的产品,得先算清卖多少家才回本。填入目标客户、转化率与席位价格,看<b>月收入、毛利率、盈亏平衡的客户数,以及现在还差多远</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>目标客户数(家)<input type="number" id="pr-cust" step="10" value="200" min="0" oninput="APD.calcPricing()"></label>';
  html += '<label>付费转化率(%)<input type="number" id="pr-conv" step="1" value="15" min="0" max="100" oninput="APD.calcPricing()"></label>';
  html += '<label>每客户席位数<input type="number" id="pr-seat" step="1" value="5" min="0" oninput="APD.calcPricing()"></label>';
  html += '<label>席位单价(元/月)<input type="number" id="pr-price" step="10" value="99" min="0" oninput="APD.calcPricing()"></label>';
  html += '<label>单客户交付成本(元/月)<input type="number" id="pr-cost" step="10" value="120" min="0" oninput="APD.calcPricing()"></label>';
  html += '<label>固定成本(元/月)<input type="number" id="pr-fixed" step="1000" value="30000" min="0" oninput="APD.calcPricing()"></label>';
  html += '</div>';
  html += '<div id="pr-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取常见量级概数,单价与比率为示例值。<b>实际项目必须依据真实用户研究、行为数据、A/B 实验、现行 WCAG 标准与企业口径单独核算</b>,本工具结果不作为产品决策、投资测算、无障碍认证或合规依据。</p>';
  html += '</div>';
  APD.render(html);
  APD.calcTaskFit(); APD.calcFunnel(); APD.calcDialogTurn(); APD.calcCollabLoad();
  APD.calcContrast(); APD.calcUsabilityN(); APD.calcPricing();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="calc-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 任务适配度 ---- */
APD.calcTaskFit = function() {
  var st = APD._num('tf-struct'), tol = APD._num('tf-tol'), data = APD._num('tf-data');
  var hitl = APD._num('tf-hitl'), post = APD._num('tf-post'), freq = APD._num('tf-freq');
  var el = document.getElementById('tf-result');
  if (st === null || tol === null || data === null || hitl === null || post === null || freq === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  var score = (st * 0.35 + tol * 0.35 + data * 0.30) * 10;
  var annualH = freq * 12 * post / 60;
  var netScore = score - hitl * 1.5;
  var way, cls;
  if (netScore >= 70) { way = '适合 AI 主导（保留抽检）'; cls = 'ok'; }
  else if (netScore >= 50) { way = '人机协同（AI 出稿、人来定）'; cls = 'mid'; }
  else { way = '暂不适合全自动，只做辅助或智能提示'; cls = 'bad'; }
  var rows = [];
  rows.push(tr('适配总分(0~100)', APD._fix(score, 1)));
  rows.push(tr('结构化程度加权贡献', APD._fix(st * 0.35 * 10, 1) + ' 分', '', '权重 35%'));
  rows.push(tr('容错度加权贡献', APD._fix(tol * 0.35 * 10, 1) + ' 分', '', '权重 35%'));
  rows.push(tr('数据可得性加权贡献', APD._fix(data * 0.30 * 10, 1) + ' 分', '', '权重 30%'));
  rows.push(tr('人在回路扣分', '−' + APD._fix(hitl * 1.5, 1) + ' 分', 'mid', '必要性越高,越不能放手'));
  rows.push(tr('修正后判定分', APD._fix(netScore, 1) + ' 分', cls));
  rows.push(tr('建议落地方式', way, cls));
  rows.push(tr('人工年工时(现状)', APD._w(annualH, 0) + ' 小时/年'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:结构化程度高(输入输出边界清晰)、容错度大(错了不致命)、数据与知识拿得到——三项都高,才撑得起让 AI 主导。人在回路必要性越高,能放的手就越少。<br>一件活值不值得做,还要看现有人工年工时:工时越大的活,同样的效率提升带来的收益越大。</p>';
};

/* ---- 2. 交互漏斗 ---- */
APD.calcFunnel = function() {
  var a = APD._num('fn-a'), b = APD._num('fn-b'), c = APD._num('fn-c'), d = APD._num('fn-d');
  var el = document.getElementById('fn-result');
  if (a === null || b === null || c === null || d === null || a <= 0) { el.innerHTML = warn('请把四段人数都填上,且曝光人数要大于 0。'); return; }
  var r1 = b / a, r2 = c / b, r3 = d / c, total = d / a;
  var rates = [['曝光 → 尝试', r1, a, b], ['尝试 → 持续使用', r2, b, c], ['持续使用 → 留存', r3, c, d]];
  var worst = rates[0];
  for (var i = 1; i < rates.length; i++) if (rates[i][1] < worst[1]) worst = rates[i];
  var rows = [];
  rows.push(tr('总体转化率', APD._fix(total * 100, 2) + ' %', total >= 0.1 ? 'ok' : 'mid', d + ' ÷ ' + a));
  rows.push(tr(rates[0][0], APD._fix(r1 * 100, 2) + ' %'));
  rows.push(tr(rates[1][0], APD._fix(r2 * 100, 2) + ' %'));
  rows.push(tr(rates[2][0], APD._fix(r3 * 100, 2) + ' %'));
  rows.push(tr('流失最大的一环', worst[0], 'bad'));
  rows.push(tr('该环现存转化率', APD._fix(worst[1] * 100, 2) + ' %', 'bad'));
  // 若该环提升 10 个百分点
  var improved = total;
  if (worst === rates[0]) improved = Math.min(1, r1 + 0.1) * r2 * r3;
  else if (worst === rates[1]) improved = r1 * Math.min(1, r2 + 0.1) * r3;
  else improved = r1 * r2 * Math.min(1, r3 + 0.1);
  rows.push(tr('该环 +10 个百分点后总体', APD._fix(improved * 100, 2) + ' %', 'ok', '提升 ' + APD._fix((improved - total) * 100, 2) + ' 个百分点'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:AI 功能的第一道生死线是「尝试 → 持续使用」,最后一关是「留存」。总转化率是个乘法链,任何一环太低都会把整体拖垮,所以优先补<b>转化率最低、又最容易改</b>的那一环。<br>注意:曝光人数往往不容易拿到,用「功能入口的展示次数」或「目标人群规模」近似即可。</p>';
};

/* ---- 3. 对话轮次与完成率 ---- */
APD.calcDialogTurn = function() {
  var total = APD._num('dt-total'), done = APD._num('dt-done'), turn = APD._num('dt-turn'), clar = APD._num('dt-clar');
  var el = document.getElementById('dt-result');
  if (total === null || done === null || turn === null || clar === null || total <= 0) { el.innerHTML = warn('请把四项都填上,且会话数要大于 0。'); return; }
  var rate = done / total;
  var allTurns = total * turn;
  var turnsPerDone = done > 0 ? allTurns / done : 0;
  var unfinished = total - done;
  var rows = [];
  rows.push(tr('任务完成率', APD._fix(rate * 100, 1) + ' %', rate >= 0.7 ? 'ok' : (rate >= 0.5 ? 'mid' : 'bad')));
  rows.push(tr('未完成会话数', APD._w(unfinished, 0) + ' 次', 'bad'));
  rows.push(tr('澄清率', APD._fix(clar, 1) + ' %', clar <= 30 ? 'ok' : 'mid', '需要反问或澄清的比例'));
  rows.push(tr('平均对话轮次', APD._fix(turn, 1) + ' 轮'));
  rows.push(tr('总轮次数', APD._w(allTurns, 0) + ' 轮'));
  rows.push(tr('办成一件平均轮次', APD._fix(turnsPerDone, 2) + ' 轮/件', turnsPerDone <= 6 ? 'ok' : 'mid'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:完成率低于 50% 说明这个场景还不到能上的时候;澄清率高,通常是提示词没交代清、或入口没有明确告诉用户「它能干什么、要问什么」。<br>「办成一件平均几轮」是对话体验的核心手感:轮次越高,用户越容易在中间放弃。想压低它,靠的是更清楚的引导、更好的上下文记忆,而不是把界面做得更花。</p>';
};

/* ---- 4. 人机协作与审核负荷 ---- */
APD.calcCollabLoad = function() {
  var vol = APD._num('cl-vol'), auto = APD._num('cl-auto'), rev = APD._num('cl-rev');
  var min = APD._num('cl-min'), err = APD._num('cl-err'), rw = APD._num('cl-rw'), man = APD._num('cl-man');
  var el = document.getElementById('cl-result');
  if (vol === null || auto === null || rev === null || min === null || err === null || rw === null || man === null) { el.innerHTML = warn('请把七项都填上。'); return; }
  var aiCnt = vol * auto / 100;
  var revCnt = aiCnt * rev / 100;
  var revH = revCnt * min / 60;
  var errCnt = aiCnt * err / 100;
  var errH = errCnt * rw / 60;
  var manualH = revH + errH;
  var allManH = vol * man / 60;
  var freeRatio = allManH > 0 ? 1 - manualH / allManH : 0;
  var rows = [];
  rows.push(tr('AI 自动处理件数', APD._w(aiCnt, 0) + ' 件/日'));
  rows.push(tr('其中需人工审核', APD._w(revCnt, 0) + ' 件/日'));
  rows.push(tr('审核工时', APD._w(revH, 1) + ' 小时/日', revH > allManH * 0.5 ? 'mid' : ''));
  rows.push(tr('AI 错误件数', APD._w(errCnt, 0) + ' 件/日', 'bad'));
  rows.push(tr('返工工时', APD._w(errH, 1) + ' 小时/日', 'bad'));
  rows.push(tr('人工总负荷', APD._w(manualH, 1) + ' 小时/日', 'ok'));
  rows.push(tr('全人工基线', APD._w(allManH, 1) + ' 小时/日'));
  rows.push(tr('释放人力比例', APD._fix(freeRatio * 100, 1) + ' %', freeRatio >= 0.5 ? 'ok' : 'mid'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:引入 AI 之后,人的活并没有消失,而是从「干活」变成「审核与兜底」。这两块的工时加起来,才是真实的人工负荷。<br>如果审核工时本身就接近全人工的一半,那这套方案省下的人力其实有限——这时候要优化的不是模型,而是<b>审核比例与一次通过率</b>。</p>';
};

/* ---- 5. 无障碍对比度 ---- */
APD.calcContrast = function() {
  var el = document.getElementById('ct-result');
  function hex2rgb(h) {
    if (!h) return null;
    h = h.trim().replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function lum(rgb) {
    var a = rgb.map(function(v) { v = v / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }
  var fg = hex2rgb(document.getElementById('ct-fg').value);
  var bg = hex2rgb(document.getElementById('ct-bg').value);
  var size = APD._num('ct-size');
  var bold = document.getElementById('ct-bold').value === '1';
  if (!fg || !bg || size === null) { el.innerHTML = warn('请填合法的十六进制颜色(如 #1f2937)与字号。'); return; }
  var L1 = lum(fg), L2 = lum(bg);
  var hi = Math.max(L1, L2), lo = Math.min(L1, L2);
  var ratio = (hi + 0.05) / (lo + 0.05);
  var big = size >= 18 || (size >= 14 && bold);
  var aaNeed = big ? 3 : 4.5;
  var aaaNeed = big ? 4.5 : 7;
  var rows = [];
  rows.push(tr('对比度比值', APD._fix(ratio, 2) + ' : 1', ratio >= aaNeed ? 'ok' : 'bad'));
  rows.push(tr('当前字号判定', big ? '大字' : '正文', '', '阈值:≥18pt,或 ≥14pt 且加粗'));
  rows.push(tr('WCAG AA 要求', '≥ ' + aaNeed + ' : 1', ratio >= aaNeed ? 'ok' : 'bad', ratio >= aaNeed ? '达标' : '未达标'));
  rows.push(tr('WCAG AAA 要求', '≥ ' + aaaNeed + ' : 1', ratio >= aaaNeed ? 'ok' : 'mid', ratio >= aaaNeed ? '达标' : '未达标'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:对比度越高,弱视与强光环境下越读得清。正文建议至少到 AA(4.5:1),重要提示尽量往 AAA(7:1)靠。<br>常见坑:浅灰字配白底、彩色底上用同色系文字、把占位符做得太淡——这些在设计师的显示器上没问题,到用户手里就成了「看不见」。颜色之外,别只靠颜色传达信息(色盲用户分不出)。</p>';
};

/* ---- 6. 原型测试样本量 ---- */
APD.calcUsabilityN = function() {
  var p = APD._num('un-p'), target = APD._num('un-target');
  var el = document.getElementById('un-result');
  if (p === null || target === null || p <= 0 || p >= 100 || target <= 0 || target >= 100) { el.innerHTML = warn('问题概率与目标比例都要在 1~99 之间。'); return; }
  function nFor(t) { return Math.ceil(Math.log(1 - t / 100) / Math.log(1 - p / 100)); }
  var n = nFor(target);
  var rows = [];
  rows.push(tr('单个用户发现问题概率', APD._fix(p, 1) + ' %'));
  rows.push(tr('目标发现问题比例', APD._fix(target, 1) + ' %'));
  rows.push(tr('建议测试人数', n + ' 人', n <= 6 ? 'ok' : 'mid', 'n = ln(1−目标) ÷ ln(1−单位概率)'));
  rows.push(tr('发现 80% 问题需', nFor(80) + ' 人'));
  rows.push(tr('发现 85% 问题需', nFor(85) + ' 人'));
  rows.push(tr('发现 90% 问题需', nFor(90) + ' 人'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:可用性测试不是「人越多越好」,而是「够发现大部分问题就好」。经验上每 5 名用户能发现约七八成的可用性问题,所以第一轮测 5~8 人、改完再测一轮,比一次找 30 人更划算。<br>注意:这个模型假设问题会重复出现;对极端少见的边界问题,它估不出来,还得靠专家评审与真实数据补。</p>';
};

/* ---- 7. 价值与定价 ---- */
APD.calcPricing = function() {
  var cust = APD._num('pr-cust'), conv = APD._num('pr-conv'), seat = APD._num('pr-seat');
  var price = APD._num('pr-price'), cost = APD._num('pr-cost'), fixed = APD._num('pr-fixed');
  var el = document.getElementById('pr-result');
  if (cust === null || conv === null || seat === null || price === null || cost === null || fixed === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  var paying = cust * conv / 100;
  var seats = paying * seat;
  var revenue = seats * price;
  var varCost = paying * cost;
  var gross = revenue - varCost;
  var margin = revenue > 0 ? gross / revenue : 0;
  var perCust = seat * price - cost;
  var be = perCust > 0 ? Math.ceil(fixed / perCust) : null;
  var rows = [];
  rows.push(tr('付费客户数', APD._fix(paying, 1) + ' 家'));
  rows.push(tr('总席位数', APD._fix(seats, 1) + ' 个'));
  rows.push(tr('月收入', APD._w(revenue, 0) + ' 元'));
  rows.push(tr('月变动成本', APD._w(varCost, 0) + ' 元'));
  rows.push(tr('月边际贡献', APD._w(gross, 0) + ' 元', gross > 0 ? 'ok' : 'bad'));
  rows.push(tr('毛利率', APD._fix(margin * 100, 1) + ' %', margin >= 0.6 ? 'ok' : 'mid'));
  if (be === null) rows.push(tr('盈亏平衡客户数', '无法回本', 'bad', '单客户边际贡献为负'));
  else rows.push(tr('盈亏平衡客户数', be + ' 家', paying >= be ? 'ok' : 'bad', paying >= be ? '已越过' : '还差 ' + APD._fix(be - paying, 0) + ' 家'));
  el.innerHTML = tbl(rows) +
    '<p class="calc-hint">读法:按席位收费的产品,先看「单客户边际贡献」= 席位数 × 单价 − 单客户成本。这个数是正的,才有谈盈亏平衡的意义。<br>要提醒的是:定价不只是算账,还取决于客户感知到的价值。同一个人力,换成「结果定价」可能卖得更贵,但也更难承诺——这就是价值度量那一模块要解决的问题。</p>';
};

/* ===== 模块页 ===== */
APD.views.module = function(id) {
  var mod = APD.modules.find(function(m) { return m.id === id; });
  if (!mod) { APD.views.home(); return; }
  var P = APD.progress();
  var lessons = APD.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + APD.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + APD.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = APD.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + APD.esc(title) + '</a>';
    else html += '<span class="title">' + APD.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及模型能力、平台功能、设计规范或无障碍标准，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>。请以所用平台官方文档、现行 WCAG 标准、企业口径与现行有效文件为准。本站为通识科普，不构成产品决策、投资测算、无障碍认证或合规依据。</p></div>';
  html += '</div>';
  APD.render(html);
};

/* ===== 术语 ===== */
APD.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>AI 产品设计名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 能力边界 / 人机分工 / 交互范式 / 冷启动 / 对比度 / 北极星指标" oninput="APD.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(APD.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解；与平台官方文档、行业规范中的正式定义可能存在简化差异。涉及具体适用时请查阅原文与专业资料。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  APD.render(html);
};
APD.filterTerms = function(q) {
  var filtered = APD.terms;
  if (q) { q = q.toLowerCase();
    filtered = APD.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || (t.en || '').toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + APD.esc(t.name) + ' <span class="term-en">' + APD.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + APD.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + APD.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
APD.views.myTerms = function() {
  var P = APD.progress(); var collected = [];
  for (var i = 0; i < APD.terms.length; i++) if (P.hasTerm(APD.terms[i].id)) collected.push(APD.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  APD.render(html);
};

/* ===== 搜索 ===== */
APD.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 提示词 / 人机分工 / 采纳率 / 无障碍 / 智能体 / 定价" oninput="APD.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  APD.render(html);
};
APD.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = APD.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + APD.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + APD.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
APD.views.settings = function() {
  var P = APD.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="APD.setTheme(\'dark\')">深色 · 亮粉紫</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="APD.setTheme(\'light\')">浅色 · 洋红紫</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="APD.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="APD.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="APD.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = APD.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/apd-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/apd-progress" value="' + APD.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + APD.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + APD.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + APD.esc(APD.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="APD.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="APD.clearData()">清除数据</button></div>';
  html += '</div>';
  APD.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    APD.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!APD.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    APD.sync.pullNow().then(function () { return APD.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + APD.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    APD.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : APD.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    APD.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
APD.setTheme = function(t) { document.documentElement.dataset.theme = t; APD.progress().setPref('theme', t); APD.views.settings(); };
APD.setFontSize = function(s) { document.documentElement.dataset.fs = s; APD.progress().setPref('fontSize', s); APD.views.settings(); };
APD.exportData = function() {
  var data = APD.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'apd-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
APD.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('apd.progress.v1');
    window.location.reload();
  }
};
