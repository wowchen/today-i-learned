# 十五五规划学习站 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透《国民经济和社会发展第十五个五年规划纲要》(2026–2030)的零基础自学站。
纯静态、零依赖、零构建:浏览器直接打开 `index.html` 即可运行(`file://` 可用),GitHub Pages 托管。

**架构与决策依据见 `需求与讨论.md`(本站宪法),不要违背它。**
`design/` 是风格选型稿,**保留,不要删除**;定稿为**风格 B 智库白皮书**,全站样式令牌在 `assets/css/main.css` 顶部 `:root`。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。新增课程文件后在此追加 <script> 标签
需求与讨论.md               本站宪法:需求、ADR、体验原则
design/                    风格选型稿(index 选型页 + style-a/b/c),定稿 B,保留
assets/css/main.css        全站样式(顶部 :root 令牌 + 末尾"风格 B 覆盖")
assets/js/                 SPA 引擎(从电网站复制,命名空间已改 PGF→FYP)。不要改动
  registry.js  progress.js  sync.js  ui.js  terms.js
  views-home.js  views-lesson.js  views-tools.js  engine.js
content/
  modules.js               19 模块元信息 + 学习路线(63 课占位,id 即课程 id)
  terms.js                 全站术语库(随模块扩充)
  guide/NN-*.js            模块 0 · 学习导览(已完成 4 课)
  overview/NN-*.js         第一篇 · 总览(已完成 5 课)
  <模块目录>/NN-slug.js     其余各篇课程,按下方规范编写
```

## 引擎契约(不要改 assets/)

- 全局命名空间 **`FYP`**。内容通过 `<script>` 自注册:
  `FYP.registerModule / FYP.registerPath / FYP.registerLesson / FYP.registerTerms`。
- 路由:`#/` 首页 · `#/path` 路线 · `#/m/<id>` 模块 · `#/l/<id>` 课程 · `#/terms` · `#/book` · `#/review` · `#/search` · `#/settings`。
- 课程五段(键名固定,缺哪段就不渲染那段):
  `what`(①一句话是什么)`why`(②为什么重要)`how`(③怎么运作)`pitfalls`(④常见误解与易混)`links`(⑤关联与延伸)。

## 新增一课的完整步骤(三步,缺一不可)

1. **写课程文件** `content/<模块>/NN-slug.js`,`id` 必须与 `modules.js` 路线里的占位 id 完全一致:
   ```js
   FYP.registerLesson({
     id: 'industry-01-system', module: 'industry', order: 1,
     title: '现代化产业体系是什么', minutes: 5,
     keywords: ['现代化产业体系','实体经济','制造业'],
     sections: { what:'…', why:'…', how:'…', pitfalls:'…', links:'…' }
   });
   ```
   - 正文是 HTML 字符串;术语用 `<gd data-term="id">词</gd>`,例子用 `<div class="ex">`,坑用 `<div class="pit">`,表格直接 `<table>`。
   - 范本看 `content/overview/04-index.js`(含表格)与 `content/guide/03-map.js`(含多行表)。
2. **在 `index.html` 追加 `<script>`**:按模块分组、在"引擎启动"之前。
3. **补术语**:本课新出现的术语追加进 `content/terms.js`,并把 `lesson` 指回本课 id。

## 内容纪律(重要)

- 口吻:零基础大白话 + 末尾产业/决策落点(见任意已写课的 ⑤/`pit`/`ex` 处理)。
- 数字:量化指标以《纲要》原文为准;二手概数必须标注"概数,以原文为准"。
- 不编造政治表述;做通俗解读,不做权威发布。
- 不用 emoji;图标线性 SVG 或字形符号。

## 本地预览与自测

```bash
cd /Users/Solun/AGI/Claude/20260622-today-i-learned
python3 -m http.server 8011
# 浏览器打开 http://localhost:8011/fifteenth-five-year-plan/
node --check content/**/*.js          # 推送前先过语法
```
Playwright 自测脚本范式见会话记录:检查首页/课程/路线/术语表渲染 + 零 console 报错。

## 进度

- ✅ 19 模块 / 63 课**全部写完**,术语库 63 条;全站 Playwright 自测无 console 报错。
- 后续可迭代:核对纲要原文精确数值(指标专栏优先)、按需加 SVG 配图、细分课程。

修改或新增课程仍须遵守上面的"新增一课三步"和"内容纪律"。
