/* 工具视图:四个智能体互动工具(循环模拟器 / 提示词体检 / 上下文预算 / 流水线设计器)+ 术语/搜索/设置/模块 */
window.AGT = window.AGT || {};
AGT.views = AGT.views || {};

AGT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
AGT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* ===== 工具总页 ===== */
AGT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">智能体离不开"看懂循环"与"算清账":循环怎么转、提示词合不合格、上下文够不够用、流水线要花多少 token。这四个小工具全部在本地浏览器运行，<b>边学边玩，把工程直觉练成肌肉记忆</b>。</p>';

  // 1. 智能体循环模拟器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">↻</span>智能体循环模拟器</h3>';
  html += '<p class="lab-desc">一个真实任务的完整智能体轨迹：整理会议录音并发纪要。点击"下一步"，看感知—思考—行动—观察怎么一圈圈转，注意它遇到"转写太长"时怎么自己调整计划。</p>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AGT.loopNext()">下一步</button>';
  html += '<button class="calc-btn" onclick="AGT.loopReset()">重置</button></div>';
  html += '<div id="ls-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 提示词体检
  html += '<div class="calc-card">';
  html += '<h3><span class="g">✎</span>提示词体检</h3>';
  html += '<p class="lab-desc">把你的提示词贴进来，按五要素体检：角色、任务、背景、约束、输出格式。五项齐全的提示词，输出质量通常稳一个档次。</p>';
  html += '<textarea id="pc-text" class="term-search" style="width:100%;min-height:110px;line-height:1.6">你是一名资深编辑。请把下面的会议记录整理成纪要。背景：这是项目周会，团队 8 人。要求：保留所有行动项，每条行动项必须有负责人和截止日期；不要臆造内容。输出格式：Markdown，分为"结论 / 行动项 / 风险"三节。</textarea>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AGT.checkPrompt()">开始体检</button></div>';
  html += '<div id="pc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 上下文预算计算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>上下文预算计算器</h3>';
  html += '<p class="lab-desc">上下文窗口是智能体最贵的地产：系统提示、知识库注入、对话历史、输出预留都要抢地方。填入参数，看你的预算够不够，被挤掉的往往是历史。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>模型窗口 tokens <select id="cb-win" onchange="AGT.calcCtx()">';
  var wins = [[8192,'8K'],[32768,'32K'],[131072,'128K'],[204800,'200K'],[1048576,'1M']];
  for (var i = 0; i < wins.length; i++) html += '<option value="' + wins[i][0] + '"' + (wins[i][0]===131072?' selected':'') + '>' + wins[i][1] + '</option>';
  html += '</select></label>';
  html += '<label>系统提示 tokens <input type="number" id="cb-sys" step="100" value="800" oninput="AGT.calcCtx()"></label>';
  html += '<label>知识库注入 tokens <input type="number" id="cb-rag" step="500" value="4000" oninput="AGT.calcCtx()"></label>';
  html += '<label>每轮对话 tokens <input type="number" id="cb-turn" step="100" value="600" oninput="AGT.calcCtx()"></label>';
  html += '<label>历史轮数 <input type="number" id="cb-n" step="1" value="10" oninput="AGT.calcCtx()"></label>';
  html += '<label>输出预留 tokens <input type="number" id="cb-out" step="500" value="2000" oninput="AGT.calcCtx()"></label>';
  html += '</div>';
  html += '<div id="cb-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 流水线设计器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⑂</span>流水线设计器</h3>';
  html += '<p class="lab-desc">同一个任务，串几个角色、串几道工序，成本和质量完全不同。选一条流水线，看它的工序、token 账单和适用场景——记住：环节越多越稳，但也越贵越慢。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>流水线 <select id="pd-sel" onchange="AGT.showPipe()">';
  for (var j = 0; j < PIPES.length; j++) html += '<option value="' + j + '"' + (j===3?' selected':'') + '>' + PIPES[j].name + '</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="pd-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 失败模式自诊器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">✚</span>失败模式自诊器</h3>';
  html += '<p class="lab-desc">智能体出问题了？先对症状。选一个你观察到的现象，看它属于哪种失败模式、根因通常在哪、药方是什么。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>观察到的症状 <select id="fd-sel" onchange="AGT.diagnose()">';
  for (var k = 0; k < FAILURES.length; k++) html += '<option value="' + k + '"' + (k === 0 ? ' selected' : '') + '>' + FAILURES[k].symptom + '</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="fd-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：token 用量为教学估算（中文约 1 字 ≈ 1~2 token，按模型不同有差异），实际以所用模型账单为准；流水线质量结论为经验规律，具体任务需用评测集验证。</p>';
  html += '</div>';
  AGT.render(html);
  AGT.loopReset(); AGT.checkPrompt(); AGT.calcCtx(); AGT.showPipe(); AGT.diagnose();
};

