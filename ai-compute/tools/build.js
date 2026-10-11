/* AI 算力基础设施与算电协同 · 单一数据源生成器。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

   ⚠️ 时效性约定:凡涉及芯片与互联标准、液冷路线、能效政策口径、电价与算力价格的具体内容,
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
  ['guide','导览','怎么用这个站、AI 算力基础设施是什么、和电力什么关系、学习路线','基础','Guide'],
  ['compute','算力到底是什么','算力单位与精度、训练与推理、参数量与尺度定律、稠密与稀疏、度量口径','基础','What is Compute'],
  ['accelerator','加速卡与超节点','GPU 与 NPU、加速卡形态、HBM 显存、卡间互联、超节点、纵向与横向扩展、芯粒、国产芯片','核心','Accelerators'],
  ['cluster','集群组网与并行','算力集群、RDMA 与 RoCE、InfiniBand、拓扑、集合通信、数据与模型并行','核心','Cluster and Parallelism'],
  ['training','训练侧','预训练、微调、SFT 与 RLHF、检查点、MFU、梯度同步、训练集群','核心','Training'],
  ['inference','推理侧','推理流程、首 token 时延与吞吐、批处理、KV Cache、量化、蒸馏、P/D 分离','核心','Inference'],
  ['tokencost','Token 成本与算力经济','Token 成本、每百万 token 成本、利用率、CAPEX 与 OPEX、TCO、Token 工厂、成本模型','核心','Token Economy'],
  ['power','数据中心电气','供电架构、UPS 与 HVDC、变压器、柴发、母线槽、PDU、机柜功率密度、冗余、并网','核心','Data Center Power'],
  ['cooling','散热与 PUE','PUE、风冷与液冷、冷板、浸没、CDU、背板换热、自然冷却、冷却塔、余热回收','核心','Cooling and PUE'],
  ['aiload','AI 负荷与电网','AI 负荷特性、负荷波动、电能质量、谐波、冲击性负荷、需求响应、网荷互动、负荷预测','进阶','AI Load and Grid'],
  ['site','智算中心选址与建设','智算中心、选址要素、绿电直供、时延圈、建设模式、托管、模块化、建设周期','进阶','Site and Build'],
  ['network','算力网络与调度','算力网络、算力调度、东数西算、算力交易、DCI、全光网络、边缘推理、度量与标识','进阶','Computing Network'],
  ['synergy','算电协同','算电协同、时空转移、绿电消纳、柔性负荷、虚拟电厂、削峰填谷、电算联合调度、碳感知计算','进阶','Compute-Power Synergy'],
  ['policy','政策标准与合规','双碳目标、绿色数据中心政策、能效标准、碳足迹、绿证、PUE 准入、算力枢纽、合规','应用','Policy and Standards'],
  ['practice','实战与展望','典型案例、投资回报、迁移路径、AI-ready 数据中心、路线图、发展趋势、算电融合','应用','Practice'],
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 导览
  ['ai-compute-infra','AI 算力基础设施','AI Compute Infrastructure','支撑大模型训练与推理的算力硬件、网络、供电与散热系统的总称。','给 AI 盖机房的全部家当。','guide'],
  ['compute-power-term','算力','Compute Power','单位时间内完成运算的能力,通常用每秒浮点运算次数衡量。','机器算得快不快。','guide'],
  ['token-term','Token','Token','大模型处理文本的最小单位,模型按 token 计费、按 token 消耗算力。','AI 眼里的半个字或一个词。','guide'],
  ['compute-power-synergy','算电协同','Compute-Power Synergy','把算力负荷的时空弹性与电力供需特性结合起来调度,降低用电成本、提升绿电消纳。','让算力跟着电走。','guide'],
  ['ai-infra-stack','AI 算力技术栈','AI Infrastructure Stack','从芯片、互联、集群、框架到平台的完整分层技术体系。','从沙子到智能的一整套。','guide'],

  // 算力到底是什么
  ['flops','FLOPS','Floating-point Operations Per Second','每秒浮点运算次数,衡量算力大小的基本单位。','一秒能算多少次。','compute'],
  ['precision','计算精度','Precision','用多少位二进制表示一个数,常见 FP32/FP16/FP8/INT8,精度越低越快越省。','一个数保留几位小数。','compute'],
  ['training-inference','训练与推理','Training and Inference','训练是让模型从数据中学到参数,推理是用学好的模型做预测,两者负载特征不同。','上学和上班。','compute'],
  ['model-parameters','模型参数量','Model Parameters','模型中可学习权重的数量,通常以 B(十亿)为单位,决定算力与显存需求。','模型的脑容量。','compute'],
  ['scaling-law','尺度定律','Scaling Law','描述模型性能随参数量、数据量与算力增加而规律性提升的经验规律。','堆料就变强的经验公式。','compute'],
  ['moe','稀疏专家模型','Mixture of Experts','把大模型拆成多个专家子网络,每次只激活一部分,用更少算力换更大参数。','每次只叫几个专家上班。','compute'],
  ['dense-model','稠密模型','Dense Model','每次计算都激活全部参数的常规模型,与稀疏模型相对。','每个神经元都得干活。','compute'],
  ['compute-measure','算力度量','Compute Measurement','对算力规模与利用效率进行量化衡量,常用 PetaFLOPS、EFLOPS 等口径。','算力怎么报数。','compute'],
  ['workload-type','负载类型','Workload Type','按训练、推理、科学计算等特征划分的计算任务类型,对应不同硬件配置。','算力拿来干什么。','compute'],

  // 加速卡与超节点
  ['gpu-acc','GPU','Graphics Processing Unit','最初用于图形渲染、因高度并行而成为 AI 训练主力芯片的处理器。','能同时干几千件事的处理器。','accelerator'],
  ['npu','NPU','Neural Processing Unit','面向神经网络计算专门优化的处理器,常用于推理场景。','只擅长做 AI 的专用芯片。','accelerator'],
  ['accelerator-card','加速卡','Accelerator Card','插入服务器、承担 AI 计算的板卡,通常集成芯片与显存。','插在机器里的算力板。','accelerator'],
  ['hbm','HBM','High Bandwidth Memory','与 GPU 封装在一起的高带宽显存,决定模型能否装得下、算得快。','贴在芯片边上的高速内存。','accelerator'],
  ['card-interconnect','卡间互联','Card Interconnect','多张加速卡之间高速交换数据的总线,如 NVLink,带宽决定集群效率。','卡和卡之间说话的话筒。','accelerator'],
  ['supernode','超节点','Supernode','把几十上百张卡通过高速互联组成一个逻辑上的大计算单元。','一屋子卡当一个用。','accelerator'],
  ['scale-up','纵向扩展','Scale-up','在单机内增加卡数或提升单卡能力来扩算力,受互联与散热限制。','把一台机器做得更大。','accelerator'],
  ['scale-out','横向扩展','Scale-out','通过增加机器数量来扩算力,靠网络把多机连成集群。','多买几台机器。','accelerator'],
  ['chiplet','芯粒','Chiplet','把一颗大芯片拆成多个小裸片再封装在一起,提升良率与灵活性。','拼积木式做芯片。','accelerator'],
  ['domestic-accelerator','国产算力芯片','Domestic Accelerator','国内设计制造的 AI 加速芯片及其配套生态,是算力自主可控的关键。','自家的算力芯。','accelerator'],

  // 集群组网与并行
  ['compute-cluster','算力集群','Compute Cluster','由大量服务器与加速卡通过网络连成的整体计算资源池。','一群机器合体。','cluster'],
  ['rdma','RDMA','Remote Direct Memory Access','让一台机器的内存被另一台直接读写、绕过 CPU 与内核的网络技术。','机器之间直接掏内存。','cluster'],
  ['roce','RoCE','RDMA over Converged Ethernet','在以太网上实现 RDMA 的技术,成本低但依赖无损网络。','用普通网线跑高速直连。','cluster'],
  ['infiniband','InfiniBand','InfiniBand','专为高性能计算设计的网络技术,时延低、带宽高、成本也高。','顶级赛道专用高速路。','cluster'],
  ['fat-tree','胖树拓扑','Fat-tree','一种常见的数据中心网络拓扑,上下层级带宽收敛比接近 1,适合大规模集群。','越往上路越宽的网络。','cluster'],
  ['rail-optimized','Rail-Optimized','Rail-Optimized','让同一位置的多张网卡接到同一台交换机、形成平行轨道的组网方式。','每人走自己那条道。','cluster'],
  ['collective-comm','集合通信','Collective Communication','多卡多机同时参与的数据交换操作,如广播、规约、AllReduce。','大家一起对答案。','cluster'],
  ['data-parallel','数据并行','Data Parallelism','把数据切分给多张卡,各自算梯度再汇总,是最常用的并行方式。','人多好分活。','cluster'],
  ['model-parallel','模型并行','Model Parallelism','把模型本身切分到多张卡上,解决单卡装不下大模型的问题。','一个大模型拆开扛。','cluster'],

  // 训练侧
  ['pre-training','预训练','Pre-training','在海量通用数据上从零训练大模型,是最耗算力的阶段。','打地基。','training'],
  ['fine-tuning','微调','Fine-tuning','在预训练模型基础上用特定数据继续训练,使其适配具体任务。','地基上做装修。','training'],
  ['sft','监督微调','Supervised Fine-tuning','用人工标注的问答对微调模型,教它按指令回答。','老师手把手教。','training'],
  ['rlhf','人类反馈强化学习','RLHF','用人类偏好数据训练奖励模型,再用强化学习优化模型输出。','按人类口味调教。','training'],
  ['checkpoint','检查点','Checkpoint','训练过程中定期保存的模型状态,用于断点续训与容错。','存档点。','training'],
  ['mfu','模型算力利用率','MFU','实际达到的算力与硬件峰值算力的比值,衡量训练效率。','买来的算力用了多少。','training'],
  ['gradient-sync','梯度同步','Gradient Synchronization','数据并行中把各卡算出的梯度汇总同步的过程,是通信瓶颈所在。','把大家的结果凑一起。','training'],
  ['training-cluster-spec','训练集群','Training Cluster','为大规模训练专门构建、强调高速互联与稳定性的算力集群。','专门练模型的那片机器。','training'],

  // 推理侧
  ['inference-serve','推理','Inference','用训练好的模型对输入做前向计算并给出输出的过程。','学完开始干活。','inference'],
  ['ttft','首 token 时延','TTFT','从用户发出请求到收到第一个输出 token 的时间,直接影响体感。','等了多久才开口。','inference'],
  ['tpot','单 token 输出时延','TPOT','生成每个后续 token 的平均时间,决定说话快不快。','吐字速度。','inference'],
  ['throughput-inf','吞吐','Throughput','单位时间内处理的请求数或 token 数,决定单位成本。','一小时能服务多少人。','inference'],
  ['continuous-batching','连续批处理','Continuous Batching','让不同请求动态拼接成批、完成即出队的调度方式,大幅提升吞吐。','流水线不等人。','inference'],
  ['kv-cache','KV Cache','KV Cache','缓存已计算的注意力键值,避免重复计算,是推理显存的主要占用者。','把算过的先记下来。','inference'],
  ['quantization','量化','Quantization','用更低位宽表示模型权重与激活,降低显存与算力需求。','把数压缩小一号。','inference'],
  ['distillation','蒸馏','Distillation','用大模型指导小模型学习,让小模型接近大模型的效果。','大带小。','inference'],
  ['pd-separation','P/D 分离','Prefill-Decode Disaggregation','把推理的预填充阶段与解码阶段拆到不同硬件上分别优化。','两个工位各干各的。','inference'],

  // Token 成本与算力经济
  ['token-cost-term','Token 成本','Token Cost','每处理一个 token 所对应的硬件、电费与折旧分摊成本。','每个字多少钱。','tokencost'],
  ['cost-per-million','每百万 token 成本','Cost per Million Tokens','行业常用的算力成本口径,便于横向比较不同方案。','按百万字报价。','tokencost'],
  ['utilization','利用率','Utilization','加速卡实际用于计算的时间占比,利用率低则单位成本高。','机器有多少时间在真干活。','tokencost'],
  ['capex','资本支出','CAPEX','购买硬件、建设机房等一次性投入。','一次性掏的钱。','tokencost'],
  ['opex','运营支出','OPEX','电费、带宽、运维等持续性支出。','每月都得掏的钱。','tokencost'],
  ['tco-aic','总拥有成本','TCO','设备全生命周期内的资本与运营支出总和。','从头到尾一共花多少。','tokencost'],
  ['token-factory','Token 工厂','Token Factory','把算力、电力与运维打包成稳定产出 token 的运营模式。','算力的流水线工厂。','tokencost'],
  ['cost-model-aic','算力成本模型','Compute Cost Model','把硬件折旧、电费、PUE、利用率等参数纳入的单 token 成本计算框架。','算成本的那张表。','tokencost'],

  // 数据中心电气
  ['data-center','数据中心','Data Center','集中放置服务器并提供供电、制冷与网络保障的设施。','机器的家。','power'],
  ['ups','UPS','Uninterruptible Power Supply','市电中断时继续供电的储能装置,保障负载不断电。','断电时的应急电池。','power'],
  ['hvdc','高压直流','HVDC','把交流整流为高压直流后集中供电,减少变换环节、提升效率。','一次变好再分下去。','power'],
  ['dc-transformer','数据中心变压器','Data Center Transformer','把中压市电降压到数据中心可用电压的变压器。','进门的电压转换站。','power'],
  ['diesel-generator','柴油发电机','Diesel Generator','市电与 UPS 都失效时的最后一级后备电源。','最后的保命电。','power'],
  ['busway','母线槽','Busway','在机房内替代大量电缆的模块化导电排,便于分接与扩容。','一排大插线板。','power'],
  ['pdu','配电单元','PDU','机柜内把电力分配到各服务器的配电装置,分基本型与智能型。','机柜里的插排。','power'],
  ['rack-power-density','机柜功率密度','Rack Power Density','单个机柜承载的功率,AI 机柜可达几十到上百千瓦,是供电与散热的起点。','一个柜子吃多少电。','power'],
  ['power-redundancy','供电冗余','Power Redundancy','用 N+1、2N 等方式配置冗余,任一路故障仍能供电。','坏一路还有备胎。','power'],
  ['grid-connection-dc','数据中心并网','Data Center Grid Connection','数据中心与电网的接入方式与报装容量,大负荷项目常需专门接入方案。','机房怎么接到电网上。','power'],

  // 散热与 PUE
  ['pue','电能利用效率','PUE','数据中心总用电与 IT 设备用电的比值,越接近 1 越节能。','花的电有多少用在正事上。','cooling'],
  ['liquid-cooling','液冷','Liquid Cooling','用液体代替空气带走热量,散热能力远高于风冷。','拿水当风扇。','cooling'],
  ['cold-plate','冷板液冷','Cold Plate Cooling','把冷板贴在芯片上、液体在板内流动带走热量,改造量小。','给芯片贴个水冷头。','cooling'],
  ['immersion-cooling','浸没式液冷','Immersion Cooling','把整台服务器泡在绝缘冷却液里散热,散热最强但改造成本高。','把服务器泡澡。','cooling'],
  ['cdu','冷量分配单元','CDU','液冷系统中负责分配与换热冷却液的关键设备。','液冷的泵站加换热器。','cooling'],
  ['rear-door-hx','背板换热','Rear-door Heat Exchanger','装在机柜背面的换热器,用液体带走出风热量,适合改造场景。','装在柜子后面的散热片。','cooling'],
  ['free-cooling','自然冷却','Free Cooling','利用室外低温空气或水直接散热,减少压缩机能耗。','天冷了就用老天帮忙。','cooling'],
  ['cooling-tower','冷却塔','Cooling Tower','把系统热量排到大气的水冷散热设备。','把热水吹凉。','cooling'],
  ['waste-heat-recovery','余热回收','Waste Heat Recovery','把数据中心产生的废热回收用于供暖或生产,提升整体能效。','废热也别浪费。','cooling'],
  ['thermal-design-power','散热设计功率','Thermal Design Power','为散热系统设计所依据的功率上限,决定制冷配置。','按最高发热配空调。','cooling'],

  // AI 负荷与电网
  ['ai-load-term','AI 负荷','AI Load','数据中心算力设备形成的用电负荷,具有高密度、波动大、对电能质量敏感的特点。','机房吃电的样子。','aiload'],
  ['load-fluctuation-ai','负荷波动','Load Fluctuation','AI 训练与推理任务切换导致的用电功率快速变化。','用电忽高忽低。','aiload'],
  ['power-quality','电能质量','Power Quality','电压、频率、谐波等指标满足要求的程度,直接影响设备稳定运行。','电干不干净。','aiload'],
  ['harmonic','谐波','Harmonic','非线性负载产生的非基波分量,会造成损耗与设备发热。','电网里的杂音。','aiload'],
  ['shock-load','冲击性负荷','Shock Load','功率在极短时间内剧烈变化的负荷,对电网冲击大。','一脚油门一脚刹车。','aiload'],
  ['demand-response','需求响应','Demand Response','用户按电网信号主动调整用电,参与平衡并获取收益。','该让电的时候让一让。','aiload'],
  ['grid-load-interaction','网荷互动','Grid-Load Interaction','电网与用电负荷之间双向感知、协同调节的关系。','电网和机房商量着来。','aiload'],
  ['ai-load-forecast','AI 负荷预测','AI Load Forecasting','对数据中心用电功率进行预测,为供电与调度提供依据。','猜机房下一步吃多少电。','aiload'],

  // 智算中心选址与建设
  ['intelligent-computing-center','智算中心','Intelligent Computing Center','以 AI 算力为主、面向训练与推理的新一代数据中心。','专门给 AI 用的机房。','site'],
  ['dc-site-selection','选址','Site Selection','综合考虑电力、网络、气候、政策与人才等因素确定建设地点。','房子盖在哪儿。','site'],
  ['green-power-direct','绿电直供','Green Power Direct Supply','新能源电站直接向数据中心供电,减少中间环节与碳排放。','风电光伏直接拉根线过来。','site'],
  ['latency-ring','时延圈','Latency Ring','以用户或业务为中心、按可接受时延划分的圈层,决定推理节点放哪。','离用户多近。','site'],
  ['build-mode','建设模式','Build Mode','自建、合建、租赁等不同的数据中心建设与运营方式。','自己盖还是租。','site'],
  ['colocation','托管','Colocation','把服务器托管到第三方数据中心,按机柜与电力付费。','租别人的机房放机器。','site'],
  ['modular-dc','模块化数据中心','Modular Data Center','把供电制冷做成标准化模块、按需拼装的建站方式,建设周期短。','像搭积木一样盖机房。','site'],
  ['construction-cycle','建设周期','Construction Cycle','从立项到投产所需的时间,电力接入常是关键路径。','多久能通电用上。','site'],

  // 算力网络与调度
  ['computing-network','算力网络','Computing Power Network','把分散的算力资源通过网络连成一张可按需调用的网。','算力版的电网。','network'],
  ['compute-scheduling','算力调度','Compute Scheduling','按任务需求与资源状态把计算任务分配到合适节点的过程。','把活派给合适的机器。','network'],
  ['east-data-west-compute','东数西算','East Data West Computing','把东部数据送到西部算力枢纽处理的全国性资源优化布局。','东边的活西边干。','network'],
  ['computing-power-trading','算力交易','Computing Power Trading','把算力作为商品进行撮合、计量与结算的机制。','算力也能买卖。','network'],
  ['dci','数据中心互联','DCI','数据中心之间的高速网络互联,支撑跨中心的数据与算力协同。','机房之间拉专线。','network'],
  ['all-optical-network','全光网络','All-Optical Network','信号全程以光形式传输、减少电光转换的网络,时延低带宽大。','一路光到底。','network'],
  ['edge-inference-net','边缘推理','Edge Inference','把推理放在靠近用户的边缘节点,降低时延与回传压力。','把算力搬到用户边上。','network'],
  ['computing-measure-net','算力度量与标识','Compute Measurement and Identity','对算力资源进行统一度量、标识与调度描述的标准方法。','给算力发身份证。','network'],

  // 算电协同
  ['compute-power-coordination','算电协同','Compute-Power Coordination','统筹算力任务的时空分布与电力供需,实现降本与增绿。','算力和电力一起排班。','synergy'],
  ['spatiotemporal-transfer','时空转移','Spatiotemporal Transfer','把可延迟的算力任务在时间或空间上迁移,以匹配电力条件。','把活挪到电便宜的时候和地方。','synergy'],
  ['green-power-consumption','绿电消纳','Green Power Consumption','让风电光伏等绿色电力被有效使用而不被弃掉。','把绿电用掉别浪费。','synergy'],
  ['flexible-load','柔性负荷','Flexible Load','用电时间或功率可以调节的负荷,是参与电网平衡的资源。','能商量着用电的负荷。','synergy'],
  ['vpp','虚拟电厂','VPP','把分散的可调资源聚合起来、像一座电厂一样参与电网调度。','把散户凑成一个大电厂。','synergy'],
  ['peak-shaving','削峰填谷','Peak Shaving and Valley Filling','在用电高峰少用、低谷多用,平抑负荷曲线。','高峰让路、低谷充电。','synergy'],
  ['joint-scheduling','电算联合调度','Joint Power-Compute Scheduling','把电力调度与算力调度放在一个优化框架里协同决策。','一张表排两种班。','synergy'],
  ['carbon-aware-computing','碳感知计算','Carbon-aware Computing','根据实时碳强度安排算力任务,降低碳排放。','挑碳少的时候算。','synergy'],
  ['curtailment-absorption','弃电消纳','Curtailment Absorption','利用算力负荷的弹性消纳原本会被弃掉的新能源电量。','让机房吃掉弃风弃光。','synergy'],
  ['backup-power-reuse','备用电源复用','Backup Power Reuse','把数据中心的柴发或储能纳入电网调节资源池使用。','平时搁着的备用电也来帮忙。','synergy'],

  // 政策标准与合规
  ['dual-carbon','双碳目标','Dual Carbon Goals','碳达峰与碳中和的战略目标,是数据中心绿色化的政策背景。','碳达峰加碳中和。','policy'],
  ['green-dc-policy','绿色数据中心政策','Green Data Center Policy','推动数据中心节能降碳、提升能效的政策体系。','国家对机房的绿色要求。','policy'],
  ['energy-efficiency-standard','能效标准','Energy Efficiency Standard','对数据中心 PUE 等能效指标提出的强制性或引导性要求。','能耗得达标。','policy'],
  ['carbon-footprint-dc','碳足迹','Carbon Footprint','数据中心全生命周期产生的温室气体排放总量。','一共排了多少碳。','policy'],
  ['green-certificate','绿证','Green Certificate','可再生能源电力消费的凭证,可用于证明绿电使用。','用了绿电的证明。','policy'],
  ['pue-requirement','PUE 准入门槛','PUE Threshold','新建数据中心在审批或评级时需满足的 PUE 上限要求。','能效及格线。','policy'],
  ['computing-hub','国家算力枢纽','National Computing Hub','国家批复的算力枢纽节点与集群,承担全国算力布局任务。','国家指定的算力基地。','policy'],
  ['compliance-aic','算力合规','Compute Compliance','数据安全、跨境、出口管制与能效等对算力设施的合规要求。','哪些红线不能碰。','policy'],

  // 实战与展望
  ['case-aic','典型案例','Case Study','训练集群建设、绿电直供、算电协同等实践案例。','别人是怎么做的。','practice'],
  ['roi-aic','投资回报','ROI','算力投资的收益与投入之比,是项目决策的核心指标。','投的钱赚不赚得回来。','practice'],
  ['migration-path','迁移路径','Migration Path','从现有数据中心向 AI-ready 架构演进的阶段性方案。','一步步怎么改。','practice'],
  ['ai-ready-dc','AI-ready 数据中心','AI-ready Data Center','在供电、散热与网络上为高密度 AI 负载做好准备的机房。','为 AI 准备好的机房。','practice'],
  ['roadmap-aic','建设路线图','Roadmap','分阶段推进算力与算电协同建设的实施计划。','先干啥后干啥。','practice'],
  ['trend-aic','发展趋势','Trend','算电融合、绿色低碳、国产化与算网一体等演进方向。','接下来往哪走。','practice'],
  ['energy-compute-fusion','算电融合','Energy-Compute Fusion','算力设施与能源系统深度耦合、相互支撑的发展形态。','算力和电力长在一起。','practice'],
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
let s = '/* 模块元数据 + 学习路径(AI 算力基础设施与算电协同)(自动生成,勿手改) */\n';
s += 'window.AIC = window.AIC || {};\n';
s += 'AIC.modules = ' + J(mods) + ';\n';
s += 'AIC.path = ' + J(path_) + ';\n';
s += 'AIC.totalLessons = AIC.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(AI 算力基础设施与算电协同)(自动生成) {id,name,en,def,analogy,module} */\nwindow.AIC = window.AIC || {};\nAIC.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nAIC.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
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
