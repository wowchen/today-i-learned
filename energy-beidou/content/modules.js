/* 12 个模块元信息 + 学习路线(路线图优先:首页"继续学习"按此推进)。
   short 用于侧边图签(≤2 字),no 是目录序号。
   路线占位共 100 课:未编写的课程显示"待编写",写好课程文件后自动激活。 */
(function () {
  'use strict';

  [
    { id: 'guide',   no: 0,  short: '导览', title: '学习导览',        sub: '怎么用 · 全景图 · 路线 · 术语',      desc: '网站怎么用、一图看懂"能源北斗"全景、学习路线怎么走、术语点查与收藏怎么玩。' },
    { id: 'beidou',  no: 1,  short: '北斗', title: '北斗基础',        sub: 'GNSS · 四大系统 · 混合星座 · 短报文', desc: '卫星导航是什么、四大全球系统、北斗三步走、GEO/IGSO/MEO 混合星座、B1/B2/B3 信号、RNSS 与 RDSS、短报文、三球交会定位原理。' },
    { id: 'pnt',     no: 2,  short: '时空', title: '时空服务原理',    sub: '定位 · 导航 · 授时 · 时空基准',       desc: 'PNT 三件套、什么是时空基准、坐标系 CGCS2000、高程基准、时间系统 BDT、授时原理、单点与差分、定位误差来源、完好性与连续性。' },
    { id: 'augment', no: 3,  short: '增强', title: '高精度增强',      sub: 'RTK · 地基增强 · PPP · 毫米级',       desc: '单点为什么只能到米级、差分 DGNSS、RTK 厘米级、地基增强 CORS 网、星基增强 SBAS、精密单点定位 PPP、北斗 PPP-B2b、毫米级形变监测、精度选型表。' },
    { id: 'energy',  no: 4,  short: '能源', title: '能源北斗总览',    sub: '战略 · 自主可控 · 应用体系',          desc: '能源行业为什么需要时空服务、"能源北斗"国家战略、替代 GPS 的自主可控、国网/南网应用体系、五大应用域、价值逻辑、政策标准、全景图。' },
    { id: 'timing',  no: 5,  short: '授时', title: '授时与同步',      sub: '微秒纳秒 · PMU · 抗干扰',             desc: '电网为什么要精准时间、同步的层级、故障录波 SOE 时标、PMU/WAMS 广域同步、线路差动同步、为何不能只靠 GPS、北斗授时装置、守时驯钟、授时安全与抗干扰。' },
    { id: 'inspect', no: 6,  short: '巡检', title: '巡检与运维',      sub: '无人机 · 杆塔 · 人员 · 抢修',         desc: '传统巡检的痛点、输电通道巡检、无人机自主巡检、杆塔精准坐标库、现场人员定位、应急抢修导航、配网移动作业、室内定位补充、巡检数据时空标签。' },
    { id: 'monitor', no: 7,  short: '监测', title: '形变与安全监测',  sub: '毫米级 · 地灾 · 大坝 · 预警',         desc: '为什么要毫米级形变监测、杆塔倾斜沉降、输电通道地质灾害预警、大坝与库岸变形、覆冰与舞动、监测站怎么工作、监测预警闭环、与地基增强网的关系、一个案例。' },
    { id: 'asset',   no: 8,  short: '作业', title: '资产与作业管理',  sub: '时空标签 · 电子围栏 · 调度',          desc: '时空标签与资产数字化、现场作业到位管控、两票合规定位、车船物资调度、移动电源定位、基建进度时空管理、仓储备品定位、高风险区电子围栏与越界预警。' },
    { id: 'message', no: 9,  short: '报文', title: '短报文与应急通信', sub: '无公网 · 位置上报 · 灾害',            desc: '短报文是什么能发多少字、无公网区域通信、山区海上灾区电力设施、应急位置上报、对比卫星电话、灾害应急保通信、监测终端回传、容量与代际升级。' },
    { id: 'data',    no: 10, short: '数据', title: '时空数据与数字电网', sub: '一张图 · 数字孪生 · 时空智能',       desc: '时空数据底座、GIS 与北斗融合、电网一张图、时空大数据与数字孪生、与新型电力系统融合、源网荷储时空协同、数据治理与标准、时空智能、数据安全与涉密。' },
    { id: 'future',  no: 11, short: '未来', title: '安全自主与未来',  sub: '自主可控 · 防欺骗 · 5G · 低轨',       desc: '自主可控的战略意义、替代 GPS 的安全账、抗干扰与防欺骗、北斗 + 5G 融合定位、低轨星座增强、北斗 + AI 时空智能、短报文全球化、能源北斗发展趋势。' }
  ].forEach(EBD.registerModule);

  /* 学习路线:有序课程 id,共 100 个占位。
     内容扩充时:写好课程文件 → 在 index.html 加 script 标签 → 此处占位自动激活。 */
  EBD.registerPath([
    /* ── 模块 0 · 学习导览(4) ── */
    { id: 'guide-01-howto', module: 'guide', title: '欢迎:这个网站怎么用' },
    { id: 'guide-02-map',   module: 'guide', title: '一图看懂"能源北斗"全景' },
    { id: 'guide-03-route', module: 'guide', title: '学习路线:先学什么后学什么' },
    { id: 'guide-04-terms', module: 'guide', title: '术语点查与收藏怎么玩' },

    /* ── 模块 1 · 北斗基础(10) ── */
    { id: 'beidou-01-gnss',         module: 'beidou', title: '卫星导航是怎么回事:天上的"灯塔"' },
    { id: 'beidou-02-four-systems', module: 'beidou', title: '四大全球系统:GPS、格洛纳斯、伽利略、北斗' },
    { id: 'beidou-03-three-steps',  module: 'beidou', title: '北斗"三步走":从有源到全球' },
    { id: 'beidou-04-constellation',module: 'beidou', title: '混合星座:GEO、IGSO、MEO 各司其职' },
    { id: 'beidou-05-signal',       module: 'beidou', title: 'B1/B2/B3:卫星发的是什么信号' },
    { id: 'beidou-06-rnss-rdss',    module: 'beidou', title: 'RNSS 与 RDSS:两种"定位"不是一回事' },
    { id: 'beidou-07-shortmsg',     module: 'beidou', title: '短报文:北斗独有的"既能定位又能发消息"' },
    { id: 'beidou-08-positioning',  module: 'beidou', title: '北斗为什么能定位:三球交会一次讲清' },
    { id: 'beidou-09-why-four',     module: 'beidou', title: '为什么至少要四颗星' },
    { id: 'beidou-10-vs-gps',       module: 'beidou', title: '北斗和 GPS 到底差在哪' },

    /* ── 模块 2 · 时空服务原理(9) ── */
    { id: 'pnt-01-trio',         module: 'pnt', title: 'PNT 三件套:定位、导航、授时' },
    { id: 'pnt-02-datum',        module: 'pnt', title: '时空基准:一切位置和时间的"尺子"' },
    { id: 'pnt-03-cgcs2000',     module: 'pnt', title: 'CGCS2000:中国自己的大地坐标系' },
    { id: 'pnt-04-height',       module: 'pnt', title: '高程基准:卫星说的"高"不是海拔' },
    { id: 'pnt-05-bdt',          module: 'pnt', title: 'BDT:北斗时和你手机上的时间差多少' },
    { id: 'pnt-06-timing',       module: 'pnt', title: '授时原理:把星上的原子钟"送"到地面' },
    { id: 'pnt-07-single-diff',  module: 'pnt', title: '单点定位 vs 差分定位' },
    { id: 'pnt-08-error',        module: 'pnt', title: '定位误差从哪来:电离层、对流层、多路径' },
    { id: 'pnt-09-integrity',    module: 'pnt', title: '完好性与连续性:能不能"信得过"' },

    /* ── 模块 3 · 高精度增强(9) ── */
    { id: 'augment-01-why-meter', module: 'augment', title: '为什么单点定位只能到"米级"' },
    { id: 'augment-02-dgnss',     module: 'augment', title: '差分 DGNSS:用基准站抵消公共误差' },
    { id: 'augment-03-rtk',       module: 'augment', title: 'RTK:厘米级实时定位是怎么做到的' },
    { id: 'augment-04-cors',      module: 'augment', title: '地基增强网 CORS:遍布全国的"地面灯塔"' },
    { id: 'augment-05-sbas',      module: 'augment', title: '星基增强 SBAS:用卫星播发改正数' },
    { id: 'augment-06-ppp',       module: 'augment', title: 'PPP 精密单点定位:一台机器也能到厘米' },
    { id: 'augment-07-ppp-b2b',   module: 'augment', title: '北斗 PPP-B2b:把改正数直接从天上发下来' },
    { id: 'augment-08-mm',        module: 'augment', title: '毫米级:静态长期观测怎么榨出精度' },
    { id: 'augment-09-table',     module: 'augment', title: '一张表看懂:米、分米、厘米、毫米级各用在哪' },

    /* ── 模块 4 · 能源北斗总览(8) ── */
    { id: 'energy-01-why',       module: 'energy', title: '能源行业为什么离不开"时与空"' },
    { id: 'energy-02-strategy',  module: 'energy', title: '"能源北斗":一个国家级的融合战略' },
    { id: 'energy-03-autonomy',  module: 'energy', title: '自主可控:为什么一定要换掉 GPS' },
    { id: 'energy-04-system',    module: 'energy', title: '国网与南网的北斗应用体系' },
    { id: 'energy-05-domains',   module: 'energy', title: '五大应用域:授时、巡检、监测、作业、通信' },
    { id: 'energy-06-value',     module: 'energy', title: '北斗 + 电力的价值逻辑:省钱、保安全、补盲区' },
    { id: 'energy-07-policy',    module: 'energy', title: '政策与标准:谁在推、按什么规矩来' },
    { id: 'energy-08-panorama',  module: 'energy', title: '全景图:一张图看懂能源北斗' },

    /* ── 模块 5 · 授时与同步(9) ── */
    { id: 'timing-01-why',       module: 'timing', title: '电网为什么对"时间"这么较真' },
    { id: 'timing-02-levels',    module: 'timing', title: '同步要多准:从毫秒到纳秒' },
    { id: 'timing-03-soe',       module: 'timing', title: '故障录波与 SOE:谁先谁后差几微秒' },
    { id: 'timing-04-pmu',       module: 'timing', title: 'PMU 与 WAMS:给电网做"同步心电图"' },
    { id: 'timing-05-diff',      module: 'timing', title: '线路差动保护:两端必须对准同一刻' },
    { id: 'timing-06-not-gps',   module: 'timing', title: '为什么不能把授时全押在 GPS 上' },
    { id: 'timing-07-device',    module: 'timing', title: '北斗授时装置长什么样、怎么接进站' },
    { id: 'timing-08-holdover',  module: 'timing', title: '守时与驯钟:卫星信号丢了怎么办' },
    { id: 'timing-09-antijam',   module: 'timing', title: '授时安全:抗干扰与防欺骗' },

    /* ── 模块 6 · 巡检与运维(9) ── */
    { id: 'inspect-01-pain',     module: 'inspect', title: '传统巡检有多难:几十万基杆塔靠腿走' },
    { id: 'inspect-02-channel',  module: 'inspect', title: '输电通道巡检:线走到哪、隐患在哪' },
    { id: 'inspect-03-uav',      module: 'inspect', title: '无人机自主巡检:航线靠北斗"打点"' },
    { id: 'inspect-04-tower-db', module: 'inspect', title: '杆塔精准坐标库:给每基塔一个时空身份证' },
    { id: 'inspect-05-people',   module: 'inspect', title: '现场人员定位:作业人在哪、安不安全' },
    { id: 'inspect-06-repair',   module: 'inspect', title: '应急抢修导航:最快摸到故障点' },
    { id: 'inspect-07-mobile',   module: 'inspect', title: '配网巡检与移动作业终端' },
    { id: 'inspect-08-indoor',   module: 'inspect', title: '变电站室内定位:卫星照不到怎么办' },
    { id: 'inspect-09-tag',      module: 'inspect', title: '巡检数据的时空标签:照片自带经纬度和时间' },

    /* ── 模块 7 · 形变与安全监测(9) ── */
    { id: 'monitor-01-why-mm',   module: 'monitor', title: '为什么要"毫米级"盯着不动的设施' },
    { id: 'monitor-02-tower',    module: 'monitor', title: '杆塔倾斜与基础沉降监测' },
    { id: 'monitor-03-geohazard',module: 'monitor', title: '输电通道地质灾害:滑坡、塌陷早知道' },
    { id: 'monitor-04-dam',      module: 'monitor', title: '大坝与库岸变形监测' },
    { id: 'monitor-05-ice',      module: 'monitor', title: '覆冰与舞动:导线也会"跳舞"' },
    { id: 'monitor-06-station',  module: 'monitor', title: '一个 GNSS 形变监测站是怎么工作的' },
    { id: 'monitor-07-loop',     module: 'monitor', title: '从监测到预警:数据怎么变成报警' },
    { id: 'monitor-08-network',  module: 'monitor', title: '监测精度从哪来:离不开地基增强网' },
    { id: 'monitor-09-case',     module: 'monitor', title: '一个滑坡预警案例的全流程' },

    /* ── 模块 8 · 资产与作业管理(8) ── */
    { id: 'asset-01-tag',        module: 'asset', title: '时空标签:让每台设备都"知道自己在哪"' },
    { id: 'asset-02-onsite',     module: 'asset', title: '到位管控:作业到没到、在不在该在的地方' },
    { id: 'asset-03-twoticket',  module: 'asset', title: '两票合规:工作票和操作票绑上位置' },
    { id: 'asset-04-dispatch',   module: 'asset', title: '车辆、船只、物资的时空调度' },
    { id: 'asset-05-mobile',     module: 'asset', title: '移动储能与应急电源:跑哪了、接没接对' },
    { id: 'asset-06-construction',module: 'asset', title: '基建施工进度的时空管理' },
    { id: 'asset-07-warehouse',  module: 'asset', title: '仓储与备品备件定位' },
    { id: 'asset-08-geofence',   module: 'asset', title: '高风险区电子围栏:越界就报警' },

    /* ── 模块 9 · 短报文与应急通信(8) ── */
    { id: 'message-01-what',     module: 'message', title: '短报文是什么:北斗能"发短信"' },
    { id: 'message-02-no-net',   module: 'message', title: '没有公网信号的地方,怎么把数据传出来' },
    { id: 'message-03-remote',   module: 'message', title: '山区、海上、灾区的电力设施通信' },
    { id: 'message-04-report',   module: 'message', title: '应急指挥与位置上报' },
    { id: 'message-05-vs-sat',   module: 'message', title: '短报文 vs 卫星电话:各管各的' },
    { id: 'message-06-disaster', module: 'message', title: '灾害应急:断网断电时的"最后一条路"' },
    { id: 'message-07-telemetry',module: 'message', title: '监测终端用短报文回传数据' },
    { id: 'message-08-capacity', module: 'message', title: '能发多长:容量与区域到全球的升级' },

    /* ── 模块 10 · 时空数据与数字电网(9) ── */
    { id: 'data-01-base',        module: 'data', title: '时空数据底座:数字电网的"地基"' },
    { id: 'data-02-gis',         module: 'data', title: 'GIS 与北斗:地图加上"实时坐标"' },
    { id: 'data-03-onemap',      module: 'data', title: '电网一张图:把设备、线路、地理对齐' },
    { id: 'data-04-twin',        module: 'data', title: '数字孪生:虚拟电网怎么跟真实对上' },
    { id: 'data-05-newpower',    module: 'data', title: '和新型电力系统怎么融合' },
    { id: 'data-06-sghc',        module: 'data', title: '源网荷储的时空协同' },
    { id: 'data-07-governance',  module: 'data', title: '时空数据治理与标准' },
    { id: 'data-08-intelligence',module: 'data', title: '时空智能:AI 用上"在哪、何时"' },
    { id: 'data-09-security',    module: 'data', title: '数据安全:位置也是要保护的秘密' },

    /* ── 模块 11 · 安全自主与未来(8) ── */
    { id: 'future-01-autonomy',  module: 'future', title: '自主可控:把"时与空"攥在自己手里' },
    { id: 'future-02-gps-account',module: 'future', title: '替代 GPS 的一笔"安全账"' },
    { id: 'future-03-anti-spoof',module: 'future', title: '抗干扰与防欺骗:别被"假信号"骗了' },
    { id: 'future-04-5g',        module: 'future', title: '北斗 + 5G:室内室外无缝定位' },
    { id: 'future-05-leo',       module: 'future', title: '低轨星座增强:让信号更强、收敛更快' },
    { id: 'future-06-ai',        module: 'future', title: '北斗 + AI:时空智能的下一步' },
    { id: 'future-07-global-msg',module: 'future', title: '短报文全球化:从区域到全球' },
    { id: 'future-08-trends',    module: 'future', title: '能源北斗的发展趋势与展望' }
  ]);
})();
