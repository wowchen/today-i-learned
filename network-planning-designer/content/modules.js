/* 模块元数据 + 学习路径(网络规划设计师 · 软考高级)
   tag:导览/基础/核心/进阶/实战;lessons 为该模块课时数。
   路径顺序 = 推荐学习动线(基础→核心→进阶→实战)。 */
window.NPD = window.NPD || {};

NPD.modules = [
  { id: 'guide',     order: 0,  title: '学习导览',            desc: '考试介绍、学习路线、备考策略、题库与计算器怎么用', lessons: 4, tag: '导览' },
  { id: 'comm',      order: 1,  title: '数据通信基础',        desc: '信号与编码调制、复用技术、奈奎斯特与香农、传输介质', lessons: 5, tag: '基础' },
  { id: 'arch',      order: 2,  title: '网络体系结构',        desc: 'OSI/RM 七层、TCP/IP 四层、分层封装与对比', lessons: 4, tag: '基础' },
  { id: 'phy',       order: 3,  title: '物理层与传输介质',     desc: '双绞线/同轴、光纤、编码、综合布线', lessons: 4, tag: '基础' },
  { id: 'link',      order: 4,  title: '数据链路层',          desc: '成帧、差错控制、流量控制、MAC子层、PPP/HDLC', lessons: 5, tag: '基础' },
  { id: 'net',       order: 5,  title: '网络层与 IP',         desc: 'IPv4、子网划分 CIDR/VLSM、IPv6、ARP/ICMP、NAT、分片转发', lessons: 6, tag: '核心' },
  { id: 'routing',   order: 6,  title: '路由协议',            desc: '静态路由、RIP、OSPF、BGP、IS-IS、路由选路与收敛', lessons: 6, tag: '核心' },
  { id: 'transport', order: 7,  title: '传输层',              desc: 'TCP/UDP、三次握手四次挥手、流量与拥塞控制、端口套接字', lessons: 4, tag: '核心' },
  { id: 'app',       order: 8,  title: '应用层服务',          desc: 'DNS、DHCP、HTTP/HTTPS、邮件、FTP/SNMP/Telnet', lessons: 5, tag: '核心' },
  { id: 'lan',       order: 9,  title: '局域网与交换',        desc: '以太网、VLAN、生成树、链路聚合、三层交换', lessons: 5, tag: '核心' },
  { id: 'wan',       order: 10, title: '广域网与接入',        desc: 'PSTN/ISDN、帧中继/ATM、MPLS、SDH 光传输', lessons: 4, tag: '核心' },
  { id: 'device',    order: 11, title: '网络互连设备',        desc: '中继器/集线器/网桥、交换机、路由器、网关与防火墙', lessons: 4, tag: '核心' },
  { id: 'security',  order: 12, title: '网络安全',            desc: '加密、PKI与签名、防火墙DMZ、VPN/IPSec/SSL、IDS/IPS、AAA与隔离', lessons: 6, tag: '进阶' },
  { id: 'wireless',  order: 13, title: '无线与移动网络',      desc: 'WLAN/802.11、Wi-Fi标准与安全、蜂窝4G/5G、物联网', lessons: 4, tag: '进阶' },
  { id: 'storage',   order: 14, title: '网络存储',            desc: 'DAS/NAS、SAN/FC、iSCSI/IP-SAN', lessons: 3, tag: '进阶' },
  { id: 'emerging',  order: 15, title: '新一代网络',          desc: 'SDN/OpenFlow、NFV、SD-WAN、云计算网络与Overlay', lessons: 4, tag: '进阶' },
  { id: 'planning',  order: 16, title: '网络规划与设计',      desc: '需求分析、逻辑设计、物理设计、设备选型、结构化布线、机房工程', lessons: 6, tag: '进阶' },
  { id: 'ops',       order: 17, title: '网络运维与管理',      desc: 'SNMP、网管系统、性能监控分析、故障管理与QoS', lessons: 4, tag: '进阶' },
  { id: 'standard',  order: 18, title: '标准化·知识产权·专业英语', desc: '知识产权、标准化与标准代号、网络专业英语', lessons: 3, tag: '进阶' },
  { id: 'case',      order: 19, title: '案例分析专题',        desc: '总览答题、子网划分、路由交换、网络安全、网络规划、真题精解', lessons: 6, tag: '实战' },
  { id: 'essay',     order: 20, title: '论文写作专题',        desc: '论文总解、结构摘要、规划/设计/运维选题、素材范文', lessons: 6, tag: '实战' }
];

