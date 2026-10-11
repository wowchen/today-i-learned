/* 工具视图:七件数据工程与数据治理互动工具(数据量估算 / 数据质量评分 / 血缘影响分析 / 数据分级分类 / 主数据匹配去重 / 指标口径差异 / 数据成本与价值)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成数据平台设计、安全合规、投资测算或审计依据。 */
window.DEG = window.DEG || {};
DEG.views = DEG.views || {};

DEG._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
DEG._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
DEG._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
DEG.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">数据这件事,很多判断可以先算一算:这条数据流<b>一年要占多少存储(原始量与压缩后差多少)、这张表的质量分够不够格上报表、改一个上游字段会牵动多少下游任务、这份数据该按哪一级来管控、主数据去重能省下多少人工、两个系统同一个指标为什么对不上、这套数据平台每月成本与价值是否划算</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的表结构、分区策略、压缩算法、治理规范、安全要求与计价口径。<b>不作为数据平台设计、安全合规、投资测算或审计依据。</b>实际项目须以真实数据探查、平台实测、现行标准与企业制度为准。</p>';
  html += '</div>';

  // 1. 数据量估算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▦</span>数据量估算器</h3>';
  html += '<p class="lab-desc">一条数据流一年要吃掉多少存储?填日增行数与字段规模,看<b>原始日增、压缩后日增、年增量与保留期总存储,以及平均每秒要落多少行</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>日增行数(行)<input type="number" id="dv-rows" step="100000" value="5000000" min="0" oninput="DEG.calcDataVolume()"></label>';
  html += '<label>字段数(个)<input type="number" id="dv-fields" step="1" value="30" min="1" oninput="DEG.calcDataVolume()"></label>';
  html += '<label>单字段平均字节数(B)<input type="number" id="dv-bytes" step="1" value="20" min="1" oninput="DEG.calcDataVolume()"></label>';
  html += '<label>压缩比(倍)<input type="number" id="dv-compress" step="0.5" value="4" min="1" oninput="DEG.calcDataVolume()"></label>';
  html += '<label>保留天数(天)<input type="number" id="dv-days" step="30" value="365" min="1" oninput="DEG.calcDataVolume()"></label>';
  html += '</div>';
  html += '<div id="dv-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 数据质量评分器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◍</span>数据质量评分器</h3>';
  html += '<p class="lab-desc">数据靠不靠得住,要从多个维度一起看。给六个维度打分,看<b>加权质量总分、落在哪个等级、以及哪一块是短板</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>完整性(0~100)<input type="number" id="qs-comp" step="1" value="92" min="0" max="100" oninput="DEG.calcQualityScore()"></label>';
  html += '<label>准确性(0~100)<input type="number" id="qs-acc" step="1" value="88" min="0" max="100" oninput="DEG.calcQualityScore()"></label>';
  html += '<label>一致性(0~100)<input type="number" id="qs-cons" step="1" value="85" min="0" max="100" oninput="DEG.calcQualityScore()"></label>';
  html += '<label>及时性(0~100)<input type="number" id="qs-time" step="1" value="90" min="0" max="100" oninput="DEG.calcQualityScore()"></label>';
  html += '<label>唯一性(0~100)<input type="number" id="qs-uniq" step="1" value="95" min="0" max="100" oninput="DEG.calcQualityScore()"></label>';
  html += '<label>有效性(0~100)<input type="number" id="qs-valid" step="1" value="87" min="0" max="100" oninput="DEG.calcQualityScore()"></label>';
  html += '</div>';
  html += '<div id="qs-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 血缘影响分析器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇶</span>血缘影响分析器</h3>';
  html += '<p class="lab-desc">要改一个上游字段,得先知道会牵动多少下游。填上游表数与传导参数,看<b>受影响的下游表、任务数量与影响等级</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>上游变更涉及表数(张)<input type="number" id="li-tables" step="1" value="3" min="0" oninput="DEG.calcLineageImpact()"></label>';
  html += '<label>平均每表下游表数(张)<input type="number" id="li-down" step="1" value="8" min="0" oninput="DEG.calcLineageImpact()"></label>';
  html += '<label>平均传导层数(层)<input type="number" id="li-layers" step="1" value="2" min="1" oninput="DEG.calcLineageImpact()"></label>';
  html += '<label>每张下游表关联任务数(个)<input type="number" id="li-jobs" step="1" value="4" min="0" oninput="DEG.calcLineageImpact()"></label>';
  html += '<label>涉及关键报表数(张)<input type="number" id="li-report" step="1" value="5" min="0" oninput="DEG.calcLineageImpact()"></label>';
  html += '</div>';
  html += '<div id="li-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 数据分级分类判定器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>数据分级分类判定器</h3>';
  html += '<p class="lab-desc">同一套系统里,不同数据的管控强度不该一样。按敏感属性与规模勾选,看<b>该划到哪一级、以及对应要上的管控措施</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>是否含个人信息<select id="dcl-personal" onchange="DEG.calcDataClass()"><option value="1" selected>含</option><option value="0">不含</option></select></label>';
  html += '<label>是否含财务 / 经营敏感<select id="dcl-finance" onchange="DEG.calcDataClass()"><option value="1" selected>含</option><option value="0">不含</option></select></label>';
  html += '<label>是否受法规强约束<select id="dcl-legal" onchange="DEG.calcDataClass()"><option value="0" selected>否</option><option value="1">是</option></select></label>';
  html += '<label>数据量级(万条)<input type="number" id="dcl-scale" step="10" value="100" min="0" oninput="DEG.calcDataClass()"></label>';
  html += '<label>使用范围<select id="dcl-scope" onchange="DEG.calcDataClass()"><option value="1" selected>仅内部</option><option value="2">合作方共享</option><option value="3">对外公开</option></select></label>';
  html += '</div>';
  html += '<div id="dcl-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 主数据匹配与去重测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊜</span>主数据匹配与去重测算器</h3>';
  html += '<p class="lab-desc">主数据里最难的是「同一个客户被录了三遍」。填记录数与匹配准确率,看<b>能自动识别多少重复、还剩多少要人工复核、合并后省下多少成本</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>记录数(万条)<input type="number" id="mm-records" step="10" value="200" min="0" oninput="DEG.calcMdmMatch()"></label>';
  html += '<label>重复率(%)<input type="number" id="mm-dup" step="1" value="18" min="0" max="100" oninput="DEG.calcMdmMatch()"></label>';
  html += '<label>匹配准确率(%)<input type="number" id="mm-acc" step="1" value="92" min="0" max="100" oninput="DEG.calcMdmMatch()"></label>';
  html += '<label>单条人工核对成本(元)<input type="number" id="mm-cost" step="0.5" value="0.5" min="0" oninput="DEG.calcMdmMatch()"></label>';
  html += '<label>单条复核耗时(分钟)<input type="number" id="mm-min" step="0.5" value="2" min="0" oninput="DEG.calcMdmMatch()"></label>';
  html += '</div>';
  html += '<div id="mm-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 指标口径差异校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≟</span>指标口径差异校核器</h3>';
  html += '<p class="lab-desc">「同一个指标,两个系统数不一样」是数据治理最常见的投诉。填两个来源的值与阈值,看<b>差异率有多大、有没有越过容忍线</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>来源 A 的取值<input type="number" id="mcs-a" step="100" value="12800" min="0" oninput="DEG.calcMetricConsistency()"></label>';
  html += '<label>来源 B 的取值<input type="number" id="mcs-b" step="100" value="11900" min="0" oninput="DEG.calcMetricConsistency()"></label>';
  html += '<label>允许差异阈值(%)<input type="number" id="mcs-tol" step="1" value="5" min="0" max="100" oninput="DEG.calcMetricConsistency()"></label>';
  html += '</div>';
  html += '<div id="mcs-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 数据成本与价值测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>数据成本与价值测算器</h3>';
  html += '<p class="lab-desc">数据平台不是免费的。填存储、计算与人力投入,看<b>每月总成本、单 TB 成本、以及相对价值产出划不划算</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>存储量(TB)<input type="number" id="dco-tb" step="10" value="100" min="0" oninput="DEG.calcDataCost()"></label>';
  html += '<label>存储单价(元 / TB / 月)<input type="number" id="dco-price" step="10" value="200" min="0" oninput="DEG.calcDataCost()"></label>';
  html += '<label>计算费用(元 / 月)<input type="number" id="dco-compute" step="1000" value="15000" min="0" oninput="DEG.calcDataCost()"></label>';
  html += '<label>人力成本(元 / 月)<input type="number" id="dco-people" step="1000" value="60000" min="0" oninput="DEG.calcDataCost()"></label>';
  html += '<label>月价值产出(元 / 月)<input type="number" id="dco-value" step="10000" value="200000" min="0" oninput="DEG.calcDataCost()"></label>';
  html += '</div>';
  html += '<div id="dco-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取行业常见量级概数,单价与比率为示例值。<b>实际项目必须依据真实数据探查、平台实测、现行标准与企业制度单独核算</b>,本工具结果不作为数据平台设计、安全合规、投资测算或审计依据。</p>';
  html += '</div>';
  DEG.render(html);
  DEG.calcDataVolume(); DEG.calcQualityScore(); DEG.calcLineageImpact(); DEG.calcDataClass();
  DEG.calcMdmMatch(); DEG.calcMetricConsistency(); DEG.calcDataCost();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="calc-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 数据量估算 ---- */
