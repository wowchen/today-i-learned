/* 术语表(网络规划设计师)。格式 {id,name,en,def,analogy,module}
   id 为正文 <gd data-term="id"> 引用键,务必与课时一致。 */
window.NPD = window.NPD || {};

NPD.terms = [
  // 数据通信基础
  { id: 'signal', name: '信号', en: 'Signal', def: '信息的物理载体,分模拟(连续)与数字(离散)。数据通信研究数字信号的传输。', analogy: '信号是"搬数据的货车",模拟像水波、数字像方波。', module: 'comm' },
  { id: 'bandwidth', name: '带宽', en: 'Bandwidth', def: '信号或信道占据/通过的频率范围(Hz),或链路最高数据传输能力(bps),常混用。', analogy: '"路有多宽"——能并排跑几辆车。', module: 'comm' },
  { id: 'modulation', name: '调制', en: 'Modulation', def: '把基带信号搬移到载波上,便于远距离/无线传输;常用调幅、调频、调相。', analogy: '把"低音人声"搭到"高音载波"上发出去。', module: 'comm' },
  { id: 'encoding', name: '编码', en: 'Line Coding', def: '把数字比特变成适合信道传输的电平波形,如 NRZ、曼彻斯特、4B/5B。', analogy: '给 0/1 规定"长什么样"再上路。', module: 'comm' },
  { id: 'multiplexing', name: '多路复用', en: 'Multiplexing', def: '在一条信道上同时传输多路信号,分频分/时分/波分/码分复用。', analogy: '一条高速公路划多条车道各跑各的。', module: 'comm' },
  { id: 'fdm', name: '频分复用', en: 'FDM', def: '把信道带宽分成不重叠子频带,各路信号各占一频带同时传输。', analogy: '广播电台各占一个频率互不干扰。', module: 'comm' },
  { id: 'tdm', name: '时分复用', en: 'TDM', def: '把时间分成等长时隙,各路信号轮流占用整个带宽。', analogy: '大家轮流用同一整条路,各给一小段时间。', module: 'comm' },
  { id: 'wdm', name: '波分复用', en: 'WDM', def: '光纤上用不同波长(颜色)的光载波同时传输多路信号,即光的频分复用。', analogy: '一根光纤里跑好几束不同颜色的光。', module: 'comm' },
  { id: 'nyquist', name: '奈奎斯特定理', en: 'Nyquist Theorem', def: '理想无噪信道,带宽 W(Hz)、V 个离散电平,最大码元速率 2W,容量 C=2W·log₂(V)。', analogy: '"车道宽 W、每车装 log₂(V) 比特,最多每秒 2W 车。"', module: 'comm' },
  { id: 'shannon', name: '香农定理', en: 'Shannon Theorem', def: '有噪信道容量 C=W·log₂(1+S/N),给出带宽 W、信噪比 S/N 下的理论上限。', analogy: '有噪声时,无论怎么编码都超不过这条"天花板"。', module: 'comm' },
  { id: 'baud-rate', name: '波特率', en: 'Baud Rate', def: '每秒传输的码元(信号状态)个数,单位 Baud;比特率=波特率×log₂(V)。', analogy: '"每秒发几个信号包",每包能装几比特看电平数。', module: 'comm' },
  { id: 'snr', name: '信噪比', en: 'Signal-to-Noise Ratio', def: '信号功率与噪声功率之比,常用分贝 dB 表示:SNR(dB)=10·lg(S/N)。', analogy: '"有用声音比背景噪声大多少"。', module: 'comm' },

  // 网络体系结构
  { id: 'osi', name: 'OSI 参考模型', en: 'OSI/RM', def: '七层网络体系结构:物理、数据链路、网络、传输、会话、表示、应用。', analogy: '网络通信的"七层楼"标准图纸。', module: 'arch' },
  { id: 'tcpip', name: 'TCP/IP 模型', en: 'TCP/IP Model', def: '四层实用模型:网络接口、网际(IP)、传输(TCP/UDP)、应用;互联网事实标准。', analogy: '互联网真正在用的"四层简装版"。', module: 'arch' },
  { id: 'encapsulation', name: '封装', en: 'Encapsulation', def: '发送方每层把上层 PDU 加上本层首部(及尾部)形成本层 PDU 的过程。', analogy: '信件一层层套信封,每层贴上自己的标签。', module: 'arch' },
  { id: 'pdu', name: 'PDU', en: 'Protocol Data Unit', def: '协议数据单元:各层对等实体间交换的信息单位,如帧、分组、报文段。', analogy: '每一层"运货的标准箱子"大小不同。', module: 'arch' },
  { id: 'sap', name: '服务访问点', en: 'SAP', def: '相邻层之间提供/使用服务的接口,上层通过 SAP 调用下层服务。', analogy: '上下层之间的"取件窗口"。', module: 'arch' },

  // 物理层与传输介质
  { id: 'twisted-pair', name: '双绞线', en: 'Twisted Pair', def: '两根绝缘铜线绞合,分非屏蔽(UTP)与屏蔽(STP),常用网线。', analogy: '两根铜线拧麻花,抵消外部干扰。', module: 'phy' },
  { id: 'fiber', name: '光纤', en: 'Optical Fiber', def: '以光的全反射传输光信号,分单模(芯细、远距)与多模(芯粗、近距)。', analogy: '一根玻璃丝,用光传数据,又快又远。', module: 'phy' },
  { id: 'single-mode-fiber', name: '单模光纤', en: 'Single-Mode Fiber', def: '芯径小只传单一模式光,色散小、带宽大、距离远,用于长途干线。', analogy: '"一条直线射到底",传得远不失真。', module: 'phy' },
  { id: 'cabling', name: '综合布线', en: 'Structured Cabling', def: '建筑内统一规划的数据/语音布线系统,分工作区、水平、主干、管理、设备间等子系统。', analogy: '大楼里"一次布好、通用插拔"的线路管网。', module: 'phy' },

  // 数据链路层
  { id: 'frame', name: '帧', en: 'Frame', def: '数据链路层的 PDU,由首部、数据和帧尾(含校验)构成,如以太网帧。', analogy: '链路层发货的"标准包裹"。', module: 'link' },
  { id: 'mac-address', name: 'MAC 地址', en: 'MAC Address', def: '网卡硬件地址,48 位,链路层寻址用,局域网内唯一。', analogy: '网卡的"出厂身份证号"。', module: 'link' },
  { id: 'csma-cd', name: 'CSMA/CD', en: 'CSMA/CD', def: '载波监听多路访问/冲突检测:发前先听、发时检测冲突,冲突后退避重发,以太网经典机制。', analogy: '"先听后说、边说边听,撞了就退后重来。"', module: 'link' },
  { id: 'csma-ca', name: 'CSMA/CA', en: 'CSMA/CA', def: '载波监听多路访问/冲突避免,用于无线,发前预约/退避尽量避免冲突。', analogy: '无线"先举手再发言",尽量别撞。', module: 'link' },
  { id: 'crc', name: 'CRC', en: 'Cyclic Redundancy Check', def: '循环冗余校验:用多项式除法生成校验码附在帧尾,检错能力强、开销小。', analogy: '给包裹盖个"防篡改戳",错了就重传。', module: 'link' },
  { id: 'hamming', name: '海明码', en: 'Hamming Code', def: '一种既能检错又能纠错的编码,通过插入校验位定位单比特错误。', analogy: '不仅能发现错,还能指出错在哪一位并改正。', module: 'link' },
  { id: 'ppp', name: 'PPP', en: 'Point-to-Point Protocol', def: '点对点协议:支持多协议、身份认证、差错检测的广域网链路层协议。', analogy: '两台路由器之间点对点连线的"通信规矩"。', module: 'link' },

  // 网络层与 IP
  { id: 'ipv4', name: 'IPv4', en: 'IPv4', def: '32 位地址、分网络/主机两部分,点分十进制表示,现仍主流。', analogy: '"四组数字"的门牌号。', module: 'net' },
  { id: 'ipv6', name: 'IPv6', en: 'IPv6', def: '128 位地址、冒号十六进制表示,地址空间巨大,内置安全与自动配置。', analogy: '"够给地球每粒沙子发一个号"的新门牌。', module: 'net' },
  { id: 'subnet', name: '子网', en: 'Subnet', def: '把一个 IP 网络借位划分为更小的逻辑网络,提高地址利用率与隔离。', analogy: '把大院分成几栋小楼,各用一段门牌。', module: 'net' },
  { id: 'cidr', name: 'CIDR', en: 'CIDR', def: '无类别域间路由:取消 A/B/C 分类,用"IP/前缀"任意划分网络,缓解地址浪费与路由膨胀。', analogy: '"不看出身、只看前缀位数"的灵活划网法。', module: 'net' },
  { id: 'vlsm', name: 'VLSM', en: 'VLSM', def: '可变长子网掩码:同一网络内按子网大小用不同掩码,精细分配地址。', analogy: '按各科室实际人数分房间,大科室大段、小科室小段。', module: 'net' },
  { id: 'subnet-mask', name: '子网掩码', en: 'Subnet Mask', def: '32 位,1 对应网络位、0 对应主机位,用于区分 IP 的网络与主机部分。', analogy: '一把"量尺",标出哪几位算门牌、哪几位算房号。', module: 'net' },
  { id: 'nat', name: 'NAT', en: 'Network Address Translation', def: '网络地址转换:在内/外网边界把私网地址映射为公网地址,缓解地址不足并隐藏内网。', analogy: '公司前台"一个总机号代全公司打出去"。', module: 'net' },
  { id: 'arp', name: 'ARP', en: 'Address Resolution Protocol', def: '地址解析协议:由 IP 查到同一局域网内网卡的 MAC 地址。', analogy: '知道对方"工号(IP)"查他"座位号(MAC)"。', module: 'net' },
  { id: 'icmp', name: 'ICMP', en: 'ICMP', def: '互联网控制报文协议:在 IP 层传递差错与控制信息,ping/traceroute 依赖它。', analogy: '网络层的"报错与探路小信使"。', module: 'net' },
  { id: 'mtu', name: 'MTU', en: 'MTU', def: '最大传输单元:一个帧能承载的最大数据字节数,超长则需分片,以太网常用 1500。', analogy: '"一个包裹最大能装多少",超了就拆几个小包。', module: 'net' },

  // 路由协议
  { id: 'static-route', name: '静态路由', en: 'Static Route', def: '由管理员手工配置、不随拓扑变化的固定路由,稳定但缺乏自愈。', analogy: '"死记硬背的路线图",不会自己绕路。', module: 'routing' },
  { id: 'rip', name: 'RIP', en: 'RIP', def: '基于距离矢量、以跳数为度量的路由协议,16 跳不可达,收敛慢、适合小网。', analogy: '只数"过几站",不看路宽,小网络够用。', module: 'routing' },
  { id: 'ospf', name: 'OSPF', en: 'OSPF', def: '基于链路状态、用 Dijkstra 算法算最短路径的内部网关协议,收敛快、可分层分区。', analogy: '每台路由器拿着"全境地图"各自算最短路。', module: 'routing' },
  { id: 'bgp', name: 'BGP', en: 'BGP', def: '边界网关协议:自治系统间的路径矢量路由协议,承载互联网骨干路由。', analogy: '不同运营商之间"谈怎么走最划算"的协议。', module: 'routing' },
  { id: 'is-is', name: 'IS-IS', en: 'IS-IS', def: '中间系统到中间系统的链路状态路由协议,工作在数据链路层之上,常用于运营商骨干。', analogy: '和 OSPF 同类,电信级骨干常用。', module: 'routing' },
  { id: 'as', name: '自治系统', en: 'Autonomous System', def: '一组由统一机构管理、对外呈现一致路由策略的网络,BGP 的路由单位。', analogy: '一个"自己说了算"的运营商地盘。', module: 'routing' },
  { id: 'convergence', name: '收敛', en: 'Convergence', def: '拓扑变化后,所有路由器重新算出一致路由表并稳定下来的过程;越快越好。', analogy: '路况变了,大家重新对齐地图所用的时间。', module: 'routing' },

  // 传输层
  { id: 'tcp', name: 'TCP', en: 'TCP', def: '传输控制协议:面向连接、可靠、按序、流量与拥塞控制,用于网页/邮件等。', analogy: '"挂号信",保证送达、顺序不错。', module: 'transport' },
  { id: 'udp', name: 'UDP', en: 'UDP', def: '用户数据报协议:无连接、不可靠、开销小、快,用于 DNS/视频/语音等。', analogy: '"明信片",丢了自己负责,但快。', module: 'transport' },
  { id: 'three-handshake', name: '三次握手', en: 'Three-Way Handshake', def: 'TCP 建立连接:SYN→SYN+ACK→ACK,双方确认收发能力后连接建立。', analogy: '"你在吗""在""好,开始吧"三步对上暗号。', module: 'transport' },
  { id: 'congestion-control', name: '拥塞控制', en: 'Congestion Control', def: 'TCP 通过慢启动、拥塞避免、快重传、快恢复调节发送速率,防网络过载。', analogy: '感觉路堵就主动减速,别添乱。', module: 'transport' },
  { id: 'port', name: '端口', en: 'Port', def: '传输层 16 位地址,区分主机上的不同应用进程,如 80(Web)、443(HTTPS)。', analogy: '同一栋楼(主机)里不同房间(进程)的门牌。', module: 'transport' },

  // 应用层服务
  { id: 'dns', name: 'DNS', en: 'DNS', def: '域名系统:把域名解析为 IP,层次化分布式数据库,UDP 53。', analogy: '互联网的"114 查号台"。', module: 'app' },
  { id: 'dhcp', name: 'DHCP', en: 'DHCP', def: '动态主机配置协议:自动给主机分配 IP、掩码、网关、DNS 等,UDP 67/68。', analogy: '新设备进门"自动领工牌和门禁卡"。', module: 'app' },
  { id: 'http', name: 'HTTP', en: 'HTTP', def: '超文本传输协议:Web 客户端与服务器间请求/响应,默认 TCP 80,无状态。', analogy: '浏览器和服务器的"点菜—上菜"规矩。', module: 'app' },
  { id: 'https', name: 'HTTPS', en: 'HTTPS', def: 'HTTP over TLS:在 TLS/SSL 加密通道上跑 HTTP,默认 443,保障传输安全。', analogy: '把点菜对话装进"加密保险箱"。', module: 'app' },
  { id: 'ftp', name: 'FTP', en: 'FTP', def: '文件传输协议:双 TCP 连接(控制 21 + 数据),在主机间传文件。', analogy: '一条线指挥、一条线运货的"文件快递"。', module: 'app' },
  { id: 'smtp', name: 'SMTP/POP3', en: 'SMTP/POP3', def: 'SMTP 发送邮件(TCP 25),POP3/IMAP 收取邮件;邮件系统的核心三协议。', analogy: '"寄信"用 SMTP,"取信"用 POP3/IMAP。', module: 'app' },
  { id: 'snmp', name: 'SNMP', en: 'SNMP', def: '简单网络管理协议:管理站经 UDP 161 轮询被管设备,UDP 162 收告警。', analogy: '网管的"巡更打卡+警铃"协议。', module: 'app' },

  // 局域网与交换
  { id: 'ethernet', name: '以太网', en: 'Ethernet', def: '基于 CSMA/CD 的局域网技术(IEEE 802.3),速率从 10M 到 100G+,局域网事实标准。', analogy: '办公室联网的"通用母语"。', module: 'lan' },
  { id: 'vlan', name: 'VLAN', en: 'VLAN', def: '虚拟局域网:按逻辑而非物理划分广播域,IEEE 802.1Q 打标签,提升灵活与安全。', analogy: '一台交换机上"虚拟划几个互不相干的房间"。', module: 'lan' },
  { id: 'tag-8021q', name: '802.1Q', en: 'IEEE 802.1Q', def: '在以太网帧中插入 4 字节标签标识 VLAN,使跨交换机的 VLAN 帧可识别转发。', analogy: '给帧贴"VLAN 胸牌",跨设备也认得。', module: 'lan' },
  { id: 'stp', name: '生成树协议', en: 'STP', def: '阻塞冗余链路形成无环树形拓扑,避免广播风暴,故障时自动切换(RSTP 收敛更快)。', analogy: '把绕成圈的线"剪成树",断了再接上。', module: 'lan' },
  { id: 'lacp', name: '链路聚合', en: 'LACP', def: '把多条物理链路捆成一条逻辑链路,增加带宽并提供冗余(IEEE 802.3ad)。', analogy: '几条小路"并成一条宽路",还能互为备份。', module: 'lan' },
  { id: 'l3-switch', name: '三层交换', en: 'Layer-3 Switch', def: '兼具二层线速转发与三层路由能力,常用硬件实现 VLAN 间高速转发。', analogy: '交换机的速度 + 路由器的脑子,一机两用。', module: 'lan' },

  // 广域网与接入
  { id: 'pstn', name: 'PSTN/ISDN', en: 'PSTN/ISDN', def: '公共电话网与综合业务数字网:传统话音/窄带数据接入,ISDN 提供 2B+D 通道。', analogy: '老式"拨号上网"时代的电话线网络。', module: 'wan' },
  { id: 'frame-relay', name: '帧中继', en: 'Frame Relay', def: '简化差错控制、面向连接的分组交换广域网协议,虚电路复用、适合数据。', analogy: '"不纠错、只转发、出错重传"的精简快递。', module: 'wan' },
  { id: 'atm', name: 'ATM', en: 'ATM', def: '异步传输模式:53 字节固定信元、面向连接、QoS 有保证,曾用于骨干与语音视频。', analogy: '把货切成"统一 53 字节小盒"流水线传。', module: 'wan' },
  { id: 'mpls', name: 'MPLS', en: 'MPLS', def: '多协议标签交换:在 IP 与链路层间加标签转发,提速并支持流量工程与 VPN。', analogy: '给分组贴"快速通道条码",中途不再查表。', module: 'wan' },
  { id: 'sdh', name: 'SDH', en: 'SDH', def: '同步数字体系:光纤上以固定帧结构同步复用传输,速率等级 STM-1/4/16,可靠性高。', analogy: '光传输的"标准化货运列车时刻表"。', module: 'wan' },

  // 网络互连设备
  { id: 'repeater', name: '中继器/集线器', en: 'Repeater/Hub', def: '物理层设备:再生放大信号延长距离;集线器是多口中继器,共享带宽、广播转发。', analogy: '"信号加油站",单纯放大不认地址。', module: 'device' },
  { id: 'bridge', name: '网桥', en: 'Bridge', def: '数据链路层设备:按 MAC 地址转发并隔离冲突域,早期二设备互连。', analogy: '两个网段之间的"看门人",按地址放行。', module: 'device' },
  { id: 'switch', name: '交换机', en: 'Switch', def: '多端口网桥,基于 MAC 地址表线速转发帧、隔离冲突域,局域网核心设备。', analogy: '比集线器聪明,"按门牌精准投递"。', module: 'device' },
  { id: 'router', name: '路由器', en: 'Router', def: '网络层设备:按路由表在异构网络间转发分组、选路并隔离广播域。', analogy: '网际间的"导航员",跨网指路。', module: 'device' },
  { id: 'gateway', name: '网关', en: 'Gateway', def: '不同协议体系互连的转换设备/节点,可工作在多层,兼协议翻译。', analogy: '"两种话都懂"的翻译官,连不同世界。', module: 'device' },
  { id: 'firewall', name: '防火墙', en: 'Firewall', def: '在内/外网边界按安全策略过滤流量的设备,含包过滤/状态检测/应用层等。', analogy: '大楼"门岗+安检",按名单放行。', module: 'device' },

  // 网络安全
  { id: 'symmetric', name: '对称加密', en: 'Symmetric Encryption', def: '加解密用同一密钥,如 DES/3DES/AES,速度快、适合大数据量。', analogy: '"一把钥匙锁开共用",快但钥匙怎么传是问题。', module: 'security' },
  { id: 'asymmetric', name: '非对称加密', en: 'Asymmetric Encryption', def: '公钥加密、私钥解密(反之签名),如 RSA/ECC,解决密钥分发但较慢。', analogy: '"公开信箱人人能投、只有私钥开箱"。', module: 'security' },
  { id: 'rsa', name: 'RSA', en: 'RSA', def: '基于大整数分解难题的非对称算法,用于加密与数字签名,应用最广。', analogy: '靠"大数难分解"撑腰的公钥密码。', module: 'security' },
  { id: 'pki', name: 'PKI', en: 'PKI', def: '公钥基础设施:用 CA、证书、密钥等实现密钥管理与身份认证的体系。', analogy: '网络世界的"身份证签发+公证体系"。', module: 'security' },
  { id: 'ca', name: 'CA', en: 'Certificate Authority', def: '证书权威机构:签发并管理数字证书,为公钥与持有者身份背书。', analogy: '数字证书的"发证机关"。', module: 'security' },
  { id: 'digital-signature', name: '数字签名', en: 'Digital Signature', def: '用发送方私钥对消息摘要加密生成,供接收方验真伪与抗否认。', analogy: '"盖了私章的防伪签名",改不了、赖不掉。', module: 'security' },
  { id: 'hash', name: '哈希', en: 'Hash', def: '把任意长数据映射为定长摘要,如 MD5/SHA,单向、防篡改,用于完整性校验。', analogy: '给文件算个"指纹",改一个字指纹就变。', module: 'security' },
  { id: 'dmz', name: 'DMZ', en: 'DMZ', def: '非军事区:介于内外网之间的隔离区,放对外服务(如 Web/邮件),限制被攻破后的暴露面。', analogy: '公司"前厅",对外开放但不让进办公区。', module: 'security' },
  { id: 'vpn', name: 'VPN', en: 'VPN', def: '虚拟专用网络:在公网上建加密隧道,实现异地/移动安全接入内网。', analogy: '在公开公路上"挖一条加密专用隧道"。', module: 'security' },
  { id: 'ipsec', name: 'IPSec', en: 'IPSec', def: '网络层安全协议族,提供 AH/ESP 认证加密与密钥交换(IKE),常用于站点间 VPN。', analogy: '"在 IP 层给数据穿防弹衣"。', module: 'security' },
  { id: 'ssl-tls', name: 'SSL/TLS', en: 'SSL/TLS', def: '传输层/会话层安全协议,握手协商密钥后加密应用数据,HTTPS 即基于它。', analogy: '"先握手对暗号,再加密聊天"。', module: 'security' },
  { id: 'ids', name: 'IDS/IPS', en: 'IDS/IPS', def: '入侵检测/防御系统:旁路监测(IDS)或串行阻断(IPS)恶意流量。', analogy: '"监控摄像头(IDS)"+"门口保安拦人(IPS)"。', module: 'security' },
  { id: 'aaa', name: 'AAA', en: 'AAA', def: '认证、授权、计费:统一身份与访问管理框架,常见协议 RADIUS/TACACS+。', analogy: '"你是谁、能干啥、用了多少"三连管。', module: 'security' },

  // 无线与移动网络
  { id: 'wlan', name: 'WLAN', en: 'WLAN', def: '无线局域网:以无线电替代线缆,IEEE 802.11 系列为标准,Wi-Fi 是其商用品牌。', analogy: '"没线的局域网",靠空气传。', module: 'wireless' },
  { id: 'wifi', name: 'Wi-Fi', en: 'Wi-Fi', def: '基于 802.11 的无线局域网技术品牌,分 802.11a/b/g/n/ac/ax 等代际。', analogy: '大家连的"无线网",标准一代代升级。', module: 'wireless' },
  { id: 'wpa', name: 'WPA/WPA2', en: 'WPA/WPA2', def: 'Wi-Fi 保护访问:对无线流量加密与认证的安全协议,WPA2 用 AES 比 WEP 强。', analogy: '无线"门锁",WEP 是旧锁易撬,WPA2 换新锁。', module: 'wireless' },
  { id: 'iot', name: '物联网', en: 'IoT', def: '通过传感器/网络把物与物相连,实现感知与控制,常用短距(蓝牙/ZigBee/NB-IoT)。', analogy: '"万物上网",让灯泡水表也能说话。', module: 'wireless' },

  // 网络存储
  { id: 'das', name: 'DAS', en: 'DAS', def: '直连式存储:磁盘直接连服务器,不独立成网,简单但难共享。', analogy: '"每人一个外接硬盘",各管各的。', module: 'storage' },
  { id: 'nas', name: 'NAS', en: 'NAS', def: '网络附加存储:以文件级经局域网共享存储,易部署、多机共享。', analogy: '局域网上"大家共用的网络硬盘"。', module: 'storage' },
  { id: 'san-storage', name: 'SAN', en: 'SAN', def: '存储区域网络:块级高速专用网络连存储与服务器,性能高、可扩展,常用 FC/iSCSI。', analogy: '给服务器专门修的"存储高速公路"。', module: 'storage' },
  { id: 'iscsi', name: 'iSCSI', en: 'iSCSI', def: '在 TCP/IP 上承载 SCSI 命令的块存储协议,可用普通以太网组建 IP-SAN。', analogy: '"用网线传硬盘指令",省掉专用光纤。', module: 'storage' },

  // 新一代网络
  { id: 'sdn', name: 'SDN', en: 'SDN', def: '软件定义网络:控制面与数据面分离,集中控制器编程下发流表,灵活可控。', analogy: '"大脑集中、手脚分散",用软件统管全网。', module: 'emerging' },
  { id: 'openflow', name: 'OpenFlow', en: 'OpenFlow', def: 'SDN 控制器与交换机间的南向协议,按流表转发,是 SDN 早期标准。', analogy: 'SDN 大脑给交换机下"行动手册"的语言。', module: 'emerging' },
  { id: 'nfv', name: 'NFV', en: 'NFV', def: '网络功能虚拟化:用通用服务器+软件取代专用网络设备(防火墙/负载均衡等)。', analogy: '"专机变软件",在普通服务器上跑网元。', module: 'emerging' },
  { id: 'sdwan', name: 'SD-WAN', en: 'SD-WAN', def: '软件定义广域网:SDN 思想管理广域链路,按策略选路、降成本、提速。', analogy: '"广域网也能软件调度",多条线智能混用。', module: 'emerging' },
  { id: 'vxlan', name: 'VXLAN', en: 'VXLAN', def: '用 UDP 封装构建大二层 Overlay 网络,突破 VLAN 4096 上限、跨数据中心迁移。', analogy: '在三层网上"搭一条虚拟二层桥",虚拟机随便搬。', module: 'emerging' },

  // 网络运维与管理
  { id: 'qos', name: 'QoS', en: 'QoS', def: '服务质量:对流量分类、标记、调度,保障关键业务带宽/时延/抖动/丢包。', analogy: '"给 VIP 业务开绿色通道",该快就快。', module: 'ops' },
  { id: 'rmon', name: 'RMON', en: 'RMON', def: '远程监控:在设备侧采集流量统计上报,减轻网管站轮询压力。', analogy: '给设备装"驻点统计员",主动报数。', module: 'ops' },
  { id: 'mtbf', name: 'MTBF', en: 'MTBF', def: '平均故障间隔时间,衡量可靠性,越大越可靠。', analogy: '两次坏之间能撑多久。', module: 'ops' },
  { id: 'mttr', name: 'MTTR', en: 'MTTR', def: '平均修复时间,衡量可维护性,越小越好。', analogy: '坏了多快能修好。', module: 'ops' },

  // 标准化与知识产权
  { id: 'standardization', name: '标准化', en: 'Standardization', def: '为重复性事物制定统一规则以获最佳秩序;标准分国际/国家/行业/团体/企业等。', analogy: '大家约定"按同一把尺子来"。', module: 'standard' },
  { id: 'ip-right', name: '知识产权', en: 'Intellectual Property', def: '对智力成果依法享有的专有权,含著作权、专利权、商标权等。', analogy: '脑力劳动成果的"产权证"。', module: 'standard' },
  { id: 'ieee', name: 'IEEE', en: 'IEEE', def: '电气电子工程师协会,制定大量网络标准,如 802.3 以太网、802.11 无线。', analogy: '局域网/无线标准的"国际牵头单位"。', module: 'standard' },
  { id: 'ietf', name: 'IETF/RFC', en: 'IETF/RFC', def: '互联网工程任务组及其 RFC 文档,TCP/IP 体系的技术规范来源。', analogy: '互联网技术规矩的"起草处+说明书"。', module: 'standard' }
];
