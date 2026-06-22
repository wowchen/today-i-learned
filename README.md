# 今日得到 · Today I Learned

个人学习站合集 —— 把一门门硬知识用大白话讲透。所有子站均为**纯静态、零依赖、离线可用**的单页应用，根目录的引导页 `index.html` 分别进入各子站。

在线地址:https://wowchen.github.io/today-i-learned/

## 子站清单

| 子站 | 目录 | 简介 | 状态 |
|---|---|---|---|
| English Made Simple · 美语,一看就懂 | [`english-made-simple/`](english-made-simple/) | 美式英语:发音/词汇/语法/听说读写/文化/旅行 | ✅ 已上线 |
| 电网通识 · Power Grid 101 | [`power-grid-fundamentals/`](power-grid-fundamentals/) | 中国电力/电网:发输变配用/调度/电力市场/新能源/储能/双碳 | ✅ 已上线 |
| 高项学习站 · ISPM | [`info-system-project-manager/`](info-system-project-manager/) | 信息系统项目管理师备考:过程组/知识域/案例/论文 | ✅ 已上线 |
| 十五五规划学习站 | [`fifteenth-five-year-plan/`](fifteenth-five-year-plan/) | 《十五五规划纲要》大白话精讲:十八篇全景/目标指标/产业科技数字/民生绿色安全 | ✅ 已上线 |
| 音乐学习站 · Music | [`music-learning/`](music-learning/) | 大白话讲透音乐:乐理/乐器/音乐史/赏析/流行演唱 | ✅ 已上线 |
| 架构学习站 · SAD | [`system-architecture-designer/`](system-architecture-designer/) | 系统架构设计师(软考高级)备考:计算机/数据库/网络/安全/软工/架构风格/质量评估/可靠性/中间件微服务,含案例与论文专题 | ✅ 已上线 |
| 系分学习站 · SAN | [`system-analyst/`](system-analyst/) | 系统分析师(软考高级)备考:需求工程、结构化与面向对象分析设计、系统规划与可行性、数学运筹、信息系统综合,含案例画图与论文专题 | ✅ 已上线 |
| 系规学习站 · SPM | [`system-planning-manager/`](system-planning-manager/) | 系统规划与管理师(软考高级)备考:IT 服务与 ITSS 体系、服务规划设计/部署实施/运营管理/持续改进/监督管理、团队营销、工具新技术、专业英语,含案例专题(不考论文) | ✅ 已上线 |
| 网规学习站 · NPD | [`network-planning-designer/`](network-planning-designer/) | 网络规划设计师(软考高级)备考:数据通信、OSI/TCP-IP、IP 子网与路由、局域网广域网、互连设备、网络安全、无线/存储、SDN/NFV、网络规划与设计、运维管理,含案例与论文专题 | ✅ 已上线 |

## 本地预览

```bash
cd 20260622-today-i-learned
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/
```

## 结构

```
.
├── index.html                      # 引导页(9 张卡片 Bento 布局)
├── english-made-simple/            # 子站
├── power-grid-fundamentals/        # 子站
├── info-system-project-manager/    # 子站
├── fifteenth-five-year-plan/       # 子站
├── music-learning/                 # 子站
├── system-architecture-designer/   # 子站
├── system-analyst/                 # 子站
├── system-planning-manager/        # 子站
└── network-planning-designer/      # 子站
```

各子站使用相对路径,可独立运行,也可整体部署。
