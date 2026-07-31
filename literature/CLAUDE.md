# 文学通识学习站 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透文学的科普通识站：文学基础 + 诗歌 + 小说 + 散文 + 戏剧 + 中国古典 + 中国现当代 + 西方古典 + 西方近现代 + 文学理论 + 批评赏析 + 文学与时代。
纯静态、零依赖、零构建：浏览器直接打开 `index.html` 即可运行(`file://` 可用)，GitHub Pages 托管。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。课程脚本由 build.js 注入
assets/css/main.css        全站样式(顶部 :root 令牌:浅色宣纸米白+墨黑+朱砂红 / 深色深墨青+暖米金)
assets/js/                 SPA 引擎(从 astronomy 克隆,命名空间 AST->LIT)。不要改动逻辑
  registry.js  progress.js  sync.js  ui.js
  views-home.js  views-lesson.js  views-tools.js  engine.js
content/
  modules.js               12 模块元信息 + 学习路线(83 课，自动生成)
  terms.js                 全站术语库(84 条，自动生成)
  <模块目录>/NN-slug.js     各模块课程(自动生成)
tools/
  build.js                 单一数据源生成器(MODULES + TERMS + 加载 _src)
  _src/                    12 个模块的课程源数据(L.moduleName = [...])
  _smoke.js                DOM-shim 冒烟自检
```

## 引擎契约(不要改 assets/ 的逻辑)

- 全局命名空间 **`LIT`**。内容通过 `<script>` 自注册：
  `LIT.registerModule / LIT.registerPath / LIT.registerLesson / LIT.registerTerms`。
- localStorage 前缀 **`lit.`**(`lit.progress.v1` / `lit.sync.v1`)，与同域其它站隔离。
- 路由：`#/` 首页 · `#/path` 路线 · `#/m/<id>` 模块 · `#/l/<id>` 课程 · `#/terms` · `#/book` · `#/review` · `#/search` · `#/calc` · `#/settings`。
- 默认主题跟随系统；HTML 标签上 `data-theme`。
- 课程五段：`concept`(①一句话) `core`(②讲透) `pitfalls`(③别绕晕) `quiz`(④想一想) `links`(⑤接着读)。

## 内容生成

```bash
cd literature
node tools/build.js    # 生成 content/ 并注入 index.html 脚本标签
node tools/_smoke.js   # DOM-shim 冒烟自检(模块数/课时数/术语/五段式/坏链/视图/工具)
```

源数据在 `tools/_src/*.js`，每个文件定义 `L.moduleName = [[slug, title, minutes, keywords, concept, core, pitfalls, quiz[], links], ...]`。
build.js 内提供 helper：`g(id,名)` 术语标注、`ex(文)` 例证框、`pit(文)` 别绕晕框、`fml(文)` 公式框、`qc(q,opts,ans,explain)` 选择题、`qf(...)` 填空题。
build.js 会校验：data-term 是否定义、内部链接是否存在、是否含 emoji。

## 互动工具(4 件，在 views-tools.js)

1. **诗词体裁格律谱** - 选诗(词)体,显示字数/押韵/对仗/平仄谱(五绝/七绝/五律/七律/浣溪沙/如梦令)
2. **叙事视角切换器** - 同一场景换五种视角(全知/限知第三/第一/第二/客观)实时改写展示
3. **情节弧线绘制器** - 输入事件紧张度(0-100),SVG 绘制起伏曲线,可叠加三幕/英雄之旅参考线
4. **修辞赏析台** - 选修辞(比喻/拟人/借代/夸张/排比/对偶/反讽),看例句、机理与赏析

## 本地预览与自测

```bash
cd D:/LLM/Claude/20260729-today-i-learned
python -m http.server 8000
# 浏览器打开 http://localhost:8000/literature/
```

自测清单：首页 hero(翻开的书+朱砂印章动效) / 学习路线 / 模块页 / 课程五段 / 术语点查弹窗 / 术语本翻牌 / 设置主题切换 + 零 console 报错 / 四个工具页功能正常。