/* ---- 5. 失败模式自诊器 ---- */
var FAILURES = [
  { symptom: '答非所问，做着做着跑偏了', mode: '跑偏（目标漂移）',
    causes: ['系统提示过长，核心指令被稀释', '历史对话太长，最初的目标被"挤"出了注意力', '中途多条指令互相冲突'],
    remedy: '把目标与硬约束写进系统提示并定期重申；长任务定期蒸馏历史；一次只下达一条主线指令。',
    links: [['失败模式图鉴', '#/l/reliability/02-failure-modes'], ['压缩与摘要', '#/l/context/03-compression']] },
  { symptom: '一本正经地编造事实或引用', mode: '幻觉',
    causes: ['没有检索支撑，全靠模型记忆硬答', '被要求"附来源"但没有真来源可查，于是编了一个', '温度过高，输出发散'],
    remedy: '知识问题接 RAG，先检索再作答；强制引用可回溯的来源并抽验；事实型任务调低温度。',
    links: [['检索注入 RAG', '#/l/context/04-rag'], ['输出的风险', '#/l/security/05-output-risk']] },
  { symptom: '重复执行同一个失败动作', mode: '死循环',
    causes: ['没有设步数上限或停止条件', '失败后不换思路，硬着头皮重试', '工具持续报错但错误信息没被模型看到'],
    remedy: '设最大步数与预算上限；记录已尝试过的动作；工具报错原文透传给模型，失败时提示"换一种方法"。',
    links: [['失败模式图鉴', '#/l/reliability/02-failure-modes'], ['多工具编排', '#/l/tools/06-multi-tool']] },
  { symptom: '张口就说"我无法完成这个任务"', mode: '提前放弃',
    causes: ['任务描述吓人但实际可行（它被自己的脑补劝退）', '工具描述写得太含糊，它没意识到自己有武器可用', '提示词允许它轻易放弃'],
    remedy: '把大任务拆成小步骤逐个下达；重写工具描述让能力一目了然；提示词明确"先尝试工具再下结论"。',
    links: [['失败模式图鉴', '#/l/reliability/02-failure-modes'], ['工具设计原则', '#/l/tools/04-tool-design']] },
  { symptom: '工具调用频繁报错', mode: '工具误用',
    causes: ['参数格式或类型不符合预期', '工具描述模糊，模型在猜用法', '权限缺失，调用被系统拒绝'],
    remedy: '重写工具描述（适用场景+参数含义+返回格式）；执行前校验参数并把报错原文回传；检查权限配置是否最小够用。',
    links: [['工具设计原则', '#/l/tools/04-tool-design'], ['Function Calling', '#/l/tools/02-function-calling']] },
  { symptom: '前面的要求后面全忘了', mode: '上下文过载',
    causes: ['窗口被历史塞满，开头指令被截断', '长任务没有做压缩，中间产物堆积', '关键信息埋在长文深处，注意力稀释'],
    remedy: '历史蒸馏成纪要；关键指令前置并适时重申；稳定信息外置为长期记忆，按需检索注入。',
    links: [['Token 与上下文窗口', '#/l/context/01-token-window'], ['分层记忆与遗忘', '#/l/context/07-memory-layers']] }
];
AGT.diagnose = function() {
  var sel = document.getElementById('fd-sel');
  if (!sel) return;
  var f = FAILURES[parseInt(sel.value)];
  var causeHtml = '';
  for (var i = 0; i < f.causes.length; i++) causeHtml += '<li>' + f.causes[i] + '</li>';
  var linkHtml = '';
  for (var j = 0; j < f.links.length; j++) {
    if (j > 0) linkHtml += ' · ';
    linkHtml += '<a href="' + f.links[j][1] + '" style="color:var(--acc);text-decoration:underline">' + f.links[j][0] + '</a>';
  }
  document.getElementById('fd-result').innerHTML =
    '<table class="cr-table">' +
    '<tr><td class="cr-name">失败模式</td><td class="cr-val cr-bad">' + f.mode + '</td></tr>' +
    '<tr><td class="cr-name">常见根因</td><td class="cr-val" style="font-weight:400"><ul style="margin:0;padding-left:18px">' + causeHtml + '</ul></td></tr>' +
    '<tr><td class="cr-name">药方</td><td class="cr-val cr-good" style="font-weight:400">' + f.remedy + '</td></tr>' +
    '<tr><td class="cr-name">相关课程</td><td class="cr-val" style="font-weight:400">' + linkHtml + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">诊断是启发式的：同一症状可能对应多种根因，按顺序排查（先上下文、再工具、再提示词），并用轨迹日志验证猜测。</p>';
};

