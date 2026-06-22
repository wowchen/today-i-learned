/* 术语表(系统分析师)。每条:{id,name,en,def,analogy,module}
   正文用 <gd data-term="id">词</gd> 引用;随模块逐步扩充。 */
window.SAN = window.SAN || {};

SAN.terms = [
  /* ── 计算机系统基础 ── */
  { id: 'pipeline', name: '流水线', en: 'Pipeline', def: '把一条指令拆成取指、译码、执行等阶段重叠进行,提高吞吐率。', analogy: '洗车流水线:前一辆打蜡时后一辆已在冲水。', module: 'comp' },
  { id: 'cache', name: '高速缓存 Cache', en: 'Cache', def: 'CPU与主存之间的高速小容量存储,存放近期最常用数据,缓解速度差。', analogy: '常用文件放手边抽屉,不必每次去仓库。', module: 'comp' },
  { id: 'hamming', name: '海明码', en: 'Hamming Code', def: '插入校验位的纠错码,校验位数 r 满足 2^r≥m+r+1,能纠一位错。', analogy: '给数据加定位标尺,出错一对就知哪位翻了。', module: 'comp' },
  { id: 'crc', name: '循环冗余校验', en: 'CRC', def: '用多项式除法生成校验码,检错强,一般只检错不纠错。', analogy: '给包裹算指纹,对不上就知坏了。', module: 'comp' },
  { id: 'parity', name: '奇偶校验', en: 'Parity', def: '加一位使1的个数为奇/偶,只能检一位错、不能纠。', analogy: '凑单双,变了就知有人动过。', module: 'comp' },
  { id: 'dma', name: 'DMA', en: 'Direct Memory Access', def: '外设与内存直接成块传数据,CPU仅在首尾介入,效率高。', analogy: '快递直送到家,不用你逐件去搬。', module: 'comp' },
  { id: 'raid', name: '磁盘阵列 RAID', en: 'RAID', def: '多块磁盘组阵列,用条带/镜像/校验提升性能或可靠性,如RAID0/1/5/10。', analogy: '多块硬盘组队,有的拼速度有的拼备份。', module: 'comp' },

  /* ── 操作系统 ── */
  { id: 'process', name: '进程', en: 'Process', def: '程序的一次执行,是资源分配的基本单位,有独立地址空间。', analogy: '一个正在运行的App,有独立房间和家当。', module: 'os' },
  { id: 'thread', name: '线程', en: 'Thread', def: 'CPU调度的基本单位,同进程内线程共享资源,切换开销小。', analogy: '同一房间里干活的几个人,共用桌椅。', module: 'os' },
  { id: 'semaphore', name: '信号量 PV', en: 'Semaphore', def: '进程同步与互斥的整型变量,P申请(减1)、V释放(加1)。', analogy: '停车场剩余车位牌:进一减一,满了等。', module: 'os' },
  { id: 'deadlock', name: '死锁', en: 'Deadlock', def: '多进程互持对方所需资源都不释放而永久等待;需同时满足互斥、占有等待、不可剥夺、循环等待。', analogy: '两人过独木桥走到中间互不相让。', module: 'os' },
  { id: 'virtual-memory', name: '虚拟存储', en: 'Virtual Memory', def: '把部分外存当内存用,使程序可在小于自身的内存中运行,靠局部性换页。', analogy: '桌子小就把暂不用的资料放抽屉。', module: 'os' },
  { id: 'paging', name: '分页', en: 'Paging', def: '把内存和程序切成固定大小的页,按页映射调入,解决外部碎片。', analogy: '把书按固定页数撕成小册,用哪页拿哪页。', module: 'os' },

  /* ── 数据库系统 ── */
  { id: 'three-schema', name: '三级模式', en: 'Three-Schema', def: '外模式(视图)、概念模式(全局逻辑)、内模式(物理),两级映像保证数据独立性。', analogy: '效果图、设计图、施工图各看各的。', module: 'db' },
  { id: 'er-model', name: 'ER模型', en: 'Entity-Relationship', def: '用实体、属性、联系描述现实的概念数据模型,概念设计主要工具。', analogy: '画"谁和谁有什么关系"的关系网。', module: 'db' },
  { id: 'normal-form', name: '范式', en: 'Normal Form', def: '规范化等级:1NF原子、2NF消部分依赖、3NF消传递依赖、BCNF,越高冗余越少。', analogy: '把乱表越拆越干净,减少重复。', module: 'db' },
  { id: 'functional-dependency', name: '函数依赖', en: 'Functional Dependency', def: 'X确定则Y唯一确定,记X→Y,是规范化分析的基础。', analogy: '知道学号就唯一知道姓名。', module: 'db' },
  { id: 'transaction', name: '事务', en: 'Transaction', def: '要么全做要么全不做的一组操作,具备ACID。', analogy: '转账:扣款和到账必须一起成功。', module: 'db' },
  { id: 'concurrency-control', name: '并发控制', en: 'Concurrency Control', def: '协调多事务同时访问,避免丢失修改、脏读等,常用封锁。', analogy: '多人改同一文档,要有规则防覆盖。', module: 'db' },
  { id: 'distributed-db', name: '分布式数据库', en: 'Distributed Database', def: '数据分布多节点、逻辑统一,涉及分片复制与分布式事务,遵循CAP权衡。', analogy: '连锁店各店有库存,总部看统一账本。', module: 'db' },
  { id: 'data-warehouse', name: '数据仓库', en: 'Data Warehouse', def: '面向主题、集成、稳定、反映历史的数据集合,用于分析(OLAP),区别于OLTP。', analogy: '把各部门流水汇成历史大账本供分析。', module: 'db' },

  /* ── 网络与信息安全 ── */
  { id: 'osi', name: 'OSI七层', en: 'OSI Model', def: '物理、数据链路、网络、传输、会话、表示、应用七层,各层职责清晰。', analogy: '寄快递的分工:打包贴单运输签收。', module: 'net' },
  { id: 'tcpip', name: 'TCP/IP模型', en: 'TCP/IP', def: '实用四层协议族;TCP可靠面向连接,UDP高效无连接。', analogy: '互联网真正跑的快递系统。', module: 'net' },
  { id: 'subnet', name: '子网划分', en: 'Subnetting', def: '用子网掩码把网络划分为多子网,提高地址利用率,涉及网络位/主机位计算。', analogy: '大楼按楼层分区,各区独立门牌。', module: 'net' },
  { id: 'symmetric', name: '对称加密', en: 'Symmetric', def: '加解密同一密钥,快、适合大数据,但密钥分发难,如DES/AES。', analogy: '同一把钥匙开关同一把锁。', module: 'net' },
  { id: 'asymmetric', name: '非对称加密', en: 'Asymmetric', def: '公钥加密私钥解(或反之),解决密钥分发但慢,如RSA。', analogy: '公开投信口谁都能投,只有你能取信。', module: 'net' },
  { id: 'hash', name: '散列/摘要', en: 'Hash', def: '把任意数据映射成定长摘要,不可逆、雪崩,用于完整性,如SHA-256。', analogy: '给文件算指纹,内容一改指纹全变。', module: 'net' },
  { id: 'digital-signature', name: '数字签名', en: 'Digital Signature', def: '发送方私钥对摘要加密,接收方用其公钥验,保证完整性、认证、不可否认。', analogy: '只有你能盖、人人能验真伪的电子手章。', module: 'net' },
  { id: 'pki', name: 'PKI', en: 'Public Key Infrastructure', def: '靠CA签发数字证书把公钥与身份绑定,解决"公钥是谁的"。', analogy: '权威机构发的身份证体系。', module: 'net' },

  /* ── 软件工程 ── */
  { id: 'cmmi', name: 'CMMI', en: 'Capability Maturity Model Integration', def: '软件能力成熟度模型集成,5级:初始、已管理、已定义、量化管理、优化。', analogy: '过程成熟度的段位系统。', module: 'se' },
  { id: 'coupling', name: '耦合', en: 'Coupling', def: '模块间相互依赖的紧密程度,越低越好。', analogy: '积木粘太死,换一块要拆一片。', module: 'se' },
  { id: 'cohesion', name: '内聚', en: 'Cohesion', def: '模块内部围绕单一职责的紧密程度,越高越好。', analogy: '一个部门只干一类事,职责清晰。', module: 'se' },
  { id: 'blackbox', name: '黑盒测试', en: 'Black-box', def: '不看内部、按功能规格测试,如等价类、边界值。', analogy: '只看按钮按下灯亮不亮。', module: 'se' },
  { id: 'whitebox', name: '白盒测试', en: 'White-box', def: '基于代码逻辑设计用例,关注语句/分支/路径覆盖。', analogy: '拆开机器顺每条线路走一遍。', module: 'se' },
  { id: 'critical-path', name: '关键路径', en: 'Critical Path', def: '网络图中最长路径,决定项目最短工期,其上活动总时差为零。', analogy: '做饭里最耗时那道菜决定上菜时间。', module: 'se' },
  { id: 'evm', name: '挣值管理', en: 'Earned Value', def: '整合范围/进度/成本的绩效测量,用PV、EV、AC衡量项目健康。', analogy: '项目的体检报告。', module: 'se' },

  /* ── 需求工程 ── */
  { id: 'requirement', name: '需求', en: 'Requirement', def: '用户对系统的期望与约束,分功能需求与非功能需求(质量属性)。', analogy: '盖房前业主提的所有要求。', module: 'req' },
  { id: 'nonfunctional-req', name: '非功能需求', en: 'Non-functional Requirement', def: '系统"做得多好"的要求:性能、安全、可用性、可维护性等,常驱动架构。', analogy: '不仅要能住,还要冬暖夏凉抗震。', module: 'req' },
  { id: 'use-case', name: '用例', en: 'Use Case', def: '从参与者角度描述系统功能的一段交互场景,是需求建模与OO分析的核心。', analogy: '一个"谁来做什么、系统怎么回应"的小剧本。', module: 'req' },
  { id: 'req-baseline', name: '需求基线', en: 'Requirements Baseline', def: '经评审确认、纳入配置管理的一组需求,变更需走变更控制。', analogy: '盖章定稿的需求清单,改它要走流程。', module: 'req' },

  /* ── 结构化与面向对象分析设计 ── */
  { id: 'dfd', name: '数据流图 DFD', en: 'Data Flow Diagram', def: '结构化分析核心工具,用外部实体、加工、数据流、数据存储描述系统数据加工。', analogy: '画"数据从哪来、经哪些工序、到哪去"的流程图。', module: 'analysis' },
  { id: 'data-dictionary', name: '数据字典', en: 'Data Dictionary', def: '对DFD中数据流、数据项、数据存储、加工的精确定义集合,是DFD的配套说明。', analogy: 'DFD 的"词典/注释表"。', module: 'analysis' },
  { id: 'decision-table', name: '判定表', en: 'Decision Table', def: '用条件组合与对应动作描述复杂逻辑的表格,避免遗漏分支。', analogy: '把"如果…就…"的所有组合列成对照表。', module: 'analysis' },
  { id: 'oo', name: '面向对象', en: 'Object-Oriented', def: '用对象模拟现实,三大特性:封装、继承、多态。', analogy: '把数据和行为打包成一个个"对象"。', module: 'analysis' },
  { id: 'uml', name: 'UML', en: 'Unified Modeling Language', def: '统一建模语言,用一组标准图(用例、类、时序、状态等)给系统建模。', analogy: '软件的工程制图标准。', module: 'analysis' },
  { id: 'design-pattern', name: '设计模式', en: 'Design Pattern', def: '针对常见设计问题的成熟可复用解法,分创建型、结构型、行为型。', analogy: '前人总结的套路招式。', module: 'analysis' },
  { id: 'solid', name: 'SOLID原则', en: 'SOLID', def: '面向对象设计五原则:单一职责、开闭、里氏替换、接口隔离、依赖倒置。', analogy: '写好OO代码的五条军规。', module: 'analysis' },

  /* ── 系统架构设计 ── */
  { id: 'software-architecture', name: '软件架构', en: 'Software Architecture', def: '系统整体结构:构件、构件外部可见属性及其关系(连接件)与约束。', analogy: '建筑的承重结构图。', module: 'arch' },
  { id: 'arch-style', name: '架构风格', en: 'Architecture Style', def: '某类系统通用组织方式的惯用模式,如管道-过滤器、分层、MVC、事件驱动。', analogy: '建筑的流派:中式欧式各有套路。', module: 'arch' },
  { id: 'quality-attribute', name: '质量属性', en: 'Quality Attribute', def: '系统非功能特性:性能、可用性、安全性、可修改性等,是架构设计核心驱动。', analogy: '不是能不能用,而是用得好不好。', module: 'arch' },
  { id: 'atam', name: 'ATAM', en: 'Architecture Tradeoff Analysis Method', def: '架构权衡分析法,以质量属性场景驱动,识别敏感点、权衡点、风险点。', analogy: '给架构做体检+取舍分析。', module: 'arch' },
  { id: 'middleware', name: '中间件', en: 'Middleware', def: '位于OS与应用之间的通用软件,提供通信/事务/消息等公共服务。', analogy: '让不同应用都能插上协作的转换插座。', module: 'arch' },
  { id: 'soa', name: 'SOA', en: 'Service-Oriented Architecture', def: '面向服务架构,把能力拆成松耦合、可复用、标准接口的服务,常用ESB集成。', analogy: '把业务做成一个个对外服务窗口。', module: 'arch' },
  { id: 'microservice', name: '微服务', en: 'Microservices', def: '把系统拆成小而自治、独立部署、各自数据库的服务,轻量通信。', analogy: '把大商场拆成能各自开关门的小店。', module: 'arch' },

  /* ── 系统规划与可行性 ── */
  { id: 'feasibility', name: '可行性研究', en: 'Feasibility Study', def: '立项前评估项目是否值得做、能否做成,含技术、经济、操作、法律、进度等可行性。', analogy: '动工前先评估"这事能不能成、值不值得"。', module: 'plan' },
  { id: 'roi', name: '投资回报率 ROI', en: 'Return on Investment', def: '净收益与投资的比值,衡量投资划算程度,是经济可行性常用指标。', analogy: '花的钱能赚回多少倍。', module: 'plan' },
  { id: 'bpr', name: '业务流程重组', en: 'BPR', def: '对业务流程根本性再思考与彻底再设计,以求绩效显著提升,常伴随信息化。', analogy: '不修修补补,而是把业务流程推倒重设计。', module: 'plan' },

  /* ── 系统可靠性与安全性 ── */
  { id: 'reliability', name: '可靠性', en: 'Reliability', def: '系统在规定条件和时间内完成规定功能的能力,常用MTBF衡量。', analogy: '一台机器能扛多久不出毛病。', module: 'rel' },
  { id: 'mtbf', name: 'MTBF', en: 'Mean Time Between Failures', def: '平均无故障时间,越大越可靠。', analogy: '平均多久坏一次。', module: 'rel' },
  { id: 'mttr', name: 'MTTR', en: 'Mean Time To Repair', def: '平均修复时间,越小越好。', analogy: '坏了平均多久能修好。', module: 'rel' },
  { id: 'availability', name: '可用性', en: 'Availability', def: 'A=MTBF/(MTBF+MTTR),系统可正常使用时间比例,常说"几个9"。', analogy: '一年里在线时间占多少。', module: 'rel' },
  { id: 'fault-tolerance', name: '容错', en: 'Fault Tolerance', def: '部分组件失效时系统仍能(可能降级)提供服务,常用冗余实现。', analogy: '飞机多发动机,坏一台还能飞。', module: 'rel' },

  /* ── 系统测试·转换与维护 ── */
  { id: 'system-conversion', name: '系统转换', en: 'System Conversion', def: '新系统替换旧系统的切换方式:直接、并行、分段(试点)转换,各有风险与成本。', analogy: '搬新家:一次性搬、新旧并用一阵、还是分批搬。', module: 'test' },

  /* ── 信息系统综合 ── */
  { id: 'informatization', name: '信息化', en: 'Informatization', def: '用信息技术改造业务与管理、提升效率与决策水平的过程,涵盖企业与政务。', analogy: '把传统业务"搬上系统"并优化。', module: 'mis' },
  { id: 'erp', name: 'ERP', en: 'Enterprise Resource Planning', def: '企业资源计划,把财务、采购、生产、库存、人力等集成在一个系统统一管理。', analogy: '企业经营的"一体化大脑"。', module: 'mis' },
  { id: 'crm', name: 'CRM', en: 'Customer Relationship Management', def: '客户关系管理,围绕客户的营销、销售、服务全流程管理系统。', analogy: '把"和客户的所有往来"管起来。', module: 'mis' },
  { id: 'scm', name: 'SCM', en: 'Supply Chain Management', def: '供应链管理,协调从供应商到客户的物流、信息流、资金流。', analogy: '把"从原料到送达"整条链打通。', module: 'mis' },
  { id: 'bi', name: '商业智能 BI', en: 'Business Intelligence', def: '把数据经ETL汇入数仓、用OLAP与可视化辅助经营决策。', analogy: '把数据变成"看得懂的经营仪表盘"。', module: 'mis' },
  { id: 'data-governance', name: '数据治理', en: 'Data Governance', def: '对数据资产的标准、质量、安全、权属进行体系化管理,让数据可信可用。', analogy: '给企业数据立规矩、定标准、管质量。', module: 'mis' },

  /* ── 新技术 ── */
  { id: 'cloud-computing', name: '云计算', en: 'Cloud Computing', def: '按需通过网络获取弹性计算资源,分IaaS/PaaS/SaaS。', analogy: '用电不自建电厂,按用量买。', module: 'emerging' },
  { id: 'big-data', name: '大数据', en: 'Big Data', def: '具有海量、多样、高速、价值密度低(4V)特征的数据及处理技术。', analogy: '从数据大海里淘金。', module: 'emerging' },
  { id: 'ai', name: '人工智能', en: 'Artificial Intelligence', def: '让机器具备学习与决策能力,主流是机器学习与深度学习。', analogy: '让机器从数据里学会判断。', module: 'emerging' },
  { id: 'iot', name: '物联网', en: 'IoT', def: '把物理设备互联采集与控制,分感知层、网络层、应用层。', analogy: '让万物联网说话。', module: 'emerging' },
  { id: 'blockchain', name: '区块链', en: 'Blockchain', def: '去中心化、不可篡改的分布式账本,靠密码学与共识保证可信。', analogy: '人人有副本、改不了的公共账本。', module: 'emerging' },
  { id: 'zhongtai', name: '中台', en: 'Middle Platform', def: '把可复用的业务/数据能力沉淀成共享平台,支撑前台快速创新。', analogy: '企业的"共享弹药库",前台随取随用。', module: 'emerging' },

  /* ── 数学与经济管理 ── */
  { id: 'linear-programming', name: '线性规划', en: 'Linear Programming', def: '在线性约束下求线性目标函数最优(最大/最小)的优化方法。', analogy: '在有限资源里求"收益最大/成本最小"的配方。', module: 'math' },
  { id: 'decision-tree', name: '决策树', en: 'Decision Tree', def: '用树形结构分析含概率的多方案决策,按期望值(EMV)选最优方案。', analogy: '把"选哪条路、各有多大概率多大收益"画成树来算。', module: 'math' },
  { id: 'queuing', name: '排队论', en: 'Queuing Theory', def: '研究随机到达与服务的排队系统,分析利用率、队长、等待时间。', analogy: '算"窗口够不够、要等多久"的数学。', module: 'math' },

  /* ── 标准化与知识产权 ── */
  { id: 'ip-right', name: '知识产权', en: 'Intellectual Property', def: '对智力成果依法享有的专有权,含著作权、专利权、商标权等。', analogy: '脑力成果的产权证。', module: 'standard' },
  { id: 'standardization', name: '标准化', en: 'Standardization', def: '为重复性事物制定共同准则,分国际、国家、行业、企业等层级。', analogy: '约定同一套规格,互相才能对接。', module: 'standard' }
];