DEG.calcDataVolume = function() {
  var rows = DEG._num('dv-rows'), fields = DEG._num('dv-fields'), bytes = DEG._num('dv-bytes');
  var comp = DEG._num('dv-compress'), days = DEG._num('dv-days');
  var el = document.getElementById('dv-result');
  if (rows === null || fields === null || bytes === null || comp === null || days === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  if (comp <= 0) { el.innerHTML = warn('压缩比要大于 0。'); return; }
  var rawGB = rows * fields * bytes / 1e9;
  var compGB = rawGB / comp;
  var yearGB = compGB * 365;
  var keepGB = compGB * days;
  var perSec = rows / 86400;
  var rows_ = [];
  rows_.push(tr('原始日增', DEG._fix(rawGB, 2) + ' GB/日'));
  rows_.push(tr('压缩后日增', DEG._fix(compGB, 2) + ' GB/日', 'ok', '压缩比 ' + DEG._fix(comp, 1) + ' 倍'));
  rows_.push(tr('压缩后年增', DEG._fix(yearGB, 1) + ' GB/年'));
  rows_.push(tr('保留期总存储', DEG._fix(keepGB, 1) + ' GB', '', days + ' 天'));
  rows_.push(tr('平均每秒写入', DEG._fix(perSec, 1) + ' 行/秒', perSec < 1000 ? 'ok' : 'mid'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:原始行数×字段数×字节数是最坏情况的估算,列式存储 + 压缩通常能压掉一大半。真正决定成本的顺序是「先压缩、再分区、后冷热分层」。<br>「每秒多少行」决定了这条流能不能只靠批处理扛:几十行每秒的批量足够,几千行每秒就得认真考虑批流一体与写入优化。</p>';
};

/* ---- 2. 数据质量评分 ---- */
DEG.calcQualityScore = function() {
  var comp = DEG._num('qs-comp'), acc = DEG._num('qs-acc'), cons = DEG._num('qs-cons');
  var time = DEG._num('qs-time'), uniq = DEG._num('qs-uniq'), valid = DEG._num('qs-valid');
  var el = document.getElementById('qs-result');
  if (comp === null || acc === null || cons === null || time === null || uniq === null || valid === null) { el.innerHTML = warn('请把六个维度都填上。'); return; }
  var dims = [
    ['完整性', comp, 0.20], ['准确性', acc, 0.20], ['一致性', cons, 0.15],
    ['及时性', time, 0.15], ['唯一性', uniq, 0.15], ['有效性', valid, 0.15]
  ];
  var score = 0;
  for (var i = 0; i < dims.length; i++) score += dims[i][1] * dims[i][2];
  var grade, cls;
  if (score >= 90) { grade = '优（可支撑核心决策）'; cls = 'ok'; }
  else if (score >= 80) { grade = '良（可用,需继续改进）'; cls = 'mb'; }
  else if (score >= 70) { grade = '中（谨慎使用,先补短板）'; cls = 'mid'; }
  else { grade = '差（不建议直接上核心报表）'; cls = 'bad'; }
  var worst = dims[0];
  for (var j = 1; j < dims.length; j++) if (dims[j][1] < worst[1]) worst = dims[j];
  var rows_ = [];
  rows_ = rows_.concat(dims.map(function(d) { return tr(d[0], DEG._fix(d[1], 1) + ' 分', '', '权重 ' + (d[2] * 100) + '%'); }));
  rows_.push(tr('加权质量总分', DEG._fix(score, 2) + ' 分', cls));
  rows_.push(tr('质量等级', grade, cls));
  rows_.push(tr('短板维度', worst[0] + '（' + DEG._fix(worst[1], 1) + ' 分）', 'bad'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:质量分不是一个绝对真理,而是「这张表能不能承担这个用途」的量化表达。同一张表,做内部参考可以「良」,上对外披露可能必须「优」。<br>补短板比拉平均分更划算:总分 89 里那个 85 的一致性,往往比把 95 再提到 97 更值得动手。</p>';
};

/* ---- 3. 血缘影响分析 ---- */
DEG.calcLineageImpact = function() {
  var tables = DEG._num('li-tables'), down = DEG._num('li-down'), layers = DEG._num('li-layers');
  var jobs = DEG._num('li-jobs'), report = DEG._num('li-report');
  var el = document.getElementById('li-result');
  if (tables === null || down === null || layers === null || jobs === null || report === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var direct = tables * down;
  var trans = direct * layers;
  var jobCnt = (direct + trans) * jobs;
  var level, cls;
  if (trans >= 40 || jobCnt >= 150) { level = '高（须全面回归验证）'; cls = 'bad'; }
  else if (trans >= 12 || jobCnt >= 50) { level = '中（重点任务回归即可）'; cls = 'mid'; }
  else { level = '低（抽查验证即可）'; cls = 'ok'; }
  var rows_ = [];
  rows_.push(tr('直接影响下游表', DEG._w(direct, 0) + ' 张'));
  rows_.push(tr('传导影响表合计', DEG._w(trans, 0) + ' 张', '', '含 ' + layers + ' 层传导'));
  rows_.push(tr('受影响任务数', DEG._w(jobCnt, 0) + ' 个', cls));
  rows_.push(tr('涉及关键报表', DEG._w(report, 0) + ' 张', report > 0 ? 'bad' : 'ok'));
  rows_.push(tr('影响等级', level, cls));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:血缘的价值不在于画得好看,而在于「改动之前先看清范围」。没有血缘时,上游改一个字段,常在一周后由某张报表数字不对才暴露出来。<br>关键报表数量是最该先看的数:哪怕只影响一张,只要它每天给领导看,优先级也高于影响二十张内部临时表。</p>';
};

/* ---- 4. 数据分级分类 ---- */
DEG.calcDataClass = function() {
  var el = document.getElementById('dcl-result');
  var personal = document.getElementById('dcl-personal').value === '1';
  var finance = document.getElementById('dcl-finance').value === '1';
  var legal = document.getElementById('dcl-legal').value === '1';
  var scope = parseFloat(document.getElementById('dcl-scope').value);
  var scale = DEG._num('dcl-scale');
  if (scale === null) { el.innerHTML = warn('请填写数据量级。'); return; }
  var score = (personal ? 35 : 0) + (finance ? 25 : 0) + (legal ? 25 : 0) + Math.min(scale, 100) / 100 * 15;
  // 对外范围提升敏感度
  if (scope >= 3) score += 15; else if (scope >= 2) score += 8;
  var level, ctrl, cls;
  if (score >= 80) { level = '核心级'; ctrl = '加密存储 + 最小必要授权 + 全量审计 + 禁止出境'; cls = 'bad'; }
  else if (score >= 55) { level = '敏感级'; ctrl = '脱敏后使用 + 分级授权 + 访问留痕'; cls = 'mid'; }
  else if (score >= 30) { level = '内部级'; ctrl = '内部可见 + 按岗授权'; cls = 'mb'; }
  else { level = '公开级'; ctrl = '常规管理即可'; cls = 'ok'; }
  var rows_ = [];
  rows_.push(tr('敏感度得分(0~100)', DEG._fix(score, 1) + ' 分', cls));
  rows_.push(tr('个人信息加分', (personal ? '+35' : '0') + ' 分'));
  rows_.push(tr('财务经营加分', (finance ? '+25' : '0') + ' 分'));
  rows_.push(tr('法规约束加分', (legal ? '+25' : '0') + ' 分'));
  rows_.push(tr('使用范围加分', (scope >= 3 ? '+15' : (scope >= 2 ? '+8' : '0')) + ' 分'));
  rows_.push(tr('建议分级', level, cls));
  rows_.push(tr('建议管控', ctrl, cls));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:分级分类是所有数据安全工作的起点——不知道哪份数据敏感,后面的脱敏、授权与审计都无从谈起。<br>要提醒的是,分级不是一次性的标签:数据从内部流转到外部、从汇总变成明细,级别都应当跟着变。</p>';
};

/* ---- 5. 主数据匹配与去重 ---- */
DEG.calcMdmMatch = function() {
  var rec = DEG._num('mm-records'), dup = DEG._num('mm-dup'), acc = DEG._num('mm-acc');
  var cost = DEG._num('mm-cost'), min = DEG._num('mm-min');
  var el = document.getElementById('mm-result');
  if (rec === null || dup === null || acc === null || cost === null || min === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var dupCnt = rec * dup / 100;
  var auto = dupCnt * acc / 100;
  var miss = dupCnt - auto;
  var after = rec - auto;
  var save = auto * cost;
  var reviewH = miss * 10000 * min / 60;
  var rows_ = [];
  rows_.push(tr('重复记录数', DEG._fix(dupCnt, 2) + ' 万条', 'bad'));
  rows_.push(tr('可自动识别', DEG._fix(auto, 2) + ' 万条', 'ok'));
  rows_.push(tr('需人工复核', DEG._fix(miss, 2) + ' 万条', 'mid'));
  rows_.push(tr('合并后记录数', DEG._fix(after, 2) + ' 万条'));
  rows_.push(tr('节省核对成本', DEG._fix(save, 2) + ' 万元', 'ok'));
  rows_.push(tr('人工复核工时', DEG._w(reviewH, 0) + ' 小时', 'mid'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:主数据去重的收益不只在省成本,更在于「一个客户只有一个身份」——否则报表、营销、风控都各算各的。<br>匹配准确率是个双刃剑:调高阈值漏检多、调低阈值误合并多。误合并一旦把两个不同客户合成一个,清理成本远高于漏检。所以宁可保守一点,让人工兜底。</p>';
};

/* ---- 6. 指标口径差异 ---- */
DEG.calcMetricConsistency = function() {
  var a = DEG._num('mcs-a'), b = DEG._num('mcs-b'), tol = DEG._num('mcs-tol');
  var el = document.getElementById('mcs-result');
  if (a === null || b === null || tol === null) { el.innerHTML = warn('请把三项都填上。'); return; }
  var diff = Math.abs(a - b);
  var avg = (a + b) / 2;
  var rate = avg > 0 ? diff / avg * 100 : 0;
  var pass = rate <= tol;
  var rows_ = [];
  rows_.push(tr('来源 A', DEG._w(a, 0)));
  rows_.push(tr('来源 B', DEG._w(b, 0)));
  rows_.push(tr('绝对差异', DEG._w(diff, 0)));
  rows_.push(tr('差异率', DEG._fix(rate, 2) + ' %', pass ? 'ok' : 'bad', '相对两者均值'));
  rows_.push(tr('允许阈值', DEG._fix(tol, 1) + ' %'));
  rows_.push(tr('判定', pass ? '在容忍线内' : '超阈值,须核查口径', pass ? 'ok' : 'bad'));
  var hint = pass
    ? '差异在容忍线内,但仍建议记录原因,避免长期累积成「两个数都对不上」的顽疾。'
    : '超阈值时,优先怀疑三类原因:统计范围不同(是否含某类记录)、时间口径不同(自然日与账期)、计算口径不同(去重规则与取值规则)。先把口径写清楚,再谈谁对谁错。';
  el.innerHTML = tbl(rows_) + '<p class="calc-hint">' + hint + '<br>治理上一个有效的做法:把「这个指标的定义、口径、负责人」集中登记在指标平台,而不是分散在各个报表的脚注里。</p>';
};

/* ---- 7. 数据成本与价值 ---- */
DEG.calcDataCost = function() {
  var tb = DEG._num('dco-tb'), price = DEG._num('dco-price'), compute = DEG._num('dco-compute');
  var people = DEG._num('dco-people'), value = DEG._num('dco-value');
  var el = document.getElementById('dco-result');
  if (tb === null || price === null || compute === null || people === null || value === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var storageCost = tb * price;
  var total = storageCost + compute + people;
  var perTB = tb > 0 ? total / tb : 0;
  var net = value - total;
  var ratio = total > 0 ? value / total : 0;
  var rows_ = [];
  rows_.push(tr('存储成本', DEG._w(storageCost, 0) + ' 元/月', '', '占比 ' + DEG._fix(total > 0 ? storageCost / total * 100 : 0, 1) + '%'));
  rows_.push(tr('计算成本', DEG._w(compute, 0) + ' 元/月'));
  rows_.push(tr('人力成本', DEG._w(people, 0) + ' 元/月', '', '占比 ' + DEG._fix(total > 0 ? people / total * 100 : 0, 1) + '%'));
  rows_.push(tr('月总成本', DEG._w(total, 0) + ' 元/月', 'mid'));
  rows_.push(tr('单 TB 成本', DEG._w(perTB, 0) + ' 元/TB/月'));
  rows_.push(tr('月净收益', DEG._w(net, 0) + ' 元/月', net > 0 ? 'ok' : 'bad'));
  rows_.push(tr('产出 / 投入比', DEG._fix(ratio, 2) + ' 倍', ratio >= 1.5 ? 'ok' : (ratio >= 1 ? 'mid' : 'bad')));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:数据平台成本里最容易被低估的是人力——存储是看得见的账单,人力是看不见的账单。很多平台「存储费不高但养不起」。<br>价值侧要说得清:省了多少人工、避免了多少损失、支撑了多少收入。说不清价值的数据平台,预算一年比一年难批。</p>';
};

/* ===== 模块页 ===== */
DEG.views.module = function(id) {
  var mod = DEG.modules.find(function(m) { return m.id === id; });
  if (!mod) { DEG.views.home(); return; }
  var P = DEG.progress();
  var lessons = DEG.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + DEG.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + DEG.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = DEG.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + DEG.esc(title) + '</a>';
    else html += '<span class="title">' + DEG.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及数据标准、合规口径、行业规范或监管要求，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>。请以国家标准(GB)、行业标准、数据安全法规及本单位数据管理制度的现行版本为准。本站不构成合规、法律或审计意见。</p></div>';
  html += '</div>';
  DEG.render(html);
};

/* ===== 术语 ===== */
DEG.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>数据工程名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 数仓 / 湖仓一体 / 血缘 / 主数据 / 数据质量 / 元数据" oninput="DEG.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(DEG.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与标准文件、厂商文档中的正式定义可能存在简化差异。涉及具体适用时请查阅标准原文与专业文献。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  DEG.render(html);
};
DEG.filterTerms = function(q) {
  var filtered = DEG.terms;
  if (q) { q = q.toLowerCase();
    filtered = DEG.terms.filter(function(t) {
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
    html += '<div class="term-name">' + DEG.esc(t.name) + ' <span class="term-en">' + DEG.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + DEG.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + DEG.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
DEG.views.myTerms = function() {
  var P = DEG.progress(); var collected = [];
  for (var i = 0; i < DEG.terms.length; i++) if (P.hasTerm(DEG.terms[i].id)) collected.push(DEG.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  DEG.render(html);
};

/* ===== 搜索 ===== */
DEG.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 数仓 / 数据湖 / 血缘 / 主数据 / 数据质量 / 元数据" oninput="DEG.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  DEG.render(html);
};
DEG.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = DEG.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + DEG.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + DEG.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
DEG.views.settings = function() {
  var P = DEG.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="DEG.setTheme(\'dark\')">深色 · 靛蓝辉光</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="DEG.setTheme(\'light\')">浅色 · 深靛蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="DEG.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="DEG.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="DEG.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = DEG.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/deg-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/deg-progress" value="' + DEG.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + DEG.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + DEG.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + DEG.esc(DEG.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="DEG.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="DEG.clearData()">清除数据</button></div>';
  html += '</div>';
  DEG.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    DEG.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!DEG.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    DEG.sync.pullNow().then(function () { return DEG.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + DEG.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    DEG.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : DEG.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    DEG.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
DEG.setTheme = function(t) { document.documentElement.dataset.theme = t; DEG.progress().setPref('theme', t); DEG.views.settings(); };
DEG.setFontSize = function(s) { document.documentElement.dataset.fs = s; DEG.progress().setPref('fontSize', s); DEG.views.settings(); };
DEG.exportData = function() {
  var data = DEG.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'deg-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
DEG.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('deg.progress.v1');
    window.location.reload();
  }
};
