# 经济学通识学习站 · 开发规范(ECON · 科普非应试)

大白话经济学通识站。纯静态、零依赖、离线可用。**引擎与设计框架克隆自投资理财站(PFIN),命名空间整体改为 `ECON`。这是科普站,不是考试站。** 是「今日得到」合集第 17 站,与投资理财站(PFIN)互为"财经"一对。

## 与投资理财站(PFIN)的关系

- **框架完全沿用 PFIN**:顶栏导航 + `#app` 的 Hash SPA、五段式课时(含"想一想")、术语弹卡、计算器页、深浅色切换、瑞士 D2 直角风、长条模块列表。
- **唯一视觉差异:accent 换色**。PFIN 用中国股市红;本站用**增长绿**。令牌已统一改名为 `--acc / --acc-soft`(浅 `#138a52` / 深 `#2fbf73`),框架其余不变。改色只动 `assets/css/main.css` 顶部两处。
- 计算器从理财四件(复利/定投/退休/贷款)换成**经济四件**:经济增长·72法则 / 通胀购买力 / 实际利率(费雪) / GDP 构成。

## 技术架构

- 全局命名空间:`window.ECON`;localStorage 前缀 `econ.`(`econ.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别踩坑 · ④ 想一想(quiz,即时判分、**不写错题本**) · ⑤ 接着读。
- 内容即数据:`ECON.registerLesson({ id, module, order, title, minutes, key?, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(绿边块)、`.pit`(灰边块)、`<table>`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入 <!--LESSONS-->)
assets/css/main.css        全部样式(D2 框架,accent=增长绿)
assets/js/                 引擎(克隆 PFIN 改 ECON):registry/progress/ui/engine/views-home/views-lesson/views-tools
content/
  modules.js               11 模块元数据 + ECON.path(65 课有序 id) + totalLessons   ← 自动生成
  terms.js                 ECON.terms(81 条)                                       ← 自动生成
  <module>/<NN-slug>.js    课时,id == "module/NN-slug"                              ← 自动生成
tools/build.js             单一数据源(MODULES/TERMS/LESSONS)+ 校验 + 生成 content/* + 注入 index.html
```

## 11 模块

basics 经济学入门 · micro 供给与需求 · market 市场与失灵 · macro 宏观入门 · money 货币与银行 · employ 就业与物价 · policy 财政与货币政策 · trade 国际经济 · behavior 行为经济学 · china 读懂中国经济 · think 像经济学家思考。

## 计算器(views-tools.js,4 件)

经济增长 `ECON.calcGrowth`、通胀购买力 `ECON.calcInflation`、实际利率 `ECON.calcRealRate`、GDP 构成 `ECON.calcGDP`;辅助 `ECON._num/_money/_fix`。每件标注"估算,用于理解概念,不构成投资或决策建议"。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:

1. 编辑 `tools/build.js`:在 `L.<模块>` 数组加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。术语 `g('term-id','显示文字')`,id 必须在同文件 `TERMS` 中定义;误区 `pit(...)`、例子 `ex(...)`;选择题 `qc(q,opts,answerIdx,explain)`,填空 `qf(q,[answers],explain)`。
2. 新增术语改 `TERMS`。
3. 运行 `node tools/build.js`。它会校验(术语定义、内部链接 `#/l`、`#/m`、emoji)→ 生成全部 `content/*` → 注入 `index.html` 的 `<!--LESSONS-->`(已注入过则替换课时块)。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;无 emoji、无 ✓/✗/☆ 等特殊符号、无写死 #hex(build 会校验);**显著免责:不预测涨跌、不站队、不构成投资建议**;案例数据标"假设/约";会过时的口径标年份;分清实证与规范,不把立场当事实。

## 现状

11 模块 / 65 课 / 81 术语,4 个计算器。`node --check` 全过;DOM-shim 冒烟:path==课文件数==65、术语零 used-but-undefined、各视图 0 报错。
