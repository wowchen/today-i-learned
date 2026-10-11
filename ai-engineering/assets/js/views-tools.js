/* 工具视图:七件 AI 应用工程互动工具(Token 成本与调用量 / RAG 检索质量与上下文预算 /
   评测集与指标设计 / 灰度分流与效果显著性 / AI 项目 ROI / 人工替代与效率增益 / 失败模式自诊)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程、采购、投资或合规依据。 */
window.AIPE = window.AIPE || {};
AIPE.views = AIPE.views || {};

AIPE._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
AIPE._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
AIPE._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
AIPE.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">AI 应用工程里那些「说不清就一定会亏」的事,都能算一算:<b>这次调用要花多少钱(Token 怎么计价、缓存省多少)、上下文放得下几条资料(K 条与预算怎么互相挤)、评测集该攒多少条才说得准(样本量与置信区间)、灰度要跑几天才看得出差别(样本量与最小可检测差异)、这个项目到底划不划算(ROI、回收期与净现值)、AI 到底省了多少人(工时与等效人力)、以及现在这套系统最可能栽在哪(六项体检打分)。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的模型与平台定价、实际业务分布、真实团队成本结构、统计建模细节与组织约束。<b>不作为工程方案、采购决策、投资测算或合规依据。</b>实际项目须以厂商正式报价、自身业务数据、财务口径与企业制度为准。</p>';
  html += '</div>';

  // 1. Token 成本与调用量测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>Token 成本与调用量测算器</h3>';
  html += '<p class="lab-desc">AI 应用的边际成本几乎全在 Token 上。填入调用量与单价,看<b>钱主要花在输入还是输出、单次调用几分钱、一个月要多少,以及缓存命中能省下多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>日调用量(次)<input type="number" id="tc-calls" step="100" value="2000" min="0" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>平均输入 Token(个/次)<input type="number" id="tc-in" step="100" value="3000" min="0" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>平均输出 Token(个/次)<input type="number" id="tc-out" step="50" value="600" min="0" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>输入单价(元/百万 Token)<input type="number" id="tc-pin" step="0.5" value="2" min="0" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>输出单价(元/百万 Token)<input type="number" id="tc-pout" step="0.5" value="8" min="0" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>缓存命中率(%)<input type="number" id="tc-hit" step="5" value="30" min="0" max="100" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>缓存读取价 / 输入价(%)<input type="number" id="tc-disc" step="5" value="25" min="1" max="100" oninput="AIPE.calcTokenCost()"></label>';
  html += '<label>每月天数(天)<input type="number" id="tc-days" step="1" value="30" min="1" max="31" oninput="AIPE.calcTokenCost()"></label>';
  html += '</div>';
  html += '<div id="tc-result" class="calc-result"></div>';
  html += '</div>';

  // 2. RAG 检索质量与上下文预算测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>RAG 检索质量与上下文预算测算器</h3>';
  html += '<p class="lab-desc">上下文窗口是有限的,「塞几条资料」和「留多少给输出」是同一笔预算里的取舍。填入窗口与片段参数,看<b>检索预算够放几条、重排之后省了多少、以及有依据作答的比例大概有多高</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>上下文窗口(Token)<input type="number" id="rb-window" step="1000" value="128000" min="1000" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>系统指令预留(Token)<input type="number" id="rb-sys" step="200" value="2000" min="0" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>输出预留(Token)<input type="number" id="rb-out" step="200" value="2000" min="0" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>单条片段(Token)<input type="number" id="rb-chunk" step="50" value="400" min="1" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>召回条数 K(条)<input type="number" id="rb-k" step="1" value="20" min="1" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>重排后保留(条)<input type="number" id="rb-top" step="1" value="5" min="1" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>召回命中率(%)<input type="number" id="rb-hit" step="5" value="85" min="0" max="100" oninput="AIPE.calcRagBudget()"></label>';
  html += '<label>未命中时兜底正确率(%)<input type="number" id="rb-miss" step="5" value="40" min="0" max="100" oninput="AIPE.calcRagBudget()"></label>';
  html += '</div>';
  html += '<div id="rb-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 评测集与指标设计器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>评测集与指标设计器</h3>';
  html += '<p class="lab-desc">「我们准确率 85%」这句话到底有多可信?填入样本数与期望水平,看<b>要多少条样本才能把误差压到可接受范围、现在这套评测集还差多少条、以及按场景类别该各配多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>评测样本总数(条)<input type="number" id="ed-n" step="50" value="300" min="1" oninput="AIPE.calcEvalDesign()"></label>';
  html += '<label>期望正确率估计(%)<input type="number" id="ed-p" step="5" value="85" min="1" max="99" oninput="AIPE.calcEvalDesign()"></label>';
  html += '<label>允许误差(± 百分点)<input type="number" id="ed-e" step="0.5" value="3" min="0.1" max="20" oninput="AIPE.calcEvalDesign()"></label>';
  html += '<label>置信水平对应 z 值<input type="number" id="ed-z" step="0.001" value="1.96" min="1" max="3" oninput="AIPE.calcEvalDesign()"></label>';
  html += '<label>需覆盖的场景类别数(类)<input type="number" id="ed-cls" step="1" value="6" min="1" oninput="AIPE.calcEvalDesign()"></label>';
  html += '<label>每类最少样本(条)<input type="number" id="ed-min" step="5" value="20" min="1" oninput="AIPE.calcEvalDesign()"></label>';
  html += '</div>';
  html += '<div id="ed-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 灰度分流与效果显著性估算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>灰度分流与效果显著性估算器</h3>';
  html += '<p class="lab-desc">灰度放一周就想看出提升?多半看不出来。填入流量与期望提升,看<b>每组至少要多少样本、以现在这点流量还要跑几天、以及这么大样本量下最小能测出多大的差别</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>日均流量(次/天)<input type="number" id="rt-traffic" step="1000" value="20000" min="1" oninput="AIPE.calcRolloutTest()"></label>';
  html += '<label>灰度比例(%)<input type="number" id="rt-share" step="5" value="10" min="1" max="90" oninput="AIPE.calcRolloutTest()"></label>';
  html += '<label>计划实验天数(天)<input type="number" id="rt-days" step="1" value="14" min="1" oninput="AIPE.calcRolloutTest()"></label>';
  html += '<label>对照组当前转化率(%)<input type="number" id="rt-base" step="1" value="20" min="0.1" max="99" oninput="AIPE.calcRolloutTest()"></label>';
  html += '<label>期望相对提升(%)<input type="number" id="rt-lift" step="1" value="10" min="0.1" oninput="AIPE.calcRolloutTest()"></label>';
  html += '<label>显著性 z 值(95% 双尾 ≈ 1.96)<input type="number" id="rt-z1" step="0.01" value="1.96" min="0.5" max="4" oninput="AIPE.calcRolloutTest()"></label>';
  html += '<label>功效 z 值(80% ≈ 0.84)<input type="number" id="rt-z2" step="0.01" value="0.84" min="0" max="4" oninput="AIPE.calcRolloutTest()"></label>';
  html += '</div>';
  html += '<div id="rt-result" class="calc-result"></div>';
  html += '</div>';

  // 5. AI 项目 ROI 测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊟</span>AI 项目 ROI 测算器</h3>';
  html += '<p class="lab-desc">立项时最常见的翻车是「只算建设费、不算持续费」。填入投入与收益,看<b>年净收益、累计回报率、多久回本,以及把钱折到今天之后到底值多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>一次性建设投入(万元)<input type="number" id="roi-build" step="5" value="80" min="0" oninput="AIPE.calcRoi()"></label>';
  html += '<label>年平台与调用费(万元)<input type="number" id="roi-run" step="5" value="30" min="0" oninput="AIPE.calcRoi()"></label>';
  html += '<label>年运维人力(万元)<input type="number" id="roi-ops" step="5" value="15" min="0" oninput="AIPE.calcRoi()"></label>';
  html += '<label>年节省工时(小时)<input type="number" id="roi-hours" step="1000" value="20000" min="0" oninput="AIPE.calcRoi()"></label>';
  html += '<label>人力综合成本(元/小时)<input type="number" id="roi-rate" step="5" value="80" min="0" oninput="AIPE.calcRoi()"></label>';
  html += '<label>年增收 / 降损(万元)<input type="number" id="roi-gain" step="5" value="20" min="0" oninput="AIPE.calcRoi()"></label>';
  html += '<label>计算年限(年)<input type="number" id="roi-years" step="1" value="3" min="1" max="10" oninput="AIPE.calcRoi()"></label>';
  html += '<label>折现率(%)<input type="number" id="roi-disc" step="1" value="8" min="0" max="30" oninput="AIPE.calcRoi()"></label>';
  html += '</div>';
  html += '<div id="roi-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 人工替代与效率增益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌁</span>人工替代与效率增益测算器</h3>';
  html += '<p class="lab-desc">「AI 一秒干完」不等于「少花一秒的钱」——审核与返工都要人。填入耗时与通过率,看<b>算上审核与返工之后,到底省下多少工时、折算成多少个人力</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年任务量(件)<input type="number" id="ef-vol" step="1000" value="50000" min="0" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>人工单件耗时(分钟)<input type="number" id="ef-man" step="1" value="8" min="0" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>AI 单件耗时(分钟)<input type="number" id="ef-ai" step="0.5" value="0.5" min="0" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>人工审核比例(%)<input type="number" id="ef-rev" step="5" value="30" min="0" max="100" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>审核单件耗时(分钟)<input type="number" id="ef-revmin" step="0.5" value="1.5" min="0" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>AI 一次通过率(%)<input type="number" id="ef-pass" step="5" value="85" min="0" max="100" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>人工小时成本(元/小时)<input type="number" id="ef-cost" step="5" value="80" min="0" oninput="AIPE.calcEfficiency()"></label>';
  html += '<label>年人均工时(小时)<input type="number" id="ef-fte" step="100" value="2000" min="1" oninput="AIPE.calcEfficiency()"></label>';
  html += '</div>';
  html += '<div id="ef-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 失败模式自诊器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◇</span>失败模式自诊器</h3>';
  html += '<p class="lab-desc">上线之后效果不对,先别急着换模型。按六个维度给自己这套系统打个分,看<b>总分落在什么档位、最薄弱的一环是哪一项、以及对应的下一步动作是什么</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>线上输入与演示阶段相比<select id="fd-input" onchange="AIPE.calcFailureDiag()"><option value="0">差别很大,没见过</option><option value="1" selected>部分相似</option><option value="2">高度相似</option></select></label>';
  html += '<label>固定评测集<select id="fd-eval" onchange="AIPE.calcFailureDiag()"><option value="0">没有</option><option value="1" selected>有,但只覆盖理想样本</option><option value="2">有,且覆盖长尾与异常</option></select></label>';
  html += '<label>输出校验与拒答护栏<select id="fd-guard" onchange="AIPE.calcFailureDiag()"><option value="0">没有</option><option value="1" selected>只做格式校验</option><option value="2">有校验 + 不确定时拒答</option></select></label>';
  html += '<label>人工审核兜底<select id="fd-human" onchange="AIPE.calcFailureDiag()"><option value="0">没人管,直接给用户</option><option value="1" selected>定期抽检</option><option value="2">关键环节必须人工确认</option></select></label>';
  html += '<label>线上监控与漂移跟踪<select id="fd-mon" onchange="AIPE.calcFailureDiag()"><option value="0">没有</option><option value="1" selected>只有报错日志</option><option value="2">有效果指标与漂移监控</option></select></label>';
  html += '<label>上线方式与可回滚性<select id="fd-roll" onchange="AIPE.calcFailureDiag()"><option value="0">直接全量,回不去</option><option value="1" selected>直接全量,但能回滚</option><option value="2">灰度逐步放量</option></select></label>';
  html += '</div>';
  html += '<div id="fd-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取常见量级概数,单价与比率为示例值。<b>实际项目必须依据自身业务数据、厂商正式报价、财务口径与企业制度单独核算</b>,本工具结果不作为工程方案、采购决策、投资测算或合规依据。</p>';
  html += '</div>';
  AIPE.render(html);
  AIPE.calcTokenCost(); AIPE.calcRagBudget(); AIPE.calcEvalDesign(); AIPE.calcRolloutTest();
  AIPE.calcRoi(); AIPE.calcEfficiency(); AIPE.calcFailureDiag();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }

