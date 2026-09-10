/* 机器学习入门 · 单一数据源生成器(科普通识,克隆 data-literacy 框架)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);

/* ---------- 小工具 ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别踩坑 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['intro','什么是机器学习','从"人写规则"到"机器学规律"——三类学习、什么时候不该用、术语地图','入门','What is ML'],
  ['workflow','建模全流程','定问题、切数据、立基线、反复试、上线盯——一个模型从想法到落地的完整路径','入门','ML Workflow'],
  ['regression','回归：预测数值','线性回归、损失函数、梯度下降、过拟合与正则——预测"多少"的看家算法','基础','Regression'],
  ['classification','分类：判断类别','决策树、K 近邻、朴素贝叶斯、支持向量机、随机森林与梯度提升','基础','Classification'],
  ['clustering','无监督与聚类','没有答案怎么办——K 均值、层次聚类、降维、异常检测、关联规则','核心','Unsupervised'],
  ['evaluation','评估与调优','准确率为什么会骗人、精确率召回率怎么权衡、交叉验证与超参数怎么找','核心','Evaluation'],
  ['features','特征与数据准备','缺失值、类别编码、归一化、特征选择——以及最隐蔽的数据泄漏','核心','Feature Prep'],
  ['neural','神经网络入门','神经元、多层网络、反向传播，以及 CNN/RNN/Transformer 到底在干什么','进阶','Neural Networks'],
  ['llm','大模型时代','预训练与微调、提示、检索增强、幻觉与评测——和模型打交道的正确姿势','进阶','LLM Era'],
  ['recsys','推荐系统','把"猜你喜欢"拆开看——协同过滤、冷启动、召回与排序、点击率','实战','Recsys'],
  ['timeseries','时间序列','带时间戳的数据怎么预测——趋势、季节性、平稳性与滚动验证','实战','Time Series'],
  ['practice','实战与避坑','完整案例走一遍、常见错误清单、可解释性、业务落地与伦理边界','实战','Practice']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['ml','机器学习','Machine Learning','让计算机从数据里自己找规律，而不是由人把规则一条条写死。','教小孩认猫，而不是背猫的定义。','intro'],
  ['supervised','监督学习','Supervised Learning','用带标准答案的数据训练模型，学完去答新题。','照着带答案的习题册练。','intro'],
  ['unsupervised','无监督学习','Unsupervised Learning','只给数据不给答案，让模型自己找出数据里的结构。','把一筐豆子按大小自己分成几堆。','intro'],
  ['reinforcement','强化学习','Reinforcement Learning','让模型在试错中行动，按结果好坏给奖励或惩罚。','训狗：做对了给零食。','intro'],
  ['label','标签','Label','监督学习里每条样本附带的标准答案。','习题册后面的答案页。','intro'],
  ['feature','特征','Feature','描述一个样本的各项属性，模型就是拿这些来判断的。','相亲简历上的每一栏。','intro'],
  ['generalization','泛化','Generalization','模型在没见过的数据上也能表现好——这才是真本事。','会做没做过的题才算学会。','intro'],

  ['dataset','数据集','Dataset','一堆样本的集合，分训练用、验证用、测试用。','一整个题库。','workflow'],
  ['sample','样本','Sample','数据集里的一条记录，代表一个被观察的对象。','题库里的一道题。','workflow'],
  ['train-test-split','训练测试划分','Train/Test Split','把数据分成"给模型学"和"拿来考模型"两部分。','留几套卷子考前不许看。','workflow'],
  ['validation','验证集','Validation Set','训练过程中用来调参数、看火候的一份数据。','模拟考，用来决定复习方向。','workflow'],
  ['baseline','基线','Baseline','一个"最笨但可靠"的对照方案，模型必须打赢它才有意义。','及格线。','workflow'],
  ['pipeline','流水线','Pipeline','把清洗、转换、建模、预测串成一条可重复执行的固定流程。','流水线上的固定工序。','workflow'],
  ['inference','推理','Inference','模型训练完成之后，拿新数据算出结果的过程。','学会之后动笔答题。','workflow'],
  ['drift','数据漂移','Data Drift','上线后真实数据的分布慢慢变了，模型的准头也跟着掉。','换季了，旧尺码表就不准了。','workflow'],

  ['regression','回归','Regression','预测一个连续的数值——多少、多贵、多久。','猜体重、猜房价。','regression'],
  ['linear-regression','线性回归','Linear Regression','用一条直线（或平面）去拟合数据，最基础也最常用的预测方法。','拿直尺去贴一串散点。','regression'],
  ['loss','损失函数','Loss Function','衡量"预测值和真实值差多远"的尺子，训练就是想办法把它变小。','考试的扣分标准。','regression'],
  ['mse','均方误差','Mean Squared Error','把每个误差平方后取平均，放大大错、抹平正负。','算平均扣分，错得狠的罚得重。','regression'],
  ['gradient-descent','梯度下降','Gradient Descent','一步一步往"让误差变小"的方向挪，慢慢找到最优解。','摸黑下山，每步都朝下坡方向走。','regression'],
  ['learning-rate','学习率','Learning Rate','每一步挪多远——太大会跳过谷底，太小要走半天。','下山的步幅。','regression'],
  ['regularization','正则化','Regularization','给模型加一条"别太复杂"的约束，防止它死记硬背。','限制字数，逼你抓重点。','regression'],
  ['overfitting','过拟合','Overfitting','模型把训练数据的噪声也背下来了，考试一换题就崩。','把习题册背熟，但不会举一反三。','regression'],
  ['underfitting','欠拟合','Underfitting','模型太简单，连训练数据里的规律都没学到。','公式都没记住就想考试。','regression'],
  ['logistic-regression','逻辑回归','Logistic Regression','名字叫回归，干的却是分类——把得分压成 0 到 1 之间的概率。','把任意分数翻译成"几成把握"。','regression'],

  ['classification','分类','Classification','判断一个样本属于哪一类——是或不是、猫或狗、会流失或不会。','把人分进不同的队。','classification'],
  ['decision-tree','决策树','Decision Tree','一连串"是/否"问题串成的判断流程，每一步都在切分数据。','医生问诊的排查流程。','classification'],
  ['knn','K 近邻','K-Nearest Neighbors','看离它最近的 K 个邻居多数是什么，就把它判成什么。','看邻居投票决定你家小区的调性。','classification'],
  ['naive-bayes','朴素贝叶斯','Naive Bayes','用概率算"在这些特征下属于各类的可能性"，简单得出奇地好用。','根据蛛丝马迹推算最可能的凶手。','classification'],
  ['svm','支持向量机','Support Vector Machine','在两类之间划一条尽量宽的隔离带，只由边界上的点决定。','在两拨人之间画一条最宽松的分界线。','classification'],
  ['ensemble','集成学习','Ensemble Learning','把多个弱模型的结果合起来投票，整体往往比单个强模型更准。','三个臭皮匠，顶个诸葛亮。','classification'],
  ['random-forest','随机森林','Random Forest','训练一大批各看一部分数据的决策树，投票出结论。','一群各持己见的评委投票。','classification'],
  ['gradient-boosting','梯度提升','Gradient Boosting','一棵棵树接着上，每棵专门去补前一批的错，逐步逼近。','接力赛，每棒补前一棒的短板。','classification'],
  ['boundary','决策边界','Decision Boundary','模型在特征空间里划出的分界线，它长什么样决定了模型的性格。','地图上的省界线。','classification'],

  ['clustering','聚类','Clustering','没有标准答案时，把相似的样本自动归成一堆一堆。','把散落的棋子按颜色和形状分堆。','clustering'],
  ['kmeans','K 均值','K-Means','先拍 K 个中心，再反复"就近归队、重算中心"直到稳定。','选 K 个组长，各自招人，再重选组长。','clustering'],
  ['elbow','肘部法','Elbow Method','看"分几类"时误差下降曲线的拐点，拐点处就是比较合适的 K。','爬山到某个高度后突然变平。','clustering'],
  ['hierarchical','层次聚类','Hierarchical Clustering','从每个点各成一类开始，一层层合并，得到一棵可切分的树。','家族族谱从个人拼到大家族。','clustering'],
  ['pca','主成分分析','Principal Component Analysis','把很多相关的特征压成少数几个"综合指标"，保住主要信息。','给一堆成绩评出一个"综合分"。','clustering'],
  ['dimension-reduction','降维','Dimensionality Reduction','把高维数据压到低维，便于看图和加速计算。','把立体地图拍成一张平面地图。','clustering'],
  ['anomaly','异常检测','Anomaly Detection','在大量正常样本里揪出少数格格不入的家伙。','广场上一眼看到穿错衣服的人。','clustering'],
  ['association','关联规则','Association Rules','找出"买了 A 的人往往也买 B"这类共现规律。','啤酒和尿布的老故事。','clustering'],

  ['confusion-matrix','混淆矩阵','Confusion Matrix','把预测结果分成"对/错"的四种组合，看清模型错在哪一边。','体检报告的四格结论表。','evaluation'],
  ['accuracy','准确率','Accuracy','猜对的比例——类别极不均衡时，它会被"多数类"灌水。','100 道题里对了几道。','evaluation'],
  ['precision','精确率','Precision','模型说"是"的那些里，真正是的占多少——关心"别冤枉"。','报的警里有多少是真的。','evaluation'],
  ['recall','召回率','Recall','真正是的那批里，被模型揪出来多少——关心"别漏掉"。','真凶里抓到了几个。','evaluation'],
  ['f1','F1 分数','F1 Score','精确率和召回率的调和平均，两者兼顾的一个总评分。','两手都要硬时的综合分。','evaluation'],
  ['roc','ROC 曲线','ROC Curve','把所有阈值下的"抓得准"和"抓错少"画成一条曲线。','调不同严格程度时的成绩轨迹。','evaluation'],
  ['auc','AUC','Area Under Curve','ROC 曲线下的面积，越大说明模型排序能力越强，0.5 等于瞎猜。','曲线成绩单的总分。','evaluation'],
  ['cross-validation','交叉验证','Cross Validation','把数据轮流当验证集，转几轮取平均，结果更稳更可信。','轮流出题、轮流批卷。','evaluation'],
  ['hyperparameter','超参数','Hyperparameter','得由人来定的设置（如树多深、K 取几），模型自己学不会。','做菜前自己定的火候。','evaluation'],
  ['class-imbalance','类别不平衡','Class Imbalance','正例极少反例极多，模型会靠"全猜多数类"骗高分。','一千人里一个病人，全说没病也对 99.9%。','evaluation'],

  ['feature-engineering','特征工程','Feature Engineering','把原始数据加工成模型好用的特征，往往是效果提升的最大来源。','好食材要先切配。','features'],
  ['missing-value','缺失值','Missing Value','数据表里空着的格子，填还是丢要先想清原因。','表格里的空白栏。','features'],
  ['one-hot','独热编码','One-Hot Encoding','给每个类别开一列，是就填 1、不是填 0，避免"大小"误导模型。','给每件衣服挂一个专属标签。','features'],
  ['normalization','归一化','Normalization','把不同量纲的数值压到同一区间，防止大数值的特征抢戏。','把所有人的成绩都换算成百分制。','features'],
  ['standardization','标准化','Standardization','把数据变成"均值 0、标准差 1"，让各特征地位对等。','统一比赛口径。','features'],
  ['feature-selection','特征选择','Feature Selection','从一堆特征里挑出真正有用的，去掉噪音和冗余。','精简行李，只带用得上的。','features'],
  ['data-leakage','数据泄漏','Data Leakage','把"预测时根本拿不到"的信息混进了训练，成绩虚高得离谱。','考前偷看了答案。','features'],

  ['neuron','神经元','Neuron','把多个输入加权求和、过一道非线性函数，再传给下一层。','一个会打分的小评委。','neural'],
  ['activation','激活函数','Activation Function','给神经元加上"非线性"，让它能表达弯弯绕绕的关系。','把直尺掰弯，才能画曲线。','neural'],
  ['hidden-layer','隐藏层','Hidden Layer','输入和输出之间那些不直接可见的层，负责逐级抽象。','传话游戏中间的那几棒。','neural'],
  ['backprop','反向传播','Backpropagation','从输出端的误差往前一层层追溯，算出每个参数该往哪调。','倒查是哪道工序出了问题。','neural'],
  ['cnn','卷积神经网络','Convolutional Neural Network','用一小块窗口在图上滑动找局部特征，专为图像而生。','拿放大镜一格一格扫照片。','neural'],
  ['rnn','循环神经网络','Recurrent Neural Network','带"记忆"的网络，处理一句话这类有先后顺序的数据。','读句子时记得前面说了什么。','neural'],
  ['transformer','Transformer','Transformer','用注意力机制一次看全所有词、并算出彼此关系，大模型的底座。','全场互相打分，而不是挨个传话。','neural'],
  ['dropout','随机失活','Dropout','训练时随机让一部分神经元"缺席"，逼网络别死记。','轮流请假，逼团队人人能干活。','neural'],

  ['pretrain','预训练','Pretraining','先用海量无标注数据把模型养成"通才"，再针对具体任务调。','先上通识教育，再学专业课。','llm'],
  ['finetune','微调','Fine-tuning','拿少量领域数据在预训练模型上继续训，让它变成行家。','老手转岗，补一段专项培训。','llm'],
  ['prompt','提示','Prompt','你给模型的输入指令，写得好不好直接决定输出质量。','给实习生的任务说明。','llm'],
  ['rag','检索增强生成','Retrieval-Augmented Generation','先去资料库检索相关内容，再让模型基于这些内容回答，减少胡说。','开卷考试：先翻书再作答。','llm'],
  ['hallucination','幻觉','Hallucination','模型一本正经地编出不存在的说法，语气越自信越要警惕。','胸有成竹地指错路。','llm'],
  ['token','词元','Token','模型处理文本的最小单位，中文里常常约等于一个词或半个词。','拼图的最小块。','llm'],

  ['recsys','推荐系统','Recommender System','在用户还没想清楚要什么之前，先把可能想要的东西递过去。','熟客一进门就知道他要什么。','recsys'],
  ['collaborative-filtering','协同过滤','Collaborative Filtering','靠"和你相似的人还喜欢什么"来推荐，不需要知道内容是什么。','朋友之间互相安利。','recsys'],
  ['content-based','基于内容的推荐','Content-based Filtering','看东西本身的属性和你历史上的偏好是否相似。','按你喜欢的口味挑菜。','recsys'],
  ['cold-start','冷启动','Cold Start','新用户没行为、新物品没人看过，推荐系统无从下手。','新来的转学生，没人了解他。','recsys'],
  ['recall-rank','召回与排序','Recall & Ranking','先从海量内容里粗筛一批候选，再精细排个先后顺序。','先海选，再决赛。','recsys'],
  ['ctr','点击率','Click-Through Rate','看到的人里有多少点了它，推荐与广告最常用的核心指标。','路过的人有几个进店。','recsys'],

  ['timeseries','时间序列','Time Series','按时间先后排好的一串数据，前后之间往往互相关联。','每天的体温记录本。','timeseries'],
  ['trend','趋势','Trend','数据在长期上往上还是往下走的大方向。','山路整体的上坡下坡。','timeseries'],
  ['seasonality','季节性','Seasonality','按固定周期重复出现的起伏，比如每周、每年。','每年夏天的空调销量高峰。','timeseries'],
  ['stationarity','平稳性','Stationarity','数据的统计规律不随时间改变，是许多时序方法的前提。','水面的平均水位没在变。','timeseries'],
  ['arima','ARIMA','ARIMA','把自身历史值、历史误差和差分拼起来的经典时序预测模型。','根据过去几天的天气猜明天。','timeseries'],
  ['walk-forward','滚动验证','Walk-forward Validation','按时间往前滚，每次只用"过去"预测"未来"，绝不回头用未来数据。','站在当天预测明天，不许穿越。','timeseries'],

  ['explainability','可解释性','Explainability','能说清模型为什么给出这个结论，而不是只给一个黑箱分数。','医生要讲得出诊断理由。','practice'],
  ['mlops','MLOps','MLOps','让模型上线后能被持续训练、监控、迭代的一整套工程做法。','汽车要保养，不能出厂就不管。','practice'],
  ['ground-truth','标注真值','Ground Truth','人工确认过的正确答案，是训练和评估的标尺。','标准答案。','practice'],
  ['algorithmic-bias','算法偏见','Algorithmic Bias','模型把数据里原有的偏见原样放大，甚至变成歧视。','跟着有偏的师傅学出偏的手艺。','practice'],
  ['ab-online','在线实验','Online Experiment','上线小流量做 A/B 对比，用真实行为验证模型到底有没有用。','先小范围试卖，再决定要不要铺开。','practice']
];

/* ============ 加载课程内容 ============ */
const L = {};
const srcDir = path.join(__dirname, '_src');
fs.readdirSync(srcDir).filter(f => f.endsWith('.js')).sort().forEach(f => {
  eval(fs.readFileSync(path.join(srcDir, f), 'utf8'));
});

