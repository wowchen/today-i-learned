# 世界艺术通史学习站 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透世界艺术通史(科普通识,加德纳《艺术通史》式脉络):史前与原始 + 古代近东与埃及 + 爱琴与古希腊 + 古罗马 + 早期基督教与拜占庭 + 伊斯兰 + 中世纪(罗马式与哥特)+ 文艺复兴 + 巴洛克与洛可可 + 18-19 世纪 + 现代 + 当代 + 东亚(中国与日本)+ 印度·美洲·非洲·大洋洲。
纯静态、零依赖、零构建:浏览器直接打开 `index.html` 即可运行(`file://` 可用),GitHub Pages 托管。「今日得到」合集第 29 站。

## 与其它站的关系

- **引擎克隆自 AI+电力站(AIP)**:`registry / progress / sync / ui / engine / views-lesson` 与 AIP 逐行同构(仅 `AIP`->`WAH`、localStorage 前缀 `aip.`->`wah.`)。`tools/build.js` 同构(对象式 MODULES 含富字段 + helpers `g/ex/pit/fml/qc/qf`,但 _src 内联 HTML 不调 helper)。
- **四件历史工具移植自世界历史站(WHS)**:`views-tools.js` 的 timeline / figures / styles / crossRef 移植自 WHS(仅 `WHS`->`WAH`、字段名 `dynasty`->`era`、`capital/founder/lastRuler/generations`->`region/keyworks/turning/span`),数据改为艺术通史(艺术家 / 中外艺术对照)。
- **视觉 = 画室调色板(本站新定)**:浅色 = 画布白 `--bg:#FBFAF6` + 群青蓝 `--acc:#1d4e89` + 赭石橙 `--acc2:#c8761e`;深色 = 深普蓝 `--bg:#0f1b2d` + 亮蓝 `--acc:#6fa8dc` + 亮赭石。`--red`/`--red-soft` 为 `--acc`/`--acc-soft` 别名(兼容移植工具代码)。
- **首页主图 = 调色板 + 画笔笔触**(`views-home.js` 的 `paletteSVG()`):六个颜料窝(红橙黄绿蓝紫)逐个跳动,一道群青笔触扫过盘面。带 `prefers-reduced-motion` 守卫。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入)
assets/css/main.css        全部样式(画室调色板双主题 + .gh-* + 工具 .tl-*/.figures-*/.era-table 等)
assets/js/                 SPA 引擎(克隆 AIP 改 WAH)+ views-home(调色板)/views-tools(4 历史工具)
  registry.js  progress.js  sync.js  ui.js
  views-home.js  views-lesson.js  views-tools.js  engine.js
content/                   modules.js(15 模块 + WAH.path + 富字段)、terms.js(74 条)、
                           artists.js(63 位艺术家 WAH_FIGURES)、crossref.js(28 中外对照 WAH_PARALLEL)、
                           <模块目录>/NN-slug.js  ← 自动生成
tools/build.js             单一数据源(对象式 MODULES + TERMS)+ 从 _src 加载课程 + 校验 + 生成 + 注入
tools/_src/<module>.js     各模块课时块(module.exports = [...])
tools/_smoke.js            DOM-shim 冒烟自检
```

## 引擎契约(不要改 assets/ 的逻辑)

- 全局命名空间 **`WAH`**。内容通过 `<script>` 自注册:`WAH.registerLesson / WAH.modules / WAH.path / WAH.terms`(modules.js/terms.js 直接赋值;课时文件调 registerLesson)。
- localStorage 前缀 **`wah.`**(`wah.progress.v1` / `wah.sync.v1`),与同域其它站隔离。
- 路由:`#/` 首页 · `#/m/<id>` 模块 · `#/l/<id>` 课程 · `#/terms` 速查 · `#/book` 收藏 · `#/search` 搜索 · `#/calc` 工具总页 · `#/timeline` 时间轴 · `#/figures` 艺术家图鉴 · `#/styles` 流派速查 · `#/cross-ref` 中外对照 · `#/settings`。
- 默认主题跟随系统;HTML 标签上 `data-theme`。
- 课程五段:`concept`(①一句话) `core`(②讲透) `pitfalls`(③别绕晕) `quiz`(④想一想) `links`(⑤接着读)。

## 内容生成

```bash
cd world-art-history
node tools/build.js    # 生成 content/ 并注入 index.html 脚本标签
node tools/_smoke.js   # DOM-shim 冒烟自检(模块数/课时数/术语/五段式/坏链/视图/工具)
```

源数据在 `tools/_src/*.js`,每个文件 `module.exports = [[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links], ...]`。
concept/core/pitfalls/links 是**内联 HTML 字符串**(不调 helper):用 `<gd data-term="id">中文</gd>` 标注术语、`<div class="ex">` 加类比、`<div class="pit"><b>别绕晕 </b>...</div>`、quiz 对象、`<a href="#/l/...">` 或 `<a href="#/m/...">` 链接。
build.js 会校验:data-term 是否定义、内部链接是否存在、是否含 emoji。

## 15 模块(87 课)

guide 导览 · prehistoric 史前与原始 · ancient-east 古代近东与埃及 · aegean-greece 爱琴与古希腊 · rome 伊特鲁里亚与古罗马 · byzantine 早期基督教与拜占庭 · islamic 伊斯兰 · medieval 中世纪(罗马式与哥特)· renaissance 文艺复兴 · baroque 巴洛克与洛可可 · c19 18-19 世纪 · modern 现代 · contemporary 当代 · east-asia 东亚(中国与日本)· world-beyond 印度·美洲·非洲·大洋洲。

## 4 个互动工具(views-tools.js)

1. **艺术史时间轴** - 15 个时代/流派等宽条带,多文明并行,点节点跳关联课时
2. **艺术家图鉴** - 63 位世界艺术史重要艺术家卡片墙,按时代过滤,点卡片看代表作与关联课时
3. **流派速查** - 15 个时代/流派一览:起讫、地域、代表作、关键转折、一句话
4. **中外艺术对照** - 同一时间线左看世界、右看同期中国,28 个对照节点,可关键词过滤

## 本地预览与自测

```bash
cd /Users/Solun/AGI/Claude/20260622-today-i-learned
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/world-art-history/
```

自测清单:首页 hero(调色板+画笔笔触动效)/ 模块索引 / 模块页 / 课程五段 / 术语点查弹窗 / 设置主题切换 + 零 console 报错 / 四个工具页(时间轴/图鉴/速查/对照)功能正常。
