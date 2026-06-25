/* 全站术语库。每条:
   id      术语 id(英文缩写或拼音,全站唯一,<gd data-term="id"> 引用)
   name    中文名
   en      英文/缩写(可选)
   def     大白话定义(一两句,独立可读)
   analogy 类比(可选,强烈建议给)
   lesson  讲透它的那一课 id(可选) */
EBD.registerTerms([
  /* ── 模块 1 · 北斗基础 ── */
  { id: 'gnss', name: '全球卫星导航系统', en: 'GNSS', def: '靠一群卫星给地面提供定位、导航、授时服务的系统总称。GPS、北斗、格洛纳斯、伽利略都属于 GNSS。', analogy: '天上一圈不会熄灭的"灯塔",照着你算出自己在哪。', lesson: 'beidou-01-gnss' },
  { id: 'beidou', name: '北斗卫星导航系统', en: 'BDS', def: '中国自主建设的全球卫星导航系统,2020 年建成全球服务,提供定位导航授时和独有的短报文。', analogy: '中国自己的"GPS",还多带一个能发短信的本事。', lesson: 'beidou-03-three-steps' },
  { id: 'xingzuo', name: '星座', en: 'constellation', def: '一组按设计排布、协同提供服务的卫星总体。北斗三号由约 30 颗卫星组成混合星座。', analogy: '一支站位讲究的球队,而不是一盘散沙。', lesson: 'beidou-04-constellation' },
  { id: 'geo', name: '地球静止轨道', en: 'GEO', def: '约 3.6 万公里高、与地球自转同步的轨道,卫星看上去定在赤道上空某点不动。北斗有 3 颗 GEO。', analogy: '挂在天上不动的"探照灯",一直照着同一片地方。', lesson: 'beidou-04-constellation' },
  { id: 'igso', name: '倾斜地球同步轨道', en: 'IGSO', def: '与 GEO 同高但轨道面倾斜,卫星在某区域上空画"8"字。北斗有 3 颗 IGSO,专顾中国及周边。', analogy: '在你头顶来回画 8 字的"巡逻兵"。', lesson: 'beidou-04-constellation' },
  { id: 'meo', name: '中圆地球轨道', en: 'MEO', def: '约 2 万公里高的轨道,卫星不停绕地球转,是支撑全球服务的主力。北斗有 24 颗 MEO。', analogy: '绕着操场匀速跑圈的"主力队员"。', lesson: 'beidou-04-constellation' },
  { id: 'rnss', name: '无线电导航卫星服务', en: 'RNSS', def: '用户只"收"卫星信号、自己算位置的体制,GPS/北斗的主用定位方式,用户数无上限、不暴露自己。', analogy: '你听灯塔的光自己算位置,灯塔并不知道你在。', lesson: 'beidou-06-rnss-rdss' },
  { id: 'rdss', name: '无线电测定卫星服务', en: 'RDSS', def: '"有源"定位体制:用户要发信号、经卫星和地面中心算位置并回传,能顺带传短报文。北斗特色。', analogy: '你喊一声,指挥中心帮你算出位置再告诉你,还能捎句话。', lesson: 'beidou-06-rnss-rdss' },
  { id: 'duanbaowen', name: '短报文', en: 'short message', def: '北斗独有的能力:定位的同时能收发一小段文字消息,不依赖手机和互联网。', analogy: '导航仪自带一张"卫星短信卡"。', lesson: 'beidou-07-shortmsg' },
  { id: 'signal-band', name: '信号频段', en: 'B1/B2/B3', def: '北斗卫星在 B1、B2、B3 等频段播发的导航信号;多频能更好地消除电离层误差、提升精度。', analogy: '卫星用几个不同"电台频道"同时广播,听得越多算得越准。', lesson: 'beidou-05-signal' },
  { id: 'weizhi', name: '伪距', en: 'pseudorange', def: '接收机用信号传播时间×光速算出的"到卫星的距离",因含钟差等误差不完全真实,故称伪距。', analogy: '用回声往返时间估到墙的距离,估得不太准但够用。', lesson: 'beidou-08-positioning' },
  { id: 'yuanzizhong', name: '原子钟', en: 'atomic clock', def: '靠原子振荡计时的超高精度时钟,几百万年才差一秒。每颗导航卫星都带,是定位和授时的根。', analogy: '宇宙级"秒表",准到几乎不会错。', lesson: 'beidou-08-positioning' },

  /* ── 模块 2 · 时空服务原理 ── */
  { id: 'pnt', name: 'PNT', en: 'Positioning/Navigation/Timing', def: '定位、导航、授时三种服务的统称,卫星导航系统的核心产出。', analogy: '回答三个问题:我在哪、怎么去、现在几点。', lesson: 'pnt-01-trio' },
  { id: 'shoushi', name: '授时', en: 'timing', def: '把卫星上的精准时间"发"给地面设备,让它们对准到同一刻、误差小到微秒甚至纳秒。', analogy: '全网设备一起对一块"天上的标准表"。', lesson: 'pnt-06-timing' },
  { id: 'shikongjizhun', name: '时空基准', en: 'spatiotemporal datum', def: '统一的位置坐标系(空间)和时间系统(时间),是一切定位和授时的"尺子"和"零点"。', analogy: '地图的网格线 + 全国统一的标准时间。', lesson: 'pnt-02-datum' },
  { id: 'cgcs2000', name: '2000 国家大地坐标系', en: 'CGCS2000', def: '中国采用的地心坐标系,北斗定位结果就以它为准,取代了过去的老坐标系。', analogy: '中国国土的"标准网格",经纬度都按它来量。', lesson: 'pnt-03-cgcs2000' },
  { id: 'dadigao', name: '大地高', en: 'ellipsoidal height', def: '卫星直接给出的"高",是相对参考椭球面的高度,跟我们说的海拔(正常高)差一个高程异常。', analogy: '卫星量的是"离理想光滑球面多高",不是"离海平面多高"。', lesson: 'pnt-04-height' },
  { id: 'bdt', name: '北斗时', en: 'BDT', def: '北斗系统自己的时间基准,2006 年起算、不跳闰秒,与 UTC 差固定的整数秒(加若干纳秒)。', analogy: '北斗自带的一块"标准表",和民用时间差着已知的几秒。', lesson: 'pnt-05-bdt' },
  { id: 'dandian', name: '单点定位', en: 'SPP', def: '一台接收机独立解算位置,简单但只能到米级,因为各种误差没被抵消。', analogy: '一个人凭感觉估距离,大概其准。', lesson: 'pnt-07-single-diff' },
  { id: 'chafen', name: '差分定位', en: 'differential', def: '用已知精确位置的基准站算出误差、播发改正数,用户据此修正,精度可达厘米级。', analogy: '旁边站个"标准答案",帮你把估错的部分扣掉。', lesson: 'pnt-07-single-diff' },
  { id: 'dianliceng', name: '电离层延迟', en: 'ionospheric delay', def: '信号穿过高空带电的电离层会被拖慢,是定位最大的误差源之一,可用多频或改正数削弱。', analogy: '光穿过"起雾的玻璃"慢了一点,算距离就偏了。', lesson: 'pnt-08-error' },
  { id: 'duolujing', name: '多路径', en: 'multipath', def: '信号经地面、墙体反射后再进接收机,走了"冤枉路",造成定位误差。城市峡谷里尤其明显。', analogy: '回声在房间里反复弹,听起来重影。', lesson: 'pnt-08-error' },
  { id: 'wanhaoxing', name: '完好性', en: 'integrity', def: '系统在出问题、定位不可信时能及时告警的能力。对民航、电力等关键应用至关重要。', analogy: '导航不仅要准,还得在它"不靠谱"时主动喊一声。', lesson: 'pnt-09-integrity' },
  { id: 'pdop', name: '精度因子', en: 'PDOP', def: '衡量可见卫星几何分布好坏的指标,值越小定位越准。卫星挤一堆比四散分布差。', analogy: '几盏灯从四面八方照你,比都挤在一个角落更容易定位。', lesson: 'beidou-09-why-four' },

  /* ── 模块 3 · 高精度增强 ── */
  { id: 'dgnss', name: '差分 GNSS', en: 'DGNSS', def: '基于伪距的差分技术,用基准站改正数把定位从米级提到亚米/分米级。', analogy: '给"大概其"的估距请来一个校对员。', lesson: 'augment-02-dgnss' },
  { id: 'rtk', name: '实时动态定位', en: 'RTK', def: '基于载波相位的差分技术,配合基准站可实时达到厘米级,是测量和高精度作业的主力。', analogy: '不仅校对,还用更精细的"游标卡尺"量。', lesson: 'augment-03-rtk' },
  { id: 'cors', name: '连续运行参考站', en: 'CORS', def: '长期固定、不断观测并播发改正数的基准站;成网后即"地基增强系统"。', analogy: '遍布各地、永远在岗的"地面灯塔"。', lesson: 'augment-04-cors' },
  { id: 'dijizengqiang', name: '地基增强系统', en: 'GBAS', def: '由大量地面基准站组网,实时算出并播发改正数,让用户获得厘米级定位。中国已建成全国北斗地基增强网。', analogy: '一张铺满全国的"精度补丁网"。', lesson: 'augment-04-cors' },
  { id: 'sbas', name: '星基增强系统', en: 'SBAS', def: '用卫星(常为 GEO)向大范围用户播发改正数和完好性信息,不用建满地基站。', analogy: '改正数不走地面网,直接从天上撒下来。', lesson: 'augment-05-sbas' },
  { id: 'ppp', name: '精密单点定位', en: 'PPP', def: '不依赖近处基准站,靠精密轨道和钟差产品,一台接收机就能达到分米甚至厘米级,但要等收敛。', analogy: '不靠隔壁校对员,自带一本"超精密参数手册"自己修正。', lesson: 'augment-06-ppp' },
  { id: 'ppp-b2b', name: 'PPP-B2b 服务', en: 'PPP-B2b', def: '北斗三号通过 GEO 卫星 B2b 信号直接播发精密改正数,中国及周边不用网络就能做 PPP,动态分米级。', analogy: '把"精密参数手册"直接从卫星广播给你,不用连网下载。', lesson: 'augment-07-ppp-b2b' },

  /* ── 模块 4 · 能源北斗总览 ── */
  { id: 'nengyuanbeidou', name: '能源北斗', def: '把北斗时空服务系统性融入能源/电力行业的统称与工程实践:授时、巡检、监测、作业、应急通信等。', analogy: '给电力行业装上一套"时空操作系统"。', lesson: 'energy-02-strategy' },
  { id: 'zizhukekong', name: '自主可控', def: '关键技术与基础设施掌握在自己手里、不受制于人。电力是命脉行业,时空服务尤其要自主。', analogy: '命门不能攥在别人手里。', lesson: 'energy-03-autonomy' },

  /* ── 模块 5 · 授时与同步 ── */
  { id: 'soe', name: '事件顺序记录', en: 'SOE', def: '把电网中各事件按发生先后精确打上时标记录下来,用于事故分析。要求各装置时间对得很齐。', analogy: '给每件事盖上精确到毫秒的"时间邮戳",方便复盘谁先谁后。', lesson: 'timing-03-soe' },
  { id: 'guzhangluobo', name: '故障录波', en: 'fault recording', def: '故障时自动记录电压电流等波形的装置,事后分析靠它;多套录波要对齐时间才能拼出全貌。', analogy: '电网的"行车记录仪",出事了回放看。', lesson: 'timing-03-soe' },
  { id: 'pmu', name: '同步相量测量装置', en: 'PMU', def: '带精准授时的测量装置,把各处电气量打上统一时标,使全网相量可比较,是广域监测的基础。', analogy: '给电网各处同时拍"同步心电图"。', lesson: 'timing-04-pmu' },
  { id: 'wams', name: '广域测量系统', en: 'WAMS', def: '由众多 PMU 联网构成的系统,实时看全网动态,前提是所有 PMU 时间高度同步。', analogy: '把各处的"同步心电图"汇到一个大屏统一看。', lesson: 'timing-04-pmu' },
  { id: 'chadong', name: '差动保护', en: 'differential protection', def: '比较线路两端电流判断内部是否故障的保护;两端采样必须对准同一时刻,差几微秒就可能误判。', analogy: '量一根水管两头的流量,对不齐时间就分不清是漏了还是没漏。', lesson: 'timing-05-diff' },
  { id: 'shoushijingdu', name: '授时精度', def: '授出的时间与标准时间的偏差大小,电力常要求优于 1 微秒,高端应用要到几十纳秒。', analogy: '对表对得有多齐。', lesson: 'timing-02-levels' },
  { id: 'shoushi-hold', name: '守时(驯钟)', en: 'holdover', def: '卫星信号短暂丢失时,设备靠内部高稳时钟维持时间不跑偏;平时用卫星"驯服"这块本地钟。', analogy: '导师不在时,好学生靠平时养成的节奏继续准时。', lesson: 'timing-08-holdover' },
  { id: 'qipian', name: '欺骗干扰', en: 'spoofing', def: '发射伪造的卫星信号,诱骗接收机算出错误的位置或时间。比单纯压制信号更隐蔽危险。', analogy: '有人伪造灯塔灯光,把你引到错的地方。', lesson: 'timing-09-antijam' },

  /* ── 模块 6 · 巡检与运维 ── */
  { id: 'xunjian', name: '巡检', def: '定期检查输电线路、杆塔、设备状态、发现隐患的工作。线路长、点位多,定位和导航能大幅提效。', analogy: '给电网做"日常体检"。', lesson: 'inspect-01-pain' },
  { id: 'ganta', name: '杆塔', def: '架空输电线路上支撑导线的塔。全国数以百万计,每基都需要精确坐标用于巡检和管理。', analogy: '电网这条"高速路"上一根根的"路灯杆"。', lesson: 'inspect-04-tower-db' },
  { id: 'shudiantongdao', name: '输电通道', def: '输电线路及其两侧需要保护的走廊带,通道内的施工、树木、地质灾害都可能威胁线路。', analogy: '高压线脚下那条"安全红线"内的地带。', lesson: 'inspect-02-channel' },
  { id: 'shineidingwei', name: '室内定位', def: '卫星信号到不了的室内(变电站、隧道)用蓝牙/UWB/5G 等手段补充定位,常与北斗室外定位拼接。', analogy: '出了"卫星照得到"的地方,换一套室内"导航"接力。', lesson: 'inspect-08-indoor' },

  /* ── 模块 7 · 形变与安全监测 ── */
  { id: 'xingbianjiance', name: '形变监测', def: '长期、连续、毫米级地测量杆塔、大坝、边坡等的微小位移,提前发现倾斜、沉降、滑移。', analogy: '给静止的设施做"毫米级体重秤",一点点变化都称得出。', lesson: 'monitor-01-why-mm' },

  /* ── 模块 8 · 资产与作业管理 ── */
  { id: 'shikongbiaoqian', name: '时空标签', def: '给数据、设备、作业打上"在哪(位置)+ 何时(时间)"的标记,让一切可追溯、可对齐。', analogy: '每条记录都自带一张"地点+时间"的便签。', lesson: 'asset-01-tag' },
  { id: 'dianziweilan', name: '电子围栏', en: 'geofence', def: '在地图上划一圈虚拟边界,人员或车辆越界、进出就自动触发提醒或报警。', analogy: '画一道"看不见的栏杆",越线就响铃。', lesson: 'asset-08-geofence' },
  { id: 'liangpiao', name: '两票', def: '电力现场作业的工作票和操作票,是安全管理的核心凭证;绑上位置和时间可防代签、防走错间隔。', analogy: '作业的"出入证 + 操作清单"。', lesson: 'asset-03-twoticket' },

  /* ── 模块 10 · 时空数据与数字电网 ── */
  { id: 'shikongshuju', name: '时空数据底座', def: '统一时空基准下整合的位置、时间、地理与电网数据的基础平台,数字电网各应用都建在它上面。', analogy: '数字电网这栋楼的"地基"。', lesson: 'data-01-base' },
  { id: 'gis', name: '地理信息系统', en: 'GIS', def: '管理和分析地理空间数据的系统;电力用它装设备、线路、地形,北斗给它实时精确坐标。', analogy: '一张会算账、能查询的"活地图"。', lesson: 'data-02-gis' },
  { id: 'yizhangtu', name: '电网一张图', def: '把设备、线路、用户、地理在统一时空基准下对齐到一张图上,各部门看同一份"底图"。', analogy: '全公司共用、对得齐的一张"总图"。', lesson: 'data-03-onemap' },
  { id: 'shuziluansheng', name: '数字孪生', en: 'digital twin', def: '为真实电网建一个实时同步的虚拟镜像,用来仿真、预测、优化;位置和时间对齐是它的前提。', analogy: '电网的"虚拟双胞胎",现实动它也动。', lesson: 'data-04-twin' },
  { id: 'xinxingdianli', name: '新型电力系统', def: '以新能源为主体的电力系统,风光多、波动大、设备分散,更依赖精准的时空协同。', analogy: '从"几台大机组说了算"变成"千万个小电源一起跳舞",更要踩准节拍。', lesson: 'data-05-newpower' },
  { id: 'yuanwanghechu', name: '源网荷储', def: '电源、电网、负荷、储能四端协同。要让它们配合默契,统一的时间和位置基准不可或缺。', analogy: '四个声部合唱,得有同一个指挥和节拍器。', lesson: 'data-06-sghc' },
  { id: 'shikongzhineng', name: '时空智能', def: '让 AI 用上"在哪、何时"的信息做预测和决策,如负荷预测、灾害预警、巡检识别。', analogy: 'AI 不光看数据,还知道这事"在哪、什么时候"发生。', lesson: 'data-08-intelligence' },

  /* ── 模块 11 · 安全自主与未来 ── */
  { id: 'leo', name: '低轨星座增强', en: 'LEO', def: '用几百到上千公里的低轨卫星补充导航,信号更强、几何变化快,能加快 PPP 收敛、增强抗干扰。', analogy: '在高空灯塔之外,再加一圈飞得低、更亮、移动快的"信号灯"。', lesson: 'future-05-leo' }
]);