/* ============ 组装 + 校验 + 写文件 ============ */
const termIds = new Set(TERMS.map(t => t[0]));
const moduleIds = new Set(MODULES.map(m => m[0]));
const path_ = [];
const lessonIds = new Set();
MODULES.forEach(m => (L[m[0]] || []).forEach(les => { var id = m[0] + '/' + les[0]; path_.push(id); lessonIds.add(id); }));

let errors = [];
function checkBody(id, html) {
  if (!html) return;
  let m; const re = /data-term="([^"]+)"/g;
  while ((m = re.exec(html))) if (!termIds.has(m[1])) errors.push(id + ' 未知术语: ' + m[1]);
  const rl = /href="#\/l\/([^"]+)"/g;
  while ((m = rl.exec(html))) if (!lessonIds.has(m[1])) errors.push(id + ' 链接到不存在的课: ' + m[1]);
  const rm = /href="#\/m\/([^"]+)"/g;
  while ((m = rm.exec(html))) if (!moduleIds.has(m[1])) errors.push(id + ' 链接到不存在的模块: ' + m[1]);
  if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(html)) errors.push(id + ' 含 emoji/特殊符号');
}
MODULES.forEach(m => (L[m[0]] || []).forEach(les => {
  var id = m[0] + '/' + les[0];
  [les[4], les[5], les[6], les[8]].forEach(b => checkBody(id, b));
  (les[7] || []).forEach(q => { checkBody(id, q.q); checkBody(id, q.explain); });
}));
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js */
const mods = MODULES.map((m, i) => ({ id: m[0], order: i, title: m[1], desc: m[2], lessons: (L[m[0]] || []).length, tag: m[3], en: m[4] }));
let modText = '/* 模块元数据 + 学习路径(机器学习入门)(自动生成,勿手改) */\n';
modText += 'window.ML = window.ML || {};\n';
modText += 'ML.modules = ' + J(mods) + ';\n';
modText += 'ML.path = ' + J(path_) + ';\n';
modText += 'ML.totalLessons = ML.path.length;\n';

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
const termText = '/* 术语表(机器学习入门)(自动生成) {id,name,en,def,analogy,module} */\nwindow.ML = window.ML || {};\nML.terms = ' + J(termObjs) + ';\n';

