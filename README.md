# 今日得到 · Today I Learned

个人学习站合集 —— 把一门门硬知识用大白话讲透。所有子站均为**纯静态、零依赖、离线可用**的单页应用，根目录的引导页 `index.html` 分别进入各子站。

在线地址:https://wowchen.github.io/today-i-learned/

## 子站清单

| 子站 | 目录 | 简介 | 状态 |
|---|---|---|---|
| English Made Simple · 美语,一看就懂 | [`english-made-simple/`](english-made-simple/) | 美式英语:发音/词汇/语法/听说读写/文化/旅行 | ✅ 已上线 |
| 电网通识 · Power Grid 101 | [`power-grid-fundamentals/`](power-grid-fundamentals/) | 中国电力/电网:发输变配用/调度/电力市场/新能源/储能/双碳 | ✅ 已上线 |
| 高项学习站 · ISPM | [`info-system-project-manager/`](info-system-project-manager/) | 信息系统项目管理师备考:过程组/知识域/案例/论文 | ✅ 已上线 |
| 十五五规划 | [`fifteenth-five-year-plan/`](fifteenth-five-year-plan/) | 十五五规划学习站 | 🚧 建设中 |

## 本地预览

```bash
cd 20260622-today-i-learned
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/
```

## 结构

```
.
├── index.html                      # 引导页(4 张卡片)
├── english-made-simple/            # 子站
├── power-grid-fundamentals/        # 子站
├── info-system-project-manager/    # 子站
└── fifteenth-five-year-plan/       # 子站(占位)
```

各子站使用相对路径,可独立运行,也可整体部署。
