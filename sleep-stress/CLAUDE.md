# 睡眠与压力管理站 · sleep-stress (SLP)

大白话讲透睡眠与压力管理（睡眠基础 / 睡眠问题 / 改善睡眠 / 压力生理 / 应对方法 / 情绪心理 / 身心联结 / 求助与工具）。

## 状态：✅ 已上线

- **暮色靛紫设计系统**：浅色 = 晨雾靛紫 + 纯白卡片；深色 = 深夜靛蓝 + 月光银
- **独立 UI 引擎**（复用 chronic-care 引擎，跳出主站共享框架），hash 路由 + 自有进度模型
- 8 模块 / 72 课 / 86 术语 / 5 条通知 / 5 互动工具
- 首页 hero 呼吸波形动效（SVG + stroke-dashoffset 往复），月牙 logo

## 内容规划

| 模块 | id | 课程数 |
|---|---|---|
| 睡眠基础 | sleep-basics | 9 |
| 睡眠问题 | sleep-problems | 9 |
| 改善睡眠 | sleep-improve | 10 |
| 压力是什么 | stress-basics | 9 |
| 应对压力 | stress-coping | 10 |
| 情绪与心理 | emotion | 9 |
| 身心联结 | body-mind | 8 |
| 求助与工具 | help | 8 |

五段式：一句话 / 讲透 / 别绕晕 / 想一想（测验）/ 接着读。

## 互动工具（views-tools.js）

1. 睡眠时长与效率（上床/入睡用时/起床 → 卧床时长、实际睡着、睡眠效率 + 分级标尺）
2. 压力自评 PSS-10 简化版（10 题，第 4/5/7/8 题反向计分，0–40 分区间）
3. 咖啡因代谢计算（摄入量 + 半衰期 + 时间 → 就寝时残留量，4 档判读）
4. 睡眠日记（上床/起床/入睡用时/白天状态 → 自动算睡眠效率，14 条趋势折线）
5. 4-7-8 呼吸引导（SVG 圆形缩放动画 + 阶段/秒数 + 每日轮数打卡）

## 构建

```bash
node tools/build.js   # 从 tools/_src 生成 content/，校验术语/quiz/字段并注入 index.html
```

⚠️ `tools/_src/*.js` 是 `({...})` 表达式，**末尾必须闭合 `]})`**（只写 `]}` 会报
`SyntaxError: Unexpected end of input`，且 build 的第一道校验不会给出行号）。

## 架构

- `assets/css/main.css` — 暮色靛紫设计系统（CSS 变量双主题，变量名沿用 --teal/--blue/--alert/--warn/--ok/--purple）
- `assets/js/registry.js` — 元数据与工具清单
- `assets/js/progress.js` — 单例进度模型（lessons/activity/quizzes/tools），exportJson/importJson/merge
- `assets/js/sync.js` — GitHub 进度同步（可选），token 仅存本机 `localStorage['SLP.sync.v1']`，默认路径 `progress/slp.json`
- `assets/js/ui.js` — 主题切换 + 图标（含月牙 logo）
- `assets/js/views.js` — 视图组件（卡片/五段式/测验/导入导出），含 `SLP.waveSVG()` 呼吸波形
- `assets/js/views-tools.js` — 5 个互动工具
- `assets/js/engine.js` — hash 路由 + boot
- `tools/build.js` + `tools/_src/*.js` — 内容单一数据源

## 内容红线

- 仅供健康与心理科普，不构成诊疗建议
- 量表结果只作自我观察，不作为诊断依据；涉及自伤/自杀等危机需立即寻求专业帮助
- 不贩卖焦虑、不推荐具体药品品牌与剂量
- 数据仅存本机浏览器，不上传不共享
