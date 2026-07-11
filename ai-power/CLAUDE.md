# AI+电力学习站 · 开发规范(AIP · AI in Power)

大白话讲透 AI 在电力各专业的应用场景。纯静态、零依赖、离线可用。**引擎与五段式结构克隆自天文与宇宙站(AST)/营养与健康站(NH)/地理通识站(GEO),命名空间整体改为 `AIP`、localStorage 前缀 `ast.`→`aip.`。** 「今日得到」合集第 24 站。

## 与 AST / GEO / NH 站的关系

- **引擎完全沿用**:`registry / progress / ui / engine / views-lesson` 与 AST/GEO/NH 逐行同构(仅 `AST`→`AIP`、localStorage 前缀 `ast.`→`aip.`)。`tools/build.js` 同构(含 `fml()` 公式块、helpers `g/ex/pit/fml/qc/qf`)。
- **视觉 = 电力网格+AI脉冲(本站新定)**:浅色 = 白底 `--bg:#fafafa` + 靛蓝 `--acc:#4f46e5`;深色 = 深靛 `--bg:#0a0e27` + 琥珀 `--acc:#f5a623`。底纹为电力网格线(交叉线,非星点)。
- **首页主图 = 电力网络节点+AI脉冲**(`views-home.js` 的 `gridSVG()`):变电站为节点(圆),线路为连线(折线),AI 脉冲沿线路传播激活节点。带 `prefers-reduced-motion` 守卫。
- **工具页是 5 个互动工具**(`views-tools.js`):负荷预测可视化、设备健康度评估器、功率预测精度对比、巡检缺陷识别演示、算电协同调度模拟器。

## 技术架构

- 全局命名空间:`window.AIP`;localStorage 前缀 `aip.`(`aip.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别绕晕 · ④ 想一想(quiz,即时判分) · ⑤ 接着读。
- 内容即数据:`AIP.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入)
assets/css/main.css        全部样式(电力网格+AI脉冲双主题 + .gh-* + 工具 .calc-*)
assets/js/                 引擎:registry/progress/ui/engine/views-lesson(克隆 AST 改 AIP)+ views-home(电力网络)/views-tools(5工具)
content/                   modules.js(14模块 + AIP.path + en)、terms.js(66条)、<module>/<NN-slug>.js  ← 自动生成
tools/build.js             单一数据源(MODULES/TERMS)+ 从 _src 加载课程 + 校验 + 生成 + 注入
tools/_src/<module>.js     各模块课时块(module.exports = [...])
```

## 14 模块(99 课)

guide 导览 · basics 基础速览 · gen 发电侧AI · trans 输变电AI · dist 配用电AI · dispatch 调度AI · newenergy 新能源与储能AI · compute 算电协同 · marketing 营销客服AI · security 安全安防AI · engineering 工程基建AI · llm 大模型在电力 · platform 数据与平台 · future 挑战与展望。

## 5 个互动工具(views-tools.js)

1. 负荷预测可视化(场景+方法→预测曲线vs实际曲线,RMSE)
2. 设备健康度评估器(多参数→评分+建议)
3. 功率预测精度对比(持续法/统计/AI对比)
4. 巡检缺陷识别演示(模拟CV检测缺陷+置信度)
5. 算电协同调度模拟器(策略→绿电利用率/弃风弃光/碳排放/电费)

## 如何增补内容

不要手改 `content/`(自动生成)。流程:
1. 编辑 `tools/_src/<module>.js` 加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。
2. 运行 `node tools/build.js`。