/* ---- 1. 智能体循环模拟器 ---- */
var LOOP_STEPS = [
  ['目标','收到任务：把一段 30 分钟的会议录音整理成纪要，发给团队。',''],
  ['思考','拆解任务：需要"转写 → 提炼 → 生成邮件"三步。先查自己有哪些工具可用。',''],
  ['行动','调用工具：语音转写 API，传入录音文件。','tool'],
  ['观察','拿到转写文本：约 4800 字，含大量口语和重复。',''],
  ['思考','4800 字接近上下文预算的一半，直接塞进去不划算——改变计划：先分段摘要再汇总。','think'],
  ['行动','调用工具：文本分段摘要，每 800 字一段。','tool'],
  ['观察','得到 6 段摘要，共约 900 字。',''],
  ['思考','汇总摘要，提取结论、行动项和风险。检查：行动项有负责人和截止时间吗？','think'],
  ['行动','生成纪要草稿，补全两条缺失的截止时间（依据上下文推断，并标注"待确认"）。',''],
  ['思考','自检通过：三节结构齐全，无臆造内容，存疑处已标注。可以发送。','ok'],
  ['行动','调用工具：发送邮件给团队。','tool'],
  ['观察','发送成功。任务完成——回顾全程：循环转了 5 圈，调用了 3 次工具，改过 1 次计划。','done']
];
var loopIdx = 0;
AGT.loopReset = function() { loopIdx = 0; renderLoop(); };
AGT.loopNext = function() { if (loopIdx < LOOP_STEPS.length) loopIdx++; renderLoop(); };
function renderLoop() {
  var el = document.getElementById('ls-result');
  if (!el) return;
  var colors = { think: 'cr-warn', tool: '', ok: 'cr-good', done: 'cr-good' };
  var html = '<div class="loop-log">';
  for (var i = 0; i < loopIdx; i++) {
    var s = LOOP_STEPS[i];
    var tagCls = s[0] === '思考' ? 'lt-think' : (s[0] === '行动' ? 'lt-act' : (s[0] === '观察' ? 'lt-obs' : 'lt-goal'));
    html += '<div class="loop-step"><span class="loop-tag ' + tagCls + '">' + s[0] + '</span><span class="loop-txt">' + s[1] + '</span></div>';
  }
  html += '</div>';
  if (loopIdx >= LOOP_STEPS.length) {
    html += '<table class="cr-table"><tr><td class="cr-name">结果</td><td class="cr-val cr-good">任务完成 · 循环 5 圈 · 工具调用 3 次 · 计划调整 1 次</td></tr></table>';
  } else {
    html += '<p class="calc-note">进度 ' + loopIdx + ' / ' + LOOP_STEPS.length + ' —— 智能体的本质就是把这个循环转起来，直到目标达成或判断该停。</p>';
  }
  el.innerHTML = html;
  el.scrollTop = el.scrollHeight;
}

