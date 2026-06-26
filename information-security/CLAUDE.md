# CLAUDE.md · 信息安全通识学习站维护说明

给未来在本目录工作的 AI/人类的速查。本站是「今日得到」合集第 16 站,克隆自 `artificial-intelligence` 站引擎改造而来,设计风格为 **E「极光渐变 × 纵深防御环」**(玻璃拟态 + 渐变强调色)。

## 命名空间与约定

- 全局命名空间:**`ISL`**(InfoSec Literacy)。
- 进度存储:localStorage `isl.progress.v1`。
- 品牌色:紫 `#7c5cff`(总站 tile #16 同色),渐变 `linear-gradient(100deg,#7c5cff,#3b82f6,#22d3ee)`,令牌 `--grad` 在 `main.css`。
- 定位:**通识起步 + 从业/备考倾向**;大白话、一课一个点(≤5 分钟)、不焦虑不夸大;**无 emoji**,且课文正文**不要出现 ✓/✗/☆/⚠ 等 U+2600–27BF 符号、也不要写死 #hex**(emit 会校验报错)。会过时的数字写**量级 + 年份口径(截至 2026 年初)**。
- 课程 schema 只有 `concept / core / pitfalls / links` 四段(无小测)。

## 目录结构

```
index.html                 外壳:移动顶栏 + .app(侧栏#side + 主区#app + 遮罩) + 脚本列表(<!--LESSONS--> 由 emit 注入)
assets/css/main.css        全部样式(风格 E);设计令牌在 :root(浅色)与 :root[data-theme=dark](深色为主调)
assets/js/                 引擎(与 AI 站同构,命名空间 ISL)
  registry/progress/ui/shell/views-home/views-lesson/views-tools/views-lab/engine.js
content/                   ← 全部自动生成,勿手改
  modules.js  ISL.modules(14) + ISL.path(104 课顺序) + ISL.totalLessons
  terms.js    ISL.terms(120 条)
  figures.js  window.ISL_FIGURES(15 人物)
  timeline.js window.ISL_TIMELINE(20 节点,安全大事记)
  models.js   window.ISL_MODELS(威胁速查,复用 MODELS 结构)
  compare.js  window.ISL_COMPARE(法规对照,复用 COMPARE 结构)
  <模块>/<NN-slug>.js  每课一个文件,调用 ISL.registerLesson({...})
tools/                     内容生成器(单一数据源)
  gen.js     MODULES/TERMS/FIGURES/TIMELINE/MODELS(威胁)/COMPARE(法规)
  lessons.js LESSONS:14 模块共 104 课
  emit.js    校验 + 生成 content/* + 注入 index.html
design/                    选型 demo;style-e.html 为选定风格「极光渐变 × 防御环」
```

## 工具页语义复用(与 AI 站不同)

- `timeline` → **安全大事记**;`figures` → **人物图鉴**(密码学/安全先驱)。
- `cheatsheet` → **威胁速查**(MODELS 复用为 [威胁,类别,层面,危害,一句话防御])。
- `compare` → **法规与标准速查**(COMPARE 复用为 [主题,国际,中国])。
- `lab` → 四个**防御导向**实验室:`#/lab/pwd` 口令强度、`#/lab/injection` 提示词注入演练、`#/lab/mcp` MCP 权限可视化、`#/lab/risk` 风险评估。全部纯前端、不联网、不上传输入。

## 路由表(engine.js)

`#/` 首页 · `#/m/<模块>` 模块页 · `#/l/<模块>/<slug>` 课时 · `#/timeline` · `#/figures` · `#/cheatsheet`(威胁速查) · `#/compare`(法规速查) · `#/lab[/<工具>]` · `#/terms` · `#/book` 收藏 · `#/search` · `#/settings`。

## 如何增补内容

内容是**单一数据源生成**,不要手改 `content/`。流程:

1. 编辑 `tools/lessons.js`:在模块数组加 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, links]`。术语用 `g('term-id','显示文字')`,id 必须已在 `tools/gen.js` 的 `TERMS` 定义;误区 `pit(...)`、例子 `ex(...)`。
2. 新增术语/人物/时间节点/威胁行/法规行,改 `tools/gen.js` 对应数组。
3. 运行 `node tools/emit.js "$(pwd)"`(在本目录)。它会校验(术语定义、内部链接、emoji、写死颜色)→ 生成 `content/*` → 注入 `index.html` 的 `<!--LESSONS-->`(若占位已被替换,先恢复或手动补脚本行)。

新增**实验室**:在 `views-lab.js` 加 `labXxx()` 与 `ISL.views.lab` 分支,并在 `labIndex()` 加卡片;路由 `#/lab/<名>` 已通用支持。

## 验收清单

- `node --check` 全过;`grep -rn "AIX" .` 为空;`content` 内无写死 #hex、无 emoji。
- Node+DOM-shim 冒烟:modules=14、path=课文件数=104、每个 `data-term` 有定义、搜索可命中。
- `python3 -m http.server` 点检:各视图渲染、术语弹卡、四个实验室可操作、深浅主题、移动端抽屉、`↗ 总站`;0 console error。
