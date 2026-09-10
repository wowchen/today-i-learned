# 数据分析通识 · 数据素养 (DAT)

大白话讲透数据分析与数据素养（科普通识，非应试）。克隆 `ai-agents` 共享引擎（AGT→DAT 命名空间替换），内容完全重写。

## 站点定位

- **给谁看**：需要"跟数据打交道"但不做专业数据分析的人——写报告的业务岗、看报表的管理者、刚接触数据的职场新人。
- **讲什么**：统计直觉、图表选择、相关与因果、指标口径、数据思维、分析叙事、经典陷阱、营销实战。
- **不讲什么**：软件操作教程（Excel/SQL 语法）、公式推导、机器学习。重"为什么"，轻"怎么按"。
- **调性**：大白话、五分钟一课、有判断。每个概念先给一句人话，再展开。案例数字均为教学演示。

## 目录结构

- `tools/build.js` — 单一数据源：MODULES 模块表 + TERMS 术语表，加载 `tools/_src/*.js` 课程内容
- `tools/_src/` — 课程内容（一模块一文件）：`stats.js` `charts.js` `correlation.js` `metrics.js` `data.js` `narrative.js` `pitfalls.js` `marketing.js`
- `content/` — 构建产物（自动生成，勿手改）
- `assets/js/views-home.js` — 首页（柱状图+折线 SVG hero，琥珀金主题）
- `assets/js/views-tools.js` — 4 件互动工具 + 术语/搜索/设置视图

## 课程格式（五段式）

每课数组：`['slug','标题',minutes,['关键词'], concept, core, pitfalls, quiz[], links]`

- `concept` 一句话人话版；`core` 主体（配 `ex()` 例子）；`pitfalls` 用 `pit()`；`quiz` 用 `qc()`；`links` 下一课链接
- 术语引用：`g('term-id','术语')` 生成可点击术语，id 必须在 TERMS 中定义
- 构建：`node tools/build.js`，自动校验术语引用、内部链接、emoji

## 互动工具（views-tools.js）

1. **图表类型选择器** — 按展示意图推荐图表与常见误用
2. **指标口径体检** — 分子/分母/时间窗/去重/口径备注五要素打分
3. **样本量计算器** — 比例调查经典公式 + 有限总体修正
4. **统计陷阱演示器** — 幸存者偏差/辛普森/回归均值/相关因果四案例数字演示

## 主题

- 琥珀金/亮琥珀双主题（`--acc: #b45309` / dark `#fbbf24`），命名空间 DAT、storage key `dat.progress.v1`
- 首页 hero：方格纸底纹 + 五根柱（sphere 生长动画）+ 上升折线（core-flow 流动）+ 节点光点（photon 呼吸）
