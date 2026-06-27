# CLAUDE.md · 心理学通识学习站维护说明

给未来在本目录工作的 AI/人类的速查。本站是「今日得到」合集第 18 站,克隆自 `artificial-intelligence`(AIX)引擎并改造而来。

## 命名空间与约定

- 全局命名空间:**`PSY`**(原 AI 站为 `AIX`)。
- 进度存储:localStorage `psy.progress.v1`。
- 品牌色:暖玫红 `#c0398a`(总站 tile #18 同色;深色态 `#e472b8`)。
- 文风铁律:大白话、一课一个点(≤5 分钟)、不贴标签不算命不灌鸡汤、讲规律与概率而非"绝对准";**无 emoji**;科普非诊断治疗——涉及心理困扰一律引导寻求专业帮助。
- 课程 schema 四段:`concept / core / pitfalls / links`(**无小测 quiz**)。

## 目录结构

```
index.html                 外壳:移动顶栏 + .app(侧栏#side + 主区#app + 遮罩) + 脚本列表
assets/css/main.css        全部样式;设计令牌在 :root(浅色)与 :root[data-theme=dark]
assets/js/
  registry.js   PSY.lessons / searchIndex / registerLesson / search
  progress.js   PSY.progress():markRead/isRead/收藏/prefs/streak/currentStep/导入导出
  ui.js         PSY.esc / render(清弹卡+注入#app+bindTerms) / showTermCard / icons
  shell.js      PSY.buildShell/renderShell/closeDrawer:侧栏模块树、工具链接、主题/总站、移动抽屉
  views-home.js 首页(hero+stats+模块网格+工具网格)
  views-lesson.js 课时(四段 + 右栏大纲 + 翻页 + 标记已学;无 quiz)
  views-tools.js 模块页 / timeline(心理学大事记) / figures(人物图鉴) / cheatsheet(效应速查) / compare(流派对照) / terms / book / search / settings
  views-lab.js  互动实验室:lab 索引 + stroop / illusion / anchor / serial 四个实验
  engine.js     hash 路由 + 启动;路由表见下
content/
  modules.js    PSY.modules(13) + PSY.path(82 课顺序) + PSY.totalLessons  ← 自动生成
  terms.js      PSY.terms(105 条)                                        ← 自动生成
  figures.js    window.PSY_FIGURES(24 人物)                              ← 自动生成
  timeline.js   window.PSY_TIMELINE(18 节点)                             ← 自动生成
  models.js     window.PSY_MODELS(效应速查,字段复用 name/org/kind/open/note) ← 自动生成
  compare.js    window.PSY_COMPARE(流派对照,字段复用 year/world/china)   ← 自动生成
  <模块>/<NN-slug>.js  每课一个文件,调用 PSY.registerLesson({...})        ← 自动生成
tools/          内容生成器(gen.js 数据 + emit.js 校验/生成)
```

## 字段复用提示(重要)

效应速查与流派对照沿用 AI 站的通用数据结构,字段名未改、语义已重映射:

- **效应速查(MODELS)**:`name`=效应/偏差,`org`=类别,`kind`=一句话,`open`=生活例子,`note`=提醒。
- **流派对照(COMPARE)**:`year`=流派,`world`=核心主张,`china`=代表人物与贡献。

表头文字在 `views-tools.js` 的 `modelTable()` / `compareTable()` 里硬编码,改字段时一并核对。

## 路由表(engine.js)

`#/` 首页 · `#/m/<模块id>` 模块页 · `#/l/<模块id>/<slug>` 课时 · `#/timeline` 心理学大事记 · `#/figures` 人物图鉴 · `#/cheatsheet` 效应速查 · `#/compare` 流派对照 · `#/lab[/<实验>]` 实验室 · `#/terms` 术语表 · `#/book` 收藏本 · `#/search` 搜索 · `#/settings` 设置。

## 如何增补内容

内容是**单一数据源生成**的,不要手改 `content/` 下的自动生成文件。流程:

1. 编辑 `tools/lessons.js`:在对应模块数组加 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, links]`。
   - 术语用 `g('术语id','显示文字')`;术语 id 必须已在 `tools/gen.js` 的 `TERMS` 中定义,且显示文字应与该术语含义一致(emit 只校验 id 存在,不校验文字)。
   - 误区用 `pit(...)`;例子用 `ex(...)`;内部链接用 `#/l/<模块>/<slug>` 或 `#/m/<模块>`,必须指向存在的课/模块。
   - 正文**不写死 #hex、不用 emoji**(emit 会拒绝)。
2. 新增术语/人物/时间节点/速查行,改 `tools/gen.js` 对应数组(FIGURES/TIMELINE 的关联课 id 必须存在)。
3. 运行 `node tools/emit.js "$(pwd)"`(在本目录下)。它会:**校验** → 生成全部 `content/*` → 把课时 `<script>` 注入 `index.html` 的 `<!--LESSONS-->` 占位(占位已被替换时需手动补脚本行或恢复占位)。

新增**互动实验**:在 `views-lab.js` 加 `labXxx()` 与 `PSY.views.lab` 的 sub 分支,并在 `labIndex()` 加卡片;路由 `#/lab/<名>` 已通用支持。注意:**lab 的 JS 不被 emit 校验**,可自由使用 #hex 与符号(实验里确有用到)。

## 验收清单

- `node --check` 全过;`grep -rn "AIX" .` 为空;`content` 内无写死 #hex、无 emoji。
- Node+DOM-shim 冒烟:模块=13、path=课文件数=82、每个 `data-term` 有定义、各视图与四个实验可渲染。
- `python3 -m http.server` 逐页点检:各视图渲染、术语弹卡、四个实验(斯特鲁普/视错觉/锚定/记忆序列)可操作、深浅主题、移动端抽屉、`↗ 总站`;0 console error。