/* ---- 1. Token 成本与调用量 ---- */
AIPE.calcTokenCost = function() {
  var el = document.getElementById('tc-result');
  if (!el) return;
  var calls = AIPE._num('tc-calls'), tin = AIPE._num('tc-in'), tout = AIPE._num('tc-out');
  var pin = AIPE._num('tc-pin'), pout = AIPE._num('tc-pout');
  if (calls === null || tin === null || tout === null || pin === null || pout === null) {
    el.innerHTML = warn('请把调用量与四类单价填写完整。'); return;
  }
  if (calls < 0 || tin < 0 || tout < 0 || pin < 0 || pout < 0) {
    el.innerHTML = warn('数值不能为负。'); return;
  }
  var hit = AIPE._num('tc-hit'); hit = hit === null ? 0 : Math.min(Math.max(hit, 0), 100);
  var disc = AIPE._num('tc-disc'); disc = disc === null ? 100 : Math.min(Math.max(disc, 1), 100);
  var days = AIPE._num('tc-days'); days = days === null ? 30 : days;

  var inM = calls * tin / 1e6;                       // 日均输入(百万 Token)
  var outM = calls * tout / 1e6;                     // 日均输出(百万 Token)
  var inNoCache = inM * pin;                         // 缓存前输入成本(元/日)
  var inEff = (inM * (1 - hit / 100) + inM * (hit / 100) * (disc / 100)) * pin;
  var outCost = outM * pout;
  var dayCost = inEff + outCost;
  var dayCostNoCache = inNoCache + outCost;
  var cacheSave = dayCostNoCache - dayCost;
  var perCall = calls > 0 ? dayCost / calls : 0;
  var inShare = dayCost > 0 ? inEff / dayCost * 100 : 0;

  var out = '<table class="cr-table">';
  out += tr('日均输入 Token', AIPE._w(calls * tin, 0) + ' 个', '', AIPE._w(calls, 0) + ' 次 × ' + AIPE._w(tin, 0) + ' 个');
  out += tr('日均输出 Token', AIPE._w(calls * tout, 0) + ' 个', '', AIPE._w(calls, 0) + ' 次 × ' + AIPE._w(tout, 0) + ' 个');
  out += tr('输入成本(元/日)', AIPE._fix(inEff, 2) + ' 元', '', AIPE._fix(inM, 3) + ' 百万 Token × ' + AIPE._fix(pin, 2) + ' 元' + (hit > 0 ? ',已按缓存命中折算' : ''));
  out += tr('输出成本(元/日)', AIPE._fix(outCost, 2) + ' 元', '', AIPE._fix(outM, 3) + ' 百万 Token × ' + AIPE._fix(pout, 2) + ' 元');
  out += tr('日成本合计', AIPE._fix(dayCost, 2) + ' 元', '', '输入 + 输出');
  out += tr('单次调用成本', AIPE._fix(perCall, 5) + ' 元/次', '', '日成本 ÷ 日调用量');
  out += tr('月成本', AIPE._w(dayCost * days, 2) + ' 元', '', '日成本 × ' + AIPE._w(days, 0) + ' 天');
  out += tr('年成本', AIPE._w(dayCost * 365, 2) + ' 元', '', '日成本 × 365 天');
  out += tr('输入占成本比', AIPE._fix(inShare, 1) + ' %', '', outCost > inEff ? '输出单价高 / 输出量大,输出才是大头' : '输入量大,压缩上下文更有效');
  out += tr('缓存节省(元/月)', AIPE._w(cacheSave * days, 2) + ' 元', cacheSave > 0 ? 'cr-good' : '', '命中率 ' + AIPE._fix(hit, 0) + ' % × 读取价 ' + AIPE._fix(disc, 0) + ' %');
  out += '</table>';
  out += '<p class="calc-note">Token 账要分两块看:<b>输入是「送进去读的」,输出是「写出来的」,两者单价常常差好几倍</b>。所以只盯调用次数没用——把冗长的系统提示与检索资料裁薄(降输入),或把长回答改成结构化短输出(降输出),往往比换更便宜的模型见效更快。缓存是把重复出现的前缀存下来,后续命中部分按更低价计费,适合系统提示长、模板固定的场景。<b>算成本要算到「单任务成本」而不是「单次调用成本」</b>:一个业务动作可能触发好几次调用。以上为教学口径,实际单价与缓存规则以厂商正式计费说明为准。</p>';
  el.innerHTML = out;
};