/* ---------- 命名空间自检(防克隆本站后 sed 替换遗漏:曾因残留他站命名空间导致整站崩溃) ---------- */
const NS = 'ML';
const SIBLINGS = ['AGT', 'TCM', 'CCN', 'FIN', 'PRS', 'AIP', 'AIX', 'DAT', 'WHS', 'GTR', 'LIT', 'TSP',
  'FIT', 'MUS', 'MATH', 'ECON', 'PSY', 'GEO', 'CG', 'CHS', 'EBD', 'EMS', 'FYP', 'PGF', 'PFIN',
  'SAD', 'SAN', 'SPM', 'NPD', 'HIT', 'ISL', 'ISPM', 'CDC', 'NH', 'AST', 'WAH'];
const genAll = modText + termText;
if (genAll.indexOf(NS + '.') === -1) {
  console.error('命名空间自检失败: 生成物未使用本站命名空间 ' + NS + '。');
  process.exit(1);
}
const foreign = SIBLINGS.filter(x => genAll.indexOf(x + '.') !== -1);
if (foreign.length) {
  console.error('命名空间自检失败: 生成物含他站命名空间 ' + foreign.join(', ') + ' —— 克隆后替换不完整。');
  process.exit(1);
}

w(C('modules.js'), modText);
w(C('terms.js'), termText);

