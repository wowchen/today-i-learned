# 能源北斗与时空服务 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透**北斗时空服务(PNT)+ 能源/电力行业**的通识自学站。零基础一看就懂。
纯静态、零依赖、零构建:浏览器直接打开 `index.html` 即可运行(`file://` 可用),GitHub Pages 托管。
本站是「今日得到」合集(仓库根)的第 13 个子站,引擎克隆自同族 `power-grid-fundamentals`,命名空间改为 `EBD`。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。新增课程文件后在此追加 <script> 标签
assets/css/main.css        全站样式(设计令牌置顶,风格 A「星空司南」)
assets/js/                 引擎(已验收,内容工作中不要改)
  registry.js              内容/术语注册中心 + 搜索索引
  progress.js              进度/术语本/streak(localStorage 键 ebd.progress.v1)
  sync.js                  可选的 GitHub 进度同步(ebd.sync.v1;代码里永不出现 token)
  ui.js / terms.js         转义渲染 / 术语点查浮层
  views-home.js / views-lesson.js / views-tools.js   首页 / 课程页 / 工具页
  engine.js                hash 路由 + 启动(script 顺序里必须最后)
content/
  modules.js               12 模块元信息 + 学习路线(100 课占位)
  terms.js                 全站术语库(EBD.registerTerms)
  <模块>/NN-slug.js         课程(五段式 schema,见下)
design/                    视觉风格选型稿(保留;定稿为 style-a 星空司南)
```

命名空间 `EBD`、localStorage 前缀 `ebd.*`,与合集中其它站互不串扰。

## 课程 schema(五段式,无小测)

```js
EBD.registerLesson({
  id: 'beidou-04-constellation',  // 与 modules.js 路线占位完全一致:模块前缀-序号-slug
  module: 'beidou',
  order: 4,
  title: '混合星座:GEO、IGSO、MEO 各司其职',
  minutes: 5,                      // 阅读分钟,硬上限 5;超了拆课
  key: '北斗招牌',                 // 可选:重点课标记
  keywords: ['星座','GEO','IGSO','MEO'],
  sections: {                      // 五段,HTML 字符串拼接
    what:'…', why:'…', how:'…', pitfalls:'…', links:'…'
  }
});
```

**无 quiz 字段,引擎无判分逻辑,不要发明小测。**

## 内容铁律

1. **大白话优先**:术语第一次出现前先用类比/场景讲明白,再给术语名。
2. **术语点查**:行业术语**首次出现**用 `<gd data-term="id">术语</gd>` 包裹;`id` 必须在 `content/terms.js` 存在(同一课重复只包第一次)。
3. **5 分钟颗粒度**:一课只讲一个点,讲不完就拆。
4. **关键数字给锚点**:如「北斗三号约 30 颗(3 GEO+3 IGSO+24 MEO)」「短报文区域版一次百余字」;会过时的写量级 + 年份口径。
5. **块**:例子/关键数字用 `<div class="ex">`,误解用 `<div class="pit"><b>误解:…</b>…</div>`,对照用 `<table>`。
6. **图解优先**:流程/结构/曲线类概念配**内联 SVG**,放 `how` 段;SVG 只用预设取色类(`f-box/f-box2/f-line/f-arr/f-txt/f-dim/f-hot/f-ok/f-okln`),**不写死 #hex**,marker id 带课序号防冲突。
7. **中国语境为准**;**无 emoji、无外链资源、不内联写死颜色**(图标用线性 SVG 或 ☆ ✓ × 字形)。
8. **通识边界**:不讲继电保护整定、潮流计算、通信协议报文、设备选型;不荐股、不焦虑、不戏说。
9. **隐私与安全**:人员定位类内容强调"安全/合规"边界;电力设施位置属敏感信息,语气审慎。

知识来源:模型知识 + 北斗与电力公开资料,遵守上述文风铁律。

## 新增/修改一课(四步)

1. 新建 `content/<模块>/<NN>-<slug>.js`,按 schema 写;
2. 新术语追加进 `content/terms.js`(`<gd data-term>` 引用的 id 必须存在);
3. 在 `index.html` 内容区按模块、按 order 追加 `<script src="content/...js">`(**必须在 engine.js 之前**);
4. 课程 id 与 `content/modules.js` 的 `registerPath` 占位**完全一致**,即自动激活。

## 验收自查

- `node --check assets/js/*.js content/**/*.js` 全通过;`grep -rn "PGF" .` 应为空(改名彻底)。
- 浏览器开 `index.html`:能进任意课、`<gd>` 点击弹卡且可收藏、搜索命中关键词、深浅主题切换、`↗ 总站` 返回根。
- 无 emoji、SVG 无写死 #hex、所有 `data-term` 在 terms.js 有对应条目、localStorage 用 `ebd.*`。