/* ---- 2. RAG 检索质量与上下文预算 ---- */
AIPE.calcRagBudget = function() {
  var el = document.getElementById('rb-result');
  if (!el) return;
  var win = AIPE._num('rb-window'), sys = AIPE._num('rb-sys'), outT = AIPE._num('rb-out');
  var chunk = AIPE._num('rb-chunk'), k = AIPE._num('rb-k'), top = AIPE._num('rb-top');
  if (win === null || sys === null || outT === null || chunk === null || k === null || top === null) {
    el.innerHTML = warn('请把窗口、预留与片段参数填写完整。'); return;
  }
  if (win <= 0 || sys < 0 || outT < 0 || chunk <= 0 || k < 1 || top < 1) {
    el.innerHTML = warn('窗口与片段大小须为正数,预留不能为负。'); return;
  }
  var hit = AIPE._num('rb-hit'); hit = hit === null ? 0 : Math.min(Math.max(hit, 0), 100);
  var miss = AIPE._num('rb-miss'); miss = miss === null ? 0 : Math.min(Math.max(miss, 0), 100);

  var budget = win - sys - outT;                    // 可用于检索的预算
  var kCost = k * chunk;                            // K 条占用
  var fit = chunk > 0 ? Math.floor(budget / chunk) : 0;   // 预算内最多能放几条
  var topCost = Math.min(top, fit) * chunk;         // 重排后实际占用
  var usedTop = sys + outT + topCost;
  var usedK = sys + outT + Math.min(k, fit) * chunk;
  var saveTok = Math.min(k, fit) * chunk - topCost;
  var savePct = Math.min(k, fit) * chunk > 0 ? saveTok / (Math.min(k, fit) * chunk) * 100 : 0;
  var trust = hit + (100 - hit) * miss / 100;       // 有依据作答的综合比例

  var out = '<table class="cr-table">';
  out += tr('检索可用预算', AIPE._w(budget, 0) + ' 个 Token', budget <= 0 ? 'cr-bad' : '', '窗口 ' + AIPE._w(win, 0) + ' − 系统 ' + AIPE._w(sys, 0) + ' − 输出 ' + AIPE._w(outT, 0));
  out += tr('单条片段占窗口比', AIPE._fix(chunk / win * 100, 2) + ' %', '', AIPE._w(chunk, 0) + ' ÷ ' + AIPE._w(win, 0));
  out += tr('召回 K 条占用', AIPE._w(kCost, 0) + ' 个 Token', kCost > budget ? 'cr-bad' : '', AIPE._fix(k, 0) + ' 条 × ' + AIPE._w(chunk, 0));
  out += tr('预算内最多能放', AIPE._w(fit, 0) + ' 条', fit < k ? 'cr-bad' : 'cr-good', '向下取整(预算 ÷ 单条片段)');
  out += tr('不重排时上下文占用', AIPE._fix(usedK / win * 100, 1) + ' %', usedK / win > 0.8 ? 'cr-bad' : '', AIPE._w(usedK, 0) + ' ÷ ' + AIPE._w(win, 0));
  out += tr('重排后保留', AIPE._w(Math.min(top, fit), 0) + ' 条', '', '按相关性重新排序后只留最相关的几条');
  out += tr('重排后上下文占用', AIPE._fix(usedTop / win * 100, 1) + ' %', usedTop / win > 0.8 ? 'cr-bad' : 'cr-good', AIPE._w(usedTop, 0) + ' ÷ ' + AIPE._w(win, 0));
  out += tr('重排省下的 Token', AIPE._w(saveTok, 0) + ' 个', saveTok > 0 ? 'cr-good' : '', '相对不重排,省 ' + AIPE._fix(savePct, 1) + ' %');
  out += tr('召回命中率', AIPE._fix(hit, 0) + ' %', hit < 80 ? 'cr-bad' : 'cr-good', '相关片段能进入候选的比例,由切块与检索决定');
  out += tr('综合可信作答率', AIPE._fix(trust, 1) + ' %', trust < 85 ? 'cr-bad' : 'cr-good', '命中时 ' + AIPE._fix(hit, 0) + ' %,未命中时靠模型记忆仍有 ' + AIPE._fix(miss, 0) + ' %');
  out += '</table>';
  if (kCost > budget) {
    out += warn('召回 ' + AIPE._fix(k, 0) + ' 条需要 ' + AIPE._w(kCost, 0) + ' 个 Token,已超出可用预算 ' + AIPE._w(budget, 0) + ' 个 —— 实际只会装入 ' + AIPE._w(fit, 0) + ' 条。要么调小片段、要么降 K、要么换更大窗口。');
  }
  if (usedTop / win > 0.8) {
    out += warn('重排后上下文占用已超 80%,留给多轮对话与更大输出的余量很薄,继续加资料会把输出挤到截断。');
  }
  if (hit < 80) {
    out += warn('召回命中率低于 80%,说明问题多半出在「找不到」而不是「写不好」:优先检查切块粒度、检索方式与重排策略,而不是换更大的模型。');
  }
  out += '<p class="calc-note">上下文窗口是一块固定大小的桌面,<b>系统指令、检索资料、历史对话、输出全都摊在这张桌上</b>。RAG 的收益不在「塞得多」,而在「塞得准」:先粗召回一批(K 条),再重排挑出最相关的几条(top 条),用更少的 Token 换来更高的相关度 —— 这就是重排省下 Token 的意义。判断问题出在哪一层,看两个数:<b>召回命中率低,是检索的锅;命中率高但回答还是错,才是生成的锅</b>。以上为教学口径,实际窗口大小、计费与检索效果以所用平台与自有数据实测为准。</p>';
  el.innerHTML = out;
};

