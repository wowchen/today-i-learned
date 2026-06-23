# 投资理财学习站 · 开发规范(PFIN · 科普非应试)

大白话投资理财通识站。纯静态、零依赖、离线可用。**引擎克隆自网规站(NPD),命名空间整体改为 `PFIN`。这是科普站,不是考试站。**

## 与考试站的关键差异

- **非应试**:无真题、无错题本(已删 `views.mistakes` 与所有 `addMistake` 调用)、无论文模块、无考纲定位。
- 课时为**五段式**:① 一句话 · ② 讲透 · ③ 别踩坑 · ④ 想一想 · ⑤ 接着读。"想一想"沿用 quiz 渲染与即时判分,但**答错不写错题本**。
- 视觉为 **D2 设计语言**(瑞士黑白 + 中国股市红 `#D93A2A` 点缀),非 NPD 的琥珀金;定稿源自 `designs/index-d2-swiss-red-dark.html`。
- 顶栏含**深/浅色切换按钮**(`PFIN.toggleTheme()`),偏好存 `pfin.progress.v1` 的 `prefs.theme`;`index.html` head 内联脚本防刷新闪烁。

## 技术架构

- 纯 HTML/CSS/JS,零依赖、零构建;Hash SPA 路由。
- 内容即数据:`PFIN.registerLesson()` 注册课时;localStorage 前缀 **`pfin.`**(`pfin.progress.v1`)。
- 全局命名空间:`window.PFIN`。
- 设计令牌:浅 `--bg#FFF/--ink#0B0B0B/--red#D93A2A`;深 `--bg#0B0B0B/--ink#F4F4F4/--red#FF5142`。瑞士直角、单一红点缀、Inter 字体、`data-fs` 字号档。

## 目录结构

```
index.html                 SPA 外壳(顶栏导航 + #app + 引擎/内容脚本;课时 script 由 PFIN.path 用 node 生成)
designs/                   6 套首页设计稿(保留;index-d2-swiss-red-dark.html 为定稿)
assets/css/main.css        全部样式(D2 令牌 + 全 SPA 视图)
assets/js/                 引擎(克隆自 NPD 改 PFIN)。registry/progress/ui/engine/views-home/views-lesson/views-tools
content/
  modules.js               11 模块元数据 + PFIN.path(70 课有序 id)+ totalLessons
  terms.js                 术语表(PFIN.terms,73 条)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 课时模板(五段式)

`PFIN.registerLesson({ id, module, order, title, minutes, key?, keywords, concept, core, pitfalls, quiz, links })`

- 渲染顺序:concept ① · core ② · pitfalls ③ · quiz ④(想一想) · links ⑤。**无 `exam` 字段**。
- quiz:`{type:'choice',q,options[],answer:idx,source,explain}` 或 `{type:'fill',q,answer:[..],source,explain}`;答错只展示解析,**不入错题本**。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(红边块)、`.pit`(灰边块)、`<table>`。

## 计算器(views-tools.js,4 件)

复利 `PFIN.calcCompound`、定投 `PFIN.calcDCA`、退休缺口 `PFIN.calcRetire`、贷款摊销 `PFIN.calcLoan`;辅助 `PFIN._num/_money`。每件结果标注"估算,非投资建议"。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;无 emoji;**全站显著免责:不荐股、不带货、不焦虑、不构成投资建议**;案例数据标"假设";**税率/个税专项扣除/养老政策/个人养老金额度等以现行法规为准**,不确定处标注;不出现具体产品/平台名与"必涨/稳赚"等表述。

## 现状

11 模块 / 70 课全部写完(入门13 + 核心28 + 进阶17 + 实战12),术语库 73 条。`node --check` 全过,课时 id 与 `PFIN.path` 一一对应,术语引用全部可解析(零 used-but-undefined)。4 个理财计算器已实现。