/* ---- 2. 提示词体检 ---- */
var PC_ITEMS = [
  ['角色', /你是|扮演|作为|资深|专家|老师|助手|角色/, '开头交代"你是谁"，给模型一个专业视角，输出口吻会更稳。'],
  ['任务', /请|帮我|需要|生成|整理|写|分析|总结|翻译|检查|列出|评估/, '用动词明确说出"要做什么"，一句话讲清，不要让模型猜。'],
  ['背景', /背景|目前|当前|以下|如下|材料|资料|这是|团队|项目|上下文/, '补充必要的背景信息：给谁看、基于什么材料、什么场景。'],
  ['约束', /不要|不能|必须|保留|限制|不超过|至少|避免|禁止|只|不得|缺失|臆造/, '写清"不许做什么"和"必须做到什么"，约束越明确，跑偏越少。'],
  ['输出格式', /输出|格式|markdown|表格|json|列表|段落|三节|分节|结构|字数/, '指定输出的长相：Markdown、表格、分几节、大概多少字。']
];
AGT.checkPrompt = function() {
  var el = document.getElementById('pc-result');
  var ta = document.getElementById('pc-text');
  if (!el || !ta) return;
  var text = ta.value || '';
  var score = 0, rows = '';
  for (var i = 0; i < PC_ITEMS.length; i++) {
    var it = PC_ITEMS[i];
    var hit = it[1].test(text);
    if (hit) score += 20;
    rows += '<tr><td class="cr-name">' + (hit ? '✓' : '✗') + ' ' + it[0] + '</td>' +
      '<td class="cr-val ' + (hit ? 'cr-good' : 'cr-bad') + '">' + (hit ? '已具备' : '缺失 —— ' + it[2]) + '</td></tr>';
  }
  var verdict, cls;
  if (score >= 80) { verdict = '优秀：五要素基本齐全，可以直接用'; cls = 'cr-good'; }
  else if (score >= 60) { verdict = '合格：补上缺的要素，输出会明显更稳'; cls = 'cr-warn'; }
  else { verdict = '偏弱：模型要靠猜，先补齐缺失项'; cls = 'cr-bad'; }
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">体检得分</td><td class="cr-val ' + cls + '">' + score + ' / 100 —— ' + verdict + '</td></tr>' +
    rows + '</table>' +
    '<p class="calc-note">体检只是启发式检查（关键词匹配），不是模型评分。真正的检验是：换个模型、换个输入，结果还稳不稳。</p>';
};

/* ---- 3. 上下文预算计算器 ---- */
AGT.calcCtx = function() {
  var win = parseInt((document.getElementById('cb-win') || {}).value || '131072');
  var sys = AGT._num('cb-sys'), rag = AGT._num('cb-rag'), turn = AGT._num('cb-turn');
  var n = AGT._num('cb-n'), out = AGT._num('cb-out');
  var el = document.getElementById('cb-result');
  if (sys === null || rag === null || turn === null || n === null || out === null) {
    el.innerHTML = '<div class="calc-warn">请把参数填完整。</div>'; return;
  }
  var hist = turn * n;
  var used = sys + rag + hist;
  var remain = win - used - out;
  var pct = Math.round(used / win * 100);
  var verdict, cls;
  if (remain < 0) { verdict = '超预算 —— 历史会被截断或报错，需要压缩/检索代替全量塞入'; cls = 'cr-bad'; }
  else if (remain < win * 0.2) { verdict = '吃紧 —— 留给新对话的空间不足，长对话会很快触顶'; cls = 'cr-warn'; }
  else { verdict = '健康 —— 还有充足空间应对新输入'; cls = 'cr-good'; }
  var bar = '<div style="height:14px;background:var(--acc-soft);border-radius:7px;overflow:hidden;margin:10px 0">' +
    '<div style="height:100%;width:' + Math.min(100, Math.round((used + out) / win * 100)) + '%;background:var(--acc)"></div></div>';
  el.innerHTML = bar + '<table class="cr-table">' +
    '<tr><td class="cr-name">系统提示</td><td class="cr-val">' + sys.toLocaleString() + ' tokens</td></tr>' +
    '<tr><td class="cr-name">知识库注入</td><td class="cr-val">' + rag.toLocaleString() + ' tokens</td></tr>' +
    '<tr><td class="cr-name">历史(' + n + ' 轮)</td><td class="cr-val">' + hist.toLocaleString() + ' tokens</td></tr>' +
    '<tr><td class="cr-name">输出预留</td><td class="cr-val">' + out.toLocaleString() + ' tokens</td></tr>' +
    '<tr><td class="cr-name">剩余可用</td><td class="cr-val ' + cls + '">' + Math.max(0, remain).toLocaleString() + ' tokens —— ' + verdict + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">工程口径：常驻部分（系统提示+知识库）最好不超过窗口的 30%，把大头留给对话历史与新输入。历史超限时优先做摘要压缩，而不是硬截断。</p>';
};