/* ---- 3. 评测集与指标设计 ---- */
AIPE.calcEvalDesign = function() {
  var el = document.getElementById('ed-result');
  if (!el) return;
  var n = AIPE._num('ed-n'), p = AIPE._num('ed-p'), e = AIPE._num('ed-e');
  var z = AIPE._num('ed-z'), cls = AIPE._num('ed-cls'), min = AIPE._num('ed-min');
  if (n === null || p === null || e === null || z === null || cls === null || min === null) {
    el.innerHTML = warn('请把样本数、正确率、误差与置信水平填写完整。'); return;
  }
  if (n <= 0 || p <= 0 || p >= 100 || e <= 0 || z <= 0 || cls <= 0 || min <= 0) {
    el.innerHTML = warn('样本数、类别数、每类最少样本须为正,正确率须在 0 ~ 100 之间,误差须大于 0。'); return;
  }
  var pp = p / 100, err = e / 100;
  var need = Math.ceil(z * z * pp * (1 - pp) / (err * err));     // 二项分布所需最小样本量
  var gap = need - n;
  var ci = z * Math.sqrt(pp * (1 - pp) / n) * 100;               // 当前样本下的 ±半宽(百分点)
  var perCls = Math.ceil(n / cls);
  var clsOk = perCls >= min;
  var needByCls = cls * min;
  var target = Math.max(need, needByCls);

  var out = '<table class="cr-table">';
  out += tr('目标正确率', AIPE._fix(p, 1) + ' %', '', '用于估算样本量的先验水平');
  out += tr('需要的样本量', AIPE._w(need, 0) + ' 条', '', 'n = z² × p(1−p) ÷ e²');
  out += tr('现有样本量', AIPE._w(n, 0) + ' 条', n >= need ? 'cr-good' : 'cr-bad', '当前评测集规模');
  out += tr('缺口', (gap > 0 ? AIPE._w(gap, 0) + ' 条' : '已达标'), gap > 0 ? 'cr-bad' : 'cr-good', gap > 0 ? '还差这么多条才能把误差压到 ±' + AIPE._fix(e, 1) + ' 百分点' : '样本量足以支撑当前误差要求');
  out += tr('当前误差半宽', '± ' + AIPE._fix(ci, 2) + ' 百分点', ci > e ? 'cr-bad' : 'cr-good', 'n = ' + AIPE._w(n, 0) + '、p = ' + AIPE._fix(p, 1) + ' % 时的 95% 置信区间半宽');
  out += tr('按类别均分', AIPE._w(perCls, 0) + ' 条/类', clsOk ? 'cr-good' : 'cr-bad', AIPE._w(n, 0) + ' ÷ ' + AIPE._fix(cls, 0) + ' 类');
  out += tr('场景覆盖要求', AIPE._w(needByCls, 0) + ' 条', '', AIPE._fix(cls, 0) + ' 类 × ' + AIPE._fix(min, 0) + ' 条/类');
  out += tr('建议目标规模', AIPE._w(target, 0) + ' 条', '', '取「统计样本量」与「场景覆盖要求」中的较大者');
  out += '</table>';
  if (gap > 0) {
    out += warn('现有 ' + AIPE._w(n, 0) + ' 条样本下,一次评测的误差约 ±' + AIPE._fix(ci, 2) + ' 百分点。这意味着<b>两次评测分数差 2 ~ 3 分完全可能是抽样波动</b>,不足以判断改动有没有效。补到 ' + AIPE._w(need, 0) + ' 条以上再谈优化比较。');
  }
  if (!clsOk) {
    out += warn('按类别均分只有 ' + AIPE._w(perCls, 0) + ' 条/类,低于每类最少 ' + AIPE._fix(min, 0) + ' 条的要求。总体样本量够,不代表每一类都够 —— <b>薄弱类别被平均分掩盖,是评测最常见的假绿灯</b>。');
  }
  out += '<p class="calc-note">评测集的第一原则是<b>先够用、再看分数</b>。样本量越小,分数波动越大:几百条样本上「提升了 3 个百分点」很可能只是抽样噪声。所以上线前的门槛不能只写「准确率 ≥ 85%」,还要写清<b>在多少条样本上、覆盖哪些类别、允许的误差是多少</b>。另外别忘了两条:类别要拆开看(总体分掩盖薄弱类),评测集要锁定版本(改题就等于改分)。以上为教学口径,实际样本量估算还须考虑分层抽样、配对设计与多重比较校正,以专业统计口径为准。</p>';
  el.innerHTML = out;
};

