# CLAUDE.md · 人工智能学习站维护说明

给未来在本目录工作的 AI/人类的速查。本站是「今日得到」合集第 14 站,克隆自 `world-history` 历史站引擎并改造而来。

## 命名空间与约定

- 全局命名空间:**`AIX`**(原历史站为 `WHS`)。
- 进度存储:localStorage `aix.progress.v1`。
- 品牌色:靛蓝 `#4f46e5`(总站 tile #14 同色)。
- 文风铁律:大白话、一课一个点(≤5 分钟)、不焦虑不夸大、中外并重;**无 emoji**(仅可用 ☆ ✓ ×);会过时的数字写**量级 + 年份口径(截至 2026 年初)**。
- **去掉了小测(quiz)**:课程 schema 只有 `concept / core / pitfalls / links` 四段。

## 目录结构

```
index.html                 外壳:移动顶栏 + .app(侧栏#side + 主区#app + 遮罩) + 脚本列表
assets/css/main.css        全部样式;设计令牌在 :root(浅色)与 :root[data-theme=dark]
assets/js/
  registry.js   AIX.lessons / searchIndex / registerLesson / search
  progress.js   AIX.progress():markRead/isRead/收藏/prefs/streak/currentStep/导入导出
  ui.js         AIX.esc / render(清弹卡+注入#app+bindTerms) / showTermCard / icons
  shell.js      AIX.buildShell/renderShell/closeDrawer:侧栏模块树、工具链接、主题/总站、移动抽屉
  views-home.js 首页(hero+stats+模块网格+工具网格)
  views-lesson.js 课时(四段 + 右栏大纲 + 翻页 + 标记已学;无 quiz)
  views-tools.js 模块页 / timeline / figures / cheatsheet(大模型速查) / compare(中外对照) / terms / book / search / settings
  views-lab.js  互动实验室:lab 索引 + attention / perceptron / prompt 三个工具
  engine.js     hash 路由 + 启动;路由表见下
content/
  modules.js    AIX.modules(13) + AIX.path(100 课顺序) + AIX.totalLessons  ← 自动生成
  terms.js      AIX.terms(73 条)                                          ← 自动生成
  figures.js    window.AIX_FIGURES(21 人物)                               ← 自动生成
  timeline.js   window.AIX_TIMELINE(17 节点)                              ← 自动生成
  models.js     window.AIX_MODELS(大模型速查)                             ← 自动生成
  compare.js    window.AIX_COMPARE(中外对照)                              ← 自动生成
  <模块>/<NN-slug>.js  每课一个文件,调用 AIX.registerLesson({...})        ← 自动生成
tools/          内容生成器(见下),便于持续增补
design/         三轮设计 demo;style-d.html 为选定风格「文档手册」
```

## 路由表(engine.js)

`#/` 首页 · `#/m/<模块id>` 模块页 · `#/l/<模块id>/<slug>` 课时 · `#/timeline` 发展史 · `#/figures` 人物图鉴 · `#/cheatsheet` 大模型速查 · `#/compare` 中外对照 · `#/lab[/<工具>]` 实验室 · `#/terms` 术语表 · `#/book` 收藏本 · `#/search` 搜索 · `#/settings` 设置。

## 如何增补内容(满足"持续加最新内容")

内容是**单一数据源生成**的,不要手改 `content/` 下的自动生成文件。流程:

1. 编辑 `tools/lessons.js`:在对应模块数组里加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, links]`。
   - 术语用 `g('术语id','显示文字')`;术语 id 必须已在 `tools/gen.js` 的 `TERMS` 中定义。
   - 人物用 `fg('人物id','显示文字')`(纯文本,不弹卡);误区用 `pit(...)`;例子用 `ex(...)`。
   - 内联 SVG 只用预设取色类(`f-box/f-box2/f-line/f-arr/f-txt/f-dim/f-hot/f-ok/f-okln/f-inv`),**不写死 #hex**。
2. 新增术语/人物/时间节点/速查行,改 `tools/gen.js` 对应数组。
3. 运行 `node tools/emit.js <本目录绝对路径>`。它会:**校验**(术语是否定义、内部链接是否存在、有无 emoji/写死颜色)→ 生成全部 `content/*` 文件 → 把课时 `<script>` 列表注入 `index.html` 的 `<!--LESSONS-->` 占位(若占位已被替换,需先恢复或手动补脚本行)。

新增**互动工具**:在 `views-lab.js` 里加 `labXxx()` 与 `AIX.views.lab` 分支,并在 `labIndex()` 加卡片;路由 `#/lab/<名>` 已通用支持。

## 验收清单

- `node --check` 全过;`grep -rn "WHS" .` 为空;`content` 内无写死 #hex、无 emoji。
- Node+DOM-shim 冒烟:模块=13、path=课文件数=100、每个 `data-term` 有定义、搜索可命中。
- `python3 -m http.server` + Playwright:各视图渲染、术语弹卡、三个互动工具可操作、深浅主题、移动端抽屉、`↗ 总站`;**0 console error**。
