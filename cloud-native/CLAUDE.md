# 云计算与云原生通识 · Cloud Native (CCN)

大白话讲透云计算与云原生（科普通识，非应试）。克隆 `telecom-fundamentals` 共享引擎（TCM→CCN 命名空间替换），内容完全重写。

## 站点定位

- **读者**：做信息化/数字化项目的工程与售前人员、运维与开发、需要做云上选型与上云决策的人
- **视角**：工程直觉与决策依据优先——每个概念都回答"它解决什么问题、坏起来什么样、选型时看什么"
- **红线**：具体规格、价格、合规要求以云厂商文档与现行规定为准；本站只建立体系与判断力，不替代产品手册

## 内容结构（14 模块 98 课 116 术语）

| 模块 | id | 课数 | 主题 |
|---|---|---|---|
| 云计算大白话 | cloud-basics | 7 | 云在卖什么/三种服务模式/部署模式/虚拟化/资源池/地域可用区/成本逻辑 |
| 计算与虚拟化 | compute | 7 | 虚拟机/Hypervisor/实例规格/vCPU 与超分/镜像快照/弹性伸缩/Serverless |
| 存储与备份 | storage | 7 | 块·文件·对象/云硬盘/共享文件/对象存储/分级/快照备份容灾/数据一致性 |
| 数据库与数据工程 | database | 7 | 从文件到数据库/关系模型与 SQL/事务 ACID/索引与慢查询/NoSQL 选型/复制与分库分表/数仓湖仓与数据质量 |
| 云网络 | cloudnet | 7 | VPC/子网路由/安全组/负载均衡/NAT 与 EIP/云专线/CDN 与 DNS |
| 容器技术 | container | 7 | 容器价值/namespace 与 cgroup/镜像分层/Dockerfile/镜像仓库/运行时/容器 vs 虚拟机 |
| 容器编排 K8s | k8s | 8 | 编排价值/集群架构/Pod/Deployment/Service 与 Ingress/配置密钥/存储卷/探针与 HPA |
| 微服务与治理 | microservice | 7 | 单体到微服务/拆分与数据私有/服务发现/API 网关/配置中心/熔断限流降级/链路追踪与事务 |
| DevOps 与流水线 | devops | 7 | DevOps 文化/分支与评审/持续集成/制品一致/蓝绿灰度回滚/IaC/GitOps |
| 可观测性 | observability | 6 | 三支柱/指标与分位数/日志结构化/告警降噪/SLI SLO 与错误预算/故障复盘 |
| 高可用与容灾 | reliability | 7 | 几个 9/消除单点/多可用区与多活/容量规划/混沌工程/优雅降级/容灾演练 |
| 云安全与合规 | cloudsec | 7 | 责任共担/IAM 与最小权限/网络隔离/密钥管理/镜像供应链/等保合规/事故复盘 |
| 云上 AI 平台 | ai-platform | 7 | 平台价值/GPU 资源池与调度/训练任务与断点续训/推理服务化/模型与数据管理/算力利用率治理/RAG 与智能体 |
| 上云实战与选型 | practice | 7 | 上云评估/迁移 6R/云原生改造路径/FinOps/信创与国产云/混合云多云/AI 算力与算电协同 |

## 互动工具（4 件，views-tools.js）

1. **可用性与停机换算**：几个 9 → 年/月/周停机时长 + 串联链路合成可用性（a^n）
2. **容器资源单位换算**：m ↔ 核、Ki/Mi/Gi 与 K/M/G 双口径对照 + GB/GiB 差异
3. **副本与资源估算**：峰值 QPS × 余量 ÷ (单副本承载 × 目标水位) → 副本数、资源请求、HPA 建议
4. **云成本估算**：实例/存储/流量 + 折扣 → 月账单、年账单与相对按量的节省额

## 技术要点

- 主题：浅色云白+科技蓝（#2563eb）/ 深色深空蓝+亮蓝（#5b9cff）
- 首页 hero：云朵轮廓 + 三个工作节点 + 节点内容器方块 SVG，`core-flow` stroke-dashoffset 数据流 + 方块呼吸动效
- `tools/build.js` 单一数据源：MODULES/TERMS + `_src/*.js`（`L.<mod>` 数组，课程五段式：concept/core+ex/pit/quiz/links），校验术语引用与内部链接后生成 `content/` 并注入 index.html 课时脚本
- 数据格式：`CCN.registerLesson({id:'mod/slug', concept, core, pitfalls, quiz, links, ...})`
- GitHub 同步与其他站一致：localStorage `ccn.sync.v1`，路径默认 `progress/cloud-native.json`
- 改内容后必跑 `node tools/build.js`