/* ---- 4. 灰度分流与效果显著性 ---- */
AIPE.calcRolloutTest = function() {
  var el = document.getElementById('rt-result');
  if (!el) return;
  var traffic = AIPE._num('rt-traffic'), share = AIPE._num('rt-share'), days = AIPE._num('rt-days');
  var base = AIPE._num('rt-base'), lift = AIPE._num('rt-lift'), z1 = AIPE._num('rt-z1'), z2 = AIPE._num('rt-z2');
  if (traffic === null || share === null || days === null || base === null || lift === null || z1 === null || z2 === null) {
    el.innerHTML = warn('请把流量、比例、天数与两组 z 值填写完整。'); return;
  }
  if (traffic <= 0 || share <= 0 || share >= 100 || days < 1 || base <= 0 || base >= 100 || lift <= 0 || z1 <= 0 || z2 < 0) {
    el.innerHTML = warn('流量、比例、天数、基准率与提升须为正;灰度比例须在 0 ~ 100 之间。'); return;
  }
  var p1 = base / 100, p2 = p1 * (1 + lift / 100);
  var d = p2 - p1;
  var pbar = (p1 + p2) / 2;
  var needPerGroup = Math.ceil((z1 + z2) * (z1 + z2) * 2 * pbar * (1 - pbar) / (d * d));  // 每组所需样本
  var dayExp = traffic * share / 100;                       // 实验组日流量
  var dayCtl = traffic - dayExp;                            // 对照组日流量
  var accumExp = dayExp * days;
  var accumCtl = dayCtl * days;
  var haveMin = Math.min(accumExp, accumCtl);
  var ok = haveMin >= needPerGroup;
  var extraDays = ok ? 0 : Math.ceil((needPerGroup - accumExp) / dayExp);
  var mdes = haveMin > 0 ? Math.sqrt((z1 + z2) * (z1 + z2) * 2 * pbar * (1 - pbar) / haveMin) * 100 : 0;

  var out = '<table class="cr-table">';
  out += tr('实验组日流量', AIPE._w(dayExp, 0) + ' 次', '', AIPE._w(traffic, 0) + ' × ' + AIPE._fix(share, 0) + ' %');
  out += tr('对照组日流量', AIPE._w(dayCtl, 0) + ' 次', '', '总流量 − 实验组');
  out += tr('期望转化率', AIPE._fix(p2 * 100, 2) + ' %', '', '基准 ' + AIPE._fix(base, 2) + ' % × (1 + ' + AIPE._fix(lift, 1) + ' %),绝对差异 ' + AIPE._fix(d * 100, 2) + ' 百分点');
  out += tr('每组所需样本', AIPE._w(needPerGroup, 0) + ' 次/组', '', '两比例检验的样本量公式,含显著性与功效');
  out += tr('已累积样本', AIPE._w(Math.min(accumExp, accumCtl), 0) + ' 次/组', ok ? 'cr-good' : 'cr-bad', '取两组中较少的一组');
  out += tr('是否够检', ok ? '够了' : '还不够', ok ? 'cr-good' : 'cr-bad', ok ? '样本量足以检出期望的提升' : '还差 ' + AIPE._w(needPerGroup - haveMin, 0) + ' 次/组');
  out += tr('还需天数', ok ? '0 天' : AIPE._w(extraDays, 0) + ' 天', ok ? 'cr-good' : 'cr-bad', ok ? '当前计划天数已满足' : '按当前灰度比例继续跑到样本量达标');
  out += tr('最小可检出差异', '± ' + AIPE._fix(mdes, 2) + ' 百分点', '', '在已累积样本量下,只有大于这个幅度的差异才可能是真的');
  out += '</table>';
  if (!ok) {
    out += warn('以现在这点流量,计划 ' + AIPE._w(days, 0) + ' 天看到的效果差异多半<b>还在噪声里</b>。三个选择:延长实验天数、提高灰度比例、或者干脆接受「只能检出较大提升」并据此设定预期。');
  } else if (mdes > d * 100) {
    out += warn('样本量刚够门槛,但当前能检出的最小差异(±' + AIPE._fix(mdes, 2) + ' 百分点)已经大于期望提升(' + AIPE._fix(d * 100, 2) + ' 百分点) —— 说明这次实验很难给出确定结论,建议继续累积样本。');
  }
  out += '<p class="calc-note">灰度最容易犯的错是<b>「跑两天、看着好、直接全量」</b>。效果差异能不能被相信,取决于三件事:样本量够不够、差异幅度是否超过随机波动、以及指标本身稳不稳。样本量需求大致与该比率的方差成正比、与<b>提升幅度的平方成反比</b> —— 想检出「10% 提升」需要的样本,远多于检出「50% 提升」。所以小流量业务要么拉长时间,要么把实验设计成能检测更大差异,要么改用更敏感的指标。以上为教学口径,实际实验设计还须考虑分流均衡、多重比较、序贯检验与季节性,以专业统计口径为准。</p>';
  el.innerHTML = out;
};

