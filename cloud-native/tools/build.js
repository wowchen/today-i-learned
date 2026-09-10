/* 云计算与云原生通识 · 单一数据源生成器(科普通识,克隆 telecom-fundamentals 共享引擎)。
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
  ['cloud-basics','云计算大白话','云在卖什么、三种服务模式、为什么能省钱','入门','Cloud Basics'],
  ['compute','计算与虚拟化','虚拟机、实例规格、弹性伸缩与 Serverless','基础','Compute & Virtualization'],
  ['storage','存储与备份','块/文件/对象三兄弟、分级、快照与容灾','基础','Storage & Backup'],
  ['cloudnet','云网络','VPC、子网、安全组、负载均衡、专线、CDN','核心','Cloud Network'],
  ['container','容器技术','隔离原理、镜像分层、Dockerfile 与运行时','核心','Containers'],
  ['k8s','容器编排 K8s','集群架构、Pod、Service、探针与自动扩缩','核心','Kubernetes'],
  ['microservice','微服务与治理','拆分、服务发现、网关、熔断、链路追踪','核心','Microservices'],
  ['devops','DevOps 与流水线','Git、CI/CD、制品、蓝绿灰度、IaC','实用','DevOps & CI/CD'],
  ['observability','可观测性','指标日志链路、告警降噪、SLO 与复盘','实用','Observability'],
  ['reliability','高可用与容灾','几个 9、多活、容量、混沌工程、演练','进阶','High Availability'],
  ['cloudsec','云安全与合规','责任共担、IAM、密钥、供应链、等保','实用','Cloud Security'],
  ['practice','上云实战与选型','迁移 6R、FinOps、信创多云、算电协同','实战','Cloud Practice']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['cloud','云计算','Cloud Computing','通过网络按需获取计算、存储、网络资源，用多少付多少。','用电网代替自备发电机。','cloud-basics'],
  ['iaas','IaaS','Infrastructure as a Service','只提供虚拟机、存储、网络等基础资源，系统和软件你自己装。','租毛坯房，自己装修。','cloud-basics'],
  ['paas','PaaS','Platform as a Service','提供运行环境与中间件，你只管把代码放上去。','租精装房，拎包入住。','cloud-basics'],
  ['saas','SaaS','Software as a Service','直接提供可用软件，开个账号就能用。','住酒店，什么都有。','cloud-basics'],
  ['region','地域','Region','云厂商在不同城市部署的独立资源区，选近的延迟低。','连锁店的城市分仓。','cloud-basics'],
  ['az','可用区','Availability Zone','同一地域内电力与网络相互独立的机房群，用来做冗余。','同城两座不同变电站的机房。','cloud-basics'],
  ['elasticity','弹性','Elasticity','业务高峰自动加资源、低谷自动减资源。','火锅店按客流加桌。','cloud-basics'],
  ['capex-opex','CAPEX 与 OPEX','CAPEX / OPEX','自建是一次性大投入，上云是持续按量付费。','买房与租房的区别。','cloud-basics'],

  ['vm','虚拟机','Virtual Machine','用软件模拟出的一台完整电脑，有自己的系统和网卡。','楼里隔出的独立公寓。','compute'],
  ['hypervisor','Hypervisor','Hypervisor','把物理机切成多台虚拟机的底层软件层。','房屋隔断的总设计师。','compute'],
  ['vcpu','vCPU','Virtual CPU','分配给虚拟机的虚拟处理器核，常由物理核超分而来。','一个工人照看两台机器。','compute'],
  ['overcommit','资源超分','Overcommit','把物理资源按比例多分配出去，靠业务不同时打满来省成本。','航班超售。','compute'],
  ['image','镜像','Image','装好系统与软件的模板，用它批量开出一样的机器。','盖房子的印章。','compute'],
  ['snapshot','快照','Snapshot','某个时刻磁盘或系统状态的存档，可回滚。','游戏存档。','compute'],
  ['autoscaling','弹性伸缩','Auto Scaling','按监控指标自动增减实例数量。','按客流自动排班。','compute'],
  ['serverless','无服务器','Serverless','只写函数、不管服务器，按调用次数与时长付费。','打车不养车。','compute'],
  ['instance-type','实例规格','Instance Type','云主机的配置套餐：几核几 G、适合什么负载。','手机的不同配置版本。','compute'],

  ['block-storage','块存储','Block Storage','像一块裸硬盘挂给主机用，性能高，要自己格式化。','给电脑外接一块硬盘。','storage'],
  ['file-storage','文件存储','File Storage','多台机器共享的目录，有层级结构，如 NFS。','共享的网盘文件夹。','storage'],
  ['object-storage','对象存储','Object Storage','用 HTTP 存取的海量文件仓库，无目录层级，便宜。','无限大的快递寄存柜。','storage'],
  ['bucket','存储桶','Bucket','对象存储里装对象的容器，名字全局唯一。','仓库里的货架分区。','storage'],
  ['storage-class','存储分级','Storage Class','按访问频率分标准、低频、归档，越冷越便宜。','常看的书放手边、旧书进库房。','storage'],
  ['backup','备份与容灾','Backup & DR','备份防丢数据，容灾防业务停摆，是两件事。','存档与备用电源。','storage'],
  ['raid','冗余存储','RAID','多块盘组合起来防单盘损坏，用空间换可靠。','队友请假有人顶班。','storage'],

  ['vpc','专有网络','VPC','云上你独占的虚拟网络，IP 段与路由自己定。','自家小区围墙里的路。','cloudnet'],
  ['subnet','子网','Subnet','VPC 里按 IP 段切分的区域，区分公网与私网。','小区里的一栋栋楼。','cloudnet'],
  ['security-group','安全组','Security Group','挂在实例上的虚拟防火墙，控制进出端口。','每户的门禁。','cloudnet'],
  ['slb','负载均衡','SLB / LB','把流量分给多台后端，并做健康检查。','银行叫号分流。','cloudnet'],
  ['nat-gateway','NAT 网关','NAT Gateway','让内网机器能出去访问、外网进不来。','只有单向门的中转室。','cloudnet'],
  ['eip','弹性公网 IP','Elastic IP','可随时绑定与解绑的公网地址。','能随身带走的手机号。','cloudnet'],
  ['direct-connect','云专线','Direct Connect','从机房或办公室拉专线直连云上 VPC。','专用高速通道。','cloudnet'],
  ['cdn','内容分发网络','CDN','把静态内容缓存到离用户近的节点，加速访问。','各地前置仓。','cloudnet'],

  ['container','容器','Container','把应用和依赖一起打包、共享宿主内核的运行单元。','标准集装箱。','container'],
  ['ns-cgroup','隔离与限额','Namespace & cgroup','容器靠 namespace 隔离视野、cgroup 限制资源用量。','隔间加限电。','container'],
  ['image-layer','镜像分层','Image Layer','镜像由只读层叠加而成，共享基础层省空间。','半成品套娃。','container'],
  ['dockerfile','Dockerfile','Dockerfile','描述怎么一步步构建镜像的文本配方。','菜的配方卡。','container'],
  ['registry','镜像仓库','Registry','存放与分发镜像的仓库，靠标签区分版本。','模具仓库。','container'],
  ['container-runtime','容器运行时','Container Runtime','真正负责把容器跑起来的底层程序，如 containerd。','汽车的发动机。','container'],
  ['stateless','无状态设计','Stateless','容器随时可删可重建，数据必须外置到存储。','一次性餐具。','container'],
  ['oci','OCI 标准','OCI','容器镜像与运行时的开放标准，保证到处都能跑。','集装箱的国际标准。','container'],

  ['k8s','Kubernetes','Kubernetes','容器编排系统，负责调度、伸缩与自愈。','码头的调度中心。','k8s'],
  ['control-plane','控制面','Control Plane','集群的大脑：API Server、调度器、控制器与 etcd。','指挥部。','k8s'],
  ['node','工作节点','Node','真正跑容器的机器，靠 kubelet 向控制面报到。','码头上的吊车。','k8s'],
  ['pod','Pod','Pod','最小调度单位，一个或多个共享网络的小容器。','同住一间宿舍的室友。','k8s'],
  ['deployment','Deployment','Deployment','声明副本数与镜像版本，负责滚动更新与回滚。','排班表。','k8s'],
  ['service','Service','Service','给一组 Pod 提供固定访问入口与负载均衡。','部门的总机号码。','k8s'],
  ['ingress','Ingress','Ingress','集群的七层入口，按域名与路径转发。','大楼前台。','k8s'],
  ['configmap-secret','配置与密钥对象','ConfigMap & Secret','把配置和敏感信息从镜像里拆出来单独管理。','话术卡与密码本。','k8s'],
  ['pv-pvc','PV 与 PVC','PV / PVC','存储的供给与申请：管理员给 PV，应用申领 PVC。','房源与租约。','k8s'],
  ['probe','健康探针','Probe','用存活与就绪探针判断容器该不该重启、该不该接流量。','体检与上岗证。','k8s'],
  ['hpa','水平自动扩缩','HPA','按 CPU 或自定义指标自动增减 Pod 数量。','按客流加开窗口。','k8s'],

  ['microservice','微服务','Microservice','把大系统拆成多个能独立部署、独立扩容的小服务。','大厨房改成小吃街。','microservice'],
  ['monolith','单体应用','Monolith','所有功能打成一个程序，一起构建一起部署。','一锅炖。','microservice'],
  ['service-discovery','服务发现','Service Discovery','实例变动时自动维护"谁在哪"的名单。','自动更新的通讯录。','microservice'],
  ['api-gateway','API 网关','API Gateway','所有外部请求的统一入口，管鉴权、限流与路由。','大厦的前台。','microservice'],
  ['config-center','配置中心','Config Center','集中管理各服务配置，改了不必重新打包。','统一的公告栏。','microservice'],
  ['circuit-breaker','熔断限流降级','Circuit Breaker','下游撑不住时快速失败或给兜底，避免雪崩。','电路的保险丝。','microservice'],
  ['trace','链路追踪','Distributed Tracing','给一次请求打全局 ID，串起跨服务的调用路径。','快递的全链路轨迹。','microservice'],
  ['distributed-tx','分布式事务','Distributed Transaction','跨多个服务或库的一致性方案，常用最终一致。','多人拼单后对账。','microservice'],

  ['devops','DevOps','DevOps','开发与运维一体协作，让交付又快又稳。','前后厨打通。','devops'],
  ['ci-cd','CI/CD','CI / CD','持续集成自动构建测试，持续交付自动上线。','工厂流水线。','devops'],
  ['artifact','制品库','Artifact Repository','存放构建产物(包与镜像)的仓库，带版本可追溯。','成品仓库。','devops'],
  ['blue-green','蓝绿发布','Blue-Green Deployment','备好整套新环境，切换流量一次性上线。','换一台新灶台。','devops'],
  ['canary','金丝雀发布','Canary Release','先给新版本少量流量，观察没问题再全量。','先尝一口再上桌。','devops'],
  ['iac','基础设施即代码','IaC','用代码描述服务器与网络，自动创建与复核。','一张图纸一键装修。','devops'],
  ['gitops','GitOps','GitOps','以 Git 仓库为唯一事实源，改动自动同步到集群。','文件只认原件。','devops'],

  ['observability','可观测性','Observability','靠指标、日志、链路三支柱推断系统内部状态。','医生的望闻问切。','observability'],
  ['metrics','指标','Metrics','随时间采集的数值序列，如 QPS、延迟、CPU。','汽车仪表盘。','observability'],
  ['logs','日志','Logs','事件文本记录，排障时最直接的线索。','行车记录仪。','observability'],
  ['slo','SLI/SLO/SLA','SLI / SLO / SLA','服务水平指标、目标与承诺，用错误预算衡量紧不紧。','考核 KPI。','observability'],
  ['alert-fatigue','告警疲劳','Alert Fatigue','告警太吵导致没人看，需要分级与收敛。','狼来了。','observability'],
  ['postmortem','故障复盘','Postmortem','事后无责复盘，找系统与流程上的改进点。','事故调查。','observability'],

  ['availability','可用性','Availability','用几个 9 表示：99.9% 一年停机约 8.8 小时。','出勤率。','reliability'],
  ['spof','单点故障','SPOF','一个部件坏了整体就停，必须消除或冗余。','独木桥。','reliability'],
  ['multi-az','多可用区部署','Multi-AZ','把实例撒在同城多个机房，防单个机房整体故障。','不把鸡蛋放一个篮子。','reliability'],
  ['dr-drill','容灾演练','DR Drill','定期真的切一次，验证预案到底能不能用。','消防演习。','reliability'],
  ['chaos','混沌工程','Chaos Engineering','主动注入故障来验证系统韧性。','打疫苗。','reliability'],
  ['capacity','容量规划','Capacity Planning','按业务增长预估资源与水位，提前准备。','提前备年货。','reliability'],
  ['degradation','优雅降级','Graceful Degradation','资源不足时先关非核心功能，保住主干。','停电先停空调。','reliability'],

  ['shared-responsibility','责任共担模型','Shared Responsibility','云厂商保平台安全，你保自己的数据与配置安全。','房东与租客的分工。','cloudsec'],
  ['iam','IAM','Identity and Access Management','管谁能对哪些资源做什么。','分级门禁卡。','cloudsec'],
  ['least-privilege','最小权限','Least Privilege','只给刚好够用的权限，不给管理员。','只发需要的那把钥匙。','cloudsec'],
  ['kms','密钥管理','KMS','集中托管加密密钥与凭据，避免硬编码在代码里。','保险柜。','cloudsec'],
  ['supply-chain-security','供应链安全','Supply Chain Security','从代码依赖到镜像的全程可信与漏洞扫描。','食材溯源。','cloudsec'],
  ['mlps','等保 2.0','MLPS 2.0','网络安全等级保护制度，云上系统也要按级别合规。','消防验收。','cloudsec'],
  ['zero-trust','零信任','Zero Trust','不默认内网可信，每次访问都验身份与权限。','进每道门都要查证。','cloudsec'],

  ['migration-6r','迁移 6R','6R Migration','迁移策略：重建、重构、重购、移位、重构平台、保留。','搬家的六种处理法。','practice'],
  ['finops','FinOps','FinOps','用账单分析、预留与规格优化把云花费压下来。','给云上开销记账。','practice'],
  ['hybrid-cloud','混合云与多云','Hybrid & Multi-Cloud','本地机房与云、多家云并用，避免被单一厂商锁定。','不把存款放一家银行。','practice'],
  ['xinchuang','信创与国产化','Xinchuang','国产芯片、操作系统与云平台的适配替换。','换国产供应链。','practice'],
  ['cloud-native','云原生','Cloud Native','为云环境设计的做法：容器、微服务、声明式、可观测。','为高速公路造的车。','practice'],
  ['compute-power','算电协同','Compute-Power Coordination','算力布局与电力供给协同优化，如东数西算。','电厂与数据中心搭伙。','practice']
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
let s = '/* 模块元数据 + 学习路径(云计算与云原生通识)(自动生成,勿手改) */\n';
s += 'window.CCN = window.CCN || {};\n';
s += 'CCN.modules = ' + J(mods) + ';\n';
s += 'CCN.path = ' + J(path_) + ';\n';
s += 'CCN.totalLessons = CCN.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(云计算与云原生通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.CCN = window.CCN || {};\nCCN.terms = ' + J(termObjs) + ';\n');

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
    let body = '/* ' + id + ' (自动生成) */\nCCN.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') !== -1) {
  idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
} else {
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 CCN.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
