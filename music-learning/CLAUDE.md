# 音乐学习站 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透音乐的零基础自学站:乐理 + 乐器 + 音乐史 + 赏析,外加一整块**流行歌演唱**。
纯静态、零依赖、零构建:浏览器直接打开 `index.html` 即可运行(`file://` 可用),GitHub Pages 托管。

**定位与决策依据见 `需求与讨论.md`(本站宪法),不要违背它。**
`design/` 是风格选型稿,**保留,不要删除**;定稿为**风格 A 黑胶夜场**,全站样式令牌在 `assets/css/main.css` 顶部 `:root`。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。新增课程文件后在此追加 <script> 标签
需求与讨论.md               本站宪法:定位、ADR、体验原则
design/                    风格选型稿(index 选型页 + style-a/b/c),定稿 A,保留
assets/css/main.css        全站样式(顶部 :root 令牌 + 末尾"风格 A 覆盖")
assets/js/                 SPA 引擎(从十五五站复制,命名空间已改 FYP→MUS)。不要改动
  registry.js  progress.js  sync.js  ui.js  terms.js
  views-home.js  views-lesson.js  views-tools.js  engine.js
content/
  modules.js               6 模块元信息 + 学习路线(37 课占位,id 即课程 id)
  terms.js                 全站术语库(随模块扩充)
  guide/NN-*.js            模块 0 · 学习导览(已完成 4 课)
  theory/NN-*.js           模块 1 · 乐理(已完成 2 课)
  vocal/NN-*.js            模块 5 · 流行演唱(已完成 1 课)
  <模块目录>/NN-slug.js     其余各模块课程,按下方规范编写
```

## 引擎契约(不要改 assets/)

- 全局命名空间 **`MUS`**(从十五五的 `FYP` 整体重命名而来)。内容通过 `<script>` 自注册:
  `MUS.registerModule / MUS.registerPath / MUS.registerLesson / MUS.registerTerms`。
- localStorage 前缀 **`mus.`**(`mus.progress.v1` / `mus.sync.v1`),与同域其它站隔离。
- 路由:`#/` 首页 · `#/path` 路线 · `#/m/<id>` 模块 · `#/l/<id>` 课程 · `#/terms` · `#/book` · `#/review` · `#/search` · `#/settings`。
- 默认主题 `dark`(黑胶夜场);`light` 为纸上乐谱。HTML 标签上 `data-theme="dark"`。
- 课程五段(键名固定,缺哪段就不渲染那段):
  `what`(①一句话是什么)`why`(②为什么重要)`how`(③怎么运作)`pitfalls`(④常见误解与易混)`links`(⑤关联与延伸)。

## 新增一课的完整步骤(三步,缺一不可)

1. **写课程文件** `content/<模块>/NN-slug.js`,`id` 必须与 `modules.js` 路线里的占位 id 完全一致:
   ```js
   MUS.registerLesson({
     id: 'theory-03-scale', module: 'theory', order: 3,
     title: '音阶与调式:do re mi 的排列', minutes: 5,
     keywords: ['音阶','调式','大调','小调'],
     sections: { what:'…', why:'…', how:'…', pitfalls:'…', links:'…' }
   });
   ```
   - 正文是 HTML 字符串;术语用 `<gd data-term="id">词</gd>`,例子用 `<div class="ex">`,坑用 `<div class="pit">`,表格直接 `<table>`,图解用 `<figure class="fig"><svg>…</svg></figure>` 并使用 `.f-*` 类取色。
   - 范本看 `content/theory/01-notes.js`(含键盘 SVG + 表格)与 `content/vocal/01-voice.js`(含流程 SVG)。
2. **在 `index.html` 追加 `<script>`**:按模块分组、在"引擎启动"之前。
3. **补术语**:本课新出现的术语追加进 `content/terms.js`,并把 `lesson` 指回本课 id。

## 内容纪律(重要)

- 口吻:零基础大白话 + 每课末尾给"对你/对练习意味着什么"的落点。
- 演唱类课程多给**可当场试的小实验**(如自检真假声),别只讲理论。
- 不用 emoji;图标线性 SVG(`.f-*` 类)或字形符号(♪ ✓ ×)。
- 概念以通用乐理/声乐共识为准;有流派分歧时说明"常见说法",不绝对化。

## 本地预览与自测

```bash
cd /Users/Solun/AGI/Claude/20260622-today-i-learned
python3 -m http.server 8011
# 浏览器打开 http://localhost:8011/music-learning/
node --check content/**/*.js          # 推送前先过语法
```
自测清单:首页 hero / 学习路线 / 模块页 / 课程五段 / 术语点查弹窗 / 术语本翻牌 / 设置主题切换 + 零 console 报错。

## 进度

- ✅ 引擎已就位(FYP→MUS,ffp.→mus.),风格 A 黑胶夜场样式完成。
- ✅ 6 模块 / 37 课**全部写完**(导览 4 + 乐理 7 + 乐器 7 + 音乐史 7 + 赏析 5 + 演唱 7),术语库 108 条;`node --check` 全过、术语引用全部可解析。
- 后续可迭代:按需加 SVG 图解、补充各风格代表曲目示例、细分进阶课。