/* ---- 5. AI 项目 ROI ---- */
AIPE.calcRoi = function() {
  var el = document.getElementById('roi-result');
  if (!el) return;
  var build = AIPE._num('roi-build'), run = AIPE._num('roi-run'), ops = AIPE._num('roi-ops');
  var hours = AIPE._num('roi-hours'), rate = AIPE._num('roi-rate'), gain = AIPE._num('roi-gain');
  var years = AIPE._num('roi-years'), disc = AIPE._num('roi-disc');
  if (build === null || run === null || ops === null || hours === null || rate === null || gain === null || years === null || disc === null) {
    el.innerHTML = warn('请把投入、收益与年限填写完整。'); return;
  }
  if (build < 0 || run < 0 || ops < 0 || hours < 0 || rate < 0 || gain < 0 || years < 1 || disc < 0) {
    el.innerHTML = warn('数值不能为负,计算年限至少 1 年。'); return;
  }
  var labor = hours * rate / 10000;                 // 年节省人力价值(万元)
  var benefit = labor + gain;                       // 年收益(万元)
  var cost = run + ops;                             // 年成本(万元)
  var net = benefit - cost;                         // 年净收益(万元)
  var totalIn = build + cost * years;
  var totalNet = net * years - build;
  var roi = totalIn > 0 ? totalNet / totalIn * 100 : 0;
  var payback = net > 0 ? build / net : Infinity;
  var r = disc / 100;
  var npv = -build;
  for (var t = 1; t <= years; t++) npv += net / Math.pow(1 + r, t);
  var pbCls = net > 0 && payback <= years ? 'cr-good' : 'cr-bad';

  var out = '<table class="cr-table">';
  out += tr('年节省人力价值', AIPE._w(labor, 2) + ' 万元', '', AIPE._w(hours, 0) + ' 小时 × ' + AIPE._fix(rate, 0) + ' 元/小时');
  out += tr('年收益合计', AIPE._w(benefit, 2) + ' 万元', '', '人力价值 ' + AIPE._w(labor, 2) + ' + 增收降损 ' + AIPE._w(gain, 2));
  out += tr('年成本合计', AIPE._w(cost, 2) + ' 万元', '', '平台调用 ' + AIPE._w(run, 2) + ' + 运维人力 ' + AIPE._w(ops, 2));
  out += tr('年净收益', AIPE._w(net, 2) + ' 万元', net > 0 ? 'cr-good' : 'cr-bad', '年收益 − 年成本');
  out += tr('累计净收益', AIPE._w(totalNet, 2) + ' 万元', totalNet > 0 ? 'cr-good' : 'cr-bad', years + ' 年净收益累计 − 一次性建设投入');
  out += tr('投资回报率', AIPE._fix(roi, 1) + ' %', roi > 0 ? 'cr-good' : 'cr-bad', '累计净收益 ÷ 全部投入');
  out += tr('回收期', net > 0 ? AIPE._fix(payback, 2) + ' 年' : '不可回收', pbCls, net > 0 ? '建设投入 ÷ 年净收益（约 ' + AIPE._fix(payback * 12, 1) + ' 个月）' : '年净收益为负,投入无法靠收益收回');
  out += tr('净现值 NPV', AIPE._w(npv, 2) + ' 万元', npv > 0 ? 'cr-good' : 'cr-bad', '按折现率 ' + AIPE._fix(disc, 1) + ' % 把未来 ' + AIPE._w(years, 0) + ' 年现金流折到今天');
  out += tr('年均等值收益', AIPE._w(net, 2) + ' 万元/年', '', '用于与其他项目横向比较');
  out += '</table>';
  if (net <= 0) {
    out += warn('年净收益为负,这个组合在当前参数下不成立。要么压降持续成本(调用与运维),要么把收益口径算实 —— <b>最常见的错误是只算节省的工时,却忘了新增的审核与运维人力</b>。');
  } else if (payback > years) {
    out += warn('回收期 ' + AIPE._fix(payback, 2) + ' 年已超过计算年限 ' + AIPE._w(years, 0) + ' 年,在给定周期内看不到回本,适合拉长年限或分期投入重新评估。');
  }
  out += '<p class="calc-note">AI 项目的账有两条铁律:<b>一是把持续成本算全(调用费 + 运维人力,通常建设费只占小头);二是把收益口径说清(省工时、省人、增收、降错,不能重复计算)</b>。ROI 高不等于该上 —— 还要看回收期是否在企业能接受的窗口内、以及收益能否被验证。另外要特别警惕「节省工时」这一项:省下来的时间如果没有被真正释放去做别的事,它就只是财务报表上的一个数字,不是真实收益。以上为教学口径,实际测算须结合企业财务口径与预算制度。</p>';
  el.innerHTML = out;
};

