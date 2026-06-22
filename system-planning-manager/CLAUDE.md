# 系规学习站 · 开发规范(系统规划与管理师 / 软考高级)

系统规划与管理师备考站。纯静态、零依赖、离线可用。**引擎克隆自系分站(SAN),命名空间已整体改为 `SPM`。**

## 技术架构

- 纯 HTML/CSS/JS,零依赖、零构建;Hash SPA 路由
- 内容即数据:`SPM.registerLesson()` 注册课时;localStorage 前缀 **`spm.`**(`spm.progress.v1`)
- 全局命名空间:`window.SPM`
- 视觉:沿用「瑞士编辑型」+ 网格元素,品牌色 **橄榄绿 `--accent:#5E7C3A`**

## 目录结构

```
index.html                 入口(脚本顺序:引擎 → modules.js/terms.js → 全部课时)
assets/css/main.css        全部样式(design tokens 在顶部 :root)
assets/js/                 引擎(克隆自 SAN,已改 SPM)。不要改逻辑
content/
  modules.js               18 模块元数据 + SPM.path(94 课有序 id)
  terms.js                 术语表(SPM.terms 数组)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 课时模板(六段式)

`SPM.registerLesson({ id, module, order, title, minutes, key?, keywords, concept, exam, core, pitfalls, quiz, links })`

- 六段:concept①概念 · exam②考纲定位 · core③核心要点 · pitfalls④易混辨析 · quiz⑤真题练习 · links⑥关联
- quiz:`{type:'choice',q,options[],answer:idx,source,explain}` 或 `{type:'fill',q,answer:[..],source,explain}`,答错入错题本
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`、`.pit`、`<figure class="fig"><svg>`(SVG 仅用 CSS 变量)

## 计算器(views-tools.js 的 calc)

系规高频三件套:**服务可用性(MTBF/MTTR)、投资回收期(静态)、服务人力测算**。函数 `SPM.calcAvailability / calcROI / calcStaffing`。

## 内容侧重(相对 SAN/SAD)

**本考只考两科:综合知识(选择,含专业英语)+ 案例分析(写作),不考论文**——因此**不设 essay 模块**,分量给 case 与 IT 服务管理。核心为 **IT 服务管理 / ITSS 体系**:服务规划设计→部署实施→运营管理→持续改进→监督管理,加团队、营销、工具新技术;技术基础(计算机/网络/数据库/安全)做"够用"覆盖,不深挖。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;每课标考纲频率/分值;真题只标年份来源不照抄题面;**考试题量/分值/法律年限以官方最新通知与现行法律为准**,不确定处标注;无 emoji。

## 现状

18 模块 / 94 课全部写完(基础23 + 核心31 + 进阶30 + 实战10),术语库约 65 条。`node --check` 全过,课时 id 与 `SPM.path` 一一对应,术语引用全部可解析。
