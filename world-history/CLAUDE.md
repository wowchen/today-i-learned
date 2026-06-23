# 世界历史学习站 · 开发规范(WHS · 科普通识)

大白话讲透世界历史的科普站,与「中国历史(CHS)」站形成中/外一对。纯静态、零依赖、离线可用。**引擎克隆自中国历史站(CHS),命名空间整体改为 `WHS`。科普通识站,不是考试站。多文明并重、不以单一文明为中心。**

## 与中国历史站(CHS)的差异

- **专题概念**:`era`(时代起讫)/`color`(时代色)/`ghost`(古体大写数字)/`shortTitle`(轴条带名)在 `WHS.modules` 上;`WHS_FIGURES`(世界人物)与 `WHS_PARALLEL`(中外对照)为两个独立全局数据集(后者替代 CHS 的 `WHS_NIANHAO` 年号表)。
- **顶栏 4 个工具入口**:时间轴 / 图鉴 / 文明速查(`civ-table`)/ 中外对照(`cross-ref`),在 `views-tools.js` 中作为子视图;课时仍走 5 段式 `concept/core/pitfalls/quiz/links`,无 exam、无错题本、无论文。
- **「中外对照」是本站特色工具**:`WHS.views.crossRef` 用 `WHS_PARALLEL`(约 30 个节点)左右并列「世界 vs 同期中国」,中国一侧口径与 CHS 站一致。
- **视觉为时代瓦片设计语言**(白底 + 12 种时代色 + 群青 `#2C5F8A` 点缀,区别于 CHS 的朱红);深色版本提亮 10-15%。

## 技术架构

- 纯 HTML/CSS/JS,零依赖、零构建;Hash SPA 路由。
- 内容即数据:`WHS.registerLesson()` 注册课时;localStorage 前缀 **`whs.`**(`whs.progress.v1`)。
- 全局命名空间:`window.WHS`(主)、`window.WHS_FIGURES`(人物)、`window.WHS_PARALLEL`(中外对照)。
- 设计令牌:浅 `--bg#FFF/--ink#0E0E0E/--red#2C5F8A`;深 `--bg#0E0E0E/--ink#F0EDE6/--red#5A8FBF`。12 时代色:gold/jade/indigo/crimson/slate/rose/mist/plum/bronze/sky/teal/olive。`data-fs` 字号档。

## 目录结构

```
index.html                 SPA 外壳(顶栏导航 + #app + 引擎/内容脚本)
assets/css/main.css        全部样式(时代瓦片令牌 + 12 模块色 + 全 SPA 视图)
assets/js/                 引擎(克隆自 CHS 改 WHS):registry/progress/ui/engine/views-home/views-lesson/views-tools
content/
  modules.js               12 模块元数据 + WHS.path(122 课有序 id)+ totalLessons
  terms.js                 术语表(WHS.terms,78 条)
  figures.js               人物图鉴(WHS_FIGURES,75 位)
  parallel.js              中外对照(WHS_PARALLEL,约 30 节点)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 模块(12 时代 / 122 课)

origins 文明曙光 · near-east 两河与埃及 · classical 古典希腊罗马 · asia-classical 古代亚洲文明 · middle-ages 中世纪欧洲 · islam 伊斯兰世界 · americas-africa 美洲与非洲 · renaissance 文艺复兴与大航海 · revolutions 革命时代 · industrial 工业革命与帝国主义 · world-wars 两次世界大战 · contemporary 冷战与当代世界。

## 课时模板(五段式)

`WHS.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`

- 渲染顺序:concept ① · core ② · pitfalls ③ · quiz ④(想一想) · links ⑤。**无 `exam` 字段**。
- quiz:`{type:'choice',q,options[],answer:idx,explain}` 或 `{type:'fill',q,answer:[..],explain}`;答错只展示解析,**不入错题本**。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(强调块)、`.pit`(误区块)、`<table>`、`<blockquote><cite>`。

## 工具(views-tools.js,4 件)

- **时间轴 `WHS.tools`→`WHS.views.timeline`**:等宽时代条带(前 3500 → 2026),点跳模块。
- **人物图鉴 `WHS.views.figures`**:卡片墙,按时代/角色过滤,看生平 + 关键事件 + 关联课时。
- **文明速查 `WHS.views.civTable`**:12 行表格,时代/起讫/中心区域/代表政权/关键转折/跨度/一句话。
- **中外对照 `WHS.views.crossRef`**:同一时间线左看世界、右看中国,可关键词过滤。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;无 emoji;**不戏说、不阴谋论、不焦虑**;**多文明视角、避免欧洲中心论**;争议处(文明起源年代、战争归因等)标注「通说 vs 异说」;涉及中国处与 CHS 站口径一致、不冲突;**当代政治与在世人物只述事实、不作价值判断**。

## 现状

12 模块 / 122 课全部写完。术语 78 条、人物 75 位、中外对照 31 节点。内容由生成器(单一数据源)产出,`node --check` 全过,课时 id 与 `WHS.path` 一一对应,术语/人物引用全部可解析。4 件工具已实现。
