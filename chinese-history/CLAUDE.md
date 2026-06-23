# 中国历史学习站 · 开发规范(CHS · 科普通识)

大白话讲透五千年中国历史的科普站。纯静态、零依赖、离线可用。**引擎克隆自投资理财站(PFIN),命名空间整体改为 `CHS`。科普通识站,不是考试站。**

## 与考试/理财站的差异

- **历史专题概念新增**:`era`(朝代起讫)/`color`(朝代色)/`ghost`(古体大写数字)/`shortTitle`(轴条带名)在 `CHS.modules` 上;`CHS_FIGURES`(人物表)与 `CHS_NIANHAO`(年号表)为新增的两个独立全局数据集。
- **顶栏多 4 个工具入口**:时间轴 / 图鉴 / 速查 / 年号(在 `views-tools.js` 中作为子视图);课时仍走 5 段式 `concept/core/pitfalls/quiz/links`,无 exam、无错题本、无论文。
- **视觉为 C 朝代瓦片设计语言**(白底 + 11 种朝代色 + 朱红 `#A52A2A` 点缀);深色版本提亮 10-15% 保证可读;定稿源自 `designs/index-c-tiles.html`。
- **顶栏深/浅色切换按钮**(`CHS.toggleTheme()`),偏好存 `chs.progress.v1` 的 `prefs.theme`;`index.html` head 内联脚本防刷新闪烁。

## 技术架构

- 纯 HTML/CSS/JS,零依赖、零构建;Hash SPA 路由。
- 内容即数据:`CHS.registerLesson()` 注册课时;localStorage 前缀 **`chs.`**(`chs.progress.v1`)。
- 全局命名空间:`window.CHS`(主)、`window.CHS_FIGURES`(人物)、`window.CHS_NIANHAO`(年号)。
- 设计令牌:浅 `--bg#FFF/--ink#0E0E0E/--red#A52A2A`;深 `--bg#0E0E0E/--ink#F0EDE6/--red#C44545`。瑞士直角、单一红点缀、Inter 字体、`data-fs` 字号档。

## 目录结构

```
index.html                 SPA 外壳(顶栏导航 + #app + 引擎/内容脚本)
designs/                   3 套首页设计稿(保留;index-c-tiles.html 为定稿)
assets/css/main.css        全部样式(C 朝代瓦片令牌 + 14 模块色 + 全 SPA 视图)
assets/js/                 引擎(克隆自 PFIN 改 CHS)。registry/progress/ui/engine/views-home/views-lesson/views-tools
content/
  modules.js               14 模块元数据 + CHS.path(135 课有序 id)+ totalLessons
  terms.js                 术语表(CHS.terms,130 条)
  figures.js               人物图鉴(CHS_FIGURES,约 96 位)
  years.js                 年号库(CHS_NIANHAO,约 280 条)
  <module>/<NN>-<slug>.js  课时,id 必须等于 "module/NN-slug"
```

## 课时模板(五段式)

`CHS.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`

- 渲染顺序:concept ① · core ② · pitfalls ③ · quiz ④(想一想) · links ⑤。**无 `exam` 字段**。
- quiz:`{type:'choice',q,options[],answer:idx,source,explain}` 或 `{type:'fill',q,answer:[..],source,explain}`;答错只展示解析,**不入错题本**。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(红边块)、`.pit`(灰边块)、`<table>`、`<blockquote><cite>`(古籍引文)。

## 工具(views-tools.js,4 件历史专用)

- **时间轴 `CHS.tools.timeline`**:SVG 横向条带(公元前 5000 → 公元 2026)+ 朝代色块,点跳模块。
- **人物图鉴 `CHS.tools.figures`**:卡片墙,按朝代/角色过滤,点开看生平 + 关键事件 + 关联课时。
- **朝代速查 `CHS.tools.eraTable`**:14 行表格,朝代/起讫/都城/开国君/亡国君/传位/一句话。
- **皇帝/年号换算器 `CHS.tools.yearConvert`**:公元 → 年号/朝代/皇帝;年号(如"贞观三年") → 公元。预置 ~280 条主要年号。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;无 emoji;**不戏说、不阴谋论、不焦虑**;断代/史料/学界争议(夏王朝是否存在、武王伐纣年份等)处标注"通说 vs 异说";引文以中华书局校本/通行教材为准;不出现政治评论与对当代人物的价值判断;**新中国部分只述事实**,聚焦时间线与经济发展;不出现具体未公开的细节。

## 现状

14 模块 / 135 课全部写完。术语 130 条、人物 96 位、年号 280+ 条。`node --check` 全过,课时 id 与 `CHS.path` 一一对应,术语/人物/年号引用全部可解析。4 件历史工具已实现。
