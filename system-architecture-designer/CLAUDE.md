# 架构学习站 · 开发规范(系统架构设计师 / 软考高级)

系统架构设计师备考站。纯静态、零依赖、离线可用。**引擎克隆自高项站(ISPM),命名空间已整体改为 `SAD`。**

## 技术架构

- 纯 HTML/CSS/JS,零 npm 依赖、零构建;Hash SPA 路由
- 内容即数据:课时是 JS 对象,通过 `SAD.registerLesson()` 注册
- localStorage 持久化(进度/术语/错题/偏好),前缀 **`sad.`**(`sad.progress.v1`)
- 全局命名空间:`window.SAD`
- 视觉:沿用高项「瑞士编辑型」+ 架构元素(蓝图钢青 `--accent:#0F6E7C`、极淡蓝图网格底纹、分层堆叠品牌标)

## 目录结构

```
index.html                 SPA 入口(脚本顺序:引擎 → modules.js/terms.js → 全部课时)
assets/css/main.css        全部样式(design tokens 在顶部 :root,改风格只动这里)
assets/js/                 引擎(克隆自 ISPM,已改 SAD)。不要改逻辑
  registry.js progress.js ui.js views-home.js views-lesson.js views-tools.js engine.js
content/
  modules.js               20 模块元数据 + SAD.path(133 课有序 id)
  terms.js                 术语表(SAD.terms 数组)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 课时模板(六段式)

`SAD.registerLesson({ id, module, order, title, minutes, key?, keywords, concept, exam, core, pitfalls, quiz, links })`

- `id` 格式 `module/NN-slug`,与文件路径、`SAD.path` 占位完全一致
- 六段:`concept`①概念 · `exam`②考纲定位 · `core`③核心要点 · `pitfalls`④易混辨析 · `quiz`⑤真题练习 · `links`⑥关联
- quiz:`{type:'choice',q,options[],answer:idx,source,explain}` 或 `{type:'fill',q,answer:[..],source,explain}`,答错自动进错题本
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`,例子 `<div class="ex">`,坑 `<div class="pit">`,图 `<figure class="fig"><svg>…</svg></figure>`,SVG 只用 CSS 变量取色

## 计算器(views-tools.js 的 calc)

已替换为架构高频:**系统可靠度(串/并联)、Amdahl 加速比、海明校验位**。函数 `SAD.calcReliability / calcAmdahl / calcHamming`。

## 新增/修改课时步骤

1. 在 `content/<module>/` 写 `<NN>-<slug>.js`(六段式)
2. 确认 `content/modules.js` 的 `SAD.path` 含该 id(否则不进路线)
3. 在 `index.html` 底部按模块追加 `<script>`(或重跑生成脚本)
4. 新术语补进 `content/terms.js`

## 内容纪律

- 白话先行再上术语;一课一概念,≤5 分钟;每课标考纲频率/分值
- 真题只标年份来源(如「2022下」),不照抄题面
- **考试题量/题型/分值/法律年限等以官方最新通知与现行法律为准**,不确定处明确标注
- 无 emoji,图标用线性 SVG / Unicode

## 现状

20 模块 / 133 课全部写完(基础31 + 核心49 + 进阶33 + 实战20),术语库约 100 条。`node --check` 全过,课时 id 与 `SAD.path` 一一对应,术语引用全部可解析。
