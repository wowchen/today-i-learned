# 系分学习站 · 开发规范(系统分析师 / 软考高级)

系统分析师备考站。纯静态、零依赖、离线可用。**引擎克隆自架构师站(SAD),命名空间已整体改为 `SAN`。**

## 技术架构

- 纯 HTML/CSS/JS,零依赖、零构建;Hash SPA 路由
- 内容即数据:`SAN.registerLesson()` 注册课时;localStorage 前缀 **`san.`**(`san.progress.v1`)
- 全局命名空间:`window.SAN`
- 视觉:沿用「瑞士编辑型」+ 网格元素,品牌色 **靛紫 `--accent:#5A4A9F`**

## 目录结构

```
index.html                 入口(脚本顺序:引擎 → modules.js/terms.js → 全部课时)
assets/css/main.css        全部样式(design tokens 在顶部 :root)
assets/js/                 引擎(克隆自 SAD,已改 SAN)。不要改逻辑
content/
  modules.js               18 模块元数据 + SAN.path(122 课有序 id)
  terms.js                 术语表(SAN.terms 数组)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 课时模板(六段式)

`SAN.registerLesson({ id, module, order, title, minutes, key?, keywords, concept, exam, core, pitfalls, quiz, links })`

- 六段:concept①概念 · exam②考纲定位 · core③核心要点 · pitfalls④易混辨析 · quiz⑤真题练习 · links⑥关联
- quiz:`{type:'choice',q,options[],answer:idx,source,explain}` 或 `{type:'fill',q,answer:[..],source,explain}`,答错入错题本
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`、`.pit`、`<figure class="fig"><svg>`(SVG 仅用 CSS 变量)

## 计算器(views-tools.js 的 calc)

系分高频三件套:**决策树期望值、PERT 三点估算、系统可靠度(串/并联)**。函数 `SAN.calcDecision / calcPERT / calcReliability`。

## 内容侧重(相对架构师)

强化:**需求工程、结构化与面向对象分析设计(DFD/ER/UML)、系统规划与可行性、数学与运筹、信息系统综合**;弱化架构风格深挖。案例突出"画图与计算"。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;每课标考纲频率/分值;真题只标年份来源不照抄题面;**考试题量/分值/法律年限以官方最新通知与现行法律为准**,不确定处标注;无 emoji。

## 现状

18 模块 / 122 课全部写完(基础28 + 核心33 + 进阶41 + 实战20),术语库约 80 条。`node --check` 全过,课时 id 与 `SAN.path` 一一对应,术语引用全部可解析。