/* 课时文件 */
const scriptTags = [];
MODULES.forEach(m => {
  const mid = m[0];
  (L[mid] || []).forEach((les, idx) => {
    const id = mid + '/' + les[0];
    const obj = {
      id: id, module: mid, order: idx + 1, title: les[1], minutes: les[2],
      keywords: les[3], concept: les[4], core: les[5], pitfalls: les[6], quiz: les[7] || [], links: les[8]
    };
    let body = '/* ' + id + ' (自动生成) */\nML.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html(幂等:<!--LESSONS--> 标记常驻,重复 build 不损耗) */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') === -1) {
  /* 迁移:旧结构(<!-- Lessons 旧块)转标记结构 */
  if (/<!-- Lessons[\s\S]*?<\/body>/.test(idx)) {
    idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!--LESSONS-->\n\n</body>');
  } else if (/<script src="content\/terms\.js"><\/script>/.test(idx)) {
    /* 兜底:historical 形态(无标记但有课时标签) —— 在 terms.js 后补标记 */
    idx = idx.replace('<script src="content/terms.js"></script>',
      '<script src="content/terms.js"></script>\n<!--LESSONS-->');
  } else {
    console.error('注入失败: index.html 既无 <!--LESSONS--> 标记也无可识别的旧结构。');
    process.exit(1);
  }
}
/* 每次先清旧课时标签(保留 modules/terms),再在标记处插入新标签,标记保留 */
idx = idx.replace(/<script src="content\/(?!modules\.js|terms\.js)[^"]*"><\/script>\s*/g, '');
idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n') + '\n<!--LESSONS-->');
const injected = (idx.match(/<script src="content\//g) || []).length - 2; /* 减去 modules/terms */
if (injected !== scriptTags.length) {
  console.error('注入校验失败: index.html 课时标签 ' + injected + ' 个 != 应注入 ' + scriptTags.length + ' 个。');
  process.exit(1);
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
