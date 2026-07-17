# 吉他弹唱学习站 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透吉他弹唱的入门自学站：吉他入门 + 乐理速通 + 和弦大全 + 节奏扫弦 + 指弹分解 + 弹唱配合 + 变调夹 + 技巧 + 曲目 + 编配 + 练习 + 器材。
纯静态、零依赖、零构建：浏览器直接打开 `index.html` 即可运行(`file://` 可用)，GitHub Pages 托管。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。课程脚本由 build.js 注入
assets/css/main.css        全站样式(顶部 :root 令牌：浅色暖木色琥珀 / 深色深咖啡暖金)
assets/js/                 SPA 引擎(从 astronomy 克隆，命名空间 AST→GTR)。不要改动
  registry.js  progress.js  sync.js  ui.js
  views-home.js  views-lesson.js  views-tools.js  engine.js
content/
  modules.js               12 模块元信息 + 学习路线(74 课，自动生成)
  terms.js                 全站术语库(67 条，自动生成)
  <模块目录>/NN-slug.js     各模块课程(自动生成)
tools/
  build.js                 单一数据源生成器(MODULES + TERMS + 加载 _src)
  _src/                    12 个模块的课程源数据(L.moduleName = [...])
```

## 引擎契约(不要改 assets/)

- 全局命名空间 **`GTR`**。内容通过 `<script>` 自注册：
  `GTR.registerModule / GTR.registerPath / GTR.registerLesson / GTR.registerTerms`。
- localStorage 前缀 **`gtr.`**(`gtr.progress.v1` / `gtr.sync.v1`)，与同域其它站隔离。
- 路由：`#/` 首页 · `#/path` 路线 · `#/m/<id>` 模块 · `#/l/<id>` 课程 · `#/terms` · `#/book` · `#/review` · `#/search` · `#/calc` · `#/settings`。
- 默认主题跟随系统；HTML 标签上 `data-theme`。
- 课程五段：`concept`(①一句话) `core`(②讲透) `pitfalls`(③别踩坑) `quiz`(④想一想) `links`(⑤接着读)。

## 内容生成

```bash
cd guitar-singing
node tools/build.js    # 生成 content/ 并注入 index.html 脚本标签
```

源数据在 `tools/_src/*.js`，每个文件定义 `L.moduleName = [[slug, title, minutes, keywords, concept, core, pitfalls, quiz[], links], ...]`。
build.js 会校验：data-term 是否定义、内部链接是否存在、是否含 emoji。

## 互动工具(4 件)

1. **和弦指板图** - 选和弦显示 SVG 指板图(15 个常用开放和弦)
2. **节拍器** - Web Audio API 节拍器(40-200 BPM，可调拍号)
3. **标准音调音** - 播放 EADGBE 标准音(正弦波振荡器)
4. **变调夹计算器** - 输入原调和目标调，输出变调夹品位

## 本地预览与自测

```bash
cd /Users/Solun/AGI/Claude/20260622-today-i-learned
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/guitar-singing/
```

自测清单：首页 hero / 学习路线 / 模块页 / 课程五段 / 术语点查弹窗 / 术语本翻牌 / 设置主题切换 + 零 console 报错 / 四个工具页功能正常。