/* ---- 6. 人工替代与效率增益 ---- */
AIPE.calcEfficiency = function() {
  var el = document.getElementById('ef-result');
  if (!el) return;
  var vol = AIPE._num('ef-vol'), man = AIPE._num('ef-man'), ai = AIPE._num('ef-ai');
  var rev = AIPE._num('ef-rev'), revmin = AIPE._num('ef-revmin'), pass = AIPE._num('ef-pass');
  var cost = AIPE._num('ef-cost'), fte = AIPE._num('ef-fte');
  if (vol === null || man === null || ai === null || rev === null || revmin === null || pass === null || cost === null || fte === null) {
    el.innerHTML = warn('请把任务量、耗时、审核与通过率填写完整。'); return;
  }
  if (vol < 0 || man < 0 || ai < 0 || rev < 0 || revmin < 0 || pass < 0 || cost < 0 || fte <= 0) {
    el.innerHTML = warn('数值不能为负,年人均工时须为正数。'); return;
  }
  var manH = vol * man / 60;                                  // 人工总工时
  var aiH = vol * ai / 60;                                    // AI 处理工时
  var revH = vol * (rev / 100) * revmin / 60;                 // 审核工时
  var reworkH = vol * (1 - Math.min(pass, 100) / 100) * man / 60; // 返工工时(按人工重做一遍)
  var totalH = aiH + revH + reworkH;
  var saveH = manH - totalH;
  var savePct = manH > 0 ? saveH / manH * 100 : 0;
  var saveMoney = saveH * cost / 10000;                       // 万元/年
  var fteSave = saveH / fte;                                  // 等效人力(人)

  var out = '<table class="cr-table">';
  out += tr('原人工总工时', AIPE._w(manH, 0) + ' 小时/年', '', AIPE._w(vol, 0) + ' 件 × ' + AIPE._fix(man, 1) + ' 分钟 ÷ 60');
  out += tr('AI 处理工时', AIPE._w(aiH, 0) + ' 小时/年', 'cr-good', AIPE._w(vol, 0) + ' 件 × ' + AIPE._fix(ai, 1) + ' 分钟 ÷ 60');
  out += tr('人工审核工时', AIPE._w(revH, 0) + ' 小时/年', '', AIPE._fix(rev, 0) + ' % 需审核 × ' + AIPE._fix(revmin, 1) + ' 分钟/件');
  out += tr('返工工时', AIPE._w(reworkH, 0) + ' 小时/年', reworkH > manH * 0.2 ? 'cr-bad' : '', (100 - AIPE._fix(pass, 0)) + ' % 未通过 × 按人工重做');
  out += tr('AI 方案总工时', AIPE._w(totalH, 0) + ' 小时/年', '', 'AI 处理 + 审核 + 返工');
  out += tr('节省工时', AIPE._w(saveH, 0) + ' 小时/年', saveH > 0 ? 'cr-good' : 'cr-bad', '原人工总工时 − AI 方案总工时');
  out += tr('工时节省比例', AIPE._fix(savePct, 1) + ' %', savePct > 0 ? 'cr-good' : 'cr-bad', '节省工时 ÷ 原人工总工时');
  out += tr('年节省成本', AIPE._w(saveMoney, 2) + ' 万元', saveMoney > 0 ? 'cr-good' : 'cr-bad', '节省工时 × ' + AIPE._fix(cost, 0) + ' 元/小时');
  out += tr('等效释放人力', AIPE._fix(fteSave, 2) + ' 人', fteSave > 0 ? 'cr-good' : 'cr-bad', '节省工时 ÷ 年人均 ' + AIPE._w(fte, 0) + ' 小时');
  out += '</table>';
  if (saveH <= 0) {
    out += warn('算上审核与返工之后,总工时反而没有减少。<b>一次通过率低、或审核比例过高时,AI 只是把「干活」换成了「检查活」</b>,效率可能不升反降。');
  } else if (reworkH > manH * 0.2) {
    out += warn('返工工时占到原人工工时的 ' + AIPE._fix(reworkH / manH * 100, 1) + ' %。提升一次通过率对总账的影响,通常比加快单件处理速度更大。');
  }
  if (savePct > 0 && savePct < 30) {
    out += warn('节省比例只有 ' + AIPE._fix(savePct, 1) + ' %,低于多数项目的预期。这类场景更适合定位成「辅助提效」而非「人力替代」。');
  }
  out += '<p class="calc-note">这张表最好用的地方,是它把被忽略的两块成本摆上了台面:<b>审核工时与返工工时</b>。很多方案宣称「效率提升 90%」,那是按「AI 单件耗时」算的;一旦把人工审核与未通过返工计进去,真实节省往往只有一半甚至更少。所以评价一个 AI 场景值不值得做,关键看三个数:<b>一次通过率(决定返工)、审核比例(决定人工兜底强度)、以及单件节省的净工时</b>。另外提醒一句:省下来的工时不会自动变成钱,得有人重新安排这些时间去做更有价值的事。以上为教学口径,实际测算须结合岗位实际工时分布与产能约束。</p>';
  el.innerHTML = out;
};

