/* 术语表(系统架构设计师)。每条:{id,name,en,def,analogy,module}
   正文用 <gd data-term="id">词</gd> 引用;随模块逐步扩充。 */
window.SAD = window.SAD || {};

SAD.terms = [
  /* ── 计算机系统基础 ── */
  { id: 'pipeline', name: '流水线', en: 'Pipeline', def: '把一条指令的执行拆成取指、译码、执行等多个阶段,让多条指令的不同阶段重叠进行,提高吞吐率。', analogy: '像洗车流水线:前一辆在打蜡时,后一辆已在冲水,工位不空等。', module: 'comp' },
  { id: 'cache', name: '高速缓存 Cache', en: 'Cache', def: '位于CPU与主存之间的高速小容量存储,存放近期最常用的数据/指令,缓解CPU与内存的速度差。', analogy: '像把常用文件放手边抽屉,不用每次都去仓库取。', module: 'comp' },
  { id: 'locality', name: '局部性原理', en: 'Locality', def: '程序访问往往集中在最近用过的(时间局部性)或相邻的(空间局部性)地址,是Cache和虚存有效的根本原因。', analogy: '看书总在翻附近几页,而不是满书乱跳。', module: 'comp' },
  { id: 'hamming', name: '海明码', en: 'Hamming Code', def: '在数据位间插入若干校验位的纠错码,校验位数 r 满足 2^r ≥ m+r+1,能发现并纠正一位错。', analogy: '给数据加几个"定位标尺",出错时一对就知道哪位翻了。', module: 'comp' },
  { id: 'crc', name: '循环冗余校验', en: 'CRC', def: '用多项式除法生成校验码的检错方法,检错能力强,广泛用于网络与存储,但只检错不纠错。', analogy: '像给包裹算一个"指纹",到货一对不上就知道坏了。', module: 'comp' },
  { id: 'parity', name: '奇偶校验', en: 'Parity Check', def: '加一位使整体1的个数为奇(奇校验)或偶(偶校验),只能发现奇数个错、不能纠错。', analogy: '凑个数看是单是双,变了就知道有人动过。', module: 'comp' },
  { id: 'dma', name: 'DMA', en: 'Direct Memory Access', def: '外设与内存之间直接传数据、不经过CPU逐字节搬运,CPU只在开始和结束时介入,效率高。', analogy: '像快递直接送到家门,不用你亲自去仓库一件件搬。', module: 'comp' },
  { id: 'raid', name: '磁盘阵列 RAID', en: 'RAID', def: '把多块磁盘组成阵列,用条带、镜像、校验等方式提升性能或可靠性,如RAID0/1/5/10。', analogy: '多块硬盘"组队",有的拼速度,有的拼备份。', module: 'comp' },

  /* ── 操作系统 ── */
  { id: 'process', name: '进程', en: 'Process', def: '程序的一次执行,是资源分配的基本单位,拥有独立的地址空间。', analogy: '像一个正在运行的App,有自己独立的房间和家当。', module: 'os' },
  { id: 'thread', name: '线程', en: 'Thread', def: 'CPU调度的基本单位,同一进程内的多个线程共享该进程的资源,切换开销比进程小。', analogy: '同一个房间里干活的几个人,共用桌椅工具。', module: 'os' },
  { id: 'semaphore', name: '信号量 PV', en: 'Semaphore', def: '用于进程同步与互斥的整型变量,P操作申请资源(减1)、V操作释放资源(加1)。', analogy: '像停车场的剩余车位牌:进一辆减一,出一辆加一,满了就等。', module: 'os' },
  { id: 'deadlock', name: '死锁', en: 'Deadlock', def: '多个进程互相持有对方所需资源且都不释放,导致永久等待。需同时满足互斥、占有等待、不可剥夺、循环等待四条件。', analogy: '两人过独木桥都走到中间互不相让,谁也过不去。', module: 'os' },
  { id: 'virtual-memory', name: '虚拟存储', en: 'Virtual Memory', def: '把部分外存当内存用,使程序可在小于自身大小的内存中运行,靠局部性原理换页实现。', analogy: '桌子小就把暂时不用的资料先放抽屉,用到再拿上来。', module: 'os' },
  { id: 'paging', name: '分页', en: 'Paging', def: '把内存和程序都切成固定大小的页,按页映射与调入,解决外部碎片。', analogy: '把书按固定页数撕成小册,哪页要用拿哪页。', module: 'os' },

  /* ── 数据库系统 ── */
  { id: 'three-schema', name: '三级模式', en: 'Three-Schema', def: '数据库分外模式(视图)、概念模式(全局逻辑)、内模式(物理存储)三层,两级映像保证逻辑与物理独立性。', analogy: '像房子的效果图、设计图、施工图,各看各的、互不打架。', module: 'db' },
  { id: 'er-model', name: 'ER模型', en: 'Entity-Relationship', def: '用实体、属性、联系描述现实世界的概念数据模型,是数据库概念设计的主要工具。', analogy: '画"谁和谁有什么关系"的关系网图。', module: 'db' },
  { id: 'normal-form', name: '范式', en: 'Normal Form', def: '关系规范化的等级:1NF(原子)、2NF(消除部分依赖)、3NF(消除传递依赖)、BCNF,越高冗余越少。', analogy: '把一张乱表越拆越干净,减少重复和改一处漏一处。', module: 'db' },
  { id: 'functional-dependency', name: '函数依赖', en: 'Functional Dependency', def: '若属性X确定则属性Y唯一确定,记X→Y,是规范化分析的基础。', analogy: '知道学号就唯一知道姓名:学号→姓名。', module: 'db' },
  { id: 'transaction', name: '事务', en: 'Transaction', def: '一组要么全做要么全不做的数据库操作,具备ACID:原子性、一致性、隔离性、持久性。', analogy: '转账:扣款和到账必须一起成功,不能只发生一半。', module: 'db' },
  { id: 'concurrency-control', name: '并发控制', en: 'Concurrency Control', def: '协调多个事务同时访问数据,避免丢失修改、脏读、不可重复读等问题,常用封锁机制。', analogy: '多人同时改一份文档,得有规则防止互相覆盖。', module: 'db' },
  { id: 'distributed-db', name: '分布式数据库', en: 'Distributed Database', def: '数据分布在多个节点上、逻辑上统一的数据库,涉及分片、复制与分布式事务,遵循CAP权衡。', analogy: '连锁店各店有自己库存,总部看到的是统一账本。', module: 'db' },
  { id: 'data-warehouse', name: '数据仓库', en: 'Data Warehouse', def: '面向主题、集成、相对稳定、反映历史的数据集合,用于分析决策(OLAP),区别于事务处理(OLTP)。', analogy: '把各部门的流水汇成一个"历史大账本"专供分析。', module: 'db' },

  /* ── 计算机网络 ── */
  { id: 'osi', name: 'OSI七层模型', en: 'OSI Model', def: '把网络通信分为物理、数据链路、网络、传输、会话、表示、应用七层,各层职责清晰。', analogy: '寄快递的分工:打包、贴单、运输、签收各管一段。', module: 'net' },
  { id: 'tcpip', name: 'TCP/IP模型', en: 'TCP/IP', def: '实际使用的四层(网络接口、网际、传输、应用)协议族,TCP可靠面向连接、UDP高效无连接。', analogy: '互联网真正跑的"快递系统",比OSI更接地气。', module: 'net' },
  { id: 'subnet', name: '子网划分', en: 'Subnetting', def: '用子网掩码把一个IP网络划分为多个子网,提高地址利用率与可管理性,涉及网络位/主机位计算。', analogy: '把一栋大楼按楼层分区,各区独立门牌好管理。', module: 'net' },
  { id: 'san', name: 'SAN存储区域网', en: 'Storage Area Network', def: '以块级方式提供存储的高速专用网络,性能高;NAS则以文件级共享、DAS为直连存储。', analogy: 'SAN像专线直供的"裸硬盘池",NAS像共享文件服务器。', module: 'net' },

  /* ── 软件工程 ── */
  { id: 'cmmi', name: 'CMMI', en: 'Capability Maturity Model Integration', def: '软件能力成熟度模型集成,把过程成熟度分5级:初始、已管理、已定义、量化管理、优化。', analogy: '像企业过程的"段位系统",从青铜打到王者。', module: 'se' },
  { id: 'uml', name: 'UML', en: 'Unified Modeling Language', def: '统一建模语言,用一组标准图(用例图、类图、时序图等)对软件系统建模。', analogy: '软件的"工程制图标准",大家照同一套符号画图。', module: 'se' },
  { id: 'coupling', name: '耦合', en: 'Coupling', def: '模块之间相互依赖的紧密程度,越低越好,便于独立修改和复用。', analogy: '像积木之间的粘连:粘太死,想换一块要拆一片。', module: 'se' },
  { id: 'cohesion', name: '内聚', en: 'Cohesion', def: '一个模块内部各元素围绕单一职责的紧密程度,越高越好。', analogy: '一个部门只干一类事,职责清晰、好协作。', module: 'se' },
  { id: 'blackbox', name: '黑盒测试', en: 'Black-box Testing', def: '不看内部实现,只按输入输出/功能规格测试,如等价类、边界值。', analogy: '只管按钮按下灯亮不亮,不拆开看电路。', module: 'se' },
  { id: 'whitebox', name: '白盒测试', en: 'White-box Testing', def: '基于代码内部逻辑设计用例,关注语句/分支/路径覆盖。', analogy: '拆开机器,顺着每条线路都走一遍。', module: 'se' },
  { id: 'agile', name: '敏捷', en: 'Agile', def: '以迭代、增量、拥抱变化、重视沟通为核心的轻量开发方法,如Scrum、XP。', analogy: '小步快跑、边做边调,而不是一次画满全图。', module: 'se' },
  { id: 'reverse-eng', name: '逆向工程', en: 'Reverse Engineering', def: '从已有系统(代码/可执行)分析出设计与需求,是软件维护与再工程的基础。', analogy: '把成品拆回图纸,搞清它是怎么做出来的。', module: 'se' },

  /* ── 设计模式 ── */
  { id: 'design-pattern', name: '设计模式', en: 'Design Pattern', def: '针对软件设计中反复出现问题的成熟可复用解法,分创建型、结构型、行为型三类。', analogy: '前人总结的"套路招式",遇到对应场景直接用。', module: 'pattern' },
  { id: 'solid', name: 'SOLID原则', en: 'SOLID', def: '面向对象设计五原则:单一职责、开闭、里氏替换、接口隔离、依赖倒置。', analogy: '写好面向对象代码的"五条军规"。', module: 'pattern' },
  { id: 'singleton', name: '单例模式', en: 'Singleton', def: '保证一个类只有一个实例并提供全局访问点,属创建型模式。', analogy: '一个公司只有一个公章,谁要盖都找它。', module: 'pattern' },
  { id: 'factory', name: '工厂模式', en: 'Factory', def: '用工厂方法/抽象工厂把对象的创建与使用解耦,属创建型模式。', analogy: '点菜只说要什么,厨房(工厂)负责做出来。', module: 'pattern' },
  { id: 'observer', name: '观察者模式', en: 'Observer', def: '对象状态变化时自动通知所有订阅者,属行为型模式,是发布-订阅的基础。', analogy: '关注了公众号,有更新自动推送给你。', module: 'pattern' },

  /* ── 信息安全 ── */
  { id: 'cia', name: '信息安全CIA', en: 'Confidentiality/Integrity/Availability', def: '信息安全三大目标:保密性、完整性、可用性,后来扩展可控性、不可否认性。', analogy: '信息的三道底线:别被偷看、别被篡改、要能用。', module: 'sec' },
  { id: 'symmetric', name: '对称加密', en: 'Symmetric Encryption', def: '加解密用同一把密钥,速度快、适合大数据,但密钥分发难,如DES/AES。', analogy: '同一把钥匙开关同一把锁,怎么把钥匙安全给对方是难题。', module: 'sec' },
  { id: 'asymmetric', name: '非对称加密', en: 'Asymmetric Encryption', def: '公钥加密私钥解(或反之),解决密钥分发,但慢,如RSA。公钥公开、私钥保密。', analogy: '公开的"投信口"谁都能投(公钥加密),只有你有钥匙取信(私钥解密)。', module: 'sec' },
  { id: 'hash', name: '散列/摘要', en: 'Hash', def: '把任意数据映射成定长摘要,不可逆、雪崩效应,用于完整性校验,如SHA-256。', analogy: '给文件算个"指纹",内容一改指纹全变。', module: 'sec' },
  { id: 'digital-signature', name: '数字签名', en: 'Digital Signature', def: '发送方用私钥对摘要加密,接收方用其公钥验证,保证完整性、身份认证与不可否认。', analogy: '盖只有你能盖、人人能验真伪的"电子手章"。', module: 'sec' },
  { id: 'pki', name: 'PKI', en: 'Public Key Infrastructure', def: '公钥基础设施,靠CA签发数字证书把公钥与身份绑定,解决"公钥到底是谁的"。', analogy: '权威机构发的"身份证体系",证明这把公钥确实是某人的。', module: 'sec' },
  { id: 'blp', name: 'BLP模型', en: 'Bell-LaPadula', def: '保密性模型:不上读、不下写(下读上写),防止高密级信息泄露到低密级。', analogy: '机密文件:低级别看不了高级的,也不能往低级别抄。', module: 'sec' },
  { id: 'biba', name: 'Biba模型', en: 'Biba', def: '完整性模型:不下读、不上写,防止低完整性数据污染高完整性数据,与BLP相反。', analogy: '怕被脏数据污染:不接收低可信来源往上写。', module: 'sec' },
  { id: 'defense-in-depth', name: '纵深防御', en: 'Defense in Depth', def: '在物理、网络、主机、应用、数据等多层都设防,一层被破还有下一层。', analogy: '城墙+护城河+内城+卫兵,层层设防。', module: 'sec' },
  { id: 'zero-trust', name: '零信任', en: 'Zero Trust', def: '默认不信任任何内外部请求,持续验证身份与权限,"从不信任,始终验证"。', analogy: '进了公司门也要刷脸,每道门都查证件。', module: 'sec' },

  /* ── 软件架构设计基础 ── */
  { id: 'software-architecture', name: '软件架构', en: 'Software Architecture', def: '系统的整体结构:组成它的构件、构件的外部可见属性以及它们之间的关系。', analogy: '建筑的承重结构图:决定大楼能多高、怎么改。', module: 'arch' },
  { id: 'view-model', name: '4+1视图', en: '4+1 View Model', def: '从逻辑、开发、过程、物理4个视图加场景(用例)来描述架构,各视图服务不同干系人。', analogy: '一栋楼的水电图、结构图、平面图……各专业看各的。', module: 'arch' },
  { id: 'absd', name: 'ABSD', en: 'Architecture-Based Software Design', def: '基于架构的软件开发方法,由架构需求→设计→文档化→复审→实现→演化驱动,强调架构先行。', analogy: '先定好骨架蓝图,再照着盖、照着改。', module: 'arch' },
  { id: 'adl', name: 'ADL', en: 'Architecture Description Language', def: '架构描述语言,用构件、连接件、配置三要素形式化描述软件架构。', analogy: '画架构图的"专用语法",让结构能被精确表达。', module: 'arch' },
  { id: 'component', name: '构件', en: 'Component', def: '可独立部署、可复用、通过接口交互的软件单元,是架构复用的基本单位。', analogy: '可插拔的标准零件,接口对上就能装。', module: 'arch' },
  { id: 'dssa', name: 'DSSA', en: 'Domain Specific Software Architecture', def: '特定领域软件架构:针对某个应用领域、可复用的参考架构,支撑该领域系统快速开发。', analogy: '某行业的"通用户型模板",同类项目照着改就行。', module: 'arch' },

  /* ── 架构风格 ── */
  { id: 'arch-style', name: '架构风格', en: 'Architecture Style', def: '描述某类系统通用组织方式的惯用模式,规定构件与连接件的词汇与约束。', analogy: '建筑的"流派":中式、欧式各有套路。', module: 'style' },
  { id: 'pipe-filter', name: '管道-过滤器', en: 'Pipe-Filter', def: '数据流风格:每个过滤器处理数据后经管道传给下一个,如编译器、流处理。', analogy: '自来水厂:一道道处理工序串成流水线。', module: 'style' },
  { id: 'layered', name: '分层架构', en: 'Layered', def: '调用-返回风格:系统分层,每层只用下层服务、为上层服务,如网络协议栈。', analogy: '公司层级:逐级汇报、逐级服务。', module: 'style' },
  { id: 'mvc', name: 'MVC', en: 'Model-View-Controller', def: '把模型(数据)、视图(展示)、控制器(交互)分离,降低耦合、便于维护与多视图。', analogy: '后厨(模型)、菜品摆盘(视图)、服务员(控制器)分工。', module: 'style' },
  { id: 'event-driven', name: '事件驱动', en: 'Event-Driven / Implicit Invocation', def: '独立构件风格:构件通过发布/订阅事件隐式调用,松耦合、易扩展。', analogy: '广播找人:谁关心谁响应,发广播的人不必知道谁在听。', module: 'style' },
  { id: 'blackboard', name: '黑板架构', en: 'Blackboard', def: '仓库风格的一种:多个知识源围绕共享黑板协作求解,适合无确定算法的问题(如语音识别)。', analogy: '一群专家围着一块黑板,各自往上补线索直到解出来。', module: 'style' },

  /* ── 质量属性与架构评估 ── */
  { id: 'quality-attribute', name: '质量属性', en: 'Quality Attribute', def: '系统的非功能特性,如性能、可用性、安全性、可修改性、易用性、可测试性,是架构设计的核心驱动。', analogy: '不是"能不能用",而是"用得好不好"。', module: 'quality' },
  { id: 'qa-scenario', name: '质量属性场景', en: 'Quality Attribute Scenario', def: '用六元组(刺激源、刺激、环境、制品、响应、响应度量)精确描述一个质量需求。', analogy: '把"要快要稳"翻译成"谁在什么情况下做什么,系统多久内达到什么指标"。', module: 'quality' },
  { id: 'tactic', name: '架构战术', en: 'Tactic', def: '为实现某质量属性而采用的设计决策手段,如冗余(可用性)、缓存(性能)、鉴权(安全)。', analogy: '针对某项指标的"招式库",哪里弱补哪里。', module: 'quality' },
  { id: 'sensitivity-point', name: '敏感点', en: 'Sensitivity Point', def: '架构评估中,某个决策只显著影响某一个质量属性的点。', analogy: '一个只影响某一项指标的"调节旋钮"。', module: 'quality' },
  { id: 'tradeoff-point', name: '权衡点', en: 'Tradeoff Point', def: '同时影响多个质量属性、需要折中的决策点,是架构评估关注的重点。', analogy: '跷跷板:这头高了那头就低,必须取舍。', module: 'quality' },
  { id: 'atam', name: 'ATAM', en: 'Architecture Tradeoff Analysis Method', def: '架构权衡分析法:以质量属性场景为驱动,识别敏感点、权衡点、风险点,评估架构能否满足质量目标。', analogy: '给架构做"体检+取舍分析",找出隐患与必须折中的地方。', module: 'quality' },
  { id: 'saam', name: 'SAAM', en: 'Software Architecture Analysis Method', def: '最早的架构分析方法,以场景(尤其可修改性)驱动,评估架构对各类变更的适应性。', analogy: '拿一堆"假如要改X"的剧本,看架构扛不扛得住。', module: 'quality' },
  { id: 'cbam', name: 'CBAM', en: 'Cost Benefit Analysis Method', def: '成本效益分析法:在ATAM基础上引入经济视角,权衡架构决策的成本与收益,辅助投资决策。', analogy: '不仅看技术好坏,还算"这钱花得值不值"。', module: 'quality' },

  /* ── 软件可靠性 ── */
  { id: 'reliability', name: '可靠性', en: 'Reliability', def: '系统在规定条件和时间内完成规定功能的能力,常用MTBF等衡量。', analogy: '一台机器"能扛多久不出毛病"。', module: 'rel' },
  { id: 'mtbf', name: 'MTBF', en: 'Mean Time Between Failures', def: '平均无故障时间,两次故障间正常运行时间的平均值,越大越可靠。', analogy: '平均"多久坏一次"。', module: 'rel' },
  { id: 'mttr', name: 'MTTR', en: 'Mean Time To Repair', def: '平均修复时间,从故障到恢复的平均耗时,越小越好。', analogy: '坏了之后"平均多久能修好"。', module: 'rel' },
  { id: 'availability', name: '可用性', en: 'Availability', def: '系统可正常使用时间的比例,A = MTBF/(MTBF+MTTR),常说"几个9"。', analogy: '一年里"在线时间占多少",99.99%就是全年只停几十分钟。', module: 'rel' },
  { id: 'fault-tolerance', name: '容错', en: 'Fault Tolerance', def: '系统在部分组件失效时仍能继续提供(可能降级的)服务的能力,常用冗余实现。', analogy: '飞机多发动机,坏一台还能飞。', module: 'rel' },
  { id: 'redundancy', name: '冗余', en: 'Redundancy', def: '通过备份的硬件、软件或信息,在故障时顶上,是提升可靠性/可用性的核心手段。', analogy: '多带一块备胎,爆胎也不趴窝。', module: 'rel' },

  /* ── 系统性能 ── */
  { id: 'amdahl', name: 'Amdahl定律', en: "Amdahl's Law", def: '加速比 S=1/((1−p)+p/n),系统整体提速受不可优化部分(1−p)限制,存在上限1/(1−p)。', analogy: '一队人只有部分活能多人并行,总工期被那段单人活卡住。', module: 'perf' },
  { id: 'throughput', name: '吞吐量', en: 'Throughput', def: '单位时间内系统处理的请求/事务数(如TPS、QPS),衡量处理能力。', analogy: '收费站每分钟能放过多少辆车。', module: 'perf' },
  { id: 'response-time', name: '响应时间', en: 'Response Time', def: '从发出请求到收到响应的耗时,常含排队+处理时间,是用户最直观的性能指标。', analogy: '点完餐到上菜等了多久。', module: 'perf' },
  { id: 'load-balance', name: '负载均衡', en: 'Load Balancing', def: '把请求分摊到多台服务器,提升吞吐与可用性,策略有轮询、加权、最少连接等。', analogy: '多个窗口分流排队,谁空去谁那。', module: 'perf' },

  /* ── 中间件·SOA·微服务 ── */
  { id: 'middleware', name: '中间件', en: 'Middleware', def: '位于操作系统与应用之间的通用软件,屏蔽底层差异、提供通信/事务/消息等公共服务。', analogy: '插座转换器:让不同应用都能"插上"协作。', module: 'mid' },
  { id: 'soa', name: 'SOA', en: 'Service-Oriented Architecture', def: '面向服务架构:把功能拆成松耦合、可复用、标准接口的服务,常用ESB集成。', analogy: '把业务能力做成一个个对外开放的"服务窗口"。', module: 'mid' },
  { id: 'web-service', name: 'Web Service', en: 'Web Service', def: '基于标准协议(SOAP/WSDL/UDDI 或 REST)实现跨平台调用的服务,是SOA常见实现。', analogy: '跨语言跨平台都能打的"通用电话"。', module: 'mid' },
  { id: 'esb', name: 'ESB企业服务总线', en: 'Enterprise Service Bus', def: 'SOA中连接各服务的总线,负责路由、协议转换、消息中转,实现服务解耦集成。', analogy: '公司内部的"总机/交换台",各部门通过它互通。', module: 'mid' },
  { id: 'microservice', name: '微服务', en: 'Microservices', def: '把系统拆成一组小而自治、独立部署、围绕业务能力的服务,各自数据库、轻量通信。', analogy: '把大商场拆成一个个独立经营、能各自开关门的小店。', module: 'mid' },
  { id: 'container', name: '容器', en: 'Container', def: '轻量级虚拟化,把应用与依赖打包在一起跨环境一致运行,如Docker;K8s做容器编排。', analogy: '标准集装箱:装好就能在任意货轮上跑,不挑环境。', module: 'mid' },
  { id: 'devops', name: 'DevOps', en: 'DevOps', def: '打通开发与运维、以自动化(CI/CD)和协作实现快速可靠交付的文化与实践。', analogy: '开发和运维并成一队,流水线自动发版。', module: 'mid' },

  /* ── 嵌入式系统架构 ── */
  { id: 'embedded', name: '嵌入式系统', en: 'Embedded System', def: '为特定功能定制、嵌入设备内的专用计算机系统,强调实时、可靠、低功耗。', analogy: '藏在洗衣机/汽车里的"专职小电脑"。', module: 'embed' },
  { id: 'rtos', name: '实时操作系统', en: 'RTOS', def: '能在确定时间内响应的操作系统,分硬实时(超时即失败)与软实时,常用于嵌入式。', analogy: '严守截止时间的"准点管家"。', module: 'embed' },

  /* ── 架构演化与维护 ── */
  { id: 'arch-evolution', name: '架构演化', en: 'Architecture Evolution', def: '系统随需求/环境变化对架构的持续调整,使其保持可用与可维护。', analogy: '房子住久了按需求不断改造扩建。', module: 'evo' },
  { id: 'arch-erosion', name: '架构腐化', en: 'Architecture Erosion', def: '实现逐渐偏离设计架构、结构变乱、技术债累积,使系统越来越难改。', analogy: '房子被乱拉电线乱打隔断,越住越乱。', module: 'evo' },
  { id: 'refactoring', name: '重构', en: 'Refactoring', def: '在不改变外部行为的前提下改善内部结构,降低复杂度、对抗腐化。', analogy: '不改房子用途,只把杂乱的内部重新收拾规整。', module: 'evo' },

  /* ── 未来信息综合技术 ── */
  { id: 'cloud-computing', name: '云计算', en: 'Cloud Computing', def: '按需通过网络获取可弹性伸缩的计算资源,服务模式分IaaS/PaaS/SaaS。', analogy: '用电不自建电厂,按用量向电网买。', module: 'future' },
  { id: 'big-data', name: '大数据', en: 'Big Data', def: '具有海量、多样、高速、价值密度低(4V)特征的数据及其处理技术,如Hadoop/Spark。', analogy: '从大海般的数据里淘出有用的金子。', module: 'future' },
  { id: 'iot', name: '物联网', en: 'IoT', def: '通过传感与网络把物理设备互联、采集与控制,分感知层、网络层、应用层。', analogy: '让万物都能"联网说话"。', module: 'future' },
  { id: 'blockchain', name: '区块链', en: 'Blockchain', def: '去中心化、不可篡改的分布式账本,靠密码学与共识机制保证一致与可信。', analogy: '一本人人都有副本、改不了的公共账本。', module: 'future' },
  { id: 'digital-twin', name: '数字孪生', en: 'Digital Twin', def: '为物理实体建立可实时同步的虚拟镜像,用于仿真、监控与优化。', analogy: '给真实设备造一个会同步的"数字双胞胎"。', module: 'future' },

  /* ── 标准化与知识产权 ── */
  { id: 'ip-right', name: '知识产权', en: 'Intellectual Property', def: '对智力成果依法享有的专有权利,含著作权、专利权、商标权等。', analogy: '脑力劳动成果的"产权证"。', module: 'standard' },
  { id: 'standardization', name: '标准化', en: 'Standardization', def: '为重复性事物制定共同遵守的准则,分国际、国家、行业、企业等层级。', analogy: '大家约定同一套规格,互相才能对接。', module: 'standard' }
];
