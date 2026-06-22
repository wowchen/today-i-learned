# 网规学习站 · 开发规范(网络规划设计师 / 软考高级)

网络规划设计师备考站。纯静态、零依赖、离线可用。**引擎克隆自系分站(SAN),命名空间已整体改为 `NPD`。**

## 技术架构

- 纯 HTML/CSS/JS,零依赖、零构建;Hash SPA 路由
- 内容即数据:`NPD.registerLesson()` 注册课时;localStorage 前缀 **`npd.`**(`npd.progress.v1`)
- 全局命名空间:`window.NPD`
- 视觉:沿用「瑞士编辑型」+ 网格元素,品牌色 **琥珀金 `--accent:#B45309`**

## 目录结构

```
index.html                 入口(脚本顺序:引擎 → modules.js/terms.js → 全部课时)
assets/css/main.css        全部样式(design tokens 在顶部 :root)
assets/js/                 引擎(克隆自 SAN,已改 NPD)。不要改逻辑
content/
  modules.js               21 模块元数据 + NPD.path(98 课有序 id)
  terms.js                 术语表(NPD.terms 数组,108 条)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 课时模板(六段式)

`NPD.registerLesson({ id, module, order, title, minutes, key?, keywords, concept, exam, core, pitfalls, quiz, links })`

- 六段:concept①概念 · exam②考纲定位 · core③核心要点 · pitfalls④易混辨析 · quiz⑤真题练习 · links⑥关联
- quiz:`{type:'choice',q,options[],answer:idx,source,explain}` 或 `{type:'fill',q,answer:[..],source,explain}`,答错入错题本
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`、`.pit`、`<figure class="fig"><svg>`(SVG 仅用 CSS 变量)

## 计算器(views-tools.js 的 calc)

网规高频三件套:**IP 子网划分、信道容量(奈奎斯特/香农)、链路可靠度(串/并联)**。函数 `NPD.calcSubnet / calcCapacity / calcReliability`;辅助 `NPD._ip2int / _int2ip`。

## 内容侧重(相对 SAN/SPM)

**本考考三科:综合知识(选择,含专业英语)+ 案例分析(写作)+ 论文(命题作文)**——故**设 essay 模块**(6 课)。内容以**计算机网络**为绝对核心:数据通信、OSI/TCP-IP、物理链路、IP 与子网、路由协议、传输应用层、局域网广域网、互连设备;进阶含网络安全、无线移动、网络存储、SDN/NFV;**网络规划与设计**是案例与论文主战场(需求→逻辑→物理→设备选型)。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;每课标考纲频率/分值;真题只标年份来源不照抄题面;**考试题量/分值/法律年限以官方最新通知与现行法律为准**,不确定处标注;无 emoji。

## 现状

21 模块 / 98 课全部写完(基础18 + 核心39 + 进阶29 + 实战12),术语库 108 条。`node --check` 全过,课时 id 与 `NPD.path` 一一对应,术语引用全部可解析(零 used-but-undefined)。计算器三件(IP子网/信道容量/链路可靠度)已单元测试通过。
