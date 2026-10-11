/* 数据工程与数据治理 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及标准规范、政策要求、技术选型与合规口径的具体内容,
   必须写明依据与适用期;内容基线为 2026 年 10 月。
   改内容时同步更新 index.html 与首页的基线日期。 */
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
  ['guide','导览','怎么用这个站、数据工程是什么、学习路线','基础','Guide'],
  ['landscape','数据体系全景','数据生命周期、数据栈分层、批与流、数据平台、湖仓一体','基础','Landscape'],
  ['modeling','数据建模','为什么建模、维度建模、事实与维度、星型雪花、宽表','核心','Modeling'],
  ['storage','存储与数据湖仓','存储选型、列存、数仓、数据湖、湖仓一体、冷热分层','核心','Storage'],
  ['ingestion','数据采集与集成','数据源、ETL 与 ELT、CDC、批量与实时、同步、接口','核心','Ingestion'],
  ['pipeline','数据管道与编排','管道、DAG、调度、编排、幂等、重跑、增量全量','核心','Pipeline'],
  ['quality','数据质量','六个维度、校验规则、异常检测、剖析、根因、SLA','核心','Quality'],
  ['metadata','元数据与数据目录','技术元数据、业务元数据、数据目录、数据地图、打标','进阶','Metadata'],
  ['lineage','数据血缘与影响分析','血缘是什么、字段级血缘、采集、影响分析、可视化','进阶','Lineage'],
  ['standard','数据标准与主数据','数据标准、数据元、编码字典、主数据、参考数据、MDM','核心','Standard'],
  ['security','数据安全与隐私','分级分类、访问控制、脱敏、加密、隐私计算、审计','进阶','Security'],
  ['governance','数据治理体系','治理组织、数据责任人、DCMM、DAMA、成熟度、落地','进阶','Governance'],
  ['analytics','数据服务与分析','数据服务、指标体系、指标平台、自助分析、数据 API、看板','应用','Analytics'],
  ['aidata','面向 AI 的数据工程','非结构化数据、嵌入、向量库、特征平台、标注、数据飞轮','进阶','AI Data'],
  ['practice','实战案例','平台建设、数据中台、质量治理、主数据、指标、能力地图','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['data-engineering','数据工程','Data Engineering','把分散、杂乱的数据采集、加工、存储成可信可用数据的一套工程方法与实践。','给数据修一条自来水管道。','guide'],
  ['data-governance','数据治理','Data Governance','围绕数据质量、标准、安全与责任建立的组织、制度与技术机制的总和。','给数据定规矩并管起来。','guide'],
  ['data-lifecycle','数据生命周期','Data Lifecycle','数据从产生、采集、加工、使用到归档销毁的完整过程。','一份数据的一生。','guide'],
  ['data-asset','数据资产','Data Asset','能被组织稳定使用、并带来业务价值的数据及其衍生物。','能换钱的数据才算资产。','guide'],
  ['data-stack','数据栈','Data Stack','从采集、存储、计算、调度到服务的一整套技术组件组合。','搭数据平台要用的全套工具。','guide'],

  // 数据体系全景
  ['data-platform','数据平台','Data Platform','为数据采集、存储、计算与服务提供统一支撑的技术底座。','数据的车间。','landscape'],
  ['data-warehouse','数据仓库','Data Warehouse','面向分析、以主题组织、相对稳定的数据集合。','专门用来算账的库。','landscape'],
  ['data-lake','数据湖','Data Lake','以原始格式集中存放海量多源数据的存储区。','什么都往里倒的大池子。','landscape'],
  ['lakehouse','湖仓一体','Lakehouse','把数据湖的低成本存储与数据仓库的事务和分析能力结合起来的架构。','湖和仓合到一处。','landscape'],
  ['data-mart','数据集市','Data Mart','面向某一部门或主题的、从仓库切分出来的小型数据集。','按需切出来的一小块。','landscape'],
  ['data-middle-platform','数据中台','Data Middle Platform','把数据能力沉淀为可复用服务、供各业务调用的中间层。','能力集中一次,各处复用。','landscape'],
  ['batch-stream','批处理与流处理','Batch and Stream','批处理按批加工成块数据,流处理按事件逐条处理,两者常互补。','攒一堆再算 vs 来一条算一条。','landscape'],
  ['olap-oltp','OLTP 与 OLAP','OLTP and OLAP','OLTP 面向联机事务处理(交易),OLAP 面向联机分析处理(统计)。','一边记账一边算账。','landscape'],

  // 数据建模
  ['data-modeling','数据建模','Data Modeling','把业务对象与关系抽象成表结构的过程。','先把图纸画好再盖房。','modeling'],
  ['dimensional-modeling','维度建模','Dimensional Modeling','以事实与维度组织数据、面向分析的经典建模方法。','围绕「谁在什么时候干了什么」摆。','modeling'],
  ['fact-table','事实表','Fact Table','存放可度量业务过程的记录表,通常细长且不断增长。','一行一笔业务。','modeling'],
  ['dimension-table','维度表','Dimension Table','描述业务实体的属性,用来给事实「贴标签」。','给每笔业务补上背景。','modeling'],
  ['star-schema','星型模型','Star Schema','事实表居中、维度表环绕的建模结构。','一个中心带一圈。','modeling'],
  ['snowflake-schema','雪花模型','Snowflake Schema','维度表再被规范化拆分,形状像雪花的建模结构。','把维度也拆细。','modeling'],
  ['surrogate-key','代理键','Surrogate Key','与业务无关、由系统生成的唯一标识列。','系统自己编的号。','modeling'],
  ['wide-table','宽表','Wide Table','把多个维度与指标预先拼到一起、字段很多的表,便于查询。','一张表什么都带着。','modeling'],

  // 存储与数据湖仓
  ['columnar-storage','列式存储','Columnar Storage','按列而不是按行组织数据,分析场景读得快、压缩率高。','按列打包更省事。','storage'],
  ['object-storage','对象存储','Object Storage','以对象为单位、海量低成本可扩展的存储方式。','便宜好装的大仓库。','storage'],
  ['storage-tiering','存储分层','Storage Tiering','按访问频率把数据放到不同成本的存储介质上。','常用的放近处,不用的放远处。','storage'],
  ['partition-bucket','分区与分桶','Partition and Bucket','按字段切分数据以加速查询与管理的技术手段。','按日期分抽屉。','storage'],
  ['data-format','数据文件格式','Data File Format','数据在文件中如何编码,如文本、Parquet、ORC 等。','数据装进什么盒子。','storage'],
  ['data-compression','数据压缩','Data Compression','用更少空间存储同样的数据,列存下效果尤其明显。','把棉花压成一包。','storage'],
  ['index-storage','索引','Index','为加速查询而建立的辅助结构。','书的目录。','storage'],
  ['hot-cold-data','冷热数据','Hot and Cold Data','访问频繁的热数据与很少访问的冷数据,通常差异化存储。','常翻的与压箱底的。','storage'],

  // 数据采集与集成
  ['data-source','数据源','Data Source','数据的产生地,如业务库、接口、日志、文件与设备。','水的源头。','ingestion'],
  ['data-ingestion','数据采集','Data Ingestion','把数据从源系统取到数据平台并落地的过程。','把水引进来。','ingestion'],
  ['etl-elt','ETL 与 ELT','ETL and ELT','ETL 先转换再加载,ELT 先加载再在目标侧转换。','先做菜再上桌 vs 先上桌再做菜。','ingestion'],
  ['cdc','变更数据捕获','Change Data Capture','只捕获源库中发生变化的记录,而不是全量搬运。','只挑变动的那几条。','ingestion'],
  ['data-sync','数据同步','Data Synchronization','让源与目标的数据保持一致的过程。','两边对齐。','ingestion'],
  ['batch-ingestion','批量采集','Batch Ingestion','按固定周期成批取数,简单稳定但有延迟。','定时拉一车。','ingestion'],
  ['realtime-ingestion','实时采集','Real-time Ingestion','数据产生后很快被采集处理,延迟低。','挖出来就直接送。','ingestion'],
  ['data-interface','数据接口','Data Interface','系统之间交换数据的方式,如 API、文件、消息。','对接的插口。','ingestion'],

  // 数据管道与编排
  ['data-pipeline','数据管道','Data Pipeline','把多个加工步骤按依赖串起来、自动流转的数据流程。','数据的流水线。','pipeline'],
  ['dag','有向无环图','Directed Acyclic Graph','用节点与有向边描述任务依赖、且不构成环的编排结构。','先后顺序画成一张图。','pipeline'],
  ['scheduling','调度','Scheduling','按时间或依赖触发任务运行。','到点就开工。','pipeline'],
  ['orchestration','编排','Orchestration','协调多个任务、处理依赖与失败重试的整体控制。','当总指挥。','pipeline'],
  ['idempotent','幂等','Idempotent','同一操作重复执行多次,结果与执行一次相同。','重跑一遍不会翻倍。','pipeline'],
  ['backfill','重跑与回补','Backfill','对历史时段重新执行任务,补齐缺失或修正后的数据。','把过去那段补上。','pipeline'],
  ['incremental-full','增量与全量','Incremental and Full Load','每次只处理新增变化与每次都整表重做的两种策略。','只搬新的 vs 全部重搬。','pipeline'],
  ['data-observability','数据可观测性','Data Observability','通过指标、日志与血缘,及时发现数据在管道中的异常。','给数据装上仪表盘。','pipeline'],

  // 数据质量
  ['data-quality','数据质量','Data Quality','数据满足使用要求的程度。','数据靠不靠得住。','quality'],
  ['quality-dimensions','数据质量维度','Quality Dimensions','衡量质量的几个方面,如完整性、准确性、一致性、及时性、唯一性、有效性。','从六个角度看靠不靠谱。','quality'],
  ['validity-rule','校验规则','Validation Rule','判断数据是否合规的具体约束,如非空、范围、格式与枚举。','进门先过安检。','quality'],
  ['anomaly-detection','异常检测','Anomaly Detection','自动识别偏离常态的数据或指标波动。','把不对劲的揪出来。','quality'],
  ['data-profiling','数据剖析','Data Profiling','对数据做统计扫描,摸清分布、空值率与取值集合。','先给数据做次体检。','quality'],
  ['root-cause','根因分析','Root Cause Analysis','追查数据问题到底出在哪一环、由什么引起。','顺藤摸到根。','quality'],
  ['quality-sla','数据质量 SLA','Data Quality SLA','对数据可用性、准确性与及时性的可度量承诺。','白纸黑字说清标准。','quality'],
  ['data-quality-score','数据质量分','Data Quality Score','把多个质量维度加权成一个可跟踪的总分。','给数据打个综合分。','quality'],

  // 元数据与数据目录
  ['metadata','元数据','Metadata','描述数据的数据,如表的含义、字段、来源与责任人。','关于数据的数据。','metadata'],
  ['technical-metadata','技术元数据','Technical Metadata','描述存储与结构的技术信息,如库表字段、分区与格式。','机房那边的信息。','metadata'],
  ['business-metadata','业务元数据','Business Metadata','用业务语言描述数据含义、口径与归属的信息。','业务那边的说法。','metadata'],
  ['data-catalog','数据目录','Data Catalog','集中登记与检索数据资产及其元数据的平台。','数据的图书馆。','metadata'],
  ['data-map','数据地图','Data Map','用图形化方式展示数据分布在哪儿、彼此什么关系。','数据藏宝图。','metadata'],
  ['data-tagging','数据打标','Data Tagging','给数据资产贴上分类、敏感度与主题等标签。','给数据贴标签。','metadata'],
  ['catalog-operation','目录运营','Catalog Operation','持续维护数据目录的准确与鲜活,避免「建了没人用」。','图书馆要有人天天整理。','metadata'],

  // 数据血缘与影响分析
  ['data-lineage','数据血缘','Data Lineage','记录数据从哪来、经过哪些加工、流到哪儿去的链路关系。','数据的家谱。','lineage'],
  ['column-lineage','字段级血缘','Column-level Lineage','精确到字段的上下游关系,比表级更细。','细到每一列。','lineage'],
  ['lineage-collection','血缘采集','Lineage Collection','从 SQL 解析、任务日志与人工登记中获取血缘关系。','把家谱一条条补全。','lineage'],
  ['impact-analysis','影响分析','Impact Analysis','上游变更时,评估会波及哪些下游表、任务与报表。','动一处会不会牵一身。','lineage'],
  ['lineage-visualization','血缘可视化','Lineage Visualization','把血缘关系以图形方式呈现,便于观察与排查。','把家谱画出来。','lineage'],
  ['lineage-graph','血缘图谱','Lineage Graph','以节点与边表示数据实体与加工关系的图结构。','一张关系网。','lineage'],

  // 数据标准与主数据
  ['data-standard','数据标准','Data Standard','对数据名称、定义、格式与取值等做出的统一规范。','大家按同一本字典说话。','standard'],
  ['data-element','数据元','Data Element','用一组属性描述的最小数据单位,如名称、类型与长度。','数据的最小积木。','standard'],
  ['code-dictionary','编码与数据字典','Code and Data Dictionary','对取值编码及其含义的统一定义与登记。','给取值定个统一说法。','standard'],
  ['master-data','主数据','Master Data','跨系统共享、相对稳定的核心业务实体数据,如客户与物料。','大家都认的那份基准。','standard'],
  ['reference-data','参考数据','Reference Data','用于分类与参照的相对稳定的编码集合,如行业与地区码。','用来分类的对照表。','standard'],
  ['mdm','主数据管理','Master Data Management','对主数据进行统一建模、清洗、分发与维护的机制。','把基准数据管起来。','standard'],
  ['standard-landing','标准落地','Standard Landing','把数据标准真正嵌入系统与流程,而不是只写在文档里。','别让标准躺在纸上。','standard'],

  // 数据安全与隐私
  ['data-security','数据安全','Data Security','防止数据被泄露、篡改、滥用与丢失的技术与管理措施。','看住数据别出事。','security'],
  ['classification-grading','数据分级分类','Classification and Grading','按数据的敏感与重要程度划分等级并施加对应管控。','先分清谁重要谁随便。','security'],
  ['access-control','访问控制','Access Control','按最小必要原则授予与回收数据访问权限。','谁能拿什么给清楚。','security'],
  ['data-masking','数据脱敏','Data Masking','对敏感字段做变形处理,使非必要人员看不到真实值。','把身份证号打上星号。','security'],
  ['data-encryption','数据加密','Data Encryption','对存储与传输中的数据加密,防止被直接读取。','上一把锁。','security'],
  ['privacy-computing','隐私计算','Privacy Computing','在不暴露原始数据的前提下完成计算的技术集合。','不给你看也能一起算。','security'],
  ['data-export','数据出境','Data Export and Cross-border','数据跨法域传输时的合规评估与安全管控要求。','数据出门要看规矩。','security'],
  ['audit-trace','审计与溯源','Audit and Traceability','记录数据的访问与流转,以便事后追查。','谁动过都留个底。','security'],

  // 数据治理体系
  ['governance-org','治理组织','Governance Organization','承担数据治理决策与协调的组织结构,如数据委员会。','有人拍板有人干活。','governance'],
  ['data-owner','数据责任人','Data Owner','对某类数据的质量、安全与使用负责的业务角色。','这份数据他兜底。','governance'],
  ['data-steward','数据管家','Data Steward','负责日常数据标准、口径与质量事务的执行角色。','天天盯细节的那个人。','governance'],
  ['dcmm','DCMM','Data Management Capability Maturity Model','数据管理能力成熟度评估模型,用于衡量组织数据管理水平的国家标准。','给数据管理打分的尺子。','governance'],
  ['dama','DAMA','Data Management Association','国际数据管理协会,其知识体系被广泛用作治理框架参考。','治理的经典教科书。','governance'],
  ['governance-system','治理体系','Governance System','组织、制度、流程与工具共同构成的治理框架。','一整套规矩加法子。','governance'],
  ['governance-maturity','治理成熟度','Governance Maturity','衡量治理能力从无序到自驱的阶段性水平。','从一团乱到上轨道。','governance'],
  ['governance-landing','治理落地','Governance Landing','把治理机制嵌入业务与系统的实际过程,避免流于形式。','别停在汇报里。','governance'],

  // 数据服务与分析
  ['data-service','数据服务','Data Service','把数据以接口或产品形式提供给使用方消费。','把数据端上桌。','analytics'],
  ['metric-system','指标体系','Metric System','按层级与主题组织的、口径统一的指标集合。','把指标摆成一棵树。','analytics'],
  ['metric-platform','指标平台','Metric Platform','统一定义、计算与分发指标的系统,避免口径各说各话。','指标只在一个地方定义。','analytics'],
  ['self-service-bi','自助分析','Self-service BI','让业务人员不写代码也能拖拽取数与分析的方案。','自己动手查数据。','analytics'],
  ['data-api','数据 API','Data API','以标准接口形式对外提供数据的能力。','数据也能被程序调用。','analytics'],
  ['dashboard','看板','Dashboard','把关键指标集中可视化的界面。','一屏看全局。','analytics'],
  ['data-product','数据产品','Data Product','把数据加工成可直接服务某类用户的成品,如报表与推荐。','数据做成了能卖的东西。','analytics'],

  // 面向 AI 的数据工程
  ['ai-data','AI 数据工程','AI Data Engineering','为模型训练与推理准备、加工与治理数据的工作。','给 AI 备好粮草。','aidata'],
  ['unstructured-data','非结构化数据','Unstructured Data','文本、图像、音频、视频等没有固定表结构的数据。','不存在表格里的那些。','aidata'],
  ['embedding','向量与嵌入','Embedding','把文本或图像转成一串数字,让机器能算相似度。','把意思变成坐标。','aidata'],
  ['vector-db','向量数据库','Vector Database','专门存储与检索向量、支持相似度搜索的数据库。','按「像不像」来找。','aidata'],
  ['feature-store','特征平台','Feature Store','集中管理特征、保证训练与推理口径一致的系统。','特征的中央厨房。','aidata'],
  ['data-labeling','数据标注','Data Labeling','给数据打上标签,供模型学习。','教模型认东西。','aidata'],
  ['data-flywheel','数据飞轮','Data Flywheel','用产品产生的数据持续改进模型、模型又提升产品体验的循环。','越用越聪明。','aidata'],
  ['training-data-gov','训练数据治理','Training Data Governance','对训练数据的来源、授权、质量与合规进行管理。','喂给模型的东西也要管。','aidata'],

  // 实战案例
  ['platform-build','数据平台建设','Data Platform Build','从需求、选型到落地运营建设数据平台的完整过程。','从零搭起一套。','practice'],
  ['data-team','数据团队','Data Team','由数据工程师、分析师、治理与产品角色构成的协作组织。','干数据的那拨人。','practice'],
  ['data-debt','数据债','Data Debt','为赶进度而留下的口径不一、表结构混乱与技术欠账。','早晚要还的账。','practice'],
  ['governance-case','治理案例','Governance Case','组织推进数据治理的实际案例与经验教训。','别人踩过的坑。','practice'],
  ['quality-case','质量案例','Quality Case','数据质量问题从发现到根因定位与修复的典型案例。','一次救火的全过程。','practice'],
  ['mdm-case','主数据案例','MDM Case','主数据统一与分发落地的实际案例。','把基准数据统一起来的过程。','practice'],
  ['ai-ready-data','AI-ready 数据','AI-ready Data','质量、可获取性与合规都达到可供模型使用标准的数据。','随时能喂给模型的数据。','practice'],
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
/* 模块完整性校验:模块表里有,但 _src 里没写内容的模块要报错 */
MODULES.forEach(m => { if (!L[m[0]] || !L[m[0]].length) errors.push('模块 ' + m[0] + ' 没有任何课时内容'); });
/* 反向校验:_src 里写了但模块表里没有的模块 */
Object.keys(L).forEach(k => { if (!moduleIds.has(k) && L[k] && L[k].length) errors.push('_src 中的模块 ' + k + ' 未登记在 MODULES 中'); });
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js */
const mods = MODULES.map((m, i) => ({ id: m[0], order: i, title: m[1], desc: m[2], lessons: (L[m[0]] || []).length, tag: m[3], en: m[4] }));
let s = '/* 模块元数据 + 学习路径(数据工程与数据治理)(自动生成,勿手改) */\n';
s += 'window.DEG = window.DEG || {};\n';
s += 'DEG.modules = ' + J(mods) + ';\n';
s += 'DEG.path = ' + J(path_) + ';\n';
s += 'DEG.totalLessons = DEG.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(数据工程与数据治理)(自动生成) {id,name,en,def,analogy,module} */\nwindow.DEG = window.DEG || {};\nDEG.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nDEG.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html(幂等:<!--LESSONS--> 标记常驻,重复 build 不损耗) */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') === -1) {
  if (/<!-- Lessons[\s\S]*?<\/body>/.test(idx)) {
    idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!--LESSONS-->\n\n</body>');
  } else if (/<script src="content\/terms\.js"><\/script>/.test(idx)) {
    idx = idx.replace('<script src="content/terms.js"></script>',
      '<script src="content/terms.js"></script>\n<!--LESSONS-->');
  } else {
    console.error('注入失败: index.html 既无 <!--LESSONS--> 标记也无可识别的旧结构。');
    process.exit(1);
  }
}
idx = idx.replace(/<script src="content\/(?!modules\.js|terms\.js)[^"]*"><\/script>\s*/g, '');
idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n') + '\n<!--LESSONS-->');
const injected = (idx.match(/<script src="content\//g) || []).length - 2;
if (injected !== scriptTags.length) {
  console.error('注入校验失败: index.html 课时标签 ' + injected + ' 个 != 应注入 ' + scriptTags.length + ' 个。');
  process.exit(1);
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