NPD.path = [
  // 导览
  'guide/01-exam-intro', 'guide/02-learning-path', 'guide/03-strategy', 'guide/04-features',
  // 数据通信基础
  'comm/01-signal', 'comm/02-encoding-modulation', 'comm/03-multiplexing', 'comm/04-nyquist-shannon', 'comm/05-transmission-media',
  // 网络体系结构
  'arch/01-osi', 'arch/02-tcpip', 'arch/03-layering-encap', 'arch/04-compare',
  // 物理层与传输介质
  'phy/01-medium-copper', 'phy/02-medium-fiber', 'phy/03-coding', 'phy/04-cabling',
  // 数据链路层
  'link/01-framing', 'link/02-error-control', 'link/03-flow-control', 'link/04-mac', 'link/05-ppp',
  // 网络层与 IP
  'net/01-ipv4', 'net/02-subnet', 'net/03-ipv6', 'net/04-arp-icmp', 'net/05-nat', 'net/06-fragment-forward',
  // 路由协议
  'routing/01-static', 'routing/02-rip', 'routing/03-ospf', 'routing/04-bgp', 'routing/05-isis', 'routing/06-selection',
  // 传输层
  'transport/01-tcp-udp', 'transport/02-handshake', 'transport/03-flow-congestion', 'transport/04-port-socket',
  // 应用层服务
  'app/01-dns', 'app/02-dhcp', 'app/03-http', 'app/04-email', 'app/05-other',
  // 局域网与交换
  'lan/01-ethernet', 'lan/02-vlan', 'lan/03-stp', 'lan/04-aggregation', 'lan/05-l3-switch',
  // 广域网与接入
  'wan/01-pstn-isdn', 'wan/02-fr-atm', 'wan/03-mpls', 'wan/04-sdh',
  // 网络互连设备
  'device/01-overview', 'device/02-switch', 'device/03-router', 'device/04-gateway-firewall',
  // 网络安全
  'security/01-crypto', 'security/02-pki', 'security/03-firewall', 'security/04-vpn', 'security/05-ids-ips', 'security/06-aaa',
  // 无线与移动网络
  'wireless/01-wlan', 'wireless/02-wifi-secure', 'wireless/03-cellular', 'wireless/04-iot',
  // 网络存储
  'storage/01-das-nas', 'storage/02-san', 'storage/03-iscsi',
  // 新一代网络
  'emerging/01-sdn', 'emerging/02-nfv', 'emerging/03-sdwan', 'emerging/04-cloud-network',
  // 网络规划与设计
  'planning/01-requirement', 'planning/02-logical', 'planning/03-physical', 'planning/04-device-selection', 'planning/05-cabling', 'planning/06-room',
  // 网络运维与管理
  'ops/01-snmp', 'ops/02-nms', 'ops/03-performance', 'ops/04-fault',
  // 标准化·知识产权·专业英语
  'standard/01-ip', 'standard/02-standardization', 'standard/03-english',
  // 案例分析专题
  'case/01-overview', 'case/02-subnet', 'case/03-routing-switch', 'case/04-security', 'case/05-planning', 'case/06-real',
  // 论文写作专题
  'essay/01-overview', 'essay/02-structure', 'essay/03-topic-planning', 'essay/04-topic-design', 'essay/05-topic-ops', 'essay/06-material'
];

NPD.totalLessons = NPD.path.length;
