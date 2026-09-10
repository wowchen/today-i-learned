# 新型电力系统与储能学习站 · 开发规范(NPS · New-type Power System and Storage)

用大白话讲透**新型电力系统**与**储能**这两件事:系统为什么必须变、储能从技术到商业的全貌。
纯静态、零依赖、离线可用。**引擎克隆自 AI+电力站(AIP),命名空间整体改为 `NPS`、localStorage 前缀 `aip.`→`nps.`。** 「今日得到」合集第 36 站。

## 与电网通识站(PGF)/ AI+电力站(AIP)的关系

- **PGF(电网通识)** 回答「电网是什么」;**AIP(AI+电力)** 回答「AI 在电力怎么用」;**本站(NPS)** 回答「新型电力系统怎么运转、储能怎么赚钱」。三站互不重复。
- **引擎与 AIP 逐行同构**:`registry / progress / sync / ui / engine / views-lesson` 仅做命名空间替换;`tools/build.js` 同构(含 `fml()` 公式块、helpers `g/ex/pit/fml/qc/qf`)。
- **视觉 = 源网荷储四要素闭环 + 能量流动脉冲(本站新定)**:浅色 = 洁净白 `--bg:#f7faf8` + 能源绿 `--acc:#0f8a6a`;深色 = 深空蓝 `--bg:#071b2e` + 青绿荧光 `--acc:#2dd4a7`。底纹为电网网格线(交叉线)。
- **首页主图 = 源网荷储闭环**(`views-home.js` 的 `npsSVG()`):源(光伏)→网(输电线塔)→储(电池)→荷(厂房)四个节点沿圆角闭环排列,4 枚能量脉冲顺时针流动,中央为闪电标识 + 扩散波纹。带 `prefers-reduced-motion` 守卫。

## 技术架构

- 全局命名空间:`window.NPS`;localStorage 前缀 `nps.`(`nps.progress.v1`);同步键 `nps.sync.v1`、同步路径 `progress/nps.json`。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别踩坑 · ④ 想一想(quiz,即时判分) · ⑤ 接着读。
- 内容即数据:`NPS.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + 合规声明条 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入)
assets/css/main.css        全部样式(能源绿/青绿双主题 + .notice-bar + .gh-* + 工具 .calc-*)
assets/js/                 引擎:registry/progress/sync/ui/engine/views-lesson(克隆 AIP 改 NPS)
                           + views-home(源网荷储闭环) + views-tools(5 工具)
content/                   modules.js(16 模块 + NPS.path + en)、terms.js(111 条)、<module>/<NN-slug>.js  ← 自动生成
tools/build.js             单一数据源(MODULES/TERMS)+ 从 _src 加载课程 + 校验 + 生成 + 注入
tools/_src/<module>.js     各模块课时块(module.exports = [...])
```

## 16 模块(100 课 / 111 术语)

guide 导览(4) · basics 概念基础(6) · sources 电源侧变化(6) · grid 电网侧变革(6) · stability 稳定与安全(6) · storebasic 储能总论(7) · storetech 储能技术路线(8) · storesys 储能系统集成(8) · storeapp 储能应用场景(7) · storeops 储能运维与安全(6) · market 电力市场与商业模式(8) · vpp 虚拟电厂与需求响应(6) · digital 数字化与智能化(6) · hydrogen 氢能与长时储能(5) · policy 政策与标准(6) · future 挑战与展望(5)

## 5 个互动工具(views-tools.js)

1. **源网荷储平衡模拟器**(`NPS.calcBalance`):负荷 + 新能源装机 + 储能 + 灵活电源 + 跨区互济 → 弃电率、新能源电量占比、灵活性供需比
2. **储能配置计算器**(`NPS.calcSizing`):装机 + 目标弃电率 + 时长 + 造价 → 建议功率/容量、投资、年净收益、静态回收期
3. **储能技术路线对比器**(`NPS.calcTech`):时长 + 规模 + 场地 + 日循环 → 7 条路线匹配度评分与估算度电成本
4. **峰谷套利收益测算器**(`NPS.calcArbitrage`):容量 + 峰谷价差 + 效率 + 循环 → 单次收益、年净收益、回收期
5. **SOH 与安全评估器**(`NPS.calcSoh`):年限 + 循环 + 温度 + 放电深度 + 倍率 + SOC 区间 + 告警 → SOH 估算、风险等级、处置建议

## 时效与合规层(本站必守)

> 内容基线:**2026 年 9 月**。涉政策/价格/市场规则的题材照此执行。

1. `index.html` 顶栏下方有**常驻声明条**(`.notice-bar`),首页「关于本站」有**声明块**,本文件顶部三处均写明内容基线日期。
2. `market` 与 `policy` 两个模块的每处机制都标注**依据文件与适用口径**,并统一注明「以现行有效文件为准」。**不得编造文号**;确需引用时只写文件名称。
3. 工具页与首页声明明确「不作为投资、交易、配置或安全判定依据」,**不提供任何规避或筹划方案**。
4. 涉及电网安全处一律强调「技术辅助决策,人做最终判断」。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:
1. 编辑 `tools/_src/<module>.js` 加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。
2. 概念/正文里的术语链接用 `<gd data-term="术语id">显示文字</gd>`;公式用 `<div class="fml">`;示例用 `<div class="ex">`;踩坑用 `<div class="pit"><b>别绕晕 </b>…</div>`。
3. 运行 `node tools/build.js`。校验会检查:术语是否存在、内链是否指向真实课时/模块、是否含 emoji;并做**命名空间自检**(生成物必须含 `NPS.`、不得含 `AIP.`/`EMT.` 等任何兄弟站命名空间),防止克隆后替换遗漏。
4. 新术语要同步加进 `tools/build.js` 的 `TERMS`。

## 内容源写法陷阱

- `_src/*.js` 里用**单引号**包 JS 字符串,HTML 属性用双引号;正文引号用全角「」,**不要**在单引号字符串里出现半角 `'`。
- 闭合标签别写错:是 `</gd>`,不是 `</d>`。改完先 `node --check tools/_src/*.js` 再跑 build。
- slug 一旦发布不要改(会打断已读进度与旧链接)。