/* ---- 7. 失败模式自诊 ---- */
AIPE.calcFailureDiag = function() {
  var el = document.getElementById('fd-result');
  if (!el) return;
  var items = [
    { id: 'fd-input', name: '线上输入与演示阶段的相似度', low: '输入没见过', why: '线上输入分布与演示环境不同,效果会从演示水平直接掉下来,这就是演示鸿沟与分布漂移。', act: '先做输入日志盘点:把线上真实输入抽样 100 条与演示样本对照,找出没覆盖的类型,再决定补护栏还是补训练。', term: 'demo-gap' },
    { id: 'fd-eval', name: '固定评测集', low: '没有评测集', why: '没有固定评测集,改动就无从比较,回归无从发现,优化只能靠感觉。', act: '先把线上输入筛出 200 ~ 500 条,打上标准答案做成评测集,按业务类别分层;之后每次改动都重跑同一套。', term: 'eval-set' },
    { id: 'fd-guard', name: '输出校验与拒答护栏', low: '没护栏', why: '缺输出校验,格式错乱、越界内容与编造会直接流到用户面前。', act: '加两层:结构校验(字段与格式)+ 事实校验(是否落在给定资料内);拿不准时宁可拒答并转人工。', term: 'guardrail' },
    { id: 'fd-human', name: '人工审核兜底', low: '没人把关', why: '缺少人工兜底,单次错误会直接变成业务事故,这是失败成本最高的一环。', act: '至少在关键决策环节嵌入人工确认,并把人的修改记录下来,这既是保险也是最好的改进素材。', term: 'human-in-the-loop' },
    { id: 'fd-mon', name: '线上监控与漂移跟踪', low: '没有监控', why: '没有监控,效果会悄悄下滑而无人察觉 —— 等用户投诉时往往已经坏了一两周。', act: '先埋三件事:调用成功率与时延、Token 与成本、以及按业务指标的质量抽检;再对输入分布做定期对比。', term: 'observability' },
    { id: 'fd-roll', name: '上线方式与回滚能力', low: '不可回滚', why: '没有灰度与回滚,一旦出问题只能硬扛,事故影响面被放大。', act: '改成灰度放量 + 特性开关,保证任何一次发布都能在几分钟内退回上一稳定版本。', term: 'canary' }
  ];
  var score = 0, rows = '', worst = null;
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    var v = AIPE._num(it.id); if (v === null) v = 1;
    score += v;
    var cls = v === 0 ? 'cr-bad' : (v === 1 ? '' : 'cr-good');
    var label = v === 0 ? '高风险' : (v === 1 ? '待加强' : '已具备');
    rows += tr(it.name, v + ' / 2 · ' + label, cls, v === 0 ? it.low : '');
    if (worst === null || v < worst.v) worst = { v: v, it: it };
  }
  var max = items.length * 2;
  var pct = Math.round(score / max * 100);
  var band = pct >= 84 ? '生产就绪度较高' : (pct >= 50 ? '能跑但很脆' : '还在演示阶段');
  var bandCls = pct >= 84 ? 'cr-good' : (pct >= 50 ? '' : 'cr-bad');

  var out = '<table class="cr-table">';
  out += tr('体检总分', score + ' / ' + max + ' 分', bandCls, '六项之和,分数越高越接近生产就绪');
  out += tr('整体判断', band + '（' + pct + ' 分）', bandCls, pct >= 84 ? '主要短板已补齐,可进入常态化运营' : (pct >= 50 ? '短期能用,遇到没见过的输入就危险' : '典型的演示级系统,离可用还有距离'));
  out += rows;
  out += '</table>';

  out += '<div class="calc-warn" style="margin-top:10px"><b>最弱的一环:' + worst.it.name + '（' + worst.v + ' / 2）</b><br>' + worst.it.why + '<br><b>下一步:</b>' + worst.it.act + '</div>';

  var weak = [];
  for (var j = 0; j < items.length; j++) if (AIPE._num(items[j].id) === 0) weak.push(items[j].name);
  if (weak.length > 1) {
    out += '<p class="calc-note">另外还有 ' + weak.length + ' 项处于高风险:「' + weak.join('」「') + '」。<b>按「影响面 × 修起来最便宜」排序动手</b>:通常先补评测集与人工兜底,再补监控与灰度。</p>';
  }

  out += '<p class="calc-note">这套体检的依据很朴素:<b>AI 应用出问题,极少是模型不行,绝大多数是工程没跟上</b> —— 输入没摸清、没有评测集、没有护栏、没人兜底、没有监控、没法回滚。六项里任何一项为 0,都足以让一个「演示很惊艳」的系统在真实业务里翻车。建议把这六句当成上线前的检查清单,并且每季度重做一次 —— 因为业务输入一直在变。以上为教学口径,不构成工程方案或验收标准。</p>';
  el.innerHTML = out;
};


/* ===== 模块页 ===== */
AIPE.views.module = function(id) {
  var mod = AIPE.modules.find(function(m) { return m.id === id; });
  if (!mod) { AIPE.views.home(); return; }
  var P = AIPE.progress();
  var lessons = AIPE.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + AIPE.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + AIPE.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = AIPE.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + AIPE.esc(title) + '</a>';
    else html += '<span class="title">' + AIPE.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及模型能力、平台功能、评测方法与合规要求，正文均已标注口径与适用期，<b>内容基线为 2026 年 10 月</b>。各项具体实现与限值请以所用平台官方文档、企业技术规范与现行有效标准为准。本站不构成工程方案、采购决策、投资测算或合规依据。</p></div>';
  html += '</div>';
  AIPE.render(html);
};

/* ===== 术语 ===== */
AIPE.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>AI 应用工程名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 RAG / 灰度 / 评测集 / 护栏 / 上下文预算 / 人在回路" oninput="AIPE.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(AIPE.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与各平台官方文档、行业惯例中的正式定义可能存在简化差异。涉及具体实现时请查阅官方文档与专业资料。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  AIPE.render(html);
};
AIPE.filterTerms = function(q) {
  var filtered = AIPE.terms;
  if (q) { q = q.toLowerCase();
    filtered = AIPE.terms.filter(function(t) {
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
    html += '<div class="term-name">' + AIPE.esc(t.name) + ' <span class="term-en">' + AIPE.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + AIPE.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + AIPE.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
AIPE.views.myTerms = function() {
  var P = AIPE.progress(); var collected = [];
  for (var i = 0; i < AIPE.terms.length; i++) if (P.hasTerm(AIPE.terms[i].id)) collected.push(AIPE.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  AIPE.render(html);
};

/* ===== 搜索 ===== */
AIPE.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 RAG / 灰度 / 评测集 / 幻觉 / 提示词注入 / Token" oninput="AIPE.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  AIPE.render(html);
};
AIPE.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = AIPE.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + AIPE.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + AIPE.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
AIPE.views.settings = function() {
  var P = AIPE.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="AIPE.setTheme(\'dark\')">深色 · 电光青柠</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="AIPE.setTheme(\'light\')">浅色 · 墨蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="AIPE.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="AIPE.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="AIPE.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = AIPE.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/aipe-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/aipe-progress" value="' + AIPE.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + AIPE.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + AIPE.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + AIPE.esc(AIPE.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="AIPE.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="AIPE.clearData()">清除数据</button></div>';
  html += '</div>';
  AIPE.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    AIPE.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!AIPE.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    AIPE.sync.pullNow().then(function () { return AIPE.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + AIPE.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    AIPE.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : AIPE.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    AIPE.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
AIPE.setTheme = function(t) { document.documentElement.dataset.theme = t; AIPE.progress().setPref('theme', t); AIPE.views.settings(); };
AIPE.setFontSize = function(s) { document.documentElement.dataset.fs = s; AIPE.progress().setPref('fontSize', s); AIPE.views.settings(); };
AIPE.exportData = function() {
  var data = AIPE.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'aipe-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
AIPE.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('aipe.progress.v1');
    window.location.reload();
  }
};
