# 天文与宇宙学习站 · 开发规范(AST · 科普通识)

大白话天文与宇宙站。纯静态、零依赖、离线可用。**引擎与五段式结构克隆自营养与健康站(NH)/地理通识站(GEO),命名空间整体改为 `AST`、localStorage 前缀 `nh.`→`ast.`。这是科普通识站,重尺度感与因果直觉、不背公式、不故弄玄虚。** 「今日得到」合集第 23 站。

## 与 NH / GEO 站的关系

- **引擎完全沿用**:`registry / progress / ui / engine / views-lesson` 与 NH/GEO 逐行同构(仅 `NH`→`AST`、localStorage 前缀 `nh.`→`ast.`)。`tools/build.js` 同构(含 `fml()` 公式块、模块 `en` 字段、helpers `g/ex/pit/fml/qc/qf`)。
- **视觉 = 深空星海(本站新定)**:浅色 = 米白 `--bg:#f6f5f1` + 靛蓝 `--acc:#3b4cca` + 星点底纹;深色 = 深靛紫 `--bg:#0b0a24` + 金琥珀 `--acc:#f5c451`。两套令牌在 `main.css` 顶部 `:root` 与 `[data-theme="dark"]`,accent 随主题切靛蓝/金琥珀。CSS 类前缀 `.gh-*` 沿用(内部命名)。底纹由经纬网改为星点(`radial-gradient` 星点,深色更亮)。
- **首页主图 = 太阳系化**(`views-home.js` 的 `cosmosSVG()`):中心太阳脉动金光,八大行星沿椭圆轨道绕行(水金地火内圈、木土天海外圈,各行星速度不同,内圈快外圈慢),背景星点错峰闪烁。行星用 SMIL `animateMotion` 沿椭圆 `<path>` 绕行,贴合绘制轨道;全部走 `var(--acc/--acc2/--acc-soft)` 令牌随主题切靛蓝/金琥珀,带 `prefers-reduced-motion` 守卫。
- **工具页是 4 个天文计算器**(`views-tools.js`):行星体重秤(各天体表面重力比)、宇宙距离换算(km/AU/ly/pc)、开普勒第三定律(T=√(a³/M))、史瓦西半径(Rs=2GM/c²)。全部本站新写,含大数友好显示 `big()`。每张卡片有进场 + hover 动效。

## 技术架构

- 全局命名空间:`window.AST`;localStorage 前缀 `ast.`(`ast.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别绕晕 · ④ 想一想(quiz,即时判分、**不写错题本**) · ⑤ 接着读。
- 内容即数据:`AST.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(强调块)、`.pit`(别绕晕块)、`.fml`(公式块)、`<table>`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入)
assets/css/main.css        全部样式(深空星海双主题 + 衬线首页 .gh-* + 太阳系动效 + 工具 .calc-*)
assets/js/                 引擎:registry/progress/ui/engine/views-lesson(克隆 NH 改 AST)+ views-home(太阳系 cosmosSVG)/views-tools(4 天文计算器)
content/                   modules.js(13 模块 + AST.path + en)、terms.js(84 条)、<module>/<NN-slug>.js  ← 全部自动生成
tools/build.js             单一数据源(MODULES/TERMS/LESSONS)+ 校验 + 生成 content/* + 注入 index.html
tools/_src/<module>.js     各模块课时块(子代理产出 + 主代理手写,标准化为 9 元素 JSON;由手动注入 build.js)
tools/_smoke.js            DOM-shim 冒烟测试(运行后可删)
```

## 13 模块(85 课)

intro 天文学基础 · solar 太阳系总览 · sun 太阳与恒星光 · planets 行星世界 · earthmoon 地球与月球 · smallbody 小天体与太阳系边缘 · light 光与望远镜 · stars 恒星的演化 · galaxies 星系与银河系 · distance 宇宙距离阶梯 · cosmology 宇宙学 · dark 暗物质与暗能量 · exolife 系外行星与地外生命。

## 四个互动工具(views-tools.js)

`AST.calcPlanetWeight`(地球体重×天体表面重力比→该天体体重,讲清体重是力非质量)、`AST.calcDistance`(数值+单位→km/AU/ly/pc 四向换算,1 AU≈1.496×10⁸ km、1 ly≈9.461×10¹² km、1 pc≈3.086×10¹³ km)、`AST.calcKepler`(半长轴 a + 中心质量 M→周期 T=√(a³/M),AU/太阳质量/年单位)、`AST.calcSchwarzschild`(质量→Rs=2GM/c²,太阳质量≈2.95 km)。辅助 `AST._num/_fix` 与文件内 `crRow/big`。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:

1. 编辑 `tools/build.js`:在 `L.<模块>` 数组加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。**严守定位:concept/core/pitfalls/quiz/links 是固定的第 4/5/6/7/8 个元素。`ex()`/`fml()` 用 `+` 拼进 core 字符串;但 `pit(...)` 必须用 `,` 作为独立的第 6 元素——千万别写成 `core'+pit(...)`(会把 pit 折进 core、并使 quiz 错位)。** 术语 `g('term-id','显示文字')`,id 必须在同文件 `TERMS` 中定义;选择题 `qc(q,opts,answerIdx,explain)`,填空 `qf(q,[answers],explain)`。
2. 新增术语改 `TERMS`。
3. 运行 `node tools/build.js`。它会校验(术语定义、内部链接 `#/l`、`#/m`、emoji)→ 生成全部 `content/*` → 注入 `index.html`。
4. 运行 `node tools/_smoke.js` 冒烟。

注:`tools/_src/*.js` 是各模块课时块的源(标准化为每课 9 元素的 JSON 数组,字符串用 JSON.stringify)。增补课时也可直接在 `build.js` 的 `L.<模块>` 数组里按上式写(支持 `g/ex/pit/fml/qc/qf` 调用),`_src` 仅作分模块编辑之便。

## 内容纪律(天文版)

白话先行再上术语;一课一概念 ≤5 分钟;**重尺度感与因果直觉,不追求参数精确与穷尽**;数值用教学概数(光年≈9.46万亿公里、AU≈1.496亿公里、CMB≈2.7K、宇宙龄≈138亿年);**前沿内容(暗物质、暗能量、暴胀、地外生命)标注其不确定性与争议,给主流共识而非定论**;不故弄玄虚、不"外星人已来"式猎奇、不绝对化;无 emoji、无 ✓/✗ 等特殊符号(build 会校验 `☀-➿` 区段,正文勿用)、无写死 #hex(配色走令牌)。

## 现状

13 模块 / 85 课 / 84 术语,4 个互动工具。`node tools/build.js` 通过(0 报错);`node tools/_smoke.js` DOM-shim 冒烟全过:13 模块、85 课注册、84 术语、path==课文件数==85、术语零 used-but-undefined、85 课五段式 pit(③)齐全、quiz 结构合法、8 类视图 0 报错;四计算器执行无异常(行星体重秤:65kg×木星2.34;距离换算:1 AU;开普勒:a=1/M=1→T=1 年;史瓦西:1 M☉)。