/* ---- 4. 流水线设计器 ---- */
var PIPES = [
  { name: '单体直出（1 步）', stages: [['模型直接生成', 5]], quality: '速度最快、成本最低；复杂任务容易漏项、跑偏', scene: '简单改写、问答、格式转换' },
  { name: '写 + 审（2 步）', stages: [['写手', 5], ['审稿', 2]], quality: '多一道把关，明显的事实错误和格式问题基本能拦住', scene: '日报、周报、常规文档' },
  { name: '检索 → 写 → 审（3 步）', stages: [['检索员', 3], ['写手', 5], ['审稿', 2]], quality: '有据可依，幻觉率显著下降；适合有知识库的场景', scene: '知识库问答、带引用的报告' },
  { name: '检索 → 写 → 审 → 修订（4 步）', stages: [['检索员', 3], ['写手', 5], ['审稿', 2], ['修订', 4]], quality: '审稿意见被真正消化，成稿质量最稳；深度研究/重要文档的主力配置', scene: '研究报告、重要交付物' },
  { name: '检索 → 写 → 审 → 修订 → 终审（5 步）', stages: [['检索员', 3], ['写手', 5], ['审稿', 2], ['修订', 4], ['终审', 2]], quality: '双重把关，错误率最低；但成本是单体直出的 3 倍以上', scene: '高风险内容：对外合同、合规文件' }
];
AGT.showPipe = function() {
  var sel = document.getElementById('pd-sel');
  if (!sel) return;
  var p = PIPES[parseInt(sel.value)];
  var total = 0, flow = '';
  for (var i = 0; i < p.stages.length; i++) {
    if (i > 0) flow += '<span class="pipe-arrow">→</span>';
    flow += '<span class="pipe-stage">' + p.stages[i][0] + '</span>';
    total += p.stages[i][1];
  }
  var base = PIPES[0].stages[0][1];
  var mult = AGT._fix(total / base, 1);
  document.getElementById('pd-result').innerHTML =
    '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin:10px 0">' + flow + '</div>' +
    '<table class="cr-table">' +
    '<tr><td class="cr-name">工序数</td><td class="cr-val">' + p.stages.length + ' 道</td></tr>' +
    '<tr><td class="cr-name">单次运行约</td><td class="cr-val cr-warn">' + total + 'k tokens（≈ 单体直出 × ' + mult + '）</td></tr>' +
    '<tr><td class="cr-name">质量预期</td><td class="cr-val">' + p.quality + '</td></tr>' +
    '<tr><td class="cr-name">适用场景</td><td class="cr-val cr-good">' + p.scene + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">经验规律：环节每多一道，时延和成本线性上涨，收益边际递减。先跑最简流水线，用评测找到哪一环在出问题，再有针对性地加环节——而不是一上来就堆五个角色。</p>';
};

/* ===== 模块页 ===== */
AGT.views.module = function(id) {
  var mod = AGT.modules.find(function(m) { return m.id === id; });
  if (!mod) { AGT.views.home(); return; }
  var P = AGT.progress();
  var lessons = AGT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + AGT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + AGT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = AGT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + AGT.esc(title) + '</a>';
    else html += '<span class="title">' + AGT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  AGT.render(html);
};

/* ===== 术语 ===== */
AGT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>智能体名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 智能体 / RAG / 提示词" oninput="AGT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(AGT.terms) + '</div></div>';
  AGT.render(html);
};
AGT.filterTerms = function(q) {
  var filtered = AGT.terms;
  if (q) { q = q.toLowerCase();
    filtered = AGT.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || t.en.toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + AGT.esc(t.name) + ' <span class="term-en">' + AGT.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + AGT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + AGT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
AGT.views.myTerms = function() {
  var P = AGT.progress(); var collected = [];
  for (var i = 0; i < AGT.terms.length; i++) if (P.hasTerm(AGT.terms[i].id)) collected.push(AGT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  AGT.render(html);
};

/* ===== 搜索 ===== */
AGT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 智能体 / RAG / 提示词" oninput="AGT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  AGT.render(html);
};
AGT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = AGT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + AGT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + AGT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
AGT.views.settings = function() {
  var P = AGT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="AGT.setTheme(\'dark\')">深色 · 紫夜</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="AGT.setTheme(\'light\')">浅色 · 紫罗兰</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="AGT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="AGT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="AGT.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = AGT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/agt-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/agt-progress" value="' + AGT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + AGT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + AGT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + AGT.esc(AGT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="AGT.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="AGT.clearData()">清除数据</button></div>';
  html += '</div>';
  AGT.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    AGT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!AGT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    AGT.sync.pullNow().then(function () { return AGT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + AGT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    AGT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : AGT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    AGT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
AGT.setTheme = function(t) { document.documentElement.dataset.theme = t; AGT.progress().setPref('theme', t); AGT.views.settings(); };
AGT.setFontSize = function(s) { document.documentElement.dataset.fs = s; AGT.progress().setPref('fontSize', s); AGT.views.settings(); };
AGT.exportData = function() {
  var data = AGT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'agt-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
AGT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('agt.progress.v1');
    window.location.reload();
  }
};
