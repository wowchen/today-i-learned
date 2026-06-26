# CLAUDE.md · 医疗业务与信息化学习站维护说明

给未来在本目录工作的 AI/人类的速查。本站是「今日得到」合集第 15 站,以 `artificial-intelligence/` 的纯静态文档型 SPA 为母本改造而来。

## 命名空间与约定

- 全局命名空间:**`HIT`**。
- 进度存储:localStorage `hit.progress.v1`。
- 视觉:用户选定 **A「临床病历」配色 + C「互联互通蓝图」设计**。主色医疗青绿 `#0f766e`,辅色蓝绿 `#0f5c8a`。
- 文风铁律:大白话、一课一个点(≤5 分钟)、不焦虑不夸大、业务流程/支付/信息系统三线并重;**无 emoji**(仅可用 ☆ ✓ ×)。
- **医疗边界**:仅供学习参考,不构成医疗建议、诊断、治疗、用药、医保申报或合规法律意见;不使用真实患者信息(PHI)。
- **去掉了小测(quiz)**:课程 schema 只有 `concept / core / pitfalls / links` 四段。

## 目录结构

```
index.html                 外壳:移动顶栏 + .app(侧栏#side + 主区#app + 遮罩) + 脚本列表
assets/css/main.css        全部样式;设计令牌在 :root(浅色)与 :root[data-theme=dark]
assets/js/
  registry.js   HIT.lessons / searchIndex / registerLesson / search
  progress.js   HIT.progress():markRead/isRead/收藏/prefs/streak/currentStep/导入导出
  ui.js         HIT.esc / render(清弹卡+注入#app+bindTerms) / showTermCard / icons
  shell.js      HIT.buildShell/renderShell/closeDrawer:侧栏模块树、工具链接、主题/总站、移动抽屉
  views-home.js 首页(hero+stats+模块网格+工具网格+蓝图示意)
  views-lesson.js 课时(四段 + 右栏大纲 + 翻页 + 标记已学;无 quiz)
  views-tools.js 模块页 / 时间轴 / 角色图鉴 / 缩略语速查 / 流程对照 / terms / book / search / settings
  views-lab.js  互动实验室:就诊流程模拟器 / DRG-DIP 教学示意器 / 缩略语速配
  engine.js     hash 路由 + 启动
content/        自动生成内容,不要手改
tools/          内容生成器(gen.js + lessons.js + emit.js)
design/         视觉 demo;用户最终选择 A 配色 + C 设计
```

## 路由表

`#/` 首页 · `#/m/<模块id>` 模块页 · `#/l/<模块id>/<slug>` 课时 · `#/timeline` 时间轴 · `#/figures` 角色/机构图鉴 · `#/cheatsheet` 缩略语速查 · `#/compare` 流程对照 · `#/lab[/<工具>]` 实验室 · `#/terms` 术语表 · `#/book` 收藏本 · `#/search` 搜索 · `#/settings` 设置。

## 如何增补内容

内容是**单一数据源生成**的,不要手改 `content/` 下的自动生成文件。

1. 编辑 `tools/lessons.js`:在对应模块数组里加课。当前使用 `mk(...)` helper 生成 `[slug,title,minutes,keywords,concept,core,pitfalls,links]`。
2. 新增术语/角色/时间节点/缩略语/对照行,改 `tools/gen.js` 对应数组。
3. 运行 `node tools/emit.js <本目录绝对路径>`。它会校验术语、内部链接、emoji、写死颜色,然后生成 `content/*` 并注入 `index.html` 的 `<!--LESSONS-->` 占位。

新增互动工具:在 `views-lab.js` 里加 `labXxx()` 与 `HIT.views.lab` 分支,并在 `labIndex()` 加卡片;路由 `#/lab/<名>` 已通用支持。

## 验收清单

- `node --check` 全过;旧站命名空间残留检查为空。
- `node tools/emit.js <本目录绝对路径>` 通过;content 内无写死 #hex、无 emoji。
- Node+DOM-shim 冒烟:模块=13、path=课文件数=100、每个 `data-term` 有定义、搜索可命中。
- `python3 -m http.server` + Playwright:首页、课程页、术语弹卡、时间轴、角色图鉴、缩略语速查、流程对照、三个互动工具、深浅主题、移动端抽屉、`↗ 总站`;**0 console error**。
